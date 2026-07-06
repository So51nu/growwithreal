// "use client";
// import React, { useEffect, useState } from "react";

// export default function BackToTop() {
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [scrolled, setScrolled] = useState(0);
//   const [scrollHeight, setScrollHeight] = useState(500);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // You can use 'auto' or 'instant' as well
//     });
//   };

//   const handleScroll = () => {
//     const currentScroll =
//       document.body.scrollTop || document.documentElement.scrollTop;
//     setScrolled(currentScroll);
//     setShowScrollTop(window.scrollY >= window.innerHeight);
//     const totalScrollHeight =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;
//     setScrollHeight(totalScrollHeight);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <div
//       className={`progress-wrap ${scrolled > 150 ? "active-progress" : ""}`}
//       onClick={() => scrollToTop()}
//     >
//       <svg
//         className="progress-circle svg-content"
//         width="100%"
//         height="100%"
//         viewBox="-1 -1 102 102"
//       >
//         <path
//           d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
//           style={{
//             transition: "none",
//             strokeDasharray: "307.919, 307.919",
//             strokeDashoffset:
//               307.919 - (scrolled / scrollHeight) * 307.919
//                 ? 307.919 - (scrolled / scrollHeight) * 307.919
//                 : 0,
//           }}
//         />
//       </svg>
//     </div>
//   );
// }





"use client";

import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [scrolled, setScrolled] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const currentScroll =
      document.body.scrollTop || document.documentElement.scrollTop || 0;

    const totalScrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrolled(currentScroll);
    setScrollHeight(totalScrollHeight > 0 ? totalScrollHeight : 1);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const progressOffset =
    307.919 - Math.min(scrolled / scrollHeight, 1) * 307.919;

  return (
    <div
      className={`progress-wrap back-to-top-opposite ${
        scrolled > 150 ? "active-progress" : ""
      }`}
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      aria-label="Scroll to top"
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          scrollToTop();
        }
      }}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
        aria-hidden="true"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "none",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: progressOffset,
          }}
        />
      </svg>

      <span className="back-to-top-arrow" aria-hidden="true">
        ↑
      </span>

      <style jsx global>{`
        .progress-wrap.back-to-top-opposite {
          position: fixed !important;
          left: 24px !important;
          right: auto !important;
          bottom: 26px !important;
          width: 48px !important;
          height: 48px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: #062c47 !important;
          border: 2px solid #ffffff !important;
          box-shadow: 0 16px 35px rgba(6, 44, 71, 0.35) !important;
          cursor: pointer !important;
          z-index: 2147482600 !important;
          opacity: 0 !important;
          visibility: hidden !important;
          transform: translateY(16px) scale(0.94) !important;
          transition: opacity 0.25s ease, visibility 0.25s ease,
            transform 0.25s ease, box-shadow 0.25s ease !important;
          overflow: hidden !important;
        }

        .progress-wrap.back-to-top-opposite.active-progress {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) scale(1) !important;
        }

        .progress-wrap.back-to-top-opposite:hover {
          transform: translateY(-3px) scale(1) !important;
          box-shadow: 0 20px 42px rgba(6, 44, 71, 0.42) !important;
        }

        .progress-wrap.back-to-top-opposite .progress-circle {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
          transform: rotate(-90deg) !important;
          z-index: 1 !important;
          pointer-events: none !important;
        }

        .progress-wrap.back-to-top-opposite .progress-circle path {
          fill: none !important;
          stroke: #ffc107 !important;
          stroke-width: 5 !important;
          stroke-linecap: round !important;
        }

        .progress-wrap.back-to-top-opposite .back-to-top-arrow {
          position: relative !important;
          z-index: 2 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 100% !important;
          height: 100% !important;
          color: #ffffff !important;
          font-size: 26px !important;
          line-height: 1 !important;
          font-weight: 400 !important;
          pointer-events: none !important;
          transform: translateY(-1px) !important;
        }

        @media (max-width: 991px) {
          .progress-wrap.back-to-top-opposite {
            left: 18px !important;
            right: auto !important;
            bottom: 22px !important;
            width: 44px !important;
            height: 44px !important;
          }

          .progress-wrap.back-to-top-opposite .back-to-top-arrow {
            font-size: 24px !important;
          }
        }

        @media (max-width: 420px) {
          .progress-wrap.back-to-top-opposite {
            left: 16px !important;
            bottom: 20px !important;
            width: 42px !important;
            height: 42px !important;
          }

          .progress-wrap.back-to-top-opposite .back-to-top-arrow {
            font-size: 23px !important;
          }
        }
      `}</style>
    </div>
  );
}
