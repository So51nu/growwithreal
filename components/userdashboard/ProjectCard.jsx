"use client";

import Image from "next/image";
import Link from "next/link";

function formatPrice(price) {
  const num = Number(price || 0);
  if (!num) return "Price on request";
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  }
  if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
  }
  return `₹${num.toLocaleString("en-IN")}`;
}

function getImage(item) {
  return (
    item?.image ||
    item?.imageSrc ||
    item?.featured_image ||
    item?.cover_image ||
    "/images/home/house-1.jpg"
  );
}

function getLocation(item) {
  return item?.short_location || item?.location || item?.full_address || "Location on request";
}

function getConfiguration(item) {
  if (item?.configuration) return item.configuration;
  if (item?.configuration_text) return item.configuration_text;
  if (item?.bedrooms) return `${item.bedrooms} BHK`;
  return item?.property_type || "Configuration on request";
}

function getPhone(item) {
  return (
    item?.seller_phone ||
    item?.phone ||
    item?.contact_phone ||
    item?.contact_number ||
    item?.contact_seller?.phone ||
    item?.contact_seller?.office_number ||
    ""
  );
}

const actionBtnStyle = {
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(40, 30, 30, 0.55)",
  backdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
};

export default function ProjectCard({
  item,
  onToggleFavorite,
  onToggleLiked,
  onBookVisit,
  onViewed,
}) {
  const phone = getPhone(item);

  return (
    <div
      className="box-house hover-img"
      style={{
        borderRadius: "22px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      }}
    >
      <div className="image-wrap" style={{ position: "relative" }}>
        <Link href={`/property-detail-v1/${item.id}`} onClick={() => onViewed?.(item.id)}>
          <Image
            alt={item?.title || "property"}
            src={getImage(item)}
            width={700}
            height={450}
            style={{ width: "100%", height: "280px", objectFit: "cover" }}
          />
        </Link>

        <ul
          className="box-tag flex gap-8"
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            zIndex: 2,
          }}
        >
          {item?.property_label ? (
            <li className="flat-tag text-4 bg-main fw-6 text_white">
              {item.property_label}
            </li>
          ) : null}
          <li className="flat-tag text-4 bg-3 fw-6 text_white">
            {item?.property_status === "for-rent" ? "For Rent" : "For Sale"}
          </li>
        </ul>

        <div
          style={{
            position: "absolute",
            right: 16,
            top: 16,
            display: "flex",
            gap: 12,
            zIndex: 3,
          }}
        >
          <button
            type="button"
            onClick={() => onToggleFavorite?.(item.id)}
            style={actionBtnStyle}
            title="Favorite"
          >
            <i
              className="icon-save"
              style={{
                fontSize: "20px",
                color: item?.is_favorite ? "#ff8c5a" : "#ffffff",
              }}
            />
          </button>

          <button
            type="button"
            onClick={() => onToggleLiked?.(item.id)}
            style={actionBtnStyle}
            title="Like Video"
          >
            <i
              className="icon-heart"
              style={{
                fontSize: "20px",
                color: item?.is_liked ? "#ff8c5a" : "#ffffff",
              }}
            />
          </button>

          {phone ? (
            <a
              href={`tel:${phone}`}
              style={actionBtnStyle}
              title="Call"
            >
              <i className="icon-phone" style={{ fontSize: "20px", color: "#fff" }} />
            </a>
          ) : null}
        </div>
      </div>

      <div style={{ padding: "20px 20px 22px" }}>
        <h5 className="title" style={{ marginBottom: 8 }}>
          <Link href={`/property-detail-v1/${item.id}`} onClick={() => onViewed?.(item.id)}>
            {item?.title || "Untitled Project"}
          </Link>
        </h5>

        <p className="location text-1" style={{ marginBottom: 12 }}>
          <i className="icon-location" /> {getLocation(item)}
        </p>

        <div
          style={{
            background: "#f5f0ec",
            borderRadius: 14,
            padding: "10px 14px",
            marginBottom: 14,
            fontSize: 14,
          }}
        >
          <strong>Configuration:</strong> {getConfiguration(item)}
        </div>

        <div className="meta-list flex" style={{ marginBottom: 16 }}>
          <li className="text-1 flex">
            <span>{item?.bedrooms || 0}</span>Beds
          </li>
          <li className="text-1 flex">
            <span>{item?.bathrooms || 0}</span>Baths
          </li>
          <li className="text-1 flex">
            <span>{item?.carpet_area || item?.size_sqft || 0}</span>Sqft
          </li>
        </div>

        <div
          className="bot"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 14,
            borderTop: "1px solid #eee",
            paddingTop: 16,
          }}
        >
          <h5 className="price" style={{ margin: 0 }}>
            {formatPrice(item?.price)}
          </h5>

          <div className="wrap-btn flex gap-8">
            <Link
              href={`/property-detail-v1/${item.id}`}
              className="tf-btn style-border pd-4"
              onClick={() => onViewed?.(item.id)}
            >
              Details
            </Link>

            <button
              type="button"
              className="tf-btn pd-4"
              onClick={() => onBookVisit?.(item)}
              style={{
                background: "#f28c52",
                color: "#fff",
                border: "1px solid #f28c52",
              }}
            >
              Book Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}