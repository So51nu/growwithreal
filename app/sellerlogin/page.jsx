import SellerLogin from "@/components/contact/SellerLogin";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Source Manager Login || Growl City Realty",
  description: "Source Manager login page for Growl City Realty.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <SellerLogin />
        </div>

        <Footer1 />
      </div>
    </>
  );
}
