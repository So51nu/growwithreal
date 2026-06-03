// // // // // // // // "use client";
// // // // // // // // import SearchForm from "@/components/common/SearchForm";
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { useRouter } from "next/navigation";

// // // // // // // // export default function Hero() {
// // // // // // // //   const router = useRouter();
// // // // // // // //   const [activeItem, setActiveItem] = useState("For sale");
// // // // // // // //   const [searchText, setSearchText] = useState("");

// // // // // // // //   const items = ["For sale", "For rent"];

// // // // // // // //   const handleSearch = (e) => {
// // // // // // // //     e.preventDefault();

// // // // // // // //     const query = new URLSearchParams();

// // // // // // // //     if (searchText.trim()) {
// // // // // // // //       query.set("search", searchText.trim());
// // // // // // // //     }

// // // // // // // //     if (activeItem === "For sale") {
// // // // // // // //       query.set("property_status", "for-sale");
// // // // // // // //     } else {
// // // // // // // //       query.set("property_status", "for-rent");
// // // // // // // //     }

// // // // // // // //     router.push(`/my-property?${query.toString()}`);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //   className="page-title home01"
// // // // // // // //   style={{
// // // // // // // //     backgroundImage: "url('https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
// // // // // // // //     backgroundSize: "cover",
// // // // // // // //     backgroundPosition: "center",
// // // // // // // //     backgroundRepeat: "no-repeat",
// // // // // // // //   }}
// // // // // // // // >
// // // // // // // //       <div className="tf-container ">
// // // // // // // //         <div className="row justify-center relative">
// // // // // // // //           <div className="col-lg-8 ">
// // // // // // // //             <div className="content-inner">
// // // // // // // //               <div className="heading-title">
// // // // // // // //                 <h1 className="title">GROWL REAL ESTATE </h1>
// // // // // // // //                 <p className="h6 fw-4">
// // // // // // // //                   Discover exclusive luxury projects, trusted by thousands of
// // // // // // // //                   homebuyers every month.
// // // // // // // //                 </p>
// // // // // // // //               </div>
// // // // // // // //               <div className="wg-filter">
// // // // // // // //                 <div className="form-title">
// // // // // // // //                   <div className="tf-dropdown-sort " data-bs-toggle="dropdown">
// // // // // // // //                     <div className="btn-select">
// // // // // // // //                       <span className="text-sort-value">{activeItem}</span>
// // // // // // // //                       <i className="icon-CaretDown" />
// // // // // // // //                     </div>
// // // // // // // //                     <div className="dropdown-menu">
// // // // // // // //                       {items.map((item) => (
// // // // // // // //                         <div
// // // // // // // //                           key={item}
// // // // // // // //                           className={`select-item ${
// // // // // // // //                             activeItem === item ? "active" : ""
// // // // // // // //                           }`}
// // // // // // // //                           onClick={() => setActiveItem(item)}
// // // // // // // //                         >
// // // // // // // //                           <span className="text-value-item">{item}</span>
// // // // // // // //                         </div>
// // // // // // // //                       ))}
// // // // // // // //                     </div>
// // // // // // // //                   </div>

// // // // // // // //                   <form onSubmit={handleSearch}>
// // // // // // // //                     <fieldset>
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         placeholder="Place, neighborhood, school or agent..."
// // // // // // // //                         value={searchText}
// // // // // // // //                         onChange={(e) => setSearchText(e.target.value)}
// // // // // // // //                       />
// // // // // // // //                     </fieldset>
// // // // // // // //                   </form>

// // // // // // // //                   <div className="box-item wrap-btn">
// // // // // // // //                     <div className="btn-filter show-form searchFormToggler">
// // // // // // // //                       <div className="icons">
// // // // // // // //                         <svg
// // // // // // // //                           width={24}
// // // // // // // //                           height={24}
// // // // // // // //                           viewBox="0 0 24 24"
// // // // // // // //                           fill="none"
// // // // // // // //                           xmlns="http://www.w3.org/2000/svg"
// // // // // // // //                         >
// // // // // // // //                           <path
// // // // // // // //                             d="M21 4H14"
// // // // // // // //                             stroke="#F1913D"
// // // // // // // //                             strokeWidth={2}
// // // // // // // //                             strokeLinecap="round"
// // // // // // // //                             strokeLinejoin="round"
// // // // // // // //                           />
// // // // // // // //                           <path
// // // // // // // //                             d="M10 4H3"
// // // // // // // //                             stroke="#F1913D"
// // // // // // // //                             strokeWidth={2}
// // // // // // // //                             strokeLinecap="round"
// // // // // // // //                             strokeLinejoin="round"
// // // // // // // //                           />
// // // // // // // //                           <path
// // // // // // // //                             d="M21 12H12"
// // // // // // // //                             stroke="#F1913D"
// // // // // // // //                             strokeWidth={2}
// // // // // // // //                             strokeLinecap="round"
// // // // // // // //                             strokeLinejoin="round"
// // // // // // // //                           />
// // // // // // // //                           <path
// // // // // // // //                             d="M8 12H3"
// // // // // // // //                             stroke="#F1913D"
// // // // // // // //                             strokeWidth={2}
// // // // // // // //                             strokeLinecap="round"
// // // // // // // //                             strokeLinejoin="round"
// // // // // // // //                           />
// // // // // // // //                           <path
// // // // // // // //                             d="M21 20H16"
// // // // // // // //                             stroke="#F1913D"
// // // // // // // //                             strokeWidth={2}
// // // // // // // //                             strokeLinecap="round"
// // // // // // // //                             strokeLinejoin="round"
// // // // // // // //                           />
// // // // // // // //                           <path
// // // // // // // //                             d="M12 20H3"
// // // // // // // //                             stroke="#F1913D"
// // // // // // // //                             strokeWidth={2}
// // // // // // // //                             strokeLinecap="round"
// // // // // // // //                             strokeLinejoin="round"
// // // // // // // //                           />
// // // // // // // //                           <path
// // // // // // // //                             d="M14 2V6"
// // // // // // // //                             stroke="#F1913D"
// // // // // // // //                             strokeWidth={2}
// // // // // // // //                             strokeLinecap="round"
// // // // // // // //                             strokeLinejoin="round"
// // // // // // // //                           />
// // // // // // // //                           <path
// // // // // // // //                             d="M8 10V14"
// // // // // // // //                             stroke="#F1913D"
// // // // // // // //                             strokeWidth={2}
// // // // // // // //                             strokeLinecap="round"
// // // // // // // //                             strokeLinejoin="round"
// // // // // // // //                           />
// // // // // // // //                           <path
// // // // // // // //                             d="M16 18V22"
// // // // // // // //                             stroke="#F1913D"
// // // // // // // //                             strokeWidth={2}
// // // // // // // //                             strokeLinecap="round"
// // // // // // // //                             strokeLinejoin="round"
// // // // // // // //                           />
// // // // // // // //                         </svg>
// // // // // // // //                       </div>
// // // // // // // //                     </div>

// // // // // // // //                     <button
// // // // // // // //                       type="button"
// // // // // // // //                       onClick={handleSearch}
// // // // // // // //                       className="tf-btn bg-color-primary pd-3"
// // // // // // // //                     >
// // // // // // // //                       Search <i className="icon-MagnifyingGlass fw-6" />
// // // // // // // //                     </button>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //                 <SearchForm />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // "use client";

// // // // // // // import SearchForm from "@/components/common/SearchForm";
// // // // // // // import React, { useEffect, useMemo, useState } from "react";
// // // // // // // import { useRouter } from "next/navigation";
// // // // // // // import { apiGet } from "../../lib/api";

// // // // // // // const HERO_IMAGES = [
// // // // // // //   "https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1600&auto=format&fit=crop",
// // // // // // //   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
// // // // // // //   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
// // // // // // //   "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
// // // // // // // ];

// // // // // // // function normalizeText(value) {
// // // // // // //   return String(value || "").trim().toLowerCase();
// // // // // // // }

// // // // // // // function slugify(value) {
// // // // // // //   return String(value || "")
// // // // // // //     .trim()
// // // // // // //     .toLowerCase()
// // // // // // //     .replace(/&/g, "and")
// // // // // // //     .replace(/[^\w\s-]/g, "")
// // // // // // //     .replace(/\s+/g, "-")
// // // // // // //     .replace(/-+/g, "-");
// // // // // // // }

// // // // // // // export default function Hero({
// // // // // // //   onSearch = () => {},
// // // // // // //   projects = [],
// // // // // // // }) {
// // // // // // //   const router = useRouter();

// // // // // // //   const [activeItem, setActiveItem] = useState("For sale");
// // // // // // //   const [searchText, setSearchText] = useState("");
// // // // // // //   const [advancedFilters, setAdvancedFilters] = useState({
// // // // // // //     keyword: "",
// // // // // // //     city: "",
// // // // // // //     location: "",
// // // // // // //     propertyType: "",
// // // // // // //     propertyStatus: "",
// // // // // // //     bedrooms: "",
// // // // // // //     bathrooms: "",
// // // // // // //     amenities: [],
// // // // // // //     sortBy: "Newest",
// // // // // // //     priceRange: [0, 50000000],
// // // // // // //     areaRange: [0, 5000],
// // // // // // //   });

// // // // // // //   const [cities, setCities] = useState([]);
// // // // // // //   const [developers, setDevelopers] = useState([]);
// // // // // // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // // // // // //   const items = useMemo(() => ["For sale", "For rent"], []);

// // // // // // //   useEffect(() => {
// // // // // // //     const interval = setInterval(() => {
// // // // // // //       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
// // // // // // //     }, 4000);

// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, []);

// // // // // // //   useEffect(() => {
// // // // // // //     const loadSearchData = async () => {
// // // // // // //       try {
// // // // // // //         const [citiesRes, developersRes] = await Promise.all([
// // // // // // //           apiGet("/admindashboard/cities/"),
// // // // // // //           apiGet("/admindashboard/developers/"),
// // // // // // //         ]);

// // // // // // //         setCities(Array.isArray(citiesRes) ? citiesRes : []);
// // // // // // //         setDevelopers(Array.isArray(developersRes) ? developersRes : []);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Hero search data fetch error:", error);
// // // // // // //         setCities([]);
// // // // // // //         setDevelopers([]);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     loadSearchData();
// // // // // // //   }, []);

// // // // // // //   const fallbackCitiesFromProjects = useMemo(() => {
// // // // // // //     const map = new Map();

// // // // // // //     projects.forEach((item) => {
// // // // // // //       const city = item.city || "";
// // // // // // //       const city_slug = item.city_slug || slugify(city);

// // // // // // //       if (city && city_slug) {
// // // // // // //         map.set(normalizeText(city), { city, city_slug });
// // // // // // //       }
// // // // // // //     });

// // // // // // //     return Array.from(map.values());
// // // // // // //   }, [projects]);

// // // // // // //   const fallbackDevelopersFromProjects = useMemo(() => {
// // // // // // //     const map = new Map();

// // // // // // //     projects.forEach((item) => {
// // // // // // //       const developer_name = item.developer_name || "";
// // // // // // //       const developer_slug = item.developer_slug || slugify(developer_name);

// // // // // // //       if (developer_name && developer_slug) {
// // // // // // //         map.set(normalizeText(developer_name), {
// // // // // // //           developer_name,
// // // // // // //           developer_slug,
// // // // // // //         });
// // // // // // //       }
// // // // // // //     });

// // // // // // //     return Array.from(map.values());
// // // // // // //   }, [projects]);

// // // // // // //   const finalCities = cities.length > 0 ? cities : fallbackCitiesFromProjects;
// // // // // // //   const finalDevelopers =
// // // // // // //     developers.length > 0 ? developers : fallbackDevelopersFromProjects;

// // // // // // //   const findCityMatch = (searchValue) => {
// // // // // // //     const normalized = normalizeText(searchValue);
// // // // // // //     if (!normalized) return null;

// // // // // // //     const exactMatch = finalCities.find((item) => {
// // // // // // //       const cityName = normalizeText(item.city);
// // // // // // //       const citySlug = normalizeText(item.city_slug);
// // // // // // //       return cityName === normalized || citySlug === normalized;
// // // // // // //     });
// // // // // // //     if (exactMatch) return exactMatch;

// // // // // // //     const partialMatch = finalCities.find((item) => {
// // // // // // //       const cityName = normalizeText(item.city);
// // // // // // //       const citySlug = normalizeText(item.city_slug);
// // // // // // //       return cityName.includes(normalized) || citySlug.includes(normalized);
// // // // // // //     });
// // // // // // //     return partialMatch || null;
// // // // // // //   };

// // // // // // //   const findDeveloperMatch = (searchValue) => {
// // // // // // //     const normalized = normalizeText(searchValue);
// // // // // // //     if (!normalized) return null;

// // // // // // //     const exactMatch = finalDevelopers.find((item) => {
// // // // // // //       const developerName = normalizeText(item.developer_name);
// // // // // // //       const developerSlug = normalizeText(item.developer_slug);
// // // // // // //       return developerName === normalized || developerSlug === normalized;
// // // // // // //     });
// // // // // // //     if (exactMatch) return exactMatch;

// // // // // // //     const partialMatch = finalDevelopers.find((item) => {
// // // // // // //       const developerName = normalizeText(item.developer_name);
// // // // // // //       const developerSlug = normalizeText(item.developer_slug);
// // // // // // //       return (
// // // // // // //         developerName.includes(normalized) || developerSlug.includes(normalized)
// // // // // // //       );
// // // // // // //     });
// // // // // // //     return partialMatch || null;
// // // // // // //   };

// // // // // // //   const handleSearch = (e) => {
// // // // // // //     if (e) e.preventDefault();

// // // // // // //     const mergedFilters = {
// // // // // // //       ...advancedFilters,
// // // // // // //       keyword: searchText.trim() || advancedFilters.keyword || "",
// // // // // // //       propertyStatus:
// // // // // // //         activeItem === "For sale" ? "for-sale" : "for-rent",
// // // // // // //     };

// // // // // // //     const rawSearch = searchText.trim();

// // // // // // //     // 1) Search text se city/developer route detect karo
// // // // // // //     if (rawSearch) {
// // // // // // //       const cityMatch = findCityMatch(rawSearch);
// // // // // // //       if (cityMatch?.city_slug) {
// // // // // // //         router.push(`/cities/${cityMatch.city_slug}`);
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       const developerMatch = findDeveloperMatch(rawSearch);
// // // // // // //       if (developerMatch?.developer_slug) {
// // // // // // //         router.push(`/developers/${developerMatch.developer_slug}`);
// // // // // // //         return;
// // // // // // //       }
// // // // // // //     }

// // // // // // //     // 2) Advanced city filter selected hai to city route par bhejo
// // // // // // //     if (mergedFilters.city) {
// // // // // // //       const cityMatch = findCityMatch(mergedFilters.city);
// // // // // // //       if (cityMatch?.city_slug) {
// // // // // // //         router.push(`/cities/${cityMatch.city_slug}`);
// // // // // // //         return;
// // // // // // //       }
// // // // // // //     }

// // // // // // //     // 3) No match => same home page par filter apply karo
// // // // // // //     onSearch(mergedFilters);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="page-title home01 hero-slider-wrap">
// // // // // // //       <div className="hero-bg-slider">
// // // // // // //         {HERO_IMAGES.map((image, index) => (
// // // // // // //           <div
// // // // // // //             key={image}
// // // // // // //             className={`hero-bg-slide ${
// // // // // // //               index === currentBgIndex ? "active" : ""
// // // // // // //             }`}
// // // // // // //             style={{ backgroundImage: `url('${image}')` }}
// // // // // // //           />
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       <div className="hero-overlay" />

// // // // // // //       <div className="tf-container">
// // // // // // //         <div className="row justify-center relative">
// // // // // // //           <div className="col-lg-8">
// // // // // // //             <div className="content-inner">
// // // // // // //               <div className="heading-title">
// // // // // // //                 <h1 className="title">GROWL REAL ESTATE</h1>
// // // // // // //                 <p className="h6 fw-4">
// // // // // // //                   Discover exclusive luxury projects, trusted by thousands of
// // // // // // //                   homebuyers every month.
// // // // // // //                 </p>
// // // // // // //               </div>

// // // // // // //               <div className="wg-filter">
// // // // // // //                 <div className="form-title">
// // // // // // //                   <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
// // // // // // //                     <div className="btn-select">
// // // // // // //                       <span className="text-sort-value">{activeItem}</span>
// // // // // // //                       <i className="icon-CaretDown" />
// // // // // // //                     </div>

// // // // // // //                     <div className="dropdown-menu">
// // // // // // //                       {items.map((item) => (
// // // // // // //                         <div
// // // // // // //                           key={item}
// // // // // // //                           className={`select-item ${
// // // // // // //                             activeItem === item ? "active" : ""
// // // // // // //                           }`}
// // // // // // //                           onClick={() => setActiveItem(item)}
// // // // // // //                         >
// // // // // // //                           <span className="text-value-item">{item}</span>
// // // // // // //                         </div>
// // // // // // //                       ))}
// // // // // // //                     </div>
// // // // // // //                   </div>

// // // // // // //                   <form onSubmit={handleSearch} style={{ flex: 1 }}>
// // // // // // //                     <fieldset>
// // // // // // //                       <input
// // // // // // //                         type="text"
// // // // // // //                         placeholder="Search city, developer, project, location..."
// // // // // // //                         value={searchText}
// // // // // // //                         onChange={(e) => setSearchText(e.target.value)}
// // // // // // //                         onKeyDown={(e) => {
// // // // // // //                           if (e.key === "Enter") {
// // // // // // //                             e.preventDefault();
// // // // // // //                             handleSearch(e);
// // // // // // //                           }
// // // // // // //                         }}
// // // // // // //                       />
// // // // // // //                     </fieldset>
// // // // // // //                   </form>

// // // // // // //                   <div className="box-item wrap-btn">
// // // // // // //                     <div className="btn-filter show-form searchFormToggler">
// // // // // // //                       <div className="icons">
// // // // // // //                         <svg
// // // // // // //                           width={24}
// // // // // // //                           height={24}
// // // // // // //                           viewBox="0 0 24 24"
// // // // // // //                           fill="none"
// // // // // // //                           xmlns="http://www.w3.org/2000/svg"
// // // // // // //                         >
// // // // // // //                           <path d="M21 4H14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //                           <path d="M10 4H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //                           <path d="M21 12H12" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //                           <path d="M8 12H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //                           <path d="M21 20H16" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //                           <path d="M12 20H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //                           <path d="M14 2V6" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //                           <path d="M8 10V14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //                           <path d="M16 18V22" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // // //                         </svg>
// // // // // // //                       </div>
// // // // // // //                     </div>

// // // // // // //                     <button
// // // // // // //                       type="button"
// // // // // // //                       onClick={handleSearch}
// // // // // // //                       className="tf-btn bg-color-primary pd-3"
// // // // // // //                     >
// // // // // // //                       Search <i className="icon-MagnifyingGlass fw-6" />
// // // // // // //                     </button>
// // // // // // //                   </div>
// // // // // // //                 </div>

// // // // // // //                 <SearchForm
// // // // // // //                   onFilterChange={setAdvancedFilters}
// // // // // // //                   projects={projects}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <style jsx>{`
// // // // // // //         .hero-slider-wrap {
// // // // // // //           position: relative;
// // // // // // //           overflow: hidden;
// // // // // // //           min-height: 820px;
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //         }

// // // // // // //         .hero-bg-slider {
// // // // // // //           position: absolute;
// // // // // // //           inset: 0;
// // // // // // //           z-index: 0;
// // // // // // //         }

// // // // // // //         .hero-bg-slide {
// // // // // // //           position: absolute;
// // // // // // //           inset: 0;
// // // // // // //           background-size: cover;
// // // // // // //           background-position: center;
// // // // // // //           background-repeat: no-repeat;
// // // // // // //           opacity: 0;
// // // // // // //           transform: scale(1.05);
// // // // // // //           transition: opacity 1.2s ease, transform 5s ease;
// // // // // // //         }

// // // // // // //         .hero-bg-slide.active {
// // // // // // //           opacity: 1;
// // // // // // //           transform: scale(1);
// // // // // // //         }

// // // // // // //         .hero-overlay {
// // // // // // //           position: absolute;
// // // // // // //           inset: 0;
// // // // // // //           background: linear-gradient(
// // // // // // //             90deg,
// // // // // // //             rgba(11, 19, 32, 0.72) 0%,
// // // // // // //             rgba(15, 27, 45, 0.58) 45%,
// // // // // // //             rgba(17, 24, 39, 0.45) 100%
// // // // // // //           );
// // // // // // //           z-index: 1;
// // // // // // //         }

// // // // // // //         .tf-container {
// // // // // // //           position: relative;
// // // // // // //           z-index: 2;
// // // // // // //         }

// // // // // // //         .content-inner {
// // // // // // //           color: #fff;
// // // // // // //         }

// // // // // // //         .heading-title .title {
// // // // // // //           color: #fff;
// // // // // // //         }

// // // // // // //         .heading-title p {
// // // // // // //           color: rgba(255, 255, 255, 0.9);
// // // // // // //         }

// // // // // // //         .wg-filter {
// // // // // // //           margin-top: 28px;
// // // // // // //           background: rgba(255, 255, 255, 0.12);
// // // // // // //           backdrop-filter: blur(14px);
// // // // // // //           -webkit-backdrop-filter: blur(14px);
// // // // // // //           border: 1px solid rgba(255, 255, 255, 0.18);
// // // // // // //           border-radius: 24px;
// // // // // // //           padding: 18px;
// // // // // // //         }

// // // // // // //         .form-title {
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 12px;
// // // // // // //           flex-wrap: wrap;
// // // // // // //         }

// // // // // // //         .form-title form {
// // // // // // //           min-width: 280px;
// // // // // // //         }

// // // // // // //         .form-title input {
// // // // // // //           width: 100%;
// // // // // // //           min-height: 56px;
// // // // // // //           border-radius: 14px;
// // // // // // //           border: 1px solid rgba(255, 255, 255, 0.22);
// // // // // // //           background: rgba(255, 255, 255, 0.92);
// // // // // // //           color: #111827;
// // // // // // //           padding: 0 16px;
// // // // // // //         }

// // // // // // //         .btn-select {
// // // // // // //           min-height: 56px;
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: space-between;
// // // // // // //           gap: 10px;
// // // // // // //           padding: 0 16px;
// // // // // // //           border-radius: 14px;
// // // // // // //           background: rgba(255, 255, 255, 0.92);
// // // // // // //           color: #111827;
// // // // // // //           min-width: 150px;
// // // // // // //           cursor: pointer;
// // // // // // //         }

// // // // // // //         .wrap-btn {
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 12px;
// // // // // // //         }

// // // // // // //         .btn-filter {
// // // // // // //           width: 56px;
// // // // // // //           height: 56px;
// // // // // // //           border-radius: 14px;
// // // // // // //           background: rgba(255, 255, 255, 0.92);
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           cursor: pointer;
// // // // // // //         }

// // // // // // //         @media (max-width: 991px) {
// // // // // // //           .hero-slider-wrap {
// // // // // // //             min-height: 760px;
// // // // // // //           }

// // // // // // //           .form-title {
// // // // // // //             flex-direction: column;
// // // // // // //             align-items: stretch;
// // // // // // //           }

// // // // // // //           .wrap-btn {
// // // // // // //             width: 100%;
// // // // // // //             justify-content: space-between;
// // // // // // //           }

// // // // // // //           .form-title form {
// // // // // // //             width: 100%;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }




// // // // // // "use client";

// // // // // // import SearchForm from "@/components/common/SearchForm";
// // // // // // import React, { useEffect, useMemo, useRef, useState } from "react";
// // // // // // import { useRouter } from "next/navigation";
// // // // // // import { apiGet } from "../../lib/api";

// // // // // // const HERO_IMAGES = [
// // // // // //   "https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1600&auto=format&fit=crop",
// // // // // //   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
// // // // // //   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
// // // // // //   "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
// // // // // // ];

// // // // // // function normalizeText(value) {
// // // // // //   return String(value || "").trim().toLowerCase();
// // // // // // }

// // // // // // function slugify(value) {
// // // // // //   return String(value || "")
// // // // // //     .trim()
// // // // // //     .toLowerCase()
// // // // // //     .replace(/&/g, "and")
// // // // // //     .replace(/[^\w\s-]/g, "")
// // // // // //     .replace(/\s+/g, "-")
// // // // // //     .replace(/-+/g, "-");
// // // // // // }

// // // // // // function getProjectTitle(item) {
// // // // // //   return (
// // // // // //     item?.title ||
// // // // // //     item?.project_name ||
// // // // // //     item?.property_name ||
// // // // // //     item?.name ||
// // // // // //     ""
// // // // // //   );
// // // // // // }

// // // // // // function getDeveloperName(item) {
// // // // // //   return (
// // // // // //     item?.developer_name ||
// // // // // //     item?.developer ||
// // // // // //     item?.builder_name ||
// // // // // //     item?.builder ||
// // // // // //     ""
// // // // // //   );
// // // // // // }

// // // // // // function getLocationName(item) {
// // // // // //   return item?.short_location || item?.location || item?.full_address || "";
// // // // // // }

// // // // // // export default function Hero({ onSearch = () => {}, projects = [] }) {
// // // // // //   const router = useRouter();
// // // // // //   const suggestionRef = useRef(null);

// // // // // //   const [activeItem, setActiveItem] = useState("For sale");
// // // // // //   const [searchText, setSearchText] = useState("");
// // // // // //   const [showSuggestions, setShowSuggestions] = useState(false);
// // // // // //   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

// // // // // //   const [advancedFilters, setAdvancedFilters] = useState({
// // // // // //     keyword: "",
// // // // // //     city: "",
// // // // // //     location: "",
// // // // // //     propertyType: "",
// // // // // //     propertyStatus: "",
// // // // // //     bedrooms: "",
// // // // // //     bathrooms: "",
// // // // // //     amenities: [],
// // // // // //     sortBy: "Newest",
// // // // // //     priceRange: [0, 50000000],
// // // // // //     areaRange: [0, 5000],
// // // // // //   });

// // // // // //   const [cities, setCities] = useState([]);
// // // // // //   const [developers, setDevelopers] = useState([]);
// // // // // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // // // // //   const items = useMemo(() => ["For sale", "For rent"], []);

// // // // // //   useEffect(() => {
// // // // // //     const interval = setInterval(() => {
// // // // // //       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
// // // // // //     }, 4000);

// // // // // //     return () => clearInterval(interval);
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     const loadSearchData = async () => {
// // // // // //       try {
// // // // // //         const [citiesRes, developersRes] = await Promise.all([
// // // // // //           apiGet("/admindashboard/cities/"),
// // // // // //           apiGet("/admindashboard/developers/"),
// // // // // //         ]);

// // // // // //         setCities(Array.isArray(citiesRes) ? citiesRes : []);
// // // // // //         setDevelopers(Array.isArray(developersRes) ? developersRes : []);
// // // // // //       } catch (error) {
// // // // // //         console.error("Hero search data fetch error:", error);
// // // // // //         setCities([]);
// // // // // //         setDevelopers([]);
// // // // // //       }
// // // // // //     };

// // // // // //     loadSearchData();
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     const handleClickOutside = (event) => {
// // // // // //       if (
// // // // // //         suggestionRef.current &&
// // // // // //         !suggestionRef.current.contains(event.target)
// // // // // //       ) {
// // // // // //         setShowSuggestions(false);
// // // // // //         setActiveSuggestionIndex(-1);
// // // // // //       }
// // // // // //     };

// // // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // // // //   }, []);

// // // // // //   const fallbackCitiesFromProjects = useMemo(() => {
// // // // // //     const map = new Map();

// // // // // //     projects.forEach((item) => {
// // // // // //       const city = item.city || "";
// // // // // //       const city_slug = item.city_slug || slugify(city);

// // // // // //       if (city && city_slug) {
// // // // // //         map.set(normalizeText(city), { city, city_slug });
// // // // // //       }
// // // // // //     });

// // // // // //     return Array.from(map.values());
// // // // // //   }, [projects]);

// // // // // //   const fallbackDevelopersFromProjects = useMemo(() => {
// // // // // //     const map = new Map();

// // // // // //     projects.forEach((item) => {
// // // // // //       const developer_name = getDeveloperName(item);
// // // // // //       const developer_slug = item.developer_slug || slugify(developer_name);

// // // // // //       if (developer_name && developer_slug) {
// // // // // //         map.set(normalizeText(developer_name), {
// // // // // //           developer_name,
// // // // // //           developer_slug,
// // // // // //         });
// // // // // //       }
// // // // // //     });

// // // // // //     return Array.from(map.values());
// // // // // //   }, [projects]);

// // // // // //   const finalCities = useMemo(
// // // // // //     () => (cities.length > 0 ? cities : fallbackCitiesFromProjects),
// // // // // //     [cities, fallbackCitiesFromProjects]
// // // // // //   );

// // // // // //   const finalDevelopers = useMemo(
// // // // // //     () => (developers.length > 0 ? developers : fallbackDevelopersFromProjects),
// // // // // //     [developers, fallbackDevelopersFromProjects]
// // // // // //   );

// // // // // //   const findCityMatch = (searchValue) => {
// // // // // //     const normalized = normalizeText(searchValue);
// // // // // //     if (!normalized) return null;

// // // // // //     const exactMatch = finalCities.find((item) => {
// // // // // //       const cityName = normalizeText(item.city);
// // // // // //       const citySlug = normalizeText(item.city_slug);
// // // // // //       return cityName === normalized || citySlug === normalized;
// // // // // //     });

// // // // // //     if (exactMatch) return exactMatch;

// // // // // //     const partialMatch = finalCities.find((item) => {
// // // // // //       const cityName = normalizeText(item.city);
// // // // // //       const citySlug = normalizeText(item.city_slug);
// // // // // //       return cityName.includes(normalized) || citySlug.includes(normalized);
// // // // // //     });

// // // // // //     return partialMatch || null;
// // // // // //   };

// // // // // //   const findDeveloperMatch = (searchValue) => {
// // // // // //     const normalized = normalizeText(searchValue);
// // // // // //     if (!normalized) return null;

// // // // // //     const exactMatch = finalDevelopers.find((item) => {
// // // // // //       const developerName = normalizeText(item.developer_name);
// // // // // //       const developerSlug = normalizeText(item.developer_slug);
// // // // // //       return developerName === normalized || developerSlug === normalized;
// // // // // //     });

// // // // // //     if (exactMatch) return exactMatch;

// // // // // //     const partialMatch = finalDevelopers.find((item) => {
// // // // // //       const developerName = normalizeText(item.developer_name);
// // // // // //       const developerSlug = normalizeText(item.developer_slug);
// // // // // //       return (
// // // // // //         developerName.includes(normalized) || developerSlug.includes(normalized)
// // // // // //       );
// // // // // //     });

// // // // // //     return partialMatch || null;
// // // // // //   };

// // // // // //   const searchSuggestions = useMemo(() => {
// // // // // //     const keyword = normalizeText(searchText);

// // // // // //     if (!keyword || keyword.length < 1) return [];

// // // // // //     const suggestionMap = new Map();

// // // // // //     finalCities.forEach((item) => {
// // // // // //       const cityName = item.city || "";
// // // // // //       const citySlug = item.city_slug || slugify(cityName);

// // // // // //       if (
// // // // // //         normalizeText(cityName).includes(keyword) ||
// // // // // //         normalizeText(citySlug).includes(keyword)
// // // // // //       ) {
// // // // // //         const key = `city-${normalizeText(cityName)}`;

// // // // // //         if (!suggestionMap.has(key)) {
// // // // // //           suggestionMap.set(key, {
// // // // // //             label: cityName,
// // // // // //             subLabel: "City",
// // // // // //             value: cityName,
// // // // // //             type: "city",
// // // // // //             slug: citySlug,
// // // // // //           });
// // // // // //         }
// // // // // //       }
// // // // // //     });

// // // // // //     finalDevelopers.forEach((item) => {
// // // // // //       const developerName = item.developer_name || "";
// // // // // //       const developerSlug = item.developer_slug || slugify(developerName);

// // // // // //       if (
// // // // // //         normalizeText(developerName).includes(keyword) ||
// // // // // //         normalizeText(developerSlug).includes(keyword)
// // // // // //       ) {
// // // // // //         const key = `developer-${normalizeText(developerName)}`;

// // // // // //         if (!suggestionMap.has(key)) {
// // // // // //           suggestionMap.set(key, {
// // // // // //             label: developerName,
// // // // // //             subLabel: "Developer",
// // // // // //             value: developerName,
// // // // // //             type: "developer",
// // // // // //             slug: developerSlug,
// // // // // //           });
// // // // // //         }
// // // // // //       }
// // // // // //     });

// // // // // //     projects.forEach((item) => {
// // // // // //       const title = getProjectTitle(item);
// // // // // //       const city = item.city || "";
// // // // // //       const citySlug = item.city_slug || slugify(city);
// // // // // //       const location = getLocationName(item);
// // // // // //       const address = item.full_address || item.address || "";
// // // // // //       const developer = getDeveloperName(item);
// // // // // //       const propertyType = item.property_type || "";
// // // // // //       const propertyStatus = item.property_status || "";

// // // // // //       const searchableText = normalizeText(
// // // // // //         [
// // // // // //           title,
// // // // // //           city,
// // // // // //           location,
// // // // // //           address,
// // // // // //           developer,
// // // // // //           propertyType,
// // // // // //           propertyStatus,
// // // // // //         ].join(" ")
// // // // // //       );

// // // // // //       if (!searchableText.includes(keyword)) return;

// // // // // //       const mainLabel =
// // // // // //         title || location || city || developer || propertyType || propertyStatus;

// // // // // //       if (!mainLabel) return;

// // // // // //       const subLabel = [location, city, developer]
// // // // // //         .filter(Boolean)
// // // // // //         .filter((value, index, self) => self.indexOf(value) === index)
// // // // // //         .join(" • ");

// // // // // //       const key = `project-${normalizeText(`${mainLabel}-${subLabel}`)}`;

// // // // // //       if (!suggestionMap.has(key)) {
// // // // // //         suggestionMap.set(key, {
// // // // // //           label: mainLabel,
// // // // // //           subLabel: subLabel || "Project",
// // // // // //           value: mainLabel,
// // // // // //           type: "project",
// // // // // //           city,
// // // // // //           citySlug,
// // // // // //           location,
// // // // // //           propertyType,
// // // // // //           propertyStatus,
// // // // // //         });
// // // // // //       }
// // // // // //     });

// // // // // //     return Array.from(suggestionMap.values()).slice(0, 8);
// // // // // //   }, [searchText, projects, finalCities, finalDevelopers]);

// // // // // //   const closeSuggestions = () => {
// // // // // //     setShowSuggestions(false);
// // // // // //     setActiveSuggestionIndex(-1);
// // // // // //   };

// // // // // //   const handleSuggestionSelect = (suggestion) => {
// // // // // //     const selectedValue = suggestion.value || "";

// // // // // //     setSearchText(selectedValue);

// // // // // //     const selectedFilters = {
// // // // // //       ...advancedFilters,
// // // // // //       keyword: selectedValue,
// // // // // //       city: suggestion.type === "city" ? selectedValue : suggestion.city || advancedFilters.city,
// // // // // //       location: suggestion.location || advancedFilters.location,
// // // // // //       propertyType: suggestion.propertyType || advancedFilters.propertyType,
// // // // // //       propertyStatus:
// // // // // //         suggestion.propertyStatus ||
// // // // // //         (activeItem === "For sale" ? "for-sale" : "for-rent"),
// // // // // //     };

// // // // // //     setAdvancedFilters(selectedFilters);
// // // // // //     closeSuggestions();

// // // // // //     if (suggestion.type === "city" && suggestion.slug) {
// // // // // //       router.push(`/cities/${suggestion.slug}`);
// // // // // //       return;
// // // // // //     }

// // // // // //     if (suggestion.type === "developer" && suggestion.slug) {
// // // // // //       router.push(`/developers/${suggestion.slug}`);
// // // // // //       return;
// // // // // //     }

// // // // // //     const cityMatch = findCityMatch(selectedValue);
// // // // // //     if (cityMatch?.city_slug) {
// // // // // //       router.push(`/cities/${cityMatch.city_slug}`);
// // // // // //       return;
// // // // // //     }

// // // // // //     const developerMatch = findDeveloperMatch(selectedValue);
// // // // // //     if (developerMatch?.developer_slug) {
// // // // // //       router.push(`/developers/${developerMatch.developer_slug}`);
// // // // // //       return;
// // // // // //     }

// // // // // //     onSearch(selectedFilters);
// // // // // //   };

// // // // // //   const handleSearch = (e) => {
// // // // // //     if (e) e.preventDefault();

// // // // // //     const mergedFilters = {
// // // // // //       ...advancedFilters,
// // // // // //       keyword: searchText.trim() || advancedFilters.keyword || "",
// // // // // //       propertyStatus: activeItem === "For sale" ? "for-sale" : "for-rent",
// // // // // //     };

// // // // // //     const rawSearch = searchText.trim();

// // // // // //     if (rawSearch) {
// // // // // //       const cityMatch = findCityMatch(rawSearch);
// // // // // //       if (cityMatch?.city_slug) {
// // // // // //         router.push(`/cities/${cityMatch.city_slug}`);
// // // // // //         return;
// // // // // //       }

// // // // // //       const developerMatch = findDeveloperMatch(rawSearch);
// // // // // //       if (developerMatch?.developer_slug) {
// // // // // //         router.push(`/developers/${developerMatch.developer_slug}`);
// // // // // //         return;
// // // // // //       }
// // // // // //     }

// // // // // //     if (mergedFilters.city) {
// // // // // //       const cityMatch = findCityMatch(mergedFilters.city);
// // // // // //       if (cityMatch?.city_slug) {
// // // // // //         router.push(`/cities/${cityMatch.city_slug}`);
// // // // // //         return;
// // // // // //       }
// // // // // //     }

// // // // // //     onSearch(mergedFilters);
// // // // // //     closeSuggestions();
// // // // // //   };

// // // // // //   const handleSearchKeyDown = (e) => {
// // // // // //     if (e.key === "Enter") {
// // // // // //       e.preventDefault();

// // // // // //       if (
// // // // // //         showSuggestions &&
// // // // // //         activeSuggestionIndex >= 0 &&
// // // // // //         searchSuggestions[activeSuggestionIndex]
// // // // // //       ) {
// // // // // //         handleSuggestionSelect(searchSuggestions[activeSuggestionIndex]);
// // // // // //         return;
// // // // // //       }

// // // // // //       handleSearch(e);
// // // // // //       return;
// // // // // //     }

// // // // // //     if (!showSuggestions || searchSuggestions.length === 0) return;

// // // // // //     if (e.key === "ArrowDown") {
// // // // // //       e.preventDefault();

// // // // // //       setActiveSuggestionIndex((prev) =>
// // // // // //         prev < searchSuggestions.length - 1 ? prev + 1 : 0
// // // // // //       );
// // // // // //     }

// // // // // //     if (e.key === "ArrowUp") {
// // // // // //       e.preventDefault();

// // // // // //       setActiveSuggestionIndex((prev) =>
// // // // // //         prev > 0 ? prev - 1 : searchSuggestions.length - 1
// // // // // //       );
// // // // // //     }

// // // // // //     if (e.key === "Escape") {
// // // // // //       closeSuggestions();
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="page-title home01 hero-slider-wrap">
// // // // // //       <div className="hero-bg-slider">
// // // // // //         {HERO_IMAGES.map((image, index) => (
// // // // // //           <div
// // // // // //             key={image}
// // // // // //             className={`hero-bg-slide ${
// // // // // //               index === currentBgIndex ? "active" : ""
// // // // // //             }`}
// // // // // //             style={{ backgroundImage: `url('${image}')` }}
// // // // // //           />
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <div className="hero-overlay" />

// // // // // //       <div className="tf-container">
// // // // // //         <div className="row justify-center relative">
// // // // // //           <div className="col-lg-8">
// // // // // //             <div className="content-inner">
// // // // // //               <div className="heading-title">
// // // // // //                 <h1 className="title">GROWL REAL ESTATE</h1>
// // // // // //                 <p className="h6 fw-4">
// // // // // //                   Discover exclusive luxury projects, trusted by thousands of
// // // // // //                   homebuyers every month.
// // // // // //                 </p>
// // // // // //               </div>

// // // // // //               <div className="wg-filter">
// // // // // //                 <div className="form-title">
// // // // // //                   <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
// // // // // //                     <div className="btn-select">
// // // // // //                       <span className="text-sort-value">{activeItem}</span>
// // // // // //                       <i className="icon-CaretDown" />
// // // // // //                     </div>

// // // // // //                     <div className="dropdown-menu">
// // // // // //                       {items.map((item) => (
// // // // // //                         <div
// // // // // //                           key={item}
// // // // // //                           className={`select-item ${
// // // // // //                             activeItem === item ? "active" : ""
// // // // // //                           }`}
// // // // // //                           onClick={() => setActiveItem(item)}
// // // // // //                         >
// // // // // //                           <span className="text-value-item">{item}</span>
// // // // // //                         </div>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   <form
// // // // // //                     onSubmit={handleSearch}
// // // // // //                     style={{ flex: 1 }}
// // // // // //                     ref={suggestionRef}
// // // // // //                   >
// // // // // //                     <fieldset className="hero-search-fieldset">
// // // // // //                       <input
// // // // // //                         type="text"
// // // // // //                         placeholder="Search city, developer, project, location..."
// // // // // //                         value={searchText}
// // // // // //                         autoComplete="off"
// // // // // //                         onChange={(e) => {
// // // // // //                           setSearchText(e.target.value);
// // // // // //                           setShowSuggestions(true);
// // // // // //                           setActiveSuggestionIndex(-1);
// // // // // //                         }}
// // // // // //                         onFocus={() => {
// // // // // //                           if (searchText) setShowSuggestions(true);
// // // // // //                         }}
// // // // // //                         onKeyDown={handleSearchKeyDown}
// // // // // //                       />

// // // // // //                       {showSuggestions && searchText && (
// // // // // //                         <div className="hero-search-suggestions">
// // // // // //                           {searchSuggestions.length > 0 ? (
// // // // // //                             searchSuggestions.map((suggestion, index) => (
// // // // // //                               <button
// // // // // //                                 type="button"
// // // // // //                                 key={`${suggestion.type}-${suggestion.label}-${index}`}
// // // // // //                                 className={`hero-suggestion-item ${
// // // // // //                                   activeSuggestionIndex === index
// // // // // //                                     ? "active"
// // // // // //                                     : ""
// // // // // //                                 }`}
// // // // // //                                 onMouseDown={(e) => {
// // // // // //                                   e.preventDefault();
// // // // // //                                   handleSuggestionSelect(suggestion);
// // // // // //                                 }}
// // // // // //                                 onMouseEnter={() =>
// // // // // //                                   setActiveSuggestionIndex(index)
// // // // // //                                 }
// // // // // //                               >
// // // // // //                                 <span className="hero-suggestion-label">
// // // // // //                                   {suggestion.label}
// // // // // //                                 </span>

// // // // // //                                 {suggestion.subLabel && (
// // // // // //                                   <span className="hero-suggestion-sub">
// // // // // //                                     {suggestion.subLabel}
// // // // // //                                   </span>
// // // // // //                                 )}
// // // // // //                               </button>
// // // // // //                             ))
// // // // // //                           ) : (
// // // // // //                             <div className="hero-no-suggestion">
// // // // // //                               No matching result found
// // // // // //                             </div>
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                       )}
// // // // // //                     </fieldset>
// // // // // //                   </form>

// // // // // //                   <div className="box-item wrap-btn">
// // // // // //                     <div className="btn-filter show-form searchFormToggler">
// // // // // //                       <div className="icons">
// // // // // //                         <svg
// // // // // //                           width={24}
// // // // // //                           height={24}
// // // // // //                           viewBox="0 0 24 24"
// // // // // //                           fill="none"
// // // // // //                           xmlns="http://www.w3.org/2000/svg"
// // // // // //                         >
// // // // // //                           <path d="M21 4H14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // //                           <path d="M10 4H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // //                           <path d="M21 12H12" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // //                           <path d="M8 12H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // //                           <path d="M21 20H16" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // //                           <path d="M12 20H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // //                           <path d="M14 2V6" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // //                           <path d="M8 10V14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // //                           <path d="M16 18V22" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // // // // //                         </svg>
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     <button
// // // // // //                       type="button"
// // // // // //                       onClick={handleSearch}
// // // // // //                       className="tf-btn bg-color-primary pd-3"
// // // // // //                     >
// // // // // //                       Search <i className="icon-MagnifyingGlass fw-6" />
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 <SearchForm
// // // // // //                   onFilterChange={setAdvancedFilters}
// // // // // //                   projects={projects}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx>{`
// // // // // //         .hero-slider-wrap {
// // // // // //           position: relative;
// // // // // //           overflow: hidden;
// // // // // //           min-height: 760px;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //         }

// // // // // //         .hero-bg-slider {
// // // // // //           position: absolute;
// // // // // //           inset: 0;
// // // // // //           z-index: 0;
// // // // // //         }

// // // // // //         .hero-bg-slide {
// // // // // //           position: absolute;
// // // // // //           inset: 0;
// // // // // //           background-size: cover;
// // // // // //           background-position: center;
// // // // // //           background-repeat: no-repeat;
// // // // // //           opacity: 0;
// // // // // //           transform: scale(1.05);
// // // // // //           transition: opacity 1.2s ease, transform 5s ease;
// // // // // //         }

// // // // // //         .hero-bg-slide.active {
// // // // // //           opacity: 1;
// // // // // //           transform: scale(1);
// // // // // //         }

// // // // // //         .hero-overlay {
// // // // // //           position: absolute;
// // // // // //           inset: 0;
// // // // // //           background: linear-gradient(
// // // // // //             90deg,
// // // // // //             rgba(11, 19, 32, 0.72) 0%,
// // // // // //             rgba(15, 27, 45, 0.58) 45%,
// // // // // //             rgba(17, 24, 39, 0.45) 100%
// // // // // //           );
// // // // // //           z-index: 1;
// // // // // //         }

// // // // // //         .tf-container {
// // // // // //           position: relative;
// // // // // //           z-index: 2;
// // // // // //         }

// // // // // //         .content-inner {
// // // // // //           color: #fff;
// // // // // //           transform: translateY(-75px);
// // // // // //         }

// // // // // //         .heading-title {
// // // // // //           margin-bottom: 22px;
// // // // // //         }

// // // // // //         .heading-title .title {
// // // // // //           color: #fff;
// // // // // //         }

// // // // // //         .heading-title p {
// // // // // //           color: rgba(255, 255, 255, 0.9);
// // // // // //         }

// // // // // //         .wg-filter {
// // // // // //           margin-top: 18px;
// // // // // //           background: rgba(255, 255, 255, 0.12);
// // // // // //           backdrop-filter: blur(14px);
// // // // // //           -webkit-backdrop-filter: blur(14px);
// // // // // //           border: 1px solid rgba(255, 255, 255, 0.18);
// // // // // //           border-radius: 24px;
// // // // // //           padding: 18px;
// // // // // //         }

// // // // // //         .form-title {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           gap: 12px;
// // // // // //           flex-wrap: wrap;
// // // // // //         }

// // // // // //         .form-title form {
// // // // // //           min-width: 280px;
// // // // // //           position: relative;
// // // // // //         }

// // // // // //         .hero-search-fieldset {
// // // // // //           position: relative;
// // // // // //           margin: 0;
// // // // // //           padding: 0;
// // // // // //           border: 0;
// // // // // //         }

// // // // // //         .form-title input {
// // // // // //           width: 100%;
// // // // // //           min-height: 56px;
// // // // // //           border-radius: 14px;
// // // // // //           border: 1px solid rgba(255, 255, 255, 0.22);
// // // // // //           background: rgba(255, 255, 255, 0.92);
// // // // // //           color: #111827;
// // // // // //           padding: 0 16px;
// // // // // //         }

// // // // // //         .hero-search-suggestions {
// // // // // //           position: absolute;
// // // // // //           top: calc(100% + 8px);
// // // // // //           left: 0;
// // // // // //           right: 0;
// // // // // //           z-index: 99999;
// // // // // //           background: #ffffff;
// // // // // //           border: 1px solid #e5e7eb;
// // // // // //           border-radius: 14px;
// // // // // //           box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
// // // // // //           overflow: hidden;
// // // // // //           max-height: 330px;
// // // // // //           overflow-y: auto;
// // // // // //         }

// // // // // //         .hero-suggestion-item {
// // // // // //           width: 100%;
// // // // // //           display: block;
// // // // // //           text-align: left;
// // // // // //           padding: 12px 16px;
// // // // // //           border: 0;
// // // // // //           border-bottom: 1px solid #f1f1f1;
// // // // // //           background: #ffffff;
// // // // // //           cursor: pointer;
// // // // // //         }

// // // // // //         .hero-suggestion-item:last-child {
// // // // // //           border-bottom: 0;
// // // // // //         }

// // // // // //         .hero-suggestion-item:hover,
// // // // // //         .hero-suggestion-item.active {
// // // // // //           background: #f8fafc;
// // // // // //         }

// // // // // //         .hero-suggestion-label {
// // // // // //           display: block;
// // // // // //           font-size: 15px;
// // // // // //           font-weight: 600;
// // // // // //           color: #111827;
// // // // // //           line-height: 1.3;
// // // // // //         }

// // // // // //         .hero-suggestion-sub {
// // // // // //           display: block;
// // // // // //           font-size: 13px;
// // // // // //           font-weight: 400;
// // // // // //           color: #6b7280;
// // // // // //           margin-top: 3px;
// // // // // //           line-height: 1.3;
// // // // // //         }

// // // // // //         .hero-no-suggestion {
// // // // // //           padding: 14px 16px;
// // // // // //           font-size: 14px;
// // // // // //           color: #6b7280;
// // // // // //           background: #ffffff;
// // // // // //         }

// // // // // //         .btn-select {
// // // // // //           min-height: 56px;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: space-between;
// // // // // //           gap: 10px;
// // // // // //           padding: 0 16px;
// // // // // //           border-radius: 14px;
// // // // // //           background: rgba(255, 255, 255, 0.92);
// // // // // //           color: #111827;
// // // // // //           min-width: 150px;
// // // // // //           cursor: pointer;
// // // // // //         }

// // // // // //         .wrap-btn {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           gap: 12px;
// // // // // //         }

// // // // // //         .btn-filter {
// // // // // //           width: 56px;
// // // // // //           height: 56px;
// // // // // //           border-radius: 14px;
// // // // // //           background: rgba(255, 255, 255, 0.92);
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           cursor: pointer;
// // // // // //         }

// // // // // //         @media (max-width: 991px) {
// // // // // //           .hero-slider-wrap {
// // // // // //             min-height: 720px;
// // // // // //           }

// // // // // //           .content-inner {
// // // // // //             transform: translateY(-35px);
// // // // // //           }

// // // // // //           .form-title {
// // // // // //             flex-direction: column;
// // // // // //             align-items: stretch;
// // // // // //           }

// // // // // //           .wrap-btn {
// // // // // //             width: 100%;
// // // // // //             justify-content: space-between;
// // // // // //           }

// // // // // //           .form-title form {
// // // // // //             width: 100%;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (max-width: 575px) {
// // // // // //           .hero-slider-wrap {
// // // // // //             min-height: 700px;
// // // // // //           }

// // // // // //           .content-inner {
// // // // // //             transform: translateY(-20px);
// // // // // //           }

// // // // // //           .wg-filter {
// // // // // //             padding: 14px;
// // // // // //             border-radius: 20px;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // }





// // // // // "use client";

// // // // // import SearchForm from "@/components/common/SearchForm";
// // // // // import React, { useEffect, useMemo, useRef, useState } from "react";
// // // // // import { createPortal } from "react-dom";
// // // // // import { useRouter } from "next/navigation";
// // // // // import { apiGet } from "../../lib/api";

// // // // // const HERO_IMAGES = [
// // // // //   "https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1600&auto=format&fit=crop",
// // // // //   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
// // // // //   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
// // // // //   "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
// // // // // ];

// // // // // function normalizeText(value) {
// // // // //   return String(value || "").trim().toLowerCase();
// // // // // }

// // // // // function slugify(value) {
// // // // //   return String(value || "")
// // // // //     .trim()
// // // // //     .toLowerCase()
// // // // //     .replace(/&/g, "and")
// // // // //     .replace(/[^\w\s-]/g, "")
// // // // //     .replace(/\s+/g, "-")
// // // // //     .replace(/-+/g, "-");
// // // // // }

// // // // // function getProjectTitle(item) {
// // // // //   return (
// // // // //     item?.title ||
// // // // //     item?.project_name ||
// // // // //     item?.property_name ||
// // // // //     item?.name ||
// // // // //     ""
// // // // //   );
// // // // // }

// // // // // function getDeveloperName(item) {
// // // // //   return (
// // // // //     item?.developer_name ||
// // // // //     item?.developer ||
// // // // //     item?.builder_name ||
// // // // //     item?.builder ||
// // // // //     ""
// // // // //   );
// // // // // }

// // // // // function getLocationName(item) {
// // // // //   return item?.short_location || item?.location || item?.full_address || "";
// // // // // }

// // // // // export default function Hero({ onSearch = () => {}, projects = [] }) {
// // // // //   const router = useRouter();

// // // // //   const suggestionRef = useRef(null);
// // // // //   const fixedSuggestionRef = useRef(null);

// // // // //   const [mounted, setMounted] = useState(false);
// // // // //   const [activeItem, setActiveItem] = useState("For sale");
// // // // //   const [searchText, setSearchText] = useState("");
// // // // //   const [showSuggestions, setShowSuggestions] = useState(false);
// // // // //   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
// // // // //   const [isSearchFixed, setIsSearchFixed] = useState(false);

// // // // //   const [advancedFilters, setAdvancedFilters] = useState({
// // // // //     keyword: "",
// // // // //     city: "",
// // // // //     location: "",
// // // // //     propertyType: "",
// // // // //     propertyStatus: "",
// // // // //     bedrooms: "",
// // // // //     bathrooms: "",
// // // // //     amenities: [],
// // // // //     sortBy: "Newest",
// // // // //     priceRange: [0, 50000000],
// // // // //     areaRange: [0, 5000],
// // // // //   });

// // // // //   const [cities, setCities] = useState([]);
// // // // //   const [developers, setDevelopers] = useState([]);
// // // // //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// // // // //   // const items = useMemo(() => ["For sale", "For rent"], []);

// // // // //   useEffect(() => {
// // // // //     setMounted(true);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const interval = setInterval(() => {
// // // // //       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
// // // // //     }, 4000);

// // // // //     return () => clearInterval(interval);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setIsSearchFixed(window.scrollY > 210);
// // // // //     };

// // // // //     handleScroll();

// // // // //     window.addEventListener("scroll", handleScroll, { passive: true });

// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const loadSearchData = async () => {
// // // // //       try {
// // // // //         const [citiesRes, developersRes] = await Promise.all([
// // // // //           apiGet("/admindashboard/cities/"),
// // // // //           apiGet("/admindashboard/developers/"),
// // // // //         ]);

// // // // //         setCities(Array.isArray(citiesRes) ? citiesRes : []);
// // // // //         setDevelopers(Array.isArray(developersRes) ? developersRes : []);
// // // // //       } catch (error) {
// // // // //         console.error("Hero search data fetch error:", error);
// // // // //         setCities([]);
// // // // //         setDevelopers([]);
// // // // //       }
// // // // //     };

// // // // //     loadSearchData();
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const handleClickOutside = (event) => {
// // // // //       const normalSearch = suggestionRef.current;
// // // // //       const fixedSearch = fixedSuggestionRef.current;

// // // // //       const clickedInsideNormal =
// // // // //         normalSearch && normalSearch.contains(event.target);

// // // // //       const clickedInsideFixed =
// // // // //         fixedSearch && fixedSearch.contains(event.target);

// // // // //       if (!clickedInsideNormal && !clickedInsideFixed) {
// // // // //         setShowSuggestions(false);
// // // // //         setActiveSuggestionIndex(-1);
// // // // //       }
// // // // //     };

// // // // //     document.addEventListener("mousedown", handleClickOutside);

// // // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // // //   }, []);

// // // // //   const fallbackCitiesFromProjects = useMemo(() => {
// // // // //     const map = new Map();

// // // // //     projects.forEach((item) => {
// // // // //       const city = item.city || "";
// // // // //       const city_slug = item.city_slug || slugify(city);

// // // // //       if (city && city_slug) {
// // // // //         map.set(normalizeText(city), { city, city_slug });
// // // // //       }
// // // // //     });

// // // // //     return Array.from(map.values());
// // // // //   }, [projects]);

// // // // //   const fallbackDevelopersFromProjects = useMemo(() => {
// // // // //     const map = new Map();

// // // // //     projects.forEach((item) => {
// // // // //       const developer_name = getDeveloperName(item);
// // // // //       const developer_slug = item.developer_slug || slugify(developer_name);

// // // // //       if (developer_name && developer_slug) {
// // // // //         map.set(normalizeText(developer_name), {
// // // // //           developer_name,
// // // // //           developer_slug,
// // // // //         });
// // // // //       }
// // // // //     });

// // // // //     return Array.from(map.values());
// // // // //   }, [projects]);

// // // // //   const finalCities = useMemo(
// // // // //     () => (cities.length > 0 ? cities : fallbackCitiesFromProjects),
// // // // //     [cities, fallbackCitiesFromProjects]
// // // // //   );

// // // // //   const finalDevelopers = useMemo(
// // // // //     () => (developers.length > 0 ? developers : fallbackDevelopersFromProjects),
// // // // //     [developers, fallbackDevelopersFromProjects]
// // // // //   );

// // // // //   const findCityMatch = (searchValue) => {
// // // // //     const normalized = normalizeText(searchValue);

// // // // //     if (!normalized) return null;

// // // // //     const exactMatch = finalCities.find((item) => {
// // // // //       const cityName = normalizeText(item.city);
// // // // //       const citySlug = normalizeText(item.city_slug);

// // // // //       return cityName === normalized || citySlug === normalized;
// // // // //     });

// // // // //     if (exactMatch) return exactMatch;

// // // // //     const partialMatch = finalCities.find((item) => {
// // // // //       const cityName = normalizeText(item.city);
// // // // //       const citySlug = normalizeText(item.city_slug);

// // // // //       return cityName.includes(normalized) || citySlug.includes(normalized);
// // // // //     });

// // // // //     return partialMatch || null;
// // // // //   };

// // // // //   const findDeveloperMatch = (searchValue) => {
// // // // //     const normalized = normalizeText(searchValue);

// // // // //     if (!normalized) return null;

// // // // //     const exactMatch = finalDevelopers.find((item) => {
// // // // //       const developerName = normalizeText(item.developer_name);
// // // // //       const developerSlug = normalizeText(item.developer_slug);

// // // // //       return developerName === normalized || developerSlug === normalized;
// // // // //     });

// // // // //     if (exactMatch) return exactMatch;

// // // // //     const partialMatch = finalDevelopers.find((item) => {
// // // // //       const developerName = normalizeText(item.developer_name);
// // // // //       const developerSlug = normalizeText(item.developer_slug);

// // // // //       return (
// // // // //         developerName.includes(normalized) || developerSlug.includes(normalized)
// // // // //       );
// // // // //     });

// // // // //     return partialMatch || null;
// // // // //   };

// // // // //   const searchSuggestions = useMemo(() => {
// // // // //     const keyword = normalizeText(searchText);

// // // // //     if (!keyword || keyword.length < 1) return [];

// // // // //     const suggestionMap = new Map();

// // // // //     finalCities.forEach((item) => {
// // // // //       const cityName = item.city || "";
// // // // //       const citySlug = item.city_slug || slugify(cityName);

// // // // //       if (
// // // // //         normalizeText(cityName).includes(keyword) ||
// // // // //         normalizeText(citySlug).includes(keyword)
// // // // //       ) {
// // // // //         const key = `city-${normalizeText(cityName)}`;

// // // // //         if (!suggestionMap.has(key)) {
// // // // //           suggestionMap.set(key, {
// // // // //             label: cityName,
// // // // //             subLabel: "City",
// // // // //             value: cityName,
// // // // //             type: "city",
// // // // //             slug: citySlug,
// // // // //           });
// // // // //         }
// // // // //       }
// // // // //     });

// // // // //     finalDevelopers.forEach((item) => {
// // // // //       const developerName = item.developer_name || "";
// // // // //       const developerSlug = item.developer_slug || slugify(developerName);

// // // // //       if (
// // // // //         normalizeText(developerName).includes(keyword) ||
// // // // //         normalizeText(developerSlug).includes(keyword)
// // // // //       ) {
// // // // //         const key = `developer-${normalizeText(developerName)}`;

// // // // //         if (!suggestionMap.has(key)) {
// // // // //           suggestionMap.set(key, {
// // // // //             label: developerName,
// // // // //             subLabel: "Developer",
// // // // //             value: developerName,
// // // // //             type: "developer",
// // // // //             slug: developerSlug,
// // // // //           });
// // // // //         }
// // // // //       }
// // // // //     });

// // // // //     projects.forEach((item) => {
// // // // //       const title = getProjectTitle(item);
// // // // //       const city = item.city || "";
// // // // //       const citySlug = item.city_slug || slugify(city);
// // // // //       const location = getLocationName(item);
// // // // //       const address = item.full_address || item.address || "";
// // // // //       const developer = getDeveloperName(item);
// // // // //       const propertyType = item.property_type || "";
// // // // //       const propertyStatus = item.property_status || "";

// // // // //       const searchableText = normalizeText(
// // // // //         [
// // // // //           title,
// // // // //           city,
// // // // //           location,
// // // // //           address,
// // // // //           developer,
// // // // //           propertyType,
// // // // //           propertyStatus,
// // // // //         ].join(" ")
// // // // //       );

// // // // //       if (!searchableText.includes(keyword)) return;

// // // // //       const mainLabel =
// // // // //         title || location || city || developer || propertyType || propertyStatus;

// // // // //       if (!mainLabel) return;

// // // // //       const subLabel = [location, city, developer]
// // // // //         .filter(Boolean)
// // // // //         .filter((value, index, self) => self.indexOf(value) === index)
// // // // //         .join(" • ");

// // // // //       const key = `project-${normalizeText(`${mainLabel}-${subLabel}`)}`;

// // // // //       if (!suggestionMap.has(key)) {
// // // // //         suggestionMap.set(key, {
// // // // //           label: mainLabel,
// // // // //           subLabel: subLabel || "Project",
// // // // //           value: mainLabel,
// // // // //           type: "project",
// // // // //           city,
// // // // //           citySlug,
// // // // //           location,
// // // // //           propertyType,
// // // // //           propertyStatus,
// // // // //         });
// // // // //       }
// // // // //     });

// // // // //     return Array.from(suggestionMap.values()).slice(0, 8);
// // // // //   }, [searchText, projects, finalCities, finalDevelopers]);

// // // // //   const closeSuggestions = () => {
// // // // //     setShowSuggestions(false);
// // // // //     setActiveSuggestionIndex(-1);
// // // // //   };

// // // // //   const handleSuggestionSelect = (suggestion) => {
// // // // //     const selectedValue = suggestion.value || "";

// // // // //     setSearchText(selectedValue);

// // // // //     const selectedFilters = {
// // // // //       ...advancedFilters,
// // // // //       keyword: selectedValue,
// // // // //       city:
// // // // //         suggestion.type === "city"
// // // // //           ? selectedValue
// // // // //           : suggestion.city || advancedFilters.city,
// // // // //       location: suggestion.location || advancedFilters.location,
// // // // //       propertyType: suggestion.propertyType || advancedFilters.propertyType,
// // // // //       propertyStatus:
// // // // //         suggestion.propertyStatus ||
// // // // //         (activeItem === "For sale" ? "for-sale" : "for-rent"),
// // // // //     };

// // // // //     setAdvancedFilters(selectedFilters);
// // // // //     closeSuggestions();

// // // // //     if (suggestion.type === "city" && suggestion.slug) {
// // // // //       router.push(`/cities/${suggestion.slug}`);
// // // // //       return;
// // // // //     }

// // // // //     if (suggestion.type === "developer" && suggestion.slug) {
// // // // //       router.push(`/developers/${suggestion.slug}`);
// // // // //       return;
// // // // //     }

// // // // //     const cityMatch = findCityMatch(selectedValue);

// // // // //     if (cityMatch?.city_slug) {
// // // // //       router.push(`/cities/${cityMatch.city_slug}`);
// // // // //       return;
// // // // //     }

// // // // //     const developerMatch = findDeveloperMatch(selectedValue);

// // // // //     if (developerMatch?.developer_slug) {
// // // // //       router.push(`/developers/${developerMatch.developer_slug}`);
// // // // //       return;
// // // // //     }

// // // // //     onSearch(selectedFilters);
// // // // //   };

// // // // //   const handleSearch = (e) => {
// // // // //     if (e) e.preventDefault();

// // // // //     const mergedFilters = {
// // // // //       ...advancedFilters,
// // // // //       keyword: searchText.trim() || advancedFilters.keyword || "",
// // // // //       propertyStatus: activeItem === "For sale" ? "for-sale" : "for-rent",
// // // // //     };

// // // // //     const rawSearch = searchText.trim();

// // // // //     if (rawSearch) {
// // // // //       const cityMatch = findCityMatch(rawSearch);

// // // // //       if (cityMatch?.city_slug) {
// // // // //         router.push(`/cities/${cityMatch.city_slug}`);
// // // // //         return;
// // // // //       }

// // // // //       const developerMatch = findDeveloperMatch(rawSearch);

// // // // //       if (developerMatch?.developer_slug) {
// // // // //         router.push(`/developers/${developerMatch.developer_slug}`);
// // // // //         return;
// // // // //       }
// // // // //     }

// // // // //     if (mergedFilters.city) {
// // // // //       const cityMatch = findCityMatch(mergedFilters.city);

// // // // //       if (cityMatch?.city_slug) {
// // // // //         router.push(`/cities/${cityMatch.city_slug}`);
// // // // //         return;
// // // // //       }
// // // // //     }

// // // // //     onSearch(mergedFilters);
// // // // //     closeSuggestions();
// // // // //   };

// // // // //   const handleSearchKeyDown = (e) => {
// // // // //     if (e.key === "Enter") {
// // // // //       e.preventDefault();

// // // // //       if (
// // // // //         showSuggestions &&
// // // // //         activeSuggestionIndex >= 0 &&
// // // // //         searchSuggestions[activeSuggestionIndex]
// // // // //       ) {
// // // // //         handleSuggestionSelect(searchSuggestions[activeSuggestionIndex]);
// // // // //         return;
// // // // //       }

// // // // //       handleSearch(e);
// // // // //       return;
// // // // //     }

// // // // //     if (!showSuggestions || searchSuggestions.length === 0) return;

// // // // //     if (e.key === "ArrowDown") {
// // // // //       e.preventDefault();

// // // // //       setActiveSuggestionIndex((prev) =>
// // // // //         prev < searchSuggestions.length - 1 ? prev + 1 : 0
// // // // //       );
// // // // //     }

// // // // //     if (e.key === "ArrowUp") {
// // // // //       e.preventDefault();

// // // // //       setActiveSuggestionIndex((prev) =>
// // // // //         prev > 0 ? prev - 1 : searchSuggestions.length - 1
// // // // //       );
// // // // //     }

// // // // //     if (e.key === "Escape") {
// // // // //       closeSuggestions();
// // // // //     }
// // // // //   };

// // // // //   const renderSearchFilter = ({ fixed = false } = {}) => {
// // // // //     return (
// // // // //       <div className={`wg-filter ${fixed ? "wg-filter-fixed" : ""}`}>
// // // // //         <div className="form-title">
// // // // //           {/* <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
// // // // //             <div className="btn-select">
// // // // //               <span className="text-sort-value">{activeItem}</span>
// // // // //               <i className="icon-CaretDown" />
// // // // //             </div>

// // // // //             <div className="dropdown-menu">
// // // // //               {items.map((item) => (
// // // // //                 <div
// // // // //                   key={item}
// // // // //                   className={`select-item ${
// // // // //                     activeItem === item ? "active" : ""
// // // // //                   }`}
// // // // //                   onClick={() => setActiveItem(item)}
// // // // //                 >
// // // // //                   <span className="text-value-item">{item}</span>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div> */}

// // // // //           <form
// // // // //             onSubmit={handleSearch}
// // // // //             className="hero-search-form"
// // // // //             ref={fixed ? fixedSuggestionRef : suggestionRef}
// // // // //           >
// // // // //             <fieldset className="hero-search-fieldset">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Search city, developer, project, location..."
// // // // //                 value={searchText}
// // // // //                 autoComplete="off"
// // // // //                 onChange={(e) => {
// // // // //                   setSearchText(e.target.value);
// // // // //                   setShowSuggestions(true);
// // // // //                   setActiveSuggestionIndex(-1);
// // // // //                 }}
// // // // //                 onFocus={() => {
// // // // //                   if (searchText) setShowSuggestions(true);
// // // // //                 }}
// // // // //                 onKeyDown={handleSearchKeyDown}
// // // // //               />

// // // // //               {showSuggestions && searchText && (
// // // // //                 <div className="hero-search-suggestions">
// // // // //                   {searchSuggestions.length > 0 ? (
// // // // //                     searchSuggestions.map((suggestion, index) => (
// // // // //                       <button
// // // // //                         type="button"
// // // // //                         key={`${suggestion.type}-${suggestion.label}-${index}`}
// // // // //                         className={`hero-suggestion-item ${
// // // // //                           activeSuggestionIndex === index ? "active" : ""
// // // // //                         }`}
// // // // //                         onMouseDown={(e) => {
// // // // //                           e.preventDefault();
// // // // //                           handleSuggestionSelect(suggestion);
// // // // //                         }}
// // // // //                         onMouseEnter={() => setActiveSuggestionIndex(index)}
// // // // //                       >
// // // // //                         <span className="hero-suggestion-label">
// // // // //                           {suggestion.label}
// // // // //                         </span>

// // // // //                         {suggestion.subLabel && (
// // // // //                           <span className="hero-suggestion-sub">
// // // // //                             {suggestion.subLabel}
// // // // //                           </span>
// // // // //                         )}
// // // // //                       </button>
// // // // //                     ))
// // // // //                   ) : (
// // // // //                     <div className="hero-no-suggestion">
// // // // //                       No matching result found
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               )}
// // // // //             </fieldset>
// // // // //           </form>

// // // // //           <div className="box-item wrap-btn">
// // // // //             <div className="btn-filter show-form searchFormToggler">
// // // // //               <div className="icons">
// // // // //                 <svg
// // // // //                   width={24}
// // // // //                   height={24}
// // // // //                   viewBox="0 0 24 24"
// // // // //                   fill="none"
// // // // //                   xmlns="http://www.w3.org/2000/svg"
// // // // //                 >
// // // // //                   <path
// // // // //                     d="M21 4H14"
// // // // //                     stroke="#F1913D"
// // // // //                     strokeWidth={2}
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                   />
// // // // //                   <path
// // // // //                     d="M10 4H3"
// // // // //                     stroke="#F1913D"
// // // // //                     strokeWidth={2}
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                   />
// // // // //                   <path
// // // // //                     d="M21 12H12"
// // // // //                     stroke="#F1913D"
// // // // //                     strokeWidth={2}
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                   />
// // // // //                   <path
// // // // //                     d="M8 12H3"
// // // // //                     stroke="#F1913D"
// // // // //                     strokeWidth={2}
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                   />
// // // // //                   <path
// // // // //                     d="M21 20H16"
// // // // //                     stroke="#F1913D"
// // // // //                     strokeWidth={2}
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                   />
// // // // //                   <path
// // // // //                     d="M12 20H3"
// // // // //                     stroke="#F1913D"
// // // // //                     strokeWidth={2}
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                   />
// // // // //                   <path
// // // // //                     d="M14 2V6"
// // // // //                     stroke="#F1913D"
// // // // //                     strokeWidth={2}
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                   />
// // // // //                   <path
// // // // //                     d="M8 10V14"
// // // // //                     stroke="#F1913D"
// // // // //                     strokeWidth={2}
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                   />
// // // // //                   <path
// // // // //                     d="M16 18V22"
// // // // //                     stroke="#F1913D"
// // // // //                     strokeWidth={2}
// // // // //                     strokeLinecap="round"
// // // // //                     strokeLinejoin="round"
// // // // //                   />
// // // // //                 </svg>
// // // // //               </div>
// // // // //             </div>

// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={handleSearch}
// // // // //               className="tf-btn bg-color-primary pd-3"
// // // // //             >
// // // // //               Search <i className="icon-MagnifyingGlass fw-6" />
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         <SearchForm onFilterChange={setAdvancedFilters} projects={projects} />
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <div className="page-title home01 hero-slider-wrap">
// // // // //         <div className="hero-bg-slider">
// // // // //           {HERO_IMAGES.map((image, index) => (
// // // // //             <div
// // // // //               key={`${image}-${index}`}
// // // // //               className={`hero-bg-slide ${
// // // // //                 index === currentBgIndex ? "active" : ""
// // // // //               }`}
// // // // //               style={{ backgroundImage: `url('${image}')` }}
// // // // //             />
// // // // //           ))}
// // // // //         </div>

// // // // //         <div className="hero-overlay" />

// // // // //         <div className="tf-container hero-main-container">
// // // // //           <div className="row justify-center relative">
// // // // //             <div className="col-lg-10 col-xl-10">
// // // // //               <div className="content-inner">
// // // // //                 <div className="heading-title">
// // // // //                   <h1 className="title">GROWL REAL ESTATE</h1>
// // // // //                   <p className="h6 fw-4">
// // // // //                     Discover exclusive luxury projects, trusted by thousands of
// // // // //                     homebuyers every month.
// // // // //                   </p>
// // // // //                 </div>

// // // // //                 <div className="hero-search-normal-wrap">
// // // // //                   {renderSearchFilter({ fixed: false })}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <style jsx global>{`
// // // // //           .hero-slider-wrap {
// // // // //             position: relative;
// // // // //             overflow: hidden;
// // // // //             min-height: 430px;
// // // // //             height: 54vh;
// // // // //             max-height: 500px;
// // // // //             display: flex;
// // // // //             align-items: center;
// // // // //           }

// // // // //           .hero-bg-slider {
// // // // //             position: absolute;
// // // // //             inset: 0;
// // // // //             z-index: 0;
// // // // //             overflow: hidden;
// // // // //           }

// // // // //           .hero-bg-slide {
// // // // //             position: absolute;
// // // // //             inset: 0;
// // // // //             background-size: cover;
// // // // //             background-position: center;
// // // // //             background-repeat: no-repeat;
// // // // //             opacity: 0;
// // // // //             transform: scale(1.05);
// // // // //             transition: opacity 1.2s ease, transform 5s ease;
// // // // //           }

// // // // //           .hero-bg-slide.active {
// // // // //             opacity: 1;
// // // // //             transform: scale(1);
// // // // //           }

// // // // //           .hero-overlay {
// // // // //             position: absolute;
// // // // //             inset: 0;
// // // // //             background: linear-gradient(
// // // // //               90deg,
// // // // //               rgba(11, 19, 32, 0.72) 0%,
// // // // //               rgba(15, 27, 45, 0.58) 45%,
// // // // //               rgba(17, 24, 39, 0.45) 100%
// // // // //             );
// // // // //             z-index: 1;
// // // // //           }

// // // // //           .hero-main-container {
// // // // //             position: relative;
// // // // //             z-index: 2;
// // // // //             width: 100%;
// // // // //           }

// // // // //           .content-inner {
// // // // //             color: #fff;
// // // // //             text-align: center;
// // // // //             transform: translateY(0);
// // // // //           }

// // // // //           .heading-title {
// // // // //             margin-bottom: 14px;
// // // // //             text-align: center;
// // // // //           }

// // // // //           .heading-title .title {
// // // // //             color: #fff;
// // // // //             font-size: 40px;
// // // // //             line-height: 1.1;
// // // // //             margin-bottom: 8px;
// // // // //             text-align: center;
// // // // //           }

// // // // //           .heading-title p {
// // // // //             color: rgba(255, 255, 255, 0.9);
// // // // //             font-size: 15px;
// // // // //             line-height: 1.45;
// // // // //             max-width: 680px;
// // // // //             margin-left: auto;
// // // // //             margin-right: auto;
// // // // //             text-align: center;
// // // // //           }

// // // // //           .hero-search-normal-wrap {
// // // // //             width: 100%;
// // // // //             display: flex;
// // // // //             justify-content: center;
// // // // //           }

// // // // //           .wg-filter {
// // // // //             width: 100%;
// // // // //             max-width: 1120px;
// // // // //             margin: 12px auto 0;
// // // // //             background: rgba(255, 255, 255, 0.12);
// // // // //             backdrop-filter: blur(14px);
// // // // //             -webkit-backdrop-filter: blur(14px);
// // // // //             border: 1px solid rgba(255, 255, 255, 0.18);
// // // // //             border-radius: 22px;
// // // // //             padding: 15px;
// // // // //           }

// // // // //           .form-title {
// // // // //             display: flex;
// // // // //             align-items: center;
// // // // //             gap: 12px;
// // // // //             flex-wrap: nowrap;
// // // // //             width: 100%;
// // // // //           }

// // // // //           .tf-dropdown-sort {
// // // // //             flex: 0 0 150px;
// // // // //           }

// // // // //           .hero-search-form {
// // // // //             flex: 1 1 auto;
// // // // //             min-width: 360px;
// // // // //             position: relative;
// // // // //           }

// // // // //           .hero-search-fieldset {
// // // // //             position: relative;
// // // // //             margin: 0;
// // // // //             padding: 0;
// // // // //             border: 0;
// // // // //           }

// // // // //           .form-title input {
// // // // //             width: 100%;
// // // // //             min-height: 56px;
// // // // //             border-radius: 14px;
// // // // //             border: 1px solid rgba(255, 255, 255, 0.22);
// // // // //             background: rgba(255, 255, 255, 0.94);
// // // // //             color: #111827;
// // // // //             padding: 0 16px;
// // // // //             outline: none;
// // // // //           }

// // // // //           .form-title input:focus {
// // // // //             border-color: rgba(241, 145, 61, 0.9);
// // // // //             box-shadow: 0 0 0 4px rgba(241, 145, 61, 0.12);
// // // // //           }

// // // // //           .btn-select {
// // // // //             min-height: 56px;
// // // // //             display: flex;
// // // // //             align-items: center;
// // // // //             justify-content: space-between;
// // // // //             gap: 10px;
// // // // //             padding: 0 16px;
// // // // //             border-radius: 14px;
// // // // //             background: rgba(255, 255, 255, 0.94);
// // // // //             color: #111827;
// // // // //             width: 100%;
// // // // //             cursor: pointer;
// // // // //           }

// // // // //           .wrap-btn {
// // // // //             display: flex;
// // // // //             align-items: center;
// // // // //             gap: 12px;
// // // // //             flex-shrink: 0;
// // // // //           }

// // // // //           .btn-filter {
// // // // //             width: 56px;
// // // // //             height: 56px;
// // // // //             border-radius: 14px;
// // // // //             background: rgba(255, 255, 255, 0.94);
// // // // //             display: flex;
// // // // //             align-items: center;
// // // // //             justify-content: center;
// // // // //             cursor: pointer;
// // // // //           }

// // // // //           .wrap-btn .tf-btn {
// // // // //             min-height: 56px;
// // // // //             white-space: nowrap;
// // // // //             padding-left: 26px;
// // // // //             padding-right: 26px;
// // // // //           }

// // // // //           .hero-search-suggestions {
// // // // //             position: absolute;
// // // // //             top: calc(100% + 8px);
// // // // //             left: 0;
// // // // //             right: 0;
// // // // //             z-index: 2147483647;
// // // // //             background: #ffffff;
// // // // //             border: 1px solid #e5e7eb;
// // // // //             border-radius: 14px;
// // // // //             box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
// // // // //             overflow: hidden;
// // // // //             max-height: 330px;
// // // // //             overflow-y: auto;
// // // // //             text-align: left;
// // // // //           }

// // // // //           .hero-suggestion-item {
// // // // //             width: 100%;
// // // // //             display: block;
// // // // //             text-align: left;
// // // // //             padding: 12px 16px;
// // // // //             border: 0;
// // // // //             border-bottom: 1px solid #f1f1f1;
// // // // //             background: #ffffff;
// // // // //             cursor: pointer;
// // // // //           }

// // // // //           .hero-suggestion-item:last-child {
// // // // //             border-bottom: 0;
// // // // //           }

// // // // //           .hero-suggestion-item:hover,
// // // // //           .hero-suggestion-item.active {
// // // // //             background: #f8fafc;
// // // // //           }

// // // // //           .hero-suggestion-label {
// // // // //             display: block;
// // // // //             font-size: 15px;
// // // // //             font-weight: 600;
// // // // //             color: #111827;
// // // // //             line-height: 1.3;
// // // // //           }

// // // // //           .hero-suggestion-sub {
// // // // //             display: block;
// // // // //             font-size: 13px;
// // // // //             font-weight: 400;
// // // // //             color: #6b7280;
// // // // //             margin-top: 3px;
// // // // //             line-height: 1.3;
// // // // //           }

// // // // //           .hero-no-suggestion {
// // // // //             padding: 14px 16px;
// // // // //             font-size: 14px;
// // // // //             color: #6b7280;
// // // // //             background: #ffffff;
// // // // //             text-align: left;
// // // // //           }

// // // // //           .hero-fixed-search-portal {
// // // // //             position: fixed;
// // // // //             top: 86px;
// // // // //             left: 0;
// // // // //             width: 100%;
// // // // //             z-index: 2147483000;
// // // // //             padding: 0 20px;
// // // // //             pointer-events: none;
// // // // //           }

// // // // //           .hero-fixed-search-inner {
// // // // //             width: 100%;
// // // // //             max-width: 1120px;
// // // // //             margin: 0 auto;
// // // // //             pointer-events: auto;
// // // // //           }

// // // // //           .hero-fixed-search-inner .wg-filter {
// // // // //             margin: 0;
// // // // //             background: rgba(11, 19, 32, 0.96);
// // // // //             border: 1px solid rgba(255, 255, 255, 0.18);
// // // // //             box-shadow: 0 20px 60px rgba(0, 0, 0, 0.32);
// // // // //             padding: 14px;
// // // // //             border-radius: 22px;
// // // // //             max-width: 1120px;
// // // // //           }

// // // // //           .hero-fixed-search-inner .form-title input,
// // // // //           .hero-fixed-search-inner .btn-select,
// // // // //           .hero-fixed-search-inner .btn-filter,
// // // // //           .hero-fixed-search-inner .wrap-btn .tf-btn {
// // // // //             min-height: 52px;
// // // // //           }

// // // // //           .hero-fixed-search-inner .btn-filter {
// // // // //             width: 52px;
// // // // //             height: 52px;
// // // // //           }

// // // // //           @media (max-width: 1199px) {
// // // // //             .wg-filter {
// // // // //               max-width: 980px;
// // // // //             }

// // // // //             .hero-fixed-search-inner {
// // // // //               max-width: 980px;
// // // // //             }

// // // // //             .hero-fixed-search-inner .wg-filter {
// // // // //               max-width: 980px;
// // // // //             }

// // // // //             .hero-search-form {
// // // // //               min-width: 300px;
// // // // //             }
// // // // //           }

// // // // //           @media (max-width: 991px) {
// // // // //             .hero-slider-wrap {
// // // // //               min-height: 460px;
// // // // //               height: auto;
// // // // //               max-height: none;
// // // // //               padding: 24px 0 28px;
// // // // //               align-items: center;
// // // // //             }

// // // // //             .content-inner {
// // // // //               transform: translateY(0);
// // // // //               text-align: center;
// // // // //             }

// // // // //             .heading-title {
// // // // //               margin-bottom: 14px;
// // // // //               padding: 0 12px;
// // // // //             }

// // // // //             .heading-title .title {
// // // // //               font-size: 28px;
// // // // //               line-height: 1.12;
// // // // //               text-align: center;
// // // // //               margin-bottom: 8px;
// // // // //             }

// // // // //             .heading-title p {
// // // // //               font-size: 14px;
// // // // //               line-height: 1.5;
// // // // //               max-width: 320px;
// // // // //               text-align: center;
// // // // //             }

// // // // //             .wg-filter {
// // // // //               width: calc(100% - 28px);
// // // // //               max-width: 420px;
// // // // //               margin: 12px auto 0;
// // // // //               padding: 14px;
// // // // //               border-radius: 18px;
// // // // //               background: rgba(255, 255, 255, 0.16);
// // // // //             }

// // // // //             .form-title {
// // // // //               flex-direction: column;
// // // // //               align-items: stretch;
// // // // //               gap: 12px;
// // // // //             }

// // // // //             .tf-dropdown-sort {
// // // // //               flex: unset;
// // // // //               width: 100%;
// // // // //             }

// // // // //             .btn-select {
// // // // //               min-height: 48px;
// // // // //               justify-content: center;
// // // // //               position: relative;
// // // // //               font-weight: 700;
// // // // //               background: #ffffff;
// // // // //             }

// // // // //             .btn-select i {
// // // // //               position: absolute;
// // // // //               right: 18px;
// // // // //             }

// // // // //             .hero-search-form {
// // // // //               width: 100%;
// // // // //               min-width: 100%;
// // // // //             }

// // // // //             .form-title input {
// // // // //               min-height: 48px;
// // // // //               text-align: left;
// // // // //               background: #ffffff;
// // // // //               border-radius: 14px;
// // // // //               font-size: 14px;
// // // // //             }

// // // // //             .wrap-btn {
// // // // //               width: 100%;
// // // // //               display: grid;
// // // // //               grid-template-columns: 48px 1fr;
// // // // //               gap: 10px;
// // // // //             }

// // // // //             .btn-filter {
// // // // //               width: 48px;
// // // // //               height: 48px;
// // // // //               min-height: 48px;
// // // // //               border-radius: 14px;
// // // // //               background: #fff4e9;
// // // // //             }

// // // // //             .wrap-btn .tf-btn {
// // // // //               width: 100%;
// // // // //               min-height: 48px;
// // // // //               border-radius: 14px;
// // // // //               justify-content: center;
// // // // //               padding-left: 16px;
// // // // //               padding-right: 16px;
// // // // //               background: #2f3239;
// // // // //             }

// // // // //             .hero-search-suggestions {
// // // // //               max-height: 230px;
// // // // //             }

// // // // //             .hero-fixed-search-portal {
// // // // //               top: 70px;
// // // // //               padding: 0 10px;
// // // // //             }

// // // // //             .hero-fixed-search-inner {
// // // // //               max-width: 420px;
// // // // //             }

// // // // //             .hero-fixed-search-inner .wg-filter {
// // // // //               width: 100%;
// // // // //               max-width: 420px;
// // // // //               padding: 12px;
// // // // //               border-radius: 18px;
// // // // //               max-height: calc(100vh - 84px);
// // // // //               overflow-y: auto;
// // // // //             }

// // // // //             .hero-fixed-search-inner .form-title {
// // // // //               gap: 10px;
// // // // //             }

// // // // //             .hero-fixed-search-inner .form-title input,
// // // // //             .hero-fixed-search-inner .btn-select,
// // // // //             .hero-fixed-search-inner .wrap-btn .tf-btn {
// // // // //               min-height: 46px;
// // // // //             }

// // // // //             .hero-fixed-search-inner .btn-filter {
// // // // //               width: 46px;
// // // // //               height: 46px;
// // // // //               min-height: 46px;
// // // // //             }
// // // // //           }

// // // // //           @media (max-width: 575px) {
// // // // //             .hero-slider-wrap {
// // // // //               min-height: 430px;
// // // // //               padding: 20px 0 26px;
// // // // //             }

// // // // //             .heading-title {
// // // // //               margin-bottom: 12px;
// // // // //             }

// // // // //             .heading-title .title {
// // // // //               font-size: 23px;
// // // // //               line-height: 1.15;
// // // // //               margin-bottom: 7px;
// // // // //             }

// // // // //             .heading-title p {
// // // // //               font-size: 12.5px;
// // // // //               line-height: 1.55;
// // // // //               max-width: 300px;
// // // // //             }

// // // // //             .wg-filter {
// // // // //               width: calc(100% - 36px);
// // // // //               max-width: 340px;
// // // // //               padding: 12px;
// // // // //               border-radius: 18px;
// // // // //             }

// // // // //             .btn-select {
// // // // //               min-height: 46px;
// // // // //               font-size: 15px;
// // // // //             }

// // // // //             .form-title input {
// // // // //               min-height: 46px;
// // // // //               font-size: 13px;
// // // // //               padding: 0 14px;
// // // // //             }

// // // // //             .wrap-btn {
// // // // //               grid-template-columns: 46px 1fr;
// // // // //               gap: 9px;
// // // // //             }

// // // // //             .btn-filter {
// // // // //               width: 46px;
// // // // //               height: 46px;
// // // // //               min-height: 46px;
// // // // //             }

// // // // //             .wrap-btn .tf-btn {
// // // // //               min-height: 46px;
// // // // //               font-size: 14px;
// // // // //             }

// // // // //             .hero-fixed-search-portal {
// // // // //               top: 64px;
// // // // //               padding: 0 8px;
// // // // //             }

// // // // //             .hero-fixed-search-inner {
// // // // //               max-width: 340px;
// // // // //             }

// // // // //             .hero-fixed-search-inner .wg-filter {
// // // // //               max-width: 340px;
// // // // //               padding: 10px;
// // // // //             }
// // // // //           }

// // // // //           @media (max-width: 380px) {
// // // // //             .hero-slider-wrap {
// // // // //               min-height: 420px;
// // // // //             }

// // // // //             .heading-title .title {
// // // // //               font-size: 22px;
// // // // //             }

// // // // //             .heading-title p {
// // // // //               font-size: 12px;
// // // // //             }

// // // // //             .wg-filter {
// // // // //               width: calc(100% - 28px);
// // // // //               max-width: 330px;
// // // // //             }
// // // // //           }
// // // // //         `}</style>
// // // // //       </div>

// // // // //       {mounted &&
// // // // //         isSearchFixed &&
// // // // //         createPortal(
// // // // //           <div className="hero-fixed-search-portal">
// // // // //             <div className="hero-fixed-search-inner">
// // // // //               {renderSearchFilter({ fixed: true })}
// // // // //             </div>
// // // // //           </div>,
// // // // //           document.body
// // // // //         )}
// // // // //     </>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import SearchForm from "@/components/common/SearchForm";
// // // // import React, { useEffect, useMemo, useRef, useState } from "react";
// // // // import { createPortal } from "react-dom";
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

// // // // function getProjectTitle(item) {
// // // //   return (
// // // //     item?.title ||
// // // //     item?.project_name ||
// // // //     item?.property_name ||
// // // //     item?.name ||
// // // //     ""
// // // //   );
// // // // }

// // // // function getDeveloperName(item) {
// // // //   return (
// // // //     item?.developer_name ||
// // // //     item?.developer ||
// // // //     item?.builder_name ||
// // // //     item?.builder ||
// // // //     ""
// // // //   );
// // // // }

// // // // function getLocationName(item) {
// // // //   return item?.short_location || item?.location || item?.full_address || "";
// // // // }

// // // // export default function Hero({ onSearch = () => {}, projects = [] }) {
// // // //   const router = useRouter();

// // // //   const suggestionRef = useRef(null);
// // // //   const fixedSuggestionRef = useRef(null);

// // // //   const [mounted, setMounted] = useState(false);
// // // //   const [activeItem, setActiveItem] = useState("For sale");
// // // //   const [searchText, setSearchText] = useState("");
// // // //   const [showSuggestions, setShowSuggestions] = useState(false);
// // // //   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
// // // //   const [isSearchFixed, setIsSearchFixed] = useState(false);

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

// // // //   useEffect(() => {
// // // //     setMounted(true);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
// // // //     }, 4000);

// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setIsSearchFixed(window.scrollY > 210);
// // // //     };

// // // //     handleScroll();

// // // //     window.addEventListener("scroll", handleScroll, { passive: true });

// // // //     return () => window.removeEventListener("scroll", handleScroll);
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

// // // //   useEffect(() => {
// // // //     const handleClickOutside = (event) => {
// // // //       const normalSearch = suggestionRef.current;
// // // //       const fixedSearch = fixedSuggestionRef.current;

// // // //       const clickedInsideNormal =
// // // //         normalSearch && normalSearch.contains(event.target);

// // // //       const clickedInsideFixed =
// // // //         fixedSearch && fixedSearch.contains(event.target);

// // // //       if (!clickedInsideNormal && !clickedInsideFixed) {
// // // //         setShowSuggestions(false);
// // // //         setActiveSuggestionIndex(-1);
// // // //       }
// // // //     };

// // // //     document.addEventListener("mousedown", handleClickOutside);

// // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
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
// // // //       const developer_name = getDeveloperName(item);
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

// // // //   const finalCities = useMemo(
// // // //     () => (cities.length > 0 ? cities : fallbackCitiesFromProjects),
// // // //     [cities, fallbackCitiesFromProjects]
// // // //   );

// // // //   const finalDevelopers = useMemo(
// // // //     () => (developers.length > 0 ? developers : fallbackDevelopersFromProjects),
// // // //     [developers, fallbackDevelopersFromProjects]
// // // //   );

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

// // // //   const searchSuggestions = useMemo(() => {
// // // //     const keyword = normalizeText(searchText);

// // // //     if (!keyword || keyword.length < 1) return [];

// // // //     const suggestionMap = new Map();

// // // //     finalCities.forEach((item) => {
// // // //       const cityName = item.city || "";
// // // //       const citySlug = item.city_slug || slugify(cityName);

// // // //       if (
// // // //         normalizeText(cityName).includes(keyword) ||
// // // //         normalizeText(citySlug).includes(keyword)
// // // //       ) {
// // // //         const key = `city-${normalizeText(cityName)}`;

// // // //         if (!suggestionMap.has(key)) {
// // // //           suggestionMap.set(key, {
// // // //             label: cityName,
// // // //             subLabel: "City",
// // // //             value: cityName,
// // // //             type: "city",
// // // //             slug: citySlug,
// // // //           });
// // // //         }
// // // //       }
// // // //     });

// // // //     finalDevelopers.forEach((item) => {
// // // //       const developerName = item.developer_name || "";
// // // //       const developerSlug = item.developer_slug || slugify(developerName);

// // // //       if (
// // // //         normalizeText(developerName).includes(keyword) ||
// // // //         normalizeText(developerSlug).includes(keyword)
// // // //       ) {
// // // //         const key = `developer-${normalizeText(developerName)}`;

// // // //         if (!suggestionMap.has(key)) {
// // // //           suggestionMap.set(key, {
// // // //             label: developerName,
// // // //             subLabel: "Developer",
// // // //             value: developerName,
// // // //             type: "developer",
// // // //             slug: developerSlug,
// // // //           });
// // // //         }
// // // //       }
// // // //     });

// // // //     projects.forEach((item) => {
// // // //       const title = getProjectTitle(item);
// // // //       const city = item.city || "";
// // // //       const citySlug = item.city_slug || slugify(city);
// // // //       const location = getLocationName(item);
// // // //       const address = item.full_address || item.address || "";
// // // //       const developer = getDeveloperName(item);
// // // //       const propertyType = item.property_type || "";
// // // //       const propertyStatus = item.property_status || "";

// // // //       const searchableText = normalizeText(
// // // //         [
// // // //           title,
// // // //           city,
// // // //           location,
// // // //           address,
// // // //           developer,
// // // //           propertyType,
// // // //           propertyStatus,
// // // //         ].join(" ")
// // // //       );

// // // //       if (!searchableText.includes(keyword)) return;

// // // //       const mainLabel =
// // // //         title || location || city || developer || propertyType || propertyStatus;

// // // //       if (!mainLabel) return;

// // // //       const subLabel = [location, city, developer]
// // // //         .filter(Boolean)
// // // //         .filter((value, index, self) => self.indexOf(value) === index)
// // // //         .join(" • ");

// // // //       const key = `project-${normalizeText(`${mainLabel}-${subLabel}`)}`;

// // // //       if (!suggestionMap.has(key)) {
// // // //         suggestionMap.set(key, {
// // // //           label: mainLabel,
// // // //           subLabel: subLabel || "Project",
// // // //           value: mainLabel,
// // // //           type: "project",
// // // //           city,
// // // //           citySlug,
// // // //           location,
// // // //           propertyType,
// // // //           propertyStatus,
// // // //         });
// // // //       }
// // // //     });

// // // //     return Array.from(suggestionMap.values()).slice(0, 8);
// // // //   }, [searchText, projects, finalCities, finalDevelopers]);

// // // //   const closeSuggestions = () => {
// // // //     setShowSuggestions(false);
// // // //     setActiveSuggestionIndex(-1);
// // // //   };

// // // //   const handleSuggestionSelect = (suggestion) => {
// // // //     const selectedValue = suggestion.value || "";

// // // //     setSearchText(selectedValue);

// // // //     const selectedFilters = {
// // // //       ...advancedFilters,
// // // //       keyword: selectedValue,
// // // //       city:
// // // //         suggestion.type === "city"
// // // //           ? selectedValue
// // // //           : suggestion.city || advancedFilters.city,
// // // //       location: suggestion.location || advancedFilters.location,
// // // //       propertyType: suggestion.propertyType || advancedFilters.propertyType,
// // // //       propertyStatus:
// // // //         suggestion.propertyStatus ||
// // // //         (activeItem === "For sale" ? "for-sale" : "for-rent"),
// // // //     };

// // // //     setAdvancedFilters(selectedFilters);
// // // //     closeSuggestions();

// // // //     if (suggestion.type === "city" && suggestion.slug) {
// // // //       router.push(`/cities/${suggestion.slug}`);
// // // //       return;
// // // //     }

// // // //     if (suggestion.type === "developer" && suggestion.slug) {
// // // //       router.push(`/developers/${suggestion.slug}`);
// // // //       return;
// // // //     }

// // // //     const cityMatch = findCityMatch(selectedValue);

// // // //     if (cityMatch?.city_slug) {
// // // //       router.push(`/cities/${cityMatch.city_slug}`);
// // // //       return;
// // // //     }

// // // //     const developerMatch = findDeveloperMatch(selectedValue);

// // // //     if (developerMatch?.developer_slug) {
// // // //       router.push(`/developers/${developerMatch.developer_slug}`);
// // // //       return;
// // // //     }

// // // //     onSearch(selectedFilters);
// // // //   };

// // // //   const handleSearch = (e) => {
// // // //     if (e) e.preventDefault();

// // // //     const mergedFilters = {
// // // //       ...advancedFilters,
// // // //       keyword: searchText.trim() || advancedFilters.keyword || "",
// // // //       propertyStatus: activeItem === "For sale" ? "for-sale" : "for-rent",
// // // //     };

// // // //     const rawSearch = searchText.trim();

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

// // // //     if (mergedFilters.city) {
// // // //       const cityMatch = findCityMatch(mergedFilters.city);

// // // //       if (cityMatch?.city_slug) {
// // // //         router.push(`/cities/${cityMatch.city_slug}`);
// // // //         return;
// // // //       }
// // // //     }

// // // //     onSearch(mergedFilters);
// // // //     closeSuggestions();
// // // //   };

// // // //   const handleSearchKeyDown = (e) => {
// // // //     if (e.key === "Enter") {
// // // //       e.preventDefault();

// // // //       if (
// // // //         showSuggestions &&
// // // //         activeSuggestionIndex >= 0 &&
// // // //         searchSuggestions[activeSuggestionIndex]
// // // //       ) {
// // // //         handleSuggestionSelect(searchSuggestions[activeSuggestionIndex]);
// // // //         return;
// // // //       }

// // // //       handleSearch(e);
// // // //       return;
// // // //     }

// // // //     if (!showSuggestions || searchSuggestions.length === 0) return;

// // // //     if (e.key === "ArrowDown") {
// // // //       e.preventDefault();

// // // //       setActiveSuggestionIndex((prev) =>
// // // //         prev < searchSuggestions.length - 1 ? prev + 1 : 0
// // // //       );
// // // //     }

// // // //     if (e.key === "ArrowUp") {
// // // //       e.preventDefault();

// // // //       setActiveSuggestionIndex((prev) =>
// // // //         prev > 0 ? prev - 1 : searchSuggestions.length - 1
// // // //       );
// // // //     }

// // // //     if (e.key === "Escape") {
// // // //       closeSuggestions();
// // // //     }
// // // //   };

// // // //   const renderSearchFilter = ({ fixed = false } = {}) => {
// // // //     return (
// // // //       <div className={`wg-filter ${fixed ? "wg-filter-fixed" : ""}`}>
// // // //         <div className="form-title">
// // // //           <form
// // // //             onSubmit={handleSearch}
// // // //             className="hero-search-form"
// // // //             ref={fixed ? fixedSuggestionRef : suggestionRef}
// // // //           >
// // // //             <fieldset className="hero-search-fieldset">
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search city, developer, project, location..."
// // // //                 value={searchText}
// // // //                 autoComplete="off"
// // // //                 onChange={(e) => {
// // // //                   setSearchText(e.target.value);
// // // //                   setShowSuggestions(true);
// // // //                   setActiveSuggestionIndex(-1);
// // // //                 }}
// // // //                 onFocus={() => {
// // // //                   if (searchText) setShowSuggestions(true);
// // // //                 }}
// // // //                 onKeyDown={handleSearchKeyDown}
// // // //               />

// // // //               {showSuggestions && searchText && (
// // // //                 <div className="hero-search-suggestions">
// // // //                   {searchSuggestions.length > 0 ? (
// // // //                     searchSuggestions.map((suggestion, index) => (
// // // //                       <button
// // // //                         type="button"
// // // //                         key={`${suggestion.type}-${suggestion.label}-${index}`}
// // // //                         className={`hero-suggestion-item ${
// // // //                           activeSuggestionIndex === index ? "active" : ""
// // // //                         }`}
// // // //                         onMouseDown={(e) => {
// // // //                           e.preventDefault();
// // // //                           handleSuggestionSelect(suggestion);
// // // //                         }}
// // // //                         onMouseEnter={() => setActiveSuggestionIndex(index)}
// // // //                       >
// // // //                         <span className="hero-suggestion-label">
// // // //                           {suggestion.label}
// // // //                         </span>

// // // //                         {suggestion.subLabel && (
// // // //                           <span className="hero-suggestion-sub">
// // // //                             {suggestion.subLabel}
// // // //                           </span>
// // // //                         )}
// // // //                       </button>
// // // //                     ))
// // // //                   ) : (
// // // //                     <div className="hero-no-suggestion">
// // // //                       No matching result found
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               )}
// // // //             </fieldset>
// // // //           </form>

// // // //           <div className="box-item wrap-btn">
// // // //             <div className="btn-filter show-form searchFormToggler">
// // // //               <div className="icons">
// // // //                 <svg
// // // //                   width={24}
// // // //                   height={24}
// // // //                   viewBox="0 0 24 24"
// // // //                   fill="none"
// // // //                   xmlns="http://www.w3.org/2000/svg"
// // // //                 >
// // // //                   <path
// // // //                     d="M21 4H14"
// // // //                     stroke="#F1913D"
// // // //                     strokeWidth={2}
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   />
// // // //                   <path
// // // //                     d="M10 4H3"
// // // //                     stroke="#F1913D"
// // // //                     strokeWidth={2}
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   />
// // // //                   <path
// // // //                     d="M21 12H12"
// // // //                     stroke="#F1913D"
// // // //                     strokeWidth={2}
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   />
// // // //                   <path
// // // //                     d="M8 12H3"
// // // //                     stroke="#F1913D"
// // // //                     strokeWidth={2}
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   />
// // // //                   <path
// // // //                     d="M21 20H16"
// // // //                     stroke="#F1913D"
// // // //                     strokeWidth={2}
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   />
// // // //                   <path
// // // //                     d="M12 20H3"
// // // //                     stroke="#F1913D"
// // // //                     strokeWidth={2}
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   />
// // // //                   <path
// // // //                     d="M14 2V6"
// // // //                     stroke="#F1913D"
// // // //                     strokeWidth={2}
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   />
// // // //                   <path
// // // //                     d="M8 10V14"
// // // //                     stroke="#F1913D"
// // // //                     strokeWidth={2}
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   />
// // // //                   <path
// // // //                     d="M16 18V22"
// // // //                     stroke="#F1913D"
// // // //                     strokeWidth={2}
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                   />
// // // //                 </svg>
// // // //               </div>
// // // //             </div>

// // // //             <button
// // // //               type="button"
// // // //               onClick={handleSearch}
// // // //               className="tf-btn bg-color-primary pd-3"
// // // //             >
// // // //               Search <i className="icon-MagnifyingGlass fw-6" />
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         <SearchForm onFilterChange={setAdvancedFilters} projects={projects} />
// // // //       </div>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <div className="page-title home01 hero-slider-wrap">
// // // //         <div className="hero-bg-slider">
// // // //           {HERO_IMAGES.map((image, index) => (
// // // //             <div
// // // //               key={`${image}-${index}`}
// // // //               className={`hero-bg-slide ${
// // // //                 index === currentBgIndex ? "active" : ""
// // // //               }`}
// // // //               style={{ backgroundImage: `url('${image}')` }}
// // // //             />
// // // //           ))}
// // // //         </div>

// // // //         <div className="hero-overlay" />

// // // //         <div className="tf-container hero-main-container">
// // // //           <div className="row justify-center relative">
// // // //             <div className="col-lg-10 col-xl-10">
// // // //               <div className="content-inner">
// // // //                 <div className="heading-title">
// // // //                   <h1 className="title">GROWL REAL ESTATE</h1>
// // // //                   <p className="h6 fw-4">
// // // //                     Discover exclusive luxury projects, trusted by thousands of
// // // //                     homebuyers every month.
// // // //                   </p>
// // // //                 </div>

// // // //                 <div className="hero-search-normal-wrap">
// // // //                   {renderSearchFilter({ fixed: false })}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <style jsx global>{`
// // // //           .hero-slider-wrap {
// // // //             position: relative;
// // // //             overflow: hidden;
// // // //             min-height: 430px;
// // // //             height: 54vh;
// // // //             max-height: 500px;
// // // //             display: flex;
// // // //             align-items: center;
// // // //           }

// // // //           .hero-bg-slider {
// // // //             position: absolute;
// // // //             inset: 0;
// // // //             z-index: 0;
// // // //             overflow: hidden;
// // // //           }

// // // //           .hero-bg-slide {
// // // //             position: absolute;
// // // //             inset: 0;
// // // //             background-size: cover;
// // // //             background-position: center;
// // // //             background-repeat: no-repeat;
// // // //             opacity: 0;
// // // //             transform: scale(1.05);
// // // //             transition: opacity 1.2s ease, transform 5s ease;
// // // //           }

// // // //           .hero-bg-slide.active {
// // // //             opacity: 1;
// // // //             transform: scale(1);
// // // //           }

// // // //           .hero-overlay {
// // // //             position: absolute;
// // // //             inset: 0;
// // // //             background: linear-gradient(
// // // //               90deg,
// // // //               rgba(11, 19, 32, 0.68) 0%,
// // // //               rgba(15, 27, 45, 0.52) 45%,
// // // //               rgba(17, 24, 39, 0.38) 100%
// // // //             );
// // // //             z-index: 1;
// // // //           }

// // // //           .hero-main-container {
// // // //             position: relative;
// // // //             z-index: 2;
// // // //             width: 100%;
// // // //           }

// // // //           .content-inner {
// // // //             color: #fff;
// // // //             text-align: center;
// // // //             transform: translateY(0);
// // // //           }

// // // //           .heading-title {
// // // //             margin-bottom: 14px;
// // // //             text-align: center;
// // // //           }

// // // //           .heading-title .title {
// // // //             color: #fff;
// // // //             font-size: 40px;
// // // //             line-height: 1.1;
// // // //             margin-bottom: 8px;
// // // //             text-align: center;
// // // //           }

// // // //           .heading-title p {
// // // //             color: rgba(255, 255, 255, 0.9);
// // // //             font-size: 15px;
// // // //             line-height: 1.45;
// // // //             max-width: 680px;
// // // //             margin-left: auto;
// // // //             margin-right: auto;
// // // //             text-align: center;
// // // //           }

// // // //           .hero-search-normal-wrap {
// // // //             width: 100%;
// // // //             display: flex;
// // // //             justify-content: center;
// // // //           }

// // // //           .wg-filter {
// // // //             width: 100%;
// // // //             max-width: 1120px;
// // // //             margin: 12px auto 0;
// // // //             background: rgba(11, 19, 32, 0.22);
// // // //             backdrop-filter: blur(5px);
// // // //             -webkit-backdrop-filter: blur(5px);
// // // //             border: 0;
// // // //             border-radius: 22px;
// // // //             padding: 8px;
// // // //             box-shadow: 0 3px 8px rgba(0, 0, 0, 0.035);
// // // //           }

// // // //           .form-title {
// // // //             display: flex;
// // // //             align-items: center;
// // // //             gap: 10px;
// // // //             flex-wrap: nowrap;
// // // //             width: 100%;
// // // //           }

// // // //           .tf-dropdown-sort {
// // // //             flex: 0 0 150px;
// // // //           }

// // // //           .hero-search-form {
// // // //             flex: 1 1 auto;
// // // //             min-width: 360px;
// // // //             position: relative;
// // // //           }

// // // //           .hero-search-fieldset {
// // // //             position: relative;
// // // //             margin: 0;
// // // //             padding: 0;
// // // //             border: 0;
// // // //           }

// // // //           .form-title input {
// // // //             width: 100%;
// // // //             min-height: 56px;
// // // //             border-radius: 14px;
// // // //             border: 1px solid rgba(17, 24, 39, 0.05);
// // // //             background: rgba(255, 255, 255, 0.98);
// // // //             color: #111827;
// // // //             padding: 0 16px;
// // // //             outline: none;
// // // //             box-shadow: none;
// // // //           }

// // // //           .form-title input:focus {
// // // //             border-color: rgba(241, 145, 61, 0.22);
// // // //             box-shadow: 0 0 0 1px rgba(241, 145, 61, 0.04);
// // // //           }

// // // //           .btn-select {
// // // //             min-height: 56px;
// // // //             display: flex;
// // // //             align-items: center;
// // // //             justify-content: space-between;
// // // //             gap: 10px;
// // // //             padding: 0 16px;
// // // //             border-radius: 14px;
// // // //             background: rgba(255, 255, 255, 0.98);
// // // //             color: #111827;
// // // //             width: 100%;
// // // //             cursor: pointer;
// // // //             border: 1px solid rgba(17, 24, 39, 0.05);
// // // //           }

// // // //           .wrap-btn {
// // // //             display: flex;
// // // //             align-items: center;
// // // //             gap: 10px;
// // // //             flex-shrink: 0;
// // // //           }

// // // //           .btn-filter {
// // // //             width: 68px;
// // // //             height: 56px;
// // // //             border-radius: 14px;
// // // //             background: #fff4e9;
// // // //             border: 1px solid rgba(241, 145, 61, 0.13);
// // // //             display: flex;
// // // //             align-items: center;
// // // //             justify-content: center;
// // // //             cursor: pointer;
// // // //           }

// // // //           .wrap-btn .tf-btn {
// // // //             min-height: 56px;
// // // //             white-space: nowrap;
// // // //             padding-left: 26px;
// // // //             padding-right: 26px;
// // // //             border-radius: 14px;
// // // //           }

// // // //           .hero-search-suggestions {
// // // //             position: absolute;
// // // //             top: calc(100% + 8px);
// // // //             left: 0;
// // // //             right: 0;
// // // //             z-index: 2147483647;
// // // //             background: #ffffff;
// // // //             border: 1px solid #e5e7eb;
// // // //             border-radius: 14px;
// // // //             box-shadow: 0 14px 34px rgba(0, 0, 0, 0.10);
// // // //             overflow: hidden;
// // // //             max-height: 330px;
// // // //             overflow-y: auto;
// // // //             text-align: left;
// // // //           }

// // // //           .hero-suggestion-item {
// // // //             width: 100%;
// // // //             display: block;
// // // //             text-align: left;
// // // //             padding: 12px 16px;
// // // //             border: 0;
// // // //             border-bottom: 1px solid #f1f1f1;
// // // //             background: #ffffff;
// // // //             cursor: pointer;
// // // //           }

// // // //           .hero-suggestion-item:last-child {
// // // //             border-bottom: 0;
// // // //           }

// // // //           .hero-suggestion-item:hover,
// // // //           .hero-suggestion-item.active {
// // // //             background: #f8fafc;
// // // //           }

// // // //           .hero-suggestion-label {
// // // //             display: block;
// // // //             font-size: 15px;
// // // //             font-weight: 600;
// // // //             color: #111827;
// // // //             line-height: 1.3;
// // // //           }

// // // //           .hero-suggestion-sub {
// // // //             display: block;
// // // //             font-size: 13px;
// // // //             font-weight: 400;
// // // //             color: #6b7280;
// // // //             margin-top: 3px;
// // // //             line-height: 1.3;
// // // //           }

// // // //           .hero-no-suggestion {
// // // //             padding: 14px 16px;
// // // //             font-size: 14px;
// // // //             color: #6b7280;
// // // //             background: #ffffff;
// // // //             text-align: left;
// // // //           }

// // // //           .hero-fixed-search-portal {
// // // //             position: fixed;
// // // //             top: 86px;
// // // //             left: 0;
// // // //             width: 100%;
// // // //             z-index: 2147483000;
// // // //             padding: 0 20px;
// // // //             pointer-events: none;
// // // //           }

// // // //           .hero-fixed-search-inner {
// // // //             width: 100%;
// // // //             max-width: 1120px;
// // // //             margin: 0 auto;
// // // //             pointer-events: auto;
// // // //           }

// // // //           .hero-fixed-search-inner .wg-filter {
// // // //             margin: 0;
// // // //             background: rgba(11, 19, 32, 0.26);
// // // //             backdrop-filter: blur(5px);
// // // //             -webkit-backdrop-filter: blur(5px);
// // // //             border: 0;
// // // //             box-shadow: 0 4px 10px rgba(0, 0, 0, 0.045);
// // // //             padding: 8px;
// // // //             border-radius: 22px;
// // // //             max-width: 1120px;
// // // //           }

// // // //           .hero-fixed-search-inner .form-title input,
// // // //           .hero-fixed-search-inner .btn-select,
// // // //           .hero-fixed-search-inner .btn-filter {
// // // //             background: rgba(255, 255, 255, 0.99);
// // // //             border: 1px solid rgba(17, 24, 39, 0.04);
// // // //           }

// // // //           .hero-fixed-search-inner .form-title input,
// // // //           .hero-fixed-search-inner .btn-select,
// // // //           .hero-fixed-search-inner .btn-filter,
// // // //           .hero-fixed-search-inner .wrap-btn .tf-btn {
// // // //             min-height: 52px;
// // // //           }

// // // //           .hero-fixed-search-inner .btn-filter {
// // // //             width: 64px;
// // // //             height: 52px;
// // // //           }

// // // //           @media (max-width: 1199px) {
// // // //             .wg-filter {
// // // //               max-width: 980px;
// // // //             }

// // // //             .hero-fixed-search-inner {
// // // //               max-width: 980px;
// // // //             }

// // // //             .hero-fixed-search-inner .wg-filter {
// // // //               max-width: 980px;
// // // //             }

// // // //             .hero-search-form {
// // // //               min-width: 300px;
// // // //             }
// // // //           }

// // // //           @media (max-width: 991px) {
// // // //             .hero-slider-wrap {
// // // //               min-height: 460px;
// // // //               height: auto;
// // // //               max-height: none;
// // // //               padding: 24px 0 28px;
// // // //               align-items: center;
// // // //             }

// // // //             .content-inner {
// // // //               transform: translateY(0);
// // // //               text-align: center;
// // // //             }

// // // //             .heading-title {
// // // //               margin-bottom: 14px;
// // // //               padding: 0 12px;
// // // //             }

// // // //             .heading-title .title {
// // // //               font-size: 28px;
// // // //               line-height: 1.12;
// // // //               text-align: center;
// // // //               margin-bottom: 8px;
// // // //             }

// // // //             .heading-title p {
// // // //               font-size: 14px;
// // // //               line-height: 1.5;
// // // //               max-width: 320px;
// // // //               text-align: center;
// // // //             }

// // // //             .wg-filter {
// // // //               width: calc(100% - 28px);
// // // //               max-width: 420px;
// // // //               margin: 12px auto 0;
// // // //               padding: 8px;
// // // //               border-radius: 18px;
// // // //               background: rgba(11, 19, 32, 0.20);
// // // //               border: 0;
// // // //               box-shadow: 0 3px 8px rgba(0, 0, 0, 0.035);
// // // //             }

// // // //             .form-title {
// // // //               flex-direction: column;
// // // //               align-items: stretch;
// // // //               gap: 10px;
// // // //             }

// // // //             .tf-dropdown-sort {
// // // //               flex: unset;
// // // //               width: 100%;
// // // //             }

// // // //             .btn-select {
// // // //               min-height: 48px;
// // // //               justify-content: center;
// // // //               position: relative;
// // // //               font-weight: 700;
// // // //               background: #ffffff;
// // // //             }

// // // //             .btn-select i {
// // // //               position: absolute;
// // // //               right: 18px;
// // // //             }

// // // //             .hero-search-form {
// // // //               width: 100%;
// // // //               min-width: 100%;
// // // //             }

// // // //             .form-title input {
// // // //               min-height: 48px;
// // // //               text-align: left;
// // // //               background: #ffffff;
// // // //               border-radius: 14px;
// // // //               font-size: 14px;
// // // //             }

// // // //             .wrap-btn {
// // // //               width: 100%;
// // // //               display: grid;
// // // //               grid-template-columns: 56px 1fr;
// // // //               gap: 9px;
// // // //             }

// // // //             .btn-filter {
// // // //               width: 56px;
// // // //               height: 48px;
// // // //               min-height: 48px;
// // // //               border-radius: 14px;
// // // //               background: #fff7ef;
// // // //             }

// // // //             .wrap-btn .tf-btn {
// // // //               width: 100%;
// // // //               min-height: 48px;
// // // //               border-radius: 14px;
// // // //               justify-content: center;
// // // //               padding-left: 16px;
// // // //               padding-right: 16px;
// // // //               background: #f1913d;
// // // //             }

// // // //             .hero-search-suggestions {
// // // //               max-height: 230px;
// // // //             }

// // // //             .hero-fixed-search-portal {
// // // //               top: 70px;
// // // //               padding: 0 10px;
// // // //             }

// // // //             .hero-fixed-search-inner {
// // // //               max-width: 420px;
// // // //             }

// // // //             .hero-fixed-search-inner .wg-filter {
// // // //               width: 100%;
// // // //               max-width: 420px;
// // // //               padding: 8px;
// // // //               border-radius: 18px;
// // // //               max-height: calc(100vh - 84px);
// // // //               overflow-y: auto;
// // // //               background: rgba(11, 19, 32, 0.24);
// // // //               border: 0;
// // // //               box-shadow: 0 3px 9px rgba(0, 0, 0, 0.04);
// // // //             }

// // // //             .hero-fixed-search-inner .form-title {
// // // //               gap: 9px;
// // // //             }

// // // //             .hero-fixed-search-inner .form-title input,
// // // //             .hero-fixed-search-inner .btn-select,
// // // //             .hero-fixed-search-inner .wrap-btn .tf-btn {
// // // //               min-height: 46px;
// // // //             }

// // // //             .hero-fixed-search-inner .btn-filter {
// // // //               width: 54px;
// // // //               height: 46px;
// // // //               min-height: 46px;
// // // //             }
// // // //           }

// // // //           @media (max-width: 575px) {
// // // //             .hero-slider-wrap {
// // // //               min-height: 430px;
// // // //               padding: 20px 0 26px;
// // // //             }

// // // //             .heading-title {
// // // //               margin-bottom: 12px;
// // // //             }

// // // //             .heading-title .title {
// // // //               font-size: 23px;
// // // //               line-height: 1.15;
// // // //               margin-bottom: 7px;
// // // //             }

// // // //             .heading-title p {
// // // //               font-size: 12.5px;
// // // //               line-height: 1.55;
// // // //               max-width: 300px;
// // // //             }

// // // //             .wg-filter {
// // // //               width: calc(100% - 36px);
// // // //               max-width: 340px;
// // // //               padding: 7px;
// // // //               border-radius: 18px;
// // // //             }

// // // //             .btn-select {
// // // //               min-height: 46px;
// // // //               font-size: 15px;
// // // //             }

// // // //             .form-title input {
// // // //               min-height: 46px;
// // // //               font-size: 13px;
// // // //               padding: 0 14px;
// // // //             }

// // // //             .wrap-btn {
// // // //               grid-template-columns: 54px 1fr;
// // // //               gap: 8px;
// // // //             }

// // // //             .btn-filter {
// // // //               width: 54px;
// // // //               height: 46px;
// // // //               min-height: 46px;
// // // //             }

// // // //             .wrap-btn .tf-btn {
// // // //               min-height: 46px;
// // // //               font-size: 14px;
// // // //             }

// // // //             .hero-fixed-search-portal {
// // // //               top: 64px;
// // // //               padding: 0 8px;
// // // //             }

// // // //             .hero-fixed-search-inner {
// // // //               max-width: 340px;
// // // //             }

// // // //             .hero-fixed-search-inner .wg-filter {
// // // //               max-width: 340px;
// // // //               padding: 7px;
// // // //             }
// // // //           }

// // // //           @media (max-width: 380px) {
// // // //             .hero-slider-wrap {
// // // //               min-height: 420px;
// // // //             }

// // // //             .heading-title .title {
// // // //               font-size: 22px;
// // // //             }

// // // //             .heading-title p {
// // // //               font-size: 12px;
// // // //             }

// // // //             .wg-filter {
// // // //               width: calc(100% - 28px);
// // // //               max-width: 330px;
// // // //             }
// // // //           }
// // // //         `}</style>
// // // //       </div>

// // // //       {mounted &&
// // // //         isSearchFixed &&
// // // //         createPortal(
// // // //           <div className="hero-fixed-search-portal">
// // // //             <div className="hero-fixed-search-inner">
// // // //               {renderSearchFilter({ fixed: true })}
// // // //             </div>
// // // //           </div>,
// // // //           document.body
// // // //         )}
// // // //     </>
// // // //   );
// // // // }


// // // "use client";

// // // import SearchForm from "@/components/common/SearchForm";
// // // import React, { useEffect, useMemo, useRef, useState } from "react";
// // // import { createPortal } from "react-dom";
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
// // //   const fixedSuggestionRef = useRef(null);

// // //   const [mounted, setMounted] = useState(false);
// // //   const [activeItem] = useState("For sale");
// // //   const [searchText, setSearchText] = useState("");
// // //   const [showSuggestions, setShowSuggestions] = useState(false);
// // //   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
// // //   const [isSearchFixed, setIsSearchFixed] = useState(false);
// // //   const [showFixedSearch, setShowFixedSearch] = useState(false);

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

// // //   useEffect(() => {
// // //     setMounted(true);
// // //   }, []);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
// // //     }, 4000);

// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const isDesktop = window.innerWidth > 991;
// // //       const shouldShow = window.scrollY > 210;

// // //       setIsSearchFixed(shouldShow);
// // //       setShowFixedSearch(isDesktop && shouldShow);
// // //     };

// // //     handleScroll();

// // //     window.addEventListener("scroll", handleScroll, { passive: true });
// // //     window.addEventListener("resize", handleScroll);

// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //       window.removeEventListener("resize", handleScroll);
// // //     };
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
// // //       const normalSearch = suggestionRef.current;
// // //       const fixedSearch = fixedSuggestionRef.current;

// // //       const clickedInsideNormal =
// // //         normalSearch && normalSearch.contains(event.target);

// // //       const clickedInsideFixed =
// // //         fixedSearch && fixedSearch.contains(event.target);

// // //       if (!clickedInsideNormal && !clickedInsideFixed) {
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

// // //     return (
// // //       finalCities.find((item) => {
// // //         const cityName = normalizeText(item.city);
// // //         const citySlug = normalizeText(item.city_slug);

// // //         return cityName.includes(normalized) || citySlug.includes(normalized);
// // //       }) || null
// // //     );
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

// // //     return (
// // //       finalDevelopers.find((item) => {
// // //         const developerName = normalizeText(item.developer_name);
// // //         const developerSlug = normalizeText(item.developer_slug);

// // //         return (
// // //           developerName.includes(normalized) ||
// // //           developerSlug.includes(normalized)
// // //         );
// // //       }) || null
// // //     );
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
// // //       city:
// // //         suggestion.type === "city"
// // //           ? selectedValue
// // //           : suggestion.city || advancedFilters.city,
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

// // //   const renderSearchFilter = ({ fixed = false } = {}) => {
// // //     return (
// // //       <div className={`wg-filter ${fixed ? "wg-filter-fixed" : ""}`}>
// // //         <div className="form-title">
// // //           <form
// // //             onSubmit={handleSearch}
// // //             className="hero-search-form"
// // //             ref={fixed ? fixedSuggestionRef : suggestionRef}
// // //           >
// // //             <fieldset className="hero-search-fieldset">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search city, developer, project, location..."
// // //                 value={searchText}
// // //                 autoComplete="off"
// // //                 onChange={(e) => {
// // //                   setSearchText(e.target.value);
// // //                   setShowSuggestions(true);
// // //                   setActiveSuggestionIndex(-1);
// // //                 }}
// // //                 onFocus={() => {
// // //                   if (searchText) setShowSuggestions(true);
// // //                 }}
// // //                 onKeyDown={handleSearchKeyDown}
// // //               />

// // //               {showSuggestions && searchText && (
// // //                 <div className="hero-search-suggestions">
// // //                   {searchSuggestions.length > 0 ? (
// // //                     searchSuggestions.map((suggestion, index) => (
// // //                       <button
// // //                         type="button"
// // //                         key={`${suggestion.type}-${suggestion.label}-${index}`}
// // //                         className={`hero-suggestion-item ${
// // //                           activeSuggestionIndex === index ? "active" : ""
// // //                         }`}
// // //                         onMouseDown={(e) => {
// // //                           e.preventDefault();
// // //                           handleSuggestionSelect(suggestion);
// // //                         }}
// // //                         onMouseEnter={() => setActiveSuggestionIndex(index)}
// // //                       >
// // //                         <span className="hero-suggestion-label">
// // //                           {suggestion.label}
// // //                         </span>

// // //                         {suggestion.subLabel && (
// // //                           <span className="hero-suggestion-sub">
// // //                             {suggestion.subLabel}
// // //                           </span>
// // //                         )}
// // //                       </button>
// // //                     ))
// // //                   ) : (
// // //                     <div className="hero-no-suggestion">
// // //                       No matching result found
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               )}
// // //             </fieldset>
// // //           </form>

// // //           <div className="box-item wrap-btn">
// // //             <div className="btn-filter show-form searchFormToggler">
// // //               <div className="icons">
// // //                 <svg
// // //                   width={24}
// // //                   height={24}
// // //                   viewBox="0 0 24 24"
// // //                   fill="none"
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                 >
// // //                   <path d="M21 4H14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                   <path d="M10 4H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                   <path d="M21 12H12" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                   <path d="M8 12H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                   <path d="M21 20H16" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                   <path d="M12 20H3" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                   <path d="M14 2V6" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                   <path d="M8 10V14" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                   <path d="M16 18V22" stroke="#F1913D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
// // //                 </svg>
// // //               </div>
// // //             </div>

// // //             <button
// // //               type="button"
// // //               onClick={handleSearch}
// // //               className="tf-btn bg-color-primary pd-3"
// // //             >
// // //               Search <i className="icon-MagnifyingGlass fw-6" />
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <SearchForm onFilterChange={setAdvancedFilters} projects={projects} />
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <>
// // //       <div className="page-title home01 hero-slider-wrap">
// // //         <div className="hero-bg-slider">
// // //           {HERO_IMAGES.map((image, index) => (
// // //             <div
// // //               key={`${image}-${index}`}
// // //               className={`hero-bg-slide ${
// // //                 index === currentBgIndex ? "active" : ""
// // //               }`}
// // //               style={{ backgroundImage: `url('${image}')` }}
// // //             />
// // //           ))}
// // //         </div>

// // //         <div className="hero-overlay" />

// // //         <div className="tf-container hero-main-container">
// // //           <div className="row justify-center relative">
// // //             <div className="col-lg-10 col-xl-10">
// // //               <div className="content-inner">
// // //                 <div className="heading-title">
// // //                   <h1 className="title">GROWL REAL ESTATE</h1>
// // //                   <p className="h6 fw-4">
// // //                     Discover exclusive luxury projects, trusted by thousands of
// // //                     homebuyers every month.
// // //                   </p>
// // //                 </div>

// // //                 <div className="hero-search-normal-wrap">
// // //                   {renderSearchFilter({ fixed: false })}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <style jsx global>{`
// // //           .hero-slider-wrap {
// // //             position: relative;
// // //             overflow: hidden;
// // //             min-height: 430px;
// // //             height: 54vh;
// // //             max-height: 500px;
// // //             display: flex;
// // //             align-items: center;
// // //           }

// // //           .hero-bg-slider {
// // //             position: absolute;
// // //             inset: 0;
// // //             z-index: 0;
// // //             overflow: hidden;
// // //           }

// // //           .hero-bg-slide {
// // //             position: absolute;
// // //             inset: 0;
// // //             background-size: cover;
// // //             background-position: center;
// // //             background-repeat: no-repeat;
// // //             opacity: 0;
// // //             transform: scale(1.05);
// // //             transition: opacity 1.2s ease, transform 5s ease;
// // //           }

// // //           .hero-bg-slide.active {
// // //             opacity: 1;
// // //             transform: scale(1);
// // //           }

// // //           .hero-overlay {
// // //             position: absolute;
// // //             inset: 0;
// // //             background: linear-gradient(
// // //               90deg,
// // //               rgba(11, 19, 32, 0.68) 0%,
// // //               rgba(15, 27, 45, 0.52) 45%,
// // //               rgba(17, 24, 39, 0.38) 100%
// // //             );
// // //             z-index: 1;
// // //           }

// // //           .hero-main-container {
// // //             position: relative;
// // //             z-index: 2;
// // //             width: 100%;
// // //           }

// // //           .content-inner {
// // //             color: #fff;
// // //             text-align: center;
// // //             transform: translateY(0);
// // //           }

// // //           .heading-title {
// // //             margin-bottom: 14px;
// // //             text-align: center;
// // //           }

// // //           .heading-title .title {
// // //             color: #fff;
// // //             font-size: 40px;
// // //             line-height: 1.1;
// // //             margin-bottom: 8px;
// // //             text-align: center;
// // //           }

// // //           .heading-title p {
// // //             color: rgba(255, 255, 255, 0.9);
// // //             font-size: 15px;
// // //             line-height: 1.45;
// // //             max-width: 680px;
// // //             margin-left: auto;
// // //             margin-right: auto;
// // //             text-align: center;
// // //           }

// // //           .hero-search-normal-wrap {
// // //             width: 100%;
// // //             display: flex;
// // //             justify-content: center;
// // //           }

// // //           .wg-filter {
// // //             width: 100%;
// // //             max-width: 1120px;
// // //             margin: 12px auto 0;
// // //             background: rgba(11, 19, 32, 0.22);
// // //             backdrop-filter: blur(5px);
// // //             -webkit-backdrop-filter: blur(5px);
// // //             border: 0;
// // //             border-radius: 22px;
// // //             padding: 8px;
// // //             box-shadow: 0 3px 8px rgba(0, 0, 0, 0.035);
// // //           }

// // //           .form-title {
// // //             display: flex;
// // //             align-items: center;
// // //             gap: 10px;
// // //             flex-wrap: nowrap;
// // //             width: 100%;
// // //           }

// // //           .tf-dropdown-sort {
// // //             flex: 0 0 150px;
// // //           }

// // //           .hero-search-form {
// // //             flex: 1 1 auto;
// // //             min-width: 360px;
// // //             position: relative;
// // //           }

// // //           .hero-search-fieldset {
// // //             position: relative;
// // //             margin: 0;
// // //             padding: 0;
// // //             border: 0;
// // //           }

// // //           .form-title input {
// // //             width: 100%;
// // //             min-height: 56px;
// // //             border-radius: 14px;
// // //             border: 1px solid rgba(17, 24, 39, 0.05);
// // //             background: rgba(255, 255, 255, 0.98);
// // //             color: #111827;
// // //             padding: 0 16px;
// // //             outline: none;
// // //             box-shadow: none;
// // //           }

// // //           .form-title input:focus {
// // //             border-color: rgba(241, 145, 61, 0.22);
// // //             box-shadow: 0 0 0 1px rgba(241, 145, 61, 0.04);
// // //           }

// // //           .btn-select {
// // //             min-height: 56px;
// // //             display: flex;
// // //             align-items: center;
// // //             justify-content: space-between;
// // //             gap: 10px;
// // //             padding: 0 16px;
// // //             border-radius: 14px;
// // //             background: rgba(255, 255, 255, 0.98);
// // //             color: #111827;
// // //             width: 100%;
// // //             cursor: pointer;
// // //             border: 1px solid rgba(17, 24, 39, 0.05);
// // //           }

// // //           .wrap-btn {
// // //             display: flex;
// // //             align-items: center;
// // //             gap: 10px;
// // //             flex-shrink: 0;
// // //           }

// // //           .btn-filter {
// // //             width: 68px;
// // //             height: 56px;
// // //             border-radius: 14px;
// // //             background: #fff4e9;
// // //             border: 1px solid rgba(241, 145, 61, 0.13);
// // //             display: flex;
// // //             align-items: center;
// // //             justify-content: center;
// // //             cursor: pointer;
// // //           }

// // //           .wrap-btn .tf-btn {
// // //             min-height: 56px;
// // //             white-space: nowrap;
// // //             padding-left: 26px;
// // //             padding-right: 26px;
// // //             border-radius: 14px;
// // //           }

// // //           .hero-search-suggestions {
// // //             position: absolute;
// // //             top: calc(100% + 8px);
// // //             left: 0;
// // //             right: 0;
// // //             z-index: 2147483647;
// // //             background: #ffffff;
// // //             border: 1px solid #e5e7eb;
// // //             border-radius: 14px;
// // //             box-shadow: 0 14px 34px rgba(0, 0, 0, 0.10);
// // //             overflow: hidden;
// // //             max-height: 330px;
// // //             overflow-y: auto;
// // //             text-align: left;
// // //           }

// // //           .hero-suggestion-item {
// // //             width: 100%;
// // //             display: block;
// // //             text-align: left;
// // //             padding: 12px 16px;
// // //             border: 0;
// // //             border-bottom: 1px solid #f1f1f1;
// // //             background: #ffffff;
// // //             cursor: pointer;
// // //           }

// // //           .hero-suggestion-item:last-child {
// // //             border-bottom: 0;
// // //           }

// // //           .hero-suggestion-item:hover,
// // //           .hero-suggestion-item.active {
// // //             background: #f8fafc;
// // //           }

// // //           .hero-suggestion-label {
// // //             display: block;
// // //             font-size: 15px;
// // //             font-weight: 600;
// // //             color: #111827;
// // //             line-height: 1.3;
// // //           }

// // //           .hero-suggestion-sub {
// // //             display: block;
// // //             font-size: 13px;
// // //             font-weight: 400;
// // //             color: #6b7280;
// // //             margin-top: 3px;
// // //             line-height: 1.3;
// // //           }

// // //           .hero-no-suggestion {
// // //             padding: 14px 16px;
// // //             font-size: 14px;
// // //             color: #6b7280;
// // //             background: #ffffff;
// // //             text-align: left;
// // //           }

// // //           .hero-fixed-search-portal {
// // //             position: fixed;
// // //             top: 86px;
// // //             left: 0;
// // //             width: 100%;
// // //             z-index: 2147483000;
// // //             padding: 0 20px;
// // //             pointer-events: none;
// // //           }

// // //           .hero-fixed-search-inner {
// // //             width: 100%;
// // //             max-width: 1120px;
// // //             margin: 0 auto;
// // //             pointer-events: auto;
// // //           }

// // //           .hero-fixed-search-inner .wg-filter {
// // //             margin: 0;
// // //             background: rgba(11, 19, 32, 0.26);
// // //             backdrop-filter: blur(5px);
// // //             -webkit-backdrop-filter: blur(5px);
// // //             border: 0;
// // //             box-shadow: 0 4px 10px rgba(0, 0, 0, 0.045);
// // //             padding: 8px;
// // //             border-radius: 22px;
// // //             max-width: 1120px;
// // //           }

// // //           .hero-fixed-search-inner .form-title input,
// // //           .hero-fixed-search-inner .btn-select,
// // //           .hero-fixed-search-inner .btn-filter {
// // //             background: rgba(255, 255, 255, 0.99);
// // //             border: 1px solid rgba(17, 24, 39, 0.04);
// // //           }

// // //           .hero-fixed-search-inner .form-title input,
// // //           .hero-fixed-search-inner .btn-select,
// // //           .hero-fixed-search-inner .btn-filter,
// // //           .hero-fixed-search-inner .wrap-btn .tf-btn {
// // //             min-height: 52px;
// // //           }

// // //           .hero-fixed-search-inner .btn-filter {
// // //             width: 64px;
// // //             height: 52px;
// // //           }

// // //           @media (max-width: 1199px) {
// // //             .wg-filter {
// // //               max-width: 980px;
// // //             }

// // //             .hero-fixed-search-inner {
// // //               max-width: 980px;
// // //             }

// // //             .hero-fixed-search-inner .wg-filter {
// // //               max-width: 980px;
// // //             }

// // //             .hero-search-form {
// // //               min-width: 300px;
// // //             }
// // //           }

// // //           @media (max-width: 991px) {
// // //             .hero-slider-wrap {
// // //               min-height: 460px;
// // //               height: auto;
// // //               max-height: none;
// // //               padding: 24px 0 28px;
// // //               align-items: center;
// // //             }

// // //             .content-inner {
// // //               transform: translateY(0);
// // //               text-align: center;
// // //             }

// // //             .heading-title {
// // //               margin-bottom: 14px;
// // //               padding: 0 12px;
// // //             }

// // //             .heading-title .title {
// // //               font-size: 28px;
// // //               line-height: 1.12;
// // //               text-align: center;
// // //               margin-bottom: 8px;
// // //             }

// // //             .heading-title p {
// // //               font-size: 14px;
// // //               line-height: 1.5;
// // //               max-width: 320px;
// // //               text-align: center;
// // //             }

// // //             .wg-filter {
// // //               width: calc(100% - 28px);
// // //               max-width: 420px;
// // //               margin: 12px auto 0;
// // //               padding: 8px;
// // //               border-radius: 18px;
// // //               background: rgba(11, 19, 32, 0.20);
// // //               border: 0;
// // //               box-shadow: 0 3px 8px rgba(0, 0, 0, 0.035);
// // //             }

// // //             .form-title {
// // //               flex-direction: column;
// // //               align-items: stretch;
// // //               gap: 10px;
// // //             }

// // //             .tf-dropdown-sort {
// // //               flex: unset;
// // //               width: 100%;
// // //             }

// // //             .btn-select {
// // //               min-height: 48px;
// // //               justify-content: center;
// // //               position: relative;
// // //               font-weight: 700;
// // //               background: #ffffff;
// // //             }

// // //             .btn-select i {
// // //               position: absolute;
// // //               right: 18px;
// // //             }

// // //             .hero-search-form {
// // //               width: 100%;
// // //               min-width: 100%;
// // //             }

// // //             .form-title input {
// // //               min-height: 48px;
// // //               text-align: left;
// // //               background: #ffffff;
// // //               border-radius: 14px;
// // //               font-size: 14px;
// // //             }

// // //             .wrap-btn {
// // //               width: 100%;
// // //               display: grid;
// // //               grid-template-columns: 56px 1fr;
// // //               gap: 9px;
// // //             }

// // //             .btn-filter {
// // //               width: 56px;
// // //               height: 48px;
// // //               min-height: 48px;
// // //               border-radius: 14px;
// // //               background: #fff7ef;
// // //             }

// // //             .wrap-btn .tf-btn {
// // //               width: 100%;
// // //               min-height: 48px;
// // //               border-radius: 14px;
// // //               justify-content: center;
// // //               padding-left: 16px;
// // //               padding-right: 16px;
// // //               background: #f1913d;
// // //             }

// // //             .hero-search-suggestions {
// // //               max-height: 230px;
// // //             }

// // //             .hero-fixed-search-portal {
// // //               display: none !important;
// // //             }
// // //           }

// // //           @media (max-width: 575px) {
// // //             .hero-slider-wrap {
// // //               min-height: 430px;
// // //               padding: 20px 0 26px;
// // //             }

// // //             .heading-title {
// // //               margin-bottom: 12px;
// // //             }

// // //             .heading-title .title {
// // //               font-size: 23px;
// // //               line-height: 1.15;
// // //               margin-bottom: 7px;
// // //             }

// // //             .heading-title p {
// // //               font-size: 12.5px;
// // //               line-height: 1.55;
// // //               max-width: 300px;
// // //             }

// // //             .wg-filter {
// // //               width: calc(100% - 36px);
// // //               max-width: 340px;
// // //               padding: 7px;
// // //               border-radius: 18px;
// // //             }

// // //             .btn-select {
// // //               min-height: 46px;
// // //               font-size: 15px;
// // //             }

// // //             .form-title input {
// // //               min-height: 46px;
// // //               font-size: 13px;
// // //               padding: 0 14px;
// // //             }

// // //             .wrap-btn {
// // //               grid-template-columns: 54px 1fr;
// // //               gap: 8px;
// // //             }

// // //             .btn-filter {
// // //               width: 54px;
// // //               height: 46px;
// // //               min-height: 46px;
// // //             }

// // //             .wrap-btn .tf-btn {
// // //               min-height: 46px;
// // //               font-size: 14px;
// // //             }
// // //           }

// // //           @media (max-width: 380px) {
// // //             .hero-slider-wrap {
// // //               min-height: 420px;
// // //             }

// // //             .heading-title .title {
// // //               font-size: 22px;
// // //             }

// // //             .heading-title p {
// // //               font-size: 12px;
// // //             }

// // //             .wg-filter {
// // //               width: calc(100% - 28px);
// // //               max-width: 330px;
// // //             }
// // //           }
// // //         `}</style>
// // //       </div>

// // //       {mounted &&
// // //         showFixedSearch &&
// // //         createPortal(
// // //           <div className="hero-fixed-search-portal">
// // //             <div className="hero-fixed-search-inner">
// // //               {renderSearchFilter({ fixed: true })}
// // //             </div>
// // //           </div>,
// // //           document.body
// // //         )}
// // //     </>
// // //   );
// // // }

// // "use client";

// // import React, { useEffect, useMemo, useRef, useState } from "react";
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
// //     .replace(/-+/g, "-")
// //     .replace(/^-|-$/g, "");
// // }

// // function getResultsArray(response) {
// //   if (Array.isArray(response)) return response;
// //   if (Array.isArray(response?.results)) return response.results;
// //   if (Array.isArray(response?.data)) return response.data;
// //   if (Array.isArray(response?.properties)) return response.properties;
// //   if (Array.isArray(response?.projects)) return response.projects;
// //   return [];
// // }

// // function getProjectTitle(item) {
// //   return (
// //     item?.title ||
// //     item?.project_name ||
// //     item?.property_name ||
// //     item?.project_title ||
// //     item?.property_title ||
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
// //   return (
// //     item?.short_location ||
// //     item?.location ||
// //     item?.neighborhood ||
// //     item?.full_address ||
// //     item?.address ||
// //     ""
// //   );
// // }

// // export default function Hero({ onSearch = () => {}, projects = [] }) {
// //   const router = useRouter();
// //   const suggestionRef = useRef(null);

// //   const [searchText, setSearchText] = useState("");
// //   const [showSuggestions, setShowSuggestions] = useState(false);
// //   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

// //   const [cities, setCities] = useState([]);
// //   const [developers, setDevelopers] = useState([]);
// //   const [fetchedProjects, setFetchedProjects] = useState([]);
// //   const [currentBgIndex, setCurrentBgIndex] = useState(0);

// //   const allProjects = useMemo(() => {
// //     return projects.length > 0 ? projects : fetchedProjects;
// //   }, [projects, fetchedProjects]);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
// //     }, 4000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   useEffect(() => {
// //     const loadSearchData = async () => {
// //       try {
// //         const [citiesRes, developersRes, propertiesRes] = await Promise.all([
// //           apiGet("/admindashboard/cities/"),
// //           apiGet("/admindashboard/developers/"),
// //           apiGet("/admindashboard/properties/"),
// //         ]);

// //         setCities(getResultsArray(citiesRes));
// //         setDevelopers(getResultsArray(developersRes));

// //         const propertyList = getResultsArray(propertiesRes);

// //         const visibleProperties = propertyList.filter((item) => {
// //           const postStatus = normalizeText(item?.post_status);
// //           const isApproved = item?.is_approved;

// //           if (!postStatus && typeof isApproved === "undefined") return true;

// //           return postStatus === "publish" && isApproved === true;
// //         });

// //         setFetchedProjects(visibleProperties);
// //       } catch (error) {
// //         console.error("Hero search data fetch error:", error);
// //         setCities([]);
// //         setDevelopers([]);
// //         setFetchedProjects([]);
// //       }
// //     };

// //     loadSearchData();
// //   }, []);

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (
// //         suggestionRef.current &&
// //         !suggestionRef.current.contains(event.target)
// //       ) {
// //         closeSuggestions();
// //       }
// //     };

// //     document.addEventListener("mousedown", handleClickOutside);

// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   const fallbackCitiesFromProjects = useMemo(() => {
// //     const map = new Map();

// //     allProjects.forEach((item) => {
// //       const city = item?.city || "";
// //       const citySlug = item?.city_slug || slugify(city);

// //       if (city && citySlug) {
// //         map.set(normalizeText(city), {
// //           city,
// //           city_slug: citySlug,
// //         });
// //       }
// //     });

// //     return Array.from(map.values());
// //   }, [allProjects]);

// //   const fallbackDevelopersFromProjects = useMemo(() => {
// //     const map = new Map();

// //     allProjects.forEach((item) => {
// //       const developerName = getDeveloperName(item);
// //       const developerSlug = item?.developer_slug || slugify(developerName);

// //       if (developerName && developerSlug) {
// //         map.set(normalizeText(developerName), {
// //           developer_name: developerName,
// //           developer_slug: developerSlug,
// //         });
// //       }
// //     });

// //     return Array.from(map.values());
// //   }, [allProjects]);

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
// //       const cityName = normalizeText(item?.city);
// //       const citySlug = normalizeText(item?.city_slug);

// //       return cityName === normalized || citySlug === normalized;
// //     });

// //     if (exactMatch) return exactMatch;

// //     return (
// //       finalCities.find((item) => {
// //         const cityName = normalizeText(item?.city);
// //         const citySlug = normalizeText(item?.city_slug);

// //         return cityName.includes(normalized) || citySlug.includes(normalized);
// //       }) || null
// //     );
// //   };

// //   const findDeveloperMatch = (searchValue) => {
// //     const normalized = normalizeText(searchValue);

// //     if (!normalized) return null;

// //     const exactMatch = finalDevelopers.find((item) => {
// //       const developerName = normalizeText(item?.developer_name);
// //       const developerSlug = normalizeText(item?.developer_slug);

// //       return developerName === normalized || developerSlug === normalized;
// //     });

// //     if (exactMatch) return exactMatch;

// //     return (
// //       finalDevelopers.find((item) => {
// //         const developerName = normalizeText(item?.developer_name);
// //         const developerSlug = normalizeText(item?.developer_slug);

// //         return (
// //           developerName.includes(normalized) ||
// //           developerSlug.includes(normalized)
// //         );
// //       }) || null
// //     );
// //   };

// //   const findProjectMatch = (searchValue) => {
// //     const normalized = normalizeText(searchValue);

// //     if (!normalized) return null;

// //     const exactMatch = allProjects.find((item) => {
// //       const title = normalizeText(getProjectTitle(item));
// //       const slug = normalizeText(
// //         item?.slug || item?.property_slug || item?.project_slug
// //       );

// //       return title === normalized || slug === normalized;
// //     });

// //     if (exactMatch) return exactMatch;

// //     return (
// //       allProjects.find((item) => {
// //         const title = normalizeText(getProjectTitle(item));
// //         const slug = normalizeText(
// //           item?.slug || item?.property_slug || item?.project_slug
// //         );
// //         const city = normalizeText(item?.city);
// //         const location = normalizeText(getLocationName(item));
// //         const developer = normalizeText(getDeveloperName(item));
// //         const propertyType = normalizeText(item?.property_type);
// //         const propertyStatus = normalizeText(item?.property_status);
// //         const configuration = normalizeText(
// //           item?.configuration_text ||
// //             item?.configuration ||
// //             item?.bhk ||
// //             item?.unit_type
// //         );

// //         return (
// //           title.includes(normalized) ||
// //           slug.includes(normalized) ||
// //           city.includes(normalized) ||
// //           location.includes(normalized) ||
// //           developer.includes(normalized) ||
// //           propertyType.includes(normalized) ||
// //           propertyStatus.includes(normalized) ||
// //           configuration.includes(normalized)
// //         );
// //       }) || null
// //     );
// //   };

// //   const searchSuggestions = useMemo(() => {
// //     const keyword = normalizeText(searchText);

// //     if (!keyword || keyword.length < 1) return [];

// //     const suggestionMap = new Map();

// //     finalCities.forEach((item) => {
// //       const cityName = item?.city || "";
// //       const citySlug = item?.city_slug || slugify(cityName);

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
// //       const developerName = item?.developer_name || "";
// //       const developerSlug = item?.developer_slug || slugify(developerName);

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

// //     allProjects.forEach((item) => {
// //       const title = getProjectTitle(item);
// //       const city = item?.city || "";
// //       const citySlug = item?.city_slug || slugify(city);
// //       const location = getLocationName(item);
// //       const address = item?.full_address || item?.address || "";
// //       const developer = getDeveloperName(item);
// //       const propertyType = item?.property_type || "";
// //       const propertyStatus = item?.property_status || "";
// //       const propertyLabel = item?.property_label || "";
// //       const configuration =
// //         item?.configuration_text ||
// //         item?.configuration ||
// //         item?.bhk ||
// //         item?.unit_type ||
// //         "";

// //       const searchableText = normalizeText(
// //         [
// //           title,
// //           city,
// //           citySlug,
// //           location,
// //           address,
// //           developer,
// //           propertyType,
// //           propertyStatus,
// //           propertyLabel,
// //           configuration,
// //           item?.slug,
// //           item?.project_slug,
// //           item?.property_slug,
// //         ].join(" ")
// //       );

// //       if (!searchableText.includes(keyword)) return;

// //       const mainLabel =
// //         title || location || city || developer || propertyType || propertyStatus;

// //       if (!mainLabel) return;

// //       const subLabel = [location, city, developer, configuration]
// //         .filter(Boolean)
// //         .filter((value, index, self) => self.indexOf(value) === index)
// //         .join(" • ");

// //       const key = `project-${normalizeText(`${mainLabel}-${subLabel}`)}`;

// //       if (!suggestionMap.has(key)) {
// //         suggestionMap.set(key, {
// //           label: mainLabel,
// //           subLabel: subLabel || "Project / Property",
// //           value: mainLabel,
// //           type: "project",
// //           city,
// //           citySlug,
// //           location,
// //           propertyType,
// //           propertyStatus,
// //           item,
// //         });
// //       }
// //     });

// //     return Array.from(suggestionMap.values()).slice(0, 12);
// //   }, [searchText, allProjects, finalCities, finalDevelopers]);

// //   const closeSuggestions = () => {
// //     setShowSuggestions(false);
// //     setActiveSuggestionIndex(-1);
// //   };

// //   const applySearchFilter = (value, extraData = {}) => {
// //     onSearch({
// //       keyword: value || "",
// //       city: extraData.city || "",
// //       location: extraData.location || "",
// //       propertyType: extraData.propertyType || "",
// //       propertyStatus: extraData.propertyStatus || "",
// //       bedrooms: "",
// //       bathrooms: "",
// //       amenities: [],
// //       sortBy: "Newest",
// //       priceRange: [0, 50000000],
// //       areaRange: [0, 5000],
// //     });
// //   };

// //   const handleSuggestionSelect = (suggestion) => {
// //     const selectedValue = suggestion.value || "";

// //     setSearchText(selectedValue);
// //     closeSuggestions();

// //     if (suggestion.type === "city" && suggestion.slug) {
// //       router.push(`/cities/${suggestion.slug}`);
// //       return;
// //     }

// //     if (suggestion.type === "developer" && suggestion.slug) {
// //       router.push(`/developers/${suggestion.slug}`);
// //       return;
// //     }

// //     if (suggestion.type === "project") {
// //       applySearchFilter(selectedValue, {
// //         city: suggestion.city,
// //         location: suggestion.location,
// //         propertyType: suggestion.propertyType,
// //         propertyStatus: suggestion.propertyStatus,
// //       });

// //       return;
// //     }

// //     applySearchFilter(selectedValue);
// //   };

// //   const handleSearch = (e) => {
// //     if (e) e.preventDefault();

// //     const rawSearch = searchText.trim();

// //     if (!rawSearch) {
// //       applySearchFilter("");
// //       closeSuggestions();
// //       return;
// //     }

// //     const cityMatch = findCityMatch(rawSearch);

// //     if (cityMatch?.city_slug) {
// //       closeSuggestions();
// //       router.push(`/cities/${cityMatch.city_slug}`);
// //       return;
// //     }

// //     const developerMatch = findDeveloperMatch(rawSearch);

// //     if (developerMatch?.developer_slug) {
// //       closeSuggestions();
// //       router.push(`/developers/${developerMatch.developer_slug}`);
// //       return;
// //     }

// //     const projectMatch = findProjectMatch(rawSearch);

// //     if (projectMatch) {
// //       const projectTitle = getProjectTitle(projectMatch) || rawSearch;

// //       setSearchText(projectTitle);

// //       applySearchFilter(projectTitle, {
// //         city: projectMatch?.city || "",
// //         location: getLocationName(projectMatch),
// //         propertyType: projectMatch?.property_type || "",
// //         propertyStatus: projectMatch?.property_status || "",
// //       });

// //       closeSuggestions();
// //       return;
// //     }

// //     applySearchFilter(rawSearch);
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

// //                 <div className="hero-search-only-wrap">
// //                   <form
// //                     onSubmit={handleSearch}
// //                     className="hero-search-only-form"
// //                     ref={suggestionRef}
// //                   >
// //                     <fieldset className="hero-search-fieldset">
// //                       <input
// //                         type="text"
// //                         placeholder="Search city, developer, project, location..."
// //                         value={searchText}
// //                         autoComplete="off"
// //                         onChange={(e) => {
// //                           setSearchText(e.target.value);
// //                           setShowSuggestions(true);
// //                           setActiveSuggestionIndex(-1);
// //                         }}
// //                         onFocus={() => {
// //                           if (searchText) setShowSuggestions(true);
// //                         }}
// //                         onKeyDown={handleSearchKeyDown}
// //                       />

// //                       {showSuggestions && searchText && (
// //                         <div className="hero-search-suggestions">
// //                           {searchSuggestions.length > 0 ? (
// //                             searchSuggestions.map((suggestion, index) => (
// //                               <button
// //                                 type="button"
// //                                 key={`${suggestion.type}-${suggestion.label}-${index}`}
// //                                 className={`hero-suggestion-item ${
// //                                   activeSuggestionIndex === index
// //                                     ? "active"
// //                                     : ""
// //                                 }`}
// //                                 onMouseDown={(e) => {
// //                                   e.preventDefault();
// //                                   handleSuggestionSelect(suggestion);
// //                                 }}
// //                                 onMouseEnter={() =>
// //                                   setActiveSuggestionIndex(index)
// //                                 }
// //                               >
// //                                 <span className="hero-suggestion-label">
// //                                   {suggestion.label}
// //                                 </span>

// //                                 {suggestion.subLabel && (
// //                                   <span className="hero-suggestion-sub">
// //                                     {suggestion.subLabel}
// //                                   </span>
// //                                 )}
// //                               </button>
// //                             ))
// //                           ) : (
// //                             <div className="hero-no-suggestion">
// //                               No matching result found
// //                             </div>
// //                           )}
// //                         </div>
// //                       )}
// //                     </fieldset>
// //                   </form>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <style jsx global>{`
// //           .hero-slider-wrap,
// //           .page-title.home01.hero-slider-wrap {
// //             position: relative;
// //             overflow: visible !important;
// //             min-height: 470px;
// //             height: 58vh;
// //             max-height: 560px;
// //             display: flex;
// //             align-items: center;
// //             z-index: 20;
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
// //               rgba(11, 19, 32, 0.68) 0%,
// //               rgba(15, 27, 45, 0.52) 45%,
// //               rgba(17, 24, 39, 0.38) 100%
// //             );
// //             z-index: 1;
// //           }

// //           .hero-main-container {
// //             position: relative;
// //             z-index: 5;
// //             width: 100%;
// //             overflow: visible !important;
// //           }

// //           .hero-main-container .row,
// //           .hero-main-container .col-lg-10,
// //           .hero-main-container .col-xl-10 {
// //             overflow: visible !important;
// //           }

// //           .content-inner {
// //             color: #ffffff;
// //             text-align: center;
// //             position: relative;
// //             z-index: 6;
// //             overflow: visible !important;
// //           }

// //           .heading-title {
// //             margin-bottom: 22px;
// //             text-align: center;
// //           }

// //           .heading-title .title {
// //             color: #ffffff;
// //             font-size: 44px;
// //             line-height: 1.1;
// //             margin-bottom: 10px;
// //             text-align: center;
// //           }

// //           .heading-title p {
// //             color: rgba(255, 255, 255, 0.92);
// //             font-size: 16px;
// //             line-height: 1.45;
// //             max-width: 760px;
// //             margin-left: auto;
// //             margin-right: auto;
// //             text-align: center;
// //           }

// //           .hero-search-only-wrap {
// //             width: 100%;
// //             display: flex;
// //             justify-content: center;
// //             padding: 0 12px;
// //             position: relative;
// //             z-index: 999;
// //             overflow: visible !important;
// //           }

// //           .hero-search-only-form {
// //             width: 100%;
// //             max-width: 1180px;
// //             position: relative;
// //             z-index: 999;
// //             overflow: visible !important;
// //           }

// //           .hero-search-fieldset {
// //             position: relative;
// //             width: 100%;
// //             margin: 0;
// //             padding: 8px;
// //             border: 0;
// //             border-radius: 26px;
// //             background: rgba(11, 19, 32, 0.22);
// //             backdrop-filter: blur(5px);
// //             -webkit-backdrop-filter: blur(5px);
// //             box-sizing: border-box;
// //             overflow: visible !important;
// //             z-index: 999;
// //           }

// //           .hero-search-fieldset input {
// //             width: 100%;
// //             min-height: 78px;
// //             border-radius: 18px;
// //             border: 1px solid rgba(17, 24, 39, 0.05);
// //             background: rgba(255, 255, 255, 0.98);
// //             color: #111827;
// //             padding: 0 26px;
// //             outline: none;
// //             box-shadow: none;
// //             font-size: 18px;
// //             font-weight: 500;
// //             box-sizing: border-box;
// //           }

// //           .hero-search-fieldset input:focus {
// //             border-color: rgba(241, 145, 61, 0.35);
// //             box-shadow: 0 0 0 4px rgba(241, 145, 61, 0.12);
// //           }

// //           .hero-search-fieldset input::placeholder {
// //             color: #6b7280;
// //           }

// //           .hero-search-suggestions {
// //             position: absolute;
// //             top: calc(100% + 10px);
// //             left: 8px;
// //             right: 8px;
// //             z-index: 2147483647 !important;
// //             background: #ffffff;
// //             border: 1px solid #e5e7eb;
// //             border-radius: 16px;
// //             box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
// //             overflow-y: auto;
// //             overflow-x: hidden;
// //             max-height: 430px;
// //             text-align: left;
// //           }

// //           .hero-suggestion-item {
// //             width: 100%;
// //             display: block;
// //             text-align: left;
// //             padding: 14px 20px;
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
// //             font-size: 16px;
// //             font-weight: 700;
// //             color: #111827;
// //             line-height: 1.3;
// //           }

// //           .hero-suggestion-sub {
// //             display: block;
// //             font-size: 14px;
// //             font-weight: 400;
// //             color: #6b7280;
// //             margin-top: 4px;
// //             line-height: 1.3;
// //           }

// //           .hero-no-suggestion {
// //             padding: 16px 20px;
// //             font-size: 14px;
// //             color: #6b7280;
// //             background: #ffffff;
// //             text-align: left;
// //           }

// //           @media (max-width: 991px) {
// //             .hero-slider-wrap,
// //             .page-title.home01.hero-slider-wrap {
// //               min-height: 430px;
// //               height: auto;
// //               max-height: none;
// //               padding: 24px 0 78px;
// //               align-items: center;
// //               overflow: visible !important;
// //             }

// //             .heading-title {
// //               margin-bottom: 16px;
// //               padding: 0 12px;
// //             }

// //             .heading-title .title {
// //               font-size: 28px;
// //               line-height: 1.12;
// //               margin-bottom: 8px;
// //             }

// //             .heading-title p {
// //               font-size: 14px;
// //               line-height: 1.5;
// //               max-width: 320px;
// //             }

// //             .hero-search-only-form {
// //               max-width: 430px;
// //             }

// //             .hero-search-fieldset {
// //               padding: 7px;
// //               border-radius: 18px;
// //             }

// //             .hero-search-fieldset input {
// //               min-height: 54px;
// //               border-radius: 14px;
// //               font-size: 14px;
// //               padding: 0 15px;
// //             }

// //             .hero-search-suggestions {
// //               left: 7px;
// //               right: 7px;
// //               max-height: 320px;
// //               border-radius: 14px;
// //             }

// //             .hero-suggestion-item {
// //               padding: 12px 14px;
// //             }

// //             .hero-suggestion-label {
// //               font-size: 14px;
// //             }

// //             .hero-suggestion-sub {
// //               font-size: 12px;
// //             }
// //           }

// //           @media (max-width: 575px) {
// //             .hero-slider-wrap,
// //             .page-title.home01.hero-slider-wrap {
// //               min-height: 405px;
// //               padding: 20px 0 88px;
// //             }

// //             .heading-title {
// //               margin-bottom: 14px;
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

// //             .hero-search-only-wrap {
// //               padding: 0 18px;
// //             }

// //             .hero-search-only-form {
// //               max-width: 340px;
// //             }

// //             .hero-search-fieldset input {
// //               min-height: 50px;
// //               font-size: 13px;
// //               padding: 0 14px;
// //             }

// //             .hero-search-suggestions {
// //               max-height: 300px;
// //             }
// //           }

// //           @media (max-width: 380px) {
// //             .hero-slider-wrap,
// //             .page-title.home01.hero-slider-wrap {
// //               min-height: 395px;
// //               padding-bottom: 90px;
// //             }

// //             .heading-title .title {
// //               font-size: 22px;
// //             }

// //             .heading-title p {
// //               font-size: 12px;
// //             }

// //             .hero-search-only-form {
// //               max-width: 330px;
// //             }

// //             .hero-search-only-wrap {
// //               padding: 0 14px;
// //             }
// //           }
// //         `}</style>
// //       </div>
// //     </>
// //   );
// // }

// "use client";

// import React, { useEffect, useMemo, useRef, useState } from "react";
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
//     .replace(/-+/g, "-")
//     .replace(/^-|-$/g, "");
// }

// function getResultsArray(response) {
//   if (Array.isArray(response)) return response;
//   if (Array.isArray(response?.results)) return response.results;
//   if (Array.isArray(response?.data)) return response.data;
//   if (Array.isArray(response?.properties)) return response.properties;
//   if (Array.isArray(response?.projects)) return response.projects;
//   return [];
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
//   return (
//     item?.short_location ||
//     item?.location ||
//     item?.neighborhood ||
//     item?.full_address ||
//     item?.address ||
//     ""
//   );
// }

// function getProjectDetailHref(item) {
//   const title = getProjectTitle(item) || "property";

//   const slug =
//     item?.slug ||
//     item?.property_slug ||
//     item?.project_slug ||
//     item?.property_id ||
//     item?.id ||
//     slugify(title);

//   return `/${slug}`;
// }

// export default function Hero({ onSearch = () => {}, projects = [] }) {
//   const router = useRouter();
//   const suggestionRef = useRef(null);

//   const [searchText, setSearchText] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

//   const [cities, setCities] = useState([]);
//   const [developers, setDevelopers] = useState([]);
//   const [fetchedProjects, setFetchedProjects] = useState([]);
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
//   const [isSearchFixed, setIsSearchFixed] = useState(false);

//   const allProjects = useMemo(() => {
//     return projects.length > 0 ? projects : fetchedProjects;
//   }, [projects, fetchedProjects]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const loadSearchData = async () => {
//       try {
//         const [citiesRes, developersRes, propertiesRes] = await Promise.all([
//           apiGet("/admindashboard/cities/"),
//           apiGet("/admindashboard/developers/"),
//           apiGet("/admindashboard/properties/"),
//         ]);

//         setCities(getResultsArray(citiesRes));
//         setDevelopers(getResultsArray(developersRes));

//         const propertyList = getResultsArray(propertiesRes);

//         const visibleProperties = propertyList.filter((item) => {
//           const postStatus = normalizeText(item?.post_status);
//           const isApproved = item?.is_approved;

//           if (!postStatus && typeof isApproved === "undefined") return true;

//           return postStatus === "publish" && isApproved === true;
//         });

//         setFetchedProjects(visibleProperties);
//       } catch (error) {
//         console.error("Hero search data fetch error:", error);
//         setCities([]);
//         setDevelopers([]);
//         setFetchedProjects([]);
//       }
//     };

//     loadSearchData();
//   }, []);

//   useEffect(() => {
//     const handleFixedSearch = () => {
//       if (typeof window === "undefined") return;

//       const isDesktop = window.innerWidth > 991;

//       if (!isDesktop) {
//         setIsSearchFixed(false);
//         return;
//       }

//       setIsSearchFixed(window.scrollY > 170);
//     };

//     handleFixedSearch();

//     window.addEventListener("scroll", handleFixedSearch, { passive: true });
//     window.addEventListener("resize", handleFixedSearch);

//     return () => {
//       window.removeEventListener("scroll", handleFixedSearch);
//       window.removeEventListener("resize", handleFixedSearch);
//     };
//   }, []);

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
//       const city = item?.city || "";
//       const citySlug = item?.city_slug || slugify(city);

//       if (city && citySlug) {
//         map.set(normalizeText(city), {
//           city,
//           city_slug: citySlug,
//         });
//       }
//     });

//     return Array.from(map.values());
//   }, [allProjects]);

//   const fallbackDevelopersFromProjects = useMemo(() => {
//     const map = new Map();

//     allProjects.forEach((item) => {
//       const developerName = getDeveloperName(item);
//       const developerSlug = item?.developer_slug || slugify(developerName);

//       if (developerName && developerSlug) {
//         map.set(normalizeText(developerName), {
//           developer_name: developerName,
//           developer_slug: developerSlug,
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
//       const cityName = normalizeText(item?.city);
//       const citySlug = normalizeText(item?.city_slug);

//       return cityName === normalized || citySlug === normalized;
//     });

//     if (exactMatch) return exactMatch;

//     return (
//       finalCities.find((item) => {
//         const cityName = normalizeText(item?.city);
//         const citySlug = normalizeText(item?.city_slug);

//         return cityName.includes(normalized) || citySlug.includes(normalized);
//       }) || null
//     );
//   };

//   const findDeveloperMatch = (searchValue) => {
//     const normalized = normalizeText(searchValue);

//     if (!normalized) return null;

//     const exactMatch = finalDevelopers.find((item) => {
//       const developerName = normalizeText(item?.developer_name);
//       const developerSlug = normalizeText(item?.developer_slug);

//       return developerName === normalized || developerSlug === normalized;
//     });

//     if (exactMatch) return exactMatch;

//     return (
//       finalDevelopers.find((item) => {
//         const developerName = normalizeText(item?.developer_name);
//         const developerSlug = normalizeText(item?.developer_slug);

//         return (
//           developerName.includes(normalized) ||
//           developerSlug.includes(normalized)
//         );
//       }) || null
//     );
//   };

//   const findProjectMatch = (searchValue) => {
//     const normalized = normalizeText(searchValue);

//     if (!normalized) return null;

//     const exactMatch = allProjects.find((item) => {
//       const title = normalizeText(getProjectTitle(item));
//       const slug = normalizeText(
//         item?.slug || item?.property_slug || item?.project_slug
//       );

//       return title === normalized || slug === normalized;
//     });

//     if (exactMatch) return exactMatch;

//     return (
//       allProjects.find((item) => {
//         const title = normalizeText(getProjectTitle(item));
//         const slug = normalizeText(
//           item?.slug || item?.property_slug || item?.project_slug
//         );
//         const city = normalizeText(item?.city);
//         const citySlug = normalizeText(item?.city_slug);
//         const location = normalizeText(getLocationName(item));
//         const developer = normalizeText(getDeveloperName(item));
//         const developerSlug = normalizeText(item?.developer_slug);
//         const propertyType = normalizeText(item?.property_type);
//         const propertyStatus = normalizeText(item?.property_status);
//         const configuration = normalizeText(
//           item?.configuration_text ||
//             item?.configuration ||
//             item?.bhk ||
//             item?.unit_type
//         );

//         return (
//           title.includes(normalized) ||
//           slug.includes(normalized) ||
//           city.includes(normalized) ||
//           citySlug.includes(normalized) ||
//           location.includes(normalized) ||
//           developer.includes(normalized) ||
//           developerSlug.includes(normalized) ||
//           propertyType.includes(normalized) ||
//           propertyStatus.includes(normalized) ||
//           configuration.includes(normalized)
//         );
//       }) || null
//     );
//   };

//   const searchSuggestions = useMemo(() => {
//     const keyword = normalizeText(searchText);

//     if (!keyword || keyword.length < 1) return [];

//     const suggestionMap = new Map();

//     finalCities.forEach((item) => {
//       const cityName = item?.city || "";
//       const citySlug = item?.city_slug || slugify(cityName);

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
//       const developerName = item?.developer_name || "";
//       const developerSlug = item?.developer_slug || slugify(developerName);

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
//       const city = item?.city || "";
//       const citySlug = item?.city_slug || slugify(city);
//       const location = getLocationName(item);
//       const address = item?.full_address || item?.address || "";
//       const developer = getDeveloperName(item);
//       const propertyType = item?.property_type || "";
//       const propertyStatus = item?.property_status || "";
//       const propertyLabel = item?.property_label || "";
//       const configuration =
//         item?.configuration_text ||
//         item?.configuration ||
//         item?.bhk ||
//         item?.unit_type ||
//         "";

//       const searchableText = normalizeText(
//         [
//           title,
//           city,
//           citySlug,
//           location,
//           address,
//           developer,
//           item?.developer_slug,
//           propertyType,
//           propertyStatus,
//           propertyLabel,
//           configuration,
//           item?.slug,
//           item?.project_slug,
//           item?.property_slug,
//         ].join(" ")
//       );

//       if (!searchableText.includes(keyword)) return;

//       const mainLabel =
//         title || location || city || developer || propertyType || propertyStatus;

//       if (!mainLabel) return;

//       const subLabel = [location, city, developer, configuration]
//         .filter(Boolean)
//         .filter((value, index, self) => self.indexOf(value) === index)
//         .join(" • ");

//       const detailHref = getProjectDetailHref(item);
//       const key = `project-${normalizeText(`${mainLabel}-${subLabel}-${detailHref}`)}`;

//       if (!suggestionMap.has(key)) {
//         suggestionMap.set(key, {
//           label: mainLabel,
//           subLabel: subLabel || "Project / Property",
//           value: mainLabel,
//           type: "project",
//           city,
//           citySlug,
//           location,
//           propertyType,
//           propertyStatus,
//           detailHref,
//           item,
//         });
//       }
//     });

//     return Array.from(suggestionMap.values()).slice(0, 12);
//   }, [searchText, allProjects, finalCities, finalDevelopers]);

//   const closeSuggestions = () => {
//     setShowSuggestions(false);
//     setActiveSuggestionIndex(-1);
//   };

//   const applySearchFilter = (value, extraData = {}) => {
//     onSearch({
//       keyword: value || "",
//       city: extraData.city || "",
//       location: extraData.location || "",
//       propertyType: extraData.propertyType || "",
//       propertyStatus: extraData.propertyStatus || "",
//       bedrooms: "",
//       bathrooms: "",
//       amenities: [],
//       sortBy: "Newest",
//       priceRange: [0, 50000000],
//       areaRange: [0, 5000],
//     });
//   };

//   const handleSuggestionSelect = (suggestion) => {
//     const selectedValue = suggestion.value || "";

//     setSearchText(selectedValue);
//     closeSuggestions();

//     if (suggestion.type === "city" && suggestion.slug) {
//       router.push(`/cities/${suggestion.slug}`);
//       return;
//     }

//     if (suggestion.type === "developer" && suggestion.slug) {
//       router.push(`/developers/${suggestion.slug}`);
//       return;
//     }

//     if (suggestion.type === "project") {
//       const detailHref =
//         suggestion.detailHref || getProjectDetailHref(suggestion.item);

//       if (detailHref) {
//         router.push(detailHref);
//         return;
//       }

//       applySearchFilter(selectedValue, {
//         city: suggestion.city,
//         location: suggestion.location,
//         propertyType: suggestion.propertyType,
//         propertyStatus: suggestion.propertyStatus,
//       });

//       return;
//     }

//     applySearchFilter(selectedValue);
//   };

//   const handleSearch = (e) => {
//     if (e) e.preventDefault();

//     const rawSearch = searchText.trim();

//     if (!rawSearch) {
//       applySearchFilter("");
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
//       closeSuggestions();
//       setSearchText(getProjectTitle(projectMatch) || rawSearch);
//       router.push(getProjectDetailHref(projectMatch));
//       return;
//     }

//     applySearchFilter(rawSearch);
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

//                 <div
//                   className={`hero-search-only-wrap ${
//                     isSearchFixed ? "hero-search-fixed-desktop" : ""
//                   }`}
//                 >
//                   <form
//                     onSubmit={handleSearch}
//                     className="hero-search-only-form"
//                     ref={suggestionRef}
//                   >
//                     <fieldset className="hero-search-fieldset">
//                       <input
//                         type="text"
//                         placeholder="Search city, developer, project, location..."
//                         value={searchText}
//                         autoComplete="off"
//                         onChange={(e) => {
//                           setSearchText(e.target.value);
//                           setShowSuggestions(true);
//                           setActiveSuggestionIndex(-1);
//                         }}
//                         onFocus={() => {
//                           if (searchText) setShowSuggestions(true);
//                         }}
//                         onKeyDown={handleSearchKeyDown}
//                       />

//                       {showSuggestions && searchText && (
//                         <div className="hero-search-suggestions">
//                           {searchSuggestions.length > 0 ? (
//                             searchSuggestions.map((suggestion, index) => (
//                               <button
//                                 type="button"
//                                 key={`${suggestion.type}-${suggestion.label}-${index}`}
//                                 className={`hero-suggestion-item ${
//                                   activeSuggestionIndex === index
//                                     ? "active"
//                                     : ""
//                                 }`}
//                                 onMouseDown={(e) => {
//                                   e.preventDefault();
//                                   handleSuggestionSelect(suggestion);
//                                 }}
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   handleSuggestionSelect(suggestion);
//                                 }}
//                                 onTouchEnd={(e) => {
//                                   e.preventDefault();
//                                   handleSuggestionSelect(suggestion);
//                                 }}
//                                 onMouseEnter={() =>
//                                   setActiveSuggestionIndex(index)
//                                 }
//                               >
//                                 <span className="hero-suggestion-label">
//                                   {suggestion.label}
//                                 </span>

//                                 {suggestion.subLabel && (
//                                   <span className="hero-suggestion-sub">
//                                     {suggestion.subLabel}
//                                   </span>
//                                 )}
//                               </button>
//                             ))
//                           ) : (
//                             <div className="hero-no-suggestion">
//                               No matching result found
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </fieldset>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <style jsx global>{`
//           .hero-slider-wrap,
//           .page-title.home01.hero-slider-wrap {
//             position: relative;
//             overflow: visible !important;
//             min-height: 470px;
//             height: 58vh;
//             max-height: 560px;
//             display: flex;
//             align-items: center;
//             z-index: 20;
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
//             z-index: 5;
//             width: 100%;
//             overflow: visible !important;
//           }

//           .hero-main-container .row,
//           .hero-main-container .col-lg-10,
//           .hero-main-container .col-xl-10 {
//             overflow: visible !important;
//           }

//           .content-inner {
//             color: #ffffff;
//             text-align: center;
//             position: relative;
//             z-index: 6;
//             overflow: visible !important;
//           }

//           .heading-title {
//             margin-bottom: 22px;
//             text-align: center;
//           }

//           .heading-title .title {
//             color: #ffffff;
//             font-size: 44px;
//             line-height: 1.1;
//             margin-bottom: 10px;
//             text-align: center;
//           }

//           .heading-title p {
//             color: rgba(255, 255, 255, 0.92);
//             font-size: 16px;
//             line-height: 1.45;
//             max-width: 760px;
//             margin-left: auto;
//             margin-right: auto;
//             text-align: center;
//           }

//           .hero-search-only-wrap {
//             width: 100%;
//             display: flex;
//             justify-content: center;
//             padding: 0 12px;
//             position: relative;
//             z-index: 999;
//             overflow: visible !important;
//           }

//           .hero-search-only-form {
//             width: 100%;
//             max-width: 1180px;
//             position: relative;
//             z-index: 999;
//             overflow: visible !important;
//           }

//           .hero-search-fieldset {
//             position: relative;
//             width: 100%;
//             margin: 0;
//             padding: 8px;
//             border: 0;
//             border-radius: 26px;
//             background: rgba(11, 19, 32, 0.22);
//             backdrop-filter: blur(5px);
//             -webkit-backdrop-filter: blur(5px);
//             box-sizing: border-box;
//             overflow: visible !important;
//             z-index: 999;
//           }

//           .hero-search-fieldset input {
//             width: 100%;
//             min-height: 78px;
//             border-radius: 18px;
//             border: 1px solid rgba(17, 24, 39, 0.05);
//             background: rgba(255, 255, 255, 0.98);
//             color: #111827;
//             padding: 0 26px;
//             outline: none;
//             box-shadow: none;
//             font-size: 18px;
//             font-weight: 500;
//             box-sizing: border-box;
//           }

//           .hero-search-fieldset input:focus {
//             border-color: rgba(241, 145, 61, 0.35);
//             box-shadow: 0 0 0 4px rgba(241, 145, 61, 0.12);
//           }

//           .hero-search-fieldset input::placeholder {
//             color: #6b7280;
//           }

//           .hero-search-suggestions {
//             position: absolute;
//             top: calc(100% + 10px);
//             left: 8px;
//             right: 8px;
//             z-index: 2147483647 !important;
//             background: #ffffff;
//             border: 1px solid #e5e7eb;
//             border-radius: 16px;
//             box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
//             overflow-y: auto;
//             overflow-x: hidden;
//             max-height: 430px;
//             text-align: left;
//             pointer-events: auto !important;
//           }

//           .hero-suggestion-item {
//             width: 100%;
//             display: block;
//             text-align: left;
//             padding: 14px 20px;
//             border: 0;
//             border-bottom: 1px solid #f1f1f1;
//             background: #ffffff;
//             cursor: pointer;
//             pointer-events: auto !important;
//             touch-action: manipulation;
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
//             font-size: 16px;
//             font-weight: 700;
//             color: #111827;
//             line-height: 1.3;
//             pointer-events: none;
//           }

//           .hero-suggestion-sub {
//             display: block;
//             font-size: 14px;
//             font-weight: 400;
//             color: #6b7280;
//             margin-top: 4px;
//             line-height: 1.3;
//             pointer-events: none;
//           }

//           .hero-no-suggestion {
//             padding: 16px 20px;
//             font-size: 14px;
//             color: #6b7280;
//             background: #ffffff;
//             text-align: left;
//           }

//           @media (min-width: 992px) {
//             .hero-search-only-wrap.hero-search-fixed-desktop {
//               position: fixed !important;
//               top: 92px;
//               left: 0;
//               right: 0;
//               z-index: 2147482000 !important;
//               padding: 0 24px;
//               pointer-events: none;
//               animation: heroFixedSearchFade 0.2s ease;
//             }

//             .hero-search-only-wrap.hero-search-fixed-desktop
//               .hero-search-only-form,
//             .hero-search-only-wrap.hero-search-fixed-desktop
//               .hero-search-fieldset,
//             .hero-search-only-wrap.hero-search-fixed-desktop
//               .hero-search-fieldset input,
//             .hero-search-only-wrap.hero-search-fixed-desktop
//               .hero-search-suggestions,
//             .hero-search-only-wrap.hero-search-fixed-desktop
//               .hero-suggestion-item {
//               pointer-events: auto !important;
//             }

//             .hero-search-only-wrap.hero-search-fixed-desktop
//               .hero-search-fieldset {
//               background: rgba(11, 19, 32, 0.18);
//               box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
//             }

//             .hero-search-only-wrap.hero-search-fixed-desktop
//               .hero-search-fieldset
//               input {
//               min-height: 64px;
//               font-size: 16px;
//             }

//             @keyframes heroFixedSearchFade {
//               from {
//                 opacity: 0;
//                 transform: translateY(-8px);
//               }

//               to {
//                 opacity: 1;
//                 transform: translateY(0);
//               }
//             }
//           }

//           @media (max-width: 991px) {
//             .hero-search-only-wrap.hero-search-fixed-desktop {
//               display: none !important;
//             }

//             .hero-slider-wrap,
//             .page-title.home01.hero-slider-wrap {
//               min-height: 430px;
//               height: auto;
//               max-height: none;
//               padding: 24px 0 78px;
//               align-items: center;
//               overflow: visible !important;
//             }

//             .heading-title {
//               margin-bottom: 16px;
//               padding: 0 12px;
//             }

//             .heading-title .title {
//               font-size: 28px;
//               line-height: 1.12;
//               margin-bottom: 8px;
//             }

//             .heading-title p {
//               font-size: 14px;
//               line-height: 1.5;
//               max-width: 320px;
//             }

//             .hero-search-only-form {
//               max-width: 430px;
//             }

//             .hero-search-fieldset {
//               padding: 7px;
//               border-radius: 18px;
//             }

//             .hero-search-fieldset input {
//               min-height: 54px;
//               border-radius: 14px;
//               font-size: 14px;
//               padding: 0 15px;
//             }

//             .hero-search-suggestions {
//               left: 7px;
//               right: 7px;
//               max-height: 320px;
//               border-radius: 14px;
//             }

//             .hero-suggestion-item {
//               padding: 12px 14px;
//             }

//             .hero-suggestion-label {
//               font-size: 14px;
//             }

//             .hero-suggestion-sub {
//               font-size: 12px;
//             }
//           }

//           @media (max-width: 575px) {
//             .hero-slider-wrap,
//             .page-title.home01.hero-slider-wrap {
//               min-height: 405px;
//               padding: 20px 0 88px;
//             }

//             .heading-title {
//               margin-bottom: 14px;
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

//             .hero-search-only-wrap {
//               padding: 0 18px;
//             }

//             .hero-search-only-form {
//               max-width: 340px;
//             }

//             .hero-search-fieldset input {
//               min-height: 50px;
//               font-size: 13px;
//               padding: 0 14px;
//             }

//             .hero-search-suggestions {
//               max-height: 300px;
//             }
//           }

//           @media (max-width: 380px) {
//             .hero-slider-wrap,
//             .page-title.home01.hero-slider-wrap {
//               min-height: 395px;
//               padding-bottom: 90px;
//             }

//             .heading-title .title {
//               font-size: 22px;
//             }

//             .heading-title p {
//               font-size: 12px;
//             }

//             .hero-search-only-form {
//               max-width: 330px;
//             }

//             .hero-search-only-wrap {
//               padding: 0 14px;
//             }
//           }
//         `}</style>
//       </div>
//     </>
//   );
// }



"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { apiGet } from "../../lib/api";

const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=90&w=1900&auto=format&fit=crop",
    eyebrow: "Premium Real Estate",
    title: "Premium Real Estate Properties",
    highlight: "Real Estate",
    description:
      "Explore verified luxury residences, premium projects, and trusted real estate opportunities.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=1900&auto=format&fit=crop",
    eyebrow: "Luxury Living Starts Here",
    title: "Discover Elegant Homes Built For Your Future",
    highlight: "Elegant Homes",
    description:
      "Choose from premium apartments, landmark developments, and lifestyle-focused homes.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=90&w=1900&auto=format&fit=crop",
    eyebrow: "Trusted Property Experts",
    title: "Invest In Locations That Grow With You",
    highlight: "Locations",
    description:
      "Search by city, developer, project, or locality and connect with the right property faster.",
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

function renderHighlightedTitle(title, highlight) {
  const safeTitle = String(title || "");
  const safeHighlight = String(highlight || "");

  if (!safeTitle || !safeHighlight || !safeTitle.includes(safeHighlight)) {
    return safeTitle;
  }

  const parts = safeTitle.split(safeHighlight);

  return (
    <>
      {parts[0]}
      <span>{safeHighlight}</span>
      {parts.slice(1).join(safeHighlight)}
    </>
  );
}

export default function Hero({ onSearch = () => {}, projects = [] }) {
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

  const currentSlide = HERO_SLIDES[currentSlideIndex];

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
        console.error("Hero search data fetch error:", error);
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

  const closeSuggestions = () => {
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
  };

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

  const heroTitleContent = selectedCity
    ? selectedCity
    : renderHighlightedTitle(currentSlide.title, currentSlide.highlight);

  return (
    <>
      <section className="page-title home01 hero-slider-wrap">
        <div className="hero-bg-slider">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={`${slide.image}-${index}`}
              className={`hero-bg-slide ${
                index === currentSlideIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          ))}
        </div>

        <div className="hero-overlay" />

        <div className="tf-container hero-main-container">
          <div className="row justify-center relative">
            <div className="col-lg-11 col-xl-10">
              <div className="content-inner">
                <div className="heading-title">
                  <span className="hero-eyebrow">{currentSlide.eyebrow}</span>

                  <h1 className="title">{heroTitleContent}</h1>

                  <p className="h6 fw-4">{currentSlide.description}</p>
                </div>

                <div className="mobile-category-scroll">
                  {CATEGORY_FILTERS.map((item) => (
                    <button
                      type="button"
                      key={`mobile-${item.value}`}
                      className={`mobile-category-card ${
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
                  className={`hero-search-only-wrap ${
                    isSearchFixed ? "hero-search-fixed-active" : ""
                  }`}
                >
                  <form
                    onSubmit={handleSearch}
                    className="hero-search-only-form"
                    ref={suggestionRef}
                  >
                    <fieldset className="hero-search-fieldset">
                      <div className="hero-city-select">
                        <label>Search City</label>

                        <button
                          type="button"
                          className="hero-city-trigger"
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
                          <div className="hero-city-menu">
                            {cityOptions.length > 0 ? (
                              cityOptions.map((item) => (
                                <button
                                  type="button"
                                  key={getCitySlug(item)}
                                  className={`hero-city-option ${
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

                      <div className="hero-search-input-wrap">
                        <span className="hero-search-icon">
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
                          className="hero-mobile-search-icon-btn"
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
                          <div className="hero-search-suggestions">
                            {searchSuggestions.length > 0 ? (
                              searchSuggestions.map((suggestion, index) => (
                                <button
                                  type="button"
                                  key={`${suggestion.type}-${suggestion.label}-${index}`}
                                  className={`hero-suggestion-item ${
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

                <div className="hero-category-row">
                  {CATEGORY_FILTERS.map((item) => (
                    <button
                      type="button"
                      key={item.value}
                      className={`hero-category-card ${
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
                  <div className="hero-location-chip-row">
                    {topLocationCities.map((cityItem) => (
                      <button
                        type="button"
                        key={getCitySlug(cityItem)}
                        className="hero-location-chip"
                        onClick={() => handleTopCityClick(cityItem)}
                      >
                        <span>📍</span>
                        {getCityName(cityItem)}
                      </button>
                    ))}
                  </div>
                )}

                <div className="hero-slide-dots">
                  {HERO_SLIDES.map((slide, index) => (
                    <button
                      type="button"
                      key={`${slide.title}-${index}`}
                      className={`hero-slide-dot ${
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

          .hero-slider-wrap,
          .page-title.home01.hero-slider-wrap {
            position: relative;
            overflow: visible !important;
            min-height: 470px;
            height: 58vh;
            max-height: 560px;
            display: flex;
            align-items: center;
            z-index: 20;
            background: var(--growl-blue-deep);
            padding: 24px 0 36px;
            margin-top: 94px;
          }

          .hero-bg-slider {
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
            background: var(--growl-blue-deep);
          }

          .hero-bg-slide {
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

          .hero-bg-slide.active {
            opacity: 1;
            transform: scale(1);
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background:
              linear-gradient(
                180deg,
                rgba(6, 44, 71, 0.3) 0%,
                rgba(6, 44, 71, 0.22) 44%,
                rgba(6, 44, 71, 0.42) 100%
              ),
              linear-gradient(
                90deg,
                rgba(6, 44, 71, 0.26) 0%,
                rgba(11, 79, 122, 0.06) 54%,
                rgba(242, 194, 26, 0.07) 100%
              );
            z-index: 1;
          }

          .hero-main-container {
            position: relative;
            z-index: 5;
            width: 100%;
            overflow: visible !important;
          }

          .hero-main-container .row,
          .hero-main-container .col-lg-11,
          .hero-main-container .col-xl-10 {
            overflow: visible !important;
          }

          .content-inner {
            color: #ffffff;
            text-align: center;
            position: relative;
            z-index: 6;
            overflow: visible !important;
          }

          .heading-title {
            margin-bottom: 18px;
            text-align: center;
          }

          .hero-eyebrow {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            margin: 0 auto 10px;
            padding: 8px 16px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(242, 194, 26, 0.85);
            color: var(--growl-blue);
            font-size: 11px;
            line-height: 1;
            font-weight: 900;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            box-shadow: 0 10px 24px rgba(6, 44, 71, 0.14);
          }

          .heading-title .title {
            color: #ffffff;
            font-size: clamp(36px, 4.3vw, 66px);
            line-height: 1.03;
            font-weight: 950;
            letter-spacing: -1.3px;
            margin: 0 auto 8px;
            text-align: center;
            max-width: 980px;
            text-shadow: 0 14px 40px rgba(0, 0, 0, 0.48);
          }

          .heading-title .title span {
            color: var(--growl-yellow);
            text-shadow: 0 10px 28px rgba(242, 194, 26, 0.28);
          }

          .heading-title p {
            color: rgba(255, 255, 255, 0.96);
            font-size: clamp(13px, 0.95vw, 16px);
            line-height: 1.45;
            max-width: 760px;
            margin: 0 auto;
            text-align: center;
            font-weight: 750;
            text-shadow: 0 8px 26px rgba(0, 0, 0, 0.38);
          }

          .mobile-category-scroll {
            display: none;
          }

          .hero-search-only-wrap {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 0 12px;
            position: relative;
            z-index: 999;
            overflow: visible !important;
            margin-bottom: 14px;
          }

          .hero-search-only-form {
            width: 100%;
            max-width: 1130px;
            position: relative;
            z-index: 999;
            overflow: visible !important;
          }

          .hero-search-fieldset {
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

          .hero-city-select {
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

          .hero-city-select label {
            color: #111827;
            font-size: 10px;
            line-height: 1;
            font-weight: 950;
            margin-bottom: 5px;
          }

          .hero-city-trigger {
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

          .hero-city-trigger span {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 22px;
            line-height: 1.1;
            font-weight: 950;
            color: #111827;
          }

          .hero-city-trigger svg {
            flex: 0 0 auto;
            color: #111827;
          }

          .hero-city-menu {
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

          .hero-city-option {
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

          .hero-city-option:hover,
          .hero-city-option.active {
            background: var(--growl-blue-soft);
            color: var(--growl-blue-deep);
          }

          .hero-city-empty {
            padding: 12px;
            color: var(--growl-muted);
            font-size: 13px;
          }

          .hero-search-input-wrap {
            position: relative;
            min-height: 54px;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .hero-search-icon {
            width: 34px;
            height: 34px;
            min-width: 34px;
            color: #718096;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-search-input-wrap input {
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

          .hero-search-input-wrap input::placeholder {
            color: #8a98a8;
          }

          .hero-search-input-wrap:focus-within .hero-search-icon {
            color: var(--growl-blue);
          }

          .hero-mobile-search-icon-btn {
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
            background: linear-gradient(
              135deg,
              var(--growl-yellow),
              #ffd84d
            );
            color: var(--growl-blue-deep);
            transform: translateY(-2px);
            box-shadow: 0 14px 28px rgba(242, 194, 26, 0.28);
          }

          .hero-search-suggestions {
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

          .hero-suggestion-item {
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

          .hero-suggestion-item:last-child {
            border-bottom: 0;
          }

          .hero-suggestion-item:hover,
          .hero-suggestion-item.active {
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

          .hero-category-row {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px;
            max-width: 860px;
            margin: 0 auto 14px;
          }

          .hero-category-card {
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

          .hero-category-card:hover,
          .hero-category-card.active {
            transform: translateY(-3px);
            border-color: rgba(242, 194, 26, 0.9);
            box-shadow: 0 16px 34px rgba(6, 44, 71, 0.24);
            background: #ffffff;
          }

          .hero-category-card.active {
            outline: 2px solid rgba(242, 194, 26, 0.42);
          }

          .hero-category-icon {
            font-size: 28px;
            line-height: 1;
            flex: 0 0 auto;
          }

          .hero-category-card span:last-child {
            font-size: 12.5px;
            line-height: 1.18;
            font-weight: 950;
            color: #111827;
          }

          .hero-location-chip-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            flex-wrap: wrap;
            margin: 0 auto;
            max-width: 950px;
          }

          .hero-location-chip {
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

          .hero-location-chip:hover {
            background: #ffffff;
            border-color: var(--growl-yellow);
            color: var(--growl-blue);
            transform: translateY(-2px);
          }

          .hero-slide-dots {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin: 14px 0 0;
          }

          .hero-slide-dot {
            width: 9px;
            height: 9px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.9);
            background: rgba(255, 255, 255, 0.55);
            cursor: pointer;
            padding: 0;
            transition: all 0.28s ease;
          }

          .hero-slide-dot.active {
            width: 32px;
            background: var(--growl-yellow);
            border-color: var(--growl-yellow);
            box-shadow: 0 10px 24px rgba(242, 194, 26, 0.25);
          }

          .hero-search-only-wrap.hero-search-fixed-active {
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

          .hero-search-only-wrap.hero-search-fixed-active
            .hero-search-only-form,
          .hero-search-only-wrap.hero-search-fixed-active .hero-search-fieldset,
          .hero-search-only-wrap.hero-search-fixed-active .hero-city-select,
          .hero-search-only-wrap.hero-search-fixed-active .hero-city-trigger,
          .hero-search-only-wrap.hero-search-fixed-active .hero-city-menu,
          .hero-search-only-wrap.hero-search-fixed-active .hero-city-option,
          .hero-search-only-wrap.hero-search-fixed-active .hero-search-input-wrap,
          .hero-search-only-wrap.hero-search-fixed-active
            .hero-search-input-wrap
            input,
          .hero-search-only-wrap.hero-search-fixed-active
            .hero-search-suggestions,
          .hero-search-only-wrap.hero-search-fixed-active .hero-suggestion-item,
          .hero-search-only-wrap.hero-search-fixed-active .hero-search-btn,
          .hero-search-only-wrap.hero-search-fixed-active
            .hero-mobile-search-icon-btn {
            pointer-events: auto !important;
          }

          .hero-search-only-wrap.hero-search-fixed-active .hero-search-fieldset {
            max-width: 1120px;
            min-height: 72px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.99);
            box-shadow: 0 16px 45px rgba(6, 44, 71, 0.2);
          }

          .hero-search-only-wrap.hero-search-fixed-active .hero-city-select,
          .hero-search-only-wrap.hero-search-fixed-active .hero-search-input-wrap {
            min-height: 48px;
          }

          .hero-search-only-wrap.hero-search-fixed-active
            .hero-search-input-wrap
            input {
            min-height: 48px;
          }

          .hero-search-only-wrap.hero-search-fixed-active .hero-search-btn {
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

            .hero-slider-wrap,
            .page-title.home01.hero-slider-wrap {
              min-height: auto !important;
              height: auto !important;
              max-height: none !important;
              padding: 16px 0 14px !important;
              margin-top: 64px !important;
              align-items: flex-start !important;
              overflow: hidden !important;
              background: var(--growl-blue-deep) !important;
            }

            .hero-bg-slider,
            .hero-bg-slide {
              overflow: hidden !important;
            }

            .hero-bg-slide {
              background-size: cover !important;
              background-position: center center !important;
              filter: none !important;
            }

            .hero-overlay {
              background: rgba(6, 44, 71, 0.18) !important;
            }

            .heading-title {
              margin-bottom: 8px !important;
              padding: 0 18px !important;
            }

            .hero-eyebrow,
            .heading-title p {
              display: none !important;
            }

            .heading-title .title {
              color: #ffffff !important;
              font-size: 24px !important;
              line-height: 1.1 !important;
              letter-spacing: -0.35px !important;
              margin: 0 auto 10px !important;
              max-width: 320px !important;
              text-shadow: 0 8px 20px rgba(0, 0, 0, 0.35) !important;
              text-transform: capitalize !important;
            }

            .heading-title .title span {
              color: #ffffff !important;
              text-shadow: 0 8px 20px rgba(0, 0, 0, 0.35) !important;
            }

            .mobile-category-scroll {
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

            .mobile-category-scroll::-webkit-scrollbar {
              display: none !important;
            }

            .mobile-category-card {
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

            .mobile-category-card span {
              font-size: 18px !important;
              line-height: 1 !important;
              flex: 0 0 auto !important;
            }

            .mobile-category-card small {
              display: block !important;
              font-size: 8.8px !important;
              line-height: 1.05 !important;
              font-weight: 800 !important;
              color: #111827 !important;
              text-align: left !important;
            }

            .mobile-category-card.active {
              border-color: var(--growl-yellow) !important;
              background: #fff8d8 !important;
            }

            .hero-search-only-wrap {
              padding: 0 20px !important;
              margin: 0 0 8px !important;
            }

            .hero-search-only-form {
              max-width: 100% !important;
            }

            .hero-search-fieldset {
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

            .hero-city-select {
              min-height: 50px !important;
              padding: 6px 8px !important;
              border-right: 1px solid rgba(226, 232, 240, 0.95) !important;
              border-bottom: 0 !important;
            }

            .hero-city-select label {
              font-size: 7px !important;
              line-height: 1 !important;
              margin: 0 0 3px !important;
              color: #111827 !important;
            }

            .hero-city-trigger {
              height: 26px !important;
              padding: 0 !important;
              background: transparent !important;
              border: 0 !important;
              border-radius: 0 !important;
            }

            .hero-city-trigger span {
              font-size: 12px !important;
              line-height: 1.1 !important;
              font-weight: 950 !important;
              color: #111827 !important;
            }

            .hero-city-trigger svg {
              width: 12px !important;
              height: 12px !important;
              color: #111827 !important;
            }

            .hero-city-menu {
              left: 0 !important;
              right: auto !important;
              top: calc(100% + 5px) !important;
              width: min(220px, calc(100vw - 40px)) !important;
              max-height: 170px !important;
              border-radius: 8px !important;
              padding: 4px !important;
            }

            .hero-city-option {
              min-height: 34px !important;
              font-size: 13px !important;
              border-radius: 6px !important;
              padding: 8px 10px !important;
            }

            .hero-search-input-wrap {
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

            .hero-search-icon {
              display: none !important;
            }

            .hero-search-input-wrap input {
              min-height: 50px !important;
              font-size: 11px !important;
              font-weight: 500 !important;
              min-width: 0 !important;
              width: 100% !important;
              color: var(--growl-text) !important;
            }

            .hero-search-input-wrap input::placeholder {
              color: #7b8794 !important;
            }

            .hero-mobile-search-icon-btn {
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

            .hero-mobile-search-icon-btn svg {
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

            .hero-search-suggestions {
              left: -78px !important;
              right: 0 !important;
              top: calc(100% + 8px) !important;
              max-height: 260px !important;
              border-radius: 9px !important;
            }

            .hero-category-row {
              display: none !important;
            }

            .hero-location-chip-row {
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

            .hero-location-chip-row::-webkit-scrollbar {
              display: none !important;
            }

            .hero-location-chip {
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

            .hero-slide-dots {
              margin: 5px 0 0 !important;
              gap: 5px !important;
            }

            .hero-slide-dot {
              width: 7px !important;
              height: 7px !important;
              border-radius: 50% !important;
              background: rgba(255, 255, 255, 0.72) !important;
              border: 1px solid rgba(255, 255, 255, 0.9) !important;
            }

            .hero-slide-dot.active {
              width: 24px !important;
              border-radius: 999px !important;
              background: var(--growl-yellow) !important;
              border-color: var(--growl-yellow) !important;
            }

            .hero-search-only-wrap.hero-search-fixed-active {
              top: 68px !important;
              padding: 0 10px !important;
            }

            .hero-search-only-wrap.hero-search-fixed-active
              .hero-search-fieldset {
              max-width: 100% !important;
              min-height: 48px !important;
              padding: 0 !important;
              border-radius: 8px !important;
              grid-template-columns: minmax(0, 1fr) !important;
            }

            .hero-search-only-wrap.hero-search-fixed-active .hero-city-select {
              display: none !important;
            }

            .hero-search-only-wrap.hero-search-fixed-active .hero-search-input-wrap {
              min-height: 46px !important;
              padding-left: 12px !important;
            }

            .hero-search-only-wrap.hero-search-fixed-active
              .hero-search-input-wrap
              input {
              min-height: 46px !important;
              font-size: 13px !important;
            }

            .hero-search-only-wrap.hero-search-fixed-active
              .hero-mobile-search-icon-btn {
              height: 38px !important;
            }
          }

          @media (max-width: 575px) {
            .hero-slider-wrap,
            .page-title.home01.hero-slider-wrap {
              margin-top: 64px !important;
              padding: 15px 0 13px !important;
            }

            .heading-title .title {
              font-size: 23px !important;
              max-width: 300px !important;
            }

            .mobile-category-scroll,
            .hero-search-only-wrap,
            .hero-location-chip-row {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
          }

          @media (max-width: 420px) {
            .hero-slider-wrap,
            .page-title.home01.hero-slider-wrap {
              padding-top: 14px !important;
            }

            .heading-title .title {
              font-size: 22px !important;
              max-width: 285px !important;
            }

            .mobile-category-card {
              min-width: 104px !important;
            }

            .hero-search-fieldset {
              grid-template-columns: 76px minmax(0, 1fr) !important;
            }

            .hero-city-trigger span {
              font-size: 11.5px !important;
            }

            .hero-search-input-wrap input {
              font-size: 10.5px !important;
            }

            .hero-search-suggestions {
              left: -76px !important;
              right: 0 !important;
            }
          }

          @media (max-width: 360px) {
            .heading-title .title {
              font-size: 21px !important;
            }

            .mobile-category-card {
              min-width: 102px !important;
              padding: 0 7px !important;
            }

            .mobile-category-card small {
              font-size: 8.4px !important;
            }

            .hero-search-only-wrap,
            .mobile-category-scroll,
            .hero-location-chip-row {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }

            .hero-search-fieldset {
              grid-template-columns: 72px minmax(0, 1fr) !important;
            }

            .hero-search-suggestions {
              left: -72px !important;
              right: 0 !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}