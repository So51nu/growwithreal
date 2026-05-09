// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import SplitTextAnimation from "@/components/common/SplitTextAnimation";
// // import { apiGet } from "../../lib/api";

// // const fallbackImages = [
// //   "/images/section/location-1.jpg",
// //   "/images/section/location-2.jpg",
// //   "/images/section/location-3.jpg",
// //   "/images/section/location-4.jpg",
// //   "/images/section/location-5.jpg",
// //   "/images/section/location-6.jpg",
// //   "/images/section/location-7.jpg",
// //   "/images/section/location-8.jpg",
// // ];

// // export default function Cities() {
// //   const [cities, setCities] = useState([]);

// //   useEffect(() => {
// //     const loadCities = async () => {
// //       try {
// //         const [cityRes, propertyRes] = await Promise.all([
// //           apiGet("/admindashboard/cities/"),
// //           apiGet("/admindashboard/properties/"),
// //         ]);

// //         const allProperties = Array.isArray(propertyRes) ? propertyRes : [];
// //         const cityList = Array.isArray(cityRes) ? cityRes : [];

// //         const mapped = cityList.map((city, index) => {
// //           const count = allProperties.filter(
// //             (item) => item.city_slug === city.city_slug
// //           ).length;

// //           return {
// //             id: index + 1,
// //             city: city.city,
// //             city_slug: city.city_slug,
// //             properties: count,
// //             imageSrc: fallbackImages[index % fallbackImages.length],
// //           };
// //         });

// //         setCities(mapped);
// //       } catch (error) {
// //         console.error("Cities fetch error:", error);
// //         setCities([]);
// //       }
// //     };

// //     loadCities();
// //   }, []);

// //   return (
// //     <section className="section-neighborhoods ">
// //       <div className="tf-container full">
// //         <div className="col-12">
// //           <div className="heading-section text-center mb-48">
// //             <h2 className="title split-text effect-right">
// //               <SplitTextAnimation text="Explore The Neighborhoods" />
// //             </h2>
// //             <p className="text-1 split-text split-lines-transform">
// //               Find your dream apartment with our listing
// //             </p>
// //           </div>

// //           <div className="wrap-neighborhoods">
// //             {cities.map((location, index) => (
// //               <div
// //                 key={location.city_slug || index}
// //                 className={`box-location hover-img item-${(index % 8) + 1}`}
// //               >
// //                 <div className="image-wrap">
// //                   <Link href={`/cities/${location.city_slug}`}>
// //                     <Image
// //                       className="lazyload"
// //                       alt={location.city}
// //                       src={location.imageSrc}
// //                       width={442}
// //                       height={426}
// //                     />
// //                   </Link>
// //                 </div>
// //                 <div className="content">
// //                   <h6 className="text_white">{location.city}</h6>
// //                   <Link
// //                     href={`/cities/${location.city_slug}`}
// //                     className="text-1 tf-btn style-border pd-23 text_white"
// //                   >
// //                     {location.properties} Properties{" "}
// //                     <i className="icon-arrow-right" />
// //                   </Link>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {cities.length === 0 && (
// //             <div className="text-center">
// //               <p className="text-1">No cities found.</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import SplitTextAnimation from "@/components/common/SplitTextAnimation";
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

// function normalizeText(value) {
//   return String(value || "").trim().toLowerCase();
// }

// function getCityImageFromProperty(property, fallbackImage) {
//   if (!property) return fallbackImage;

//   // most common direct image field
//   if (property.imageSrc) return property.imageSrc;
//   if (property.featured_image) return property.featured_image;
//   if (property.feature_image) return property.feature_image;
//   if (property.primary_image) return property.primary_image;
//   if (property.image) return property.image;

//   // nested images array support
//   if (Array.isArray(property.images) && property.images.length > 0) {
//     const primary =
//       property.images.find((img) => img?.is_primary && (img?.image || img?.url)) ||
//       property.images[0];

//     if (primary?.image) return primary.image;
//     if (primary?.url) return primary.url;
//   }

//   return fallbackImage;
// }

// export default function Cities() {
//   const [cities, setCities] = useState([]);
//   const [loading, setLoading] = useState(true);

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

//         // only published + approved properties
//         const visibleProperties = allProperties.filter((item) => {
//           const postStatus = String(item?.post_status || "").toLowerCase();
//           const isApproved = item?.is_approved === true;
//           return postStatus === "publish" && isApproved;
//         });

//         const mapped = cityList.map((city, index) => {
//           const citySlug = normalizeText(city.city_slug);
//           const cityName = normalizeText(city.city);

//           const cityProperties = visibleProperties.filter((item) => {
//             return (
//               normalizeText(item.city_slug) === citySlug ||
//               normalizeText(item.city) === cityName
//             );
//           });

//           const featuredProperty = cityProperties[0] || null;
//           const cityImage = getCityImageFromProperty(
//             featuredProperty,
//             fallbackImages[index % fallbackImages.length]
//           );

//           return {
//             id: index + 1,
//             city: city.city,
//             city_slug: city.city_slug,
//             properties: cityProperties.length,
//             imageSrc: cityImage,
//           };
//         });

//         setCities(mapped);
//       } catch (error) {
//         console.error("Cities fetch error:", error);
//         setCities([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCities();
//   }, []);

//   return (
//     <section className="section-neighborhoods growl-cities-section">
//       <div className="tf-container">
//         <div className="col-12">
//           <div className="heading-section text-center mb-48">
//             <h2 className="title split-text effect-right">
//               <SplitTextAnimation text="Explore The Neighborhoods" />
//             </h2>
//             <p className="text-1 split-text split-lines-transform">
//               Find your dream apartment with our listing
//             </p>
//           </div>

//           {loading ? (
//             <div className="text-center">
//               <p className="text-1">Loading cities...</p>
//             </div>
//           ) : cities.length > 0 ? (
//             <div className="growl-cities-grid">
//               {cities.map((location, index) => (
//                 <div
//                   key={location.city_slug || index}
//                   className="growl-city-card hover-img"
//                 >
//                   <div className="growl-city-image-wrap">
//                     <Link href={`/cities/${location.city_slug}`}>
//                       <Image
//                         alt={location.city || "City"}
//                         src={location.imageSrc}
//                         width={600}
//                         height={420}
//                         className="growl-city-image"
//                         priority={index < 4}
//                       />
//                     </Link>
//                   </div>

//                   <div className="growl-city-overlay">
//                     <div className="growl-city-content">
//                       <h6 className="text_white mb-10">{location.city}</h6>
//                       <Link
//                         href={`/cities/${location.city_slug}`}
//                         className="text-1 tf-btn style-border pd-23 text_white"
//                       >
//                         {location.properties} Properties{" "}
//                         <i className="icon-arrow-right" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center">
//               <p className="text-1">No cities found.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx global>{`
//         .growl-cities-section {
//           padding-top: 80px;
//           padding-bottom: 80px;
//         }

//         .growl-cities-grid {
//           display: grid;
//           grid-template-columns: repeat(4, minmax(0, 1fr));
//           gap: 24px;
//         }

//         .growl-city-card {
//           position: relative;
//           border-radius: 24px;
//           overflow: hidden;
//           min-height: 320px;
//           background: #f4f4f4;
//           box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
//         }

//         .growl-city-image-wrap {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           min-height: 320px;
//           overflow: hidden;
//           background: #f3f3f3;
//         }

//         .growl-city-image {
//           width: 100% !important;
//           height: 100% !important;
//           object-fit: cover !important;
//           display: block;
//           transition: transform 0.5s ease;
//         }

//         .growl-city-card:hover .growl-city-image {
//           transform: scale(1.06);
//         }

//         .growl-city-overlay {
//           position: absolute;
//           inset: 0;
//           display: flex;
//           align-items: flex-end;
//           background: linear-gradient(
//             180deg,
//             rgba(0, 0, 0, 0.08) 10%,
//             rgba(0, 0, 0, 0.72) 100%
//           );
//           padding: 22px;
//         }

//         .growl-city-content {
//           width: 100%;
//         }

//         .growl-city-content h6 {
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 1.2;
//         }

//         .growl-city-content .tf-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           border-color: rgba(255, 255, 255, 0.45);
//           background: rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(6px);
//         }

//         @media (max-width: 1199px) {
//           .growl-cities-grid {
//             grid-template-columns: repeat(3, minmax(0, 1fr));
//           }
//         }

//         @media (max-width: 991px) {
//           .growl-cities-section {
//             padding-top: 60px;
//             padding-bottom: 60px;
//           }

//           .growl-cities-grid {
//             grid-template-columns: repeat(2, minmax(0, 1fr));
//             gap: 18px;
//           }

//           .growl-city-card,
//           .growl-city-image-wrap {
//             min-height: 280px;
//           }
//         }

//         @media (max-width: 767px) {
//           .growl-cities-grid {
//             grid-template-columns: 1fr;
//             gap: 16px;
//           }

//           .growl-city-card,
//           .growl-city-image-wrap {
//             min-height: 260px;
//             border-radius: 18px;
//           }

//           .growl-city-overlay {
//             padding: 18px;
//           }

//           .growl-city-content h6 {
//             font-size: 20px;
//           }

//           .growl-city-content .tf-btn {
//             font-size: 14px;
//             padding: 10px 16px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
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
    .replace(/-+/g, "-");
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
      project.images.find((img) => img?.is_primary && (img?.image || img?.url)) ||
      project.images[0];

    if (primary?.image) return primary.image;
    if (primary?.url) return primary.url;
  }

  return fallbackImage;
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
  return `/property-detail-v1/${project?.id}`;
}

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);

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

  useEffect(() => {
    if (selectedCity) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCity]);

  const closeModal = () => {
    setSelectedCity(null);
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
              <div>
                <span>Projects in</span>
                <h3>{selectedCity.city}</h3>
                <p>
                  Showing {selectedCityProjects.length} project
                  {selectedCityProjects.length === 1 ? "" : "s"}
                </p>
              </div>

              <button type="button" onClick={closeModal} aria-label="Close">
                ×
              </button>
            </div>

            {selectedCityProjects.length > 0 ? (
              <div className="city-project-grid">
                {selectedCityProjects.map((project, index) => {
                  const title = getProjectTitle(project);
                  const location = getLocationName(project);
                  const developer = getDeveloperName(project);
                  const configuration = getConfiguration(project);
                  const imageSrc = getProjectImage(
                    project,
                    fallbackImages[index % fallbackImages.length]
                  );

                  return (
                    <div
                      className="city-property-card"
                      key={project?.id || `${title}-${index}`}
                    >
                      <div className="city-property-image-wrap">
                        <Link href={getProjectDetailHref(project)}>
                          <Image
                            src={imageSrc}
                            alt={title}
                            width={615}
                            height={405}
                            className="city-property-image"
                          />
                        </Link>

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
                          <button type="button" title="Save">
                            <i className="icon-save" />
                          </button>

                          <button type="button" title="Favorite">
                            <i className="icon-heart" />
                          </button>
                        </div>
                      </div>

                      <div className="city-property-content">
                        <h4>
                          <Link href={getProjectDetailHref(project)}>
                            {title}
                          </Link>
                        </h4>

                        {location && (
                          <p className="city-property-location">
                            <i className="icon-location" />
                            {location}
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
                          <Link
                            href={getProjectDetailHref(project)}
                            className="details-btn"
                          >
                            Details
                          </Link>

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
                <p>No published projects found in this city.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
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

        .city-project-modal {
          position: fixed;
          inset: 0;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .city-project-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(11, 19, 32, 0.78);
          backdrop-filter: blur(7px);
        }

        .city-project-dialog {
          position: relative;
          z-index: 2;
          width: min(1180px, 100%);
          max-height: 86vh;
          overflow-y: auto;
          border-radius: 26px;
          background: #ffffff;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
        }

        .city-project-header {
          position: sticky;
          top: 0;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px 28px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
        }

        .city-project-header span {
          color: #ff7a1a;
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

        .city-project-header button {
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 50%;
          background: #fff4e9;
          color: #ff7a1a;
          font-size: 34px;
          line-height: 1;
          cursor: pointer;
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
        }

        .city-property-tags li {
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          text-transform: capitalize;
        }

        .tag-featured {
          background: #ff7a1a;
        }

        .tag-status {
          background: rgba(17, 24, 39, 0.82);
        }

        .city-property-actions {
          position: absolute;
          right: 14px;
          top: 14px;
          z-index: 3;
          display: flex;
          gap: 10px;
        }

        .city-property-actions button {
          width: 52px;
          height: 52px;
          border: 0;
          border-radius: 50%;
          background: rgba(17, 24, 39, 0.75);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .city-property-actions i {
          font-size: 20px;
          color: #ffffff;
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
          align-items: center;
          gap: 7px;
          margin: 0 0 8px;
          color: #6b7280;
          font-size: 15px;
          line-height: 1.45;
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
          color: #ff7a1a;
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
        }

        .details-btn {
          border: 1px solid #ff6a00;
          color: #ff6a00;
          background: #ffffff;
        }

        .book-btn {
          border: 1px solid #f28c52;
          color: #ffffff;
          background: #f28c52;
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
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .growl-cities-section {
            padding-top: 46px;
            padding-bottom: 46px;
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

          .growl-trending-overlay {
            background: linear-gradient(
              180deg,
              rgba(11, 19, 32, 0.72) 0%,
              rgba(11, 19, 32, 0.28) 48%,
              rgba(11, 19, 32, 0.62) 100%
            );
          }

          .city-project-modal {
            padding: 10px;
            align-items: center;
          }

          .city-project-dialog {
            width: 100%;
            max-height: 88vh;
            border-radius: 18px;
          }

          .city-project-header {
            padding: 14px;
          }

          .city-project-header h3 {
            font-size: 22px;
          }

          .city-project-header p {
            font-size: 12px;
          }

          .city-project-header button {
            width: 38px;
            height: 38px;
            font-size: 30px;
          }

          .city-project-grid {
            padding: 12px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
          }

          .city-property-card {
            border-radius: 14px;
          }

          .city-property-image-wrap {
            height: 95px;
          }

          .city-property-tags {
            top: 6px;
            left: 6px;
            gap: 4px;
          }

          .city-property-tags li {
            min-height: 20px;
            padding: 0 6px;
            font-size: 8px;
          }

          .city-property-actions {
            display: none;
          }

          .city-property-content {
            padding: 9px 7px 8px;
          }

          .city-property-content h4 {
            font-size: 11px;
            line-height: 1.2;
            margin-bottom: 5px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .city-property-location {
            font-size: 9px;
            line-height: 1.25;
            margin-bottom: 4px;
            gap: 3px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .city-property-developer {
            font-size: 9px;
            line-height: 1.25;
            margin-bottom: 5px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .city-property-config {
            font-size: 8px;
            line-height: 1.2;
            padding: 5px 6px;
            border-radius: 7px;
            margin-bottom: 6px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .city-property-price {
            font-size: 10px;
            margin-bottom: 6px;
          }

          .city-property-meta {
            gap: 4px;
            padding-bottom: 7px;
            margin-bottom: 8px;
          }

          .city-property-meta li {
            font-size: 8px;
            line-height: 1.2;
          }

          .city-property-bottom {
            flex-direction: column;
            gap: 6px;
            align-items: stretch;
          }

          .details-btn,
          .book-btn {
            width: 100%;
            min-height: 28px;
            padding: 0 6px;
            border-radius: 7px;
            font-size: 9px;
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

          .city-project-grid {
            gap: 8px;
            padding: 10px;
          }

          .city-property-image-wrap {
            height: 82px;
          }

          .city-property-content h4 {
            font-size: 10px;
          }

          .city-property-location,
          .city-property-developer,
          .city-property-meta li {
            font-size: 7.5px;
          }

          .details-btn,
          .book-btn {
            min-height: 25px;
            font-size: 8px;
          }
        }
      `}</style>
    </>
  );
}
