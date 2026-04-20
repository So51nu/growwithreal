// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import SplitTextAnimation from "@/components/common/SplitTextAnimation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import React, { useEffect, useState } from "react";
// import { apiGet, apiPost } from "../../lib/api";

// function formatPrice(price) {
//   const num = Number(price || 0);
//   if (!num) return "Price on request";
//   if (num >= 10000000) {
//     return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
//   }
//   if (num >= 100000) {
//     return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
//   }
//   return `₹${num.toLocaleString()}`;
// }

// export default function Properties() {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     const loadProperties = async () => {
//       try {
//         const res = await apiGet("/admindashboard/properties/");
//         const list = Array.isArray(res) ? res.slice(0, 9) : [];
//         setProperties(list);
//       } catch (error) {
//         console.error("Properties fetch error:", error);
//         setProperties([]);
//       }
//     };

//     loadProperties();
//   }, []);

//   const toggleFavorite = async (id) => {
//     try {
//       await apiPost(`/admindashboard/properties/${id}/toggle-favorite/`, {});
//       setProperties((prev) =>
//         prev.map((item) =>
//           item.id === id
//             ? { ...item, is_favorite: !item.is_favorite }
//             : item
//         )
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const renderCard = (property) => (
//     <div className="box-house hover-img ">
//       <div className="image-wrap">
//         <Link href={`/property-detail-v1/${property.id}`}>
//           <Image
//             className="lazyload"
//             alt={property.title || "property"}
//             src={property.imageSrc || "/images/home/house-1.jpg"}
//             width={600}
//             height={401}
//           />
//         </Link>

//         <ul className="box-tag flex gap-8 ">
//           {property.property_label ? (
//             <li className="flat-tag text-4 bg-main fw-6 text_white">
//               {property.property_label}
//             </li>
//           ) : null}
//           <li className="flat-tag text-4 bg-3 fw-6 text_white">
//             {property.property_status === "for-rent" ? "For Rent" : "For Sale"}
//           </li>
//         </ul>

//         <div className="list-btn flex gap-8 ">
//           <button
//             type="button"
//             onClick={() => toggleFavorite(property.id)}
//             className="btn-icon save hover-tooltip"
//           >
//             <i className="icon-save" />
//             <span className="tooltip">
//               {property.is_favorite ? "Remove Favorite" : "Add Favorite"}
//             </span>
//           </button>

//           <Link
//             href={`/property-detail-v1/${property.id}`}
//             className="btn-icon find hover-tooltip"
//           >
//             <i className="icon-find-plus" />
//             <span className="tooltip">Quick View</span>
//           </Link>
//         </div>
//       </div>

//       <div className="content">
//         <h5 className="title">
//           <Link href={`/property-detail-v1/${property.id}`}>
//             {property.title}
//           </Link>
//         </h5>

//         <p className="location text-1 line-clamp-1 ">
//           <i className="icon-location" />{" "}
//           {property.short_location ||
//             property.location ||
//             property.full_address}
//         </p>

//         <ul className="meta-list flex">
//           <li className="text-1 flex">
//             <span>{property.bedrooms || 0}</span>Beds
//           </li>
//           <li className="text-1 flex">
//             <span>{property.bathrooms || 0}</span>Baths
//           </li>
//           <li className="text-1 flex">
//             <span>{property.size_sqft || 0}</span>Sqft
//           </li>
//         </ul>

//         <div className="bot flex justify-between items-center">
//           <h5 className="price">{formatPrice(property.price)}</h5>
//           <div className="wrap-btn flex">
//             <Link
//               href={`/property-detail-v1/${property.id}`}
//               className="tf-btn style-border pd-4"
//             >
//               Details
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="section-listing tf-spacing-1">
//       <div className="tf-container">
//         <div className="row">
//           <div className="col-12">
//             <div className="heading-section text-center ">
//               <h2 className="title split-text effect-right">
//                 <SplitTextAnimation text="Today’s Luxury Listings" />
//               </h2>
//               <p className="text-1 split-text split-lines-transform">
//                 Thousands of luxury home enthusiasts just like you visit our
//                 website.
//               </p>
//             </div>

//             <div
//               dir="ltr"
//               className="swiper style-pagination tf-sw-mobile-1 sw-swiper-767"
//               data-screen={767}
//               data-preview={1}
//               data-space={15}
//             >
//               <div className="swiper-wrapper tf-layout-mobile-md md-col-2  lg-col-3 ">
//                 {properties.map((property) => (
//                   <div key={property.id} className="swiper-slide">
//                     {renderCard(property)}
//                   </div>
//                 ))}
//               </div>
//               <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block" />
//             </div>

//             <Swiper
//               dir="ltr"
//               className="swiper style-pagination tf-sw-mobile-1 sw-swiper-767"
//               modules={[Pagination]}
//               pagination={{
//                 clickable: true,
//                 el: ".spd446",
//               }}
//               spaceBetween={15}
//             >
//               {properties.map((property) => (
//                 <SwiperSlide key={property.id} className="swiper-slide">
//                   {renderCard(property)}
//                 </SwiperSlide>
//               ))}

//               <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block spd446" />
//             </Swiper>

//             {properties.length === 0 && (
//               <div className="text-center mt-20">
//                 <p className="text-1">No properties found.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import React, { useEffect, useMemo, useState } from "react";
import { apiGet, apiPost } from "../../lib/api";

function formatPrice(price) {
  const num = Number(price || 0);
  if (!num) return "Price on request";
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  }
  if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
  }
  return `₹${num.toLocaleString("en-IN")}`;
}

function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function matchesCountFilter(actual, selected) {
  if (!selected) return true;
  const value = toNumber(actual);
  if (selected === "5+") return value >= 5;
  if (selected === "4+") return value >= 4;
  return value === Number(selected);
}

export default function Properties({ filters = {} }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const res = await apiGet("/admindashboard/properties/");
        const list = Array.isArray(res) ? res : [];
        setProperties(list);
      } catch (error) {
        console.error("Properties fetch error:", error);
        setProperties([]);
      }
    };

    loadProperties();
  }, []);

  const toggleFavorite = async (id) => {
    try {
      await apiPost(`/admindashboard/properties/${id}/toggle-favorite/`, {});
      setProperties((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, is_favorite: !item.is_favorite }
            : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProperties = useMemo(() => {
    let data = [...properties];

    data = data.filter((property) => {
      const locationValue =
        property.short_location || property.location || property.full_address || "";

      const searchableText = normalizeText(
        [
          property.title,
          property.city,
          property.short_location,
          property.location,
          property.full_address,
          property.developer_name,
          property.developer_slug,
          property.property_type,
          property.property_status,
        ].join(" ")
      );

      const keywordMatch =
        !filters.keyword ||
        searchableText.includes(normalizeText(filters.keyword));

      const cityMatch = !filters.city || normalizeText(property.city) === normalizeText(filters.city);

      const locationMatch =
        !filters.location ||
        normalizeText(locationValue) === normalizeText(filters.location);

      const typeMatch =
        !filters.propertyType ||
        normalizeText(property.property_type) === normalizeText(filters.propertyType);

      const statusMatch =
        !filters.propertyStatus ||
        normalizeText(property.property_status) === normalizeText(filters.propertyStatus);

      const bedroomsMatch = matchesCountFilter(property.bedrooms, filters.bedrooms);
      const bathroomsMatch = matchesCountFilter(property.bathrooms, filters.bathrooms);

      const price = toNumber(property.price);
      const area = toNumber(property.carpet_area || property.size_sqft);

      const priceRange = filters.priceRange || [0, 500000000];
      const areaRange = filters.areaRange || [0, 5000];

      const priceMatch = price >= priceRange[0] && price <= priceRange[1];
      const areaMatch = area >= areaRange[0] && area <= areaRange[1];

      const projectAmenities = Array.isArray(property.amenities)
        ? property.amenities
        : [];

      const amenitiesMatch =
        !filters.amenities ||
        filters.amenities.length === 0 ||
        filters.amenities.every((item) => projectAmenities.includes(item));

      return (
        keywordMatch &&
        cityMatch &&
        locationMatch &&
        typeMatch &&
        statusMatch &&
        bedroomsMatch &&
        bathroomsMatch &&
        priceMatch &&
        areaMatch &&
        amenitiesMatch
      );
    });

    switch (filters.sortBy) {
      case "Oldest":
        data.sort(
          (a, b) =>
            new Date(a.posting_date || 0).getTime() -
            new Date(b.posting_date || 0).getTime()
        );
        break;
      case "Price Low to High":
        data.sort((a, b) => toNumber(a.price) - toNumber(b.price));
        break;
      case "Price High to Low":
        data.sort((a, b) => toNumber(b.price) - toNumber(a.price));
        break;
      case "Area Low to High":
        data.sort(
          (a, b) =>
            toNumber(a.carpet_area || a.size_sqft) -
            toNumber(b.carpet_area || b.size_sqft)
        );
        break;
      case "Area High to Low":
        data.sort(
          (a, b) =>
            toNumber(b.carpet_area || b.size_sqft) -
            toNumber(a.carpet_area || a.size_sqft)
        );
        break;
      case "Newest":
      default:
        data.sort(
          (a, b) =>
            new Date(b.posting_date || 0).getTime() -
            new Date(a.posting_date || 0).getTime()
        );
        break;
    }

    return data;
  }, [properties, filters]);

  const relatedProjects = useMemo(() => {
    // Case 1: filtered results mile hain
    if (filteredProperties.length > 0) {
      const selected = filteredProperties[0];

      const related = properties.filter((item) => {
        if (item.id === selected.id) return false;

        const sameLocation =
          selected.location &&
          item.location &&
          normalizeText(item.location) === normalizeText(selected.location);

        const sameShortLocation =
          selected.short_location &&
          item.short_location &&
          normalizeText(item.short_location) === normalizeText(selected.short_location);

        const sameCity =
          selected.city &&
          item.city &&
          normalizeText(item.city) === normalizeText(selected.city);

        const sameDeveloper =
          selected.developer_slug &&
          item.developer_slug &&
          selected.developer_slug === item.developer_slug;

        const sameType =
          selected.property_type &&
          item.property_type &&
          selected.property_type === item.property_type;

        return (
          sameLocation ||
          sameShortLocation ||
          sameCity ||
          sameDeveloper ||
          sameType
        );
      });

      return related.slice(0, 6);
    }

    // Case 2: filtered results nahi mile, to fallback recommended dikhao
    const keyword = normalizeText(filters.keyword || "");
    const city = normalizeText(filters.city || "");
    const location = normalizeText(filters.location || "");
    const propertyType = normalizeText(filters.propertyType || "");

    let fallback = properties.filter((item) => {
      const searchableText = normalizeText(
        [
          item.title,
          item.city,
          item.short_location,
          item.location,
          item.full_address,
          item.developer_name,
          item.developer_slug,
          item.property_type,
        ].join(" ")
      );

      const locationValue =
        item.short_location || item.location || item.full_address || "";

      const keywordMatch = keyword ? searchableText.includes(keyword) : false;
      const cityMatch = city ? normalizeText(item.city) === city : false;
      const locationMatch = location
        ? normalizeText(locationValue).includes(location)
        : false;
      const typeMatch = propertyType
        ? normalizeText(item.property_type) === propertyType
        : false;

      return keywordMatch || cityMatch || locationMatch || typeMatch;
    });

    // Agar upar se bhi kuch nahi mila to latest properties dikhao
    if (fallback.length === 0) {
      fallback = [...properties].sort(
        (a, b) =>
          new Date(b.posting_date || 0).getTime() -
          new Date(a.posting_date || 0).getTime()
      );
    }

    return fallback.slice(0, 6);
  }, [filteredProperties, properties, filters]);

  const renderCard = (property) => (
    <div className="box-house hover-img">
      <div className="image-wrap">
        <Link href={`/property-detail-v1/${property.id}`}>
          <Image
            className="lazyload"
            alt={property.title || "property"}
            src={property.imageSrc || "/images/home/house-1.jpg"}
            width={600}
            height={401}
          />
        </Link>

        <ul className="box-tag flex gap-8">
          {property.property_label ? (
            <li className="flat-tag text-4 bg-main fw-6 text_white">
              {property.property_label}
            </li>
          ) : null}
          <li className="flat-tag text-4 bg-3 fw-6 text_white">
            {property.property_status === "for-rent" ? "For Rent" : "For Sale"}
          </li>
        </ul>

        <div className="list-btn flex gap-8">
          <button
            type="button"
            onClick={() => toggleFavorite(property.id)}
            className="btn-icon save hover-tooltip"
          >
            <i className="icon-save" />
            <span className="tooltip">
              {property.is_favorite ? "Remove Favorite" : "Add Favorite"}
            </span>
          </button>

          <Link
            href={`/property-detail-v1/${property.id}`}
            className="btn-icon find hover-tooltip"
          >
            <i className="icon-find-plus" />
            <span className="tooltip">Quick View</span>
          </Link>
        </div>
      </div>

      <div className="content">
        <h5 className="title">
          <Link href={`/property-detail-v1/${property.id}`}>
            {property.title}
          </Link>
        </h5>

        <p className="location text-1 line-clamp-1">
          <i className="icon-location" />{" "}
          {property.short_location || property.location || property.full_address}
        </p>

        <ul className="meta-list flex">
          <li className="text-1 flex">
            <span>{property.bedrooms || 0}</span>Beds
          </li>
          <li className="text-1 flex">
            <span>{property.bathrooms || 0}</span>Baths
          </li>
          <li className="text-1 flex">
            <span>{property.carpet_area || property.size_sqft || 0}</span>Sqft
          </li>
        </ul>

        <div className="bot flex justify-between items-center">
          <h5 className="price">{formatPrice(property.price)}</h5>
          <div className="wrap-btn flex">
            <Link
              href={`/property-detail-v1/${property.id}`}
              className="tf-btn style-border pd-4"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="section-listing tf-spacing-1">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center">
                <h2 className="title split-text effect-right">
                  <SplitTextAnimation text="Today’s Luxury Listings" />
                </h2>
                <p className="text-1 split-text split-lines-transform">
                  Showing {filteredProperties.length} filtered project
                  {filteredProperties.length === 1 ? "" : "s"}.
                </p>
              </div>

              <div className="tf-layout-mobile-md md-col-2 lg-col-3">
                {filteredProperties.slice(0, 9).map((property) => (
                  <div key={property.id}>{renderCard(property)}</div>
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="text-center mt-20">
                  <p className="text-1">
                    No exact properties found for selected filters. Showing recommended projects below.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-listing tf-spacing-1 pt-0">
        <div className="tf-container">
          <div className="heading-section text-center">
            <h2 className="title">
              {filteredProperties.length > 0 ? "Related Projects" : "Recommended Projects"}
            </h2>
            <p className="text-1">
              {filteredProperties.length > 0
                ? "Based on location, city, developer, and project type."
                : "We couldn’t find an exact match, so here are some relevant properties for you."}
            </p>
          </div>

          <div className="tf-layout-mobile-md md-col-2 lg-col-3">
            {relatedProjects.map((property) => (
              <div key={property.id}>{renderCard(property)}</div>
            ))}
          </div>

          {relatedProjects.length === 0 && (
            <div className="text-center mt-20">
              <p className="text-1">No related or recommended projects found.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}