// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";

// // const API_BASE_URL =
// //   process.env.NEXT_PUBLIC_API_BASE_URL || "https://backendgrowl.growlcityrealty.in";

// // function GalleryRow({ images, reverse = false, speed = "40s" }) {
// //   const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
// //   const loopImages = [...validImages, ...validImages];

// //   if (!validImages.length) return null;

// //   return (
// //     <div className="growl-marquee">
// //       <div
// //         className={`growl-marquee-track ${reverse ? "reverse" : ""}`}
// //         style={{ animationDuration: speed }}
// //       >
// //         {loopImages.map((img, index) => (
// //           <div className="growl-gallery-card" key={index}>
// //             <Image
// //               src={img}
// //               alt={`Gallery ${index + 1}`}
// //               width={420}
// //               height={280}
// //               className="growl-gallery-img"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default function About() {
// //   const [aboutData, setAboutData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchAboutData = async () => {
// //       try {
// //         const res = await fetch(`${API_BASE_URL}/api/aboutus/page-data/`, {
// //           cache: "no-store",
// //         });
// //         const data = await res.json();
// //         setAboutData(data);
// //       } catch (error) {
// //         console.error("Error fetching about page data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchAboutData();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <section className="tf-spacing-1">
// //         <div className="tf-container">
// //           <div className="text-center">Loading...</div>
// //         </div>
// //       </section>
// //     );
// //   }

// //   const hero = aboutData?.hero_section;
// //   const locationInfos = aboutData?.location_infos || [];
// //   const contactInfos = aboutData?.contact_infos || [];

// //   const whyChooseSection = aboutData?.why_choose_section;
// //   const whyChooseCards = aboutData?.why_choose_cards || [];

// //   const resourceSection = aboutData?.resource_section;
// //   const resourceItems = aboutData?.resource_items || [];

// //   const teamIntroSection = aboutData?.team_intro_section;
// //   const teamSection = aboutData?.team_section;
// //   const teamMembers = aboutData?.team_members || [];

// //   const gallerySection = aboutData?.gallery_section;
// //   const galleryRow1 = (aboutData?.gallery_row_1 || []).map((item) => item.image);
// //   const galleryRow2 = (aboutData?.gallery_row_2 || []).map((item) => item.image);
// //   const galleryRow3 = (aboutData?.gallery_row_3 || []).map((item) => item.image);

// //   return (
// //     <>
// //       <section className="section-contact style-4 tf-spacing-1 pb-0">
// //         <div className="tf-container">
// //           <div className="row align-items-center">
// //             <div className="col-md-6">
// //               <div className="box-contact pe-lg-4">
// //                 <div className="heading-section mb-48">
// //                   <div className="sub-title text-color-primary mb-12">
// //                     {hero?.subtitle}
// //                   </div>
// //                   <h2 className="title split-text split-lines-transform">
// //                     {hero?.title}
// //                   </h2>
// //                   {hero?.short_description && (
// //                     <p className="text-1 mb-16">{hero.short_description}</p>
// //                   )}
// //                   {hero?.long_description && (
// //                     <p className="text-1">{hero.long_description}</p>
// //                   )}
// //                 </div>

// //                 <ul className="list-info">
// //                   {locationInfos.map((item) => (
// //                     <li key={item.id}>
// //                       <div className="content">
// //                         <div className="sub">{item.label}</div>
// //                         <p>{item.value}</p>
// //                       </div>
// //                     </li>
// //                   ))}

// //                   {contactInfos.map((item) => (
// //                     <li key={item.id}>
// //                       <div className="content">
// //                         <div className="sub">{item.label}</div>

// //                         {item.type === "email" ? (
// //                           <a href={`mailto:${item.value}`}>{item.value}</a>
// //                         ) : (
// //                           <div className="phone">{item.value}</div>
// //                         )}
// //                       </div>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>

// //             <div className="col-md-6">
// //               <div className="image-wrap growl-about-main-image">
// //                 {hero?.main_image && (
// //                   <Image
// //                     alt={hero?.title || "About Growl Real Estate"}
// //                     width={650}
// //                     height={620}
// //                     src={hero.main_image}
// //                   />
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="tf-spacing-1 pt-0">
// //         <div className="tf-container">
// //           <div className="row">
// //             <div className="col-12">
// //               <div className="heading-section text-center mb-48">
// //                 <div className="sub-title text-color-primary mb-12">
// //                   {whyChooseSection?.subtitle}
// //                 </div>
// //                 <h2 className="title">{whyChooseSection?.title}</h2>
// //                 {whyChooseSection?.description && (
// //                   <p className="text-1 mx-auto" style={{ maxWidth: "850px" }}>
// //                     {whyChooseSection.description}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>

// //             {whyChooseCards.map((card) => (
// //               <div className="col-lg-4 col-md-6 mb-30" key={card.id}>
// //                 <div className="wg-testimonial style-2 h-100 growl-lift-card">
// //                   <h5 className="mb-16">{card.heading}</h5>
// //                   <p className="text-1 description mb-0">{card.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="tf-spacing-1 pt-0">
// //         <div className="tf-container">
// //           <div className="row align-items-center">
// //             <div className="col-lg-6">
// //               <div className="image-wrap mb-md-0 mb-4 growl-about-side-image">
// //                 {resourceSection?.side_image && (
// //                   <Image
// //                     src={resourceSection.side_image}
// //                     alt={resourceSection?.title || "Growl Real Estate Resources"}
// //                     width={650}
// //                     height={520}
// //                   />
// //                 )}
// //               </div>
// //             </div>

// //             <div className="col-lg-6">
// //               <div className="box-contact ps-lg-4">
// //                 <div className="heading-section mb-32">
// //                   <div className="sub-title text-color-primary mb-12">
// //                     {resourceSection?.subtitle}
// //                   </div>
// //                   <h2 className="title">{resourceSection?.title}</h2>
// //                   {resourceSection?.description && (
// //                     <p className="text-1">{resourceSection.description}</p>
// //                   )}
// //                 </div>

// //                 <ul className="list-info">
// //                   {resourceItems.map((item) => (
// //                     <li key={item.id}>
// //                       <div className="content">
// //                         <div className="sub">{item.heading}</div>
// //                         <p>{item.description}</p>
// //                       </div>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="tf-spacing-1 pt-0">
// //         <div className="tf-container">
// //           <div className="row align-items-center">
// //             <div className="col-lg-6 order-lg-1 order-2">
// //               <div className="box-contact pe-lg-4">
// //                 <div className="heading-section mb-32">
// //                   <div className="sub-title text-color-primary mb-12">
// //                     {teamIntroSection?.subtitle}
// //                   </div>
// //                   <h2 className="title">{teamIntroSection?.title}</h2>

// //                   {teamIntroSection?.paragraph_1 && (
// //                     <p className="text-1 mb-16">{teamIntroSection.paragraph_1}</p>
// //                   )}
// //                   {teamIntroSection?.paragraph_2 && (
// //                     <p className="text-1 mb-16">{teamIntroSection.paragraph_2}</p>
// //                   )}
// //                   {teamIntroSection?.paragraph_3 && (
// //                     <p className="text-1 mb-16">{teamIntroSection.paragraph_3}</p>
// //                   )}
// //                   {teamIntroSection?.paragraph_4 && (
// //                     <p className="text-1 mb-0">{teamIntroSection.paragraph_4}</p>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="col-lg-6 order-lg-2 order-1 mb-lg-0 mb-4">
// //               <div className="image-wrap growl-about-side-image">
// //                 {teamIntroSection?.side_image && (
// //                   <Image
// //                     src={teamIntroSection.side_image}
// //                     alt={teamIntroSection?.title || "Growl Real Estate Team"}
// //                     width={650}
// //                     height={560}
// //                   />
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="tf-spacing-1 pt-0">
// //         <div className="tf-container">
// //           <div className="row">
// //             <div className="col-12">
// //               <div className="heading-section text-center mb-48">
// //                 <div className="sub-title text-color-primary mb-12">
// //                   {teamSection?.subtitle}
// //                 </div>
// //                 <h2 className="title">{teamSection?.title}</h2>
// //                 {teamSection?.description && (
// //                   <p className="text-1 mx-auto" style={{ maxWidth: "850px" }}>
// //                     {teamSection.description}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>

// //             {teamMembers.map((member) => (
// //               <div className="col-xl-3 col-lg-4 col-md-6 mb-30" key={member.id}>
// //                 <div className="growl-team-card">
// //                   <div className="growl-team-image-wrap">
// //                     {member.image && (
// //                       <Image
// //                         src={member.image}
// //                         alt={member.name}
// //                         width={320}
// //                         height={320}
// //                         className="growl-team-image"
// //                       />
// //                     )}
// //                   </div>

// //                   <div className="growl-team-content">
// //                     <h5 className="mb-8">{member.name}</h5>
// //                     <div className="growl-team-title">{member.title}</div>
// //                     <p className="text-1 description mb-0">
// //                       {member.designation}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="tf-spacing-1 pt-0">
// //         <div className="tf-container">
// //           <div className="row">
// //             <div className="col-12">
// //               <div className="heading-section text-center mb-48">
// //                 <div className="sub-title text-color-primary mb-12">
// //                   {gallerySection?.subtitle}
// //                 </div>
// //                 <h2 className="title">{gallerySection?.title}</h2>
// //                 {gallerySection?.description && (
// //                   <p className="text-1 mx-auto" style={{ maxWidth: "850px" }}>
// //                     {gallerySection.description}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="growl-gallery-section">
// //           <GalleryRow images={galleryRow1} speed="38s" />
// //           <GalleryRow images={galleryRow2} reverse speed="42s" />
// //           <GalleryRow images={galleryRow3} speed="40s" />
// //         </div>
// //       </section>

// //       <style jsx global>{`
// //         .growl-about-main-image img,
// //         .growl-about-side-image img {
// //           width: 100%;
// //           height: auto;
// //           border-radius: 24px;
// //           object-fit: cover;
// //           transition: transform 0.6s ease;
// //         }

// //         .growl-about-main-image,
// //         .growl-about-side-image {
// //           overflow: hidden;
// //           border-radius: 24px;
// //         }

// //         .growl-about-main-image:hover img,
// //         .growl-about-side-image:hover img {
// //           transform: scale(1.04);
// //         }

// //         .growl-lift-card {
// //           transition: transform 0.35s ease, box-shadow 0.35s ease;
// //         }

// //         .growl-lift-card:hover {
// //           transform: translateY(-8px);
// //           box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
// //         }

// //         .growl-team-card {
// //           background: #ffffff;
// //           border: 1px solid #e9e9e9;
// //           border-radius: 28px;
// //           overflow: hidden;
// //           height: 100%;
// //           transition: transform 0.35s ease, box-shadow 0.35s ease;
// //         }

// //         .growl-team-card:hover {
// //           transform: translateY(-8px);
// //           box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);
// //         }

// //         .growl-team-image-wrap {
// //           width: 100%;
// //           height: 280px;
// //           overflow: hidden;
// //           background: #f7f7f7;
// //         }

// //         .growl-team-image {
// //           width: 100% !important;
// //           height: 100% !important;
// //           object-fit: cover !important;
// //           display: block;
// //           border-radius: 0 !important;
// //         }

// //         .growl-team-content {
// //           padding: 24px 22px 26px;
// //           text-align: center;
// //         }

// //         .growl-team-title {
// //           font-size: 17px;
// //           font-weight: 600;
// //           color: #ff9100;
// //           margin-bottom: 12px;
// //         }

// //         .growl-gallery-section {
// //           overflow: hidden;
// //         }

// //         .growl-marquee {
// //           overflow: hidden;
// //           width: 100%;
// //           position: relative;
// //           margin-bottom: 22px;
// //         }

// //         .growl-marquee-track {
// //           display: flex;
// //           width: max-content;
// //           gap: 22px;
// //           animation: growlMarquee 40s linear infinite;
// //         }

// //         .growl-marquee-track.reverse {
// //           animation-name: growlMarqueeReverse;
// //         }

// //         .growl-gallery-card {
// //           width: 420px;
// //           min-width: 420px;
// //           border-radius: 24px;
// //           overflow: hidden;
// //           background: #f5f5f5;
// //           box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
// //         }

// //         .growl-gallery-img {
// //           width: 100% !important;
// //           height: 280px !important;
// //           object-fit: cover !important;
// //           display: block;
// //           transition: transform 0.5s ease;
// //         }

// //         .growl-gallery-card:hover .growl-gallery-img {
// //           transform: scale(1.05);
// //         }

// //         @keyframes growlMarquee {
// //           0% {
// //             transform: translateX(0);
// //           }
// //           100% {
// //             transform: translateX(-50%);
// //           }
// //         }

// //         @keyframes growlMarqueeReverse {
// //           0% {
// //             transform: translateX(-50%);
// //           }
// //           100% {
// //             transform: translateX(0);
// //           }
// //         }

// //         @media (max-width: 991px) {
// //           .growl-team-image-wrap {
// //             height: 240px;
// //           }

// //           .growl-gallery-card {
// //             width: 320px;
// //             min-width: 320px;
// //           }

// //           .growl-gallery-img {
// //             height: 220px !important;
// //           }
// //         }

// //         @media (max-width: 767px) {
// //           .growl-team-image-wrap {
// //             height: 260px;
// //           }

// //           .growl-gallery-card {
// //             width: 280px;
// //             min-width: 280px;
// //           }

// //           .growl-gallery-img {
// //             height: 200px !important;
// //           }

// //           .growl-team-content {
// //             padding: 20px 16px 22px;
// //           }
// //         }
// //       `}</style>
// //     </>
// //   );
// // }



// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_BASE_URL || "https://backendgrowl.growlcityrealty.in";

// function GalleryRow({ images, reverse = false, speed = "40s" }) {
//   const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
//   const loopImages = [...validImages, ...validImages];

//   if (!validImages.length) return null;

//   return (
//     <div className="growl-marquee">
//       <div
//         className={`growl-marquee-track ${reverse ? "reverse" : ""}`}
//         style={{ animationDuration: speed }}
//       >
//         {loopImages.map((img, index) => (
//           <div className="growl-gallery-card" key={index}>
//             <Image
//               src={img}
//               alt={`Gallery ${index + 1}`}
//               width={420}
//               height={280}
//               className="growl-gallery-img"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function About() {
//   const [aboutData, setAboutData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await fetch(`${API_BASE_URL}/api/aboutus/page-data/`, {
//           cache: "no-store",
//         });
//         const data = await res.json();
//         setAboutData(data);
//       } catch (error) {
//         console.error("Error fetching about page data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAboutData();
//   }, []);

//   if (loading) {
//     return (
//       <section className="tf-spacing-1">
//         <div className="tf-container">
//           <div className="text-center">Loading...</div>
//         </div>
//       </section>
//     );
//   }

//   const hero = aboutData?.hero_section;
//   const locationInfos = aboutData?.location_infos || [];
//   const contactInfos = aboutData?.contact_infos || [];

//   const whyChooseSection = aboutData?.why_choose_section;
//   const whyChooseCards = aboutData?.why_choose_cards || [];

//   const resourceSection = aboutData?.resource_section;
//   const resourceItems = aboutData?.resource_items || [];

//   const teamIntroSection = aboutData?.team_intro_section;
//   const teamSection = aboutData?.team_section;
//   const teamMembers = aboutData?.team_members || [];

//   const gallerySection = aboutData?.gallery_section;
//   const galleryRow1 = (aboutData?.gallery_row_1 || []).map((item) => item.image);
//   const galleryRow2 = (aboutData?.gallery_row_2 || []).map((item) => item.image);
//   const galleryRow3 = (aboutData?.gallery_row_3 || []).map((item) => item.image);

//   return (
//     <>
//       <section className="section-contact style-4 tf-spacing-1 pb-0">
//         <div className="tf-container">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <div className="box-contact pe-lg-4">
//                 <div className="heading-section mb-48">
//                   <div className="sub-title text-color-primary mb-12">
//                     {hero?.subtitle}
//                   </div>
//                   <h2 className="title split-text split-lines-transform">
//                     {hero?.title}
//                   </h2>
//                   {hero?.short_description && (
//                     <p className="text-1 mb-16">{hero.short_description}</p>
//                   )}
//                   {hero?.long_description && (
//                     <p className="text-1">{hero.long_description}</p>
//                   )}
//                 </div>

//                 <ul className="list-info">
//                   {locationInfos.map((item) => (
//                     <li key={item.id}>
//                       <div className="content">
//                         <div className="sub">{item.label}</div>
//                         <p>{item.value}</p>
//                       </div>
//                     </li>
//                   ))}

//                   {contactInfos.map((item) => (
//                     <li key={item.id}>
//                       <div className="content">
//                         <div className="sub">{item.label}</div>

//                         {item.type === "email" ? (
//                           <a href={`mailto:${item.value}`}>{item.value}</a>
//                         ) : (
//                           <div className="phone">{item.value}</div>
//                         )}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <div className="image-wrap growl-about-main-image">
//                 {hero?.main_image && (
//                   <Image
//                     alt={hero?.title || "About Growl Real Estate"}
//                     width={650}
//                     height={620}
//                     src={hero.main_image}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="tf-spacing-1 pt-0 growl-why-choose-section">
//         <div className="tf-container">
//           <div className="row">
//             <div className="col-12">
//               <div className="heading-section text-center mb-48 growl-why-choose-heading">
//                 <div className="sub-title text-color-primary mb-12">
//                   {whyChooseSection?.subtitle}
//                 </div>
//                 <h2 className="title">{whyChooseSection?.title}</h2>
//                 {whyChooseSection?.description && (
//                   <p className="text-1 mx-auto" style={{ maxWidth: "850px" }}>
//                     {whyChooseSection.description}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {whyChooseCards.map((card) => (
//               <div className="col-lg-4 col-md-6 mb-30" key={card.id}>
//                 <div className="wg-testimonial style-2 h-100 growl-lift-card">
//                   <h5 className="mb-16">{card.heading}</h5>
//                   <p className="text-1 description mb-0">{card.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="tf-spacing-1 pt-0">
//         <div className="tf-container">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <div className="image-wrap mb-md-0 mb-4 growl-about-side-image">
//                 {resourceSection?.side_image && (
//                   <Image
//                     src={resourceSection.side_image}
//                     alt={resourceSection?.title || "Growl Real Estate Resources"}
//                     width={650}
//                     height={520}
//                   />
//                 )}
//               </div>
//             </div>

//             <div className="col-lg-6">
//               <div className="box-contact ps-lg-4">
//                 <div className="heading-section mb-32">
//                   <div className="sub-title text-color-primary mb-12">
//                     {resourceSection?.subtitle}
//                   </div>
//                   <h2 className="title">{resourceSection?.title}</h2>
//                   {resourceSection?.description && (
//                     <p className="text-1">{resourceSection.description}</p>
//                   )}
//                 </div>

//                 <ul className="list-info">
//                   {resourceItems.map((item) => (
//                     <li key={item.id}>
//                       <div className="content">
//                         <div className="sub">{item.heading}</div>
//                         <p>{item.description}</p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="tf-spacing-1 pt-0">
//         <div className="tf-container">
//           <div className="row align-items-center">
//             <div className="col-lg-6 order-lg-1 order-2">
//               <div className="box-contact pe-lg-4">
//                 <div className="heading-section mb-32">
//                   <div className="sub-title text-color-primary mb-12">
//                     {teamIntroSection?.subtitle}
//                   </div>
//                   <h2 className="title">{teamIntroSection?.title}</h2>

//                   {teamIntroSection?.paragraph_1 && (
//                     <p className="text-1 mb-16">{teamIntroSection.paragraph_1}</p>
//                   )}
//                   {teamIntroSection?.paragraph_2 && (
//                     <p className="text-1 mb-16">{teamIntroSection.paragraph_2}</p>
//                   )}
//                   {teamIntroSection?.paragraph_3 && (
//                     <p className="text-1 mb-16">{teamIntroSection.paragraph_3}</p>
//                   )}
//                   {teamIntroSection?.paragraph_4 && (
//                     <p className="text-1 mb-0">{teamIntroSection.paragraph_4}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-6 order-lg-2 order-1 mb-lg-0 mb-4">
//               <div className="image-wrap growl-about-side-image">
//                 {teamIntroSection?.side_image && (
//                   <Image
//                     src={teamIntroSection.side_image}
//                     alt={teamIntroSection?.title || "Growl Real Estate Team"}
//                     width={650}
//                     height={560}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="tf-spacing-1 pt-0">
//         <div className="tf-container">
//           <div className="row">
//             <div className="col-12">
//               <div className="heading-section text-center mb-48">
//                 <div className="sub-title text-color-primary mb-12">
//                   {teamSection?.subtitle}
//                 </div>
//                 <h2 className="title">{teamSection?.title}</h2>
//                 {teamSection?.description && (
//                   <p className="text-1 mx-auto" style={{ maxWidth: "850px" }}>
//                     {teamSection.description}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {teamMembers.map((member) => (
//               <div className="col-xl-3 col-lg-4 col-md-6 mb-30" key={member.id}>
//                 <div className="growl-team-card">
//                   <div className="growl-team-image-wrap">
//                     {member.image && (
//                       <Image
//                         src={member.image}
//                         alt={member.name}
//                         width={320}
//                         height={320}
//                         className="growl-team-image"
//                       />
//                     )}
//                   </div>

//                   <div className="growl-team-content">
//                     <h5 className="mb-8">{member.name}</h5>
//                     <div className="growl-team-title">{member.title}</div>
//                     <p className="text-1 description mb-0">
//                       {member.designation}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="tf-spacing-1 pt-0">
//         <div className="tf-container">
//           <div className="row">
//             <div className="col-12">
//               <div className="heading-section text-center mb-48">
//                 <div className="sub-title text-color-primary mb-12">
//                   {gallerySection?.subtitle}
//                 </div>
//                 <h2 className="title">{gallerySection?.title}</h2>
//                 {gallerySection?.description && (
//                   <p className="text-1 mx-auto" style={{ maxWidth: "850px" }}>
//                     {gallerySection.description}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="growl-gallery-section">
//           <GalleryRow images={galleryRow1} speed="38s" />
//           <GalleryRow images={galleryRow2} reverse speed="42s" />
//           <GalleryRow images={galleryRow3} speed="40s" />
//         </div>
//       </section>

//       <style jsx global>{`
//         .growl-about-main-image img,
//         .growl-about-side-image img {
//           width: 100%;
//           height: auto;
//           border-radius: 24px;
//           object-fit: cover;
//           transition: transform 0.6s ease;
//         }

//         .growl-about-main-image,
//         .growl-about-side-image {
//           overflow: hidden;
//           border-radius: 24px;
//         }

//         .growl-about-main-image:hover img,
//         .growl-about-side-image:hover img {
//           transform: scale(1.04);
//         }

//         .growl-lift-card {
//           transition: transform 0.35s ease, box-shadow 0.35s ease;
//         }

//         .growl-lift-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
//         }

//         .growl-team-card {
//           background: #ffffff;
//           border: 1px solid #e9e9e9;
//           border-radius: 28px;
//           overflow: hidden;
//           height: 100%;
//           transition: transform 0.35s ease, box-shadow 0.35s ease;
//         }

//         .growl-team-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);
//         }

//         .growl-team-image-wrap {
//           width: 100%;
//           height: 280px;
//           overflow: hidden;
//           background: #f7f7f7;
//         }

//         .growl-team-image {
//           width: 100% !important;
//           height: 100% !important;
//           object-fit: cover !important;
//           display: block;
//           border-radius: 0 !important;
//         }

//         .growl-team-content {
//           padding: 24px 22px 26px;
//           text-align: center;
//         }

//         .growl-team-title {
//           font-size: 17px;
//           font-weight: 600;
//           color: #ff9100;
//           margin-bottom: 12px;
//         }

//         .growl-gallery-section {
//           overflow: hidden;
//         }

//         .growl-marquee {
//           overflow: hidden;
//           width: 100%;
//           position: relative;
//           margin-bottom: 22px;
//         }

//         .growl-marquee-track {
//           display: flex;
//           width: max-content;
//           gap: 22px;
//           animation: growlMarquee 40s linear infinite;
//         }

//         .growl-marquee-track.reverse {
//           animation-name: growlMarqueeReverse;
//         }

//         .growl-gallery-card {
//           width: 420px;
//           min-width: 420px;
//           border-radius: 24px;
//           overflow: hidden;
//           background: #f5f5f5;
//           box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
//         }

//         .growl-gallery-img {
//           width: 100% !important;
//           height: 280px !important;
//           object-fit: cover !important;
//           display: block;
//           transition: transform 0.5s ease;
//         }

//         .growl-gallery-card:hover .growl-gallery-img {
//           transform: scale(1.05);
//         }

//         @keyframes growlMarquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes growlMarqueeReverse {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         .growl-why-choose-section {
//           position: relative;
//         }

//         @media (max-width: 991px) {
//           .growl-team-image-wrap {
//             height: 240px;
//           }

//           .growl-gallery-card {
//             width: 320px;
//             min-width: 320px;
//           }

//           .growl-gallery-img {
//             height: 220px !important;
//           }
//         }

        

// @media (max-width: 767px) {
//   .growl-why-choose-section {
//     padding-top: 34px !important;
//     margin-top: 0 !important;
//   }

//   .growl-why-choose-heading {
//     padding-top: 0 !important;
//     margin-top: 0 !important;
//   }

//   .growl-why-choose-heading .sub-title {
//     margin-top: 0 !important;
//     margin-bottom: 18px !important;
//     display: block !important;
//   }

//   .growl-team-image-wrap {
//     height: 260px;
//   }

//   .growl-about-side-image {
//     margin-bottom: 30px !important;
//   }

//   .growl-gallery-card {
//     width: 280px;
//     min-width: 280px;
//   }

//   .growl-gallery-img {
//     height: 200px !important;
//   }

//   .growl-team-content {
//     padding: 20px 16px 22px;
//   }
// }
//       `}</style>
//     </>
//   );
// }


"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://backendgrowl.growlcityrealty.in";

function GalleryRow({ images, reverse = false, speed = "40s" }) {
  const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const loopImages = [...validImages, ...validImages];

  if (!validImages.length) return null;

  return (
    <div className="growl-marquee">
      <div
        className={`growl-marquee-track ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: speed }}
      >
        {loopImages.map((img, index) => (
          <div className="growl-gallery-card" key={`${img}-${index}`}>
            <Image
              src={img}
              alt={`Gallery ${index + 1}`}
              width={420}
              height={280}
              className="growl-gallery-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamScrollerRow({ members, reverse = false, speed = "24s" }) {
  const validMembers = Array.isArray(members) ? members.filter(Boolean) : [];
  const loopMembers = [...validMembers, ...validMembers, ...validMembers];

  if (!validMembers.length) return null;

  return (
    <div className="growl-team-marquee">
      <div
        className={`growl-team-marquee-track ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: speed }}
      >
        {loopMembers.map((member, index) => (
          <div
            className="growl-team-card growl-team-scroller-card"
            key={`${member?.id || member?.name || "team"}-${index}`}
          >
            <div className="growl-team-image-wrap">
              {member?.image ? (
                <Image
                  src={member.image}
                  alt={member?.name || member?.title || member?.designation || ""}
                  width={420}
                  height={360}
                  className="growl-team-image"
                />
              ) : (
                <div className="growl-team-placeholder">
                  <span>{member?.name || member?.title || member?.designation}</span>
                </div>
              )}
            </div>

            <div className="growl-team-content">
              {member?.name && <h5 className="mb-8">{member.name}</h5>}

              {member?.title && (
                <div className="growl-team-title">{member.title}</div>
              )}

              {member?.designation && (
                <p className="text-1 description mb-0">{member.designation}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/aboutus/page-data/`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch about page data");
        }

        const data = await res.json();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about page data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const hero = aboutData?.hero_section || {};
  const locationInfos = Array.isArray(aboutData?.location_infos)
    ? aboutData.location_infos
    : [];
  const contactInfos = Array.isArray(aboutData?.contact_infos)
    ? aboutData.contact_infos
    : [];

  const whyChooseSection = aboutData?.why_choose_section || {};
  const whyChooseCards = Array.isArray(aboutData?.why_choose_cards)
    ? aboutData.why_choose_cards
    : [];

  const resourceSection = aboutData?.resource_section || {};
  const resourceItems = Array.isArray(aboutData?.resource_items)
    ? aboutData.resource_items
    : [];

  const teamIntroSection = aboutData?.team_intro_section || {};
  const teamSection = aboutData?.team_section || {};
  const teamMembers = Array.isArray(aboutData?.team_members)
    ? aboutData.team_members
    : [];

  const gallerySection = aboutData?.gallery_section || {};
  const galleryRow1 = Array.isArray(aboutData?.gallery_row_1)
    ? aboutData.gallery_row_1.map((item) => item?.image).filter(Boolean)
    : [];
  const galleryRow2 = Array.isArray(aboutData?.gallery_row_2)
    ? aboutData.gallery_row_2.map((item) => item?.image).filter(Boolean)
    : [];
  const galleryRow3 = Array.isArray(aboutData?.gallery_row_3)
    ? aboutData.gallery_row_3.map((item) => item?.image).filter(Boolean)
    : [];

  const isEmailInfo = (item) => {
    const type = String(item?.type || "").toLowerCase();
    const label = String(item?.label || "").toLowerCase();
    const value = String(item?.value || "").trim();

    return (
      type.includes("email") ||
      label.includes("email") ||
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    );
  };

  const isPhoneInfo = (item) => {
    const type = String(item?.type || "").toLowerCase();
    const label = String(item?.label || "").toLowerCase();

    return (
      type.includes("phone") ||
      type.includes("mobile") ||
      type.includes("tel") ||
      label.includes("call") ||
      label.includes("phone") ||
      label.includes("mobile")
    );
  };

  const phoneInfos = useMemo(() => {
    return contactInfos.filter(
      (item) => item?.value && !isEmailInfo(item) && isPhoneInfo(item)
    );
  }, [contactInfos]);

  const otherContactInfos = useMemo(() => {
    return contactInfos.filter(
      (item) => item?.value && !isEmailInfo(item) && !isPhoneInfo(item)
    );
  }, [contactInfos]);

  const mergedPhoneInfo = useMemo(() => {
    if (!phoneInfos.length) return null;

    const label = phoneInfos[0]?.label || "";
    const values = Array.from(
      new Set(phoneInfos.map((item) => String(item?.value || "").trim()).filter(Boolean))
    );

    return {
      label,
      value: values.join(" | "),
    };
  }, [phoneInfos]);

  const displayedWhyChooseCards = useMemo(() => {
    return whyChooseCards
      .filter((card) => {
        const heading = String(card?.heading || "").toLowerCase();
        return !heading.includes("resource");
      })
      .slice(0, 6);
  }, [whyChooseCards]);

  const teamRows = useMemo(() => {
    const rows = [];

    for (let i = 0; i < teamMembers.length; i += 3) {
      rows.push(teamMembers.slice(i, i + 3));
    }

    return rows;
  }, [teamMembers]);

  if (loading) {
    return (
      <section className="tf-spacing-1">
        <div className="tf-container">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <main className="growl-about-page">
        <section className="section-contact style-4 tf-spacing-1 pb-0">
          <div className="tf-container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="box-contact pe-lg-4">
                  <div className="heading-section mb-48">
                    {hero?.subtitle && (
                      <div className="sub-title text-color-primary mb-12">
                        {hero.subtitle}
                      </div>
                    )}

                    {hero?.title && (
                      <h2 className="title split-text split-lines-transform">
                        {hero.title}
                      </h2>
                    )}

                    {hero?.short_description && (
                      <p className="text-1 mb-16">{hero.short_description}</p>
                    )}

                    {hero?.long_description && (
                      <p className="text-1">{hero.long_description}</p>
                    )}
                  </div>

                  <ul className="list-info">
                    {locationInfos.map((item, index) => (
                      <li key={item?.id || `location-${index}`}>
                        <div className="content">
                          {item?.label && <div className="sub">{item.label}</div>}
                          {item?.value && <p>{item.value}</p>}
                        </div>
                      </li>
                    ))}

                    {mergedPhoneInfo && (
                      <li>
                        <div className="content">
                          {mergedPhoneInfo.label && (
                            <div className="sub">{mergedPhoneInfo.label}</div>
                          )}
                          <div className="phone">{mergedPhoneInfo.value}</div>
                        </div>
                      </li>
                    )}

                    {otherContactInfos.map((item, index) => (
                      <li key={item?.id || `contact-${index}`}>
                        <div className="content">
                          {item?.label && <div className="sub">{item.label}</div>}
                          {item?.value && <p>{item.value}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="image-wrap growl-about-main-image">
                  {hero?.main_image && (
                    <Image
                      alt={hero?.title || ""}
                      width={650}
                      height={620}
                      src={hero.main_image}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {(whyChooseSection?.title ||
          whyChooseSection?.subtitle ||
          whyChooseSection?.description ||
          displayedWhyChooseCards.length > 0) && (
          <section className="tf-spacing-1 pt-0 growl-why-choose-section">
            <div className="tf-container">
              <div className="row">
                <div className="col-12">
                  <div className="heading-section text-center mb-48 growl-why-choose-heading">
                    {whyChooseSection?.subtitle && (
                      <div className="sub-title text-color-primary mb-12">
                        {whyChooseSection.subtitle}
                      </div>
                    )}

                    {whyChooseSection?.title && (
                      <h2 className="title">{whyChooseSection.title}</h2>
                    )}

                    {whyChooseSection?.description && (
                      <p className="text-1 mx-auto growl-center-description">
                        {whyChooseSection.description}
                      </p>
                    )}
                  </div>
                </div>

                {displayedWhyChooseCards.map((card, index) => (
                  <div
                    className="col-lg-4 col-md-6 mb-30"
                    key={card?.id || `why-card-${index}`}
                  >
                    <div className="wg-testimonial style-2 h-100 growl-lift-card">
                      {card?.heading && <h5 className="mb-16">{card.heading}</h5>}
                      {card?.description && (
                        <p className="text-1 description mb-0">
                          {card.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {(resourceSection?.title ||
          resourceSection?.subtitle ||
          resourceSection?.description ||
          resourceSection?.side_image ||
          resourceItems.length > 0) && (
          <section className="tf-spacing-1 pt-0">
            <div className="tf-container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="image-wrap mb-md-0 mb-4 growl-about-side-image">
                    {resourceSection?.side_image && (
                      <Image
                        src={resourceSection.side_image}
                        alt={resourceSection?.title || ""}
                        width={650}
                        height={520}
                      />
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="box-contact ps-lg-4">
                    <div className="heading-section mb-32">
                      {resourceSection?.subtitle && (
                        <div className="sub-title text-color-primary mb-12">
                          {resourceSection.subtitle}
                        </div>
                      )}

                      {resourceSection?.title && (
                        <h2 className="title">{resourceSection.title}</h2>
                      )}

                      {resourceSection?.description && (
                        <p className="text-1">{resourceSection.description}</p>
                      )}
                    </div>

                    {resourceItems.length > 0 && (
                      <ul className="list-info">
                        {resourceItems.map((item, index) => (
                          <li key={item?.id || `resource-${index}`}>
                            <div className="content">
                              {item?.heading && (
                                <div className="sub">{item.heading}</div>
                              )}
                              {item?.description && <p>{item.description}</p>}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {(teamIntroSection?.title ||
          teamIntroSection?.subtitle ||
          teamIntroSection?.paragraph_1 ||
          teamIntroSection?.paragraph_2 ||
          teamIntroSection?.paragraph_3 ||
          teamIntroSection?.paragraph_4 ||
          teamIntroSection?.side_image) && (
          <section className="tf-spacing-1 pt-0">
            <div className="tf-container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-1 order-2">
                  <div className="box-contact pe-lg-4">
                    <div className="heading-section mb-32">
                      {teamIntroSection?.subtitle && (
                        <div className="sub-title text-color-primary mb-12">
                          {teamIntroSection.subtitle}
                        </div>
                      )}

                      {teamIntroSection?.title && (
                        <h2 className="title">{teamIntroSection.title}</h2>
                      )}

                      {teamIntroSection?.paragraph_1 && (
                        <p className="text-1 mb-16">
                          {teamIntroSection.paragraph_1}
                        </p>
                      )}

                      {teamIntroSection?.paragraph_2 && (
                        <p className="text-1 mb-16">
                          {teamIntroSection.paragraph_2}
                        </p>
                      )}

                      {teamIntroSection?.paragraph_3 && (
                        <p className="text-1 mb-16">
                          {teamIntroSection.paragraph_3}
                        </p>
                      )}

                      {teamIntroSection?.paragraph_4 && (
                        <p className="text-1 mb-0">
                          {teamIntroSection.paragraph_4}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 order-lg-2 order-1 mb-lg-0 mb-4">
                  <div className="image-wrap growl-about-side-image">
                    {teamIntroSection?.side_image && (
                      <Image
                        src={teamIntroSection.side_image}
                        alt={teamIntroSection?.title || ""}
                        width={650}
                        height={560}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {(teamSection?.title ||
          teamSection?.subtitle ||
          teamSection?.description ||
          teamRows.length > 0) && (
          <section className="tf-spacing-1 pt-0 growl-team-scroller-section">
            <div className="tf-container">
              <div className="row">
                <div className="col-12">
                  <div className="heading-section text-center mb-48 growl-team-heading">
                    {teamSection?.subtitle && (
                      <div className="sub-title text-color-primary mb-12">
                        {teamSection.subtitle}
                      </div>
                    )}

                    {teamSection?.title && (
                      <h2 className="title">{teamSection.title}</h2>
                    )}

                    {teamSection?.description && (
                      <p className="text-1 mx-auto growl-center-description">
                        {teamSection.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {teamRows.length > 0 && (
              <div className="growl-team-scroller-wrap">
                {teamRows.map((row, index) => (
                  <TeamScrollerRow
                    key={`team-row-${index}`}
                    members={row}
                    reverse={index % 2 === 1}
                    speed={`${24 + index * 3}s`}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {(gallerySection?.title ||
          gallerySection?.subtitle ||
          gallerySection?.description ||
          galleryRow1.length > 0 ||
          galleryRow2.length > 0 ||
          galleryRow3.length > 0) && (
          <section className="tf-spacing-1 pt-0">
            <div className="tf-container">
              <div className="row">
                <div className="col-12">
                  <div className="heading-section text-center mb-48">
                    {gallerySection?.subtitle && (
                      <div className="sub-title text-color-primary mb-12">
                        {gallerySection.subtitle}
                      </div>
                    )}

                    {gallerySection?.title && (
                      <h2 className="title">{gallerySection.title}</h2>
                    )}

                    {gallerySection?.description && (
                      <p className="text-1 mx-auto growl-center-description">
                        {gallerySection.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="growl-gallery-section">
              <GalleryRow images={galleryRow1} speed="38s" />
              <GalleryRow images={galleryRow2} reverse speed="42s" />
              <GalleryRow images={galleryRow3} speed="40s" />
            </div>
          </section>
        )}
      </main>

      <style jsx global>{`
        .growl-about-page {
          display: block !important;
          width: 100% !important;
          min-height: 100vh !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .growl-about-page section {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .growl-about-page .title,
        .growl-about-page h1,
        .growl-about-page h2,
        .growl-about-page h3,
        .growl-about-page h4,
        .growl-about-page h5,
        .growl-about-page .sub-title,
        .growl-about-page .sub {
          color: #111111 !important;
        }

        .growl-about-page .text-1,
        .growl-about-page p,
        .growl-about-page .description,
        .growl-about-page .phone,
        .growl-about-page a {
          color: #111111 !important;
        }

        .growl-about-page .text-1,
        .growl-about-page p,
        .growl-about-page .description {
          text-align: justify !important;
        }

        .growl-center-description {
          max-width: 850px !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        .growl-about-main-image img,
        .growl-about-side-image img {
          width: 100%;
          height: auto;
          border-radius: 24px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .growl-about-main-image,
        .growl-about-side-image {
          overflow: hidden;
          border-radius: 24px;
        }

        .growl-about-main-image:hover img,
        .growl-about-side-image:hover img {
          transform: scale(1.04);
        }

        .growl-lift-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .growl-lift-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
        }

        .growl-team-scroller-section {
          width: 100%;
          overflow: hidden !important;
        }

        .growl-team-scroller-wrap {
          width: 100%;
          overflow: hidden !important;
        }

        .growl-team-marquee {
          overflow: hidden !important;
          width: 100%;
          position: relative;
          margin-bottom: 22px;
        }

        .growl-team-marquee-track {
          display: flex !important;
          flex-wrap: nowrap !important;
          width: max-content !important;
          min-width: max-content !important;
          gap: 22px;
          animation: growlTeamMarquee 24s linear infinite;
          will-change: transform;
        }

        .growl-team-marquee-track.reverse {
          animation-name: growlTeamMarqueeReverse;
        }

        .growl-team-marquee:hover .growl-team-marquee-track {
          animation-play-state: paused;
        }

        .growl-team-card {
          background: #ffffff;
          border: 1px solid #e9e9e9;
          border-radius: 22px;
          overflow: hidden;
          height: 100%;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .growl-team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.09);
        }

        .growl-team-scroller-card {
          width: 360px;
          min-width: 360px;
          max-width: 360px;
          flex: 0 0 360px;
        }

        .growl-team-image-wrap {
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #f7f7f7;
        }

        .growl-team-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center center !important;
          display: block;
          border-radius: 0 !important;
        }

        .growl-team-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          text-align: center;
          background: #f7f7f7;
        }

        .growl-team-placeholder span {
          font-size: 18px;
          font-weight: 800;
          color: #111111;
          line-height: 1.35;
          text-align: center !important;
        }

        .growl-team-content {
          padding: 18px 18px 20px;
          text-align: center !important;
        }

        .growl-team-content h5,
        .growl-team-content .growl-team-title,
        .growl-team-content p,
        .growl-team-content .description,
        .growl-team-content .text-1 {
          text-align: center !important;
        }

        .growl-team-content h5 {
          font-size: 18px;
          line-height: 1.3;
          margin-bottom: 6px !important;
        }

        .growl-team-title {
          font-size: 15px;
          line-height: 1.3;
          font-weight: 600;
          color: #111111 !important;
          margin-bottom: 8px;
        }

        .growl-team-content .description {
          font-size: 14px;
          line-height: 1.45;
          margin-left: auto;
          margin-right: auto;
        }

        @keyframes growlTeamMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        @keyframes growlTeamMarqueeReverse {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .growl-gallery-section {
          overflow: hidden;
        }

        .growl-marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
          margin-bottom: 22px;
        }

        .growl-marquee-track {
          display: flex;
          width: max-content;
          gap: 22px;
          animation: growlMarquee 40s linear infinite;
        }

        .growl-marquee-track.reverse {
          animation-name: growlMarqueeReverse;
        }

        .growl-gallery-card {
          width: 420px;
          min-width: 420px;
          border-radius: 24px;
          overflow: hidden;
          background: #f5f5f5;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
        }

        .growl-gallery-img {
          width: 100% !important;
          height: 280px !important;
          object-fit: cover !important;
          display: block;
          transition: transform 0.5s ease;
        }

        .growl-gallery-card:hover .growl-gallery-img {
          transform: scale(1.05);
        }

        @keyframes growlMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes growlMarqueeReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .growl-why-choose-section {
          position: relative;
        }

        @media (max-width: 1199px) {
          .growl-team-scroller-card {
            width: 330px;
            min-width: 330px;
            max-width: 330px;
            flex: 0 0 330px;
          }

          .growl-team-image-wrap {
            height: 230px;
          }
        }

        @media (max-width: 991px) {
          .growl-team-scroller-card {
            width: 300px;
            min-width: 300px;
            max-width: 300px;
            flex: 0 0 300px;
          }

          .growl-team-image-wrap {
            height: 210px;
          }

          .growl-gallery-card {
            width: 320px;
            min-width: 320px;
          }

          .growl-gallery-img {
            height: 220px !important;
          }
        }

        @media (max-width: 767px) {
          .growl-about-page,
          .growl-about-page section,
          .growl-about-page .tf-container,
          .growl-about-page .row,
          .growl-about-page [class*="col-"] {
            visibility: visible !important;
            opacity: 1 !important;
          }

          .growl-about-page .section-contact.style-4 {
            display: block !important;
            padding-top: 60px !important;
            padding-bottom: 36px !important;
          }

          .growl-about-page .row {
            display: flex !important;
            flex-wrap: wrap !important;
            row-gap: 24px;
          }

          .growl-about-page [class*="col-"] {
            width: 100% !important;
            max-width: 100% !important;
            flex: 0 0 100% !important;
          }

          .growl-about-page .box-contact {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .growl-about-page .heading-section {
            margin-bottom: 24px !important;
          }

          .growl-why-choose-section {
            padding-top: 30px !important;
            margin-top: 0 !important;
          }

          .growl-why-choose-heading {
            padding-top: 0 !important;
            margin-top: 0 !important;
          }

          .growl-why-choose-heading .sub-title {
            margin-top: 0 !important;
            margin-bottom: 14px !important;
            display: block !important;
          }

          .growl-about-main-image,
          .growl-about-side-image {
            margin-bottom: 24px !important;
          }

          .growl-about-main-image img,
          .growl-about-side-image img {
            max-height: 390px !important;
            object-fit: cover !important;
          }

          .growl-team-scroller-section {
            padding-bottom: 8px !important;
          }

          .growl-team-scroller-section .tf-container,
          .growl-team-scroller-section .row,
          .growl-team-scroller-section .col-12 {
            width: 100% !important;
            max-width: 100% !important;
          }

          .growl-team-heading {
            margin-bottom: 22px !important;
          }

          .growl-team-scroller-wrap {
            padding-top: 0 !important;
          }

          .growl-team-marquee {
            margin-bottom: 12px !important;
          }

          .growl-team-marquee-track {
            gap: 14px !important;
            animation-duration: 24s !important;
          }

          .growl-team-card {
            border-radius: 16px !important;
          }

          .growl-team-scroller-card {
            width: 205px !important;
            min-width: 205px !important;
            max-width: 205px !important;
            flex: 0 0 205px !important;
          }

          .growl-team-image-wrap {
            height: 118px !important;
          }

          .growl-team-content {
            padding: 9px 10px 11px !important;
            text-align: center !important;
          }

          .growl-team-content h5 {
            font-size: 13.5px !important;
            line-height: 1.22 !important;
            margin-bottom: 3px !important;
            text-align: center !important;
          }

          .growl-team-title {
            font-size: 12px !important;
            line-height: 1.2 !important;
            margin-bottom: 4px !important;
            text-align: center !important;
          }

          .growl-team-content .description {
            font-size: 11px !important;
            line-height: 1.25 !important;
            text-align: center !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 1 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }

          .growl-team-placeholder span {
            font-size: 12px !important;
            text-align: center !important;
          }

          .growl-gallery-card {
            width: 280px;
            min-width: 280px;
          }

          .growl-gallery-img {
            height: 200px !important;
          }
        }

        @media (max-width: 420px) {
          .growl-team-marquee {
            margin-bottom: 10px !important;
          }

          .growl-team-marquee-track {
            gap: 12px !important;
          }

          .growl-team-scroller-card {
            width: 190px !important;
            min-width: 190px !important;
            max-width: 190px !important;
            flex: 0 0 190px !important;
          }

          .growl-team-image-wrap {
            height: 108px !important;
          }

          .growl-team-content {
            padding: 8px 9px 10px !important;
          }

          .growl-team-content h5 {
            font-size: 13px !important;
          }

          .growl-team-title {
            font-size: 11.5px !important;
          }

          .growl-team-content .description {
            font-size: 10.5px !important;
          }
        }
      `}</style>
    </>
  );
}