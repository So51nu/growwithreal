// // // "use client";
// // // import { blogMenu, homes, otherPages, propertyLinks } from "@/data/menu";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";
// // // import React from "react";

// // // export default function MobileMenu() {
// // //   const pathname = usePathname();
// // //   const isParentActive = (menus) =>
// // //     menus.some((menu) =>
// // //       menu.submenu
// // //         ? menu.submenu.some((item) =>
// // //             item.submenu
// // //               ? item.submenu.some(
// // //                   (item) => item.href.split("/")[1] === pathname.split("/")[1]
// // //                 )
// // //               : item.href.split("/")[1] === pathname.split("/")[1]
// // //           )
// // //         : menu.href.split("/")[1] === pathname.split("/")[1]
// // //     );
// // //   return (
// // //     <div
// // //       className="offcanvas offcanvas-start mobile-nav-wrap"
// // //       tabIndex={-1}
// // //       id="menu-mobile"
// // //       aria-labelledby="menu-mobile"
// // //     >
// // //       <div className="offcanvas-header top-nav-mobile">
// // //         <div className="offcanvas-title">
// // //           <Link href={`/`}>
// // //             <Image
// // //               alt=""
// // //               src="/images/logo/logo@2x.png"
// // //               width={272}
// // //               height={84}
// // //             />
// // //           </Link>
// // //         </div>
// // //         <div data-bs-dismiss="offcanvas" aria-label="Close">
// // //           <i className="icon-close" />
// // //         </div>
// // //       </div>
// // //       <div className="offcanvas-body inner-mobile-nav">
// // //         <div className="mb-body">
// // //           <ul id="menu-mobile-menu">
// // //             <li
// // //               className={`menu-item menu-item-has-children-mobile  ${
// // //                 homes.some((elm) => elm.href == pathname)
// // //                   ? "current-menu-item"
// // //                   : ""
// // //               } `}
// // //             >
// // //               <a
// // //                 href="#dropdown-menu-one"
// // //                 className="item-menu-mobile collapsed"
// // //                 data-bs-toggle="collapse"
// // //                 aria-expanded="true"
// // //                 aria-controls="dropdown-menu-one"
// // //               >
// // //                 Home
// // //               </a>
// // //               <div
// // //                 id="dropdown-menu-one"
// // //                 className="collapse"
// // //                 data-bs-parent="#menu-mobile-menu"
// // //               >
// // //                 <ul className="sub-mobile">
// // //                   {homes.map((link, i) => (
// // //                     <li
// // //                       key={i}
// // //                       className={
// // //                         pathname == link.href
// // //                           ? "menu-item current-item"
// // //                           : "menu-item "
// // //                       }
// // //                     >
// // //                       <Link href={link.href}>{link.label}</Link>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             </li>
// // //             <li
// // //               className={`menu-item menu-item-has-children-mobile  ${
// // //                 isParentActive(propertyLinks) ? "current-menu-item" : ""
// // //               } `}
// // //             >
// // //               <a
// // //                 href="#dropdown-menu-two"
// // //                 className="item-menu-mobile collapsed"
// // //                 data-bs-toggle="collapse"
// // //                 aria-expanded="true"
// // //                 aria-controls="dropdown-menu-two"
// // //               >
// // //                 Listing
// // //               </a>
// // //               <div
// // //                 id="dropdown-menu-two"
// // //                 className="collapse"
// // //                 data-bs-parent="#menu-mobile-menu"
// // //               >
// // //                 <ul className="sub-mobile">
// // //                   {propertyLinks.map((links, i) => (
// // //                     <li
// // //                       key={i}
// // //                       className={`menu-item menu-item-has-children-mobile-2 ${
// // //                         isParentActive(links.submenu) ? "current-menu-item" : ""
// // //                       }`}
// // //                     >
// // //                       <a
// // //                         href="#sub-layout"
// // //                         className="item-menu-mobile collapsed"
// // //                         data-bs-toggle="collapse"
// // //                         aria-expanded="true"
// // //                         aria-controls="sub-agents"
// // //                       >
// // //                         {links.title}
// // //                       </a>
// // //                       <div
// // //                         id="sub-layout"
// // //                         className="collapse"
// // //                         data-bs-parent="#dropdown-menu-two"
// // //                       >
// // //                         <ul className="sub-mobile">
// // //                           {links.submenu.map((link, i2) => (
// // //                             <li
// // //                               key={i2}
// // //                               className={
// // //                                 pathname.split("/")[1] ==
// // //                                 link.href.split("/")[1]
// // //                                   ? "menu-item current-item"
// // //                                   : "menu-item "
// // //                               }
// // //                             >
// // //                               <Link
// // //                                 href={link.href}
// // //                                 className="item-menu-mobile"
// // //                               >
// // //                                 {link.label}
// // //                               </Link>
// // //                             </li>
// // //                           ))}
// // //                         </ul>
// // //                       </div>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             </li>
// // //             <li
// // //               className={`menu-item menu-item-has-children-mobile   ${
// // //                 isParentActive(otherPages) ? "current-menu-item" : ""
// // //               } `}
// // //             >
// // //               <a
// // //                 href="#dropdown-menu-four"
// // //                 className="item-menu-mobile collapsed"
// // //                 data-bs-toggle="collapse"
// // //                 aria-expanded="true"
// // //                 aria-controls="dropdown-menu-four"
// // //               >
// // //                 Pages
// // //               </a>
// // //               <div
// // //                 id="dropdown-menu-four"
// // //                 className="collapse"
// // //                 data-bs-parent="#menu-mobile-menu"
// // //               >
// // //                 <ul className="sub-mobile">
// // //                   {otherPages.map((links, i) => (
// // //                     <React.Fragment key={i}>
// // //                       {links.submenu ? (
// // //                         <li
// // //                           className={`menu-item menu-item-has-children-mobile-2   ${
// // //                             isParentActive(links.submenu || [])
// // //                               ? "current-menu-item"
// // //                               : ""
// // //                           }   `}
// // //                         >
// // //                           <a
// // //                             href="#sub-agents"
// // //                             className="item-menu-mobile collapsed"
// // //                             data-bs-toggle="collapse"
// // //                             aria-expanded="true"
// // //                             aria-controls="sub-agents"
// // //                           >
// // //                             {links.title}
// // //                           </a>
// // //                           <div
// // //                             id="sub-agents"
// // //                             className="collapse"
// // //                             data-bs-parent="#dropdown-menu-four"
// // //                           >
// // //                             <ul className="sub-mobile">
// // //                               {links.submenu.map((link, i2) => (
// // //                                 <li
// // //                                   className={`menu-item ${
// // //                                     link.href?.split("/")[1] ==
// // //                                     pathname.split("/")[1]
// // //                                       ? "current-item"
// // //                                       : ""
// // //                                   }`}
// // //                                   key={i2}
// // //                                 >
// // //                                   <Link
// // //                                     href={link.href}
// // //                                     className="item-menu-mobile"
// // //                                   >
// // //                                     {link.label}
// // //                                   </Link>
// // //                                 </li>
// // //                               ))}
// // //                             </ul>
// // //                           </div>
// // //                         </li>
// // //                       ) : (
// // //                         <li
// // //                           className={`menu-item ${
// // //                             links.href?.split("/")[1] == pathname.split("/")[1]
// // //                               ? "current-item"
// // //                               : ""
// // //                           }`}
// // //                         >
// // //                           <Link href={links.href}>{links.label}</Link>
// // //                         </li>
// // //                       )}
// // //                     </React.Fragment>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             </li>
// // //             <li
// // //               className={`menu-item menu-item-has-children-mobile ${
// // //                 isParentActive(blogMenu) ? "current-menu-item" : ""
// // //               } `}
// // //             >
// // //               <a
// // //                 href="#dropdown-menu-five"
// // //                 className="item-menu-mobile collapsed"
// // //                 data-bs-toggle="collapse"
// // //                 aria-expanded="true"
// // //                 aria-controls="dropdown-menu-five"
// // //               >
// // //                 Blogs
// // //               </a>
// // //               <div
// // //                 id="dropdown-menu-five"
// // //                 className="collapse"
// // //                 data-bs-parent="#menu-mobile-menu"
// // //               >
// // //                 <ul className="sub-mobile">
// // //                   {blogMenu.map((link, i) => (
// // //                     <li
// // //                       key={i}
// // //                       className={
// // //                         link.href.split("/")[1] == pathname.split("/")[1]
// // //                           ? "menu-item current-item"
// // //                           : "menu-item"
// // //                       }
// // //                     >
// // //                       <Link href={link.href}>{link.label}</Link>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             </li>
// // //             <li
// // //               className={`menu-item ${
// // //                 "/contact" == pathname ? "current-item" : ""
// // //               }`}
// // //             >
// // //               <Link href={`/contact`} className="tem-menu-mobile">
// // //                 {" "}
// // //                 Contact
// // //               </Link>
// // //             </li>
// // //           </ul>
// // //           <div className="support">
// // //             <a href="#" className="text-need">
// // //               {" "}
// // //               Need help?
// // //             </a>
// // //             <ul className="mb-info">
// // //               <li>
// // //                 Call Us Now: <span className="number">1-555-678-8888</span>
// // //               </li>
// // //               <li>
// // //                 Support 24/7: <a href="#">themesflat@gmail.com</a>
// // //               </li>
// // //               <li>
// // //                 <div className="wrap-social">
// // //                   <p>Follow us:</p>
// // //                   <ul className="tf-social style-2">
// // //                     <li>
// // //                       <a href="#">
// // //                         <i className="icon-fb" />
// // //                       </a>
// // //                     </li>
// // //                     <li>
// // //                       <a href="#">
// // //                         <i className="icon-X" />
// // //                       </a>
// // //                     </li>
// // //                     <li>
// // //                       <a href="#">
// // //                         <i className="icon-linked" />
// // //                       </a>
// // //                     </li>
// // //                     <li>
// // //                       <a href="#">
// // //                         <i className="icon-ins" />
// // //                       </a>
// // //                     </li>
// // //                   </ul>
// // //                 </div>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import React from "react";

// // export default function MobileMenu() {
// //   const pathname = usePathname();

// //   return (
// //     <div
// //       className="offcanvas offcanvas-start mobile-nav-wrap"
// //       tabIndex={-1}
// //       id="menu-mobile"
// //       aria-labelledby="menu-mobile"
// //     >
// //       <div className="offcanvas-header top-nav-mobile">
// //         <div className="offcanvas-title">
// //           <Link href="/">
// //             <Image
// //               alt=""
// //               src="/images/logo/logo@2x.png"
// //               width={272}
// //               height={84}
// //             />
// //           </Link>
// //         </div>
// //         <div data-bs-dismiss="offcanvas" aria-label="Close">
// //           <i className="icon-close" />
// //         </div>
// //       </div>

// //       <div className="offcanvas-body inner-mobile-nav">
// //         <div className="mb-body">
// //           <ul id="menu-mobile-menu">
// //             <li className={`menu-item ${pathname === "/" ? "current-item" : ""}`}>
// //               <Link href="/" className="item-menu-mobile">
// //                 Home
// //               </Link>
// //             </li>

// //             <li
// //               className={`menu-item ${
// //                 pathname === "/property-gird-top-search" ? "current-item" : ""
// //               }`}
// //             >
// //               <Link href="/property-gird-top-search" className="item-menu-mobile">
// //                 Listing
// //               </Link>
// //             </li>

// //             <li className={`menu-item ${pathname === "/faq" ? "current-item" : ""}`}>
// //               <Link href="/faq" className="item-menu-mobile">
// //                 FAQ
// //               </Link>
// //             </li>

// //             <li
// //               className={`menu-item ${
// //                 pathname === "/blog-list" || pathname.startsWith("/blog-details")
// //                   ? "current-item"
// //                   : ""
// //               }`}
// //             >
// //               <Link href="/blog-list" className="item-menu-mobile">
// //                 Blog
// //               </Link>
// //             </li>

// //             <li className={`menu-item ${pathname === "/contact" ? "current-item" : ""}`}>
// //               <Link href="/contact" className="item-menu-mobile">
// //                 Contact
// //               </Link>
// //             </li>
// //           </ul>

// //           <div className="support">
// //             <a href="#" className="text-need">
// //               Need help?
// //             </a>
// //             <ul className="mb-info">
// //               <li>
// //                 Call Us Now: <span className="number">+91 9326183013</span>
// //               </li>
// //               <li>
// //                 Support 24/7: <a href="#">growlrealestate@gmail.com</a>
// //               </li>
// //               <li>
// //                 <div className="wrap-social">
// //                   <p>Follow us:</p>
// //                   <ul className="tf-social style-2">
// //                     <li>
// //                       <a href="#">
// //                         <i className="icon-fb" />
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="#">
// //                         <i className="icon-X" />
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="#">
// //                         <i className="icon-linked" />
// //                       </a>
// //                     </li>
// //                     <li>
// //                       <a href="#">
// //                         <i className="icon-ins" />
// //                       </a>
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";

// function getStoredUser() {
//   if (typeof window === "undefined") return null;

//   try {
//     return JSON.parse(localStorage.getItem("userData") || "null");
//   } catch {
//     return null;
//   }
// }

// export default function MobileMenu() {
//   const pathname = usePathname();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const syncUser = () => {
//       setUser(getStoredUser());
//     };

//     syncUser();

//     const handleStorage = () => {
//       syncUser();
//     };

//     const handleFocus = () => {
//       syncUser();
//     };

//     window.addEventListener("storage", handleStorage);
//     window.addEventListener("focus", handleFocus);

//     return () => {
//       window.removeEventListener("storage", handleStorage);
//       window.removeEventListener("focus", handleFocus);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("userData");
//     setUser(null);
//     window.location.href = "/";
//   };

//   const isLoggedIn = !!user;
//   const isAdmin = !!(
//     user?.role === "admin" ||
//     user?.is_staff ||
//     user?.is_superuser
//   );
//   const isCustomer = user?.role === "customer";
//   const isSourceManager = user?.role === "source_manager";

//   const dashboardHref = isAdmin
//     ? "/dashboard"
//     : isSourceManager
//     ? "/source-dashboard"
//     : isCustomer
//     ? "/user-dashboard"
//     : "/";

//   const dashboardText = isAdmin
//     ? "Admin Dashboard"
//     : isSourceManager
//     ? "Source Dashboard"
//     : "Dashboard";

//   return (
//     <div
//       className="offcanvas offcanvas-start mobile-nav-wrap"
//       tabIndex={-1}
//       id="menu-mobile"
//       aria-labelledby="menu-mobile"
//     >
//       <div className="offcanvas-header top-nav-mobile">
//         <div className="offcanvas-title">
//           <Link href="/">
//             <Image
//               alt="logo"
//               src="/images/logo/logo.png"
//               width={272}
//               height={84}
//             />
//           </Link>
//         </div>
//         <div
//           data-bs-dismiss="offcanvas"
//           aria-label="Close"
//           style={{ cursor: "pointer" }}
//         >
//           <i className="icon-close" />
//         </div>
//       </div>

//       <div className="offcanvas-body inner-mobile-nav">
//         <div className="mb-body">
//           <ul id="menu-mobile-menu">
//             <li className={`menu-item ${pathname === "/" ? "current-item" : ""}`}>
//               <Link href="/" className="item-menu-mobile">
//                 Home
//               </Link>
//             </li>

//             <li
//               className={`menu-item ${
//                 pathname === "/property-gird-top-search" ? "current-item" : ""
//               }`}
//             >
//               <Link href="/property-gird-top-search" className="item-menu-mobile">
//                 Listing
//               </Link>
//             </li>



//               <li
//               className={`menu-item ${
//                 pathname === "/cities" ? "current-item" : ""
//               }`}
//             >
//               <Link href="/cities" className="item-menu-mobile">
//                 Cities
//               </Link>
//             </li>




//              <li
//               className={`menu-item ${
//                 pathname === "/developers" ? "current-item" : ""
//               }`}
//             >
//               <Link href="/developers" className="item-menu-mobile">
//                 Developers
//               </Link>
//             </li>







//             <li className={`menu-item ${pathname === "/faq" ? "current-item" : ""}`}>
//               <Link href="/faq" className="item-menu-mobile">
//                 FAQ
//               </Link>
//             </li>

//             <li
//               className={`menu-item ${
//                 pathname === "/blog-list" || pathname.startsWith("/blog-details")
//                   ? "current-item"
//                   : ""
//               }`}
//             >
//               <Link href="/blog-list" className="item-menu-mobile">
//                 Blog
//               </Link>
//             </li>

//             <li className={`menu-item ${pathname === "/contact" ? "current-item" : ""}`}>
//               <Link href="/contact" className="item-menu-mobile">
//                 Contact Us
//               </Link>
//             </li>

//            <li className={`menu-item ${pathname === "/about" ? "current-item" : ""}`}>
//               <Link href="/about" className="item-menu-mobile">
//                 About Us
//               </Link>
//             </li>



//             {isLoggedIn && (
//               <>
//                 <li
//                   className={`menu-item ${
//                     pathname === dashboardHref ? "current-item" : ""
//                   }`}
//                 >
//                   <Link href={dashboardHref} className="item-menu-mobile">
//                     {dashboardText}
//                   </Link>
//                 </li>

//                 {isCustomer && (
//                   <>
//                     <li
//                       className={`menu-item ${
//                         pathname === "/user-dashboard/my-profile"
//                           ? "current-item"
//                           : ""
//                       }`}
//                     >
//                       <Link
//                         href="/user-dashboard/my-profile"
//                         className="item-menu-mobile"
//                       >
//                         Profile
//                       </Link>
//                     </li>

//                     <li
//                       className={`menu-item ${
//                         pathname === "/user-dashboard/my-favorites"
//                           ? "current-item"
//                           : ""
//                       }`}
//                     >
//                       <Link
//                         href="/user-dashboard/my-favorites"
//                         className="item-menu-mobile"
//                       >
//                         My favorites
//                       </Link>
//                     </li>

//                     <li
//                       className={`menu-item ${
//                         pathname === "/user-dashboard/my-save-search"
//                           ? "current-item"
//                           : ""
//                       }`}
//                     >
//                       <Link
//                         href="/user-dashboard/my-save-search"
//                         className="item-menu-mobile"
//                       >
//                         My save searches
//                       </Link>
//                     </li>

//                     <li
//                       className={`menu-item ${
//                         pathname === "/user-dashboard/my-property"
//                           ? "current-item"
//                           : ""
//                       }`}
//                     >
//                       <Link
//                         href="/user-dashboard/my-property"
//                         className="item-menu-mobile"
//                       >
//                         My properties
//                       </Link>
//                     </li>

//                     <li
//                       className={`menu-item ${
//                         pathname === "/user-dashboard/referrals"
//                           ? "current-item"
//                           : ""
//                       }`}
//                     >
//                       <Link
//                         href="/user-dashboard/referrals"
//                         className="item-menu-mobile"
//                       >
//                         Referrals
//                       </Link>
//                     </li>
//                   </>
//                 )}

//                 {isSourceManager && (
//                   <>
//                     <li
//                       className={`menu-item ${
//                         pathname === "/source-dashboard" ? "current-item" : ""
//                       }`}
//                     >
//                       <Link
//                         href="/source-dashboard"
//                         className="item-menu-mobile"
//                       >
//                         Source Dashboard
//                       </Link>
//                     </li>
//                   </>
//                 )}

//                 {isAdmin && (
//                   <>
//                     <li
//                       className={`menu-item ${
//                         pathname === "/my-profile" ? "current-item" : ""
//                       }`}
//                     >
//                       <Link href="/my-profile" className="item-menu-mobile">
//                         My Profile
//                       </Link>
//                     </li>

//                     <li
//                       className={`menu-item ${
//                         pathname === "/my-package" ? "current-item" : ""
//                       }`}
//                     >
//                       <Link href="/my-package" className="item-menu-mobile">
//                         My Package
//                       </Link>
//                     </li>

//                     <li
//                       className={`menu-item ${
//                         pathname === "/my-favorites" ? "current-item" : ""
//                       }`}
//                     >
//                       <Link href="/my-favorites" className="item-menu-mobile">
//                         My Favorites
//                       </Link>
//                     </li>

//                     <li
//                       className={`menu-item ${
//                         pathname === "/my-save-search" ? "current-item" : ""
//                       }`}
//                     >
//                       <Link href="/my-save-search" className="item-menu-mobile">
//                         My Save Searches
//                       </Link>
//                     </li>

//                     <li
//                       className={`menu-item ${
//                         pathname === "/review" ? "current-item" : ""
//                       }`}
//                     >
//                       <Link href="/review" className="item-menu-mobile">
//                         Review
//                       </Link>
//                     </li>

//                     <li
//                       className={`menu-item ${
//                         pathname === "/my-property" ? "current-item" : ""
//                       }`}
//                     >
//                       <Link href="/my-property" className="item-menu-mobile">
//                         My Properties
//                       </Link>
//                     </li>

//                     <li
//                       className={`menu-item ${
//                         pathname === "/add-property" ? "current-item" : ""
//                       }`}
//                     >
//                       <Link href="/add-property" className="item-menu-mobile">
//                         Add Property
//                       </Link>
//                     </li>
//                   </>
//                 )}

//                 <li className="menu-item">
//                   <button
//                     type="button"
//                     onClick={handleLogout}
//                     className="item-menu-mobile"
//                     style={{
//                       background: "transparent",
//                       border: "none",
//                       width: "100%",
//                       textAlign: "left",
//                       padding: 0,
//                     }}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             )}

//             {!isLoggedIn && (
//               <li className="menu-item">
//                 <a
//                   href="#modalLogin"
//                   data-bs-toggle="modal"
//                   className="item-menu-mobile"
//                   data-bs-dismiss="offcanvas"
//                 >
//                   Login
//                 </a>
//               </li>
//             )}
//           </ul>

//           <div className="support">
//             <a href="#" className="text-need">
//               Need help?
//             </a>
//             <ul className="mb-info">
//               <li>
//                 Call Us Now: <span className="number">+91 9326183013</span>
//               </li>
//               <li>
//                 Support 24/7:{" "}
//                 <a href="mailto:growlrealestate@gmail.com">
//                   growlrealestate@gmail.com
//                 </a>
//               </li>
//               <li>
//                 <div className="wrap-social">
//                   <p>Follow us:</p>
//                   <ul className="tf-social style-2">
//                     <li>
//                       <a href="#">
//                         <i className="icon-fb" />
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="icon-X" />
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="icon-linked" />
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="icon-ins" />
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function getStoredUser() {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

export default function MobileMenu() {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const syncUser = () => {
      setUser(getStoredUser());
    };

    syncUser();

    const handleStorage = () => {
      syncUser();
    };

    const handleFocus = () => {
      syncUser();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userData");
    setUser(null);
    window.location.href = "/";
  };

  const isLoggedIn = !!user;
  const isAdmin = !!(
    user?.role === "admin" ||
    user?.is_staff ||
    user?.is_superuser
  );
  const isCustomer = user?.role === "customer";
  const isSourceManager = user?.role === "source_manager";

  const dashboardHref = isAdmin
    ? "/dashboard"
    : isSourceManager
    ? "/source-dashboard"
    : isCustomer
    ? "/user-dashboard"
    : "/";

  const dashboardText = isAdmin
    ? "Admin Dashboard"
    : isSourceManager
    ? "Source Dashboard"
    : "Dashboard";

  return (
    <div
      className="offcanvas offcanvas-start mobile-nav-wrap"
      tabIndex={-1}
      id="menu-mobile"
      aria-labelledby="menu-mobile"
    >
      <div className="offcanvas-header top-nav-mobile">
        <div className="offcanvas-title">
          <Link href="/">
            <Image
              alt="logo"
              src="/images/logo/logo.png"
              width={272}
              height={84}
            />
          </Link>
        </div>
        <div
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          style={{ cursor: "pointer" }}
        >
          <i className="icon-close" />
        </div>
      </div>

      <div className="offcanvas-body inner-mobile-nav">
        <div className="mb-body">
          <ul id="menu-mobile-menu">
            <li className={`menu-item ${pathname === "/" ? "current-item" : ""}`}>
              <Link href="/" className="item-menu-mobile">
                Home
              </Link>
            </li>

            <li
              className={`menu-item ${
                pathname === "/property-gird-top-search" ? "current-item" : ""
              }`}
            >
              <Link href="/property-gird-top-search" className="item-menu-mobile">
                Listing
              </Link>
            </li>



              <li
              className={`menu-item ${
                pathname === "/cities" ? "current-item" : ""
              }`}
            >
              <Link href="/cities" className="item-menu-mobile">
                Cities
              </Link>
            </li>




             <li
              className={`menu-item ${
                pathname === "/developers" ? "current-item" : ""
              }`}
            >
              <Link href="/developers" className="item-menu-mobile">
                Developers
              </Link>
            </li>







            <li className={`menu-item ${pathname === "/faq" ? "current-item" : ""}`}>
              <Link href="/faq" className="item-menu-mobile">
                FAQ
              </Link>
            </li>

            <li
              className={`menu-item ${
                pathname === "/blog-list" || pathname.startsWith("/blog-details")
                  ? "current-item"
                  : ""
              }`}
            >
              <Link href="/blog-list" className="item-menu-mobile">
                Blog
              </Link>
            </li>

            <li className={`menu-item ${pathname === "/contact" ? "current-item" : ""}`}>
              <Link href="/contact" className="item-menu-mobile">
                Contact Us
              </Link>
            </li>

           <li className={`menu-item ${pathname === "/about" ? "current-item" : ""}`}>
              <Link href="/about" className="item-menu-mobile">
                About Us
              </Link>
            </li>



            {isLoggedIn && (
              <>
                <li
                  className={`menu-item ${
                    pathname === dashboardHref ? "current-item" : ""
                  }`}
                >
                  <Link href={dashboardHref} className="item-menu-mobile">
                    {dashboardText}
                  </Link>
                </li>

                {isCustomer && (
                  <>
                    <li
                      className={`menu-item ${
                        pathname === "/user-dashboard/my-profile"
                          ? "current-item"
                          : ""
                      }`}
                    >
                      <Link
                        href="/user-dashboard/my-profile"
                        className="item-menu-mobile"
                      >
                        Profile
                      </Link>
                    </li>

                    <li
                      className={`menu-item ${
                        pathname === "/user-dashboard/my-favorites"
                          ? "current-item"
                          : ""
                      }`}
                    >
                      <Link
                        href="/user-dashboard/my-favorites"
                        className="item-menu-mobile"
                      >
                        My favorites
                      </Link>
                    </li>

                    <li
                      className={`menu-item ${
                        pathname === "/user-dashboard/my-save-search"
                          ? "current-item"
                          : ""
                      }`}
                    >
                      <Link
                        href="/user-dashboard/my-save-search"
                        className="item-menu-mobile"
                      >
                        My save searches
                      </Link>
                    </li>

                    <li
                      className={`menu-item ${
                        pathname === "/user-dashboard/my-property"
                          ? "current-item"
                          : ""
                      }`}
                    >
                      <Link
                        href="/user-dashboard/my-property"
                        className="item-menu-mobile"
                      >
                        My properties
                      </Link>
                    </li>

                    <li
                      className={`menu-item ${
                        pathname === "/user-dashboard/referrals"
                          ? "current-item"
                          : ""
                      }`}
                    >
                      <Link
                        href="/user-dashboard/referrals"
                        className="item-menu-mobile"
                      >
                        Referrals
                      </Link>
                    </li>
                  </>
                )}

                {isSourceManager && (
                  <>
                    <li
                      className={`menu-item ${
                        pathname === "/source-dashboard" ? "current-item" : ""
                      }`}
                    >
                      <Link
                        href="/source-dashboard"
                        className="item-menu-mobile"
                      >
                        Source Dashboard
                      </Link>
                    </li>
                  </>
                )}

                {isAdmin && (
                  <>
                    <li
                      className={`menu-item ${
                        pathname === "/my-profile" ? "current-item" : ""
                      }`}
                    >
                      <Link href="/my-profile" className="item-menu-mobile">
                        My Profile
                      </Link>
                    </li>

                    <li
                      className={`menu-item ${
                        pathname === "/my-package" ? "current-item" : ""
                      }`}
                    >
                      <Link href="/my-package" className="item-menu-mobile">
                        My Package
                      </Link>
                    </li>

                    <li
                      className={`menu-item ${
                        pathname === "/my-favorites" ? "current-item" : ""
                      }`}
                    >
                      <Link href="/my-favorites" className="item-menu-mobile">
                        My Favorites
                      </Link>
                    </li>

                    <li
                      className={`menu-item ${
                        pathname === "/my-save-search" ? "current-item" : ""
                      }`}
                    >
                      <Link href="/my-save-search" className="item-menu-mobile">
                        My Save Searches
                      </Link>
                    </li>

                    <li
                      className={`menu-item ${
                        pathname === "/review" ? "current-item" : ""
                      }`}
                    >
                      <Link href="/review" className="item-menu-mobile">
                        Review
                      </Link>
                    </li>

                    <li
                      className={`menu-item ${
                        pathname === "/my-property" ? "current-item" : ""
                      }`}
                    >
                      <Link href="/my-property" className="item-menu-mobile">
                        My Properties
                      </Link>
                    </li>

                    <li
                      className={`menu-item ${
                        pathname === "/add-property" ? "current-item" : ""
                      }`}
                    >
                      <Link href="/add-property" className="item-menu-mobile">
                        Add Property
                      </Link>
                    </li>
                  </>
                )}

                <li className="menu-item">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="item-menu-mobile"
                    style={{
                      background: "transparent",
                      border: "none",
                      width: "100%",
                      textAlign: "left",
                      padding: 0,
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {!isLoggedIn && (
              <li className="menu-item">
                <a
                  href="#modalLogin"
                  data-bs-toggle="modal"
                  className="item-menu-mobile"
                  data-bs-dismiss="offcanvas"
                >
                  Login
                </a>
              </li>
            )}
          </ul>

          <div className="support">
            <a href="#" className="text-need">
              Need help?
            </a>
            <ul className="mb-info">
              <li>
                Call Us Now: <span className="number">+91 9326183013</span>
              </li>
              <li>
                Support 24/7:{" "}
                <a href="mailto:growlrealestate@gmail.com">
                  growlrealestate@gmail.com
                </a>
              </li>
              <li>
                <div className="wrap-social">
                  <p>Follow us:</p>
                  <ul className="tf-social style-2">
                    <li>
                      <a href="#">
                        <i className="icon-fb" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-X" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linked" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-ins" />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --growl-logo-blue: #1E4D74;
          --growl-logo-dark-blue: #173C5B;
          --growl-logo-yellow: #EEC629;
          --growl-logo-soft-blue: #EEF6FB;
          --growl-logo-border: rgba(30, 77, 116, 0.14);
        }

        .mobile-nav-wrap {
          background: #ffffff !important;
          color: var(--growl-logo-dark-blue) !important;
          border-right: 1px solid var(--growl-logo-border) !important;
          box-shadow: 18px 0 45px rgba(23, 60, 91, 0.16) !important;
          z-index: 2147483000 !important;
        }

        .mobile-nav-wrap .top-nav-mobile {
          background: linear-gradient(135deg, #ffffff 0%, var(--growl-logo-soft-blue) 100%) !important;
          border-bottom: 1px solid var(--growl-logo-border) !important;
          padding: 18px 20px !important;
        }

        .mobile-nav-wrap .offcanvas-title img {
          max-width: 180px !important;
          height: auto !important;
          object-fit: contain !important;
        }

        .mobile-nav-wrap .icon-close {
          width: 38px !important;
          height: 38px !important;
          border-radius: 50% !important;
          background: var(--growl-logo-dark-blue) !important;
          color: #ffffff !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 14px !important;
          box-shadow: 0 10px 24px rgba(23, 60, 91, 0.22) !important;
        }

        .mobile-nav-wrap .inner-mobile-nav {
          background: #ffffff !important;
          padding: 0 !important;
        }

        .mobile-nav-wrap .mb-body {
          padding: 18px 18px 24px !important;
        }

        .mobile-nav-wrap #menu-mobile-menu {
          display: flex !important;
          flex-direction: column !important;
          gap: 8px !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        .mobile-nav-wrap #menu-mobile-menu .menu-item {
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
        }

        .mobile-nav-wrap .item-menu-mobile {
          width: 100% !important;
          min-height: 46px !important;
          padding: 12px 14px !important;
          border-radius: 12px !important;
          color: var(--growl-logo-dark-blue) !important;
          background: transparent !important;
          border: 1px solid transparent !important;
          display: flex !important;
          align-items: center !important;
          text-decoration: none !important;
          font-size: 15px !important;
          line-height: 1.25 !important;
          font-weight: 800 !important;
          transition: all 0.22s ease !important;
          box-sizing: border-box !important;
        }

        .mobile-nav-wrap .item-menu-mobile:hover,
        .mobile-nav-wrap .menu-item.current-item .item-menu-mobile {
          background: linear-gradient(135deg, var(--growl-logo-dark-blue), var(--growl-logo-blue)) !important;
          color: #ffffff !important;
          border-color: rgba(238, 198, 41, 0.42) !important;
          box-shadow: 0 10px 24px rgba(23, 60, 91, 0.18) !important;
          transform: translateX(2px) !important;
        }

        .mobile-nav-wrap .menu-item.current-item .item-menu-mobile::before {
          content: "" !important;
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          background: var(--growl-logo-yellow) !important;
          margin-right: 10px !important;
          flex: 0 0 auto !important;
          box-shadow: 0 0 0 4px rgba(238, 198, 41, 0.18) !important;
        }

        .mobile-nav-wrap .support {
          margin-top: 24px !important;
          padding: 18px !important;
          border-radius: 18px !important;
          background: linear-gradient(135deg, var(--growl-logo-soft-blue), #ffffff) !important;
          border: 1px solid var(--growl-logo-border) !important;
          box-shadow: 0 12px 30px rgba(23, 60, 91, 0.08) !important;
        }

        .mobile-nav-wrap .text-need {
          color: var(--growl-logo-blue) !important;
          font-size: 16px !important;
          font-weight: 900 !important;
          text-decoration: none !important;
          display: inline-flex !important;
          margin-bottom: 12px !important;
        }

        .mobile-nav-wrap .mb-info {
          margin: 0 !important;
          padding: 0 !important;
        }

        .mobile-nav-wrap .mb-info li {
          color: #4b6378 !important;
          font-size: 13.5px !important;
          line-height: 1.5 !important;
          margin-bottom: 10px !important;
          list-style: none !important;
        }

        .mobile-nav-wrap .mb-info .number,
        .mobile-nav-wrap .mb-info a {
          color: var(--growl-logo-dark-blue) !important;
          font-weight: 900 !important;
          text-decoration: none !important;
        }

        .mobile-nav-wrap .wrap-social {
          margin-top: 4px !important;
        }

        .mobile-nav-wrap .wrap-social p {
          color: var(--growl-logo-dark-blue) !important;
          font-weight: 850 !important;
          margin-bottom: 8px !important;
        }

        .mobile-nav-wrap .tf-social.style-2 {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        .mobile-nav-wrap .tf-social.style-2 li {
          margin: 0 !important;
        }

        .mobile-nav-wrap .tf-social.style-2 a {
          width: 34px !important;
          height: 34px !important;
          border-radius: 50% !important;
          background: var(--growl-logo-dark-blue) !important;
          color: #ffffff !important;
          border: 1px solid rgba(238, 198, 41, 0.35) !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.22s ease !important;
        }

        .mobile-nav-wrap .tf-social.style-2 a:hover {
          background: var(--growl-logo-yellow) !important;
          color: var(--growl-logo-dark-blue) !important;
          transform: translateY(-2px) !important;
        }

        @media (max-width: 575px) {
          .mobile-nav-wrap {
            width: min(86vw, 360px) !important;
          }

          .mobile-nav-wrap .top-nav-mobile {
            padding: 16px 18px !important;
          }

          .mobile-nav-wrap .offcanvas-title img {
            max-width: 158px !important;
          }

          .mobile-nav-wrap .mb-body {
            padding: 16px 14px 22px !important;
          }

          .mobile-nav-wrap .item-menu-mobile {
            min-height: 44px !important;
            font-size: 14px !important;
            padding: 11px 13px !important;
          }
        }
      `}</style>

    </div>
  );
}