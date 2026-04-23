"use client";

import React, { useEffect, useState } from "react";
import { apiGet, apiPut } from "../lib/api";

function getStoredUser() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

export default function Profile() {
  const user = getStoredUser();

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    full_name: "",
    full_address: "",
    email: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    const loadProfile = async () => {
      if (!user?.id) return;

      try {
        setLoading(true);
        setMessage("");

        const res = await apiGet(`/users/profile/${user.id}/`);
        const profile = res?.data || res || {};

        setFormData({
          full_name: profile.full_name || user?.full_name || user?.username || "",
          full_address: profile.full_address || "",
          email: profile.email || user?.email || "",
          phone: profile.phone || user?.phone || "",
          pincode: profile.pincode || "",
          city: profile.city || "",
          state: profile.state || "",
          country: profile.country || "",
        });
      } catch (error) {
        console.error("Profile fetch error:", error);

        setFormData({
          full_name: user?.full_name || user?.username || "",
          full_address: user?.full_address || "",
          email: user?.email || "",
          phone: user?.phone || "",
          pincode: user?.pincode || "",
          city: user?.city || "",
          state: user?.state || "",
          country: user?.country || "",
        });
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [user?.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) {
      alert("Please login first.");
      return;
    }

    try {
      setSaving(true);
      setMessage("");

      const res = await apiPut(`/users/profile/${user.id}/update/`, {
        full_name: formData.full_name,
        full_address: formData.full_address,
        email: formData.email,
        phone: formData.phone,
        pincode: formData.pincode,
        city: formData.city,
        state: formData.state,
        country: formData.country,
      });

      const updatedProfile = res?.data || res || {};

      const updatedUserData = {
        ...user,
        full_name: updatedProfile.full_name || formData.full_name,
        email: updatedProfile.email || formData.email,
        phone: updatedProfile.phone || formData.phone,
        full_address: updatedProfile.full_address || formData.full_address,
        pincode: updatedProfile.pincode || formData.pincode,
        city: updatedProfile.city || formData.city,
        state: updatedProfile.state || formData.state,
        country: updatedProfile.country || formData.country,
      };

      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      setMessage("Profile updated successfully.");
    } catch (error) {
      console.error("Profile update error:", error);
      setMessage(error.message || "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="main-content w-100">
      <div className="main-content-inner style-3">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>

        <div
          className="widget-box-2"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            borderRadius: "20px",
          }}
        >
          <h3
            className="title"
            style={{
              marginBottom: "28px",
            }}
          >
            Contact Details
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-4">
                <label
                  htmlFor="full_name"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "#777",
                  }}
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-4">
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "#777",
                  }}
                >
                  Mobile Number*
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {formData.phone ? (
                    <span
                      style={{
                        position: "absolute",
                        right: "14px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#2ca56c",
                        fontSize: "22px",
                        fontWeight: "700",
                      }}
                    >
                      ✓
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="full_address"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  color: "#777",
                }}
              >
                Full Address*
              </label>
              <input
                type="text"
                id="full_address"
                name="full_address"
                className="form-control"
                placeholder="Enter your address"
                value={formData.full_address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "#777",
                  }}
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-4">
                <label
                  htmlFor="pincode"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "#777",
                  }}
                >
                  Pincode*
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="form-control"
                  placeholder="Enter your pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-4">
                <label
                  htmlFor="city"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "#777",
                  }}
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control"
                  placeholder="Select your city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label
                  htmlFor="state"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "#777",
                  }}
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="form-control"
                  placeholder="Select your state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label
                  htmlFor="country"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "#777",
                  }}
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="form-control"
                  placeholder="Select your country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>

            {message ? (
              <div
                style={{
                  marginBottom: "18px",
                  color: message.toLowerCase().includes("success")
                    ? "#2ca56c"
                    : "#ff6b35",
                  fontSize: "14px",
                }}
              >
                {message}
              </div>
            ) : null}

            <div style={{ marginTop: "14px" }}>
              <button
                type="submit"
                className="tf-btn pd-4"
                disabled={saving || loading}
                style={{
                  minWidth: "160px",
                  background: "#2f241f",
                  color: "#fff",
                  border: "1px solid #2f241f",
                }}
              >
                {saving ? "Saving..." : loading ? "Loading..." : "Save Details"}
              </button>
            </div>
          </form>
        </div>

        <div className="footer-dashboard">
          <p>Copyright © {new Date().getFullYear()} Popty</p>
        </div>
      </div>

      <div className="overlay-dashboard" />
    </div>
  );
}