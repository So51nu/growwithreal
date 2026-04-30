// "use client";
// import React from "react";
// import DropdownSelect from "../common/DropdownSelect";
// import Link from "next/link";
// import SearchForm from "../common/SearchForm";

// export default function FilterTop() {
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
//             <div className="wg-filter style-2 relative">
//               <div className="form-title style-2">
//                 <form>
//                   <fieldset>
//                     <input type="text" placeholder="Address, City, ZIP..." />
//                   </fieldset>
//                 </form>

//                 <DropdownSelect
//                   options={[
//                     "Status",
//                     "Bungalow",
//                     "Apartment",
//                     "House",
//                     "Smart Home",
//                     "Office",
//                   ]}
//                 />
//                 <DropdownSelect
//                   options={[
//                     "Type",
//                     "Bungalow",
//                     "Apartment",
//                     "House",
//                     "Smart Home",
//                     "Office",
//                   ]}
//                 />

//                 <DropdownSelect
//                   options={[
//                     "Baths",
//                     "Floating baths",
//                     "Massage baths",
//                     "Floor-standing bath",
//                     "Built-in baths",
//                   ]}
//                 />

//                 <DropdownSelect
//                   options={[
//                     "Beds",
//                     "Twin beds",
//                     "Bunk beds",
//                     "Kids beds",
//                     "Single bed",
//                   ]}
//                 />
//                 <div className="wrap-btn searchFormToggler">
//                   <div className="btn-filter show-form">
//                     <div className="icons">
//                       <svg
//                         width={24}
//                         height={24}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M21 4H14"
//                           stroke="#F1913D"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M10 4H3"
//                           stroke="#F1913D"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M21 12H12"
//                           stroke="#F1913D"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M8 12H3"
//                           stroke="#F1913D"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M21 20H16"
//                           stroke="#F1913D"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M12 20H3"
//                           stroke="#F1913D"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M14 2V6"
//                           stroke="#F1913D"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M8 10V14"
//                           stroke="#F1913D"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M16 18V22"
//                           stroke="#F1913D"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                   <a href="#" className="tf-btn bg-color-primary pd-3 fw-6">
//                     Search <i className="icon-MagnifyingGlass fw-6" />
//                   </a>
//                 </div>
//               </div>
//               <SearchForm />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import DropdownSelect from "../common/DropdownSelect";
import Link from "next/link";
import SearchForm from "../common/SearchForm";
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

function uniqueValues(values = []) {
  return [...new Set(values.filter(Boolean).map((v) => String(v).trim()))].sort(
    (a, b) => a.localeCompare(b)
  );
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
  return item?.short_location || item?.location || item?.full_address || "";
}

function getResultsArray(response) {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.results)) return response.results;
  if (Array.isArray(response?.data)) return response.data;
  return [];
}

export default function FilterTop({ projects = [], onSearch = () => {} }) {
  const router = useRouter();
  const suggestionRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const [cities, setCities] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [fetchedProjects, setFetchedProjects] = useState([]);

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

  const allProjects = useMemo(() => {
    return projects.length > 0 ? projects : fetchedProjects;
  }, [projects, fetchedProjects]);

  const typeOptions = useMemo(
    () => uniqueValues(allProjects.map((item) => item.property_type)),
    [allProjects]
  );

  const statusOptions = useMemo(
    () => uniqueValues(allProjects.map((item) => item.property_status)),
    [allProjects]
  );

  useEffect(() => {
    const loadSearchData = async () => {
      try {
        const [citiesRes, developersRes, projectsRes] = await Promise.all([
          apiGet("/admindashboard/cities/"),
          apiGet("/admindashboard/developers/"),
          apiGet("/admindashboard/properties/"),
        ]);

        setCities(getResultsArray(citiesRes));
        setDevelopers(getResultsArray(developersRes));
        setFetchedProjects(getResultsArray(projectsRes));
      } catch (error) {
        console.error("FilterTop search data fetch error:", error);
        setCities([]);
        setDevelopers([]);
        setFetchedProjects([]);
      }
    };

    loadSearchData();
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
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fallbackCitiesFromProjects = useMemo(() => {
    const map = new Map();

    allProjects.forEach((item) => {
      const city = item.city || "";
      const city_slug = item.city_slug || slugify(city);

      if (city && city_slug) {
        map.set(normalizeText(city), { city, city_slug });
      }
    });

    return Array.from(map.values());
  }, [allProjects]);

  const fallbackDevelopersFromProjects = useMemo(() => {
    const map = new Map();

    allProjects.forEach((item) => {
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
  }, [allProjects]);

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

  const findProjectMatch = (searchValue) => {
    const normalized = normalizeText(searchValue);
    if (!normalized) return null;

    const exactMatch = allProjects.find((item) => {
      const title = normalizeText(getProjectTitle(item));
      const slug = normalizeText(item.slug || item.property_slug || item.project_slug);
      return title === normalized || slug === normalized;
    });

    if (exactMatch) return exactMatch;

    const partialMatch = allProjects.find((item) => {
      const title = normalizeText(getProjectTitle(item));
      const slug = normalizeText(item.slug || item.property_slug || item.project_slug);
      return title.includes(normalized) || slug.includes(normalized);
    });

    return partialMatch || null;
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

    allProjects.forEach((item) => {
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
          citySlug,
          location,
          address,
          developer,
          propertyType,
          propertyStatus,
          item.slug,
          item.project_slug,
          item.property_slug,
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

    return Array.from(suggestionMap.values()).slice(0, 10);
  }, [searchText, allProjects, finalCities, finalDevelopers]);

  const applyProjectFilter = (projectItem, fallbackValue = "") => {
    const projectTitle = getProjectTitle(projectItem) || fallbackValue;

    const selectedFilters = {
      ...advancedFilters,
      keyword: projectTitle,
      city: projectItem?.city || advancedFilters.city,
      location: getLocationName(projectItem) || advancedFilters.location,
      propertyType: projectItem?.property_type || advancedFilters.propertyType,
      propertyStatus:
        projectItem?.property_status || advancedFilters.propertyStatus,
    };

    setAdvancedFilters(selectedFilters);
    setSearchText(projectTitle);
    onSearch(selectedFilters);
    closeSuggestions();
  };

  const handleSuggestionSelect = (suggestion) => {
    const selectedValue = suggestion.value || "";
    setSearchText(selectedValue);

    if (suggestion.type === "city" && suggestion.slug) {
      closeSuggestions();
      router.push(`/cities/${suggestion.slug}`);
      return;
    }

    if (suggestion.type === "developer" && suggestion.slug) {
      closeSuggestions();
      router.push(`/developers/${suggestion.slug}`);
      return;
    }

    if (suggestion.type === "project") {
      const projectMatch = findProjectMatch(selectedValue);

      if (projectMatch) {
        applyProjectFilter(projectMatch, selectedValue);
        return;
      }

      const selectedFilters = {
        ...advancedFilters,
        keyword: selectedValue,
        city: suggestion.city || advancedFilters.city,
        location: suggestion.location || advancedFilters.location,
        propertyType: suggestion.propertyType || advancedFilters.propertyType,
        propertyStatus:
          suggestion.propertyStatus || advancedFilters.propertyStatus,
      };

      setAdvancedFilters(selectedFilters);
      onSearch(selectedFilters);
      closeSuggestions();
      return;
    }

    const selectedFilters = {
      ...advancedFilters,
      keyword: selectedValue,
      city:
        suggestion.type === "city"
          ? selectedValue
          : suggestion.city || advancedFilters.city,
      location: suggestion.location || advancedFilters.location,
      propertyType: suggestion.propertyType || advancedFilters.propertyType,
      propertyStatus: suggestion.propertyStatus || advancedFilters.propertyStatus,
    };

    setAdvancedFilters(selectedFilters);
    onSearch(selectedFilters);
    closeSuggestions();
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();

    const rawSearch = searchText.trim();

    const mergedFilters = {
      ...advancedFilters,
      keyword: rawSearch || advancedFilters.keyword || "",
    };

    if (rawSearch) {
      const cityMatch = findCityMatch(rawSearch);
      if (cityMatch?.city_slug) {
        closeSuggestions();
        router.push(`/cities/${cityMatch.city_slug}`);
        return;
      }

      const developerMatch = findDeveloperMatch(rawSearch);
      if (developerMatch?.developer_slug) {
        closeSuggestions();
        router.push(`/developers/${developerMatch.developer_slug}`);
        return;
      }

      const projectMatch = findProjectMatch(rawSearch);
      if (projectMatch) {
        applyProjectFilter(projectMatch, rawSearch);
        return;
      }
    }

    if (mergedFilters.city) {
      const cityMatch = findCityMatch(mergedFilters.city);
      if (cityMatch?.city_slug) {
        closeSuggestions();
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

  return (
    <section className="flat-title style-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-inner">
              <ul className="breadcrumb">
                <li>
                  <Link className="home fw-6 text-color-3" href={`/`}>
                    Home
                  </Link>
                </li>
                <li>Property Listing</li>
              </ul>
            </div>

            <div className="wg-filter style-2 relative">
              <div className="form-title style-2">
                <form onSubmit={handleSearch} ref={suggestionRef}>
                  <fieldset className="filtertop-search-fieldset">
                    <input
                      type="text"
                      placeholder="Search city, developer, project name, location..."
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
                      <div className="filtertop-search-suggestions">
                        {searchSuggestions.length > 0 ? (
                          searchSuggestions.map((suggestion, index) => (
                            <button
                              type="button"
                              key={`${suggestion.type}-${suggestion.label}-${index}`}
                              className={`filtertop-suggestion-item ${
                                activeSuggestionIndex === index ? "active" : ""
                              }`}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                handleSuggestionSelect(suggestion);
                              }}
                              onMouseEnter={() =>
                                setActiveSuggestionIndex(index)
                              }
                            >
                              <span className="filtertop-suggestion-label">
                                {suggestion.label}
                              </span>

                              {suggestion.subLabel && (
                                <span className="filtertop-suggestion-sub">
                                  {suggestion.subLabel}
                                </span>
                              )}
                            </button>
                          ))
                        ) : (
                          <div className="filtertop-no-suggestion">
                            No matching result found
                          </div>
                        )}
                      </div>
                    )}
                  </fieldset>
                </form>

                <DropdownSelect
                  options={
                    statusOptions.length > 0
                      ? ["Status", ...statusOptions]
                      : [
                          "Status",
                          "For Sale",
                          "For Rent",
                          "Ready To Move",
                          "Under Construction",
                        ]
                  }
                  selectedValue={advancedFilters.propertyStatus}
                  onChange={(value) =>
                    setAdvancedFilters((prev) => ({
                      ...prev,
                      propertyStatus: value === "Status" ? "" : value,
                    }))
                  }
                />

                <DropdownSelect
                  options={
                    typeOptions.length > 0
                      ? ["Type", ...typeOptions]
                      : [
                          "Type",
                          "Bungalow",
                          "Apartment",
                          "House",
                          "Smart Home",
                          "Office",
                        ]
                  }
                  selectedValue={advancedFilters.propertyType}
                  onChange={(value) =>
                    setAdvancedFilters((prev) => ({
                      ...prev,
                      propertyType: value === "Type" ? "" : value,
                    }))
                  }
                />

                <DropdownSelect
                  options={["Baths", "1", "2", "3", "4+"]}
                  selectedValue={advancedFilters.bathrooms}
                  onChange={(value) =>
                    setAdvancedFilters((prev) => ({
                      ...prev,
                      bathrooms: value === "Baths" ? "" : value,
                    }))
                  }
                />

                <DropdownSelect
                  options={["Beds", "1", "2", "3", "4", "5+"]}
                  selectedValue={advancedFilters.bedrooms}
                  onChange={(value) =>
                    setAdvancedFilters((prev) => ({
                      ...prev,
                      bedrooms: value === "Beds" ? "" : value,
                    }))
                  }
                />

                <div className="wrap-btn searchFormToggler">
                  <div className="btn-filter show-form">
                    <div className="icons">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 4H14"
                          stroke="#F1913D"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 4H3"
                          stroke="#F1913D"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 12H12"
                          stroke="#F1913D"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 12H3"
                          stroke="#F1913D"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 20H16"
                          stroke="#F1913D"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 20H3"
                          stroke="#F1913D"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 2V6"
                          stroke="#F1913D"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 10V14"
                          stroke="#F1913D"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 18V22"
                          stroke="#F1913D"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSearch}
                    className="tf-btn bg-color-primary pd-3 fw-6"
                  >
                    Search <i className="icon-MagnifyingGlass fw-6" />
                  </button>
                </div>
              </div>

              <SearchForm
                projects={allProjects}
                onFilterChange={setAdvancedFilters}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-title form {
          position: relative;
        }

        .filtertop-search-fieldset {
          position: relative;
          margin: 0;
          padding: 0;
          border: 0;
        }

        .filtertop-search-fieldset input {
          width: 100%;
        }

        .filtertop-search-suggestions {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          z-index: 99999;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
          overflow: hidden;
          max-height: 330px;
          overflow-y: auto;
        }

        .filtertop-suggestion-item {
          width: 100%;
          display: block;
          text-align: left;
          padding: 12px 16px;
          border: 0;
          border-bottom: 1px solid #f1f1f1;
          background: #ffffff;
          cursor: pointer;
        }

        .filtertop-suggestion-item:last-child {
          border-bottom: 0;
        }

        .filtertop-suggestion-item:hover,
        .filtertop-suggestion-item.active {
          background: #f8fafc;
        }

        .filtertop-suggestion-label {
          display: block;
          font-size: 15px;
          font-weight: 600;
          color: #111827;
          line-height: 1.3;
        }

        .filtertop-suggestion-sub {
          display: block;
          font-size: 13px;
          font-weight: 400;
          color: #6b7280;
          margin-top: 3px;
          line-height: 1.3;
        }

        .filtertop-no-suggestion {
          padding: 14px 16px;
          font-size: 14px;
          color: #6b7280;
          background: #ffffff;
        }

        .wrap-btn button {
          border: 0;
        }
      `}</style>
    </section>
  );
}