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

export default function Favorites() {
  const [activeTab, setActiveTab] = useState("videos");
  const [favoriteProperties, setFavoriteProperties] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const user = getStoredUser();

  const loadData = async () => {
    if (!user?.id) return;

    try {
      const [favRes, likedRes] = await Promise.all([
        apiGet(`/admindashboard/customer/${user.id}/favorite-properties/`),
        apiGet(`/admindashboard/customer/${user.id}/liked-videos/`),
      ]);

      setFavoriteProperties(Array.isArray(favRes) ? favRes : favRes?.data || []);
      setLikedVideos(Array.isArray(likedRes) ? likedRes : likedRes?.data || []);
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

  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>

        <div className="widget-box-2">
          <h3 className="title">Favourited</h3>

          <div className="mb-20 d-flex flex-wrap gap-12">
            <button className={`tf-btn ${activeTab === "videos" ? "" : "style-border"}`} onClick={() => setActiveTab("videos")}>
              Videos ({likedVideos.length})
            </button>
            <button className={`tf-btn ${activeTab === "properties" ? "" : "style-border"}`} onClick={() => setActiveTab("properties")}>
              Properties ({favoriteProperties.length})
            </button>
          </div>

          {activeTab === "videos" ? (
            <div className="row">
              {likedVideos.length > 0 ? (
                likedVideos.map((item) => (
                  <div className="col-xl-4 col-md-6 mb-24" key={item.id}>
                    <div className="widget-box-2" style={{ padding: 14 }}>
                      <video
                        src={item.video_url}
                        controls
                        style={{ width: "100%", borderRadius: 18, maxHeight: 520, objectFit: "cover" }}
                      />
                      <h6 style={{ marginTop: 12 }}>{item.title}</h6>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <div className="widget-box-2">No liked videos found.</div>
                </div>
              )}
            </div>
          ) : (
            <div className="row">
              {favoriteProperties.length > 0 ? (
                favoriteProperties.map((item) => (
                  <div className="col-xl-6 mb-24" key={item.id}>
                    <ProjectCard
                      item={item}
                      onToggleFavorite={handleToggleFavorite}
                      onViewed={handleViewed}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <div className="widget-box-2">No favorite properties found.</div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="footer-dashboard">
          <p>Copyright © {new Date().getFullYear()} Popty</p>
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}