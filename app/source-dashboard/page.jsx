// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

// export default function SourceDashboardPage() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

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

//     const fetchDashboard = async () => {
//       try {
//         const res = await fetch(
//           `${API_BASE_URL}/api/admindashboard/source-manager/dashboard/`,
//           {
//             headers: {
//               Authorization: `Token ${token}`,
//             },
//           }
//         );

//         const data = await res.json();

//         if (res.ok && data.success) {
//           setDashboardData(data);
//         } else {
//           setErrorMessage(data.message || "Failed to load dashboard.");
//         }
//       } catch {
//         setErrorMessage("Something went wrong while loading dashboard.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboard();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userData");
//     window.location.href = "/";
//   };

//   if (loading) {
//     return (
//       <div style={{ padding: "40px" }}>
//         <h2>Loading dashboard...</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginBottom: "30px",
//           gap: "20px",
//           flexWrap: "wrap",
//         }}
//       >
//         <div>
//           <h1 style={{ marginBottom: "8px" }}>Source Manager Dashboard</h1>
//           <p style={{ margin: 0, color: "#666" }}>
//             Welcome {dashboardData?.user?.username || "Source Manager"}
//           </p>
//         </div>

//         <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//           <Link
//             href="/source-dashboard/add-property"
//             style={{
//               background: "#ff6b35",
//               color: "#fff",
//               textDecoration: "none",
//               padding: "12px 20px",
//               borderRadius: "10px",
//               fontWeight: 600,
//             }}
//           >
//             Add Property
//           </Link>

//           <Link
//             href="/source-dashboard/my-properties"
//             style={{
//                 background: "#ffffff",
//                 color: "#111",
//                 textDecoration: "none",
//                 padding: "12px 20px",
//                 borderRadius: "10px",
//                 fontWeight: 600,
//                 border: "1px solid #ddd",
//             }}
//             >
//             My Properties
//             </Link>

//           <button
//             onClick={handleLogout}
//             style={{
//               background: "#111",
//               color: "#fff",
//               border: "none",
//               padding: "12px 20px",
//               borderRadius: "10px",
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {errorMessage && (
//         <div style={{ color: "red", marginBottom: "20px" }}>{errorMessage}</div>
//       )}

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         <div style={cardStyle}>
//           <h3>Total Properties</h3>
//           <p style={countStyle}>{dashboardData?.stats?.total_properties || 0}</p>
//         </div>

//         <div style={cardStyle}>
//           <h3>Pending Approval</h3>
//           <p style={countStyle}>{dashboardData?.stats?.pending_properties || 0}</p>
//         </div>

//         <div style={cardStyle}>
//           <h3>Approved Properties</h3>
//           <p style={countStyle}>{dashboardData?.stats?.approved_properties || 0}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// const cardStyle = {
//   background: "#fff",
//   padding: "24px",
//   borderRadius: "16px",
//   boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
// };

// const countStyle = {
//   fontSize: "32px",
//   fontWeight: "bold",
//   margin: 0,
// };





"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";

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

    const fetchDashboard = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

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

  return (
    <>
      <Header1 />

      <main className="source-dashboard-page">
        <section className="dashboard-hero">
          <div className="tf-container">
            <div className="dashboard-hero-inner">
              <div>
                <p className="dashboard-eyebrow">Source Manager</p>
                <h1>Dashboard</h1>
                <p>
                  Manage your listed properties, approvals and account activity
                  from one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="tf-container">
            {loading ? (
              <div className="dashboard-state-card">
                <div className="loader-circle" />
                <h2>Loading dashboard...</h2>
                <p>Please wait while we fetch your latest details.</p>
              </div>
            ) : (
              <>
                <div className="dashboard-topbar">
                  <div>
                    <h2>
                      Welcome{" "}
                      <span>
                        {dashboardData?.user?.username || "Source Manager"}
                      </span>
                    </h2>
                    <p>
                      Here is a quick overview of your submitted properties.
                    </p>
                  </div>

                  <div className="dashboard-actions">
                    <Link
                      href="/source-dashboard/add-property"
                      className="dashboard-btn primary"
                    >
                      Add Property
                    </Link>

                    <Link
                      href="/source-dashboard/my-properties"
                      className="dashboard-btn outline"
                    >
                      My Properties
                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="dashboard-btn dark"
                    >
                      Logout
                    </button>
                  </div>
                </div>

                {errorMessage ? (
                  <div className="dashboard-error">{errorMessage}</div>
                ) : null}

                <div className="dashboard-grid">
                  <div className="dashboard-card">
                    <div className="card-icon orange">
                      <i className="icon-house" />
                    </div>
                    <div>
                      <h3>Total Properties</h3>
                      <p>{dashboardData?.stats?.total_properties || 0}</p>
                    </div>
                  </div>

                  <div className="dashboard-card">
                    <div className="card-icon yellow">
                      <i className="icon-clock" />
                    </div>
                    <div>
                      <h3>Pending Approval</h3>
                      <p>{dashboardData?.stats?.pending_properties || 0}</p>
                    </div>
                  </div>

                  <div className="dashboard-card">
                    <div className="card-icon green">
                      <i className="icon-check" />
                    </div>
                    <div>
                      <h3>Approved Properties</h3>
                      <p>{dashboardData?.stats?.approved_properties || 0}</p>
                    </div>
                  </div>
                </div>

                <div className="dashboard-info-card">
                  <div>
                    <h3>Start managing your properties</h3>
                    <p>
                      Add new property details, check approval status and keep
                      your listings updated for better visibility.
                    </p>
                  </div>

                  <Link
                    href="/source-dashboard/add-property"
                    className="dashboard-btn primary"
                  >
                    Add New Property
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer1 />

      <style jsx>{`
        .source-dashboard-page {
          background: #f7f8fa;
          min-height: 100vh;
        }

        .dashboard-hero {
          position: relative;
          padding: 120px 0 70px;
          background: linear-gradient(
            135deg,
            #0b1320 0%,
            #0f1b2d 45%,
            #1a2333 100%
          );
          overflow: hidden;
        }

        .dashboard-hero::before {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          right: -120px;
          top: -120px;
          background: rgba(255, 122, 26, 0.18);
          filter: blur(4px);
        }

        .dashboard-hero::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          left: -80px;
          bottom: -120px;
          background: rgba(255, 169, 77, 0.12);
          filter: blur(4px);
        }

        .dashboard-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 760px;
          color: #fff;
        }

        .dashboard-eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(255, 122, 26, 0.15);
          border: 1px solid rgba(255, 122, 26, 0.28);
          color: #ffa94d;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .dashboard-hero h1 {
          color: #fff;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.1;
          margin-bottom: 14px;
        }

        .dashboard-hero p {
          color: rgba(255, 255, 255, 0.82);
          font-size: 17px;
          line-height: 1.7;
          margin: 0;
        }

        .dashboard-section {
          padding: 50px 0 80px;
        }

        .dashboard-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 26px;
          padding: 26px;
          background: #fff;
          border-radius: 24px;
          box-shadow: 0 12px 36px rgba(15, 23, 42, 0.07);
        }

        .dashboard-topbar h2 {
          margin: 0 0 8px;
          color: #111827;
          font-size: 28px;
          line-height: 1.2;
        }

        .dashboard-topbar h2 span {
          color: #ff7a1a;
        }

        .dashboard-topbar p {
          margin: 0;
          color: #6b7280;
          font-size: 15px;
        }

        .dashboard-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .dashboard-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          cursor: pointer;
          border: 1px solid transparent;
          white-space: nowrap;
        }

        .dashboard-btn.primary {
          background: linear-gradient(135deg, #ff7a1a, #ff6a00);
          color: #fff;
          box-shadow: 0 10px 22px rgba(255, 106, 0, 0.24);
        }

        .dashboard-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(255, 106, 0, 0.3);
        }

        .dashboard-btn.outline {
          background: #fff;
          color: #111827;
          border-color: #e5e7eb;
        }

        .dashboard-btn.outline:hover {
          border-color: #ff7a1a;
          color: #ff7a1a;
        }

        .dashboard-btn.dark {
          background: #111827;
          color: #fff;
          border: 0;
        }

        .dashboard-btn.dark:hover {
          background: #0b1320;
          transform: translateY(-2px);
        }

        .dashboard-error {
          padding: 16px 18px;
          margin-bottom: 22px;
          border-radius: 14px;
          background: #fff1f1;
          color: #d92d20;
          border: 1px solid #ffd6d6;
          font-weight: 600;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .dashboard-card {
          display: flex;
          align-items: center;
          gap: 18px;
          background: #fff;
          padding: 26px;
          border-radius: 24px;
          box-shadow: 0 12px 36px rgba(15, 23, 42, 0.07);
          border: 1px solid rgba(229, 231, 235, 0.72);
          transition: all 0.25s ease;
        }

        .dashboard-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 42px rgba(15, 23, 42, 0.1);
        }

        .dashboard-card h3 {
          margin: 0 0 8px;
          font-size: 16px;
          color: #6b7280;
          font-weight: 700;
        }

        .dashboard-card p {
          margin: 0;
          font-size: 34px;
          line-height: 1;
          font-weight: 800;
          color: #111827;
        }

        .card-icon {
          width: 58px;
          height: 58px;
          min-width: 58px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .card-icon.orange {
          background: rgba(255, 122, 26, 0.12);
          color: #ff7a1a;
        }

        .card-icon.yellow {
          background: rgba(255, 169, 77, 0.16);
          color: #ff8c2b;
        }

        .card-icon.green {
          background: rgba(34, 197, 94, 0.12);
          color: #16a34a;
        }

        .dashboard-info-card {
          margin-top: 26px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          padding: 28px;
          border-radius: 24px;
          background: linear-gradient(135deg, #ffffff, #fff7ed);
          border: 1px solid #ffead5;
          box-shadow: 0 12px 36px rgba(15, 23, 42, 0.06);
        }

        .dashboard-info-card h3 {
          margin: 0 0 8px;
          color: #111827;
          font-size: 22px;
        }

        .dashboard-info-card p {
          margin: 0;
          color: #6b7280;
          max-width: 680px;
          line-height: 1.6;
        }

        .dashboard-state-card {
          min-height: 320px;
          background: #fff;
          border-radius: 24px;
          box-shadow: 0 12px 36px rgba(15, 23, 42, 0.07);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 20px;
        }

        .dashboard-state-card h2 {
          margin: 18px 0 8px;
          color: #111827;
        }

        .dashboard-state-card p {
          margin: 0;
          color: #6b7280;
        }

        .loader-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 4px solid #f3f4f6;
          border-top-color: #ff7a1a;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 991px) {
          .dashboard-hero {
            padding: 100px 0 55px;
          }

          .dashboard-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .dashboard-topbar {
            align-items: flex-start;
          }

          .dashboard-actions {
            width: 100%;
          }
        }

        @media (max-width: 767px) {
          .dashboard-section {
            padding: 36px 0 60px;
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-topbar {
            padding: 20px;
            border-radius: 20px;
          }

          .dashboard-actions {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
          }

          .dashboard-btn {
            width: 100%;
          }

          .dashboard-card {
            padding: 20px;
            border-radius: 20px;
          }

          .dashboard-card p {
            font-size: 30px;
          }

          .dashboard-info-card {
            padding: 22px;
            border-radius: 20px;
          }
        }

        @media (max-width: 480px) {
          .dashboard-hero {
            padding: 90px 0 45px;
          }

          .dashboard-hero h1 {
            font-size: 34px;
          }

          .dashboard-hero p {
            font-size: 15px;
          }

          .dashboard-topbar h2 {
            font-size: 24px;
          }

          .card-icon {
            width: 52px;
            height: 52px;
            min-width: 52px;
          }
        }
      `}</style>
    </>
  );
}