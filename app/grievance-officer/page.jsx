import GrievanceOfficer from "@/components/contact/GrievanceOfficer";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Grievance Officer || Growl City Realty",
  description: "Growl City Realty Grievance Officer contact details and complaint resolution process.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <GrievanceOfficer />
        </div>

        <Footer1 />
      </div>
    </>
  );
}
