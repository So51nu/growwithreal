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

export default function Visits() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [visits, setVisits] = useState([]);
  const user = getStoredUser();

  const loadVisits = async (status = "upcoming") => {
    if (!user?.id) return;

    try {
      const res = await apiGet(
        `/admindashboard/customer/${user.id}/visits/?status=${status}`
      );
      setVisits(Array.isArray(res) ? res : res?.data || []);
    } catch (error) {
      console.error(error);
      setVisits([]);
    }
  };

  useEffect(() => {
    loadVisits(activeTab);
  }, [activeTab]);

  return (
    <div className="main-content w-100">
      <div className="main-content-inner style-3">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>

        <div className="widget-box-2 wd-listing">
          <h3 className="title">My Visits</h3>

          <div className="mb-20 d-flex flex-wrap gap-12">
            <button className={`tf-btn ${activeTab === "upcoming" ? "" : "style-border"}`} onClick={() => setActiveTab("upcoming")}>
              Upcoming ({activeTab === "upcoming" ? visits.length : ""})
            </button>
            <button className={`tf-btn ${activeTab === "completed" ? "" : "style-border"}`} onClick={() => setActiveTab("completed")}>
              Completed ({activeTab === "completed" ? visits.length : ""})
            </button>
          </div>

          <div className="wrap-table">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Visit Date</th>
                    <th>Visit Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {visits.length > 0 ? (
                    visits.map((item) => (
                      <tr key={item.id}>
                        <td>{item.property_title}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.visit_date}</td>
                        <td>{item.visit_time}</td>
                        <td>{item.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>No site visit found.</td>
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