"use client";

import React, { useEffect, useMemo, useState } from "react";
import { apiGet, apiPost } from "../lib/api";

function getStoredUser() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

const emptyInvitee = {
  name: "",
  phone: "",
  email: "",
  relation: "",
  referral_type: "project",
  project_ids: [],
  locations: [],
  projectSearch: "",
  locationSearch: "",
};

export default function Referrals() {
  const user = getStoredUser();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [inviter, setInviter] = useState({
    name: "",
    phone: "",
  });

  const [invitees, setInvitees] = useState([{ ...emptyInvitee }]);

  useEffect(() => {
    setInviter({
      name: user?.full_name || user?.username || user?.name || "",
      phone: user?.phone || "",
    });
  }, [user]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await apiGet("/admindashboard/properties/");
        const list = Array.isArray(res) ? res : [];
        const visible = list.filter((item) => {
          const postStatus = String(item?.post_status || "").toLowerCase();
          return postStatus === "publish" && item?.is_approved === true;
        });
        setProjects(visible);
      } catch (error) {
        console.error("Projects fetch error:", error);
        setProjects([]);
      }
    };

    loadProjects();
  }, []);

  const availableCities = useMemo(() => {
    const map = new Map();

    projects.forEach((project) => {
      const city = String(project.city || "").trim();
      if (city) {
        map.set(city.toLowerCase(), city);
      }
    });

    return Array.from(map.values()).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const updateInvitee = (index, field, value) => {
    setInvitees((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
              ...(field === "referral_type"
                ? {
                    project_ids: [],
                    locations: [],
                    projectSearch: "",
                    locationSearch: "",
                  }
                : {}),
            }
          : item
      )
    );
  };

  const toggleProjectSelection = (inviteeIndex, projectId) => {
    setInvitees((prev) =>
      prev.map((item, i) => {
        if (i !== inviteeIndex) return item;

        const exists = item.project_ids.includes(projectId);
        return {
          ...item,
          project_ids: exists
            ? item.project_ids.filter((id) => id !== projectId)
            : [...item.project_ids, projectId],
        };
      })
    );
  };

  const toggleLocationSelection = (inviteeIndex, city) => {
    setInvitees((prev) =>
      prev.map((item, i) => {
        if (i !== inviteeIndex) return item;

        const exists = item.locations.includes(city);
        return {
          ...item,
          locations: exists
            ? item.locations.filter((loc) => loc !== city)
            : [...item.locations, city],
        };
      })
    );
  };

  const addInvitee = () => {
    setInvitees((prev) => [...prev, { ...emptyInvitee }]);
  };

  const removeInvitee = (index) => {
    setInvitees((prev) => prev.filter((_, i) => i !== index));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user?.id) {
    alert("Please login first.");
    return;
  }

  for (const invitee of invitees) {
    if (!invitee.name || !invitee.phone || !invitee.relation) {
      setMessage("Please fill all required invitee fields.");
      return;
    }

    if (
      invitee.referral_type === "project" &&
      (!invitee.project_ids || invitee.project_ids.length === 0)
    ) {
      setMessage("Please select at least one project.");
      return;
    }

    if (
      invitee.referral_type === "location" &&
      (!invitee.locations || invitee.locations.length === 0)
    ) {
      setMessage("Please select at least one city.");
      return;
    }
  }

  try {
    setLoading(true);
    setMessage("");

    const res = await apiPost("/admindashboard/customer/referrals/create/", {
      user_id: user.id,
      inviter_name: inviter.name,
      inviter_phone: inviter.phone,
      invitees: invitees.map((item) => ({
        name: item.name,
        phone: item.phone,
        email: item.email,
        relation: item.relation,
        referral_type: item.referral_type,
        project_ids: item.project_ids,
        locations: item.locations,
      })),
    });

    setMessage("Referral invite created successfully.");

    if (Array.isArray(res?.whatsapp_links) && res.whatsapp_links.length > 0) {
      res.whatsapp_links.forEach((item, index) => {
        setTimeout(() => {
          window.open(item.url, "_blank");
        }, index * 500);
      });
    }

    setInvitees([{ ...emptyInvitee }]);
  } catch (error) {
    console.error(error);
    setMessage(error.message || "Failed to send referral.");
  } finally {
    setLoading(false);
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
            maxWidth: "980px",
            margin: "0 auto",
            borderRadius: "20px",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <h3 className="title" style={{ marginBottom: "6px" }}>
              Invite a Friend
            </h3>
            <p className="text-1">Help them find their dream property</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "24px" }}>
              <h5 style={{ marginBottom: "16px" }}>Your Information</h5>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={inviter.name}
                    onChange={(e) =>
                      setInviter((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={inviter.phone}
                    onChange={(e) =>
                      setInviter((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>
            </div>

            {invitees.map((invitee, index) => {
              const filteredProjects = projects.filter((project) =>
                String(project.title || "")
                  .toLowerCase()
                  .includes(invitee.projectSearch.toLowerCase())
              );

              const filteredCities = availableCities.filter((city) =>
                city.toLowerCase().includes(invitee.locationSearch.toLowerCase())
              );

              return (
                <div
                  key={index}
                  style={{
                    border: "1px solid #e5e5e5",
                    borderRadius: "18px",
                    padding: "18px",
                    marginBottom: "20px",
                    background: "#fafafa",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <h5 style={{ margin: 0 }}>Invitee Details</h5>
                    {invitees.length > 1 ? (
                      <button
                        type="button"
                        className="tf-btn style-border pd-4"
                        onClick={() => removeInvitee(index)}
                      >
                        Remove
                      </button>
                    ) : null}
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={invitee.name}
                        onChange={(e) =>
                          updateInvitee(index, "name", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Mobile Number *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={invitee.phone}
                        onChange={(e) =>
                          updateInvitee(index, "phone", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Email Address (Optional)</label>
                      <input
                        type="email"
                        className="form-control"
                        value={invitee.email}
                        onChange={(e) =>
                          updateInvitee(index, "email", e.target.value)
                        }
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>Relation *</label>
                      <select
                        className="form-control"
                        value={invitee.relation}
                        onChange={(e) =>
                          updateInvitee(index, "relation", e.target.value)
                        }
                        required
                      >
                        <option value="">Relation</option>
                        <option value="friend">Friend</option>
                        <option value="family">Family</option>
                        <option value="colleague">Colleague</option>
                        <option value="relative">Relative</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", marginBottom: "10px" }}>
                      Location / Project *
                    </label>

                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        onClick={() =>
                          updateInvitee(index, "referral_type", "project")
                        }
                        className="tf-btn"
                        style={{
                          background:
                            invitee.referral_type === "project" ? "#f4e7df" : "#fff",
                          color: "#222",
                          border:
                            invitee.referral_type === "project"
                              ? "1px solid #f28c52"
                              : "1px solid #ddd",
                        }}
                      >
                        Projects
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          updateInvitee(index, "referral_type", "location")
                        }
                        className="tf-btn"
                        style={{
                          background:
                            invitee.referral_type === "location" ? "#f4e7df" : "#fff",
                          color: "#222",
                          border:
                            invitee.referral_type === "location"
                              ? "1px solid #f28c52"
                              : "1px solid #ddd",
                        }}
                      >
                        Locations
                      </button>
                    </div>
                  </div>

                  {invitee.referral_type === "project" ? (
                    <>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search projects"
                          value={invitee.projectSearch}
                          onChange={(e) =>
                            updateInvitee(index, "projectSearch", e.target.value)
                          }
                        />
                      </div>

                      <div
                        style={{
                          maxHeight: "220px",
                          overflowY: "auto",
                          border: "1px solid #ddd",
                          borderRadius: "12px",
                          padding: "12px",
                          background: "#fff",
                        }}
                      >
                        {filteredProjects.length > 0 ? (
                          filteredProjects.map((project) => (
                            <label
                              key={project.id}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "10px",
                                cursor: "pointer",
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={invitee.project_ids.includes(project.id)}
                                onChange={() =>
                                  toggleProjectSelection(index, project.id)
                                }
                              />
                              <span>{project.title}</span>
                            </label>
                          ))
                        ) : (
                          <div style={{ color: "#777" }}>No projects found.</div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search city"
                          value={invitee.locationSearch}
                          onChange={(e) =>
                            updateInvitee(index, "locationSearch", e.target.value)
                          }
                        />
                      </div>

                      <div
                        style={{
                          maxHeight: "220px",
                          overflowY: "auto",
                          border: "1px solid #ddd",
                          borderRadius: "12px",
                          padding: "12px",
                          background: "#fff",
                        }}
                      >
                        {filteredCities.length > 0 ? (
                          filteredCities.map((city) => (
                            <label
                              key={city}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "10px",
                                cursor: "pointer",
                              }}
                            >
                              <input
                                type="checkbox"
                                checked={invitee.locations.includes(city)}
                                onChange={() =>
                                  toggleLocationSelection(index, city)
                                }
                              />
                              <span>{city}</span>
                            </label>
                          ))
                        ) : (
                          <div style={{ color: "#777" }}>No cities found.</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}

            <div style={{ marginBottom: "22px" }}>
              <button
                type="button"
                onClick={addInvitee}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#ff6b35",
                  fontWeight: 500,
                }}
              >
                + Add another invitee
              </button>
            </div>

            {message ? (
              <div
                style={{
                  marginBottom: "16px",
                  color: "#ff6b35",
                  fontSize: "14px",
                }}
              >
                {message}
              </div>
            ) : null}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                borderTop: "1px solid #eee",
                paddingTop: "20px",
              }}
            >
              <button
                type="button"
                className="tf-btn style-border pd-4"
                onClick={() => {
                  setInvitees([{ ...emptyInvitee }]);
                  setMessage("");
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="tf-btn pd-4"
                disabled={loading}
                style={{
                  background: "#f2b8a9",
                  color: "#fff",
                  border: "1px solid #f2b8a9",
                  minWidth: "150px",
                }}
              >
                {loading ? "Sending..." : "Send Invite"}
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