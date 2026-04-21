"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { apiGet } from "../lib/api";
import { useSearchParams } from "next/navigation";

function formatDate(date) {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return date;
  }
}

export default function Blogs1() {
  const searchParams = useSearchParams();

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const category = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const loadData = async () => {
      try {
        const query = new URLSearchParams();

        if (searchQuery) query.append("search", searchQuery);
        if (category) query.append("category", category);

        const [blogsRes, categoriesRes, featuredRes] = await Promise.all([
          apiGet(`/blog/${query.toString() ? `?${query.toString()}` : ""}`),
          apiGet("/blog/categories/"),
          apiGet("/blog/?featured=1"),
        ]);

        setBlogs(Array.isArray(blogsRes) ? blogsRes : []);
        setCategories(Array.isArray(categoriesRes) ? categoriesRes : []);
        setFeaturedBlogs(Array.isArray(featuredRes) ? featuredRes.slice(0, 5) : []);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, [category, searchQuery]);

  return (
    <section className="section-blog-list">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="left">
              <div className="box-title">
                <h2>Blog List</h2>
              </div>

              <div className="wrap-blog-list">
                {blogs.length > 0 ? (
                  blogs.map((post) => (
                    <div key={post.id} className="blog-article-item style-row hover-img">
                      <div className="article-thumb image-wrap">
                        <Image
                          className="lazyload"
                          alt={post.title}
                          width={1260}
                          height={710}
                          src={post.image || "/images/blog/blog-1.jpg"}
                        />
                      </div>

                      <div className="article-content">
                        <div className="time">
                          <div className="icons">
                            <i className="icon-clock" />
                          </div>
                          <p className="fw-5">{formatDate(post.published_at || post.created_at)}</p>
                        </div>

                        <h4 className="title">
                          <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
                        </h4>

                        <p className="description text-1">{post.short_description}</p>

                        <Link href={`/blog-details/${post.slug}`} className="tf-btn-link">
                          <span>Read More</span>
                          <i className="icon-circle-arrow" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No blogs found.</p>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tf-sidebar">
              <div className="sidebar-search sidebar-item">
                <h4 className="sidebar-title">Search Blog</h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const url = search.trim()
                      ? `/blog-list?search=${encodeURIComponent(search.trim())}`
                      : "/blog-list";
                    window.location.href = url;
                  }}
                  className="form-search"
                >
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </fieldset>
                  <div className="button-submit">
                    <button type="submit">
                      <i className="icon-MagnifyingGlass" />
                    </button>
                  </div>
                </form>
              </div>

              <div className="sidebar-item sidebar-categories">
                <h4 className="sidebar-title">Categories</h4>
                <ul className="list-categories">
                  {categories.map((item) => (
                    <li className="flex items-center justify-between" key={item.id}>
                      <Link href={`/blog-list?category=${item.slug}`} className="text-1 lh-20 fw-5">
                        {item.name}
                      </Link>
                      <div className="number">({item.posts_count})</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-item sidebar-featured pb-36">
                <h4 className="sidebar-title">Featured Posts</h4>
                <ul>
                  {featuredBlogs.map((item) => (
                    <li key={item.id} className="box-listings hover-img">
                      <div className="image-wrap">
                        <Image
                          className="lazyload"
                          alt={item.title}
                          width={224}
                          height={148}
                          src={item.image || "/images/blog/blog-1.jpg"}
                        />
                      </div>
                      <div className="content">
                        <div className="text-1 title fw-5">
                          <Link href={`/blog-details/${item.slug}`}>{item.title}</Link>
                        </div>
                        <p>{formatDate(item.published_at || item.created_at)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-item sidebar-tags">
                <h4 className="sidebar-title mb-18">Popular Tags</h4>
                <ul className="tags-list">
                  <li><span className="tags-item">Property</span></li>
                  <li><span className="tags-item">Office</span></li>
                  <li><span className="tags-item">Finance</span></li>
                  <li><span className="tags-item">Legal</span></li>
                  <li><span className="tags-item">Market</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}