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
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadDevelopers = async () => {
      try {
        const res = await apiGet("/admindashboard/developers/");
        setDevelopers(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error("Developer directory fetch error:", error);
        setDevelopers([]);
      }
    };

    loadDevelopers();
  }, []);

  const filteredDevelopers = useMemo(() => {
    if (!search.trim()) return developers;
    const term = search.trim().toLowerCase();

    return developers.filter((item) =>
      [
        item.developer_name,
        item.city,
        item.city_slug,
        item.developer_slug,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [developers, search]);

  const grouped = useMemo(
    () => groupByLetter(filteredDevelopers),
    [filteredDevelopers]
  );

  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), "0-9"].filter(
    (letter) => grouped[letter]?.length
  );

  return (
    <section className="section-property-layout style-1">
      <div className="tf-container">
        <div style={{ marginBottom: 24 }}>
          <h2 className="title">Developers</h2>
          <p className="text-1">Browse all developers</p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search developer or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
            style={{
              width: "100%",
              minHeight: "54px",
              borderRadius: "12px",
              padding: "12px 16px",
              border: "1px solid #d9d9d9",
            }}
          />
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
                <div
                  key={`${item.developer_slug || item.developer_name}-${index}`}
                  className="box-house style-6 none-overlay"
                >
                  <div className="content" style={{ padding: "10px 0" }}>
                    <h6 className="title">
                      <Link href={`/developers/${item.developer_slug}`}>
                        {item.developer_name}
                      </Link>
                    </h6>

                    {item.city && item.city_slug && (
                      <p className="location text-1">
                        <Link href={`/cities/${item.city_slug}`}>{item.city}</Link>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredDevelopers.length === 0 && <p>No developers found.</p>}
      </div>
    </section>
  );
}