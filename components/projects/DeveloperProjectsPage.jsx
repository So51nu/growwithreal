// // // // // // "use client";

// // // // // // import React, { useEffect, useMemo, useState } from "react";
// // // // // // import Link from "next/link";
// // // // // // import Image from "next/image";
// // // // // // import SearchForm from "../common/SearchForm";
// // // // // // import { apiGet } from "../lib/api";

// // // // // // function toNumber(value) {
// // // // // //   const num = Number(value);
// // // // // //   return Number.isFinite(num) ? num : 0;
// // // // // // }

// // // // // // function normalizeText(value) {
// // // // // //   return String(value || "").trim().toLowerCase();
// // // // // // }

// // // // // // function formatPrice(price) {
// // // // // //   const num = Number(price || 0);
// // // // // //   if (!num) return "Price on request";
// // // // // //   if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
// // // // // //   if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
// // // // // //   return `₹${num.toLocaleString("en-IN")}`;
// // // // // // }

// // // // // // function matchesCountFilter(actual, selected) {
// // // // // //   if (!selected) return true;
// // // // // //   const value = toNumber(actual);
// // // // // //   if (selected === "5+") return value >= 5;
// // // // // //   if (selected === "4+") return value >= 4;
// // // // // //   return value === Number(selected);
// // // // // // }

// // // // // // export default function DeveloperProjectsPage({ developerSlug }) {
// // // // // //   const [projects, setProjects] = useState([]);
// // // // // //   const [filters, setFilters] = useState({
// // // // // //     keyword: "",
// // // // // //     city: "",
// // // // // //     location: "",
// // // // // //     propertyType: "",
// // // // // //     propertyStatus: "",
// // // // // //     bedrooms: "",
// // // // // //     bathrooms: "",
// // // // // //     amenities: [],
// // // // // //     sortBy: "Newest",
// // // // // //     priceRange: [0, 50000000],
// // // // // //     areaRange: [0, 5000],
// // // // // //   });

// // // // // //   useEffect(() => {
// // // // // //     const loadProjects = async () => {
// // // // // //       try {
// // // // // //         const res = await apiGet(
// // // // // //           `/admindashboard/developers/${developerSlug}/properties/`
// // // // // //         );
// // // // // //         setProjects(Array.isArray(res) ? res : []);
// // // // // //       } catch (error) {
// // // // // //         console.error("Developer projects fetch error:", error);
// // // // // //         setProjects([]);
// // // // // //       }
// // // // // //     };

// // // // // //     loadProjects();
// // // // // //   }, [developerSlug]);

// // // // // //   const filteredProjects = useMemo(() => {
// // // // // //     let data = [...projects];

// // // // // //     data = data.filter((project) => {
// // // // // //       const locationValue =
// // // // // //         project.short_location || project.location || project.full_address || "";

// // // // // //       const searchableText = normalizeText(
// // // // // //         [
// // // // // //           project.title,
// // // // // //           project.city,
// // // // // //           project.short_location,
// // // // // //           project.location,
// // // // // //           project.full_address,
// // // // // //           project.developer_name,
// // // // // //           project.property_type,
// // // // // //           project.property_status,
// // // // // //         ].join(" ")
// // // // // //       );

// // // // // //       const keywordMatch =
// // // // // //         !filters.keyword ||
// // // // // //         searchableText.includes(normalizeText(filters.keyword));

// // // // // //       const cityMatch = !filters.city || project.city === filters.city;

// // // // // //       const locationMatch =
// // // // // //         !filters.location || locationValue === filters.location;

// // // // // //       const typeMatch =
// // // // // //         !filters.propertyType || project.property_type === filters.propertyType;

// // // // // //       const statusMatch =
// // // // // //         !filters.propertyStatus ||
// // // // // //         project.property_status === filters.propertyStatus;

// // // // // //       const bedroomsMatch = matchesCountFilter(project.bedrooms, filters.bedrooms);
// // // // // //       const bathroomsMatch = matchesCountFilter(project.bathrooms, filters.bathrooms);

// // // // // //       const price = toNumber(project.price);
// // // // // //       const area = toNumber(project.carpet_area || project.size_sqft);

// // // // // //       const priceMatch =
// // // // // //         price >= filters.priceRange[0] && price <= filters.priceRange[1];

// // // // // //       const areaMatch =
// // // // // //         area >= filters.areaRange[0] && area <= filters.areaRange[1];

// // // // // //       const projectAmenities = Array.isArray(project.amenities)
// // // // // //         ? project.amenities
// // // // // //         : [];

// // // // // //       const amenitiesMatch =
// // // // // //         filters.amenities.length === 0 ||
// // // // // //         filters.amenities.every((item) => projectAmenities.includes(item));

// // // // // //       return (
// // // // // //         keywordMatch &&
// // // // // //         cityMatch &&
// // // // // //         locationMatch &&
// // // // // //         typeMatch &&
// // // // // //         statusMatch &&
// // // // // //         bedroomsMatch &&
// // // // // //         bathroomsMatch &&
// // // // // //         priceMatch &&
// // // // // //         areaMatch &&
// // // // // //         amenitiesMatch
// // // // // //       );
// // // // // //     });

// // // // // //     switch (filters.sortBy) {
// // // // // //       case "Oldest":
// // // // // //         data.sort(
// // // // // //           (a, b) =>
// // // // // //             new Date(a.posting_date || 0).getTime() -
// // // // // //             new Date(b.posting_date || 0).getTime()
// // // // // //         );
// // // // // //         break;
// // // // // //       case "Price Low to High":
// // // // // //         data.sort((a, b) => toNumber(a.price) - toNumber(b.price));
// // // // // //         break;
// // // // // //       case "Price High to Low":
// // // // // //         data.sort((a, b) => toNumber(b.price) - toNumber(a.price));
// // // // // //         break;
// // // // // //       case "Area Low to High":
// // // // // //         data.sort(
// // // // // //           (a, b) =>
// // // // // //             toNumber(a.carpet_area || a.size_sqft) -
// // // // // //             toNumber(b.carpet_area || b.size_sqft)
// // // // // //         );
// // // // // //         break;
// // // // // //       case "Area High to Low":
// // // // // //         data.sort(
// // // // // //           (a, b) =>
// // // // // //             toNumber(b.carpet_area || b.size_sqft) -
// // // // // //             toNumber(a.carpet_area || a.size_sqft)
// // // // // //         );
// // // // // //         break;
// // // // // //       case "Newest":
// // // // // //       default:
// // // // // //         data.sort(
// // // // // //           (a, b) =>
// // // // // //             new Date(b.posting_date || 0).getTime() -
// // // // // //             new Date(a.posting_date || 0).getTime()
// // // // // //         );
// // // // // //         break;
// // // // // //     }

// // // // // //     return data;
// // // // // //   }, [projects, filters]);

// // // // // //   const developerName =
// // // // // //     projects[0]?.developer_name || developerSlug.replaceAll("-", " ");

// // // // // //   return (
// // // // // //     <section className="section-property-layout style-1">
// // // // // //       <div className="tf-container">
// // // // // //         <div style={{ marginBottom: 24 }}>
// // // // // //           <h2 className="title">Projects by {developerName}</h2>
// // // // // //           <p className="text-1">
// // // // // //             Showing all projects by {developerName} across all cities and locations
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <div style={{ marginBottom: 30 }}>
// // // // // //           <SearchForm
// // // // // //             projects={projects}
// // // // // //             onFilterChange={setFilters}
// // // // // //             lockedDeveloper={developerName}
// // // // // //           />
// // // // // //         </div>

// // // // // //         <div style={{ marginBottom: 20 }}>
// // // // // //           <p className="text-1">
// // // // // //             Showing {filteredProjects.length} project
// // // // // //             {filteredProjects.length === 1 ? "" : "s"}
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <div className="row">
// // // // // //           {filteredProjects.map((project) => (
// // // // // //             <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
// // // // // //               <div className="box-house hover-img">
// // // // // //                 <div className="image-wrap">
// // // // // //                   <Link href={`/property-detail-v1/${project.id}`}>
// // // // // //                     <Image
// // // // // //                       alt={project.title || "Property"}
// // // // // //                       src={project.imageSrc || "/images/home/house-db-1.jpg"}
// // // // // //                       width={615}
// // // // // //                       height={405}
// // // // // //                     />
// // // // // //                   </Link>
// // // // // //                 </div>

// // // // // //                 <div className="content">
// // // // // //                   <h5 className="title">
// // // // // //                     <Link href={`/property-detail-v1/${project.id}`}>
// // // // // //                       {project.title}
// // // // // //                     </Link>
// // // // // //                   </h5>

// // // // // //                   <p className="location text-1 flex items-center gap-6">
// // // // // //                     <i className="icon-location" />
// // // // // //                     {project.short_location ||
// // // // // //                       project.location ||
// // // // // //                       project.full_address}
// // // // // //                   </p>

// // // // // //                   <p className="text-1" style={{ marginTop: 6 }}>
// // // // // //                     <Link href={`/cities/${project.city_slug}`}>{project.city}</Link>
// // // // // //                   </p>

// // // // // //                   <div className="price text-3 fw-6" style={{ marginTop: 8 }}>
// // // // // //                     {formatPrice(project.price)}
// // // // // //                   </div>

// // // // // //                   <ul className="meta-list flex" style={{ marginTop: 8 }}>
// // // // // //                     <li className="text-1 flex">
// // // // // //                       <span>{project.bedrooms || 0}</span>BHK
// // // // // //                     </li>
// // // // // //                     <li className="text-1 flex">
// // // // // //                       <span>{project.bathrooms || 0}</span>Bath
// // // // // //                     </li>
// // // // // //                     <li className="text-1 flex">
// // // // // //                       <span>{project.carpet_area || project.size_sqft || "-"}</span>
// // // // // //                       Sqft
// // // // // //                     </li>
// // // // // //                   </ul>

// // // // // //                   <div
// // // // // //                     className="bot flex justify-between items-center"
// // // // // //                     style={{ marginTop: 14 }}
// // // // // //                   >
// // // // // //                     <Link
// // // // // //                       href={`/property-detail-v1/${project.id}`}
// // // // // //                       className="tf-btn style-border pd-4"
// // // // // //                     >
// // // // // //                       Details
// // // // // //                     </Link>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}

// // // // // //           {filteredProjects.length === 0 && (
// // // // // //             <div className="col-12">
// // // // // //               <p>No properties found for the selected filters.</p>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import React, { useEffect, useMemo, useState } from "react";
// // // // // import Link from "next/link";
// // // // // import Image from "next/image";
// // // // // import SearchForm from "../common/SearchForm";
// // // // // import { apiGet, apiPost } from "../lib/api";

// // // // // function toNumber(value) {
// // // // //   const num = Number(value);
// // // // //   return Number.isFinite(num) ? num : 0;
// // // // // }

// // // // // function normalizeText(value) {
// // // // //   return String(value || "").trim().toLowerCase();
// // // // // }

// // // // // function formatPrice(price) {
// // // // //   const num = Number(price || 0);
// // // // //   if (!num) return "Price on request";
// // // // //   if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
// // // // //   if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
// // // // //   return `₹${num.toLocaleString("en-IN")}`;
// // // // // }

// // // // // function matchesCountFilter(actual, selected) {
// // // // //   if (!selected) return true;
// // // // //   const value = toNumber(actual);
// // // // //   if (selected === "5+") return value >= 5;
// // // // //   if (selected === "4+") return value >= 4;
// // // // //   return value === Number(selected);
// // // // // }

// // // // // function getStoredUser() {
// // // // //   if (typeof window === "undefined") return null;
// // // // //   try {
// // // // //     return JSON.parse(localStorage.getItem("userData") || "null");
// // // // //   } catch {
// // // // //     return null;
// // // // //   }
// // // // // }

// // // // // function getImage(project) {
// // // // //   return (
// // // // //     project?.image ||
// // // // //     project?.imageSrc ||
// // // // //     project?.featured_image ||
// // // // //     project?.cover_image ||
// // // // //     project?.thumbnail ||
// // // // //     "/images/home/house-db-1.jpg"
// // // // //   );
// // // // // }

// // // // // function getLocation(project) {
// // // // //   return (
// // // // //     project?.short_location ||
// // // // //     project?.location ||
// // // // //     project?.full_address ||
// // // // //     "Location on request"
// // // // //   );
// // // // // }

// // // // // function getConfiguration(project) {
// // // // //   if (project?.configuration) return project.configuration;
// // // // //   if (project?.configuration_text) return project.configuration_text;
// // // // //   if (project?.bedrooms) return `${project.bedrooms} BHK`;
// // // // //   if (project?.property_type) return project.property_type;
// // // // //   return "Configuration on request";
// // // // // }

// // // // // function getPhone(project) {
// // // // //   return (
// // // // //     project?.seller_phone ||
// // // // //     project?.phone ||
// // // // //     project?.contact_phone ||
// // // // //     project?.contact_number ||
// // // // //     project?.contact_seller_phone ||
// // // // //     project?.contact_seller?.phone ||
// // // // //     project?.contact_seller?.office_number ||
// // // // //     ""
// // // // //   );
// // // // // }

// // // // // const actionBtnStyle = {
// // // // //   width: "56px",
// // // // //   height: "56px",
// // // // //   minWidth: "56px",
// // // // //   borderRadius: "50%",
// // // // //   border: "none",
// // // // //   background: "rgba(35, 35, 35, 0.60)",
// // // // //   backdropFilter: "blur(6px)",
// // // // //   WebkitBackdropFilter: "blur(6px)",
// // // // //   display: "flex",
// // // // //   alignItems: "center",
// // // // //   justifyContent: "center",
// // // // //   cursor: "pointer",
// // // // //   boxShadow: "0 8px 24px rgba(0,0,0,0.20)",
// // // // //   padding: 0,
// // // // // };

// // // // // function BookmarkIcon({ active = false }) {
// // // // //   return (
// // // // //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
// // // // //       <path
// // // // //         d="M7 4.75H17C17.69 4.75 18.25 5.31 18.25 6V20L12 16.2L5.75 20V6C5.75 5.31 6.31 4.75 7 4.75Z"
// // // // //         stroke={active ? "#ff8c5a" : "#ffffff"}
// // // // //         strokeWidth="2"
// // // // //         strokeLinecap="round"
// // // // //         strokeLinejoin="round"
// // // // //       />
// // // // //     </svg>
// // // // //   );
// // // // // }

// // // // // function HeartIcon({ active = false }) {
// // // // //   return (
// // // // //     <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#ff8c5a" : "none"}>
// // // // //       <path
// // // // //         d="M12 20.5C12 20.5 4.5 16 4.5 9.75C4.5 7.4 6.4 5.5 8.75 5.5C10.2 5.5 11.48 6.22 12 7.32C12.52 6.22 13.8 5.5 15.25 5.5C17.6 5.5 19.5 7.4 19.5 9.75C19.5 16 12 20.5 12 20.5Z"
// // // // //         stroke={active ? "#ff8c5a" : "#ffffff"}
// // // // //         strokeWidth="2"
// // // // //         strokeLinecap="round"
// // // // //         strokeLinejoin="round"
// // // // //       />
// // // // //     </svg>
// // // // //   );
// // // // // }

// // // // // function PhoneIcon() {
// // // // //   return (
// // // // //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
// // // // //       <path
// // // // //         d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C11.61 20.92 4 13.31 4 3.92C4 3.37 4.45 2.92 5 2.92H8C8.55 2.92 9 3.37 9 3.92V6.88C9 7.32 8.71 7.71 8.29 7.84L6.77 8.35C7.55 10.6 9.32 12.37 11.57 13.15L12.08 11.63C12.21 11.21 12.6 10.92 13.04 10.92H16C16.55 10.92 17 11.37 17 11.92V14.92C17 15.47 16.55 15.92 16 15.92H13.5"
// // // // //         stroke="#ffffff"
// // // // //         strokeWidth="2"
// // // // //         strokeLinecap="round"
// // // // //         strokeLinejoin="round"
// // // // //       />
// // // // //     </svg>
// // // // //   );
// // // // // }

// // // // // export default function DeveloperProjectsPage({ developerSlug }) {
// // // // //   const [projects, setProjects] = useState([]);
// // // // //   const [filters, setFilters] = useState({
// // // // //     keyword: "",
// // // // //     city: "",
// // // // //     location: "",
// // // // //     propertyType: "",
// // // // //     propertyStatus: "",
// // // // //     bedrooms: "",
// // // // //     bathrooms: "",
// // // // //     amenities: [],
// // // // //     sortBy: "Newest",
// // // // //     priceRange: [0, 50000000],
// // // // //     areaRange: [0, 5000],
// // // // //   });

// // // // //   const [selectedProperty, setSelectedProperty] = useState(null);
// // // // //   const [bookingOpen, setBookingOpen] = useState(false);
// // // // //   const [bookingLoading, setBookingLoading] = useState(false);
// // // // //   const [message, setMessage] = useState("");

// // // // //   const [bookingForm, setBookingForm] = useState({
// // // // //     name: "",
// // // // //     phone: "",
// // // // //     visit_date: "",
// // // // //     visit_time: "",
// // // // //     message: "",
// // // // //   });

// // // // //   const user = getStoredUser();

// // // // //   const loadProjects = async () => {
// // // // //     try {
// // // // //       const res = await apiGet(
// // // // //         `/admindashboard/developers/${developerSlug}/properties/`
// // // // //       );
// // // // //       const baseList = Array.isArray(res) ? res : [];

// // // // //       let favoriteIds = [];
// // // // //       let likedIds = [];

// // // // //       if (user?.id) {
// // // // //         try {
// // // // //           const [favRes, likedRes] = await Promise.all([
// // // // //             apiGet(`/admindashboard/customer/${user.id}/favorite-properties/`),
// // // // //             apiGet(`/admindashboard/customer/${user.id}/liked-videos/`),
// // // // //           ]);

// // // // //           const favList = Array.isArray(favRes)
// // // // //             ? favRes
// // // // //             : Array.isArray(favRes?.data)
// // // // //             ? favRes.data
// // // // //             : [];

// // // // //           const likedList = Array.isArray(likedRes)
// // // // //             ? likedRes
// // // // //             : Array.isArray(likedRes?.data)
// // // // //             ? likedRes.data
// // // // //             : [];

// // // // //           favoriteIds = favList.map((item) => item.id);
// // // // //           likedIds = likedList.map((item) => item.id);
// // // // //         } catch (error) {
// // // // //           console.error("Favorite/liked fetch error:", error);
// // // // //         }
// // // // //       }

// // // // //       const merged = baseList.map((project) => ({
// // // // //         ...project,
// // // // //         imageSrc: getImage(project),
// // // // //         seller_phone: getPhone(project),
// // // // //         configuration_text: getConfiguration(project),
// // // // //         is_favorite: favoriteIds.includes(project.id),
// // // // //         is_liked: likedIds.includes(project.id),
// // // // //       }));

// // // // //       setProjects(merged);
// // // // //     } catch (error) {
// // // // //       console.error("Developer projects fetch error:", error);
// // // // //       setProjects([]);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     loadProjects();
// // // // //   }, [developerSlug]);

// // // // //   const handleFavorite = async (id) => {
// // // // //     if (!user?.id) {
// // // // //       alert("Please login as customer first.");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const res = await apiPost(`/admindashboard/customer/toggle-favorite/`, {
// // // // //         user_id: user.id,
// // // // //         property_id: id,
// // // // //       });

// // // // //       setProjects((prev) =>
// // // // //         prev.map((item) =>
// // // // //           item.id === id
// // // // //             ? {
// // // // //                 ...item,
// // // // //                 is_favorite:
// // // // //                   typeof res?.is_favorite === "boolean"
// // // // //                     ? res.is_favorite
// // // // //                     : !item.is_favorite,
// // // // //               }
// // // // //             : item
// // // // //         )
// // // // //       );
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //       alert(error.message || "Favorite update failed");
// // // // //     }
// // // // //   };

// // // // //   const handleLiked = async (id) => {
// // // // //     if (!user?.id) {
// // // // //       alert("Please login as customer first.");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const res = await apiPost(`/admindashboard/customer/like-video/`, {
// // // // //         user_id: user.id,
// // // // //         property_id: id,
// // // // //       });

// // // // //       setProjects((prev) =>
// // // // //         prev.map((item) =>
// // // // //           item.id === id
// // // // //             ? {
// // // // //                 ...item,
// // // // //                 is_liked:
// // // // //                   typeof res?.liked === "boolean"
// // // // //                     ? res.liked
// // // // //                     : !item.is_liked,
// // // // //               }
// // // // //             : item
// // // // //         )
// // // // //       );
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //       alert(error.message || "Liked update failed");
// // // // //     }
// // // // //   };

// // // // //   const handleViewed = async (propertyId) => {
// // // // //     if (!user?.id) return;

// // // // //     try {
// // // // //       await apiPost(`/admindashboard/customer/add-view/`, {
// // // // //         user_id: user.id,
// // // // //         property_id: propertyId,
// // // // //       });
// // // // //     } catch (error) {
// // // // //       console.error("View tracking failed:", error);
// // // // //     }
// // // // //   };

// // // // //   const openBookingModal = (project) => {
// // // // //     if (!user?.id) {
// // // // //       alert("Please login as customer first.");
// // // // //       return;
// // // // //     }

// // // // //     setSelectedProperty(project);
// // // // //     setBookingForm({
// // // // //       name: user?.full_name || user?.username || user?.name || "",
// // // // //       phone: user?.phone || "",
// // // // //       visit_date: "",
// // // // //       visit_time: "",
// // // // //       message: `Interested in site visit for ${project?.title || "this property"}`,
// // // // //     });
// // // // //     setMessage("");
// // // // //     setBookingOpen(true);
// // // // //   };

// // // // //   const closeBookingModal = () => {
// // // // //     setBookingOpen(false);
// // // // //     setSelectedProperty(null);
// // // // //     setMessage("");
// // // // //   };

// // // // //   const handleBookingChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setBookingForm((prev) => ({
// // // // //       ...prev,
// // // // //       [name]: value,
// // // // //     }));
// // // // //   };

// // // // //   const submitBooking = async (e) => {
// // // // //     e.preventDefault();

// // // // //     if (!user?.id || !selectedProperty?.id) return;

// // // // //     try {
// // // // //       setBookingLoading(true);
// // // // //       setMessage("");

// // // // //       await apiPost(`/admindashboard/customer/book-visit/`, {
// // // // //         user: user.id,
// // // // //         property: selectedProperty.id,
// // // // //         name: bookingForm.name,
// // // // //         phone: bookingForm.phone,
// // // // //         visit_date: bookingForm.visit_date,
// // // // //         visit_time: bookingForm.visit_time,
// // // // //         message: bookingForm.message,
// // // // //         status: "upcoming",
// // // // //       });

// // // // //       setMessage("Visit booked successfully.");

// // // // //       setTimeout(() => {
// // // // //         closeBookingModal();
// // // // //       }, 1000);
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //       setMessage(error.message || "Failed to book visit.");
// // // // //     } finally {
// // // // //       setBookingLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const filteredProjects = useMemo(() => {
// // // // //     let data = [...projects];

// // // // //     data = data.filter((project) => {
// // // // //       const locationValue =
// // // // //         project.short_location || project.location || project.full_address || "";

// // // // //       const searchableText = normalizeText(
// // // // //         [
// // // // //           project.title,
// // // // //           project.city,
// // // // //           project.short_location,
// // // // //           project.location,
// // // // //           project.full_address,
// // // // //           project.developer_name,
// // // // //           project.property_type,
// // // // //           project.property_status,
// // // // //         ].join(" ")
// // // // //       );

// // // // //       const keywordMatch =
// // // // //         !filters.keyword ||
// // // // //         searchableText.includes(normalizeText(filters.keyword));

// // // // //       const cityMatch = !filters.city || project.city === filters.city;

// // // // //       const locationMatch =
// // // // //         !filters.location || locationValue === filters.location;

// // // // //       const typeMatch =
// // // // //         !filters.propertyType || project.property_type === filters.propertyType;

// // // // //       const statusMatch =
// // // // //         !filters.propertyStatus ||
// // // // //         project.property_status === filters.propertyStatus;

// // // // //       const bedroomsMatch = matchesCountFilter(project.bedrooms, filters.bedrooms);
// // // // //       const bathroomsMatch = matchesCountFilter(project.bathrooms, filters.bathrooms);

// // // // //       const price = toNumber(project.price);
// // // // //       const area = toNumber(project.carpet_area || project.size_sqft);

// // // // //       const priceMatch =
// // // // //         price >= filters.priceRange[0] && price <= filters.priceRange[1];

// // // // //       const areaMatch =
// // // // //         area >= filters.areaRange[0] && area <= filters.areaRange[1];

// // // // //       const projectAmenities = Array.isArray(project.amenities)
// // // // //         ? project.amenities
// // // // //         : [];

// // // // //       const amenitiesMatch =
// // // // //         filters.amenities.length === 0 ||
// // // // //         filters.amenities.every((item) => projectAmenities.includes(item));

// // // // //       return (
// // // // //         keywordMatch &&
// // // // //         cityMatch &&
// // // // //         locationMatch &&
// // // // //         typeMatch &&
// // // // //         statusMatch &&
// // // // //         bedroomsMatch &&
// // // // //         bathroomsMatch &&
// // // // //         priceMatch &&
// // // // //         areaMatch &&
// // // // //         amenitiesMatch
// // // // //       );
// // // // //     });

// // // // //     switch (filters.sortBy) {
// // // // //       case "Oldest":
// // // // //         data.sort(
// // // // //           (a, b) =>
// // // // //             new Date(a.posting_date || 0).getTime() -
// // // // //             new Date(b.posting_date || 0).getTime()
// // // // //         );
// // // // //         break;
// // // // //       case "Price Low to High":
// // // // //         data.sort((a, b) => toNumber(a.price) - toNumber(b.price));
// // // // //         break;
// // // // //       case "Price High to Low":
// // // // //         data.sort((a, b) => toNumber(b.price) - toNumber(a.price));
// // // // //         break;
// // // // //       case "Area Low to High":
// // // // //         data.sort(
// // // // //           (a, b) =>
// // // // //             toNumber(a.carpet_area || a.size_sqft) -
// // // // //             toNumber(b.carpet_area || b.size_sqft)
// // // // //         );
// // // // //         break;
// // // // //       case "Area High to Low":
// // // // //         data.sort(
// // // // //           (a, b) =>
// // // // //             toNumber(b.carpet_area || b.size_sqft) -
// // // // //             toNumber(a.carpet_area || a.size_sqft)
// // // // //         );
// // // // //         break;
// // // // //       case "Newest":
// // // // //       default:
// // // // //         data.sort(
// // // // //           (a, b) =>
// // // // //             new Date(b.posting_date || 0).getTime() -
// // // // //             new Date(a.posting_date || 0).getTime()
// // // // //         );
// // // // //         break;
// // // // //     }

// // // // //     return data;
// // // // //   }, [projects, filters]);

// // // // //   const developerName =
// // // // //     projects[0]?.developer_name || developerSlug.replaceAll("-", " ");

// // // // //   return (
// // // // //     <section className="section-property-layout style-1">
// // // // //       <div className="tf-container">
// // // // //         <div style={{ marginBottom: 24 }}>
// // // // //           <h2 className="title">Projects by {developerName}</h2>
// // // // //           <p className="text-1">
// // // // //             Showing all projects by {developerName} across all cities and locations
// // // // //           </p>
// // // // //         </div>

// // // // //         <div style={{ marginBottom: 30 }}>
// // // // //           <SearchForm
// // // // //             projects={projects}
// // // // //             onFilterChange={setFilters}
// // // // //             lockedDeveloper={developerName}
// // // // //           />
// // // // //         </div>

// // // // //         <div style={{ marginBottom: 20 }}>
// // // // //           <p className="text-1">
// // // // //             Showing {filteredProjects.length} project
// // // // //             {filteredProjects.length === 1 ? "" : "s"}
// // // // //           </p>
// // // // //         </div>

// // // // //         <div className="row">
// // // // //           {filteredProjects.map((project) => {
// // // // //             const sellerPhone = getPhone(project);

// // // // //             return (
// // // // //               <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
// // // // //                 <div
// // // // //                   className="box-house hover-img"
// // // // //                   style={{
// // // // //                     borderRadius: "22px",
// // // // //                     overflow: "hidden",
// // // // //                     background: "#fff",
// // // // //                     boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
// // // // //                   }}
// // // // //                 >
// // // // //                   <div className="image-wrap" style={{ position: "relative" }}>
// // // // //                     <Link
// // // // //                       href={`/property-detail-v1/${project.id}`}
// // // // //                       onClick={() => handleViewed(project.id)}
// // // // //                     >
// // // // //                       <Image
// // // // //                         alt={project.title || "Property"}
// // // // //                         src={project.imageSrc || "/images/home/house-db-1.jpg"}
// // // // //                         width={615}
// // // // //                         height={405}
// // // // //                         style={{ width: "100%", height: "280px", objectFit: "cover" }}
// // // // //                       />
// // // // //                     </Link>

// // // // //                     <ul
// // // // //                       className="box-tag flex gap-8"
// // // // //                       style={{
// // // // //                         position: "absolute",
// // // // //                         top: 14,
// // // // //                         left: 14,
// // // // //                         zIndex: 2,
// // // // //                       }}
// // // // //                     >
// // // // //                       {project.property_label ? (
// // // // //                         <li className="flat-tag text-4 bg-main fw-6 text_white">
// // // // //                           {project.property_label}
// // // // //                         </li>
// // // // //                       ) : null}

// // // // //                       <li className="flat-tag text-4 bg-3 fw-6 text_white">
// // // // //                         {project.property_status === "for-rent" ? "For Rent" : "For Sale"}
// // // // //                       </li>
// // // // //                     </ul>

// // // // //                     <div
// // // // //                       style={{
// // // // //                         position: "absolute",
// // // // //                         right: 16,
// // // // //                         top: 16,
// // // // //                         display: "flex",
// // // // //                         gap: 12,
// // // // //                         zIndex: 5,
// // // // //                       }}
// // // // //                     >
// // // // //                       <button
// // // // //                         type="button"
// // // // //                         style={actionBtnStyle}
// // // // //                         onClick={() => handleFavorite(project.id)}
// // // // //                         title="Favorite"
// // // // //                       >
// // // // //                         <BookmarkIcon active={project.is_favorite} />
// // // // //                       </button>

// // // // //                       <button
// // // // //                         type="button"
// // // // //                         style={actionBtnStyle}
// // // // //                         onClick={() => handleLiked(project.id)}
// // // // //                         title="Like"
// // // // //                       >
// // // // //                         <HeartIcon active={project.is_liked} />
// // // // //                       </button>

// // // // //                       {sellerPhone ? (
// // // // //                         <a
// // // // //                           href={`tel:${sellerPhone}`}
// // // // //                           style={actionBtnStyle}
// // // // //                           title="Call"
// // // // //                         >
// // // // //                           <PhoneIcon />
// // // // //                         </a>
// // // // //                       ) : null}
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <div className="content">
// // // // //                     <h5 className="title">
// // // // //                       <Link
// // // // //                         href={`/property-detail-v1/${project.id}`}
// // // // //                         onClick={() => handleViewed(project.id)}
// // // // //                       >
// // // // //                         {project.title}
// // // // //                       </Link>
// // // // //                     </h5>

// // // // //                     <p className="location text-1 flex items-center gap-6">
// // // // //                       <i className="icon-location" />
// // // // //                       {getLocation(project)}
// // // // //                     </p>

// // // // //                     <p className="text-1" style={{ marginTop: 6 }}>
// // // // //                       <Link href={`/cities/${project.city_slug}`}>{project.city}</Link>
// // // // //                     </p>

// // // // //                     <div
// // // // //                       style={{
// // // // //                         background: "#f4efec",
// // // // //                         borderRadius: "12px",
// // // // //                         padding: "10px 14px",
// // // // //                         marginTop: 10,
// // // // //                         marginBottom: "12px",
// // // // //                         fontSize: "14px",
// // // // //                       }}
// // // // //                     >
// // // // //                       <strong>Configuration:</strong> {project.configuration_text}
// // // // //                     </div>

// // // // //                     <div className="price text-3 fw-6" style={{ marginTop: 8 }}>
// // // // //                       {formatPrice(project.price)}
// // // // //                     </div>

// // // // //                     <ul className="meta-list flex" style={{ marginTop: 8 }}>
// // // // //                       <li className="text-1 flex">
// // // // //                         <span>{project.bedrooms || 0}</span>BHK
// // // // //                       </li>
// // // // //                       <li className="text-1 flex">
// // // // //                         <span>{project.bathrooms || 0}</span>Bath
// // // // //                       </li>
// // // // //                       <li className="text-1 flex">
// // // // //                         <span>{project.carpet_area || project.size_sqft || "-"}</span>
// // // // //                         Sqft
// // // // //                       </li>
// // // // //                     </ul>

// // // // //                     <div
// // // // //                       className="bot"
// // // // //                       style={{
// // // // //                         display: "flex",
// // // // //                         justifyContent: "space-between",
// // // // //                         alignItems: "center",
// // // // //                         gap: 14,
// // // // //                         borderTop: "1px solid #eee",
// // // // //                         paddingTop: 16,
// // // // //                         marginTop: 14,
// // // // //                       }}
// // // // //                     >
// // // // //                       <Link
// // // // //                         href={`/property-detail-v1/${project.id}`}
// // // // //                         className="tf-btn style-border pd-4"
// // // // //                         onClick={() => handleViewed(project.id)}
// // // // //                       >
// // // // //                         Details
// // // // //                       </Link>

// // // // //                       <button
// // // // //                         type="button"
// // // // //                         className="tf-btn pd-4"
// // // // //                         onClick={() => openBookingModal(project)}
// // // // //                         style={{
// // // // //                           background: "#f28c52",
// // // // //                           color: "#fff",
// // // // //                           border: "1px solid #f28c52",
// // // // //                         }}
// // // // //                       >
// // // // //                         Book Visit
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             );
// // // // //           })}

// // // // //           {filteredProjects.length === 0 && (
// // // // //             <div className="col-12">
// // // // //               <p>No properties found for the selected filters.</p>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       {bookingOpen && selectedProperty && (
// // // // //         <div
// // // // //           className="modal fade show"
// // // // //           style={{
// // // // //             display: "block",
// // // // //             background: "rgba(0,0,0,0.5)",
// // // // //             zIndex: 9999,
// // // // //           }}
// // // // //         >
// // // // //           <div className="modal-dialog modal-dialog-centered">
// // // // //             <div
// // // // //               className="modal-content"
// // // // //               style={{
// // // // //                 borderRadius: "20px",
// // // // //                 overflow: "hidden",
// // // // //               }}
// // // // //             >
// // // // //               <div className="modal-header">
// // // // //                 <h5 className="modal-title">
// // // // //                   Book a Visit - {selectedProperty.title}
// // // // //                 </h5>
// // // // //                 <button
// // // // //                   type="button"
// // // // //                   className="btn-close"
// // // // //                   onClick={closeBookingModal}
// // // // //                 />
// // // // //               </div>

// // // // //               <form onSubmit={submitBooking}>
// // // // //                 <div className="modal-body">
// // // // //                   <div className="mb-3">
// // // // //                     <label className="form-label">Name</label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       name="name"
// // // // //                       className="form-control"
// // // // //                       value={bookingForm.name}
// // // // //                       onChange={handleBookingChange}
// // // // //                       required
// // // // //                     />
// // // // //                   </div>

// // // // //                   <div className="mb-3">
// // // // //                     <label className="form-label">Phone</label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       name="phone"
// // // // //                       className="form-control"
// // // // //                       value={bookingForm.phone}
// // // // //                       onChange={handleBookingChange}
// // // // //                       required
// // // // //                     />
// // // // //                   </div>

// // // // //                   <div className="mb-3">
// // // // //                     <label className="form-label">Visit Date</label>
// // // // //                     <input
// // // // //                       type="date"
// // // // //                       name="visit_date"
// // // // //                       className="form-control"
// // // // //                       value={bookingForm.visit_date}
// // // // //                       onChange={handleBookingChange}
// // // // //                       required
// // // // //                     />
// // // // //                   </div>

// // // // //                   <div className="mb-3">
// // // // //                     <label className="form-label">Visit Time</label>
// // // // //                     <input
// // // // //                       type="time"
// // // // //                       name="visit_time"
// // // // //                       className="form-control"
// // // // //                       value={bookingForm.visit_time}
// // // // //                       onChange={handleBookingChange}
// // // // //                       required
// // // // //                     />
// // // // //                   </div>

// // // // //                   <div className="mb-3">
// // // // //                     <label className="form-label">Message</label>
// // // // //                     <textarea
// // // // //                       name="message"
// // // // //                       className="form-control"
// // // // //                       rows={3}
// // // // //                       value={bookingForm.message}
// // // // //                       onChange={handleBookingChange}
// // // // //                     />
// // // // //                   </div>

// // // // //                   {message ? (
// // // // //                     <div
// // // // //                       style={{
// // // // //                         color: "#ff6b35",
// // // // //                         fontSize: "14px",
// // // // //                         marginTop: "8px",
// // // // //                       }}
// // // // //                     >
// // // // //                       {message}
// // // // //                     </div>
// // // // //                   ) : null}
// // // // //                 </div>

// // // // //                 <div
// // // // //                   className="modal-footer"
// // // // //                   style={{
// // // // //                     display: "flex",
// // // // //                     justifyContent: "flex-end",
// // // // //                     gap: "12px",
// // // // //                     padding: "16px 20px 20px",
// // // // //                   }}
// // // // //                 >
// // // // //                   <button
// // // // //                     type="button"
// // // // //                     className="tf-btn style-border pd-4"
// // // // //                     onClick={closeBookingModal}
// // // // //                     style={{
// // // // //                       minWidth: "130px",
// // // // //                       border: "1px solid #d9d9d9",
// // // // //                       background: "#fff",
// // // // //                       color: "#222",
// // // // //                     }}
// // // // //                   >
// // // // //                     Cancel
// // // // //                   </button>

// // // // //                   <button
// // // // //                     type="submit"
// // // // //                     className="tf-btn pd-4"
// // // // //                     disabled={bookingLoading}
// // // // //                     style={{
// // // // //                       minWidth: "170px",
// // // // //                       background: "#f28c52",
// // // // //                       color: "#fff",
// // // // //                       border: "1px solid #f28c52",
// // // // //                       opacity: bookingLoading ? 0.7 : 1,
// // // // //                     }}
// // // // //                   >
// // // // //                     {bookingLoading ? "Booking..." : "Confirm Visit"}
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </form>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </section>
// // // // //   );
// // // // // }







// // // // "use client";

// // // // import React, { useEffect, useMemo, useState } from "react";
// // // // import Link from "next/link";
// // // // import Image from "next/image";
// // // // import SearchForm from "../common/SearchForm";
// // // // import { apiGet, apiPost } from "../lib/api";

// // // // function toNumber(value) {
// // // //   const num = Number(value);
// // // //   return Number.isFinite(num) ? num : 0;
// // // // }

// // // // function normalizeText(value) {
// // // //   return String(value || "").trim().toLowerCase();
// // // // }

// // // // function formatPrice(price) {
// // // //   const num = Number(price || 0);
// // // //   if (!num) return "Price on request";
// // // //   if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
// // // //   if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
// // // //   return `₹${num.toLocaleString("en-IN")}`;
// // // // }

// // // // function matchesCountFilter(actual, selected) {
// // // //   if (!selected) return true;
// // // //   const value = toNumber(actual);
// // // //   if (selected === "5+") return value >= 5;
// // // //   if (selected === "4+") return value >= 4;
// // // //   return value === Number(selected);
// // // // }

// // // // function getStoredUser() {
// // // //   if (typeof window === "undefined") return null;
// // // //   try {
// // // //     return JSON.parse(localStorage.getItem("userData") || "null");
// // // //   } catch {
// // // //     return null;
// // // //   }
// // // // }

// // // // function getImage(project) {
// // // //   return (
// // // //     project?.image ||
// // // //     project?.imageSrc ||
// // // //     project?.featured_image ||
// // // //     project?.cover_image ||
// // // //     project?.thumbnail ||
// // // //     "/images/home/house-db-1.jpg"
// // // //   );
// // // // }

// // // // function getLocation(project) {
// // // //   return (
// // // //     project?.short_location ||
// // // //     project?.location ||
// // // //     project?.full_address ||
// // // //     "Location on request"
// // // //   );
// // // // }

// // // // function getConfiguration(project) {
// // // //   if (project?.configuration) return project.configuration;
// // // //   if (project?.configuration_text) return project.configuration_text;
// // // //   if (project?.bedrooms) return `${project.bedrooms} BHK`;
// // // //   if (project?.property_type) return project.property_type;
// // // //   return "Configuration on request";
// // // // }

// // // // function getPhone(project) {
// // // //   return (
// // // //     project?.seller_phone ||
// // // //     project?.phone ||
// // // //     project?.contact_phone ||
// // // //     project?.contact_number ||
// // // //     project?.contact_seller_phone ||
// // // //     project?.contact_seller?.phone ||
// // // //     project?.contact_seller?.office_number ||
// // // //     ""
// // // //   );
// // // // }

// // // // const actionBtnStyle = {
// // // //   width: "56px",
// // // //   height: "56px",
// // // //   minWidth: "56px",
// // // //   borderRadius: "50%",
// // // //   border: "none",
// // // //   background: "rgba(35, 35, 35, 0.60)",
// // // //   backdropFilter: "blur(6px)",
// // // //   WebkitBackdropFilter: "blur(6px)",
// // // //   display: "flex",
// // // //   alignItems: "center",
// // // //   justifyContent: "center",
// // // //   cursor: "pointer",
// // // //   boxShadow: "0 8px 24px rgba(0,0,0,0.20)",
// // // //   padding: 0,
// // // // };

// // // // function BookmarkIcon({ active = false }) {
// // // //   return (
// // // //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
// // // //       <path
// // // //         d="M7 4.75H17C17.69 4.75 18.25 5.31 18.25 6V20L12 16.2L5.75 20V6C5.75 5.31 6.31 4.75 7 4.75Z"
// // // //         stroke={active ? "#ff8c5a" : "#ffffff"}
// // // //         strokeWidth="2"
// // // //         strokeLinecap="round"
// // // //         strokeLinejoin="round"
// // // //       />
// // // //     </svg>
// // // //   );
// // // // }

// // // // function HeartIcon({ active = false }) {
// // // //   return (
// // // //     <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#ff8c5a" : "none"}>
// // // //       <path
// // // //         d="M12 20.5C12 20.5 4.5 16 4.5 9.75C4.5 7.4 6.4 5.5 8.75 5.5C10.2 5.5 11.48 6.22 12 7.32C12.52 6.22 13.8 5.5 15.25 5.5C17.6 5.5 19.5 7.4 19.5 9.75C19.5 16 12 20.5 12 20.5Z"
// // // //         stroke={active ? "#ff8c5a" : "#ffffff"}
// // // //         strokeWidth="2"
// // // //         strokeLinecap="round"
// // // //         strokeLinejoin="round"
// // // //       />
// // // //     </svg>
// // // //   );
// // // // }

// // // // function PhoneIcon() {
// // // //   return (
// // // //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
// // // //       <path
// // // //         d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C11.61 20.92 4 13.31 4 3.92C4 3.37 4.45 2.92 5 2.92H8C8.55 2.92 9 3.37 9 3.92V6.88C9 7.32 8.71 7.71 8.29 7.84L6.77 8.35C7.55 10.6 9.32 12.37 11.57 13.15L12.08 11.63C12.21 11.21 12.6 10.92 13.04 10.92H16C16.55 10.92 17 11.37 17 11.92V14.92C17 15.47 16.55 15.92 16 15.92H13.5"
// // // //         stroke="#ffffff"
// // // //         strokeWidth="2"
// // // //         strokeLinecap="round"
// // // //         strokeLinejoin="round"
// // // //       />
// // // //     </svg>
// // // //   );
// // // // }

// // // // export default function DeveloperProjectsPage({ developerSlug }) {
// // // //   const [projects, setProjects] = useState([]);
// // // //   const [filters, setFilters] = useState({
// // // //     keyword: "",
// // // //     city: "",
// // // //     location: "",
// // // //     propertyType: "",
// // // //     propertyStatus: "",
// // // //     bedrooms: "",
// // // //     bathrooms: "",
// // // //     amenities: [],
// // // //     sortBy: "Newest",
// // // //     priceRange: [0, 50000000],
// // // //     areaRange: [0, 5000],
// // // //   });

// // // //   const [selectedProperty, setSelectedProperty] = useState(null);
// // // //   const [bookingOpen, setBookingOpen] = useState(false);
// // // //   const [bookingLoading, setBookingLoading] = useState(false);
// // // //   const [message, setMessage] = useState("");

// // // //   const [bookingForm, setBookingForm] = useState({
// // // //     name: "",
// // // //     phone: "",
// // // //     visit_date: "",
// // // //     visit_time: "",
// // // //     message: "",
// // // //   });

// // // //   const user = getStoredUser();

// // // //   const loadProjects = async () => {
// // // //     try {
// // // //       const res = await apiGet(
// // // //         `/admindashboard/developers/${developerSlug}/properties/`
// // // //       );
// // // //       const baseList = Array.isArray(res) ? res : [];

// // // //       let favoriteIds = [];
// // // //       let likedIds = [];

// // // //       if (user?.id) {
// // // //         try {
// // // //           const [favRes, likedRes] = await Promise.all([
// // // //             apiGet(`/admindashboard/customer/${user.id}/favorite-properties/`),
// // // //             apiGet(`/admindashboard/customer/${user.id}/liked-videos/`),
// // // //           ]);

// // // //           const favList = Array.isArray(favRes)
// // // //             ? favRes
// // // //             : Array.isArray(favRes?.data)
// // // //             ? favRes.data
// // // //             : [];

// // // //           const likedList = Array.isArray(likedRes)
// // // //             ? likedRes
// // // //             : Array.isArray(likedRes?.data)
// // // //             ? likedRes.data
// // // //             : [];

// // // //           favoriteIds = favList.map((item) => item.id);
// // // //           likedIds = likedList.map((item) => item.id);
// // // //         } catch (error) {
// // // //           console.error("Favorite/liked fetch error:", error);
// // // //         }
// // // //       }

// // // //       const merged = baseList.map((project) => ({
// // // //         ...project,
// // // //         imageSrc: getImage(project),
// // // //         seller_phone: getPhone(project),
// // // //         configuration_text: getConfiguration(project),
// // // //         is_favorite: favoriteIds.includes(project.id),
// // // //         is_liked: likedIds.includes(project.id),
// // // //       }));

// // // //       setProjects(merged);
// // // //     } catch (error) {
// // // //       console.error("Developer projects fetch error:", error);
// // // //       setProjects([]);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     loadProjects();
// // // //   }, [developerSlug]);

// // // //   const handleFavorite = async (id) => {
// // // //     if (!user?.id) {
// // // //       alert("Please login as customer first.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const res = await apiPost(`/admindashboard/customer/toggle-favorite/`, {
// // // //         user_id: user.id,
// // // //         property_id: id,
// // // //       });

// // // //       setProjects((prev) =>
// // // //         prev.map((item) =>
// // // //           item.id === id
// // // //             ? {
// // // //                 ...item,
// // // //                 is_favorite:
// // // //                   typeof res?.is_favorite === "boolean"
// // // //                     ? res.is_favorite
// // // //                     : !item.is_favorite,
// // // //               }
// // // //             : item
// // // //         )
// // // //       );
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       alert(error.message || "Favorite update failed");
// // // //     }
// // // //   };

// // // //   const handleLiked = async (id) => {
// // // //     if (!user?.id) {
// // // //       alert("Please login as customer first.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const res = await apiPost(`/admindashboard/customer/like-video/`, {
// // // //         user_id: user.id,
// // // //         property_id: id,
// // // //       });

// // // //       setProjects((prev) =>
// // // //         prev.map((item) =>
// // // //           item.id === id
// // // //             ? {
// // // //                 ...item,
// // // //                 is_liked:
// // // //                   typeof res?.liked === "boolean"
// // // //                     ? res.liked
// // // //                     : !item.is_liked,
// // // //               }
// // // //             : item
// // // //         )
// // // //       );
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       alert(error.message || "Liked update failed");
// // // //     }
// // // //   };

// // // //   const handleViewed = async (propertyId) => {
// // // //     if (!user?.id) return;

// // // //     try {
// // // //       await apiPost(`/admindashboard/customer/add-view/`, {
// // // //         user_id: user.id,
// // // //         property_id: propertyId,
// // // //       });
// // // //     } catch (error) {
// // // //       console.error("View tracking failed:", error);
// // // //     }
// // // //   };

// // // //   const openBookingModal = (project) => {
// // // //     if (!user?.id) {
// // // //       alert("Please login as customer first.");
// // // //       return;
// // // //     }

// // // //     setSelectedProperty(project);
// // // //     setBookingForm({
// // // //       name: user?.full_name || user?.username || user?.name || "",
// // // //       phone: user?.phone || "",
// // // //       visit_date: "",
// // // //       visit_time: "",
// // // //       message: `Interested in site visit for ${project?.title || "this property"}`,
// // // //     });
// // // //     setMessage("");
// // // //     setBookingOpen(true);
// // // //   };

// // // //   const closeBookingModal = () => {
// // // //     setBookingOpen(false);
// // // //     setSelectedProperty(null);
// // // //     setMessage("");
// // // //   };

// // // //   const handleBookingChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setBookingForm((prev) => ({
// // // //       ...prev,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const submitBooking = async (e) => {
// // // //     e.preventDefault();

// // // //     if (!user?.id || !selectedProperty?.id) return;

// // // //     try {
// // // //       setBookingLoading(true);
// // // //       setMessage("");

// // // //       await apiPost(`/admindashboard/customer/book-visit/`, {
// // // //         user: user.id,
// // // //         property: selectedProperty.id,
// // // //         name: bookingForm.name,
// // // //         phone: bookingForm.phone,
// // // //         visit_date: bookingForm.visit_date,
// // // //         visit_time: bookingForm.visit_time,
// // // //         message: bookingForm.message,
// // // //         status: "upcoming",
// // // //       });

// // // //       setMessage("Visit booked successfully.");

// // // //       setTimeout(() => {
// // // //         closeBookingModal();
// // // //       }, 1000);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       setMessage(error.message || "Failed to book visit.");
// // // //     } finally {
// // // //       setBookingLoading(false);
// // // //     }
// // // //   };

// // // //   const filteredProjects = useMemo(() => {
// // // //     let data = [...projects];

// // // //     data = data.filter((project) => {
// // // //       const locationValue =
// // // //         project.short_location || project.location || project.full_address || "";

// // // //       const searchableText = normalizeText(
// // // //         [
// // // //           project.title,
// // // //           project.city,
// // // //           project.short_location,
// // // //           project.location,
// // // //           project.full_address,
// // // //           project.developer_name,
// // // //           project.property_type,
// // // //           project.property_status,
// // // //         ].join(" ")
// // // //       );

// // // //       const keywordMatch =
// // // //         !filters.keyword ||
// // // //         searchableText.includes(normalizeText(filters.keyword));

// // // //       const cityMatch = !filters.city || project.city === filters.city;

// // // //       const locationMatch =
// // // //         !filters.location || locationValue === filters.location;

// // // //       const typeMatch =
// // // //         !filters.propertyType || project.property_type === filters.propertyType;

// // // //       const statusMatch =
// // // //         !filters.propertyStatus ||
// // // //         project.property_status === filters.propertyStatus;

// // // //       const bedroomsMatch = matchesCountFilter(project.bedrooms, filters.bedrooms);
// // // //       const bathroomsMatch = matchesCountFilter(project.bathrooms, filters.bathrooms);

// // // //       const price = toNumber(project.price);
// // // //       const area = toNumber(project.carpet_area || project.size_sqft);

// // // //       const priceMatch =
// // // //         price >= filters.priceRange[0] && price <= filters.priceRange[1];

// // // //       const areaMatch =
// // // //         area >= filters.areaRange[0] && area <= filters.areaRange[1];

// // // //       const projectAmenities = Array.isArray(project.amenities)
// // // //         ? project.amenities
// // // //         : [];

// // // //       const amenitiesMatch =
// // // //         filters.amenities.length === 0 ||
// // // //         filters.amenities.every((item) => projectAmenities.includes(item));

// // // //       return (
// // // //         keywordMatch &&
// // // //         cityMatch &&
// // // //         locationMatch &&
// // // //         typeMatch &&
// // // //         statusMatch &&
// // // //         bedroomsMatch &&
// // // //         bathroomsMatch &&
// // // //         priceMatch &&
// // // //         areaMatch &&
// // // //         amenitiesMatch
// // // //       );
// // // //     });

// // // //     switch (filters.sortBy) {
// // // //       case "Oldest":
// // // //         data.sort(
// // // //           (a, b) =>
// // // //             new Date(a.posting_date || 0).getTime() -
// // // //             new Date(b.posting_date || 0).getTime()
// // // //         );
// // // //         break;
// // // //       case "Price Low to High":
// // // //         data.sort((a, b) => toNumber(a.price) - toNumber(b.price));
// // // //         break;
// // // //       case "Price High to Low":
// // // //         data.sort((a, b) => toNumber(b.price) - toNumber(a.price));
// // // //         break;
// // // //       case "Area Low to High":
// // // //         data.sort(
// // // //           (a, b) =>
// // // //             toNumber(a.carpet_area || a.size_sqft) -
// // // //             toNumber(b.carpet_area || b.size_sqft)
// // // //         );
// // // //         break;
// // // //       case "Area High to Low":
// // // //         data.sort(
// // // //           (a, b) =>
// // // //             toNumber(b.carpet_area || b.size_sqft) -
// // // //             toNumber(a.carpet_area || a.size_sqft)
// // // //         );
// // // //         break;
// // // //       case "Newest":
// // // //       default:
// // // //         data.sort(
// // // //           (a, b) =>
// // // //             new Date(b.posting_date || 0).getTime() -
// // // //             new Date(a.posting_date || 0).getTime()
// // // //         );
// // // //         break;
// // // //     }

// // // //     return data;
// // // //   }, [projects, filters]);

// // // //   const developerName =
// // // //     projects[0]?.developer_name || developerSlug.replaceAll("-", " ");

// // // //   return (
// // // //     <section className="section-property-layout style-1">
// // // //       <div className="tf-container">
// // // //         <div style={{ marginBottom: 24 }}>
// // // //           <h2 className="title">Projects by {developerName}</h2>
// // // //           <p className="text-1">
// // // //             Showing all projects by {developerName} across all cities and locations
// // // //           </p>
// // // //         </div>

// // // //         <div style={{ marginBottom: 30 }}>
// // // //           <SearchForm
// // // //             projects={projects}
// // // //             onFilterChange={setFilters}
// // // //             lockedDeveloper={developerName}
// // // //           />
// // // //         </div>

// // // //         <div style={{ marginBottom: 20 }}>
// // // //           <p className="text-1">
// // // //             Showing {filteredProjects.length} project
// // // //             {filteredProjects.length === 1 ? "" : "s"}
// // // //           </p>
// // // //         </div>

// // // //         <div className="row">
// // // //           {filteredProjects.map((project) => {
// // // //             const sellerPhone = getPhone(project);

// // // //             return (
// // // //               <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
// // // //                 <div
// // // //                   className="box-house"
// // // //                   style={{
// // // //                     borderRadius: "22px",
// // // //                     overflow: "hidden",
// // // //                     background: "#fff",
// // // //                     boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
// // // //                   }}
// // // //                 >
// // // //                   <div className="image-wrap" style={{ position: "relative" }}>
// // // //                     <Link
// // // //                       href={`/property-detail-v1/${project.id}`}
// // // //                       onClick={() => handleViewed(project.id)}
// // // //                     >
// // // //                       <Image
// // // //                         alt={project.title || "Property"}
// // // //                         src={project.imageSrc || "/images/home/house-db-1.jpg"}
// // // //                         width={615}
// // // //                         height={405}
// // // //                         style={{ width: "100%", height: "280px", objectFit: "cover" }}
// // // //                       />
// // // //                     </Link>

// // // //                     <ul
// // // //                       className="box-tag flex gap-8"
// // // //                       style={{
// // // //                         position: "absolute",
// // // //                         top: 14,
// // // //                         left: 14,
// // // //                         zIndex: 2,
// // // //                       }}
// // // //                     >
// // // //                       {project.property_label ? (
// // // //                         <li className="flat-tag text-4 bg-main fw-6 text_white">
// // // //                           {project.property_label}
// // // //                         </li>
// // // //                       ) : null}

// // // //                       <li className="flat-tag text-4 bg-3 fw-6 text_white">
// // // //                         {project.property_status === "for-rent" ? "For Rent" : "For Sale"}
// // // //                       </li>
// // // //                     </ul>

// // // //                     <div
// // // //                       style={{
// // // //                         position: "absolute",
// // // //                         right: 16,
// // // //                         top: 16,
// // // //                         display: "flex",
// // // //                         gap: 12,
// // // //                         zIndex: 5,
// // // //                       }}
// // // //                     >
// // // //                       <button
// // // //                         type="button"
// // // //                         style={actionBtnStyle}
// // // //                         onClick={() => handleFavorite(project.id)}
// // // //                         title="Favorite"
// // // //                       >
// // // //                         <BookmarkIcon active={project.is_favorite} />
// // // //                       </button>

// // // //                       <button
// // // //                         type="button"
// // // //                         style={actionBtnStyle}
// // // //                         onClick={() => handleLiked(project.id)}
// // // //                         title="Like"
// // // //                       >
// // // //                         <HeartIcon active={project.is_liked} />
// // // //                       </button>

// // // //                       {sellerPhone ? (
// // // //                         <a
// // // //                           href={`tel:${sellerPhone}`}
// // // //                           style={actionBtnStyle}
// // // //                           title="Call"
// // // //                         >
// // // //                           <PhoneIcon />
// // // //                         </a>
// // // //                       ) : null}
// // // //                     </div>
// // // //                   </div>

// // // //                   <div
// // // //                     className="content"
// // // //                     style={{
// // // //                       background: "#fff",
// // // //                       padding: "20px",
// // // //                       position: "relative",
// // // //                       zIndex: 2,
// // // //                     }}
// // // //                   >
// // // //                     <h5 className="title" style={{ marginBottom: 8 }}>
// // // //                       <Link
// // // //                         href={`/property-detail-v1/${project.id}`}
// // // //                         onClick={() => handleViewed(project.id)}
// // // //                         style={{ color: "#1f1f1f", opacity: 1 }}
// // // //                       >
// // // //                         {project.title}
// // // //                       </Link>
// // // //                     </h5>

// // // //                     <p
// // // //                       className="location text-1 flex items-center gap-6"
// // // //                       style={{ color: "#5f6368", opacity: 1, marginBottom: 8 }}
// // // //                     >
// // // //                       <i className="icon-location" />
// // // //                       {getLocation(project)}
// // // //                     </p>

// // // //                     <p
// // // //                       className="text-1"
// // // //                       style={{ marginTop: 6, color: "#666", opacity: 1 }}
// // // //                     >
// // // //                       <Link
// // // //                         href={`/cities/${project.city_slug}`}
// // // //                         style={{ color: "#666", opacity: 1 }}
// // // //                       >
// // // //                         {project.city}
// // // //                       </Link>
// // // //                     </p>

// // // //                     <div
// // // //                       style={{
// // // //                         background: "#f4efec",
// // // //                         borderRadius: "12px",
// // // //                         padding: "10px 14px",
// // // //                         marginTop: 10,
// // // //                         marginBottom: "12px",
// // // //                         fontSize: "14px",
// // // //                         color: "#222",
// // // //                       }}
// // // //                     >
// // // //                       <strong>Configuration:</strong> {project.configuration_text}
// // // //                     </div>

// // // //                     <div
// // // //                       className="price text-3 fw-6"
// // // //                       style={{ marginTop: 8, color: "#f28c52", opacity: 1 }}
// // // //                     >
// // // //                       {formatPrice(project.price)}
// // // //                     </div>

// // // //                     <ul
// // // //                       className="meta-list flex"
// // // //                       style={{ marginTop: 8, color: "#222", opacity: 1 }}
// // // //                     >
// // // //                       <li className="text-1 flex">
// // // //                         <span>{project.bedrooms || 0}</span>BHK
// // // //                       </li>
// // // //                       <li className="text-1 flex">
// // // //                         <span>{project.bathrooms || 0}</span>Bath
// // // //                       </li>
// // // //                       <li className="text-1 flex">
// // // //                         <span>{project.carpet_area || project.size_sqft || "-"}</span>
// // // //                         Sqft
// // // //                       </li>
// // // //                     </ul>

// // // //                     <div
// // // //                       className="bot"
// // // //                       style={{
// // // //                         display: "flex",
// // // //                         justifyContent: "space-between",
// // // //                         alignItems: "center",
// // // //                         gap: 14,
// // // //                         borderTop: "1px solid #eee",
// // // //                         paddingTop: 16,
// // // //                         marginTop: 14,
// // // //                       }}
// // // //                     >
// // // //                       <Link
// // // //                         href={`/property-detail-v1/${project.id}`}
// // // //                         className="tf-btn style-border pd-4"
// // // //                         onClick={() => handleViewed(project.id)}
// // // //                       >
// // // //                         Details
// // // //                       </Link>

// // // //                       <button
// // // //                         type="button"
// // // //                         className="tf-btn pd-4"
// // // //                         onClick={() => openBookingModal(project)}
// // // //                         style={{
// // // //                           background: "#f28c52",
// // // //                           color: "#fff",
// // // //                           border: "1px solid #f28c52",
// // // //                         }}
// // // //                       >
// // // //                         Book Visit
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })}

// // // //           {filteredProjects.length === 0 && (
// // // //             <div className="col-12">
// // // //               <p>No properties found for the selected filters.</p>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {bookingOpen && selectedProperty && (
// // // //         <div
// // // //           className="modal fade show"
// // // //           style={{
// // // //             display: "block",
// // // //             background: "rgba(0,0,0,0.5)",
// // // //             zIndex: 9999,
// // // //           }}
// // // //         >
// // // //           <div className="modal-dialog modal-dialog-centered">
// // // //             <div
// // // //               className="modal-content"
// // // //               style={{
// // // //                 borderRadius: "20px",
// // // //                 overflow: "hidden",
// // // //               }}
// // // //             >
// // // //               <div className="modal-header">
// // // //                 <h5 className="modal-title">
// // // //                   Book a Visit - {selectedProperty.title}
// // // //                 </h5>
// // // //                 <button
// // // //                   type="button"
// // // //                   className="btn-close"
// // // //                   onClick={closeBookingModal}
// // // //                 />
// // // //               </div>

// // // //               <form onSubmit={submitBooking}>
// // // //                 <div className="modal-body">
// // // //                   <div className="mb-3">
// // // //                     <label className="form-label">Name</label>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="name"
// // // //                       className="form-control"
// // // //                       value={bookingForm.name}
// // // //                       onChange={handleBookingChange}
// // // //                       required
// // // //                     />
// // // //                   </div>

// // // //                   <div className="mb-3">
// // // //                     <label className="form-label">Phone</label>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="phone"
// // // //                       className="form-control"
// // // //                       value={bookingForm.phone}
// // // //                       onChange={handleBookingChange}
// // // //                       required
// // // //                     />
// // // //                   </div>

// // // //                   <div className="mb-3">
// // // //                     <label className="form-label">Visit Date</label>
// // // //                     <input
// // // //                       type="date"
// // // //                       name="visit_date"
// // // //                       className="form-control"
// // // //                       value={bookingForm.visit_date}
// // // //                       onChange={handleBookingChange}
// // // //                       required
// // // //                     />
// // // //                   </div>

// // // //                   <div className="mb-3">
// // // //                     <label className="form-label">Visit Time</label>
// // // //                     <input
// // // //                       type="time"
// // // //                       name="visit_time"
// // // //                       className="form-control"
// // // //                       value={bookingForm.visit_time}
// // // //                       onChange={handleBookingChange}
// // // //                       required
// // // //                     />
// // // //                   </div>

// // // //                   <div className="mb-3">
// // // //                     <label className="form-label">Message</label>
// // // //                     <textarea
// // // //                       name="message"
// // // //                       className="form-control"
// // // //                       rows={3}
// // // //                       value={bookingForm.message}
// // // //                       onChange={handleBookingChange}
// // // //                     />
// // // //                   </div>

// // // //                   {message ? (
// // // //                     <div
// // // //                       style={{
// // // //                         color: "#ff6b35",
// // // //                         fontSize: "14px",
// // // //                         marginTop: "8px",
// // // //                       }}
// // // //                     >
// // // //                       {message}
// // // //                     </div>
// // // //                   ) : null}
// // // //                 </div>

// // // //                 <div
// // // //                   className="modal-footer"
// // // //                   style={{
// // // //                     display: "flex",
// // // //                     justifyContent: "flex-end",
// // // //                     gap: "12px",
// // // //                     padding: "16px 20px 20px",
// // // //                   }}
// // // //                 >
// // // //                   <button
// // // //                     type="button"
// // // //                     className="tf-btn style-border pd-4"
// // // //                     onClick={closeBookingModal}
// // // //                     style={{
// // // //                       minWidth: "130px",
// // // //                       border: "1px solid #d9d9d9",
// // // //                       background: "#fff",
// // // //                       color: "#222",
// // // //                     }}
// // // //                   >
// // // //                     Cancel
// // // //                   </button>

// // // //                   <button
// // // //                     type="submit"
// // // //                     className="tf-btn pd-4"
// // // //                     disabled={bookingLoading}
// // // //                     style={{
// // // //                       minWidth: "170px",
// // // //                       background: "#f28c52",
// // // //                       color: "#fff",
// // // //                       border: "1px solid #f28c52",
// // // //                       opacity: bookingLoading ? 0.7 : 1,
// // // //                     }}
// // // //                   >
// // // //                     {bookingLoading ? "Booking..." : "Confirm Visit"}
// // // //                   </button>
// // // //                 </div>
// // // //               </form>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </section>
// // // //   );
// // // // }



// // // "use client";

// // // import React, { useEffect, useMemo, useState } from "react";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import SearchForm from "../common/SearchForm";
// // // import { apiGet, apiPost } from "../lib/api";
// // // import { getPropertyDetailHref } from "../../utlis/propertyUrl";
// // // function toNumber(value) {
// // //   const num = Number(value);
// // //   return Number.isFinite(num) ? num : 0;
// // // }

// // // function normalizeText(value) {
// // //   return String(value || "").trim().toLowerCase();
// // // }

// // // function formatPrice(price) {
// // //   const num = Number(price || 0);
// // //   if (!num) return "Price on request";
// // //   if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
// // //   if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
// // //   return `₹${num.toLocaleString("en-IN")}`;
// // // }

// // // function matchesCountFilter(actual, selected) {
// // //   if (!selected) return true;
// // //   const value = toNumber(actual);
// // //   if (selected === "5+") return value >= 5;
// // //   if (selected === "4+") return value >= 4;
// // //   return value === Number(selected);
// // // }

// // // function getStoredUser() {
// // //   if (typeof window === "undefined") return null;
// // //   try {
// // //     return JSON.parse(localStorage.getItem("userData") || "null");
// // //   } catch {
// // //     return null;
// // //   }
// // // }

// // // function getImage(project) {
// // //   return (
// // //     project?.image ||
// // //     project?.imageSrc ||
// // //     project?.featured_image ||
// // //     project?.cover_image ||
// // //     project?.thumbnail ||
// // //     "/images/home/house-db-1.jpg"
// // //   );
// // // }

// // // function getLocation(project) {
// // //   return (
// // //     project?.short_location ||
// // //     project?.location ||
// // //     project?.full_address ||
// // //     "Location on request"
// // //   );
// // // }

// // // function getConfiguration(project) {
// // //   if (project?.configuration) return project.configuration;
// // //   if (project?.configuration_text) return project.configuration_text;
// // //   if (project?.bedrooms) return `${project.bedrooms} BHK`;
// // //   if (project?.property_type) return project.property_type;
// // //   return "Configuration on request";
// // // }

// // // function getPhone(project) {
// // //   return (
// // //     project?.seller_phone ||
// // //     project?.phone ||
// // //     project?.contact_phone ||
// // //     project?.contact_number ||
// // //     project?.contact_seller_phone ||
// // //     project?.contact_seller?.phone ||
// // //     project?.contact_seller?.office_number ||
// // //     ""
// // //   );
// // // }

// // // const actionBtnStyle = {
// // //   width: "56px",
// // //   height: "56px",
// // //   minWidth: "56px",
// // //   borderRadius: "50%",
// // //   border: "none",
// // //   background: "rgba(35, 35, 35, 0.60)",
// // //   backdropFilter: "blur(6px)",
// // //   WebkitBackdropFilter: "blur(6px)",
// // //   display: "flex",
// // //   alignItems: "center",
// // //   justifyContent: "center",
// // //   cursor: "pointer",
// // //   boxShadow: "0 8px 24px rgba(0,0,0,0.20)",
// // //   padding: 0,
// // // };

// // // function BookmarkIcon({ active = false }) {
// // //   return (
// // //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
// // //       <path
// // //         d="M7 4.75H17C17.69 4.75 18.25 5.31 18.25 6V20L12 16.2L5.75 20V6C5.75 5.31 6.31 4.75 7 4.75Z"
// // //         stroke={active ? "#ff8c5a" : "#ffffff"}
// // //         strokeWidth="2"
// // //         strokeLinecap="round"
// // //         strokeLinejoin="round"
// // //       />
// // //     </svg>
// // //   );
// // // }

// // // function HeartIcon({ active = false }) {
// // //   return (
// // //     <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#ff8c5a" : "none"}>
// // //       <path
// // //         d="M12 20.5C12 20.5 4.5 16 4.5 9.75C4.5 7.4 6.4 5.5 8.75 5.5C10.2 5.5 11.48 6.22 12 7.32C12.52 6.22 13.8 5.5 15.25 5.5C17.6 5.5 19.5 7.4 19.5 9.75C19.5 16 12 20.5 12 20.5Z"
// // //         stroke={active ? "#ff8c5a" : "#ffffff"}
// // //         strokeWidth="2"
// // //         strokeLinecap="round"
// // //         strokeLinejoin="round"
// // //       />
// // //     </svg>
// // //   );
// // // }

// // // function PhoneIcon() {
// // //   return (
// // //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
// // //       <path
// // //         d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C11.61 20.92 4 13.31 4 3.92C4 3.37 4.45 2.92 5 2.92H8C8.55 2.92 9 3.37 9 3.92V6.88C9 7.32 8.71 7.71 8.29 7.84L6.77 8.35C7.55 10.6 9.32 12.37 11.57 13.15L12.08 11.63C12.21 11.21 12.6 10.92 13.04 10.92H16C16.55 10.92 17 11.37 17 11.92V14.92C17 15.47 16.55 15.92 16 15.92H13.5"
// // //         stroke="#ffffff"
// // //         strokeWidth="2"
// // //         strokeLinecap="round"
// // //         strokeLinejoin="round"
// // //       />
// // //     </svg>
// // //   );
// // // }

// // // export default function DeveloperProjectsPage({ developerSlug }) {
// // //   const [projects, setProjects] = useState([]);
// // //   const [filters, setFilters] = useState({
// // //     keyword: "",
// // //     city: "",
// // //     location: "",
// // //     propertyType: "",
// // //     propertyStatus: "",
// // //     bedrooms: "",
// // //     bathrooms: "",
// // //     amenities: [],
// // //     sortBy: "Newest",
// // //     priceRange: [0, 50000000],
// // //     areaRange: [0, 5000],
// // //   });

// // //   const [selectedProperty, setSelectedProperty] = useState(null);
// // //   const [bookingOpen, setBookingOpen] = useState(false);
// // //   const [bookingLoading, setBookingLoading] = useState(false);
// // //   const [message, setMessage] = useState("");

// // //   const [bookingForm, setBookingForm] = useState({
// // //     name: "",
// // //     phone: "",
// // //     visit_date: "",
// // //     visit_time: "",
// // //     message: "",
// // //   });

// // //   const user = getStoredUser();

// // //   const loadProjects = async () => {
// // //     try {
// // //       const res = await apiGet(
// // //         `/admindashboard/developers/${developerSlug}/properties/`
// // //       );
// // //       const baseList = Array.isArray(res) ? res : [];

// // //       let favoriteIds = [];
// // //       let likedIds = [];

// // //       if (user?.id) {
// // //         try {
// // //           const [favRes, likedRes] = await Promise.all([
// // //             apiGet(`/admindashboard/customer/${user.id}/favorite-properties/`),
// // //             apiGet(`/admindashboard/customer/${user.id}/liked-videos/`),
// // //           ]);

// // //           const favList = Array.isArray(favRes)
// // //             ? favRes
// // //             : Array.isArray(favRes?.data)
// // //             ? favRes.data
// // //             : [];

// // //           const likedList = Array.isArray(likedRes)
// // //             ? likedRes
// // //             : Array.isArray(likedRes?.data)
// // //             ? likedRes.data
// // //             : [];

// // //           favoriteIds = favList.map((item) => item.id);
// // //           likedIds = likedList.map((item) => item.id);
// // //         } catch (error) {
// // //           console.error("Favorite/liked fetch error:", error);
// // //         }
// // //       }

// // //       const merged = baseList.map((project) => ({
// // //         ...project,
// // //         imageSrc: getImage(project),
// // //         seller_phone: getPhone(project),
// // //         configuration_text: getConfiguration(project),
// // //         is_favorite: favoriteIds.includes(project.id),
// // //         is_liked: likedIds.includes(project.id),
// // //       }));

// // //       setProjects(merged);
// // //     } catch (error) {
// // //       console.error("Developer projects fetch error:", error);
// // //       setProjects([]);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     loadProjects();
// // //   }, [developerSlug]);

// // //   const handleFavorite = async (id) => {
// // //     if (!user?.id) {
// // //       alert("Please login as customer first.");
// // //       return;
// // //     }

// // //     try {
// // //       const res = await apiPost(`/admindashboard/customer/toggle-favorite/`, {
// // //         user_id: user.id,
// // //         property_id: id,
// // //       });

// // //       setProjects((prev) =>
// // //         prev.map((item) =>
// // //           item.id === id
// // //             ? {
// // //                 ...item,
// // //                 is_favorite:
// // //                   typeof res?.is_favorite === "boolean"
// // //                     ? res.is_favorite
// // //                     : !item.is_favorite,
// // //               }
// // //             : item
// // //         )
// // //       );
// // //     } catch (error) {
// // //       console.error(error);
// // //       alert(error.message || "Favorite update failed");
// // //     }
// // //   };

// // //   const handleLiked = async (id) => {
// // //     if (!user?.id) {
// // //       alert("Please login as customer first.");
// // //       return;
// // //     }

// // //     try {
// // //       const res = await apiPost(`/admindashboard/customer/like-video/`, {
// // //         user_id: user.id,
// // //         property_id: id,
// // //       });

// // //       setProjects((prev) =>
// // //         prev.map((item) =>
// // //           item.id === id
// // //             ? {
// // //                 ...item,
// // //                 is_liked:
// // //                   typeof res?.liked === "boolean"
// // //                     ? res.liked
// // //                     : !item.is_liked,
// // //               }
// // //             : item
// // //         )
// // //       );
// // //     } catch (error) {
// // //       console.error(error);
// // //       alert(error.message || "Liked update failed");
// // //     }
// // //   };

// // //   const handleViewed = async (propertyId) => {
// // //     if (!user?.id) return;

// // //     try {
// // //       await apiPost(`/admindashboard/customer/add-view/`, {
// // //         user_id: user.id,
// // //         property_id: propertyId,
// // //       });
// // //     } catch (error) {
// // //       console.error("View tracking failed:", error);
// // //     }
// // //   };

// // //   const openBookingModal = (project) => {
// // //     if (!user?.id) {
// // //       alert("Please login as customer first.");
// // //       return;
// // //     }

// // //     setSelectedProperty(project);
// // //     setBookingForm({
// // //       name: user?.full_name || user?.username || user?.name || "",
// // //       phone: user?.phone || "",
// // //       visit_date: "",
// // //       visit_time: "",
// // //       message: `Interested in site visit for ${project?.title || "this property"}`,
// // //     });
// // //     setMessage("");
// // //     setBookingOpen(true);
// // //   };

// // //   const closeBookingModal = () => {
// // //     setBookingOpen(false);
// // //     setSelectedProperty(null);
// // //     setMessage("");
// // //   };

// // //   const handleBookingChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setBookingForm((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const submitBooking = async (e) => {
// // //     e.preventDefault();

// // //     if (!user?.id || !selectedProperty?.id) return;

// // //     try {
// // //       setBookingLoading(true);
// // //       setMessage("");

// // //       await apiPost(`/admindashboard/customer/book-visit/`, {
// // //         user: user.id,
// // //         property: selectedProperty.id,
// // //         name: bookingForm.name,
// // //         phone: bookingForm.phone,
// // //         visit_date: bookingForm.visit_date,
// // //         visit_time: bookingForm.visit_time,
// // //         message: bookingForm.message,
// // //         status: "upcoming",
// // //       });

// // //       setMessage("Visit booked successfully.");

// // //       setTimeout(() => {
// // //         closeBookingModal();
// // //       }, 1000);
// // //     } catch (error) {
// // //       console.error(error);
// // //       setMessage(error.message || "Failed to book visit.");
// // //     } finally {
// // //       setBookingLoading(false);
// // //     }
// // //   };

// // //   const filteredProjects = useMemo(() => {
// // //     let data = [...projects];

// // //     data = data.filter((project) => {
// // //       const locationValue =
// // //         project.short_location || project.location || project.full_address || "";

// // //       const searchableText = normalizeText(
// // //         [
// // //           project.title,
// // //           project.city,
// // //           project.short_location,
// // //           project.location,
// // //           project.full_address,
// // //           project.developer_name,
// // //           project.property_type,
// // //           project.property_status,
// // //         ].join(" ")
// // //       );

// // //       const keywordMatch =
// // //         !filters.keyword ||
// // //         searchableText.includes(normalizeText(filters.keyword));

// // //       const cityMatch = !filters.city || project.city === filters.city;

// // //       const locationMatch =
// // //         !filters.location || locationValue === filters.location;

// // //       const typeMatch =
// // //         !filters.propertyType || project.property_type === filters.propertyType;

// // //       const statusMatch =
// // //         !filters.propertyStatus ||
// // //         project.property_status === filters.propertyStatus;

// // //       const bedroomsMatch = matchesCountFilter(project.bedrooms, filters.bedrooms);
// // //       const bathroomsMatch = matchesCountFilter(project.bathrooms, filters.bathrooms);

// // //       const price = toNumber(project.price);
// // //       const area = toNumber(project.carpet_area || project.size_sqft);

// // //       const priceMatch =
// // //         price >= filters.priceRange[0] && price <= filters.priceRange[1];

// // //       const areaMatch =
// // //         area >= filters.areaRange[0] && area <= filters.areaRange[1];

// // //       const projectAmenities = Array.isArray(project.amenities)
// // //         ? project.amenities
// // //         : [];

// // //       const amenitiesMatch =
// // //         filters.amenities.length === 0 ||
// // //         filters.amenities.every((item) => projectAmenities.includes(item));

// // //       return (
// // //         keywordMatch &&
// // //         cityMatch &&
// // //         locationMatch &&
// // //         typeMatch &&
// // //         statusMatch &&
// // //         bedroomsMatch &&
// // //         bathroomsMatch &&
// // //         priceMatch &&
// // //         areaMatch &&
// // //         amenitiesMatch
// // //       );
// // //     });

// // //     switch (filters.sortBy) {
// // //       case "Oldest":
// // //         data.sort(
// // //           (a, b) =>
// // //             new Date(a.posting_date || 0).getTime() -
// // //             new Date(b.posting_date || 0).getTime()
// // //         );
// // //         break;
// // //       case "Price Low to High":
// // //         data.sort((a, b) => toNumber(a.price) - toNumber(b.price));
// // //         break;
// // //       case "Price High to Low":
// // //         data.sort((a, b) => toNumber(b.price) - toNumber(a.price));
// // //         break;
// // //       case "Area Low to High":
// // //         data.sort(
// // //           (a, b) =>
// // //             toNumber(a.carpet_area || a.size_sqft) -
// // //             toNumber(b.carpet_area || b.size_sqft)
// // //         );
// // //         break;
// // //       case "Area High to Low":
// // //         data.sort(
// // //           (a, b) =>
// // //             toNumber(b.carpet_area || b.size_sqft) -
// // //             toNumber(a.carpet_area || a.size_sqft)
// // //         );
// // //         break;
// // //       case "Newest":
// // //       default:
// // //         data.sort(
// // //           (a, b) =>
// // //             new Date(b.posting_date || 0).getTime() -
// // //             new Date(a.posting_date || 0).getTime()
// // //         );
// // //         break;
// // //     }

// // //     return data;
// // //   }, [projects, filters]);

// // //   const developerName =
// // //     projects[0]?.developer_name || developerSlug.replaceAll("-", " ");

// // //   return (
// // //     <>

// // //       <style jsx global>{`
// // //         .developer-projects-page .developer-page-heading {
// // //           color: #111827 !important;
// // //         }

// // //         .developer-projects-page .developer-page-subtitle,
// // //         .developer-projects-page .developer-page-count,
// // //         .developer-projects-page .developer-empty-text {
// // //           color: #5f6368 !important;
// // //         }

// // //         .developer-project-card {
// // //           background: #ffffff !important;
// // //           color: #111827 !important;
// // //           border: 1px solid rgba(0, 0, 0, 0.06);
// // //           transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
// // //         }

// // //         .developer-project-card-content {
// // //           background: #ffffff !important;
// // //           color: #111827 !important;
// // //         }

// // //         .developer-project-title,
// // //         .developer-project-title-link {
// // //           color: #111827 !important;
// // //           opacity: 1 !important;
// // //         }

// // //         .developer-project-title-link {
// // //           text-decoration: none !important;
// // //         }

// // //         .developer-project-title-link:hover {
// // //           color: #f28c52 !important;
// // //         }

// // //         .developer-project-location,
// // //         .developer-project-location i,
// // //         .developer-project-city,
// // //         .developer-project-city-link {
// // //           color: #5f6368 !important;
// // //           opacity: 1 !important;
// // //         }

// // //         .developer-project-config {
// // //           background: #f4efec !important;
// // //           color: #222222 !important;
// // //         }

// // //         .developer-project-config strong {
// // //           color: #4b5563 !important;
// // //         }

// // //         .developer-project-price {
// // //           color: #f28c52 !important;
// // //           opacity: 1 !important;
// // //         }

// // //         .developer-project-meta,
// // //         .developer-project-meta li {
// // //           color: #5f6368 !important;
// // //           opacity: 1 !important;
// // //         }

// // //         .developer-project-meta span {
// // //           color: #111827 !important;
// // //           font-weight: 700;
// // //         }

// // //         .developer-project-bottom {
// // //           border-top-color: #eeeeee !important;
// // //         }

// // //         .developer-project-details-btn {
// // //           color: #ff6a00 !important;
// // //           border-color: #ff6a00 !important;
// // //           background: transparent !important;
// // //         }

// // //         .developer-project-details-btn:hover {
// // //           background: #ff6a00 !important;
// // //           color: #ffffff !important;
// // //         }

// // //         .developer-project-book-btn {
// // //           background: #f28c52 !important;
// // //           color: #ffffff !important;
// // //           border-color: #f28c52 !important;
// // //         }

// // //         .developer-project-book-btn:hover {
// // //           background: #ff6a00 !important;
// // //           border-color: #ff6a00 !important;
// // //           color: #ffffff !important;
// // //         }

// // //         body.dark .developer-projects-page .developer-page-heading,
// // //         body.dark-mode .developer-projects-page .developer-page-heading,
// // //         html.dark .developer-projects-page .developer-page-heading,
// // //         html.dark-mode .developer-projects-page .developer-page-heading,
// // //         [data-theme="dark"] .developer-projects-page .developer-page-heading,
// // //         .dark .developer-projects-page .developer-page-heading {
// // //           color: #ffffff !important;
// // //         }

// // //         body.dark .developer-projects-page .developer-page-subtitle,
// // //         body.dark-mode .developer-projects-page .developer-page-subtitle,
// // //         html.dark .developer-projects-page .developer-page-subtitle,
// // //         html.dark-mode .developer-projects-page .developer-page-subtitle,
// // //         [data-theme="dark"] .developer-projects-page .developer-page-subtitle,
// // //         .dark .developer-projects-page .developer-page-subtitle,
// // //         body.dark .developer-projects-page .developer-page-count,
// // //         body.dark-mode .developer-projects-page .developer-page-count,
// // //         html.dark .developer-projects-page .developer-page-count,
// // //         html.dark-mode .developer-projects-page .developer-page-count,
// // //         [data-theme="dark"] .developer-projects-page .developer-page-count,
// // //         .dark .developer-projects-page .developer-page-count,
// // //         body.dark .developer-projects-page .developer-empty-text,
// // //         body.dark-mode .developer-projects-page .developer-empty-text,
// // //         html.dark .developer-projects-page .developer-empty-text,
// // //         html.dark-mode .developer-projects-page .developer-empty-text,
// // //         [data-theme="dark"] .developer-projects-page .developer-empty-text,
// // //         .dark .developer-projects-page .developer-empty-text {
// // //           color: #b6beca !important;
// // //         }

// // //         body.dark .developer-project-card,
// // //         body.dark-mode .developer-project-card,
// // //         html.dark .developer-project-card,
// // //         html.dark-mode .developer-project-card,
// // //         [data-theme="dark"] .developer-project-card,
// // //         .dark .developer-project-card {
// // //           background: #1f2328 !important;
// // //           color: #ffffff !important;
// // //           border-color: rgba(255, 255, 255, 0.08) !important;
// // //           box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35) !important;
// // //         }

// // //         body.dark .developer-project-card-content,
// // //         body.dark-mode .developer-project-card-content,
// // //         html.dark .developer-project-card-content,
// // //         html.dark-mode .developer-project-card-content,
// // //         [data-theme="dark"] .developer-project-card-content,
// // //         .dark .developer-project-card-content {
// // //           background: #1f2328 !important;
// // //           color: #ffffff !important;
// // //         }

// // //         body.dark .developer-project-title,
// // //         body.dark-mode .developer-project-title,
// // //         html.dark .developer-project-title,
// // //         html.dark-mode .developer-project-title,
// // //         [data-theme="dark"] .developer-project-title,
// // //         .dark .developer-project-title,
// // //         body.dark .developer-project-title-link,
// // //         body.dark-mode .developer-project-title-link,
// // //         html.dark .developer-project-title-link,
// // //         html.dark-mode .developer-project-title-link,
// // //         [data-theme="dark"] .developer-project-title-link,
// // //         .dark .developer-project-title-link {
// // //           color: #ffffff !important;
// // //         }

// // //         body.dark .developer-project-location,
// // //         body.dark-mode .developer-project-location,
// // //         html.dark .developer-project-location,
// // //         html.dark-mode .developer-project-location,
// // //         [data-theme="dark"] .developer-project-location,
// // //         .dark .developer-project-location,
// // //         body.dark .developer-project-location i,
// // //         body.dark-mode .developer-project-location i,
// // //         html.dark .developer-project-location i,
// // //         html.dark-mode .developer-project-location i,
// // //         [data-theme="dark"] .developer-project-location i,
// // //         .dark .developer-project-location i,
// // //         body.dark .developer-project-city,
// // //         body.dark-mode .developer-project-city,
// // //         html.dark .developer-project-city,
// // //         html.dark-mode .developer-project-city,
// // //         [data-theme="dark"] .developer-project-city,
// // //         .dark .developer-project-city,
// // //         body.dark .developer-project-city-link,
// // //         body.dark-mode .developer-project-city-link,
// // //         html.dark .developer-project-city-link,
// // //         html.dark-mode .developer-project-city-link,
// // //         [data-theme="dark"] .developer-project-city-link,
// // //         .dark .developer-project-city-link {
// // //           color: #b6beca !important;
// // //         }

// // //         body.dark .developer-project-config,
// // //         body.dark-mode .developer-project-config,
// // //         html.dark .developer-project-config,
// // //         html.dark-mode .developer-project-config,
// // //         [data-theme="dark"] .developer-project-config,
// // //         .dark .developer-project-config {
// // //           background: rgba(255, 255, 255, 0.07) !important;
// // //           color: #ffffff !important;
// // //         }

// // //         body.dark .developer-project-config strong,
// // //         body.dark-mode .developer-project-config strong,
// // //         html.dark .developer-project-config strong,
// // //         html.dark-mode .developer-project-config strong,
// // //         [data-theme="dark"] .developer-project-config strong,
// // //         .dark .developer-project-config strong {
// // //           color: #f28c52 !important;
// // //         }

// // //         body.dark .developer-project-meta,
// // //         body.dark-mode .developer-project-meta,
// // //         html.dark .developer-project-meta,
// // //         html.dark-mode .developer-project-meta,
// // //         [data-theme="dark"] .developer-project-meta,
// // //         .dark .developer-project-meta,
// // //         body.dark .developer-project-meta li,
// // //         body.dark-mode .developer-project-meta li,
// // //         html.dark .developer-project-meta li,
// // //         html.dark-mode .developer-project-meta li,
// // //         [data-theme="dark"] .developer-project-meta li,
// // //         .dark .developer-project-meta li {
// // //           color: #b6beca !important;
// // //         }

// // //         body.dark .developer-project-meta span,
// // //         body.dark-mode .developer-project-meta span,
// // //         html.dark .developer-project-meta span,
// // //         html.dark-mode .developer-project-meta span,
// // //         [data-theme="dark"] .developer-project-meta span,
// // //         .dark .developer-project-meta span {
// // //           color: #ffffff !important;
// // //         }

// // //         body.dark .developer-project-bottom,
// // //         body.dark-mode .developer-project-bottom,
// // //         html.dark .developer-project-bottom,
// // //         html.dark-mode .developer-project-bottom,
// // //         [data-theme="dark"] .developer-project-bottom,
// // //         .dark .developer-project-bottom {
// // //           border-top-color: rgba(255, 255, 255, 0.1) !important;
// // //         }

// // //         body.dark .developer-project-details-btn,
// // //         body.dark-mode .developer-project-details-btn,
// // //         html.dark .developer-project-details-btn,
// // //         html.dark-mode .developer-project-details-btn,
// // //         [data-theme="dark"] .developer-project-details-btn,
// // //         .dark .developer-project-details-btn {
// // //           color: #f28c52 !important;
// // //           border-color: #f28c52 !important;
// // //           background: transparent !important;
// // //         }

// // //         body.dark .developer-project-details-btn:hover,
// // //         body.dark-mode .developer-project-details-btn:hover,
// // //         html.dark .developer-project-details-btn:hover,
// // //         html.dark-mode .developer-project-details-btn:hover,
// // //         [data-theme="dark"] .developer-project-details-btn:hover,
// // //         .dark .developer-project-details-btn:hover {
// // //           background: #f28c52 !important;
// // //           color: #ffffff !important;
// // //         }
// // //       `}</style>

// // //     <section className="section-property-layout style-1 developer-projects-page">
// // //       <div className="tf-container">
// // //         <div style={{ marginBottom: 24 }}>
// // //           <h2 className="title developer-page-heading">Projects by {developerName}</h2>
// // //           <p className="text-1 developer-page-subtitle">
// // //             Showing all projects by {developerName} across all cities and locations
// // //           </p>
// // //         </div>

// // //         <div style={{ marginBottom: 30 }}>
// // //           <SearchForm
// // //             projects={projects}
// // //             onFilterChange={setFilters}
// // //             lockedDeveloper={developerName}
// // //           />
// // //         </div>

// // //         <div style={{ marginBottom: 20 }}>
// // //           <p className="text-1 developer-page-count">
// // //             Showing {filteredProjects.length} project
// // //             {filteredProjects.length === 1 ? "" : "s"}
// // //           </p>
// // //         </div>

// // //         <div className="row">
// // //           {filteredProjects.map((project) => {
// // //             const sellerPhone = getPhone(project);

// // //             return (
// // //               <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
// // //                 <div
// // //                   className="box-house developer-project-card"
// // //                   style={{
// // //                     borderRadius: "22px",
// // //                     overflow: "hidden",
// // //                     background: "#fff",
// // //                     boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
// // //                   }}
// // //                 >
// // //                   <div className="image-wrap" style={{ position: "relative" }}>
// // //                     <Link
// // //                       href={getPropertyDetailHref(project)}
// // //                       onClick={() => handleViewed(project.id)}
// // //                     >
// // //                       <Image
// // //                         alt={project.title || "Property"}
// // //                         src={project.imageSrc || "/images/home/house-db-1.jpg"}
// // //                         width={615}
// // //                         height={405}
// // //                         style={{ width: "100%", height: "280px", objectFit: "cover" }}
// // //                       />
// // //                     </Link>

// // //                     <ul
// // //                       className="box-tag flex gap-8"
// // //                       style={{
// // //                         position: "absolute",
// // //                         top: 14,
// // //                         left: 14,
// // //                         zIndex: 2,
// // //                       }}
// // //                     >
// // //                       {project.property_label ? (
// // //                         <li className="flat-tag text-4 bg-main fw-6 text_white">
// // //                           {project.property_label}
// // //                         </li>
// // //                       ) : null}

// // //                       <li className="flat-tag text-4 bg-3 fw-6 text_white">
// // //                         {project.property_status === "for-rent" ? "For Rent" : "For Sale"}
// // //                       </li>
// // //                     </ul>

// // //                     <div
// // //                       style={{
// // //                         position: "absolute",
// // //                         right: 16,
// // //                         top: 16,
// // //                         display: "flex",
// // //                         gap: 12,
// // //                         zIndex: 5,
// // //                       }}
// // //                     >
// // //                       <button
// // //                         type="button"
// // //                         style={actionBtnStyle}
// // //                         onClick={() => handleFavorite(project.id)}
// // //                         title="Favorite"
// // //                       >
// // //                         <BookmarkIcon active={project.is_favorite} />
// // //                       </button>

// // //                       <button
// // //                         type="button"
// // //                         style={actionBtnStyle}
// // //                         onClick={() => handleLiked(project.id)}
// // //                         title="Like"
// // //                       >
// // //                         <HeartIcon active={project.is_liked} />
// // //                       </button>

// // //                       {sellerPhone ? (
// // //                         <a
// // //                           href={`tel:${sellerPhone}`}
// // //                           style={actionBtnStyle}
// // //                           title="Call"
// // //                         >
// // //                           <PhoneIcon />
// // //                         </a>
// // //                       ) : null}
// // //                     </div>
// // //                   </div>

// // //                   <div
// // //                     className="content developer-project-card-content"
// // //                     style={{
// // //                       background: "#fff",
// // //                       padding: "20px",
// // //                       position: "relative",
// // //                       zIndex: 2,
// // //                     }}
// // //                   >
// // //                     <h5 className="title developer-project-title" style={{ marginBottom: 8 }}>
// // //                       <Link
// // //                        href={getPropertyDetailHref(project)}
// // //                         onClick={() => handleViewed(project.id)}
// // //                         className="developer-project-title-link"
// // //                         style={{ color: "#1f1f1f", opacity: 1 }}
// // //                       >
// // //                         {project.title}
// // //                       </Link>
// // //                     </h5>

// // //                     <p
// // //                       className="location text-1 flex items-center gap-6 developer-project-location"
// // //                       style={{ color: "#5f6368", opacity: 1, marginBottom: 8 }}
// // //                     >
// // //                       <i className="icon-location" />
// // //                       {getLocation(project)}
// // //                     </p>

// // //                     <p
// // //                       className="text-1 developer-project-city"
// // //                       style={{ marginTop: 6, color: "#666", opacity: 1 }}
// // //                     >
// // //                       <Link
// // //                         href={`/cities/${project.city_slug}`}
// // //                         className="developer-project-city-link"
// // //                         style={{ color: "#666", opacity: 1 }}
// // //                       >
// // //                         {project.city}
// // //                       </Link>
// // //                     </p>

// // //                     <div
// // //                       className="developer-project-config"
// // //                       style={{
// // //                         background: "#f4efec",
// // //                         borderRadius: "12px",
// // //                         padding: "10px 14px",
// // //                         marginTop: 10,
// // //                         marginBottom: "12px",
// // //                         fontSize: "14px",
// // //                         color: "#222",
// // //                       }}
// // //                     >
// // //                       <strong>Configuration:</strong> {project.configuration_text}
// // //                     </div>

// // //                     <div
// // //                       className="price text-3 fw-6 developer-project-price"
// // //                       style={{ marginTop: 8, color: "#f28c52", opacity: 1 }}
// // //                     >
// // //                       {formatPrice(project.price)}
// // //                     </div>

// // //                     <ul
// // //                       className="meta-list flex developer-project-meta"
// // //                       style={{ marginTop: 8, color: "#222", opacity: 1 }}
// // //                     >
// // //                       <li className="text-1 flex">
// // //                         <span>{project.bedrooms || 0}</span>BHK
// // //                       </li>
// // //                       <li className="text-1 flex">
// // //                         <span>{project.bathrooms || 0}</span>Bath
// // //                       </li>
// // //                       <li className="text-1 flex">
// // //                         <span>{project.carpet_area || project.size_sqft || "-"}</span>
// // //                         Sqft
// // //                       </li>
// // //                     </ul>

// // //                     <div
// // //                       className="bot developer-project-bottom"
// // //                       style={{
// // //                         display: "flex",
// // //                         justifyContent: "space-between",
// // //                         alignItems: "center",
// // //                         gap: 14,
// // //                         borderTop: "1px solid #eee",
// // //                         paddingTop: 16,
// // //                         marginTop: 14,
// // //                       }}
// // //                     >
// // //                       <Link
// // //                         href={getPropertyDetailHref(project)}
// // //                         className="tf-btn style-border pd-4 developer-project-details-btn"
// // //                         onClick={() => handleViewed(project.id)}
// // //                       >
// // //                         Details
// // //                       </Link>

// // //                       <button
// // //                         type="button"
// // //                         className="tf-btn pd-4 developer-project-book-btn"
// // //                         onClick={() => openBookingModal(project)}
// // //                         style={{
// // //                           background: "#f28c52",
// // //                           color: "#fff",
// // //                           border: "1px solid #f28c52",
// // //                         }}
// // //                       >
// // //                         Book Visit
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}

// // //           {filteredProjects.length === 0 && (
// // //             <div className="col-12">
// // //               <p className="developer-empty-text">No properties found for the selected filters.</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {bookingOpen && selectedProperty && (
// // //         <div
// // //           className="modal fade show"
// // //           style={{
// // //             display: "block",
// // //             background: "rgba(0,0,0,0.5)",
// // //             zIndex: 9999,
// // //           }}
// // //         >
// // //           <div className="modal-dialog modal-dialog-centered">
// // //             <div
// // //               className="modal-content"
// // //               style={{
// // //                 borderRadius: "20px",
// // //                 overflow: "hidden",
// // //               }}
// // //             >
// // //               <div className="modal-header">
// // //                 <h5 className="modal-title">
// // //                   Book a Visit - {selectedProperty.title}
// // //                 </h5>
// // //                 <button
// // //                   type="button"
// // //                   className="btn-close"
// // //                   onClick={closeBookingModal}
// // //                 />
// // //               </div>

// // //               <form onSubmit={submitBooking}>
// // //                 <div className="modal-body">
// // //                   <div className="mb-3">
// // //                     <label className="form-label">Name</label>
// // //                     <input
// // //                       type="text"
// // //                       name="name"
// // //                       className="form-control"
// // //                       value={bookingForm.name}
// // //                       onChange={handleBookingChange}
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div className="mb-3">
// // //                     <label className="form-label">Phone</label>
// // //                     <input
// // //                       type="text"
// // //                       name="phone"
// // //                       className="form-control"
// // //                       value={bookingForm.phone}
// // //                       onChange={handleBookingChange}
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div className="mb-3">
// // //                     <label className="form-label">Visit Date</label>
// // //                     <input
// // //                       type="date"
// // //                       name="visit_date"
// // //                       className="form-control"
// // //                       value={bookingForm.visit_date}
// // //                       onChange={handleBookingChange}
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div className="mb-3">
// // //                     <label className="form-label">Visit Time</label>
// // //                     <input
// // //                       type="time"
// // //                       name="visit_time"
// // //                       className="form-control"
// // //                       value={bookingForm.visit_time}
// // //                       onChange={handleBookingChange}
// // //                       required
// // //                     />
// // //                   </div>

// // //                   <div className="mb-3">
// // //                     <label className="form-label">Message</label>
// // //                     <textarea
// // //                       name="message"
// // //                       className="form-control"
// // //                       rows={3}
// // //                       value={bookingForm.message}
// // //                       onChange={handleBookingChange}
// // //                     />
// // //                   </div>

// // //                   {message ? (
// // //                     <div
// // //                       style={{
// // //                         color: "#ff6b35",
// // //                         fontSize: "14px",
// // //                         marginTop: "8px",
// // //                       }}
// // //                     >
// // //                       {message}
// // //                     </div>
// // //                   ) : null}
// // //                 </div>

// // //                 <div
// // //                   className="modal-footer"
// // //                   style={{
// // //                     display: "flex",
// // //                     justifyContent: "flex-end",
// // //                     gap: "12px",
// // //                     padding: "16px 20px 20px",
// // //                   }}
// // //                 >
// // //                   <button
// // //                     type="button"
// // //                     className="tf-btn style-border pd-4"
// // //                     onClick={closeBookingModal}
// // //                     style={{
// // //                       minWidth: "130px",
// // //                       border: "1px solid #d9d9d9",
// // //                       background: "#fff",
// // //                       color: "#222",
// // //                     }}
// // //                   >
// // //                     Cancel
// // //                   </button>

// // //                   <button
// // //                     type="submit"
// // //                     className="tf-btn pd-4"
// // //                     disabled={bookingLoading}
// // //                     style={{
// // //                       minWidth: "170px",
// // //                       background: "#f28c52",
// // //                       color: "#fff",
// // //                       border: "1px solid #f28c52",
// // //                       opacity: bookingLoading ? 0.7 : 1,
// // //                     }}
// // //                   >
// // //                     {bookingLoading ? "Booking..." : "Confirm Visit"}
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </section>
// // //     </>
// // //   );
// // // }







// // "use client";

// // import React, { useEffect, useMemo, useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import SearchForm from "../common/SearchForm";
// // import { apiGet, apiPost } from "../lib/api";
// // import { getPropertyDetailHref } from "../../utlis/propertyUrl";
// // import ProtectedPropertyLink, {
// //   requirePropertyLogin,
// // } from "@/components/common/ProtectedPropertyLink";

// // function toNumber(value) {
// //   const num = Number(value);
// //   return Number.isFinite(num) ? num : 0;
// // }

// // function normalizeText(value) {
// //   return String(value || "").trim().toLowerCase();
// // }

// // function formatPrice(price) {
// //   const num = Number(price || 0);
// //   if (!num) return "Price on request";
// //   if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
// //   if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
// //   return `₹${num.toLocaleString("en-IN")}`;
// // }

// // function matchesCountFilter(actual, selected) {
// //   if (!selected) return true;
// //   const value = toNumber(actual);
// //   if (selected === "5+") return value >= 5;
// //   if (selected === "4+") return value >= 4;
// //   return value === Number(selected);
// // }

// // function getStoredUser() {
// //   if (typeof window === "undefined") return null;
// //   try {
// //     return JSON.parse(localStorage.getItem("userData") || "null");
// //   } catch {
// //     return null;
// //   }
// // }

// // function getImage(project) {
// //   return (
// //     project?.image ||
// //     project?.imageSrc ||
// //     project?.featured_image ||
// //     project?.cover_image ||
// //     project?.thumbnail ||
// //     "/images/home/house-db-1.jpg"
// //   );
// // }

// // function getLocation(project) {
// //   return (
// //     project?.short_location ||
// //     project?.location ||
// //     project?.full_address ||
// //     "Location on request"
// //   );
// // }

// // function getConfiguration(project) {
// //   if (project?.configuration) return project.configuration;
// //   if (project?.configuration_text) return project.configuration_text;
// //   if (project?.bedrooms) return `${project.bedrooms} BHK`;
// //   if (project?.property_type) return project.property_type;
// //   return "Configuration on request";
// // }

// // function getPhone(project) {
// //   return (
// //     project?.seller_phone ||
// //     project?.phone ||
// //     project?.contact_phone ||
// //     project?.contact_number ||
// //     project?.contact_seller_phone ||
// //     project?.contact_seller?.phone ||
// //     project?.contact_seller?.office_number ||
// //     ""
// //   );
// // }

// // const actionBtnStyle = {
// //   width: "56px",
// //   height: "56px",
// //   minWidth: "56px",
// //   borderRadius: "50%",
// //   border: "none",
// //   background: "rgba(35, 35, 35, 0.60)",
// //   backdropFilter: "blur(6px)",
// //   WebkitBackdropFilter: "blur(6px)",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   cursor: "pointer",
// //   boxShadow: "0 8px 24px rgba(0,0,0,0.20)",
// //   padding: 0,
// // };

// // function BookmarkIcon({ active = false }) {
// //   return (
// //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
// //       <path
// //         d="M7 4.75H17C17.69 4.75 18.25 5.31 18.25 6V20L12 16.2L5.75 20V6C5.75 5.31 6.31 4.75 7 4.75Z"
// //         stroke={active ? "#ff8c5a" : "#ffffff"}
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       />
// //     </svg>
// //   );
// // }

// // function HeartIcon({ active = false }) {
// //   return (
// //     <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#ff8c5a" : "none"}>
// //       <path
// //         d="M12 20.5C12 20.5 4.5 16 4.5 9.75C4.5 7.4 6.4 5.5 8.75 5.5C10.2 5.5 11.48 6.22 12 7.32C12.52 6.22 13.8 5.5 15.25 5.5C17.6 5.5 19.5 7.4 19.5 9.75C19.5 16 12 20.5 12 20.5Z"
// //         stroke={active ? "#ff8c5a" : "#ffffff"}
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       />
// //     </svg>
// //   );
// // }

// // function PhoneIcon() {
// //   return (
// //     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
// //       <path
// //         d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C11.61 20.92 4 13.31 4 3.92C4 3.37 4.45 2.92 5 2.92H8C8.55 2.92 9 3.37 9 3.92V6.88C9 7.32 8.71 7.71 8.29 7.84L6.77 8.35C7.55 10.6 9.32 12.37 11.57 13.15L12.08 11.63C12.21 11.21 12.6 10.92 13.04 10.92H16C16.55 10.92 17 11.37 17 11.92V14.92C17 15.47 16.55 15.92 16 15.92H13.5"
// //         stroke="#ffffff"
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       />
// //     </svg>
// //   );
// // }

// // export default function DeveloperProjectsPage({ developerSlug }) {
// //   const [projects, setProjects] = useState([]);
// //   const [filters, setFilters] = useState({
// //     keyword: "",
// //     city: "",
// //     location: "",
// //     propertyType: "",
// //     propertyStatus: "",
// //     bedrooms: "",
// //     bathrooms: "",
// //     amenities: [],
// //     sortBy: "Newest",
// //     priceRange: [0, 50000000],
// //     areaRange: [0, 5000],
// //   });

// //   const [selectedProperty, setSelectedProperty] = useState(null);
// //   const [bookingOpen, setBookingOpen] = useState(false);
// //   const [bookingLoading, setBookingLoading] = useState(false);
// //   const [message, setMessage] = useState("");

// //   const [bookingForm, setBookingForm] = useState({
// //     name: "",
// //     phone: "",
// //     visit_date: "",
// //     visit_time: "",
// //     message: "",
// //   });

// //   const user = getStoredUser();

// //   const loadProjects = async () => {
// //     try {
// //       const res = await apiGet(
// //         `/admindashboard/developers/${developerSlug}/properties/`
// //       );
// //       const baseList = Array.isArray(res) ? res : [];

// //       let favoriteIds = [];
// //       let likedIds = [];

// //       if (user?.id) {
// //         try {
// //           const [favRes, likedRes] = await Promise.all([
// //             apiGet(`/admindashboard/customer/${user.id}/favorite-properties/`),
// //             apiGet(`/admindashboard/customer/${user.id}/liked-videos/`),
// //           ]);

// //           const favList = Array.isArray(favRes)
// //             ? favRes
// //             : Array.isArray(favRes?.data)
// //             ? favRes.data
// //             : [];

// //           const likedList = Array.isArray(likedRes)
// //             ? likedRes
// //             : Array.isArray(likedRes?.data)
// //             ? likedRes.data
// //             : [];

// //           favoriteIds = favList.map((item) => item.id);
// //           likedIds = likedList.map((item) => item.id);
// //         } catch (error) {
// //           console.error("Favorite/liked fetch error:", error);
// //         }
// //       }

// //       const merged = baseList.map((project) => ({
// //         ...project,
// //         imageSrc: getImage(project),
// //         seller_phone: getPhone(project),
// //         configuration_text: getConfiguration(project),
// //         is_favorite: favoriteIds.includes(project.id),
// //         is_liked: likedIds.includes(project.id),
// //       }));

// //       setProjects(merged);
// //     } catch (error) {
// //       console.error("Developer projects fetch error:", error);
// //       setProjects([]);
// //     }
// //   };

// //   useEffect(() => {
// //     loadProjects();
// //   }, [developerSlug]);

// //   const handleFavorite = async (id) => {
// //     if (!user?.id) {
// //       requirePropertyLogin(window.location.pathname || "/");
// //       return;
// //     }

// //     try {
// //       const res = await apiPost(`/admindashboard/customer/toggle-favorite/`, {
// //         user_id: user.id,
// //         property_id: id,
// //       });

// //       setProjects((prev) =>
// //         prev.map((item) =>
// //           item.id === id
// //             ? {
// //                 ...item,
// //                 is_favorite:
// //                   typeof res?.is_favorite === "boolean"
// //                     ? res.is_favorite
// //                     : !item.is_favorite,
// //               }
// //             : item
// //         )
// //       );
// //     } catch (error) {
// //       console.error(error);
// //       alert(error.message || "Favorite update failed");
// //     }
// //   };

// //   const handleLiked = async (id) => {
// //     if (!user?.id) {
// //       requirePropertyLogin(window.location.pathname || "/");
// //       return;
// //     }

// //     try {
// //       const res = await apiPost(`/admindashboard/customer/like-video/`, {
// //         user_id: user.id,
// //         property_id: id,
// //       });

// //       setProjects((prev) =>
// //         prev.map((item) =>
// //           item.id === id
// //             ? {
// //                 ...item,
// //                 is_liked:
// //                   typeof res?.liked === "boolean" ? res.liked : !item.is_liked,
// //               }
// //             : item
// //         )
// //       );
// //     } catch (error) {
// //       console.error(error);
// //       alert(error.message || "Liked update failed");
// //     }
// //   };

// //   const handleViewed = async (propertyId) => {
// //     if (!user?.id) return;

// //     try {
// //       await apiPost(`/admindashboard/customer/add-view/`, {
// //         user_id: user.id,
// //         property_id: propertyId,
// //       });
// //     } catch (error) {
// //       console.error("View tracking failed:", error);
// //     }
// //   };

// //   const openBookingModal = (project) => {
// //     const detailHref = getPropertyDetailHref(project);

// //     if (!user?.id) {
// //       requirePropertyLogin(detailHref);
// //       return;
// //     }

// //     setSelectedProperty(project);
// //     setBookingForm({
// //       name: user?.full_name || user?.username || user?.name || "",
// //       phone: user?.phone || "",
// //       visit_date: "",
// //       visit_time: "",
// //       message: `Interested in site visit for ${project?.title || "this property"}`,
// //     });
// //     setMessage("");
// //     setBookingOpen(true);
// //   };

// //   const closeBookingModal = () => {
// //     setBookingOpen(false);
// //     setSelectedProperty(null);
// //     setMessage("");
// //   };

// //   const handleBookingChange = (e) => {
// //     const { name, value } = e.target;
// //     setBookingForm((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const submitBooking = async (e) => {
// //     e.preventDefault();

// //     if (!user?.id || !selectedProperty?.id) return;

// //     try {
// //       setBookingLoading(true);
// //       setMessage("");

// //       await apiPost(`/admindashboard/customer/book-visit/`, {
// //         user: user.id,
// //         property: selectedProperty.id,
// //         name: bookingForm.name,
// //         phone: bookingForm.phone,
// //         visit_date: bookingForm.visit_date,
// //         visit_time: bookingForm.visit_time,
// //         message: bookingForm.message,
// //         status: "upcoming",
// //       });

// //       setMessage("Visit booked successfully.");

// //       setTimeout(() => {
// //         closeBookingModal();
// //       }, 1000);
// //     } catch (error) {
// //       console.error(error);
// //       setMessage(error.message || "Failed to book visit.");
// //     } finally {
// //       setBookingLoading(false);
// //     }
// //   };

// //   const filteredProjects = useMemo(() => {
// //     let data = [...projects];

// //     data = data.filter((project) => {
// //       const locationValue =
// //         project.short_location || project.location || project.full_address || "";

// //       const searchableText = normalizeText(
// //         [
// //           project.title,
// //           project.city,
// //           project.short_location,
// //           project.location,
// //           project.full_address,
// //           project.developer_name,
// //           project.property_type,
// //           project.property_status,
// //         ].join(" ")
// //       );

// //       const keywordMatch =
// //         !filters.keyword ||
// //         searchableText.includes(normalizeText(filters.keyword));

// //       const cityMatch = !filters.city || project.city === filters.city;

// //       const locationMatch =
// //         !filters.location || locationValue === filters.location;

// //       const typeMatch =
// //         !filters.propertyType || project.property_type === filters.propertyType;

// //       const statusMatch =
// //         !filters.propertyStatus ||
// //         project.property_status === filters.propertyStatus;

// //       const bedroomsMatch = matchesCountFilter(project.bedrooms, filters.bedrooms);
// //       const bathroomsMatch = matchesCountFilter(project.bathrooms, filters.bathrooms);

// //       const price = toNumber(project.price);
// //       const area = toNumber(project.carpet_area || project.size_sqft);

// //       const priceMatch =
// //         price >= filters.priceRange[0] && price <= filters.priceRange[1];

// //       const areaMatch =
// //         area >= filters.areaRange[0] && area <= filters.areaRange[1];

// //       const projectAmenities = Array.isArray(project.amenities)
// //         ? project.amenities
// //         : [];

// //       const amenitiesMatch =
// //         filters.amenities.length === 0 ||
// //         filters.amenities.every((item) => projectAmenities.includes(item));

// //       return (
// //         keywordMatch &&
// //         cityMatch &&
// //         locationMatch &&
// //         typeMatch &&
// //         statusMatch &&
// //         bedroomsMatch &&
// //         bathroomsMatch &&
// //         priceMatch &&
// //         areaMatch &&
// //         amenitiesMatch
// //       );
// //     });

// //     switch (filters.sortBy) {
// //       case "Oldest":
// //         data.sort(
// //           (a, b) =>
// //             new Date(a.posting_date || 0).getTime() -
// //             new Date(b.posting_date || 0).getTime()
// //         );
// //         break;
// //       case "Price Low to High":
// //         data.sort((a, b) => toNumber(a.price) - toNumber(b.price));
// //         break;
// //       case "Price High to Low":
// //         data.sort((a, b) => toNumber(b.price) - toNumber(a.price));
// //         break;
// //       case "Area Low to High":
// //         data.sort(
// //           (a, b) =>
// //             toNumber(a.carpet_area || a.size_sqft) -
// //             toNumber(b.carpet_area || b.size_sqft)
// //         );
// //         break;
// //       case "Area High to Low":
// //         data.sort(
// //           (a, b) =>
// //             toNumber(b.carpet_area || b.size_sqft) -
// //             toNumber(a.carpet_area || a.size_sqft)
// //         );
// //         break;
// //       case "Newest":
// //       default:
// //         data.sort(
// //           (a, b) =>
// //             new Date(b.posting_date || 0).getTime() -
// //             new Date(a.posting_date || 0).getTime()
// //         );
// //         break;
// //     }

// //     return data;
// //   }, [projects, filters]);

// //   const developerName =
// //     projects[0]?.developer_name || developerSlug.replaceAll("-", " ");

// //   return (
// //     <>
// //       <style jsx global>{`
// //         .developer-project-card {
// //           background: #ffffff !important;
// //           color: #111827 !important;
// //           border: 1px solid rgba(0, 0, 0, 0.06);
// //           transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
// //         }

// //         .developer-project-card-content {
// //           background: #ffffff !important;
// //           color: #111827 !important;
// //         }

// //         .developer-project-title-link {
// //           color: #111827 !important;
// //           opacity: 1 !important;
// //           text-decoration: none !important;
// //         }

// //         .developer-project-title-link:hover {
// //           color: #f28c52 !important;
// //         }

// //         .developer-project-location,
// //         .developer-project-location i,
// //         .developer-project-city,
// //         .developer-project-city-link {
// //           color: #5f6368 !important;
// //           opacity: 1 !important;
// //         }

// //         .developer-project-config {
// //           background: #f4efec !important;
// //           color: #222222 !important;
// //         }

// //         .developer-project-price {
// //           color: #f28c52 !important;
// //           opacity: 1 !important;
// //         }

// //         .developer-project-details-btn {
// //           color: #ff6a00 !important;
// //           border-color: #ff6a00 !important;
// //           background: transparent !important;
// //         }

// //         .developer-project-details-btn:hover {
// //           background: #ff6a00 !important;
// //           color: #ffffff !important;
// //         }

// //         .developer-project-book-btn {
// //           background: #f28c52 !important;
// //           color: #ffffff !important;
// //           border-color: #f28c52 !important;
// //         }

// //         .developer-project-book-btn:hover {
// //           background: #ff6a00 !important;
// //           border-color: #ff6a00 !important;
// //           color: #ffffff !important;
// //         }
// //       `}</style>

// //       <section className="section-property-layout style-1 developer-projects-page">
// //         <div className="tf-container">
// //           <div style={{ marginBottom: 24 }}>
// //             <h2 className="title developer-page-heading">Projects by {developerName}</h2>
// //             <p className="text-1 developer-page-subtitle">
// //               Showing all projects by {developerName} across all cities and locations
// //             </p>
// //           </div>

// //           <div style={{ marginBottom: 30 }}>
// //             <SearchForm
// //               projects={projects}
// //               onFilterChange={setFilters}
// //               lockedDeveloper={developerName}
// //             />
// //           </div>

// //           <div style={{ marginBottom: 20 }}>
// //             <p className="text-1 developer-page-count">
// //               Showing {filteredProjects.length} project
// //               {filteredProjects.length === 1 ? "" : "s"}
// //             </p>
// //           </div>

// //           <div className="row">
// //             {filteredProjects.map((project) => {
// //               const sellerPhone = getPhone(project);
// //               const detailHref = getPropertyDetailHref(project);

// //               return (
// //                 <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
// //                   <div
// //                     className="box-house developer-project-card"
// //                     style={{
// //                       borderRadius: "22px",
// //                       overflow: "hidden",
// //                       background: "#fff",
// //                       boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
// //                     }}
// //                   >
// //                     <div className="image-wrap" style={{ position: "relative" }}>
// //                       <ProtectedPropertyLink
// //                         href={detailHref}
// //                         onAllowedClick={() => handleViewed(project.id)}
// //                       >
// //                         <Image
// //                           alt={project.title || "Property"}
// //                           src={project.imageSrc || "/images/home/house-db-1.jpg"}
// //                           width={615}
// //                           height={405}
// //                           style={{
// //                             width: "100%",
// //                             height: "280px",
// //                             objectFit: "cover",
// //                           }}
// //                         />
// //                       </ProtectedPropertyLink>

// //                       <ul
// //                         className="box-tag flex gap-8"
// //                         style={{
// //                           position: "absolute",
// //                           top: 14,
// //                           left: 14,
// //                           zIndex: 2,
// //                         }}
// //                       >
// //                         {project.property_label ? (
// //                           <li className="flat-tag text-4 bg-main fw-6 text_white">
// //                             {project.property_label}
// //                           </li>
// //                         ) : null}

// //                         <li className="flat-tag text-4 bg-3 fw-6 text_white">
// //                           {project.property_status === "for-rent" ? "For Rent" : "For Sale"}
// //                         </li>
// //                       </ul>

// //                       <div
// //                         style={{
// //                           position: "absolute",
// //                           right: 16,
// //                           top: 16,
// //                           display: "flex",
// //                           gap: 12,
// //                           zIndex: 5,
// //                         }}
// //                       >
// //                         <button
// //                           type="button"
// //                           style={actionBtnStyle}
// //                           onClick={() => handleFavorite(project.id)}
// //                           title="Favorite"
// //                         >
// //                           <BookmarkIcon active={project.is_favorite} />
// //                         </button>

// //                         <button
// //                           type="button"
// //                           style={actionBtnStyle}
// //                           onClick={() => handleLiked(project.id)}
// //                           title="Like"
// //                         >
// //                           <HeartIcon active={project.is_liked} />
// //                         </button>

// //                         {sellerPhone ? (
// //                           <a href={`tel:${sellerPhone}`} style={actionBtnStyle} title="Call">
// //                             <PhoneIcon />
// //                           </a>
// //                         ) : null}
// //                       </div>
// //                     </div>

// //                     <div
// //                       className="content developer-project-card-content"
// //                       style={{
// //                         background: "#fff",
// //                         padding: "20px",
// //                         position: "relative",
// //                         zIndex: 2,
// //                       }}
// //                     >
// //                       <h5 className="title developer-project-title" style={{ marginBottom: 8 }}>
// //                         <ProtectedPropertyLink
// //                           href={detailHref}
// //                           onAllowedClick={() => handleViewed(project.id)}
// //                           className="developer-project-title-link"
// //                           style={{ color: "#1f1f1f", opacity: 1 }}
// //                         >
// //                           {project.title}
// //                         </ProtectedPropertyLink>
// //                       </h5>

// //                       <p
// //                         className="location text-1 flex items-center gap-6 developer-project-location"
// //                         style={{ color: "#5f6368", opacity: 1, marginBottom: 8 }}
// //                       >
// //                         <i className="icon-location" />
// //                         {getLocation(project)}
// //                       </p>

// //                       <p
// //                         className="text-1 developer-project-city"
// //                         style={{ marginTop: 6, color: "#666", opacity: 1 }}
// //                       >
// //                         <Link
// //                           href={`/cities/${project.city_slug}`}
// //                           className="developer-project-city-link"
// //                           style={{ color: "#666", opacity: 1 }}
// //                         >
// //                           {project.city}
// //                         </Link>
// //                       </p>

// //                       <div
// //                         className="developer-project-config"
// //                         style={{
// //                           background: "#f4efec",
// //                           borderRadius: "12px",
// //                           padding: "10px 14px",
// //                           marginTop: 10,
// //                           marginBottom: "12px",
// //                           fontSize: "14px",
// //                           color: "#222",
// //                         }}
// //                       >
// //                         <strong>Configuration:</strong> {project.configuration_text}
// //                       </div>

// //                       <div
// //                         className="price text-3 fw-6 developer-project-price"
// //                         style={{ marginTop: 8, color: "#f28c52", opacity: 1 }}
// //                       >
// //                         {formatPrice(project.price)}
// //                       </div>

// //                       <ul
// //                         className="meta-list flex developer-project-meta"
// //                         style={{ marginTop: 8, color: "#222", opacity: 1 }}
// //                       >
// //                         <li className="text-1 flex">
// //                           <span>{project.bedrooms || 0}</span>BHK
// //                         </li>
// //                         <li className="text-1 flex">
// //                           <span>{project.bathrooms || 0}</span>Bath
// //                         </li>
// //                         <li className="text-1 flex">
// //                           <span>{project.carpet_area || project.size_sqft || "-"}</span>
// //                           Sqft
// //                         </li>
// //                       </ul>

// //                       <div
// //                         className="bot developer-project-bottom"
// //                         style={{
// //                           display: "flex",
// //                           justifyContent: "space-between",
// //                           alignItems: "center",
// //                           gap: 14,
// //                           borderTop: "1px solid #eee",
// //                           paddingTop: 16,
// //                           marginTop: 14,
// //                         }}
// //                       >
// //                         <ProtectedPropertyLink
// //                           href={detailHref}
// //                           className="tf-btn style-border pd-4 developer-project-details-btn"
// //                           onAllowedClick={() => handleViewed(project.id)}
// //                         >
// //                           Details
// //                         </ProtectedPropertyLink>

// //                         <button
// //                           type="button"
// //                           className="tf-btn pd-4 developer-project-book-btn"
// //                           onClick={() => openBookingModal(project)}
// //                           style={{
// //                             background: "#f28c52",
// //                             color: "#fff",
// //                             border: "1px solid #f28c52",
// //                           }}
// //                         >
// //                           Book Visit
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}

// //             {filteredProjects.length === 0 && (
// //               <div className="col-12">
// //                 <p className="developer-empty-text">No properties found for the selected filters.</p>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {bookingOpen && selectedProperty && (
// //           <div
// //             className="modal fade show"
// //             style={{
// //               display: "block",
// //               background: "rgba(0,0,0,0.5)",
// //               zIndex: 9999,
// //             }}
// //           >
// //             <div className="modal-dialog modal-dialog-centered">
// //               <div className="modal-content" style={{ borderRadius: "20px", overflow: "hidden" }}>
// //                 <div className="modal-header">
// //                   <h5 className="modal-title">Book a Visit - {selectedProperty.title}</h5>
// //                   <button type="button" className="btn-close" onClick={closeBookingModal} />
// //                 </div>

// //                 <form onSubmit={submitBooking}>
// //                   <div className="modal-body">
// //                     <div className="mb-3">
// //                       <label className="form-label">Name</label>
// //                       <input
// //                         type="text"
// //                         name="name"
// //                         className="form-control"
// //                         value={bookingForm.name}
// //                         onChange={handleBookingChange}
// //                         required
// //                       />
// //                     </div>

// //                     <div className="mb-3">
// //                       <label className="form-label">Phone</label>
// //                       <input
// //                         type="text"
// //                         name="phone"
// //                         className="form-control"
// //                         value={bookingForm.phone}
// //                         onChange={handleBookingChange}
// //                         required
// //                       />
// //                     </div>

// //                     <div className="mb-3">
// //                       <label className="form-label">Visit Date</label>
// //                       <input
// //                         type="date"
// //                         name="visit_date"
// //                         className="form-control"
// //                         value={bookingForm.visit_date}
// //                         onChange={handleBookingChange}
// //                         required
// //                       />
// //                     </div>

// //                     <div className="mb-3">
// //                       <label className="form-label">Visit Time</label>
// //                       <input
// //                         type="time"
// //                         name="visit_time"
// //                         className="form-control"
// //                         value={bookingForm.visit_time}
// //                         onChange={handleBookingChange}
// //                         required
// //                       />
// //                     </div>

// //                     <div className="mb-3">
// //                       <label className="form-label">Message</label>
// //                       <textarea
// //                         name="message"
// //                         className="form-control"
// //                         rows={3}
// //                         value={bookingForm.message}
// //                         onChange={handleBookingChange}
// //                       />
// //                     </div>

// //                     {message ? (
// //                       <div style={{ color: "#ff6b35", fontSize: "14px", marginTop: "8px" }}>
// //                         {message}
// //                       </div>
// //                     ) : null}
// //                   </div>

// //                   <div
// //                     className="modal-footer"
// //                     style={{
// //                       display: "flex",
// //                       justifyContent: "flex-end",
// //                       gap: "12px",
// //                       padding: "16px 20px 20px",
// //                     }}
// //                   >
// //                     <button
// //                       type="button"
// //                       className="tf-btn style-border pd-4"
// //                       onClick={closeBookingModal}
// //                       style={{
// //                         minWidth: "130px",
// //                         border: "1px solid #d9d9d9",
// //                         background: "#fff",
// //                         color: "#222",
// //                       }}
// //                     >
// //                       Cancel
// //                     </button>

// //                     <button
// //                       type="submit"
// //                       className="tf-btn pd-4"
// //                       disabled={bookingLoading}
// //                       style={{
// //                         minWidth: "170px",
// //                         background: "#f28c52",
// //                         color: "#fff",
// //                         border: "1px solid #f28c52",
// //                         opacity: bookingLoading ? 0.7 : 1,
// //                       }}
// //                     >
// //                       {bookingLoading ? "Booking..." : "Confirm Visit"}
// //                     </button>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </section>
// //     </>
// //   );
// // }



// "use client";

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { apiGet, apiPost } from "../lib/api";
// import { getPropertyDetailHref } from "../../utlis/propertyUrl";
// import ProtectedPropertyLink, {
//   requirePropertyLogin,
// } from "@/components/common/ProtectedPropertyLink";

// function toNumber(value) {
//   const num = Number(value);
//   return Number.isFinite(num) ? num : 0;
// }

// function normalizeText(value) {
//   return String(value || "").trim().toLowerCase();
// }

// function formatPrice(price) {
//   const num = Number(price || 0);

//   if (!num) return "Price on request";

//   if (num >= 10000000) {
//     return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
//   }

//   if (num >= 100000) {
//     return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
//   }

//   return `₹${num.toLocaleString("en-IN")}`;
// }

// function getStoredUser() {
//   if (typeof window === "undefined") return null;

//   try {
//     return JSON.parse(localStorage.getItem("userData") || "null");
//   } catch {
//     return null;
//   }
// }

// function getImage(project) {
//   return (
//     project?.image ||
//     project?.imageSrc ||
//     project?.featured_image ||
//     project?.cover_image ||
//     project?.thumbnail ||
//     "/images/home/house-db-1.jpg"
//   );
// }

// function getLocation(project) {
//   return (
//     project?.short_location ||
//     project?.location ||
//     project?.full_address ||
//     "Location on request"
//   );
// }

// function getConfiguration(project) {
//   if (project?.configuration) return project.configuration;
//   if (project?.configuration_text) return project.configuration_text;
//   if (project?.bedrooms) return `${project.bedrooms} BHK`;
//   if (project?.property_type) return project.property_type;

//   return "Configuration on request";
// }

// function getPhone(project) {
//   return (
//     project?.seller_phone ||
//     project?.phone ||
//     project?.contact_phone ||
//     project?.contact_number ||
//     project?.contact_seller_phone ||
//     project?.contact_seller?.phone ||
//     project?.contact_seller?.office_number ||
//     ""
//   );
// }

// function getProjectTitle(project) {
//   return (
//     project?.title ||
//     project?.project_name ||
//     project?.property_name ||
//     project?.project_title ||
//     project?.property_title ||
//     project?.name ||
//     ""
//   );
// }

// function getProjectSearchText(project) {
//   return normalizeText(
//     [
//       getProjectTitle(project),
//       project?.city,
//       project?.city_slug,
//       project?.short_location,
//       project?.location,
//       project?.neighborhood,
//       project?.full_address,
//       project?.address,
//       project?.developer_name,
//       project?.developer_slug,
//       project?.property_type,
//       project?.property_status,
//       project?.property_label,
//       project?.configuration,
//       project?.configuration_text,
//       project?.bhk,
//       project?.unit_type,
//       project?.slug,
//       project?.project_slug,
//       project?.property_slug,
//     ].join(" ")
//   );
// }

// const actionBtnStyle = {
//   width: "56px",
//   height: "56px",
//   minWidth: "56px",
//   borderRadius: "50%",
//   border: "none",
//   background: "rgba(35, 35, 35, 0.60)",
//   backdropFilter: "blur(6px)",
//   WebkitBackdropFilter: "blur(6px)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
//   boxShadow: "0 8px 24px rgba(0,0,0,0.20)",
//   padding: 0,
// };

// function BookmarkIcon({ active = false }) {
//   return (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M7 4.75H17C17.69 4.75 18.25 5.31 18.25 6V20L12 16.2L5.75 20V6C5.75 5.31 6.31 4.75 7 4.75Z"
//         stroke={active ? "#ff8c5a" : "#ffffff"}
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function HeartIcon({ active = false }) {
//   return (
//     <svg
//       width="22"
//       height="22"
//       viewBox="0 0 24 24"
//       fill={active ? "#ff8c5a" : "none"}
//     >
//       <path
//         d="M12 20.5C12 20.5 4.5 16 4.5 9.75C4.5 7.4 6.4 5.5 8.75 5.5C10.2 5.5 11.48 6.22 12 7.32C12.52 6.22 13.8 5.5 15.25 5.5C17.6 5.5 19.5 7.4 19.5 9.75C19.5 16 12 20.5 12 20.5Z"
//         stroke={active ? "#ff8c5a" : "#ffffff"}
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function PhoneIcon() {
//   return (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//       <path
//         d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C11.61 20.92 4 13.31 4 3.92C4 3.37 4.45 2.92 5 2.92H8C8.55 2.92 9 3.37 9 3.92V6.88C9 7.32 8.71 7.71 8.29 7.84L6.77 8.35C7.55 10.6 9.32 12.37 11.57 13.15L12.08 11.63C12.21 11.21 12.6 10.92 13.04 10.92H16C16.55 10.92 17 11.37 17 11.92V14.92C17 15.47 16.55 15.92 16 15.92H13.5"
//         stroke="#ffffff"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// export default function DeveloperProjectsPage({ developerSlug }) {
//   const suggestionRef = useRef(null);

//   const [projects, setProjects] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [activeKeyword, setActiveKeyword] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [bookingOpen, setBookingOpen] = useState(false);
//   const [bookingLoading, setBookingLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const [bookingForm, setBookingForm] = useState({
//     name: "",
//     phone: "",
//     visit_date: "",
//     visit_time: "",
//     message: "",
//   });

//   const user = getStoredUser();

//   const loadProjects = async () => {
//     try {
//       const res = await apiGet(
//         `/admindashboard/developers/${developerSlug}/properties/`
//       );

//       const baseList = Array.isArray(res) ? res : [];

//       let favoriteIds = [];
//       let likedIds = [];

//       if (user?.id) {
//         try {
//           const [favRes, likedRes] = await Promise.all([
//             apiGet(`/admindashboard/customer/${user.id}/favorite-properties/`),
//             apiGet(`/admindashboard/customer/${user.id}/liked-videos/`),
//           ]);

//           const favList = Array.isArray(favRes)
//             ? favRes
//             : Array.isArray(favRes?.data)
//             ? favRes.data
//             : [];

//           const likedList = Array.isArray(likedRes)
//             ? likedRes
//             : Array.isArray(likedRes?.data)
//             ? likedRes.data
//             : [];

//           favoriteIds = favList.map((item) => item.id);
//           likedIds = likedList.map((item) => item.id);
//         } catch (error) {
//           console.error("Favorite/liked fetch error:", error);
//         }
//       }

//       const merged = baseList.map((project) => ({
//         ...project,
//         imageSrc: getImage(project),
//         seller_phone: getPhone(project),
//         configuration_text: getConfiguration(project),
//         is_favorite: favoriteIds.includes(project.id),
//         is_liked: likedIds.includes(project.id),
//       }));

//       setProjects(merged);
//     } catch (error) {
//       console.error("Developer projects fetch error:", error);
//       setProjects([]);
//     }
//   };

//   useEffect(() => {
//     loadProjects();
//   }, [developerSlug]);

//   const closeSuggestions = () => {
//     setShowSuggestions(false);
//     setActiveSuggestionIndex(-1);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         suggestionRef.current &&
//         !suggestionRef.current.contains(event.target)
//       ) {
//         closeSuggestions();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const searchSuggestions = useMemo(() => {
//     const keyword = normalizeText(searchText);

//     if (!keyword) return [];

//     const map = new Map();

//     projects.forEach((project) => {
//       const searchableText = getProjectSearchText(project);

//       if (!searchableText.includes(keyword)) return;

//       const title = getProjectTitle(project);
//       const location = getLocation(project);
//       const city = project?.city || "";
//       const configuration = getConfiguration(project);

//       const subLabel = [location, city, configuration]
//         .filter(Boolean)
//         .filter((value, index, self) => self.indexOf(value) === index)
//         .join(" • ");

//       const key = `project-${project.id || title}-${subLabel}`;

//       if (!map.has(key)) {
//         map.set(key, {
//           label: title || "Project",
//           subLabel: subLabel || "Project",
//           value: title || "",
//           project,
//         });
//       }
//     });

//     return Array.from(map.values()).slice(0, 12);
//   }, [searchText, projects]);

//   const handleSuggestionSelect = (suggestion) => {
//     const value = suggestion.value || "";

//     setSearchText(value);
//     setActiveKeyword(value);
//     closeSuggestions();
//   };

//   const handleSearch = (e) => {
//     if (e) e.preventDefault();

//     setActiveKeyword(searchText.trim());
//     closeSuggestions();
//   };

//   const handleSearchKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();

//       if (
//         showSuggestions &&
//         activeSuggestionIndex >= 0 &&
//         searchSuggestions[activeSuggestionIndex]
//       ) {
//         handleSuggestionSelect(searchSuggestions[activeSuggestionIndex]);
//         return;
//       }

//       handleSearch(e);
//       return;
//     }

//     if (!showSuggestions || searchSuggestions.length === 0) return;

//     if (e.key === "ArrowDown") {
//       e.preventDefault();

//       setActiveSuggestionIndex((prev) =>
//         prev < searchSuggestions.length - 1 ? prev + 1 : 0
//       );
//     }

//     if (e.key === "ArrowUp") {
//       e.preventDefault();

//       setActiveSuggestionIndex((prev) =>
//         prev > 0 ? prev - 1 : searchSuggestions.length - 1
//       );
//     }

//     if (e.key === "Escape") {
//       closeSuggestions();
//     }
//   };

//   const handleFavorite = async (id) => {
//     if (!user?.id) {
//       requirePropertyLogin(window.location.pathname || "/");
//       return;
//     }

//     try {
//       const res = await apiPost(`/admindashboard/customer/toggle-favorite/`, {
//         user_id: user.id,
//         property_id: id,
//       });

//       setProjects((prev) =>
//         prev.map((item) =>
//           item.id === id
//             ? {
//                 ...item,
//                 is_favorite:
//                   typeof res?.is_favorite === "boolean"
//                     ? res.is_favorite
//                     : !item.is_favorite,
//               }
//             : item
//         )
//       );
//     } catch (error) {
//       console.error(error);
//       alert(error.message || "Favorite update failed");
//     }
//   };

//   const handleLiked = async (id) => {
//     if (!user?.id) {
//       requirePropertyLogin(window.location.pathname || "/");
//       return;
//     }

//     try {
//       const res = await apiPost(`/admindashboard/customer/like-video/`, {
//         user_id: user.id,
//         property_id: id,
//       });

//       setProjects((prev) =>
//         prev.map((item) =>
//           item.id === id
//             ? {
//                 ...item,
//                 is_liked:
//                   typeof res?.liked === "boolean" ? res.liked : !item.is_liked,
//               }
//             : item
//         )
//       );
//     } catch (error) {
//       console.error(error);
//       alert(error.message || "Liked update failed");
//     }
//   };

//   const handleViewed = async (propertyId) => {
//     if (!user?.id) return;

//     try {
//       await apiPost(`/admindashboard/customer/add-view/`, {
//         user_id: user.id,
//         property_id: propertyId,
//       });
//     } catch (error) {
//       console.error("View tracking failed:", error);
//     }
//   };

//   const openBookingModal = (project) => {
//     const detailHref = getPropertyDetailHref(project);

//     if (!user?.id) {
//       requirePropertyLogin(detailHref);
//       return;
//     }

//     setSelectedProperty(project);
//     setBookingForm({
//       name: user?.full_name || user?.username || user?.name || "",
//       phone: user?.phone || "",
//       visit_date: "",
//       visit_time: "",
//       message: `Interested in site visit for ${
//         project?.title || "this property"
//       }`,
//     });
//     setMessage("");
//     setBookingOpen(true);
//   };

//   const closeBookingModal = () => {
//     setBookingOpen(false);
//     setSelectedProperty(null);
//     setMessage("");
//   };

//   const handleBookingChange = (e) => {
//     const { name, value } = e.target;

//     setBookingForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const submitBooking = async (e) => {
//     e.preventDefault();

//     if (!user?.id || !selectedProperty?.id) return;

//     try {
//       setBookingLoading(true);
//       setMessage("");

//       await apiPost(`/admindashboard/customer/book-visit/`, {
//         user: user.id,
//         property: selectedProperty.id,
//         name: bookingForm.name,
//         phone: bookingForm.phone,
//         visit_date: bookingForm.visit_date,
//         visit_time: bookingForm.visit_time,
//         message: bookingForm.message,
//         status: "upcoming",
//       });

//       setMessage("Visit booked successfully.");

//       setTimeout(() => {
//         closeBookingModal();
//       }, 1000);
//     } catch (error) {
//       console.error(error);
//       setMessage(error.message || "Failed to book visit.");
//     } finally {
//       setBookingLoading(false);
//     }
//   };

//   const filteredProjects = useMemo(() => {
//     const keyword = normalizeText(activeKeyword);

//     let data = [...projects];

//     if (keyword) {
//       data = data.filter((project) =>
//         getProjectSearchText(project).includes(keyword)
//       );
//     }

//     data.sort(
//       (a, b) =>
//         new Date(b.posting_date || 0).getTime() -
//         new Date(a.posting_date || 0).getTime()
//     );

//     return data;
//   }, [projects, activeKeyword]);

//   const developerName =
//     projects[0]?.developer_name || developerSlug.replaceAll("-", " ");

//   return (
//     <>
//       <style jsx global>{`
//         .developer-project-card {
//           background: #ffffff !important;
//           color: #111827 !important;
//           border: 1px solid rgba(0, 0, 0, 0.06);
//           transition: background 0.25s ease, color 0.25s ease,
//             border-color 0.25s ease;
//         }

//         .developer-project-card-content {
//           background: #ffffff !important;
//           color: #111827 !important;
//         }

//         .developer-project-title-link {
//           color: #111827 !important;
//           opacity: 1 !important;
//           text-decoration: none !important;
//         }

//         .developer-project-title-link:hover {
//           color: #f28c52 !important;
//         }

//         .developer-project-location,
//         .developer-project-location i,
//         .developer-project-city,
//         .developer-project-city-link {
//           color: #5f6368 !important;
//           opacity: 1 !important;
//         }

//         .developer-project-config {
//           background: #f4efec !important;
//           color: #222222 !important;
//         }

//         .developer-project-price {
//           color: #f28c52 !important;
//           opacity: 1 !important;
//         }

//         .developer-project-details-btn {
//           color: #ff6a00 !important;
//           border-color: #ff6a00 !important;
//           background: transparent !important;
//         }

//         .developer-project-details-btn:hover {
//           background: #ff6a00 !important;
//           color: #ffffff !important;
//         }

//         .developer-project-book-btn {
//           background: #f28c52 !important;
//           color: #ffffff !important;
//           border-color: #f28c52 !important;
//         }

//         .developer-project-book-btn:hover {
//           background: #ff6a00 !important;
//           border-color: #ff6a00 !important;
//           color: #ffffff !important;
//         }

//         .developer-search-box-wrap {
//           width: 100%;
//           margin-bottom: 34px;
//           position: relative;
//           z-index: 50;
//           display: flex;
//           justify-content: center;
//           overflow: visible !important;
//         }

//         .developer-search-form {
//           width: 100%;
//           max-width: 1180px;
//           position: relative;
//           z-index: 999;
//           overflow: visible !important;
//         }

//         .developer-search-fieldset {
//           position: relative;
//           width: 100%;
//           margin: 0;
//           padding: 8px;
//           border: 0;
//           border-radius: 26px;
//           background: rgba(11, 19, 32, 0.22);
//           backdrop-filter: blur(5px);
//           -webkit-backdrop-filter: blur(5px);
//           box-sizing: border-box;
//           overflow: visible !important;
//           z-index: 999;
//         }

//         .developer-search-fieldset input {
//           width: 100%;
//           min-height: 78px;
//           border-radius: 18px;
//           border: 1px solid rgba(17, 24, 39, 0.05);
//           background: rgba(255, 255, 255, 0.98);
//           color: #111827;
//           padding: 0 26px;
//           outline: none;
//           box-shadow: none;
//           font-size: 18px;
//           font-weight: 500;
//           box-sizing: border-box;
//         }

//         .developer-search-fieldset input:focus {
//           border-color: rgba(241, 145, 61, 0.35);
//           box-shadow: 0 0 0 4px rgba(241, 145, 61, 0.12);
//         }

//         .developer-search-fieldset input::placeholder {
//           color: #6b7280;
//         }

//         .developer-search-suggestions {
//           position: absolute;
//           top: calc(100% + 10px);
//           left: 8px;
//           right: 8px;
//           z-index: 2147483647 !important;
//           background: #ffffff;
//           border: 1px solid #e5e7eb;
//           border-radius: 16px;
//           box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
//           overflow-y: auto;
//           overflow-x: hidden;
//           max-height: 430px;
//           text-align: left;
//         }

//         .developer-suggestion-item {
//           width: 100%;
//           display: block;
//           text-align: left;
//           padding: 14px 20px;
//           border: 0;
//           border-bottom: 1px solid #f1f1f1;
//           background: #ffffff;
//           cursor: pointer;
//         }

//         .developer-suggestion-item:last-child {
//           border-bottom: 0;
//         }

//         .developer-suggestion-item:hover,
//         .developer-suggestion-item.active {
//           background: #f8fafc;
//         }

//         .developer-suggestion-label {
//           display: block;
//           font-size: 16px;
//           font-weight: 700;
//           color: #111827;
//           line-height: 1.3;
//         }

//         .developer-suggestion-sub {
//           display: block;
//           font-size: 14px;
//           font-weight: 400;
//           color: #6b7280;
//           margin-top: 4px;
//           line-height: 1.3;
//         }

//         .developer-no-suggestion {
//           padding: 16px 20px;
//           font-size: 14px;
//           color: #6b7280;
//           background: #ffffff;
//           text-align: left;
//         }

//         .developer-empty-text {
//           color: #6b7280;
//           font-size: 16px;
//           line-height: 1.6;
//           margin: 0;
//           text-align: center;
//           padding: 32px 16px;
//           background: #ffffff;
//           border-radius: 18px;
//           border: 1px solid #eeeeee;
//         }

//         @media (max-width: 991px) {
//           .developer-projects-page {
//             padding-top: 38px !important;
//           }

//           .developer-page-heading {
//             font-size: 28px !important;
//             line-height: 1.25 !important;
//             margin-bottom: 8px !important;
//           }

//           .developer-page-subtitle {
//             font-size: 14px !important;
//             line-height: 1.55 !important;
//             margin-bottom: 0 !important;
//           }

//           .developer-search-box-wrap {
//             margin-bottom: 26px;
//             justify-content: center;
//           }

//           .developer-search-form {
//             max-width: 430px;
//           }

//           .developer-search-fieldset {
//             padding: 7px;
//             border-radius: 18px;
//           }

//           .developer-search-fieldset input {
//             min-height: 54px;
//             border-radius: 14px;
//             font-size: 14px;
//             padding: 0 15px;
//           }

//           .developer-search-suggestions {
//             left: 7px;
//             right: 7px;
//             max-height: 320px;
//             border-radius: 14px;
//           }

//           .developer-suggestion-item {
//             padding: 12px 14px;
//           }

//           .developer-suggestion-label {
//             font-size: 14px;
//           }

//           .developer-suggestion-sub {
//             font-size: 12px;
//           }
//         }

//         @media (max-width: 767px) {
//           .developer-projects-page {
//             padding-top: 30px !important;
//           }

//           .developer-page-heading {
//             font-size: 24px !important;
//             line-height: 1.25 !important;
//             text-align: left !important;
//           }

//           .developer-page-subtitle {
//             font-size: 13px !important;
//             line-height: 1.55 !important;
//             text-align: left !important;
//           }

//           .developer-search-box-wrap {
//             margin-bottom: 22px;
//             padding: 0;
//           }

//           .developer-search-form {
//             max-width: 340px;
//           }

//           .developer-search-fieldset input {
//             min-height: 50px;
//             font-size: 13px;
//             padding: 0 14px;
//           }

//           .developer-search-suggestions {
//             max-height: 300px;
//           }

//           .developer-page-count {
//             font-size: 13px !important;
//             margin-bottom: 0 !important;
//           }

//           .developer-project-card {
//             border-radius: 18px !important;
//           }

//           .developer-project-card .image-wrap img {
//             height: 230px !important;
//           }

//           .developer-project-title {
//             font-size: 18px !important;
//             line-height: 1.35 !important;
//           }

//           .developer-project-config {
//             font-size: 13px !important;
//             padding: 9px 12px !important;
//           }

//           .developer-project-bottom {
//             display: grid !important;
//             grid-template-columns: 1fr 1.2fr !important;
//             gap: 10px !important;
//           }

//           .developer-project-details-btn,
//           .developer-project-book-btn {
//             width: 100% !important;
//             min-height: 42px !important;
//             padding: 0 10px !important;
//             border-radius: 11px !important;
//             font-size: 13px !important;
//           }
//         }

//         @media (max-width: 420px) {
//           .developer-project-card .image-wrap img {
//             height: 210px !important;
//           }

//           .developer-project-bottom {
//             grid-template-columns: 1fr !important;
//           }
//         }

//         @media (max-width: 380px) {
//           .developer-search-form {
//             max-width: 330px;
//           }
//         }
//       `}</style>

//       <section className="section-property-layout style-1 developer-projects-page">
//         <div className="tf-container">
//           <div style={{ marginBottom: 24 }}>
//             <h2 className="title developer-page-heading">
//               Projects by {developerName}
//             </h2>

//             <p className="text-1 developer-page-subtitle">
//               Showing all projects by {developerName} across all cities and
//               locations
//             </p>
//           </div>

//           <div className="developer-search-box-wrap">
//             <form
//               onSubmit={handleSearch}
//               className="developer-search-form"
//               ref={suggestionRef}
//             >
//               <fieldset className="developer-search-fieldset">
//                 <input
//                   type="text"
//                   placeholder={`Search ${developerName} projects, location, city...`}
//                   value={searchText}
//                   autoComplete="off"
//                   onChange={(e) => {
//                     setSearchText(e.target.value);
//                     setShowSuggestions(true);
//                     setActiveSuggestionIndex(-1);
//                   }}
//                   onFocus={() => {
//                     if (searchText) setShowSuggestions(true);
//                   }}
//                   onKeyDown={handleSearchKeyDown}
//                 />

//                 {showSuggestions && searchText && (
//                   <div className="developer-search-suggestions">
//                     {searchSuggestions.length > 0 ? (
//                       searchSuggestions.map((suggestion, index) => (
//                         <button
//                           type="button"
//                           key={`${suggestion.value}-${index}`}
//                           className={`developer-suggestion-item ${
//                             activeSuggestionIndex === index ? "active" : ""
//                           }`}
//                           onMouseDown={(e) => {
//                             e.preventDefault();
//                             handleSuggestionSelect(suggestion);
//                           }}
//                           onMouseEnter={() => setActiveSuggestionIndex(index)}
//                         >
//                           <span className="developer-suggestion-label">
//                             {suggestion.label}
//                           </span>

//                           {suggestion.subLabel && (
//                             <span className="developer-suggestion-sub">
//                               {suggestion.subLabel}
//                             </span>
//                           )}
//                         </button>
//                       ))
//                     ) : (
//                       <div className="developer-no-suggestion">
//                         No project found for this developer
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </fieldset>
//             </form>
//           </div>

//           <div style={{ marginBottom: 20 }}>
//             <p className="text-1 developer-page-count">
//               Showing {filteredProjects.length} project
//               {filteredProjects.length === 1 ? "" : "s"}
//             </p>
//           </div>

//           <div className="row">
//             {filteredProjects.map((project) => {
//               const sellerPhone = getPhone(project);
//               const detailHref = getPropertyDetailHref(project);

//               return (
//                 <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
//                   <div
//                     className="box-house developer-project-card"
//                     style={{
//                       borderRadius: "22px",
//                       overflow: "hidden",
//                       background: "#fff",
//                       boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
//                     }}
//                   >
//                     <div className="image-wrap" style={{ position: "relative" }}>
//                       <ProtectedPropertyLink
//                         href={detailHref}
//                         onAllowedClick={() => handleViewed(project.id)}
//                       >
//                         <Image
//                           alt={project.title || "Property"}
//                           src={project.imageSrc || "/images/home/house-db-1.jpg"}
//                           width={615}
//                           height={405}
//                           style={{
//                             width: "100%",
//                             height: "280px",
//                             objectFit: "cover",
//                           }}
//                         />
//                       </ProtectedPropertyLink>

//                       <ul
//                         className="box-tag flex gap-8"
//                         style={{
//                           position: "absolute",
//                           top: 14,
//                           left: 14,
//                           zIndex: 2,
//                         }}
//                       >
//                         {project.property_label ? (
//                           <li className="flat-tag text-4 bg-main fw-6 text_white">
//                             {project.property_label}
//                           </li>
//                         ) : null}

//                         <li className="flat-tag text-4 bg-3 fw-6 text_white">
//                           {project.property_status === "for-rent"
//                             ? "For Rent"
//                             : "For Sale"}
//                         </li>
//                       </ul>

//                       <div
//                         style={{
//                           position: "absolute",
//                           right: 16,
//                           top: 16,
//                           display: "flex",
//                           gap: 12,
//                           zIndex: 5,
//                         }}
//                       >
//                         <button
//                           type="button"
//                           style={actionBtnStyle}
//                           onClick={() => handleFavorite(project.id)}
//                           title="Favorite"
//                         >
//                           <BookmarkIcon active={project.is_favorite} />
//                         </button>

//                         <button
//                           type="button"
//                           style={actionBtnStyle}
//                           onClick={() => handleLiked(project.id)}
//                           title="Like"
//                         >
//                           <HeartIcon active={project.is_liked} />
//                         </button>

//                         {sellerPhone ? (
//                           <a
//                             href={`tel:${sellerPhone}`}
//                             style={actionBtnStyle}
//                             title="Call"
//                           >
//                             <PhoneIcon />
//                           </a>
//                         ) : null}
//                       </div>
//                     </div>

//                     <div
//                       className="content developer-project-card-content"
//                       style={{
//                         background: "#fff",
//                         padding: "20px",
//                         position: "relative",
//                         zIndex: 2,
//                       }}
//                     >
//                       <h5
//                         className="title developer-project-title"
//                         style={{ marginBottom: 8 }}
//                       >
//                         <ProtectedPropertyLink
//                           href={detailHref}
//                           onAllowedClick={() => handleViewed(project.id)}
//                           className="developer-project-title-link"
//                           style={{ color: "#1f1f1f", opacity: 1 }}
//                         >
//                           {project.title}
//                         </ProtectedPropertyLink>
//                       </h5>

//                       <p
//                         className="location text-1 flex items-center gap-6 developer-project-location"
//                         style={{
//                           color: "#5f6368",
//                           opacity: 1,
//                           marginBottom: 8,
//                         }}
//                       >
//                         <i className="icon-location" />
//                         {getLocation(project)}
//                       </p>

//                       <p
//                         className="text-1 developer-project-city"
//                         style={{ marginTop: 6, color: "#666", opacity: 1 }}
//                       >
//                         <Link
//                           href={`/cities/${project.city_slug}`}
//                           className="developer-project-city-link"
//                           style={{ color: "#666", opacity: 1 }}
//                         >
//                           {project.city}
//                         </Link>
//                       </p>

//                       <div
//                         className="developer-project-config"
//                         style={{
//                           background: "#f4efec",
//                           borderRadius: "12px",
//                           padding: "10px 14px",
//                           marginTop: 10,
//                           marginBottom: "12px",
//                           fontSize: "14px",
//                           color: "#222",
//                         }}
//                       >
//                         <strong>Configuration:</strong>{" "}
//                         {project.configuration_text}
//                       </div>

//                       <div
//                         className="price text-3 fw-6 developer-project-price"
//                         style={{ marginTop: 8, color: "#f28c52", opacity: 1 }}
//                       >
//                         {formatPrice(project.price)}
//                       </div>

//                       <ul
//                         className="meta-list flex developer-project-meta"
//                         style={{ marginTop: 8, color: "#222", opacity: 1 }}
//                       >
//                         <li className="text-1 flex">
//                           <span>{project.bedrooms || 0}</span>BHK
//                         </li>

//                         <li className="text-1 flex">
//                           <span>{project.bathrooms || 0}</span>Bath
//                         </li>

//                         <li className="text-1 flex">
//                           <span>
//                             {project.carpet_area || project.size_sqft || "-"}
//                           </span>
//                           Sqft
//                         </li>
//                       </ul>

//                       <div
//                         className="bot developer-project-bottom"
//                         style={{
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                           gap: 14,
//                           borderTop: "1px solid #eee",
//                           paddingTop: 16,
//                           marginTop: 14,
//                         }}
//                       >
//                         <ProtectedPropertyLink
//                           href={detailHref}
//                           className="tf-btn style-border pd-4 developer-project-details-btn"
//                           onAllowedClick={() => handleViewed(project.id)}
//                         >
//                           Details
//                         </ProtectedPropertyLink>

//                         <button
//                           type="button"
//                           className="tf-btn pd-4 developer-project-book-btn"
//                           onClick={() => openBookingModal(project)}
//                           style={{
//                             background: "#f28c52",
//                             color: "#fff",
//                             border: "1px solid #f28c52",
//                           }}
//                         >
//                           Book Visit
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

//             {filteredProjects.length === 0 && (
//               <div className="col-12">
//                 <p className="developer-empty-text">
//                   No properties found for this developer search.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {bookingOpen && selectedProperty && (
//           <div
//             className="modal fade show"
//             style={{
//               display: "block",
//               background: "rgba(0,0,0,0.5)",
//               zIndex: 9999,
//             }}
//           >
//             <div className="modal-dialog modal-dialog-centered">
//               <div
//                 className="modal-content"
//                 style={{ borderRadius: "20px", overflow: "hidden" }}
//               >
//                 <div className="modal-header">
//                   <h5 className="modal-title">
//                     Book a Visit - {selectedProperty.title}
//                   </h5>

//                   <button
//                     type="button"
//                     className="btn-close"
//                     onClick={closeBookingModal}
//                   />
//                 </div>

//                 <form onSubmit={submitBooking}>
//                   <div className="modal-body">
//                     <div className="mb-3">
//                       <label className="form-label">Name</label>

//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         value={bookingForm.name}
//                         onChange={handleBookingChange}
//                         required
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <label className="form-label">Phone</label>

//                       <input
//                         type="text"
//                         name="phone"
//                         className="form-control"
//                         value={bookingForm.phone}
//                         onChange={handleBookingChange}
//                         required
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <label className="form-label">Visit Date</label>

//                       <input
//                         type="date"
//                         name="visit_date"
//                         className="form-control"
//                         value={bookingForm.visit_date}
//                         onChange={handleBookingChange}
//                         required
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <label className="form-label">Visit Time</label>

//                       <input
//                         type="time"
//                         name="visit_time"
//                         className="form-control"
//                         value={bookingForm.visit_time}
//                         onChange={handleBookingChange}
//                         required
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <label className="form-label">Message</label>

//                       <textarea
//                         name="message"
//                         className="form-control"
//                         rows={3}
//                         value={bookingForm.message}
//                         onChange={handleBookingChange}
//                       />
//                     </div>

//                     {message ? (
//                       <div
//                         style={{
//                           color: "#ff6b35",
//                           fontSize: "14px",
//                           marginTop: "8px",
//                         }}
//                       >
//                         {message}
//                       </div>
//                     ) : null}
//                   </div>

//                   <div
//                     className="modal-footer"
//                     style={{
//                       display: "flex",
//                       justifyContent: "flex-end",
//                       gap: "12px",
//                       padding: "16px 20px 20px",
//                     }}
//                   >
//                     <button
//                       type="button"
//                       className="tf-btn style-border pd-4"
//                       onClick={closeBookingModal}
//                       style={{
//                         minWidth: "130px",
//                         border: "1px solid #d9d9d9",
//                         background: "#fff",
//                         color: "#222",
//                       }}
//                     >
//                       Cancel
//                     </button>

//                     <button
//                       type="submit"
//                       className="tf-btn pd-4"
//                       disabled={bookingLoading}
//                       style={{
//                         minWidth: "170px",
//                         background: "#f28c52",
//                         color: "#fff",
//                         border: "1px solid #f28c52",
//                         opacity: bookingLoading ? 0.7 : 1,
//                       }}
//                     >
//                       {bookingLoading ? "Booking..." : "Confirm Visit"}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   );
// }




"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { apiGet, apiPost } from "../lib/api";
import { getPropertyDetailHref } from "../../utlis/propertyUrl";
import ProtectedPropertyLink, {
  requirePropertyLogin,
} from "@/components/common/ProtectedPropertyLink";

function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function formatPrice(price) {
  const num = Number(price || 0);

  if (!num) return "Price on request";

  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  }

  if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
  }

  return `₹${num.toLocaleString("en-IN")}`;
}

function getStoredUser() {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

const BRAND_BLUE = "#1E4D74";
const BRAND_DARK_BLUE = "#173C5B";
const BRAND_YELLOW = "#EEC629";

function getImage(project) {
  return (
    project?.image ||
    project?.imageSrc ||
    project?.featured_image ||
    project?.cover_image ||
    project?.thumbnail ||
    "/images/home/house-db-1.jpg"
  );
}

function getImageUrl(value) {
  if (!value) return "";

  if (typeof value === "string") return value;

  return (
    value?.image_url ||
    value?.image ||
    value?.url ||
    value?.src ||
    value?.file ||
    value?.thumbnail ||
    value?.featured_image ||
    value?.cover_image ||
    ""
  );
}

function getProjectImages(project) {
  const images = [];
  const pushImage = (value) => {
    const url = getImageUrl(value);

    if (!url) return;

    const cleanUrl = String(url).trim();

    if (!cleanUrl) return;

    if (!images.includes(cleanUrl)) {
      images.push(cleanUrl);
    }
  };

  pushImage(project?.image);
  pushImage(project?.imageSrc);
  pushImage(project?.featured_image);
  pushImage(project?.cover_image);
  pushImage(project?.thumbnail);

  const imageCollections = [
    project?.images,
    project?.gallery,
    project?.property_images,
    project?.project_images,
    project?.photos,
    project?.media,
  ];

  imageCollections.forEach((collection) => {
    if (!Array.isArray(collection)) return;

    const primaryImages = collection.filter((item) => item?.is_primary);
    const normalImages = collection.filter((item) => !item?.is_primary);

    primaryImages.forEach(pushImage);
    normalImages.forEach(pushImage);
  });

  if (images.length === 0) {
    images.push("/images/home/house-db-1.jpg");
  }

  return images;
}

function getLocation(project) {
  return (
    project?.short_location ||
    project?.location ||
    project?.full_address ||
    "Location on request"
  );
}

function getConfiguration(project) {
  if (project?.configuration) return project.configuration;
  if (project?.configuration_text) return project.configuration_text;
  if (project?.bedrooms) return `${project.bedrooms} BHK`;
  if (project?.property_type) return project.property_type;

  return "Configuration on request";
}

function getPhone(project) {
  return (
    project?.seller_phone ||
    project?.phone ||
    project?.contact_phone ||
    project?.contact_number ||
    project?.contact_seller_phone ||
    project?.contact_seller?.phone ||
    project?.contact_seller?.office_number ||
    ""
  );
}

function getProjectTitle(project) {
  return (
    project?.title ||
    project?.project_name ||
    project?.property_name ||
    project?.project_title ||
    project?.property_title ||
    project?.name ||
    ""
  );
}

function getProjectSearchText(project) {
  return normalizeText(
    [
      getProjectTitle(project),
      project?.city,
      project?.city_slug,
      project?.short_location,
      project?.location,
      project?.neighborhood,
      project?.full_address,
      project?.address,
      project?.developer_name,
      project?.developer_slug,
      project?.property_type,
      project?.property_status,
      project?.property_label,
      project?.configuration,
      project?.configuration_text,
      project?.bhk,
      project?.unit_type,
      project?.slug,
      project?.project_slug,
      project?.property_slug,
    ].join(" ")
  );
}

const actionBtnStyle = {
  width: "56px",
  height: "56px",
  minWidth: "56px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(35, 35, 35, 0.60)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 8px 24px rgba(0,0,0,0.20)",
  padding: 0,
};

function BookmarkIcon({ active = false }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4.75H17C17.69 4.75 18.25 5.31 18.25 6V20L12 16.2L5.75 20V6C5.75 5.31 6.31 4.75 7 4.75Z"
        stroke={active ? BRAND_YELLOW : "#ffffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ active = false }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={active ? BRAND_YELLOW : "none"}
    >
      <path
        d="M12 20.5C12 20.5 4.5 16 4.5 9.75C4.5 7.4 6.4 5.5 8.75 5.5C10.2 5.5 11.48 6.22 12 7.32C12.52 6.22 13.8 5.5 15.25 5.5C17.6 5.5 19.5 7.4 19.5 9.75C19.5 16 12 20.5 12 20.5Z"
        stroke={active ? BRAND_YELLOW : "#ffffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C11.61 20.92 4 13.31 4 3.92C4 3.37 4.45 2.92 5 2.92H8C8.55 2.92 9 3.37 9 3.92V6.88C9 7.32 8.71 7.71 8.29 7.84L6.77 8.35C7.55 10.6 9.32 12.37 11.57 13.15L12.08 11.63C12.21 11.21 12.6 10.92 13.04 10.92H16C16.55 10.92 17 11.37 17 11.92V14.92C17 15.47 16.55 15.92 16 15.92H13.5"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function DeveloperProjectImageSlider({ project, detailHref, onViewed }) {
  const images = useMemo(() => getProjectImages(project), [project]);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef(null);
  const touchMoveXRef = useRef(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [project?.id, images.length]);

  const totalImages = images.length;
  const hasMultipleImages = totalImages > 1;

  const goToSlide = (index) => {
    if (!hasMultipleImages) return;

    setActiveIndex((index + totalImages) % totalImages);
  };

  const goPrev = (event) => {
    event.preventDefault();
    event.stopPropagation();
    goToSlide(activeIndex - 1);
  };

  const goNext = (event) => {
    event.preventDefault();
    event.stopPropagation();
    goToSlide(activeIndex + 1);
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches?.[0]?.clientX ?? null;
    touchMoveXRef.current = null;
  };

  const handleTouchMove = (event) => {
    touchMoveXRef.current = event.touches?.[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (!hasMultipleImages) return;

    const startX = touchStartXRef.current;
    const endX = touchMoveXRef.current;

    touchStartXRef.current = null;
    touchMoveXRef.current = null;

    if (startX === null || endX === null) return;

    const diff = startX - endX;

    if (Math.abs(diff) < 35) return;

    if (diff > 0) {
      goToSlide(activeIndex + 1);
    } else {
      goToSlide(activeIndex - 1);
    }
  };

  return (
    <div
      className="developer-project-image-slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ProtectedPropertyLink
        href={detailHref}
        onAllowedClick={() => onViewed(project.id)}
        className="developer-project-slider-link"
      >
        <div
          className="developer-project-slider-track"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              className="developer-project-slider-slide"
              key={`${project.id || "project"}-${image}-${index}`}
            >
              <Image
                alt={getProjectTitle(project) || "Property"}
                src={image}
                width={615}
                height={405}
                className="developer-project-slider-image"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </ProtectedPropertyLink>

      {hasMultipleImages && (
        <>
          <button
            type="button"
            className="developer-project-slider-arrow developer-project-slider-arrow-left"
            onClick={goPrev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            type="button"
            className="developer-project-slider-arrow developer-project-slider-arrow-right"
            onClick={goNext}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="developer-project-slider-dots">
            {images.map((image, index) => (
              <button
                type="button"
                key={`dot-${project.id || "project"}-${image}-${index}`}
                className={`developer-project-slider-dot ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  goToSlide(index);
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function DeveloperProjectsPage({ developerSlug }) {
  const suggestionRef = useRef(null);

  const [projects, setProjects] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [activeKeyword, setActiveKeyword] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    visit_date: "",
    visit_time: "",
    message: "",
  });

  const user = getStoredUser();

  const loadProjects = async () => {
    try {
      const res = await apiGet(
        `/admindashboard/developers/${developerSlug}/properties/`
      );

      const baseList = Array.isArray(res) ? res : [];

      let favoriteIds = [];
      let likedIds = [];

      if (user?.id) {
        try {
          const [favRes, likedRes] = await Promise.all([
            apiGet(`/admindashboard/customer/${user.id}/favorite-properties/`),
            apiGet(`/admindashboard/customer/${user.id}/liked-videos/`),
          ]);

          const favList = Array.isArray(favRes)
            ? favRes
            : Array.isArray(favRes?.data)
            ? favRes.data
            : [];

          const likedList = Array.isArray(likedRes)
            ? likedRes
            : Array.isArray(likedRes?.data)
            ? likedRes.data
            : [];

          favoriteIds = favList.map((item) => item.id);
          likedIds = likedList.map((item) => item.id);
        } catch (error) {
          console.error("Favorite/liked fetch error:", error);
        }
      }

      const merged = baseList.map((project) => ({
        ...project,
        imageSrc: getImage(project),
        seller_phone: getPhone(project),
        configuration_text: getConfiguration(project),
        is_favorite: favoriteIds.includes(project.id),
        is_liked: likedIds.includes(project.id),
      }));

      setProjects(merged);
    } catch (error) {
      console.error("Developer projects fetch error:", error);
      setProjects([]);
    }
  };

  useEffect(() => {
    loadProjects();
  }, [developerSlug]);

  const closeSuggestions = () => {
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        closeSuggestions();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchSuggestions = useMemo(() => {
    const keyword = normalizeText(searchText);

    if (!keyword) return [];

    const map = new Map();

    projects.forEach((project) => {
      const searchableText = getProjectSearchText(project);

      if (!searchableText.includes(keyword)) return;

      const title = getProjectTitle(project);
      const location = getLocation(project);
      const city = project?.city || "";
      const configuration = getConfiguration(project);

      const subLabel = [location, city, configuration]
        .filter(Boolean)
        .filter((value, index, self) => self.indexOf(value) === index)
        .join(" • ");

      const key = `project-${project.id || title}-${subLabel}`;

      if (!map.has(key)) {
        map.set(key, {
          label: title || "Project",
          subLabel: subLabel || "Project",
          value: title || "",
          project,
        });
      }
    });

    return Array.from(map.values()).slice(0, 12);
  }, [searchText, projects]);

  const handleSuggestionSelect = (suggestion) => {
    const value = suggestion.value || "";

    setSearchText(value);
    setActiveKeyword(value);
    closeSuggestions();
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();

    setActiveKeyword(searchText.trim());
    closeSuggestions();
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (
        showSuggestions &&
        activeSuggestionIndex >= 0 &&
        searchSuggestions[activeSuggestionIndex]
      ) {
        handleSuggestionSelect(searchSuggestions[activeSuggestionIndex]);
        return;
      }

      handleSearch(e);
      return;
    }

    if (!showSuggestions || searchSuggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setActiveSuggestionIndex((prev) =>
        prev < searchSuggestions.length - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setActiveSuggestionIndex((prev) =>
        prev > 0 ? prev - 1 : searchSuggestions.length - 1
      );
    }

    if (e.key === "Escape") {
      closeSuggestions();
    }
  };

  const handleFavorite = async (id) => {
    if (!user?.id) {
      requirePropertyLogin(window.location.pathname || "/");
      return;
    }

    try {
      const res = await apiPost(`/admindashboard/customer/toggle-favorite/`, {
        user_id: user.id,
        property_id: id,
      });

      setProjects((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                is_favorite:
                  typeof res?.is_favorite === "boolean"
                    ? res.is_favorite
                    : !item.is_favorite,
              }
            : item
        )
      );
    } catch (error) {
      console.error(error);
      alert(error.message || "Favorite update failed");
    }
  };

  const handleLiked = async (id) => {
    if (!user?.id) {
      requirePropertyLogin(window.location.pathname || "/");
      return;
    }

    try {
      const res = await apiPost(`/admindashboard/customer/like-video/`, {
        user_id: user.id,
        property_id: id,
      });

      setProjects((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                is_liked:
                  typeof res?.liked === "boolean" ? res.liked : !item.is_liked,
              }
            : item
        )
      );
    } catch (error) {
      console.error(error);
      alert(error.message || "Liked update failed");
    }
  };

  const handleViewed = async (propertyId) => {
    if (!user?.id) return;

    try {
      await apiPost(`/admindashboard/customer/add-view/`, {
        user_id: user.id,
        property_id: propertyId,
      });
    } catch (error) {
      console.error("View tracking failed:", error);
    }
  };

  const openBookingModal = (project) => {
    const detailHref = getPropertyDetailHref(project);

    if (!user?.id) {
      requirePropertyLogin(detailHref);
      return;
    }

    setSelectedProperty(project);
    setBookingForm({
      name: user?.full_name || user?.username || user?.name || "",
      phone: user?.phone || "",
      visit_date: "",
      visit_time: "",
      message: `Interested in site visit for ${
        project?.title || "this property"
      }`,
    });
    setMessage("");
    setBookingOpen(true);
  };

  const closeBookingModal = () => {
    setBookingOpen(false);
    setSelectedProperty(null);
    setMessage("");
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;

    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitBooking = async (e) => {
    e.preventDefault();

    if (!user?.id || !selectedProperty?.id) return;

    try {
      setBookingLoading(true);
      setMessage("");

      await apiPost(`/admindashboard/customer/book-visit/`, {
        user: user.id,
        property: selectedProperty.id,
        name: bookingForm.name,
        phone: bookingForm.phone,
        visit_date: bookingForm.visit_date,
        visit_time: bookingForm.visit_time,
        message: bookingForm.message,
        status: "upcoming",
      });

      setMessage("Visit booked successfully.");

      setTimeout(() => {
        closeBookingModal();
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to book visit.");
    } finally {
      setBookingLoading(false);
    }
  };

  const filteredProjects = useMemo(() => {
    const keyword = normalizeText(activeKeyword);

    let data = [...projects];

    if (keyword) {
      data = data.filter((project) =>
        getProjectSearchText(project).includes(keyword)
      );
    }

    data.sort(
      (a, b) =>
        new Date(b.posting_date || 0).getTime() -
        new Date(a.posting_date || 0).getTime()
    );

    return data;
  }, [projects, activeKeyword]);

  const developerName =
    projects[0]?.developer_name || developerSlug.replaceAll("-", " ");

  return (
    <>
      <style jsx global>{`
        .developer-project-image-slider {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: #eef3f7;
          touch-action: pan-y;
        }

        .developer-project-slider-link {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .developer-project-slider-track {
          width: 100%;
          height: 100%;
          display: flex;
          transition: transform 0.38s ease;
          will-change: transform;
        }

        .developer-project-slider-slide {
          min-width: 100%;
          width: 100%;
          height: 100%;
          flex: 0 0 100%;
        }

        .developer-project-slider-image {
          width: 100% !important;
          height: 280px !important;
          object-fit: cover !important;
          display: block !important;
        }

        .developer-project-slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 8;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.75);
          background: rgba(23, 60, 91, 0.88);
          color: #ffffff;
          font-size: 34px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
          transition: all 0.2s ease;
        }

        .developer-project-slider-arrow:hover {
          background: #1E4D74;
          color: #ffffff;
          transform: translateY(-50%) scale(1.04);
        }

        .developer-project-slider-arrow-left {
          left: 14px;
        }

        .developer-project-slider-arrow-right {
          right: 14px;
        }

        .developer-project-slider-dots {
          position: absolute;
          left: 50%;
          bottom: 14px;
          transform: translateX(-50%);
          z-index: 9;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(23, 60, 91, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .developer-project-slider-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          border: 0;
          background: rgba(255, 255, 255, 0.75);
          padding: 0;
          cursor: pointer;
          transition: all 0.22s ease;
        }

        .developer-project-slider-dot.active {
          width: 28px;
          background: #EEC629;
        }

        .developer-project-card {
          background: #ffffff !important;
          color: #111827 !important;
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: background 0.25s ease, color 0.25s ease,
            border-color 0.25s ease;
        }

        .developer-project-card-content {
          background: #ffffff !important;
          color: #111827 !important;
        }

        .developer-project-title-link {
          color: #111827 !important;
          opacity: 1 !important;
          text-decoration: none !important;
        }

        .developer-project-title-link:hover {
          color: #1E4D74 !important;
        }

        .developer-project-location,
        .developer-project-location i,
        .developer-project-city,
        .developer-project-city-link {
          color: #5f6368 !important;
          opacity: 1 !important;
        }

        .developer-project-config {
          background: #f4efec !important;
          color: #222222 !important;
        }

        .developer-project-price {
          color: #1E4D74 !important;
          opacity: 1 !important;
        }

        .developer-project-details-btn {
          color: #173C5B !important;
          border-color: #173C5B !important;
          background: transparent !important;
        }

        .developer-project-details-btn:hover {
          background: #173C5B !important;
          color: #ffffff !important;
        }

        .developer-project-book-btn {
          background: #1E4D74 !important;
          color: #ffffff !important;
          border-color: #1E4D74 !important;
        }

        .developer-project-book-btn:hover {
          background: #173C5B !important;
          border-color: #173C5B !important;
          color: #ffffff !important;
        }

        .developer-search-box-wrap {
          width: 100%;
          margin-bottom: 34px;
          position: relative;
          z-index: 50;
          display: flex;
          justify-content: center;
          overflow: visible !important;
        }

        .developer-search-form {
          width: 100%;
          max-width: 1180px;
          position: relative;
          z-index: 999;
          overflow: visible !important;
        }

        .developer-search-fieldset {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 8px;
          border: 0;
          border-radius: 26px;
          background: rgba(11, 19, 32, 0.22);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          box-sizing: border-box;
          overflow: visible !important;
          z-index: 999;
        }

        .developer-search-fieldset input {
          width: 100%;
          min-height: 78px;
          border-radius: 18px;
          border: 1px solid rgba(17, 24, 39, 0.05);
          background: rgba(255, 255, 255, 0.98);
          color: #111827;
          padding: 0 26px;
          outline: none;
          box-shadow: none;
          font-size: 18px;
          font-weight: 500;
          box-sizing: border-box;
        }

        .developer-search-fieldset input:focus {
          border-color: rgba(30, 77, 116, 0.35);
          box-shadow: 0 0 0 4px rgba(30, 77, 116, 0.12);
        }

        .developer-search-fieldset input::placeholder {
          color: #6b7280;
        }

        .developer-search-suggestions {
          position: absolute;
          top: calc(100% + 10px);
          left: 8px;
          right: 8px;
          z-index: 2147483647 !important;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
          overflow-y: auto;
          overflow-x: hidden;
          max-height: 430px;
          text-align: left;
        }

        .developer-suggestion-item {
          width: 100%;
          display: block;
          text-align: left;
          padding: 14px 20px;
          border: 0;
          border-bottom: 1px solid #f1f1f1;
          background: #ffffff;
          cursor: pointer;
        }

        .developer-suggestion-item:last-child {
          border-bottom: 0;
        }

        .developer-suggestion-item:hover,
        .developer-suggestion-item.active {
          background: #f8fafc;
        }

        .developer-suggestion-label {
          display: block;
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
        }

        .developer-suggestion-sub {
          display: block;
          font-size: 14px;
          font-weight: 400;
          color: #6b7280;
          margin-top: 4px;
          line-height: 1.3;
        }

        .developer-no-suggestion {
          padding: 16px 20px;
          font-size: 14px;
          color: #6b7280;
          background: #ffffff;
          text-align: left;
        }

        .developer-empty-text {
          color: #6b7280;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
          text-align: center;
          padding: 32px 16px;
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid #eeeeee;
        }

        @media (max-width: 991px) {
          .developer-projects-page {
            padding-top: 38px !important;
          }

          .developer-page-heading {
            font-size: 28px !important;
            line-height: 1.25 !important;
            margin-bottom: 8px !important;
          }

          .developer-page-subtitle {
            font-size: 14px !important;
            line-height: 1.55 !important;
            margin-bottom: 0 !important;
          }

          .developer-search-box-wrap {
            margin-bottom: 26px;
            justify-content: center;
          }

          .developer-search-form {
            max-width: 430px;
          }

          .developer-search-fieldset {
            padding: 7px;
            border-radius: 18px;
          }

          .developer-search-fieldset input {
            min-height: 54px;
            border-radius: 14px;
            font-size: 14px;
            padding: 0 15px;
          }

          .developer-search-suggestions {
            left: 7px;
            right: 7px;
            max-height: 320px;
            border-radius: 14px;
          }

          .developer-suggestion-item {
            padding: 12px 14px;
          }

          .developer-suggestion-label {
            font-size: 14px;
          }

          .developer-suggestion-sub {
            font-size: 12px;
          }
        }

        @media (max-width: 767px) {
          .developer-projects-page {
            padding-top: 30px !important;
          }

          .developer-page-heading {
            font-size: 24px !important;
            line-height: 1.25 !important;
            text-align: left !important;
          }

          .developer-page-subtitle {
            font-size: 13px !important;
            line-height: 1.55 !important;
            text-align: left !important;
          }

          .developer-search-box-wrap {
            margin-bottom: 22px;
            padding: 0;
          }

          .developer-search-form {
            max-width: 340px;
          }

          .developer-search-fieldset input {
            min-height: 50px;
            font-size: 13px;
            padding: 0 14px;
          }

          .developer-search-suggestions {
            max-height: 300px;
          }

          .developer-page-count {
            font-size: 13px !important;
            margin-bottom: 0 !important;
          }

          .developer-project-image-slider {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: #eef3f7;
          touch-action: pan-y;
        }

        .developer-project-slider-link {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .developer-project-slider-track {
          width: 100%;
          height: 100%;
          display: flex;
          transition: transform 0.38s ease;
          will-change: transform;
        }

        .developer-project-slider-slide {
          min-width: 100%;
          width: 100%;
          height: 100%;
          flex: 0 0 100%;
        }

        .developer-project-slider-image {
          width: 100% !important;
          height: 280px !important;
          object-fit: cover !important;
          display: block !important;
        }

        .developer-project-slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 8;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.75);
          background: rgba(23, 60, 91, 0.88);
          color: #ffffff;
          font-size: 34px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
          transition: all 0.2s ease;
        }

        .developer-project-slider-arrow:hover {
          background: #1E4D74;
          color: #ffffff;
          transform: translateY(-50%) scale(1.04);
        }

        .developer-project-slider-arrow-left {
          left: 14px;
        }

        .developer-project-slider-arrow-right {
          right: 14px;
        }

        .developer-project-slider-dots {
          position: absolute;
          left: 50%;
          bottom: 14px;
          transform: translateX(-50%);
          z-index: 9;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(23, 60, 91, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .developer-project-slider-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          border: 0;
          background: rgba(255, 255, 255, 0.75);
          padding: 0;
          cursor: pointer;
          transition: all 0.22s ease;
        }

        .developer-project-slider-dot.active {
          width: 28px;
          background: #EEC629;
        }

        .developer-project-card {
            border-radius: 18px !important;
          }

          .developer-project-card .image-wrap img,
          .developer-project-slider-image,
          .developer-project-image-slider {
            height: 230px !important;
          }

          .developer-project-slider-arrow {
            width: 40px !important;
            height: 40px !important;
            font-size: 30px !important;
          }

          .developer-project-slider-arrow-left {
            left: 10px !important;
          }

          .developer-project-slider-arrow-right {
            right: 10px !important;
          }

          .developer-project-title {
            font-size: 18px !important;
            line-height: 1.35 !important;
          }

          .developer-project-config {
            font-size: 13px !important;
            padding: 9px 12px !important;
          }

          .developer-project-bottom {
            display: grid !important;
            grid-template-columns: 1fr 1.2fr !important;
            gap: 10px !important;
          }

          .developer-project-details-btn,
          .developer-project-book-btn {
            width: 100% !important;
            min-height: 42px !important;
            padding: 0 10px !important;
            border-radius: 11px !important;
            font-size: 13px !important;
          }
        }

        @media (max-width: 420px) {
          .developer-project-card .image-wrap img,
          .developer-project-slider-image,
          .developer-project-image-slider {
            height: 210px !important;
          }

          .developer-project-bottom {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 380px) {
          .developer-search-form {
            max-width: 330px;
          }
        }
      `}</style>

      <section className="section-property-layout style-1 developer-projects-page">
        <div className="tf-container">
          <div style={{ marginBottom: 24 }}>
            <h2 className="title developer-page-heading">
              Projects by {developerName}
            </h2>

            <p className="text-1 developer-page-subtitle">
              Showing all projects by {developerName} across all cities and
              locations
            </p>
          </div>

          <div className="developer-search-box-wrap">
            <form
              onSubmit={handleSearch}
              className="developer-search-form"
              ref={suggestionRef}
            >
              <fieldset className="developer-search-fieldset">
                <input
                  type="text"
                  placeholder={`Search ${developerName} projects, location, city...`}
                  value={searchText}
                  autoComplete="off"
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setShowSuggestions(true);
                    setActiveSuggestionIndex(-1);
                  }}
                  onFocus={() => {
                    if (searchText) setShowSuggestions(true);
                  }}
                  onKeyDown={handleSearchKeyDown}
                />

                {showSuggestions && searchText && (
                  <div className="developer-search-suggestions">
                    {searchSuggestions.length > 0 ? (
                      searchSuggestions.map((suggestion, index) => (
                        <button
                          type="button"
                          key={`${suggestion.value}-${index}`}
                          className={`developer-suggestion-item ${
                            activeSuggestionIndex === index ? "active" : ""
                          }`}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            handleSuggestionSelect(suggestion);
                          }}
                          onMouseEnter={() => setActiveSuggestionIndex(index)}
                        >
                          <span className="developer-suggestion-label">
                            {suggestion.label}
                          </span>

                          {suggestion.subLabel && (
                            <span className="developer-suggestion-sub">
                              {suggestion.subLabel}
                            </span>
                          )}
                        </button>
                      ))
                    ) : (
                      <div className="developer-no-suggestion">
                        No project found for this developer
                      </div>
                    )}
                  </div>
                )}
              </fieldset>
            </form>
          </div>

          <div style={{ marginBottom: 20 }}>
            <p className="text-1 developer-page-count">
              Showing {filteredProjects.length} project
              {filteredProjects.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="row">
            {filteredProjects.map((project) => {
              const sellerPhone = getPhone(project);
              const detailHref = getPropertyDetailHref(project);

              return (
                <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
                  <div
                    className="box-house developer-project-card"
                    style={{
                      borderRadius: "22px",
                      overflow: "hidden",
                      background: "#fff",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="image-wrap" style={{ position: "relative" }}>
                      <DeveloperProjectImageSlider
                        project={project}
                        detailHref={detailHref}
                        onViewed={handleViewed}
                      />

                      <ul
                        className="box-tag flex gap-8"
                        style={{
                          position: "absolute",
                          top: 14,
                          left: 14,
                          zIndex: 2,
                        }}
                      >
                        {project.property_label ? (
                          <li className="flat-tag text-4 bg-main fw-6 text_white">
                            {project.property_label}
                          </li>
                        ) : null}

                        <li className="flat-tag text-4 bg-3 fw-6 text_white">
                          {project.property_status === "for-rent"
                            ? "For Rent"
                            : "For Sale"}
                        </li>
                      </ul>

                      <div
                        style={{
                          position: "absolute",
                          right: 16,
                          top: 16,
                          display: "flex",
                          gap: 12,
                          zIndex: 5,
                        }}
                      >
                        <button
                          type="button"
                          style={actionBtnStyle}
                          onClick={() => handleFavorite(project.id)}
                          title="Favorite"
                        >
                          <BookmarkIcon active={project.is_favorite} />
                        </button>

                        <button
                          type="button"
                          style={actionBtnStyle}
                          onClick={() => handleLiked(project.id)}
                          title="Like"
                        >
                          <HeartIcon active={project.is_liked} />
                        </button>

                        {sellerPhone ? (
                          <a
                            href={`tel:${sellerPhone}`}
                            style={actionBtnStyle}
                            title="Call"
                          >
                            <PhoneIcon />
                          </a>
                        ) : null}
                      </div>
                    </div>

                    <div
                      className="content developer-project-card-content"
                      style={{
                        background: "#fff",
                        padding: "20px",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <h5
                        className="title developer-project-title"
                        style={{ marginBottom: 8 }}
                      >
                        <ProtectedPropertyLink
                          href={detailHref}
                          onAllowedClick={() => handleViewed(project.id)}
                          className="developer-project-title-link"
                          style={{ color: "#1f1f1f", opacity: 1 }}
                        >
                          {project.title}
                        </ProtectedPropertyLink>
                      </h5>

                      <p
                        className="location text-1 flex items-center gap-6 developer-project-location"
                        style={{
                          color: "#5f6368",
                          opacity: 1,
                          marginBottom: 8,
                        }}
                      >
                        <i className="icon-location" />
                        {getLocation(project)}
                      </p>

                      <p
                        className="text-1 developer-project-city"
                        style={{ marginTop: 6, color: "#666", opacity: 1 }}
                      >
                        <Link
                          href={`/cities/${project.city_slug}`}
                          className="developer-project-city-link"
                          style={{ color: "#666", opacity: 1 }}
                        >
                          {project.city}
                        </Link>
                      </p>

                      <div
                        className="developer-project-config"
                        style={{
                          background: "#f4efec",
                          borderRadius: "12px",
                          padding: "10px 14px",
                          marginTop: 10,
                          marginBottom: "12px",
                          fontSize: "14px",
                          color: "#222",
                        }}
                      >
                        <strong>Configuration:</strong>{" "}
                        {project.configuration_text}
                      </div>

                      <div
                        className="price text-3 fw-6 developer-project-price"
                        style={{ marginTop: 8, color: "#1E4D74", opacity: 1 }}
                      >
                        {formatPrice(project.price)}
                      </div>

                      <ul
                        className="meta-list flex developer-project-meta"
                        style={{ marginTop: 8, color: "#222", opacity: 1 }}
                      >
                        <li className="text-1 flex">
                          <span>{project.bedrooms || 0}</span>BHK
                        </li>

                        <li className="text-1 flex">
                          <span>{project.bathrooms || 0}</span>Bath
                        </li>

                        <li className="text-1 flex">
                          <span>
                            {project.carpet_area || project.size_sqft || "-"}
                          </span>
                          Sqft
                        </li>
                      </ul>

                      <div
                        className="bot developer-project-bottom"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 14,
                          borderTop: "1px solid #eee",
                          paddingTop: 16,
                          marginTop: 14,
                        }}
                      >
                        <ProtectedPropertyLink
                          href={detailHref}
                          className="tf-btn style-border pd-4 developer-project-details-btn"
                          onAllowedClick={() => handleViewed(project.id)}
                        >
                          Details
                        </ProtectedPropertyLink>

                        <button
                          type="button"
                          className="tf-btn pd-4 developer-project-book-btn"
                          onClick={() => openBookingModal(project)}
                          style={{
                            background: "#1E4D74",
                            color: "#fff",
                            border: "1px solid #1E4D74",
                          }}
                        >
                          Book Visit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredProjects.length === 0 && (
              <div className="col-12">
                <p className="developer-empty-text">
                  No properties found for this developer search.
                </p>
              </div>
            )}
          </div>
        </div>

        {bookingOpen && selectedProperty && (
          <div
            className="modal fade show"
            style={{
              display: "block",
              background: "rgba(0,0,0,0.5)",
              zIndex: 9999,
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div
                className="modal-content"
                style={{ borderRadius: "20px", overflow: "hidden" }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">
                    Book a Visit - {selectedProperty.title}
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeBookingModal}
                  />
                </div>

                <form onSubmit={submitBooking}>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Name</label>

                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={bookingForm.name}
                        onChange={handleBookingChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Phone</label>

                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={bookingForm.phone}
                        onChange={handleBookingChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Visit Date</label>

                      <input
                        type="date"
                        name="visit_date"
                        className="form-control"
                        value={bookingForm.visit_date}
                        onChange={handleBookingChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Visit Time</label>

                      <input
                        type="time"
                        name="visit_time"
                        className="form-control"
                        value={bookingForm.visit_time}
                        onChange={handleBookingChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Message</label>

                      <textarea
                        name="message"
                        className="form-control"
                        rows={3}
                        value={bookingForm.message}
                        onChange={handleBookingChange}
                      />
                    </div>

                    {message ? (
                      <div
                        style={{
                          color: "#1E4D74",
                          fontSize: "14px",
                          marginTop: "8px",
                        }}
                      >
                        {message}
                      </div>
                    ) : null}
                  </div>

                  <div
                    className="modal-footer"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "12px",
                      padding: "16px 20px 20px",
                    }}
                  >
                    <button
                      type="button"
                      className="tf-btn style-border pd-4"
                      onClick={closeBookingModal}
                      style={{
                        minWidth: "130px",
                        border: "1px solid #d9d9d9",
                        background: "#fff",
                        color: "#222",
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="tf-btn pd-4"
                      disabled={bookingLoading}
                      style={{
                        minWidth: "170px",
                        background: "#1E4D74",
                        color: "#fff",
                        border: "1px solid #1E4D74",
                        opacity: bookingLoading ? 0.7 : 1,
                      }}
                    >
                      {bookingLoading ? "Booking..." : "Confirm Visit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}