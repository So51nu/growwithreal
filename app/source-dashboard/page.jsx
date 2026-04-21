"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export default function SourceDashboardPage() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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

    const fetchDashboard = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/api/admindashboard/source-manager/dashboard/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        const data = await res.json();

        if (res.ok && data.success) {
          setDashboardData(data);
        } else {
          setErrorMessage(data.message || "Failed to load dashboard.");
        }
      } catch {
        setErrorMessage("Something went wrong while loading dashboard.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "8px" }}>Source Manager Dashboard</h1>
          <p style={{ margin: 0, color: "#666" }}>
            Welcome {dashboardData?.user?.username || "Source Manager"}
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link
            href="/source-dashboard/add-property"
            style={{
              background: "#ff6b35",
              color: "#fff",
              textDecoration: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              fontWeight: 600,
            }}
          >
            Add Property
          </Link>

          <Link
            href="/source-dashboard/my-properties"
            style={{
                background: "#ffffff",
                color: "#111",
                textDecoration: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                fontWeight: 600,
                border: "1px solid #ddd",
            }}
            >
            My Properties
            </Link>

          <button
            onClick={handleLogout}
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {errorMessage && (
        <div style={{ color: "red", marginBottom: "20px" }}>{errorMessage}</div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Properties</h3>
          <p style={countStyle}>{dashboardData?.stats?.total_properties || 0}</p>
        </div>

        <div style={cardStyle}>
          <h3>Pending Approval</h3>
          <p style={countStyle}>{dashboardData?.stats?.pending_properties || 0}</p>
        </div>

        <div style={cardStyle}>
          <h3>Approved Properties</h3>
          <p style={countStyle}>{dashboardData?.stats?.approved_properties || 0}</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};

const countStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  margin: 0,
};