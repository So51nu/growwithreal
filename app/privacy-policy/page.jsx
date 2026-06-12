import PrivacyPolicy from "@/components/contact/PrivacyPolicy";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Privacy Policy || Growl City Realty",
  description:
    "Read Growl City Realty Privacy Policy to understand how we collect, use, protect, and manage user information.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <PrivacyPolicy />
        </div>

        <Footer1 />
      </div>
    </>
  );
}
