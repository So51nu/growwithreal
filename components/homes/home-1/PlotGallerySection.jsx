"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import p5 from "./p5.jpg";
import p6 from "./p6.jpg";
import p7 from "./p7.jpg";
import p8 from "./p8.jpg";

const plotImages = [
  { id: 1, image: p8, alt: "Plot gallery image 1", className: "plot-large" },
  { id: 2, image: p1, alt: "Plot gallery image 2", className: "" },
  { id: 3, image: p2, alt: "Plot gallery image 3", className: "" },
  { id: 4, image: p3, alt: "Plot gallery image 4", className: "" },
  { id: 5, image: p4, alt: "Plot gallery image 5", className: "" },
  { id: 6, image: p5, alt: "Plot gallery image 6", className: "" },
  { id: 7, image: p6, alt: "Plot gallery image 7", className: "" },
  { id: 8, image: p7, alt: "Plot gallery image 8", className: "" },
];

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 6L18 18M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15 5L8 12L15 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 5L16 12L9 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PlotGallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isModalOpen = activeIndex !== null;
  const activeImage = isModalOpen ? plotImages[activeIndex] : null;

  const openModal = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? plotImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === plotImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className="plot-gallery-section">
      <div className="plot-gallery-container">
        <div className="plot-gallery-head">
          <span>Plot Gallery</span>
          <h2>Explore Premium Plot Views</h2>
        </div>

        <div className="plot-gallery-grid">
          {plotImages.map((item, index) => (
            <button
              type="button"
              className={`plot-gallery-card ${item.className}`}
              key={item.id}
              onClick={() => openModal(index)}
              aria-label={`Open ${item.alt}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 575px) 50vw, (max-width: 991px) 50vw, 33vw"
                className="plot-gallery-img"
                priority={index === 0}
              />

              <div className="plot-card-overlay">
                <span>View Plot</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {isModalOpen && activeImage && (
        <div className="plot-modal" role="dialog" aria-modal="true">
          <div className="plot-modal-backdrop" onClick={closeModal}></div>

          <button
            type="button"
            className="modal-close"
            onClick={closeModal}
            aria-label="Close gallery"
          >
            <CloseIcon />
          </button>

          <div className="plot-modal-content">
            <div className="plot-modal-image-wrap">
              <Image
                src={activeImage.image}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="plot-modal-img"
                priority
              />
            </div>

            <div className="plot-modal-count">
              {activeIndex + 1} / {plotImages.length}
            </div>
          </div>

          <div className="modal-bottom-controls">
            <button
              type="button"
              className="modal-nav"
              onClick={showPrev}
              aria-label="Previous image"
            >
              <ArrowLeftIcon />
            </button>

            <button
              type="button"
              className="modal-nav"
              onClick={showNext}
              aria-label="Next image"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .plot-gallery-section {
          --plot-blue: #033677;
          --plot-yellow: #ffc107;
          --plot-white: #ffffff;

          width: 100%;
          padding: 54px 0;
          background:
            radial-gradient(circle at 8% 10%, rgba(255, 193, 7, 0.16), transparent 26%),
            linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%);
          overflow: hidden;
        }

        .plot-gallery-container {
          width: min(100% - 32px, 1240px);
          margin: 0 auto;
        }

        .plot-gallery-head {
          text-align: center;
          margin-bottom: 28px;
        }

        .plot-gallery-head span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          padding: 8px 15px;
          border-radius: 999px;
          color: var(--plot-blue);
          background: rgba(255, 193, 7, 0.14);
          border: 1px solid rgba(255, 193, 7, 0.45);
          font-size: 12px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .plot-gallery-head h2 {
          margin: 0;
          color: var(--plot-blue);
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .plot-gallery-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr 1fr 1fr;
          grid-template-rows: repeat(2, 190px);
          gap: 16px;
        }

        .plot-gallery-card {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          padding: 0;
          overflow: hidden;
          border-radius: 24px;
          background: var(--plot-white);
          border: 1px solid rgba(3, 54, 119, 0.14);
          box-shadow: 0 18px 48px rgba(3, 54, 119, 0.12);
          cursor: pointer;
          isolation: isolate;
          transition: transform 0.35s ease, box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .plot-gallery-card::before {
          content: "";
          position: absolute;
          inset: 9px;
          border-radius: 18px;
          border: 1px solid rgba(255, 193, 7, 0.3);
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .plot-large {
          grid-row: span 2;
        }

        .plot-gallery-img {
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.55s ease;
          transform: scale(1.01);
        }

        .plot-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 16px;
          background: linear-gradient(
            180deg,
            transparent 42%,
            rgba(3, 54, 119, 0.86) 100%
          );
          opacity: 0;
          z-index: 3;
          transition: opacity 0.35s ease;
        }

        .plot-card-overlay span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 999px;
          color: var(--plot-blue);
          background: var(--plot-yellow);
          font-size: 11px;
          line-height: 1;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          transform: translateY(12px);
          transition: transform 0.35s ease;
        }

        .plot-gallery-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 193, 7, 0.72);
          box-shadow: 0 26px 68px rgba(3, 54, 119, 0.18);
        }

        .plot-gallery-card:hover::before {
          opacity: 1;
        }

        .plot-gallery-card:hover .plot-gallery-img {
          transform: scale(1.09);
        }

        .plot-gallery-card:hover .plot-card-overlay {
          opacity: 1;
        }

        .plot-gallery-card:hover .plot-card-overlay span {
          transform: translateY(0);
        }

        .plot-modal {
          position: fixed;
          inset: 0;
          z-index: 2147483000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 24px 108px;
          isolation: isolate;
        }

        .plot-modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(3, 54, 119, 0.96);
          backdrop-filter: blur(14px);
          z-index: 1;
        }

        .plot-modal-content {
          position: relative;
          z-index: 3;
          width: min(100%, 1120px);
          height: min(64vh, 600px);
          border-radius: 28px;
          overflow: hidden;
          background: #ffffff;
          border: 2px solid var(--plot-yellow);
          box-shadow: 0 32px 95px rgba(0, 0, 0, 0.42);
        }

        .plot-modal-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          background:
            linear-gradient(135deg, rgba(3, 54, 119, 0.06), rgba(255, 193, 7, 0.06)),
            #ffffff;
        }

        .plot-modal-img {
          object-fit: contain;
          object-position: center;
          padding: 14px;
        }

        .plot-modal-count {
          position: absolute;
          left: 50%;
          bottom: 14px;
          transform: translateX(-50%);
          z-index: 4;
          padding: 8px 15px;
          border-radius: 999px;
          background: var(--plot-yellow);
          color: var(--plot-blue);
          font-size: 13px;
          line-height: 1;
          font-weight: 950;
          box-shadow: 0 12px 28px rgba(255, 193, 7, 0.25);
        }

        .modal-close {
          position: fixed;
          top: 22px;
          right: 22px;
          z-index: 2147483002;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          outline: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--plot-blue);
          background: var(--plot-yellow);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.28);
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .modal-close svg {
          width: 23px;
          height: 23px;
        }

        .modal-close:hover {
          background: #ffffff;
          transform: rotate(90deg);
        }

        .modal-bottom-controls {
          position: fixed;
          left: 50%;
          bottom: 28px;
          z-index: 2147483002;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          transform: translateX(-50%);
        }

        .modal-nav {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          outline: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--plot-blue);
          background: var(--plot-yellow);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.28);
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .modal-nav svg {
          width: 24px;
          height: 24px;
        }

        .modal-nav:hover {
          background: #ffffff;
          transform: scale(1.08);
        }

        @media (max-width: 1199px) {
          .plot-gallery-grid {
            grid-template-columns: 1.3fr 1fr 1fr;
            grid-template-rows: repeat(3, 175px);
          }

          .plot-large {
            grid-row: span 2;
          }

          .plot-modal-content {
            width: min(100%, 920px);
            height: min(62vh, 560px);
          }
        }

        @media (max-width: 991px) {
          .plot-gallery-section {
            padding: 46px 0;
          }

          .plot-gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }

          .plot-gallery-card {
            height: 220px;
          }

          .plot-large {
            grid-column: span 2;
            grid-row: auto;
            height: 300px;
          }

          .plot-modal {
            padding: 68px 18px 88px;
          }

          .plot-modal-content {
            width: 100%;
            height: 68vh;
            border-radius: 22px;
          }
        }

        @media (max-width: 575px) {
          .plot-gallery-section {
            padding: 36px 0;
          }

          .plot-gallery-container {
            width: min(100% - 20px, 420px);
          }

          .plot-gallery-head {
            margin-bottom: 22px;
          }

          .plot-gallery-head h2 {
            font-size: 30px;
          }

          .plot-gallery-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .plot-gallery-card {
            height: 145px;
            border-radius: 16px;
          }

          .plot-large {
            height: 210px;
            grid-column: span 2;
          }

          .plot-gallery-card::before {
            inset: 6px;
            border-radius: 12px;
          }

          .plot-card-overlay {
            opacity: 1;
            padding: 10px;
          }

          .plot-card-overlay span {
            padding: 7px 10px;
            font-size: 9.5px;
            transform: none;
          }

          .plot-modal {
            padding: 64px 12px 78px;
          }

          .plot-modal-content {
            width: 100%;
            height: min(66vh, 560px);
            border-radius: 18px;
          }

          .plot-modal-img {
            padding: 10px;
          }

          .modal-close {
            top: 14px;
            right: 14px;
            width: 44px;
            height: 44px;
          }

          .modal-bottom-controls {
            bottom: 18px;
            gap: 18px;
          }

          .modal-nav {
            width: 42px;
            height: 42px;
          }

          .modal-nav svg {
            width: 21px;
            height: 21px;
          }

          .plot-modal-count {
            bottom: 12px;
            font-size: 12px;
          }
        }

        @media (max-width: 380px) {
          .plot-modal {
            padding-left: 10px;
            padding-right: 10px;
          }

          .plot-modal-content {
            height: min(62vh, 500px);
          }

          .modal-close {
            width: 40px;
            height: 40px;
          }

          .modal-nav {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
}