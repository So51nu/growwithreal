"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import DropdownSelect from "./DropdownSelect";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

function uniqueValues(values = []) {
  return [...new Set(values.filter(Boolean).map((v) => String(v).trim()))].sort(
    (a, b) => a.localeCompare(b)
  );
}

function formatCurrency(value) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

function getMaxPrice(projects = []) {
  const max = Math.max(...projects.map((item) => toNumber(item.price)), 0);
  return max > 0 ? Math.ceil(max / 1000000) * 1000000 : 50000000;
}

function getMaxArea(projects = []) {
  const max = Math.max(
    ...projects.map((item) => toNumber(item.carpet_area || item.size_sqft)),
    0
  );
  return max > 0 ? Math.ceil(max / 100) * 100 : 5000;
}

export default function SearchForm({
  parentClass = "wd-search-form",
  projects = [],
  onFilterChange = () => {},
  lockedCity = "",
  lockedDeveloper = "",
}) {
  const searchFormRef = useRef(null);

  const priceMax = useMemo(() => getMaxPrice(projects), [projects]);
  const areaMax = useMemo(() => getMaxArea(projects), [projects]);

  const cityOptions = useMemo(
    () => uniqueValues(projects.map((item) => item.city)),
    [projects]
  );

  const locationOptions = useMemo(
    () =>
      uniqueValues(
        projects.map(
          (item) => item.short_location || item.location || item.full_address
        )
      ),
    [projects]
  );

  const typeOptions = useMemo(
    () => uniqueValues(projects.map((item) => item.property_type)),
    [projects]
  );

  const statusOptions = useMemo(
    () => uniqueValues(projects.map((item) => item.property_status)),
    [projects]
  );

  const amenityOptions = useMemo(() => {
    const allAmenities = projects.flatMap((item) =>
      Array.isArray(item.amenities) ? item.amenities : []
    );
    return uniqueValues(allAmenities);
  }, [projects]);

  const defaultFilters = useMemo(
    () => ({
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
    }),
    [lockedCity, priceMax, areaMax]
  );

  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    setFilters(defaultFilters);
  }, [defaultFilters]);

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
    setFilters(defaultFilters);
  };

  return (
    <form
      className={parentClass}
      ref={searchFormRef}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="group-select" style={{ marginBottom: 20 }}>
        <div className="box-select" style={{ width: "100%" }}>
          <input
            type="text"
            value={filters.keyword}
            placeholder={
              lockedDeveloper
                ? `Search ${lockedDeveloper} projects, locations, address...`
                : lockedCity
                ? `Search ${lockedCity} projects, locations, address...`
                : "Search project name, city, location, address..."
            }
            onChange={(e) => updateFilter("keyword", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            className="form-control"
            style={{
              width: "100%",
              minHeight: "54px",
              borderRadius: "12px",
              padding: "12px 16px",
              border: "1px solid #d9d9d9",
              background: "#fff",
              color: "#111",
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
              selectedValue={filters.city}
              onChange={(value) => updateFilter("city", value)}
              placeholder="All Cities"
            />
          </div>
        )}

        <div className="box-select">
          <DropdownSelect
            options={locationOptions}
            selectedValue={filters.location}
            onChange={(value) => updateFilter("location", value)}
            placeholder="All Locations"
          />
        </div>

        <div className="box-select">
          <DropdownSelect
            options={typeOptions}
            selectedValue={filters.propertyType}
            onChange={(value) => updateFilter("propertyType", value)}
            placeholder="All Property Types"
          />
        </div>

        <div className="box-select">
          <DropdownSelect
            options={statusOptions}
            selectedValue={filters.propertyStatus}
            onChange={(value) => updateFilter("propertyStatus", value)}
            placeholder="All Status"
          />
        </div>

        <div className="box-select">
          <DropdownSelect
            options={["1", "2", "3", "4", "5+"]}
            selectedValue={filters.bedrooms}
            onChange={(value) => updateFilter("bedrooms", value)}
            placeholder="Any BHK"
          />
        </div>

        <div className="box-select">
          <DropdownSelect
            options={["1", "2", "3", "4+"]}
            selectedValue={filters.bathrooms}
            onChange={(value) => updateFilter("bathrooms", value)}
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
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        <button
          type="button"
          className="tf-btn btn-fill"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>
    </form>
  );
}