"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export default function SourceManagerMyPropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");

    if (!token || !userData) {
      window.location.href = "/";
      return;
    }

    const parsedUser = JSON.parse(userData);
    if (parsedUser?.role !== "source_manager") {
      window.location.href = "/dashboard";
      return;
    }

    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/api/admindashboard/source-manager/my-properties/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        const data = await res.json();

        if (res.ok && data.success) {
          setProperties(Array.isArray(data.results) ? data.results : []);
        } else {
          setMessage(data.message || "Failed to load properties.");
        }
      } catch {
        setMessage("Something went wrong while loading properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = useMemo(() => {
    if (filter === "all") return properties;
    if (filter === "approved") {
      return properties.filter(
        (item) => item.post_status === "publish" && item.is_approved === true
      );
    }
    if (filter === "pending") {
      return properties.filter((item) => item.post_status === "pending");
    }
    if (filter === "hidden") {
      return properties.filter((item) => item.post_status === "hidden");
    }
    if (filter === "sold") {
      return properties.filter((item) => item.post_status === "sold");
    }
    return properties;
  }, [properties, filter]);

  const getStatusBadge = (property) => {
    if (property.post_status === "publish" && property.is_approved === true) {
      return {
        label: "Approved",
        bg: "#eaf8ee",
        color: "#1f8f4e",
      };
    }

    if (property.post_status === "pending") {
      return {
        label: "Pending Approval",
        bg: "#fff4e5",
        color: "#d9822b",
      };
    }

    if (property.post_status === "hidden") {
      return {
        label: "Hidden",
        bg: "#f1f3f5",
        color: "#495057",
      };
    }

    if (property.post_status === "sold") {
      return {
        label: "Sold",
        bg: "#fdeaea",
        color: "#d64545",
      };
    }

    return {
      label: property.post_status || "Unknown",
      bg: "#f1f3f5",
      color: "#495057",
    };
  };

  if (loading) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Loading properties...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "1280px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "8px" }}>My Properties</h1>
          <p style={{ margin: 0, color: "#666" }}>
            View all properties submitted by you
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/source-dashboard" style={linkBtnStyle}>
            Back to Dashboard
          </Link>
          <Link href="/source-dashboard/add-property" style={primaryBtnStyle}>
            Add Property
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        <FilterButton label="All" active={filter === "all"} onClick={() => setFilter("all")} />
        <FilterButton label="Approved" active={filter === "approved"} onClick={() => setFilter("approved")} />
        <FilterButton label="Pending" active={filter === "pending"} onClick={() => setFilter("pending")} />
        <FilterButton label="Hidden" active={filter === "hidden"} onClick={() => setFilter("hidden")} />
        <FilterButton label="Sold" active={filter === "sold"} onClick={() => setFilter("sold")} />
      </div>

      {message && <div style={{ color: "red", marginBottom: "20px" }}>{message}</div>}

      {!message && filteredProperties.length === 0 && (
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          No properties found.
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProperties.map((property) => {
          const badge = getStatusBadge(property);

          return (
            <div
              key={property.id}
              style={{
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                border: "1px solid #eee",
              }}
            >
              <div
                style={{
                  height: "220px",
                  background: "#f7f7f7",
                  overflow: "hidden",
                }}
              >
                {property.primary_image ? (
                  <img
                    src={property.primary_image}
                    alt={property.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#999",
                      fontSize: "14px",
                    }}
                  >
                    No image available
                  </div>
                )}
              </div>

              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "20px",
                      lineHeight: 1.3,
                    }}
                  >
                    {property.title}
                  </h3>

                  <span
                    style={{
                      padding: "7px 10px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 700,
                      background: badge.bg,
                      color: badge.color,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {badge.label}
                  </span>
                </div>

                <p style={{ margin: "0 0 10px", color: "#666" }}>
                  {property.full_address || property.city || "Location not available"}
                </p>

                <div style={{ marginBottom: "10px", fontWeight: 700, color: "#ff6b35" }}>
                  ₹ {property.price || 0}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                    marginBottom: "14px",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  <div>
                    <strong>Code:</strong> {property.property_code || "-"}
                  </div>
                  <div>
                    <strong>Type:</strong> {property.property_type || "-"}
                  </div>
                  <div>
                    <strong>Status:</strong> {property.property_status || "-"}
                  </div>
                  <div>
                    <strong>City:</strong> {property.city || "-"}
                  </div>
                </div>

                <div style={{ fontSize: "13px", color: "#888" }}>
                  Added on:{" "}
                  {property.created_at
                    ? new Date(property.created_at).toLocaleDateString()
                    : "-"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FilterButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "10px 16px",
        borderRadius: "999px",
        border: active ? "1px solid #ff6b35" : "1px solid #ddd",
        background: active ? "#ff6b35" : "#fff",
        color: active ? "#fff" : "#333",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

const primaryBtnStyle = {
  background: "#ff6b35",
  color: "#fff",
  textDecoration: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  fontWeight: 600,
};

const linkBtnStyle = {
  background: "#fff",
  color: "#111",
  textDecoration: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  fontWeight: 600,
  border: "1px solid #ddd",
};