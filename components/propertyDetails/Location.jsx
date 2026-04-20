import React from "react";

export default function Location({ property }) {
  const mapUrl = property?.map_embed_url || "";

  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Get Direction
      </div>

      {mapUrl ? (
        <iframe
          className="map"
          src={mapUrl}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Property Map"
        />
      ) : (
        <div className="map" style={{ minHeight: "320px", display: "grid", placeItems: "center" }}>
          <p>No map available</p>
        </div>
      )}

      <div className="info-map">
        <ul className="box-left">
          <li>
            <span className="label fw-6">Address</span>
            <div className="text text-variant-1">{property?.full_address || "-"}</div>
          </li>
          <li>
            <span className="label fw-6">City</span>
            <div className="text text-variant-1">{property?.city || property?.location || "-"}</div>
          </li>
          <li>
            <span className="label fw-6">State/county</span>
            <div className="text text-variant-1">{property?.state || "-"}</div>
          </li>
        </ul>

        <ul className="box-right">
          <li>
            <span className="label fw-6">Postal code</span>
            <div className="text text-variant-1">{property?.zip_code || "-"}</div>
          </li>
          <li>
            <span className="label fw-6">Area</span>
            <div className="text text-variant-1">{property?.size_sqft || 0} sqft</div>
          </li>
          <li>
            <span className="label fw-6">Country</span>
            <div className="text text-variant-1">{property?.country || "-"}</div>
          </li>
        </ul>
      </div>
    </>
  );
}