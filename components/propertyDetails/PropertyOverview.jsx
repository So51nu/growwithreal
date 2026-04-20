import React from "react";

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

export default function PropertyOverview({ property }) {
  return (
    <>
      <div className="heading flex justify-between">
        <div>
          <div className="title text-5 fw-6 text-color-heading">
            {property?.title || "Property"}
          </div>

          <div className="text-1 mt-8">
            {property?.full_address ||
              property?.short_location ||
              property?.location ||
              "Location not available"}
          </div>
        </div>

        <div className="price text-5 fw-6 text-color-heading">
          {formatPrice(property?.price)}
        </div>
      </div>

      <div className="info-detail">
        <div className="wrap-box">
          <div className="box-icon">
            <div className="content">
              <div className="text-4 text-color-default">ID:</div>
              <div className="text-1 text-color-heading">
                {property?.property_code || "-"}
              </div>
            </div>
          </div>

          <div className="box-icon">
            <div className="content">
              <div className="text-4 text-color-default">Bathrooms:</div>
              <div className="text-1 text-color-heading">
                {property?.bathrooms || 0}
              </div>
            </div>
          </div>
        </div>

        <div className="wrap-box">
          <div className="box-icon">
            <div className="content">
              <div className="text-4 text-color-default">Type:</div>
              <div className="text-1 text-color-heading">
                {property?.property_type || "-"}
              </div>
            </div>
          </div>

          <div className="box-icon">
            <div className="content">
              <div className="text-4 text-color-default">Land Size:</div>
              <div className="text-1 text-color-heading">
                {property?.land_area_sqft || 0} SqFt
              </div>
            </div>
          </div>
        </div>

        <div className="wrap-box">
          <div className="box-icon">
            <div className="content">
              <div className="text-4 text-color-default">Bedrooms:</div>
              <div className="text-1 text-color-heading">
                {property?.bedrooms || 0}
              </div>
            </div>
          </div>

          <div className="box-icon">
            <div className="content">
              <div className="text-4 text-color-default">Size:</div>
              <div className="text-1 text-color-heading">
                {property?.size_sqft || 0} SqFt
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}