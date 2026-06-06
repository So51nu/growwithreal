// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { useNotifications } from "@/components/common/NotificationProvider";

// function BellSvg() {
//   return (
//     <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//       <path
//         d="M15 17H9M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 16 3 16H21C21 16 18 15 18 8Z"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function formatDate(value) {
//   if (!value) return "";

//   try {
//     return new Date(value).toLocaleString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   } catch {
//     return "";
//   }
// }

// export default function NotificationBell() {
//   const wrapperRef = useRef(null);

//   const {
//     notifications,
//     unreadCount,
//     loading,
//     socketConnected,
//     markRead,
//     markAllRead,
//     loadNotifications,
//   } = useNotifications();

//   const [open, setOpen] = useState(false);
//   const [hasToken, setHasToken] = useState(false);
//   const [loadedOnce, setLoadedOnce] = useState(false);

//   useEffect(() => {
//     const checkToken = () => {
//       if (typeof window === "undefined") return;
//       setHasToken(Boolean(localStorage.getItem("authToken")));
//     };

//     checkToken();

//     window.addEventListener("focus", checkToken);
//     window.addEventListener("storage", checkToken);

//     return () => {
//       window.removeEventListener("focus", checkToken);
//       window.removeEventListener("storage", checkToken);
//     };
//   }, []);

//   useEffect(() => {
//     const handleDocumentMouseDown = (event) => {
//       if (!wrapperRef.current) return;

//       if (!wrapperRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleDocumentMouseDown);

//     return () => {
//       document.removeEventListener("mousedown", handleDocumentMouseDown);
//     };
//   }, []);

//   const handleToggle = (event) => {
//     event.preventDefault();
//     event.stopPropagation();

//     setOpen((prev) => {
//       const nextState = !prev;

//       if (nextState && !loadedOnce) {
//         setLoadedOnce(true);
//         setTimeout(() => {
//           loadNotifications(false);
//         }, 80);
//       }

//       return nextState;
//     });
//   };

//   const handleDropdownClick = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   if (!hasToken) return null;

//   const visibleNotifications = notifications.slice(0, 10);

//   return (
//     <>
//       <div
//         className="growl-notification-wrapper"
//         ref={wrapperRef}
//         onMouseDown={(e) => e.stopPropagation()}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           type="button"
//           className={`growl-notification-btn ${open ? "active" : ""}`}
//           onClick={handleToggle}
//           aria-label="Notifications"
//         >
//           <BellSvg />

//           {unreadCount > 0 ? (
//             <span className="growl-notification-count">
//               {unreadCount > 99 ? "99+" : unreadCount}
//             </span>
//           ) : null}
//         </button>

//         {open ? (
//           <div
//             className="growl-notification-dropdown"
//             onMouseDown={handleDropdownClick}
//             onClick={handleDropdownClick}
//           >
//             <div className="growl-notification-head">
//               <div>
//                 <h4>Notifications</h4>
//                 <p>
//                   {unreadCount} unread •{" "}
//                   {socketConnected ? "Realtime connected" : "Checking updates"}
//                 </p>
//               </div>

//               {unreadCount > 0 ? (
//                 <button
//                   type="button"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     markAllRead();
//                   }}
//                 >
//                   Mark all read
//                 </button>
//               ) : null}
//             </div>

//             <div className="growl-notification-list">
//               {loading ? (
//                 <div className="growl-notification-empty">Loading...</div>
//               ) : visibleNotifications.length > 0 ? (
//                 visibleNotifications.map((item, index) => (
//                   <button
//                     type="button"
//                     key={`${item.id || item.notification_id || index}`}
//                     className={`growl-notification-item ${
//                       item.is_read ? "read" : "unread"
//                     }`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();

//                       if (!item.is_read && item.id) {
//                         markRead(item.id);
//                       }
//                     }}
//                   >
//                     <span className="growl-notification-dot" />

//                     <span className="growl-notification-text">
//                       <strong>{item.title || "Notification"}</strong>
//                       <small>{item.message || ""}</small>
//                       <em>{formatDate(item.created_at || item.delivered_at)}</em>
//                     </span>
//                   </button>
//                 ))
//               ) : (
//                 <div className="growl-notification-empty">
//                   No notifications yet.
//                 </div>
//               )}
//             </div>
//           </div>
//         ) : null}
//       </div>

//       <style jsx global>{`
//         .growl-notification-wrapper {
//           position: relative !important;
//           display: inline-flex !important;
//           align-items: center !important;
//           justify-content: center !important;
//           z-index: 999999 !important;
//           flex: 0 0 auto !important;
//           pointer-events: auto !important;
//         }

//         .growl-notification-btn {
//           width: 52px !important;
//           height: 52px !important;
//           min-width: 52px !important;
//           border-radius: 50% !important;
//           border: 1px solid #f2d5c5 !important;
//           background: #ffffff !important;
//           color: #ff6a00 !important;
//           display: inline-flex !important;
//           align-items: center !important;
//           justify-content: center !important;
//           position: relative !important;
//           cursor: pointer !important;
//           padding: 0 !important;
//           margin: 0 !important;
//           box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08) !important;
//           transition: background 0.2s ease, border-color 0.2s ease !important;
//           overflow: visible !important;
//           outline: none !important;
//         }

//         .growl-notification-btn:hover,
//         .growl-notification-btn.active {
//           border-color: #ff7a1a !important;
//           background: #fff7ed !important;
//           color: #ff6a00 !important;
//         }

//         .growl-notification-btn svg {
//           display: block !important;
//           flex: 0 0 auto !important;
//         }

//         .growl-notification-count {
//           position: absolute !important;
//           right: -5px !important;
//           top: -5px !important;
//           min-width: 20px !important;
//           height: 20px !important;
//           padding: 0 5px !important;
//           border-radius: 999px !important;
//           background: #ef4444 !important;
//           color: #ffffff !important;
//           font-size: 10px !important;
//           font-weight: 900 !important;
//           display: flex !important;
//           align-items: center !important;
//           justify-content: center !important;
//           border: 2px solid #ffffff !important;
//           line-height: 1 !important;
//           pointer-events: none !important;
//         }

//         .growl-notification-dropdown {
//           position: absolute !important;
//           right: 0 !important;
//           top: calc(100% + 12px) !important;
//           width: 370px !important;
//           max-width: calc(100vw - 24px) !important;
//           background: #ffffff !important;
//           border-radius: 20px !important;
//           border: 1px solid #e5e7eb !important;
//           box-shadow: 0 24px 70px rgba(15, 23, 42, 0.24) !important;
//           overflow: hidden !important;
//           z-index: 2147483647 !important;
//           animation: growlDropIn 0.16s ease-out both !important;
//           transform-origin: top right !important;
//           pointer-events: auto !important;
//         }

//         @keyframes growlDropIn {
//           from {
//             opacity: 0;
//             transform: translateY(-6px) scale(0.98);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .growl-notification-head {
//           padding: 16px !important;
//           display: flex !important;
//           align-items: flex-start !important;
//           justify-content: space-between !important;
//           gap: 12px !important;
//           border-bottom: 1px solid #f1f5f9 !important;
//           background: linear-gradient(135deg, #fff7ed, #ffffff) !important;
//         }

//         .growl-notification-head h4 {
//           margin: 0 !important;
//           color: #111827 !important;
//           font-size: 16px !important;
//           font-weight: 900 !important;
//           line-height: 1.2 !important;
//         }

//         .growl-notification-head p {
//           margin: 4px 0 0 !important;
//           color: #6b7280 !important;
//           font-size: 12px !important;
//           line-height: 1.3 !important;
//         }

//         .growl-notification-head button {
//           border: 0 !important;
//           background: #111827 !important;
//           color: #ffffff !important;
//           border-radius: 999px !important;
//           padding: 7px 11px !important;
//           font-size: 11px !important;
//           font-weight: 800 !important;
//           cursor: pointer !important;
//           white-space: nowrap !important;
//           flex: 0 0 auto !important;
//         }

//         .growl-notification-list {
//           max-height: 395px !important;
//           overflow-y: auto !important;
//           background: #ffffff !important;
//         }

//         .growl-notification-item {
//           width: 100% !important;
//           border: 0 !important;
//           border-bottom: 1px solid #f1f5f9 !important;
//           background: #ffffff !important;
//           display: flex !important;
//           gap: 10px !important;
//           text-align: left !important;
//           padding: 13px 16px !important;
//           cursor: pointer !important;
//           margin: 0 !important;
//           border-radius: 0 !important;
//         }

//         .growl-notification-item:hover {
//           background: #f9fafb !important;
//         }

//         .growl-notification-item.unread {
//           background: #fff7ed !important;
//         }

//         .growl-notification-dot {
//           width: 8px !important;
//           height: 8px !important;
//           border-radius: 50% !important;
//           background: #ff6a00 !important;
//           margin-top: 6px !important;
//           flex: 0 0 auto !important;
//         }

//         .growl-notification-item.read .growl-notification-dot {
//           background: #d1d5db !important;
//         }

//         .growl-notification-text {
//           display: block !important;
//           min-width: 0 !important;
//           width: 100% !important;
//         }

//         .growl-notification-text strong {
//           display: block !important;
//           color: #111827 !important;
//           font-size: 13px !important;
//           font-weight: 900 !important;
//           line-height: 1.3 !important;
//           margin-bottom: 4px !important;
//           word-break: break-word !important;
//         }

//         .growl-notification-text small {
//           display: -webkit-box !important;
//           color: #4b5563 !important;
//           font-size: 12px !important;
//           line-height: 1.45 !important;
//           -webkit-line-clamp: 2 !important;
//           -webkit-box-orient: vertical !important;
//           overflow: hidden !important;
//           word-break: break-word !important;
//         }

//         .growl-notification-text em {
//           display: block !important;
//           color: #9ca3af !important;
//           font-size: 10.5px !important;
//           font-style: normal !important;
//           margin-top: 5px !important;
//         }

//         .growl-notification-empty {
//           padding: 24px 16px !important;
//           color: #6b7280 !important;
//           font-size: 13px !important;
//           text-align: center !important;
//         }

//         @media (max-width: 991px) {
//           .growl-notification-btn {
//             width: 34px !important;
//             height: 34px !important;
//             min-width: 34px !important;
//             box-shadow: none !important;
//           }

//           .growl-notification-btn svg {
//             width: 16px !important;
//             height: 16px !important;
//           }

//           .growl-notification-count {
//             right: -6px !important;
//             top: -6px !important;
//             min-width: 18px !important;
//             height: 18px !important;
//             font-size: 9px !important;
//           }

//           .growl-notification-dropdown {
//             position: fixed !important;
//             top: 68px !important;
//             left: 12px !important;
//             right: 12px !important;
//             width: auto !important;
//             max-width: none !important;
//             border-radius: 18px !important;
//             transform-origin: top center !important;
//           }

//           .growl-notification-head {
//             padding: 13px 14px !important;
//           }

//           .growl-notification-head h4 {
//             font-size: 15px !important;
//           }

//           .growl-notification-head p {
//             font-size: 11px !important;
//           }

//           .growl-notification-list {
//             max-height: min(410px, calc(100vh - 160px)) !important;
//           }

//           .growl-notification-item {
//             padding: 12px 14px !important;
//           }
//         }

//         @media (max-width: 575px) {
//           .growl-notification-dropdown {
//             top: 66px !important;
//             left: 10px !important;
//             right: 10px !important;
//             border-radius: 16px !important;
//           }

//           .growl-notification-head {
//             gap: 8px !important;
//           }

//           .growl-notification-head button {
//             padding: 7px 9px !important;
//             font-size: 10px !important;
//           }

//           .growl-notification-text strong {
//             font-size: 12.5px !important;
//           }

//           .growl-notification-text small {
//             font-size: 11.5px !important;
//             -webkit-line-clamp: 3 !important;
//           }
//         }

//         @media (max-width: 420px) {
//           .growl-notification-btn {
//             width: 32px !important;
//             height: 32px !important;
//             min-width: 32px !important;
//           }

//           .growl-notification-dropdown {
//             top: 64px !important;
//             left: 8px !important;
//             right: 8px !important;
//           }

//           .growl-notification-head {
//             padding: 12px !important;
//           }

//           .growl-notification-list {
//             max-height: min(390px, calc(100vh - 145px)) !important;
//           }
//         }

//         @media (max-width: 360px) {
//           .growl-notification-btn {
//             width: 30px !important;
//             height: 30px !important;
//             min-width: 30px !important;
//           }

//           .growl-notification-dropdown {
//             top: 62px !important;
//             left: 6px !important;
//             right: 6px !important;
//           }

//           .growl-notification-head {
//             flex-direction: column !important;
//             align-items: flex-start !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }



"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://backendgrowl.growlcityrealty.in";

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

function getAuthToken() {
  if (typeof window === "undefined") return "";

  return (
    localStorage.getItem("authToken") ||
    localStorage.getItem("adminToken") ||
    ""
  );
}

function normalizeNotifications(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.notifications)) return payload.notifications;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.items)) return payload.items;
  return [];
}

function getUnreadCount(payload, items) {
  const value =
    payload?.unread_count ??
    payload?.unreadCount ??
    payload?.count_unread ??
    null;

  if (value !== null && value !== undefined && !Number.isNaN(Number(value))) {
    return Number(value);
  }

  return items.filter((item) => !item.is_read).length;
}

function getNotificationStatusId(item) {
  return item?.user_notification_id || item?.status_id || item?.id || "";
}

function getNotificationKey(item, index) {
  return `${item?.notification_id || item?.id || "notification"}-${item?.user_notification_id || "public"}-${index}`;
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

export default function NotificationBell() {
  const wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [errorText, setErrorText] = useState("");

  const token = useMemo(() => getAuthToken(), [hasToken]);

  const loadNotifications = useCallback(async () => {
    const currentToken = getAuthToken();
    setHasToken(Boolean(currentToken));
    setLoading(true);
    setErrorText("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/notifications/my/`, {
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
      const items = normalizeNotifications(payload);

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

  useEffect(() => {
    loadNotifications();

    const handleAuthRefresh = () => {
      setHasToken(Boolean(getAuthToken()));
      loadNotifications();
    };

    const handleFocus = () => loadNotifications();

    window.addEventListener("authStatusChanged", handleAuthRefresh);
    window.addEventListener("notificationRefresh", handleAuthRefresh);
    window.addEventListener("storage", handleAuthRefresh);
    window.addEventListener("focus", handleFocus);

    const interval = window.setInterval(() => {
      loadNotifications();
    }, 45000);

    return () => {
      window.removeEventListener("authStatusChanged", handleAuthRefresh);
      window.removeEventListener("notificationRefresh", handleAuthRefresh);
      window.removeEventListener("storage", handleAuthRefresh);
      window.removeEventListener("focus", handleFocus);
      window.clearInterval(interval);
    };
  }, [loadNotifications]);

  useEffect(() => {
    const handleDocumentMouseDown = (event) => {
      if (!wrapperRef.current) return;

      if (!wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseDown);
    };
  }, []);

  const markRead = async (item) => {
    const currentToken = getAuthToken();
    const statusId = getNotificationStatusId(item);

    if (!currentToken || !statusId || item.is_read || item.is_public || !item.user_notification_id) {
      return;
    }

    setNotifications((prev) =>
      prev.map((notification) =>
        getNotificationStatusId(notification) === statusId
          ? { ...notification, is_read: true }
          : notification
      )
    );

    setUnreadCount((prev) => Math.max(0, prev - 1));

    try {
      const response = await fetch(`${API_BASE_URL}/api/notifications/mark-read/${statusId}/`, {
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
    } catch (error) {
      console.error("Notification mark read error:", error);
      loadNotifications();
    }
  };

  const markAllRead = async () => {
    const currentToken = getAuthToken();

    if (!currentToken) return;

    setNotifications((prev) =>
      prev.map((item) =>
        item.is_public || !item.user_notification_id ? item : { ...item, is_read: true }
      )
    );
    setUnreadCount(0);

    try {
      const response = await fetch(`${API_BASE_URL}/api/notifications/mark-all-read/`, {
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
    } catch (error) {
      console.error("Notification mark all read error:", error);
      loadNotifications();
    }
  };

  const handleToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setOpen((prev) => !prev);

    if (!open) {
      loadNotifications();
    }
  };

  const handleDropdownClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const visibleNotifications = notifications.slice(0, 10);

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
            onMouseDown={handleDropdownClick}
            onClick={handleDropdownClick}
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

              {hasToken && unreadCount > 0 ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    markAllRead();
                  }}
                >
                  Mark all read
                </button>
              ) : null}
            </div>

            <div className="growl-notification-list">
              {loading ? (
                <div className="growl-notification-empty">Loading...</div>
              ) : errorText ? (
                <div className="growl-notification-empty">{errorText}</div>
              ) : visibleNotifications.length > 0 ? (
                visibleNotifications.map((item, index) => (
                  <button
                    type="button"
                    key={getNotificationKey(item, index)}
                    className={`growl-notification-item ${item.is_read ? "read" : "unread"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      markRead(item);
                    }}
                  >
                    <span className="growl-notification-dot" />

                    <span className="growl-notification-text">
                      <strong>{item.title || "Notification"}</strong>
                      <small>{item.message || ""}</small>
                      <em>{formatDate(item.created_at || item.delivered_at)}</em>
                    </span>
                  </button>
                ))
              ) : (
                <div className="growl-notification-empty">
                  No notifications yet.
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>

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

        .growl-notification-btn svg {
          display: block !important;
          flex: 0 0 auto !important;
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
          width: 370px !important;
          max-width: calc(100vw - 24px) !important;
          background: #ffffff !important;
          border-radius: 20px !important;
          border: 1px solid #e5e7eb !important;
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.24) !important;
          overflow: hidden !important;
          z-index: 2147483647 !important;
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
          max-height: 395px !important;
          overflow-y: auto !important;
          background: #ffffff !important;
        }

        .growl-notification-item {
          width: 100% !important;
          border: 0 !important;
          border-bottom: 1px solid #f1f5f9 !important;
          background: #ffffff !important;
          display: flex !important;
          gap: 10px !important;
          text-align: left !important;
          padding: 13px 16px !important;
          cursor: pointer !important;
          margin: 0 !important;
          border-radius: 0 !important;
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
          display: -webkit-box !important;
          color: #4b5563 !important;
          font-size: 12px !important;
          line-height: 1.45 !important;
          -webkit-line-clamp: 2 !important;
          -webkit-box-orient: vertical !important;
          overflow: hidden !important;
          word-break: break-word !important;
        }

        .growl-notification-text em {
          display: block !important;
          color: #9ca3af !important;
          font-size: 10.5px !important;
          font-style: normal !important;
          margin-top: 5px !important;
        }

        .growl-notification-empty {
          padding: 24px 16px !important;
          color: #6b7280 !important;
          font-size: 13px !important;
          text-align: center !important;
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

          .growl-notification-head {
            padding: 13px 14px !important;
          }

          .growl-notification-head h4 {
            font-size: 15px !important;
          }

          .growl-notification-head p {
            font-size: 11px !important;
          }

          .growl-notification-list {
            max-height: min(410px, calc(100vh - 160px)) !important;
          }

          .growl-notification-item {
            padding: 12px 14px !important;
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
            gap: 8px !important;
          }

          .growl-notification-head button {
            padding: 7px 9px !important;
            font-size: 10px !important;
          }

          .growl-notification-text strong {
            font-size: 12.5px !important;
          }

          .growl-notification-text small {
            font-size: 11.5px !important;
            -webkit-line-clamp: 3 !important;
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

          .growl-notification-head {
            padding: 12px !important;
          }

          .growl-notification-list {
            max-height: min(390px, calc(100vh - 145px)) !important;
          }
        }

        @media (max-width: 360px) {
          .growl-notification-btn {
            width: 30px !important;
            height: 30px !important;
            min-width: 30px !important;
          }

          .growl-notification-dropdown {
            top: 62px !important;
            left: 6px !important;
            right: 6px !important;
          }

          .growl-notification-head {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </>
  );
}
