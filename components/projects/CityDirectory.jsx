"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { apiGet } from "../lib/api";

function groupByLetter(items) {
  const grouped = {};

  items.forEach((item) => {
    const first = (item.city || "#").charAt(0).toUpperCase();
    const key = /^[A-Z]$/.test(first) ? first : "0-9";

    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(item);
  });

  return grouped;
}

export default function CityDirectory() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const res = await apiGet("/admindashboard/cities/");
        setCities(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error("City directory fetch error:", error);
      }
    };

    loadCities();
  }, []);

  const grouped = useMemo(() => groupByLetter(cities), [cities]);

  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), "0-9"].filter(
    (letter) => grouped[letter]?.length
  );

  return (
    <section className="section-property-layout style-1">
      <div className="tf-container">
        <div style={{ marginBottom: 24 }}>
          <h2 className="title">Cities</h2>
          <p className="text-1">Browse all available cities</p>
        </div>

        <div className="wrap-pagination" style={{ marginBottom: 24 }}>
          <ul className="wg-pagination" style={{ flexWrap: "wrap" }}>
            {alphabet.map((letter) => (
              <li key={letter}>
                <a href={`#letter-${letter}`}>{letter}</a>
              </li>
            ))}
          </ul>
        </div>

        {alphabet.map((letter) => (
          <div key={letter} id={`letter-${letter}`} style={{ marginBottom: 40 }}>
            <h2 className="title" style={{ marginBottom: 16 }}>
              {letter}
            </h2>

            <div className="tf-grid-layout md-col-2 xl-col-4">
              {grouped[letter].map((item, index) => (
                <div key={`${item.city_slug}-${index}`} className="box-house style-6 none-overlay">
                  <div className="content" style={{ padding: "10px 0" }}>
                    <h6 className="title">
                      <Link href={`/cities/${item.city_slug}`}>
                        {item.city}
                      </Link>
                    </h6>

                    {item.properties_count !== undefined && (
                      <p className="location text-1">
                        {item.properties_count} project
                        {item.properties_count === 1 ? "" : "s"}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}