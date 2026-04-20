"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { apiGet, apiPost } from "../lib/api";

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

export default function RelatedProperties({ property }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const loadRelated = async () => {
      try {
        const res = await apiGet("/admindashboard/properties/");
        const all = Array.isArray(res) ? res : [];

        const filtered = all
          .filter((item) => item.id !== property?.id)
          .filter((item) => {
            if (property?.city_slug && item.city_slug === property.city_slug) {
              return true;
            }
            if (
              property?.developer_slug &&
              item.developer_slug === property.developer_slug
            ) {
              return true;
            }
            return false;
          })
          .slice(0, 6);

        setRelated(filtered);
      } catch (error) {
        console.error("Related properties fetch error:", error);
        setRelated([]);
      }
    };

    if (property?.id) {
      loadRelated();
    }
  }, [property]);

  const toggleFavorite = async (id) => {
    try {
      await apiPost(`/admindashboard/properties/${id}/toggle-favorite/`, {});
      setRelated((prev) =>
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

  const renderCard = (item) => (
    <div className="box-house hover-img">
      <div className="image-wrap">
        <Link href={`/property-detail-v1/${item.id}`}>
          <Image
            className="lazyload"
            alt={item.title || "property"}
            src={item.imageSrc || "/images/home/house-1.jpg"}
            width={600}
            height={401}
          />
        </Link>

        <ul className="box-tag flex gap-8">
          {item.property_label ? (
            <li className="flat-tag text-4 bg-main fw-6 text_white">
              {item.property_label}
            </li>
          ) : null}

          <li className="flat-tag text-4 bg-3 fw-6 text_white">
            {item.property_status === "for-rent" ? "For Rent" : "For Sale"}
          </li>
        </ul>

        <div className="list-btn flex gap-8">
          <button
            type="button"
            onClick={() => toggleFavorite(item.id)}
            className="btn-icon save hover-tooltip"
          >
            <i className="icon-save" />
            <span className="tooltip">
              {item.is_favorite ? "Remove Favorite" : "Add Favorite"}
            </span>
          </button>

          <Link
            href={`/property-detail-v1/${item.id}`}
            className="btn-icon find hover-tooltip"
          >
            <i className="icon-find-plus" />
            <span className="tooltip">Quick View</span>
          </Link>
        </div>
      </div>

      <div className="content">
        <h5 className="title">
          <Link href={`/property-detail-v1/${item.id}`}>
            {item.title}
          </Link>
        </h5>

        <p className="location text-1 flex items-center gap-8">
          <i className="icon-location" />{" "}
          {item.short_location || item.location || item.full_address}
        </p>

        <ul className="meta-list flex">
          <li className="text-1 flex">
            <span>{item.bedrooms || 0}</span>Beds
          </li>
          <li className="text-1 flex">
            <span>{item.bathrooms || 0}</span>Baths
          </li>
          <li className="text-1 flex">
            <span>{item.size_sqft || 0}</span>Sqft
          </li>
        </ul>

        <div className="bot flex justify-between items-center">
          <h5 className="price">{formatPrice(item.price)}</h5>
          <div className="wrap-btn flex">
            <Link
              href={`/property-detail-v1/${item.id}`}
              className="tf-btn style-border pd-4"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  if (!related.length) return null;

  return (
    <section className="section-similar-properties tf-spacing-3">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-32">
              <h2 className="title">Similar Properties</h2>
            </div>

            <div
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-992"
              data-screen={992}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-xl lg-col-3 wrap-agent wow fadeInUp">
                {related.map((item) => (
                  <div className="swiper-slide" key={item.id}>
                    {renderCard(item)}
                  </div>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block mt-20" />
            </div>

            <Swiper
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-992"
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd458",
              }}
            >
              {related.map((item) => (
                <SwiperSlide className="swiper-slide" key={item.id}>
                  {renderCard(item)}
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block mt-20 spd458" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}