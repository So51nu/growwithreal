import Careers from "@/components/contact/Careers";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Careers || Growl City Realty",
  description: "Current openings at Growl City Realty with online application and resume upload.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <Careers />
        </div>

        <Footer1 />
      </div>
    </>
  );
}
