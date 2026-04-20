"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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

export default function Properties2() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const res = await apiGet("/admindashboard/properties/");
        const list = Array.isArray(res)
          ? res.filter((item) => item.property_label === "open-house").slice(0, 6)
          : [];
        setProperties(list);
      } catch (error) {
        console.error("Open house fetch error:", error);
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
    <div className="box-house hover-img style-list">
      <div className="image-wrap">
        <Link href={`/property-detail-v1/${property.id}`}>
          <Image
            className="lazyload"
            alt={property.title || "property"}
            src={property.imageSrc || "/images/home/house-1.jpg"}
            width={435}
            height={408}
          />
        </Link>

        <ul className="box-tag flex gap-8">
          <li className="flat-tag text-4 bg-main fw-6 text_white">
            {property.property_status === "for-rent" ? "For Rent" : "For Sale"}
          </li>
        </ul>

        <div className="list-btn flex gap-8">
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

        <p className="location text-1 line-clamp-1">
          <i className="icon-location" />{" "}
          {property.short_location || property.location || property.full_address}
        </p>

        <ul className="meta-list flex">
          <li className="meta-item">
            <div className="text-9 flex">
              <i className="icon-bed" />
              Beds<span>{property.bedrooms || 0}</span>
            </div>
            <div className="text-9 flex">
              <i className="icon-sqft" />
              Sqft<span>{property.size_sqft || 0}</span>
            </div>
          </li>
          <li className="meta-item">
            <div className="text-9 flex">
              <i className="icon-bath" />
              Baths<span>{property.bathrooms || 0}</span>
            </div>
            <div className="text-9 flex">
              <i className="icon-garage" />
              Garage<span>{property.garages || 0}</span>
            </div>
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
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Open Houses Listings" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>

            <div
              className="swiper style-pagination tf-sw-mobile sw-swiper-992"
              data-screen={992}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-lg lg-col-2 ">
                {properties.map((property) => (
                  <div className="swiper-slide" key={property.id}>
                    {renderCard(property)}
                  </div>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb text-center mt-20 d-lg-none d-block" />
            </div>

            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd447",
              }}
              spaceBetween={15}
              className="swiper style-pagination tf-sw-mobile sw-swiper-992"
            >
              {properties.map((property) => (
                <SwiperSlide className="swiper-slide" key={property.id}>
                  {renderCard(property)}
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-mb text-center mt-20 d-lg-none d-block spd447" />
            </Swiper>

            {properties.length === 0 && (
              <div className="text-center mt-20">
                <p className="text-1">No open house listings found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}