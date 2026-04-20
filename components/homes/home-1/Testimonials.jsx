"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export default function Testimonials() {
  const [showMore, setShowMore] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_BASE}/api/testimonials/`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();

        const normalizedData = Array.isArray(data)
          ? data.map((item, index) => ({
              ...item,
              id: item.id ?? index + 1,
              name: item.name || "Client Name",
              role: item.role || "Client",
              description: item.description || "",
              rating: item.rating || 5,
              width: item.width || 120,
              height: item.height || 120,
              avatar: item.avatar
                ? item.avatar.startsWith("http")
                  ? item.avatar.replace("/api/media", "/media")
                  : `${API_BASE.replace("/api", "")}${item.avatar.replace(
                      "/api/media",
                      "/media"
                    )}`
                : "/images/avatar/avt-png12.png",
            }))
          : [];

        if (isMounted) {
          setTestimonials(normalizedData);
        }
      } catch (err) {
        if (isMounted) {
          setError("Unable to load testimonials right now.");
          setTestimonials([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  const groupedTestimonials = useMemo(() => {
    const visibleItems = showMore ? testimonials : testimonials.slice(0, 9);
    const chunkSize = 3;
    const groups = [];

    for (let i = 0; i < visibleItems.length; i += chunkSize) {
      groups.push(visibleItems.slice(i, i + chunkSize));
    }

    return groups;
  }, [testimonials, showMore]);

  const renderStars = (count = 5) =>
    Array.from({ length: count }).map((_, index) => (
      <i className="icon-star" key={index} />
    ));

  return (
    <div className="section-testimonials style-1 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Clients Testimonials" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>

            {loading ? (
              <div className="text-center">
                <p className="text-1">Loading testimonials...</p>
              </div>
            ) : error ? (
              <div className="text-center">
                <p className="text-1">{error}</p>
              </div>
            ) : testimonials.length === 0 ? (
              <div className="text-center">
                <p className="text-1">No testimonials found.</p>
              </div>
            ) : (
              <div
                className={`tf-grid-layout md-col-3 loadmore-item-8 ${
                  showMore ? "active" : ""
                }`}
              >
                {groupedTestimonials.map((group, groupIndex) => (
                  <div className="box-testimonials" key={groupIndex}>
                    {group.map((item) => (
                      <div className="wg-testimonial style-2" key={item.id}>
                        <div className="ratings ">
                          {renderStars(item.rating || 5)}
                        </div>

                        <p className="text-1 description">
                          {item.description}
                        </p>

                        <div className="author">
                          <div className="avatar">
                            <Image
                              alt={item.name || "testimonial"}
                              src={item.avatar || "/images/avatar/avt-png12.png"}
                              width={item.width || 120}
                              height={item.height || 120}
                            />
                          </div>

                          <div className="content">
                            <h6 className="name">
                              <a href="#">{item.name}</a>
                            </h6>
                            <p className="text-2">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

                {!showMore && testimonials.length > 9 && (
                  <button
                    onClick={() => setShowMore(true)}
                    className="tf-btn bg-color-primary fw-7 mx-auto btn-loadmore view-more-button"
                  >
                    Show more...
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}