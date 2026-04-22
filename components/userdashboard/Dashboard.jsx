"use client";

import React, { useEffect, useState } from "react";
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

export default function Dashboard() {
  const [summary, setSummary] = useState({
    viewed_count: 0,
    favorite_count: 0,
    visit_count: 0,
    booking_count: 0,
    liked_count: 0,
    search_count: 0,
  });
  const [favorites, setFavorites] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);
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
      const summaryRes = await apiGet(
        `/admindashboard/customer/${user.id}/dashboard-summary/`
      );

      const favoritesRes = await apiGet(
        `/admindashboard/customer/${user.id}/favorite-properties/`
      );

      setSummary(summaryRes?.data || summaryRes || {});
      setFavorites(Array.isArray(favoritesRes) ? favoritesRes : favoritesRes?.data || []);
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

  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>

        <div className="widget-box-2 mb-24">
          <h3 className="title">My Blox Journey</h3>

          <div className="row">
            <div className="col-md-3 col-6 mb-20">
              <div className="counter-box">
                <div className="content-box">
                  <div className="title-count text-variant-1">Viewed</div>
                  <div className="box-count d-flex align-items-end">
                    <div className="number">{summary.viewed_count || 0}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6 mb-20">
              <div className="counter-box">
                <div className="content-box">
                  <div className="title-count text-variant-1">Favorited</div>
                  <div className="box-count d-flex align-items-end">
                    <div className="number">{summary.favorite_count || 0}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6 mb-20">
              <div className="counter-box">
                <div className="content-box">
                  <div className="title-count text-variant-1">Site Visits</div>
                  <div className="box-count d-flex align-items-end">
                    <div className="number">{summary.visit_count || 0}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6 mb-20">
              <div className="counter-box">
                <div className="content-box">
                  <div className="title-count text-variant-1">Bookings</div>
                  <div className="box-count d-flex align-items-end">
                    <div className="number">{summary.booking_count || 0}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="widget-box-2">
          <h3 className="title">My Favorites</h3>

          <div className="row">
            {favorites.length > 0 ? (
              favorites.slice(0, 4).map((item) => (
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
                <div className="widget-box-2">
                  No favorite properties found.
                </div>
              </div>
            )}
          </div>
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