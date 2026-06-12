import WhistleBlowerPolicy from "@/components/contact/WhistleBlowerPolicy";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Whistleblower Policy || Growl City Realty",
  description: "Growl City Realty Whistleblower Policy for confidential reporting and compliance concerns.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <WhistleBlowerPolicy />
        </div>

        <Footer1 />
      </div>
    </>
  );
}
