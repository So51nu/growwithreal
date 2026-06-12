import JoinOurTeam from "@/components/contact/JoinOurTeam";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Join Our Team || Growl City Realty",
  description: "Join the Happy Growl Family at Growl City Realty and explore our work culture.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <JoinOurTeam />
        </div>

        <Footer1 />
      </div>
    </>
  );
}
