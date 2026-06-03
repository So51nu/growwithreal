// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import SplitTextAnimation from "@/components/common/SplitTextAnimation";
// import ProtectedPropertyLink from "@/components/common/ProtectedPropertyLink";
// import { apiGet } from "../../lib/api";

// const fallbackImages = [
//   "/images/section/location-1.jpg",
//   "/images/section/location-2.jpg",
//   "/images/section/location-3.jpg",
//   "/images/section/location-4.jpg",
//   "/images/section/location-5.jpg",
//   "/images/section/location-6.jpg",
//   "/images/section/location-7.jpg",
//   "/images/section/location-8.jpg",
// ];

// const plotFeature = {
//   title: "Plot",
//   subtitle: "Premium land and plot opportunities",
//   imageSrc: "/images/section/location-8.jpg",
//   href: "/",
// };

// function SaveIcon() {
//   return (
//     <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M7 4.75C7 3.784 7.784 3 8.75 3H15.25C16.216 3 17 3.784 17 4.75V20.25L12 17.25L7 20.25V4.75Z"
//         stroke="#ffffff"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function HeartIcon() {
//   return (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.6417 1.54871 7.04097 1.54871 8.5C1.54871 9.95904 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.9379 22.4518 9.22249 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12076 20.84 4.61Z"
//         stroke="#ffffff"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function LocationIcon() {
//   return (
//     <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function normalizeText(value) {
//   return String(value || "").trim().toLowerCase();
// }

// function slugify(value) {
//   return String(value || "")
//     .trim()
//     .toLowerCase()
//     .replace(/&/g, "and")
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-")
//     .replace(/^-|-$/g, "");
// }

// function formatPrice(value) {
//   const price = Number(value || 0);

//   if (!price) return "Price on Request";

//   if (price >= 10000000) {
//     const cr = price / 10000000;
//     return `₹${Number.isInteger(cr) ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
//   }

//   if (price >= 100000) {
//     const lac = price / 100000;
//     return `₹${Number.isInteger(lac) ? lac.toFixed(0) : lac.toFixed(2)} Lac`;
//   }

//   return `₹${price.toLocaleString("en-IN")}`;
// }

// function getProjectTitle(project) {
//   return (
//     project?.title ||
//     project?.project_name ||
//     project?.property_name ||
//     project?.name ||
//     "Project"
//   );
// }

// function getDeveloperName(project) {
//   return (
//     project?.developer_name ||
//     project?.developer ||
//     project?.builder_name ||
//     project?.builder ||
//     ""
//   );
// }

// function getLocationName(project) {
//   return (
//     project?.short_location ||
//     project?.location ||
//     project?.neighborhood ||
//     project?.full_address ||
//     ""
//   );
// }

// function getProjectImage(project, fallbackImage) {
//   if (!project) return fallbackImage;

//   if (project.imageSrc) return project.imageSrc;
//   if (project.featured_image) return project.featured_image;
//   if (project.feature_image) return project.feature_image;
//   if (project.primary_image) return project.primary_image;
//   if (project.image) return project.image;

//   if (Array.isArray(project.images) && project.images.length > 0) {
//     const primary =
//       project.images.find(
//         (img) => img?.is_primary && (img?.image || img?.url)
//       ) || project.images[0];

//     if (primary?.image) return primary.image;
//     if (primary?.url) return primary.url;
//     if (primary?.image_url) return primary.image_url;
//   }

//   return fallbackImage;
// }

// function getConfiguration(project) {
//   return (
//     project?.configuration_text ||
//     project?.configuration ||
//     project?.bhk ||
//     project?.unit_type ||
//     (project?.bedrooms ? `${project.bedrooms} BHK` : "")
//   );
// }

// function getProjectDetailHref(project) {
//   const title =
//     project?.title ||
//     project?.project_name ||
//     project?.property_name ||
//     project?.name ||
//     "property";

//   const slug = project?.slug || slugify(title);

//   return `/${slug}`;
// }

// function hideExternalSearchBars() {
//   if (typeof window === "undefined") return () => {};

//   const selectors = [
//     ".home-hero-search",
//     ".hero-search-fixed",
//     ".hero-search-sticky",
//     ".fixed-search",
//     ".fixed-search-box",
//     ".growl-hero-search-fixed",
//     ".tf-search-form-fixed",
//     ".property-search-fixed",
//     ".hero-search",
//     ".search-fixed",
//     ".search-box-fixed",
//     ".tf-search",
//     ".wg-search",
//     ".form-search",
//     ".hero-search-wrap",
//     ".wrap-search",
//     ".search-form",
//     ".flat-tab-form",
//     ".wd-search-form",
//     ".tf-search-form",
//     ".search-box",
//     ".search-box-container",
//     ".search-wrapper",
//     ".hero-search-wrapper",
//     ".hero-form-wrapper",
//     ".form-sl",
//     ".wd-find-select",
//     ".wrap-search-home",
//     ".main-search-wrapper",
//   ];

//   const hiddenElements = [];
//   const pushedElements = new WeakSet();

//   const hideElement = (element) => {
//     if (!element || pushedElements.has(element)) return;
//     if (element.closest(".city-project-modal")) return;

//     pushedElements.add(element);

//     hiddenElements.push({
//       element,
//       display: element.style.display,
//       visibility: element.style.visibility,
//       opacity: element.style.opacity,
//       pointerEvents: element.style.pointerEvents,
//     });

//     element.style.display = "none";
//     element.style.visibility = "hidden";
//     element.style.opacity = "0";
//     element.style.pointerEvents = "none";
//   };

//   selectors.forEach((selector) => {
//     document.querySelectorAll(selector).forEach((element) => {
//       hideElement(element);
//     });
//   });

//   return () => {
//     hiddenElements.forEach((item) => {
//       item.element.style.display = item.display;
//       item.element.style.visibility = item.visibility;
//       item.element.style.opacity = item.opacity;
//       item.element.style.pointerEvents = item.pointerEvents;
//     });
//   };
// }

// export default function Cities() {
//   const [cities, setCities] = useState([]);
//   const [allProjects, setAllProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [modalSearch, setModalSearch] = useState("");

//   useEffect(() => {
//     const loadCities = async () => {
//       try {
//         setLoading(true);

//         const [cityRes, propertyRes] = await Promise.all([
//           apiGet("/admindashboard/cities/"),
//           apiGet("/admindashboard/properties/"),
//         ]);

//         const cityList = Array.isArray(cityRes) ? cityRes : [];
//         const allProperties = Array.isArray(propertyRes) ? propertyRes : [];

//         const visibleProperties = allProperties.filter((item) => {
//           const postStatus = String(item?.post_status || "").toLowerCase();
//           const isApproved = item?.is_approved === true;

//           return postStatus === "publish" && isApproved;
//         });

//         const mappedCities = cityList.map((city, index) => {
//           const citySlug = normalizeText(city.city_slug);
//           const cityName = normalizeText(city.city);

//           const cityProperties = visibleProperties.filter((item) => {
//             return (
//               normalizeText(item.city_slug) === citySlug ||
//               normalizeText(item.city) === cityName
//             );
//           });

//           const featuredProperty = cityProperties[0] || null;

//           return {
//             id: index + 1,
//             city: city.city,
//             city_slug: city.city_slug || slugify(city.city),
//             properties: cityProperties.length,
//             imageSrc: getProjectImage(
//               featuredProperty,
//               fallbackImages[index % fallbackImages.length]
//             ),
//             projects: cityProperties,
//           };
//         });

//         setCities(mappedCities);
//         setAllProjects(visibleProperties);
//       } catch (error) {
//         console.error("Cities fetch error:", error);
//         setCities([]);
//         setAllProjects([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCities();
//   }, []);

//   const selectedCityProjects = useMemo(() => {
//     if (!selectedCity) return [];

//     const citySlug = normalizeText(selectedCity.city_slug);
//     const cityName = normalizeText(selectedCity.city);

//     return allProjects.filter((project) => {
//       return (
//         normalizeText(project.city_slug) === citySlug ||
//         normalizeText(project.city) === cityName
//       );
//     });
//   }, [selectedCity, allProjects]);

//   const filteredCityProjects = useMemo(() => {
//     const term = normalizeText(modalSearch);

//     if (!term) return selectedCityProjects;

//     return selectedCityProjects.filter((project) => {
//       const searchableText = [
//         getProjectTitle(project),
//         getDeveloperName(project),
//         getLocationName(project),
//         project?.short_location,
//         project?.location,
//         project?.neighborhood,
//         project?.full_address,
//         project?.city,
//         project?.city_slug,
//         project?.developer_slug,
//         project?.configuration,
//         project?.configuration_text,
//         project?.bhk,
//         project?.property_type,
//         project?.property_status,
//         project?.property_label,
//       ]
//         .filter(Boolean)
//         .join(" ")
//         .toLowerCase();

//       return searchableText.includes(term);
//     });
//   }, [selectedCityProjects, modalSearch]);

//   useEffect(() => {
//     let restoreHiddenSearchBars = null;
//     let timeoutId = null;

//     if (selectedCity) {
//       document.body.style.overflow = "hidden";
//       document.body.classList.add("city-modal-open");
//       setModalSearch("");

//       timeoutId = window.setTimeout(() => {
//         restoreHiddenSearchBars = hideExternalSearchBars();
//       }, 50);
//     } else {
//       document.body.style.overflow = "";
//       document.body.classList.remove("city-modal-open");
//       setModalSearch("");
//     }

//     return () => {
//       if (timeoutId) {
//         window.clearTimeout(timeoutId);
//       }

//       document.body.style.overflow = "";
//       document.body.classList.remove("city-modal-open");

//       if (restoreHiddenSearchBars) {
//         restoreHiddenSearchBars();
//       }
//     };
//   }, [selectedCity]);

//   const closeModal = () => {
//     setSelectedCity(null);
//     setModalSearch("");
//   };

//   return (
//     <>
//       <section className="section-neighborhoods growl-cities-section">
//         <div className="tf-container">
//           <div className="col-12">
//             <div className="heading-section text-center mb-48">
//               <h2 className="title split-text effect-right">
//                 <SplitTextAnimation text="Trending Destinations" />
//               </h2>
//               <p className="text-1 split-text split-lines-transform">
//                 Explore popular cities and view available projects.
//               </p>
//             </div>

//             {loading ? (
//               <div className="text-center">
//                 <p className="text-1">Loading cities...</p>
//               </div>
//             ) : cities.length > 0 ? (
//               <div className="growl-trending-city-grid">
//                 {cities.map((city, index) => (
//                   <button
//                     type="button"
//                     key={city.city_slug || index}
//                     className={`growl-trending-city-card city-card-${index}`}
//                     onClick={() => setSelectedCity(city)}
//                   >
//                     <Image
//                       src={city.imageSrc}
//                       alt={city.city || "City"}
//                       width={900}
//                       height={560}
//                       className="growl-trending-city-img"
//                       priority={index < 4}
//                     />

//                     <div className="growl-trending-overlay" />

//                     <div className="growl-trending-content">
//                       <h3>
//                         {city.city}
//                         <span>🇮🇳</span>
//                       </h3>

//                       <p>
//                         {city.properties}{" "}
//                         {city.properties === 1 ? "Project" : "Projects"}
//                       </p>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center">
//                 <p className="text-1">No cities found.</p>
//               </div>
//             )}

//             <div className="growl-plot-section">
//               <Link href={plotFeature.href} className="growl-plot-card">
//                 <div className="growl-plot-image-box">
//                   <Image
//                     src={plotFeature.imageSrc}
//                     alt={plotFeature.title}
//                     width={420}
//                     height={260}
//                     className="growl-plot-img"
//                   />
//                   <div className="growl-plot-image-overlay" />
//                 </div>

//                 <div className="growl-plot-content">
//                   <span>Featured Category</span>
//                   <h3>{plotFeature.title}</h3>
//                   <p>{plotFeature.subtitle}</p>
//                   <div className="growl-plot-btn">Explore Now</div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {selectedCity && (
//         <div className="city-project-modal">
//           <div className="city-project-backdrop" onClick={closeModal} />

//           <div className="city-project-dialog">
//             <div className="city-project-header">
//               <div className="city-project-header-top">
//                 <div>
//                   <span>Projects in</span>
//                   <h3>{selectedCity.city}</h3>
//                   <p>
//                     Showing {filteredCityProjects.length} of{" "}
//                     {selectedCityProjects.length} project
//                     {selectedCityProjects.length === 1 ? "" : "s"}
//                   </p>
//                 </div>

//                 <button type="button" onClick={closeModal} aria-label="Close">
//                   ×
//                 </button>
//               </div>

//               <div className="city-project-search-box">
//                 <input
//                   type="text"
//                   value={modalSearch}
//                   placeholder={`Search only ${selectedCity.city} projects, locations, developers...`}
//                   onChange={(e) => setModalSearch(e.target.value)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") e.preventDefault();
//                   }}
//                 />

//                 {modalSearch ? (
//                   <button
//                     type="button"
//                     className="city-search-clear"
//                     onClick={() => setModalSearch("")}
//                     aria-label="Clear search"
//                   >
//                     ×
//                   </button>
//                 ) : (
//                   <span className="city-search-icon">⌕</span>
//                 )}
//               </div>
//             </div>

//             {filteredCityProjects.length > 0 ? (
//               <div className="city-project-grid">
//                 {filteredCityProjects.map((project, index) => {
//                   const title = getProjectTitle(project);
//                   const location = getLocationName(project);
//                   const developer = getDeveloperName(project);
//                   const configuration = getConfiguration(project);
//                   const imageSrc = getProjectImage(
//                     project,
//                     fallbackImages[index % fallbackImages.length]
//                   );
//                   const detailHref = getProjectDetailHref(project);

//                   return (
//                     <div
//                       className="city-property-card"
//                       key={project?.id || `${title}-${index}`}
//                     >
//                       <div className="city-property-image-wrap">
//                         <ProtectedPropertyLink href={detailHref}>
//                           <Image
//                             src={imageSrc}
//                             alt={title}
//                             width={615}
//                             height={405}
//                             className="city-property-image"
//                           />
//                         </ProtectedPropertyLink>

//                         <ul className="city-property-tags">
//                           {project?.property_label ? (
//                             <li className="tag-featured">
//                               {project.property_label}
//                             </li>
//                           ) : (
//                             <li className="tag-featured">featured</li>
//                           )}

//                           <li className="tag-status">
//                             {project?.property_status === "for-rent"
//                               ? "For Rent"
//                               : "For Sale"}
//                           </li>
//                         </ul>

//                         <div className="city-property-actions">
//                           <button
//                             type="button"
//                             title="Save"
//                             aria-label="Save project"
//                           >
//                             <SaveIcon />
//                           </button>

//                           <button
//                             type="button"
//                             title="Favorite"
//                             aria-label="Favorite project"
//                           >
//                             <HeartIcon />
//                           </button>
//                         </div>
//                       </div>

//                       <div className="city-property-content">
//                         <h4>
//                           <ProtectedPropertyLink href={detailHref}>
//                             {title}
//                           </ProtectedPropertyLink>
//                         </h4>

//                         {location && (
//                           <p className="city-property-location">
//                             <span className="city-location-svg">
//                               <LocationIcon />
//                             </span>
//                             <span>{location}</span>
//                           </p>
//                         )}

//                         {developer && (
//                           <p className="city-property-developer">{developer}</p>
//                         )}

//                         {configuration && (
//                           <div className="city-property-config">
//                             <strong>Configuration:</strong> {configuration}
//                           </div>
//                         )}

//                         <div className="city-property-price">
//                           {formatPrice(project?.price)}
//                         </div>

//                         <ul className="city-property-meta">
//                           <li>
//                             <strong>{project?.bedrooms || 0}</strong> BHK
//                           </li>
//                           <li>
//                             <strong>{project?.bathrooms || 0}</strong> Bath
//                           </li>
//                           <li>
//                             <strong>
//                               {project?.carpet_area ||
//                                 project?.size_sqft ||
//                                 project?.area ||
//                                 "-"}
//                             </strong>{" "}
//                             Sqft
//                           </li>
//                         </ul>

//                         <div className="city-property-bottom">
//                           <ProtectedPropertyLink
//                             href={detailHref}
//                             className="details-btn"
//                           >
//                             Details
//                           </ProtectedPropertyLink>

//                           <Link href="/contact" className="book-btn">
//                             Book Visit
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="no-city-projects">
//                 <p>
//                   No projects found in {selectedCity.city}
//                   {modalSearch ? ` for "${modalSearch}".` : "."}
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         body.city-modal-open .home-hero-search,
//         body.city-modal-open .hero-search-fixed,
//         body.city-modal-open .hero-search-sticky,
//         body.city-modal-open .fixed-search,
//         body.city-modal-open .fixed-search-box,
//         body.city-modal-open .growl-hero-search-fixed,
//         body.city-modal-open .tf-search-form-fixed,
//         body.city-modal-open .property-search-fixed,
//         body.city-modal-open .hero-search,
//         body.city-modal-open .search-fixed,
//         body.city-modal-open .search-box-fixed,
//         body.city-modal-open .tf-search,
//         body.city-modal-open .wg-search,
//         body.city-modal-open .form-search,
//         body.city-modal-open .hero-search-wrap,
//         body.city-modal-open .wrap-search,
//         body.city-modal-open .search-form,
//         body.city-modal-open .flat-tab-form,
//         body.city-modal-open .wd-search-form,
//         body.city-modal-open .tf-search-form,
//         body.city-modal-open .search-box,
//         body.city-modal-open .search-box-container,
//         body.city-modal-open .search-wrapper,
//         body.city-modal-open .hero-search-wrapper,
//         body.city-modal-open .hero-form-wrapper,
//         body.city-modal-open .form-sl,
//         body.city-modal-open .wd-find-select,
//         body.city-modal-open .wrap-search-home,
//         body.city-modal-open .main-search-wrapper,
//         body.city-modal-open .hero-fixed-search-portal,
//         body.city-modal-open .hero-fixed-search-inner,
//         body.city-modal-open .hero-search-normal-wrap {
//           display: none !important;
//           opacity: 0 !important;
//           visibility: hidden !important;
//           pointer-events: none !important;
//         }

//         body.city-modal-open .city-project-modal,
//         body.city-modal-open .city-project-modal *,
//         body.city-modal-open .city-project-modal .city-project-search-box,
//         body.city-modal-open .city-project-modal .city-project-search-box input {
//           opacity: 1 !important;
//           visibility: visible !important;
//           pointer-events: auto !important;
//         }

//         body.city-modal-open .city-project-modal {
//           display: flex !important;
//         }

//         body.city-modal-open .city-project-modal .city-project-search-box {
//           display: block !important;
//         }

//         body.city-modal-open {
//           overflow: hidden !important;
//         }

//         .growl-cities-section {
//           padding-top: 80px;
//           padding-bottom: 80px;
//           background: #ffffff;
//         }

//         .growl-trending-city-grid {
//           display: grid;
//           grid-template-columns: repeat(6, minmax(0, 1fr));
//           gap: 18px;
//         }

//         .growl-trending-city-card {
//           position: relative;
//           grid-column: span 2;
//           min-height: 235px;
//           border: 0;
//           outline: 0;
//           padding: 0;
//           border-radius: 12px;
//           overflow: hidden;
//           cursor: pointer;
//           background: #111827;
//           text-align: left;
//           box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
//         }

//         .growl-trending-city-card.city-card-0,
//         .growl-trending-city-card.city-card-1 {
//           grid-column: span 3;
//           min-height: 275px;
//         }

//         .growl-trending-city-img {
//           width: 100% !important;
//           height: 100% !important;
//           object-fit: cover !important;
//           display: block;
//           transition: transform 0.45s ease;
//         }

//         .growl-trending-city-card:hover .growl-trending-city-img {
//           transform: scale(1.06);
//         }

//         .growl-trending-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             180deg,
//             rgba(11, 19, 32, 0.7) 0%,
//             rgba(11, 19, 32, 0.2) 45%,
//             rgba(11, 19, 32, 0.5) 100%
//           );
//           z-index: 1;
//         }

//         .growl-trending-content {
//           position: absolute;
//           left: 18px;
//           right: 18px;
//           top: 18px;
//           z-index: 2;
//           color: #ffffff;
//         }

//         .growl-trending-content h3 {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           color: #ffffff;
//           font-size: 24px;
//           line-height: 1.1;
//           font-weight: 800;
//           margin: 0 0 10px;
//         }

//         .growl-trending-content h3 span {
//           font-size: 20px;
//         }

//         .growl-trending-content p {
//           display: inline-flex;
//           align-items: center;
//           min-height: 30px;
//           padding: 0 12px;
//           border-radius: 999px;
//           margin: 0;
//           background: rgba(255, 255, 255, 0.2);
//           color: #ffffff;
//           font-size: 13px;
//           font-weight: 700;
//           backdrop-filter: blur(8px);
//         }

//         .growl-plot-section {
//           width: 100%;
//           margin-top: 24px;
//           display: flex;
//           justify-content: flex-start;
//         }

//         .growl-plot-card {
//           position: relative;
//           display: grid;
//           grid-template-columns: 150px 1fr;
//           width: 100%;
//           max-width: 540px;
//           min-height: 132px;
//           border-radius: 14px;
//           overflow: hidden;
//           background: #0b1320;
//           text-decoration: none;
//           box-shadow: 0 12px 26px rgba(0, 0, 0, 0.12);
//           border: 1px solid rgba(15, 27, 45, 0.12);
//         }

//         .growl-plot-image-box {
//           position: relative;
//           width: 100%;
//           min-height: 132px;
//           background: linear-gradient(135deg, #e5eef7, #8fb0ca);
//           overflow: hidden;
//         }

//         .growl-plot-img {
//           width: 100% !important;
//           height: 100% !important;
//           object-fit: cover !important;
//           display: block;
//           transition: transform 0.45s ease;
//         }

//         .growl-plot-card:hover .growl-plot-img {
//           transform: scale(1.05);
//         }

//         .growl-plot-image-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             180deg,
//             rgba(11, 19, 32, 0.08) 0%,
//             rgba(11, 19, 32, 0.22) 100%
//           );
//           z-index: 1;
//         }

//         .growl-plot-content {
//           padding: 22px 24px;
//           color: #ffffff;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           min-width: 0;
//         }

//         .growl-plot-content span {
//           width: fit-content;
//           min-height: 23px;
//           padding: 0 10px;
//           border-radius: 999px;
//           display: inline-flex;
//           align-items: center;
//           background: rgba(255, 122, 26, 0.18);
//           color: #ff7a1a;
//           font-size: 10px;
//           line-height: 1;
//           font-weight: 900;
//           margin-bottom: 8px;
//         }

//         .growl-plot-content h3 {
//           color: #ffffff;
//           font-size: 28px;
//           line-height: 1;
//           font-weight: 900;
//           margin: 0 0 6px;
//         }

//         .growl-plot-content p {
//           color: rgba(255, 255, 255, 0.84);
//           font-size: 12px;
//           line-height: 1.35;
//           font-weight: 700;
//           margin: 0 0 13px;
//         }

//         .growl-plot-btn {
//           width: fit-content;
//           min-height: 32px;
//           padding: 0 14px;
//           border-radius: 999px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           background: #ff7a1a;
//           color: #ffffff;
//           font-size: 11px;
//           line-height: 1;
//           font-weight: 900;
//         }

//         .city-project-modal {
//           position: fixed;
//           inset: 0;
//           z-index: 2147483000;
//           display: flex;
//           align-items: flex-start;
//           justify-content: center;
//           padding: 28px 24px;
//           overflow-y: auto;
//         }

//         .city-project-backdrop {
//           position: fixed;
//           inset: 0;
//           background: rgba(11, 19, 32, 0.78);
//           backdrop-filter: blur(7px);
//           z-index: 1;
//         }

//         .city-project-dialog {
//           position: relative;
//           z-index: 2;
//           width: min(1180px, 100%);
//           max-height: calc(100vh - 56px);
//           overflow-y: auto;
//           overflow-x: hidden;
//           border-radius: 26px;
//           background: #ffffff;
//           box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
//         }

//         .city-project-header {
//           position: sticky;
//           top: 0;
//           z-index: 50;
//           padding: 22px 28px 20px;
//           background: rgba(255, 255, 255, 0.98);
//           backdrop-filter: blur(14px);
//           border-bottom: 1px solid #e5e7eb;
//         }

//         .city-project-header-top {
//           display: flex;
//           align-items: flex-start;
//           justify-content: space-between;
//           gap: 20px;
//           margin-bottom: 16px;
//         }

//         .city-project-header span {
//           color: #ff7a1a;
//           font-size: 13px;
//           font-weight: 800;
//         }

//         .city-project-header h3 {
//           color: #111827;
//           font-size: 30px;
//           line-height: 1.15;
//           font-weight: 800;
//           margin: 4px 0 4px;
//         }

//         .city-project-header p {
//           margin: 0;
//           color: #6b7280;
//           font-size: 14px;
//           font-weight: 600;
//         }

//         .city-project-header-top > button {
//           width: 44px;
//           height: 44px;
//           min-width: 44px;
//           border: 0;
//           border-radius: 50%;
//           background: #fff4e9;
//           color: #ff7a1a;
//           font-size: 34px;
//           line-height: 1;
//           cursor: pointer;
//         }

//         .city-project-search-box {
//           position: relative;
//           width: 100%;
//           border-radius: 20px;
//           background: #0b1320;
//           padding: 12px;
//           box-shadow: 0 14px 34px rgba(11, 19, 32, 0.18);
//         }

//         .city-project-search-box input {
//           width: 100%;
//           height: 58px;
//           border: 1px solid #e5e7eb;
//           border-radius: 15px;
//           background: #ffffff;
//           color: #111827;
//           font-size: 16px;
//           font-weight: 600;
//           padding: 0 58px 0 20px;
//           outline: none;
//         }

//         .city-project-search-box input::placeholder {
//           color: #6b7280;
//           font-weight: 500;
//         }

//         .city-project-search-box input:focus {
//           border-color: #ff7a1a;
//           box-shadow: 0 0 0 4px rgba(255, 122, 26, 0.12);
//         }

//         .city-search-clear,
//         .city-search-icon {
//           position: absolute;
//           right: 24px;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 34px;
//           height: 34px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .city-search-clear {
//           border: 0;
//           background: #fff4e9;
//           color: #ff7a1a;
//           font-size: 22px;
//           cursor: pointer;
//         }

//         .city-search-icon {
//           color: #ff7a1a;
//           font-size: 28px;
//           pointer-events: none;
//         }

//         .city-project-grid {
//           padding: 28px;
//           display: grid;
//           grid-template-columns: repeat(3, minmax(0, 1fr));
//           gap: 24px;
//         }

//         .city-property-card {
//           overflow: hidden;
//           border-radius: 22px;
//           background: #ffffff;
//           box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
//           border: 1px solid rgba(0, 0, 0, 0.06);
//           transition: all 0.25s ease;
//         }

//         .city-property-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 22px 46px rgba(0, 0, 0, 0.13);
//         }

//         .city-property-image-wrap {
//           position: relative;
//           height: 260px;
//           overflow: hidden;
//           background: #f3f4f6;
//         }

//         .city-property-image {
//           width: 100% !important;
//           height: 100% !important;
//           object-fit: cover !important;
//           display: block;
//           transition: transform 0.45s ease;
//         }

//         .city-property-card:hover .city-property-image {
//           transform: scale(1.06);
//         }

//         .city-property-tags {
//           position: absolute;
//           top: 14px;
//           left: 14px;
//           z-index: 2;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin: 0;
//           padding: 0;
//           list-style: none;
//           max-width: calc(100% - 135px);
//           flex-wrap: wrap;
//         }

//         .city-property-tags li {
//           min-height: 30px;
//           padding: 0 12px;
//           border-radius: 999px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           color: #ffffff;
//           font-size: 12px;
//           font-weight: 800;
//           line-height: 1;
//           text-transform: capitalize;
//           white-space: nowrap;
//         }

//         .tag-featured {
//           background: #ff7a1a;
//         }

//         .tag-status {
//           background: rgba(17, 24, 39, 0.82);
//         }

//         .city-property-actions {
//           position: absolute;
//           right: 14px;
//           top: 14px;
//           z-index: 4;
//           display: flex;
//           gap: 10px;
//         }

//         .city-property-actions button {
//           width: 52px;
//           height: 52px;
//           border: 1px solid rgba(255, 255, 255, 0.18);
//           border-radius: 50%;
//           background: rgba(17, 24, 39, 0.78);
//           color: #ffffff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           padding: 0;
//           box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
//           backdrop-filter: blur(8px);
//           -webkit-backdrop-filter: blur(8px);
//           transition: all 0.22s ease;
//         }

//         .city-property-actions button:hover {
//           background: rgba(17, 24, 39, 0.92);
//           transform: translateY(-2px);
//         }

//         .city-property-actions svg {
//           display: block;
//           flex-shrink: 0;
//         }

//         .city-property-content {
//           padding: 22px 20px 20px;
//         }

//         .city-property-content h4 {
//           margin: 0 0 10px;
//           font-size: 22px;
//           line-height: 1.25;
//           font-weight: 800;
//           color: #111827;
//         }

//         .city-property-content h4 a {
//           color: #111827;
//           text-decoration: none;
//         }

//         .city-property-location {
//           display: flex;
//           align-items: flex-start;
//           gap: 7px;
//           margin: 0 0 8px;
//           color: #6b7280;
//           font-size: 15px;
//           line-height: 1.45;
//         }

//         .city-location-svg {
//           width: 15px;
//           height: 15px;
//           min-width: 15px;
//           margin-top: 2px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           color: #6b7280;
//         }

//         .city-location-svg svg {
//           display: block;
//         }

//         .city-property-developer {
//           margin: 0 0 12px;
//           color: #374151;
//           font-size: 15px;
//           line-height: 1.45;
//         }

//         .city-property-config {
//           background: #f4efec;
//           border-radius: 12px;
//           padding: 10px 14px;
//           margin-bottom: 14px;
//           color: #111827;
//           font-size: 14px;
//           line-height: 1.4;
//         }

//         .city-property-price {
//           color: #ff7a1a;
//           font-size: 16px;
//           line-height: 1.4;
//           font-weight: 900;
//           margin-bottom: 12px;
//         }

//         .city-property-meta {
//           display: flex;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 10px;
//           padding: 0 0 16px;
//           margin: 0 0 16px;
//           list-style: none;
//           border-bottom: 1px solid #eeeeee;
//         }

//         .city-property-meta li {
//           color: #111827;
//           font-size: 15px;
//           font-weight: 600;
//           line-height: 1.3;
//         }

//         .city-property-meta strong {
//           font-weight: 900;
//         }

//         .city-property-bottom {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 14px;
//         }

//         .details-btn,
//         .book-btn {
//           min-height: 44px;
//           padding: 0 28px;
//           border-radius: 10px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 15px;
//           font-weight: 700;
//           text-decoration: none;
//           white-space: nowrap;
//         }

//         .details-btn {
//           border: 1px solid #ff6a00;
//           color: #ff6a00;
//           background: #ffffff;
//         }

//         .book-btn {
//           border: 1px solid #f28c52;
//           color: #ffffff;
//           background: #f28c52;
//         }

//         .no-city-projects {
//           padding: 50px 28px;
//           text-align: center;
//         }

//         .no-city-projects p {
//           margin: 0;
//           color: #6b7280;
//           font-size: 16px;
//           font-weight: 600;
//         }

//         @media (max-width: 1199px) {
//           .growl-trending-city-grid {
//             grid-template-columns: repeat(4, minmax(0, 1fr));
//           }

//           .growl-trending-city-card,
//           .growl-trending-city-card.city-card-0,
//           .growl-trending-city-card.city-card-1 {
//             grid-column: span 2;
//           }

//           .city-project-grid {
//             grid-template-columns: repeat(3, minmax(0, 1fr));
//           }
//         }

//         @media (max-width: 767px) {
//           .growl-cities-section {
//             padding-top: 46px;
//             padding-bottom: 40px;
//           }

//           .growl-cities-section .heading-section {
//             text-align: left !important;
//             margin-bottom: 18px !important;
//           }

//           .growl-cities-section .heading-section .title {
//             font-size: 22px;
//             line-height: 1.2;
//             text-align: left;
//             margin-bottom: 6px;
//           }

//           .growl-cities-section .heading-section .text-1 {
//             font-size: 14px;
//             line-height: 1.35;
//             text-align: left;
//           }

//           .growl-trending-city-grid {
//             display: grid;
//             grid-template-columns: repeat(6, minmax(0, 1fr));
//             gap: 10px;
//           }

//           .growl-trending-city-card {
//             grid-column: span 2;
//             min-height: 72px;
//             border-radius: 6px;
//           }

//           .growl-trending-city-card.city-card-0,
//           .growl-trending-city-card.city-card-1 {
//             grid-column: span 3;
//             min-height: 74px;
//           }

//           .growl-trending-content {
//             left: 12px;
//             right: 8px;
//             top: 16px;
//           }

//           .growl-trending-content h3 {
//             font-size: 17px;
//             line-height: 1.05;
//             gap: 5px;
//             margin-bottom: 8px;
//           }

//           .growl-trending-content h3 span {
//             font-size: 14px;
//           }

//           .growl-trending-content p {
//             min-height: 20px;
//             padding: 0 7px;
//             font-size: 10px;
//           }

//           .growl-plot-section {
//             margin-top: 12px;
//           }

//           .growl-plot-card {
//             grid-template-columns: 86px 1fr;
//             max-width: 100%;
//             min-height: 100px;
//             border-radius: 10px;
//             box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
//           }

//           .growl-plot-image-box {
//             min-height: 100px;
//           }

//           .growl-plot-content {
//             padding: 10px 12px;
//           }

//           .growl-plot-content span {
//             min-height: 17px;
//             padding: 0 7px;
//             font-size: 7.5px;
//             margin-bottom: 5px;
//           }

//           .growl-plot-content h3 {
//             font-size: 20px;
//             margin-bottom: 4px;
//           }

//           .growl-plot-content p {
//             font-size: 9px;
//             line-height: 1.25;
//             margin-bottom: 7px;
//           }

//           .growl-plot-btn {
//             min-height: 23px;
//             padding: 0 10px;
//             font-size: 8px;
//           }

//           .city-project-modal {
//             padding: 10px;
//             align-items: flex-start;
//           }

//           .city-project-dialog {
//             width: 100%;
//             max-height: calc(100vh - 20px);
//             border-radius: 18px;
//           }

//           .city-project-header {
//             padding: 12px;
//           }

//           .city-project-header-top {
//             margin-bottom: 10px;
//             gap: 12px;
//           }

//           .city-project-header h3 {
//             font-size: 22px;
//             margin-top: 3px;
//           }

//           .city-project-header p {
//             font-size: 12px;
//           }

//           .city-project-header-top > button {
//             width: 38px;
//             height: 38px;
//             min-width: 38px;
//             font-size: 30px;
//           }

//           .city-project-search-box {
//             border-radius: 15px;
//             padding: 8px;
//           }

//           .city-project-search-box input {
//             height: 46px;
//             border-radius: 11px;
//             font-size: 12px;
//             padding: 0 42px 0 12px;
//           }

//           .city-search-clear,
//           .city-search-icon {
//             right: 16px;
//             width: 26px;
//             height: 26px;
//           }

//           .city-project-grid {
//             padding: 12px;
//             display: grid;
//             grid-template-columns: repeat(3, minmax(0, 1fr));
//             gap: 10px;
//           }

//           .city-property-card {
//             width: 100%;
//             max-width: 100%;
//             border-radius: 14px;
//             box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
//           }

//           .city-property-image-wrap {
//             height: 95px;
//           }

//           .city-property-tags {
//             top: 6px;
//             left: 6px;
//             gap: 4px;
//             max-width: calc(100% - 66px);
//           }

//           .city-property-tags li {
//             min-height: 18px;
//             padding: 0 6px;
//             font-size: 7px;
//             line-height: 1;
//             border-radius: 999px;
//           }

//           .city-property-actions {
//             right: 6px;
//             top: 6px;
//             gap: 4px;
//             display: flex;
//           }

//           .city-property-actions button {
//             width: 24px;
//             height: 24px;
//           }

//           .city-property-actions svg {
//             width: 12px;
//             height: 12px;
//           }

//           .city-property-content {
//             padding: 8px 7px 8px;
//           }

//           .city-property-content h4 {
//             font-size: 10px;
//             line-height: 1.22;
//             margin-bottom: 5px;
//             display: -webkit-box;
//             -webkit-line-clamp: 2;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//           }

//           .city-property-location {
//             font-size: 8px;
//             line-height: 1.25;
//             margin-bottom: 4px;
//             gap: 3px;
//             display: flex;
//             align-items: flex-start;
//             overflow: hidden;
//           }

//           .city-property-location span:last-child {
//             display: -webkit-box;
//             -webkit-line-clamp: 1;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//           }

//           .city-location-svg {
//             width: 9px;
//             height: 9px;
//             min-width: 9px;
//             margin-top: 1px;
//           }

//           .city-location-svg svg {
//             width: 9px;
//             height: 9px;
//           }

//           .city-property-developer {
//             font-size: 8px;
//             line-height: 1.25;
//             margin-bottom: 5px;
//             display: -webkit-box;
//             -webkit-line-clamp: 1;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//           }

//           .city-property-config {
//             font-size: 7px;
//             line-height: 1.2;
//             padding: 5px 6px;
//             border-radius: 7px;
//             margin-bottom: 5px;
//             display: -webkit-box;
//             -webkit-line-clamp: 1;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//           }

//           .city-property-price {
//             font-size: 9px;
//             line-height: 1.2;
//             margin-bottom: 5px;
//           }

//           .city-property-meta {
//             gap: 3px;
//             padding-bottom: 6px;
//             margin-bottom: 7px;
//           }

//           .city-property-meta li {
//             font-size: 7px;
//             line-height: 1.2;
//           }

//           .city-property-bottom {
//             display: grid;
//             grid-template-columns: 1fr;
//             gap: 5px;
//             align-items: stretch;
//           }

//           .details-btn,
//           .book-btn {
//             width: 100%;
//             min-height: 25px;
//             padding: 0 5px;
//             border-radius: 7px;
//             font-size: 7.5px;
//           }
//         }

//         @media (max-width: 380px) {
//           .growl-trending-city-grid {
//             gap: 8px;
//           }

//           .growl-trending-city-card {
//             min-height: 68px;
//           }

//           .growl-trending-city-card.city-card-0,
//           .growl-trending-city-card.city-card-1 {
//             min-height: 70px;
//           }

//           .growl-trending-content {
//             left: 10px;
//             top: 14px;
//           }

//           .growl-trending-content h3 {
//             font-size: 15px;
//           }

//           .growl-plot-card {
//             grid-template-columns: 78px 1fr;
//             min-height: 92px;
//           }

//           .growl-plot-image-box {
//             min-height: 92px;
//           }

//           .growl-plot-content {
//             padding: 9px 10px;
//           }

//           .growl-plot-content h3 {
//             font-size: 18px;
//           }

//           .growl-plot-content p {
//             font-size: 8.5px;
//           }

//           .growl-plot-btn {
//             min-height: 21px;
//             font-size: 7.5px;
//           }

//           .city-project-grid {
//             gap: 8px;
//             padding: 10px;
//             grid-template-columns: repeat(3, minmax(0, 1fr));
//           }

//           .city-property-image-wrap {
//             height: 82px;
//           }

//           .city-property-tags {
//             top: 5px;
//             left: 5px;
//             max-width: calc(100% - 58px);
//             gap: 3px;
//           }

//           .city-property-tags li {
//             min-height: 16px;
//             padding: 0 5px;
//             font-size: 6px;
//           }

//           .city-property-actions {
//             right: 5px;
//             top: 5px;
//             gap: 3px;
//           }

//           .city-property-actions button {
//             width: 21px;
//             height: 21px;
//           }

//           .city-property-actions svg {
//             width: 10px;
//             height: 10px;
//           }

//           .city-property-content {
//             padding: 7px 6px 7px;
//           }

//           .city-property-content h4 {
//             font-size: 9px;
//           }

//           .city-property-location,
//           .city-property-developer {
//             font-size: 7px;
//           }

//           .city-property-config {
//             font-size: 6.5px;
//             padding: 4px 5px;
//           }

//           .city-property-price {
//             font-size: 8px;
//           }

//           .city-property-meta li {
//             font-size: 6.5px;
//           }

//           .details-btn,
//           .book-btn {
//             min-height: 23px;
//             font-size: 7px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }



"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import ProtectedPropertyLink from "@/components/common/ProtectedPropertyLink";
import { apiGet } from "../../lib/api";

const fallbackImages = [
  "/images/section/location-1.jpg",
  "/images/section/location-2.jpg",
  "/images/section/location-3.jpg",
  "/images/section/location-4.jpg",
  "/images/section/location-5.jpg",
  "/images/section/location-6.jpg",
  "/images/section/location-7.jpg",
  "/images/section/location-8.jpg",
];

const plotFeature = {
  title: "Plot",
  subtitle: "Premium land and plot opportunities",
  imageSrc: "/images/section/location-8.jpg",
  href: "/",
};

const GROWL_BLUE = "#1E4D74";
const GROWL_DARK_BLUE = "#173C5B";
const GROWL_YELLOW = "#EEC629";

function SaveIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4.75C7 3.784 7.784 3 8.75 3H15.25C16.216 3 17 3.784 17 4.75V20.25L12 17.25L7 20.25V4.75Z"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.6417 1.54871 7.04097 1.54871 8.5C1.54871 9.95904 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.9379 22.4518 9.22249 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12076 20.84 4.61Z"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatPrice(value) {
  const price = Number(value || 0);

  if (!price) return "Price on Request";

  if (price >= 10000000) {
    const cr = price / 10000000;
    return `₹${Number.isInteger(cr) ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }

  if (price >= 100000) {
    const lac = price / 100000;
    return `₹${Number.isInteger(lac) ? lac.toFixed(0) : lac.toFixed(2)} Lac`;
  }

  return `₹${price.toLocaleString("en-IN")}`;
}

function getProjectTitle(project) {
  return (
    project?.title ||
    project?.project_name ||
    project?.property_name ||
    project?.name ||
    "Project"
  );
}

function getDeveloperName(project) {
  return (
    project?.developer_name ||
    project?.developer ||
    project?.builder_name ||
    project?.builder ||
    ""
  );
}

function getLocationName(project) {
  return (
    project?.short_location ||
    project?.location ||
    project?.neighborhood ||
    project?.full_address ||
    ""
  );
}

function getProjectImage(project, fallbackImage) {
  if (!project) return fallbackImage;

  if (project.imageSrc) return project.imageSrc;
  if (project.featured_image) return project.featured_image;
  if (project.feature_image) return project.feature_image;
  if (project.primary_image) return project.primary_image;
  if (project.image) return project.image;

  if (Array.isArray(project.images) && project.images.length > 0) {
    const primary =
      project.images.find(
        (img) => img?.is_primary && (img?.image || img?.url)
      ) || project.images[0];

    if (primary?.image) return primary.image;
    if (primary?.url) return primary.url;
    if (primary?.image_url) return primary.image_url;
  }

  return fallbackImage;
}

function getImageValue(item) {
  if (!item) return "";

  if (typeof item === "string") return item;

  return (
    item.image_url ||
    item.image ||
    item.url ||
    item.src ||
    item.file ||
    item.path ||
    item.thumbnail ||
    ""
  );
}

function getProjectImages(project, fallbackImage) {
  if (!project) return [fallbackImage];

  const imageSources = [
    project.imageSrc,
    project.featured_image,
    project.feature_image,
    project.primary_image,
    project.cover_image,
    project.thumbnail,
    project.image,
  ];

  const imageGroups = [
    project.images,
    project.gallery,
    project.property_images,
    project.project_images,
    project.photos,
    project.media,
  ];

  imageGroups.forEach((group) => {
    if (!Array.isArray(group)) return;

    const sortedGroup = [...group].sort((a, b) => {
      const aPrimary = a?.is_primary || a?.primary || a?.is_featured;
      const bPrimary = b?.is_primary || b?.primary || b?.is_featured;

      if (aPrimary === bPrimary) return 0;
      return aPrimary ? -1 : 1;
    });

    sortedGroup.forEach((item) => {
      imageSources.push(getImageValue(item));
    });
  });

  const cleanImages = imageSources
    .filter(Boolean)
    .map((item) => String(item).trim())
    .filter(Boolean);

  const uniqueImages = Array.from(new Set(cleanImages));

  return uniqueImages.length > 0 ? uniqueImages : [fallbackImage];
}

function ProjectImageCarousel({ project, fallbackImage, title, detailHref }) {
  const images = useMemo(
    () => getProjectImages(project, fallbackImage),
    [project, fallbackImage]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [project?.id, images.length]);

  const hasMultipleImages = images.length > 1;

  const goToPrevious = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!hasMultipleImages) return;

    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToNext = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!hasMultipleImages) return;

    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const goToSlide = (event, index) => {
    event.preventDefault();
    event.stopPropagation();

    setActiveIndex(index);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches?.[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null || !hasMultipleImages) return;

    const touchEndX = event.changedTouches?.[0]?.clientX ?? touchStartX;
    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) > 35) {
      setActiveIndex((current) => {
        if (difference > 0) {
          return current === images.length - 1 ? 0 : current + 1;
        }

        return current === 0 ? images.length - 1 : current - 1;
      });
    }

    setTouchStartX(null);
  };

  return (
    <div
      className="city-property-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ProtectedPropertyLink href={detailHref} className="city-property-carousel-link">
        <Image
          src={images[activeIndex] || fallbackImage}
          alt={title}
          width={615}
          height={405}
          className="city-property-image"
        />
      </ProtectedPropertyLink>

      {hasMultipleImages && (
        <>
          <button
            type="button"
            className="city-carousel-arrow city-carousel-prev"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            type="button"
            className="city-carousel-arrow city-carousel-next"
            onClick={goToNext}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="city-carousel-dots" aria-label="Property images">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`city-carousel-dot ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={(event) => goToSlide(event, index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


function getConfiguration(project) {
  return (
    project?.configuration_text ||
    project?.configuration ||
    project?.bhk ||
    project?.unit_type ||
    (project?.bedrooms ? `${project.bedrooms} BHK` : "")
  );
}

function getProjectDetailHref(project) {
  const title =
    project?.title ||
    project?.project_name ||
    project?.property_name ||
    project?.name ||
    "property";

  const slug = project?.slug || slugify(title);

  return `/${slug}`;
}

function hideExternalSearchBars() {
  if (typeof window === "undefined") return () => {};

  const selectors = [
    ".home-hero-search",
    ".hero-search-fixed",
    ".hero-search-sticky",
    ".fixed-search",
    ".fixed-search-box",
    ".growl-hero-search-fixed",
    ".tf-search-form-fixed",
    ".property-search-fixed",
    ".hero-search",
    ".search-fixed",
    ".search-box-fixed",
    ".tf-search",
    ".wg-search",
    ".form-search",
    ".hero-search-wrap",
    ".wrap-search",
    ".search-form",
    ".flat-tab-form",
    ".wd-search-form",
    ".tf-search-form",
    ".search-box",
    ".search-box-container",
    ".search-wrapper",
    ".hero-search-wrapper",
    ".hero-form-wrapper",
    ".form-sl",
    ".wd-find-select",
    ".wrap-search-home",
    ".main-search-wrapper",
  ];

  const hiddenElements = [];
  const pushedElements = new WeakSet();

  const hideElement = (element) => {
    if (!element || pushedElements.has(element)) return;
    if (element.closest(".city-project-modal")) return;

    pushedElements.add(element);

    hiddenElements.push({
      element,
      display: element.style.display,
      visibility: element.style.visibility,
      opacity: element.style.opacity,
      pointerEvents: element.style.pointerEvents,
    });

    element.style.display = "none";
    element.style.visibility = "hidden";
    element.style.opacity = "0";
    element.style.pointerEvents = "none";
  };

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      hideElement(element);
    });
  });

  return () => {
    hiddenElements.forEach((item) => {
      item.element.style.display = item.display;
      item.element.style.visibility = item.visibility;
      item.element.style.opacity = item.opacity;
      item.element.style.pointerEvents = item.pointerEvents;
    });
  };
}

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);
  const [modalSearch, setModalSearch] = useState("");

  useEffect(() => {
    const loadCities = async () => {
      try {
        setLoading(true);

        const [cityRes, propertyRes] = await Promise.all([
          apiGet("/admindashboard/cities/"),
          apiGet("/admindashboard/properties/"),
        ]);

        const cityList = Array.isArray(cityRes) ? cityRes : [];
        const allProperties = Array.isArray(propertyRes) ? propertyRes : [];

        const visibleProperties = allProperties.filter((item) => {
          const postStatus = String(item?.post_status || "").toLowerCase();
          const isApproved = item?.is_approved === true;

          return postStatus === "publish" && isApproved;
        });

        const mappedCities = cityList.map((city, index) => {
          const citySlug = normalizeText(city.city_slug);
          const cityName = normalizeText(city.city);

          const cityProperties = visibleProperties.filter((item) => {
            return (
              normalizeText(item.city_slug) === citySlug ||
              normalizeText(item.city) === cityName
            );
          });

          const featuredProperty = cityProperties[0] || null;

          return {
            id: index + 1,
            city: city.city,
            city_slug: city.city_slug || slugify(city.city),
            properties: cityProperties.length,
            imageSrc: getProjectImage(
              featuredProperty,
              fallbackImages[index % fallbackImages.length]
            ),
            projects: cityProperties,
          };
        });

        setCities(mappedCities);
        setAllProjects(visibleProperties);
      } catch (error) {
        console.error("Cities fetch error:", error);
        setCities([]);
        setAllProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadCities();
  }, []);

  const selectedCityProjects = useMemo(() => {
    if (!selectedCity) return [];

    const citySlug = normalizeText(selectedCity.city_slug);
    const cityName = normalizeText(selectedCity.city);

    return allProjects.filter((project) => {
      return (
        normalizeText(project.city_slug) === citySlug ||
        normalizeText(project.city) === cityName
      );
    });
  }, [selectedCity, allProjects]);

  const filteredCityProjects = useMemo(() => {
    const term = normalizeText(modalSearch);

    if (!term) return selectedCityProjects;

    return selectedCityProjects.filter((project) => {
      const searchableText = [
        getProjectTitle(project),
        getDeveloperName(project),
        getLocationName(project),
        project?.short_location,
        project?.location,
        project?.neighborhood,
        project?.full_address,
        project?.city,
        project?.city_slug,
        project?.developer_slug,
        project?.configuration,
        project?.configuration_text,
        project?.bhk,
        project?.property_type,
        project?.property_status,
        project?.property_label,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(term);
    });
  }, [selectedCityProjects, modalSearch]);

  useEffect(() => {
    let restoreHiddenSearchBars = null;
    let timeoutId = null;

    if (selectedCity) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("city-modal-open");
      setModalSearch("");

      timeoutId = window.setTimeout(() => {
        restoreHiddenSearchBars = hideExternalSearchBars();
      }, 50);
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("city-modal-open");
      setModalSearch("");
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      document.body.style.overflow = "";
      document.body.classList.remove("city-modal-open");

      if (restoreHiddenSearchBars) {
        restoreHiddenSearchBars();
      }
    };
  }, [selectedCity]);

  const closeModal = () => {
    setSelectedCity(null);
    setModalSearch("");
  };

  return (
    <>
      <section className="section-neighborhoods growl-cities-section">
        <div className="tf-container">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Trending Destinations" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Explore popular cities and view available projects.
              </p>
            </div>

            {loading ? (
              <div className="text-center">
                <p className="text-1">Loading cities...</p>
              </div>
            ) : cities.length > 0 ? (
              <div className="growl-trending-city-grid">
                {cities.map((city, index) => (
                  <button
                    type="button"
                    key={city.city_slug || index}
                    className={`growl-trending-city-card city-card-${index}`}
                    onClick={() => setSelectedCity(city)}
                  >
                    <Image
                      src={city.imageSrc}
                      alt={city.city || "City"}
                      width={900}
                      height={560}
                      className="growl-trending-city-img"
                      priority={index < 4}
                    />

                    <div className="growl-trending-overlay" />

                    <div className="growl-trending-content">
                      <h3>
                        {city.city}
                        <span>🇮🇳</span>
                      </h3>

                      <p>
                        {city.properties}{" "}
                        {city.properties === 1 ? "Project" : "Projects"}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-1">No cities found.</p>
              </div>
            )}

           
          </div>
        </div>
      </section>

      {selectedCity && (
        <div className="city-project-modal">
          <div className="city-project-backdrop" onClick={closeModal} />

          <div className="city-project-dialog">
            <div className="city-project-header">
              <div className="city-project-header-top">
                <div>
                  <span>Projects in</span>
                  <h3>{selectedCity.city}</h3>
                  <p>
                    Showing {filteredCityProjects.length} of{" "}
                    {selectedCityProjects.length} project
                    {selectedCityProjects.length === 1 ? "" : "s"}
                  </p>
                </div>

                <button type="button" onClick={closeModal} aria-label="Close">
                  ×
                </button>
              </div>

              <div className="city-project-search-box">
                <input
                  type="text"
                  value={modalSearch}
                  placeholder={`Search only ${selectedCity.city} projects, locations, developers...`}
                  onChange={(e) => setModalSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.preventDefault();
                  }}
                />

                {modalSearch ? (
                  <button
                    type="button"
                    className="city-search-clear"
                    onClick={() => setModalSearch("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                ) : (
                  <span className="city-search-icon">⌕</span>
                )}
              </div>
            </div>

            {filteredCityProjects.length > 0 ? (
              <div className="city-project-grid">
                {filteredCityProjects.map((project, index) => {
                  const title = getProjectTitle(project);
                  const location = getLocationName(project);
                  const developer = getDeveloperName(project);
                  const configuration = getConfiguration(project);
                  const imageSrc = getProjectImage(
                    project,
                    fallbackImages[index % fallbackImages.length]
                  );
                  const detailHref = getProjectDetailHref(project);

                  return (
                    <div
                      className="city-property-card"
                      key={project?.id || `${title}-${index}`}
                    >
                      <div className="city-property-image-wrap">
                        <ProjectImageCarousel
                          project={project}
                          fallbackImage={imageSrc}
                          title={title}
                          detailHref={detailHref}
                        />

                        <ul className="city-property-tags">
                          {project?.property_label ? (
                            <li className="tag-featured">
                              {project.property_label}
                            </li>
                          ) : (
                            <li className="tag-featured">featured</li>
                          )}

                          <li className="tag-status">
                            {project?.property_status === "for-rent"
                              ? "For Rent"
                              : "For Sale"}
                          </li>
                        </ul>

                        <div className="city-property-actions">
                          <button
                            type="button"
                            title="Save"
                            aria-label="Save project"
                          >
                            <SaveIcon />
                          </button>

                          <button
                            type="button"
                            title="Favorite"
                            aria-label="Favorite project"
                          >
                            <HeartIcon />
                          </button>
                        </div>
                      </div>

                      <div className="city-property-content">
                        <h4>
                          <ProtectedPropertyLink href={detailHref}>
                            {title}
                          </ProtectedPropertyLink>
                        </h4>

                        {location && (
                          <p className="city-property-location">
                            <span className="city-location-svg">
                              <LocationIcon />
                            </span>
                            <span>{location}</span>
                          </p>
                        )}

                        {developer && (
                          <p className="city-property-developer">{developer}</p>
                        )}

                        {configuration && (
                          <div className="city-property-config">
                            <strong>Configuration:</strong> {configuration}
                          </div>
                        )}

                        <div className="city-property-price">
                          {formatPrice(project?.price)}
                        </div>

                        <ul className="city-property-meta">
                          <li>
                            <strong>{project?.bedrooms || 0}</strong> BHK
                          </li>
                          <li>
                            <strong>{project?.bathrooms || 0}</strong> Bath
                          </li>
                          <li>
                            <strong>
                              {project?.carpet_area ||
                                project?.size_sqft ||
                                project?.area ||
                                "-"}
                            </strong>{" "}
                            Sqft
                          </li>
                        </ul>

                        <div className="city-property-bottom">
                          <ProtectedPropertyLink
                            href={detailHref}
                            className="details-btn"
                          >
                            Details
                          </ProtectedPropertyLink>

                          <Link href="/contact" className="book-btn">
                            Book Visit
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="no-city-projects">
                <p>
                  No projects found in {selectedCity.city}
                  {modalSearch ? ` for "${modalSearch}".` : "."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        body.city-modal-open .home-hero-search,
        body.city-modal-open .hero-search-fixed,
        body.city-modal-open .hero-search-sticky,
        body.city-modal-open .fixed-search,
        body.city-modal-open .fixed-search-box,
        body.city-modal-open .growl-hero-search-fixed,
        body.city-modal-open .tf-search-form-fixed,
        body.city-modal-open .property-search-fixed,
        body.city-modal-open .hero-search,
        body.city-modal-open .search-fixed,
        body.city-modal-open .search-box-fixed,
        body.city-modal-open .tf-search,
        body.city-modal-open .wg-search,
        body.city-modal-open .form-search,
        body.city-modal-open .hero-search-wrap,
        body.city-modal-open .wrap-search,
        body.city-modal-open .search-form,
        body.city-modal-open .flat-tab-form,
        body.city-modal-open .wd-search-form,
        body.city-modal-open .tf-search-form,
        body.city-modal-open .search-box,
        body.city-modal-open .search-box-container,
        body.city-modal-open .search-wrapper,
        body.city-modal-open .hero-search-wrapper,
        body.city-modal-open .hero-form-wrapper,
        body.city-modal-open .form-sl,
        body.city-modal-open .wd-find-select,
        body.city-modal-open .wrap-search-home,
        body.city-modal-open .main-search-wrapper,
        body.city-modal-open .hero-fixed-search-portal,
        body.city-modal-open .hero-fixed-search-inner,
        body.city-modal-open .hero-search-normal-wrap {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }

        body.city-modal-open .city-project-modal,
        body.city-modal-open .city-project-modal *,
        body.city-modal-open .city-project-modal .city-project-search-box,
        body.city-modal-open .city-project-modal .city-project-search-box input {
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
        }

        body.city-modal-open .city-project-modal {
          display: flex !important;
        }

        body.city-modal-open .city-project-modal .city-project-search-box {
          display: block !important;
        }

        body.city-modal-open {
          overflow: hidden !important;
        }

        .growl-cities-section {
          padding-top: 80px;
          padding-bottom: 80px;
          background: #ffffff;
        }

        .growl-trending-city-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 18px;
        }

        .growl-trending-city-card {
          position: relative;
          grid-column: span 2;
          min-height: 235px;
          border: 0;
          outline: 0;
          padding: 0;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          background: #111827;
          text-align: left;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
        }

        .growl-trending-city-card.city-card-0,
        .growl-trending-city-card.city-card-1 {
          grid-column: span 3;
          min-height: 275px;
        }

        .growl-trending-city-img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block;
          transition: transform 0.45s ease;
        }

        .growl-trending-city-card:hover .growl-trending-city-img {
          transform: scale(1.06);
        }

        .growl-trending-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11, 19, 32, 0.7) 0%,
            rgba(11, 19, 32, 0.2) 45%,
            rgba(11, 19, 32, 0.5) 100%
          );
          z-index: 1;
        }

        .growl-trending-content {
          position: absolute;
          left: 18px;
          right: 18px;
          top: 18px;
          z-index: 2;
          color: #ffffff;
        }

        .growl-trending-content h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 24px;
          line-height: 1.1;
          font-weight: 800;
          margin: 0 0 10px;
        }

        .growl-trending-content h3 span {
          font-size: 20px;
        }

        .growl-trending-content p {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          margin: 0;
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          backdrop-filter: blur(8px);
        }

        .growl-plot-section {
          width: 100%;
          margin-top: 24px;
          display: flex;
          justify-content: flex-start;
        }

        .growl-plot-card {
          position: relative;
          display: grid;
          grid-template-columns: 150px 1fr;
          width: 100%;
          max-width: 540px;
          min-height: 132px;
          border-radius: 14px;
          overflow: hidden;
          background: #0b1320;
          text-decoration: none;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(15, 27, 45, 0.12);
        }

        .growl-plot-image-box {
          position: relative;
          width: 100%;
          min-height: 132px;
          background: linear-gradient(135deg, #e5eef7, #8fb0ca);
          overflow: hidden;
        }

        .growl-plot-img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block;
          transition: transform 0.45s ease;
        }

        .growl-plot-card:hover .growl-plot-img {
          transform: scale(1.05);
        }

        .growl-plot-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11, 19, 32, 0.08) 0%,
            rgba(11, 19, 32, 0.22) 100%
          );
          z-index: 1;
        }

        .growl-plot-content {
          padding: 22px 24px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .growl-plot-content span {
          width: fit-content;
          min-height: 23px;
          padding: 0 10px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          background: rgba(238, 198, 41, 0.22);
          color: ${GROWL_BLUE};
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .growl-plot-content h3 {
          color: #ffffff;
          font-size: 28px;
          line-height: 1;
          font-weight: 900;
          margin: 0 0 6px;
        }

        .growl-plot-content p {
          color: rgba(255, 255, 255, 0.84);
          font-size: 12px;
          line-height: 1.35;
          font-weight: 700;
          margin: 0 0 13px;
        }

        .growl-plot-btn {
          width: fit-content;
          min-height: 32px;
          padding: 0 14px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: ${GROWL_BLUE};
          color: #ffffff;
          font-size: 11px;
          line-height: 1;
          font-weight: 900;
        }

        .city-project-modal {
          position: fixed;
          inset: 0;
          z-index: 2147483000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 28px 24px;
          overflow-y: auto;
        }

        .city-project-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(11, 19, 32, 0.78);
          backdrop-filter: blur(7px);
          z-index: 1;
        }

        .city-project-dialog {
          position: relative;
          z-index: 2;
          width: min(1180px, 100%);
          max-height: calc(100vh - 56px);
          overflow-y: auto;
          overflow-x: hidden;
          border-radius: 26px;
          background: #ffffff;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
        }

        .city-project-header {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 22px 28px 20px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #e5e7eb;
        }

        .city-project-header-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 16px;
        }

        .city-project-header span {
          color: ${GROWL_BLUE};
          font-size: 13px;
          font-weight: 800;
        }

        .city-project-header h3 {
          color: #111827;
          font-size: 30px;
          line-height: 1.15;
          font-weight: 800;
          margin: 4px 0 4px;
        }

        .city-project-header p {
          margin: 0;
          color: #6b7280;
          font-size: 14px;
          font-weight: 600;
        }

        .city-project-header-top > button {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border: 0;
          border-radius: 50%;
          background: rgba(238, 198, 41, 0.18);
          color: ${GROWL_BLUE};
          font-size: 34px;
          line-height: 1;
          cursor: pointer;
        }

        .city-project-search-box {
          position: relative;
          width: 100%;
          border-radius: 20px;
          background: #0b1320;
          padding: 12px;
          box-shadow: 0 14px 34px rgba(11, 19, 32, 0.18);
        }

        .city-project-search-box input {
          width: 100%;
          height: 58px;
          border: 1px solid #e5e7eb;
          border-radius: 15px;
          background: #ffffff;
          color: #111827;
          font-size: 16px;
          font-weight: 600;
          padding: 0 58px 0 20px;
          outline: none;
        }

        .city-project-search-box input::placeholder {
          color: #6b7280;
          font-weight: 500;
        }

        .city-project-search-box input:focus {
          border-color: ${GROWL_BLUE};
          box-shadow: 0 0 0 4px rgba(30, 77, 116, 0.14);
        }

        .city-search-clear,
        .city-search-icon {
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .city-search-clear {
          border: 0;
          background: rgba(238, 198, 41, 0.18);
          color: ${GROWL_BLUE};
          font-size: 22px;
          cursor: pointer;
        }

        .city-search-icon {
          color: ${GROWL_BLUE};
          font-size: 28px;
          pointer-events: none;
        }

        .city-project-grid {
          padding: 28px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .city-property-card {
          overflow: hidden;
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.25s ease;
        }

        .city-property-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 46px rgba(0, 0, 0, 0.13);
        }

        .city-property-image-wrap {
          position: relative;
          height: 260px;
          overflow: hidden;
          background: #f3f4f6;
        }

        .city-property-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block;
          transition: transform 0.45s ease;
        }

        .city-property-carousel,
        .city-property-carousel-link {
          position: relative;
          width: 100%;
          height: 100%;
          display: block;
        }

        .city-property-carousel {
          overflow: hidden;
          background: #f3f4f6;
          touch-action: pan-y;
        }

        .city-carousel-arrow {
          position: absolute;
          top: 50%;
          z-index: 8;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255, 255, 255, 0.72);
          border-radius: 50%;
          background: ${GROWL_BLUE};
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          line-height: 1;
          font-weight: 800;
          cursor: pointer;
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(-50%);
          box-shadow: 0 10px 26px rgba(23, 60, 91, 0.32);
          transition: all 0.22s ease;
        }

        .city-carousel-arrow:hover {
          background: ${GROWL_DARK_BLUE};
          border-color: ${GROWL_YELLOW};
          color: ${GROWL_YELLOW};
        }

        .city-carousel-prev {
          left: 12px;
        }

        .city-carousel-next {
          right: 12px;
        }

        .city-carousel-dots {
          position: absolute;
          left: 50%;
          bottom: 13px;
          z-index: 8;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          transform: translateX(-50%);
          padding: 6px 9px;
          border-radius: 999px;
          background: rgba(23, 60, 91, 0.55);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);
        }

        .city-carousel-dot {
          width: 8px;
          height: 8px;
          min-width: 8px;
          border: 0;
          border-radius: 50%;
          padding: 0;
          background: rgba(255, 255, 255, 0.78);
          cursor: pointer;
          transition: all 0.22s ease;
        }

        .city-carousel-dot.active {
          width: 19px;
          border-radius: 999px;
          background: ${GROWL_YELLOW};
        }

        .city-property-card:hover .city-property-image {
          transform: scale(1.06);
        }

        .city-property-tags {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
          max-width: calc(100% - 135px);
          flex-wrap: wrap;
        }

        .city-property-tags li {
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          line-height: 1;
          text-transform: capitalize;
          white-space: nowrap;
        }

        .tag-featured {
          background: ${GROWL_BLUE};
        }

        .tag-status {
          background: rgba(17, 24, 39, 0.82);
        }

        .city-property-actions {
          position: absolute;
          right: 14px;
          top: 14px;
          z-index: 4;
          display: flex;
          gap: 10px;
        }

        .city-property-actions button {
          width: 52px;
          height: 52px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          background: rgba(17, 24, 39, 0.78);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: all 0.22s ease;
        }

        .city-property-actions button:hover {
          background: rgba(17, 24, 39, 0.92);
          transform: translateY(-2px);
        }

        .city-property-actions svg {
          display: block;
          flex-shrink: 0;
        }

        .city-property-content {
          padding: 22px 20px 20px;
        }

        .city-property-content h4 {
          margin: 0 0 10px;
          font-size: 22px;
          line-height: 1.25;
          font-weight: 800;
          color: #111827;
        }

        .city-property-content h4 a {
          color: #111827;
          text-decoration: none;
        }

        .city-property-location {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          margin: 0 0 8px;
          color: #6b7280;
          font-size: 15px;
          line-height: 1.45;
        }

        .city-location-svg {
          width: 15px;
          height: 15px;
          min-width: 15px;
          margin-top: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
        }

        .city-location-svg svg {
          display: block;
        }

        .city-property-developer {
          margin: 0 0 12px;
          color: #374151;
          font-size: 15px;
          line-height: 1.45;
        }

        .city-property-config {
          background: #f4efec;
          border-radius: 12px;
          padding: 10px 14px;
          margin-bottom: 14px;
          color: #111827;
          font-size: 14px;
          line-height: 1.4;
        }

        .city-property-price {
          color: ${GROWL_BLUE};
          font-size: 16px;
          line-height: 1.4;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .city-property-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding: 0 0 16px;
          margin: 0 0 16px;
          list-style: none;
          border-bottom: 1px solid #eeeeee;
        }

        .city-property-meta li {
          color: #111827;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.3;
        }

        .city-property-meta strong {
          font-weight: 900;
        }

        .city-property-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .details-btn,
        .book-btn {
          min-height: 44px;
          padding: 0 28px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
        }

        .details-btn {
          border: 1px solid ${GROWL_BLUE};
          color: ${GROWL_BLUE};
          background: #ffffff;
        }

        .book-btn {
          border: 1px solid ${GROWL_BLUE};
          color: #ffffff;
          background: ${GROWL_BLUE};
        }

        .no-city-projects {
          padding: 50px 28px;
          text-align: center;
        }

        .no-city-projects p {
          margin: 0;
          color: #6b7280;
          font-size: 16px;
          font-weight: 600;
        }

        @media (max-width: 1199px) {
          .growl-trending-city-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .growl-trending-city-card,
          .growl-trending-city-card.city-card-0,
          .growl-trending-city-card.city-card-1 {
            grid-column: span 2;
          }

          .city-project-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .growl-cities-section {
            padding-top: 46px;
            padding-bottom: 40px;
          }

          .growl-cities-section .heading-section {
            text-align: left !important;
            margin-bottom: 18px !important;
          }

          .growl-cities-section .heading-section .title {
            font-size: 22px;
            line-height: 1.2;
            text-align: left;
            margin-bottom: 6px;
          }

          .growl-cities-section .heading-section .text-1 {
            font-size: 14px;
            line-height: 1.35;
            text-align: left;
          }

          .growl-trending-city-grid {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 10px;
          }

          .growl-trending-city-card {
            grid-column: span 2;
            min-height: 72px;
            border-radius: 6px;
          }

          .growl-trending-city-card.city-card-0,
          .growl-trending-city-card.city-card-1 {
            grid-column: span 3;
            min-height: 74px;
          }

          .growl-trending-content {
            left: 12px;
            right: 8px;
            top: 16px;
          }

          .growl-trending-content h3 {
            font-size: 17px;
            line-height: 1.05;
            gap: 5px;
            margin-bottom: 8px;
          }

          .growl-trending-content h3 span {
            font-size: 14px;
          }

          .growl-trending-content p {
            min-height: 20px;
            padding: 0 7px;
            font-size: 10px;
          }

          .growl-plot-section {
            margin-top: 12px;
          }

          .growl-plot-card {
            grid-template-columns: 86px 1fr;
            max-width: 100%;
            min-height: 100px;
            border-radius: 10px;
            box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
          }

          .growl-plot-image-box {
            min-height: 100px;
          }

          .growl-plot-content {
            padding: 10px 12px;
          }

          .growl-plot-content span {
            min-height: 17px;
            padding: 0 7px;
            font-size: 7.5px;
            margin-bottom: 5px;
          }

          .growl-plot-content h3 {
            font-size: 20px;
            margin-bottom: 4px;
          }

          .growl-plot-content p {
            font-size: 9px;
            line-height: 1.25;
            margin-bottom: 7px;
          }

          .growl-plot-btn {
            min-height: 23px;
            padding: 0 10px;
            font-size: 8px;
          }

          .city-project-modal {
            padding: 10px;
            align-items: flex-start;
          }

          .city-project-dialog {
            width: 100%;
            max-height: calc(100vh - 20px);
            border-radius: 18px;
          }

          .city-project-header {
            padding: 12px;
          }

          .city-project-header-top {
            margin-bottom: 10px;
            gap: 12px;
          }

          .city-project-header h3 {
            font-size: 22px;
            margin-top: 3px;
          }

          .city-project-header p {
            font-size: 12px;
          }

          .city-project-header-top > button {
            width: 38px;
            height: 38px;
            min-width: 38px;
            font-size: 30px;
          }

          .city-project-search-box {
            border-radius: 15px;
            padding: 8px;
          }

          .city-project-search-box input {
            height: 46px;
            border-radius: 11px;
            font-size: 12px;
            padding: 0 42px 0 12px;
          }

          .city-search-clear,
          .city-search-icon {
            right: 16px;
            width: 26px;
            height: 26px;
          }

          .city-project-grid {
            padding: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
          }

          .city-property-card {
            width: 100%;
            max-width: 100%;
            border-radius: 14px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          }

          .city-property-image-wrap {
            height: 95px;
          }

          .city-carousel-arrow {
            width: 24px;
            height: 24px;
            font-size: 19px;
            box-shadow: 0 6px 14px rgba(23, 60, 91, 0.25);
          }

          .city-carousel-prev {
            left: 5px;
          }

          .city-carousel-next {
            right: 5px;
          }

          .city-carousel-dots {
            bottom: 5px;
            gap: 4px;
            padding: 4px 6px;
          }

          .city-carousel-dot {
            width: 5px;
            height: 5px;
            min-width: 5px;
          }

          .city-carousel-dot.active {
            width: 12px;
          }

          .city-property-tags {
            top: 6px;
            left: 6px;
            gap: 4px;
            max-width: calc(100% - 66px);
          }

          .city-property-tags li {
            min-height: 18px;
            padding: 0 6px;
            font-size: 7px;
            line-height: 1;
            border-radius: 999px;
          }

          .city-property-actions {
            right: 6px;
            top: 6px;
            gap: 4px;
            display: flex;
          }

          .city-property-actions button {
            width: 24px;
            height: 24px;
          }

          .city-property-actions svg {
            width: 12px;
            height: 12px;
          }

          .city-property-content {
            padding: 8px 7px 8px;
          }

          .city-property-content h4 {
            font-size: 10px;
            line-height: 1.22;
            margin-bottom: 5px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .city-property-location {
            font-size: 8px;
            line-height: 1.25;
            margin-bottom: 4px;
            gap: 3px;
            display: flex;
            align-items: flex-start;
            overflow: hidden;
          }

          .city-property-location span:last-child {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .city-location-svg {
            width: 9px;
            height: 9px;
            min-width: 9px;
            margin-top: 1px;
          }

          .city-location-svg svg {
            width: 9px;
            height: 9px;
          }

          .city-property-developer {
            font-size: 8px;
            line-height: 1.25;
            margin-bottom: 5px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .city-property-config {
            font-size: 7px;
            line-height: 1.2;
            padding: 5px 6px;
            border-radius: 7px;
            margin-bottom: 5px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .city-property-price {
            font-size: 9px;
            line-height: 1.2;
            margin-bottom: 5px;
          }

          .city-property-meta {
            gap: 3px;
            padding-bottom: 6px;
            margin-bottom: 7px;
          }

          .city-property-meta li {
            font-size: 7px;
            line-height: 1.2;
          }

          .city-property-bottom {
            display: grid;
            grid-template-columns: 1fr;
            gap: 5px;
            align-items: stretch;
          }

          .details-btn,
          .book-btn {
            width: 100%;
            min-height: 25px;
            padding: 0 5px;
            border-radius: 7px;
            font-size: 7.5px;
          }
        }

        @media (max-width: 380px) {
          .growl-trending-city-grid {
            gap: 8px;
          }

          .growl-trending-city-card {
            min-height: 68px;
          }

          .growl-trending-city-card.city-card-0,
          .growl-trending-city-card.city-card-1 {
            min-height: 70px;
          }

          .growl-trending-content {
            left: 10px;
            top: 14px;
          }

          .growl-trending-content h3 {
            font-size: 15px;
          }

          .growl-plot-card {
            grid-template-columns: 78px 1fr;
            min-height: 92px;
          }

          .growl-plot-image-box {
            min-height: 92px;
          }

          .growl-plot-content {
            padding: 9px 10px;
          }

          .growl-plot-content h3 {
            font-size: 18px;
          }

          .growl-plot-content p {
            font-size: 8.5px;
          }

          .growl-plot-btn {
            min-height: 21px;
            font-size: 7.5px;
          }

          .city-project-grid {
            gap: 8px;
            padding: 10px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .city-property-image-wrap {
            height: 82px;
          }

          .city-carousel-arrow {
            width: 21px;
            height: 21px;
            font-size: 17px;
          }

          .city-carousel-prev {
            left: 4px;
          }

          .city-carousel-next {
            right: 4px;
          }

          .city-carousel-dots {
            bottom: 4px;
            gap: 3px;
            padding: 3px 5px;
          }

          .city-carousel-dot {
            width: 4px;
            height: 4px;
            min-width: 4px;
          }

          .city-carousel-dot.active {
            width: 10px;
          }

          .city-property-tags {
            top: 5px;
            left: 5px;
            max-width: calc(100% - 58px);
            gap: 3px;
          }

          .city-property-tags li {
            min-height: 16px;
            padding: 0 5px;
            font-size: 6px;
          }

          .city-property-actions {
            right: 5px;
            top: 5px;
            gap: 3px;
          }

          .city-property-actions button {
            width: 21px;
            height: 21px;
          }

          .city-property-actions svg {
            width: 10px;
            height: 10px;
          }

          .city-property-content {
            padding: 7px 6px 7px;
          }

          .city-property-content h4 {
            font-size: 9px;
          }

          .city-property-location,
          .city-property-developer {
            font-size: 7px;
          }

          .city-property-config {
            font-size: 6.5px;
            padding: 4px 5px;
          }

          .city-property-price {
            font-size: 8px;
          }

          .city-property-meta li {
            font-size: 6.5px;
          }

          .details-btn,
          .book-btn {
            min-height: 23px;
            font-size: 7px;
          }
        }
      `}</style>
    </>
  );
}