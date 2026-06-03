// "use client";

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { apiGet } from "../lib/api";

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
//     .replace(/-+/g, "-");
// }

// function getProjectTitle(item) {
//   return (
//     item?.title ||
//     item?.project_name ||
//     item?.property_name ||
//     item?.project_title ||
//     item?.property_title ||
//     item?.name ||
//     ""
//   );
// }

// function getDeveloperName(item) {
//   return (
//     item?.developer_name ||
//     item?.developer ||
//     item?.builder_name ||
//     item?.builder ||
//     ""
//   );
// }

// function getLocationName(item) {
//   return item?.short_location || item?.location || item?.full_address || "";
// }

// function getResultsArray(response) {
//   if (Array.isArray(response)) return response;
//   if (Array.isArray(response?.results)) return response.results;
//   if (Array.isArray(response?.data)) return response.data;
//   return [];
// }

// export default function FilterTop({ projects = [], onSearch = () => {} }) {
//   const router = useRouter();
//   const suggestionRef = useRef(null);

//   const [searchText, setSearchText] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

//   const [cities, setCities] = useState([]);
//   const [developers, setDevelopers] = useState([]);
//   const [fetchedProjects, setFetchedProjects] = useState([]);

//   const allProjects = useMemo(() => {
//     return projects.length > 0 ? projects : fetchedProjects;
//   }, [projects, fetchedProjects]);

//   useEffect(() => {
//     const loadSearchData = async () => {
//       try {
//         const [citiesRes, developersRes, projectsRes] = await Promise.all([
//           apiGet("/admindashboard/cities/"),
//           apiGet("/admindashboard/developers/"),
//           apiGet("/admindashboard/properties/"),
//         ]);

//         setCities(getResultsArray(citiesRes));
//         setDevelopers(getResultsArray(developersRes));
//         setFetchedProjects(getResultsArray(projectsRes));
//       } catch (error) {
//         console.error("FilterTop search data fetch error:", error);
//         setCities([]);
//         setDevelopers([]);
//         setFetchedProjects([]);
//       }
//     };

//     loadSearchData();
//   }, []);

//   const closeSuggestions = () => {
//     setShowSuggestions(false);
//     setActiveSuggestionIndex(-1);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         suggestionRef.current &&
//         !suggestionRef.current.contains(event.target)
//       ) {
//         closeSuggestions();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const fallbackCitiesFromProjects = useMemo(() => {
//     const map = new Map();

//     allProjects.forEach((item) => {
//       const city = item.city || "";
//       const city_slug = item.city_slug || slugify(city);

//       if (city && city_slug) {
//         map.set(normalizeText(city), { city, city_slug });
//       }
//     });

//     return Array.from(map.values());
//   }, [allProjects]);

//   const fallbackDevelopersFromProjects = useMemo(() => {
//     const map = new Map();

//     allProjects.forEach((item) => {
//       const developer_name = getDeveloperName(item);
//       const developer_slug = item.developer_slug || slugify(developer_name);

//       if (developer_name && developer_slug) {
//         map.set(normalizeText(developer_name), {
//           developer_name,
//           developer_slug,
//         });
//       }
//     });

//     return Array.from(map.values());
//   }, [allProjects]);

//   const finalCities = useMemo(
//     () => (cities.length > 0 ? cities : fallbackCitiesFromProjects),
//     [cities, fallbackCitiesFromProjects]
//   );

//   const finalDevelopers = useMemo(
//     () => (developers.length > 0 ? developers : fallbackDevelopersFromProjects),
//     [developers, fallbackDevelopersFromProjects]
//   );

//   const findCityMatch = (searchValue) => {
//     const normalized = normalizeText(searchValue);
//     if (!normalized) return null;

//     const exactMatch = finalCities.find((item) => {
//       const cityName = normalizeText(item.city);
//       const citySlug = normalizeText(item.city_slug);
//       return cityName === normalized || citySlug === normalized;
//     });

//     if (exactMatch) return exactMatch;

//     const partialMatch = finalCities.find((item) => {
//       const cityName = normalizeText(item.city);
//       const citySlug = normalizeText(item.city_slug);
//       return cityName.includes(normalized) || citySlug.includes(normalized);
//     });

//     return partialMatch || null;
//   };

//   const findDeveloperMatch = (searchValue) => {
//     const normalized = normalizeText(searchValue);
//     if (!normalized) return null;

//     const exactMatch = finalDevelopers.find((item) => {
//       const developerName = normalizeText(item.developer_name);
//       const developerSlug = normalizeText(item.developer_slug);
//       return developerName === normalized || developerSlug === normalized;
//     });

//     if (exactMatch) return exactMatch;

//     const partialMatch = finalDevelopers.find((item) => {
//       const developerName = normalizeText(item.developer_name);
//       const developerSlug = normalizeText(item.developer_slug);

//       return (
//         developerName.includes(normalized) || developerSlug.includes(normalized)
//       );
//     });

//     return partialMatch || null;
//   };

//   const findProjectMatch = (searchValue) => {
//     const normalized = normalizeText(searchValue);
//     if (!normalized) return null;

//     const exactMatch = allProjects.find((item) => {
//       const title = normalizeText(getProjectTitle(item));
//       const slug = normalizeText(
//         item.slug || item.property_slug || item.project_slug
//       );

//       return title === normalized || slug === normalized;
//     });

//     if (exactMatch) return exactMatch;

//     const partialMatch = allProjects.find((item) => {
//       const title = normalizeText(getProjectTitle(item));
//       const slug = normalizeText(
//         item.slug || item.property_slug || item.project_slug
//       );

//       return title.includes(normalized) || slug.includes(normalized);
//     });

//     return partialMatch || null;
//   };

//   const searchSuggestions = useMemo(() => {
//     const keyword = normalizeText(searchText);

//     if (!keyword || keyword.length < 1) return [];

//     const suggestionMap = new Map();

//     finalCities.forEach((item) => {
//       const cityName = item.city || "";
//       const citySlug = item.city_slug || slugify(cityName);

//       if (
//         normalizeText(cityName).includes(keyword) ||
//         normalizeText(citySlug).includes(keyword)
//       ) {
//         const key = `city-${normalizeText(cityName)}`;

//         if (!suggestionMap.has(key)) {
//           suggestionMap.set(key, {
//             label: cityName,
//             subLabel: "City",
//             value: cityName,
//             type: "city",
//             slug: citySlug,
//           });
//         }
//       }
//     });

//     finalDevelopers.forEach((item) => {
//       const developerName = item.developer_name || "";
//       const developerSlug = item.developer_slug || slugify(developerName);

//       if (
//         normalizeText(developerName).includes(keyword) ||
//         normalizeText(developerSlug).includes(keyword)
//       ) {
//         const key = `developer-${normalizeText(developerName)}`;

//         if (!suggestionMap.has(key)) {
//           suggestionMap.set(key, {
//             label: developerName,
//             subLabel: "Developer",
//             value: developerName,
//             type: "developer",
//             slug: developerSlug,
//           });
//         }
//       }
//     });

//     allProjects.forEach((item) => {
//       const title = getProjectTitle(item);
//       const city = item.city || "";
//       const citySlug = item.city_slug || slugify(city);
//       const location = getLocationName(item);
//       const address = item.full_address || item.address || "";
//       const developer = getDeveloperName(item);
//       const propertyType = item.property_type || "";
//       const propertyStatus = item.property_status || "";

//       const searchableText = normalizeText(
//         [
//           title,
//           city,
//           citySlug,
//           location,
//           address,
//           developer,
//           propertyType,
//           propertyStatus,
//           item.slug,
//           item.project_slug,
//           item.property_slug,
//         ].join(" ")
//       );

//       if (!searchableText.includes(keyword)) return;

//       const mainLabel =
//         title || location || city || developer || propertyType || propertyStatus;

//       if (!mainLabel) return;

//       const subLabel = [location, city, developer]
//         .filter(Boolean)
//         .filter((value, index, self) => self.indexOf(value) === index)
//         .join(" • ");

//       const key = `project-${normalizeText(`${mainLabel}-${subLabel}`)}`;

//       if (!suggestionMap.has(key)) {
//         suggestionMap.set(key, {
//           label: mainLabel,
//           subLabel: subLabel || "Project",
//           value: mainLabel,
//           type: "project",
//           city,
//           citySlug,
//           location,
//           propertyType,
//           propertyStatus,
//         });
//       }
//     });

//     return Array.from(suggestionMap.values()).slice(0, 10);
//   }, [searchText, allProjects, finalCities, finalDevelopers]);

//   const applyProjectFilter = (projectItem, fallbackValue = "") => {
//     const projectTitle = getProjectTitle(projectItem) || fallbackValue;

//     const selectedFilters = {
//       keyword: projectTitle,
//       city: projectItem?.city || "",
//       location: getLocationName(projectItem) || "",
//       propertyType: projectItem?.property_type || "",
//       propertyStatus: projectItem?.property_status || "",
//       bedrooms: "",
//       bathrooms: "",
//       amenities: [],
//       sortBy: "Newest",
//       priceRange: [0, 50000000],
//       areaRange: [0, 5000],
//     };

//     setSearchText(projectTitle);
//     onSearch(selectedFilters);
//     closeSuggestions();
//   };

//   const handleSuggestionSelect = (suggestion) => {
//     const selectedValue = suggestion.value || "";
//     setSearchText(selectedValue);

//     if (suggestion.type === "city" && suggestion.slug) {
//       closeSuggestions();
//       router.push(`/cities/${suggestion.slug}`);
//       return;
//     }

//     if (suggestion.type === "developer" && suggestion.slug) {
//       closeSuggestions();
//       router.push(`/developers/${suggestion.slug}`);
//       return;
//     }

//     if (suggestion.type === "project") {
//       const projectMatch = findProjectMatch(selectedValue);

//       if (projectMatch) {
//         applyProjectFilter(projectMatch, selectedValue);
//         return;
//       }
//     }

//     const selectedFilters = {
//       keyword: selectedValue,
//       city: suggestion.city || "",
//       location: suggestion.location || "",
//       propertyType: suggestion.propertyType || "",
//       propertyStatus: suggestion.propertyStatus || "",
//       bedrooms: "",
//       bathrooms: "",
//       amenities: [],
//       sortBy: "Newest",
//       priceRange: [0, 50000000],
//       areaRange: [0, 5000],
//     };

//     onSearch(selectedFilters);
//     closeSuggestions();
//   };

//   const handleSearch = (e) => {
//     if (e) e.preventDefault();

//     const rawSearch = searchText.trim();

//     if (!rawSearch) {
//       onSearch({
//         keyword: "",
//         city: "",
//         location: "",
//         propertyType: "",
//         propertyStatus: "",
//         bedrooms: "",
//         bathrooms: "",
//         amenities: [],
//         sortBy: "Newest",
//         priceRange: [0, 50000000],
//         areaRange: [0, 5000],
//       });
//       closeSuggestions();
//       return;
//     }

//     const cityMatch = findCityMatch(rawSearch);
//     if (cityMatch?.city_slug) {
//       closeSuggestions();
//       router.push(`/cities/${cityMatch.city_slug}`);
//       return;
//     }

//     const developerMatch = findDeveloperMatch(rawSearch);
//     if (developerMatch?.developer_slug) {
//       closeSuggestions();
//       router.push(`/developers/${developerMatch.developer_slug}`);
//       return;
//     }

//     const projectMatch = findProjectMatch(rawSearch);
//     if (projectMatch) {
//       applyProjectFilter(projectMatch, rawSearch);
//       return;
//     }

//     onSearch({
//       keyword: rawSearch,
//       city: "",
//       location: "",
//       propertyType: "",
//       propertyStatus: "",
//       bedrooms: "",
//       bathrooms: "",
//       amenities: [],
//       sortBy: "Newest",
//       priceRange: [0, 50000000],
//       areaRange: [0, 5000],
//     });

//     closeSuggestions();
//   };

//   const handleSearchKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();

//       if (
//         showSuggestions &&
//         activeSuggestionIndex >= 0 &&
//         searchSuggestions[activeSuggestionIndex]
//       ) {
//         handleSuggestionSelect(searchSuggestions[activeSuggestionIndex]);
//         return;
//       }

//       handleSearch(e);
//       return;
//     }

//     if (!showSuggestions || searchSuggestions.length === 0) return;

//     if (e.key === "ArrowDown") {
//       e.preventDefault();

//       setActiveSuggestionIndex((prev) =>
//         prev < searchSuggestions.length - 1 ? prev + 1 : 0
//       );
//     }

//     if (e.key === "ArrowUp") {
//       e.preventDefault();

//       setActiveSuggestionIndex((prev) =>
//         prev > 0 ? prev - 1 : searchSuggestions.length - 1
//       );
//     }

//     if (e.key === "Escape") {
//       closeSuggestions();
//     }
//   };

//   return (
//     <section className="flat-title style-2">
//       <div className="tf-container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="title-inner">
//               <ul className="breadcrumb">
//                 <li>
//                   <Link className="home fw-6 text-color-3" href={`/`}>
//                     Home
//                   </Link>
//                 </li>
//                 <li>Property Listing</li>
//               </ul>
//             </div>

//             <div className="wg-filter style-2 relative filtertop-simple-wrap">
//               <div className="form-title style-2 filtertop-simple-form-title">
//                 <form onSubmit={handleSearch} ref={suggestionRef}>
//                   <fieldset className="filtertop-search-fieldset">
//                     <input
//                       type="text"
//                       placeholder="Search city, developer, project name, location..."
//                       value={searchText}
//                       autoComplete="off"
//                       onChange={(e) => {
//                         setSearchText(e.target.value);
//                         setShowSuggestions(true);
//                         setActiveSuggestionIndex(-1);
//                       }}
//                       onFocus={() => {
//                         if (searchText) setShowSuggestions(true);
//                       }}
//                       onKeyDown={handleSearchKeyDown}
//                     />

//                     {showSuggestions && searchText && (
//                       <div className="filtertop-search-suggestions">
//                         {searchSuggestions.length > 0 ? (
//                           searchSuggestions.map((suggestion, index) => (
//                             <button
//                               type="button"
//                               key={`${suggestion.type}-${suggestion.label}-${index}`}
//                               className={`filtertop-suggestion-item ${
//                                 activeSuggestionIndex === index ? "active" : ""
//                               }`}
//                               onMouseDown={(e) => {
//                                 e.preventDefault();
//                                 handleSuggestionSelect(suggestion);
//                               }}
//                               onMouseEnter={() =>
//                                 setActiveSuggestionIndex(index)
//                               }
//                             >
//                               <span className="filtertop-suggestion-label">
//                                 {suggestion.label}
//                               </span>

//                               {suggestion.subLabel && (
//                                 <span className="filtertop-suggestion-sub">
//                                   {suggestion.subLabel}
//                                 </span>
//                               )}
//                             </button>
//                           ))
//                         ) : (
//                           <div className="filtertop-no-suggestion">
//                             No matching result found
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </fieldset>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .filtertop-simple-wrap {
//           width: 100%;
//         }

//         .filtertop-simple-form-title {
//           display: block !important;
//           width: 100%;
//         }

//         .filtertop-simple-form-title form {
//           position: relative;
//           width: 100%;
//           max-width: 100%;
//           min-width: 0;
//         }

//         .filtertop-search-fieldset {
//           position: relative;
//           margin: 0;
//           padding: 0;
//           border: 0;
//           width: 100%;
//           min-width: 0;
//         }

//         .filtertop-search-fieldset input {
//           width: 100%;
//           min-width: 0;
//           height: 72px;
//           border-radius: 18px;
//           border: 1px solid #e5e7eb;
//           background: #ffffff;
//           color: #111827;
//           font-size: 17px;
//           font-weight: 500;
//           padding: 0 24px;
//           outline: none;
//           box-sizing: border-box;
//         }

//         .filtertop-search-fieldset input:focus {
//           border-color: #f1913d;
//           box-shadow: 0 0 0 4px rgba(241, 145, 61, 0.12);
//         }

//         .filtertop-search-fieldset input::placeholder {
//           color: #6b7280;
//         }

//         .filtertop-search-suggestions {
//           position: absolute;
//           top: calc(100% + 8px);
//           left: 0;
//           right: 0;
//           z-index: 99999;
//           background: #ffffff;
//           border: 1px solid #e5e7eb;
//           border-radius: 14px;
//           box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
//           overflow: hidden;
//           max-height: 330px;
//           overflow-y: auto;
//         }

//         .filtertop-suggestion-item {
//           width: 100%;
//           display: block;
//           text-align: left;
//           padding: 12px 16px;
//           border: 0;
//           border-bottom: 1px solid #f1f1f1;
//           background: #ffffff;
//           cursor: pointer;
//         }

//         .filtertop-suggestion-item:last-child {
//           border-bottom: 0;
//         }

//         .filtertop-suggestion-item:hover,
//         .filtertop-suggestion-item.active {
//           background: #f8fafc;
//         }

//         .filtertop-suggestion-label {
//           display: block;
//           font-size: 15px;
//           font-weight: 600;
//           color: #111827;
//           line-height: 1.3;
//         }

//         .filtertop-suggestion-sub {
//           display: block;
//           font-size: 13px;
//           font-weight: 400;
//           color: #6b7280;
//           margin-top: 3px;
//           line-height: 1.3;
//         }

//         .filtertop-no-suggestion {
//           padding: 14px 16px;
//           font-size: 14px;
//           color: #6b7280;
//           background: #ffffff;
//         }

//         @media (max-width: 767px) {
//           .filtertop-search-fieldset input {
//             height: 50px;
//             font-size: 13px;
//             border-radius: 12px;
//             padding: 0 14px;
//           }

//           .filtertop-suggestion-label {
//             font-size: 14px;
//           }

//           .filtertop-suggestion-sub {
//             font-size: 12px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }





"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiGet } from "../lib/api";

const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=90&w=1900&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=1900&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=90&w=1900&auto=format&fit=crop",
  },
];

const CATEGORY_FILTERS = [
  { label: "Residential Properties", icon: "🏢", value: "residential" },
  { label: "Commercial Properties", icon: "🏙️", value: "commercial" },
  {
    label: "Under Construction Properties",
    icon: "🏗️",
    value: "under construction",
  },
  { label: "Ready to Move Properties", icon: "🏠", value: "ready to move" },
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
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function getResultsArray(response) {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.results)) return response.results;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.cities)) return response.cities;
  if (Array.isArray(response?.properties)) return response.properties;
  if (Array.isArray(response?.projects)) return response.projects;
  return [];
}

function getProjectTitle(item) {
  return (
    item?.title ||
    item?.project_name ||
    item?.property_name ||
    item?.project_title ||
    item?.property_title ||
    item?.name ||
    ""
  );
}

function getDeveloperName(item) {
  return (
    item?.developer_name ||
    item?.developer ||
    item?.builder_name ||
    item?.builder ||
    ""
  );
}

function getLocationName(item) {
  return (
    item?.short_location ||
    item?.location ||
    item?.neighborhood ||
    item?.full_address ||
    item?.address ||
    ""
  );
}

function getProjectDetailHref(item) {
  const title = getProjectTitle(item) || "property";
  const slug =
    item?.slug ||
    item?.property_slug ||
    item?.project_slug ||
    item?.property_id ||
    item?.id ||
    slugify(title);

  return `/${slug}`;
}

function getCityName(item) {
  return item?.city || item?.name || item?.city_name || item?.title || "";
}

function getCitySlug(item) {
  const cityName = getCityName(item);
  return item?.city_slug || item?.slug || slugify(cityName);
}

function getCityLatitude(item) {
  const value = item?.lat || item?.latitude || item?.city_latitude;
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : null;
}

function getCityLongitude(item) {
  const value =
    item?.lng || item?.long || item?.longitude || item?.city_longitude;
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : null;
}

function getDistanceKm(lat1, lon1, lat2, lon2) {
  if (
    lat1 === null ||
    lon1 === null ||
    lat2 === null ||
    lon2 === null ||
    typeof lat1 === "undefined" ||
    typeof lon1 === "undefined" ||
    typeof lat2 === "undefined" ||
    typeof lon2 === "undefined"
  ) {
    return Number.MAX_SAFE_INTEGER;
  }

  const radius = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  return radius * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export default function FilterTop({ projects = [], onSearch = () => {} }) {
  const router = useRouter();
  const suggestionRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const [cities, setCities] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [fetchedProjects, setFetchedProjects] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSearchFixed, setIsSearchFixed] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const allProjects = useMemo(() => {
    return projects.length > 0 ? projects : fetchedProjects;
  }, [projects, fetchedProjects]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loadSearchData = async () => {
      try {
        const [citiesRes, developersRes, propertiesRes] = await Promise.all([
          apiGet("/admindashboard/cities/"),
          apiGet("/admindashboard/developers/"),
          apiGet("/admindashboard/properties/"),
        ]);

        setCities(getResultsArray(citiesRes));
        setDevelopers(getResultsArray(developersRes));

        const propertyList = getResultsArray(propertiesRes);

        const visibleProperties = propertyList.filter((item) => {
          const postStatus = normalizeText(item?.post_status);
          const isApproved = item?.is_approved;

          if (!postStatus && typeof isApproved === "undefined") return true;

          return postStatus === "publish" && isApproved === true;
        });

        setFetchedProjects(visibleProperties);
      } catch (error) {
        console.error("FilterTop search data fetch error:", error);
        setCities([]);
        setDevelopers([]);
        setFetchedProjects([]);
      }
    };

    loadSearchData();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        let detectedCity = "";

        try {
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
          );
          const data = await response.json();

          detectedCity =
            data?.city ||
            data?.locality ||
            data?.principalSubdivision ||
            "";
        } catch (error) {
          console.warn("Reverse geocode failed:", error);
        }

        setUserLocation({ lat, lng, city: detectedCity });
      },
      () => setUserLocation(null),
      {
        enableHighAccuracy: false,
        timeout: 7000,
        maximumAge: 1000 * 60 * 30,
      }
    );
  }, []);

  useEffect(() => {
    const handleFixedSearch = () => {
      if (typeof window === "undefined") return;
      setIsSearchFixed(window.scrollY > 8);
    };

    handleFixedSearch();

    window.addEventListener("scroll", handleFixedSearch, { passive: true });
    window.addEventListener("resize", handleFixedSearch);

    return () => {
      window.removeEventListener("scroll", handleFixedSearch);
      window.removeEventListener("resize", handleFixedSearch);
    };
  }, []);

  const closeSuggestions = () => {
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        closeSuggestions();
        setShowCityDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const fallbackCitiesFromProjects = useMemo(() => {
    const map = new Map();

    allProjects.forEach((item) => {
      const city = item?.city || "";
      const citySlug = item?.city_slug || slugify(city);

      if (city && citySlug) {
        map.set(normalizeText(city), {
          city,
          city_slug: citySlug,
          latitude: item?.latitude || item?.lat || null,
          longitude: item?.longitude || item?.lng || null,
        });
      }
    });

    return Array.from(map.values());
  }, [allProjects]);

  const fallbackDevelopersFromProjects = useMemo(() => {
    const map = new Map();

    allProjects.forEach((item) => {
      const developerName = getDeveloperName(item);
      const developerSlug = item?.developer_slug || slugify(developerName);

      if (developerName && developerSlug) {
        map.set(normalizeText(developerName), {
          developer_name: developerName,
          developer_slug: developerSlug,
        });
      }
    });

    return Array.from(map.values());
  }, [allProjects]);

  const finalCities = useMemo(() => {
    const sourceCities = cities.length > 0 ? cities : fallbackCitiesFromProjects;
    const map = new Map();

    sourceCities.forEach((item) => {
      const cityName = getCityName(item);
      const citySlug = getCitySlug(item);

      if (!cityName || !citySlug) return;

      map.set(normalizeText(cityName), {
        ...item,
        city: cityName,
        city_slug: citySlug,
      });
    });

    return Array.from(map.values());
  }, [cities, fallbackCitiesFromProjects]);

  const finalDevelopers = useMemo(
    () => (developers.length > 0 ? developers : fallbackDevelopersFromProjects),
    [developers, fallbackDevelopersFromProjects]
  );

  const sortedCityOptions = useMemo(() => {
    if (!finalCities.length) return [];

    const detectedCity = normalizeText(userLocation?.city || "");

    const withScore = finalCities.map((item, index) => {
      const cityName = getCityName(item);
      const normalizedCityName = normalizeText(cityName);

      let score = index + 100;

      if (detectedCity) {
        if (normalizedCityName === detectedCity) score = 0;
        else if (
          normalizedCityName.includes(detectedCity) ||
          detectedCity.includes(normalizedCityName)
        ) {
          score = 1;
        }
      }

      const lat = getCityLatitude(item);
      const lng = getCityLongitude(item);

      if (
        userLocation?.lat &&
        userLocation?.lng &&
        lat !== null &&
        lng !== null
      ) {
        const distance = getDistanceKm(
          userLocation.lat,
          userLocation.lng,
          lat,
          lng
        );
        score = Math.min(score, distance);
      }

      return {
        ...item,
        city: cityName,
        city_slug: getCitySlug(item),
        sortScore: score,
      };
    });

    return withScore.sort((a, b) => a.sortScore - b.sortScore);
  }, [finalCities, userLocation]);

  const cityOptions = useMemo(() => sortedCityOptions.slice(0, 20), [
    sortedCityOptions,
  ]);

  const topLocationCities = useMemo(() => sortedCityOptions.slice(0, 6), [
    sortedCityOptions,
  ]);

  useEffect(() => {
    if (selectedCity) return;

    if (cityOptions.length > 0) {
      setSelectedCity(cityOptions[0].city);
    }
  }, [cityOptions, selectedCity]);

  const findCityMatch = (searchValue) => {
    const normalized = normalizeText(searchValue);
    if (!normalized) return null;

    const exactMatch = finalCities.find((item) => {
      const cityName = normalizeText(getCityName(item));
      const citySlug = normalizeText(getCitySlug(item));

      return cityName === normalized || citySlug === normalized;
    });

    if (exactMatch) return exactMatch;

    return (
      finalCities.find((item) => {
        const cityName = normalizeText(getCityName(item));
        const citySlug = normalizeText(getCitySlug(item));

        return cityName.includes(normalized) || citySlug.includes(normalized);
      }) || null
    );
  };

  const findDeveloperMatch = (searchValue) => {
    const normalized = normalizeText(searchValue);
    if (!normalized) return null;

    const exactMatch = finalDevelopers.find((item) => {
      const developerName = normalizeText(item?.developer_name);
      const developerSlug = normalizeText(item?.developer_slug);

      return developerName === normalized || developerSlug === normalized;
    });

    if (exactMatch) return exactMatch;

    return (
      finalDevelopers.find((item) => {
        const developerName = normalizeText(item?.developer_name);
        const developerSlug = normalizeText(item?.developer_slug);

        return (
          developerName.includes(normalized) ||
          developerSlug.includes(normalized)
        );
      }) || null
    );
  };

  const findProjectMatch = (searchValue) => {
    const normalized = normalizeText(searchValue);
    if (!normalized) return null;

    const exactMatch = allProjects.find((item) => {
      const title = normalizeText(getProjectTitle(item));
      const slug = normalizeText(
        item?.slug || item?.property_slug || item?.project_slug
      );

      return title === normalized || slug === normalized;
    });

    if (exactMatch) return exactMatch;

    return (
      allProjects.find((item) => {
        const title = normalizeText(getProjectTitle(item));
        const slug = normalizeText(
          item?.slug || item?.property_slug || item?.project_slug
        );
        const city = normalizeText(item?.city);
        const citySlug = normalizeText(item?.city_slug);
        const location = normalizeText(getLocationName(item));
        const developer = normalizeText(getDeveloperName(item));
        const developerSlug = normalizeText(item?.developer_slug);
        const propertyType = normalizeText(item?.property_type);
        const propertyStatus = normalizeText(item?.property_status);
        const configuration = normalizeText(
          item?.configuration_text ||
            item?.configuration ||
            item?.bhk ||
            item?.unit_type
        );

        return (
          title.includes(normalized) ||
          slug.includes(normalized) ||
          city.includes(normalized) ||
          citySlug.includes(normalized) ||
          location.includes(normalized) ||
          developer.includes(normalized) ||
          developerSlug.includes(normalized) ||
          propertyType.includes(normalized) ||
          propertyStatus.includes(normalized) ||
          configuration.includes(normalized)
        );
      }) || null
    );
  };

  const searchSuggestions = useMemo(() => {
    const keyword = normalizeText(searchText);
    if (!keyword || keyword.length < 1) return [];

    const suggestionMap = new Map();

    finalCities.forEach((item) => {
      const cityName = getCityName(item);
      const citySlug = getCitySlug(item);

      if (
        normalizeText(cityName).includes(keyword) ||
        normalizeText(citySlug).includes(keyword)
      ) {
        const key = `city-${normalizeText(cityName)}`;

        if (!suggestionMap.has(key)) {
          suggestionMap.set(key, {
            label: cityName,
            subLabel: "City",
            value: cityName,
            type: "city",
            slug: citySlug,
          });
        }
      }
    });

    finalDevelopers.forEach((item) => {
      const developerName = item?.developer_name || "";
      const developerSlug = item?.developer_slug || slugify(developerName);

      if (
        normalizeText(developerName).includes(keyword) ||
        normalizeText(developerSlug).includes(keyword)
      ) {
        const key = `developer-${normalizeText(developerName)}`;

        if (!suggestionMap.has(key)) {
          suggestionMap.set(key, {
            label: developerName,
            subLabel: "Developer",
            value: developerName,
            type: "developer",
            slug: developerSlug,
          });
        }
      }
    });

    allProjects.forEach((item) => {
      const title = getProjectTitle(item);
      const city = item?.city || "";
      const citySlug = item?.city_slug || slugify(city);
      const location = getLocationName(item);
      const address = item?.full_address || item?.address || "";
      const developer = getDeveloperName(item);
      const propertyType = item?.property_type || "";
      const propertyStatus = item?.property_status || "";
      const propertyLabel = item?.property_label || "";
      const configuration =
        item?.configuration_text ||
        item?.configuration ||
        item?.bhk ||
        item?.unit_type ||
        "";

      const searchableText = normalizeText(
        [
          title,
          city,
          citySlug,
          location,
          address,
          developer,
          item?.developer_slug,
          propertyType,
          propertyStatus,
          propertyLabel,
          configuration,
          item?.slug,
          item?.project_slug,
          item?.property_slug,
        ].join(" ")
      );

      if (!searchableText.includes(keyword)) return;

      const mainLabel =
        title || location || city || developer || propertyType || propertyStatus;

      if (!mainLabel) return;

      const subLabel = [location, city, developer, configuration]
        .filter(Boolean)
        .filter((value, index, self) => self.indexOf(value) === index)
        .join(" • ");

      const detailHref = getProjectDetailHref(item);
      const key = `project-${normalizeText(
        `${mainLabel}-${subLabel}-${detailHref}`
      )}`;

      if (!suggestionMap.has(key)) {
        suggestionMap.set(key, {
          label: mainLabel,
          subLabel: subLabel || "Project / Property",
          value: mainLabel,
          type: "project",
          city,
          citySlug,
          location,
          propertyType,
          propertyStatus,
          detailHref,
          item,
        });
      }
    });

    return Array.from(suggestionMap.values()).slice(0, 12);
  }, [searchText, allProjects, finalCities, finalDevelopers]);

  const applySearchFilter = (value, extraData = {}) => {
    onSearch({
      keyword: value || "",
      city: extraData.city || selectedCity || "",
      location: extraData.location || "",
      propertyType: extraData.propertyType || selectedCategory || "",
      propertyStatus: extraData.propertyStatus || "",
      bedrooms: "",
      bathrooms: "",
      amenities: [],
      sortBy: "Newest",
      priceRange: [0, 50000000],
      areaRange: [0, 5000],
    });
  };

  const handleSuggestionSelect = (suggestion) => {
    const selectedValue = suggestion.value || "";

    setSearchText(selectedValue);
    closeSuggestions();
    setShowCityDropdown(false);

    if (suggestion.type === "city" && suggestion.slug) {
      router.push(`/cities/${suggestion.slug}`);
      return;
    }

    if (suggestion.type === "developer" && suggestion.slug) {
      router.push(`/developers/${suggestion.slug}`);
      return;
    }

    if (suggestion.type === "project") {
      const detailHref =
        suggestion.detailHref || getProjectDetailHref(suggestion.item);

      if (detailHref) {
        router.push(detailHref);
        return;
      }

      applySearchFilter(selectedValue, {
        city: suggestion.city,
        location: suggestion.location,
        propertyType: suggestion.propertyType,
        propertyStatus: suggestion.propertyStatus,
      });

      return;
    }

    applySearchFilter(selectedValue);
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();

    const rawSearch = searchText.trim();

    if (!rawSearch && !selectedCategory && selectedCity) {
      const cityMatch = findCityMatch(selectedCity);

      if (cityMatch?.city_slug || getCitySlug(cityMatch)) {
        router.push(`/cities/${cityMatch.city_slug || getCitySlug(cityMatch)}`);
        closeSuggestions();
        setShowCityDropdown(false);
        return;
      }
    }

    if (!rawSearch) {
      applySearchFilter("");
      closeSuggestions();
      setShowCityDropdown(false);
      return;
    }

    const cityMatch = findCityMatch(rawSearch);

    if (cityMatch?.city_slug || getCitySlug(cityMatch)) {
      closeSuggestions();
      setShowCityDropdown(false);
      router.push(`/cities/${cityMatch.city_slug || getCitySlug(cityMatch)}`);
      return;
    }

    const developerMatch = findDeveloperMatch(rawSearch);

    if (developerMatch?.developer_slug) {
      closeSuggestions();
      setShowCityDropdown(false);
      router.push(`/developers/${developerMatch.developer_slug}`);
      return;
    }

    const projectMatch = findProjectMatch(rawSearch);

    if (projectMatch) {
      closeSuggestions();
      setShowCityDropdown(false);
      setSearchText(getProjectTitle(projectMatch) || rawSearch);
      router.push(getProjectDetailHref(projectMatch));
      return;
    }

    applySearchFilter(rawSearch);
    closeSuggestions();
    setShowCityDropdown(false);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (
        showSuggestions &&
        activeSuggestionIndex >= 0 &&
        searchSuggestions[activeSuggestionIndex]
      ) {
        handleSuggestionSelect(searchSuggestions[activeSuggestionIndex]);
        return;
      }

      handleSearch(e);
      return;
    }

    if (!showSuggestions || searchSuggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setActiveSuggestionIndex((prev) =>
        prev < searchSuggestions.length - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setActiveSuggestionIndex((prev) =>
        prev > 0 ? prev - 1 : searchSuggestions.length - 1
      );
    }

    if (e.key === "Escape") {
      closeSuggestions();
      setShowCityDropdown(false);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.value);
    setSearchText("");
    setShowSuggestions(false);
    setShowCityDropdown(false);

    onSearch({
      keyword: "",
      city: selectedCity,
      location: "",
      propertyType: category.value,
      propertyStatus: category.value,
      bedrooms: "",
      bathrooms: "",
      amenities: [],
      sortBy: "Newest",
      priceRange: [0, 50000000],
      areaRange: [0, 5000],
    });
  };

  const handleTopCityClick = (cityItem) => {
    const cityName = getCityName(cityItem);
    const citySlug = getCitySlug(cityItem);

    setSelectedCity(cityName);
    setSearchText("");
    setShowCityDropdown(false);

    if (citySlug) {
      router.push(`/cities/${citySlug}`);
      return;
    }

    applySearchFilter(cityName, {
      city: cityName,
      location: cityName,
    });
  };

  const handleCitySelect = (cityItem) => {
    const cityName = getCityName(cityItem);
    setSelectedCity(cityName);
    setShowCityDropdown(false);
  };

  return (
    <section className="flat-title style-2 filtertop-hero-section">
      <div className="filtertop-bg-slider">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={`${slide.image}-${index}`}
            className={`filtertop-bg-slide ${
              index === currentSlideIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>

      <div className="filtertop-hero-overlay" />

      <div className="tf-container filtertop-main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-inner filtertop-breadcrumb-wrap">
              <ul className="breadcrumb">
                <li>
                  <Link className="home fw-6 text-color-3" href={`/`}>
                    Home
                  </Link>
                </li>
                <li>Property Listing</li>
              </ul>
            </div>

            <div className="filtertop-search-content">
              <div className="mobile-category-scroll filtertop-mobile-category-scroll">
                {CATEGORY_FILTERS.map((item) => (
                  <button
                    type="button"
                    key={`mobile-${item.value}`}
                    className={`mobile-category-card filtertop-mobile-category-card ${
                      selectedCategory === item.value ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(item)}
                  >
                    <span>{item.icon}</span>
                    <small>{item.label}</small>
                  </button>
                ))}
              </div>

              <div
                className={`hero-search-only-wrap filtertop-search-only-wrap ${
                  isSearchFixed ? "hero-search-fixed-active" : ""
                }`}
              >
                <form
                  onSubmit={handleSearch}
                  className="hero-search-only-form filtertop-search-only-form"
                  ref={suggestionRef}
                >
                  <fieldset className="hero-search-fieldset filtertop-hero-search-fieldset">
                    <div className="hero-city-select filtertop-hero-city-select">
                      <label>Search City</label>

                      <button
                        type="button"
                        className="hero-city-trigger filtertop-hero-city-trigger"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setShowCityDropdown((prev) => !prev);
                          setShowSuggestions(false);
                        }}
                      >
                        <span>{selectedCity || "Select City"}</span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {showCityDropdown && (
                        <div className="hero-city-menu filtertop-hero-city-menu">
                          {cityOptions.length > 0 ? (
                            cityOptions.map((item) => (
                              <button
                                type="button"
                                key={getCitySlug(item)}
                                className={`hero-city-option filtertop-hero-city-option ${
                                  selectedCity === getCityName(item)
                                    ? "active"
                                    : ""
                                }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleCitySelect(item);
                                }}
                              >
                                {getCityName(item)}
                              </button>
                            ))
                          ) : (
                            <div className="hero-city-empty">
                              No cities found
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="hero-search-input-wrap filtertop-hero-search-input-wrap">
                      <span className="hero-search-icon filtertop-hero-search-icon">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <input
                        type="text"
                        placeholder="Search Location, Project Here"
                        value={searchText}
                        autoComplete="off"
                        onChange={(e) => {
                          setSearchText(e.target.value);
                          setShowSuggestions(true);
                          setShowCityDropdown(false);
                          setActiveSuggestionIndex(-1);
                        }}
                        onFocus={() => {
                          setShowCityDropdown(false);
                          if (searchText) setShowSuggestions(true);
                        }}
                        onKeyDown={handleSearchKeyDown}
                      />

                      <button
                        type="submit"
                        className="hero-mobile-search-icon-btn filtertop-mobile-search-icon-btn"
                        aria-label="Search"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {showSuggestions && searchText && (
                        <div className="hero-search-suggestions filtertop-search-suggestions">
                          {searchSuggestions.length > 0 ? (
                            searchSuggestions.map((suggestion, index) => (
                              <button
                                type="button"
                                key={`${suggestion.type}-${suggestion.label}-${index}`}
                                className={`hero-suggestion-item filtertop-suggestion-item ${
                                  activeSuggestionIndex === index
                                    ? "active"
                                    : ""
                                }`}
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  handleSuggestionSelect(suggestion);
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleSuggestionSelect(suggestion);
                                }}
                                onTouchEnd={(e) => {
                                  e.preventDefault();
                                  handleSuggestionSelect(suggestion);
                                }}
                                onMouseEnter={() =>
                                  setActiveSuggestionIndex(index)
                                }
                              >
                                <span className="hero-suggestion-label">
                                  {suggestion.label}
                                </span>

                                {suggestion.subLabel && (
                                  <span className="hero-suggestion-sub">
                                    {suggestion.subLabel}
                                  </span>
                                )}
                              </button>
                            ))
                          ) : (
                            <div className="hero-no-suggestion">
                              No matching result found
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <button type="submit" className="hero-search-btn">
                      Search
                    </button>
                  </fieldset>
                </form>
              </div>

              <div className="hero-category-row filtertop-category-row">
                {CATEGORY_FILTERS.map((item) => (
                  <button
                    type="button"
                    key={item.value}
                    className={`hero-category-card filtertop-category-card ${
                      selectedCategory === item.value ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(item)}
                  >
                    <span className="hero-category-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              {topLocationCities.length > 0 && (
                <div className="hero-location-chip-row filtertop-location-chip-row">
                  {topLocationCities.map((cityItem) => (
                    <button
                      type="button"
                      key={getCitySlug(cityItem)}
                      className="hero-location-chip filtertop-location-chip"
                      onClick={() => handleTopCityClick(cityItem)}
                    >
                      <span>📍</span>
                      {getCityName(cityItem)}
                    </button>
                  ))}
                </div>
              )}

              <div className="hero-slide-dots filtertop-slide-dots">
                {HERO_SLIDES.map((slide, index) => (
                  <button
                    type="button"
                    key={`${slide.image}-${index}`}
                    className={`hero-slide-dot filtertop-slide-dot ${
                      index === currentSlideIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlideIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --growl-blue: #0b4f7a;
          --growl-blue-dark: #073a5c;
          --growl-blue-deep: #062c47;
          --growl-blue-soft: #eaf5fb;
          --growl-yellow: #f2c21a;
          --growl-yellow-dark: #d9a90e;
          --growl-yellow-soft: #fff4bf;
          --growl-white: #ffffff;
          --growl-text: #142033;
          --growl-muted: #64748b;
          --growl-border: #e2e8f0;
        }

        html {
          scroll-padding-top: 112px;
        }

        #header-main,
        #header-main.header {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 2147481000 !important;
          background: rgba(255, 255, 255, 0.99) !important;
          backdrop-filter: blur(18px) !important;
          -webkit-backdrop-filter: blur(18px) !important;
          border-bottom: 1px solid rgba(226, 232, 240, 0.95) !important;
          box-shadow: 0 10px 35px rgba(6, 44, 71, 0.1) !important;
          transform: translateY(0) !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        #header-main.fixed,
        #header-main.header-sticky,
        #header-main.is-sticky {
          position: fixed !important;
          top: 0 !important;
          z-index: 2147481000 !important;
          transform: translateY(0) !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .flat-title.style-2.filtertop-hero-section {
          position: relative !important;
          overflow: visible !important;
          min-height: 470px !important;
          height: 58vh !important;
          max-height: 560px !important;
          display: flex !important;
          align-items: center !important;
          z-index: 20;
          background: var(--growl-blue-deep) !important;
          padding: 24px 0 36px !important;
          margin-top: 94px !important;
        }

        .filtertop-bg-slider {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          background: var(--growl-blue-deep);
        }

        .filtertop-bg-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          opacity: 0;
          transform: scale(1.025);
          transition: opacity 1s ease-in-out, transform 6s ease-in-out;
          will-change: opacity, transform;
          filter: none !important;
        }

        .filtertop-bg-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .filtertop-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(6, 44, 71, 0.34) 0%,
              rgba(6, 44, 71, 0.24) 46%,
              rgba(6, 44, 71, 0.44) 100%
            ),
            linear-gradient(
              90deg,
              rgba(6, 44, 71, 0.28) 0%,
              rgba(11, 79, 122, 0.07) 54%,
              rgba(242, 194, 26, 0.08) 100%
            );
        }

        .filtertop-main-container {
          position: relative;
          z-index: 5;
          width: 100%;
          overflow: visible !important;
        }

        .filtertop-main-container .row,
        .filtertop-main-container .col-lg-12 {
          overflow: visible !important;
        }

        .filtertop-breadcrumb-wrap {
          position: relative;
          z-index: 6;
          margin-bottom: 18px;
          display: none;
        }

        .filtertop-search-content {
          position: relative;
          z-index: 6;
          color: #ffffff;
          text-align: center;
          overflow: visible !important;
          padding-top: 0;
        }

        .filtertop-mobile-category-scroll {
          display: none !important;
        }


        .filtertop-search-only-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 12px;
          position: relative;
          z-index: 999;
          overflow: visible !important;
          margin-bottom: 18px;
        }

        .filtertop-search-only-form {
          width: 100%;
          max-width: 1130px;
          position: relative;
          z-index: 999;
          overflow: visible !important;
        }

        .filtertop-hero-search-fieldset {
          position: relative;
          width: 100%;
          min-height: 78px;
          margin: 0;
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, 0.58);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.98);
          box-sizing: border-box;
          overflow: visible !important;
          z-index: 999;
          display: grid;
          grid-template-columns: 190px 1fr 140px;
          align-items: center;
          gap: 16px;
          box-shadow: 0 18px 45px rgba(6, 44, 71, 0.28);
        }

        .filtertop-hero-city-select {
          position: relative;
          min-height: 54px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          padding: 0 18px 0 6px;
          border-right: 1px solid rgba(226, 232, 240, 0.95);
          z-index: 60;
        }

        .filtertop-hero-city-select label {
          color: #111827;
          font-size: 10px;
          line-height: 1;
          font-weight: 950;
          margin-bottom: 5px;
        }

        .filtertop-hero-city-trigger {
          width: 100%;
          height: 32px;
          border: 0 !important;
          outline: 0 !important;
          background: transparent !important;
          color: #111827 !important;
          padding: 0 !important;
          box-shadow: none !important;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          text-align: left;
        }

        .filtertop-hero-city-trigger span {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 22px;
          line-height: 1.1;
          font-weight: 950;
          color: #111827;
        }

        .filtertop-hero-city-trigger svg {
          flex: 0 0 auto;
          color: #111827;
        }

        .filtertop-hero-city-menu {
          position: absolute;
          left: 0;
          right: 12px;
          top: calc(100% + 8px);
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 14px;
          box-shadow: 0 20px 45px rgba(6, 44, 71, 0.22);
          max-height: 235px;
          overflow-y: auto;
          overflow-x: hidden;
          z-index: 2147483647;
          padding: 6px;
        }

        .filtertop-hero-city-option {
          width: 100%;
          min-height: 40px;
          border: 0;
          background: transparent;
          color: #111827;
          border-radius: 10px;
          padding: 9px 12px;
          text-align: left;
          font-size: 14px;
          font-weight: 850;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .filtertop-hero-city-option:hover,
        .filtertop-hero-city-option.active {
          background: var(--growl-blue-soft);
          color: var(--growl-blue-deep);
        }

        .filtertop-hero-search-input-wrap {
          position: relative;
          min-height: 54px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .filtertop-hero-search-icon {
          width: 34px;
          height: 34px;
          min-width: 34px;
          color: #718096;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .filtertop-hero-search-input-wrap input {
          width: 100%;
          min-height: 54px;
          border: 0 !important;
          background: transparent !important;
          color: var(--growl-text) !important;
          padding: 0 !important;
          outline: none !important;
          box-shadow: none !important;
          font-size: 18px !important;
          font-weight: 600 !important;
          box-sizing: border-box;
        }

        .filtertop-hero-search-input-wrap input::placeholder {
          color: #8a98a8;
        }

        .filtertop-mobile-search-icon-btn {
          display: none;
        }

        .hero-search-btn {
          height: 54px;
          border-radius: 10px;
          border: 0;
          background: linear-gradient(
            135deg,
            var(--growl-blue-deep),
            var(--growl-blue)
          );
          color: #ffffff;
          font-size: 15px;
          font-weight: 950;
          cursor: pointer;
          box-shadow: 0 12px 25px rgba(6, 44, 71, 0.24);
          transition: all 0.28s ease;
        }

        .hero-search-btn:hover {
          background: linear-gradient(135deg, var(--growl-yellow), #ffd84d);
          color: var(--growl-blue-deep);
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(242, 194, 26, 0.28);
        }

        .filtertop-search-suggestions {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          right: 0;
          z-index: 2147483647 !important;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 16px;
          box-shadow: 0 22px 60px rgba(6, 44, 71, 0.24);
          overflow-y: auto;
          overflow-x: hidden;
          max-height: 360px;
          text-align: left;
          pointer-events: auto !important;
        }

        .filtertop-suggestion-item {
          width: 100%;
          display: block;
          text-align: left;
          padding: 13px 18px;
          border: 0;
          border-bottom: 1px solid #f1f5f9;
          background: #ffffff;
          cursor: pointer;
          pointer-events: auto !important;
          touch-action: manipulation;
        }

        .filtertop-suggestion-item:last-child {
          border-bottom: 0;
        }

        .filtertop-suggestion-item:hover,
        .filtertop-suggestion-item.active {
          background: var(--growl-blue-soft);
        }

        .hero-suggestion-label {
          display: block;
          font-size: 15px;
          font-weight: 850;
          color: var(--growl-blue-deep);
          line-height: 1.3;
          pointer-events: none;
        }

        .hero-suggestion-sub {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #64748b;
          margin-top: 4px;
          line-height: 1.3;
          pointer-events: none;
        }

        .hero-no-suggestion {
          padding: 16px 18px;
          font-size: 14px;
          color: #64748b;
          background: #ffffff;
          text-align: left;
        }

        .filtertop-category-row {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          max-width: 860px;
          margin: 0 auto 14px;
        }

        .filtertop-category-card {
          min-height: 64px;
          border: 1px solid rgba(255, 255, 255, 0.58);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.94);
          color: var(--growl-text);
          box-shadow: 0 10px 26px rgba(6, 44, 71, 0.22);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 11px;
          text-align: left;
          padding: 9px 14px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filtertop-category-card:hover,
        .filtertop-category-card.active {
          transform: translateY(-3px);
          border-color: rgba(242, 194, 26, 0.9);
          box-shadow: 0 16px 34px rgba(6, 44, 71, 0.24);
          background: #ffffff;
        }

        .filtertop-category-card.active {
          outline: 2px solid rgba(242, 194, 26, 0.42);
        }

        .hero-category-icon {
          font-size: 28px;
          line-height: 1;
          flex: 0 0 auto;
        }

        .filtertop-category-card span:last-child {
          font-size: 12.5px;
          line-height: 1.18;
          font-weight: 950;
          color: #111827;
        }

        .filtertop-location-chip-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin: 0 auto;
          max-width: 950px;
        }

        .filtertop-location-chip {
          border: 1px solid rgba(242, 194, 26, 0.65);
          background: rgba(255, 250, 232, 0.96);
          color: #334155;
          border-radius: 7px;
          min-height: 32px;
          padding: 0 12px;
          font-size: 12.5px;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.22s ease;
          box-shadow: 0 8px 18px rgba(6, 44, 71, 0.12);
        }

        .filtertop-location-chip:hover {
          background: #ffffff;
          border-color: var(--growl-yellow);
          color: var(--growl-blue);
          transform: translateY(-2px);
        }

        .filtertop-slide-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 14px 0 0;
        }

        .filtertop-slide-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.55);
          cursor: pointer;
          padding: 0;
          transition: all 0.28s ease;
        }

        .filtertop-slide-dot.active {
          width: 32px;
          background: var(--growl-yellow);
          border-color: var(--growl-yellow);
          box-shadow: 0 10px 24px rgba(242, 194, 26, 0.25);
        }

        .filtertop-search-only-wrap.hero-search-fixed-active {
          position: fixed !important;
          top: 112px;
          left: 0;
          right: 0;
          z-index: 2147480000 !important;
          padding: 0 22px;
          pointer-events: none;
          animation: heroFixedSearchFade 0.18s ease;
          margin-bottom: 0 !important;
        }

        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-search-only-form,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-search-fieldset,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-city-select,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-city-trigger,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-city-menu,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-city-option,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-search-input-wrap,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-search-input-wrap
          input,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-search-suggestions,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-suggestion-item,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .hero-search-btn,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-mobile-search-icon-btn {
          pointer-events: auto !important;
        }

        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-search-fieldset {
          max-width: 1120px;
          min-height: 72px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.99);
          box-shadow: 0 16px 45px rgba(6, 44, 71, 0.2);
        }

        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-city-select,
        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-search-input-wrap {
          min-height: 48px;
        }

        .filtertop-search-only-wrap.hero-search-fixed-active
          .filtertop-hero-search-input-wrap
          input {
          min-height: 48px;
        }

        .filtertop-search-only-wrap.hero-search-fixed-active .hero-search-btn {
          height: 48px;
        }

        @keyframes heroFixedSearchFade {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 991px) {
          #header-main,
          #header-main.header {
            min-height: 64px !important;
          }

          .flat-title.style-2.filtertop-hero-section {
            min-height: 310px !important;
            height: auto !important;
            max-height: none !important;
            padding: 16px 0 16px !important;
            margin-top: 64px !important;
            align-items: center !important;
            overflow: hidden !important;
            background: var(--growl-blue-deep) !important;
          }

          .filtertop-bg-slider,
          .filtertop-bg-slide {
            overflow: hidden !important;
          }

          .filtertop-bg-slide {
            background-size: cover !important;
            background-position: center center !important;
            filter: none !important;
          }

          .filtertop-hero-overlay {
            background: rgba(6, 44, 71, 0.2) !important;
          }

          .filtertop-search-content {
            padding-top: 0 !important;
          }

          .filtertop-mobile-category-scroll {
            display: flex !important;
            gap: 8px !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            padding: 0 20px 8px !important;
            margin: 0 0 4px !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: none !important;
          }

          .filtertop-mobile-category-scroll::-webkit-scrollbar {
            display: none !important;
          }

          .filtertop-mobile-category-card {
            flex: 0 0 auto !important;
            min-width: 105px !important;
            height: 36px !important;
            border: 1px solid rgba(242, 194, 26, 0.55) !important;
            border-radius: 8px !important;
            background: rgba(255, 255, 255, 0.96) !important;
            color: #111827 !important;
            box-shadow: 0 6px 14px rgba(6, 44, 71, 0.14) !important;
            display: flex !important;
            align-items: center !important;
            gap: 5px !important;
            padding: 0 8px !important;
            cursor: pointer !important;
            scroll-snap-align: start !important;
          }

          .filtertop-mobile-category-card span {
            font-size: 18px !important;
            line-height: 1 !important;
            flex: 0 0 auto !important;
          }

          .filtertop-mobile-category-card small {
            display: block !important;
            font-size: 8.8px !important;
            line-height: 1.05 !important;
            font-weight: 800 !important;
            color: #111827 !important;
            text-align: left !important;
          }

          .filtertop-mobile-category-card.active {
            border-color: var(--growl-yellow) !important;
            background: #fff8d8 !important;
          }

          .filtertop-search-only-wrap {
            padding: 0 20px !important;
            margin: 0 0 8px !important;
          }

          .filtertop-search-only-form {
            max-width: 100% !important;
          }

          .filtertop-hero-search-fieldset {
            min-height: 50px !important;
            padding: 0 !important;
            border-radius: 8px !important;
            grid-template-columns: 78px minmax(0, 1fr) !important;
            gap: 0 !important;
            overflow: visible !important;
            border: 1px solid rgba(11, 79, 122, 0.18) !important;
            box-shadow: 0 8px 20px rgba(6, 44, 71, 0.18) !important;
            background: #ffffff !important;
          }

          .filtertop-hero-city-select {
            min-height: 50px !important;
            padding: 6px 8px !important;
            border-right: 1px solid rgba(226, 232, 240, 0.95) !important;
            border-bottom: 0 !important;
          }

          .filtertop-hero-city-select label {
            font-size: 7px !important;
            line-height: 1 !important;
            margin: 0 0 3px !important;
            color: #111827 !important;
          }

          .filtertop-hero-city-trigger {
            height: 26px !important;
            padding: 0 !important;
            background: transparent !important;
            border: 0 !important;
            border-radius: 0 !important;
          }

          .filtertop-hero-city-trigger span {
            font-size: 12px !important;
            line-height: 1.1 !important;
            font-weight: 950 !important;
            color: #111827 !important;
          }

          .filtertop-hero-city-trigger svg {
            width: 12px !important;
            height: 12px !important;
            color: #111827 !important;
          }

          .filtertop-hero-city-menu {
            left: 0 !important;
            right: auto !important;
            top: calc(100% + 5px) !important;
            width: min(220px, calc(100vw - 40px)) !important;
            max-height: 170px !important;
            border-radius: 8px !important;
            padding: 4px !important;
          }

          .filtertop-hero-city-option {
            min-height: 34px !important;
            font-size: 13px !important;
            border-radius: 6px !important;
            padding: 8px 10px !important;
          }

          .filtertop-hero-search-input-wrap {
            min-height: 50px !important;
            border: 0 !important;
            border-radius: 0 !important;
            padding: 0 7px 0 10px !important;
            background: transparent !important;
            gap: 6px !important;
            display: flex !important;
            align-items: center !important;
            min-width: 0 !important;
          }

          .filtertop-hero-search-icon {
            display: none !important;
          }

          .filtertop-hero-search-input-wrap input {
            min-height: 50px !important;
            font-size: 11px !important;
            font-weight: 500 !important;
            min-width: 0 !important;
            width: 100% !important;
            color: var(--growl-text) !important;
          }

          .filtertop-hero-search-input-wrap input::placeholder {
            color: #7b8794 !important;
          }

          .filtertop-mobile-search-icon-btn {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 38px !important;
            height: 38px !important;
            min-width: 38px !important;
            border-radius: 8px !important;
            border: 0 !important;
            background: var(--growl-blue-deep) !important;
            color: #ffffff !important;
            padding: 0 !important;
            box-shadow: 0 8px 16px rgba(6, 44, 71, 0.22) !important;
          }

          .filtertop-mobile-search-icon-btn svg {
            width: 20px !important;
            height: 20px !important;
          }

          .hero-search-btn {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
            min-width: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            border: 0 !important;
            overflow: hidden !important;
          }

          .filtertop-search-suggestions {
            left: -78px !important;
            right: 0 !important;
            top: calc(100% + 8px) !important;
            max-height: 260px !important;
            border-radius: 9px !important;
          }

          .filtertop-category-row {
            display: none !important;
          }

          .filtertop-location-chip-row {
            display: flex !important;
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            padding: 0 20px 4px !important;
            margin: 0 !important;
            max-width: 100% !important;
            gap: 6px !important;
            scrollbar-width: none !important;
            -webkit-overflow-scrolling: touch !important;
          }

          .filtertop-location-chip-row::-webkit-scrollbar {
            display: none !important;
          }

          .filtertop-location-chip {
            flex: 0 0 auto !important;
            min-height: 28px !important;
            border-radius: 7px !important;
            padding: 0 11px !important;
            font-size: 11px !important;
            font-weight: 800 !important;
            background: rgba(255, 250, 232, 0.98) !important;
            color: #1f2937 !important;
            border: 1px solid rgba(242, 194, 26, 0.65) !important;
            box-shadow: 0 4px 10px rgba(6, 44, 71, 0.1) !important;
          }

          .filtertop-slide-dots {
            margin: 5px 0 0 !important;
            gap: 5px !important;
          }

          .filtertop-slide-dot {
            width: 7px !important;
            height: 7px !important;
            border-radius: 50% !important;
            background: rgba(255, 255, 255, 0.72) !important;
            border: 1px solid rgba(255, 255, 255, 0.9) !important;
          }

          .filtertop-slide-dot.active {
            width: 24px !important;
            border-radius: 999px !important;
            background: var(--growl-yellow) !important;
            border-color: var(--growl-yellow) !important;
          }

          .filtertop-search-only-wrap.hero-search-fixed-active {
            top: 68px !important;
            padding: 0 10px !important;
          }

          .filtertop-search-only-wrap.hero-search-fixed-active
            .filtertop-hero-search-fieldset {
            max-width: 100% !important;
            min-height: 48px !important;
            padding: 0 !important;
            border-radius: 8px !important;
            grid-template-columns: minmax(0, 1fr) !important;
          }

          .filtertop-search-only-wrap.hero-search-fixed-active
            .filtertop-hero-city-select {
            display: none !important;
          }

          .filtertop-search-only-wrap.hero-search-fixed-active
            .filtertop-hero-search-input-wrap {
            min-height: 46px !important;
            padding-left: 12px !important;
          }

          .filtertop-search-only-wrap.hero-search-fixed-active
            .filtertop-hero-search-input-wrap
            input {
            min-height: 46px !important;
            font-size: 13px !important;
          }

          .filtertop-search-only-wrap.hero-search-fixed-active
            .filtertop-mobile-search-icon-btn {
            height: 38px !important;
          }

          /* Mobile only: hide the fixed-on-scroll search bar because header already has search */
          .filtertop-search-only-wrap.hero-search-fixed-active {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }
        }

        @media (max-width: 575px) {
          .flat-title.style-2.filtertop-hero-section {
            min-height: 300px !important;
            margin-top: 64px !important;
            padding: 15px 0 15px !important;
          }

          .filtertop-mobile-category-scroll,
          .filtertop-search-only-wrap,
          .filtertop-location-chip-row {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }

        @media (max-width: 420px) {
          .flat-title.style-2.filtertop-hero-section {
            min-height: 292px !important;
            padding-top: 14px !important;
          }

          .filtertop-mobile-category-card {
            min-width: 104px !important;
          }

          .filtertop-hero-search-fieldset {
            grid-template-columns: 76px minmax(0, 1fr) !important;
          }

          .filtertop-hero-city-trigger span {
            font-size: 11.5px !important;
          }

          .filtertop-hero-search-input-wrap input {
            font-size: 10.5px !important;
          }

          .filtertop-search-suggestions {
            left: -76px !important;
            right: 0 !important;
          }
        }

        @media (max-width: 360px) {
          .flat-title.style-2.filtertop-hero-section {
            min-height: 286px !important;
          }

          .filtertop-mobile-category-card {
            min-width: 102px !important;
            padding: 0 7px !important;
          }

          .filtertop-mobile-category-card small {
            font-size: 8.4px !important;
          }

          .filtertop-search-only-wrap,
          .filtertop-mobile-category-scroll,
          .filtertop-location-chip-row {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .filtertop-hero-search-fieldset {
            grid-template-columns: 72px minmax(0, 1fr) !important;
          }

          .filtertop-search-suggestions {
            left: -72px !important;
            right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
