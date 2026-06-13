"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const DEFAULT_API_BASE_URL = "https://backendgrowl.growlcityrealty.in";
const READ_STORAGE_KEY = "growl_seen_notification_ids_v2";
const DELETED_STORAGE_KEY = "growl_deleted_notification_ids_v2";
const NotificationContext = createContext(null);

function getApiRoot() {
  const raw = (process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE_URL)
    .trim()
    .replace(/\/+$/, "");
  return raw.endsWith("/api") ? raw.replace(/\/api$/, "") : raw;
}

function getApiUrl(path) {
  return `${getApiRoot()}${path.startsWith("/api") ? path : `/api${path}`}`;
}

function getWsBaseUrl() {
  const apiRoot = getApiRoot();
  if (apiRoot.startsWith("https://")) return apiRoot.replace("https://", "wss://");
  if (apiRoot.startsWith("http://")) return apiRoot.replace("http://", "ws://");

  if (typeof window !== "undefined") {
    return window.location.protocol === "https:"
      ? `wss://${window.location.host}`
      : `ws://${window.location.host}`;
  }

  return "";
}

function getStoredToken() {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("authToken") || localStorage.getItem("adminToken") || "";
}

function readStorageSet(key) {
  if (typeof window === "undefined") return new Set();
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return new Set(Array.isArray(value) ? value.map(String) : []);
  } catch {
    return new Set();
  }
}

function saveStorageSet(key, ids) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(Array.from(ids).slice(-1000)));
}

function readSeenIds() {
  return readStorageSet(READ_STORAGE_KEY);
}

function saveSeenIds(ids) {
  saveStorageSet(READ_STORAGE_KEY, ids);
}

function readDeletedIds() {
  return readStorageSet(DELETED_STORAGE_KEY);
}

function saveDeletedIds(ids) {
  saveStorageSet(DELETED_STORAGE_KEY, ids);
}

function getNotificationIdentity(item) {
  return String(item?.notification_id || item?.id || "");
}

function getStatusId(item) {
  return item?.user_notification_id || item?.notification_status_id || item?.status_id || "";
}

function isSeen(item) {
  const notificationId = getNotificationIdentity(item);
  return notificationId ? readSeenIds().has(notificationId) : false;
}

function isDeleted(item) {
  const notificationId = getNotificationIdentity(item);
  return Boolean(item?.is_deleted) || (notificationId ? readDeletedIds().has(notificationId) : false);
}

function absoluteMediaUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return `${getApiRoot()}${url.startsWith("/") ? url : `/${url}`}`;
}

async function apiGet(path) {
  const token = getStoredToken();
  const response = await fetch(getApiUrl(path), {
    method: "GET",
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`GET ${path} failed with ${response.status}`);
  return response.json();
}

async function apiPost(path, body = {}) {
  const token = getStoredToken();
  const response = await fetch(getApiUrl(path), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) throw new Error(`POST ${path} failed with ${response.status}`);
  return response.json().catch(() => ({}));
}

function normalizeNotification(item) {
  const notificationId = item.notification_id || item.id;
  const clientSeen = notificationId ? readSeenIds().has(String(notificationId)) : false;

  return {
    id: item.id || item.user_notification_id || item.notification_status_id || notificationId,
    notification_id: notificationId,
    user_notification_id: item.user_notification_id || item.notification_status_id || item.status_id || null,
    title: item.title || "Notification",
    message: item.message || "",
    notification_type: item.notification_type || "general",
    image: absoluteMediaUrl(item.image || item.image_url || ""),
    video: absoluteMediaUrl(item.video || item.video_url || ""),
    is_read: Boolean(item.is_read || clientSeen),
    is_deleted: Boolean(item.is_deleted),
    read_at: item.read_at || null,
    deleted_at: item.deleted_at || null,
    delivered_at: item.delivered_at || item.created_at || null,
    created_at: item.created_at || item.delivered_at || null,
    is_public: Boolean(item.is_public),
  };
}

function isSameNotification(a, b) {
  if (!a || !b) return false;

  const aId = a.notification_id || a.id;
  const bId = b.notification_id || b.id;
  if (aId && bId) return String(aId) === String(bId);

  return String(a.title || "") === String(b.title || "") && String(a.message || "") === String(b.message || "");
}

export function NotificationProvider({ children }) {
  const socketRef = useRef(null);
  const reconnectTimerRef = useRef(null);
  const popupTimerRef = useRef(null);
  const pollingRef = useRef(null);
  const firstLoadRef = useRef(true);
  const notificationsRef = useRef([]);

  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [latestPopup, setLatestPopup] = useState(null);
  const [loading, setLoading] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);
  const [previewMedia, setPreviewMedia] = useState(null);

  const setNotificationState = useCallback((items) => {
    notificationsRef.current = items;
    setNotifications(items);
  }, []);

  const calculateUnread = useCallback((items, serverUnreadCount) => {
    if (!getStoredToken()) return items.filter((item) => !item.is_read && !isDeleted(item)).length;
    if (serverUnreadCount !== undefined && serverUnreadCount !== null) {
      return Math.min(Number(serverUnreadCount || 0), items.filter((item) => !item.is_read && !isDeleted(item)).length);
    }
    return items.filter((item) => !item.is_read && !isDeleted(item)).length;
  }, []);

  const markRead = useCallback(
    async (itemOrId) => {
      const item = typeof itemOrId === "object"
        ? itemOrId
        : notificationsRef.current.find((notification) => String(notification.id) === String(itemOrId));

      if (!item) return;

      const notificationId = getNotificationIdentity(item);
      const statusId = getStatusId(item);

      if (notificationId) {
        const nextSeenIds = readSeenIds();
        nextSeenIds.add(notificationId);
        saveSeenIds(nextSeenIds);
      }

      const nextItems = notificationsRef.current.map((notification) =>
        getNotificationIdentity(notification) === notificationId
          ? { ...notification, is_read: true, read_at: notification.read_at || new Date().toISOString() }
          : notification
      );
      setNotificationState(nextItems);
      setUnreadCount(calculateUnread(nextItems));

      const token = getStoredToken();
      if (!token || !statusId) return;

      try {
        const data = await apiPost(`/notifications/mark-read/${statusId}/`, {});
        if (data?.unread_count !== undefined) {
          setUnreadCount((prev) => Math.min(prev, Number(data.unread_count || 0)));
        }
      } catch (error) {
        console.error("Mark read error:", error);
      }
    },
    [calculateUnread, setNotificationState]
  );

  const deleteNotification = useCallback(
    async (itemOrId) => {
      const item = typeof itemOrId === "object"
        ? itemOrId
        : notificationsRef.current.find((notification) => String(notification.id) === String(itemOrId));

      if (!item) return;

      const notificationId = getNotificationIdentity(item);
      const statusId = getStatusId(item) || notificationId;
      if (!notificationId) return;

      const nextDeletedIds = readDeletedIds();
      nextDeletedIds.add(notificationId);
      saveDeletedIds(nextDeletedIds);

      const nextSeenIds = readSeenIds();
      nextSeenIds.add(notificationId);
      saveSeenIds(nextSeenIds);

      const nextItems = notificationsRef.current.filter(
        (notification) => getNotificationIdentity(notification) !== notificationId
      );
      setNotificationState(nextItems);
      setUnreadCount(calculateUnread(nextItems));

      if (latestPopup && getNotificationIdentity(latestPopup) === notificationId) {
        setLatestPopup(null);
      }

      const token = getStoredToken();
      if (!token || !statusId) return;

      try {
        const data = await apiPost(`/notifications/delete/${statusId}/`, {});
        if (data?.unread_count !== undefined) {
          setUnreadCount((prev) => Math.min(prev, Number(data.unread_count || 0)));
        }
      } catch (error) {
        console.error("Delete notification error:", error);
      }
    },
    [calculateUnread, latestPopup, setNotificationState]
  );

  const closePopup = useCallback(() => {
    if (latestPopup) markRead(latestPopup);
    setLatestPopup(null);
  }, [latestPopup, markRead]);

  const showPopup = useCallback(
    (data) => {
      if (!data?.title && !data?.message && !data?.image && !data?.video) return;
      if (data.is_read || isSeen(data) || isDeleted(data)) return;

      setLatestPopup(data);

      // Popup dekhne ke baad repeat popup nahi aayega.
      window.setTimeout(() => {
        markRead(data);
      }, 1200);

      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
      popupTimerRef.current = setTimeout(() => setLatestPopup(null), 6500);
    },
    [markRead]
  );

  const loadNotifications = useCallback(
    async (showNewPopup = false) => {
      try {
        setLoading(true);

        const oldNotifications = notificationsRef.current;
        const data = await apiGet("/notifications/my/");
        const nextNotifications = Array.isArray(data.notifications)
          ? data.notifications.map(normalizeNotification).filter((item) => !isDeleted(item))
          : [];

        if (showNewPopup && !firstLoadRef.current && nextNotifications.length > 0) {
          const latestUnread = nextNotifications.find((item) => !item.is_read && !isSeen(item) && !isDeleted(item));

          if (latestUnread) {
            const alreadyExists = oldNotifications.some((oldItem) => isSameNotification(oldItem, latestUnread));
            if (!alreadyExists) showPopup(latestUnread);
          }
        }

        setNotificationState(nextNotifications);
        setUnreadCount(calculateUnread(nextNotifications, data.unread_count));
        firstLoadRef.current = false;
      } catch (error) {
        console.error("Notification load error:", error);
      } finally {
        setLoading(false);
      }
    },
    [calculateUnread, setNotificationState, showPopup]
  );

  const handleIncomingSocketData = useCallback(
    (data) => {
      if (!data) return;

      if (data.unread_count !== undefined) setUnreadCount(Number(data.unread_count || 0));

      if (data.action === "notification_deleted") {
        const notificationId = String(data.notification_id || "");
        if (notificationId) {
          const nextDeletedIds = readDeletedIds();
          nextDeletedIds.add(notificationId);
          saveDeletedIds(nextDeletedIds);

          const nextItems = notificationsRef.current.filter(
            (item) => getNotificationIdentity(item) !== notificationId
          );
          setNotificationState(nextItems);
          setUnreadCount(calculateUnread(nextItems, data.unread_count));
        }
        return;
      }

      if (data.action === "read_status_updated" || data.action === "all_read") {
        loadNotifications(false);
        return;
      }

      if (data.title || data.message || data.image || data.video) {
        const newItem = normalizeNotification({
          id: data.user_notification_id || data.notification_status_id || data.id,
          user_notification_id: data.user_notification_id || data.notification_status_id || data.id,
          notification_id: data.notification_id,
          title: data.title,
          message: data.message,
          notification_type: data.notification_type,
          image: data.image,
          video: data.video,
          created_at: data.created_at,
          delivered_at: data.created_at,
          is_read: false,
        });

        if (isDeleted(newItem)) return;

        const exists = notificationsRef.current.some((item) => isSameNotification(item, newItem));
        if (!exists) {
          const nextItems = [newItem, ...notificationsRef.current];
          setNotificationState(nextItems);
        }

        showPopup(newItem);
      }
    },
    [calculateUnread, loadNotifications, setNotificationState, showPopup]
  );

  const connectSocket = useCallback(() => {
    const token = getStoredToken();

    if (!token || typeof window === "undefined") return;

    if (socketRef.current) {
      try {
        socketRef.current.close();
      } catch {}
      socketRef.current = null;
    }

    const wsUrl = `${getWsBaseUrl()}/ws/notifications/?token=${encodeURIComponent(token)}`;

    try {
      const socket = new WebSocket(wsUrl);
      socketRef.current = socket;

      socket.onopen = () => setSocketConnected(true);

      socket.onmessage = (event) => {
        try {
          handleIncomingSocketData(JSON.parse(event.data));
        } catch (error) {
          console.error("Notification socket parse error:", error);
        }
      };

      socket.onerror = (error) => console.error("Notification WebSocket error:", error);

      socket.onclose = () => {
        setSocketConnected(false);
        if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
        if (getStoredToken()) {
          reconnectTimerRef.current = setTimeout(connectSocket, 7000);
        }
      };
    } catch (error) {
      console.error("Notification WebSocket init error:", error);
    }
  }, [handleIncomingSocketData]);

  const markAllRead = useCallback(async () => {
    const nextSeenIds = readSeenIds();
    notificationsRef.current.forEach((item) => {
      const notificationId = getNotificationIdentity(item);
      if (notificationId) nextSeenIds.add(notificationId);
    });
    saveSeenIds(nextSeenIds);

    const nextItems = notificationsRef.current.map((item) => ({
      ...item,
      is_read: true,
      read_at: item.read_at || new Date().toISOString(),
    }));
    setNotificationState(nextItems);
    setUnreadCount(0);

    if (!getStoredToken()) return;

    try {
      const data = await apiPost("/notifications/mark-all-read/", {});
      if (data?.unread_count !== undefined) setUnreadCount(Number(data.unread_count || 0));
    } catch (error) {
      console.error("Mark all read error:", error);
    }
  }, [setNotificationState]);

  const openPreview = useCallback(
    (event, item, type) => {
      event.preventDefault();
      event.stopPropagation();
      markRead(item);
      setPreviewMedia({
        type,
        url: type === "video" ? item.video : item.image,
        title: item.title || "Notification",
      });
    },
    [markRead]
  );

  useEffect(() => {
    loadNotifications(false);
    connectSocket();

    pollingRef.current = setInterval(() => loadNotifications(true), 30000);

    const handleFocus = () => loadNotifications(true);
    const handleAuthChange = () => {
      loadNotifications(false);
      connectSocket();
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("authStatusChanged", handleAuthChange);
    window.addEventListener("notificationRefresh", handleAuthChange);
    window.addEventListener("storage", handleAuthChange);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("authStatusChanged", handleAuthChange);
      window.removeEventListener("notificationRefresh", handleAuthChange);
      window.removeEventListener("storage", handleAuthChange);

      if (socketRef.current) {
        try {
          socketRef.current.close();
        } catch {}
      }
      if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [connectSocket, loadNotifications]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        latestPopup,
        loading,
        socketConnected,
        loadNotifications,
        markRead,
        markAllRead,
        deleteNotification,
        closePopup,
      }}
    >
      {children}
      <NotificationToast openPreview={openPreview} deleteNotification={deleteNotification} />

      {previewMedia ? (
        <div className="growl-toast-preview" onClick={() => setPreviewMedia(null)}>
          <div className="growl-toast-preview-box" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="growl-toast-preview-close" onClick={() => setPreviewMedia(null)} aria-label="Close preview">×</button>
            <h5>{previewMedia.title}</h5>
            {previewMedia.type === "video" ? (
              <video src={previewMedia.url} controls autoPlay className="growl-toast-preview-video" />
            ) : (
              <img src={previewMedia.url} alt={previewMedia.title} className="growl-toast-preview-image" />
            )}
          </div>
        </div>
      ) : null}

      <style jsx global>{`
        .growl-toast-preview {
          position: fixed !important;
          inset: 0 !important;
          background: rgba(15, 23, 42, 0.78) !important;
          z-index: 2147483647 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 22px !important;
        }

        .growl-toast-preview-box {
          width: min(920px, 96vw) !important;
          max-height: 92vh !important;
          background: #ffffff !important;
          border-radius: 20px !important;
          padding: 16px !important;
          position: relative !important;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.35) !important;
        }

        .growl-toast-preview-box h5 {
          margin: 0 44px 12px 0 !important;
          color: #111827 !important;
          font-size: 16px !important;
          font-weight: 900 !important;
        }

        .growl-toast-preview-close {
          position: absolute !important;
          top: 10px !important;
          right: 12px !important;
          width: 34px !important;
          height: 34px !important;
          border: 0 !important;
          border-radius: 50% !important;
          background: #111827 !important;
          color: #ffffff !important;
          font-size: 24px !important;
          line-height: 1 !important;
          cursor: pointer !important;
        }

        .growl-toast-preview-image,
        .growl-toast-preview-video {
          display: block !important;
          width: 100% !important;
          max-height: calc(92vh - 92px) !important;
          object-fit: contain !important;
          border-radius: 14px !important;
          background: #f3f4f6 !important;
        }
      `}</style>
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    return {
      notifications: [],
      unreadCount: 0,
      latestPopup: null,
      loading: false,
      socketConnected: false,
      loadNotifications: () => {},
      markRead: () => {},
      markAllRead: () => {},
      deleteNotification: () => {},
      closePopup: () => {},
    };
  }
  return context;
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 17H9M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 16 3 16H21C21 16 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NotificationToast({ openPreview, deleteNotification }) {
  const { latestPopup, closePopup } = useNotifications();
  if (!latestPopup) return null;

  return (
    <>
      <div className="growl-notification-toast">
        <button type="button" className="growl-toast-close" onClick={closePopup} aria-label="Close notification">×</button>
        <button
          type="button"
          className="growl-toast-delete"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            deleteNotification(latestPopup);
          }}
          aria-label="Delete notification"
          title="Delete notification"
        >
          Delete
        </button>

        <div className="growl-toast-icon"><BellIcon /></div>

        <div className="growl-toast-content">
          <span>New Notification</span>
          <h5>{latestPopup.title}</h5>
          {latestPopup.message ? <p>{latestPopup.message}</p> : null}
          {latestPopup.image ? (
            <button
              type="button"
              className="growl-toast-media-btn"
              onClick={(event) => openPreview(event, latestPopup, "image")}
            >
              <img className="growl-toast-media" src={latestPopup.image} alt={latestPopup.title || "Notification"} />
              <small>Click to view image</small>
            </button>
          ) : null}
          {latestPopup.video ? (
            <div className="growl-toast-video-wrap">
              <video className="growl-toast-media" src={latestPopup.video} controls preload="metadata" />
              <button type="button" onClick={(event) => openPreview(event, latestPopup, "video")}>Open video</button>
            </div>
          ) : null}
        </div>
      </div>

      <style jsx global>{`
        .growl-notification-toast {
          position: fixed !important;
          right: 24px !important;
          top: 96px !important;
          width: min(410px, calc(100vw - 28px)) !important;
          background: #ffffff !important;
          color: #111827 !important;
          border-radius: 20px !important;
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.26) !important;
          border: 1px solid rgba(229, 231, 235, 0.9) !important;
          z-index: 2147483647 !important;
          display: flex !important;
          align-items: flex-start !important;
          gap: 14px !important;
          padding: 16px 42px 16px 16px !important;
          animation: growlToastIn 0.35s ease both !important;
          pointer-events: auto !important;
        }

        .growl-toast-close {
          position: absolute !important;
          right: 12px !important;
          top: 9px !important;
          border: 0 !important;
          background: transparent !important;
          color: #6b7280 !important;
          font-size: 24px !important;
          line-height: 1 !important;
          cursor: pointer !important;
          padding: 0 !important;
        }

        .growl-toast-delete {
          position: absolute !important;
          right: 40px !important;
          top: 11px !important;
          border: 1px solid #fee2e2 !important;
          background: #ffffff !important;
          color: #ef4444 !important;
          border-radius: 999px !important;
          padding: 4px 8px !important;
          font-size: 10px !important;
          font-weight: 900 !important;
          cursor: pointer !important;
        }

        .growl-toast-icon {
          width: 44px !important;
          height: 44px !important;
          border-radius: 15px !important;
          background: linear-gradient(135deg, #ff7a1a, #ff6a00) !important;
          color: #ffffff !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex: 0 0 auto !important;
          box-shadow: 0 10px 24px rgba(255, 122, 26, 0.3) !important;
        }

        .growl-toast-content { min-width: 0 !important; width: 100% !important; }

        .growl-toast-content span {
          display: block !important;
          color: #ff6a00 !important;
          font-size: 11px !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.04em !important;
          margin-bottom: 4px !important;
        }

        .growl-toast-content h5 {
          margin: 0 0 5px !important;
          font-size: 15px !important;
          line-height: 1.25 !important;
          font-weight: 900 !important;
          color: #111827 !important;
        }

        .growl-toast-content p {
          margin: 0 !important;
          font-size: 13px !important;
          line-height: 1.45 !important;
          color: #4b5563 !important;
        }

        .growl-toast-media-btn {
          display: block !important;
          width: 100% !important;
          border: 0 !important;
          background: transparent !important;
          padding: 0 !important;
          margin: 10px 0 0 !important;
          cursor: zoom-in !important;
          text-align: left !important;
        }

        .growl-toast-media-btn small {
          display: inline-flex !important;
          margin-top: 5px !important;
          color: #ff6a00 !important;
          font-size: 10.5px !important;
          font-weight: 900 !important;
        }

        .growl-toast-media {
          display: block !important;
          width: 100% !important;
          max-height: 190px !important;
          object-fit: cover !important;
          margin-top: 10px !important;
          border-radius: 14px !important;
          border: 1px solid #eef2f7 !important;
          background: #f3f4f6 !important;
        }

        .growl-toast-video-wrap button {
          margin-top: 6px !important;
          border: 0 !important;
          background: #fff7ed !important;
          color: #ff6a00 !important;
          border-radius: 999px !important;
          padding: 6px 10px !important;
          font-size: 10.5px !important;
          font-weight: 900 !important;
          cursor: pointer !important;
        }

        @keyframes growlToastIn {
          from { opacity: 0; transform: translateY(-12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 575px) {
          .growl-notification-toast {
            right: 12px !important;
            left: 12px !important;
            top: 82px !important;
            width: auto !important;
            border-radius: 18px !important;
          }
        }
      `}</style>
    </>
  );
}
