// "use client";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";

// export default function SettingsHandler() {
//   const pathname = usePathname();
//   const [isDark, setIsDark] = useState(false);
//   const [isRtl, setIsRtl] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   // Optional: Sync state with localStorage on component mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("isDark");
//     if (savedTheme) {
//       setIsDark(JSON.parse(savedTheme));
//     }
//     const savedDir = localStorage.getItem("isRtl");
//     if (savedDir) {
//       setIsRtl(JSON.parse(savedDir));
//     }
//   }, []);
//   // Initialize state with false (unchecked)

//   // Handle checkbox change event
//   const handleCheckboxChange = () => {
//     const newIsDark = !isDark; // Toggle the state
//     setIsDark(newIsDark); // Toggle the state
//     localStorage.setItem("isDark", JSON.stringify(newIsDark)); // Save to localStorage
//   };
//   useEffect(() => {
//     if (isDark) {
//       document.body.classList.add("dark-theme");
//     } else {
//       document.body.classList.remove("dark-theme");
//     }
//   }, [isDark]);

//   useEffect(() => {
//     // Select all elements with the data-dark attribute
//     const elements = document.querySelectorAll("[data-dark]");

//     // Iterate over the NodeList
//     elements.forEach((element) => {
//       // Get the value of the data-dark attribute
//       const srcValueDark = element.getAttribute("data-dark");
//       const srcValueLight = element.getAttribute("data-light");

//       if (isDark) {
//         element.src = srcValueDark;
//       } else {
//         element.src = srcValueLight;
//       }
//     });
//   }, [pathname, isDark]);

//   const handleRtlChange = () => {
//     const newIsRtl = !isRtl; // Toggle the state
//     setIsRtl(newIsRtl); // Update state
//     localStorage.setItem("isRtl", JSON.stringify(newIsRtl)); // Save to localStorage
//   };

//   useEffect(() => {
//     document.dir = isRtl ? "rtl" : "ltr";
//     if (isRtl) {
//       document.body.classList.add("rtl");
//     } else {
//       document.body.classList.remove("rtl");
//     }
//   }, [isRtl]);

//   return (
//     <div className={`popup-setting ${isOpen ? "show" : ""}`}>
//       <div className="btn-setting" onClick={() => setIsOpen((pre) => !pre)}>
//         <a className="sw-click">
//           <i className="icon-settings" />
//         </a>
//       </div>
//       <div className="popup-setting-container">
//         <div className="btn-RTL mb-20">
//           <span className="title text-1 fw-5 text-color-heading mb-8">
//             RTL:
//           </span>
//           <a
//             id="toggle-rtl"
//             className="btn-style-2 radius-3"
//             onClick={() => handleRtlChange()}
//           >
//             {isRtl ? "ltr" : "rtl"}
//           </a>
//         </div>
//         <div className="toggle-container">
//           <span className="title text-1 fw-5 text-color-heading mb-8">
//             Theme Mode:
//           </span>
//           <div className="toggle-switch">
//             <label className="switch-label">
//               <input
//                 type="checkbox"
//                 className="checkbox"
//                 id="theme-toggle"
//                 checked={isDark} // Bind the checked state to the input
//                 onChange={handleCheckboxChange} // Handle changes
//               />
//               <span className="slider" />
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }













"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function SettingsHandler() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDark");
    if (savedTheme) setIsDark(JSON.parse(savedTheme));
    const savedDir = localStorage.getItem("isRtl");
    if (savedDir) setIsRtl(JSON.parse(savedDir));
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCheckboxChange = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("isDark", JSON.stringify(newIsDark));
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDark]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-dark]");
    elements.forEach((element) => {
      const srcValueDark = element.getAttribute("data-dark");
      const srcValueLight = element.getAttribute("data-light");
      element.src = isDark ? srcValueDark : srcValueLight;
    });
  }, [pathname, isDark]);

  const handleRtlChange = () => {
    const newIsRtl = !isRtl;
    setIsRtl(newIsRtl);
    localStorage.setItem("isRtl", JSON.stringify(newIsRtl));
  };

  useEffect(() => {
    document.dir = isRtl ? "rtl" : "ltr";
    if (isRtl) {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [isRtl]);

  return (
    <>
      <div className="sh-root" data-open={isOpen ? "true" : "false"} ref={wrapperRef}>

        {/* ── Settings Button — fully self-contained styling ── */}
        <button
          className="sh-trigger-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Settings"
        >
          <i className="icon-settings" />
        </button>

        {/* ── Popup Panel ── */}
        <div className="sh-panel">

          {/* RTL */}
          <div className="sh-row">
            <span className="sh-label">RTL:</span>
            <a className="btn-style-2 radius-3 sh-rtl-btn" onClick={handleRtlChange}>
              {isRtl ? "ltr" : "rtl"}
            </a>
          </div>

          {/* Theme Mode */}
          <div className="sh-row">
            <span className="sh-label">Theme Mode:</span>
            <div className="toggle-switch">
              <label className="switch-label">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="theme-toggle"
                  checked={isDark}
                  onChange={handleCheckboxChange}
                />
                <span className="slider" />
              </label>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="sh-quick-section">
            <div className="sh-quick-title">Quick Actions</div>
            <div className="sh-quick-list">

              <a href="tel:+919326183013" className="sh-quick-link">
                <span className="sh-quick-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V20C22 20.55 21.55 21 21 21C11.06 21 3 12.94 3 3C3 2.45 3.45 2 4 2H7.09C7.58 2 8 2.35 8.08 2.83L8.8 6.95C8.87 7.35 8.7 7.76 8.37 8L6.58 9.31C7.73 11.68 9.65 13.59 12.01 14.74L13.32 12.95C13.56 12.62 13.97 12.45 14.37 12.52L18.49 13.24C18.97 13.32 19.32 13.74 19.32 14.23V17.32C19.32 17.87 18.87 18.32 18.32 18.32"
                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="sh-quick-text">Give A Missed Call</span>
              </a>

              <a href="/contact" className="sh-quick-link">
                <span className="sh-quick-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11V6.5C9 5.67 9.67 5 10.5 5C11.33 5 12 5.67 12 6.5V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M12 12V4.5C12 3.67 12.67 3 13.5 3C14.33 3 15 3.67 15 4.5V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M15 12V7.5C15 6.67 15.67 6 16.5 6C17.33 6 18 6.67 18 7.5V14C18 18.42 15.42 21 11.5 21H10C7.24 21 5 18.76 5 16V12.5C5 11.67 5.67 11 6.5 11C7.33 11 8 11.67 8 12.5V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="sh-quick-text">Apply Online</span>
              </a>

              <a href="https://wa.me/919326183013" target="_blank" rel="noreferrer" className="sh-quick-link">
                <span className="sh-quick-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.13 20 11C20 14.87 16.42 18 12 18C10.82 18 9.7 17.77 8.69 17.36L5 20L6.1 16.25C4.79 15.11 4 13.61 4 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5 11.5H8.51M12 11.5H12.01M15.5 11.5H15.51" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="sh-quick-text">WhatsApp Chat</span>
              </a>

              <a href="/#loan-calculator" className="sh-quick-link">
                <span className="sh-quick-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M3 11L12 4L21 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 10.5V20H19V10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 20V14H15V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="sh-quick-text">Loan Calculator</span>
              </a>

            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`

        /* ══════════════════════════════════════
           ROOT — fixed to right edge, centered
        ══════════════════════════════════════ */
        .sh-root {
          position: fixed !important;
          right: 0 !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 2147483647 !important;
          display: flex !important;
          align-items: center !important;
          width: auto !important;
          height: auto !important;
          margin: 0 !important;
          padding: 0 !important;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        /* ══════════════════════════════════════
           TRIGGER BUTTON — orange, pill-left shape
           fully self-contained, no external CSS needed
        ══════════════════════════════════════ */
        .sh-trigger-btn {
          position: relative !important;
          z-index: 2 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 46px !important;
          height: 46px !important;
          min-width: 46px !important;
          border-radius: 8px 0 0 8px !important;
          background: #ff7a1a !important;
          border: none !important;
          outline: none !important;
          cursor: pointer !important;
          color: #ffffff !important;
          font-size: 20px !important;
          box-shadow: -4px 0 16px rgba(255, 122, 26, 0.45) !important;
          transition: background 0.22s ease, box-shadow 0.22s ease !important;
          flex-shrink: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          line-height: 1 !important;
        }

        .sh-trigger-btn:hover,
        .sh-root[data-open="true"] .sh-trigger-btn {
          background: #e56a0e !important;
          box-shadow: -4px 0 20px rgba(255, 122, 26, 0.65) !important;
        }

        /* icon inside button */
        .sh-trigger-btn i,
        .sh-trigger-btn .icon-settings {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 20px !important;
          color: #fff !important;
          line-height: 1 !important;
          transition: transform 0.5s ease !important;
        }

        /* spin icon when open */
        .sh-root[data-open="true"] .sh-trigger-btn i,
        .sh-root[data-open="true"] .sh-trigger-btn .icon-settings {
          transform: rotate(90deg) !important;
        }

        /* ══════════════════════════════════════
           PANEL
        ══════════════════════════════════════ */
        .sh-root .sh-panel {
          position: absolute !important;
          top: 50% !important;
          right: 52px !important;
          transform: translateY(-50%) translateX(24px) !important;

          width: 310px !important;
          max-width: calc(100vw - 72px) !important;
          max-height: calc(100vh - 40px) !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          box-sizing: border-box !important;
          padding: 22px !important;

          background: #ffffff !important;
          border-radius: 16px !important;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18) !important;

          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          transition:
            opacity 0.28s ease,
            transform 0.28s ease,
            visibility 0s linear 0.28s !important;
        }

        .sh-root[data-open="true"] .sh-panel {
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
          transform: translateY(-50%) translateX(0) !important;
          transition:
            opacity 0.28s ease,
            transform 0.28s ease,
            visibility 0s linear 0s !important;
        }

        .sh-root .sh-panel::-webkit-scrollbar { width: 4px; }
        .sh-root .sh-panel::-webkit-scrollbar-track { background: transparent; }
        .sh-root .sh-panel::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }

        /* ══════════════════════════════════════
           ROWS (RTL + Theme)
        ══════════════════════════════════════ */
        .sh-root .sh-row {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 14px !important;
          width: 100% !important;
          margin-bottom: 16px !important;
        }

        .sh-root .sh-label {
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #374151 !important;
          white-space: nowrap !important;
        }

        .sh-root .sh-rtl-btn {
          padding: 6px 14px !important;
          border-radius: 8px !important;
          border: 1.5px solid #ff7a1a !important;
          background: transparent !important;
          color: #ff7a1a !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          transition: all 0.2s !important;
          white-space: nowrap !important;
          text-decoration: none !important;
        }

        .sh-root .sh-rtl-btn:hover {
          background: #ff7a1a !important;
          color: #fff !important;
        }

        /* ══════════════════════════════════════
           QUICK ACTIONS
        ══════════════════════════════════════ */
        .sh-root .sh-quick-section {
          margin-top: 18px !important;
          padding-top: 18px !important;
          border-top: 1px solid #f0f0f0 !important;
          width: 100% !important;
        }

        .sh-root .sh-quick-title {
          font-size: 17px !important;
          font-weight: 800 !important;
          color: #111827 !important;
          margin-bottom: 12px !important;
          line-height: 1.3 !important;
        }

        .sh-root .sh-quick-list {
          display: flex !important;
          flex-direction: column !important;
          gap: 10px !important;
          width: 100% !important;
        }

        .sh-root .sh-quick-link {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          width: 100% !important;
          min-height: 64px !important;
          padding: 11px 13px !important;
          border-radius: 14px !important;
          background: #f8fafc !important;
          border: 1px solid #e5e7eb !important;
          text-decoration: none !important;
          color: #0b5fa5 !important;
          box-sizing: border-box !important;
          transition: all 0.22s ease !important;
        }

        .sh-root .sh-quick-link:hover {
          background: #fff4e9 !important;
          border-color: rgba(255, 122, 26, 0.4) !important;
          color: #ff7a1a !important;
          transform: translateX(-2px) !important;
        }

        .sh-root .sh-quick-icon {
          width: 44px !important;
          height: 44px !important;
          min-width: 44px !important;
          border-radius: 50% !important;
          background: #fff !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: inherit !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.09) !important;
          flex-shrink: 0 !important;
        }

        .sh-root .sh-quick-text {
          display: block !important;
          flex: 1 !important;
          font-size: 14px !important;
          font-weight: 800 !important;
          line-height: 1.25 !important;
          color: #111827 !important;
          white-space: normal !important;
          word-break: normal !important;
        }

        .sh-root .sh-quick-link:hover .sh-quick-text {
          color: #ff7a1a !important;
        }

        /* ══════════════════════════════════════
           DARK THEME
        ══════════════════════════════════════ */
        .dark-theme .sh-root .sh-panel {
          background: #1e2535 !important;
          box-shadow: 0 8px 40px rgba(0,0,0,0.5) !important;
        }
        .dark-theme .sh-root .sh-label { color: #d1d5db !important; }
        .dark-theme .sh-root .sh-quick-title { color: #f9fafb !important; }
        .dark-theme .sh-root .sh-quick-section { border-top-color: #2d3748 !important; }
        .dark-theme .sh-root .sh-quick-link {
          background: #252e42 !important;
          border-color: #334155 !important;
          color: #93c5fd !important;
        }
        .dark-theme .sh-root .sh-quick-link:hover {
          background: #2e2010 !important;
          border-color: rgba(255,122,26,0.5) !important;
          color: #ff7a1a !important;
        }
        .dark-theme .sh-root .sh-quick-icon { background: #1a2030 !important; }
        .dark-theme .sh-root .sh-quick-text { color: #d1d5db !important; }
        .dark-theme .sh-root .sh-quick-link:hover .sh-quick-text { color: #ff7a1a !important; }

        /* ══════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════ */
        @media (max-width: 575px) {
          .sh-trigger-btn {
            width: 40px !important;
            height: 40px !important;
            min-width: 40px !important;
            font-size: 18px !important;
          }
          .sh-root .sh-panel {
            width: 255px !important;
            max-width: calc(100vw - 60px) !important;
            right: 46px !important;
            padding: 16px !important;
          }
          .sh-root .sh-quick-link { min-height: 56px !important; padding: 10px 11px !important; }
          .sh-root .sh-quick-icon { width: 38px !important; height: 38px !important; min-width: 38px !important; }
          .sh-root .sh-quick-icon svg { width: 22px !important; height: 22px !important; }
          .sh-root .sh-quick-text { font-size: 13px !important; }
          .sh-root .sh-quick-title { font-size: 15px !important; }
        }

        @media (max-width: 380px) {
          .sh-root .sh-panel {
            width: 238px !important;
            right: 42px !important;
          }
          .sh-root .sh-quick-text { font-size: 12.5px !important; }
          .sh-root .sh-quick-link { padding: 9px 10px !important; }
        }
      `}</style>
    </>
  );
}
