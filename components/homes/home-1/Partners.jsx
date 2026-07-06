// // "use client";
// // import Image from "next/image";
// // import SplitTextAnimation from "@/components/common/SplitTextAnimation";
// // import BrandSlider from "@/components/common/BrandSlider";
// // export default function Partners() {
// //   return (
// //     <section className="section-work-together ">
// //       <div className="wg-partner  tf-spacing-1">
// //         <div className="tf-container">
// //           <div className="row">
// //             <div className="col-12">
// //               <div className="heading-section  text-center mb-48">
// //                 <h2 className="title text_white split-text effect-right">
// //                   <SplitTextAnimation text="Let’s Work Together" />
// //                 </h2>
// //                 <p
// //                   className="text-1 text_white wow animate__fadeInUp animate__animated"
// //                   data-wow-duration="1.5s"
// //                 >
// //                   Thousands of luxury home enthusiasts just like you visit our
// //                   website.
// //                 </p>
// //               </div>
// //               <BrandSlider />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="wg-appraisal ">
// //         <div className="tf-container">
// //           <div className="row">
// //             <div className="col-12">
// //               <div className="content">
// //                 <div className="heading-section mb-30">
// //                   <h2 className="title split-text effect-right">
// //                     <SplitTextAnimation text="Are You Selling Or" />
// //                     <br />
// //                     <SplitTextAnimation text="Renting Your Property?" />
// //                   </h2>
// //                   <p
// //                     className="text-1 split-text split-lines-transform"
// //                     data-wow-duration="1.5s"
// //                   >
// //                     Thousands of luxury home enthusiasts just like you visit our
// //                     website.
// //                   </p>
// //                 </div>
// //                 <a href="#" className="tf-btn bg-color-primary fw-7 pd-11">
// //                   Request your free appraisal
// //                 </a>
// //                 <div
// //                   className="person wow animate__fadeInRight animate__animated"
// //                   data-wow-duration="2s"
// //                 >
// //                   <Image
// //                     alt=""
// //                     src="/images/section/person-1.png"
// //                     width={366}
// //                     height={491}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import BrandSlider from "@/components/common/BrandSlider";

// export default function Partners() {
//   return (
//     <section className="lux-partners-section">
//       <div className="lux-container">
//         <div className="lux-hero-card">
//           <div className="lux-grid"></div>
//           <div className="lux-glow lux-glow-left"></div>
//           <div className="lux-glow lux-glow-right"></div>

//           <div className="lux-skyline" aria-hidden="true">
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>

//           <div className="lux-hero-content">
//             <div className="lux-copy">
//               <span className="lux-badge">Premium Real Estate Partnership</span>

//               <h2 className="lux-title">
//                 Let's Work Together
//                 <span>To Sell, Rent & Showcase Premium Properties</span>
//               </h2>

//               <p className="lux-desc">
//                 Connect with serious buyers, tenants and investors through a
//                 luxury-focused real estate platform designed for premium
//                 property visibility and quality enquiries.
//               </p>

//               <div className="lux-actions">
//                 <a href="#" className="lux-btn lux-btn-primary">
//                   List Your Property
//                   <i>
//                     <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//                       <path d="M5 12H19" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
//                       <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   </i>
//                 </a>
//                 <a href="#" className="lux-btn lux-btn-outline">
//                   Get Free Appraisal
//                 </a>
//               </div>

//               <div className="lux-stats">
//                 <div>
//                   <strong>10K+</strong>
//                   <span>Monthly Reach</span>
//                 </div>
//                 <div>
//                   <strong>500+</strong>
//                   <span>Quality Enquiries</span>
//                 </div>
//                 <div>
//                   <strong>24/7</strong>
//                   <span>Property Visibility</span>
//                 </div>
//               </div>
//             </div>

//             <div className="lux-showcase">
//               <div className="lux-property-card">
//                 <div className="lux-card-head">
//                   <span>Featured Property Value</span>
//                   <strong>Premium Appraisal</strong>
//                 </div>

//                 <div className="lux-building-visual">
//                   <div className="lux-building lux-building-one"></div>
//                   <div className="lux-building lux-building-two"></div>
//                   <div className="lux-building lux-building-three"></div>
//                 </div>

//                 <div className="lux-card-foot">
//                   <div>
//                     <span>Lead Quality</span>
//                     <strong>Verified Interest</strong>
//                   </div>
//                   <em>Active</em>
//                 </div>
//               </div>

//               <div className="lux-floating-cards-row">
//                 <div className="lux-floating-card lux-floating-one">
//                   <span>For Builders</span>
//                   <strong>Project Visibility</strong>
//                 </div>
//                 <div className="lux-floating-card lux-floating-two">
//                   <span>For Owners</span>
//                   <strong>Sell / Rent Faster</strong>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="lux-brand-strip">
//           <div className="lux-brand-title">
//             <span></span>
//             Trusted Real Estate Brands
//           </div>
//           <div className="lux-brand-slider">
//             <BrandSlider />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .lux-partners-section {
//           --blue-dark: #061b3a;
//           --blue: #073974;
//           --yellow: #ffcc33;
//           --yellow-deep: #f5a400;
//           --white: #ffffff;

//           width: 100%;
//           padding: 28px 0 32px;
//           overflow: hidden;
//           background:
//             radial-gradient(circle at 8% 8%, rgba(255, 204, 51, 0.16), transparent 24%),
//             radial-gradient(circle at 92% 0%, rgba(7, 57, 116, 0.14), transparent 26%),
//             linear-gradient(180deg, rgba(255, 204, 51, 0.1), var(--white));
//         }

//         .lux-container {
//           width: min(100% - 32px, 1320px);
//           margin: 0 auto;
//         }

//         .lux-hero-card {
//           position: relative;
//           overflow: hidden;
//           border-radius: 28px;
//           padding: 36px 44px;
//           background:
//             radial-gradient(circle at 78% 18%, rgba(255, 204, 51, 0.2), transparent 34%),
//             linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 55%, var(--blue-dark) 100%);
//           box-shadow: 0 24px 70px rgba(6, 27, 58, 0.24);
//           isolation: isolate;
//         }

//         .lux-hero-card::before {
//           content: "";
//           position: absolute;
//           inset: 1px;
//           border-radius: inherit;
//           border: 1px solid rgba(255, 204, 51, 0.32);
//           pointer-events: none;
//           z-index: 5;
//         }

//         .lux-grid {
//           position: absolute;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
//           background-size: 48px 48px;
//           opacity: 0.5;
//           pointer-events: none;
//           z-index: -3;
//         }

//         .lux-glow {
//           position: absolute;
//           border-radius: 999px;
//           background: rgba(255, 204, 51, 0.18);
//           filter: blur(18px);
//           pointer-events: none;
//           z-index: -2;
//         }

//         .lux-glow-left {
//           width: 220px;
//           height: 220px;
//           left: -90px;
//           bottom: -70px;
//         }

//         .lux-glow-right {
//           width: 360px;
//           height: 360px;
//           right: -140px;
//           top: -140px;
//         }

//         .lux-skyline {
//           position: absolute;
//           right: 34px;
//           bottom: 0;
//           display: flex;
//           align-items: flex-end;
//           gap: 10px;
//           opacity: 0.16;
//           z-index: -1;
//         }

//         .lux-skyline span {
//           position: relative;
//           display: block;
//           width: 52px;
//           border: 1px solid rgba(255, 255, 255, 0.5);
//           background: rgba(255, 255, 255, 0.06);
//         }

//         .lux-skyline span::before {
//           content: "";
//           position: absolute;
//           inset: 14px 9px;
//           background-image:
//             linear-gradient(rgba(255, 255, 255, 0.48) 2px, transparent 2px),
//             linear-gradient(90deg, rgba(255, 255, 255, 0.48) 2px, transparent 2px);
//           background-size: 12px 15px;
//         }

//         .lux-skyline span:nth-child(1) { height: 120px; }
//         .lux-skyline span:nth-child(2) { height: 190px; }
//         .lux-skyline span:nth-child(3) { height: 250px; }
//         .lux-skyline span:nth-child(4) { height: 165px; }
//         .lux-skyline span:nth-child(5) { height: 215px; }

//         .lux-hero-content {
//           position: relative;
//           z-index: 3;
//           display: grid;
//           grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
//           align-items: center;
//           gap: 44px;
//         }

//         .lux-copy {
//           min-width: 0;
//         }

//         .lux-badge {
//           display: inline-flex;
//           align-items: center;
//           width: fit-content;
//           max-width: 100%;
//           padding: 7px 14px;
//           margin-bottom: 14px;
//           border-radius: 999px;
//           border: 1px solid rgba(255, 204, 51, 0.48);
//           background: rgba(255, 204, 51, 0.1);
//           color: var(--yellow);
//           font-size: 10px;
//           font-weight: 900;
//           letter-spacing: 1.2px;
//           line-height: 1.2;
//           text-transform: uppercase;
//         }

//         .lux-title {
//           margin: 0;
//           color: var(--white);
//           font-size: clamp(32px, 3.8vw, 58px);
//           line-height: 1.04;
//           font-weight: 950;
//           letter-spacing: -1.5px;
//         }

//         .lux-title span {
//           display: block;
//           margin-top: 10px;
//           color: var(--yellow);
//           font-size: clamp(18px, 2vw, 28px);
//           line-height: 1.25;
//           font-weight: 850;
//           letter-spacing: -0.4px;
//         }

//         .lux-desc {
//           max-width: 560px;
//           margin: 16px 0 0;
//           color: rgba(255, 255, 255, 0.78);
//           font-size: 14.5px;
//           line-height: 1.7;
//           font-weight: 500;
//         }

//         .lux-actions {
//           display: flex;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 12px;
//           margin-top: 22px;
//         }

//         .lux-btn {
//           min-height: 46px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 999px;
//           text-decoration: none;
//           font-size: 13px;
//           line-height: 1;
//           font-weight: 900;
//           transition: all 0.35s ease;
//           white-space: nowrap;
//         }

//         .lux-btn-primary {
//           gap: 11px;
//           padding: 12px 22px;
//           color: var(--blue-dark);
//           background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow-deep) 100%);
//           box-shadow: 0 14px 34px rgba(245, 164, 0, 0.3);
//         }

//         .lux-btn-primary i {
//           width: 26px;
//           height: 26px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 50%;
//           background: var(--blue-dark);
//           color: var(--yellow);
//           transition: transform 0.35s ease;
//           flex: 0 0 auto;
//         }

//         .lux-btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 18px 42px rgba(245, 164, 0, 0.42);
//         }

//         .lux-btn-primary:hover i {
//           transform: translateX(3px);
//         }

//         .lux-btn-outline {
//           padding: 12px 22px;
//           color: var(--white);
//           background: rgba(255, 255, 255, 0.08);
//           border: 1px solid rgba(255, 255, 255, 0.18);
//         }

//         .lux-btn-outline:hover {
//           color: var(--yellow);
//           border-color: rgba(255, 204, 51, 0.58);
//           background: rgba(255, 204, 51, 0.08);
//         }

//         .lux-stats {
//           display: grid;
//           grid-template-columns: repeat(3, minmax(0, 1fr));
//           gap: 10px;
//           max-width: 520px;
//           margin-top: 22px;
//         }

//         .lux-stats div {
//           min-width: 0;
//           padding: 12px 11px;
//           border-radius: 14px;
//           background: rgba(255, 255, 255, 0.075);
//           border: 1px solid rgba(255, 255, 255, 0.12);
//         }

//         .lux-stats strong {
//           display: block;
//           color: var(--yellow);
//           font-size: 22px;
//           line-height: 1;
//           font-weight: 950;
//           margin-bottom: 5px;
//         }

//         .lux-stats span {
//           display: block;
//           color: rgba(255, 255, 255, 0.74);
//           font-size: 11.5px;
//           line-height: 1.35;
//           font-weight: 700;
//         }

//         /* ── Showcase: property card + floating row ── */
//         .lux-showcase {
//           position: relative;
//           width: 100%;
//           max-width: 400px;
//           margin-left: auto;
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }

//         .lux-property-card {
//           position: relative;
//           width: 100%;
//           padding: 18px;
//           border-radius: 24px;
//           background: rgba(255, 255, 255, 0.12);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           box-shadow: 0 22px 54px rgba(6, 27, 58, 0.34);
//           overflow: hidden;
//         }

//         .lux-property-card::before {
//           content: "";
//           position: absolute;
//           inset: 10px;
//           border-radius: 18px;
//           border: 1px solid rgba(255, 204, 51, 0.28);
//           pointer-events: none;
//         }

//         .lux-card-head,
//         .lux-card-foot {
//           position: relative;
//           z-index: 2;
//         }

//         .lux-card-head span,
//         .lux-card-foot span {
//           display: block;
//           color: rgba(255, 255, 255, 0.64);
//           font-size: 11px;
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: 0.6px;
//           margin-bottom: 4px;
//         }

//         .lux-card-head strong,
//         .lux-card-foot strong {
//           display: block;
//           color: var(--white);
//           font-size: 17px;
//           line-height: 1.25;
//           font-weight: 950;
//         }

//         .lux-building-visual {
//           position: relative;
//           z-index: 2;
//           height: 130px;
//           margin: 16px 0;
//           border-radius: 18px;
//           overflow: hidden;
//           background:
//             radial-gradient(circle at 18% 18%, rgba(255, 204, 51, 0.42), transparent 20%),
//             linear-gradient(180deg, rgba(255, 204, 51, 0.26), rgba(6, 27, 58, 0.44));
//           border: 1px solid rgba(255, 255, 255, 0.13);
//         }

//         .lux-building {
//           position: absolute;
//           bottom: 0;
//           width: 48px;
//           background: linear-gradient(180deg, var(--white), var(--yellow));
//           border-radius: 12px 12px 0 0;
//           opacity: 0.95;
//         }

//         .lux-building::before {
//           content: "";
//           position: absolute;
//           inset: 12px 9px;
//           background-image:
//             linear-gradient(rgba(6, 27, 58, 0.38) 2px, transparent 2px),
//             linear-gradient(90deg, rgba(6, 27, 58, 0.38) 2px, transparent 2px);
//           background-size: 11px 13px;
//         }

//         .lux-building-one  { left: 14%; height: 80px; }
//         .lux-building-two  { left: 39%; height: 110px; }
//         .lux-building-three { left: 66%; height: 92px; }

//         .lux-card-foot {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 12px;
//         }

//         .lux-card-foot em {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding: 6px 11px;
//           border-radius: 999px;
//           background: rgba(255, 204, 51, 0.12);
//           color: var(--yellow);
//           border: 1px solid rgba(255, 204, 51, 0.28);
//           font-size: 11px;
//           font-style: normal;
//           font-weight: 900;
//           flex: 0 0 auto;
//         }

//         /* Floating cards sit BELOW the property card in a row — no overlap */
//         .lux-floating-cards-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 10px;
//         }

//         .lux-floating-card {
//           padding: 13px 15px;
//           border-radius: 16px;
//           background: rgba(255, 255, 255, 0.13);
//           border: 1px solid rgba(255, 255, 255, 0.18);
//           box-shadow: 0 12px 34px rgba(6, 27, 58, 0.22);
//         }

//         .lux-floating-card span {
//           display: block;
//           margin-bottom: 4px;
//           color: rgba(255, 255, 255, 0.66);
//           font-size: 10px;
//           text-transform: uppercase;
//           font-weight: 900;
//           letter-spacing: 0.7px;
//         }

//         .lux-floating-card strong {
//           display: block;
//           color: var(--white);
//           font-size: 14px;
//           line-height: 1.22;
//           font-weight: 950;
//         }

//         .lux-floating-two {
//           background: linear-gradient(135deg, var(--yellow), var(--yellow-deep));
//           border-color: rgba(255, 204, 51, 0.42);
//         }

//         .lux-floating-two span,
//         .lux-floating-two strong {
//           color: var(--blue-dark);
//         }

//         /* Brand strip */
//         .lux-brand-strip {
//           display: grid;
//           grid-template-columns: 260px minmax(0, 1fr);
//           align-items: center;
//           gap: 18px;
//           margin-top: 14px;
//           padding: 14px 20px;
//           border-radius: 20px;
//           background: var(--white);
//           border: 1px solid rgba(7, 57, 116, 0.12);
//           box-shadow: 0 14px 40px rgba(6, 27, 58, 0.07);
//           overflow: hidden;
//         }

//         .lux-brand-title {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           color: var(--blue-dark);
//           font-size: 12px;
//           font-weight: 950;
//           text-transform: uppercase;
//           letter-spacing: 0.7px;
//           line-height: 1.35;
//         }

//         .lux-brand-title span {
//           width: 9px;
//           height: 9px;
//           border-radius: 50%;
//           background: var(--yellow);
//           box-shadow: 0 0 0 6px rgba(255, 204, 51, 0.18);
//           flex: 0 0 auto;
//         }

//         .lux-brand-slider {
//           min-width: 0;
//           width: 100%;
//           overflow: hidden;
//           padding: 3px 0;
//         }

//         .lux-brand-slider :global(.swiper) { width: 100% !important; overflow: hidden !important; }
//         .lux-brand-slider :global(.swiper-wrapper) { align-items: center !important; }
//         .lux-brand-slider :global(.swiper-slide) {
//           height: 64px !important;
//           min-width: 125px !important;
//           display: flex !important;
//           align-items: center !important;
//           justify-content: center !important;
//           overflow: visible !important;
//         }
//         .lux-brand-slider :global(img) {
//           display: block !important;
//           max-height: 46px !important;
//           max-width: 130px !important;
//           width: auto !important;
//           height: auto !important;
//           object-fit: contain !important;
//           filter: none !important;
//           opacity: 1 !important;
//         }

//         /* ── Responsive ── */
//         @media (max-width: 1199px) {
//           .lux-hero-content {
//             grid-template-columns: 1fr;
//             gap: 28px;
//           }
//           .lux-showcase {
//             max-width: 480px;
//             margin: 0 auto;
//           }
//           .lux-copy { text-align: center; }
//           .lux-badge, .lux-actions {
//             margin-left: auto;
//             margin-right: auto;
//             justify-content: center;
//           }
//           .lux-desc, .lux-stats { margin-left: auto; margin-right: auto; }
//         }

//         @media (max-width: 991px) {
//           .lux-partners-section { padding: 22px 0 26px; }
//           .lux-container { width: min(100% - 26px, 920px); }
//           .lux-hero-card { padding: 28px 22px; border-radius: 22px; }
//           .lux-title { font-size: 42px; }
//           .lux-title span { font-size: 22px; }
//           .lux-brand-strip { grid-template-columns: 1fr; text-align: center; gap: 12px; }
//           .lux-brand-title { justify-content: center; }
//         }

//         @media (max-width: 767px) {
//           .lux-container { width: min(100% - 22px, 720px); }
//           .lux-hero-card { padding: 24px 16px; }
//           .lux-title { font-size: 34px; letter-spacing: -0.8px; }
//           .lux-title span { font-size: 19px; margin-top: 8px; }
//           .lux-desc { font-size: 13.5px; }
//           .lux-actions { flex-direction: column; align-items: stretch; }
//           .lux-btn { width: 100%; min-height: 46px; }
//           .lux-stats { grid-template-columns: 1fr; }
//           .lux-stats div { text-align: center; }
//           .lux-skyline { display: none; }
//           .lux-brand-strip { padding: 12px; border-radius: 16px; }
//         }

//         @media (max-width: 420px) {
//           .lux-container { width: min(100% - 18px, 390px); }
//           .lux-hero-card { padding: 20px 12px; border-radius: 18px; }
//           .lux-badge { font-size: 9px; letter-spacing: 0.8px; padding: 6px 11px; }
//           .lux-title { font-size: 28px; }
//           .lux-title span { font-size: 16px; }
//           .lux-floating-cards-row { grid-template-columns: 1fr; }
//           .lux-brand-title { font-size: 10px; }
//           .lux-brand-slider :global(.swiper-slide) { height: 56px !important; min-width: 108px !important; }
//           .lux-brand-slider :global(img) { max-height: 38px !important; max-width: 100px !important; }
//         }
//       `}</style>
//     </section>
//   );
// }






"use client";

import BrandSlider from "@/components/common/BrandSlider";

export default function Partners() {
  return (
    <section className="lux-partners-section">
      <div className="lux-container">
        <div className="lux-hero-card">
          <div className="lux-grid"></div>
          <div className="lux-glow lux-glow-left"></div>
          <div className="lux-glow lux-glow-right"></div>

          <div className="lux-skyline" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="lux-hero-content">
            <div className="lux-copy">
              <span className="lux-badge">Premium Real Estate Partnership</span>

              <h2 className="lux-title">
                Let's Work Together
                <span>To Sell & Showcase Premium Properties</span>
              </h2>

              <p className="lux-desc">
                Connect with serious buyers, tenants and investors through a
                luxury-focused real estate platform designed for premium
                property visibility and quality enquiries.
              </p>

              <div className="lux-actions">
                <a href="/property-gird-top-search" className="lux-btn lux-btn-primary">
                  List Your Property
                  <i>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </i>
                </a>
                <a href="/contact" className="lux-btn lux-btn-outline">
                  Get Free Appraisal
                </a>
              </div>

              <div className="lux-stats">
                <div>
                  <strong>10K+</strong>
                  <span>Monthly Reach</span>
                </div>
                <div>
                  <strong>500+</strong>
                  <span>Quality Enquiries</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Property Visibility</span>
                </div>
              </div>
            </div>

            <div className="lux-showcase">
              <div className="lux-property-card">
                <div className="lux-card-head">
                  <span>Featured Property Value</span>
                  <strong>Premium Appraisal</strong>
                </div>

                <div className="lux-building-visual">
                  <div className="lux-building lux-building-one"></div>
                  <div className="lux-building lux-building-two"></div>
                  <div className="lux-building lux-building-three"></div>
                </div>

                <div className="lux-card-foot">
                  <div>
                    <span>Lead Quality</span>
                    <strong>Verified Interest</strong>
                  </div>
                  <em>Active</em>
                </div>
              </div>

              <div className="lux-floating-cards-row">
                <div className="lux-floating-card lux-floating-one">
                  <span>For Builders</span>
                  <strong>Project Visibility</strong>
                </div>
                <div className="lux-floating-card lux-floating-two">
                  <span>For Owners</span>
                  <strong>Sell</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lux-brand-strip">
          <div className="lux-brand-title">
            <span></span>
            Trusted Real Estate Brands
          </div>
          <div className="lux-brand-slider">
            <BrandSlider />
          </div>
        </div>
      </div>

      <style jsx>{`
        .lux-partners-section {
          --blue-dark: #061b3a;
          --blue: #073974;
          --yellow: #ffcc33;
          --yellow-deep: #f5a400;
          --white: #ffffff;

          width: 100%;
          padding: 28px 0 32px;
          overflow: hidden;
          background:
            radial-gradient(circle at 8% 8%, rgba(255, 204, 51, 0.16), transparent 24%),
            radial-gradient(circle at 92% 0%, rgba(7, 57, 116, 0.14), transparent 26%),
            linear-gradient(180deg, rgba(255, 204, 51, 0.1), var(--white));
        }

        .lux-container {
          width: min(100% - 32px, 1320px);
          margin: 0 auto;
        }

        .lux-hero-card {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          padding: 36px 44px;
          background:
            radial-gradient(circle at 78% 18%, rgba(255, 204, 51, 0.2), transparent 34%),
            linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 55%, var(--blue-dark) 100%);
          box-shadow: 0 24px 70px rgba(6, 27, 58, 0.24);
          isolation: isolate;
        }

        .lux-hero-card::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          border: 1px solid rgba(255, 204, 51, 0.32);
          pointer-events: none;
          z-index: 5;
        }

        .lux-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.5;
          pointer-events: none;
          z-index: -3;
        }

        .lux-glow {
          position: absolute;
          border-radius: 999px;
          background: rgba(255, 204, 51, 0.18);
          filter: blur(18px);
          pointer-events: none;
          z-index: -2;
        }

        .lux-glow-left {
          width: 220px;
          height: 220px;
          left: -90px;
          bottom: -70px;
        }

        .lux-glow-right {
          width: 360px;
          height: 360px;
          right: -140px;
          top: -140px;
        }

        .lux-skyline {
          position: absolute;
          right: 34px;
          bottom: 0;
          display: flex;
          align-items: flex-end;
          gap: 10px;
          opacity: 0.16;
          z-index: -1;
        }

        .lux-skyline span {
          position: relative;
          display: block;
          width: 52px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.06);
        }

        .lux-skyline span::before {
          content: "";
          position: absolute;
          inset: 14px 9px;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.48) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.48) 2px, transparent 2px);
          background-size: 12px 15px;
        }

        .lux-skyline span:nth-child(1) { height: 120px; }
        .lux-skyline span:nth-child(2) { height: 190px; }
        .lux-skyline span:nth-child(3) { height: 250px; }
        .lux-skyline span:nth-child(4) { height: 165px; }
        .lux-skyline span:nth-child(5) { height: 215px; }

        .lux-hero-content {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          align-items: center;
          gap: 44px;
        }

        .lux-copy {
          min-width: 0;
        }

        .lux-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          max-width: 100%;
          padding: 7px 14px;
          margin-bottom: 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 204, 51, 0.48);
          background: rgba(255, 204, 51, 0.1);
          color: var(--yellow);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.2px;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .lux-title {
          margin: 0;
          color: var(--white);
          font-size: clamp(32px, 3.8vw, 58px);
          line-height: 1.04;
          font-weight: 950;
          letter-spacing: -1.5px;
        }

        .lux-title span {
          display: block;
          margin-top: 10px;
          color: var(--yellow);
          font-size: clamp(18px, 2vw, 28px);
          line-height: 1.25;
          font-weight: 850;
          letter-spacing: -0.4px;
        }

        .lux-desc {
          max-width: 560px;
          margin: 16px 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 14.5px;
          line-height: 1.7;
          font-weight: 500;
        }

        .lux-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }

        .lux-btn {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          text-decoration: none;
          font-size: 13px;
          line-height: 1;
          font-weight: 900;
          transition: all 0.35s ease;
          white-space: nowrap;
        }

        .lux-btn-primary {
          gap: 11px;
          padding: 12px 22px;
          color: var(--blue-dark);
          background: linear-gradient(135deg, var(--yellow) 0%, var(--yellow-deep) 100%);
          box-shadow: 0 14px 34px rgba(245, 164, 0, 0.3);
        }

        .lux-btn-primary i {
          width: 26px;
          height: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--blue-dark);
          color: var(--yellow);
          transition: transform 0.35s ease;
          flex: 0 0 auto;
        }

        .lux-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px rgba(245, 164, 0, 0.42);
        }

        .lux-btn-primary:hover i {
          transform: translateX(3px);
        }

        .lux-btn-outline {
          padding: 12px 22px;
          color: var(--white);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .lux-btn-outline:hover {
          color: var(--yellow);
          border-color: rgba(255, 204, 51, 0.58);
          background: rgba(255, 204, 51, 0.08);
        }

        .lux-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          max-width: 520px;
          margin-top: 22px;
        }

        .lux-stats div {
          min-width: 0;
          padding: 12px 11px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.075);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .lux-stats strong {
          display: block;
          color: var(--yellow);
          font-size: 22px;
          line-height: 1;
          font-weight: 950;
          margin-bottom: 5px;
        }

        .lux-stats span {
          display: block;
          color: rgba(255, 255, 255, 0.74);
          font-size: 11.5px;
          line-height: 1.35;
          font-weight: 700;
        }

        /* ── Showcase: property card + floating row ── */
        .lux-showcase {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin-left: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .lux-property-card {
          position: relative;
          width: 100%;
          padding: 18px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 22px 54px rgba(6, 27, 58, 0.34);
          overflow: hidden;
        }

        .lux-property-card::before {
          content: "";
          position: absolute;
          inset: 10px;
          border-radius: 18px;
          border: 1px solid rgba(255, 204, 51, 0.28);
          pointer-events: none;
        }

        .lux-card-head,
        .lux-card-foot {
          position: relative;
          z-index: 2;
        }

        .lux-card-head span,
        .lux-card-foot span {
          display: block;
          color: rgba(255, 255, 255, 0.64);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 4px;
        }

        .lux-card-head strong,
        .lux-card-foot strong {
          display: block;
          color: var(--white);
          font-size: 17px;
          line-height: 1.25;
          font-weight: 950;
        }

        .lux-building-visual {
          position: relative;
          z-index: 2;
          height: 130px;
          margin: 16px 0;
          border-radius: 18px;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 18%, rgba(255, 204, 51, 0.42), transparent 20%),
            linear-gradient(180deg, rgba(255, 204, 51, 0.26), rgba(6, 27, 58, 0.44));
          border: 1px solid rgba(255, 255, 255, 0.13);
        }

        .lux-building {
          position: absolute;
          bottom: 0;
          width: 48px;
          background: linear-gradient(180deg, var(--white), var(--yellow));
          border-radius: 12px 12px 0 0;
          opacity: 0.95;
        }

        .lux-building::before {
          content: "";
          position: absolute;
          inset: 12px 9px;
          background-image:
            linear-gradient(rgba(6, 27, 58, 0.38) 2px, transparent 2px),
            linear-gradient(90deg, rgba(6, 27, 58, 0.38) 2px, transparent 2px);
          background-size: 11px 13px;
        }

        .lux-building-one  { left: 14%; height: 80px; }
        .lux-building-two  { left: 39%; height: 110px; }
        .lux-building-three { left: 66%; height: 92px; }

        .lux-card-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .lux-card-foot em {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 11px;
          border-radius: 999px;
          background: rgba(255, 204, 51, 0.12);
          color: var(--yellow);
          border: 1px solid rgba(255, 204, 51, 0.28);
          font-size: 11px;
          font-style: normal;
          font-weight: 900;
          flex: 0 0 auto;
        }

        /* Floating cards sit BELOW the property card in a row — no overlap */
        .lux-floating-cards-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .lux-floating-card {
          padding: 13px 15px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.13);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 12px 34px rgba(6, 27, 58, 0.22);
        }

        .lux-floating-card span {
          display: block;
          margin-bottom: 4px;
          color: rgba(255, 255, 255, 0.66);
          font-size: 10px;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .lux-floating-card strong {
          display: block;
          color: var(--white);
          font-size: 14px;
          line-height: 1.22;
          font-weight: 950;
        }

        .lux-floating-two {
          background: linear-gradient(135deg, var(--yellow), var(--yellow-deep));
          border-color: rgba(255, 204, 51, 0.42);
        }

        .lux-floating-two span,
        .lux-floating-two strong {
          color: var(--blue-dark);
        }

        /* Brand strip */
        .lux-brand-strip {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          align-items: center;
          gap: 18px;
          margin-top: 14px;
          padding: 14px 20px;
          border-radius: 20px;
          background: var(--white);
          border: 1px solid rgba(7, 57, 116, 0.12);
          box-shadow: 0 14px 40px rgba(6, 27, 58, 0.07);
          overflow: hidden;
        }

        .lux-brand-title {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--blue-dark);
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.7px;
          line-height: 1.35;
        }

        .lux-brand-title span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--yellow);
          box-shadow: 0 0 0 6px rgba(255, 204, 51, 0.18);
          flex: 0 0 auto;
        }

        .lux-brand-slider {
          min-width: 0;
          width: 100%;
          overflow: hidden;
          padding: 3px 0;
        }

        .lux-brand-slider :global(.swiper) { width: 100% !important; overflow: hidden !important; }
        .lux-brand-slider :global(.swiper-wrapper) { align-items: center !important; }
        .lux-brand-slider :global(.swiper-slide) {
          height: 64px !important;
          min-width: 125px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          overflow: visible !important;
        }
        .lux-brand-slider :global(img) {
          display: block !important;
          max-height: 46px !important;
          max-width: 130px !important;
          width: auto !important;
          height: auto !important;
          object-fit: contain !important;
          filter: none !important;
          opacity: 1 !important;
        }

        /* ── Responsive ── */
        @media (max-width: 1199px) {
          .lux-hero-content {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .lux-showcase {
            max-width: 480px;
            margin: 0 auto;
          }
          .lux-copy { text-align: center; }
          .lux-badge, .lux-actions {
            margin-left: auto;
            margin-right: auto;
            justify-content: center;
          }
          .lux-desc, .lux-stats { margin-left: auto; margin-right: auto; }
        }

        @media (max-width: 991px) {
          .lux-partners-section { padding: 22px 0 26px; }
          .lux-container { width: min(100% - 26px, 920px); }
          .lux-hero-card { padding: 28px 22px; border-radius: 22px; }
          .lux-title { font-size: 42px; }
          .lux-title span { font-size: 22px; }
          .lux-brand-strip { grid-template-columns: 1fr; text-align: center; gap: 12px; }
          .lux-brand-title { justify-content: center; }
        }

        @media (max-width: 767px) {
          .lux-container { width: min(100% - 22px, 720px); }
          .lux-hero-card { padding: 24px 16px; }
          .lux-title { font-size: 34px; letter-spacing: -0.8px; }
          .lux-title span { font-size: 19px; margin-top: 8px; }
          .lux-desc { font-size: 13.5px; }
          .lux-actions { flex-direction: column; align-items: stretch; }
          .lux-btn { width: 100%; min-height: 46px; }
          .lux-stats { grid-template-columns: 1fr; }
          .lux-stats div { text-align: center; }
          .lux-skyline { display: none; }
          .lux-brand-strip { padding: 12px; border-radius: 16px; }
        }

        @media (max-width: 420px) {
          .lux-container { width: min(100% - 18px, 390px); }
          .lux-hero-card { padding: 20px 12px; border-radius: 18px; }
          .lux-badge { font-size: 9px; letter-spacing: 0.8px; padding: 6px 11px; }
          .lux-title { font-size: 28px; }
          .lux-title span { font-size: 16px; }
          .lux-floating-cards-row { grid-template-columns: 1fr; }
          .lux-brand-title { font-size: 10px; }
          .lux-brand-slider :global(.swiper-slide) { height: 56px !important; min-width: 108px !important; }
          .lux-brand-slider :global(img) { max-height: 38px !important; max-width: 100px !important; }
        }
      

        /* =========================================================
           FINAL FIX: brand logo full visibility on desktop + mobile
           Also adds the same logo interaction effect for mobile tap.
           ========================================================= */
        .lux-brand-strip {
          overflow: visible !important;
          padding-top: 18px !important;
          padding-bottom: 18px !important;
        }

        .lux-brand-slider {
          width: 100% !important;
          max-width: 100% !important;
          overflow: visible !important;
          padding: 8px 0 !important;
        }

        .lux-brand-slider :global(.swiper) {
          width: 100% !important;
          overflow: hidden !important;
          padding: 12px 2px !important;
          margin: -12px -2px !important;
        }

        .lux-brand-slider :global(.swiper-wrapper) {
          align-items: center !important;
        }

        .lux-brand-slider :global(.swiper-slide) {
          height: 92px !important;
          min-width: 190px !important;
          width: 190px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          overflow: visible !important;
          padding: 14px 18px !important;
          box-sizing: border-box !important;
          border-radius: 16px !important;
          cursor: pointer !important;
          transition: background 0.28s ease, box-shadow 0.28s ease,
            transform 0.28s ease !important;
        }

        .lux-brand-slider :global(.swiper-slide > *),
        .lux-brand-slider :global(.swiper-slide a),
        .lux-brand-slider :global(.swiper-slide div),
        .lux-brand-slider :global(.brand-item),
        .lux-brand-slider :global(.brand-card),
        .lux-brand-slider :global(.brand-logo),
        .lux-brand-slider :global(.logo-box) {
          width: 100% !important;
          max-width: 100% !important;
          height: 100% !important;
          min-height: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          overflow: visible !important;
          box-sizing: border-box !important;
        }

        .lux-brand-slider :global(img),
        .lux-brand-slider :global(.swiper-slide img) {
          display: block !important;
          width: auto !important;
          height: auto !important;
          max-width: 165px !important;
          max-height: 64px !important;
          min-width: 0 !important;
          min-height: 0 !important;
          object-fit: contain !important;
          object-position: center !important;
          transform: translateZ(0) scale(1) !important;
          transition: transform 0.28s ease, filter 0.28s ease,
            opacity 0.28s ease !important;
          filter: none !important;
          opacity: 1 !important;
        }

        .lux-brand-slider :global(.swiper-slide:hover),
        .lux-brand-slider :global(.swiper-slide:focus-within),
        .lux-brand-slider :global(.swiper-slide:active) {
          background: rgba(7, 57, 116, 0.045) !important;
          box-shadow: 0 12px 28px rgba(6, 27, 58, 0.08) !important;
          transform: translateY(-2px) !important;
        }

        .lux-brand-slider :global(.swiper-slide:hover img),
        .lux-brand-slider :global(.swiper-slide:focus-within img),
        .lux-brand-slider :global(.swiper-slide:active img) {
          transform: translateZ(0) scale(1.06) !important;
        }

        @media (hover: none) {
          .lux-brand-slider :global(.swiper-slide:active) {
            background: rgba(7, 57, 116, 0.06) !important;
            box-shadow: 0 12px 28px rgba(6, 27, 58, 0.1) !important;
            transform: translateY(-2px) !important;
          }

          .lux-brand-slider :global(.swiper-slide:active img) {
            transform: translateZ(0) scale(1.06) !important;
          }
        }

        @media (max-width: 991px) {
          .lux-brand-strip {
            overflow: visible !important;
            padding: 16px 14px !important;
          }

          .lux-brand-slider :global(.swiper-slide) {
            height: 88px !important;
            min-width: 184px !important;
            width: 184px !important;
            padding: 13px 16px !important;
          }

          .lux-brand-slider :global(img),
          .lux-brand-slider :global(.swiper-slide img) {
            max-width: 160px !important;
            max-height: 62px !important;
          }
        }

        @media (max-width: 767px) {
          .lux-brand-strip {
            overflow: visible !important;
            padding: 14px 12px !important;
          }

          .lux-brand-slider {
            padding: 8px 0 !important;
          }

          .lux-brand-slider :global(.swiper) {
            padding: 12px 0 !important;
            margin: -12px 0 !important;
          }

          .lux-brand-slider :global(.swiper-slide) {
            height: 84px !important;
            min-width: 178px !important;
            width: 178px !important;
            padding: 12px 15px !important;
          }

          .lux-brand-slider :global(img),
          .lux-brand-slider :global(.swiper-slide img) {
            max-width: 154px !important;
            max-height: 58px !important;
          }
        }

        @media (max-width: 420px) {
          .lux-brand-slider :global(.swiper-slide) {
            height: 82px !important;
            min-width: 170px !important;
            width: 170px !important;
            padding: 12px 14px !important;
          }

          .lux-brand-slider :global(img),
          .lux-brand-slider :global(.swiper-slide img) {
            max-width: 146px !important;
            max-height: 56px !important;
          }
        }

        @media (max-width: 360px) {
          .lux-brand-slider :global(.swiper-slide) {
            height: 78px !important;
            min-width: 160px !important;
            width: 160px !important;
            padding: 11px 12px !important;
          }

          .lux-brand-slider :global(img),
          .lux-brand-slider :global(.swiper-slide img) {
            max-width: 138px !important;
            max-height: 54px !important;
          }
        }
`}</style>
    </section>
  );
}