"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { apiGet } from "../lib/api";

function formatDate(date) {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return date;
  }
}

export default function RelatedBlogs({ blogSlug }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadRelated = async () => {
      if (!blogSlug) return;

      try {
        const res = await apiGet(`/blog/related/${blogSlug}/`);
        setBlogs(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error("Related blogs fetch error:", error);
      }
    };

    loadRelated();
  }, [blogSlug]);

  if (!blogs.length) return null;

  return (
    <section className="section-related-posts">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <h4 className="heading">Related Posts</h4>

            <Swiper
              dir="ltr"
              className="swiper style-pagination sw-layout"
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                575: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 24 },
              }}
              modules={[Pagination]}
              pagination={{ el: ".spd1" }}
            >
              {blogs.map((article) => (
                <SwiperSlide className="swiper-slide" key={article.id}>
                  <div className="blog-article-item style-2 hover-img">
                    <div className="image-wrap">
                      <Link href={`/blog-details/${article.slug}`}>
                        <Image
                          alt={article.title}
                          width={600}
                          height={396}
                          src={article.image || "/images/blog/blog-1.jpg"}
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "14px",
                            objectFit: "cover",
                          }}
                        />
                      </Link>

                      <div className="box-tag">
                        <div className="tag-item text-4 text_white fw-6">
                          {article.category || "Blog"}
                        </div>
                      </div>
                    </div>

                    <div className="article-content">
                      <div className="time">
                        <div className="icons">
                          <i className="icon-clock" />
                        </div>
                        <p className="fw-5">{formatDate(article.published_at || article.created_at)}</p>
                      </div>

                      <h4 className="title">
                        <Link href={`/blog-details/${article.slug}`} className="line-clamp-2">
                          {article.title}
                        </Link>
                      </h4>

                      <Link href={`/blog-details/${article.slug}`} className="tf-btn-link">
                        <span>Read More</span>
                        <i className="icon-circle-arrow" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center d-lg-none d-block mt-20 spd1" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}