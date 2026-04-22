"use client";

import React, { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

function getStoredUser() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

export default function Liked() {
  const [videos, setVideos] = useState([]);
  const user = getStoredUser();

  useEffect(() => {
    const loadLikedVideos = async () => {
      if (!user?.id) return;

      try {
        const res = await apiGet(`/admindashboard/customer/${user.id}/liked-videos/`);
        setVideos(Array.isArray(res) ? res : res?.data || []);
      } catch (error) {
        console.error(error);
        setVideos([]);
      }
    };

    loadLikedVideos();
  }, []);

  return (
    <div className="main-content w-100">
      <div className="main-content-inner style-3">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>

        <div className="widget-box-2">
          <h3 className="title">Liked</h3>

          <div className="row">
            {videos.length > 0 ? (
              videos.map((item) => (
                <div className="col-xl-4 col-md-6 mb-24" key={item.id}>
                  <div className="widget-box-2" style={{ padding: 14 }}>
                    <video
                      src={item.video_url}
                      controls
                      style={{
                        width: "100%",
                        borderRadius: 18,
                        maxHeight: 520,
                        objectFit: "cover",
                      }}
                    />
                    <h6 style={{ marginTop: 12 }}>{item.title}</h6>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="widget-box-2">No likes found.</div>
              </div>
            )}
          </div>
        </div>

        <div className="footer-dashboard">
          <p>Copyright © {new Date().getFullYear()} Popty</p>
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}