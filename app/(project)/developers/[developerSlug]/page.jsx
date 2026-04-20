// // import Footer1 from "@/components/footers/Footer1";
// // import Header1 from "@/components/headers/Header1";
// // import Cta from "@/components/common/Cta";
// // import DeveloperProjectsPage from "@/components/projects/DeveloperProjectsPage";
// // import React from "react";

// // export default async function page({ params }) {
// //   const { developerSlug } = await params;

// //   return (
// //     <div id="wrapper" className="counter-scroll">
// //       <Header1 />
// //       <div className="main-content">
// //         <DeveloperProjectsPage developerSlug={developerSlug} />
// //         <Cta />
// //       </div>
// //       <Footer1 />
// //     </div>
// //   );
// // }


// import Footer1 from "@/components/footers/Footer1";
// import Header1 from "@/components/headers/Header1";
// import Cta from "@/components/common/Cta";
// import DeveloperProjectsPage from "@/components/projects/DeveloperProjectsPage";
// import React from "react";

// export default function Page({ params }) {
//   const { developerSlug } = params;

//   return (
//     <div id="wrapper" className="counter-scroll">
//       <Header1 />
//       <div className="main-content">
//         <DeveloperProjectsPage developerSlug={developerSlug} />
//         <Cta />
//       </div>
//       <Footer1 />
//     </div>
//   );
// }


import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cta from "@/components/common/Cta";
import DeveloperProjectsPage from "@/components/projects/DeveloperProjectsPage";
import React from "react";

export default async function Page({ params }) {
  const { developerSlug } = await params;

  return (
    <div id="wrapper" className="counter-scroll">
      <Header1 />
      <div className="main-content">
        <DeveloperProjectsPage developerSlug={developerSlug} />
        <Cta />
      </div>
      <Footer1 />
    </div>
  );
}