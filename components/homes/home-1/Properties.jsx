"use client";

import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../../lib/api";

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

export default function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const res = await apiGet("/admindashboard/properties/");
        const list = Array.isArray(res) ? res.slice(0, 9) : [];
        setProperties(list);
      } catch (error) {
        console.error("Properties fetch error:", error);
        setProperties([]);
      }
    };

    loadProperties();
  }, []);

  const toggleFavorite = async (id) => {
    try {
      await apiPost(`/admindashboard/properties/${id}/toggle-favorite/`, {});
      setProperties((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, is_favorite: !item.is_favorite }
            : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const renderCard = (property) => (
    <div className="box-house hover-img ">
      <div className="image-wrap">
        <Link href={`/property-detail-v1/${property.id}`}>
          <Image
            className="lazyload"
            alt={property.title || "property"}
            src={property.imageSrc || "/images/home/house-1.jpg"}
            width={600}
            height={401}
          />
        </Link>

        <ul className="box-tag flex gap-8 ">
          {property.property_label ? (
            <li className="flat-tag text-4 bg-main fw-6 text_white">
              {property.property_label}
            </li>
          ) : null}
          <li className="flat-tag text-4 bg-3 fw-6 text_white">
            {property.property_status === "for-rent" ? "For Rent" : "For Sale"}
          </li>
        </ul>

        <div className="list-btn flex gap-8 ">
          <button
            type="button"
            onClick={() => toggleFavorite(property.id)}
            className="btn-icon save hover-tooltip"
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

        <p className="location text-1 line-clamp-1 ">
          <i className="icon-location" />{" "}
          {property.short_location ||
            property.location ||
            property.full_address}
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
  );

  return (
    <section className="section-listing tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center ">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Today’s Luxury Listings" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>

            <div
              dir="ltr"
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-767"
              data-screen={767}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-md md-col-2  lg-col-3 ">
                {properties.map((property) => (
                  <div key={property.id} className="swiper-slide">
                    {renderCard(property)}
                  </div>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block" />
            </div>

            <Swiper
              dir="ltr"
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-767"
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd446",
              }}
              spaceBetween={15}
            >
              {properties.map((property) => (
                <SwiperSlide key={property.id} className="swiper-slide">
                  {renderCard(property)}
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block spd446" />
            </Swiper>

            {properties.length === 0 && (
              <div className="text-center mt-20">
                <p className="text-1">No properties found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}