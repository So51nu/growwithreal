import Cta from "@/components/common/Cta";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import PageTitle from "@/components/projects/PageTitle";
import DeveloperDirectory from "@/components/projects/DeveloperDirectory";
import React from "react";

export default function page() {
  return (
    <>
      <div id="wrapper" className="counter-scroll">
        <Header1 />
        <PageTitle />
        <div className="main-content">
          <DeveloperDirectory />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}