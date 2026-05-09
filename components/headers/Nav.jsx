// // "use client";
// // import { blogMenu, homes, otherPages, propertyLinks } from "@/data/menu";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import React from "react";

// // export default function Nav() {
// //   const pathname = usePathname();
// //   const isParentActive = (menus) =>
// //     menus.some((menu) =>
// //       menu.submenu
// //         ? menu.submenu.some((item) =>
// //             item.submenu
// //               ? item.submenu.some(
// //                   (item) => item.href.split("/")[1] === pathname.split("/")[1]
// //                 )
// //               : item.href.split("/")[1] === pathname.split("/")[1]
// //           )
// //         : menu.href.split("/")[1] === pathname.split("/")[1]
// //     );
// //   return (
// //     <>
// //       <li
// //         className={`has-child ${
// //           homes.some((elm) => elm.href == pathname) ? "current-menu" : ""
// //         }`}
// //       >
// //         <a href="#">Home</a>
// //         <ul className="submenu">
// //           {homes.map((item, index) => (
// //             <li
// //               key={index}
// //               className={pathname == item.href ? "current-item" : ""}
// //             >
// //               <Link href={item.href}>{item.label}</Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </li>
// //       <li
// //         className={`has-child style-2 ${
// //           isParentActive(propertyLinks) ? "current-menu" : ""
// //         } `}
// //       >
// //         <a href="#">Listing</a>
// //         <ul className="submenu">
// //           {propertyLinks.map((menu, index) => (
// //             <li key={index}>
// //               <a href="#">{menu.title}</a>
// //               <ul className="submenu2">
// //                 {menu.submenu.map((item, subIndex) => (
// //                   <li
// //                     key={subIndex}
// //                     className={
// //                       pathname.split("/")[1] == item.href.split("/")[1]
// //                         ? "current-item"
// //                         : ""
// //                     }
// //                   >
// //                     <Link href={item.href}>{item.label}</Link>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </li>
// //           ))}
// //         </ul>
// //       </li>
// //       <li
// //         className={`has-child  ${
// //           isParentActive(otherPages) ? "current-menu" : ""
// //         } `}
// //       >
// //         <a href="#">Pages</a>
// //         <ul className="submenu">
// //           {otherPages.map((menu, index) => (
// //             <li
// //               key={index}
// //               className={`${menu.className || ""}  ${
// //                 isParentActive(menu.submenu || []) ? "current-item" : ""
// //               }   ${
// //                 menu.href?.split("/")[1] == pathname.split("/")[1]
// //                   ? "current-item"
// //                   : ""
// //               } `}
// //             >
// //               {menu.submenu ? (
// //                 <>
// //                   <a href="#">{menu.title}</a>
// //                   <ul className="submenu">
// //                     {menu.submenu.map((item, subIndex) => (
// //                       <li
// //                         key={subIndex}
// //                         className={
// //                           item.href?.split("/")[1] == pathname.split("/")[1]
// //                             ? "current-item"
// //                             : ""
// //                         }
// //                       >
// //                         <Link href={item.href}>{item.label}</Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </>
// //               ) : (
// //                 <Link href={menu.href}>{menu.label}</Link>
// //               )}
// //             </li>
// //           ))}
// //         </ul>
// //       </li>
// //       <li
// //         className={`has-child ${
// //           isParentActive(blogMenu) ? "current-menu" : ""
// //         } `}
// //       >
// //         <a href="#">Blog</a>
// //         <ul className="submenu">
// //           {blogMenu.map((item, index) => (
// //             <li
// //               key={index}
// //               className={
// //                 item.href.split("/")[1] == pathname.split("/")[1]
// //                   ? "current-item"
// //                   : ""
// //               }
// //             >
// //               <Link href={item.href}>{item.label}</Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </li>
// //       <li className={"/contact" == pathname ? "current-menu" : ""}>
// //         <Link href={`/contact`}>Contact</Link>
// //       </li>
// //     </>
// //   );
// // }



// // "use client";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import React from "react";

// // export default function Nav() {
// //   const pathname = usePathname();

// //   return (
// //     <>
// //       {/* Home */}
// //       <li className={pathname === "/" ? "current-menu" : ""}>
// //         <Link href="/">Home</Link>
// //       </li>

// //       {/* Listing */}
// //       <li
// //         className={
// //           pathname === "/property-gird-top-search" ? "current-menu" : ""
// //         }
// //       >
// //         <Link href="/property-gird-top-search">Listing</Link>
// //       </li>

// //       {/* FAQ */}
// //       <li className={pathname === "/faq" ? "current-menu" : ""}>
// //         <Link href="/faq">FAQ</Link>
// //       </li>

// //       {/* Blog */}
// //       <li
// //         className={
// //           pathname === "/blog-list" || pathname.startsWith("/blog-details")
// //             ? "current-menu"
// //             : ""
// //         }
// //       >
// //         <Link href="/blog-list">Blog</Link>
// //       </li>

// //       {/* Contact */}
// //       <li className={pathname === "/contact" ? "current-menu" : ""}>
// //         <Link href="/contact">Contact</Link>
// //       </li>
// //        <li className={pathname === "/about" ? "current-menu" : ""}>
// //         <Link href="/about">About Us </Link>
// //       </li>
// //     </>
// //   );
// // }


// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// export default function Nav() {
//   const pathname = usePathname();

//   return (
//     <>
//       <li className={pathname === "/" ? "current-menu" : ""}>
//         <Link href="/">Home</Link>
//       </li>

//       <li
//         className={
//           pathname === "/property-gird-top-search" ? "current-menu" : ""
//         }
//       >
//         <Link href="/property-gird-top-search">Listing</Link>
//       </li>

//       <li
//         className={
//           pathname === "/cities" || pathname.startsWith("/cities/")
//             ? "current-menu"
//             : ""
//         }
//       >
//         <Link href="/cities">Cities</Link>
//       </li>

//       <li
//         className={
//           pathname === "/developers" || pathname.startsWith("/developers/")
//             ? "current-menu"
//             : ""
//         }
//       >
//         <Link href="/developers">Developers</Link>
//       </li>

//       <li className={pathname === "/faq" ? "current-menu" : ""}>
//         <Link href="/faq">FAQ</Link>
//       </li>

//       <li
//         className={
//           pathname === "/blog-list" || pathname.startsWith("/blog-details")
//             ? "current-menu"
//             : ""
//         }
//       >
//         <Link href="/blog-list">Blog</Link>
//       </li>

//       <li className={pathname === "/contact" ? "current-menu" : ""}>
//         <Link href="/contact">Contact</Link>
//       </li>

//       <li className={pathname === "/about" ? "current-menu" : ""}>
//         <Link href="/about">About Us</Link>
//       </li>
//     </>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { apiGet } from "../lib/api";

const defaultMenus = [
  {
    key: "home",
    title: "Home",
    path: "/",
    match_type: "exact",
    order: 1,
    is_active: true,
  },
  {
    key: "listing",
    title: "Listing",
    path: "/property-gird-top-search",
    match_type: "exact",
    order: 2,
    is_active: true,
  },
  {
    key: "cities",
    title: "Cities",
    path: "/cities",
    match_type: "starts_with",
    order: 3,
    is_active: true,
  },
  {
    key: "developers",
    title: "Developers",
    path: "/developers",
    match_type: "starts_with",
    order: 4,
    is_active: true,
  },
  {
    key: "faq",
    title: "FAQ",
    path: "/faq",
    match_type: "exact",
    order: 5,
    is_active: true,
  },
  {
    key: "blog",
    title: "Blog",
    path: "/blog-list",
    match_type: "custom_blog",
    order: 6,
    is_active: true,
  },
  {
    key: "contact",
    title: "Contact",
    path: "/contact",
    match_type: "exact",
    order: 7,
    is_active: true,
  },
  {
    key: "about",
    title: "About Us",
    path: "/about",
    match_type: "exact",
    order: 8,
    is_active: true,
  },
];

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizePath(value) {
  const path = String(value || "").trim();

  if (!path) return "/";

  if (path === "/") return "/";

  return path.startsWith("/") ? path : `/${path}`;
}

function isFalseValue(value) {
  return value === false || value === "false" || value === 0 || value === "0";
}

function isMenuActive(pathname, menu) {
  const menuPath = normalizePath(menu?.path);

  if (menuPath === "/") {
    return pathname === "/";
  }

  if (menu?.match_type === "custom_blog") {
    return pathname === "/blog-list" || pathname.startsWith("/blog-details");
  }

  if (menu?.match_type === "starts_with") {
    return pathname === menuPath || pathname.startsWith(`${menuPath}/`);
  }

  return pathname === menuPath;
}

function mergeBackendMenus(defaultMenuList, backendMenuList) {
  if (!Array.isArray(backendMenuList) || backendMenuList.length === 0) {
    return defaultMenuList;
  }

  const mergedMenus = defaultMenuList.map((defaultMenu) => {
    const backendMenu = backendMenuList.find((item) => {
      const backendKey = normalizeText(item?.key);
      const backendTitle = normalizeText(item?.title);
      const backendPath = normalizePath(item?.path);

      return (
        backendKey === normalizeText(defaultMenu.key) ||
        backendTitle === normalizeText(defaultMenu.title) ||
        backendPath === normalizePath(defaultMenu.path)
      );
    });

    if (!backendMenu) {
      return defaultMenu;
    }

    return {
      ...defaultMenu,
      title: backendMenu.title || defaultMenu.title,
      path: normalizePath(backendMenu.path || defaultMenu.path),
      match_type: backendMenu.match_type || defaultMenu.match_type,
      order:
        backendMenu.order !== undefined && backendMenu.order !== null
          ? Number(backendMenu.order)
          : defaultMenu.order,
      is_active: isFalseValue(backendMenu.is_active) ? false : true,
    };
  });

  return mergedMenus
    .filter((menu) => menu.is_active !== false)
    .sort((a, b) => {
      const orderA = Number(a.order || 999);
      const orderB = Number(b.order || 999);

      return orderA - orderB;
    });
}

export default function Nav() {
  const pathname = usePathname();
  const [backendMenus, setBackendMenus] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadMenus = async () => {
      try {
        const response = await apiGet("/headermenu/menus/");
        setBackendMenus(Array.isArray(response) ? response : []);
      } catch (error) {
        console.error("Header menu fetch error:", error);

        // API fail ho to current default nav same show rahega
        setBackendMenus([]);
      } finally {
        setIsLoaded(true);
      }
    };

    loadMenus();
  }, []);

  const finalMenus = useMemo(() => {
    // first render par current default nav show hoga
    if (!isLoaded) return defaultMenus;

    // backend empty ho to current nav same show hoga
    return mergeBackendMenus(defaultMenus, backendMenus);
  }, [backendMenus, isLoaded]);

  return (
    <>
      {finalMenus.map((menu) => (
        <li
          key={menu.key}
          className={isMenuActive(pathname, menu) ? "current-menu" : ""}
        >
          <Link href={normalizePath(menu.path)}>{menu.title}</Link>
        </li>
      ))}
    </>
  );
}