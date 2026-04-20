// import Footer1 from "@/components/footers/Footer1";
// import Header1 from "@/components/headers/Header1";
// import Breadcumb from "@/components/common/Breadcumb";
// import Cta from "@/components/common/Cta";
// import Details1 from "@/components/propertyDetails/Details1";
// import RelatedProperties from "@/components/propertyDetails/RelatedProperties";
// import Slider1 from "@/components/propertyDetails/sliders/Slider1";
// import React from "react";

// function normalizeBaseUrl(url) {
//   const fallback = "http://127.0.0.1:8000";
//   const raw = (url || fallback).trim().replace(/\/+$/, "");
//   return raw.endsWith("/api") ? raw : `${raw}/api`;
// }

// async function getProperty(id) {
//   try {
//     const base = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);

//     const res = await fetch(`${base}/admindashboard/properties/${id}/`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       console.error("Property detail fetch failed:", res.status);
//       return null;
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Property detail fetch error:", error);
//     return null;
//   }
// }

// export default async function Page({ params }) {
//   const property = await getProperty(params.id);

//   if (!property) {
//     return (
//       <div id="wrapper">
//         <Header1 />
//         <Breadcumb pageName="Property Details" />
//         <div className="main-content">
//           <div className="tf-container" style={{ padding: "60px 0" }}>
//             <h3>Property not found</h3>
//           </div>
//           <Cta />
//         </div>
//         <Footer1 />
//       </div>
//     );
//   }

//   return (
//     <div id="wrapper">
//       <Header1 />
//       <Breadcumb pageName={property.title || "Property Details"} />
//       <div className="main-content">
//         <Slider1 property={property} />
//         <Details1 property={property} />
//         <RelatedProperties property={property} />
//         <Cta />
//       </div>
//       <Footer1 />
//     </div>
//   );
// }

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";
import Details1 from "@/components/propertyDetails/Details1";
import RelatedProperties from "@/components/propertyDetails/RelatedProperties";
import Slider1 from "@/components/propertyDetails/sliders/Slider1";
import React from "react";

function normalizeBaseUrl(url) {
  const fallback = "http://127.0.0.1:8000";
  const raw = (url || fallback).trim().replace(/\/+$/, "");
  return raw.endsWith("/api") ? raw : `${raw}/api`;
}

async function getProperty(id) {
  try {
    const base = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);

    const res = await fetch(`${base}/admindashboard/properties/${id}/`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Property detail fetch failed:", res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Property detail fetch error:", error);
    return null;
  }
}

export default async function Page({ params }) {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) {
    return (
      <div id="wrapper">
        <Header1 />
        <Breadcumb pageName="Property Details" />
        <div className="main-content">
          <div className="tf-container" style={{ padding: "60px 0" }}>
            <h3>Property not found</h3>
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