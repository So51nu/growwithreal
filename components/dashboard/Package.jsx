// import React from "react";
// import Link from "next/link";
// export default function Package() {
//   return (
//     <div className="main-content w-100">
//       <div className="main-content-inner style-3">
//         <div className="button-show-hide show-mb">
//           <span className="body-1">Show Dashboard</span>
//         </div>
//         <div className="widget-box-2 style-2 package">
//           <h3 className="title">My Package</h3>
//           <div className="flat-pricing">
//             <div className="box box-style">
//               <h3 className="sub-title fw-7">Basic</h3>
//               <p className="text-sub fw-6">
//                 Automatically reach potential customers
//               </p>
//               <div className="title-price flex">
//                 <h2>$19</h2>
//                 <div className="month fw-7">/ month</div>
//               </div>
//               <p className="texts">Per month, per company or team members</p>
//               <ul className="check">
//                 <li className="flex-three">Listing free</li>
//                 <li className="flex-three">Support 24/7</li>
//                 <li className="flex-three">Quick access to customers</li>
//                 <li className="flex-three">Auto refresh ads</li>
//               </ul>
//               <div className="button-pricing">
//                 <Link
//                   className="tf-btn bg-color-primary pd-20"
//                   href={`/pricing`}
//                 >
//                   <span>Upgrade</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* .footer-dashboard */}
//         <div className="footer-dashboard style-2">
//           <p>Copyright © {new Date().getFullYear()} Popty</p>
//           <ul className="list">
//             <li>
//               <a href="#">Privacy</a>
//             </li>
//             <li>
//               <a href="#">Terms</a>
//             </li>
//             <li>
//               <a href="#">Support</a>
//             </li>
//           </ul>
//         </div>
//         {/* .footer-dashboard */}
//       </div>
//       <div className="overlay-dashboard" />
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet } from "../lib/api";

export default function Package() {
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    const loadPackage = async () => {
      try {
        const res = await apiGet("/admindashboard/package/");
        setPkg(res);
      } catch (error) {
        console.error(error);
      }
    };

    loadPackage();
  }, []);

  return (
    <div className="main-content w-100">
      <div className="main-content-inner style-3">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>

        <div className="widget-box-2 style-2 package">
          <h3 className="title">My Package</h3>

          {pkg && (
            <div className="flat-pricing">
              <div className="box box-style">
                <h3 className="sub-title fw-7">{pkg.title}</h3>
                <p className="text-sub fw-6">{pkg.sub_title}</p>
                <div className="title-price flex">
                  <h2>${pkg.price}</h2>
                  <div className="month fw-7">/ {pkg.duration}</div>
                </div>
                <p className="texts">{pkg.description}</p>

                <ul className="check">
                  <li className="flex-three">Listing free: {pkg.listing_limit}</li>
                  {pkg.support_24_7 && <li className="flex-three">Support 24/7</li>}
                  {pkg.quick_access && <li className="flex-three">Quick access to customers</li>}
                  {pkg.auto_refresh_ads && <li className="flex-three">Auto refresh ads</li>}
                </ul>

                <div className="button-pricing">
                  <Link className="tf-btn bg-color-primary pd-20" href={`/pricing`}>
                    <span>Upgrade</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="footer-dashboard style-2">
          <p>Copyright © {new Date().getFullYear()} GROWL Real Estate</p>
          <ul className="list">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}