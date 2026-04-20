"use client";

import React, { useEffect, useMemo, useState } from "react";
import LayoutHandler from "./LayoutHandler";
import DropdownSelect from "../common/DropdownSelect";
import PropertyGridItems from "./PropertyGridItems";
import PropertyListItems from "./PropertyListItems";
import { apiGet } from "../lib/api";

export default function Properties2({ defaultGrid = false }) {
  const [properties, setProperties] = useState([]);
  const [sortBy, setSortBy] = useState("Sort by (Default)");
  const [loading, setLoading] = useState(true);

  const loadProperties = async () => {
    try {
      setLoading(true);
      const res = await apiGet("/admindashboard/properties/");
      setProperties(Array.isArray(res) ? res : []);
    } catch (error) {
      console.error(error);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  const sortedProperties = useMemo(() => {
    const cloned = [...properties];

    if (sortBy === "Newest") {
      cloned.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
    } else if (sortBy === "Oldest") {
      cloned.sort((a, b) => new Date(a.created_at || 0) - new Date(b.created_at || 0));
    }

    return cloned;
  }, [properties, sortBy]);

  return (
    <section className="section-property-layout">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="box-title">
              <h2>Property listing</h2>

              <div className="right">
                <ul className="nav-tab-filter group-layout" role="tablist">
                  <LayoutHandler defaultGrid={defaultGrid} />
                </ul>

                <DropdownSelect
                  addtionalParentClass="select-filter list-sort"
                  options={["Sort by (Default)", "Newest", "Oldest"]}
                  selectedValue={sortBy}
                  onChange={(value) => setSortBy(value)}
                />
              </div>
            </div>

            <div className="flat-animate-tab">
              <div className="tab-content">
                <div
                  className={`tab-pane ${defaultGrid ? "active show" : ""}`}
                  id="gridLayout"
                  role="tabpanel"
                >
                  <div className="tf-grid-layout lg-col-3 md-col-2">
                    <PropertyGridItems
                      properties={sortedProperties}
                      onFavoriteUpdated={loadProperties}
                    />
                  </div>
                </div>

                <div
                  className={`tab-pane ${!defaultGrid ? "active show" : ""}`}
                  id="listLayout"
                  role="tabpanel"
                >
                  <div className="tf-grid-layout lg-col-2">
                    <PropertyListItems
                      properties={sortedProperties}
                      onFavoriteUpdated={loadProperties}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="wrap-pagination">
              <p className="text-1">
                {loading
                  ? "Loading properties..."
                  : `Showing ${sortedProperties.length} result${
                      sortedProperties.length !== 1 ? "s" : ""
                    }.`}
              </p>

              <ul className="wg-pagination">
                <li className="active">
                  <a href="#">1</a>
                </li>
              </ul>
            </div>

            {!loading && sortedProperties.length === 0 && (
              <div style={{ paddingTop: "20px" }}>
                <p className="text-1">No properties found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}