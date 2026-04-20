import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cta from "@/components/common/Cta";
import CityDirectory from "@/components/projects/CityDirectory";
import React from "react";

export default function Page() {
  return (
    <div id="wrapper" className="counter-scroll">
      <Header1 />
      <div className="main-content">
        <CityDirectory />
        <Cta />
      </div>
      <Footer1 />
    </div>
  );
}