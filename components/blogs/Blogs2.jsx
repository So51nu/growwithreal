"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { apiGet } from "../lib/api";

function formatDate(date) {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return date;
  }
}

export default function Blogs2() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await apiGet("/blog/");
        setBlogs(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error(error);
      }
    };

    loadBlogs();
  }, []);

  return (
    <section className="section-blog-grid">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="box-title">
              <h2>Blog grid</h2>
              <div className="group-layout">
                <a href="#" className="btn-layout grid active">Grid</a>
                <a href="#" className="btn-layout list">List</a>
              </div>
            </div>

            <div className="grid-layout-3">
              {blogs.map((post) => (
                <div key={post.id} className="blog-article-item style-2">
                  <div className="image-wrap">
                    <Image
                      className="lazyload"
                      alt={post.title}
                      width={600}
                      height={396}
                      src={post.image || "/images/blog/blog-1.jpg"}
                    />
                    <div className="box-tag">
                      <div className="tag-item text-4 text_white fw-6">
                        {post.category || "Blog"}
                      </div>
                    </div>
                  </div>

                  <div className="article-content">
                    <div className="time">
                      <div className="icons">
                        <i className="icon-clock" />
                      </div>
                      <p className="fw-5">{formatDate(post.created_at)}</p>
                    </div>

                    <h4 className="title line-clamp-3">
                      <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <Link href={`/blog-details/${post.slug}`} className="tf-btn-link">
                      <span>Read More</span>
                      <i className="icon-circle-arrow" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}