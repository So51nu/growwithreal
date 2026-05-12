// import React from "react";
// import Nav from "./Nav";
// import Link from "next/link";
// import Image from "next/image";
// import DashboardNav from "./DashboardNav";
// export default function Header1({ parentClass = "header" }) {
//   return (
//     <header id="header-main" className={parentClass}>
//       <div className="header-inner">
//         <div className="tf-container xl">
//           <div className="row">
//             <div className="col-12">
//               <div className="header-inner-wrap">
//                 <div className="header-logo" style={{ overflow: "visible" }}>
//                   <Link href={`/`} className="site-logo">
//                     <img
//                       src="/images/logo/growl_logo2.png"
//                       alt="logo"
//                       style={{
//                         height: "80px",         // header ke andar fit
//                         transform: "scale(1.95)", // 👈 ye actual size bada karega
//                         transformOrigin: "left center",
//                         display: "block",
//                       }}
//                     />
//                   </Link>
//                 </div>
//                 <nav className="main-menu">
//                   <ul className="navigation ">
//                     <Nav />
//                   </ul>
//                 </nav>
//                 <div className="header-right">
//                   <div className="phone-number">
//                     <div className="icons">
//                       <svg
//                         width={20}
//                         height={20}
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z"
//                           stroke="black"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <p>+91 9326183013</p>
//                   </div>
//                   <DashboardNav />
                 
//                   <div
//                     className="mobile-button"
//                     data-bs-toggle="offcanvas"
//                     data-bs-target="#menu-mobile"
//                     aria-controls="menu-mobile"
//                   >
//                     <i className="icon-menu" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import DashboardNav from "./DashboardNav";
import { useRouter } from "next/navigation";
import { apiGet } from "../lib/api";

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
  return item?.title || item?.project_name || item?.property_name || item?.name || "";
}

function getDeveloperName(item) {
  return item?.developer_name || item?.developer || item?.builder_name || item?.builder || "";
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
        [title, city, location, address, developer, propertyType, propertyStatus].join(" ")
      );

      if (!searchableText.includes(keyword)) return;

      const mainLabel = title || location || city || developer || propertyType || propertyStatus;
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
        return developerName.includes(normalized) || developerSlug.includes(normalized);
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
                        src="/images/logo/growl_logo2.png"
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
                              {suggestion.subLabel ? <small>{suggestion.subLabel}</small> : null}
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
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
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
        .mobile-simple-search {
          display: none;
        }

        @media (max-width: 991px) {
          #header-main .header-inner-wrap {
            position: relative;
            min-height: 76px;
            display: flex;
            align-items: center;
          }

          #header-main .main-menu,
          #header-main .phone-number {
            display: none !important;
          }

          #header-main .header-logo {
            width: 82px !important;
            min-width: 82px !important;
            z-index: 5;
          }

          #header-main .header-logo img {
            height: 48px !important;
            transform: scale(1.28) !important;
            transform-origin: left center !important;
          }

          .mobile-simple-search {
            display: block;
            position: absolute;
            left: 104px;
            right: 78px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 4;
          }

          .mobile-simple-search form {
            width: 100%;
            height: 34px;
            border: 1.4px solid #2684ff;
            border-radius: 8px;
            background: #ffffff;
            display: flex;
            align-items: center;
            gap: 7px;
            padding: 0 9px;
            box-sizing: border-box;
            overflow: hidden;
          }

          .mobile-simple-search i {
            font-size: 13px;
            color: #6b7280;
            flex-shrink: 0;
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
            color: #111827 !important;
            font-size: 12px !important;
            font-weight: 400 !important;
            padding: 0 !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }

          .mobile-simple-search input::placeholder {
            color: #4b5563;
          }

          .mobile-header-suggestions {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            right: -36px;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 14px 35px rgba(17, 24, 39, 0.22);
            border: 1px solid #e5e7eb;
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
            background: #f8fafc;
          }

          .mobile-header-suggestion-item span {
            display: block;
            color: #111827;
            font-size: 13px;
            font-weight: 700;
            line-height: 1.25;
          }

          .mobile-header-suggestion-item small {
            display: block;
            color: #6b7280;
            font-size: 11px;
            margin-top: 3px;
            line-height: 1.25;
          }

          .mobile-header-no-result {
            padding: 12px;
            color: #6b7280;
            font-size: 12px;
            background: #ffffff;
          }

          #header-main .header-right {
            margin-left: auto;
            position: relative;
            z-index: 6;
          }

          #header-main .mobile-button {
            width: 36px;
            height: 36px;
            min-width: 36px;
          }
        }

        @media (max-width: 575px) {
          .mobile-simple-search {
            left: 94px;
            right: 86px;
          }
        }

        @media (max-width: 380px) {
          #header-main .header-logo {
            width: 76px !important;
            min-width: 76px !important;
          }

          #header-main .header-logo img {
            height: 44px !important;
            transform: scale(1.25) !important;
          }

          .mobile-simple-search {
            left: 94px;
            right: 58px;
          }

          .mobile-simple-search input,
          #header-main .mobile-simple-search input,
          #header-main .mobile-simple-search form input {
            font-size: 11px !important;
          }
        }
      `}</style>
    </>
  );
}