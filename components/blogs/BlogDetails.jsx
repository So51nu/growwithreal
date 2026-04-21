"use client";

import React, { useEffect, useMemo, useState } from "react";
import CommentSection from "./CommentSection";
import RelatedBlogs from "./RelatedBlogs";
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

function getVideoType(url = "") {
  const lower = url.toLowerCase();
  if (lower.endsWith(".mp4")) return "video/mp4";
  if (lower.endsWith(".webm")) return "video/webm";
  if (lower.endsWith(".ogg")) return "video/ogg";
  if (lower.endsWith(".mov")) return "video/quicktime";
  return undefined;
}

function TextContent({ text }) {
  if (!text) return null;

  return (
    <div
      style={{
        whiteSpace: "pre-line",
        lineHeight: "1.9",
        fontSize: "16px",
        color: "#555",
      }}
    >
      {text}
    </div>
  );
}

function BlockRenderer({ block, index }) {
  if (!block) return null;

  const hasHeading = Boolean(block.heading);
  const hasContent = Boolean(block.content);
  const hasImage = Boolean(block.image_url);
  const hasVideo = Boolean(block.video_url);

  return (
    <div
      key={block.id || index}
      className="blog-block-item"
      style={{
        marginBottom: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {/* Special heading style if block type is heading */}
      {block.block_type === "heading" ? (
        <h3
          style={{
            margin: 0,
            lineHeight: "1.4",
          }}
        >
          {block.heading || block.content}
        </h3>
      ) : null}

      {/* Normal heading for other block types */}
      {block.block_type !== "heading" && hasHeading ? (
        <h4
          style={{
            margin: 0,
            lineHeight: "1.5",
          }}
        >
          {block.heading}
        </h4>
      ) : null}

      {/* Quote block */}
      {block.block_type === "quote" && hasContent ? (
        <div
          style={{
            padding: "24px",
            borderLeft: "4px solid #e5e7eb",
            background: "#fafafa",
            borderRadius: "14px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "17px",
              lineHeight: "1.9",
              fontStyle: "italic",
              color: "#333",
            }}
          >
            {block.content}
          </p>
        </div>
      ) : null}

      {/* HTML block */}
      {block.block_type === "html" && hasContent ? (
        <div
          style={{
            lineHeight: "1.9",
            color: "#555",
          }}
          dangerouslySetInnerHTML={{ __html: block.content || "" }}
        />
      ) : null}

      {/* Paragraph / image / video / generic content */}
      {block.block_type !== "quote" &&
      block.block_type !== "html" &&
      block.block_type !== "heading" &&
      hasContent ? (
        <TextContent text={block.content} />
      ) : null}

      {/* Even if block_type is image/video/paragraph, show image if present */}
      {hasImage ? (
        <div className="image-wrap">
          <Image
            alt={block.heading || `blog-block-image-${index}`}
            width={1200}
            height={700}
            src={block.image_url}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ) : null}

      {/* Even if block_type is paragraph/image/video, show video if present */}
      {hasVideo ? (
        <div className="image-wrap">
          <video
            controls
            preload="metadata"
            playsInline
            style={{
              width: "100%",
              borderRadius: "16px",
              display: "block",
              background: "#000",
            }}
          >
            <source src={block.video_url} type={getVideoType(block.video_url)} />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
    </div>
  );
}

export default function BlogDetails({ blog }) {
  const [categories, setCategories] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");

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
        console.error("Sidebar load error:", error);
      }
    };

    loadSidebar();
  }, []);

  const allMedia = useMemo(() => {
    return Array.isArray(blog?.media_items) ? blog.media_items : [];
  }, [blog]);

  const mediaImages = useMemo(() => {
    return allMedia.filter((item) => item?.media_type === "image" && item?.image_url);
  }, [allMedia]);

  const mediaVideos = useMemo(() => {
    return allMedia.filter((item) => item?.media_type === "video" && item?.video_url);
  }, [allMedia]);

  const blocks = useMemo(() => {
    return Array.isArray(blog?.blocks) ? blog.blocks : [];
  }, [blog]);

  const commentsCount = Array.isArray(blog?.comments) ? blog.comments.length : 0;

  return (
    <>
      <section className="section-blog-details">
        <div className="tf-container">
          <div className="row" style={{ rowGap: "40px" }}>
            <div className="col-lg-8">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {/* Header */}
                <div className="heading">
                  <h2
                    className="title-heading"
                    style={{
                      marginBottom: "16px",
                      lineHeight: "1.3",
                    }}
                  >
                    {blog?.title || "Blog Details"}
                  </h2>

                  <div
                    className="meta flex"
                    style={{
                      flexWrap: "wrap",
                      gap: "12px 18px",
                    }}
                  >
                    <div className="meta-item flex align-center">
                      <p className="text-color-primary" style={{ marginBottom: 0 }}>
                        {blog?.author_name || "Admin"}
                      </p>
                    </div>

                    <div className="meta-item flex align-center">
                      <p className="text-color-primary" style={{ marginBottom: 0 }}>
                        {blog?.category?.name || "Blog"}
                      </p>
                    </div>

                    <div className="meta-item flex align-center">
                      <p style={{ marginBottom: 0 }}>
                        {commentsCount} {commentsCount === 1 ? "Comment" : "Comments"}
                      </p>
                    </div>

                    <div className="meta-item flex align-center">
                      <p style={{ marginBottom: 0 }}>
                        {formatDate(blog?.published_at || blog?.created_at)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                {blog?.short_description ? (
                  <div
                    style={{
                      padding: "18px 20px",
                      borderRadius: "14px",
                      background: "#f8f8f8",
                    }}
                  >
                    <p
                      style={{
                        marginBottom: 0,
                        lineHeight: "1.8",
                        fontSize: "16px",
                        color: "#444",
                        fontWeight: 500,
                      }}
                    >
                      {blog.short_description}
                    </p>
                  </div>
                ) : null}

                {/* Cover Image */}
                {blog?.cover_image_url ? (
                  <div className="image-wrap">
                    <Image
                      alt={blog?.title || "blog-cover"}
                      width={1200}
                      height={700}
                      src={blog.cover_image_url}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "18px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ) : null}

                {/* Cover Video */}
                {blog?.cover_video_url ? (
                  <div className="image-wrap">
                    <video
                      controls
                      preload="metadata"
                      playsInline
                      style={{
                        width: "100%",
                        borderRadius: "18px",
                        display: "block",
                        background: "#000",
                      }}
                    >
                      <source
                        src={blog.cover_video_url}
                        type={getVideoType(blog.cover_video_url)}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : null}

                {/* Main Content */}
                {blog?.content ? (
                  <div className="wrap-content">
                    <TextContent text={blog.content} />
                  </div>
                ) : null}

                {/* Blocks */}
                {blocks.length > 0 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0",
                    }}
                  >
                    <h4 style={{ marginBottom: "14px" }}>Blog Sections</h4>
                    {blocks.map((block, index) => (
                      <BlockRenderer block={block} index={index} key={block.id || index} />
                    ))}
                  </div>
                ) : null}

                {/* Media Images */}
                {mediaImages.length > 0 ? (
                  <div>
                    <h4 style={{ marginBottom: "18px" }}>Blog Media Images</h4>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "20px",
                      }}
                    >
                      {mediaImages.map((item) => (
                        <div key={item.id}>
                          <Image
                            alt={item.caption || "blog-media-image"}
                            width={800}
                            height={500}
                            src={item.image_url}
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "16px",
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                          {item.caption ? (
                            <p
                              style={{
                                marginTop: "10px",
                                marginBottom: 0,
                                fontSize: "14px",
                                color: "#666",
                              }}
                            >
                              {item.caption}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* Media Videos */}
                {mediaVideos.length > 0 ? (
                  <div>
                    <h4 style={{ marginBottom: "18px" }}>Blog Media Videos</h4>
                    <div
                      style={{
                        display: "grid",
                        gap: "22px",
                      }}
                    >
                      {mediaVideos.map((item) => (
                        <div key={item.id}>
                          <video
                            controls
                            preload="metadata"
                            playsInline
                            style={{
                              width: "100%",
                              borderRadius: "16px",
                              display: "block",
                              background: "#000",
                            }}
                          >
                            <source
                              src={item.video_url}
                              type={getVideoType(item.video_url)}
                            />
                            Your browser does not support the video tag.
                          </video>
                          {item.caption ? (
                            <p
                              style={{
                                marginTop: "10px",
                                marginBottom: 0,
                                fontSize: "14px",
                                color: "#666",
                              }}
                            >
                              {item.caption}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p style={{ marginBottom: 0, fontWeight: 600 }}>Tags:</p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    {Array.isArray(blog?.tags) && blog.tags.length > 0 ? (
                      blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "8px 14px",
                            borderRadius: "999px",
                            background: "#f3f3f3",
                            fontSize: "14px",
                            lineHeight: 1,
                          }}
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "8px 14px",
                          borderRadius: "999px",
                          background: "#f3f3f3",
                          fontSize: "14px",
                          lineHeight: 1,
                        }}
                      >
                        Blog
                      </span>
                    )}
                  </div>
                </div>

                {/* Comments */}
                <CommentSection blogSlug={blog?.slug} initialComments={blog?.comments || []} />
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="tf-sidebar"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div className="sidebar-search sidebar-item">
                  <h4 className="sidebar-title">Search Blog</h4>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const value = searchText.trim();
                      if (value) {
                        window.location.href = `/blog-list?search=${encodeURIComponent(value)}`;
                      }
                    }}
                    className="form-search"
                  >
                    <fieldset>
                      <input
                        type="text"
                        placeholder="Search"
                        name="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
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
                    {featuredBlogs.map((post) => (
                      <li key={post.id} className="box-listings hover-img">
                        <div className="image-wrap">
                          <Image
                            alt={post.title}
                            width={224}
                            height={148}
                            src={post.image || "/images/blog/blog-1.jpg"}
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "12px",
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                        </div>
                        <div className="content">
                          <div className="text-1 title fw-5">
                            <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
                          </div>
                          <p>{formatDate(post.created_at || post.published_at)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-item sidebar-tags">
                  <h4 className="sidebar-title">Popular Tags</h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    {Array.isArray(blog?.tags) && blog.tags.length > 0 ? (
                      blog.tags.map((tag, index) => (
                        <span key={index} className="tags-item">
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="tags-item">Blog</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedBlogs blogSlug={blog?.slug} />
    </>
  );
}