"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const DEFAULT_API_BASE_URL = "https://backendgrowl.growlcityrealty.in";
const READ_STORAGE_KEY = "growl_seen_notification_ids_v2";
const DELETED_STORAGE_KEY = "growl_deleted_notification_ids_v2";

function getApiRoot() {
  const raw = (process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE_URL)
    .trim()
    .replace(/\/+$/, "");

  return raw.endsWith("/api") ? raw.replace(/\/api$/, "") : raw;
}

function getApiUrl(path) {
  return `${getApiRoot()}/api${path}`;
}

function getAuthToken() {
  if (typeof window === "undefined") return "";
  return (
    localStorage.getItem("authToken") ||
    localStorage.getItem("adminToken") ||
    ""
  );
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
  return (
    item?.user_notification_id ||
    item?.notification_status_id ||
    item?.status_id ||
    ""
  );
}

function absoluteMediaUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return `${getApiRoot()}${url.startsWith("/") ? url : `/${url}`}`;
}

function normalizeNotifications(payload) {
  const rawItems = Array.isArray(payload)
    ? payload
    : payload?.notifications ||
      payload?.results ||
      payload?.data ||
      payload?.items ||
      [];

  return Array.isArray(rawItems)
    ? rawItems.map((item) => ({
        ...item,
        notification_id: item.notification_id || item.id,
        user_notification_id:
          item.user_notification_id ||
          item.notification_status_id ||
          item.status_id ||
          null,
        title: item.title || "Notification",
        message: item.message || "",
        image: absoluteMediaUrl(item.image || item.image_url || ""),
        video: absoluteMediaUrl(item.video || item.video_url || ""),
        is_read: Boolean(item.is_read),
        is_deleted: Boolean(item.is_deleted),
      }))
    : [];
}

function applyClientState(items) {
  const seenIds = readSeenIds();
  const deletedIds = readDeletedIds();

  return items
    .filter((item) => {
      const notificationId = getNotificationIdentity(item);
      return !item.is_deleted && !deletedIds.has(notificationId);
    })
    .map((item) => {
      const notificationId = getNotificationIdentity(item);
      return seenIds.has(notificationId) ? { ...item, is_read: true } : item;
    });
}

function getUnreadCount(payload, items) {
  const localUnreadCount = items.filter((item) => !item.is_read).length;
  const serverCount =
    payload?.unread_count ?? payload?.unreadCount ?? payload?.count_unread;

  if (
    serverCount !== undefined &&
    serverCount !== null &&
    !Number.isNaN(Number(serverCount))
  ) {
    if (!getAuthToken()) return localUnreadCount;
    return Math.min(Number(serverCount), localUnreadCount);
  }

  return localUnreadCount;
}

function formatDate(value) {
  if (!value) return "";

  try {
    return new Date(value).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

function BellSvg() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function MediaPreviewModal({ previewMedia, onClose }) {
  if (!previewMedia || typeof document === "undefined") return null;

  return createPortal(
    <div className="growl-media-preview-overlay" onClick={onClose}>
      <div
        className="growl-media-preview-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="growl-media-preview-header">
          <h5>{previewMedia.title || "Notification"}</h5>

          <button
            type="button"
            className="growl-media-preview-close"
            onClick={onClose}
            aria-label="Close preview"
          >
            ×
          </button>
        </div>

        <div className="growl-media-preview-stage">
          {previewMedia.type === "video" ? (
            <video
              src={previewMedia.url}
              controls
              autoPlay
              className="growl-media-preview-video"
            />
          ) : (
            <img
              src={previewMedia.url}
              alt={previewMedia.title || "Notification"}
              className="growl-media-preview-image"
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function NotificationBell() {
  const wrapperRef = useRef(null);
  const seenTimerRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [previewMedia, setPreviewMedia] = useState(null);

  const updateLocalUnread = useCallback((items) => {
    setUnreadCount(items.filter((item) => !item.is_read).length);
  }, []);

  const loadNotifications = useCallback(async () => {
    const currentToken = getAuthToken();
    setHasToken(Boolean(currentToken));
    setLoading(true);
    setErrorText("");

    try {
      const response = await fetch(getApiUrl("/notifications/my/"), {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...(currentToken ? { Authorization: `Bearer ${currentToken}` } : {}),
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Notification API error ${response.status}`);
      }

      const payload = await response.json();
      const items = applyClientState(normalizeNotifications(payload));

      setNotifications(items);
      setUnreadCount(getUnreadCount(payload, items));
    } catch (error) {
      console.error("Notification load error:", error);
      setNotifications([]);
      setUnreadCount(0);
      setErrorText("Unable to load notifications.");
    } finally {
      setLoading(false);
    }
  }, []);

  const markRead = useCallback(
    async (item) => {
      const notificationId = getNotificationIdentity(item);

      if (!notificationId || item.is_read) return;

      const nextSeenIds = readSeenIds();
      nextSeenIds.add(notificationId);
      saveSeenIds(nextSeenIds);

      setNotifications((prev) => {
        const nextItems = prev.map((notification) =>
          getNotificationIdentity(notification) === notificationId
            ? { ...notification, is_read: true }
            : notification
        );

        updateLocalUnread(nextItems);
        return nextItems;
      });

      const currentToken = getAuthToken();
      const statusId = getStatusId(item);

      if (!currentToken || !statusId) return;

      try {
        const response = await fetch(getApiUrl(`/notifications/mark-read/${statusId}/`), {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Mark read error ${response.status}`);
        }

        const data = await response.json().catch(() => null);

        if (data?.unread_count !== undefined) {
          setUnreadCount((prev) => Math.min(prev, Number(data.unread_count || 0)));
        }
      } catch (error) {
        console.error("Notification mark read error:", error);
      }
    },
    [updateLocalUnread]
  );

  const deleteNotification = useCallback(
    async (item) => {
      const notificationId = getNotificationIdentity(item);
      if (!notificationId) return;

      const deletedIds = readDeletedIds();
      deletedIds.add(notificationId);
      saveDeletedIds(deletedIds);

      const seenIds = readSeenIds();
      seenIds.add(notificationId);
      saveSeenIds(seenIds);

      setNotifications((prev) => {
        const nextItems = prev.filter(
          (notification) => getNotificationIdentity(notification) !== notificationId
        );

        updateLocalUnread(nextItems);
        return nextItems;
      });

      const currentToken = getAuthToken();
      const statusId = getStatusId(item) || notificationId;

      if (!currentToken || !statusId) return;

      try {
        const response = await fetch(getApiUrl(`/notifications/delete/${statusId}/`), {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Delete notification error ${response.status}`);
        }

        const data = await response.json().catch(() => null);

        if (data?.unread_count !== undefined) {
          setUnreadCount((prev) => Math.min(prev, Number(data.unread_count || 0)));
        }
      } catch (error) {
        console.error("Notification delete error:", error);
      }
    },
    [updateLocalUnread]
  );

  const markAllRead = useCallback(async () => {
    const currentToken = getAuthToken();
    const nextSeenIds = readSeenIds();

    notifications.forEach((item) => {
      const notificationId = getNotificationIdentity(item);
      if (notificationId) nextSeenIds.add(notificationId);
    });

    saveSeenIds(nextSeenIds);

    setNotifications((prev) => prev.map((item) => ({ ...item, is_read: true })));
    setUnreadCount(0);

    if (!currentToken) return;

    try {
      const response = await fetch(getApiUrl("/notifications/mark-all-read/"), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Mark all read error ${response.status}`);
      }

      const data = await response.json().catch(() => null);
      if (data?.unread_count !== undefined) {
        setUnreadCount(Number(data.unread_count || 0));
      }
    } catch (error) {
      console.error("Notification mark all read error:", error);
      loadNotifications();
    }
  }, [loadNotifications, notifications]);

  const openPreview = useCallback(
    (event, item, type) => {
      event.preventDefault();
      event.stopPropagation();

      const url = type === "video" ? item.video : item.image;
      if (!url) return;

      markRead(item);
      setOpen(false);

      setPreviewMedia({
        type,
        url,
        title: item.title || "Notification",
      });
    },
    [markRead]
  );

  const closePreview = useCallback(() => {
    setPreviewMedia(null);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    loadNotifications();

    const handleRefresh = () => loadNotifications();

    window.addEventListener("authStatusChanged", handleRefresh);
    window.addEventListener("notificationRefresh", handleRefresh);
    window.addEventListener("storage", handleRefresh);
    window.addEventListener("focus", handleRefresh);

    const interval = window.setInterval(loadNotifications, 45000);

    return () => {
      window.removeEventListener("authStatusChanged", handleRefresh);
      window.removeEventListener("notificationRefresh", handleRefresh);
      window.removeEventListener("storage", handleRefresh);
      window.removeEventListener("focus", handleRefresh);
      window.clearInterval(interval);
    };
  }, [loadNotifications]);

  useEffect(() => {
    const handleDocumentMouseDown = (event) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target)) setOpen(false);
    };

    document.addEventListener("mousedown", handleDocumentMouseDown);
    return () => document.removeEventListener("mousedown", handleDocumentMouseDown);
  }, []);

  useEffect(() => {
    if (!open || loading || notifications.length === 0) return;

    if (seenTimerRef.current) clearTimeout(seenTimerRef.current);

    seenTimerRef.current = window.setTimeout(() => {
      const hasUnread = notifications.some((item) => !item.is_read);
      if (hasUnread) markAllRead();
    }, 900);

    return () => {
      if (seenTimerRef.current) clearTimeout(seenTimerRef.current);
    };
  }, [open, loading, notifications, markAllRead]);

  useEffect(() => {
    if (!previewMedia || typeof document === "undefined") return;

    const html = document.documentElement;
    const body = document.body;

    const oldHtmlOverflow = html.style.overflow;
    const oldBodyOverflow = body.style.overflow;
    const oldBodyPaddingRight = body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePreview();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      html.style.overflow = oldHtmlOverflow;
      body.style.overflow = oldBodyOverflow;
      body.style.paddingRight = oldBodyPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewMedia, closePreview]);

  const handleToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setOpen((prev) => !prev);

    if (!open) {
      loadNotifications();
    }
  };

  return (
    <>
      <div
        className="growl-notification-wrapper"
        ref={wrapperRef}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={`growl-notification-btn ${open ? "active" : ""}`}
          onClick={handleToggle}
          aria-label="Notifications"
        >
          <BellSvg />

          {unreadCount > 0 ? (
            <span className="growl-notification-count">
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          ) : null}
        </button>

        {open ? (
          <div
            className="growl-notification-dropdown"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="growl-notification-head">
              <div>
                <h4>Notifications</h4>
                <p>
                  {hasToken
                    ? `${unreadCount} unread • General + assigned`
                    : "General updates for everyone"}
                </p>
              </div>

              {unreadCount > 0 ? (
                <button type="button" onClick={markAllRead}>
                  Mark all read
                </button>
              ) : null}
            </div>

            <div className="growl-notification-list">
              {loading ? (
                <div className="growl-notification-empty">Loading...</div>
              ) : errorText ? (
                <div className="growl-notification-empty">{errorText}</div>
              ) : notifications.length > 0 ? (
                notifications.map((item, index) => (
                  <div
                    role="button"
                    tabIndex={0}
                    key={`${getNotificationIdentity(item)}-${getStatusId(item) || "public"}-${index}`}
                    className={`growl-notification-item ${item.is_read ? "read" : "unread"}`}
                    onClick={() => markRead(item)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") markRead(item);
                    }}
                  >
                    <span className="growl-notification-dot" />

                    <div className="growl-notification-text">
                      <strong>{item.title || "Notification"}</strong>

                      {item.message ? <small>{item.message}</small> : null}

                      {item.image ? (
                        <button
                          type="button"
                          className="growl-notification-media-btn"
                          onMouseDown={(event) => event.stopPropagation()}
                          onClick={(event) => openPreview(event, item, "image")}
                          aria-label="Open notification image"
                        >
                          <img
                            className="growl-notification-image"
                            src={item.image}
                            alt={item.title || "Notification"}
                          />
                          <span>Click to view image</span>
                        </button>
                      ) : null}

                      {item.video ? (
                        <div
                          className="growl-video-wrap"
                          onMouseDown={(event) => event.stopPropagation()}
                          onClick={(event) => event.stopPropagation()}
                        >
                          <video
                            className="growl-notification-video"
                            src={item.video}
                            controls
                            preload="metadata"
                          />

                          <button
                            type="button"
                            className="growl-video-open"
                            onClick={(event) => openPreview(event, item, "video")}
                          >
                            Open video
                          </button>
                        </div>
                      ) : null}

                      <em>{formatDate(item.created_at || item.delivered_at)}</em>
                    </div>

                    <button
                      type="button"
                      className="growl-notification-delete"
                      onMouseDown={(event) => event.stopPropagation()}
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        deleteNotification(item);
                      }}
                      aria-label="Delete notification"
                      title="Delete notification"
                    >
                      ×
                    </button>
                  </div>
                ))
              ) : (
                <div className="growl-notification-empty">No notifications yet.</div>
              )}
            </div>
          </div>
        ) : null}
      </div>

      {mounted ? (
        <MediaPreviewModal previewMedia={previewMedia} onClose={closePreview} />
      ) : null}

      <style jsx global>{`
        .growl-notification-wrapper {
          position: relative !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          z-index: 999999 !important;
          flex: 0 0 auto !important;
          pointer-events: auto !important;
        }

        .growl-notification-btn {
          width: 52px !important;
          height: 52px !important;
          min-width: 52px !important;
          border-radius: 50% !important;
          border: 1px solid #f2d5c5 !important;
          background: #ffffff !important;
          color: #ff6a00 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          position: relative !important;
          cursor: pointer !important;
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08) !important;
          transition: background 0.2s ease, border-color 0.2s ease !important;
          overflow: visible !important;
          outline: none !important;
        }

        .growl-notification-btn:hover,
        .growl-notification-btn.active {
          border-color: #ff7a1a !important;
          background: #fff7ed !important;
          color: #ff6a00 !important;
        }

        .growl-notification-count {
          position: absolute !important;
          right: -5px !important;
          top: -5px !important;
          min-width: 20px !important;
          height: 20px !important;
          padding: 0 5px !important;
          border-radius: 999px !important;
          background: #ef4444 !important;
          color: #ffffff !important;
          font-size: 10px !important;
          font-weight: 900 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          border: 2px solid #ffffff !important;
          line-height: 1 !important;
          pointer-events: none !important;
        }

        .growl-notification-dropdown {
          position: absolute !important;
          right: 0 !important;
          top: calc(100% + 12px) !important;
          width: 410px !important;
          max-width: calc(100vw - 24px) !important;
          background: #ffffff !important;
          border-radius: 20px !important;
          border: 1px solid #e5e7eb !important;
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.24) !important;
          overflow: hidden !important;
          z-index: 2147483000 !important;
          animation: growlDropIn 0.16s ease-out both !important;
          transform-origin: top right !important;
          pointer-events: auto !important;
        }

        @keyframes growlDropIn {
          from {
            opacity: 0;
            transform: translateY(-6px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .growl-notification-head {
          padding: 16px !important;
          display: flex !important;
          align-items: flex-start !important;
          justify-content: space-between !important;
          gap: 12px !important;
          border-bottom: 1px solid #f1f5f9 !important;
          background: linear-gradient(135deg, #fff7ed, #ffffff) !important;
        }

        .growl-notification-head h4 {
          margin: 0 !important;
          color: #111827 !important;
          font-size: 16px !important;
          font-weight: 900 !important;
          line-height: 1.2 !important;
        }

        .growl-notification-head p {
          margin: 4px 0 0 !important;
          color: #6b7280 !important;
          font-size: 12px !important;
          line-height: 1.3 !important;
        }

        .growl-notification-head button {
          border: 0 !important;
          background: #111827 !important;
          color: #ffffff !important;
          border-radius: 999px !important;
          padding: 7px 11px !important;
          font-size: 11px !important;
          font-weight: 800 !important;
          cursor: pointer !important;
          white-space: nowrap !important;
          flex: 0 0 auto !important;
        }

        .growl-notification-list {
          max-height: min(610px, calc(100vh - 145px)) !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          background: #ffffff !important;
        }

        .growl-notification-item {
          width: 100% !important;
          border-bottom: 1px solid #f1f5f9 !important;
          background: #ffffff !important;
          display: flex !important;
          gap: 10px !important;
          text-align: left !important;
          padding: 13px 46px 13px 16px !important;
          cursor: pointer !important;
          margin: 0 !important;
          border-radius: 0 !important;
          outline: none !important;
          position: relative !important;
          box-sizing: border-box !important;
        }

        .growl-notification-item:hover {
          background: #f9fafb !important;
        }

        .growl-notification-item.unread {
          background: #fff7ed !important;
        }

        .growl-notification-dot {
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          background: #ff6a00 !important;
          margin-top: 6px !important;
          flex: 0 0 auto !important;
        }

        .growl-notification-item.read .growl-notification-dot {
          background: #d1d5db !important;
        }

        .growl-notification-text {
          display: block !important;
          min-width: 0 !important;
          width: 100% !important;
        }

        .growl-notification-text strong {
          display: block !important;
          color: #111827 !important;
          font-size: 13px !important;
          font-weight: 900 !important;
          line-height: 1.3 !important;
          margin-bottom: 4px !important;
          word-break: break-word !important;
        }

        .growl-notification-text small {
          display: block !important;
          color: #4b5563 !important;
          font-size: 12px !important;
          line-height: 1.45 !important;
          word-break: break-word !important;
        }

        .growl-notification-text em {
          display: block !important;
          color: #9ca3af !important;
          font-size: 10.5px !important;
          font-style: normal !important;
          margin-top: 6px !important;
        }

        .growl-notification-media-btn {
          display: block !important;
          width: 100% !important;
          border: 0 !important;
          background: transparent !important;
          padding: 0 !important;
          margin: 10px 0 0 !important;
          cursor: zoom-in !important;
          text-align: left !important;
        }

        .growl-notification-media-btn span {
          display: inline-flex !important;
          margin-top: 5px !important;
          color: #ff6a00 !important;
          font-size: 10.5px !important;
          font-weight: 900 !important;
        }

        .growl-notification-image,
        .growl-notification-video {
          display: block !important;
          width: 100% !important;
          max-height: 210px !important;
          object-fit: cover !important;
          border-radius: 14px !important;
          border: 1px solid #eef2f7 !important;
          background: #f3f4f6 !important;
        }

        .growl-video-wrap {
          display: block !important;
          margin-top: 10px !important;
        }

        .growl-video-open {
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

        .growl-notification-delete {
          position: absolute !important;
          top: 10px !important;
          right: 12px !important;
          width: 26px !important;
          height: 26px !important;
          border: 1px solid #fee2e2 !important;
          border-radius: 50% !important;
          background: #ffffff !important;
          color: #ef4444 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 18px !important;
          line-height: 1 !important;
          font-weight: 900 !important;
          cursor: pointer !important;
          opacity: 0.95 !important;
        }

        .growl-notification-delete:hover {
          background: #fee2e2 !important;
          color: #991b1b !important;
        }

        .growl-notification-empty {
          padding: 24px 16px !important;
          color: #6b7280 !important;
          font-size: 13px !important;
          text-align: center !important;
        }

        .growl-media-preview-overlay {
          position: fixed !important;
          inset: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          height: 100dvh !important;
          background: rgba(15, 23, 42, 0.82) !important;
          z-index: 2147483647 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 28px !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
        }

        .growl-media-preview-modal {
          width: min(920px, 82vw) !important;
          max-width: calc(100vw - 56px) !important;
          height: auto !important;
          max-height: calc(100vh - 56px) !important;
          max-height: calc(100dvh - 56px) !important;
          background: #ffffff !important;
          border-radius: 20px !important;
          padding: 0 !important;
          position: relative !important;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.4) !important;
          display: flex !important;
          flex-direction: column !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
        }

        .growl-media-preview-header {
          height: 58px !important;
          min-height: 58px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 12px !important;
          padding: 0 16px !important;
          border-bottom: 1px solid #eef2f7 !important;
          flex: 0 0 auto !important;
          background: #ffffff !important;
          box-sizing: border-box !important;
        }

        .growl-media-preview-header h5 {
          margin: 0 !important;
          color: #111827 !important;
          font-size: 15px !important;
          font-weight: 900 !important;
          line-height: 1.3 !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
        }

        .growl-media-preview-close {
          width: 34px !important;
          height: 34px !important;
          min-width: 34px !important;
          border: 0 !important;
          border-radius: 50% !important;
          background: #111827 !important;
          color: #ffffff !important;
          font-size: 24px !important;
          line-height: 1 !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 !important;
        }

        .growl-media-preview-stage {
          width: 100% !important;
          height: calc(100vh - 114px) !important;
          height: calc(100dvh - 114px) !important;
          max-height: 620px !important;
          padding: 14px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          overflow: hidden !important;
          background: #f8fafc !important;
          box-sizing: border-box !important;
        }

        .growl-media-preview-image,
        .growl-media-preview-video {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          object-fit: contain !important;
          border-radius: 14px !important;
          background: #f3f4f6 !important;
          margin: 0 auto !important;
        }

        .growl-media-preview-video {
          object-fit: contain !important;
        }

        @media (min-width: 1200px) {
          .growl-media-preview-modal {
            width: min(920px, 76vw) !important;
            max-height: calc(100vh - 80px) !important;
            max-height: calc(100dvh - 80px) !important;
          }

          .growl-media-preview-stage {
            height: calc(100vh - 138px) !important;
            height: calc(100dvh - 138px) !important;
            max-height: 590px !important;
          }
        }

        @media (max-width: 991px) {
          .growl-notification-btn {
            width: 34px !important;
            height: 34px !important;
            min-width: 34px !important;
            box-shadow: none !important;
          }

          .growl-notification-btn svg {
            width: 16px !important;
            height: 16px !important;
          }

          .growl-notification-count {
            right: -6px !important;
            top: -6px !important;
            min-width: 18px !important;
            height: 18px !important;
            font-size: 9px !important;
          }

          .growl-notification-dropdown {
            position: fixed !important;
            top: 68px !important;
            left: 12px !important;
            right: 12px !important;
            width: auto !important;
            max-width: none !important;
            border-radius: 18px !important;
            transform-origin: top center !important;
          }

          .growl-notification-list {
            max-height: min(620px, calc(100vh - 145px)) !important;
            max-height: min(620px, calc(100dvh - 145px)) !important;
          }
        }

        @media (max-width: 575px) {
          .growl-notification-dropdown {
            top: 66px !important;
            left: 10px !important;
            right: 10px !important;
            border-radius: 16px !important;
          }

          .growl-notification-head {
            padding: 13px 14px !important;
            gap: 8px !important;
          }

          .growl-notification-head button {
            padding: 7px 9px !important;
            font-size: 10px !important;
          }

          .growl-notification-item {
            padding: 12px 42px 12px 14px !important;
          }

          .growl-notification-text strong {
            font-size: 12.5px !important;
          }

          .growl-notification-text small {
            font-size: 11.5px !important;
          }

          .growl-media-preview-overlay {
            padding: 10px !important;
          }

          .growl-media-preview-modal {
            width: calc(100vw - 20px) !important;
            max-width: calc(100vw - 20px) !important;
            max-height: calc(100dvh - 20px) !important;
            border-radius: 16px !important;
          }

          .growl-media-preview-header {
            height: 52px !important;
            min-height: 52px !important;
            padding: 0 12px !important;
          }

          .growl-media-preview-header h5 {
            font-size: 13px !important;
          }

          .growl-media-preview-close {
            width: 30px !important;
            height: 30px !important;
            min-width: 30px !important;
            font-size: 22px !important;
          }

          .growl-media-preview-stage {
            height: calc(100dvh - 72px) !important;
            max-height: none !important;
            padding: 10px !important;
          }

          .growl-media-preview-image,
          .growl-media-preview-video {
            border-radius: 12px !important;
          }
        }

        @media (max-width: 420px) {
          .growl-notification-btn {
            width: 32px !important;
            height: 32px !important;
            min-width: 32px !important;
          }

          .growl-notification-dropdown {
            top: 64px !important;
            left: 8px !important;
            right: 8px !important;
          }
        }
      `}</style>
    </>
  );
}