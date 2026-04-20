"use client";
import React, { useMemo, useState } from "react";

function formatPrice(price) {
  const num = Number(price || 0);
  if (!num) return "Price on request";
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
  return `₹${num.toLocaleString()}`;
}

export default function ExtraInfo({ property }) {
  const [expanded, setExpanded] = useState(false);

  const description = property?.description || "";
  const shortText = useMemo(() => {
    if (!description) return "";
    if (description.length <= 260) return description;
    return `${description.slice(0, 260)}...`;
  }, [description]);

  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Property Details
      </div>

      <div className="content">
        <p className="description text-1">
          {expanded ? description || "No description available." : shortText || "No description available."}
        </p>

        {description.length > 260 && (
          <button
            type="button"
            className="tf-btn-link style-hover-rotate"
            onClick={() => setExpanded((prev) => !prev)}
            style={{ background: "transparent", border: "none", padding: 0 }}
          >
            <span>{expanded ? "Read Less" : "Read More"} </span>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2348_5612)">
                <path
                  d="M1.66732 9.99999C1.66732 14.6024 5.39828 18.3333 10.0007 18.3333C14.603 18.3333 18.334 14.6024 18.334 9.99999C18.334 5.39762 14.603 1.66666 10.0007 1.66666C5.39828 1.66666 1.66732 5.39762 1.66732 9.99999Z"
                  stroke="#F1913D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 6.66666L10 13.3333"
                  stroke="#F1913D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66732 10L10.0007 13.3333L13.334 10"
                  stroke="#F1913D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2348_5612">
                  <rect width={20} height={20} fill="white" transform="translate(20) rotate(90)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        )}
      </div>

      <div className="box">
        <ul>
          <li className="flex">
            <p className="fw-6">ID</p>
            <p>{property?.property_code || "-"}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Price</p>
            <p>{formatPrice(property?.price)}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Size</p>
            <p>{property?.size_sqft || 0} sqft</p>
          </li>
          <li className="flex">
            <p className="fw-6">Rooms</p>
            <p>{property?.rooms || 0}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Baths</p>
            <p>{property?.bathrooms || 0}</p>
          </li>
        </ul>

        <ul>
          <li className="flex">
            <p className="fw-6">Beds</p>
            <p>{property?.bedrooms || 0}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Year built</p>
            <p>{property?.year_built || "-"}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Type</p>
            <p>{property?.property_type || "-"}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Status</p>
            <p>{property?.property_status === "for-rent" ? "For rent" : "For sale"}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Garage</p>
            <p>{property?.garages || 0}</p>
          </li>
        </ul>
      </div>
    </>
  );
}