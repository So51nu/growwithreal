// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import Link from "next/link";

// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

// export default function SourceManagerMyPropertiesPage() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState("");
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const userData = localStorage.getItem("userData");

//     if (!token || !userData) {
//       window.location.href = "/";
//       return;
//     }

//     const parsedUser = JSON.parse(userData);
//     if (parsedUser?.role !== "source_manager") {
//       window.location.href = "/dashboard";
//       return;
//     }

//     const fetchProperties = async () => {
//       try {
//         const res = await fetch(
//           `${API_BASE_URL}/api/admindashboard/source-manager/my-properties/`,
//           {
//             headers: {
//               Authorization: `Token ${token}`,
//             },
//           }
//         );

//         const data = await res.json();

//         if (res.ok && data.success) {
//           setProperties(Array.isArray(data.results) ? data.results : []);
//         } else {
//           setMessage(data.message || "Failed to load properties.");
//         }
//       } catch {
//         setMessage("Something went wrong while loading properties.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   const filteredProperties = useMemo(() => {
//     if (filter === "all") return properties;
//     if (filter === "approved") {
//       return properties.filter(
//         (item) => item.post_status === "publish" && item.is_approved === true
//       );
//     }
//     if (filter === "pending") {
//       return properties.filter((item) => item.post_status === "pending");
//     }
//     if (filter === "hidden") {
//       return properties.filter((item) => item.post_status === "hidden");
//     }
//     if (filter === "sold") {
//       return properties.filter((item) => item.post_status === "sold");
//     }
//     return properties;
//   }, [properties, filter]);

//   const getStatusBadge = (property) => {
//     if (property.post_status === "publish" && property.is_approved === true) {
//       return {
//         label: "Approved",
//         bg: "#eaf8ee",
//         color: "#1f8f4e",
//       };
//     }

//     if (property.post_status === "pending") {
//       return {
//         label: "Pending Approval",
//         bg: "#fff4e5",
//         color: "#d9822b",
//       };
//     }

//     if (property.post_status === "hidden") {
//       return {
//         label: "Hidden",
//         bg: "#f1f3f5",
//         color: "#495057",
//       };
//     }

//     if (property.post_status === "sold") {
//       return {
//         label: "Sold",
//         bg: "#fdeaea",
//         color: "#d64545",
//       };
//     }

//     return {
//       label: property.post_status || "Unknown",
//       bg: "#f1f3f5",
//       color: "#495057",
//     };
//   };

//   if (loading) {
//     return (
//       <div style={{ padding: "40px" }}>
//         <h2>Loading properties...</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "40px", maxWidth: "1280px", margin: "0 auto" }}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           gap: "16px",
//           flexWrap: "wrap",
//           marginBottom: "24px",
//         }}
//       >
//         <div>
//           <h1 style={{ marginBottom: "8px" }}>My Properties</h1>
//           <p style={{ margin: 0, color: "#666" }}>
//             View all properties submitted by you
//           </p>
//         </div>

//         <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//           <Link href="/source-dashboard" style={linkBtnStyle}>
//             Back to Dashboard
//           </Link>
//           <Link href="/source-dashboard/add-property" style={primaryBtnStyle}>
//             Add Property
//           </Link>
//         </div>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           flexWrap: "wrap",
//           marginBottom: "24px",
//         }}
//       >
//         <FilterButton label="All" active={filter === "all"} onClick={() => setFilter("all")} />
//         <FilterButton label="Approved" active={filter === "approved"} onClick={() => setFilter("approved")} />
//         <FilterButton label="Pending" active={filter === "pending"} onClick={() => setFilter("pending")} />
//         <FilterButton label="Hidden" active={filter === "hidden"} onClick={() => setFilter("hidden")} />
//         <FilterButton label="Sold" active={filter === "sold"} onClick={() => setFilter("sold")} />
//       </div>

//       {message && <div style={{ color: "red", marginBottom: "20px" }}>{message}</div>}

//       {!message && filteredProperties.length === 0 && (
//         <div
//           style={{
//             background: "#fff",
//             borderRadius: "16px",
//             padding: "24px",
//             boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
//           }}
//         >
//           No properties found.
//         </div>
//       )}

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {filteredProperties.map((property) => {
//           const badge = getStatusBadge(property);

//           return (
//             <div
//               key={property.id}
//               style={{
//                 background: "#fff",
//                 borderRadius: "18px",
//                 overflow: "hidden",
//                 boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
//                 border: "1px solid #eee",
//               }}
//             >
//               <div
//                 style={{
//                   height: "220px",
//                   background: "#f7f7f7",
//                   overflow: "hidden",
//                 }}
//               >
//                 {property.primary_image ? (
//                   <img
//                     src={property.primary_image}
//                     alt={property.title}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       display: "block",
//                     }}
//                   />
//                 ) : (
//                   <div
//                     style={{
//                       height: "100%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#999",
//                       fontSize: "14px",
//                     }}
//                   >
//                     No image available
//                   </div>
//                 )}
//               </div>

//               <div style={{ padding: "20px" }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "start",
//                     gap: "12px",
//                     marginBottom: "12px",
//                   }}
//                 >
//                   <h3
//                     style={{
//                       margin: 0,
//                       fontSize: "20px",
//                       lineHeight: 1.3,
//                     }}
//                   >
//                     {property.title}
//                   </h3>

//                   <span
//                     style={{
//                       padding: "7px 10px",
//                       borderRadius: "999px",
//                       fontSize: "12px",
//                       fontWeight: 700,
//                       background: badge.bg,
//                       color: badge.color,
//                       whiteSpace: "nowrap",
//                     }}
//                   >
//                     {badge.label}
//                   </span>
//                 </div>

//                 <p style={{ margin: "0 0 10px", color: "#666" }}>
//                   {property.full_address || property.city || "Location not available"}
//                 </p>

//                 <div style={{ marginBottom: "10px", fontWeight: 700, color: "#ff6b35" }}>
//                   ₹ {property.price || 0}
//                 </div>

//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr",
//                     gap: "8px",
//                     marginBottom: "14px",
//                     fontSize: "14px",
//                     color: "#555",
//                   }}
//                 >
//                   <div>
//                     <strong>Code:</strong> {property.property_code || "-"}
//                   </div>
//                   <div>
//                     <strong>Type:</strong> {property.property_type || "-"}
//                   </div>
//                   <div>
//                     <strong>Status:</strong> {property.property_status || "-"}
//                   </div>
//                   <div>
//                     <strong>City:</strong> {property.city || "-"}
//                   </div>
//                 </div>

//                 <div style={{ fontSize: "13px", color: "#888" }}>
//                   Added on:{" "}
//                   {property.created_at
//                     ? new Date(property.created_at).toLocaleDateString()
//                     : "-"}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FilterButton({ label, active, onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       style={{
//         padding: "10px 16px",
//         borderRadius: "999px",
//         border: active ? "1px solid #ff6b35" : "1px solid #ddd",
//         background: active ? "#ff6b35" : "#fff",
//         color: active ? "#fff" : "#333",
//         fontWeight: 600,
//         cursor: "pointer",
//       }}
//     >
//       {label}
//     </button>
//   );
// }

// const primaryBtnStyle = {
//   background: "#ff6b35",
//   color: "#fff",
//   textDecoration: "none",
//   padding: "12px 20px",
//   borderRadius: "10px",
//   fontWeight: 600,
// };

// const linkBtnStyle = {
//   background: "#fff",
//   color: "#111",
//   textDecoration: "none",
//   padding: "12px 20px",
//   borderRadius: "10px",
//   fontWeight: 600,
//   border: "1px solid #ddd",
// };



"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

// ─── Extracted from screenshot ───────────────────────────────────────────────
// Primary orange  : #E8843A  (Book Visit btn bg, banner bg, price text, icons)
// Orange hover    : #D4722E
// Light orange bg : #FDF3EC  (pill/badge bg)
// White           : #FFFFFF
// Light grey bg   : #F9F9F9  (page bg)
// Border grey     : #E8E8E8
// Text dark       : #1A1A1A
// Text muted      : #6B7280
// ─────────────────────────────────────────────────────────────────────────────

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

    let parsedUser = null;

    try {
      parsedUser = JSON.parse(userData);
    } catch {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
      window.location.href = "/";
      return;
    }

    if (parsedUser?.role !== "source_manager") {
      window.location.href = "/dashboard";
      return;
    }

    const fetchProperties = async () => {
      try {
        setLoading(true);
        setMessage("");

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

  const stats = useMemo(() => {
    return {
      all: properties.length,
      approved: properties.filter(
        (item) => item.post_status === "publish" && item.is_approved === true
      ).length,
      pending: properties.filter((item) => item.post_status === "pending")
        .length,
      hidden: properties.filter((item) => item.post_status === "hidden").length,
      sold: properties.filter((item) => item.post_status === "sold").length,
    };
  }, [properties]);

  const getStatusBadge = (property) => {
    if (property.post_status === "publish" && property.is_approved === true) {
      return { label: "Approved", className: "approved" };
    }
    if (property.post_status === "pending") {
      return { label: "Pending", className: "pending" };
    }
    if (property.post_status === "hidden") {
      return { label: "Hidden", className: "hidden" };
    }
    if (property.post_status === "sold") {
      return { label: "Sold", className: "sold" };
    }
    return { label: property.post_status || "Unknown", className: "unknown" };
  };

  const getPropertyImage = (property) => {
    return (
      property.primary_image ||
      property.imageSrc ||
      property.image ||
      property.featured_image ||
      property.cover_image ||
      property.thumbnail ||
      property.images?.find?.((img) => img.is_primary)?.image_url ||
      property.images?.find?.((img) => img.is_primary)?.image ||
      property.images?.[0]?.image_url ||
      property.images?.[0]?.image ||
      ""
    );
  };

  const formatPrice = (price) => {
    const num = Number(price || 0);
    if (!num) return "Price on request";
    if (num >= 10000000)
      return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
    if (num >= 100000)
      return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
    return `₹${num.toLocaleString("en-IN")}`;
  };

  const formatDate = (date) => {
    if (!date) return "-";
    try {
      return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "-";
    }
  };

  return (
    <>
      <Header1 />

      <main className="my-properties-page">
        {/* ── Hero ── */}
        <section className="properties-hero">
          <div className="tf-container">
            <div className="properties-hero-inner">
              <div className="hero-content">
                <p className="properties-eyebrow">Source Manager Panel</p>
                <h1>My Properties</h1>
                <p>
                  Track submitted projects, approval status and listing details
                  in one premium dashboard.
                </p>
              </div>

              <div className="hero-actions">
                <Link href="/source-dashboard" className="dash-btn ghost">
                  Back to Dashboard
                </Link>
                <Link
                  href="/source-dashboard/add-property"
                  className="dash-btn primary"
                >
                  Add Property
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="properties-section">
          <div className="tf-container">
            {loading ? (
              <div className="state-card">
                <div className="loader-circle" />
                <h2>Loading properties...</h2>
                <p>Please wait while we fetch your submitted properties.</p>
              </div>
            ) : (
              <>
                {/* Summary panel */}
                <div className="summary-panel">
                  <div>
                    <p className="summary-label">Overview</p>
                    <h2>Submitted Properties</h2>
                    <p>
                      Showing <strong>{filteredProperties.length}</strong> of{" "}
                      <strong>{properties.length}</strong> properties.
                    </p>
                  </div>

                  <div className="summary-actions">
                    <Link href="/source-dashboard" className="dash-btn outline">
                      Dashboard
                    </Link>
                    <Link
                      href="/source-dashboard/add-property"
                      className="dash-btn primary"
                    >
                      Add New Property
                    </Link>
                  </div>
                </div>

                {/* Stats */}
                <div className="stats-grid">
                  <StatCard label="Total"    value={stats.all}      tone="total"    />
                  <StatCard label="Approved" value={stats.approved} tone="approved" />
                  <StatCard label="Pending"  value={stats.pending}  tone="pending"  />
                  <StatCard label="Hidden"   value={stats.hidden}   tone="hidden"   />
                  <StatCard label="Sold"     value={stats.sold}     tone="sold"     />
                </div>

                {/* Filter bar */}
                <div className="filter-bar">
                  <div className="filter-title">
                    <span>Filter by status</span>
                  </div>

                  <div className="filter-tabs">
                    <FilterButton label="All"      count={stats.all}      active={filter === "all"}      onClick={() => setFilter("all")}      />
                    <FilterButton label="Approved" count={stats.approved} active={filter === "approved"} onClick={() => setFilter("approved")} />
                    <FilterButton label="Pending"  count={stats.pending}  active={filter === "pending"}  onClick={() => setFilter("pending")}  />
                    <FilterButton label="Hidden"   count={stats.hidden}   active={filter === "hidden"}   onClick={() => setFilter("hidden")}   />
                    <FilterButton label="Sold"     count={stats.sold}     active={filter === "sold"}     onClick={() => setFilter("sold")}     />
                  </div>
                </div>

                {message ? <div className="error-box">{message}</div> : null}

                {!message && filteredProperties.length === 0 ? (
                  <div className="empty-card">
                    <div className="empty-icon">🏠</div>
                    <h3>No properties found</h3>
                    <p>
                      There are no properties available for the selected filter.
                    </p>
                    <Link
                      href="/source-dashboard/add-property"
                      className="dash-btn primary"
                    >
                      Add Your First Property
                    </Link>
                  </div>
                ) : null}

                {/* Property grid */}
                <div className="property-grid">
                  {filteredProperties.map((property) => {
                    const badge = getStatusBadge(property);
                    const image = getPropertyImage(property);

                    return (
                      <article className="property-card" key={property.id}>
                        <div className="property-image-wrap">
                          {image ? (
                            <img
                              src={image}
                              alt={property.title || "Property"}
                              className="property-image"
                            />
                          ) : (
                            <div className="no-image">No image available</div>
                          )}

                          <span className={`status-badge ${badge.className}`}>
                            {badge.label}
                          </span>

                          <div className="image-gradient" />
                        </div>

                        <div className="property-content">
                          <h3>{property.title || "Untitled Property"}</h3>

                          <p className="property-location">
                            <span>⌖</span>
                            {property.short_location ||
                              property.location ||
                              property.full_address ||
                              property.city ||
                              "Location not available"}
                          </p>

                          <div className="price-row">
                            {formatPrice(property.price)}
                          </div>

                          <div className="property-meta-grid">
                            <div>
                              <span>Code</span>
                              <strong>{property.property_code || "-"}</strong>
                            </div>
                            <div>
                              <span>Type</span>
                              <strong>{property.property_type || "-"}</strong>
                            </div>
                            <div>
                              <span>Listing</span>
                              <strong>{property.property_status || "-"}</strong>
                            </div>
                            <div>
                              <span>City</span>
                              <strong>{property.city || "-"}</strong>
                            </div>
                          </div>

                          <div className="property-footer">
                            <span>
                              Added on{" "}
                              {formatDate(
                                property.created_at || property.posting_date
                              )}
                            </span>

                            {property.id ? (
                              <Link
                                href={`/property-detail-v1/${property.id}`}
                                className="view-link"
                              >
                                View Details
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer1 />

      <style jsx>{`
        /* ═══════════════════════════════════════════════
           COLOR TOKENS (from screenshot)
           --clr-primary   : #E8843A   orange
           --clr-primary-h : #D4722E   orange hover
           --clr-accent-bg : #FDF3EC   light orange tint
           --clr-dark      : #1A1A1A
           --clr-muted     : #6B7280
           --clr-border    : #E8E8E8
           --clr-surface   : #FFFFFF
           --clr-page      : #F9F9F9
        ═══════════════════════════════════════════════ */

        .my-properties-page {
          background: #f9f9f9;
          min-height: 100vh;
        }

        /* ── Hero ─────────────────────────────────────── */
        .properties-hero {
          position: relative;
          padding: 120px 0 72px;
          background:
            radial-gradient(circle at 80% 20%, rgba(232, 132, 58, 0.26), transparent 30%),
            radial-gradient(circle at 18% 85%, rgba(232, 132, 58, 0.14), transparent 28%),
            linear-gradient(135deg, #1a0e06 0%, #2a160a 48%, #3a1f0d 100%);
          overflow: hidden;
        }

        .properties-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 42px 42px;
          opacity: 0.36;
        }

        .properties-hero-inner {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          color: #ffffff;
        }

        .hero-content {
          max-width: 780px;
        }

        .properties-eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(232, 132, 58, 0.18);
          border: 1px solid rgba(232, 132, 58, 0.42);
          color: #f4a96a;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.3px;
          margin-bottom: 18px;
        }

        .properties-hero h1 {
          color: #ffffff;
          font-size: clamp(38px, 5.5vw, 64px);
          line-height: 1.05;
          margin-bottom: 14px;
          letter-spacing: -1.2px;
        }

        .properties-hero p {
          color: rgba(255, 255, 255, 0.86);
          font-size: 17px;
          line-height: 1.7;
          margin: 0;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        /* ── Section ──────────────────────────────────── */
        .properties-section {
          padding: 44px 0 84px;
        }

        /* ── Summary panel ────────────────────────────── */
        .summary-panel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 22px;
          padding: 28px;
          background: #ffffff;
          border-radius: 26px;
          box-shadow: 0 16px 42px rgba(232, 132, 58, 0.08);
          border: 1px solid #e8e8e8;
        }

        .summary-label {
          color: #e8843a;
          font-size: 13px;
          font-weight: 900;
          margin: 0 0 8px;
          text-transform: uppercase;
          letter-spacing: 0.7px;
        }

        .summary-panel h2 {
          margin: 0 0 8px;
          color: #1a1a1a;
          font-size: 30px;
          line-height: 1.15;
          letter-spacing: -0.4px;
        }

        .summary-panel p {
          margin: 0;
          color: #6b7280;
          font-size: 15px;
        }

        .summary-panel p strong {
          color: #1a1a1a;
        }

        .summary-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* ── Buttons ──────────────────────────────────── */
        .dash-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 12px 20px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.25s ease;
          cursor: pointer;
          border: 1px solid transparent;
          white-space: nowrap;
        }

        .dash-btn.primary {
          background: #e8843a;
          color: #ffffff;
          box-shadow: 0 12px 24px rgba(232, 132, 58, 0.28);
        }

        .dash-btn.primary:hover {
          background: #d4722e;
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(232, 132, 58, 0.38);
        }

        .dash-btn.outline {
          background: #ffffff;
          color: #1a1a1a;
          border-color: #e8e8e8;
        }

        .dash-btn.outline:hover {
          border-color: #e8843a;
          color: #e8843a;
        }

        .dash-btn.ghost {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.28);
          backdrop-filter: blur(10px);
        }

        .dash-btn.ghost:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        /* ── Stats grid ───────────────────────────────── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 22px;
        }

        /* ── Filter bar ───────────────────────────────── */
        .filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 26px;
          background: #ffffff;
          padding: 16px;
          border-radius: 22px;
          box-shadow: 0 14px 36px rgba(232, 132, 58, 0.06);
          border: 1px solid #e8e8e8;
        }

        .filter-title span {
          color: #1a1a1a;
          font-size: 15px;
          font-weight: 900;
          padding-left: 6px;
        }

        .filter-tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        /* ── Error ────────────────────────────────────── */
        .error-box {
          padding: 16px 18px;
          margin-bottom: 22px;
          border-radius: 16px;
          background: #fff1f1;
          color: #d92d20;
          border: 1px solid #ffd6d6;
          font-weight: 700;
        }

        /* ── Empty / State cards ──────────────────────── */
        .empty-card,
        .state-card {
          min-height: 320px;
          background: #ffffff;
          border-radius: 26px;
          box-shadow: 0 18px 46px rgba(232, 132, 58, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 44px 20px;
          border: 1px solid #e8e8e8;
        }

        .empty-icon {
          width: 76px;
          height: 76px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fdf3ec;
          color: #e8843a;
          font-size: 36px;
          margin-bottom: 18px;
        }

        .empty-card h3,
        .state-card h2 {
          margin: 0 0 8px;
          color: #1a1a1a;
        }

        .empty-card p,
        .state-card p {
          margin: 0 0 18px;
          color: #6b7280;
        }

        .loader-circle {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 4px solid #f3f4f6;
          border-top-color: #e8843a;
          animation: spin 0.8s linear infinite;
          margin-bottom: 18px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── Property grid ────────────────────────────── */
        .property-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .property-card {
          background: #ffffff;
          border-radius: 26px;
          overflow: hidden;
          box-shadow: 0 14px 38px rgba(232, 132, 58, 0.08);
          border: 1px solid #e8e8e8;
          transition: all 0.25s ease;
        }

        .property-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 56px rgba(232, 132, 58, 0.16);
        }

        .property-image-wrap {
          position: relative;
          height: 235px;
          background: #f9f9f9;
          overflow: hidden;
        }

        .property-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .property-card:hover .property-image {
          transform: scale(1.055);
        }

        .image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.02) 30%,
            rgba(0,0,0,0.32) 100%
          );
          pointer-events: none;
        }

        .no-image {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          font-size: 14px;
          font-weight: 700;
        }

        /* Status badges */
        .status-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
          padding: 8px 13px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 18px rgba(0,0,0,0.12);
        }

        .status-badge.approved {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.pending {
          background: #fdf3ec;
          color: #c2410c;
        }

        .status-badge.hidden {
          background: #f3f4f6;
          color: #374151;
        }

        .status-badge.sold {
          background: #fee2e2;
          color: #b91c1c;
        }

        .status-badge.unknown {
          background: #f3f4f6;
          color: #374151;
        }

        /* Card content */
        .property-content {
          padding: 23px;
        }

        .property-content h3 {
          margin: 0 0 10px;
          font-size: 21px;
          line-height: 1.32;
          color: #1a1a1a;
          letter-spacing: -0.3px;
        }

        .property-location {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          color: #6b7280;
          margin: 0 0 15px;
          line-height: 1.5;
          min-height: 44px;
        }

        .property-location span {
          color: #e8843a;
          font-weight: 900;
          margin-top: 1px;
        }

        .price-row {
          display: inline-flex;
          align-items: center;
          margin-bottom: 17px;
          padding: 10px 14px;
          border-radius: 14px;
          background: #fdf3ec;
          color: #e8843a;
          font-size: 22px;
          line-height: 1;
          font-weight: 900;
        }

        .property-meta-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 17px;
        }

        .property-meta-grid div {
          padding: 11px 12px;
          border-radius: 14px;
          background: #f9f9f9;
          border: 1px solid #e8e8e8;
        }

        .property-meta-grid span {
          display: block;
          color: #9ca3af;
          font-size: 12px;
          font-weight: 850;
          margin-bottom: 5px;
        }

        .property-meta-grid strong {
          display: block;
          color: #374151;
          font-size: 14px;
          font-weight: 900;
          text-transform: capitalize;
          overflow-wrap: anywhere;
        }

        .property-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding-top: 17px;
          border-top: 1px solid #e8e8e8;
        }

        .property-footer span {
          color: #9ca3af;
          font-size: 13px;
          line-height: 1.4;
        }

        .view-link {
          color: #e8843a;
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .view-link:hover {
          color: #d4722e;
          text-decoration: underline;
        }

        /* ── StatCard (global) ────────────────────────── */
        :global(.stat-card) {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          padding: 22px;
          border-radius: 22px;
          box-shadow: 0 14px 38px rgba(232, 132, 58, 0.07);
          border: 1px solid #e8e8e8;
          min-height: 118px;
        }

        :global(.stat-card::before) {
          content: "";
          position: absolute;
          inset: 0;
          border-left: 5px solid transparent;
        }

        :global(.stat-card::after) {
          content: "";
          position: absolute;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          right: -34px;
          top: -34px;
          opacity: 0.14;
        }

        :global(.stat-card.total::before)    { border-left-color: #1a1a1a; }
        :global(.stat-card.approved::before) { border-left-color: #16a34a; }
        :global(.stat-card.pending::before)  { border-left-color: #e8843a; }
        :global(.stat-card.hidden::before)   { border-left-color: #6b7280; }
        :global(.stat-card.sold::before)     { border-left-color: #dc2626; }

        :global(.stat-card.total::after)    { background: #1a1a1a; }
        :global(.stat-card.approved::after) { background: #16a34a; }
        :global(.stat-card.pending::after)  { background: #e8843a; }
        :global(.stat-card.hidden::after)   { background: #6b7280; }
        :global(.stat-card.sold::after)     { background: #dc2626; }

        :global(.stat-card span) {
          display: block;
          color: #6b7280;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        :global(.stat-card strong) {
          display: block;
          color: #1a1a1a;
          font-size: 34px;
          line-height: 1;
          font-weight: 900;
        }

        /* ── FilterButton (global) ────────────────────── */
        :global(.filter-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 10px 15px;
          border-radius: 999px;
          border: 1px solid #e8e8e8;
          background: #ffffff;
          color: #1a1a1a;
          font-size: 14px;
          font-weight: 850;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        :global(.filter-btn.active) {
          background: #e8843a;
          color: #ffffff;
          border-color: #e8843a;
          box-shadow: 0 10px 24px rgba(232, 132, 58, 0.28);
        }

        :global(.filter-btn:hover:not(.active)) {
          border-color: #e8843a;
          color: #e8843a;
          transform: translateY(-1px);
        }

        :global(.filter-count) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 25px;
          height: 25px;
          padding: 0 8px;
          border-radius: 999px;
          background: #fdf3ec;
          color: #e8843a;
          font-size: 12px;
          font-weight: 900;
        }

        :global(.filter-btn.active .filter-count) {
          background: rgba(255, 255, 255, 0.22);
          color: #ffffff;
        }

        /* ── Responsive ───────────────────────────────── */
        @media (max-width: 1199px) {
          .stats-grid    { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .property-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 991px) {
          .properties-hero { padding: 105px 0 60px; }

          .properties-hero-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .hero-actions     { justify-content: flex-start; }
          .summary-panel    { align-items: flex-start; }
          .summary-actions  { width: 100%; }
        }

        @media (max-width: 767px) {
          .properties-section { padding: 36px 0 62px; }

          .summary-panel {
            padding: 20px;
            border-radius: 22px;
          }

          .summary-panel h2 { font-size: 25px; }

          .summary-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .dash-btn { width: 100%; }

          .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          .filter-bar {
            align-items: flex-start;
            flex-direction: column;
          }

          .filter-tabs {
            width: 100%;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 4px;
          }

          :global(.filter-btn) { white-space: nowrap; }

          .property-grid { grid-template-columns: 1fr; }
          .property-card { border-radius: 22px; }
        }

        @media (max-width: 480px) {
          .properties-hero { padding: 92px 0 48px; }

          .properties-hero h1 { font-size: 36px; }
          .properties-hero p  { font-size: 15px; }

          .hero-actions {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
          }

          .stats-grid           { grid-template-columns: 1fr; }
          .property-meta-grid   { grid-template-columns: 1fr; }

          .property-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function FilterButton({ label, count, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`filter-btn ${active ? "active" : ""}`}
    >
      {label} <span className="filter-count">{count}</span>
    </button>
  );
}

function StatCard({ label, value, tone = "total" }) {
  return (
    <div className={`stat-card ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}