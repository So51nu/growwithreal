"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";

function normalizeBaseUrl(url) {
  const fallback = "http://127.0.0.1:8000";
  const raw = (url || fallback).trim().replace(/\/+$/, "");
  return raw.endsWith("/api") ? raw : `${raw}/api`;
}

const API_BASE = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/blog/`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to load blogs");
        }

        const data = await res.json();
        const list = Array.isArray(data) ? data : data.results || [];

        const mapped = list.slice(0, 9).map((item, index) => ({
          id: item.id || index + 1,
          title: item.title || "Blog Title",
          tag: item.category || "Blog",
          date: item.created_at
            ? new Date(item.created_at).toLocaleDateString()
            : "Recent",
          imgSrc: item.image || item.thumbnail || "/images/blog/blog-1.jpg",
          slug: item.slug || item.id || index + 1,
        }));

        setPosts(mapped);
      } catch (error) {
        console.error("Blog fetch error:", error);
        setPosts([]);
      }
    };

    loadBlogs();
  }, []);

  return (
    <section className="section-opinion ">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Insight & Opinion" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>

            <Swiper
              dir="ltr"
              className="swiper style-pagination sw-layout"
              breakpoints={{
                0: { slidesPerView: 1 },
                575: { slidesPerView: 2 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 40 },
              }}
              modules={[Pagination]}
              pagination={{
                el: ".spd3",
              }}
            >
              {posts.map((post) => (
                <SwiperSlide className="swiper-slide" key={post.id}>
                  <div className="blog-article-item style-2 hover-img">
                    <div className="image-wrap">
                      <Link href={`/blog-details/${post.slug}`}>
                        <Image
                          className="lazyload"
                          alt={post.title}
                          src={post.imgSrc}
                          width={600}
                          height={396}
                        />
                      </Link>
                      <div className="box-tag">
                        <div className="tag-item text-4 text_white fw-6">
                          {post.tag}
                        </div>
                      </div>
                    </div>
                    <div className="article-content">
                      <div className="time">
                        <div className="icons">
                          <i className="icon-clock" />
                        </div>
                        <p className="fw-5">{post.date}</p>
                      </div>
                      <h4 className="title">
                        <Link
                          href={`/blog-details/${post.slug}`}
                          className="line-clamp-2"
                        >
                          {post.title}
                        </Link>
                      </h4>
                      <Link
                        href={`/blog-details/${post.slug}`}
                        className="tf-btn-link"
                      >
                        <span>Read More</span> <i className="icon-circle-arrow" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center d-lg-none d-block mt-20 spd3"></div>
            </Swiper>

            {posts.length === 0 && (
              <div className="text-center mt-20">
                <p className="text-1">No blog posts found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}