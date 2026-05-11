import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";
import Details1 from "@/components/propertyDetails/Details1";
import RelatedProperties from "@/components/propertyDetails/RelatedProperties";
import Slider1 from "@/components/propertyDetails/sliders/Slider1";
import React from "react";

function normalizeBaseUrl(url) {
  const fallback = "https://growlbackend.clickconnectmedia.cloud";
  const raw = (url || fallback).trim().replace(/\/+$/, "");
  return raw.endsWith("/api") ? raw : `${raw}/api`;
}

async function getPropertyBySlug(slug) {
  try {
    const base = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);

    const res = await fetch(
      `${base}/admindashboard/properties/slug/${slug}/`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Property slug detail fetch failed:", res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Property slug detail fetch error:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  return {
    title: property?.title
      ? `${property.title} | Growl Real Estate`
      : "Property Details | Growl Real Estate",
    description:
      property?.description ||
      property?.short_location ||
      "Explore property details with Growl Real Estate.",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    return (
      <div id="wrapper">
        <Header1 />
        <Breadcumb pageName="Property Details" />
        <div className="main-content">
          <div className="tf-container" style={{ padding: "60px 0" }}>
            <h3>Property not found</h3>
            <p>Please check the property URL or go back to listings.</p>
          </div>
          <Cta />
        </div>
        <Footer1 />
      </div>
    );
  }

  return (
    <div id="wrapper">
      <Header1 />
      <Breadcumb pageName={property.title || "Property Details"} />
      <div className="main-content">
        <Slider1 property={property} />
        <Details1 property={property} />
        <RelatedProperties property={property} />
        <Cta />
      </div>
      <Footer1 />
    </div>
  );
}