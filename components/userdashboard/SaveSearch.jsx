"use client";

import React, { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

function getStoredUser() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

export default function SaveSearch() {
  const [activeTab, setActiveTab] = useState("recent");
  const [searches, setSearches] = useState([]);
  const user = getStoredUser();

  useEffect(() => {
    const loadSearchHistory = async () => {
      if (!user?.id) return;

      try {
        const res = await apiGet(`/admindashboard/customer/${user.id}/search-history/`);
        setSearches(Array.isArray(res) ? res : res?.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    loadSearchHistory();
  }, []);

  return (
    <div className="main-content w-100">
      <div className="main-content-inner style-3">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>

        <div className="widget-box-2 wd-listing">
          <h3 className="title">My Searches</h3>

          <div className="mb-20 d-flex flex-wrap gap-12">
            <button className={`tf-btn ${activeTab === "recent" ? "" : "style-border"}`} onClick={() => setActiveTab("recent")}>
              Recent Searches
            </button>
            <button className={`tf-btn ${activeTab === "saved" ? "" : "style-border"}`} onClick={() => setActiveTab("saved")}>
              Saved Searches
            </button>
          </div>

          <div className="wrap-table">
            <div className="table-responsive">
              <table className="table-save-search">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Parameters</th>
                    <th>Date Published</th>
                  </tr>
                </thead>
                <tbody>
                  {searches.length > 0 ? (
                    searches.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title || "Search"}</td>
                        <td>
                          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                            {JSON.stringify(item.parameters || {}, null, 2)}
                          </pre>
                        </td>
                        <td>{item.created_at ? new Date(item.created_at).toLocaleDateString() : "-"}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3}>
                        {activeTab === "recent"
                          ? "No recent searches found."
                          : "No saved searches found."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="footer-dashboard">
          <p>Copyright © {new Date().getFullYear()} Popty</p>
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}