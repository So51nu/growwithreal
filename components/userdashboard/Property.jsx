"use client";

import React, { useEffect, useMemo, useState } from "react";
import { apiGet, apiPost } from "../lib/api";
import ProjectCard from "./ProjectCard";

function getStoredUser() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

export default function Property() {
  const [activeTab, setActiveTab] = useState("viewed");
  const [viewed, setViewed] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [visits, setVisits] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    visit_date: "",
    visit_time: "",
    message: "",
  });

  const user = getStoredUser();

  const loadData = async () => {
    if (!user?.id) return;

    try {
      const [viewedRes, favoriteRes, visitRes] = await Promise.all([
        apiGet(`/admindashboard/customer/${user.id}/viewed-properties/`),
        apiGet(`/admindashboard/customer/${user.id}/favorite-properties/`),
        apiGet(`/admindashboard/customer/${user.id}/visits/`),
      ]);

      setViewed(Array.isArray(viewedRes) ? viewedRes : viewedRes?.data || []);
      setFavorites(Array.isArray(favoriteRes) ? favoriteRes : favoriteRes?.data || []);
      setVisits(Array.isArray(visitRes) ? visitRes : visitRes?.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleToggleFavorite = async (propertyId) => {
    if (!user?.id) return;

    try {
      await apiPost(`/admindashboard/customer/toggle-favorite/`, {
        user_id: user.id,
        property_id: propertyId,
      });
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewed = async (propertyId) => {
    if (!user?.id) return;

    try {
      await apiPost(`/admindashboard/customer/add-view/`, {
        user_id: user.id,
        property_id: propertyId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const openBookingModal = (property) => {
    setSelectedProperty(property);
    setBookingForm({
      name: user?.full_name || user?.username || "",
      phone: user?.phone || "",
      visit_date: "",
      visit_time: "",
      message: `Interested in site visit for ${property.title}`,
    });
    setMessage("");
    setBookingOpen(true);
  };

  const closeBookingModal = () => {
    setBookingOpen(false);
    setSelectedProperty(null);
    setMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitBooking = async (e) => {
    e.preventDefault();
    if (!user?.id || !selectedProperty?.id) return;

    try {
      setBookingLoading(true);

      await apiPost(`/admindashboard/customer/book-visit/`, {
        user: user.id,
        property: selectedProperty.id,
        name: bookingForm.name,
        phone: bookingForm.phone,
        visit_date: bookingForm.visit_date,
        visit_time: bookingForm.visit_time,
        message: bookingForm.message,
        status: "upcoming",
      });

      setMessage("Visit booked successfully.");
      loadData();
      setTimeout(closeBookingModal, 1000);
    } catch (error) {
      setMessage(error.message || "Failed to book visit.");
    } finally {
      setBookingLoading(false);
    }
  };

  const currentList = useMemo(() => {
    let data = [];

    if (activeTab === "viewed") data = viewed;
    if (activeTab === "favorite") data = favorites;
    if (activeTab === "visits") {
      return visits.filter((item) =>
        (item?.property_title || "").toLowerCase().includes(search.toLowerCase())
      );
    }
    if (activeTab === "bookings") {
      return visits.filter((item) =>
        (item?.property_title || "").toLowerCase().includes(search.toLowerCase())
      );
    }

    return data.filter((item) =>
      (item?.title || "").toLowerCase().includes(search.toLowerCase())
    );
  }, [activeTab, viewed, favorites, visits, search]);

  return (
    <div className="main-content w-100">
      <div className="main-content-inner wrap-dashboard-content">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>

        <div className="widget-box-2 wd-listing mt-20">
          <h3 className="title">My Properties</h3>

          <div className="mb-20 d-flex flex-wrap gap-12">
            <button className={`tf-btn ${activeTab === "viewed" ? "" : "style-border"}`} onClick={() => setActiveTab("viewed")}>
              Viewed ({viewed.length})
            </button>
            <button className={`tf-btn ${activeTab === "favorite" ? "" : "style-border"}`} onClick={() => setActiveTab("favorite")}>
              Favourited ({favorites.length})
            </button>
            <button className={`tf-btn ${activeTab === "visits" ? "" : "style-border"}`} onClick={() => setActiveTab("visits")}>
              Site Visits ({visits.length})
            </button>
            <button className={`tf-btn ${activeTab === "bookings" ? "" : "style-border"}`} onClick={() => setActiveTab("bookings")}>
              Bookings ({visits.length})
            </button>
          </div>

          <div className="mb-24">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {activeTab === "viewed" || activeTab === "favorite" ? (
            <div className="row">
              {currentList.length > 0 ? (
                currentList.map((item) => (
                  <div className="col-xl-6 mb-24" key={item.id}>
                    <ProjectCard
                      item={item}
                      onToggleFavorite={handleToggleFavorite}
                      onBookVisit={openBookingModal}
                      onViewed={handleViewed}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <div className="widget-box-2">No properties found.</div>
                </div>
              )}
            </div>
          ) : (
            <div className="wrap-table">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Visit Date</th>
                      <th>Visit Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentList.length > 0 ? (
                      currentList.map((visit) => (
                        <tr key={visit.id}>
                          <td>{visit.property_title}</td>
                          <td>{visit.visit_date}</td>
                          <td>{visit.visit_time}</td>
                          <td>{visit.status}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4}>No site visit found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {bookingOpen && selectedProperty && (
          <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" style={{ borderRadius: "20px" }}>
                <div className="modal-header">
                  <h5 className="modal-title">Book a Visit - {selectedProperty.title}</h5>
                  <button type="button" className="btn-close" onClick={closeBookingModal} />
                </div>

                <form onSubmit={submitBooking}>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" name="name" className="form-control" value={bookingForm.name} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input type="text" name="phone" className="form-control" value={bookingForm.phone} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Visit Date</label>
                      <input type="date" name="visit_date" className="form-control" value={bookingForm.visit_date} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Visit Time</label>
                      <input type="time" name="visit_time" className="form-control" value={bookingForm.visit_time} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea name="message" className="form-control" rows={3} value={bookingForm.message} onChange={handleChange} />
                    </div>

                    {message ? <div style={{ color: "#ff6b35", fontSize: 14 }}>{message}</div> : null}
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="tf-btn style-border pd-4" onClick={closeBookingModal}>
                      Cancel
                    </button>
                    <button type="submit" className="tf-btn pd-4" disabled={bookingLoading}>
                      {bookingLoading ? "Booking..." : "Confirm Visit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="footer-dashboard">
          <p>Copyright © {new Date().getFullYear()} Popty</p>
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}