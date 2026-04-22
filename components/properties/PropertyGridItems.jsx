"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { apiPost } from "../lib/api";

function formatPrice(price) {
  const num = Number(price || 0);
  if (!num) return "Price on request";
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  }
  if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
  }
  return `₹${num.toLocaleString("en-IN")}`;
}

function getStoredUser() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

function getImage(property) {
  return (
    property?.image ||
    property?.imageSrc ||
    property?.featured_image ||
    property?.cover_image ||
    property?.thumbnail ||
    "/images/home/house-1.jpg"
  );
}

function getLocation(property) {
  return (
    property?.short_location ||
    property?.location ||
    property?.full_address ||
    "Location on request"
  );
}

function getConfiguration(property) {
  if (property?.configuration) return property.configuration;
  if (property?.configuration_text) return property.configuration_text;
  if (property?.bedrooms) return `${property.bedrooms} BHK`;
  if (property?.property_type) return property.property_type;
  return "Configuration on request";
}

function getPhone(property) {
  return (
    property?.seller_phone ||
    property?.phone ||
    property?.contact_phone ||
    property?.contact_number ||
    property?.contact_seller_phone ||
    property?.contact_seller?.phone ||
    property?.contact_seller?.office_number ||
    ""
  );
}

const actionBtnStyle = {
  width: "56px",
  height: "56px",
  minWidth: "56px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(35, 35, 35, 0.60)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 8px 24px rgba(0,0,0,0.20)",
  padding: 0,
};

function BookmarkIcon({ active = false }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4.75H17C17.69 4.75 18.25 5.31 18.25 6V20L12 16.2L5.75 20V6C5.75 5.31 6.31 4.75 7 4.75Z"
        stroke={active ? "#ff8c5a" : "#ffffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ active = false }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#ff8c5a" : "none"}>
      <path
        d="M12 20.5C12 20.5 4.5 16 4.5 9.75C4.5 7.4 6.4 5.5 8.75 5.5C10.2 5.5 11.48 6.22 12 7.32C12.52 6.22 13.8 5.5 15.25 5.5C17.6 5.5 19.5 7.4 19.5 9.75C19.5 16 12 20.5 12 20.5Z"
        stroke={active ? "#ff8c5a" : "#ffffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C11.61 20.92 4 13.31 4 3.92C4 3.37 4.45 2.92 5 2.92H8C8.55 2.92 9 3.37 9 3.92V6.88C9 7.32 8.71 7.71 8.29 7.84L6.77 8.35C7.55 10.6 9.32 12.37 11.57 13.15L12.08 11.63C12.21 11.21 12.6 10.92 13.04 10.92H16C16.55 10.92 17 11.37 17 11.92V14.92C17 15.47 16.55 15.92 16 15.92H13.5"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PropertyGridItems({
  properties = [],
  onFavoriteUpdated = null,
}) {
  const user = getStoredUser();

  const [items, setItems] = useState(
    properties.map((property) => ({
      ...property,
      is_favorite: !!property?.is_favorite,
      is_liked: !!property?.is_liked,
    }))
  );

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

  useEffect(() => {
    setItems(
      properties.map((property) => ({
        ...property,
        is_favorite: !!property?.is_favorite,
        is_liked: !!property?.is_liked,
      }))
    );
  }, [properties]);

  const handleFavorite = async (id) => {
    if (!user?.id) {
      alert("Please login as customer first.");
      return;
    }

    try {
      const res = await apiPost(`/admindashboard/customer/toggle-favorite/`, {
        user_id: user.id,
        property_id: id,
      });

      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                is_favorite:
                  typeof res?.is_favorite === "boolean"
                    ? res.is_favorite
                    : !item.is_favorite,
              }
            : item
        )
      );

      if (onFavoriteUpdated) onFavoriteUpdated();
    } catch (error) {
      console.error(error);
      alert(error.message || "Favorite update failed");
    }
  };

  const handleLiked = async (id) => {
    if (!user?.id) {
      alert("Please login as customer first.");
      return;
    }

    try {
      const res = await apiPost(`/admindashboard/customer/like-video/`, {
        user_id: user.id,
        property_id: id,
      });

      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                is_liked:
                  typeof res?.liked === "boolean"
                    ? res.liked
                    : !item.is_liked,
              }
            : item
        )
      );
    } catch (error) {
      console.error(error);
      alert(error.message || "Liked update failed");
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
      console.error("View tracking failed:", error);
    }
  };

  const openBookingModal = (property) => {
    if (!user?.id) {
      alert("Please login as customer first.");
      return;
    }

    setSelectedProperty(property);
    setBookingForm({
      name: user?.full_name || user?.username || user?.name || "",
      phone: user?.phone || "",
      visit_date: "",
      visit_time: "",
      message: `Interested in site visit for ${property?.title || "this property"}`,
    });
    setMessage("");
    setBookingOpen(true);
  };

  const closeBookingModal = () => {
    setBookingOpen(false);
    setSelectedProperty(null);
    setMessage("");
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitBooking = async (e) => {
    e.preventDefault();

    if (!user?.id || !selectedProperty?.id) return;

    try {
      setBookingLoading(true);
      setMessage("");

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

      setTimeout(() => {
        closeBookingModal();
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to book visit.");
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <>
      {items.map((property) => {
        const sellerPhone = getPhone(property);

        return (
          <div
            className="box-house hover-img"
            key={property.id}
            style={{
              borderRadius: "22px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            }}
          >
            <div className="image-wrap" style={{ position: "relative" }}>
              <Link
                href={`/property-detail-v1/${property.id}`}
                onClick={() => handleViewed(property.id)}
              >
                <Image
                  className="lazyload"
                  alt={property.title || "Property"}
                  src={getImage(property)}
                  width={600}
                  height={401}
                  style={{ width: "100%", height: "280px", objectFit: "cover" }}
                />
              </Link>

              <ul
                className="box-tag flex gap-8"
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  zIndex: 2,
                }}
              >
                {property.property_label ? (
                  <li className="flat-tag text-4 bg-main fw-6 text_white">
                    {property.property_label}
                  </li>
                ) : null}

                <li className="flat-tag text-4 bg-3 fw-6 text_white">
                  {property.property_status === "for-rent" ? "For Rent" : "For Sale"}
                </li>
              </ul>

              <div
                style={{
                  position: "absolute",
                  right: 16,
                  top: 16,
                  display: "flex",
                  gap: 12,
                  zIndex: 5,
                }}
              >
                <button
                  type="button"
                  style={actionBtnStyle}
                  onClick={() => handleFavorite(property.id)}
                  title="Favorite"
                >
                  <BookmarkIcon active={property.is_favorite} />
                </button>

                <button
                  type="button"
                  style={actionBtnStyle}
                  onClick={() => handleLiked(property.id)}
                  title="Like"
                >
                  <HeartIcon active={property.is_liked} />
                </button>

                {sellerPhone ? (
                  <a
                    href={`tel:${sellerPhone}`}
                    style={actionBtnStyle}
                    title="Call"
                  >
                    <PhoneIcon />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="content">
              <h5 className="title">
                <Link
                  href={`/property-detail-v1/${property.id}`}
                  onClick={() => handleViewed(property.id)}
                >
                  {property.title}
                </Link>
              </h5>

              <p className="location text-1 flex items-center gap-6">
                <i className="icon-location" /> {getLocation(property)}
              </p>

              <div
                style={{
                  background: "#f4efec",
                  borderRadius: "12px",
                  padding: "10px 14px",
                  marginBottom: "12px",
                  fontSize: "14px",
                }}
              >
                <strong>Configuration:</strong> {getConfiguration(property)}
              </div>

              <ul className="meta-list flex">
                <li className="text-1 flex">
                  <span>{property.bedrooms || 0}</span>Beds
                </li>
                <li className="text-1 flex">
                  <span>{property.bathrooms || 0}</span>Baths
                </li>
                <li className="text-1 flex">
                  <span>{property.size_sqft || property.carpet_area || 0}</span>Sqft
                </li>
              </ul>

              <div
                className="bot"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 14,
                  borderTop: "1px solid #eee",
                  paddingTop: 16,
                }}
              >
                <h5 className="price" style={{ margin: 0 }}>
                  {formatPrice(property.price)}
                </h5>

                <div className="wrap-btn flex gap-8">
                  <Link
                    href={`/property-detail-v1/${property.id}`}
                    className="tf-btn style-border pd-4"
                    onClick={() => handleViewed(property.id)}
                  >
                    Details
                  </Link>

                  <button
                    type="button"
                    className="tf-btn pd-4"
                    onClick={() => openBookingModal(property)}
                    style={{
                      background: "#f28c52",
                      color: "#fff",
                      border: "1px solid #f28c52",
                    }}
                  >
                    Book Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {bookingOpen && selectedProperty && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
            zIndex: 9999,
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">
                  Book a Visit - {selectedProperty.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeBookingModal}
                />
              </div>

              <form onSubmit={submitBooking}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={bookingForm.name}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={bookingForm.phone}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Visit Date</label>
                    <input
                      type="date"
                      name="visit_date"
                      className="form-control"
                      value={bookingForm.visit_date}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Visit Time</label>
                    <input
                      type="time"
                      name="visit_time"
                      className="form-control"
                      value={bookingForm.visit_time}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows={3}
                      value={bookingForm.message}
                      onChange={handleBookingChange}
                    />
                  </div>

                  {message ? (
                    <div
                      style={{
                        color: "#ff6b35",
                        fontSize: "14px",
                        marginTop: "8px",
                      }}
                    >
                      {message}
                    </div>
                  ) : null}
                </div>

                <div
                  className="modal-footer"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "12px",
                    padding: "16px 20px 20px",
                  }}
                >
                  <button
                    type="button"
                    className="tf-btn style-border pd-4"
                    onClick={closeBookingModal}
                    style={{
                      minWidth: "130px",
                      border: "1px solid #d9d9d9",
                      background: "#fff",
                      color: "#222",
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="tf-btn pd-4"
                    disabled={bookingLoading}
                    style={{
                      minWidth: "170px",
                      background: "#f28c52",
                      color: "#fff",
                      border: "1px solid #f28c52",
                      opacity: bookingLoading ? 0.7 : 1,
                    }}
                  >
                    {bookingLoading ? "Booking..." : "Confirm Visit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}