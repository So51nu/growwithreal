// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import axios from "axios";

// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_BASE_URL || "https://growlbackend.clickconnectmedia.cloud";

// function slugify(value) {
//   return String(value || "")
//     .trim()
//     .toLowerCase()
//     .replace(/&/g, "and")
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-")
//     .replace(/-+/g, "-");
// }

// function getResultsArray(response) {
//   if (Array.isArray(response)) return response;
//   if (Array.isArray(response?.results)) return response.results;
//   if (Array.isArray(response?.data)) return response.data;
//   return [];
// }

// function uniqueCitiesFromProperties(properties = []) {
//   const cityMap = new Map();

//   properties.forEach((property) => {
//     const city = property?.city || "";
//     const citySlug = property?.city_slug || slugify(city);

//     if (city && citySlug) {
//       const key = citySlug.toLowerCase();

//       if (!cityMap.has(key)) {
//         cityMap.set(key, {
//           text: city,
//           href: `/cities/${citySlug}`,
//         });
//       }
//     }
//   });

//   return Array.from(cityMap.values()).slice(0, 10);
// }

// export default function Footer1({ logo = "/images/logo/growl.png" }) {
//   const [success, setSuccess] = useState(true);
//   const [showMessage, setShowMessage] = useState(false);
//   const [cityLinks, setCityLinks] = useState([]);

//   useEffect(() => {
//     const fetchCitiesFromProperties = async () => {
//       try {
//         const res = await fetch(`${API_BASE_URL}/api/admindashboard/properties/`);
//         const data = await res.json();

//         const properties = getResultsArray(data);

//         const publishedProperties = properties.filter((property) => {
//           const postStatus = String(property?.post_status || "").toLowerCase();
//           const isApproved = property?.is_approved === true;

//           return postStatus === "publish" && isApproved;
//         });

//         const dynamicCities = uniqueCitiesFromProperties(publishedProperties);

//         setCityLinks(dynamicCities);
//       } catch (error) {
//         console.error("Footer cities fetch error:", error);
//         setCityLinks([]);
//       }
//     };

//     fetchCitiesFromProperties();
//   }, []);

//   const footerColumns = useMemo(
//     () => [
//       {
//         title: "Overview",
//         className: "style-2",
//         links: [
//           { text: "Home", href: "/" },
//           { text: "Listing", href: "/property-gird-top-search" },
//           { text: "Cities", href: "/cities" },
//           { text: "Developers", href: "/developers" },
//           { text: "FAQ", href: "/faq" },
//           { text: "Contact", href: "/contact" },
//           { text: "About Us", href: "/about" },
//         ],
//       },
//       {
//   title: "Explore",
//   links: [
//     { text: "Developers", href: "/developers" },
//     { text: "Blog", href: "/blog-list" },
    
//     { text: "Login", href: "#modalLogin", isLoginModal: true },
//     { text: "Referral", href: "#modalLogin", isLoginModal: true },
//   ],
// },
//       {
//         title: "Cities",
//         className: "style-2",
//         links:
//           cityLinks.length > 0
//             ? cityLinks
//             : [{ text: "Cities loading...", href: "/cities" }],
//       },
//     ],
//     [cityLinks]
//   );

//   useEffect(() => {
//     const headings = document.querySelectorAll(".title-mobile");

//     const toggleOpen = (event) => {
//       const parent = event.target.closest(".footer-col-block");
//       const content = parent?.querySelector(".tf-collapse-content");

//       if (!parent || !content) return;

//       if (parent.classList.contains("open")) {
//         parent.classList.remove("open");
//         content.style.height = "0px";
//       } else {
//         parent.classList.add("open");
//         content.style.height = content.scrollHeight + 10 + "px";
//       }
//     };

//     headings.forEach((heading) => {
//       heading.addEventListener("click", toggleOpen);
//     });

//     return () => {
//       headings.forEach((heading) => {
//         heading.removeEventListener("click", toggleOpen);
//       });
//     };
//   }, [footerColumns]);

//   const handleShowMessage = () => {
//     setShowMessage(true);

//     setTimeout(() => {
//       setShowMessage(false);
//     }, 2000);
//   };

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;

//     try {
//       const response = await axios.post(
//         "https://express-brevomail.vercel.app/api/contacts",
//         {
//           email,
//         }
//       );

//       if ([200, 201].includes(response.status)) {
//         e.target.reset();
//         setSuccess(true);
//         handleShowMessage();
//       } else {
//         setSuccess(false);
//         handleShowMessage();
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.data || "An error occurred");
//       setSuccess(false);
//       handleShowMessage();
//       e.target.reset();
//     }
//   };

//   return (
//     <footer id="footer">
//       <div className="tf-container">
//         <div className="row">
//           <div className="col-12">
//             <div className="footer-top">
//               <div className="footer-logo">
//                 <Link href={`/`}>
//                   <Image
//                     id="logo_footer"
//                     alt="logo-footer"
//                     src={logo}
//                     width={272}
//                     height={85}
//                   />
//                 </Link>
//               </div>

//               <div className="wrap-contact-item">
//                 <div className="contact-item">
//                   <div className="icons">
//                     <i className="icon-phone-2" />
//                   </div>

//                   <div className="content">
//                     <div className="title text-1">Call us</div>
//                     <h6>
//                       <a href="tel:+919326183013">+91 9326183013 / +91 91525 01725</a>
//                     </h6>
//                   </div>
//                 </div>

//                 <div className="contact-item">
//                   <div className="icons">
//                     <i className="icon-letter-2" />
//                   </div>

//                   <div className="content">
//                     <div className="title text-1">Need live help</div>
//                     <h6 className="fw-4">
//                       <a href="mailto:info@growlrealestate.com">
//                         info@growlrealestate.com
//                       </a>
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="footer-main">
//             <div className="row">
//               {footerColumns.map((column, index) => (
//                 <div className="col-lg-3 col-md-6" key={index}>
//                   <div
//                     className={`footer-menu-list footer-col-block ${
//                       column.className || ""
//                     }`}
//                   >
//                     <h5 className="title lh-30 title-desktop">
//                       {column.title}
//                     </h5>

//                     <h5 className="title lh-30 title-mobile">
//                       {column.title}
//                     </h5>

//                     <ul className="tf-collapse-content">
//                       {column.links.map((link, linkIndex) => (
//   <li key={linkIndex}>
//     {link.isLoginModal ? (
//       <a
//         href="#modalLogin"
//         data-bs-toggle="modal"
//         data-bs-target="#modalLogin"
//       >
//         {link.text}
//       </a>
//     ) : link.href.startsWith("/") ? (
//       <Link href={link.href}>{link.text}</Link>
//     ) : (
//       <a href={link.href}>{link.text}</a>
//     )}
//   </li>
// ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}

//               <div className="col-lg-3 col-md-6">
//                 <div className="footer-menu-list newsletter">
//                   <h5 className="title lh-30 mb-19">Newsletter</h5>

//                   <div className="sib-form">
//                     <div id="sib-form-container" className="sib-form-container">
//                       <div
//                         id="error-message"
//                         className="sib-form-message-panel"
//                       >
//                         <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
//                           <svg
//                             viewBox="0 0 512 512"
//                             className="sib-icon sib-notification__icon"
//                           >
//                             <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
//                           </svg>

//                           <span className="sib-form-message-panel__inner-text">
//                             Your subscription could not be saved. Please try
//                             again.
//                           </span>
//                         </div>
//                       </div>

//                       <div
//                         id="success-message"
//                         className="sib-form-message-panel"
//                       >
//                         <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
//                           <svg
//                             viewBox="0 0 512 512"
//                             className="sib-icon sib-notification__icon"
//                           >
//                             <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
//                           </svg>

//                           <span className="sib-form-message-panel__inner-text">
//                             Your subscription has been successful.
//                           </span>
//                         </div>
//                       </div>

//                       <div
//                         id="sib-container"
//                         className="sib-container--large sib-container--vertical"
//                       >
//                         <div
//                           className={`tfSubscribeMsg footer-sub-element ${
//                             showMessage ? "active" : ""
//                           }`}
//                         >
//                           {success ? (
//                             <p style={{ color: "rgb(52, 168, 83)" }}>
//                               You have successfully subscribed.
//                             </p>
//                           ) : (
//                             <p style={{ color: "red" }}>Something went wrong</p>
//                           )}
//                         </div>

//                         <form onSubmit={sendEmail} id="sib-form">
//                           <div className="sib-form-block">
//                             <div className="sib-text-form-block">
//                               <p className="text-1">
//                                 Sign up to receive the latest articles
//                               </p>
//                             </div>
//                           </div>

//                           <div className="sib-input sib-form-block mb-11">
//                             <div className="form__entry entry_block">
//                               <div className="form__label-row mb-10">
//                                 <fieldset className="entry__field">
//                                   <input
//                                     className="input input-nl"
//                                     type="text"
//                                     id="EMAIL"
//                                     name="email"
//                                     autoComplete="off"
//                                     placeholder="Your email address"
//                                     data-required="true"
//                                     required
//                                   />
//                                 </fieldset>
//                               </div>

//                               <label className="entry__error entry__error--primary"></label>
//                             </div>
//                           </div>

//                           <div className="sib-form-block">
//                             <button
//                               className="sib-form-block__button sib-form-block__button-with-loader tf-btn bg-color-primary w-full"
//                               form="sib-form"
//                               type="submit"
//                             >
//                               <svg
//                                 className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
//                                 viewBox="0 0 512 512"
//                               >
//                                 <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
//                               </svg>
//                               Subscribe
//                             </button>
//                           </div>

//                           <div className="sib-optin sib-form-block">
//                             <div className="form__entry entry_mcq">
//                               <div className="form__label-row">
//                                 <div className="checkbox-item">
//                                   <label className="mb-0">
//                                     <span className="text-2 text-color-default">
//                                       I have read and agree to the terms &amp;
//                                       conditions
//                                     </span>

//                                     <input
//                                       type="checkbox"
//                                       className="input_replaced"
//                                       defaultValue={1}
//                                       id="OPT_IN"
//                                       name="OPT_IN"
//                                     />

//                                     <span className="btn-checkbox" />
//                                   </label>
//                                 </div>
//                               </div>

//                               <label className="entry__error entry__error--primary"></label>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>

//                     <form onSubmit={(e) => e.preventDefault()}>
//                       <input
//                         type="text"
//                         name="email_address_check"
//                         defaultValue=""
//                         className="input--hidden"
//                       />
//                       <input type="hidden" name="locale" defaultValue="en" />
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-12">
//             <div className="footer-bottom">
//               <p>
//                 Copyright © {new Date().getFullYear()}{" "}
//                 <span className="fw-7">GROWL REAL ESTATE</span>. Designed &amp;
//                 Developed by Click Connect Media
//               </p>

//               <div className="wrap-social">
//                 <div className="text-3 fw-6 text_white">Follow us</div>

//                 <ul className="tf-social">
//                   <li>
//                     <a href="#">
//                       <i className="icon-fb" />
//                     </a>
//                   </li>

//                   <li>
//                     <a href="#">
//                       <i className="icon-X" />
//                     </a>
//                   </li>

//                   <li>
//                     <a href="#">
//                       <i className="icon-linked" />
//                     </a>
//                   </li>

//                   <li>
//                     <a href="#">
//                       <i className="icon-ins" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .footer-menu-list ul li a {
//           text-transform: capitalize;
//         }

//         .footer-menu-list ul li a:hover {
//           color: #ff7a1a;
//         }
//       `}</style>
//     </footer>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const API_BASE_URL =  "https://growlbackend.clickconnectmedia.cloud";

const PROPERTY_API = `${API_BASE_URL}/api/admindashboard/properties/`;
const FOOTER_MENU_API = `${API_BASE_URL}/api/footermenu/`;
const ITEMS_PER_CLICK = 25;

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function titleCase(value) {
  return String(value || "")
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\w\S*/g, (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    });
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function getResultsArray(response) {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.results)) return response.results;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.properties)) return response.properties;
  if (Array.isArray(response?.projects)) return response.projects;
  return [];
}

function getSearchLink(params = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      query.set(key, String(value).trim());
    }
  });

  const queryString = query.toString();

  return queryString
    ? `/property-gird-top-search?${queryString}`
    : "/property-gird-top-search";
}

function uniqueByText(items = []) {
  const map = new Map();

  items.forEach((item) => {
    const key = normalizeText(item?.text || item?.title);

    if (!key) return;

    if (!map.has(key)) {
      map.set(key, item);
    }
  });

  return Array.from(map.values());
}

function getDomesticCityItems(properties = []) {
  const items = properties
    .filter((property) => {
      const country = normalizeText(property?.country);
      return !country || country === "india" || country === "indial";
    })
    .map((property) => {
      const city = property?.city || "";
      const citySlug = property?.city_slug || slugify(city);

      if (!city) return null;

      return {
        text: titleCase(city),
        href: citySlug ? `/cities/${citySlug}` : getSearchLink({ city }),
      };
    })
    .filter(Boolean);

  return uniqueByText(items);
}

function getInternationalCityItems(properties = []) {
  const items = properties
    .filter((property) => {
      const country = normalizeText(property?.country);
      return country && country !== "india" && country !== "indial";
    })
    .map((property) => {
      const city = property?.city || "";
      const country = property?.country || "";

      if (!city) return null;

      return {
        text: titleCase(city),
        href: getSearchLink({ city, country }),
      };
    })
    .filter(Boolean);

  return uniqueByText(items);
}

function getRegionItems(properties = []) {
  const items = [];

  properties.forEach((property) => {
    const regionValues = [
      property?.neighborhood,
      property?.short_location,
      property?.location,
      property?.state,
    ].filter(Boolean);

    regionValues.forEach((value) => {
      const cleanValue = String(value || "").trim();

      if (!cleanValue) return;

      items.push({
        text: titleCase(cleanValue),
        href: getSearchLink({ location: cleanValue }),
      });
    });
  });

  return uniqueByText(items);
}

function getCountryItems(properties = []) {
  const items = properties
    .map((property) => {
      const country = property?.country || "";

      if (!country) return null;

      return {
        text: titleCase(country),
        href: getSearchLink({ country }),
      };
    })
    .filter(Boolean);

  return uniqueByText(items);
}

function normalizeMenuItem(item) {
  return {
    id: item?.id,
    text: item?.text || item?.title || "Menu item",
    href: item?.href || item?.url || "/",
    is_login_modal: item?.is_login_modal || item?.isLoginModal || false,
  };
}

function normalizeSection(section) {
  return {
    id: section?.slug || section?.id || section?.title,
    label: section?.title || "Section",
    slug: section?.slug || "",
    section_type: section?.section_type || "column",
    items: Array.isArray(section?.items)
      ? section.items.map(normalizeMenuItem)
      : [],
  };
}

function FooterLink({ link, className = "" }) {
  const href = link?.href || "/";

  if (link?.is_login_modal || href === "#modalLogin") {
    return (
      <a
        href="#modalLogin"
        data-bs-toggle="modal"
        data-bs-target="#modalLogin"
        className={className}
      >
        {link.text}
      </a>
    );
  }

  if (String(href).startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {link.text}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {link.text}
    </a>
  );
}

export default function Footer1() {
  const [properties, setProperties] = useState([]);
  const [footerTabsFromApi, setFooterTabsFromApi] = useState([]);
  const [footerColumnsFromApi, setFooterColumnsFromApi] = useState([]);
  const [activeTab, setActiveTab] = useState("domestic");
  const [visibleCountByTab, setVisibleCountByTab] = useState({});
  const [openMobileColumns, setOpenMobileColumns] = useState({});

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(PROPERTY_API, {
          method: "GET",
          headers: { Accept: "application/json" },
          cache: "no-store",
        });

        const data = await res.json();
        const result = getResultsArray(data);

        const publishedProperties = result.filter((property) => {
          const postStatus = normalizeText(property?.post_status);
          const isApproved = property?.is_approved === true;

          return postStatus === "publish" && isApproved;
        });

        setProperties(publishedProperties);
      } catch (error) {
        console.error("Footer properties fetch error:", error);
        setProperties([]);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    const fetchFooterMenu = async () => {
      try {
        const res = await fetch(FOOTER_MENU_API, {
          method: "GET",
          headers: { Accept: "application/json" },
          cache: "no-store",
        });

        const data = await res.json();

        const apiTabs = Array.isArray(data?.tabs)
          ? data.tabs.map(normalizeSection)
          : [];

        const apiColumns = Array.isArray(data?.columns)
          ? data.columns.map(normalizeSection)
          : [];

        setFooterTabsFromApi(apiTabs);
        setFooterColumnsFromApi(apiColumns);

        if (apiTabs.length > 0) {
          setActiveTab(apiTabs[0].slug || apiTabs[0].id);
        }

        const defaultOpen = {};
        apiColumns.forEach((column, index) => {
          defaultOpen[column.slug || column.id] = index === 0;
        });
        setOpenMobileColumns(defaultOpen);
      } catch (error) {
        console.error("Footer menu fetch error:", error);
        setFooterTabsFromApi([]);
        setFooterColumnsFromApi([]);
      }
    };

    fetchFooterMenu();
  }, []);

  const dynamicTabItems = useMemo(() => {
    return {
      domestic: getDomesticCityItems(properties),
      international: getInternationalCityItems(properties),
      regions: getRegionItems(properties),
      countries: getCountryItems(properties),
    };
  }, [properties]);

  const tabData = useMemo(() => {
    return footerTabsFromApi.map((section) => {
      let items = section.items || [];

      if (section.slug === "domestic") {
        items =
          dynamicTabItems.domestic.length > 0
            ? dynamicTabItems.domestic
            : [{ text: "No found", href: "/" }];
      }

      if (section.slug === "international") {
        items =
          dynamicTabItems.international.length > 0
            ? dynamicTabItems.international
            : [{ text: "No found", href: "/" }];
      }

      if (section.slug === "regions") {
        items =
          dynamicTabItems.regions.length > 0
            ? dynamicTabItems.regions
            : [{ text: "No found", href: "/" }];
      }

      if (section.slug === "countries") {
        items =
          dynamicTabItems.countries.length > 0
            ? dynamicTabItems.countries
            : [{ text: "No found", href: "/" }];
      }

      return {
        id: section.slug || section.id,
        label: section.label,
        slug: section.slug,
        items,
      };
    });
  }, [footerTabsFromApi, dynamicTabItems]);

  const activeTabData =
    tabData.find((tab) => tab.id === activeTab || tab.slug === activeTab) ||
    tabData[0];

  const activeTabId = activeTabData?.id || "default";
  const visibleCount = visibleCountByTab[activeTabId] || ITEMS_PER_CLICK;

  const visibleItems = activeTabData?.items
    ? activeTabData.items.slice(0, visibleCount)
    : [];

  const hasMoreItems = activeTabData?.items?.length > visibleCount;

  const handleShowMore = () => {
    if (!activeTabData) return;

    setVisibleCountByTab((prev) => ({
      ...prev,
      [activeTabId]: Math.min(
        (prev[activeTabId] || ITEMS_PER_CLICK) + ITEMS_PER_CLICK,
        activeTabData.items.length
      ),
    }));
  };

  const toggleMobileColumn = (columnId) => {
    setOpenMobileColumns((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  const footerColumns = footerColumnsFromApi;

  return (
    <footer className="booking-style-footer">
      {tabData.length > 0 && (
        <div className="footer-destination-area">
          <div className="tf-container">
            <div className="footer-tabs">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`footer-tab-btn ${
                    activeTab === tab.id || activeTab === tab.slug ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="footer-tab-content">
              {visibleItems.map((item, index) => (
                <FooterLink
                  key={`${activeTabId}-${item.text}-${index}`}
                  link={item}
                  className="footer-destination-link"
                />
              ))}
            </div>

            {hasMoreItems && (
              <button
                type="button"
                className="footer-show-more"
                onClick={handleShowMore}
              >
                <span>+</span>
                Show more
              </button>
            )}
          </div>
        </div>
      )}

      {footerColumns.length > 0 && (
        <div className="footer-main-area">
          <div className="tf-container">
            <div className="footer-columns">
              {footerColumns.map((column) => {
                const columnId = column.slug || column.id;
                const isOpen = openMobileColumns[columnId] === true;

                return (
                  <div
                    className={`footer-column ${isOpen ? "mobile-open" : ""}`}
                    key={column.id}
                  >
                    <button
                      type="button"
                      className="footer-column-title"
                      onClick={() => toggleMobileColumn(columnId)}
                    >
                      <span>{column.label}</span>
                      <span className="footer-accordion-icon">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <ul>
                      {column.items.map((link, index) => (
                        <li key={`${column.id}-${index}`}>
                          <FooterLink link={link} />
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="footer-bottom-row">
              <div className="footer-currency">
                <span className="footer-flag">🇮🇳</span>
                <span>INR</span>
              </div>

              <p>
                Copyright © {new Date().getFullYear()}{" "}
                <strong>GROWL REAL ESTATE</strong>. Designed &amp; Developed by
                Click Connect Media
              </p>

              <div className="footer-social">
                <a href="/" aria-label="Facebook">
                  <i className="icon-fb" />
                </a>

                <a href="/" aria-label="X">
                  <i className="icon-X" />
                </a>

                <a href="/" aria-label="LinkedIn">
                  <i className="icon-linked" />
                </a>

                <a href="/" aria-label="Instagram">
                  <i className="icon-ins" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .booking-style-footer,
        .booking-style-footer * {
          opacity: 1 !important;
          visibility: visible !important;
          box-sizing: border-box;
        }

        .booking-style-footer {
          width: 100%;
          background: #2b2d31 !important;
          color: #ffffff !important;
          font-family: inherit;
          overflow: hidden;
        }

        .booking-style-footer .tf-container {
          max-width: 1440px;
          margin: 0 auto;
          padding-left: 28px;
          padding-right: 28px;
        }

        /* ─── DESTINATION / TAB AREA ─────────────────────────────── */

        .footer-destination-area {
          background: #2b2d31 !important;
          padding: 30px 0 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* FIX: tabs scroll horizontally on ALL screen sizes */
        .footer-tabs {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          margin-bottom: 24px;
          padding-bottom: 4px;
        }

        .footer-tabs::-webkit-scrollbar {
          display: none;
        }

        .footer-tab-btn {
          border: 0;
          outline: none;
          background: transparent;
          color: #ffffff !important;
          font-size: 15px;
          line-height: 1;
          font-weight: 800;
          padding: 13px 20px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .footer-tab-btn:hover {
          color: #ffffff !important;
          background: rgba(255, 122, 26, 0.18);
        }

        .footer-tab-btn.active {
          color: #ffffff !important;
          background: rgba(255, 122, 26, 0.14);
          box-shadow: inset 0 0 0 1.5px #ff7a1a;
        }

        /* FIX: city grid scrolls vertically — no more hidden content */
        .footer-tab-content {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 15px 48px;
          margin-bottom: 18px;
          max-height: 320px;
          overflow-y: auto;
          overflow-x: hidden;
          padding-right: 6px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 122, 26, 0.5) rgba(255, 255, 255, 0.08);
        }

        .footer-tab-content::-webkit-scrollbar {
          width: 4px;
        }

        .footer-tab-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
        }

        .footer-tab-content::-webkit-scrollbar-thumb {
          background: rgba(255, 122, 26, 0.5);
          border-radius: 4px;
        }

        .footer-destination-link {
          display: inline-flex !important;
          color: #f1f5f9 !important;
          font-size: 15px !important;
          line-height: 1.35;
          font-weight: 600 !important;
          text-decoration: none !important;
          width: fit-content;
          transition: color 0.2s ease;
        }

        .footer-destination-link:hover {
          color: #ff7a1a !important;
        }

        .footer-show-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ff7a1a !important;
          background: transparent;
          border: 0;
          font-size: 15px;
          font-weight: 800;
          padding: 4px 0;
          cursor: pointer;
        }

        .footer-show-more span {
          font-size: 22px;
          font-weight: 300;
          line-height: 1;
        }

        /* ─── MAIN COLUMNS AREA ──────────────────────────────────── */

        .footer-main-area {
          background: #2b2d31 !important;
          padding: 34px 0 22px;
        }

        .footer-columns {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 38px;
        }

        .footer-column-title {
          width: 100%;
          display: block;
          border: 0;
          background: transparent;
          padding: 0;
          text-align: left;
          color: #ffffff !important;
          cursor: default;
        }

        .footer-column-title span:first-child {
          color: #ffffff !important;
          font-size: 19px !important;
          line-height: 1.35;
          font-weight: 900 !important;
        }

        .footer-accordion-icon {
          display: none;
        }

        .footer-column ul {
          list-style: none !important;
          margin: 18px 0 0 !important;
          padding: 0 !important;
        }

        .footer-column li {
          margin-bottom: 12px !important;
          color: #f1f5f9 !important;
        }

        .footer-column a {
          position: relative;
          color: #f1f5f9 !important;
          font-size: 15px !important;
          line-height: 1.45;
          font-weight: 600 !important;
          text-decoration: none !important;
          transition: all 0.2s ease;
        }

        .footer-column a:hover {
          color: #ff7a1a !important;
        }

        .footer-column a::before {
          content: "›";
          color: #ff7a1a !important;
          font-size: 24px;
          line-height: 1;
          margin-right: 10px;
          vertical-align: -1px;
        }

        /* ─── BOTTOM ROW ─────────────────────────────────────────── */

        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          margin-top: 30px;
          padding-top: 20px;
        }

        .footer-currency {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffffff !important;
          font-size: 18px;
          font-weight: 900;
        }

        .footer-flag {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          font-size: 18px;
        }

        .footer-bottom-row p {
          margin: 0 !important;
          color: #f1f5f9 !important;
          font-size: 14px;
          line-height: 1.5;
          text-align: center;
          font-weight: 500;
        }

        .footer-bottom-row p strong {
          color: #ffffff !important;
          font-weight: 900;
        }

        .footer-social {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-social a {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.22);
          text-decoration: none !important;
          transition: all 0.2s ease;
        }

        .footer-social a:hover {
          color: #ffffff !important;
          background: #ff7a1a;
          border-color: #ff7a1a;
        }

        /* ─── RESPONSIVE ─────────────────────────────────────────── */

        @media (max-width: 1199px) {
          .footer-tab-content {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px 30px;
          }

          .footer-columns {
            gap: 28px;
          }
        }

        @media (max-width: 991px) {
          .booking-style-footer .tf-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .footer-destination-area {
            padding: 18px 0 18px;
          }

          /* tabs: already nowrap + overflow-x:auto from base — just tweak sizing */
          .footer-tabs {
            gap: 10px;
            margin-bottom: 20px;
            padding-bottom: 4px;
          }

          .footer-tab-btn {
            font-size: 13px;
            padding: 10px 15px;
          }

          .footer-tab-content {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px 16px;
            margin-bottom: 14px;
            max-height: 260px;
          }

          .footer-destination-link {
            font-size: 12.5px !important;
            line-height: 1.35;
            font-weight: 500 !important;
          }

          .footer-show-more {
            font-size: 13px;
            padding: 2px 0;
          }

          .footer-main-area {
            padding: 0 0 18px;
          }

          .footer-columns {
            display: block;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .footer-column {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .footer-column-title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 0;
            cursor: pointer;
          }

          .footer-column-title span:first-child {
            font-size: 14px !important;
            font-weight: 800 !important;
          }

          .footer-accordion-icon {
            display: inline-flex;
            color: #ffffff !important;
            font-size: 22px;
            font-weight: 300;
            line-height: 1;
          }

          .footer-column ul {
            display: none;
            margin: 0 0 14px !important;
            padding: 0 0 2px !important;
          }

          .footer-column.mobile-open ul {
            display: block;
          }

          .footer-column li {
            margin-bottom: 9px !important;
          }

          .footer-column a {
            font-size: 13px !important;
            font-weight: 500 !important;
          }

          .footer-column a::before {
            font-size: 20px;
            margin-right: 8px;
          }

          .footer-bottom-row {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            gap: 14px;
            margin-top: 20px;
            padding-top: 18px;
          }

          .footer-currency {
            font-size: 14px;
          }

          .footer-flag {
            width: 26px;
            height: 26px;
            font-size: 15px;
          }

          .footer-bottom-row p {
            max-width: 310px;
            font-size: 11px;
            line-height: 1.5;
          }

          .footer-social {
            gap: 10px;
          }

          .footer-social a {
            width: 34px;
            height: 34px;
          }
        }

        @media (max-width: 575px) {
          .booking-style-footer .tf-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .footer-tab-content {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 11px 14px;
            max-height: 220px;
          }

          .footer-destination-link {
            font-size: 11.5px !important;
          }

          .footer-tabs {
            margin-bottom: 18px;
          }

          .footer-tab-btn {
            font-size: 12px;
            padding: 9px 13px;
          }

          .footer-column-title {
            padding: 13px 0;
          }

          .footer-bottom-row p {
            font-size: 10.5px;
          }
        }

        @media (max-width: 380px) {
          .footer-tab-content {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-height: 200px;
          }
        }
      `}</style>
    </footer>
  );
}