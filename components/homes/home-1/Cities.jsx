"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { apiGet } from "../../lib/api";

const fallbackImages = [
  "/images/section/location-1.jpg",
  "/images/section/location-2.jpg",
  "/images/section/location-3.jpg",
  "/images/section/location-4.jpg",
  "/images/section/location-5.jpg",
  "/images/section/location-6.jpg",
  "/images/section/location-7.jpg",
  "/images/section/location-8.jpg",
];

export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const [cityRes, propertyRes] = await Promise.all([
          apiGet("/admindashboard/cities/"),
          apiGet("/admindashboard/properties/"),
        ]);

        const allProperties = Array.isArray(propertyRes) ? propertyRes : [];
        const cityList = Array.isArray(cityRes) ? cityRes : [];

        const mapped = cityList.map((city, index) => {
          const count = allProperties.filter(
            (item) => item.city_slug === city.city_slug
          ).length;

          return {
            id: index + 1,
            city: city.city,
            city_slug: city.city_slug,
            properties: count,
            imageSrc: fallbackImages[index % fallbackImages.length],
          };
        });

        setCities(mapped);
      } catch (error) {
        console.error("Cities fetch error:", error);
        setCities([]);
      }
    };

    loadCities();
  }, []);

  return (
    <section className="section-neighborhoods ">
      <div className="tf-container full">
        <div className="col-12">
          <div className="heading-section text-center mb-48">
            <h2 className="title split-text effect-right">
              <SplitTextAnimation text="Explore The Neighborhoods" />
            </h2>
            <p className="text-1 split-text split-lines-transform">
              Find your dream apartment with our listing
            </p>
          </div>

          <div className="wrap-neighborhoods">
            {cities.map((location, index) => (
              <div
                key={location.city_slug || index}
                className={`box-location hover-img item-${(index % 8) + 1}`}
              >
                <div className="image-wrap">
                  <Link href={`/cities/${location.city_slug}`}>
                    <Image
                      className="lazyload"
                      alt={location.city}
                      src={location.imageSrc}
                      width={442}
                      height={426}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h6 className="text_white">{location.city}</h6>
                  <Link
                    href={`/cities/${location.city_slug}`}
                    className="text-1 tf-btn style-border pd-23 text_white"
                  >
                    {location.properties} Properties{" "}
                    <i className="icon-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {cities.length === 0 && (
            <div className="text-center">
              <p className="text-1">No cities found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}