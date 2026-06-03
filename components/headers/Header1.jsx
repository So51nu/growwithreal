// // // // import React from "react";
// // // // import Nav from "./Nav";
// // // // import Link from "next/link";
// // // // import Image from "next/image";
// // // // import DashboardNav from "./DashboardNav";
// // // // export default function Header1({ parentClass = "header" }) {
// // // //   return (
// // // //     <header id="header-main" className={parentClass}>
// // // //       <div className="header-inner">
// // // //         <div className="tf-container xl">
// // // //           <div className="row">
// // // //             <div className="col-12">
// // // //               <div className="header-inner-wrap">
// // // //                 <div className="header-logo" style={{ overflow: "visible" }}>
// // // //                   <Link href={`/`} className="site-logo">
// // // //                     <img
// // // //                       src="/images/logo/growl_logo2.png"
// // // //                       alt="logo"
// // // //                       style={{
// // // //                         height: "80px",         // header ke andar fit
// // // //                         transform: "scale(1.95)", // 👈 ye actual size bada karega
// // // //                         transformOrigin: "left center",
// // // //                         display: "block",
// // // //                       }}
// // // //                     />
// // // //                   </Link>
// // // //                 </div>
// // // //                 <nav className="main-menu">
// // // //                   <ul className="navigation ">
// // // //                     <Nav />
// // // //                   </ul>
// // // //                 </nav>
// // // //                 <div className="header-right">
// // // //                   <div className="phone-number">
// // // //                     <div className="icons">
// // // //                       <svg
// // // //                         width={20}
// // // //                         height={20}
// // // //                         viewBox="0 0 20 20"
// // // //                         fill="none"
// // // //                         xmlns="http://www.w3.org/2000/svg"
// // // //                       >
// // // //                         <path
// // // //                           d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z"
// // // //                           stroke="black"
// // // //                           strokeWidth="1.5"
// // // //                           strokeLinecap="round"
// // // //                           strokeLinejoin="round"
// // // //                         />
// // // //                       </svg>
// // // //                     </div>
// // // //                     <p>+91 9326183013</p>
// // // //                   </div>
// // // //                   <DashboardNav />
                 
// // // //                   <div
// // // //                     className="mobile-button"
// // // //                     data-bs-toggle="offcanvas"
// // // //                     data-bs-target="#menu-mobile"
// // // //                     aria-controls="menu-mobile"
// // // //                   >
// // // //                     <i className="icon-menu" />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </header>
// // // //   );
// // // // }


// // // "use client";

// // // import React, { useEffect, useMemo, useRef, useState } from "react";
// // // import Nav from "./Nav";
// // // import Link from "next/link";
// // // import DashboardNav from "./DashboardNav";
// // // import { useRouter } from "next/navigation";
// // // import { apiGet } from "../lib/api";

// // // function normalizeText(value) {
// // //   return String(value || "").trim().toLowerCase();
// // // }

// // // function slugify(value) {
// // //   return String(value || "")
// // //     .trim()
// // //     .toLowerCase()
// // //     .replace(/&/g, "and")
// // //     .replace(/[^\w\s-]/g, "")
// // //     .replace(/\s+/g, "-")
// // //     .replace(/-+/g, "-");
// // // }

// // // function getProjectTitle(item) {
// // //   return item?.title || item?.project_name || item?.property_name || item?.name || "";
// // // }

// // // function getDeveloperName(item) {
// // //   return item?.developer_name || item?.developer || item?.builder_name || item?.builder || "";
// // // }

// // // function getLocationName(item) {
// // //   return item?.short_location || item?.location || item?.full_address || "";
// // // }

// // // export default function Header1({ parentClass = "header", projects = [] }) {
// // //   const router = useRouter();
// // //   const searchRef = useRef(null);

// // //   const [searchText, setSearchText] = useState("");
// // //   const [showSuggestions, setShowSuggestions] = useState(false);
// // //   const [cities, setCities] = useState([]);
// // //   const [developers, setDevelopers] = useState([]);

// // //   useEffect(() => {
// // //     const loadSearchData = async () => {
// // //       try {
// // //         const [citiesRes, developersRes] = await Promise.all([
// // //           apiGet("/admindashboard/cities/"),
// // //           apiGet("/admindashboard/developers/"),
// // //         ]);

// // //         setCities(Array.isArray(citiesRes) ? citiesRes : []);
// // //         setDevelopers(Array.isArray(developersRes) ? developersRes : []);
// // //       } catch (error) {
// // //         console.error("Header search data fetch error:", error);
// // //         setCities([]);
// // //         setDevelopers([]);
// // //       }
// // //     };

// // //     loadSearchData();
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (searchRef.current && !searchRef.current.contains(event.target)) {
// // //         setShowSuggestions(false);
// // //       }
// // //     };

// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // //   }, []);

// // //   const fallbackCitiesFromProjects = useMemo(() => {
// // //     const map = new Map();

// // //     projects.forEach((item) => {
// // //       const city = item.city || "";
// // //       const city_slug = item.city_slug || slugify(city);

// // //       if (city && city_slug) {
// // //         map.set(normalizeText(city), { city, city_slug });
// // //       }
// // //     });

// // //     return Array.from(map.values());
// // //   }, [projects]);

// // //   const fallbackDevelopersFromProjects = useMemo(() => {
// // //     const map = new Map();

// // //     projects.forEach((item) => {
// // //       const developer_name = getDeveloperName(item);
// // //       const developer_slug = item.developer_slug || slugify(developer_name);

// // //       if (developer_name && developer_slug) {
// // //         map.set(normalizeText(developer_name), {
// // //           developer_name,
// // //           developer_slug,
// // //         });
// // //       }
// // //     });

// // //     return Array.from(map.values());
// // //   }, [projects]);

// // //   const finalCities = useMemo(
// // //     () => (cities.length > 0 ? cities : fallbackCitiesFromProjects),
// // //     [cities, fallbackCitiesFromProjects]
// // //   );

// // //   const finalDevelopers = useMemo(
// // //     () => (developers.length > 0 ? developers : fallbackDevelopersFromProjects),
// // //     [developers, fallbackDevelopersFromProjects]
// // //   );

// // //   const searchSuggestions = useMemo(() => {
// // //     const keyword = normalizeText(searchText);
// // //     if (!keyword) return [];

// // //     const suggestionMap = new Map();

// // //     finalCities.forEach((item) => {
// // //       const cityName = item.city || "";
// // //       const citySlug = item.city_slug || slugify(cityName);

// // //       if (
// // //         normalizeText(cityName).includes(keyword) ||
// // //         normalizeText(citySlug).includes(keyword)
// // //       ) {
// // //         const key = `city-${normalizeText(cityName)}`;
// // //         if (!suggestionMap.has(key)) {
// // //           suggestionMap.set(key, {
// // //             label: cityName,
// // //             subLabel: "City",
// // //             value: cityName,
// // //             type: "city",
// // //             slug: citySlug,
// // //           });
// // //         }
// // //       }
// // //     });

// // //     finalDevelopers.forEach((item) => {
// // //       const developerName = item.developer_name || "";
// // //       const developerSlug = item.developer_slug || slugify(developerName);

// // //       if (
// // //         normalizeText(developerName).includes(keyword) ||
// // //         normalizeText(developerSlug).includes(keyword)
// // //       ) {
// // //         const key = `developer-${normalizeText(developerName)}`;
// // //         if (!suggestionMap.has(key)) {
// // //           suggestionMap.set(key, {
// // //             label: developerName,
// // //             subLabel: "Developer",
// // //             value: developerName,
// // //             type: "developer",
// // //             slug: developerSlug,
// // //           });
// // //         }
// // //       }
// // //     });

// // //     projects.forEach((item) => {
// // //       const title = getProjectTitle(item);
// // //       const city = item.city || "";
// // //       const citySlug = item.city_slug || slugify(city);
// // //       const location = getLocationName(item);
// // //       const address = item.full_address || item.address || "";
// // //       const developer = getDeveloperName(item);
// // //       const propertyType = item.property_type || "";
// // //       const propertyStatus = item.property_status || "";

// // //       const searchableText = normalizeText(
// // //         [title, city, location, address, developer, propertyType, propertyStatus].join(" ")
// // //       );

// // //       if (!searchableText.includes(keyword)) return;

// // //       const mainLabel = title || location || city || developer || propertyType || propertyStatus;
// // //       if (!mainLabel) return;

// // //       const subLabel = [location, city, developer]
// // //         .filter(Boolean)
// // //         .filter((value, index, self) => self.indexOf(value) === index)
// // //         .join(" • ");

// // //       const key = `project-${normalizeText(`${mainLabel}-${subLabel}`)}`;

// // //       if (!suggestionMap.has(key)) {
// // //         suggestionMap.set(key, {
// // //           label: mainLabel,
// // //           subLabel: subLabel || "Project",
// // //           value: mainLabel,
// // //           type: "project",
// // //           city,
// // //           citySlug,
// // //           location,
// // //         });
// // //       }
// // //     });

// // //     return Array.from(suggestionMap.values()).slice(0, 8);
// // //   }, [searchText, finalCities, finalDevelopers, projects]);

// // //   const findCityMatch = (searchValue) => {
// // //     const normalized = normalizeText(searchValue);
// // //     if (!normalized) return null;

// // //     return (
// // //       finalCities.find((item) => {
// // //         const cityName = normalizeText(item.city);
// // //         const citySlug = normalizeText(item.city_slug);
// // //         return cityName === normalized || citySlug === normalized;
// // //       }) ||
// // //       finalCities.find((item) => {
// // //         const cityName = normalizeText(item.city);
// // //         const citySlug = normalizeText(item.city_slug);
// // //         return cityName.includes(normalized) || citySlug.includes(normalized);
// // //       }) ||
// // //       null
// // //     );
// // //   };

// // //   const findDeveloperMatch = (searchValue) => {
// // //     const normalized = normalizeText(searchValue);
// // //     if (!normalized) return null;

// // //     return (
// // //       finalDevelopers.find((item) => {
// // //         const developerName = normalizeText(item.developer_name);
// // //         const developerSlug = normalizeText(item.developer_slug);
// // //         return developerName === normalized || developerSlug === normalized;
// // //       }) ||
// // //       finalDevelopers.find((item) => {
// // //         const developerName = normalizeText(item.developer_name);
// // //         const developerSlug = normalizeText(item.developer_slug);
// // //         return developerName.includes(normalized) || developerSlug.includes(normalized);
// // //       }) ||
// // //       null
// // //     );
// // //   };

// // //   const handleSuggestionSelect = (suggestion) => {
// // //     setSearchText(suggestion.value || "");
// // //     setShowSuggestions(false);

// // //     if (suggestion.type === "city" && suggestion.slug) {
// // //       router.push(`/cities/${suggestion.slug}`);
// // //       return;
// // //     }

// // //     if (suggestion.type === "developer" && suggestion.slug) {
// // //       router.push(`/developers/${suggestion.slug}`);
// // //       return;
// // //     }

// // //     if (suggestion.citySlug) {
// // //       router.push(`/cities/${suggestion.citySlug}`);
// // //       return;
// // //     }

// // //     router.push(`/?search=${encodeURIComponent(suggestion.value || "")}`);
// // //   };

// // //   const handleSearchSubmit = (e) => {
// // //     e.preventDefault();

// // //     const rawSearch = searchText.trim();
// // //     if (!rawSearch) return;

// // //     const cityMatch = findCityMatch(rawSearch);
// // //     if (cityMatch?.city_slug) {
// // //       router.push(`/cities/${cityMatch.city_slug}`);
// // //       setShowSuggestions(false);
// // //       return;
// // //     }

// // //     const developerMatch = findDeveloperMatch(rawSearch);
// // //     if (developerMatch?.developer_slug) {
// // //       router.push(`/developers/${developerMatch.developer_slug}`);
// // //       setShowSuggestions(false);
// // //       return;
// // //     }

// // //     router.push(`/?search=${encodeURIComponent(rawSearch)}`);
// // //     setShowSuggestions(false);
// // //   };

// // //   return (
// // //     <>
// // //       <header id="header-main" className={parentClass}>
// // //         <div className="header-inner">
// // //           <div className="tf-container xl">
// // //             <div className="row">
// // //               <div className="col-12">
// // //                 <div className="header-inner-wrap">
// // //                   <div className="header-logo" style={{ overflow: "visible" }}>
// // //                     <Link href="/" className="site-logo">
// // //                       <img
// // //                         src="/images/logo/growl_logo2.png"
// // //                         alt="logo"
// // //                         style={{
// // //                           height: "80px",
// // //                           transform: "scale(1.95)",
// // //                           transformOrigin: "left center",
// // //                           display: "block",
// // //                         }}
// // //                       />
// // //                     </Link>
// // //                   </div>

// // //                   <div className="mobile-simple-search" ref={searchRef}>
// // //                     <form onSubmit={handleSearchSubmit}>
// // //                       <i className="icon-MagnifyingGlass" />
// // //                       <input
// // //                         type="text"
// // //                         placeholder="Search city, project..."
// // //                         value={searchText}
// // //                         autoComplete="off"
// // //                         onChange={(e) => {
// // //                           setSearchText(e.target.value);
// // //                           setShowSuggestions(true);
// // //                         }}
// // //                         onFocus={() => {
// // //                           if (searchText) setShowSuggestions(true);
// // //                         }}
// // //                       />
// // //                     </form>

// // //                     {showSuggestions && searchText && (
// // //                       <div className="mobile-header-suggestions">
// // //                         {searchSuggestions.length > 0 ? (
// // //                           searchSuggestions.map((suggestion, index) => (
// // //                             <button
// // //                               type="button"
// // //                               key={`${suggestion.type}-${suggestion.label}-${index}`}
// // //                               className="mobile-header-suggestion-item"
// // //                               onMouseDown={(e) => {
// // //                                 e.preventDefault();
// // //                                 handleSuggestionSelect(suggestion);
// // //                               }}
// // //                             >
// // //                               <span>{suggestion.label}</span>
// // //                               {suggestion.subLabel ? <small>{suggestion.subLabel}</small> : null}
// // //                             </button>
// // //                           ))
// // //                         ) : (
// // //                           <div className="mobile-header-no-result">
// // //                             No matching result found
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     )}
// // //                   </div>

// // //                   <nav className="main-menu">
// // //                     <ul className="navigation">
// // //                       <Nav />
// // //                     </ul>
// // //                   </nav>

// // //                   <div className="header-right">
// // //                     <div className="phone-number">
// // //                       <div className="icons">
// // //                         <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
// // //                           <path
// // //                             d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z"
// // //                             stroke="black"
// // //                             strokeWidth="1.5"
// // //                             strokeLinecap="round"
// // //                             strokeLinejoin="round"
// // //                           />
// // //                         </svg>
// // //                       </div>
// // //                       <p>+91 9326183013</p>
// // //                     </div>

// // //                     <DashboardNav />

// // //                     <div
// // //                       className="mobile-button"
// // //                       data-bs-toggle="offcanvas"
// // //                       data-bs-target="#menu-mobile"
// // //                       aria-controls="menu-mobile"
// // //                     >
// // //                       <i className="icon-menu" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       <style jsx global>{`
// // //         .mobile-simple-search {
// // //           display: none;
// // //         }

// // //         @media (max-width: 991px) {
// // //           #header-main .header-inner-wrap {
// // //             position: relative;
// // //             min-height: 76px;
// // //             display: flex;
// // //             align-items: center;
// // //           }

// // //           #header-main .main-menu,
// // //           #header-main .phone-number {
// // //             display: none !important;
// // //           }

// // //           #header-main .header-logo {
// // //             width: 82px !important;
// // //             min-width: 82px !important;
// // //             z-index: 5;
// // //           }

// // //           #header-main .header-logo img {
// // //             height: 48px !important;
// // //             transform: scale(1.28) !important;
// // //             transform-origin: left center !important;
// // //           }

// // //           .mobile-simple-search {
// // //             display: block;
// // //             position: absolute;
// // //             left: 104px;
// // //             right: 78px;
// // //             top: 50%;
// // //             transform: translateY(-50%);
// // //             z-index: 4;
// // //           }

// // //           .mobile-simple-search form {
// // //             width: 100%;
// // //             height: 34px;
// // //             border: 1.4px solid #2684ff;
// // //             border-radius: 8px;
// // //             background: #ffffff;
// // //             display: flex;
// // //             align-items: center;
// // //             gap: 7px;
// // //             padding: 0 9px;
// // //             box-sizing: border-box;
// // //             overflow: hidden;
// // //           }

// // //           .mobile-simple-search i {
// // //             font-size: 13px;
// // //             color: #6b7280;
// // //             flex-shrink: 0;
// // //             line-height: 1;
// // //           }

// // //           .mobile-simple-search input,
// // //           #header-main .mobile-simple-search input,
// // //           #header-main .mobile-simple-search form input {
// // //             width: 100% !important;
// // //             min-width: 0 !important;
// // //             height: 100% !important;
// // //             min-height: 0 !important;
// // //             border: 0 !important;
// // //             outline: none !important;
// // //             background: transparent !important;
// // //             box-shadow: none !important;
// // //             color: #111827 !important;
// // //             font-size: 12px !important;
// // //             font-weight: 400 !important;
// // //             padding: 0 !important;
// // //             margin: 0 !important;
// // //             border-radius: 0 !important;
// // //           }

// // //           .mobile-simple-search input::placeholder {
// // //             color: #4b5563;
// // //           }

// // //           .mobile-header-suggestions {
// // //             position: absolute;
// // //             top: calc(100% + 8px);
// // //             left: 0;
// // //             right: -36px;
// // //             background: #ffffff;
// // //             border-radius: 12px;
// // //             overflow: hidden;
// // //             box-shadow: 0 14px 35px rgba(17, 24, 39, 0.22);
// // //             border: 1px solid #e5e7eb;
// // //             z-index: 999999;
// // //             max-height: 260px;
// // //             overflow-y: auto;
// // //           }

// // //           .mobile-header-suggestion-item {
// // //             width: 100%;
// // //             border: 0;
// // //             border-bottom: 1px solid #f1f1f1;
// // //             background: #ffffff;
// // //             padding: 10px 12px;
// // //             text-align: left;
// // //             cursor: pointer;
// // //             display: block;
// // //           }

// // //           .mobile-header-suggestion-item:hover {
// // //             background: #f8fafc;
// // //           }

// // //           .mobile-header-suggestion-item span {
// // //             display: block;
// // //             color: #111827;
// // //             font-size: 13px;
// // //             font-weight: 700;
// // //             line-height: 1.25;
// // //           }

// // //           .mobile-header-suggestion-item small {
// // //             display: block;
// // //             color: #6b7280;
// // //             font-size: 11px;
// // //             margin-top: 3px;
// // //             line-height: 1.25;
// // //           }

// // //           .mobile-header-no-result {
// // //             padding: 12px;
// // //             color: #6b7280;
// // //             font-size: 12px;
// // //             background: #ffffff;
// // //           }

// // //           #header-main .header-right {
// // //             margin-left: auto;
// // //             position: relative;
// // //             z-index: 6;
// // //           }

// // //           #header-main .mobile-button {
// // //             width: 36px;
// // //             height: 36px;
// // //             min-width: 36px;
// // //           }
// // //         }

// // //         @media (max-width: 575px) {
// // //           .mobile-simple-search {
// // //             left: 94px;
// // //             right: 86px;
// // //           }
// // //         }

// // //         @media (max-width: 380px) {
// // //           #header-main .header-logo {
// // //             width: 76px !important;
// // //             min-width: 76px !important;
// // //           }

// // //           #header-main .header-logo img {
// // //             height: 44px !important;
// // //             transform: scale(1.25) !important;
// // //           }

// // //           .mobile-simple-search {
// // //             left: 94px;
// // //             right: 58px;
// // //           }

// // //           .mobile-simple-search input,
// // //           #header-main .mobile-simple-search input,
// // //           #header-main .mobile-simple-search form input {
// // //             font-size: 11px !important;
// // //           }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }



// // "use client";

// // import React, { useEffect, useMemo, useRef, useState } from "react";
// // import Nav from "./Nav";
// // import Link from "next/link";
// // import DashboardNav from "./DashboardNav";
// // import { useRouter } from "next/navigation";
// // import { apiGet } from "../lib/api";
// // import NotificationBell from "@/components/common/NotificationBell";
// // function normalizeText(value) {
// //   return String(value || "").trim().toLowerCase();
// // }

// // function slugify(value) {
// //   return String(value || "")
// //     .trim()
// //     .toLowerCase()
// //     .replace(/&/g, "and")
// //     .replace(/[^\w\s-]/g, "")
// //     .replace(/\s+/g, "-")
// //     .replace(/-+/g, "-");
// // }

// // function getProjectTitle(item) {
// //   return (
// //     item?.title ||
// //     item?.project_name ||
// //     item?.property_name ||
// //     item?.name ||
// //     ""
// //   );
// // }

// // function getDeveloperName(item) {
// //   return (
// //     item?.developer_name ||
// //     item?.developer ||
// //     item?.builder_name ||
// //     item?.builder ||
// //     ""
// //   );
// // }

// // function getLocationName(item) {
// //   return item?.short_location || item?.location || item?.full_address || "";
// // }

// // export default function Header1({ parentClass = "header", projects = [] }) {
// //   const router = useRouter();
// //   const searchRef = useRef(null);

// //   const [searchText, setSearchText] = useState("");
// //   const [showSuggestions, setShowSuggestions] = useState(false);
// //   const [cities, setCities] = useState([]);
// //   const [developers, setDevelopers] = useState([]);

// //   useEffect(() => {
// //     const loadSearchData = async () => {
// //       try {
// //         const [citiesRes, developersRes] = await Promise.all([
// //           apiGet("/admindashboard/cities/"),
// //           apiGet("/admindashboard/developers/"),
// //         ]);

// //         setCities(Array.isArray(citiesRes) ? citiesRes : []);
// //         setDevelopers(Array.isArray(developersRes) ? developersRes : []);
// //       } catch (error) {
// //         console.error("Header search data fetch error:", error);
// //         setCities([]);
// //         setDevelopers([]);
// //       }
// //     };

// //     loadSearchData();
// //   }, []);

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (searchRef.current && !searchRef.current.contains(event.target)) {
// //         setShowSuggestions(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   const fallbackCitiesFromProjects = useMemo(() => {
// //     const map = new Map();

// //     projects.forEach((item) => {
// //       const city = item.city || "";
// //       const city_slug = item.city_slug || slugify(city);

// //       if (city && city_slug) {
// //         map.set(normalizeText(city), { city, city_slug });
// //       }
// //     });

// //     return Array.from(map.values());
// //   }, [projects]);

// //   const fallbackDevelopersFromProjects = useMemo(() => {
// //     const map = new Map();

// //     projects.forEach((item) => {
// //       const developer_name = getDeveloperName(item);
// //       const developer_slug = item.developer_slug || slugify(developer_name);

// //       if (developer_name && developer_slug) {
// //         map.set(normalizeText(developer_name), {
// //           developer_name,
// //           developer_slug,
// //         });
// //       }
// //     });

// //     return Array.from(map.values());
// //   }, [projects]);

// //   const finalCities = useMemo(
// //     () => (cities.length > 0 ? cities : fallbackCitiesFromProjects),
// //     [cities, fallbackCitiesFromProjects]
// //   );

// //   const finalDevelopers = useMemo(
// //     () => (developers.length > 0 ? developers : fallbackDevelopersFromProjects),
// //     [developers, fallbackDevelopersFromProjects]
// //   );

// //   const searchSuggestions = useMemo(() => {
// //     const keyword = normalizeText(searchText);
// //     if (!keyword) return [];

// //     const suggestionMap = new Map();

// //     finalCities.forEach((item) => {
// //       const cityName = item.city || "";
// //       const citySlug = item.city_slug || slugify(cityName);

// //       if (
// //         normalizeText(cityName).includes(keyword) ||
// //         normalizeText(citySlug).includes(keyword)
// //       ) {
// //         const key = `city-${normalizeText(cityName)}`;
// //         if (!suggestionMap.has(key)) {
// //           suggestionMap.set(key, {
// //             label: cityName,
// //             subLabel: "City",
// //             value: cityName,
// //             type: "city",
// //             slug: citySlug,
// //           });
// //         }
// //       }
// //     });

// //     finalDevelopers.forEach((item) => {
// //       const developerName = item.developer_name || "";
// //       const developerSlug = item.developer_slug || slugify(developerName);

// //       if (
// //         normalizeText(developerName).includes(keyword) ||
// //         normalizeText(developerSlug).includes(keyword)
// //       ) {
// //         const key = `developer-${normalizeText(developerName)}`;
// //         if (!suggestionMap.has(key)) {
// //           suggestionMap.set(key, {
// //             label: developerName,
// //             subLabel: "Developer",
// //             value: developerName,
// //             type: "developer",
// //             slug: developerSlug,
// //           });
// //         }
// //       }
// //     });

// //     projects.forEach((item) => {
// //       const title = getProjectTitle(item);
// //       const city = item.city || "";
// //       const citySlug = item.city_slug || slugify(city);
// //       const location = getLocationName(item);
// //       const address = item.full_address || item.address || "";
// //       const developer = getDeveloperName(item);
// //       const propertyType = item.property_type || "";
// //       const propertyStatus = item.property_status || "";

// //       const searchableText = normalizeText(
// //         [
// //           title,
// //           city,
// //           location,
// //           address,
// //           developer,
// //           propertyType,
// //           propertyStatus,
// //         ].join(" ")
// //       );

// //       if (!searchableText.includes(keyword)) return;

// //       const mainLabel =
// //         title || location || city || developer || propertyType || propertyStatus;
// //       if (!mainLabel) return;

// //       const subLabel = [location, city, developer]
// //         .filter(Boolean)
// //         .filter((value, index, self) => self.indexOf(value) === index)
// //         .join(" • ");

// //       const key = `project-${normalizeText(`${mainLabel}-${subLabel}`)}`;

// //       if (!suggestionMap.has(key)) {
// //         suggestionMap.set(key, {
// //           label: mainLabel,
// //           subLabel: subLabel || "Project",
// //           value: mainLabel,
// //           type: "project",
// //           city,
// //           citySlug,
// //           location,
// //         });
// //       }
// //     });

// //     return Array.from(suggestionMap.values()).slice(0, 8);
// //   }, [searchText, finalCities, finalDevelopers, projects]);

// //   const findCityMatch = (searchValue) => {
// //     const normalized = normalizeText(searchValue);
// //     if (!normalized) return null;

// //     return (
// //       finalCities.find((item) => {
// //         const cityName = normalizeText(item.city);
// //         const citySlug = normalizeText(item.city_slug);
// //         return cityName === normalized || citySlug === normalized;
// //       }) ||
// //       finalCities.find((item) => {
// //         const cityName = normalizeText(item.city);
// //         const citySlug = normalizeText(item.city_slug);
// //         return cityName.includes(normalized) || citySlug.includes(normalized);
// //       }) ||
// //       null
// //     );
// //   };

// //   const findDeveloperMatch = (searchValue) => {
// //     const normalized = normalizeText(searchValue);
// //     if (!normalized) return null;

// //     return (
// //       finalDevelopers.find((item) => {
// //         const developerName = normalizeText(item.developer_name);
// //         const developerSlug = normalizeText(item.developer_slug);
// //         return developerName === normalized || developerSlug === normalized;
// //       }) ||
// //       finalDevelopers.find((item) => {
// //         const developerName = normalizeText(item.developer_name);
// //         const developerSlug = normalizeText(item.developer_slug);
// //         return (
// //           developerName.includes(normalized) ||
// //           developerSlug.includes(normalized)
// //         );
// //       }) ||
// //       null
// //     );
// //   };

// //   const handleSuggestionSelect = (suggestion) => {
// //     setSearchText(suggestion.value || "");
// //     setShowSuggestions(false);

// //     if (suggestion.type === "city" && suggestion.slug) {
// //       router.push(`/cities/${suggestion.slug}`);
// //       return;
// //     }

// //     if (suggestion.type === "developer" && suggestion.slug) {
// //       router.push(`/developers/${suggestion.slug}`);
// //       return;
// //     }

// //     if (suggestion.citySlug) {
// //       router.push(`/cities/${suggestion.citySlug}`);
// //       return;
// //     }

// //     router.push(`/?search=${encodeURIComponent(suggestion.value || "")}`);
// //   };

// //   const handleSearchSubmit = (e) => {
// //     e.preventDefault();

// //     const rawSearch = searchText.trim();
// //     if (!rawSearch) return;

// //     const cityMatch = findCityMatch(rawSearch);
// //     if (cityMatch?.city_slug) {
// //       router.push(`/cities/${cityMatch.city_slug}`);
// //       setShowSuggestions(false);
// //       return;
// //     }

// //     const developerMatch = findDeveloperMatch(rawSearch);
// //     if (developerMatch?.developer_slug) {
// //       router.push(`/developers/${developerMatch.developer_slug}`);
// //       setShowSuggestions(false);
// //       return;
// //     }

// //     router.push(`/?search=${encodeURIComponent(rawSearch)}`);
// //     setShowSuggestions(false);
// //   };

// //   return (
// //     <>
// //       <header id="header-main" className={parentClass}>
// //         <div className="header-inner">
// //           <div className="tf-container xl">
// //             <div className="row">
// //               <div className="col-12">
// //                 <div className="header-inner-wrap">
// //                   <div className="header-logo" style={{ overflow: "visible" }}>
// //                     <Link href="/" className="site-logo">
// //                       <img
// //                         src="/images/logo/growl_logo2.png"
// //                         alt="logo"
// //                         style={{
// //                           height: "80px",
// //                           transform: "scale(1.95)",
// //                           transformOrigin: "left center",
// //                           display: "block",
// //                         }}
// //                       />
// //                     </Link>
// //                   </div>

// //                   <div className="mobile-simple-search" ref={searchRef}>
// //                     <form onSubmit={handleSearchSubmit}>
// //                       <i className="icon-MagnifyingGlass" />
// //                       <input
// //                         type="text"
// //                         placeholder="Search city, project..."
// //                         value={searchText}
// //                         autoComplete="off"
// //                         onChange={(e) => {
// //                           setSearchText(e.target.value);
// //                           setShowSuggestions(true);
// //                         }}
// //                         onFocus={() => {
// //                           if (searchText) setShowSuggestions(true);
// //                         }}
// //                       />
// //                     </form>

// //                     {showSuggestions && searchText && (
// //                       <div className="mobile-header-suggestions">
// //                         {searchSuggestions.length > 0 ? (
// //                           searchSuggestions.map((suggestion, index) => (
// //                             <button
// //                               type="button"
// //                               key={`${suggestion.type}-${suggestion.label}-${index}`}
// //                               className="mobile-header-suggestion-item"
// //                               onMouseDown={(e) => {
// //                                 e.preventDefault();
// //                                 handleSuggestionSelect(suggestion);
// //                               }}
// //                             >
// //                               <span>{suggestion.label}</span>
// //                               {suggestion.subLabel ? (
// //                                 <small>{suggestion.subLabel}</small>
// //                               ) : null}
// //                             </button>
// //                           ))
// //                         ) : (
// //                           <div className="mobile-header-no-result">
// //                             No matching result found
// //                           </div>
// //                         )}
// //                       </div>
// //                     )}
// //                   </div>

// //                   <nav className="main-menu">
// //                     <ul className="navigation">
// //                       <Nav />
// //                     </ul>
// //                   </nav>

// //                   <div className="header-right">
// //                     <div className="phone-number">
// //                       <div className="icons">
// //                         <svg
// //                           width={20}
// //                           height={20}
// //                           viewBox="0 0 20 20"
// //                           fill="none"
// //                         >
// //                           <path
// //                             d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z"
// //                             stroke="black"
// //                             strokeWidth="1.5"
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                           />
// //                         </svg>
// //                       </div>
// //                       <p>+91 9326183013</p>
// //                     </div>
// //                     <NotificationBell />
// //                     <DashboardNav />

// //                     <div
// //                       className="mobile-button"
// //                       data-bs-toggle="offcanvas"
// //                       data-bs-target="#menu-mobile"
// //                       aria-controls="menu-mobile"
// //                     >
// //                       <i className="icon-menu" />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       <style jsx global>{`
// //         .mobile-simple-search {
// //           display: none;
// //         }

// //         @media (max-width: 991px) {
// //           #header-main .header-inner {
// //             width: 100%;
// //             overflow: visible !important;
// //           }

// //           #header-main .tf-container,
// //           #header-main .tf-container.xl,
// //           #header-main .row,
// //           #header-main .col-12 {
// //             width: 100% !important;
// //             max-width: 100% !important;
// //             overflow: visible !important;
// //           }

// //           #header-main .header-inner-wrap {
// //             position: relative;
// //             min-height: 76px;
// //             width: 100%;
// //             display: flex !important;
// //             align-items: center;
// //             justify-content: space-between;
// //             gap: 8px;
// //             overflow: visible !important;
// //             box-sizing: border-box;
// //           }

// //           #header-main .main-menu,
// //           #header-main .phone-number {
// //             display: none !important;
// //           }

// //           #header-main .header-logo {
// //             width: 82px !important;
// //             min-width: 82px !important;
// //             max-width: 82px !important;
// //             flex: 0 0 82px !important;
// //             z-index: 5;
// //             overflow: visible !important;
// //           }

// //           #header-main .header-logo img {
// //             height: 48px !important;
// //             width: auto !important;
// //             max-width: none !important;
// //             transform: scale(1.28) !important;
// //             transform-origin: left center !important;
// //           }

// //           .mobile-simple-search {
// //             display: block;
// //             position: relative;
// //             left: auto;
// //             right: auto;
// //             top: auto;
// //             transform: none;
// //             flex: 1 1 auto;
// //             min-width: 0;
// //             max-width: 100%;
// //             z-index: 4;
// //           }

// //           .mobile-simple-search form {
// //             width: 100%;
// //             height: 34px;
// //             border: 1.4px solid #2684ff;
// //             border-radius: 8px;
// //             background: #ffffff;
// //             display: flex;
// //             align-items: center;
// //             gap: 7px;
// //             padding: 0 9px;
// //             box-sizing: border-box;
// //             overflow: hidden;
// //           }

// //           .mobile-simple-search i {
// //             font-size: 13px;
// //             color: #6b7280;
// //             flex: 0 0 auto;
// //             line-height: 1;
// //           }

// //           .mobile-simple-search input,
// //           #header-main .mobile-simple-search input,
// //           #header-main .mobile-simple-search form input {
// //             width: 100% !important;
// //             min-width: 0 !important;
// //             height: 100% !important;
// //             min-height: 0 !important;
// //             border: 0 !important;
// //             outline: none !important;
// //             background: transparent !important;
// //             box-shadow: none !important;
// //             color: #111827 !important;
// //             font-size: clamp(10px, 3vw, 12px) !important;
// //             font-weight: 400 !important;
// //             padding: 0 !important;
// //             margin: 0 !important;
// //             border-radius: 0 !important;
// //             text-overflow: ellipsis;
// //           }

// //           .mobile-simple-search input::placeholder {
// //             color: #4b5563;
// //             opacity: 1;
// //           }

// //           .mobile-header-suggestions {
// //             position: absolute;
// //             top: calc(100% + 8px);
// //             left: 0;
// //             right: 0;
// //             width: 100%;
// //             background: #ffffff;
// //             border-radius: 12px;
// //             overflow: hidden;
// //             box-shadow: 0 14px 35px rgba(17, 24, 39, 0.22);
// //             border: 1px solid #e5e7eb;
// //             z-index: 999999;
// //             max-height: 260px;
// //             overflow-y: auto;
// //           }

// //           .mobile-header-suggestion-item {
// //             width: 100%;
// //             border: 0;
// //             border-bottom: 1px solid #f1f1f1;
// //             background: #ffffff;
// //             padding: 10px 12px;
// //             text-align: left;
// //             cursor: pointer;
// //             display: block;
// //           }

// //           .mobile-header-suggestion-item:hover {
// //             background: #f8fafc;
// //           }

// //           .mobile-header-suggestion-item span {
// //             display: block;
// //             color: #111827;
// //             font-size: 13px;
// //             font-weight: 700;
// //             line-height: 1.25;
// //           }

// //           .mobile-header-suggestion-item small {
// //             display: block;
// //             color: #6b7280;
// //             font-size: 11px;
// //             margin-top: 3px;
// //             line-height: 1.25;
// //           }

// //           .mobile-header-no-result {
// //             padding: 12px;
// //             color: #6b7280;
// //             font-size: 12px;
// //             background: #ffffff;
// //           }

// //           #header-main .header-right {
// //             margin-left: 0 !important;
// //             flex: 0 0 auto;
// //             min-width: max-content;
// //             position: relative;
// //             z-index: 6;
// //             display: flex !important;
// //             align-items: center;
// //             justify-content: flex-end;
// //             gap: 6px;
// //           }

// //           #header-main .header-right > * {
// //             flex-shrink: 0;
// //           }

// //           #header-main .mobile-button {
// //             width: 36px;
// //             height: 36px;
// //             min-width: 36px;
// //             display: inline-flex !important;
// //             align-items: center;
// //             justify-content: center;
// //           }
// //         }

// //         @media (max-width: 575px) {
// //           #header-main .header-inner-wrap {
// //             gap: 7px;
// //           }

// //           #header-main .header-logo {
// //             width: 78px !important;
// //             min-width: 78px !important;
// //             max-width: 78px !important;
// //             flex-basis: 78px !important;
// //           }

// //           #header-main .header-logo img {
// //             height: 46px !important;
// //             transform: scale(1.22) !important;
// //           }

// //           .mobile-simple-search form {
// //             height: 33px;
// //             padding: 0 8px;
// //             gap: 6px;
// //           }

// //           .mobile-simple-search i {
// //             font-size: 12px;
// //           }

// //           #header-main .mobile-button {
// //             width: 34px;
// //             height: 34px;
// //             min-width: 34px;
// //           }
// //         }

// //         @media (max-width: 420px) {
// //           #header-main .header-inner-wrap {
// //             gap: 6px;
// //           }

// //           #header-main .header-logo {
// //             width: 72px !important;
// //             min-width: 72px !important;
// //             max-width: 72px !important;
// //             flex-basis: 72px !important;
// //           }

// //           #header-main .header-logo img {
// //             height: 43px !important;
// //             transform: scale(1.18) !important;
// //           }

// //           .mobile-simple-search form {
// //             height: 32px;
// //             border-radius: 8px;
// //             padding: 0 7px;
// //           }

// //           .mobile-simple-search input,
// //           #header-main .mobile-simple-search input,
// //           #header-main .mobile-simple-search form input {
// //             font-size: 10.5px !important;
// //           }

// //           #header-main .header-right {
// //             gap: 4px;
// //           }

// //           #header-main .mobile-button {
// //             width: 32px;
// //             height: 32px;
// //             min-width: 32px;
// //           }
// //         }

// //         @media (max-width: 360px) {
// //           #header-main .header-logo {
// //             width: 66px !important;
// //             min-width: 66px !important;
// //             max-width: 66px !important;
// //             flex-basis: 66px !important;
// //           }

// //           #header-main .header-logo img {
// //             height: 40px !important;
// //             transform: scale(1.12) !important;
// //           }

// //           #header-main .header-inner-wrap {
// //             gap: 5px;
// //           }

// //           .mobile-simple-search form {
// //             height: 30px;
// //             padding: 0 6px;
// //             gap: 5px;
// //           }

// //           .mobile-simple-search input,
// //           #header-main .mobile-simple-search input,
// //           #header-main .mobile-simple-search form input {
// //             font-size: 10px !important;
// //           }

// //           #header-main .mobile-button {
// //             width: 30px;
// //             height: 30px;
// //             min-width: 30px;
// //           }
// //         }

// //         @media (max-width: 330px) {
// //           .mobile-simple-search input::placeholder {
// //             color: transparent;
// //           }
// //         }
// //       `}</style>
// //     </>
// //   );
// // }






// "use client";

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import Nav from "./Nav";
// import Link from "next/link";
// import DashboardNav from "./DashboardNav";
// import { useRouter } from "next/navigation";
// import { apiGet } from "../lib/api";
// import NotificationBell from "@/components/common/NotificationBell";
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

// export default function Header1({ parentClass = "header", projects = [] }) {
//   const router = useRouter();
//   const searchRef = useRef(null);

//   const [searchText, setSearchText] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [cities, setCities] = useState([]);
//   const [developers, setDevelopers] = useState([]);

//   useEffect(() => {
//     const loadSearchData = async () => {
//       try {
//         const [citiesRes, developersRes] = await Promise.all([
//           apiGet("/admindashboard/cities/"),
//           apiGet("/admindashboard/developers/"),
//         ]);

//         setCities(Array.isArray(citiesRes) ? citiesRes : []);
//         setDevelopers(Array.isArray(developersRes) ? developersRes : []);
//       } catch (error) {
//         console.error("Header search data fetch error:", error);
//         setCities([]);
//         setDevelopers([]);
//       }
//     };

//     loadSearchData();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setShowSuggestions(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const fallbackCitiesFromProjects = useMemo(() => {
//     const map = new Map();

//     projects.forEach((item) => {
//       const city = item.city || "";
//       const city_slug = item.city_slug || slugify(city);

//       if (city && city_slug) {
//         map.set(normalizeText(city), { city, city_slug });
//       }
//     });

//     return Array.from(map.values());
//   }, [projects]);

//   const fallbackDevelopersFromProjects = useMemo(() => {
//     const map = new Map();

//     projects.forEach((item) => {
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
//   }, [projects]);

//   const finalCities = useMemo(
//     () => (cities.length > 0 ? cities : fallbackCitiesFromProjects),
//     [cities, fallbackCitiesFromProjects]
//   );

//   const finalDevelopers = useMemo(
//     () => (developers.length > 0 ? developers : fallbackDevelopersFromProjects),
//     [developers, fallbackDevelopersFromProjects]
//   );

//   const searchSuggestions = useMemo(() => {
//     const keyword = normalizeText(searchText);
//     if (!keyword) return [];

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

//     projects.forEach((item) => {
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
//           location,
//           address,
//           developer,
//           propertyType,
//           propertyStatus,
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
//         });
//       }
//     });

//     return Array.from(suggestionMap.values()).slice(0, 8);
//   }, [searchText, finalCities, finalDevelopers, projects]);

//   const findCityMatch = (searchValue) => {
//     const normalized = normalizeText(searchValue);
//     if (!normalized) return null;

//     return (
//       finalCities.find((item) => {
//         const cityName = normalizeText(item.city);
//         const citySlug = normalizeText(item.city_slug);
//         return cityName === normalized || citySlug === normalized;
//       }) ||
//       finalCities.find((item) => {
//         const cityName = normalizeText(item.city);
//         const citySlug = normalizeText(item.city_slug);
//         return cityName.includes(normalized) || citySlug.includes(normalized);
//       }) ||
//       null
//     );
//   };

//   const findDeveloperMatch = (searchValue) => {
//     const normalized = normalizeText(searchValue);
//     if (!normalized) return null;

//     return (
//       finalDevelopers.find((item) => {
//         const developerName = normalizeText(item.developer_name);
//         const developerSlug = normalizeText(item.developer_slug);
//         return developerName === normalized || developerSlug === normalized;
//       }) ||
//       finalDevelopers.find((item) => {
//         const developerName = normalizeText(item.developer_name);
//         const developerSlug = normalizeText(item.developer_slug);
//         return (
//           developerName.includes(normalized) ||
//           developerSlug.includes(normalized)
//         );
//       }) ||
//       null
//     );
//   };

//   const handleSuggestionSelect = (suggestion) => {
//     setSearchText(suggestion.value || "");
//     setShowSuggestions(false);

//     if (suggestion.type === "city" && suggestion.slug) {
//       router.push(`/cities/${suggestion.slug}`);
//       return;
//     }

//     if (suggestion.type === "developer" && suggestion.slug) {
//       router.push(`/developers/${suggestion.slug}`);
//       return;
//     }

//     if (suggestion.citySlug) {
//       router.push(`/cities/${suggestion.citySlug}`);
//       return;
//     }

//     router.push(`/?search=${encodeURIComponent(suggestion.value || "")}`);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();

//     const rawSearch = searchText.trim();
//     if (!rawSearch) return;

//     const cityMatch = findCityMatch(rawSearch);
//     if (cityMatch?.city_slug) {
//       router.push(`/cities/${cityMatch.city_slug}`);
//       setShowSuggestions(false);
//       return;
//     }

//     const developerMatch = findDeveloperMatch(rawSearch);
//     if (developerMatch?.developer_slug) {
//       router.push(`/developers/${developerMatch.developer_slug}`);
//       setShowSuggestions(false);
//       return;
//     }

//     router.push(`/?search=${encodeURIComponent(rawSearch)}`);
//     setShowSuggestions(false);
//   };

//   return (
//     <>
//       <header id="header-main" className={parentClass}>
//         <div className="header-inner">
//           <div className="tf-container xl">
//             <div className="row">
//               <div className="col-12">
//                 <div className="header-inner-wrap">
//                   <div className="header-logo" style={{ overflow: "visible" }}>
//                     <Link href="/" className="site-logo">
//                       <img
//                         src="/images/logo/growl_logo_3.jpeg"
//                         alt="logo"
//                         style={{
//                           height: "80px",
//                           transform: "scale(1.95)",
//                           transformOrigin: "left center",
//                           display: "block",
//                         }}
//                       />
//                     </Link>
//                   </div>

//                   <div className="mobile-simple-search" ref={searchRef}>
//                     <form onSubmit={handleSearchSubmit}>
//                       <i className="icon-MagnifyingGlass" />
//                       <input
//                         type="text"
//                         placeholder="Search city, project..."
//                         value={searchText}
//                         autoComplete="off"
//                         onChange={(e) => {
//                           setSearchText(e.target.value);
//                           setShowSuggestions(true);
//                         }}
//                         onFocus={() => {
//                           if (searchText) setShowSuggestions(true);
//                         }}
//                       />
//                     </form>

//                     {showSuggestions && searchText && (
//                       <div className="mobile-header-suggestions">
//                         {searchSuggestions.length > 0 ? (
//                           searchSuggestions.map((suggestion, index) => (
//                             <button
//                               type="button"
//                               key={`${suggestion.type}-${suggestion.label}-${index}`}
//                               className="mobile-header-suggestion-item"
//                               onMouseDown={(e) => {
//                                 e.preventDefault();
//                                 handleSuggestionSelect(suggestion);
//                               }}
//                             >
//                               <span>{suggestion.label}</span>
//                               {suggestion.subLabel ? (
//                                 <small>{suggestion.subLabel}</small>
//                               ) : null}
//                             </button>
//                           ))
//                         ) : (
//                           <div className="mobile-header-no-result">
//                             No matching result found
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>

//                   <nav className="main-menu">
//                     <ul className="navigation">
//                       <Nav />
//                     </ul>
//                   </nav>

//                   <div className="header-right">
//                     <div className="phone-number">
//                       <div className="icons">
//                         <svg
//                           width={20}
//                           height={20}
//                           viewBox="0 0 20 20"
//                           fill="none"
//                         >
//                           <path
//                             d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z"
//                             stroke="black"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </div>
//                       <p>+91 9326183013</p>
//                     </div>
//                     <NotificationBell />
//                     <DashboardNav />

//                     <div
//                       className="mobile-button"
//                       data-bs-toggle="offcanvas"
//                       data-bs-target="#menu-mobile"
//                       aria-controls="menu-mobile"
//                     >
//                       <i className="icon-menu" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <style jsx global>{`
//   /*==================================================
//     GROWL CITY REALTY - HEADER + HERO PREMIUM STYLE
//     Logo Matched Colors: Blue + Yellow
//   ==================================================*/

//   :root {
//     --growl-blue: #0B4F7A;
//     --growl-blue-dark: #073A5C;
//     --growl-blue-deep: #062C47;
//     --growl-blue-soft: #EAF5FB;

//     --growl-yellow: #F2C21A;
//     --growl-yellow-dark: #D9A90E;
//     --growl-yellow-soft: #FFF4BF;

//     --growl-white: #ffffff;
//     --growl-text: #142033;
//     --growl-heading: #081827;
//     --growl-muted: #64748B;
//     --growl-border: #E2E8F0;
//   }

//   /*==================================================
//     HEADER PREMIUM LOOK
//   ==================================================*/

//   #header-main.header,
//   #header-main {
//     background: rgba(255, 255, 255, 0.97) !important;
//     backdrop-filter: blur(18px) !important;
//     -webkit-backdrop-filter: blur(18px) !important;
//     border-bottom: 1px solid rgba(226, 232, 240, 0.9) !important;
//     box-shadow: 0 10px 35px rgba(6, 44, 71, 0.08) !important;
//   }

//   #header-main.fixed,
//   #header-main.header-sticky,
//   #header-main.is-sticky {
//     background: rgba(255, 255, 255, 0.99) !important;
//     box-shadow: 0 14px 45px rgba(6, 44, 71, 0.14) !important;
//   }

//   #header-main .header-inner-wrap {
//     align-items: center !important;
//   }

//   #header-main .main-menu .navigation > li > a,
//   #header-main .navigation > li > a,
//   #header-main .main-menu a {
//     color: var(--growl-text) !important;
//     font-size: 16px !important;
//     font-weight: 850 !important;
//     letter-spacing: -0.15px !important;
//     line-height: 1.2 !important;
//     transition: all 0.25s ease !important;
//   }

//   #header-main .main-menu .navigation > li > a:hover,
//   #header-main .navigation > li > a:hover,
//   #header-main .main-menu a:hover {
//     color: var(--growl-blue) !important;
//   }

//   #header-main .navigation > li.current-menu > a,
//   #header-main .navigation > li.current > a,
//   #header-main .navigation > li.active > a,
//   #header-main .main-menu .active > a {
//     background: linear-gradient(
//       135deg,
//       var(--growl-yellow) 0%,
//       #FFD84D 55%,
//       var(--growl-yellow-dark) 100%
//     ) !important;
//     color: var(--growl-blue-deep) !important;
//     border-radius: 999px !important;
//     padding: 14px 19px !important;
//     box-shadow: 0 12px 28px rgba(242, 194, 26, 0.26) !important;
//   }

//   #header-main .phone-number {
//     border: 1px solid rgba(242, 194, 26, 0.45) !important;
//     background: #ffffff !important;
//     border-radius: 999px !important;
//     box-shadow: 0 12px 30px rgba(6, 44, 71, 0.1) !important;
//   }

//   #header-main .phone-number .icons {
//     background: linear-gradient(
//       135deg,
//       var(--growl-yellow),
//       #FFD84D
//     ) !important;
//     color: var(--growl-blue-deep) !important;
//   }

//   #header-main .phone-number svg path {
//     stroke: var(--growl-blue-deep) !important;
//   }

//   #header-main .phone-number p {
//     color: var(--growl-text) !important;
//     font-weight: 900 !important;
//     letter-spacing: 0.3px !important;
//   }

//   #header-main .mobile-button {
//     background: var(--growl-blue-deep) !important;
//     color: #ffffff !important;
//     border-radius: 12px !important;
//     box-shadow: 0 8px 20px rgba(6, 44, 71, 0.2) !important;
//   }

//   #header-main .mobile-button i {
//     color: #ffffff !important;
//   }

//   /*==================================================
//     HERO / BANNER PREMIUM TYPOGRAPHY
//     Client Requirement:
//     - Bigger main heading/banner text
//     - Bold premium typography
//     - Better spacing and alignment
//     - Logo matched blue + yellow theme
//   ==================================================*/

//   .hero,
//   .flat-slider,
//   .slider-home,
//   .home-banner,
//   .hero-section,
//   .banner-section,
//   .main-banner,
//   .tf-slider,
//   .page-title-home {
//     position: relative !important;
//   }

//   .hero::before,
//   .flat-slider::before,
//   .slider-home::before,
//   .home-banner::before,
//   .hero-section::before,
//   .banner-section::before,
//   .main-banner::before,
//   .tf-slider::before,
//   .page-title-home::before {
//     content: "" !important;
//     position: absolute !important;
//     inset: 0 !important;
//     background: linear-gradient(
//       90deg,
//       rgba(6, 44, 71, 0.76) 0%,
//       rgba(11, 79, 122, 0.52) 44%,
//       rgba(6, 44, 71, 0.18) 100%
//     ) !important;
//     pointer-events: none !important;
//     z-index: 1 !important;
//   }

//   .hero .content,
//   .hero .content-inner,
//   .hero .hero-content,
//   .hero .slider-content,
//   .hero .wrap-content,
//   .hero .heading-section,
//   .flat-slider .content,
//   .flat-slider .content-inner,
//   .flat-slider .slider-content,
//   .flat-slider .wrap-content,
//   .flat-slider .heading-section,
//   .slider-home .content,
//   .slider-home .content-inner,
//   .slider-home .wrap-content,
//   .slider-home .heading-section,
//   .home-banner .content,
//   .home-banner .content-inner,
//   .home-banner .wrap-content,
//   .home-banner .heading-section,
//   .hero-section .content,
//   .hero-section .content-inner,
//   .hero-section .wrap-content,
//   .hero-section .heading-section,
//   .banner-section .content,
//   .banner-section .content-inner,
//   .banner-section .wrap-content,
//   .banner-section .heading-section,
//   .main-banner .content,
//   .main-banner .content-inner,
//   .main-banner .wrap-content,
//   .main-banner .heading-section,
//   .tf-slider .content,
//   .tf-slider .content-inner,
//   .tf-slider .wrap-content,
//   .tf-slider .heading-section,
//   .page-title-home .content,
//   .page-title-home .content-inner,
//   .page-title-home .wrap-content,
//   .page-title-home .heading-section {
//     position: relative !important;
//     z-index: 2 !important;
//   }

//   .hero h1,
//   .hero .heading,
//   .hero .title,
//   .hero .title-heading,
//   .hero .main-title,
//   .flat-slider h1,
//   .flat-slider .heading,
//   .flat-slider .title,
//   .flat-slider .title-heading,
//   .flat-slider .main-title,
//   .slider-home h1,
//   .slider-home .heading,
//   .slider-home .title,
//   .slider-home .title-heading,
//   .slider-home .main-title,
//   .home-banner h1,
//   .home-banner .heading,
//   .home-banner .title,
//   .home-banner .title-heading,
//   .home-banner .main-title,
//   .hero-section h1,
//   .hero-section .heading,
//   .hero-section .title,
//   .hero-section .title-heading,
//   .hero-section .main-title,
//   .banner-section h1,
//   .banner-section .heading,
//   .banner-section .title,
//   .banner-section .title-heading,
//   .banner-section .main-title,
//   .main-banner h1,
//   .main-banner .heading,
//   .main-banner .title,
//   .main-banner .title-heading,
//   .main-banner .main-title,
//   .tf-slider h1,
//   .tf-slider .heading,
//   .tf-slider .title,
//   .tf-slider .title-heading,
//   .tf-slider .main-title,
//   .page-title-home h1,
//   .page-title-home .heading,
//   .page-title-home .title,
//   .page-title-home .title-heading,
//   .page-title-home .main-title {
//     font-size: clamp(44px, 5.6vw, 84px) !important;
//     line-height: 1.04 !important;
//     font-weight: 950 !important;
//     letter-spacing: -1.8px !important;
//     color: var(--growl-white) !important;
//     margin-bottom: 22px !important;
//     max-width: 940px !important;
//     text-transform: none !important;
//     text-shadow: 0 14px 42px rgba(0, 0, 0, 0.36) !important;
//   }

//   .hero h1 span,
//   .hero .heading span,
//   .hero .title span,
//   .hero .title-heading span,
//   .hero .main-title span,
//   .flat-slider h1 span,
//   .flat-slider .heading span,
//   .flat-slider .title span,
//   .flat-slider .title-heading span,
//   .flat-slider .main-title span,
//   .slider-home h1 span,
//   .slider-home .heading span,
//   .slider-home .title span,
//   .slider-home .title-heading span,
//   .slider-home .main-title span,
//   .home-banner h1 span,
//   .home-banner .heading span,
//   .home-banner .title span,
//   .home-banner .title-heading span,
//   .home-banner .main-title span,
//   .hero-section h1 span,
//   .hero-section .heading span,
//   .hero-section .title span,
//   .hero-section .title-heading span,
//   .hero-section .main-title span,
//   .banner-section h1 span,
//   .banner-section .heading span,
//   .banner-section .title span,
//   .banner-section .title-heading span,
//   .banner-section .main-title span,
//   .main-banner h1 span,
//   .main-banner .heading span,
//   .main-banner .title span,
//   .main-banner .title-heading span,
//   .main-banner .main-title span,
//   .tf-slider h1 span,
//   .tf-slider .heading span,
//   .tf-slider .title span,
//   .tf-slider .title-heading span,
//   .tf-slider .main-title span,
//   .page-title-home h1 span,
//   .page-title-home .heading span,
//   .page-title-home .title span,
//   .page-title-home .title-heading span,
//   .page-title-home .main-title span {
//     color: var(--growl-yellow) !important;
//     text-shadow: 0 10px 28px rgba(242, 194, 26, 0.28) !important;
//   }

//   .hero p,
//   .hero .text,
//   .hero .description,
//   .hero .desc,
//   .flat-slider p,
//   .flat-slider .text,
//   .flat-slider .description,
//   .flat-slider .desc,
//   .slider-home p,
//   .slider-home .text,
//   .slider-home .description,
//   .slider-home .desc,
//   .home-banner p,
//   .home-banner .text,
//   .home-banner .description,
//   .home-banner .desc,
//   .hero-section p,
//   .hero-section .text,
//   .hero-section .description,
//   .hero-section .desc,
//   .banner-section p,
//   .banner-section .text,
//   .banner-section .description,
//   .banner-section .desc,
//   .main-banner p,
//   .main-banner .text,
//   .main-banner .description,
//   .main-banner .desc,
//   .tf-slider p,
//   .tf-slider .text,
//   .tf-slider .description,
//   .tf-slider .desc,
//   .page-title-home p,
//   .page-title-home .text,
//   .page-title-home .description,
//   .page-title-home .desc {
//     font-size: clamp(16px, 1.35vw, 22px) !important;
//     line-height: 1.65 !important;
//     font-weight: 500 !important;
//     color: rgba(255, 255, 255, 0.94) !important;
//     max-width: 700px !important;
//     margin-bottom: 32px !important;
//     text-shadow: 0 8px 28px rgba(0, 0, 0, 0.28) !important;
//   }

//   .hero .sub-title,
//   .hero .subtitle,
//   .hero .tagline,
//   .hero .sub-heading,
//   .flat-slider .sub-title,
//   .flat-slider .subtitle,
//   .flat-slider .tagline,
//   .flat-slider .sub-heading,
//   .slider-home .sub-title,
//   .slider-home .subtitle,
//   .slider-home .tagline,
//   .slider-home .sub-heading,
//   .home-banner .sub-title,
//   .home-banner .subtitle,
//   .home-banner .tagline,
//   .home-banner .sub-heading,
//   .hero-section .sub-title,
//   .hero-section .subtitle,
//   .hero-section .tagline,
//   .hero-section .sub-heading,
//   .banner-section .sub-title,
//   .banner-section .subtitle,
//   .banner-section .tagline,
//   .banner-section .sub-heading,
//   .main-banner .sub-title,
//   .main-banner .subtitle,
//   .main-banner .tagline,
//   .main-banner .sub-heading,
//   .tf-slider .sub-title,
//   .tf-slider .subtitle,
//   .tf-slider .tagline,
//   .tf-slider .sub-heading,
//   .page-title-home .sub-title,
//   .page-title-home .subtitle,
//   .page-title-home .tagline,
//   .page-title-home .sub-heading {
//     display: inline-flex !important;
//     align-items: center !important;
//     width: fit-content !important;
//     background: rgba(255, 255, 255, 0.14) !important;
//     border: 1px solid rgba(242, 194, 26, 0.42) !important;
//     backdrop-filter: blur(14px) !important;
//     -webkit-backdrop-filter: blur(14px) !important;
//     color: var(--growl-yellow) !important;
//     border-radius: 999px !important;
//     padding: 9px 18px !important;
//     font-size: 13px !important;
//     line-height: 1.2 !important;
//     font-weight: 900 !important;
//     letter-spacing: 0.8px !important;
//     text-transform: uppercase !important;
//     margin-bottom: 18px !important;
//     box-shadow: 0 14px 34px rgba(6, 44, 71, 0.18) !important;
//   }

//   .hero .tf-btn,
//   .hero .btn,
//   .hero a[class*="btn"],
//   .flat-slider .tf-btn,
//   .flat-slider .btn,
//   .flat-slider a[class*="btn"],
//   .slider-home .tf-btn,
//   .slider-home .btn,
//   .slider-home a[class*="btn"],
//   .home-banner .tf-btn,
//   .home-banner .btn,
//   .home-banner a[class*="btn"],
//   .hero-section .tf-btn,
//   .hero-section .btn,
//   .hero-section a[class*="btn"],
//   .banner-section .tf-btn,
//   .banner-section .btn,
//   .banner-section a[class*="btn"],
//   .main-banner .tf-btn,
//   .main-banner .btn,
//   .main-banner a[class*="btn"],
//   .tf-slider .tf-btn,
//   .tf-slider .btn,
//   .tf-slider a[class*="btn"],
//   .page-title-home .tf-btn,
//   .page-title-home .btn,
//   .page-title-home a[class*="btn"] {
//     background: linear-gradient(
//       135deg,
//       var(--growl-yellow) 0%,
//       #FFD84D 55%,
//       var(--growl-yellow-dark) 100%
//     ) !important;
//     color: var(--growl-blue-deep) !important;
//     border: 0 !important;
//     border-radius: 999px !important;
//     padding: 15px 28px !important;
//     font-size: 15px !important;
//     font-weight: 950 !important;
//     letter-spacing: 0.2px !important;
//     box-shadow: 0 16px 34px rgba(242, 194, 26, 0.34) !important;
//     transition: all 0.28s ease !important;
//   }

//   .hero .tf-btn:hover,
//   .hero .btn:hover,
//   .hero a[class*="btn"]:hover,
//   .flat-slider .tf-btn:hover,
//   .flat-slider .btn:hover,
//   .flat-slider a[class*="btn"]:hover,
//   .slider-home .tf-btn:hover,
//   .slider-home .btn:hover,
//   .slider-home a[class*="btn"]:hover,
//   .home-banner .tf-btn:hover,
//   .home-banner .btn:hover,
//   .home-banner a[class*="btn"]:hover,
//   .hero-section .tf-btn:hover,
//   .hero-section .btn:hover,
//   .hero-section a[class*="btn"]:hover,
//   .banner-section .tf-btn:hover,
//   .banner-section .btn:hover,
//   .banner-section a[class*="btn"]:hover,
//   .main-banner .tf-btn:hover,
//   .main-banner .btn:hover,
//   .main-banner a[class*="btn"]:hover,
//   .tf-slider .tf-btn:hover,
//   .tf-slider .btn:hover,
//   .tf-slider a[class*="btn"]:hover,
//   .page-title-home .tf-btn:hover,
//   .page-title-home .btn:hover,
//   .page-title-home a[class*="btn"]:hover {
//     background: #ffffff !important;
//     color: var(--growl-blue) !important;
//     transform: translateY(-2px) !important;
//     box-shadow: 0 18px 38px rgba(255, 255, 255, 0.22) !important;
//   }

//   .hero .form-search,
//   .hero .search-box,
//   .hero .wd-search-form,
//   .hero .flat-search,
//   .flat-slider .form-search,
//   .flat-slider .search-box,
//   .flat-slider .wd-search-form,
//   .flat-slider .flat-search,
//   .slider-home .form-search,
//   .slider-home .search-box,
//   .slider-home .wd-search-form,
//   .slider-home .flat-search,
//   .home-banner .form-search,
//   .home-banner .search-box,
//   .home-banner .wd-search-form,
//   .home-banner .flat-search {
//     background: rgba(255, 255, 255, 0.96) !important;
//     border: 1px solid rgba(242, 194, 26, 0.38) !important;
//     border-radius: 22px !important;
//     box-shadow: 0 24px 70px rgba(6, 44, 71, 0.22) !important;
//     backdrop-filter: blur(18px) !important;
//     -webkit-backdrop-filter: blur(18px) !important;
//   }

//   /*==================================================
//     MOBILE HEADER SEARCH
//   ==================================================*/

//   .mobile-simple-search {
//     display: none;
//   }

//   @media (max-width: 991px) {
//     .hero h1,
//     .hero .heading,
//     .hero .title,
//     .hero .title-heading,
//     .hero .main-title,
//     .flat-slider h1,
//     .flat-slider .heading,
//     .flat-slider .title,
//     .flat-slider .title-heading,
//     .flat-slider .main-title,
//     .slider-home h1,
//     .slider-home .heading,
//     .slider-home .title,
//     .slider-home .title-heading,
//     .slider-home .main-title,
//     .home-banner h1,
//     .home-banner .heading,
//     .home-banner .title,
//     .home-banner .title-heading,
//     .home-banner .main-title,
//     .hero-section h1,
//     .hero-section .heading,
//     .hero-section .title,
//     .hero-section .title-heading,
//     .hero-section .main-title,
//     .banner-section h1,
//     .banner-section .heading,
//     .banner-section .title,
//     .banner-section .title-heading,
//     .banner-section .main-title,
//     .main-banner h1,
//     .main-banner .heading,
//     .main-banner .title,
//     .main-banner .title-heading,
//     .main-banner .main-title,
//     .tf-slider h1,
//     .tf-slider .heading,
//     .tf-slider .title,
//     .tf-slider .title-heading,
//     .tf-slider .main-title,
//     .page-title-home h1,
//     .page-title-home .heading,
//     .page-title-home .title,
//     .page-title-home .title-heading,
//     .page-title-home .main-title {
//       font-size: clamp(34px, 8vw, 54px) !important;
//       line-height: 1.08 !important;
//       letter-spacing: -1.1px !important;
//       margin-bottom: 16px !important;
//       max-width: 100% !important;
//     }

//     .hero p,
//     .hero .text,
//     .hero .description,
//     .hero .desc,
//     .flat-slider p,
//     .flat-slider .text,
//     .flat-slider .description,
//     .flat-slider .desc,
//     .slider-home p,
//     .slider-home .text,
//     .slider-home .description,
//     .slider-home .desc,
//     .home-banner p,
//     .home-banner .text,
//     .home-banner .description,
//     .home-banner .desc,
//     .hero-section p,
//     .hero-section .text,
//     .hero-section .description,
//     .hero-section .desc,
//     .banner-section p,
//     .banner-section .text,
//     .banner-section .description,
//     .banner-section .desc,
//     .main-banner p,
//     .main-banner .text,
//     .main-banner .description,
//     .main-banner .desc,
//     .tf-slider p,
//     .tf-slider .text,
//     .tf-slider .description,
//     .tf-slider .desc,
//     .page-title-home p,
//     .page-title-home .text,
//     .page-title-home .description,
//     .page-title-home .desc {
//       font-size: 15px !important;
//       line-height: 1.55 !important;
//       max-width: 100% !important;
//       margin-bottom: 22px !important;
//     }

//     .hero .sub-title,
//     .hero .subtitle,
//     .hero .tagline,
//     .hero .sub-heading,
//     .flat-slider .sub-title,
//     .flat-slider .subtitle,
//     .flat-slider .tagline,
//     .flat-slider .sub-heading,
//     .slider-home .sub-title,
//     .slider-home .subtitle,
//     .slider-home .tagline,
//     .slider-home .sub-heading,
//     .home-banner .sub-title,
//     .home-banner .subtitle,
//     .home-banner .tagline,
//     .home-banner .sub-heading,
//     .hero-section .sub-title,
//     .hero-section .subtitle,
//     .hero-section .tagline,
//     .hero-section .sub-heading,
//     .banner-section .sub-title,
//     .banner-section .subtitle,
//     .banner-section .tagline,
//     .banner-section .sub-heading,
//     .main-banner .sub-title,
//     .main-banner .subtitle,
//     .main-banner .tagline,
//     .main-banner .sub-heading,
//     .tf-slider .sub-title,
//     .tf-slider .subtitle,
//     .tf-slider .tagline,
//     .tf-slider .sub-heading,
//     .page-title-home .sub-title,
//     .page-title-home .subtitle,
//     .page-title-home .tagline,
//     .page-title-home .sub-heading {
//       font-size: 11px !important;
//       padding: 8px 13px !important;
//       margin-bottom: 14px !important;
//     }

//     #header-main .header-inner {
//       width: 100%;
//       overflow: visible !important;
//     }

//     #header-main .tf-container,
//     #header-main .tf-container.xl,
//     #header-main .row,
//     #header-main .col-12 {
//       width: 100% !important;
//       max-width: 100% !important;
//       overflow: visible !important;
//     }

//     #header-main .header-inner-wrap {
//       position: relative;
//       min-height: 76px;
//       width: 100%;
//       display: flex !important;
//       align-items: center;
//       justify-content: space-between;
//       gap: 8px;
//       overflow: visible !important;
//       box-sizing: border-box;
//       background: #ffffff !important;
//     }

//     #header-main .main-menu,
//     #header-main .phone-number {
//       display: none !important;
//     }

//     #header-main .header-logo {
//       width: 82px !important;
//       min-width: 82px !important;
//       max-width: 82px !important;
//       flex: 0 0 82px !important;
//       z-index: 5;
//       overflow: visible !important;
//     }

//     #header-main .header-logo img {
//       height: 48px !important;
//       width: auto !important;
//       max-width: none !important;
//       transform: scale(1.28) !important;
//       transform-origin: left center !important;
//       filter: drop-shadow(0 6px 12px rgba(6, 44, 71, 0.14));
//     }

//     .mobile-simple-search {
//       display: block;
//       position: relative;
//       left: auto;
//       right: auto;
//       top: auto;
//       transform: none;
//       flex: 1 1 auto;
//       min-width: 0;
//       max-width: 100%;
//       z-index: 4;
//     }

//     .mobile-simple-search form {
//       width: 100%;
//       height: 34px;
//       border: 1.4px solid rgba(11, 79, 122, 0.42);
//       border-radius: 10px;
//       background: #ffffff;
//       display: flex;
//       align-items: center;
//       gap: 7px;
//       padding: 0 9px;
//       box-sizing: border-box;
//       overflow: hidden;
//       box-shadow: 0 8px 22px rgba(6, 44, 71, 0.08);
//     }

//     .mobile-simple-search i {
//       font-size: 13px;
//       color: var(--growl-blue);
//       flex: 0 0 auto;
//       line-height: 1;
//     }

//     .mobile-simple-search input,
//     #header-main .mobile-simple-search input,
//     #header-main .mobile-simple-search form input {
//       width: 100% !important;
//       min-width: 0 !important;
//       height: 100% !important;
//       min-height: 0 !important;
//       border: 0 !important;
//       outline: none !important;
//       background: transparent !important;
//       box-shadow: none !important;
//       color: var(--growl-heading) !important;
//       font-size: clamp(10px, 3vw, 12px) !important;
//       font-weight: 500 !important;
//       padding: 0 !important;
//       margin: 0 !important;
//       border-radius: 0 !important;
//       text-overflow: ellipsis;
//     }

//     .mobile-simple-search input::placeholder {
//       color: var(--growl-muted);
//       opacity: 1;
//     }

//     .mobile-header-suggestions {
//       position: absolute;
//       top: calc(100% + 8px);
//       left: 0;
//       right: 0;
//       width: 100%;
//       background: #ffffff;
//       border-radius: 12px;
//       overflow: hidden;
//       box-shadow: 0 14px 35px rgba(6, 44, 71, 0.22);
//       border: 1px solid rgba(226, 232, 240, 0.95);
//       z-index: 999999;
//       max-height: 260px;
//       overflow-y: auto;
//     }

//     .mobile-header-suggestion-item {
//       width: 100%;
//       border: 0;
//       border-bottom: 1px solid #f1f1f1;
//       background: #ffffff;
//       padding: 10px 12px;
//       text-align: left;
//       cursor: pointer;
//       display: block;
//     }

//     .mobile-header-suggestion-item:hover {
//       background: var(--growl-blue-soft);
//     }

//     .mobile-header-suggestion-item span {
//       display: block;
//       color: var(--growl-heading);
//       font-size: 13px;
//       font-weight: 800;
//       line-height: 1.25;
//     }

//     .mobile-header-suggestion-item small {
//       display: block;
//       color: var(--growl-muted);
//       font-size: 11px;
//       margin-top: 3px;
//       line-height: 1.25;
//     }

//     .mobile-header-no-result {
//       padding: 12px;
//       color: var(--growl-muted);
//       font-size: 12px;
//       background: #ffffff;
//     }

//     #header-main .header-right {
//       margin-left: 0 !important;
//       flex: 0 0 auto;
//       min-width: max-content;
//       position: relative;
//       z-index: 6;
//       display: flex !important;
//       align-items: center;
//       justify-content: flex-end;
//       gap: 6px;
//     }

//     #header-main .header-right > * {
//       flex-shrink: 0;
//     }

//     #header-main .mobile-button {
//       width: 36px;
//       height: 36px;
//       min-width: 36px;
//       display: inline-flex !important;
//       align-items: center;
//       justify-content: center;
//     }
//   }

//   @media (max-width: 575px) {
//     .hero h1,
//     .hero .heading,
//     .hero .title,
//     .hero .title-heading,
//     .hero .main-title,
//     .flat-slider h1,
//     .flat-slider .heading,
//     .flat-slider .title,
//     .flat-slider .title-heading,
//     .flat-slider .main-title,
//     .slider-home h1,
//     .slider-home .heading,
//     .slider-home .title,
//     .slider-home .title-heading,
//     .slider-home .main-title,
//     .home-banner h1,
//     .home-banner .heading,
//     .home-banner .title,
//     .home-banner .title-heading,
//     .home-banner .main-title,
//     .hero-section h1,
//     .hero-section .heading,
//     .hero-section .title,
//     .hero-section .title-heading,
//     .hero-section .main-title,
//     .banner-section h1,
//     .banner-section .heading,
//     .banner-section .title,
//     .banner-section .title-heading,
//     .banner-section .main-title,
//     .main-banner h1,
//     .main-banner .heading,
//     .main-banner .title,
//     .main-banner .title-heading,
//     .main-banner .main-title,
//     .tf-slider h1,
//     .tf-slider .heading,
//     .tf-slider .title,
//     .tf-slider .title-heading,
//     .tf-slider .main-title,
//     .page-title-home h1,
//     .page-title-home .heading,
//     .page-title-home .title,
//     .page-title-home .title-heading,
//     .page-title-home .main-title {
//       font-size: clamp(30px, 9vw, 42px) !important;
//       line-height: 1.1 !important;
//       letter-spacing: -0.8px !important;
//     }

//     .hero .tf-btn,
//     .hero .btn,
//     .hero a[class*="btn"],
//     .flat-slider .tf-btn,
//     .flat-slider .btn,
//     .flat-slider a[class*="btn"],
//     .slider-home .tf-btn,
//     .slider-home .btn,
//     .slider-home a[class*="btn"],
//     .home-banner .tf-btn,
//     .home-banner .btn,
//     .home-banner a[class*="btn"],
//     .hero-section .tf-btn,
//     .hero-section .btn,
//     .hero-section a[class*="btn"],
//     .banner-section .tf-btn,
//     .banner-section .btn,
//     .banner-section a[class*="btn"],
//     .main-banner .tf-btn,
//     .main-banner .btn,
//     .main-banner a[class*="btn"],
//     .tf-slider .tf-btn,
//     .tf-slider .btn,
//     .tf-slider a[class*="btn"],
//     .page-title-home .tf-btn,
//     .page-title-home .btn,
//     .page-title-home a[class*="btn"] {
//       padding: 13px 21px !important;
//       font-size: 13px !important;
//     }

//     #header-main .header-inner-wrap {
//       gap: 7px;
//     }

//     #header-main .header-logo {
//       width: 78px !important;
//       min-width: 78px !important;
//       max-width: 78px !important;
//       flex-basis: 78px !important;
//     }

//     #header-main .header-logo img {
//       height: 46px !important;
//       transform: scale(1.22) !important;
//     }

//     .mobile-simple-search form {
//       height: 33px;
//       padding: 0 8px;
//       gap: 6px;
//     }

//     .mobile-simple-search i {
//       font-size: 12px;
//     }

//     #header-main .mobile-button {
//       width: 34px;
//       height: 34px;
//       min-width: 34px;
//     }
//   }

//   @media (max-width: 420px) {
//     #header-main .header-inner-wrap {
//       gap: 6px;
//     }

//     #header-main .header-logo {
//       width: 72px !important;
//       min-width: 72px !important;
//       max-width: 72px !important;
//       flex-basis: 72px !important;
//     }

//     #header-main .header-logo img {
//       height: 43px !important;
//       transform: scale(1.18) !important;
//     }

//     .mobile-simple-search form {
//       height: 32px;
//       border-radius: 8px;
//       padding: 0 7px;
//     }

//     .mobile-simple-search input,
//     #header-main .mobile-simple-search input,
//     #header-main .mobile-simple-search form input {
//       font-size: 10.5px !important;
//     }

//     #header-main .header-right {
//       gap: 4px;
//     }

//     #header-main .mobile-button {
//       width: 32px;
//       height: 32px;
//       min-width: 32px;
//     }
//   }

//   @media (max-width: 360px) {
//     #header-main .header-logo {
//       width: 66px !important;
//       min-width: 66px !important;
//       max-width: 66px !important;
//       flex-basis: 66px !important;
//     }

//     #header-main .header-logo img {
//       height: 40px !important;
//       transform: scale(1.12) !important;
//     }

//     #header-main .header-inner-wrap {
//       gap: 5px;
//     }

//     .mobile-simple-search form {
//       height: 30px;
//       padding: 0 6px;
//       gap: 5px;
//     }

//     .mobile-simple-search input,
//     #header-main .mobile-simple-search input,
//     #header-main .mobile-simple-search form input {
//       font-size: 10px !important;
//     }

//     #header-main .mobile-button {
//       width: 30px;
//       height: 30px;
//       min-width: 30px;
//     }
//   }

//   @media (max-width: 330px) {
//     .mobile-simple-search input::placeholder {
//       color: transparent;
//     }
//   }

//   /*==================================================
//     FINAL MOBILE HEADER FIX - ONLY MOBILE VIEW
//     Desktop/web design remains same. This fixes logo/search/actions
//     and also supports NotificationBell after login.
//   ==================================================*/

//   @media (max-width: 991px) {
//     #header-main,
//     #header-main.header {
//       position: sticky;
//       top: 0;
//       z-index: 99999;
//       overflow: visible !important;
//     }

//     #header-main .header-inner,
//     #header-main .tf-container,
//     #header-main .tf-container.xl,
//     #header-main .row,
//     #header-main .col-12 {
//       padding-left: 0 !important;
//       padding-right: 0 !important;
//       margin-left: 0 !important;
//       margin-right: 0 !important;
//       overflow: visible !important;
//     }

//     #header-main .header-inner-wrap {
//       min-height: 64px !important;
//       height: 64px !important;
//       width: 100% !important;
//       display: flex !important;
//       align-items: center !important;
//       justify-content: flex-start !important;
//       gap: 8px !important;
//       padding: 0 10px !important;
//       box-sizing: border-box !important;
//       background: #ffffff !important;
//       overflow: visible !important;
//     }

//     #header-main .header-logo {
//       width: 104px !important;
//       min-width: 104px !important;
//       max-width: 104px !important;
//       flex: 0 0 104px !important;
//       height: 46px !important;
//       display: flex !important;
//       align-items: center !important;
//       justify-content: flex-start !important;
//       overflow: hidden !important;
//       z-index: 7 !important;
//     }

//     #header-main .header-logo .site-logo {
//       width: 104px !important;
//       height: 46px !important;
//       display: flex !important;
//       align-items: center !important;
//       justify-content: flex-start !important;
//       overflow: hidden !important;
//     }

//     #header-main .header-logo img,
//     #header-main .site-logo img {
//       width: 104px !important;
//       max-width: 104px !important;
//       height: auto !important;
//       max-height: 44px !important;
//       object-fit: contain !important;
//       transform: none !important;
//       transform-origin: center !important;
//       display: block !important;
//       filter: drop-shadow(0 4px 8px rgba(6, 44, 71, 0.12)) !important;
//     }

//     #header-main .main-menu,
//     #header-main .phone-number {
//       display: none !important;
//     }

//     #header-main .mobile-simple-search {
//       display: block !important;
//       flex: 1 1 auto !important;
//       min-width: 0 !important;
//       width: auto !important;
//       max-width: none !important;
//       position: relative !important;
//       z-index: 5 !important;
//     }

//     #header-main .mobile-simple-search form {
//       width: 100% !important;
//       height: 34px !important;
//       min-height: 34px !important;
//       display: flex !important;
//       align-items: center !important;
//       gap: 6px !important;
//       padding: 0 9px !important;
//       border: 1px solid rgba(11, 79, 122, 0.32) !important;
//       border-radius: 10px !important;
//       background: #ffffff !important;
//       box-shadow: 0 6px 16px rgba(6, 44, 71, 0.08) !important;
//       overflow: hidden !important;
//       box-sizing: border-box !important;
//     }

//     #header-main .mobile-simple-search i {
//       flex: 0 0 auto !important;
//       font-size: 12px !important;
//       line-height: 1 !important;
//       color: var(--growl-blue) !important;
//     }

//     #header-main .mobile-simple-search input {
//       flex: 1 1 auto !important;
//       width: 100% !important;
//       min-width: 0 !important;
//       height: 32px !important;
//       padding: 0 !important;
//       margin: 0 !important;
//       border: 0 !important;
//       outline: 0 !important;
//       background: transparent !important;
//       box-shadow: none !important;
//       color: var(--growl-heading) !important;
//       font-size: 12px !important;
//       font-weight: 600 !important;
//       white-space: nowrap !important;
//       overflow: hidden !important;
//       text-overflow: ellipsis !important;
//     }

//     #header-main .mobile-simple-search input::placeholder {
//       color: #53657c !important;
//       opacity: 1 !important;
//     }

//     #header-main .header-right {
//       flex: 0 0 auto !important;
//       width: auto !important;
//       min-width: max-content !important;
//       margin-left: 0 !important;
//       display: flex !important;
//       align-items: center !important;
//       justify-content: flex-end !important;
//       gap: 6px !important;
//       position: relative !important;
//       z-index: 8 !important;
//     }

//     #header-main .header-notification-wrap,
//     #header-main .header-dashboard-wrap {
//       width: 34px !important;
//       height: 34px !important;
//       min-width: 34px !important;
//       display: inline-flex !important;
//       align-items: center !important;
//       justify-content: center !important;
//       flex: 0 0 34px !important;
//       overflow: visible !important;
//     }

//     #header-main .header-notification-wrap:empty,
//     #header-main .header-dashboard-wrap:empty {
//       display: none !important;
//       width: 0 !important;
//       min-width: 0 !important;
//       flex-basis: 0 !important;
//     }

//     #header-main .header-notification-wrap button,
//     #header-main .header-notification-wrap a,
//     #header-main .header-notification-wrap > div,
//     #header-main .header-dashboard-wrap button,
//     #header-main .header-dashboard-wrap a,
//     #header-main .header-dashboard-wrap > div {
//       max-width: 34px !important;
//       max-height: 34px !important;
//     }

//     #header-main .mobile-button {
//       width: 34px !important;
//       height: 34px !important;
//       min-width: 34px !important;
//       flex: 0 0 34px !important;
//       display: inline-flex !important;
//       align-items: center !important;
//       justify-content: center !important;
//       border-radius: 10px !important;
//       padding: 0 !important;
//       margin: 0 !important;
//       background: var(--growl-blue-deep) !important;
//       color: #ffffff !important;
//       box-shadow: 0 7px 18px rgba(6, 44, 71, 0.18) !important;
//     }

//     #header-main .mobile-button i {
//       font-size: 18px !important;
//       line-height: 1 !important;
//       color: #ffffff !important;
//     }

//     #header-main .mobile-header-suggestions {
//       left: 0 !important;
//       right: 0 !important;
//       width: min(100%, 430px) !important;
//       top: calc(100% + 8px) !important;
//       z-index: 999999 !important;
//     }
//   }

//   @media (max-width: 575px) {
//     #header-main .header-inner-wrap {
//       height: 60px !important;
//       min-height: 60px !important;
//       gap: 7px !important;
//       padding: 0 8px !important;
//     }

//     #header-main .header-logo,
//     #header-main .header-logo .site-logo {
//       width: 96px !important;
//       min-width: 96px !important;
//       max-width: 96px !important;
//       flex-basis: 96px !important;
//       height: 42px !important;
//     }

//     #header-main .header-logo img,
//     #header-main .site-logo img {
//       width: 96px !important;
//       max-width: 96px !important;
//       max-height: 40px !important;
//       transform: none !important;
//     }

//     #header-main .mobile-simple-search form {
//       height: 32px !important;
//       min-height: 32px !important;
//       padding: 0 8px !important;
//       gap: 5px !important;
//       border-radius: 9px !important;
//     }

//     #header-main .mobile-simple-search input {
//       height: 30px !important;
//       font-size: 11px !important;
//       font-weight: 600 !important;
//     }

//     #header-main .header-right {
//       gap: 5px !important;
//     }

//     #header-main .header-notification-wrap,
//     #header-main .header-dashboard-wrap,
//     #header-main .mobile-button {
//       width: 32px !important;
//       height: 32px !important;
//       min-width: 32px !important;
//       flex-basis: 32px !important;
//     }
//   }

//   @media (max-width: 420px) {
//     #header-main .header-inner-wrap {
//       gap: 6px !important;
//       padding: 0 7px !important;
//     }

//     #header-main .header-logo,
//     #header-main .header-logo .site-logo {
//       width: 90px !important;
//       min-width: 90px !important;
//       max-width: 90px !important;
//       flex-basis: 90px !important;
//     }

//     #header-main .header-logo img,
//     #header-main .site-logo img {
//       width: 90px !important;
//       max-width: 90px !important;
//       max-height: 38px !important;
//     }

//     #header-main .mobile-simple-search input {
//       font-size: 10.5px !important;
//     }
//   }

//   @media (max-width: 380px) {
//     #header-main .header-logo,
//     #header-main .header-logo .site-logo {
//       width: 84px !important;
//       min-width: 84px !important;
//       max-width: 84px !important;
//       flex-basis: 84px !important;
//     }

//     #header-main .header-logo img,
//     #header-main .site-logo img {
//       width: 84px !important;
//       max-width: 84px !important;
//       max-height: 36px !important;
//     }

//     #header-main .header-right {
//       gap: 4px !important;
//     }

//     #header-main .header-notification-wrap,
//     #header-main .header-dashboard-wrap,
//     #header-main .mobile-button {
//       width: 30px !important;
//       height: 30px !important;
//       min-width: 30px !important;
//       flex-basis: 30px !important;
//     }

//     #header-main .mobile-simple-search form {
//       height: 30px !important;
//       min-height: 30px !important;
//       padding: 0 7px !important;
//     }

//     #header-main .mobile-simple-search input {
//       height: 28px !important;
//       font-size: 10px !important;
//     }
//   }

//   @media (max-width: 340px) {
//     #header-main .header-logo,
//     #header-main .header-logo .site-logo {
//       width: 78px !important;
//       min-width: 78px !important;
//       max-width: 78px !important;
//       flex-basis: 78px !important;
//     }

//     #header-main .header-logo img,
//     #header-main .site-logo img {
//       width: 78px !important;
//       max-width: 78px !important;
//       max-height: 34px !important;
//     }

//     #header-main .mobile-simple-search input::placeholder {
//       color: transparent !important;
//     }
//   }


//   /*==================================================
//     FINAL CLIENT REQUIREMENT UPDATE - MOBILE HEADER + BANNER
//     - Header made taller/clearer on mobile
//     - Logo/search/user/bell/menu aligned after login
//     - Main banner heading larger, bolder, premium
//     - Better spacing for mobile hero text
//   ==================================================*/

//   @media (max-width: 991px) {
//     #header-main .header-inner-wrap {
//       min-height: 78px !important;
//       height: 78px !important;
//       padding: 0 12px !important;
//       gap: 10px !important;
//       align-items: center !important;
//     }

//     #header-main .header-logo,
//     #header-main .header-logo .site-logo {
//       width: 118px !important;
//       min-width: 118px !important;
//       max-width: 118px !important;
//       flex: 0 0 118px !important;
//       height: 56px !important;
//       display: flex !important;
//       align-items: center !important;
//       justify-content: flex-start !important;
//       overflow: hidden !important;
//     }

//     #header-main .header-logo img,
//     #header-main .site-logo img {
//       width: 118px !important;
//       max-width: 118px !important;
//       height: auto !important;
//       max-height: 54px !important;
//       object-fit: contain !important;
//       transform: none !important;
//       transform-origin: center !important;
//       display: block !important;
//     }

//     #header-main .mobile-simple-search form {
//       height: 40px !important;
//       min-height: 40px !important;
//       border-radius: 12px !important;
//       padding: 0 12px !important;
//       gap: 8px !important;
//       border: 1.4px solid rgba(11, 79, 122, 0.36) !important;
//       box-shadow: 0 8px 22px rgba(6, 44, 71, 0.1) !important;
//     }

//     #header-main .mobile-simple-search i {
//       font-size: 14px !important;
//     }

//     #header-main .mobile-simple-search input {
//       height: 38px !important;
//       font-size: 13px !important;
//       font-weight: 650 !important;
//       letter-spacing: -0.1px !important;
//     }

//     #header-main .header-right {
//       gap: 7px !important;
//     }

//     #header-main .header-notification-wrap,
//     #header-main .header-dashboard-wrap,
//     #header-main .mobile-button {
//       width: 38px !important;
//       height: 38px !important;
//       min-width: 38px !important;
//       flex: 0 0 38px !important;
//       border-radius: 12px !important;
//     }

//     #header-main .header-notification-wrap button,
//     #header-main .header-notification-wrap a,
//     #header-main .header-notification-wrap > div,
//     #header-main .header-dashboard-wrap button,
//     #header-main .header-dashboard-wrap a,
//     #header-main .header-dashboard-wrap > div {
//       max-width: 38px !important;
//       max-height: 38px !important;
//     }

//     #header-main .mobile-button i {
//       font-size: 19px !important;
//     }

//     .hero h1,
//     .hero .heading,
//     .hero .title,
//     .hero .title-heading,
//     .hero .main-title,
//     .flat-slider h1,
//     .flat-slider .heading,
//     .flat-slider .title,
//     .flat-slider .title-heading,
//     .flat-slider .main-title,
//     .slider-home h1,
//     .slider-home .heading,
//     .slider-home .title,
//     .slider-home .title-heading,
//     .slider-home .main-title,
//     .home-banner h1,
//     .home-banner .heading,
//     .home-banner .title,
//     .home-banner .title-heading,
//     .home-banner .main-title,
//     .hero-section h1,
//     .hero-section .heading,
//     .hero-section .title,
//     .hero-section .title-heading,
//     .hero-section .main-title,
//     .banner-section h1,
//     .banner-section .heading,
//     .banner-section .title,
//     .banner-section .title-heading,
//     .banner-section .main-title,
//     .main-banner h1,
//     .main-banner .heading,
//     .main-banner .title,
//     .main-banner .title-heading,
//     .main-banner .main-title,
//     .tf-slider h1,
//     .tf-slider .heading,
//     .tf-slider .title,
//     .tf-slider .title-heading,
//     .tf-slider .main-title,
//     .page-title-home h1,
//     .page-title-home .heading,
//     .page-title-home .title,
//     .page-title-home .title-heading,
//     .page-title-home .main-title {
//       font-size: clamp(42px, 8.8vw, 64px) !important;
//       line-height: 1.04 !important;
//       font-weight: 950 !important;
//       letter-spacing: -1.35px !important;
//       margin-bottom: 18px !important;
//       max-width: 94% !important;
//       text-shadow: 0 14px 42px rgba(0, 0, 0, 0.38) !important;
//     }

//     .hero p,
//     .hero .text,
//     .hero .description,
//     .hero .desc,
//     .flat-slider p,
//     .flat-slider .text,
//     .flat-slider .description,
//     .flat-slider .desc,
//     .slider-home p,
//     .slider-home .text,
//     .slider-home .description,
//     .slider-home .desc,
//     .home-banner p,
//     .home-banner .text,
//     .home-banner .description,
//     .home-banner .desc,
//     .hero-section p,
//     .hero-section .text,
//     .hero-section .description,
//     .hero-section .desc,
//     .banner-section p,
//     .banner-section .text,
//     .banner-section .description,
//     .banner-section .desc,
//     .main-banner p,
//     .main-banner .text,
//     .main-banner .description,
//     .main-banner .desc,
//     .tf-slider p,
//     .tf-slider .text,
//     .tf-slider .description,
//     .tf-slider .desc,
//     .page-title-home p,
//     .page-title-home .text,
//     .page-title-home .description,
//     .page-title-home .desc {
//       font-size: 16px !important;
//       line-height: 1.62 !important;
//       font-weight: 550 !important;
//       max-width: 92% !important;
//       margin-bottom: 26px !important;
//     }

//     .hero .sub-title,
//     .hero .subtitle,
//     .hero .tagline,
//     .hero .sub-heading,
//     .flat-slider .sub-title,
//     .flat-slider .subtitle,
//     .flat-slider .tagline,
//     .flat-slider .sub-heading,
//     .slider-home .sub-title,
//     .slider-home .subtitle,
//     .slider-home .tagline,
//     .slider-home .sub-heading,
//     .home-banner .sub-title,
//     .home-banner .subtitle,
//     .home-banner .tagline,
//     .home-banner .sub-heading,
//     .hero-section .sub-title,
//     .hero-section .subtitle,
//     .hero-section .tagline,
//     .hero-section .sub-heading,
//     .banner-section .sub-title,
//     .banner-section .subtitle,
//     .banner-section .tagline,
//     .banner-section .sub-heading,
//     .main-banner .sub-title,
//     .main-banner .subtitle,
//     .main-banner .tagline,
//     .main-banner .sub-heading,
//     .tf-slider .sub-title,
//     .tf-slider .subtitle,
//     .tf-slider .tagline,
//     .tf-slider .sub-heading,
//     .page-title-home .sub-title,
//     .page-title-home .subtitle,
//     .page-title-home .tagline,
//     .page-title-home .sub-heading {
//       font-size: 12px !important;
//       padding: 9px 15px !important;
//       margin-bottom: 16px !important;
//       font-weight: 950 !important;
//       letter-spacing: 0.7px !important;
//     }
//   }

//   @media (max-width: 575px) {
//     #header-main .header-inner-wrap {
//       min-height: 74px !important;
//       height: 74px !important;
//       padding: 0 10px !important;
//       gap: 8px !important;
//     }

//     #header-main .header-logo,
//     #header-main .header-logo .site-logo {
//       width: 108px !important;
//       min-width: 108px !important;
//       max-width: 108px !important;
//       flex-basis: 108px !important;
//       height: 52px !important;
//     }

//     #header-main .header-logo img,
//     #header-main .site-logo img {
//       width: 108px !important;
//       max-width: 108px !important;
//       max-height: 50px !important;
//     }

//     #header-main .mobile-simple-search form {
//       height: 38px !important;
//       min-height: 38px !important;
//       padding: 0 10px !important;
//       gap: 7px !important;
//       border-radius: 11px !important;
//     }

//     #header-main .mobile-simple-search input {
//       height: 36px !important;
//       font-size: 12px !important;
//       font-weight: 650 !important;
//     }

//     #header-main .header-right {
//       gap: 6px !important;
//     }

//     #header-main .header-notification-wrap,
//     #header-main .header-dashboard-wrap,
//     #header-main .mobile-button {
//       width: 36px !important;
//       height: 36px !important;
//       min-width: 36px !important;
//       flex-basis: 36px !important;
//     }

//     .hero h1,
//     .hero .heading,
//     .hero .title,
//     .hero .title-heading,
//     .hero .main-title,
//     .flat-slider h1,
//     .flat-slider .heading,
//     .flat-slider .title,
//     .flat-slider .title-heading,
//     .flat-slider .main-title,
//     .slider-home h1,
//     .slider-home .heading,
//     .slider-home .title,
//     .slider-home .title-heading,
//     .slider-home .main-title,
//     .home-banner h1,
//     .home-banner .heading,
//     .home-banner .title,
//     .home-banner .title-heading,
//     .home-banner .main-title,
//     .hero-section h1,
//     .hero-section .heading,
//     .hero-section .title,
//     .hero-section .title-heading,
//     .hero-section .main-title,
//     .banner-section h1,
//     .banner-section .heading,
//     .banner-section .title,
//     .banner-section .title-heading,
//     .banner-section .main-title,
//     .main-banner h1,
//     .main-banner .heading,
//     .main-banner .title,
//     .main-banner .title-heading,
//     .main-banner .main-title,
//     .tf-slider h1,
//     .tf-slider .heading,
//     .tf-slider .title,
//     .tf-slider .title-heading,
//     .tf-slider .main-title,
//     .page-title-home h1,
//     .page-title-home .heading,
//     .page-title-home .title,
//     .page-title-home .title-heading,
//     .page-title-home .main-title {
//       font-size: clamp(38px, 10.8vw, 54px) !important;
//       line-height: 1.06 !important;
//       letter-spacing: -1px !important;
//       margin-bottom: 16px !important;
//       max-width: 96% !important;
//     }
//   }

//   @media (max-width: 420px) {
//     #header-main .header-inner-wrap {
//       min-height: 72px !important;
//       height: 72px !important;
//       gap: 7px !important;
//       padding: 0 8px !important;
//     }

//     #header-main .header-logo,
//     #header-main .header-logo .site-logo {
//       width: 98px !important;
//       min-width: 98px !important;
//       max-width: 98px !important;
//       flex-basis: 98px !important;
//       height: 48px !important;
//     }

//     #header-main .header-logo img,
//     #header-main .site-logo img {
//       width: 98px !important;
//       max-width: 98px !important;
//       max-height: 46px !important;
//     }

//     #header-main .mobile-simple-search form {
//       height: 36px !important;
//       min-height: 36px !important;
//       padding: 0 8px !important;
//       gap: 6px !important;
//     }

//     #header-main .mobile-simple-search input {
//       height: 34px !important;
//       font-size: 11px !important;
//     }

//     #header-main .header-notification-wrap,
//     #header-main .header-dashboard-wrap,
//     #header-main .mobile-button {
//       width: 34px !important;
//       height: 34px !important;
//       min-width: 34px !important;
//       flex-basis: 34px !important;
//     }
//   }

//   @media (max-width: 380px) {
//     #header-main .header-logo,
//     #header-main .header-logo .site-logo {
//       width: 90px !important;
//       min-width: 90px !important;
//       max-width: 90px !important;
//       flex-basis: 90px !important;
//     }

//     #header-main .header-logo img,
//     #header-main .site-logo img {
//       width: 90px !important;
//       max-width: 90px !important;
//       max-height: 44px !important;
//     }

//     #header-main .header-right {
//       gap: 5px !important;
//     }

//     #header-main .header-notification-wrap,
//     #header-main .header-dashboard-wrap,
//     #header-main .mobile-button {
//       width: 32px !important;
//       height: 32px !important;
//       min-width: 32px !important;
//       flex-basis: 32px !important;
//     }

//     #header-main .mobile-simple-search form {
//       height: 35px !important;
//       min-height: 35px !important;
//       padding: 0 7px !important;
//     }

//     #header-main .mobile-simple-search input {
//       height: 33px !important;
//       font-size: 10.5px !important;
//     }
//   }

//   @media (max-width: 340px) {
//     #header-main .header-logo,
//     #header-main .header-logo .site-logo {
//       width: 82px !important;
//       min-width: 82px !important;
//       max-width: 82px !important;
//       flex-basis: 82px !important;
//     }

//     #header-main .header-logo img,
//     #header-main .site-logo img {
//       width: 82px !important;
//       max-width: 82px !important;
//       max-height: 40px !important;
//     }
//   }

//   /*==================================================
//     NOTIFICATION DROPDOWN FIX
//     Uses original working NotificationBell structure.
//     Keeps bell/dropdown visible on mobile without clipping.
//   ==================================================*/

//   @media (max-width: 991px) {
//     #header-main,
//     #header-main .header-inner,
//     #header-main .tf-container,
//     #header-main .tf-container.xl,
//     #header-main .row,
//     #header-main .col-12,
//     #header-main .header-inner-wrap,
//     #header-main .header-right {
//       overflow: visible !important;
//     }

//     #header-main .header-right {
//       position: relative !important;
//       z-index: 100001 !important;
//     }

//     #header-main .header-right > * {
//       flex-shrink: 0 !important;
//     }

//     /* Do not force the NotificationBell dropdown container to icon size */
//     #header-main .header-right [class*="notification"],
//     #header-main .header-right [class*="Notification"],
//     #header-main .header-right [class*="bell"],
//     #header-main .header-right [class*="Bell"] {
//       overflow: visible !important;
//     }

//     /* Common dropdown/popup class protection */
//     #header-main .header-right [class*="dropdown"],
//     #header-main .header-right [class*="Dropdown"],
//     #header-main .header-right [class*="popover"],
//     #header-main .header-right [class*="Popover"],
//     #header-main .header-right [class*="menu"],
//     #header-main .header-right [class*="Menu"] {
//       max-width: none !important;
//       max-height: none !important;
//       overflow: visible !important;
//       z-index: 100002 !important;
//     }
//   }


// `}</style>
//     </>
//   );
// }





"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import DashboardNav from "./DashboardNav";
import { useRouter } from "next/navigation";
import { apiGet } from "../lib/api";
import NotificationBell from "@/components/common/NotificationBell";
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

function getProjectTitle(item) {
  return (
    item?.title ||
    item?.project_name ||
    item?.property_name ||
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
  return item?.short_location || item?.location || item?.full_address || "";
}

export default function Header1({ parentClass = "header", projects = [] }) {
  const router = useRouter();
  const searchRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cities, setCities] = useState([]);
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const loadSearchData = async () => {
      try {
        const [citiesRes, developersRes] = await Promise.all([
          apiGet("/admindashboard/cities/"),
          apiGet("/admindashboard/developers/"),
        ]);

        setCities(Array.isArray(citiesRes) ? citiesRes : []);
        setDevelopers(Array.isArray(developersRes) ? developersRes : []);
      } catch (error) {
        console.error("Header search data fetch error:", error);
        setCities([]);
        setDevelopers([]);
      }
    };

    loadSearchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fallbackCitiesFromProjects = useMemo(() => {
    const map = new Map();

    projects.forEach((item) => {
      const city = item.city || "";
      const city_slug = item.city_slug || slugify(city);

      if (city && city_slug) {
        map.set(normalizeText(city), { city, city_slug });
      }
    });

    return Array.from(map.values());
  }, [projects]);

  const fallbackDevelopersFromProjects = useMemo(() => {
    const map = new Map();

    projects.forEach((item) => {
      const developer_name = getDeveloperName(item);
      const developer_slug = item.developer_slug || slugify(developer_name);

      if (developer_name && developer_slug) {
        map.set(normalizeText(developer_name), {
          developer_name,
          developer_slug,
        });
      }
    });

    return Array.from(map.values());
  }, [projects]);

  const finalCities = useMemo(
    () => (cities.length > 0 ? cities : fallbackCitiesFromProjects),
    [cities, fallbackCitiesFromProjects]
  );

  const finalDevelopers = useMemo(
    () => (developers.length > 0 ? developers : fallbackDevelopersFromProjects),
    [developers, fallbackDevelopersFromProjects]
  );

  const searchSuggestions = useMemo(() => {
    const keyword = normalizeText(searchText);
    if (!keyword) return [];

    const suggestionMap = new Map();

    finalCities.forEach((item) => {
      const cityName = item.city || "";
      const citySlug = item.city_slug || slugify(cityName);

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
      const developerName = item.developer_name || "";
      const developerSlug = item.developer_slug || slugify(developerName);

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

    projects.forEach((item) => {
      const title = getProjectTitle(item);
      const city = item.city || "";
      const citySlug = item.city_slug || slugify(city);
      const location = getLocationName(item);
      const address = item.full_address || item.address || "";
      const developer = getDeveloperName(item);
      const propertyType = item.property_type || "";
      const propertyStatus = item.property_status || "";

      const searchableText = normalizeText(
        [
          title,
          city,
          location,
          address,
          developer,
          propertyType,
          propertyStatus,
        ].join(" ")
      );

      if (!searchableText.includes(keyword)) return;

      const mainLabel =
        title || location || city || developer || propertyType || propertyStatus;
      if (!mainLabel) return;

      const subLabel = [location, city, developer]
        .filter(Boolean)
        .filter((value, index, self) => self.indexOf(value) === index)
        .join(" • ");

      const key = `project-${normalizeText(`${mainLabel}-${subLabel}`)}`;

      if (!suggestionMap.has(key)) {
        suggestionMap.set(key, {
          label: mainLabel,
          subLabel: subLabel || "Project",
          value: mainLabel,
          type: "project",
          city,
          citySlug,
          location,
        });
      }
    });

    return Array.from(suggestionMap.values()).slice(0, 8);
  }, [searchText, finalCities, finalDevelopers, projects]);

  const findCityMatch = (searchValue) => {
    const normalized = normalizeText(searchValue);
    if (!normalized) return null;

    return (
      finalCities.find((item) => {
        const cityName = normalizeText(item.city);
        const citySlug = normalizeText(item.city_slug);
        return cityName === normalized || citySlug === normalized;
      }) ||
      finalCities.find((item) => {
        const cityName = normalizeText(item.city);
        const citySlug = normalizeText(item.city_slug);
        return cityName.includes(normalized) || citySlug.includes(normalized);
      }) ||
      null
    );
  };

  const findDeveloperMatch = (searchValue) => {
    const normalized = normalizeText(searchValue);
    if (!normalized) return null;

    return (
      finalDevelopers.find((item) => {
        const developerName = normalizeText(item.developer_name);
        const developerSlug = normalizeText(item.developer_slug);
        return developerName === normalized || developerSlug === normalized;
      }) ||
      finalDevelopers.find((item) => {
        const developerName = normalizeText(item.developer_name);
        const developerSlug = normalizeText(item.developer_slug);
        return (
          developerName.includes(normalized) ||
          developerSlug.includes(normalized)
        );
      }) ||
      null
    );
  };

  const handleSuggestionSelect = (suggestion) => {
    setSearchText(suggestion.value || "");
    setShowSuggestions(false);

    if (suggestion.type === "city" && suggestion.slug) {
      router.push(`/cities/${suggestion.slug}`);
      return;
    }

    if (suggestion.type === "developer" && suggestion.slug) {
      router.push(`/developers/${suggestion.slug}`);
      return;
    }

    if (suggestion.citySlug) {
      router.push(`/cities/${suggestion.citySlug}`);
      return;
    }

    router.push(`/?search=${encodeURIComponent(suggestion.value || "")}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const rawSearch = searchText.trim();
    if (!rawSearch) return;

    const cityMatch = findCityMatch(rawSearch);
    if (cityMatch?.city_slug) {
      router.push(`/cities/${cityMatch.city_slug}`);
      setShowSuggestions(false);
      return;
    }

    const developerMatch = findDeveloperMatch(rawSearch);
    if (developerMatch?.developer_slug) {
      router.push(`/developers/${developerMatch.developer_slug}`);
      setShowSuggestions(false);
      return;
    }

    router.push(`/?search=${encodeURIComponent(rawSearch)}`);
    setShowSuggestions(false);
  };

  return (
    <>
      <header id="header-main" className={parentClass}>
        <div className="header-inner">
          <div className="tf-container xl">
            <div className="row">
              <div className="col-12">
                <div className="header-inner-wrap">
                  <div className="header-logo" style={{ overflow: "visible" }}>
                    <Link href="/" className="site-logo">
                      <img
                        src="/images/logo/growl_logo_3.jpeg"
                        alt="logo"
                        style={{
                          height: "80px",
                          transform: "scale(1.95)",
                          transformOrigin: "left center",
                          display: "block",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="mobile-simple-search" ref={searchRef}>
                    <form onSubmit={handleSearchSubmit}>
                      <i className="icon-MagnifyingGlass" />
                      <input
                        type="text"
                        placeholder="Search city, project..."
                        value={searchText}
                        autoComplete="off"
                        onChange={(e) => {
                          setSearchText(e.target.value);
                          setShowSuggestions(true);
                        }}
                        onFocus={() => {
                          if (searchText) setShowSuggestions(true);
                        }}
                      />
                    </form>

                    {showSuggestions && searchText && (
                      <div className="mobile-header-suggestions">
                        {searchSuggestions.length > 0 ? (
                          searchSuggestions.map((suggestion, index) => (
                            <button
                              type="button"
                              key={`${suggestion.type}-${suggestion.label}-${index}`}
                              className="mobile-header-suggestion-item"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                handleSuggestionSelect(suggestion);
                              }}
                            >
                              <span>{suggestion.label}</span>
                              {suggestion.subLabel ? (
                                <small>{suggestion.subLabel}</small>
                              ) : null}
                            </button>
                          ))
                        ) : (
                          <div className="mobile-header-no-result">
                            No matching result found
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <nav className="main-menu">
                    <ul className="navigation">
                      <Nav />
                    </ul>
                  </nav>

                  <div className="header-right">
                    <div className="phone-number">
                      <div className="icons">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p>+91 9326183013</p>
                    </div>
                    <NotificationBell />
                    <DashboardNav />

                    <div
                      className="mobile-button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#menu-mobile"
                      aria-controls="menu-mobile"
                    >
                      <i className="icon-menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style jsx global>{`
  /*==================================================
    GROWL CITY REALTY - HEADER + HERO PREMIUM STYLE
    Logo Matched Colors: Blue + Yellow
  ==================================================*/

  :root {
    --growl-blue: #0B4F7A;
    --growl-blue-dark: #073A5C;
    --growl-blue-deep: #062C47;
    --growl-blue-soft: #EAF5FB;

    --growl-yellow: #F2C21A;
    --growl-yellow-dark: #D9A90E;
    --growl-yellow-soft: #FFF4BF;

    --growl-white: #ffffff;
    --growl-text: #142033;
    --growl-heading: #081827;
    --growl-muted: #64748B;
    --growl-border: #E2E8F0;
  }

  /*==================================================
    HEADER PREMIUM LOOK
  ==================================================*/

  #header-main.header,
  #header-main {
    background: rgba(255, 255, 255, 0.97) !important;
    backdrop-filter: blur(18px) !important;
    -webkit-backdrop-filter: blur(18px) !important;
    border-bottom: 1px solid rgba(226, 232, 240, 0.9) !important;
    box-shadow: 0 10px 35px rgba(6, 44, 71, 0.08) !important;
  }

  #header-main.fixed,
  #header-main.header-sticky,
  #header-main.is-sticky {
    background: rgba(255, 255, 255, 0.99) !important;
    box-shadow: 0 14px 45px rgba(6, 44, 71, 0.14) !important;
  }

  #header-main .header-inner-wrap {
    align-items: center !important;
  }

  #header-main .main-menu .navigation > li > a,
  #header-main .navigation > li > a,
  #header-main .main-menu a {
    color: var(--growl-text) !important;
    font-size: 16px !important;
    font-weight: 850 !important;
    letter-spacing: -0.15px !important;
    line-height: 1.2 !important;
    transition: all 0.25s ease !important;
  }

  #header-main .main-menu .navigation > li > a:hover,
  #header-main .navigation > li > a:hover,
  #header-main .main-menu a:hover {
    color: var(--growl-blue) !important;
  }

  #header-main .navigation > li.current-menu > a,
  #header-main .navigation > li.current > a,
  #header-main .navigation > li.active > a,
  #header-main .main-menu .active > a {
    background: linear-gradient(
      135deg,
      var(--growl-yellow) 0%,
      #FFD84D 55%,
      var(--growl-yellow-dark) 100%
    ) !important;
    color: var(--growl-blue-deep) !important;
    border-radius: 999px !important;
    padding: 14px 19px !important;
    box-shadow: 0 12px 28px rgba(242, 194, 26, 0.26) !important;
  }

  #header-main .phone-number {
    border: 1px solid rgba(242, 194, 26, 0.45) !important;
    background: #ffffff !important;
    border-radius: 999px !important;
    box-shadow: 0 12px 30px rgba(6, 44, 71, 0.1) !important;
  }

  #header-main .phone-number .icons {
    background: linear-gradient(
      135deg,
      var(--growl-yellow),
      #FFD84D
    ) !important;
    color: var(--growl-blue-deep) !important;
  }

  #header-main .phone-number svg path {
    stroke: var(--growl-blue-deep) !important;
  }

  #header-main .phone-number p {
    color: var(--growl-text) !important;
    font-weight: 900 !important;
    letter-spacing: 0.3px !important;
  }

  #header-main .mobile-button {
    background: var(--growl-blue-deep) !important;
    color: #ffffff !important;
    border-radius: 12px !important;
    box-shadow: 0 8px 20px rgba(6, 44, 71, 0.2) !important;
  }

  #header-main .mobile-button i {
    color: #ffffff !important;
  }

  /*==================================================
    HERO / BANNER PREMIUM TYPOGRAPHY
    Client Requirement:
    - Bigger main heading/banner text
    - Bold premium typography
    - Better spacing and alignment
    - Logo matched blue + yellow theme
  ==================================================*/

  .hero,
  .flat-slider,
  .slider-home,
  .home-banner,
  .hero-section,
  .banner-section,
  .main-banner,
  .tf-slider,
  .page-title-home {
    position: relative !important;
  }

  .hero::before,
  .flat-slider::before,
  .slider-home::before,
  .home-banner::before,
  .hero-section::before,
  .banner-section::before,
  .main-banner::before,
  .tf-slider::before,
  .page-title-home::before {
    content: "" !important;
    position: absolute !important;
    inset: 0 !important;
    background: linear-gradient(
      90deg,
      rgba(6, 44, 71, 0.76) 0%,
      rgba(11, 79, 122, 0.52) 44%,
      rgba(6, 44, 71, 0.18) 100%
    ) !important;
    pointer-events: none !important;
    z-index: 1 !important;
  }

  .hero .content,
  .hero .content-inner,
  .hero .hero-content,
  .hero .slider-content,
  .hero .wrap-content,
  .hero .heading-section,
  .flat-slider .content,
  .flat-slider .content-inner,
  .flat-slider .slider-content,
  .flat-slider .wrap-content,
  .flat-slider .heading-section,
  .slider-home .content,
  .slider-home .content-inner,
  .slider-home .wrap-content,
  .slider-home .heading-section,
  .home-banner .content,
  .home-banner .content-inner,
  .home-banner .wrap-content,
  .home-banner .heading-section,
  .hero-section .content,
  .hero-section .content-inner,
  .hero-section .wrap-content,
  .hero-section .heading-section,
  .banner-section .content,
  .banner-section .content-inner,
  .banner-section .wrap-content,
  .banner-section .heading-section,
  .main-banner .content,
  .main-banner .content-inner,
  .main-banner .wrap-content,
  .main-banner .heading-section,
  .tf-slider .content,
  .tf-slider .content-inner,
  .tf-slider .wrap-content,
  .tf-slider .heading-section,
  .page-title-home .content,
  .page-title-home .content-inner,
  .page-title-home .wrap-content,
  .page-title-home .heading-section {
    position: relative !important;
    z-index: 2 !important;
  }

  .hero h1,
  .hero .heading,
  .hero .title,
  .hero .title-heading,
  .hero .main-title,
  .flat-slider h1,
  .flat-slider .heading,
  .flat-slider .title,
  .flat-slider .title-heading,
  .flat-slider .main-title,
  .slider-home h1,
  .slider-home .heading,
  .slider-home .title,
  .slider-home .title-heading,
  .slider-home .main-title,
  .home-banner h1,
  .home-banner .heading,
  .home-banner .title,
  .home-banner .title-heading,
  .home-banner .main-title,
  .hero-section h1,
  .hero-section .heading,
  .hero-section .title,
  .hero-section .title-heading,
  .hero-section .main-title,
  .banner-section h1,
  .banner-section .heading,
  .banner-section .title,
  .banner-section .title-heading,
  .banner-section .main-title,
  .main-banner h1,
  .main-banner .heading,
  .main-banner .title,
  .main-banner .title-heading,
  .main-banner .main-title,
  .tf-slider h1,
  .tf-slider .heading,
  .tf-slider .title,
  .tf-slider .title-heading,
  .tf-slider .main-title,
  .page-title-home h1,
  .page-title-home .heading,
  .page-title-home .title,
  .page-title-home .title-heading,
  .page-title-home .main-title {
    font-size: clamp(44px, 5.6vw, 84px) !important;
    line-height: 1.04 !important;
    font-weight: 950 !important;
    letter-spacing: -1.8px !important;
    color: var(--growl-white) !important;
    margin-bottom: 22px !important;
    max-width: 940px !important;
    text-transform: none !important;
    text-shadow: 0 14px 42px rgba(0, 0, 0, 0.36) !important;
  }

  .hero h1 span,
  .hero .heading span,
  .hero .title span,
  .hero .title-heading span,
  .hero .main-title span,
  .flat-slider h1 span,
  .flat-slider .heading span,
  .flat-slider .title span,
  .flat-slider .title-heading span,
  .flat-slider .main-title span,
  .slider-home h1 span,
  .slider-home .heading span,
  .slider-home .title span,
  .slider-home .title-heading span,
  .slider-home .main-title span,
  .home-banner h1 span,
  .home-banner .heading span,
  .home-banner .title span,
  .home-banner .title-heading span,
  .home-banner .main-title span,
  .hero-section h1 span,
  .hero-section .heading span,
  .hero-section .title span,
  .hero-section .title-heading span,
  .hero-section .main-title span,
  .banner-section h1 span,
  .banner-section .heading span,
  .banner-section .title span,
  .banner-section .title-heading span,
  .banner-section .main-title span,
  .main-banner h1 span,
  .main-banner .heading span,
  .main-banner .title span,
  .main-banner .title-heading span,
  .main-banner .main-title span,
  .tf-slider h1 span,
  .tf-slider .heading span,
  .tf-slider .title span,
  .tf-slider .title-heading span,
  .tf-slider .main-title span,
  .page-title-home h1 span,
  .page-title-home .heading span,
  .page-title-home .title span,
  .page-title-home .title-heading span,
  .page-title-home .main-title span {
    color: var(--growl-yellow) !important;
    text-shadow: 0 10px 28px rgba(242, 194, 26, 0.28) !important;
  }

  .hero p,
  .hero .text,
  .hero .description,
  .hero .desc,
  .flat-slider p,
  .flat-slider .text,
  .flat-slider .description,
  .flat-slider .desc,
  .slider-home p,
  .slider-home .text,
  .slider-home .description,
  .slider-home .desc,
  .home-banner p,
  .home-banner .text,
  .home-banner .description,
  .home-banner .desc,
  .hero-section p,
  .hero-section .text,
  .hero-section .description,
  .hero-section .desc,
  .banner-section p,
  .banner-section .text,
  .banner-section .description,
  .banner-section .desc,
  .main-banner p,
  .main-banner .text,
  .main-banner .description,
  .main-banner .desc,
  .tf-slider p,
  .tf-slider .text,
  .tf-slider .description,
  .tf-slider .desc,
  .page-title-home p,
  .page-title-home .text,
  .page-title-home .description,
  .page-title-home .desc {
    font-size: clamp(16px, 1.35vw, 22px) !important;
    line-height: 1.65 !important;
    font-weight: 500 !important;
    color: rgba(255, 255, 255, 0.94) !important;
    max-width: 700px !important;
    margin-bottom: 32px !important;
    text-shadow: 0 8px 28px rgba(0, 0, 0, 0.28) !important;
  }

  .hero .sub-title,
  .hero .subtitle,
  .hero .tagline,
  .hero .sub-heading,
  .flat-slider .sub-title,
  .flat-slider .subtitle,
  .flat-slider .tagline,
  .flat-slider .sub-heading,
  .slider-home .sub-title,
  .slider-home .subtitle,
  .slider-home .tagline,
  .slider-home .sub-heading,
  .home-banner .sub-title,
  .home-banner .subtitle,
  .home-banner .tagline,
  .home-banner .sub-heading,
  .hero-section .sub-title,
  .hero-section .subtitle,
  .hero-section .tagline,
  .hero-section .sub-heading,
  .banner-section .sub-title,
  .banner-section .subtitle,
  .banner-section .tagline,
  .banner-section .sub-heading,
  .main-banner .sub-title,
  .main-banner .subtitle,
  .main-banner .tagline,
  .main-banner .sub-heading,
  .tf-slider .sub-title,
  .tf-slider .subtitle,
  .tf-slider .tagline,
  .tf-slider .sub-heading,
  .page-title-home .sub-title,
  .page-title-home .subtitle,
  .page-title-home .tagline,
  .page-title-home .sub-heading {
    display: inline-flex !important;
    align-items: center !important;
    width: fit-content !important;
    background: rgba(255, 255, 255, 0.14) !important;
    border: 1px solid rgba(242, 194, 26, 0.42) !important;
    backdrop-filter: blur(14px) !important;
    -webkit-backdrop-filter: blur(14px) !important;
    color: var(--growl-yellow) !important;
    border-radius: 999px !important;
    padding: 9px 18px !important;
    font-size: 13px !important;
    line-height: 1.2 !important;
    font-weight: 900 !important;
    letter-spacing: 0.8px !important;
    text-transform: uppercase !important;
    margin-bottom: 18px !important;
    box-shadow: 0 14px 34px rgba(6, 44, 71, 0.18) !important;
  }

  .hero .tf-btn,
  .hero .btn,
  .hero a[class*="btn"],
  .flat-slider .tf-btn,
  .flat-slider .btn,
  .flat-slider a[class*="btn"],
  .slider-home .tf-btn,
  .slider-home .btn,
  .slider-home a[class*="btn"],
  .home-banner .tf-btn,
  .home-banner .btn,
  .home-banner a[class*="btn"],
  .hero-section .tf-btn,
  .hero-section .btn,
  .hero-section a[class*="btn"],
  .banner-section .tf-btn,
  .banner-section .btn,
  .banner-section a[class*="btn"],
  .main-banner .tf-btn,
  .main-banner .btn,
  .main-banner a[class*="btn"],
  .tf-slider .tf-btn,
  .tf-slider .btn,
  .tf-slider a[class*="btn"],
  .page-title-home .tf-btn,
  .page-title-home .btn,
  .page-title-home a[class*="btn"] {
    background: linear-gradient(
      135deg,
      var(--growl-yellow) 0%,
      #FFD84D 55%,
      var(--growl-yellow-dark) 100%
    ) !important;
    color: var(--growl-blue-deep) !important;
    border: 0 !important;
    border-radius: 999px !important;
    padding: 15px 28px !important;
    font-size: 15px !important;
    font-weight: 950 !important;
    letter-spacing: 0.2px !important;
    box-shadow: 0 16px 34px rgba(242, 194, 26, 0.34) !important;
    transition: all 0.28s ease !important;
  }

  .hero .tf-btn:hover,
  .hero .btn:hover,
  .hero a[class*="btn"]:hover,
  .flat-slider .tf-btn:hover,
  .flat-slider .btn:hover,
  .flat-slider a[class*="btn"]:hover,
  .slider-home .tf-btn:hover,
  .slider-home .btn:hover,
  .slider-home a[class*="btn"]:hover,
  .home-banner .tf-btn:hover,
  .home-banner .btn:hover,
  .home-banner a[class*="btn"]:hover,
  .hero-section .tf-btn:hover,
  .hero-section .btn:hover,
  .hero-section a[class*="btn"]:hover,
  .banner-section .tf-btn:hover,
  .banner-section .btn:hover,
  .banner-section a[class*="btn"]:hover,
  .main-banner .tf-btn:hover,
  .main-banner .btn:hover,
  .main-banner a[class*="btn"]:hover,
  .tf-slider .tf-btn:hover,
  .tf-slider .btn:hover,
  .tf-slider a[class*="btn"]:hover,
  .page-title-home .tf-btn:hover,
  .page-title-home .btn:hover,
  .page-title-home a[class*="btn"]:hover {
    background: #ffffff !important;
    color: var(--growl-blue) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 18px 38px rgba(255, 255, 255, 0.22) !important;
  }

  .hero .form-search,
  .hero .search-box,
  .hero .wd-search-form,
  .hero .flat-search,
  .flat-slider .form-search,
  .flat-slider .search-box,
  .flat-slider .wd-search-form,
  .flat-slider .flat-search,
  .slider-home .form-search,
  .slider-home .search-box,
  .slider-home .wd-search-form,
  .slider-home .flat-search,
  .home-banner .form-search,
  .home-banner .search-box,
  .home-banner .wd-search-form,
  .home-banner .flat-search {
    background: rgba(255, 255, 255, 0.96) !important;
    border: 1px solid rgba(242, 194, 26, 0.38) !important;
    border-radius: 22px !important;
    box-shadow: 0 24px 70px rgba(6, 44, 71, 0.22) !important;
    backdrop-filter: blur(18px) !important;
    -webkit-backdrop-filter: blur(18px) !important;
  }

  /*==================================================
    MOBILE HEADER SEARCH
  ==================================================*/

  .mobile-simple-search {
    display: none;
  }

  @media (max-width: 991px) {
    .hero h1,
    .hero .heading,
    .hero .title,
    .hero .title-heading,
    .hero .main-title,
    .flat-slider h1,
    .flat-slider .heading,
    .flat-slider .title,
    .flat-slider .title-heading,
    .flat-slider .main-title,
    .slider-home h1,
    .slider-home .heading,
    .slider-home .title,
    .slider-home .title-heading,
    .slider-home .main-title,
    .home-banner h1,
    .home-banner .heading,
    .home-banner .title,
    .home-banner .title-heading,
    .home-banner .main-title,
    .hero-section h1,
    .hero-section .heading,
    .hero-section .title,
    .hero-section .title-heading,
    .hero-section .main-title,
    .banner-section h1,
    .banner-section .heading,
    .banner-section .title,
    .banner-section .title-heading,
    .banner-section .main-title,
    .main-banner h1,
    .main-banner .heading,
    .main-banner .title,
    .main-banner .title-heading,
    .main-banner .main-title,
    .tf-slider h1,
    .tf-slider .heading,
    .tf-slider .title,
    .tf-slider .title-heading,
    .tf-slider .main-title,
    .page-title-home h1,
    .page-title-home .heading,
    .page-title-home .title,
    .page-title-home .title-heading,
    .page-title-home .main-title {
      font-size: clamp(34px, 8vw, 54px) !important;
      line-height: 1.08 !important;
      letter-spacing: -1.1px !important;
      margin-bottom: 16px !important;
      max-width: 100% !important;
    }

    .hero p,
    .hero .text,
    .hero .description,
    .hero .desc,
    .flat-slider p,
    .flat-slider .text,
    .flat-slider .description,
    .flat-slider .desc,
    .slider-home p,
    .slider-home .text,
    .slider-home .description,
    .slider-home .desc,
    .home-banner p,
    .home-banner .text,
    .home-banner .description,
    .home-banner .desc,
    .hero-section p,
    .hero-section .text,
    .hero-section .description,
    .hero-section .desc,
    .banner-section p,
    .banner-section .text,
    .banner-section .description,
    .banner-section .desc,
    .main-banner p,
    .main-banner .text,
    .main-banner .description,
    .main-banner .desc,
    .tf-slider p,
    .tf-slider .text,
    .tf-slider .description,
    .tf-slider .desc,
    .page-title-home p,
    .page-title-home .text,
    .page-title-home .description,
    .page-title-home .desc {
      font-size: 15px !important;
      line-height: 1.55 !important;
      max-width: 100% !important;
      margin-bottom: 22px !important;
    }

    .hero .sub-title,
    .hero .subtitle,
    .hero .tagline,
    .hero .sub-heading,
    .flat-slider .sub-title,
    .flat-slider .subtitle,
    .flat-slider .tagline,
    .flat-slider .sub-heading,
    .slider-home .sub-title,
    .slider-home .subtitle,
    .slider-home .tagline,
    .slider-home .sub-heading,
    .home-banner .sub-title,
    .home-banner .subtitle,
    .home-banner .tagline,
    .home-banner .sub-heading,
    .hero-section .sub-title,
    .hero-section .subtitle,
    .hero-section .tagline,
    .hero-section .sub-heading,
    .banner-section .sub-title,
    .banner-section .subtitle,
    .banner-section .tagline,
    .banner-section .sub-heading,
    .main-banner .sub-title,
    .main-banner .subtitle,
    .main-banner .tagline,
    .main-banner .sub-heading,
    .tf-slider .sub-title,
    .tf-slider .subtitle,
    .tf-slider .tagline,
    .tf-slider .sub-heading,
    .page-title-home .sub-title,
    .page-title-home .subtitle,
    .page-title-home .tagline,
    .page-title-home .sub-heading {
      font-size: 11px !important;
      padding: 8px 13px !important;
      margin-bottom: 14px !important;
    }

    #header-main .header-inner {
      width: 100%;
      overflow: visible !important;
    }

    #header-main .tf-container,
    #header-main .tf-container.xl,
    #header-main .row,
    #header-main .col-12 {
      width: 100% !important;
      max-width: 100% !important;
      overflow: visible !important;
    }

    #header-main .header-inner-wrap {
      position: relative;
      min-height: 76px;
      width: 100%;
      display: flex !important;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      overflow: visible !important;
      box-sizing: border-box;
      background: #ffffff !important;
    }

    #header-main .main-menu,
    #header-main .phone-number {
      display: none !important;
    }

    #header-main .header-logo {
      width: 82px !important;
      min-width: 82px !important;
      max-width: 82px !important;
      flex: 0 0 82px !important;
      z-index: 5;
      overflow: visible !important;
    }

    #header-main .header-logo img {
      height: 48px !important;
      width: auto !important;
      max-width: none !important;
      transform: scale(1.28) !important;
      transform-origin: left center !important;
      filter: drop-shadow(0 6px 12px rgba(6, 44, 71, 0.14));
    }

    .mobile-simple-search {
      display: block;
      position: relative;
      left: auto;
      right: auto;
      top: auto;
      transform: none;
      flex: 1 1 auto;
      min-width: 0;
      max-width: 100%;
      z-index: 4;
    }

    .mobile-simple-search form {
      width: 100%;
      height: 34px;
      border: 1.4px solid rgba(11, 79, 122, 0.42);
      border-radius: 10px;
      background: #ffffff;
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 0 9px;
      box-sizing: border-box;
      overflow: hidden;
      box-shadow: 0 8px 22px rgba(6, 44, 71, 0.08);
    }

    .mobile-simple-search i {
      font-size: 13px;
      color: var(--growl-blue);
      flex: 0 0 auto;
      line-height: 1;
    }

    .mobile-simple-search input,
    #header-main .mobile-simple-search input,
    #header-main .mobile-simple-search form input {
      width: 100% !important;
      min-width: 0 !important;
      height: 100% !important;
      min-height: 0 !important;
      border: 0 !important;
      outline: none !important;
      background: transparent !important;
      box-shadow: none !important;
      color: var(--growl-heading) !important;
      font-size: clamp(10px, 3vw, 12px) !important;
      font-weight: 500 !important;
      padding: 0 !important;
      margin: 0 !important;
      border-radius: 0 !important;
      text-overflow: ellipsis;
    }

    .mobile-simple-search input::placeholder {
      color: var(--growl-muted);
      opacity: 1;
    }

    .mobile-header-suggestions {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      right: 0;
      width: 100%;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 14px 35px rgba(6, 44, 71, 0.22);
      border: 1px solid rgba(226, 232, 240, 0.95);
      z-index: 999999;
      max-height: 260px;
      overflow-y: auto;
    }

    .mobile-header-suggestion-item {
      width: 100%;
      border: 0;
      border-bottom: 1px solid #f1f1f1;
      background: #ffffff;
      padding: 10px 12px;
      text-align: left;
      cursor: pointer;
      display: block;
    }

    .mobile-header-suggestion-item:hover {
      background: var(--growl-blue-soft);
    }

    .mobile-header-suggestion-item span {
      display: block;
      color: var(--growl-heading);
      font-size: 13px;
      font-weight: 800;
      line-height: 1.25;
    }

    .mobile-header-suggestion-item small {
      display: block;
      color: var(--growl-muted);
      font-size: 11px;
      margin-top: 3px;
      line-height: 1.25;
    }

    .mobile-header-no-result {
      padding: 12px;
      color: var(--growl-muted);
      font-size: 12px;
      background: #ffffff;
    }

    #header-main .header-right {
      margin-left: 0 !important;
      flex: 0 0 auto;
      min-width: max-content;
      position: relative;
      z-index: 6;
      display: flex !important;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
    }

    #header-main .header-right > * {
      flex-shrink: 0;
    }

    #header-main .mobile-button {
      width: 36px;
      height: 36px;
      min-width: 36px;
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 575px) {
    .hero h1,
    .hero .heading,
    .hero .title,
    .hero .title-heading,
    .hero .main-title,
    .flat-slider h1,
    .flat-slider .heading,
    .flat-slider .title,
    .flat-slider .title-heading,
    .flat-slider .main-title,
    .slider-home h1,
    .slider-home .heading,
    .slider-home .title,
    .slider-home .title-heading,
    .slider-home .main-title,
    .home-banner h1,
    .home-banner .heading,
    .home-banner .title,
    .home-banner .title-heading,
    .home-banner .main-title,
    .hero-section h1,
    .hero-section .heading,
    .hero-section .title,
    .hero-section .title-heading,
    .hero-section .main-title,
    .banner-section h1,
    .banner-section .heading,
    .banner-section .title,
    .banner-section .title-heading,
    .banner-section .main-title,
    .main-banner h1,
    .main-banner .heading,
    .main-banner .title,
    .main-banner .title-heading,
    .main-banner .main-title,
    .tf-slider h1,
    .tf-slider .heading,
    .tf-slider .title,
    .tf-slider .title-heading,
    .tf-slider .main-title,
    .page-title-home h1,
    .page-title-home .heading,
    .page-title-home .title,
    .page-title-home .title-heading,
    .page-title-home .main-title {
      font-size: clamp(30px, 9vw, 42px) !important;
      line-height: 1.1 !important;
      letter-spacing: -0.8px !important;
    }

    .hero .tf-btn,
    .hero .btn,
    .hero a[class*="btn"],
    .flat-slider .tf-btn,
    .flat-slider .btn,
    .flat-slider a[class*="btn"],
    .slider-home .tf-btn,
    .slider-home .btn,
    .slider-home a[class*="btn"],
    .home-banner .tf-btn,
    .home-banner .btn,
    .home-banner a[class*="btn"],
    .hero-section .tf-btn,
    .hero-section .btn,
    .hero-section a[class*="btn"],
    .banner-section .tf-btn,
    .banner-section .btn,
    .banner-section a[class*="btn"],
    .main-banner .tf-btn,
    .main-banner .btn,
    .main-banner a[class*="btn"],
    .tf-slider .tf-btn,
    .tf-slider .btn,
    .tf-slider a[class*="btn"],
    .page-title-home .tf-btn,
    .page-title-home .btn,
    .page-title-home a[class*="btn"] {
      padding: 13px 21px !important;
      font-size: 13px !important;
    }

    #header-main .header-inner-wrap {
      gap: 7px;
    }

    #header-main .header-logo {
      width: 78px !important;
      min-width: 78px !important;
      max-width: 78px !important;
      flex-basis: 78px !important;
    }

    #header-main .header-logo img {
      height: 46px !important;
      transform: scale(1.22) !important;
    }

    .mobile-simple-search form {
      height: 33px;
      padding: 0 8px;
      gap: 6px;
    }

    .mobile-simple-search i {
      font-size: 12px;
    }

    #header-main .mobile-button {
      width: 34px;
      height: 34px;
      min-width: 34px;
    }
  }

  @media (max-width: 420px) {
    #header-main .header-inner-wrap {
      gap: 6px;
    }

    #header-main .header-logo {
      width: 72px !important;
      min-width: 72px !important;
      max-width: 72px !important;
      flex-basis: 72px !important;
    }

    #header-main .header-logo img {
      height: 43px !important;
      transform: scale(1.18) !important;
    }

    .mobile-simple-search form {
      height: 32px;
      border-radius: 8px;
      padding: 0 7px;
    }

    .mobile-simple-search input,
    #header-main .mobile-simple-search input,
    #header-main .mobile-simple-search form input {
      font-size: 10.5px !important;
    }

    #header-main .header-right {
      gap: 4px;
    }

    #header-main .mobile-button {
      width: 32px;
      height: 32px;
      min-width: 32px;
    }
  }

  @media (max-width: 360px) {
    #header-main .header-logo {
      width: 66px !important;
      min-width: 66px !important;
      max-width: 66px !important;
      flex-basis: 66px !important;
    }

    #header-main .header-logo img {
      height: 40px !important;
      transform: scale(1.12) !important;
    }

    #header-main .header-inner-wrap {
      gap: 5px;
    }

    .mobile-simple-search form {
      height: 30px;
      padding: 0 6px;
      gap: 5px;
    }

    .mobile-simple-search input,
    #header-main .mobile-simple-search input,
    #header-main .mobile-simple-search form input {
      font-size: 10px !important;
    }

    #header-main .mobile-button {
      width: 30px;
      height: 30px;
      min-width: 30px;
    }
  }

  @media (max-width: 330px) {
    .mobile-simple-search input::placeholder {
      color: transparent;
    }
  }

  /*==================================================
    FINAL MOBILE HEADER FIX - ONLY MOBILE VIEW
    Desktop/web design remains same. This fixes logo/search/actions
    and also supports NotificationBell after login.
  ==================================================*/

  @media (max-width: 991px) {
    #header-main,
    #header-main.header {
      position: sticky;
      top: 0;
      z-index: 99999;
      overflow: visible !important;
    }

    #header-main .header-inner,
    #header-main .tf-container,
    #header-main .tf-container.xl,
    #header-main .row,
    #header-main .col-12 {
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      overflow: visible !important;
    }

    #header-main .header-inner-wrap {
      min-height: 64px !important;
      height: 64px !important;
      width: 100% !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 8px !important;
      padding: 0 10px !important;
      box-sizing: border-box !important;
      background: #ffffff !important;
      overflow: visible !important;
    }

    #header-main .header-logo {
      width: 104px !important;
      min-width: 104px !important;
      max-width: 104px !important;
      flex: 0 0 104px !important;
      height: 46px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      overflow: hidden !important;
      z-index: 7 !important;
    }

    #header-main .header-logo .site-logo {
      width: 104px !important;
      height: 46px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      overflow: hidden !important;
    }

    #header-main .header-logo img,
    #header-main .site-logo img {
      width: 104px !important;
      max-width: 104px !important;
      height: auto !important;
      max-height: 44px !important;
      object-fit: contain !important;
      transform: none !important;
      transform-origin: center !important;
      display: block !important;
      filter: drop-shadow(0 4px 8px rgba(6, 44, 71, 0.12)) !important;
    }

    #header-main .main-menu,
    #header-main .phone-number {
      display: none !important;
    }

    #header-main .mobile-simple-search {
      display: block !important;
      flex: 1 1 auto !important;
      min-width: 0 !important;
      width: auto !important;
      max-width: none !important;
      position: relative !important;
      z-index: 5 !important;
    }

    #header-main .mobile-simple-search form {
      width: 100% !important;
      height: 34px !important;
      min-height: 34px !important;
      display: flex !important;
      align-items: center !important;
      gap: 6px !important;
      padding: 0 9px !important;
      border: 1px solid rgba(11, 79, 122, 0.32) !important;
      border-radius: 10px !important;
      background: #ffffff !important;
      box-shadow: 0 6px 16px rgba(6, 44, 71, 0.08) !important;
      overflow: hidden !important;
      box-sizing: border-box !important;
    }

    #header-main .mobile-simple-search i {
      flex: 0 0 auto !important;
      font-size: 12px !important;
      line-height: 1 !important;
      color: var(--growl-blue) !important;
    }

    #header-main .mobile-simple-search input {
      flex: 1 1 auto !important;
      width: 100% !important;
      min-width: 0 !important;
      height: 32px !important;
      padding: 0 !important;
      margin: 0 !important;
      border: 0 !important;
      outline: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      color: var(--growl-heading) !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }

    #header-main .mobile-simple-search input::placeholder {
      color: #53657c !important;
      opacity: 1 !important;
    }

    #header-main .header-right {
      flex: 0 0 auto !important;
      width: auto !important;
      min-width: max-content !important;
      margin-left: 0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-end !important;
      gap: 6px !important;
      position: relative !important;
      z-index: 8 !important;
    }

    #header-main .header-notification-wrap,
    #header-main .header-dashboard-wrap {
      width: 34px !important;
      height: 34px !important;
      min-width: 34px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex: 0 0 34px !important;
      overflow: visible !important;
    }

    #header-main .header-notification-wrap:empty,
    #header-main .header-dashboard-wrap:empty {
      display: none !important;
      width: 0 !important;
      min-width: 0 !important;
      flex-basis: 0 !important;
    }

    #header-main .header-notification-wrap button,
    #header-main .header-notification-wrap a,
    #header-main .header-notification-wrap > div,
    #header-main .header-dashboard-wrap button,
    #header-main .header-dashboard-wrap a,
    #header-main .header-dashboard-wrap > div {
      max-width: 34px !important;
      max-height: 34px !important;
    }

    #header-main .mobile-button {
      width: 34px !important;
      height: 34px !important;
      min-width: 34px !important;
      flex: 0 0 34px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      border-radius: 10px !important;
      padding: 0 !important;
      margin: 0 !important;
      background: var(--growl-blue-deep) !important;
      color: #ffffff !important;
      box-shadow: 0 7px 18px rgba(6, 44, 71, 0.18) !important;
    }

    #header-main .mobile-button i {
      font-size: 18px !important;
      line-height: 1 !important;
      color: #ffffff !important;
    }

    #header-main .mobile-header-suggestions {
      left: 0 !important;
      right: 0 !important;
      width: min(100%, 430px) !important;
      top: calc(100% + 8px) !important;
      z-index: 999999 !important;
    }
  }

  @media (max-width: 575px) {
    #header-main .header-inner-wrap {
      height: 60px !important;
      min-height: 60px !important;
      gap: 7px !important;
      padding: 0 8px !important;
    }

    #header-main .header-logo,
    #header-main .header-logo .site-logo {
      width: 96px !important;
      min-width: 96px !important;
      max-width: 96px !important;
      flex-basis: 96px !important;
      height: 42px !important;
    }

    #header-main .header-logo img,
    #header-main .site-logo img {
      width: 96px !important;
      max-width: 96px !important;
      max-height: 40px !important;
      transform: none !important;
    }

    #header-main .mobile-simple-search form {
      height: 32px !important;
      min-height: 32px !important;
      padding: 0 8px !important;
      gap: 5px !important;
      border-radius: 9px !important;
    }

    #header-main .mobile-simple-search input {
      height: 30px !important;
      font-size: 11px !important;
      font-weight: 600 !important;
    }

    #header-main .header-right {
      gap: 5px !important;
    }

    #header-main .header-notification-wrap,
    #header-main .header-dashboard-wrap,
    #header-main .mobile-button {
      width: 32px !important;
      height: 32px !important;
      min-width: 32px !important;
      flex-basis: 32px !important;
    }
  }

  @media (max-width: 420px) {
    #header-main .header-inner-wrap {
      gap: 6px !important;
      padding: 0 7px !important;
    }

    #header-main .header-logo,
    #header-main .header-logo .site-logo {
      width: 90px !important;
      min-width: 90px !important;
      max-width: 90px !important;
      flex-basis: 90px !important;
    }

    #header-main .header-logo img,
    #header-main .site-logo img {
      width: 90px !important;
      max-width: 90px !important;
      max-height: 38px !important;
    }

    #header-main .mobile-simple-search input {
      font-size: 10.5px !important;
    }
  }

  @media (max-width: 380px) {
    #header-main .header-logo,
    #header-main .header-logo .site-logo {
      width: 84px !important;
      min-width: 84px !important;
      max-width: 84px !important;
      flex-basis: 84px !important;
    }

    #header-main .header-logo img,
    #header-main .site-logo img {
      width: 84px !important;
      max-width: 84px !important;
      max-height: 36px !important;
    }

    #header-main .header-right {
      gap: 4px !important;
    }

    #header-main .header-notification-wrap,
    #header-main .header-dashboard-wrap,
    #header-main .mobile-button {
      width: 30px !important;
      height: 30px !important;
      min-width: 30px !important;
      flex-basis: 30px !important;
    }

    #header-main .mobile-simple-search form {
      height: 30px !important;
      min-height: 30px !important;
      padding: 0 7px !important;
    }

    #header-main .mobile-simple-search input {
      height: 28px !important;
      font-size: 10px !important;
    }
  }

  @media (max-width: 340px) {
    #header-main .header-logo,
    #header-main .header-logo .site-logo {
      width: 78px !important;
      min-width: 78px !important;
      max-width: 78px !important;
      flex-basis: 78px !important;
    }

    #header-main .header-logo img,
    #header-main .site-logo img {
      width: 78px !important;
      max-width: 78px !important;
      max-height: 34px !important;
    }

    #header-main .mobile-simple-search input::placeholder {
      color: transparent !important;
    }
  }


  /*==================================================
    FINAL CLIENT REQUIREMENT UPDATE - MOBILE HEADER + BANNER
    - Header made taller/clearer on mobile
    - Logo/search/user/bell/menu aligned after login
    - Main banner heading larger, bolder, premium
    - Better spacing for mobile hero text
  ==================================================*/

  @media (max-width: 991px) {
    #header-main .header-inner-wrap {
      min-height: 78px !important;
      height: 78px !important;
      padding: 0 12px !important;
      gap: 10px !important;
      align-items: center !important;
    }

    #header-main .header-logo,
    #header-main .header-logo .site-logo {
      width: 118px !important;
      min-width: 118px !important;
      max-width: 118px !important;
      flex: 0 0 118px !important;
      height: 56px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      overflow: hidden !important;
    }

    #header-main .header-logo img,
    #header-main .site-logo img {
      width: 118px !important;
      max-width: 118px !important;
      height: auto !important;
      max-height: 54px !important;
      object-fit: contain !important;
      transform: none !important;
      transform-origin: center !important;
      display: block !important;
    }

    #header-main .mobile-simple-search form {
      height: 40px !important;
      min-height: 40px !important;
      border-radius: 12px !important;
      padding: 0 12px !important;
      gap: 8px !important;
      border: 1.4px solid rgba(11, 79, 122, 0.36) !important;
      box-shadow: 0 8px 22px rgba(6, 44, 71, 0.1) !important;
    }

    #header-main .mobile-simple-search i {
      font-size: 14px !important;
    }

    #header-main .mobile-simple-search input {
      height: 38px !important;
      font-size: 13px !important;
      font-weight: 650 !important;
      letter-spacing: -0.1px !important;
    }

    #header-main .header-right {
      gap: 7px !important;
    }

    #header-main .header-notification-wrap,
    #header-main .header-dashboard-wrap,
    #header-main .mobile-button {
      width: 38px !important;
      height: 38px !important;
      min-width: 38px !important;
      flex: 0 0 38px !important;
      border-radius: 12px !important;
    }

    #header-main .header-notification-wrap button,
    #header-main .header-notification-wrap a,
    #header-main .header-notification-wrap > div,
    #header-main .header-dashboard-wrap button,
    #header-main .header-dashboard-wrap a,
    #header-main .header-dashboard-wrap > div {
      max-width: 38px !important;
      max-height: 38px !important;
    }

    #header-main .mobile-button i {
      font-size: 19px !important;
    }

    .hero h1,
    .hero .heading,
    .hero .title,
    .hero .title-heading,
    .hero .main-title,
    .flat-slider h1,
    .flat-slider .heading,
    .flat-slider .title,
    .flat-slider .title-heading,
    .flat-slider .main-title,
    .slider-home h1,
    .slider-home .heading,
    .slider-home .title,
    .slider-home .title-heading,
    .slider-home .main-title,
    .home-banner h1,
    .home-banner .heading,
    .home-banner .title,
    .home-banner .title-heading,
    .home-banner .main-title,
    .hero-section h1,
    .hero-section .heading,
    .hero-section .title,
    .hero-section .title-heading,
    .hero-section .main-title,
    .banner-section h1,
    .banner-section .heading,
    .banner-section .title,
    .banner-section .title-heading,
    .banner-section .main-title,
    .main-banner h1,
    .main-banner .heading,
    .main-banner .title,
    .main-banner .title-heading,
    .main-banner .main-title,
    .tf-slider h1,
    .tf-slider .heading,
    .tf-slider .title,
    .tf-slider .title-heading,
    .tf-slider .main-title,
    .page-title-home h1,
    .page-title-home .heading,
    .page-title-home .title,
    .page-title-home .title-heading,
    .page-title-home .main-title {
      font-size: clamp(42px, 8.8vw, 64px) !important;
      line-height: 1.04 !important;
      font-weight: 950 !important;
      letter-spacing: -1.35px !important;
      margin-bottom: 18px !important;
      max-width: 94% !important;
      text-shadow: 0 14px 42px rgba(0, 0, 0, 0.38) !important;
    }

    .hero p,
    .hero .text,
    .hero .description,
    .hero .desc,
    .flat-slider p,
    .flat-slider .text,
    .flat-slider .description,
    .flat-slider .desc,
    .slider-home p,
    .slider-home .text,
    .slider-home .description,
    .slider-home .desc,
    .home-banner p,
    .home-banner .text,
    .home-banner .description,
    .home-banner .desc,
    .hero-section p,
    .hero-section .text,
    .hero-section .description,
    .hero-section .desc,
    .banner-section p,
    .banner-section .text,
    .banner-section .description,
    .banner-section .desc,
    .main-banner p,
    .main-banner .text,
    .main-banner .description,
    .main-banner .desc,
    .tf-slider p,
    .tf-slider .text,
    .tf-slider .description,
    .tf-slider .desc,
    .page-title-home p,
    .page-title-home .text,
    .page-title-home .description,
    .page-title-home .desc {
      font-size: 16px !important;
      line-height: 1.62 !important;
      font-weight: 550 !important;
      max-width: 92% !important;
      margin-bottom: 26px !important;
    }

    .hero .sub-title,
    .hero .subtitle,
    .hero .tagline,
    .hero .sub-heading,
    .flat-slider .sub-title,
    .flat-slider .subtitle,
    .flat-slider .tagline,
    .flat-slider .sub-heading,
    .slider-home .sub-title,
    .slider-home .subtitle,
    .slider-home .tagline,
    .slider-home .sub-heading,
    .home-banner .sub-title,
    .home-banner .subtitle,
    .home-banner .tagline,
    .home-banner .sub-heading,
    .hero-section .sub-title,
    .hero-section .subtitle,
    .hero-section .tagline,
    .hero-section .sub-heading,
    .banner-section .sub-title,
    .banner-section .subtitle,
    .banner-section .tagline,
    .banner-section .sub-heading,
    .main-banner .sub-title,
    .main-banner .subtitle,
    .main-banner .tagline,
    .main-banner .sub-heading,
    .tf-slider .sub-title,
    .tf-slider .subtitle,
    .tf-slider .tagline,
    .tf-slider .sub-heading,
    .page-title-home .sub-title,
    .page-title-home .subtitle,
    .page-title-home .tagline,
    .page-title-home .sub-heading {
      font-size: 12px !important;
      padding: 9px 15px !important;
      margin-bottom: 16px !important;
      font-weight: 950 !important;
      letter-spacing: 0.7px !important;
    }
  }

  @media (max-width: 575px) {
    #header-main .header-inner-wrap {
      min-height: 74px !important;
      height: 74px !important;
      padding: 0 10px !important;
      gap: 8px !important;
    }

    #header-main .header-logo,
    #header-main .header-logo .site-logo {
      width: 108px !important;
      min-width: 108px !important;
      max-width: 108px !important;
      flex-basis: 108px !important;
      height: 52px !important;
    }

    #header-main .header-logo img,
    #header-main .site-logo img {
      width: 108px !important;
      max-width: 108px !important;
      max-height: 50px !important;
    }

    #header-main .mobile-simple-search form {
      height: 38px !important;
      min-height: 38px !important;
      padding: 0 10px !important;
      gap: 7px !important;
      border-radius: 11px !important;
    }

    #header-main .mobile-simple-search input {
      height: 36px !important;
      font-size: 12px !important;
      font-weight: 650 !important;
    }

    #header-main .header-right {
      gap: 6px !important;
    }

    #header-main .header-notification-wrap,
    #header-main .header-dashboard-wrap,
    #header-main .mobile-button {
      width: 36px !important;
      height: 36px !important;
      min-width: 36px !important;
      flex-basis: 36px !important;
    }

    .hero h1,
    .hero .heading,
    .hero .title,
    .hero .title-heading,
    .hero .main-title,
    .flat-slider h1,
    .flat-slider .heading,
    .flat-slider .title,
    .flat-slider .title-heading,
    .flat-slider .main-title,
    .slider-home h1,
    .slider-home .heading,
    .slider-home .title,
    .slider-home .title-heading,
    .slider-home .main-title,
    .home-banner h1,
    .home-banner .heading,
    .home-banner .title,
    .home-banner .title-heading,
    .home-banner .main-title,
    .hero-section h1,
    .hero-section .heading,
    .hero-section .title,
    .hero-section .title-heading,
    .hero-section .main-title,
    .banner-section h1,
    .banner-section .heading,
    .banner-section .title,
    .banner-section .title-heading,
    .banner-section .main-title,
    .main-banner h1,
    .main-banner .heading,
    .main-banner .title,
    .main-banner .title-heading,
    .main-banner .main-title,
    .tf-slider h1,
    .tf-slider .heading,
    .tf-slider .title,
    .tf-slider .title-heading,
    .tf-slider .main-title,
    .page-title-home h1,
    .page-title-home .heading,
    .page-title-home .title,
    .page-title-home .title-heading,
    .page-title-home .main-title {
      font-size: clamp(38px, 10.8vw, 54px) !important;
      line-height: 1.06 !important;
      letter-spacing: -1px !important;
      margin-bottom: 16px !important;
      max-width: 96% !important;
    }
  }

  @media (max-width: 420px) {
    #header-main .header-inner-wrap {
      min-height: 72px !important;
      height: 72px !important;
      gap: 7px !important;
      padding: 0 8px !important;
    }

    #header-main .header-logo,
    #header-main .header-logo .site-logo {
      width: 98px !important;
      min-width: 98px !important;
      max-width: 98px !important;
      flex-basis: 98px !important;
      height: 48px !important;
    }

    #header-main .header-logo img,
    #header-main .site-logo img {
      width: 98px !important;
      max-width: 98px !important;
      max-height: 46px !important;
    }

    #header-main .mobile-simple-search form {
      height: 36px !important;
      min-height: 36px !important;
      padding: 0 8px !important;
      gap: 6px !important;
    }

    #header-main .mobile-simple-search input {
      height: 34px !important;
      font-size: 11px !important;
    }

    #header-main .header-notification-wrap,
    #header-main .header-dashboard-wrap,
    #header-main .mobile-button {
      width: 34px !important;
      height: 34px !important;
      min-width: 34px !important;
      flex-basis: 34px !important;
    }
  }

  @media (max-width: 380px) {
    #header-main .header-logo,
    #header-main .header-logo .site-logo {
      width: 90px !important;
      min-width: 90px !important;
      max-width: 90px !important;
      flex-basis: 90px !important;
    }

    #header-main .header-logo img,
    #header-main .site-logo img {
      width: 90px !important;
      max-width: 90px !important;
      max-height: 44px !important;
    }

    #header-main .header-right {
      gap: 5px !important;
    }

    #header-main .header-notification-wrap,
    #header-main .header-dashboard-wrap,
    #header-main .mobile-button {
      width: 32px !important;
      height: 32px !important;
      min-width: 32px !important;
      flex-basis: 32px !important;
    }

    #header-main .mobile-simple-search form {
      height: 35px !important;
      min-height: 35px !important;
      padding: 0 7px !important;
    }

    #header-main .mobile-simple-search input {
      height: 33px !important;
      font-size: 10.5px !important;
    }
  }

  @media (max-width: 340px) {
    #header-main .header-logo,
    #header-main .header-logo .site-logo {
      width: 82px !important;
      min-width: 82px !important;
      max-width: 82px !important;
      flex-basis: 82px !important;
    }

    #header-main .header-logo img,
    #header-main .site-logo img {
      width: 82px !important;
      max-width: 82px !important;
      max-height: 40px !important;
    }
  }

  /*==================================================
    NOTIFICATION DROPDOWN FIX
    Uses original working NotificationBell structure.
    Keeps bell/dropdown visible on mobile without clipping.
  ==================================================*/

  @media (max-width: 991px) {
    #header-main,
    #header-main .header-inner,
    #header-main .tf-container,
    #header-main .tf-container.xl,
    #header-main .row,
    #header-main .col-12,
    #header-main .header-inner-wrap,
    #header-main .header-right {
      overflow: visible !important;
    }

    #header-main .header-right {
      position: relative !important;
      z-index: 100001 !important;
    }

    #header-main .header-right > * {
      flex-shrink: 0 !important;
    }

    /* Do not force the NotificationBell dropdown container to icon size */
    #header-main .header-right [class*="notification"],
    #header-main .header-right [class*="Notification"],
    #header-main .header-right [class*="bell"],
    #header-main .header-right [class*="Bell"] {
      overflow: visible !important;
    }

    /* Common dropdown/popup class protection */
    #header-main .header-right [class*="dropdown"],
    #header-main .header-right [class*="Dropdown"],
    #header-main .header-right [class*="popover"],
    #header-main .header-right [class*="Popover"],
    #header-main .header-right [class*="menu"],
    #header-main .header-right [class*="Menu"] {
      max-width: none !important;
      max-height: none !important;
      overflow: visible !important;
      z-index: 100002 !important;
    }
  }


`}</style>
    </>
  );
}