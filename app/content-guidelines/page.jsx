import ContentGuidelines from "@/components/contact/ContentGuidelines";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Content Guidelines || Growl City Realty",
  description: "Growl City Realty Content Guidelines legal statement for website content, property listings, compliance, intellectual property, and liability.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <ContentGuidelines />
        </div>

        <Footer1 />
      </div>
    </>
  );
}
