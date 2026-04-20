// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { apiGet } from "../lib/api";

// function formatPrice(price) {
//   const num = Number(price || 0);
//   if (!num) return "Price on request";
//   if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
//   if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
//   return `₹${num.toLocaleString()}`;
// }

// export default function CityProjectsPage({ citySlug }) {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const loadProjects = async () => {
//       try {
//         const res = await apiGet(`/admindashboard/cities/${citySlug}/properties/`);
//         setProjects(Array.isArray(res) ? res : []);
//       } catch (error) {
//         console.error("City projects fetch error:", error);
//       }
//     };

//     loadProjects();
//   }, [citySlug]);

//   const cityName = projects[0]?.city || citySlug.replaceAll("-", " ");

//   return (
//     <section className="section-property-layout style-1">
//       <div className="tf-container">
//         <div style={{ marginBottom: 24 }}>
//           <h2 className="title">
//             Properties in {cityName}
//           </h2>
//           <p className="text-1">Showing {projects.length} project{projects.length === 1 ? "" : "s"}</p>
//         </div>

//         <div className="row">
//           {projects.map((project) => (
//             <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
//               <div className="box-house hover-img">
//                 <div className="image-wrap">
//                   <Link href={`/property-detail-v1/${project.id}`}>
//                     <Image
//                       alt={project.title}
//                       src={project.imageSrc || "/images/home/house-db-1.jpg"}
//                       width={615}
//                       height={405}
//                     />
//                   </Link>
//                 </div>

//                 <div className="content">
//                   <h5 className="title">
//                     <Link href={`/property-detail-v1/${project.id}`}>
//                       {project.title}
//                     </Link>
//                   </h5>

//                   <p className="location text-1 flex items-center gap-6">
//                     <i className="icon-location" />
//                     {project.short_location || project.location || project.full_address}
//                   </p>

//                   <p className="text-1" style={{ marginTop: 6 }}>
//                     <Link href={`/developers/${project.developer_slug}`}>
//                       {project.developer_name}
//                     </Link>
//                   </p>

//                   <div className="price text-3 fw-6" style={{ marginTop: 8 }}>
//                     {formatPrice(project.price)}
//                   </div>

//                   <ul className="meta-list flex" style={{ marginTop: 8 }}>
//                     <li className="text-1 flex"><span>{project.bedrooms || 0}</span>BHK</li>
//                     <li className="text-1 flex"><span>{project.possession_date || "-"}</span>Possession</li>
//                     <li className="text-1 flex"><span>{project.carpet_area || "-"}</span>Area</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {projects.length === 0 && (
//             <div className="col-12">
//               <p>No properties found for this city.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchForm from "../common/SearchForm";
import { apiGet } from "../lib/api";

function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

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

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function matchesCountFilter(actual, selected) {
  if (!selected) return true;
  const num = toNumber(actual);

  if (selected === "5+") return num >= 5;
  if (selected === "4+") return num >= 4;

  return num === Number(selected);
}

export default function CityProjectsPage({ citySlug }) {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({
    keyword: "",
    city: "",
    location: "",
    propertyType: "",
    propertyStatus: "",
    bedrooms: "",
    bathrooms: "",
    amenities: [],
    sortBy: "Newest",
    priceRange: [0, 100000000],
    areaRange: [0, 5000],
  });

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await apiGet(`/admindashboard/cities/${citySlug}/properties/`);
        setProjects(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error("City projects fetch error:", error);
      }
    };

    loadProjects();
  }, [citySlug]);

  const filteredProjects = useMemo(() => {
    let data = [...projects];

    data = data.filter((project) => {
      const searchableText = normalizeText(
        [
          project.title,
          project.city,
          project.short_location,
          project.location,
          project.full_address,
          project.developer_name,
          project.property_type,
          project.property_status,
        ].join(" ")
      );

      const keywordMatch =
        !filters.keyword ||
        searchableText.includes(normalizeText(filters.keyword));

      const locationValue =
        project.short_location || project.location || project.full_address || "";

      const locationMatch =
        !filters.location || locationValue === filters.location;

      const typeMatch =
        !filters.propertyType || project.property_type === filters.propertyType;

      const statusMatch =
        !filters.propertyStatus ||
        project.property_status === filters.propertyStatus;

      const bedroomsMatch = matchesCountFilter(project.bedrooms, filters.bedrooms);
      const bathroomsMatch = matchesCountFilter(
        project.bathrooms,
        filters.bathrooms
      );

      const price = toNumber(project.price);
      const area = toNumber(project.carpet_area || project.size_sqft);

      const priceMatch =
        price >= filters.priceRange[0] && price <= filters.priceRange[1];

      const areaMatch =
        area >= filters.areaRange[0] && area <= filters.areaRange[1];

      const amenities = Array.isArray(project.amenities) ? project.amenities : [];
      const amenitiesMatch =
        filters.amenities.length === 0 ||
        filters.amenities.every((item) => amenities.includes(item));

      return (
        keywordMatch &&
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
  }, [projects, filters]);

  const cityName = projects[0]?.city || citySlug.replaceAll("-", " ");

  return (
    <section className="section-property-layout style-1">
      <div className="tf-container">
        <div style={{ marginBottom: 24 }}>
          <h2 className="title">Properties in {cityName}</h2>
          <p className="text-1">
            Showing all projects in {cityName} across all locations
          </p>
        </div>

        <div style={{ marginBottom: 30 }}>
          <SearchForm
            projects={projects}
            onFilterChange={setFilters}
            lockedCity={cityName}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <p className="text-1">
            Showing {filteredProjects.length} project
            {filteredProjects.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="row">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
              <div className="box-house hover-img">
                <div className="image-wrap">
                  <Link href={`/property-detail-v1/${project.id}`}>
                    <Image
                      alt={project.title || "Property"}
                      src={project.imageSrc || "/images/home/house-db-1.jpg"}
                      width={615}
                      height={405}
                    />
                  </Link>
                </div>

                <div className="content">
                  <h5 className="title">
                    <Link href={`/property-detail-v1/${project.id}`}>
                      {project.title}
                    </Link>
                  </h5>

                  <p className="location text-1 flex items-center gap-6">
                    <i className="icon-location" />
                    {project.short_location ||
                      project.location ||
                      project.full_address}
                  </p>

                  <p className="text-1" style={{ marginTop: 6 }}>
                    <Link href={`/developers/${project.developer_slug}`}>
                      {project.developer_name}
                    </Link>
                  </p>

                  <div className="price text-3 fw-6" style={{ marginTop: 8 }}>
                    {formatPrice(project.price)}
                  </div>

                  <ul className="meta-list flex" style={{ marginTop: 8 }}>
                    <li className="text-1 flex">
                      <span>{project.bedrooms || 0}</span>BHK
                    </li>
                    <li className="text-1 flex">
                      <span>{project.bathrooms || 0}</span>Bath
                    </li>
                    <li className="text-1 flex">
                      <span>{project.carpet_area || project.size_sqft || "-"}</span>
                      Sqft
                    </li>
                  </ul>

                  <div className="bot flex justify-between items-center" style={{ marginTop: 14 }}>
                    <Link
                      href={`/property-detail-v1/${project.id}`}
                      className="tf-btn style-border pd-4"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-12">
              <p>No properties found for the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}