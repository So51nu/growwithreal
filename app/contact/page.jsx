// import Brands from "@/components/common/Brands";
// import Cta from "@/components/common/Cta";
// import About from "@/components/contact/About";
// import Contact from "@/components/contact/Contact";
// import Footer1 from "@/components/footers/Footer1";
// import Header1 from "@/components/headers/Header1";
// import React from "react";

// export const metadata = {
//   title: "Contact || Growl City Realty React Nextjs Template",
//   description: "Growl City Realty React Nextjs Template",
// };
// export default function page() {
//   return (
//     <>
//       <div id="wrapper">
//         <Header1 />
//         <div className="main-content">
//           <Contact />
//           <About />
//           <Brands />
//           <Cta />
//         </div>
//         <Footer1 />
//       </div>
//     </>
//   );
// }


import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Contact Us || Growl City Realty ",
  description: "Contact Growl City Realty  for property enquiry and office location.",
};

export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <Contact />
        </div>

        <Footer1 />
      </div>
    </>
  );
}