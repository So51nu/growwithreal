import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cta from "@/components/common/Cta";
import DeveloperDirectory from "@/components/projects/DeveloperDirectory";
import React from "react";

export default function Page() {
  return (
    <div id="wrapper" className="counter-scroll">
      <Header1 />
      <div className="main-content">
        <DeveloperDirectory />
        <Cta />
      </div>
      <Footer1 />
    </div>
  );
}