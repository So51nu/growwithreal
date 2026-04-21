import BlogDetails from "@/components/blogs/BlogDetails";
import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

function normalizeBaseUrl(url) {
  const fallback = "http://127.0.0.1:8000";
  const raw = (url || fallback).trim().replace(/\/+$/, "");
  return raw.endsWith("/api") ? raw : `${raw}/api`;
}

const API_BASE = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);

async function getBlog(slug) {
  try {
    const response = await fetch(`${API_BASE}/blog/${slug}/`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Blog detail fetch error:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.id);

  return {
    title: blog?.meta_title || blog?.title || "Blog Details || Proty",
    description: blog?.meta_description || blog?.short_description || "Blog details page",
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const blog = await getBlog(id);

  return (
    <div id="wrapper">
      <Header1 />
      <div className="main-content">
        <Breadcumb pageName={blog?.title || "Blog Details"} />

        {blog ? (
          <BlogDetails blog={blog} />
        ) : (
          <section className="section-blog-details">
            <div className="tf-container">
              <div style={{ padding: "70px 0", textAlign: "center" }}>
                <h2 style={{ marginBottom: "12px" }}>Blog not found</h2>
                <p style={{ margin: 0 }}>
                  Please check whether this blog is published and the slug is correct.
                </p>
              </div>
            </div>
          </section>
        )}

        <Cta />
      </div>
      <Footer1 />
    </div>
  );
}