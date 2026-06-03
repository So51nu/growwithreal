"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { apiGet, apiPost } from "@/components/lib/api";

const NotificationContext = createContext(null);

function getApiRoot() {
  const fallback = "https://growlbackend.clickconnectmedia.cloud";
  const raw = (process.env.NEXT_PUBLIC_API_BASE_URL || fallback)
    .trim()
    .replace(/\/+$/, "");

  return raw.endsWith("/api") ? raw.replace(/\/api$/, "") : raw;
}

function getWsBaseUrl() {
  const apiRoot = getApiRoot();

  if (apiRoot.startsWith("https://")) {
    return apiRoot.replace("https://", "wss://");
  }

  if (apiRoot.startsWith("http://")) {
    return apiRoot.replace("http://", "ws://");
  }

  if (typeof window !== "undefined") {
    return window.location.protocol === "https:"
      ? `wss://${window.location.host}`
      : `ws://${window.location.host}`;
  }

  return "";
}

function getStoredToken() {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("authToken") || "";
}

function normalizeNotification(item) {
  return {
    id: item.id || item.user_notification_id || item.notification_status_id,
    notification_id: item.notification_id,
    title: item.title || "",
    message: item.message || "",
    notification_type: item.notification_type || "general",
    is_read: Boolean(item.is_read),
    read_at: item.read_at || null,
    delivered_at: item.delivered_at || item.created_at || null,
    created_at: item.created_at || item.delivered_at || null,
  };
}

function isSameNotification(a, b) {
  if (!a || !b) return false;

  const aId = a.id || a.user_notification_id || a.notification_id;
  const bId = b.id || b.user_notification_id || b.notification_id;

  if (aId && bId) return String(aId) === String(bId);

  return (
    String(a.title || "") === String(b.title || "") &&
    String(a.message || "") === String(b.message || "")
  );
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

  const setNotificationState = useCallback((items) => {
    notificationsRef.current = items;
    setNotifications(items);
  }, []);

  const closePopup = useCallback(() => {
    setLatestPopup(null);
  }, []);

  const showPopup = useCallback((data) => {
    if (!data?.title && !data?.message) return;

    setLatestPopup(data);

    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }

    popupTimerRef.current = setTimeout(() => {
      setLatestPopup(null);
    }, 6500);
  }, []);

  const loadNotifications = useCallback(
    async (showNewPopup = false) => {
      const token = getStoredToken();

      if (!token) {
        setNotificationState([]);
        setUnreadCount(0);
        return;
      }

      try {
        setLoading(true);

        const oldNotifications = notificationsRef.current;
        const data = await apiGet("/notifications/my/");

        const nextNotifications = Array.isArray(data.notifications)
          ? data.notifications.map(normalizeNotification)
          : [];

        const nextUnreadCount = Number(data.unread_count || 0);

        if (
          showNewPopup &&
          !firstLoadRef.current &&
          nextNotifications.length > 0
        ) {
          const latestUnread = nextNotifications.find((item) => !item.is_read);

          if (latestUnread) {
            const alreadyExists = oldNotifications.some((oldItem) =>
              isSameNotification(oldItem, latestUnread)
            );

            if (!alreadyExists) {
              showPopup(latestUnread);
            }
          }
        }

        setNotificationState(nextNotifications);
        setUnreadCount(nextUnreadCount);
        firstLoadRef.current = false;
      } catch (error) {
        console.error("Notification load error:", error);
      } finally {
        setLoading(false);
      }
    },
    [setNotificationState, showPopup]
  );

  const handleIncomingSocketData = useCallback(
    (data) => {
      if (!data) return;

      if (data.unread_count !== undefined) {
        setUnreadCount(Number(data.unread_count || 0));
      }

      if (data.action === "read_status_updated" || data.action === "all_read") {
        loadNotifications(false);
        return;
      }

      if (data.title || data.message) {
        const newItem = normalizeNotification({
          id:
            data.user_notification_id ||
            data.notification_status_id ||
            data.id,
          notification_id: data.notification_id,
          title: data.title,
          message: data.message,
          notification_type: data.notification_type,
          created_at: data.created_at,
          delivered_at: data.created_at,
          is_read: false,
        });

        const exists = notificationsRef.current.some((item) =>
          isSameNotification(item, newItem)
        );

        if (!exists) {
          const nextItems = [newItem, ...notificationsRef.current];
          setNotificationState(nextItems);
        }

        showPopup(newItem);
      }
    },
    [loadNotifications, setNotificationState, showPopup]
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

    const wsBase = getWsBaseUrl();
    const wsUrl = `${wsBase}/ws/notifications/?token=${encodeURIComponent(
      token
    )}`;

    try {
      const socket = new WebSocket(wsUrl);
      socketRef.current = socket;

      socket.onopen = () => {
        setSocketConnected(true);
        console.log("Notification WebSocket connected:", wsUrl);
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          handleIncomingSocketData(data);
        } catch (error) {
          console.error("Notification socket parse error:", error);
        }
      };

      socket.onerror = (error) => {
        console.error("Notification WebSocket error:", error);
      };

      socket.onclose = () => {
        setSocketConnected(false);

        if (reconnectTimerRef.current) {
          clearTimeout(reconnectTimerRef.current);
        }

        const latestToken = getStoredToken();

        if (latestToken) {
          reconnectTimerRef.current = setTimeout(() => {
            connectSocket();
          }, 7000);
        }
      };
    } catch (error) {
      console.error("Notification WebSocket init error:", error);
    }
  }, [handleIncomingSocketData]);

  const markRead = useCallback(async (id) => {
    if (!id) return;

    try {
      const data = await apiPost(`/notifications/mark-read/${id}/`, {});
      setUnreadCount(Number(data.unread_count || 0));

      const nextItems = notificationsRef.current.map((item) =>
        String(item.id) === String(id)
          ? {
              ...item,
              is_read: true,
              read_at: new Date().toISOString(),
            }
          : item
      );

      setNotificationState(nextItems);
    } catch (error) {
      console.error("Mark read error:", error);
    }
  }, [setNotificationState]);

  const markAllRead = useCallback(async () => {
    try {
      const data = await apiPost("/notifications/mark-all-read/", {});
      setUnreadCount(Number(data.unread_count || 0));

      const nextItems = notificationsRef.current.map((item) => ({
        ...item,
        is_read: true,
        read_at: item.read_at || new Date().toISOString(),
      }));

      setNotificationState(nextItems);
    } catch (error) {
      console.error("Mark all read error:", error);
    }
  }, [setNotificationState]);

  useEffect(() => {
    const token = getStoredToken();

    if (!token) return;

    loadNotifications(false);
    connectSocket();

    pollingRef.current = setInterval(() => {
      loadNotifications(true);
    }, 30000);

    const handleFocus = () => {
      loadNotifications(true);
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);

      if (socketRef.current) {
        try {
          socketRef.current.close();
        } catch {}
      }

      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }

      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }

      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }
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
        closePopup,
      }}
    >
      {children}
      <NotificationToast />
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
      closePopup: () => {},
    };
  }

  return context;
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 17H9M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 16 3 16H21C21 16 18 15 18 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NotificationToast() {
  const { latestPopup, closePopup } = useNotifications();

  if (!latestPopup) return null;

  return (
    <>
      <div className="growl-notification-toast">
        <button
          type="button"
          className="growl-toast-close"
          onClick={closePopup}
          aria-label="Close notification"
        >
          ×
        </button>

        <div className="growl-toast-icon">
          <BellIcon />
        </div>

        <div className="growl-toast-content">
          <span>New Notification</span>
          <h5>{latestPopup.title}</h5>
          <p>{latestPopup.message}</p>
        </div>
      </div>

      <style jsx global>{`
        .growl-notification-toast {
          position: fixed !important;
          right: 24px !important;
          top: 96px !important;
          width: min(390px, calc(100vw - 28px)) !important;
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

        @keyframes growlToastIn {
          from {
            opacity: 0;
            transform: translateY(-12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
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