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

// export default function Cities() {
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     const loadCities = async () => {
//       try {
//         const [cityRes, propertyRes] = await Promise.all([
//           apiGet("/admindashboard/cities/"),
//           apiGet("/admindashboard/properties/"),
//         ]);

//         const allProperties = Array.isArray(propertyRes) ? propertyRes : [];
//         const cityList = Array.isArray(cityRes) ? cityRes : [];

//         const mapped = cityList.map((city, index) => {
//           const count = allProperties.filter(
//             (item) => item.city_slug === city.city_slug
//           ).length;

//           return {
//             id: index + 1,
//             city: city.city,
//             city_slug: city.city_slug,
//             properties: count,
//             imageSrc: fallbackImages[index % fallbackImages.length],
//           };
//         });

//         setCities(mapped);
//       } catch (error) {
//         console.error("Cities fetch error:", error);
//         setCities([]);
//       }
//     };

//     loadCities();
//   }, []);

//   return (
//     <section className="section-neighborhoods ">
//       <div className="tf-container full">
//         <div className="col-12">
//           <div className="heading-section text-center mb-48">
//             <h2 className="title split-text effect-right">
//               <SplitTextAnimation text="Explore The Neighborhoods" />
//             </h2>
//             <p className="text-1 split-text split-lines-transform">
//               Find your dream apartment with our listing
//             </p>
//           </div>

//           <div className="wrap-neighborhoods">
//             {cities.map((location, index) => (
//               <div
//                 key={location.city_slug || index}
//                 className={`box-location hover-img item-${(index % 8) + 1}`}
//               >
//                 <div className="image-wrap">
//                   <Link href={`/cities/${location.city_slug}`}>
//                     <Image
//                       className="lazyload"
//                       alt={location.city}
//                       src={location.imageSrc}
//                       width={442}
//                       height={426}
//                     />
//                   </Link>
//                 </div>
//                 <div className="content">
//                   <h6 className="text_white">{location.city}</h6>
//                   <Link
//                     href={`/cities/${location.city_slug}`}
//                     className="text-1 tf-btn style-border pd-23 text_white"
//                   >
//                     {location.properties} Properties{" "}
//                     <i className="icon-arrow-right" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {cities.length === 0 && (
//             <div className="text-center">
//               <p className="text-1">No cities found.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
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

function getCityImageFromProperty(property, fallbackImage) {
  if (!property) return fallbackImage;

  // most common direct image field
  if (property.imageSrc) return property.imageSrc;
  if (property.featured_image) return property.featured_image;
  if (property.feature_image) return property.feature_image;
  if (property.primary_image) return property.primary_image;
  if (property.image) return property.image;

  // nested images array support
  if (Array.isArray(property.images) && property.images.length > 0) {
    const primary =
      property.images.find((img) => img?.is_primary && (img?.image || img?.url)) ||
      property.images[0];

    if (primary?.image) return primary.image;
    if (primary?.url) return primary.url;
  }

  return fallbackImage;
}

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

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

        // only published + approved properties
        const visibleProperties = allProperties.filter((item) => {
          const postStatus = String(item?.post_status || "").toLowerCase();
          const isApproved = item?.is_approved === true;
          return postStatus === "publish" && isApproved;
        });

        const mapped = cityList.map((city, index) => {
          const citySlug = normalizeText(city.city_slug);
          const cityName = normalizeText(city.city);

          const cityProperties = visibleProperties.filter((item) => {
            return (
              normalizeText(item.city_slug) === citySlug ||
              normalizeText(item.city) === cityName
            );
          });

          const featuredProperty = cityProperties[0] || null;
          const cityImage = getCityImageFromProperty(
            featuredProperty,
            fallbackImages[index % fallbackImages.length]
          );

          return {
            id: index + 1,
            city: city.city,
            city_slug: city.city_slug,
            properties: cityProperties.length,
            imageSrc: cityImage,
          };
        });

        setCities(mapped);
      } catch (error) {
        console.error("Cities fetch error:", error);
        setCities([]);
      } finally {
        setLoading(false);
      }
    };

    loadCities();
  }, []);

  return (
    <section className="section-neighborhoods growl-cities-section">
      <div className="tf-container">
        <div className="col-12">
          <div className="heading-section text-center mb-48">
            <h2 className="title split-text effect-right">
              <SplitTextAnimation text="Explore The Neighborhoods" />
            </h2>
            <p className="text-1 split-text split-lines-transform">
              Find your dream apartment with our listing
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <p className="text-1">Loading cities...</p>
            </div>
          ) : cities.length > 0 ? (
            <div className="growl-cities-grid">
              {cities.map((location, index) => (
                <div
                  key={location.city_slug || index}
                  className="growl-city-card hover-img"
                >
                  <div className="growl-city-image-wrap">
                    <Link href={`/cities/${location.city_slug}`}>
                      <Image
                        alt={location.city || "City"}
                        src={location.imageSrc}
                        width={600}
                        height={420}
                        className="growl-city-image"
                        priority={index < 4}
                      />
                    </Link>
                  </div>

                  <div className="growl-city-overlay">
                    <div className="growl-city-content">
                      <h6 className="text_white mb-10">{location.city}</h6>
                      <Link
                        href={`/cities/${location.city_slug}`}
                        className="text-1 tf-btn style-border pd-23 text_white"
                      >
                        {location.properties} Properties{" "}
                        <i className="icon-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-1">No cities found.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .growl-cities-section {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .growl-cities-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .growl-city-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          min-height: 320px;
          background: #f4f4f4;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
        }

        .growl-city-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 320px;
          overflow: hidden;
          background: #f3f3f3;
        }

        .growl-city-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block;
          transition: transform 0.5s ease;
        }

        .growl-city-card:hover .growl-city-image {
          transform: scale(1.06);
        }

        .growl-city-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.08) 10%,
            rgba(0, 0, 0, 0.72) 100%
          );
          padding: 22px;
        }

        .growl-city-content {
          width: 100%;
        }

        .growl-city-content h6 {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
        }

        .growl-city-content .tf-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-color: rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(6px);
        }

        @media (max-width: 1199px) {
          .growl-cities-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 991px) {
          .growl-cities-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .growl-cities-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .growl-city-card,
          .growl-city-image-wrap {
            min-height: 280px;
          }
        }

        @media (max-width: 767px) {
          .growl-cities-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .growl-city-card,
          .growl-city-image-wrap {
            min-height: 260px;
            border-radius: 18px;
          }

          .growl-city-overlay {
            padding: 18px;
          }

          .growl-city-content h6 {
            font-size: 20px;
          }

          .growl-city-content .tf-btn {
            font-size: 14px;
            padding: 10px 16px;
          }
        }
      `}</style>
    </section>
  );
}