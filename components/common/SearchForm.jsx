"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import DropdownSelect from "./DropdownSelect";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) =>
    String(a).localeCompare(String(b))
  );
}

function formatCurrency(value) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

function getPriceMax(projects = []) {
  const max = Math.max(...projects.map((item) => toNumber(item.price)), 0);
  if (max <= 0) return 100000000;
  return Math.ceil(max / 1000000) * 1000000;
}

function getAreaMax(projects = []) {
  const max = Math.max(
    ...projects.map((item) => toNumber(item.carpet_area || item.size_sqft)),
    0
  );
  if (max <= 0) return 5000;
  return Math.ceil(max / 100) * 100;
}

export default function SearchForm({
  parentClass = "wd-search-form",
  projects = [],
  onFilterChange = () => {},
  lockedCity = "",
  lockedDeveloper = "",
}) {
  const searchFormRef = useRef(null);

  const priceMax = useMemo(() => getPriceMax(projects), [projects]);
  const areaMax = useMemo(() => getAreaMax(projects), [projects]);

  const cityOptions = useMemo(() => {
    const values = uniqueSorted(projects.map((item) => item.city));
    return ["All Cities", ...values];
  }, [projects]);

  const locationOptions = useMemo(() => {
    const values = uniqueSorted(
      projects.map(
        (item) => item.short_location || item.location || item.full_address
      )
    );
    return ["All Locations", ...values];
  }, [projects]);

  const typeOptions = useMemo(() => {
    const values = uniqueSorted(projects.map((item) => item.property_type));
    return ["All Types", ...values];
  }, [projects]);

  const statusOptions = useMemo(() => {
    const values = uniqueSorted(projects.map((item) => item.property_status));
    return ["All Status", ...values];
  }, [projects]);

  const amenityOptions = useMemo(() => {
    const flatAmenities = projects.flatMap((item) =>
      Array.isArray(item.amenities) ? item.amenities : []
    );
    return uniqueSorted(flatAmenities);
  }, [projects]);

  const [filters, setFilters] = useState({
    keyword: "",
    city: lockedCity || "",
    location: "",
    propertyType: "",
    propertyStatus: "",
    bedrooms: "",
    bathrooms: "",
    amenities: [],
    sortBy: "Newest",
    priceRange: [0, priceMax],
    areaRange: [0, areaMax],
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      city: lockedCity || prev.city || "",
      priceRange: [0, priceMax],
      areaRange: [0, areaMax],
    }));
  }, [lockedCity, priceMax, areaMax]);

  useEffect(() => {
    const searchFormToggler = document.querySelector(".searchFormToggler");

    const handleToggle = () => {
      if (searchFormRef.current) {
        searchFormRef.current.classList.toggle("show");
      }
    };

    if (searchFormToggler) {
      searchFormToggler.addEventListener("click", handleToggle);
    }

    return () => {
      if (searchFormToggler) {
        searchFormToggler.removeEventListener("click", handleToggle);
      }
    };
  }, []);

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleAmenity = (amenity) => {
    setFilters((prev) => {
      const exists = prev.amenities.includes(amenity);
      return {
        ...prev,
        amenities: exists
          ? prev.amenities.filter((item) => item !== amenity)
          : [...prev.amenities, amenity],
      };
    });
  };

  const resetFilters = () => {
    setFilters({
      keyword: "",
      city: lockedCity || "",
      location: "",
      propertyType: "",
      propertyStatus: "",
      bedrooms: "",
      bathrooms: "",
      amenities: [],
      sortBy: "Newest",
      priceRange: [0, priceMax],
      areaRange: [0, areaMax],
    });
  };

  return (
    <div className={parentClass} ref={searchFormRef}>
      <div className="group-select" style={{ marginBottom: 20 }}>
        <div className="box-select" style={{ width: "100%" }}>
          <input
            type="text"
            className="form-control"
            placeholder={
              lockedDeveloper
                ? `Search ${lockedDeveloper} projects, location, address...`
                : lockedCity
                ? `Search ${lockedCity} projects, location, address...`
                : "Search by project name, location, address..."
            }
            value={filters.keyword}
            onChange={(e) => updateFilter("keyword", e.target.value)}
            style={{
              width: "100%",
              minHeight: "54px",
              borderRadius: "12px",
              padding: "12px 16px",
              border: "1px solid #ddd",
            }}
          />
        </div>
      </div>

      <div className="group-price">
        <div className="widget-price">
          <div className="box-title-price">
            <span className="title-price">Price range</span>
            <div className="caption-price">
              <span>from</span>{" "}
              <span className="value fw-6">
                {formatCurrency(filters.priceRange[0])}
              </span>{" "}
              <span>to</span>{" "}
              <span className="value fw-6">
                {formatCurrency(filters.priceRange[1])}
              </span>
            </div>
          </div>
          <Slider
            range
            min={0}
            max={priceMax}
            value={filters.priceRange}
            onChange={(value) => updateFilter("priceRange", value)}
          />
        </div>

        <div className="widget-price">
          <div className="box-title-price">
            <span className="title-price">Carpet area</span>
            <div className="caption-price">
              <span>from</span>{" "}
              <span className="value fw-6">{filters.areaRange[0]} sqft</span>{" "}
              <span>to</span>{" "}
              <span className="value fw-6">{filters.areaRange[1]} sqft</span>
            </div>
          </div>
          <Slider
            range
            min={0}
            max={areaMax}
            value={filters.areaRange}
            onChange={(value) => updateFilter("areaRange", value)}
          />
        </div>
      </div>

      <div className="group-select">
        {!lockedCity && (
          <div className="box-select">
            <DropdownSelect
              options={cityOptions}
              selectedValue={filters.city || "All Cities"}
              onChange={(value) =>
                updateFilter("city", value === "All Cities" ? "" : value)
              }
              placeholder="All Cities"
            />
          </div>
        )}

        <div className="box-select">
          <DropdownSelect
            options={locationOptions}
            selectedValue={filters.location || "All Locations"}
            onChange={(value) =>
              updateFilter("location", value === "All Locations" ? "" : value)
            }
            placeholder="All Locations"
          />
        </div>

        <div className="box-select">
          <DropdownSelect
            options={typeOptions}
            selectedValue={filters.propertyType || "All Types"}
            onChange={(value) =>
              updateFilter("propertyType", value === "All Types" ? "" : value)
            }
            placeholder="All Types"
          />
        </div>

        <div className="box-select">
          <DropdownSelect
            options={statusOptions}
            selectedValue={filters.propertyStatus || "All Status"}
            onChange={(value) =>
              updateFilter(
                "propertyStatus",
                value === "All Status" ? "" : value
              )
            }
            placeholder="All Status"
          />
        </div>

        <div className="box-select">
          <DropdownSelect
            options={["Any BHK", "1", "2", "3", "4", "5+"]}
            selectedValue={filters.bedrooms || "Any BHK"}
            onChange={(value) =>
              updateFilter("bedrooms", value === "Any BHK" ? "" : value)
            }
            placeholder="Any BHK"
          />
        </div>

        <div className="box-select">
          <DropdownSelect
            options={["Any Bath", "1", "2", "3", "4+"]}
            selectedValue={filters.bathrooms || "Any Bath"}
            onChange={(value) =>
              updateFilter("bathrooms", value === "Any Bath" ? "" : value)
            }
            placeholder="Any Bath"
          />
        </div>

        <div className="box-select">
          <DropdownSelect
            options={[
              "Newest",
              "Oldest",
              "Price Low to High",
              "Price High to Low",
              "Area Low to High",
              "Area High to Low",
            ]}
            selectedValue={filters.sortBy}
            onChange={(value) => updateFilter("sortBy", value)}
            placeholder="Sort By"
          />
        </div>
      </div>

      {amenityOptions.length > 0 && (
        <div className="group-checkbox">
          <div className="title text-4 fw-6">Amenities:</div>
          <div className="group-amenities">
            {amenityOptions.map((amenity, index) => (
              <fieldset
                className={`checkbox-item style-1 ${index > 0 ? "mt-12" : ""}`}
                key={amenity}
              >
                <label style={{ cursor: "pointer" }}>
                  <span className="text-4">{amenity}</span>
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                  />
                  <span className="btn-checkbox" />
                </label>
              </fieldset>
            ))}
          </div>
        </div>
      )}

      <div
        className="flex"
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <button type="button" className="tf-btn btn-fill" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
}