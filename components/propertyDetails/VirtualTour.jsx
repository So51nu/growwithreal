import React from "react";
import Image from "next/image";

export default function VirtualTour({ property }) {
  const isImageTour = property?.virtual_tour_type === "image";
  const previewImage =
    property?.virtual_tour_image_url ||
    property?.imageSrc ||
    property?.images?.[0]?.image_url ||
    "/images/section/property-detail-2.jpg";

  if (!property?.virtual_tour_type && !property?.virtual_tour_embed_code) return null;

  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        360 Virtual Tour
      </div>

      {property?.virtual_tour_type === "embedded" && property?.virtual_tour_embed_code ? (
        <div
          className="image-wrap"
          dangerouslySetInnerHTML={{ __html: property.virtual_tour_embed_code }}
        />
      ) : isImageTour ? (
        <div className="image-wrap">
          <Image
            alt="virtual-tour"
            src={previewImage}
            width={792}
            height={439}
          />
          <div className="box-icon">
            <div className="icons">
              <i className="icon-360" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}