"use client";

import React, { useState } from "react";

function formatDate(date) {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return date;
  }
}

export default function Reviews({ property }) {
  const reviews = Array.isArray(property?.reviews) ? property.reviews : [];
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <>
      <div className="wrap-comment">
        <h4 className="title">Guest Reviews</h4>

        {visibleReviews.length ? (
          <ul className="comment-list">
            {visibleReviews.map((item) => (
              <li key={item.id}>
                <div className="comment-item">
                  <div className="content" style={{ width: "100%" }}>
                    <div className="user">
                      <div className="author">
                        <h6 className="name">{item.name}</h6>
                        <div className="time">{formatDate(item.created_at)}</div>
                      </div>

                      <div className="ratings">
                        {Array.from({ length: Number(item.rating || 5) }).map((_, idx) => (
                          <i className="icon-star" key={idx} />
                        ))}
                      </div>
                    </div>

                    <div className="comment">
                      <p>{item.message}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}

        {reviews.length > visibleCount && (
          <button
            type="button"
            className="tf-btn style-border fw-7 pd-1"
            onClick={() => setVisibleCount((prev) => prev + 3)}
          >
            <span>
              View all review <i className="icon-arrow-right-2 fw-4" />
            </span>
          </button>
        )}
      </div>
    </>
  );
}