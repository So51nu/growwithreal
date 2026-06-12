import HRCompliancePolicy from "@/components/contact/HRCompliancePolicy";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "HR Compliance Policy || Growl City Realty",
  description:
    "Growl City Realty HR Compliance Policy with current openings, application form, resume upload, equal opportunity, and workplace compliance details.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <HRCompliancePolicy />
        </div>

        <Footer1 />
      </div>
    </>
  );
}
