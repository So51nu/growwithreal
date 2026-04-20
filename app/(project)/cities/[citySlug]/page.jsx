// // import Footer1 from "@/components/footers/Footer1";
// // import Header1 from "@/components/headers/Header1";
// // import Cta from "@/components/common/Cta";
// // import CityProjectsPage from "@/components/projects/CityProjectsPage";
// // import React from "react";

// // export default async function page({ params }) {
// //   const { citySlug } = await params;

// //   return (
// //     <div id="wrapper" className="counter-scroll">
// //       <Header1 />
// //       <div className="main-content">
// //         <CityProjectsPage citySlug={citySlug} />
// //         <Cta />
// //       </div>
// //       <Footer1 />
// //     </div>
// //   );
// // }


// import Footer1 from "@/components/footers/Footer1";
// import Header1 from "@/components/headers/Header1";
// import Cta from "@/components/common/Cta";
// import CityProjectsPage from "@/components/projects/CityProjectsPage";
// import React from "react";

// export default function Page({ params }) {
//   const { citySlug } = params;

//   return (
//     <div id="wrapper" className="counter-scroll">
//       <Header1 />
//       <div className="main-content">
//         <CityProjectsPage citySlug={citySlug} />
//         <Cta />
//       </div>
//       <Footer1 />
//     </div>
//   );
// }

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cta from "@/components/common/Cta";
import CityProjectsPage from "@/components/projects/CityProjectsPage";
import React from "react";

export default async function Page({ params }) {
  const { citySlug } = await params;

  return (
    <div id="wrapper" className="counter-scroll">
      <Header1 />
      <div className="main-content">
        <CityProjectsPage citySlug={citySlug} />
        <Cta />
      </div>
      <Footer1 />
    </div>
  );
}