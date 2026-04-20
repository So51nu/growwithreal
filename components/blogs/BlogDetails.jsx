"use client";

import React, { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
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

function renderBlock(block, index) {
  if (block.block_type === "heading") {
    return (
      <div className="wrap-content mb-20" key={index}>
        <h4 className="mb-18">{block.heading || block.content}</h4>
      </div>
    );
  }

  if (block.block_type === "paragraph") {
    return (
      <div className="wrap-content mb-20" key={index}>
        {block.heading ? <h4 className="mb-18">{block.heading}</h4> : null}
        <p>{block.content}</p>
      </div>
    );
  }

  if (block.block_type === "quote") {
    return (
      <div className="quote" key={index}>
        <p>{block.content}</p>
        {block.heading ? <p className="author">{block.heading}</p> : null}
      </div>
    );
  }

  if (block.block_type === "image" && block.image_url) {
    return (
      <div className="image-wrap mb-30" key={index}>
        <Image
          className="lazyload"
          alt={block.heading || "blog-image"}
          width={840}
          height={473}
          src={block.image_url}
        />
      </div>
    );
  }

  if (block.block_type === "video" && block.video_url) {
    return (
      <div className="image-wrap mb-30" key={index}>
        <video controls width="100%" style={{ borderRadius: "12px" }}>
          <source src={block.video_url} />
        </video>
      </div>
    );
  }

  if (block.block_type === "html") {
    return (
      <div
        key={index}
        className="wrap-content mb-20"
        dangerouslySetInnerHTML={{ __html: block.content || "" }}
      />
    );
  }

  return null;
}

export default function BlogDetails({ blog }) {
  const [categories, setCategories] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    const loadSidebar = async () => {
      try {
        const [categoriesRes, featuredRes] = await Promise.all([
          apiGet("/blog/categories/"),
          apiGet("/blog/?featured=1"),
        ]);

        setCategories(Array.isArray(categoriesRes) ? categoriesRes : []);
        setFeaturedBlogs(Array.isArray(featuredRes) ? featuredRes.slice(0, 5) : []);
      } catch (error) {
        console.error(error);
      }
    };

    loadSidebar();
  }, []);

  const allMedia = Array.isArray(blog?.media_items) ? blog.media_items : [];
  const images = allMedia.filter((item) => item.media_type === "image" && item.image_url);
  const videos = allMedia.filter((item) => item.media_type === "video" && item.video_url);

  return (
    <section className="section-blog-details">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="heading">
              <h2 className="title-heading">{blog.title}</h2>

              <div className="meta flex">
                <div className="meta-item flex align-center">
                  <p className="text-color-primary">{blog.author_name || "Admin"}</p>
                </div>

                <div className="meta-item flex align-center">
                  <p className="text-color-primary">{blog.category?.name || "Blog"}</p>
                </div>

                <div className="meta-item flex align-center">
                  <p>{Array.isArray(blog.comments) ? blog.comments.length : 0} comment</p>
                </div>

                <div className="meta-item flex align-center">
                  <p>{formatDate(blog.created_at || blog.published_at)}</p>
                </div>
              </div>
            </div>

            {blog.short_description ? (
              <p className="fw-5 text-color-heading mb-30">{blog.short_description}</p>
            ) : null}

            {blog.cover_image_url ? (
              <div className="image-wrap mb-30">
                <Image
                  className="lazyload"
                  alt={blog.title}
                  width={840}
                  height={473}
                  src={blog.cover_image_url}
                />
              </div>
            ) : null}

            {blog.cover_video_url ? (
              <div className="image-wrap mb-30">
                <video controls width="100%" style={{ borderRadius: "12px" }}>
                  <source src={blog.cover_video_url} />
                </video>
              </div>
            ) : null}

            {blog.content ? (
              <div className="wrap-content mb-20">
                <p>{blog.content}</p>
              </div>
            ) : null}

            {Array.isArray(blog.blocks) && blog.blocks.length > 0
              ? blog.blocks.map((block, index) => renderBlock(block, index))
              : null}

            {images.length > 0 ? (
              <div className="group-image" style={{ marginBottom: "30px" }}>
                {images.map((item) => (
                  <div className="image-wrap" key={item.id}>
                    <Image
                      className="lazyload"
                      alt={item.caption || "blog-image"}
                      width={410}
                      height={273}
                      src={item.image_url}
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {videos.length > 0 ? (
              <div style={{ display: "grid", gap: "20px", marginBottom: "30px" }}>
                {videos.map((item) => (
                  <div key={item.id}>
                    <video controls width="100%" style={{ borderRadius: "12px" }}>
                      <source src={item.video_url} />
                    </video>
                    {item.caption ? <p style={{ marginTop: "8px" }}>{item.caption}</p> : null}
                  </div>
                ))}
              </div>
            ) : null}

            <div className="tag-wrap flex justify-between items-center">
              <div className="tags">
                <p>Tags:</p>
                <div className="tags">
                  {Array.isArray(blog.tags) && blog.tags.length > 0 ? (
                    blog.tags.map((tag, index) => <a href="#" key={index}>{tag}</a>)
                  ) : (
                    <a href="#">Blog</a>
                  )}
                </div>
              </div>

              <div className="wrap-social">
                <p>Share this post:</p>
                <ul className="tf-social style-1">
                  <li><a href="#"><i className="icon-fb" /></a></li>
                  <li><a href="#"><i className="icon-X" /></a></li>
                  <li><a href="#"><i className="icon-linked" /></a></li>
                  <li><a href="#"><i className="icon-ins" /></a></li>
                </ul>
              </div>
            </div>

            <CommentSection blogSlug={blog.slug} initialComments={blog.comments || []} />
          </div>

          <div className="col-lg-4">
            <div className="tf-sidebar">
              <div className="sidebar-search sidebar-item">
                <h4 className="sidebar-title">Search Blog</h4>
                <form onSubmit={(e) => e.preventDefault()} className="form-search">
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Search"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
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
                <h4 className="sidebar-title">Featured Listings</h4>
                <ul>
                  {featuredBlogs.map((post) => (
                    <li key={post.id} className="box-listings hover-img">
                      <div className="image-wrap">
                        <Image
                          className="lazyload"
                          alt={post.title}
                          width={224}
                          height={148}
                          src={post.image || "/images/blog/blog-1.jpg"}
                        />
                      </div>
                      <div className="content">
                        <div className="text-1 title fw-5">
                          <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
                        </div>
                        <p>{formatDate(post.created_at)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-item sidebar-tags">
                <h4 className="sidebar-title">Popular Tags</h4>
                <ul className="tags-list">
                  {Array.isArray(blog.tags) && blog.tags.length > 0 ? (
                    blog.tags.map((tag, index) => (
                      <li key={index}>
                        <a href="#" className="tags-item">{tag}</a>
                      </li>
                    ))
                  ) : (
                    <li><a href="#" className="tags-item">Blog</a></li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}