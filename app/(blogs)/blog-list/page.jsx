import Blogs1 from "@/components/blogs/Blogs1";
import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React, { Suspense } from "react";

export const metadata = {
  title: "Blog List || Growl",
  description: "Blog listing page",
};

export default function Page() {
  return (
    <div id="wrapper">
      <Header1 />
      <div className="main-content">
        <Breadcumb pageName="Blog List" />

        <Suspense fallback={<div>Loading blogs...</div>}>
          <Blogs1 />
        </Suspense>

        <Cta />
      </div>
      <Footer1 />
    </div>
  );
}