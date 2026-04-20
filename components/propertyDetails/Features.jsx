"use client";
import React from "react";

export default function Features({ property }) {
  const amenities = Array.isArray(property?.amenities) ? property.amenities : [];

  if (!amenities.length) return null;

  const chunkSize = Math.ceil(amenities.length / 3);
  const columns = [
    amenities.slice(0, chunkSize),
    amenities.slice(chunkSize, chunkSize * 2),
    amenities.slice(chunkSize * 2),
  ].filter((col) => col.length > 0);

  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Amenities And Features
      </div>

      <div className="wrap-feature">
        {columns.map((column, idx) => (
          <div className="box-feature" key={idx}>
            <ul>
              {column.map((item, index) => (
                <li className="feature-item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}