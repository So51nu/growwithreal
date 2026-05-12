// // // // // "use client";
// // // // // import SearchForm from "@/components/common/SearchForm";
// // // // // import React, { useState } from "react";
// // // // // import { useRouter } from "next/navigation";

// // // // // export default function Hero() {
// // // // //   const router = useRouter();
// // // // //   const [activeItem, setActiveItem] = useState("For sale");
// // // // //   const [searchText, setSearchText] = useState("");

// // // // //   const items = ["For sale", "For rent"];

// // // // //   const handleSearch = (e) => {
// // // // //     e.preventDefault();

// // // // //     const query = new URLSearchParams();

// // // // //     if (searchText.trim()) {
// // // // //       query.set("search", searchText.trim());
// // // // //     }

// // // // //     if (activeItem === "For sale") {
// // // // //       query.set("property_status", "for-sale");
// // // // //     } else {
// // // // //       query.set("property_status", "for-rent");
// // // // //     }

// // // // //     router.push(`/my-property?${query.toString()}`);
// // // // //   };

// // // // //   return (
// // // // //     <div
// // // // //   className="page-title home01"
// // // // //   style={{
// // // // //     backgroundImage: "url('https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
// // // // //     backgroundSize: "cover",
// // // // //     backgroundPosition: "center",
// // // // //     backgroundRepeat: "no-repeat",
// // // // //   }}
// // // // // >
// // // // //       <div className="tf-container ">
// // // // //         <div className="row justify-center relative">
// // // // //           <div className="col-lg-8 ">
// // // // //             <div className="content-inner">
// // // // //               <div className="heading-title">
// // // // //                 <h1 className="title">GROWL REAL ESTATE </h1>
// // // // //                 <p className="h6 fw-4">
// // // // //                   Discover exclusive luxury projects, trusted by thousands of
// // // // //                   homebuyers every month.
// // // // //                 </p>
// // // // //               </div>
// // // // //               <div className="wg-filter">
// // // // //                 <div className="form-title">
// // // // //                   <div className="tf-dropdown-sort " data-bs-toggle="dropdown">
// // // // //                     <div className="btn-select">
// // // // //                       <span className="text-sort-value">{activeItem}</span>
// // // // //                       <i className="icon-CaretDown" />
// // // // //                     </div>
// // // // //                     <div className="dropdown-menu">
// // // // //                       {items.map((item) => (
// // // // //                         <div
// // // // //                           key={item}
// // // // //                           className={`select-item ${
// // // // //                             activeItem === item ? "active" : ""
// // // // //                           }`}
// // // // //                           onClick={() => setActiveItem(item)}
// // // // //                         >
// // // // //                           <span className="text-value-item">{item}</span>
// // // // //                         </div>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <form onSubmit={handleSearch}>
// // // // //                     <fieldset>
// // // // //                       <input
// // // // //                         type="text"
// // // // //                         placeholder="Place, neighborhood, school or agent..."
// // // // //                         value={searchText}
// // // // //                         onChange={(e) => setSearchText(e.target.value)}
// // // // //                       />
// // // // //                     </fieldset>
// // // // //                   </form>

// // // // //                   <div className="box-item wrap-btn">
// // // // //                     <div className="btn-filter show-form searchFormToggler">
// // // // //                       <div className="icons">
// // // // //                         <svg
// // // // //                           width={24}
// // // // //                           height={24}
// // // // //                           viewBox="0 0 24 24"
// // // // //                           fill="none"
// // // // //                           xmlns="http://www.w3.org/2000/svg"
// // // // //                         >
// // // // //                           <path
// // // // //                             d="M21 4H14"
// // // // //                             stroke="#F1913D"
// // // // //                             strokeWidth={2}
// // // // //                             strokeLinecap="round"
// // // // //                             strokeLinejoin="round"
// // // // //                           />
// // // // //                           <path
// // // // //                             d="M10 4H3"
// // // // //                             stroke="#F1913D"
// // // // //                             strokeWidth={2}
// // // // //                             strokeLinecap="round"
// // // // //                             strokeLinejoin="round"
// // // // //                           />
// // // // //                           <path
// // // // //                             d="M21 12H12"
// // // // //                             stroke="#F1913D"
// // // // //                             strokeWidth={2}
// // // // //                             strokeLinecap="round"
// // // // //                             strokeLinejoin="round"
// // // // //                           />
// // // // //                           <path
// // // // //                             d="M8 12H3"
// // // // //                             stroke="#F1913D"
// // // // //                             strokeWidth={2}
// // // // //                             strokeLinecap="round"
// // // // //                             strokeLinejoin="round"
// // // // //                           />
// // // // //                           <path
// // // // //                             d="M21 20H16"
// // // // //                             stroke="#F1913D"
// // // // //                             strokeWidth={2}
// // // // //                             strokeLinecap="round"
// // // // //                             strokeLinejoin="round"
// // // // //                           />
// // // // //                           <path
// // // // //                             d="M12 20H3"
// // // // //                             stroke="#F1913D"
// // // // //                             strokeWidth={2}
// // // // //                             strokeLinecap="round"
// // // // //                             strokeLinejoin="round"
// // // // //                           />
// // // // //                           <path
// // // // //                             d="M14 2V6"
// // // // //                             stroke="#F1913D"
// // // // //                             strokeWidth={2}
// // // // //                             strokeLinecap="round"
// // // // //                             strokeLinejoin="round"
// // // // //                           />
// // // // //                           <path
// // // // //                             d="M8 10V14"
// // // // //                             stroke="#F1913D"
// // // // //                             strokeWidth={2}
// // // // //                             strokeLinecap="round"
// // // // //                             strokeLinejoin="round"
// // // // //                           />
// // // // //                           <path
// // // // //                             d="M16 18V22"
// // // // //                             stroke="#F1913D"
// // // // //                             strokeWidth={2}
// // // // //                             strokeLinecap="round"
// // // // //                             strokeLinejoin="round"
// // // // //                           />
// // // // //                         </svg>
// // // // //                       </div>
// // // // //                     </div>

// // // // //                     <button
// // // // //                       type="button"
// // // // //                       onClick={handleSearch}
// // // // //                       className="tf-btn bg-color-primary pd-3"
// // // // //                     >
// // // // //                       Search <i className="icon-MagnifyingGlass fw-6" />
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <SearchForm />
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import SearchForm from "@/components/common/SearchForm";
// // // // import React, { useEffect, useMemo, useState } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import { apiGet } from "../../lib/api";

// // // // const HERO_IMAGES = [
// // // //   "https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1600&auto=format&fit=crop",
// // // //   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
// // // //   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
// // // //   "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
// // // // ];

// // // // function normalizeText(value) {
// // // //   return String(value || "").trim().toLowerCase();
// // // // }

// // // // function slugify(value) {
// // // //   return String(value || "")
// // // //     .trim()
// // // //     .toLowerCase()
// // // //     .replace(/&/g, "and")
// // // //     .replace(/[^\w\s-]/g, "")
// // // //     .replace(/\s+/g, "-")
// // // //     .replace(/-+/g, "-");
// // // // }

// // // // export default function Hero({
// // // //   onSearch = () => {},
// // // //   projects = [],
// // // // }) {
// // // //   const router = useRouter();

// // // //   const [activeItem, setActiveItem] = useState("For sale");
// // // //   const [searchText, setSearchText] = useState("");
// // // //   const [advancedFilters, setAdvancedFilters] = useState({
// // // //     keyword: "",
// // // //     city: "",
// // // //     location: "",
// // // //     propertyType: "",
// // // //     propertyStatus: "",
// // // //     bedrooms: "",
// // // //     bathrooms: "",
// // // //     amenities: [],
// // // //     sortBy: "Newest",
// // // //     priceRange: [0, 50000000],
// // // //     areaRange: [0, 5000],
// // // //   });

// // // //   const [cities, setCities] = useState([]);
// // // //   const [developers, setDevelopers] = useState([]);
// // // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // // //   const items = useMemo(() => ["For sale", "For rent"], []);

// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
// // // //     }, 4000);

// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const loadSearchData = async () => {
// // // //       try {
// // // //         const [citiesRes, developersRes] = await Promise.all([
// // // //           apiGet("/admindashboard/cities/"),
// // // //           apiGet("/admindashboard/developers/"),
// // // //         ]);

// // // //         setCities(Array.isArray(citiesRes) ? citiesRes : []);
// // // //         setDevelopers(Array.isArray(developersRes) ? developersRes : []);
// // // //       } catch (error) {
// // // //         console.error("Hero search data fetch error:", error);
// // // //         setCities([]);
// // // //         setDevelopers([]);
// // // //       }
// // // //     };

// // // //     loadSearchData();
// // // //   }, []);

// // // //   const fallbackCitiesFromProjects = useMemo(() => {
// // // //     const map = new Map();

// // // //     projects.forEach((item) => {
// // // //       const city = item.city || "";
// // // //       const city_slug = item.city_slug || slugify(city);

// // // //       if (city && city_slug) {
// // // //         map.set(normalizeText(city), { city, city_slug });
// // // //       }
// // // //     });

// // // //     return Array.from(map.values());
// // // //   }, [projects]);

// // // //   const fallbackDevelopersFromProjects = useMemo(() => {
// // // //     const map = new Map();

// // // //     projects.forEach((item) => {
// // // //       const developer_name = item.developer_name || "";
// // // //       const developer_slug = item.developer_slug || slugify(developer_name);

// // // //       if (developer_name && developer_slug) {
// // // //         map.set(normalizeText(developer_name), {
// // // //           developer_name,
// // // //           developer_slug,
// // // //         });
// // // //       }
// // // //     });

// // // //     return Array.from(map.values());
// // // //   }, [projects]);

// // // //   const finalCities = cities.length > 0 ? cities : fallbackCitiesFromProjects;
// // // //   const finalDevelopers =
// // // //     developers.length > 0 ? developers : fallbackDevelopersFromProjects;

// // // //   const findCityMatch = (searchValue) => {
// // // //     const normalized = normalizeText(searchValue);
// // // //     if (!normalized) return null;

// // // //     const exactMatch = finalCities.find((item) => {
// // // //       const cityName = normalizeText(item.city);
// // // //       const citySlug = normalizeText(item.city_slug);
// // // //       return cityName === normalized || citySlug === normalized;
// // // //     });
// // // //     if (exactMatch) return exactMatch;

// // // //     const partialMatch = finalCities.find((item) => {
// // // //       const cityName = normalizeText(item.city);
// // // //       const citySlug = normalizeText(item.city_slug);
// // // //       return cityName.includes(normalized) || citySlug.includes(normalized);
// // // //     });
// // // //     return partialMatch || null;
// // // //   };

// // // //   const findDeveloperMatch = (searchValue) => {
// // // //     const normalized = normalizeText(searchValue);
// // // //     if (!normalized) return null;

// // // //     const exactMatch = finalDevelopers.find((item) => {
// // // //       const developerName = normalizeText(item.developer_name);
// // // //       const developerSlug = normalizeText(item.developer_slug);
// // // //       return developerName === normalized || developerSlug === normalized;
// // // //     });
// // // //     if (exactMatch) return exactMatch;

// // // //     const partialMatch = finalDevelopers.find((item) => {
// // // //       const developerName = normalizeText(item.developer_name);
// // // //       const developerSlug = normalizeText(item.developer_slug);
// // // //       return (
// // // //         developerName.includes(normalized) || developerSlug.includes(normalized)
// // // //       );
// // // //     });
// // // //     return partialMatch || null;
// // // //   };

// // // //   const handleSearch = (e) => {
// // // //     if (e) e.preventDefault();

// // // //     const mergedFilters = {
// // // //       ...advancedFilters,
// // // //       keyword: searchText.trim() || advancedFilters.keyword || "",
// // // //       propertyStatus:
// // // //         activeItem === "For sale" ? "for-sale" : "for-rent",
// // // //     };

// // // //     const rawSearch = searchText.trim();

// // // //     // 1) Search text se city/developer route detect karo
// // // //     if (rawSearch) {
// // // //       const cityMatch = findCityMatch(rawSearch);
// // // //       if (cityMatch?.city_slug) {
// // // //         router.push(`/cities/${cityMatch.city_slug}`);
// // // //         return;
// // // //       }

// // // //       const developerMatch = findDeveloperMatch(rawSearch);
// // // //       if (developerMatch?.developer_slug) {
// // // //         router.push(`/developers/${developerMatch.developer_slug}`);
// // // //         return;
// // // //       }
// // // //     }

// // // //     // 2) Advanced city filter selected hai to city route par bhejo
// // // //     if (mergedFilters.city) {
// // // //       const cityMatch = findCityMatch(mergedFilters.city);
// // // //       if (cityMatch?.city_slug) {
// // // //         router.push(`/cities/${cityMatch.city_slug}`);
// // // //         return;
// // // //       }
// // // //     }

// // // //     // 3) No match => same home page par filter apply karo
// // // //     onSearch(mergedFilters);
// // // //   };

// // // //   return (
// // // //     <div className="page-title home01 hero-slider-wrap">
// // // //       <div className="hero-bg-slider">
// // // //         {HERO_IMAGES.map((image, index) => (
// // // //           <div
// // // //             key={image}
// // // //             className={`hero-bg-slide ${
// // // //               index === currentBgIndex ? "active" : ""
// // // //             }`}
// // // //             style={{ backgroundImage: `url('${image}')` }}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       <div className="hero-overlay" />

// // // //       <div className="tf-container">
// // // //         <div className="row justify-center relative">
// // // //           <div className="col-lg-8">
// // // //             <div className="content-inner">
// // // //               <div className="heading-title">
// // // //                 <h1 className="title">GROWL REAL ESTATE</h1>
// // // //                 <p className="h6 fw-4">
// // // //                   Discover exclusive luxury projects, trusted by thousands of
// // // //                   homebuyers every month.
// // // //                 </p>
// // // //               </div>

// // // //               <div className="wg-filter">
// // // //                 <div className="form-title">
// // // //                   <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
// // // //                     <div className="btn-select">
// // // //                       <span className="text-sort-value">{activeItem}</span>
// // // //                       <i className="icon-CaretDown" />
// // // //                     </div>

// // // //                     <div className="dropdown-menu">
// // // //                       {items.map((item) => (
// // // //                         <div
// // // //                           key={item}
// // // //                           className={`select-item ${
// // // //                             activeItem === item ? "active" : ""
// // // //                           }`}
// // // //                           onClick={() => setActiveItem(item)}
// // // //                         >
// // // //                           <span className="text-value-item">{item}</span>
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>

// // // //                   <form onSubmit={handleSearch} style={{ flex: 1 }}>
// // // //                     <fieldset>
// // // //                       <input
// // // //                         type="text"
// // // //                         placeholder="Search city, developer, project, location..."
// // // //                         value={searchText}
// // // //                         onChange={(e) => setSearchText(e.target.value)}
// // // //                         onKeyDown={(e) => {
// // // //                           if (e.key === "Enter") {
// // // //                             e.preventDefault();
// // // //                             handleSearch(e);
// // // //                           }
// // // //                         }}
// // // //                       />
// // // //                     </fieldset>
// // // //                   </form>

// // // //                   <div className="box-item wrap-btn">
// // // //                     <div className="btn-filter show-form searchFormToggler">
// // // //                       <div className="icons">
// // // //                         <svg
// // // //                           width={24}
// // // //                           height={24}
// // // //                           viewBox="0 0 24 24"
// // // //                           fill="none"
// // // //                           xmlns="http://www.w3.org/2000/svg"
// // // //                         >
// // // //                           <path d="M21 4H14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // //                           <path d="M10 4H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // //                           <path d="M21 12H12" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // //                           <path d="M8 12H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // //                           <path d="M21 20H16" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // //                           <path d="M12 20H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // //                           <path d="M14 2V6" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // //                           <path d="M8 10V14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // //                           <path d="M16 18V22" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // //                         </svg>
// // // //                       </div>
// // // //                     </div>

// // // //                     <button
// // // //                       type="button"
// // // //                       onClick={handleSearch}
// // // //                       className="tf-btn bg-color-primary pd-3"
// // // //                     >
// // // //                       Search <i className="icon-MagnifyingGlass fw-6" />
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>

// // // //                 <SearchForm
// // // //                   onFilterChange={setAdvancedFilters}
// // // //                   projects={projects}
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <style jsx>{`
// // // //         .hero-slider-wrap {
// // // //           position: relative;
// // // //           overflow: hidden;
// // // //           min-height: 820px;
// // // //           display: flex;
// // // //           align-items: center;
// // // //         }

// // // //         .hero-bg-slider {
// // // //           position: absolute;
// // // //           inset: 0;
// // // //           z-index: 0;
// // // //         }

// // // //         .hero-bg-slide {
// // // //           position: absolute;
// // // //           inset: 0;
// // // //           background-size: cover;
// // // //           background-position: center;
// // // //           background-repeat: no-repeat;
// // // //           opacity: 0;
// // // //           transform: scale(1.05);
// // // //           transition: opacity 1.2s ease, transform 5s ease;
// // // //         }

// // // //         .hero-bg-slide.active {
// // // //           opacity: 1;
// // // //           transform: scale(1);
// // // //         }

// // // //         .hero-overlay {
// // // //           position: absolute;
// // // //           inset: 0;
// // // //           background: linear-gradient(
// // // //             90deg,
// // // //             rgba(11, 19, 32, 0.72) 0%,
// // // //             rgba(15, 27, 45, 0.58) 45%,
// // // //             rgba(17, 24, 39, 0.45) 100%
// // // //           );
// // // //           z-index: 1;
// // // //         }

// // // //         .tf-container {
// // // //           position: relative;
// // // //           z-index: 2;
// // // //         }

// // // //         .content-inner {
// // // //           color: #fff;
// // // //         }

// // // //         .heading-title .title {
// // // //           color: #fff;
// // // //         }

// // // //         .heading-title p {
// // // //           color: rgba(255, 255, 255, 0.9);
// // // //         }

// // // //         .wg-filter {
// // // //           margin-top: 28px;
// // // //           background: rgba(255, 255, 255, 0.12);
// // // //           backdrop-filter: blur(14px);
// // // //           -webkit-backdrop-filter: blur(14px);
// // // //           border: 1px solid rgba(255, 255, 255, 0.18);
// // // //           border-radius: 24px;
// // // //           padding: 18px;
// // // //         }

// // // //         .form-title {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           gap: 12px;
// // // //           flex-wrap: wrap;
// // // //         }

// // // //         .form-title form {
// // // //           min-width: 280px;
// // // //         }

// // // //         .form-title input {
// // // //           width: 100%;
// // // //           min-height: 56px;
// // // //           border-radius: 14px;
// // // //           border: 1px solid rgba(255, 255, 255, 0.22);
// // // //           background: rgba(255, 255, 255, 0.92);
// // // //           color: #111827;
// // // //           padding: 0 16px;
// // // //         }

// // // //         .btn-select {
// // // //           min-height: 56px;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: space-between;
// // // //           gap: 10px;
// // // //           padding: 0 16px;
// // // //           border-radius: 14px;
// // // //           background: rgba(255, 255, 255, 0.92);
// // // //           color: #111827;
// // // //           min-width: 150px;
// // // //           cursor: pointer;
// // // //         }

// // // //         .wrap-btn {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           gap: 12px;
// // // //         }

// // // //         .btn-filter {
// // // //           width: 56px;
// // // //           height: 56px;
// // // //           border-radius: 14px;
// // // //           background: rgba(255, 255, 255, 0.92);
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           cursor: pointer;
// // // //         }

// // // //         @media (max-width: 991px) {
// // // //           .hero-slider-wrap {
// // // //             min-height: 760px;
// // // //           }

// // // //           .form-title {
// // // //             flex-direction: column;
// // // //             align-items: stretch;
// // // //           }

// // // //           .wrap-btn {
// // // //             width: 100%;
// // // //             justify-content: space-between;
// // // //           }

// // // //           .form-title form {
// // // //             width: 100%;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }




// // // "use client";

// // // import SearchForm from "@/components/common/SearchForm";
// // // import React, { useEffect, useMemo, useRef, useState } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { apiGet } from "../../lib/api";

// // // const HERO_IMAGES = [
// // //   "https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1600&auto=format&fit=crop",
// // //   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
// // //   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
// // //   "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
// // // ];

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
// // //   return (
// // //     item?.title ||
// // //     item?.project_name ||
// // //     item?.property_name ||
// // //     item?.name ||
// // //     ""
// // //   );
// // // }

// // // function getDeveloperName(item) {
// // //   return (
// // //     item?.developer_name ||
// // //     item?.developer ||
// // //     item?.builder_name ||
// // //     item?.builder ||
// // //     ""
// // //   );
// // // }

// // // function getLocationName(item) {
// // //   return item?.short_location || item?.location || item?.full_address || "";
// // // }

// // // export default function Hero({ onSearch = () => {}, projects = [] }) {
// // //   const router = useRouter();
// // //   const suggestionRef = useRef(null);

// // //   const [activeItem, setActiveItem] = useState("For sale");
// // //   const [searchText, setSearchText] = useState("");
// // //   const [showSuggestions, setShowSuggestions] = useState(false);
// // //   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

// // //   const [advancedFilters, setAdvancedFilters] = useState({
// // //     keyword: "",
// // //     city: "",
// // //     location: "",
// // //     propertyType: "",
// // //     propertyStatus: "",
// // //     bedrooms: "",
// // //     bathrooms: "",
// // //     amenities: [],
// // //     sortBy: "Newest",
// // //     priceRange: [0, 50000000],
// // //     areaRange: [0, 5000],
// // //   });

// // //   const [cities, setCities] = useState([]);
// // //   const [developers, setDevelopers] = useState([]);
// // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // //   const items = useMemo(() => ["For sale", "For rent"], []);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
// // //     }, 4000);

// // //     return () => clearInterval(interval);
// // //   }, []);

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
// // //         console.error("Hero search data fetch error:", error);
// // //         setCities([]);
// // //         setDevelopers([]);
// // //       }
// // //     };

// // //     loadSearchData();
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (
// // //         suggestionRef.current &&
// // //         !suggestionRef.current.contains(event.target)
// // //       ) {
// // //         setShowSuggestions(false);
// // //         setActiveSuggestionIndex(-1);
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

// // //   const findCityMatch = (searchValue) => {
// // //     const normalized = normalizeText(searchValue);
// // //     if (!normalized) return null;

// // //     const exactMatch = finalCities.find((item) => {
// // //       const cityName = normalizeText(item.city);
// // //       const citySlug = normalizeText(item.city_slug);
// // //       return cityName === normalized || citySlug === normalized;
// // //     });

// // //     if (exactMatch) return exactMatch;

// // //     const partialMatch = finalCities.find((item) => {
// // //       const cityName = normalizeText(item.city);
// // //       const citySlug = normalizeText(item.city_slug);
// // //       return cityName.includes(normalized) || citySlug.includes(normalized);
// // //     });

// // //     return partialMatch || null;
// // //   };

// // //   const findDeveloperMatch = (searchValue) => {
// // //     const normalized = normalizeText(searchValue);
// // //     if (!normalized) return null;

// // //     const exactMatch = finalDevelopers.find((item) => {
// // //       const developerName = normalizeText(item.developer_name);
// // //       const developerSlug = normalizeText(item.developer_slug);
// // //       return developerName === normalized || developerSlug === normalized;
// // //     });

// // //     if (exactMatch) return exactMatch;

// // //     const partialMatch = finalDevelopers.find((item) => {
// // //       const developerName = normalizeText(item.developer_name);
// // //       const developerSlug = normalizeText(item.developer_slug);
// // //       return (
// // //         developerName.includes(normalized) || developerSlug.includes(normalized)
// // //       );
// // //     });

// // //     return partialMatch || null;
// // //   };

// // //   const searchSuggestions = useMemo(() => {
// // //     const keyword = normalizeText(searchText);

// // //     if (!keyword || keyword.length < 1) return [];

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
// // //         [
// // //           title,
// // //           city,
// // //           location,
// // //           address,
// // //           developer,
// // //           propertyType,
// // //           propertyStatus,
// // //         ].join(" ")
// // //       );

// // //       if (!searchableText.includes(keyword)) return;

// // //       const mainLabel =
// // //         title || location || city || developer || propertyType || propertyStatus;

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
// // //           propertyType,
// // //           propertyStatus,
// // //         });
// // //       }
// // //     });

// // //     return Array.from(suggestionMap.values()).slice(0, 8);
// // //   }, [searchText, projects, finalCities, finalDevelopers]);

// // //   const closeSuggestions = () => {
// // //     setShowSuggestions(false);
// // //     setActiveSuggestionIndex(-1);
// // //   };

// // //   const handleSuggestionSelect = (suggestion) => {
// // //     const selectedValue = suggestion.value || "";

// // //     setSearchText(selectedValue);

// // //     const selectedFilters = {
// // //       ...advancedFilters,
// // //       keyword: selectedValue,
// // //       city: suggestion.type === "city" ? selectedValue : suggestion.city || advancedFilters.city,
// // //       location: suggestion.location || advancedFilters.location,
// // //       propertyType: suggestion.propertyType || advancedFilters.propertyType,
// // //       propertyStatus:
// // //         suggestion.propertyStatus ||
// // //         (activeItem === "For sale" ? "for-sale" : "for-rent"),
// // //     };

// // //     setAdvancedFilters(selectedFilters);
// // //     closeSuggestions();

// // //     if (suggestion.type === "city" && suggestion.slug) {
// // //       router.push(`/cities/${suggestion.slug}`);
// // //       return;
// // //     }

// // //     if (suggestion.type === "developer" && suggestion.slug) {
// // //       router.push(`/developers/${suggestion.slug}`);
// // //       return;
// // //     }

// // //     const cityMatch = findCityMatch(selectedValue);
// // //     if (cityMatch?.city_slug) {
// // //       router.push(`/cities/${cityMatch.city_slug}`);
// // //       return;
// // //     }

// // //     const developerMatch = findDeveloperMatch(selectedValue);
// // //     if (developerMatch?.developer_slug) {
// // //       router.push(`/developers/${developerMatch.developer_slug}`);
// // //       return;
// // //     }

// // //     onSearch(selectedFilters);
// // //   };

// // //   const handleSearch = (e) => {
// // //     if (e) e.preventDefault();

// // //     const mergedFilters = {
// // //       ...advancedFilters,
// // //       keyword: searchText.trim() || advancedFilters.keyword || "",
// // //       propertyStatus: activeItem === "For sale" ? "for-sale" : "for-rent",
// // //     };

// // //     const rawSearch = searchText.trim();

// // //     if (rawSearch) {
// // //       const cityMatch = findCityMatch(rawSearch);
// // //       if (cityMatch?.city_slug) {
// // //         router.push(`/cities/${cityMatch.city_slug}`);
// // //         return;
// // //       }

// // //       const developerMatch = findDeveloperMatch(rawSearch);
// // //       if (developerMatch?.developer_slug) {
// // //         router.push(`/developers/${developerMatch.developer_slug}`);
// // //         return;
// // //       }
// // //     }

// // //     if (mergedFilters.city) {
// // //       const cityMatch = findCityMatch(mergedFilters.city);
// // //       if (cityMatch?.city_slug) {
// // //         router.push(`/cities/${cityMatch.city_slug}`);
// // //         return;
// // //       }
// // //     }

// // //     onSearch(mergedFilters);
// // //     closeSuggestions();
// // //   };

// // //   const handleSearchKeyDown = (e) => {
// // //     if (e.key === "Enter") {
// // //       e.preventDefault();

// // //       if (
// // //         showSuggestions &&
// // //         activeSuggestionIndex >= 0 &&
// // //         searchSuggestions[activeSuggestionIndex]
// // //       ) {
// // //         handleSuggestionSelect(searchSuggestions[activeSuggestionIndex]);
// // //         return;
// // //       }

// // //       handleSearch(e);
// // //       return;
// // //     }

// // //     if (!showSuggestions || searchSuggestions.length === 0) return;

// // //     if (e.key === "ArrowDown") {
// // //       e.preventDefault();

// // //       setActiveSuggestionIndex((prev) =>
// // //         prev < searchSuggestions.length - 1 ? prev + 1 : 0
// // //       );
// // //     }

// // //     if (e.key === "ArrowUp") {
// // //       e.preventDefault();

// // //       setActiveSuggestionIndex((prev) =>
// // //         prev > 0 ? prev - 1 : searchSuggestions.length - 1
// // //       );
// // //     }

// // //     if (e.key === "Escape") {
// // //       closeSuggestions();
// // //     }
// // //   };

// // //   return (
// // //     <div className="page-title home01 hero-slider-wrap">
// // //       <div className="hero-bg-slider">
// // //         {HERO_IMAGES.map((image, index) => (
// // //           <div
// // //             key={image}
// // //             className={`hero-bg-slide ${
// // //               index === currentBgIndex ? "active" : ""
// // //             }`}
// // //             style={{ backgroundImage: `url('${image}')` }}
// // //           />
// // //         ))}
// // //       </div>

// // //       <div className="hero-overlay" />

// // //       <div className="tf-container">
// // //         <div className="row justify-center relative">
// // //           <div className="col-lg-8">
// // //             <div className="content-inner">
// // //               <div className="heading-title">
// // //                 <h1 className="title">GROWL REAL ESTATE</h1>
// // //                 <p className="h6 fw-4">
// // //                   Discover exclusive luxury projects, trusted by thousands of
// // //                   homebuyers every month.
// // //                 </p>
// // //               </div>

// // //               <div className="wg-filter">
// // //                 <div className="form-title">
// // //                   <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
// // //                     <div className="btn-select">
// // //                       <span className="text-sort-value">{activeItem}</span>
// // //                       <i className="icon-CaretDown" />
// // //                     </div>

// // //                     <div className="dropdown-menu">
// // //                       {items.map((item) => (
// // //                         <div
// // //                           key={item}
// // //                           className={`select-item ${
// // //                             activeItem === item ? "active" : ""
// // //                           }`}
// // //                           onClick={() => setActiveItem(item)}
// // //                         >
// // //                           <span className="text-value-item">{item}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>

// // //                   <form
// // //                     onSubmit={handleSearch}
// // //                     style={{ flex: 1 }}
// // //                     ref={suggestionRef}
// // //                   >
// // //                     <fieldset className="hero-search-fieldset">
// // //                       <input
// // //                         type="text"
// // //                         placeholder="Search city, developer, project, location..."
// // //                         value={searchText}
// // //                         autoComplete="off"
// // //                         onChange={(e) => {
// // //                           setSearchText(e.target.value);
// // //                           setShowSuggestions(true);
// // //                           setActiveSuggestionIndex(-1);
// // //                         }}
// // //                         onFocus={() => {
// // //                           if (searchText) setShowSuggestions(true);
// // //                         }}
// // //                         onKeyDown={handleSearchKeyDown}
// // //                       />

// // //                       {showSuggestions && searchText && (
// // //                         <div className="hero-search-suggestions">
// // //                           {searchSuggestions.length > 0 ? (
// // //                             searchSuggestions.map((suggestion, index) => (
// // //                               <button
// // //                                 type="button"
// // //                                 key={`${suggestion.type}-${suggestion.label}-${index}`}
// // //                                 className={`hero-suggestion-item ${
// // //                                   activeSuggestionIndex === index
// // //                                     ? "active"
// // //                                     : ""
// // //                                 }`}
// // //                                 onMouseDown={(e) => {
// // //                                   e.preventDefault();
// // //                                   handleSuggestionSelect(suggestion);
// // //                                 }}
// // //                                 onMouseEnter={() =>
// // //                                   setActiveSuggestionIndex(index)
// // //                                 }
// // //                               >
// // //                                 <span className="hero-suggestion-label">
// // //                                   {suggestion.label}
// // //                                 </span>

// // //                                 {suggestion.subLabel && (
// // //                                   <span className="hero-suggestion-sub">
// // //                                     {suggestion.subLabel}
// // //                                   </span>
// // //                                 )}
// // //                               </button>
// // //                             ))
// // //                           ) : (
// // //                             <div className="hero-no-suggestion">
// // //                               No matching result found
// // //                             </div>
// // //                           )}
// // //                         </div>
// // //                       )}
// // //                     </fieldset>
// // //                   </form>

// // //                   <div className="box-item wrap-btn">
// // //                     <div className="btn-filter show-form searchFormToggler">
// // //                       <div className="icons">
// // //                         <svg
// // //                           width={24}
// // //                           height={24}
// // //                           viewBox="0 0 24 24"
// // //                           fill="none"
// // //                           xmlns="http://www.w3.org/2000/svg"
// // //                         >
// // //                           <path d="M21 4H14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                           <path d="M10 4H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                           <path d="M21 12H12" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                           <path d="M8 12H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                           <path d="M21 20H16" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                           <path d="M12 20H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                           <path d="M14 2V6" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                           <path d="M8 10V14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                           <path d="M16 18V22" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                         </svg>
// // //                       </div>
// // //                     </div>

// // //                     <button
// // //                       type="button"
// // //                       onClick={handleSearch}
// // //                       className="tf-btn bg-color-primary pd-3"
// // //                     >
// // //                       Search <i className="icon-MagnifyingGlass fw-6" />
// // //                     </button>
// // //                   </div>
// // //                 </div>

// // //                 <SearchForm
// // //                   onFilterChange={setAdvancedFilters}
// // //                   projects={projects}
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         .hero-slider-wrap {
// // //           position: relative;
// // //           overflow: hidden;
// // //           min-height: 760px;
// // //           display: flex;
// // //           align-items: center;
// // //         }

// // //         .hero-bg-slider {
// // //           position: absolute;
// // //           inset: 0;
// // //           z-index: 0;
// // //         }

// // //         .hero-bg-slide {
// // //           position: absolute;
// // //           inset: 0;
// // //           background-size: cover;
// // //           background-position: center;
// // //           background-repeat: no-repeat;
// // //           opacity: 0;
// // //           transform: scale(1.05);
// // //           transition: opacity 1.2s ease, transform 5s ease;
// // //         }

// // //         .hero-bg-slide.active {
// // //           opacity: 1;
// // //           transform: scale(1);
// // //         }

// // //         .hero-overlay {
// // //           position: absolute;
// // //           inset: 0;
// // //           background: linear-gradient(
// // //             90deg,
// // //             rgba(11, 19, 32, 0.72) 0%,
// // //             rgba(15, 27, 45, 0.58) 45%,
// // //             rgba(17, 24, 39, 0.45) 100%
// // //           );
// // //           z-index: 1;
// // //         }

// // //         .tf-container {
// // //           position: relative;
// // //           z-index: 2;
// // //         }

// // //         .content-inner {
// // //           color: #fff;
// // //           transform: translateY(-75px);
// // //         }

// // //         .heading-title {
// // //           margin-bottom: 22px;
// // //         }

// // //         .heading-title .title {
// // //           color: #fff;
// // //         }

// // //         .heading-title p {
// // //           color: rgba(255, 255, 255, 0.9);
// // //         }

// // //         .wg-filter {
// // //           margin-top: 18px;
// // //           background: rgba(255, 255, 255, 0.12);
// // //           backdrop-filter: blur(14px);
// // //           -webkit-backdrop-filter: blur(14px);
// // //           border: 1px solid rgba(255, 255, 255, 0.18);
// // //           border-radius: 24px;
// // //           padding: 18px;
// // //         }

// // //         .form-title {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 12px;
// // //           flex-wrap: wrap;
// // //         }

// // //         .form-title form {
// // //           min-width: 280px;
// // //           position: relative;
// // //         }

// // //         .hero-search-fieldset {
// // //           position: relative;
// // //           margin: 0;
// // //           padding: 0;
// // //           border: 0;
// // //         }

// // //         .form-title input {
// // //           width: 100%;
// // //           min-height: 56px;
// // //           border-radius: 14px;
// // //           border: 1px solid rgba(255, 255, 255, 0.22);
// // //           background: rgba(255, 255, 255, 0.92);
// // //           color: #111827;
// // //           padding: 0 16px;
// // //         }

// // //         .hero-search-suggestions {
// // //           position: absolute;
// // //           top: calc(100% + 8px);
// // //           left: 0;
// // //           right: 0;
// // //           z-index: 99999;
// // //           background: #ffffff;
// // //           border: 1px solid #e5e7eb;
// // //           border-radius: 14px;
// // //           box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
// // //           overflow: hidden;
// // //           max-height: 330px;
// // //           overflow-y: auto;
// // //         }

// // //         .hero-suggestion-item {
// // //           width: 100%;
// // //           display: block;
// // //           text-align: left;
// // //           padding: 12px 16px;
// // //           border: 0;
// // //           border-bottom: 1px solid #f1f1f1;
// // //           background: #ffffff;
// // //           cursor: pointer;
// // //         }

// // //         .hero-suggestion-item:last-child {
// // //           border-bottom: 0;
// // //         }

// // //         .hero-suggestion-item:hover,
// // //         .hero-suggestion-item.active {
// // //           background: #f8fafc;
// // //         }

// // //         .hero-suggestion-label {
// // //           display: block;
// // //           font-size: 15px;
// // //           font-weight: 600;
// // //           color: #111827;
// // //           line-height: 1.3;
// // //         }

// // //         .hero-suggestion-sub {
// // //           display: block;
// // //           font-size: 13px;
// // //           font-weight: 400;
// // //           color: #6b7280;
// // //           margin-top: 3px;
// // //           line-height: 1.3;
// // //         }

// // //         .hero-no-suggestion {
// // //           padding: 14px 16px;
// // //           font-size: 14px;
// // //           color: #6b7280;
// // //           background: #ffffff;
// // //         }

// // //         .btn-select {
// // //           min-height: 56px;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: space-between;
// // //           gap: 10px;
// // //           padding: 0 16px;
// // //           border-radius: 14px;
// // //           background: rgba(255, 255, 255, 0.92);
// // //           color: #111827;
// // //           min-width: 150px;
// // //           cursor: pointer;
// // //         }

// // //         .wrap-btn {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 12px;
// // //         }

// // //         .btn-filter {
// // //           width: 56px;
// // //           height: 56px;
// // //           border-radius: 14px;
// // //           background: rgba(255, 255, 255, 0.92);
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           cursor: pointer;
// // //         }

// // //         @media (max-width: 991px) {
// // //           .hero-slider-wrap {
// // //             min-height: 720px;
// // //           }

// // //           .content-inner {
// // //             transform: translateY(-35px);
// // //           }

// // //           .form-title {
// // //             flex-direction: column;
// // //             align-items: stretch;
// // //           }

// // //           .wrap-btn {
// // //             width: 100%;
// // //             justify-content: space-between;
// // //           }

// // //           .form-title form {
// // //             width: 100%;
// // //           }
// // //         }

// // //         @media (max-width: 575px) {
// // //           .hero-slider-wrap {
// // //             min-height: 700px;
// // //           }

// // //           .content-inner {
// // //             transform: translateY(-20px);
// // //           }

// // //           .wg-filter {
// // //             padding: 14px;
// // //             border-radius: 20px;
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }





// // "use client";

// // import SearchForm from "@/components/common/SearchForm";
// // import React, { useEffect, useMemo, useRef, useState } from "react";
// // import { createPortal } from "react-dom";
// // import { useRouter } from "next/navigation";
// // import { apiGet } from "../../lib/api";

// // const HERO_IMAGES = [
// //   "https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1600&auto=format&fit=crop",
// //   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
// //   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
// //   "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
// // ];

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

// // export default function Hero({ onSearch = () => {}, projects = [] }) {
// //   const router = useRouter();

// //   const suggestionRef = useRef(null);
// //   const fixedSuggestionRef = useRef(null);

// //   const [mounted, setMounted] = useState(false);
// //   const [activeItem, setActiveItem] = useState("For sale");
// //   const [searchText, setSearchText] = useState("");
// //   const [showSuggestions, setShowSuggestions] = useState(false);
// //   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
// //   const [isSearchFixed, setIsSearchFixed] = useState(false);

// //   const [advancedFilters, setAdvancedFilters] = useState({
// //     keyword: "",
// //     city: "",
// //     location: "",
// //     propertyType: "",
// //     propertyStatus: "",
// //     bedrooms: "",
// //     bathrooms: "",
// //     amenities: [],
// //     sortBy: "Newest",
// //     priceRange: [0, 50000000],
// //     areaRange: [0, 5000],
// //   });

// //   const [cities, setCities] = useState([]);
// //   const [developers, setDevelopers] = useState([]);
// //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// //   // const items = useMemo(() => ["For sale", "For rent"], []);

// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
// //     }, 4000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsSearchFixed(window.scrollY > 210);
// //     };

// //     handleScroll();

// //     window.addEventListener("scroll", handleScroll, { passive: true });

// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

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
// //         console.error("Hero search data fetch error:", error);
// //         setCities([]);
// //         setDevelopers([]);
// //       }
// //     };

// //     loadSearchData();
// //   }, []);

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       const normalSearch = suggestionRef.current;
// //       const fixedSearch = fixedSuggestionRef.current;

// //       const clickedInsideNormal =
// //         normalSearch && normalSearch.contains(event.target);

// //       const clickedInsideFixed =
// //         fixedSearch && fixedSearch.contains(event.target);

// //       if (!clickedInsideNormal && !clickedInsideFixed) {
// //         setShowSuggestions(false);
// //         setActiveSuggestionIndex(-1);
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

// //   const findCityMatch = (searchValue) => {
// //     const normalized = normalizeText(searchValue);

// //     if (!normalized) return null;

// //     const exactMatch = finalCities.find((item) => {
// //       const cityName = normalizeText(item.city);
// //       const citySlug = normalizeText(item.city_slug);

// //       return cityName === normalized || citySlug === normalized;
// //     });

// //     if (exactMatch) return exactMatch;

// //     const partialMatch = finalCities.find((item) => {
// //       const cityName = normalizeText(item.city);
// //       const citySlug = normalizeText(item.city_slug);

// //       return cityName.includes(normalized) || citySlug.includes(normalized);
// //     });

// //     return partialMatch || null;
// //   };

// //   const findDeveloperMatch = (searchValue) => {
// //     const normalized = normalizeText(searchValue);

// //     if (!normalized) return null;

// //     const exactMatch = finalDevelopers.find((item) => {
// //       const developerName = normalizeText(item.developer_name);
// //       const developerSlug = normalizeText(item.developer_slug);

// //       return developerName === normalized || developerSlug === normalized;
// //     });

// //     if (exactMatch) return exactMatch;

// //     const partialMatch = finalDevelopers.find((item) => {
// //       const developerName = normalizeText(item.developer_name);
// //       const developerSlug = normalizeText(item.developer_slug);

// //       return (
// //         developerName.includes(normalized) || developerSlug.includes(normalized)
// //       );
// //     });

// //     return partialMatch || null;
// //   };

// //   const searchSuggestions = useMemo(() => {
// //     const keyword = normalizeText(searchText);

// //     if (!keyword || keyword.length < 1) return [];

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
// //           propertyType,
// //           propertyStatus,
// //         });
// //       }
// //     });

// //     return Array.from(suggestionMap.values()).slice(0, 8);
// //   }, [searchText, projects, finalCities, finalDevelopers]);

// //   const closeSuggestions = () => {
// //     setShowSuggestions(false);
// //     setActiveSuggestionIndex(-1);
// //   };

// //   const handleSuggestionSelect = (suggestion) => {
// //     const selectedValue = suggestion.value || "";

// //     setSearchText(selectedValue);

// //     const selectedFilters = {
// //       ...advancedFilters,
// //       keyword: selectedValue,
// //       city:
// //         suggestion.type === "city"
// //           ? selectedValue
// //           : suggestion.city || advancedFilters.city,
// //       location: suggestion.location || advancedFilters.location,
// //       propertyType: suggestion.propertyType || advancedFilters.propertyType,
// //       propertyStatus:
// //         suggestion.propertyStatus ||
// //         (activeItem === "For sale" ? "for-sale" : "for-rent"),
// //     };

// //     setAdvancedFilters(selectedFilters);
// //     closeSuggestions();

// //     if (suggestion.type === "city" && suggestion.slug) {
// //       router.push(`/cities/${suggestion.slug}`);
// //       return;
// //     }

// //     if (suggestion.type === "developer" && suggestion.slug) {
// //       router.push(`/developers/${suggestion.slug}`);
// //       return;
// //     }

// //     const cityMatch = findCityMatch(selectedValue);

// //     if (cityMatch?.city_slug) {
// //       router.push(`/cities/${cityMatch.city_slug}`);
// //       return;
// //     }

// //     const developerMatch = findDeveloperMatch(selectedValue);

// //     if (developerMatch?.developer_slug) {
// //       router.push(`/developers/${developerMatch.developer_slug}`);
// //       return;
// //     }

// //     onSearch(selectedFilters);
// //   };

// //   const handleSearch = (e) => {
// //     if (e) e.preventDefault();

// //     const mergedFilters = {
// //       ...advancedFilters,
// //       keyword: searchText.trim() || advancedFilters.keyword || "",
// //       propertyStatus: activeItem === "For sale" ? "for-sale" : "for-rent",
// //     };

// //     const rawSearch = searchText.trim();

// //     if (rawSearch) {
// //       const cityMatch = findCityMatch(rawSearch);

// //       if (cityMatch?.city_slug) {
// //         router.push(`/cities/${cityMatch.city_slug}`);
// //         return;
// //       }

// //       const developerMatch = findDeveloperMatch(rawSearch);

// //       if (developerMatch?.developer_slug) {
// //         router.push(`/developers/${developerMatch.developer_slug}`);
// //         return;
// //       }
// //     }

// //     if (mergedFilters.city) {
// //       const cityMatch = findCityMatch(mergedFilters.city);

// //       if (cityMatch?.city_slug) {
// //         router.push(`/cities/${cityMatch.city_slug}`);
// //         return;
// //       }
// //     }

// //     onSearch(mergedFilters);
// //     closeSuggestions();
// //   };

// //   const handleSearchKeyDown = (e) => {
// //     if (e.key === "Enter") {
// //       e.preventDefault();

// //       if (
// //         showSuggestions &&
// //         activeSuggestionIndex >= 0 &&
// //         searchSuggestions[activeSuggestionIndex]
// //       ) {
// //         handleSuggestionSelect(searchSuggestions[activeSuggestionIndex]);
// //         return;
// //       }

// //       handleSearch(e);
// //       return;
// //     }

// //     if (!showSuggestions || searchSuggestions.length === 0) return;

// //     if (e.key === "ArrowDown") {
// //       e.preventDefault();

// //       setActiveSuggestionIndex((prev) =>
// //         prev < searchSuggestions.length - 1 ? prev + 1 : 0
// //       );
// //     }

// //     if (e.key === "ArrowUp") {
// //       e.preventDefault();

// //       setActiveSuggestionIndex((prev) =>
// //         prev > 0 ? prev - 1 : searchSuggestions.length - 1
// //       );
// //     }

// //     if (e.key === "Escape") {
// //       closeSuggestions();
// //     }
// //   };

// //   const renderSearchFilter = ({ fixed = false } = {}) => {
// //     return (
// //       <div className={`wg-filter ${fixed ? "wg-filter-fixed" : ""}`}>
// //         <div className="form-title">
// //           {/* <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
// //             <div className="btn-select">
// //               <span className="text-sort-value">{activeItem}</span>
// //               <i className="icon-CaretDown" />
// //             </div>

// //             <div className="dropdown-menu">
// //               {items.map((item) => (
// //                 <div
// //                   key={item}
// //                   className={`select-item ${
// //                     activeItem === item ? "active" : ""
// //                   }`}
// //                   onClick={() => setActiveItem(item)}
// //                 >
// //                   <span className="text-value-item">{item}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div> */}

// //           <form
// //             onSubmit={handleSearch}
// //             className="hero-search-form"
// //             ref={fixed ? fixedSuggestionRef : suggestionRef}
// //           >
// //             <fieldset className="hero-search-fieldset">
// //               <input
// //                 type="text"
// //                 placeholder="Search city, developer, project, location..."
// //                 value={searchText}
// //                 autoComplete="off"
// //                 onChange={(e) => {
// //                   setSearchText(e.target.value);
// //                   setShowSuggestions(true);
// //                   setActiveSuggestionIndex(-1);
// //                 }}
// //                 onFocus={() => {
// //                   if (searchText) setShowSuggestions(true);
// //                 }}
// //                 onKeyDown={handleSearchKeyDown}
// //               />

// //               {showSuggestions && searchText && (
// //                 <div className="hero-search-suggestions">
// //                   {searchSuggestions.length > 0 ? (
// //                     searchSuggestions.map((suggestion, index) => (
// //                       <button
// //                         type="button"
// //                         key={`${suggestion.type}-${suggestion.label}-${index}`}
// //                         className={`hero-suggestion-item ${
// //                           activeSuggestionIndex === index ? "active" : ""
// //                         }`}
// //                         onMouseDown={(e) => {
// //                           e.preventDefault();
// //                           handleSuggestionSelect(suggestion);
// //                         }}
// //                         onMouseEnter={() => setActiveSuggestionIndex(index)}
// //                       >
// //                         <span className="hero-suggestion-label">
// //                           {suggestion.label}
// //                         </span>

// //                         {suggestion.subLabel && (
// //                           <span className="hero-suggestion-sub">
// //                             {suggestion.subLabel}
// //                           </span>
// //                         )}
// //                       </button>
// //                     ))
// //                   ) : (
// //                     <div className="hero-no-suggestion">
// //                       No matching result found
// //                     </div>
// //                   )}
// //                 </div>
// //               )}
// //             </fieldset>
// //           </form>

// //           <div className="box-item wrap-btn">
// //             <div className="btn-filter show-form searchFormToggler">
// //               <div className="icons">
// //                 <svg
// //                   width={24}
// //                   height={24}
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   <path
// //                     d="M21 4H14"
// //                     stroke="#F1913D"
// //                     strokeWidth={2}
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                   <path
// //                     d="M10 4H3"
// //                     stroke="#F1913D"
// //                     strokeWidth={2}
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                   <path
// //                     d="M21 12H12"
// //                     stroke="#F1913D"
// //                     strokeWidth={2}
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                   <path
// //                     d="M8 12H3"
// //                     stroke="#F1913D"
// //                     strokeWidth={2}
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                   <path
// //                     d="M21 20H16"
// //                     stroke="#F1913D"
// //                     strokeWidth={2}
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                   <path
// //                     d="M12 20H3"
// //                     stroke="#F1913D"
// //                     strokeWidth={2}
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                   <path
// //                     d="M14 2V6"
// //                     stroke="#F1913D"
// //                     strokeWidth={2}
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                   <path
// //                     d="M8 10V14"
// //                     stroke="#F1913D"
// //                     strokeWidth={2}
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                   <path
// //                     d="M16 18V22"
// //                     stroke="#F1913D"
// //                     strokeWidth={2}
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                 </svg>
// //               </div>
// //             </div>

// //             <button
// //               type="button"
// //               onClick={handleSearch}
// //               className="tf-btn bg-color-primary pd-3"
// //             >
// //               Search <i className="icon-MagnifyingGlass fw-6" />
// //             </button>
// //           </div>
// //         </div>

// //         <SearchForm onFilterChange={setAdvancedFilters} projects={projects} />
// //       </div>
// //     );
// //   };

// //   return (
// //     <>
// //       <div className="page-title home01 hero-slider-wrap">
// //         <div className="hero-bg-slider">
// //           {HERO_IMAGES.map((image, index) => (
// //             <div
// //               key={`${image}-${index}`}
// //               className={`hero-bg-slide ${
// //                 index === currentBgIndex ? "active" : ""
// //               }`}
// //               style={{ backgroundImage: `url('${image}')` }}
// //             />
// //           ))}
// //         </div>

// //         <div className="hero-overlay" />

// //         <div className="tf-container hero-main-container">
// //           <div className="row justify-center relative">
// //             <div className="col-lg-10 col-xl-10">
// //               <div className="content-inner">
// //                 <div className="heading-title">
// //                   <h1 className="title">GROWL REAL ESTATE</h1>
// //                   <p className="h6 fw-4">
// //                     Discover exclusive luxury projects, trusted by thousands of
// //                     homebuyers every month.
// //                   </p>
// //                 </div>

// //                 <div className="hero-search-normal-wrap">
// //                   {renderSearchFilter({ fixed: false })}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <style jsx global>{`
// //           .hero-slider-wrap {
// //             position: relative;
// //             overflow: hidden;
// //             min-height: 430px;
// //             height: 54vh;
// //             max-height: 500px;
// //             display: flex;
// //             align-items: center;
// //           }

// //           .hero-bg-slider {
// //             position: absolute;
// //             inset: 0;
// //             z-index: 0;
// //             overflow: hidden;
// //           }

// //           .hero-bg-slide {
// //             position: absolute;
// //             inset: 0;
// //             background-size: cover;
// //             background-position: center;
// //             background-repeat: no-repeat;
// //             opacity: 0;
// //             transform: scale(1.05);
// //             transition: opacity 1.2s ease, transform 5s ease;
// //           }

// //           .hero-bg-slide.active {
// //             opacity: 1;
// //             transform: scale(1);
// //           }

// //           .hero-overlay {
// //             position: absolute;
// //             inset: 0;
// //             background: linear-gradient(
// //               90deg,
// //               rgba(11, 19, 32, 0.72) 0%,
// //               rgba(15, 27, 45, 0.58) 45%,
// //               rgba(17, 24, 39, 0.45) 100%
// //             );
// //             z-index: 1;
// //           }

// //           .hero-main-container {
// //             position: relative;
// //             z-index: 2;
// //             width: 100%;
// //           }

// //           .content-inner {
// //             color: #fff;
// //             text-align: center;
// //             transform: translateY(0);
// //           }

// //           .heading-title {
// //             margin-bottom: 14px;
// //             text-align: center;
// //           }

// //           .heading-title .title {
// //             color: #fff;
// //             font-size: 40px;
// //             line-height: 1.1;
// //             margin-bottom: 8px;
// //             text-align: center;
// //           }

// //           .heading-title p {
// //             color: rgba(255, 255, 255, 0.9);
// //             font-size: 15px;
// //             line-height: 1.45;
// //             max-width: 680px;
// //             margin-left: auto;
// //             margin-right: auto;
// //             text-align: center;
// //           }

// //           .hero-search-normal-wrap {
// //             width: 100%;
// //             display: flex;
// //             justify-content: center;
// //           }

// //           .wg-filter {
// //             width: 100%;
// //             max-width: 1120px;
// //             margin: 12px auto 0;
// //             background: rgba(255, 255, 255, 0.12);
// //             backdrop-filter: blur(14px);
// //             -webkit-backdrop-filter: blur(14px);
// //             border: 1px solid rgba(255, 255, 255, 0.18);
// //             border-radius: 22px;
// //             padding: 15px;
// //           }

// //           .form-title {
// //             display: flex;
// //             align-items: center;
// //             gap: 12px;
// //             flex-wrap: nowrap;
// //             width: 100%;
// //           }

// //           .tf-dropdown-sort {
// //             flex: 0 0 150px;
// //           }

// //           .hero-search-form {
// //             flex: 1 1 auto;
// //             min-width: 360px;
// //             position: relative;
// //           }

// //           .hero-search-fieldset {
// //             position: relative;
// //             margin: 0;
// //             padding: 0;
// //             border: 0;
// //           }

// //           .form-title input {
// //             width: 100%;
// //             min-height: 56px;
// //             border-radius: 14px;
// //             border: 1px solid rgba(255, 255, 255, 0.22);
// //             background: rgba(255, 255, 255, 0.94);
// //             color: #111827;
// //             padding: 0 16px;
// //             outline: none;
// //           }

// //           .form-title input:focus {
// //             border-color: rgba(241, 145, 61, 0.9);
// //             box-shadow: 0 0 0 4px rgba(241, 145, 61, 0.12);
// //           }

// //           .btn-select {
// //             min-height: 56px;
// //             display: flex;
// //             align-items: center;
// //             justify-content: space-between;
// //             gap: 10px;
// //             padding: 0 16px;
// //             border-radius: 14px;
// //             background: rgba(255, 255, 255, 0.94);
// //             color: #111827;
// //             width: 100%;
// //             cursor: pointer;
// //           }

// //           .wrap-btn {
// //             display: flex;
// //             align-items: center;
// //             gap: 12px;
// //             flex-shrink: 0;
// //           }

// //           .btn-filter {
// //             width: 56px;
// //             height: 56px;
// //             border-radius: 14px;
// //             background: rgba(255, 255, 255, 0.94);
// //             display: flex;
// //             align-items: center;
// //             justify-content: center;
// //             cursor: pointer;
// //           }

// //           .wrap-btn .tf-btn {
// //             min-height: 56px;
// //             white-space: nowrap;
// //             padding-left: 26px;
// //             padding-right: 26px;
// //           }

// //           .hero-search-suggestions {
// //             position: absolute;
// //             top: calc(100% + 8px);
// //             left: 0;
// //             right: 0;
// //             z-index: 2147483647;
// //             background: #ffffff;
// //             border: 1px solid #e5e7eb;
// //             border-radius: 14px;
// //             box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
// //             overflow: hidden;
// //             max-height: 330px;
// //             overflow-y: auto;
// //             text-align: left;
// //           }

// //           .hero-suggestion-item {
// //             width: 100%;
// //             display: block;
// //             text-align: left;
// //             padding: 12px 16px;
// //             border: 0;
// //             border-bottom: 1px solid #f1f1f1;
// //             background: #ffffff;
// //             cursor: pointer;
// //           }

// //           .hero-suggestion-item:last-child {
// //             border-bottom: 0;
// //           }

// //           .hero-suggestion-item:hover,
// //           .hero-suggestion-item.active {
// //             background: #f8fafc;
// //           }

// //           .hero-suggestion-label {
// //             display: block;
// //             font-size: 15px;
// //             font-weight: 600;
// //             color: #111827;
// //             line-height: 1.3;
// //           }

// //           .hero-suggestion-sub {
// //             display: block;
// //             font-size: 13px;
// //             font-weight: 400;
// //             color: #6b7280;
// //             margin-top: 3px;
// //             line-height: 1.3;
// //           }

// //           .hero-no-suggestion {
// //             padding: 14px 16px;
// //             font-size: 14px;
// //             color: #6b7280;
// //             background: #ffffff;
// //             text-align: left;
// //           }

// //           .hero-fixed-search-portal {
// //             position: fixed;
// //             top: 86px;
// //             left: 0;
// //             width: 100%;
// //             z-index: 2147483000;
// //             padding: 0 20px;
// //             pointer-events: none;
// //           }

// //           .hero-fixed-search-inner {
// //             width: 100%;
// //             max-width: 1120px;
// //             margin: 0 auto;
// //             pointer-events: auto;
// //           }

// //           .hero-fixed-search-inner .wg-filter {
// //             margin: 0;
// //             background: rgba(11, 19, 32, 0.96);
// //             border: 1px solid rgba(255, 255, 255, 0.18);
// //             box-shadow: 0 20px 60px rgba(0, 0, 0, 0.32);
// //             padding: 14px;
// //             border-radius: 22px;
// //             max-width: 1120px;
// //           }

// //           .hero-fixed-search-inner .form-title input,
// //           .hero-fixed-search-inner .btn-select,
// //           .hero-fixed-search-inner .btn-filter,
// //           .hero-fixed-search-inner .wrap-btn .tf-btn {
// //             min-height: 52px;
// //           }

// //           .hero-fixed-search-inner .btn-filter {
// //             width: 52px;
// //             height: 52px;
// //           }

// //           @media (max-width: 1199px) {
// //             .wg-filter {
// //               max-width: 980px;
// //             }

// //             .hero-fixed-search-inner {
// //               max-width: 980px;
// //             }

// //             .hero-fixed-search-inner .wg-filter {
// //               max-width: 980px;
// //             }

// //             .hero-search-form {
// //               min-width: 300px;
// //             }
// //           }

// //           @media (max-width: 991px) {
// //             .hero-slider-wrap {
// //               min-height: 460px;
// //               height: auto;
// //               max-height: none;
// //               padding: 24px 0 28px;
// //               align-items: center;
// //             }

// //             .content-inner {
// //               transform: translateY(0);
// //               text-align: center;
// //             }

// //             .heading-title {
// //               margin-bottom: 14px;
// //               padding: 0 12px;
// //             }

// //             .heading-title .title {
// //               font-size: 28px;
// //               line-height: 1.12;
// //               text-align: center;
// //               margin-bottom: 8px;
// //             }

// //             .heading-title p {
// //               font-size: 14px;
// //               line-height: 1.5;
// //               max-width: 320px;
// //               text-align: center;
// //             }

// //             .wg-filter {
// //               width: calc(100% - 28px);
// //               max-width: 420px;
// //               margin: 12px auto 0;
// //               padding: 14px;
// //               border-radius: 18px;
// //               background: rgba(255, 255, 255, 0.16);
// //             }

// //             .form-title {
// //               flex-direction: column;
// //               align-items: stretch;
// //               gap: 12px;
// //             }

// //             .tf-dropdown-sort {
// //               flex: unset;
// //               width: 100%;
// //             }

// //             .btn-select {
// //               min-height: 48px;
// //               justify-content: center;
// //               position: relative;
// //               font-weight: 700;
// //               background: #ffffff;
// //             }

// //             .btn-select i {
// //               position: absolute;
// //               right: 18px;
// //             }

// //             .hero-search-form {
// //               width: 100%;
// //               min-width: 100%;
// //             }

// //             .form-title input {
// //               min-height: 48px;
// //               text-align: left;
// //               background: #ffffff;
// //               border-radius: 14px;
// //               font-size: 14px;
// //             }

// //             .wrap-btn {
// //               width: 100%;
// //               display: grid;
// //               grid-template-columns: 48px 1fr;
// //               gap: 10px;
// //             }

// //             .btn-filter {
// //               width: 48px;
// //               height: 48px;
// //               min-height: 48px;
// //               border-radius: 14px;
// //               background: #fff4e9;
// //             }

// //             .wrap-btn .tf-btn {
// //               width: 100%;
// //               min-height: 48px;
// //               border-radius: 14px;
// //               justify-content: center;
// //               padding-left: 16px;
// //               padding-right: 16px;
// //               background: #2f3239;
// //             }

// //             .hero-search-suggestions {
// //               max-height: 230px;
// //             }

// //             .hero-fixed-search-portal {
// //               top: 70px;
// //               padding: 0 10px;
// //             }

// //             .hero-fixed-search-inner {
// //               max-width: 420px;
// //             }

// //             .hero-fixed-search-inner .wg-filter {
// //               width: 100%;
// //               max-width: 420px;
// //               padding: 12px;
// //               border-radius: 18px;
// //               max-height: calc(100vh - 84px);
// //               overflow-y: auto;
// //             }

// //             .hero-fixed-search-inner .form-title {
// //               gap: 10px;
// //             }

// //             .hero-fixed-search-inner .form-title input,
// //             .hero-fixed-search-inner .btn-select,
// //             .hero-fixed-search-inner .wrap-btn .tf-btn {
// //               min-height: 46px;
// //             }

// //             .hero-fixed-search-inner .btn-filter {
// //               width: 46px;
// //               height: 46px;
// //               min-height: 46px;
// //             }
// //           }

// //           @media (max-width: 575px) {
// //             .hero-slider-wrap {
// //               min-height: 430px;
// //               padding: 20px 0 26px;
// //             }

// //             .heading-title {
// //               margin-bottom: 12px;
// //             }

// //             .heading-title .title {
// //               font-size: 23px;
// //               line-height: 1.15;
// //               margin-bottom: 7px;
// //             }

// //             .heading-title p {
// //               font-size: 12.5px;
// //               line-height: 1.55;
// //               max-width: 300px;
// //             }

// //             .wg-filter {
// //               width: calc(100% - 36px);
// //               max-width: 340px;
// //               padding: 12px;
// //               border-radius: 18px;
// //             }

// //             .btn-select {
// //               min-height: 46px;
// //               font-size: 15px;
// //             }

// //             .form-title input {
// //               min-height: 46px;
// //               font-size: 13px;
// //               padding: 0 14px;
// //             }

// //             .wrap-btn {
// //               grid-template-columns: 46px 1fr;
// //               gap: 9px;
// //             }

// //             .btn-filter {
// //               width: 46px;
// //               height: 46px;
// //               min-height: 46px;
// //             }

// //             .wrap-btn .tf-btn {
// //               min-height: 46px;
// //               font-size: 14px;
// //             }

// //             .hero-fixed-search-portal {
// //               top: 64px;
// //               padding: 0 8px;
// //             }

// //             .hero-fixed-search-inner {
// //               max-width: 340px;
// //             }

// //             .hero-fixed-search-inner .wg-filter {
// //               max-width: 340px;
// //               padding: 10px;
// //             }
// //           }

// //           @media (max-width: 380px) {
// //             .hero-slider-wrap {
// //               min-height: 420px;
// //             }

// //             .heading-title .title {
// //               font-size: 22px;
// //             }

// //             .heading-title p {
// //               font-size: 12px;
// //             }

// //             .wg-filter {
// //               width: calc(100% - 28px);
// //               max-width: 330px;
// //             }
// //           }
// //         `}</style>
// //       </div>

// //       {mounted &&
// //         isSearchFixed &&
// //         createPortal(
// //           <div className="hero-fixed-search-portal">
// //             <div className="hero-fixed-search-inner">
// //               {renderSearchFilter({ fixed: true })}
// //             </div>
// //           </div>,
// //           document.body
// //         )}
// //     </>
// //   );
// // }

// "use client";

// import SearchForm from "@/components/common/SearchForm";
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { createPortal } from "react-dom";
// import { useRouter } from "next/navigation";
// import { apiGet } from "../../lib/api";

// const HERO_IMAGES = [
//   "https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1600&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
// ];

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

// export default function Hero({ onSearch = () => {}, projects = [] }) {
//   const router = useRouter();

//   const suggestionRef = useRef(null);
//   const fixedSuggestionRef = useRef(null);

//   const [mounted, setMounted] = useState(false);
//   const [activeItem, setActiveItem] = useState("For sale");
//   const [searchText, setSearchText] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
//   const [isSearchFixed, setIsSearchFixed] = useState(false);

//   const [advancedFilters, setAdvancedFilters] = useState({
//     keyword: "",
//     city: "",
//     location: "",
//     propertyType: "",
//     propertyStatus: "",
//     bedrooms: "",
//     bathrooms: "",
//     amenities: [],
//     sortBy: "Newest",
//     priceRange: [0, 50000000],
//     areaRange: [0, 5000],
//   });

//   const [cities, setCities] = useState([]);
//   const [developers, setDevelopers] = useState([]);
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSearchFixed(window.scrollY > 210);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

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
//         console.error("Hero search data fetch error:", error);
//         setCities([]);
//         setDevelopers([]);
//       }
//     };

//     loadSearchData();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const normalSearch = suggestionRef.current;
//       const fixedSearch = fixedSuggestionRef.current;

//       const clickedInsideNormal =
//         normalSearch && normalSearch.contains(event.target);

//       const clickedInsideFixed =
//         fixedSearch && fixedSearch.contains(event.target);

//       if (!clickedInsideNormal && !clickedInsideFixed) {
//         setShowSuggestions(false);
//         setActiveSuggestionIndex(-1);
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
//           propertyType,
//           propertyStatus,
//         });
//       }
//     });

//     return Array.from(suggestionMap.values()).slice(0, 8);
//   }, [searchText, projects, finalCities, finalDevelopers]);

//   const closeSuggestions = () => {
//     setShowSuggestions(false);
//     setActiveSuggestionIndex(-1);
//   };

//   const handleSuggestionSelect = (suggestion) => {
//     const selectedValue = suggestion.value || "";

//     setSearchText(selectedValue);

//     const selectedFilters = {
//       ...advancedFilters,
//       keyword: selectedValue,
//       city:
//         suggestion.type === "city"
//           ? selectedValue
//           : suggestion.city || advancedFilters.city,
//       location: suggestion.location || advancedFilters.location,
//       propertyType: suggestion.propertyType || advancedFilters.propertyType,
//       propertyStatus:
//         suggestion.propertyStatus ||
//         (activeItem === "For sale" ? "for-sale" : "for-rent"),
//     };

//     setAdvancedFilters(selectedFilters);
//     closeSuggestions();

//     if (suggestion.type === "city" && suggestion.slug) {
//       router.push(`/cities/${suggestion.slug}`);
//       return;
//     }

//     if (suggestion.type === "developer" && suggestion.slug) {
//       router.push(`/developers/${suggestion.slug}`);
//       return;
//     }

//     const cityMatch = findCityMatch(selectedValue);

//     if (cityMatch?.city_slug) {
//       router.push(`/cities/${cityMatch.city_slug}`);
//       return;
//     }

//     const developerMatch = findDeveloperMatch(selectedValue);

//     if (developerMatch?.developer_slug) {
//       router.push(`/developers/${developerMatch.developer_slug}`);
//       return;
//     }

//     onSearch(selectedFilters);
//   };

//   const handleSearch = (e) => {
//     if (e) e.preventDefault();

//     const mergedFilters = {
//       ...advancedFilters,
//       keyword: searchText.trim() || advancedFilters.keyword || "",
//       propertyStatus: activeItem === "For sale" ? "for-sale" : "for-rent",
//     };

//     const rawSearch = searchText.trim();

//     if (rawSearch) {
//       const cityMatch = findCityMatch(rawSearch);

//       if (cityMatch?.city_slug) {
//         router.push(`/cities/${cityMatch.city_slug}`);
//         return;
//       }

//       const developerMatch = findDeveloperMatch(rawSearch);

//       if (developerMatch?.developer_slug) {
//         router.push(`/developers/${developerMatch.developer_slug}`);
//         return;
//       }
//     }

//     if (mergedFilters.city) {
//       const cityMatch = findCityMatch(mergedFilters.city);

//       if (cityMatch?.city_slug) {
//         router.push(`/cities/${cityMatch.city_slug}`);
//         return;
//       }
//     }

//     onSearch(mergedFilters);
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

//   const renderSearchFilter = ({ fixed = false } = {}) => {
//     return (
//       <div className={`wg-filter ${fixed ? "wg-filter-fixed" : ""}`}>
//         <div className="form-title">
//           <form
//             onSubmit={handleSearch}
//             className="hero-search-form"
//             ref={fixed ? fixedSuggestionRef : suggestionRef}
//           >
//             <fieldset className="hero-search-fieldset">
//               <input
//                 type="text"
//                 placeholder="Search city, developer, project, location..."
//                 value={searchText}
//                 autoComplete="off"
//                 onChange={(e) => {
//                   setSearchText(e.target.value);
//                   setShowSuggestions(true);
//                   setActiveSuggestionIndex(-1);
//                 }}
//                 onFocus={() => {
//                   if (searchText) setShowSuggestions(true);
//                 }}
//                 onKeyDown={handleSearchKeyDown}
//               />

//               {showSuggestions && searchText && (
//                 <div className="hero-search-suggestions">
//                   {searchSuggestions.length > 0 ? (
//                     searchSuggestions.map((suggestion, index) => (
//                       <button
//                         type="button"
//                         key={`${suggestion.type}-${suggestion.label}-${index}`}
//                         className={`hero-suggestion-item ${
//                           activeSuggestionIndex === index ? "active" : ""
//                         }`}
//                         onMouseDown={(e) => {
//                           e.preventDefault();
//                           handleSuggestionSelect(suggestion);
//                         }}
//                         onMouseEnter={() => setActiveSuggestionIndex(index)}
//                       >
//                         <span className="hero-suggestion-label">
//                           {suggestion.label}
//                         </span>

//                         {suggestion.subLabel && (
//                           <span className="hero-suggestion-sub">
//                             {suggestion.subLabel}
//                           </span>
//                         )}
//                       </button>
//                     ))
//                   ) : (
//                     <div className="hero-no-suggestion">
//                       No matching result found
//                     </div>
//                   )}
//                 </div>
//               )}
//             </fieldset>
//           </form>

//           <div className="box-item wrap-btn">
//             <div className="btn-filter show-form searchFormToggler">
//               <div className="icons">
//                 <svg
//                   width={24}
//                   height={24}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M21 4H14"
//                     stroke="#F1913D"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M10 4H3"
//                     stroke="#F1913D"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M21 12H12"
//                     stroke="#F1913D"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M8 12H3"
//                     stroke="#F1913D"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M21 20H16"
//                     stroke="#F1913D"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M12 20H3"
//                     stroke="#F1913D"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M14 2V6"
//                     stroke="#F1913D"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M8 10V14"
//                     stroke="#F1913D"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M16 18V22"
//                     stroke="#F1913D"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={handleSearch}
//               className="tf-btn bg-color-primary pd-3"
//             >
//               Search <i className="icon-MagnifyingGlass fw-6" />
//             </button>
//           </div>
//         </div>

//         <SearchForm onFilterChange={setAdvancedFilters} projects={projects} />
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="page-title home01 hero-slider-wrap">
//         <div className="hero-bg-slider">
//           {HERO_IMAGES.map((image, index) => (
//             <div
//               key={`${image}-${index}`}
//               className={`hero-bg-slide ${
//                 index === currentBgIndex ? "active" : ""
//               }`}
//               style={{ backgroundImage: `url('${image}')` }}
//             />
//           ))}
//         </div>

//         <div className="hero-overlay" />

//         <div className="tf-container hero-main-container">
//           <div className="row justify-center relative">
//             <div className="col-lg-10 col-xl-10">
//               <div className="content-inner">
//                 <div className="heading-title">
//                   <h1 className="title">GROWL REAL ESTATE</h1>
//                   <p className="h6 fw-4">
//                     Discover exclusive luxury projects, trusted by thousands of
//                     homebuyers every month.
//                   </p>
//                 </div>

//                 <div className="hero-search-normal-wrap">
//                   {renderSearchFilter({ fixed: false })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <style jsx global>{`
//           .hero-slider-wrap {
//             position: relative;
//             overflow: hidden;
//             min-height: 430px;
//             height: 54vh;
//             max-height: 500px;
//             display: flex;
//             align-items: center;
//           }

//           .hero-bg-slider {
//             position: absolute;
//             inset: 0;
//             z-index: 0;
//             overflow: hidden;
//           }

//           .hero-bg-slide {
//             position: absolute;
//             inset: 0;
//             background-size: cover;
//             background-position: center;
//             background-repeat: no-repeat;
//             opacity: 0;
//             transform: scale(1.05);
//             transition: opacity 1.2s ease, transform 5s ease;
//           }

//           .hero-bg-slide.active {
//             opacity: 1;
//             transform: scale(1);
//           }

//           .hero-overlay {
//             position: absolute;
//             inset: 0;
//             background: linear-gradient(
//               90deg,
//               rgba(11, 19, 32, 0.68) 0%,
//               rgba(15, 27, 45, 0.52) 45%,
//               rgba(17, 24, 39, 0.38) 100%
//             );
//             z-index: 1;
//           }

//           .hero-main-container {
//             position: relative;
//             z-index: 2;
//             width: 100%;
//           }

//           .content-inner {
//             color: #fff;
//             text-align: center;
//             transform: translateY(0);
//           }

//           .heading-title {
//             margin-bottom: 14px;
//             text-align: center;
//           }

//           .heading-title .title {
//             color: #fff;
//             font-size: 40px;
//             line-height: 1.1;
//             margin-bottom: 8px;
//             text-align: center;
//           }

//           .heading-title p {
//             color: rgba(255, 255, 255, 0.9);
//             font-size: 15px;
//             line-height: 1.45;
//             max-width: 680px;
//             margin-left: auto;
//             margin-right: auto;
//             text-align: center;
//           }

//           .hero-search-normal-wrap {
//             width: 100%;
//             display: flex;
//             justify-content: center;
//           }

//           .wg-filter {
//             width: 100%;
//             max-width: 1120px;
//             margin: 12px auto 0;
//             background: rgba(11, 19, 32, 0.22);
//             backdrop-filter: blur(5px);
//             -webkit-backdrop-filter: blur(5px);
//             border: 0;
//             border-radius: 22px;
//             padding: 8px;
//             box-shadow: 0 3px 8px rgba(0, 0, 0, 0.035);
//           }

//           .form-title {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//             flex-wrap: nowrap;
//             width: 100%;
//           }

//           .tf-dropdown-sort {
//             flex: 0 0 150px;
//           }

//           .hero-search-form {
//             flex: 1 1 auto;
//             min-width: 360px;
//             position: relative;
//           }

//           .hero-search-fieldset {
//             position: relative;
//             margin: 0;
//             padding: 0;
//             border: 0;
//           }

//           .form-title input {
//             width: 100%;
//             min-height: 56px;
//             border-radius: 14px;
//             border: 1px solid rgba(17, 24, 39, 0.05);
//             background: rgba(255, 255, 255, 0.98);
//             color: #111827;
//             padding: 0 16px;
//             outline: none;
//             box-shadow: none;
//           }

//           .form-title input:focus {
//             border-color: rgba(241, 145, 61, 0.22);
//             box-shadow: 0 0 0 1px rgba(241, 145, 61, 0.04);
//           }

//           .btn-select {
//             min-height: 56px;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             gap: 10px;
//             padding: 0 16px;
//             border-radius: 14px;
//             background: rgba(255, 255, 255, 0.98);
//             color: #111827;
//             width: 100%;
//             cursor: pointer;
//             border: 1px solid rgba(17, 24, 39, 0.05);
//           }

//           .wrap-btn {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//             flex-shrink: 0;
//           }

//           .btn-filter {
//             width: 68px;
//             height: 56px;
//             border-radius: 14px;
//             background: #fff4e9;
//             border: 1px solid rgba(241, 145, 61, 0.13);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             cursor: pointer;
//           }

//           .wrap-btn .tf-btn {
//             min-height: 56px;
//             white-space: nowrap;
//             padding-left: 26px;
//             padding-right: 26px;
//             border-radius: 14px;
//           }

//           .hero-search-suggestions {
//             position: absolute;
//             top: calc(100% + 8px);
//             left: 0;
//             right: 0;
//             z-index: 2147483647;
//             background: #ffffff;
//             border: 1px solid #e5e7eb;
//             border-radius: 14px;
//             box-shadow: 0 14px 34px rgba(0, 0, 0, 0.10);
//             overflow: hidden;
//             max-height: 330px;
//             overflow-y: auto;
//             text-align: left;
//           }

//           .hero-suggestion-item {
//             width: 100%;
//             display: block;
//             text-align: left;
//             padding: 12px 16px;
//             border: 0;
//             border-bottom: 1px solid #f1f1f1;
//             background: #ffffff;
//             cursor: pointer;
//           }

//           .hero-suggestion-item:last-child {
//             border-bottom: 0;
//           }

//           .hero-suggestion-item:hover,
//           .hero-suggestion-item.active {
//             background: #f8fafc;
//           }

//           .hero-suggestion-label {
//             display: block;
//             font-size: 15px;
//             font-weight: 600;
//             color: #111827;
//             line-height: 1.3;
//           }

//           .hero-suggestion-sub {
//             display: block;
//             font-size: 13px;
//             font-weight: 400;
//             color: #6b7280;
//             margin-top: 3px;
//             line-height: 1.3;
//           }

//           .hero-no-suggestion {
//             padding: 14px 16px;
//             font-size: 14px;
//             color: #6b7280;
//             background: #ffffff;
//             text-align: left;
//           }

//           .hero-fixed-search-portal {
//             position: fixed;
//             top: 86px;
//             left: 0;
//             width: 100%;
//             z-index: 2147483000;
//             padding: 0 20px;
//             pointer-events: none;
//           }

//           .hero-fixed-search-inner {
//             width: 100%;
//             max-width: 1120px;
//             margin: 0 auto;
//             pointer-events: auto;
//           }

//           .hero-fixed-search-inner .wg-filter {
//             margin: 0;
//             background: rgba(11, 19, 32, 0.26);
//             backdrop-filter: blur(5px);
//             -webkit-backdrop-filter: blur(5px);
//             border: 0;
//             box-shadow: 0 4px 10px rgba(0, 0, 0, 0.045);
//             padding: 8px;
//             border-radius: 22px;
//             max-width: 1120px;
//           }

//           .hero-fixed-search-inner .form-title input,
//           .hero-fixed-search-inner .btn-select,
//           .hero-fixed-search-inner .btn-filter {
//             background: rgba(255, 255, 255, 0.99);
//             border: 1px solid rgba(17, 24, 39, 0.04);
//           }

//           .hero-fixed-search-inner .form-title input,
//           .hero-fixed-search-inner .btn-select,
//           .hero-fixed-search-inner .btn-filter,
//           .hero-fixed-search-inner .wrap-btn .tf-btn {
//             min-height: 52px;
//           }

//           .hero-fixed-search-inner .btn-filter {
//             width: 64px;
//             height: 52px;
//           }

//           @media (max-width: 1199px) {
//             .wg-filter {
//               max-width: 980px;
//             }

//             .hero-fixed-search-inner {
//               max-width: 980px;
//             }

//             .hero-fixed-search-inner .wg-filter {
//               max-width: 980px;
//             }

//             .hero-search-form {
//               min-width: 300px;
//             }
//           }

//           @media (max-width: 991px) {
//             .hero-slider-wrap {
//               min-height: 460px;
//               height: auto;
//               max-height: none;
//               padding: 24px 0 28px;
//               align-items: center;
//             }

//             .content-inner {
//               transform: translateY(0);
//               text-align: center;
//             }

//             .heading-title {
//               margin-bottom: 14px;
//               padding: 0 12px;
//             }

//             .heading-title .title {
//               font-size: 28px;
//               line-height: 1.12;
//               text-align: center;
//               margin-bottom: 8px;
//             }

//             .heading-title p {
//               font-size: 14px;
//               line-height: 1.5;
//               max-width: 320px;
//               text-align: center;
//             }

//             .wg-filter {
//               width: calc(100% - 28px);
//               max-width: 420px;
//               margin: 12px auto 0;
//               padding: 8px;
//               border-radius: 18px;
//               background: rgba(11, 19, 32, 0.20);
//               border: 0;
//               box-shadow: 0 3px 8px rgba(0, 0, 0, 0.035);
//             }

//             .form-title {
//               flex-direction: column;
//               align-items: stretch;
//               gap: 10px;
//             }

//             .tf-dropdown-sort {
//               flex: unset;
//               width: 100%;
//             }

//             .btn-select {
//               min-height: 48px;
//               justify-content: center;
//               position: relative;
//               font-weight: 700;
//               background: #ffffff;
//             }

//             .btn-select i {
//               position: absolute;
//               right: 18px;
//             }

//             .hero-search-form {
//               width: 100%;
//               min-width: 100%;
//             }

//             .form-title input {
//               min-height: 48px;
//               text-align: left;
//               background: #ffffff;
//               border-radius: 14px;
//               font-size: 14px;
//             }

//             .wrap-btn {
//               width: 100%;
//               display: grid;
//               grid-template-columns: 56px 1fr;
//               gap: 9px;
//             }

//             .btn-filter {
//               width: 56px;
//               height: 48px;
//               min-height: 48px;
//               border-radius: 14px;
//               background: #fff7ef;
//             }

//             .wrap-btn .tf-btn {
//               width: 100%;
//               min-height: 48px;
//               border-radius: 14px;
//               justify-content: center;
//               padding-left: 16px;
//               padding-right: 16px;
//               background: #f1913d;
//             }

//             .hero-search-suggestions {
//               max-height: 230px;
//             }

//             .hero-fixed-search-portal {
//               top: 70px;
//               padding: 0 10px;
//             }

//             .hero-fixed-search-inner {
//               max-width: 420px;
//             }

//             .hero-fixed-search-inner .wg-filter {
//               width: 100%;
//               max-width: 420px;
//               padding: 8px;
//               border-radius: 18px;
//               max-height: calc(100vh - 84px);
//               overflow-y: auto;
//               background: rgba(11, 19, 32, 0.24);
//               border: 0;
//               box-shadow: 0 3px 9px rgba(0, 0, 0, 0.04);
//             }

//             .hero-fixed-search-inner .form-title {
//               gap: 9px;
//             }

//             .hero-fixed-search-inner .form-title input,
//             .hero-fixed-search-inner .btn-select,
//             .hero-fixed-search-inner .wrap-btn .tf-btn {
//               min-height: 46px;
//             }

//             .hero-fixed-search-inner .btn-filter {
//               width: 54px;
//               height: 46px;
//               min-height: 46px;
//             }
//           }

//           @media (max-width: 575px) {
//             .hero-slider-wrap {
//               min-height: 430px;
//               padding: 20px 0 26px;
//             }

//             .heading-title {
//               margin-bottom: 12px;
//             }

//             .heading-title .title {
//               font-size: 23px;
//               line-height: 1.15;
//               margin-bottom: 7px;
//             }

//             .heading-title p {
//               font-size: 12.5px;
//               line-height: 1.55;
//               max-width: 300px;
//             }

//             .wg-filter {
//               width: calc(100% - 36px);
//               max-width: 340px;
//               padding: 7px;
//               border-radius: 18px;
//             }

//             .btn-select {
//               min-height: 46px;
//               font-size: 15px;
//             }

//             .form-title input {
//               min-height: 46px;
//               font-size: 13px;
//               padding: 0 14px;
//             }

//             .wrap-btn {
//               grid-template-columns: 54px 1fr;
//               gap: 8px;
//             }

//             .btn-filter {
//               width: 54px;
//               height: 46px;
//               min-height: 46px;
//             }

//             .wrap-btn .tf-btn {
//               min-height: 46px;
//               font-size: 14px;
//             }

//             .hero-fixed-search-portal {
//               top: 64px;
//               padding: 0 8px;
//             }

//             .hero-fixed-search-inner {
//               max-width: 340px;
//             }

//             .hero-fixed-search-inner .wg-filter {
//               max-width: 340px;
//               padding: 7px;
//             }
//           }

//           @media (max-width: 380px) {
//             .hero-slider-wrap {
//               min-height: 420px;
//             }

//             .heading-title .title {
//               font-size: 22px;
//             }

//             .heading-title p {
//               font-size: 12px;
//             }

//             .wg-filter {
//               width: calc(100% - 28px);
//               max-width: 330px;
//             }
//           }
//         `}</style>
//       </div>

//       {mounted &&
//         isSearchFixed &&
//         createPortal(
//           <div className="hero-fixed-search-portal">
//             <div className="hero-fixed-search-inner">
//               {renderSearchFilter({ fixed: true })}
//             </div>
//           </div>,
//           document.body
//         )}
//     </>
//   );
// }


"use client";

import SearchForm from "@/components/common/SearchForm";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { apiGet } from "../../lib/api";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
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

export default function Hero({ onSearch = () => {}, projects = [] }) {
  const router = useRouter();

  const suggestionRef = useRef(null);
  const fixedSuggestionRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [activeItem] = useState("For sale");
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [isSearchFixed, setIsSearchFixed] = useState(false);
  const [showFixedSearch, setShowFixedSearch] = useState(false);

  const [advancedFilters, setAdvancedFilters] = useState({
    keyword: "",
    city: "",
    location: "",
    propertyType: "",
    propertyStatus: "",
    bedrooms: "",
    bathrooms: "",
    amenities: [],
    sortBy: "Newest",
    priceRange: [0, 50000000],
    areaRange: [0, 5000],
  });

  const [cities, setCities] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isDesktop = window.innerWidth > 991;
      const shouldShow = window.scrollY > 210;

      setIsSearchFixed(shouldShow);
      setShowFixedSearch(isDesktop && shouldShow);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
        console.error("Hero search data fetch error:", error);
        setCities([]);
        setDevelopers([]);
      }
    };

    loadSearchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const normalSearch = suggestionRef.current;
      const fixedSearch = fixedSuggestionRef.current;

      const clickedInsideNormal =
        normalSearch && normalSearch.contains(event.target);

      const clickedInsideFixed =
        fixedSearch && fixedSearch.contains(event.target);

      if (!clickedInsideNormal && !clickedInsideFixed) {
        setShowSuggestions(false);
        setActiveSuggestionIndex(-1);
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

  const findCityMatch = (searchValue) => {
    const normalized = normalizeText(searchValue);

    if (!normalized) return null;

    const exactMatch = finalCities.find((item) => {
      const cityName = normalizeText(item.city);
      const citySlug = normalizeText(item.city_slug);

      return cityName === normalized || citySlug === normalized;
    });

    if (exactMatch) return exactMatch;

    return (
      finalCities.find((item) => {
        const cityName = normalizeText(item.city);
        const citySlug = normalizeText(item.city_slug);

        return cityName.includes(normalized) || citySlug.includes(normalized);
      }) || null
    );
  };

  const findDeveloperMatch = (searchValue) => {
    const normalized = normalizeText(searchValue);

    if (!normalized) return null;

    const exactMatch = finalDevelopers.find((item) => {
      const developerName = normalizeText(item.developer_name);
      const developerSlug = normalizeText(item.developer_slug);

      return developerName === normalized || developerSlug === normalized;
    });

    if (exactMatch) return exactMatch;

    return (
      finalDevelopers.find((item) => {
        const developerName = normalizeText(item.developer_name);
        const developerSlug = normalizeText(item.developer_slug);

        return (
          developerName.includes(normalized) ||
          developerSlug.includes(normalized)
        );
      }) || null
    );
  };

  const searchSuggestions = useMemo(() => {
    const keyword = normalizeText(searchText);

    if (!keyword || keyword.length < 1) return [];

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
          propertyType,
          propertyStatus,
        });
      }
    });

    return Array.from(suggestionMap.values()).slice(0, 8);
  }, [searchText, projects, finalCities, finalDevelopers]);

  const closeSuggestions = () => {
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
  };

  const handleSuggestionSelect = (suggestion) => {
    const selectedValue = suggestion.value || "";

    setSearchText(selectedValue);

    const selectedFilters = {
      ...advancedFilters,
      keyword: selectedValue,
      city:
        suggestion.type === "city"
          ? selectedValue
          : suggestion.city || advancedFilters.city,
      location: suggestion.location || advancedFilters.location,
      propertyType: suggestion.propertyType || advancedFilters.propertyType,
      propertyStatus:
        suggestion.propertyStatus ||
        (activeItem === "For sale" ? "for-sale" : "for-rent"),
    };

    setAdvancedFilters(selectedFilters);
    closeSuggestions();

    if (suggestion.type === "city" && suggestion.slug) {
      router.push(`/cities/${suggestion.slug}`);
      return;
    }

    if (suggestion.type === "developer" && suggestion.slug) {
      router.push(`/developers/${suggestion.slug}`);
      return;
    }

    const cityMatch = findCityMatch(selectedValue);

    if (cityMatch?.city_slug) {
      router.push(`/cities/${cityMatch.city_slug}`);
      return;
    }

    const developerMatch = findDeveloperMatch(selectedValue);

    if (developerMatch?.developer_slug) {
      router.push(`/developers/${developerMatch.developer_slug}`);
      return;
    }

    onSearch(selectedFilters);
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();

    const mergedFilters = {
      ...advancedFilters,
      keyword: searchText.trim() || advancedFilters.keyword || "",
      propertyStatus: activeItem === "For sale" ? "for-sale" : "for-rent",
    };

    const rawSearch = searchText.trim();

    if (rawSearch) {
      const cityMatch = findCityMatch(rawSearch);

      if (cityMatch?.city_slug) {
        router.push(`/cities/${cityMatch.city_slug}`);
        return;
      }

      const developerMatch = findDeveloperMatch(rawSearch);

      if (developerMatch?.developer_slug) {
        router.push(`/developers/${developerMatch.developer_slug}`);
        return;
      }
    }

    if (mergedFilters.city) {
      const cityMatch = findCityMatch(mergedFilters.city);

      if (cityMatch?.city_slug) {
        router.push(`/cities/${cityMatch.city_slug}`);
        return;
      }
    }

    onSearch(mergedFilters);
    closeSuggestions();
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
    }
  };

  const renderSearchFilter = ({ fixed = false } = {}) => {
    return (
      <div className={`wg-filter ${fixed ? "wg-filter-fixed" : ""}`}>
        <div className="form-title">
          <form
            onSubmit={handleSearch}
            className="hero-search-form"
            ref={fixed ? fixedSuggestionRef : suggestionRef}
          >
            <fieldset className="hero-search-fieldset">
              <input
                type="text"
                placeholder="Search city, developer, project, location..."
                value={searchText}
                autoComplete="off"
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setShowSuggestions(true);
                  setActiveSuggestionIndex(-1);
                }}
                onFocus={() => {
                  if (searchText) setShowSuggestions(true);
                }}
                onKeyDown={handleSearchKeyDown}
              />

              {showSuggestions && searchText && (
                <div className="hero-search-suggestions">
                  {searchSuggestions.length > 0 ? (
                    searchSuggestions.map((suggestion, index) => (
                      <button
                        type="button"
                        key={`${suggestion.type}-${suggestion.label}-${index}`}
                        className={`hero-suggestion-item ${
                          activeSuggestionIndex === index ? "active" : ""
                        }`}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleSuggestionSelect(suggestion);
                        }}
                        onMouseEnter={() => setActiveSuggestionIndex(index)}
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
            </fieldset>
          </form>

          <div className="box-item wrap-btn">
            <div className="btn-filter show-form searchFormToggler">
              <div className="icons">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 4H14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 4H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 12H12" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 20H16" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 2V6" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 10V14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 18V22" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSearch}
              className="tf-btn bg-color-primary pd-3"
            >
              Search <i className="icon-MagnifyingGlass fw-6" />
            </button>
          </div>
        </div>

        <SearchForm onFilterChange={setAdvancedFilters} projects={projects} />
      </div>
    );
  };

  return (
    <>
      <div className="page-title home01 hero-slider-wrap">
        <div className="hero-bg-slider">
          {HERO_IMAGES.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`hero-bg-slide ${
                index === currentBgIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </div>

        <div className="hero-overlay" />

        <div className="tf-container hero-main-container">
          <div className="row justify-center relative">
            <div className="col-lg-10 col-xl-10">
              <div className="content-inner">
                <div className="heading-title">
                  <h1 className="title">GROWL REAL ESTATE</h1>
                  <p className="h6 fw-4">
                    Discover exclusive luxury projects, trusted by thousands of
                    homebuyers every month.
                  </p>
                </div>

                <div className="hero-search-normal-wrap">
                  {renderSearchFilter({ fixed: false })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .hero-slider-wrap {
            position: relative;
            overflow: hidden;
            min-height: 430px;
            height: 54vh;
            max-height: 500px;
            display: flex;
            align-items: center;
          }

          .hero-bg-slider {
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
          }

          .hero-bg-slide {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0;
            transform: scale(1.05);
            transition: opacity 1.2s ease, transform 5s ease;
          }

          .hero-bg-slide.active {
            opacity: 1;
            transform: scale(1);
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              90deg,
              rgba(11, 19, 32, 0.68) 0%,
              rgba(15, 27, 45, 0.52) 45%,
              rgba(17, 24, 39, 0.38) 100%
            );
            z-index: 1;
          }

          .hero-main-container {
            position: relative;
            z-index: 2;
            width: 100%;
          }

          .content-inner {
            color: #fff;
            text-align: center;
            transform: translateY(0);
          }

          .heading-title {
            margin-bottom: 14px;
            text-align: center;
          }

          .heading-title .title {
            color: #fff;
            font-size: 40px;
            line-height: 1.1;
            margin-bottom: 8px;
            text-align: center;
          }

          .heading-title p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 15px;
            line-height: 1.45;
            max-width: 680px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .hero-search-normal-wrap {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .wg-filter {
            width: 100%;
            max-width: 1120px;
            margin: 12px auto 0;
            background: rgba(11, 19, 32, 0.22);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 0;
            border-radius: 22px;
            padding: 8px;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.035);
          }

          .form-title {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: nowrap;
            width: 100%;
          }

          .tf-dropdown-sort {
            flex: 0 0 150px;
          }

          .hero-search-form {
            flex: 1 1 auto;
            min-width: 360px;
            position: relative;
          }

          .hero-search-fieldset {
            position: relative;
            margin: 0;
            padding: 0;
            border: 0;
          }

          .form-title input {
            width: 100%;
            min-height: 56px;
            border-radius: 14px;
            border: 1px solid rgba(17, 24, 39, 0.05);
            background: rgba(255, 255, 255, 0.98);
            color: #111827;
            padding: 0 16px;
            outline: none;
            box-shadow: none;
          }

          .form-title input:focus {
            border-color: rgba(241, 145, 61, 0.22);
            box-shadow: 0 0 0 1px rgba(241, 145, 61, 0.04);
          }

          .btn-select {
            min-height: 56px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 0 16px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.98);
            color: #111827;
            width: 100%;
            cursor: pointer;
            border: 1px solid rgba(17, 24, 39, 0.05);
          }

          .wrap-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
          }

          .btn-filter {
            width: 68px;
            height: 56px;
            border-radius: 14px;
            background: #fff4e9;
            border: 1px solid rgba(241, 145, 61, 0.13);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .wrap-btn .tf-btn {
            min-height: 56px;
            white-space: nowrap;
            padding-left: 26px;
            padding-right: 26px;
            border-radius: 14px;
          }

          .hero-search-suggestions {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            right: 0;
            z-index: 2147483647;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 14px;
            box-shadow: 0 14px 34px rgba(0, 0, 0, 0.10);
            overflow: hidden;
            max-height: 330px;
            overflow-y: auto;
            text-align: left;
          }

          .hero-suggestion-item {
            width: 100%;
            display: block;
            text-align: left;
            padding: 12px 16px;
            border: 0;
            border-bottom: 1px solid #f1f1f1;
            background: #ffffff;
            cursor: pointer;
          }

          .hero-suggestion-item:last-child {
            border-bottom: 0;
          }

          .hero-suggestion-item:hover,
          .hero-suggestion-item.active {
            background: #f8fafc;
          }

          .hero-suggestion-label {
            display: block;
            font-size: 15px;
            font-weight: 600;
            color: #111827;
            line-height: 1.3;
          }

          .hero-suggestion-sub {
            display: block;
            font-size: 13px;
            font-weight: 400;
            color: #6b7280;
            margin-top: 3px;
            line-height: 1.3;
          }

          .hero-no-suggestion {
            padding: 14px 16px;
            font-size: 14px;
            color: #6b7280;
            background: #ffffff;
            text-align: left;
          }

          .hero-fixed-search-portal {
            position: fixed;
            top: 86px;
            left: 0;
            width: 100%;
            z-index: 2147483000;
            padding: 0 20px;
            pointer-events: none;
          }

          .hero-fixed-search-inner {
            width: 100%;
            max-width: 1120px;
            margin: 0 auto;
            pointer-events: auto;
          }

          .hero-fixed-search-inner .wg-filter {
            margin: 0;
            background: rgba(11, 19, 32, 0.26);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 0;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.045);
            padding: 8px;
            border-radius: 22px;
            max-width: 1120px;
          }

          .hero-fixed-search-inner .form-title input,
          .hero-fixed-search-inner .btn-select,
          .hero-fixed-search-inner .btn-filter {
            background: rgba(255, 255, 255, 0.99);
            border: 1px solid rgba(17, 24, 39, 0.04);
          }

          .hero-fixed-search-inner .form-title input,
          .hero-fixed-search-inner .btn-select,
          .hero-fixed-search-inner .btn-filter,
          .hero-fixed-search-inner .wrap-btn .tf-btn {
            min-height: 52px;
          }

          .hero-fixed-search-inner .btn-filter {
            width: 64px;
            height: 52px;
          }

          @media (max-width: 1199px) {
            .wg-filter {
              max-width: 980px;
            }

            .hero-fixed-search-inner {
              max-width: 980px;
            }

            .hero-fixed-search-inner .wg-filter {
              max-width: 980px;
            }

            .hero-search-form {
              min-width: 300px;
            }
          }

          @media (max-width: 991px) {
            .hero-slider-wrap {
              min-height: 460px;
              height: auto;
              max-height: none;
              padding: 24px 0 28px;
              align-items: center;
            }

            .content-inner {
              transform: translateY(0);
              text-align: center;
            }

            .heading-title {
              margin-bottom: 14px;
              padding: 0 12px;
            }

            .heading-title .title {
              font-size: 28px;
              line-height: 1.12;
              text-align: center;
              margin-bottom: 8px;
            }

            .heading-title p {
              font-size: 14px;
              line-height: 1.5;
              max-width: 320px;
              text-align: center;
            }

            .wg-filter {
              width: calc(100% - 28px);
              max-width: 420px;
              margin: 12px auto 0;
              padding: 8px;
              border-radius: 18px;
              background: rgba(11, 19, 32, 0.20);
              border: 0;
              box-shadow: 0 3px 8px rgba(0, 0, 0, 0.035);
            }

            .form-title {
              flex-direction: column;
              align-items: stretch;
              gap: 10px;
            }

            .tf-dropdown-sort {
              flex: unset;
              width: 100%;
            }

            .btn-select {
              min-height: 48px;
              justify-content: center;
              position: relative;
              font-weight: 700;
              background: #ffffff;
            }

            .btn-select i {
              position: absolute;
              right: 18px;
            }

            .hero-search-form {
              width: 100%;
              min-width: 100%;
            }

            .form-title input {
              min-height: 48px;
              text-align: left;
              background: #ffffff;
              border-radius: 14px;
              font-size: 14px;
            }

            .wrap-btn {
              width: 100%;
              display: grid;
              grid-template-columns: 56px 1fr;
              gap: 9px;
            }

            .btn-filter {
              width: 56px;
              height: 48px;
              min-height: 48px;
              border-radius: 14px;
              background: #fff7ef;
            }

            .wrap-btn .tf-btn {
              width: 100%;
              min-height: 48px;
              border-radius: 14px;
              justify-content: center;
              padding-left: 16px;
              padding-right: 16px;
              background: #f1913d;
            }

            .hero-search-suggestions {
              max-height: 230px;
            }

            .hero-fixed-search-portal {
              display: none !important;
            }
          }

          @media (max-width: 575px) {
            .hero-slider-wrap {
              min-height: 430px;
              padding: 20px 0 26px;
            }

            .heading-title {
              margin-bottom: 12px;
            }

            .heading-title .title {
              font-size: 23px;
              line-height: 1.15;
              margin-bottom: 7px;
            }

            .heading-title p {
              font-size: 12.5px;
              line-height: 1.55;
              max-width: 300px;
            }

            .wg-filter {
              width: calc(100% - 36px);
              max-width: 340px;
              padding: 7px;
              border-radius: 18px;
            }

            .btn-select {
              min-height: 46px;
              font-size: 15px;
            }

            .form-title input {
              min-height: 46px;
              font-size: 13px;
              padding: 0 14px;
            }

            .wrap-btn {
              grid-template-columns: 54px 1fr;
              gap: 8px;
            }

            .btn-filter {
              width: 54px;
              height: 46px;
              min-height: 46px;
            }

            .wrap-btn .tf-btn {
              min-height: 46px;
              font-size: 14px;
            }
          }

          @media (max-width: 380px) {
            .hero-slider-wrap {
              min-height: 420px;
            }

            .heading-title .title {
              font-size: 22px;
            }

            .heading-title p {
              font-size: 12px;
            }

            .wg-filter {
              width: calc(100% - 28px);
              max-width: 330px;
            }
          }
        `}</style>
      </div>

      {mounted &&
        showFixedSearch &&
        createPortal(
          <div className="hero-fixed-search-portal">
            <div className="hero-fixed-search-inner">
              {renderSearchFilter({ fixed: true })}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}