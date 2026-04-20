"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { apiGet } from "../lib/api";

function groupByLetter(items) {
  const grouped = {};

  items.forEach((item) => {
    const first = (item.developer_name || "#").charAt(0).toUpperCase();
    const key = /^[A-Z]$/.test(first) ? first : "0-9";

    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(item);
  });

  return grouped;
}

export default function DeveloperDirectory() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const loadDevelopers = async () => {
      try {
        const res = await apiGet("/admindashboard/developers/");
        setDevelopers(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error("Developer directory fetch error:", error);
      }
    };

    loadDevelopers();
  }, []);

  const grouped = useMemo(() => groupByLetter(developers), [developers]);
  const alphabet = [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    "0-9",
  ].filter((letter) => grouped[letter]?.length);

  return (
    <section className="section-property-layout style-1">
      <div className="tf-container">
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
            <h2 className="title" style={{ marginBottom: 16 }}>{letter}</h2>
            <div className="tf-grid-layout md-col-2 xl-col-4">
              {grouped[letter].map((item, index) => (
                <div key={`${item.developer_slug}-${index}`} className="box-house style-6 none-overlay">
                  <div className="content" style={{ padding: "10px 0" }}>
                    <h6 className="title">
                      <Link href={`/developers/${item.developer_slug}`}>
                        {item.developer_name}
                      </Link>
                    </h6>
                    <p className="location text-1">
                      <Link href={`/cities/${item.city_slug}`}>
                        {item.city}
                      </Link>
                    </p>
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