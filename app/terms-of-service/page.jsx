import TermsOfService from "@/components/contact/TermsOfService";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Terms of Service || Growl City Realty",
  description:
    "Read Growl City Realty Terms of Service for website usage, property information, eligibility, liability, and legal terms.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <TermsOfService />
        </div>

        <Footer1 />
      </div>
    </>
  );
}
