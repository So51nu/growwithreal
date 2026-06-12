import AccessibilityStatement from "@/components/contact/AccessibilityStatement";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Accessibility Statement || Growl City Realty",
  description: "Growl City Realty Accessibility Statement for website usability, responsive access, and assistive support.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <AccessibilityStatement />
        </div>

        <Footer1 />
      </div>
    </>
  );
}
