import React from "react";

export default function PropertyNearby({ property }) {
  const nearbyPlaces = Array.isArray(property?.nearby_places) ? property.nearby_places : [];

  if (!nearbyPlaces.length) return null;

  const mid = Math.ceil(nearbyPlaces.length / 2);
  const left = nearbyPlaces.slice(0, mid);
  const right = nearbyPlaces.slice(mid);

  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        What’s Nearby?
      </div>

      <p className="description text-color-default">
        Explore nearby amenities to precisely locate your property and identify
        surrounding conveniences, providing a comprehensive overview of the
        living environment and the property's convenience.
      </p>

      <div className="row box-nearby">
        <div className="col-md-5">
          <ul className="box-left">
            {left.map((item) => (
              <li className="item-nearby" key={item.id}>
                <span className="fw-7 label text-4">{item.place_name}:</span>
                <span>{item.distance}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-5">
          <ul className="box-right">
            {right.map((item) => (
              <li className="item-nearby" key={item.id}>
                <span className="fw-7 label text-4">{item.place_name}:</span>
                <span>{item.distance}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}