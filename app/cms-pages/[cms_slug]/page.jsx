import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { notFound } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";

const getApiBaseUrl = () => {
  const rawBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "https://backendgrowl.growlcityrealty.in";

  return rawBaseUrl.replace(/\/$/, "");
};

const getCmsPageApiUrl = (cmsSlug) => {
  const baseUrl = getApiBaseUrl();

  // If your env already ends with /api, this prevents /api/api duplication.
  if (baseUrl.endsWith("/api")) {
    return `${baseUrl}/cms_pages/${cmsSlug}/`;
  }

  return `${baseUrl}/api/cms_pages/${cmsSlug}/`;
};

async function getCmsPage(cmsSlug) {
  try {
    const response = await fetch(getCmsPageApiUrl(cmsSlug), {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("CMS page fetch error:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const cmsSlug = params?.cms_slug;
  const page = await getCmsPage(cmsSlug);

  if (!page) {
    return {
      title: "Page Not Found || Growl City Realty",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: page.meta_title || `${page.title} || Growl City Realty`,
    description: page.meta_description || `${page.title} - Growl City Realty`,
    keywords: page.meta_keywords || undefined,
  };
}

export default async function CmsDynamicPage({ params }) {
  const cmsSlug = params?.cms_slug;
  const page = await getCmsPage(cmsSlug);

  if (!page) {
    notFound();
  }

  return (
    <div id="wrapper">
      <Header1 />

      <main className="main-content cms-dynamic-page">
        <div
          dangerouslySetInnerHTML={{
            __html: page.html_content || "",
          }}
        />
      </main>

      <Footer1 />
    </div>
  );
}
