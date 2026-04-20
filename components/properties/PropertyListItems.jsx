"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { apiPost } from "../lib/api";

function formatPrice(price) {
  const num = Number(price || 0);
  if (!num) return "Price on request";
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  }
  if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
  }
  return `₹${num.toLocaleString()}`;
}

export default function PropertyListItems({
  properties = [],
  onFavoriteUpdated = null,
}) {
  const handleFavorite = async (id) => {
    try {
      await apiPost(`/admindashboard/properties/${id}/toggle-favorite/`, {});
      if (onFavoriteUpdated) onFavoriteUpdated();
    } catch (error) {
      console.error(error);
      alert(error.message || "Favorite update failed");
    }
  };

  return (
    <>
      {properties.map((property) => (
        <div key={property.id} className="box-house style-list hover-img">
          <div className="image-wrap">
            <Link href={`/property-detail-v1/${property.id}`}>
              <Image
                className="lazyload"
                alt={property.title || "Property"}
                src={property.imageSrc || "/images/home/house-1.jpg"}
                width={600}
                height={401}
              />
            </Link>

            <ul className="box-tag flex gap-8">
              {property.property_label === "featured" && (
                <li className="flat-tag text-4 bg-main fw-6 text_white">
                  Featured
                </li>
              )}
              <li className="flat-tag text-4 bg-3 fw-6 text_white">
                {property.property_status === "for-rent" ? "For Rent" : "For Sale"}
              </li>
            </ul>

            <div className="list-btn flex gap-8">
              <button
                type="button"
                className="btn-icon save hover-tooltip"
                onClick={() => handleFavorite(property.id)}
              >
                <i className="icon-save" />
                <span className="tooltip">
                  {property.is_favorite ? "Remove Favorite" : "Add Favorite"}
                </span>
              </button>

              <Link
                href={`/property-detail-v1/${property.id}`}
                className="btn-icon find hover-tooltip"
              >
                <i className="icon-find-plus" />
                <span className="tooltip">Quick View</span>
              </Link>
            </div>
          </div>

          <div className="content">
            <h5 className="title">
              <Link href={`/property-detail-v1/${property.id}`}>
                {property.title}
              </Link>
            </h5>

            <p className="location text-1 flex items-center gap-6">
              <i className="icon-location" />{" "}
              {property.short_location || property.location || property.full_address}
            </p>

            <ul className="meta-list flex">
              <li className="text-1 flex">
                <span>{property.bedrooms || 0}</span>Beds
              </li>
              <li className="text-1 flex">
                <span>{property.bathrooms || 0}</span>Baths
              </li>
              <li className="text-1 flex">
                <span>{property.size_sqft || 0}</span>Sqft
              </li>
            </ul>

            <div className="bot flex justify-between items-center">
              <h5 className="price">{formatPrice(property.price)}</h5>

              <div className="wrap-btn flex">
                <Link
                  href={`/property-detail-v1/${property.id}`}
                  className="tf-btn style-border pd-4"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}