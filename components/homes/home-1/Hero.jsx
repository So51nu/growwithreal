// "use client";
// import SearchForm from "@/components/common/SearchForm";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Hero() {
//   const router = useRouter();
//   const [activeItem, setActiveItem] = useState("For sale");
//   const [searchText, setSearchText] = useState("");

//   const items = ["For sale", "For rent"];

//   const handleSearch = (e) => {
//     e.preventDefault();

//     const query = new URLSearchParams();

//     if (searchText.trim()) {
//       query.set("search", searchText.trim());
//     }

//     if (activeItem === "For sale") {
//       query.set("property_status", "for-sale");
//     } else {
//       query.set("property_status", "for-rent");
//     }

//     router.push(`/my-property?${query.toString()}`);
//   };

//   return (
//     <div
//   className="page-title home01"
//   style={{
//     backgroundImage: "url('https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
// >
//       <div className="tf-container ">
//         <div className="row justify-center relative">
//           <div className="col-lg-8 ">
//             <div className="content-inner">
//               <div className="heading-title">
//                 <h1 className="title">GROWL REAL ESTATE </h1>
//                 <p className="h6 fw-4">
//                   Discover exclusive luxury projects, trusted by thousands of
//                   homebuyers every month.
//                 </p>
//               </div>
//               <div className="wg-filter">
//                 <div className="form-title">
//                   <div className="tf-dropdown-sort " data-bs-toggle="dropdown">
//                     <div className="btn-select">
//                       <span className="text-sort-value">{activeItem}</span>
//                       <i className="icon-CaretDown" />
//                     </div>
//                     <div className="dropdown-menu">
//                       {items.map((item) => (
//                         <div
//                           key={item}
//                           className={`select-item ${
//                             activeItem === item ? "active" : ""
//                           }`}
//                           onClick={() => setActiveItem(item)}
//                         >
//                           <span className="text-value-item">{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <form onSubmit={handleSearch}>
//                     <fieldset>
//                       <input
//                         type="text"
//                         placeholder="Place, neighborhood, school or agent..."
//                         value={searchText}
//                         onChange={(e) => setSearchText(e.target.value)}
//                       />
//                     </fieldset>
//                   </form>

//                   <div className="box-item wrap-btn">
//                     <div className="btn-filter show-form searchFormToggler">
//                       <div className="icons">
//                         <svg
//                           width={24}
//                           height={24}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M21 4H14"
//                             stroke="#F1913D"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M10 4H3"
//                             stroke="#F1913D"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M21 12H12"
//                             stroke="#F1913D"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M8 12H3"
//                             stroke="#F1913D"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M21 20H16"
//                             stroke="#F1913D"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M12 20H3"
//                             stroke="#F1913D"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M14 2V6"
//                             stroke="#F1913D"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M8 10V14"
//                             stroke="#F1913D"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M16 18V22"
//                             stroke="#F1913D"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={handleSearch}
//                       className="tf-btn bg-color-primary pd-3"
//                     >
//                       Search <i className="icon-MagnifyingGlass fw-6" />
//                     </button>
//                   </div>
//                 </div>
//                 <SearchForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import SearchForm from "@/components/common/SearchForm";
import React, { useEffect, useMemo, useState } from "react";
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

export default function Hero({
  onSearch = () => {},
  projects = [],
}) {
  const router = useRouter();

  const [activeItem, setActiveItem] = useState("For sale");
  const [searchText, setSearchText] = useState("");
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

  const items = useMemo(() => ["For sale", "For rent"], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
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
      const developer_name = item.developer_name || "";
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

  const finalCities = cities.length > 0 ? cities : fallbackCitiesFromProjects;
  const finalDevelopers =
    developers.length > 0 ? developers : fallbackDevelopersFromProjects;

  const findCityMatch = (searchValue) => {
    const normalized = normalizeText(searchValue);
    if (!normalized) return null;

    const exactMatch = finalCities.find((item) => {
      const cityName = normalizeText(item.city);
      const citySlug = normalizeText(item.city_slug);
      return cityName === normalized || citySlug === normalized;
    });
    if (exactMatch) return exactMatch;

    const partialMatch = finalCities.find((item) => {
      const cityName = normalizeText(item.city);
      const citySlug = normalizeText(item.city_slug);
      return cityName.includes(normalized) || citySlug.includes(normalized);
    });
    return partialMatch || null;
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

    const partialMatch = finalDevelopers.find((item) => {
      const developerName = normalizeText(item.developer_name);
      const developerSlug = normalizeText(item.developer_slug);
      return (
        developerName.includes(normalized) || developerSlug.includes(normalized)
      );
    });
    return partialMatch || null;
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();

    const mergedFilters = {
      ...advancedFilters,
      keyword: searchText.trim() || advancedFilters.keyword || "",
      propertyStatus:
        activeItem === "For sale" ? "for-sale" : "for-rent",
    };

    const rawSearch = searchText.trim();

    // 1) Search text se city/developer route detect karo
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

    // 2) Advanced city filter selected hai to city route par bhejo
    if (mergedFilters.city) {
      const cityMatch = findCityMatch(mergedFilters.city);
      if (cityMatch?.city_slug) {
        router.push(`/cities/${cityMatch.city_slug}`);
        return;
      }
    }

    // 3) No match => same home page par filter apply karo
    onSearch(mergedFilters);
  };

  return (
    <div className="page-title home01 hero-slider-wrap">
      <div className="hero-bg-slider">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={image}
            className={`hero-bg-slide ${
              index === currentBgIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="tf-container">
        <div className="row justify-center relative">
          <div className="col-lg-8">
            <div className="content-inner">
              <div className="heading-title">
                <h1 className="title">GROWL REAL ESTATE</h1>
                <p className="h6 fw-4">
                  Discover exclusive luxury projects, trusted by thousands of
                  homebuyers every month.
                </p>
              </div>

              <div className="wg-filter">
                <div className="form-title">
                  <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                    <div className="btn-select">
                      <span className="text-sort-value">{activeItem}</span>
                      <i className="icon-CaretDown" />
                    </div>

                    <div className="dropdown-menu">
                      {items.map((item) => (
                        <div
                          key={item}
                          className={`select-item ${
                            activeItem === item ? "active" : ""
                          }`}
                          onClick={() => setActiveItem(item)}
                        >
                          <span className="text-value-item">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSearch} style={{ flex: 1 }}>
                    <fieldset>
                      <input
                        type="text"
                        placeholder="Search city, developer, project, location..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleSearch(e);
                          }
                        }}
                      />
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

                <SearchForm
                  onFilterChange={setAdvancedFilters}
                  projects={projects}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-slider-wrap {
          position: relative;
          overflow: hidden;
          min-height: 820px;
          display: flex;
          align-items: center;
        }

        .hero-bg-slider {
          position: absolute;
          inset: 0;
          z-index: 0;
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
            rgba(11, 19, 32, 0.72) 0%,
            rgba(15, 27, 45, 0.58) 45%,
            rgba(17, 24, 39, 0.45) 100%
          );
          z-index: 1;
        }

        .tf-container {
          position: relative;
          z-index: 2;
        }

        .content-inner {
          color: #fff;
        }

        .heading-title .title {
          color: #fff;
        }

        .heading-title p {
          color: rgba(255, 255, 255, 0.9);
        }

        .wg-filter {
          margin-top: 28px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 24px;
          padding: 18px;
        }

        .form-title {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .form-title form {
          min-width: 280px;
        }

        .form-title input {
          width: 100%;
          min-height: 56px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.92);
          color: #111827;
          padding: 0 16px;
        }

        .btn-select {
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.92);
          color: #111827;
          min-width: 150px;
          cursor: pointer;
        }

        .wrap-btn {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-filter {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .hero-slider-wrap {
            min-height: 760px;
          }

          .form-title {
            flex-direction: column;
            align-items: stretch;
          }

          .wrap-btn {
            width: 100%;
            justify-content: space-between;
          }

          .form-title form {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}