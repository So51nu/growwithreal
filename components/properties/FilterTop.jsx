"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
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

  const allProjects = useMemo(() => {
    return projects.length > 0 ? projects : fetchedProjects;
  }, [projects, fetchedProjects]);

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
      const slug = normalizeText(
        item.slug || item.property_slug || item.project_slug
      );

      return title === normalized || slug === normalized;
    });

    if (exactMatch) return exactMatch;

    const partialMatch = allProjects.find((item) => {
      const title = normalizeText(getProjectTitle(item));
      const slug = normalizeText(
        item.slug || item.property_slug || item.project_slug
      );

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
      keyword: projectTitle,
      city: projectItem?.city || "",
      location: getLocationName(projectItem) || "",
      propertyType: projectItem?.property_type || "",
      propertyStatus: projectItem?.property_status || "",
      bedrooms: "",
      bathrooms: "",
      amenities: [],
      sortBy: "Newest",
      priceRange: [0, 50000000],
      areaRange: [0, 5000],
    };

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
    }

    const selectedFilters = {
      keyword: selectedValue,
      city: suggestion.city || "",
      location: suggestion.location || "",
      propertyType: suggestion.propertyType || "",
      propertyStatus: suggestion.propertyStatus || "",
      bedrooms: "",
      bathrooms: "",
      amenities: [],
      sortBy: "Newest",
      priceRange: [0, 50000000],
      areaRange: [0, 5000],
    };

    onSearch(selectedFilters);
    closeSuggestions();
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();

    const rawSearch = searchText.trim();

    if (!rawSearch) {
      onSearch({
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
      closeSuggestions();
      return;
    }

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

    onSearch({
      keyword: rawSearch,
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

            <div className="wg-filter style-2 relative filtertop-simple-wrap">
              <div className="form-title style-2 filtertop-simple-form-title">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .filtertop-simple-wrap {
          width: 100%;
        }

        .filtertop-simple-form-title {
          display: block !important;
          width: 100%;
        }

        .filtertop-simple-form-title form {
          position: relative;
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        .filtertop-search-fieldset {
          position: relative;
          margin: 0;
          padding: 0;
          border: 0;
          width: 100%;
          min-width: 0;
        }

        .filtertop-search-fieldset input {
          width: 100%;
          min-width: 0;
          height: 72px;
          border-radius: 18px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          color: #111827;
          font-size: 17px;
          font-weight: 500;
          padding: 0 24px;
          outline: none;
          box-sizing: border-box;
        }

        .filtertop-search-fieldset input:focus {
          border-color: #f1913d;
          box-shadow: 0 0 0 4px rgba(241, 145, 61, 0.12);
        }

        .filtertop-search-fieldset input::placeholder {
          color: #6b7280;
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

        @media (max-width: 767px) {
          .filtertop-search-fieldset input {
            height: 50px;
            font-size: 13px;
            border-radius: 12px;
            padding: 0 14px;
          }

          .filtertop-suggestion-label {
            font-size: 14px;
          }

          .filtertop-suggestion-sub {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}