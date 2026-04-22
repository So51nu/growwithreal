// // "use client";

// // import React, { useEffect, useMemo, useState } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import SearchForm from "../common/SearchForm";
// // import { apiGet } from "../lib/api";

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

// //   useEffect(() => {
// //     const loadProjects = async () => {
// //       try {
// //         const res = await apiGet(
// //           `/admindashboard/developers/${developerSlug}/properties/`
// //         );
// //         setProjects(Array.isArray(res) ? res : []);
// //       } catch (error) {
// //         console.error("Developer projects fetch error:", error);
// //         setProjects([]);
// //       }
// //     };

// //     loadProjects();
// //   }, [developerSlug]);

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
// //     <section className="section-property-layout style-1">
// //       <div className="tf-container">
// //         <div style={{ marginBottom: 24 }}>
// //           <h2 className="title">Projects by {developerName}</h2>
// //           <p className="text-1">
// //             Showing all projects by {developerName} across all cities and locations
// //           </p>
// //         </div>

// //         <div style={{ marginBottom: 30 }}>
// //           <SearchForm
// //             projects={projects}
// //             onFilterChange={setFilters}
// //             lockedDeveloper={developerName}
// //           />
// //         </div>

// //         <div style={{ marginBottom: 20 }}>
// //           <p className="text-1">
// //             Showing {filteredProjects.length} project
// //             {filteredProjects.length === 1 ? "" : "s"}
// //           </p>
// //         </div>

// //         <div className="row">
// //           {filteredProjects.map((project) => (
// //             <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
// //               <div className="box-house hover-img">
// //                 <div className="image-wrap">
// //                   <Link href={`/property-detail-v1/${project.id}`}>
// //                     <Image
// //                       alt={project.title || "Property"}
// //                       src={project.imageSrc || "/images/home/house-db-1.jpg"}
// //                       width={615}
// //                       height={405}
// //                     />
// //                   </Link>
// //                 </div>

// //                 <div className="content">
// //                   <h5 className="title">
// //                     <Link href={`/property-detail-v1/${project.id}`}>
// //                       {project.title}
// //                     </Link>
// //                   </h5>

// //                   <p className="location text-1 flex items-center gap-6">
// //                     <i className="icon-location" />
// //                     {project.short_location ||
// //                       project.location ||
// //                       project.full_address}
// //                   </p>

// //                   <p className="text-1" style={{ marginTop: 6 }}>
// //                     <Link href={`/cities/${project.city_slug}`}>{project.city}</Link>
// //                   </p>

// //                   <div className="price text-3 fw-6" style={{ marginTop: 8 }}>
// //                     {formatPrice(project.price)}
// //                   </div>

// //                   <ul className="meta-list flex" style={{ marginTop: 8 }}>
// //                     <li className="text-1 flex">
// //                       <span>{project.bedrooms || 0}</span>BHK
// //                     </li>
// //                     <li className="text-1 flex">
// //                       <span>{project.bathrooms || 0}</span>Bath
// //                     </li>
// //                     <li className="text-1 flex">
// //                       <span>{project.carpet_area || project.size_sqft || "-"}</span>
// //                       Sqft
// //                     </li>
// //                   </ul>

// //                   <div
// //                     className="bot flex justify-between items-center"
// //                     style={{ marginTop: 14 }}
// //                   >
// //                     <Link
// //                       href={`/property-detail-v1/${project.id}`}
// //                       className="tf-btn style-border pd-4"
// //                     >
// //                       Details
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}

// //           {filteredProjects.length === 0 && (
// //             <div className="col-12">
// //               <p>No properties found for the selected filters.</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import SearchForm from "../common/SearchForm";
// import { apiGet, apiPost } from "../lib/api";

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
//   if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
//   if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
//   return `₹${num.toLocaleString("en-IN")}`;
// }

// function matchesCountFilter(actual, selected) {
//   if (!selected) return true;
//   const value = toNumber(actual);
//   if (selected === "5+") return value >= 5;
//   if (selected === "4+") return value >= 4;
//   return value === Number(selected);
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
//     <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#ff8c5a" : "none"}>
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
//   const [projects, setProjects] = useState([]);
//   const [filters, setFilters] = useState({
//     keyword: "",
//     city: "",
//     location: "",
//     propertyType: "",
//     propertyStatus: "",
//     bedrooms: "",
//     bathrooms: "",
//     amenities: [],
//     sortBy: "Newest",
//     priceRange: [0, 50000000],
//     areaRange: [0, 5000],
//   });

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

//   const handleFavorite = async (id) => {
//     if (!user?.id) {
//       alert("Please login as customer first.");
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
//       alert("Please login as customer first.");
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
//                   typeof res?.liked === "boolean"
//                     ? res.liked
//                     : !item.is_liked,
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
//     if (!user?.id) {
//       alert("Please login as customer first.");
//       return;
//     }

//     setSelectedProperty(project);
//     setBookingForm({
//       name: user?.full_name || user?.username || user?.name || "",
//       phone: user?.phone || "",
//       visit_date: "",
//       visit_time: "",
//       message: `Interested in site visit for ${project?.title || "this property"}`,
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
//     let data = [...projects];

//     data = data.filter((project) => {
//       const locationValue =
//         project.short_location || project.location || project.full_address || "";

//       const searchableText = normalizeText(
//         [
//           project.title,
//           project.city,
//           project.short_location,
//           project.location,
//           project.full_address,
//           project.developer_name,
//           project.property_type,
//           project.property_status,
//         ].join(" ")
//       );

//       const keywordMatch =
//         !filters.keyword ||
//         searchableText.includes(normalizeText(filters.keyword));

//       const cityMatch = !filters.city || project.city === filters.city;

//       const locationMatch =
//         !filters.location || locationValue === filters.location;

//       const typeMatch =
//         !filters.propertyType || project.property_type === filters.propertyType;

//       const statusMatch =
//         !filters.propertyStatus ||
//         project.property_status === filters.propertyStatus;

//       const bedroomsMatch = matchesCountFilter(project.bedrooms, filters.bedrooms);
//       const bathroomsMatch = matchesCountFilter(project.bathrooms, filters.bathrooms);

//       const price = toNumber(project.price);
//       const area = toNumber(project.carpet_area || project.size_sqft);

//       const priceMatch =
//         price >= filters.priceRange[0] && price <= filters.priceRange[1];

//       const areaMatch =
//         area >= filters.areaRange[0] && area <= filters.areaRange[1];

//       const projectAmenities = Array.isArray(project.amenities)
//         ? project.amenities
//         : [];

//       const amenitiesMatch =
//         filters.amenities.length === 0 ||
//         filters.amenities.every((item) => projectAmenities.includes(item));

//       return (
//         keywordMatch &&
//         cityMatch &&
//         locationMatch &&
//         typeMatch &&
//         statusMatch &&
//         bedroomsMatch &&
//         bathroomsMatch &&
//         priceMatch &&
//         areaMatch &&
//         amenitiesMatch
//       );
//     });

//     switch (filters.sortBy) {
//       case "Oldest":
//         data.sort(
//           (a, b) =>
//             new Date(a.posting_date || 0).getTime() -
//             new Date(b.posting_date || 0).getTime()
//         );
//         break;
//       case "Price Low to High":
//         data.sort((a, b) => toNumber(a.price) - toNumber(b.price));
//         break;
//       case "Price High to Low":
//         data.sort((a, b) => toNumber(b.price) - toNumber(a.price));
//         break;
//       case "Area Low to High":
//         data.sort(
//           (a, b) =>
//             toNumber(a.carpet_area || a.size_sqft) -
//             toNumber(b.carpet_area || b.size_sqft)
//         );
//         break;
//       case "Area High to Low":
//         data.sort(
//           (a, b) =>
//             toNumber(b.carpet_area || b.size_sqft) -
//             toNumber(a.carpet_area || a.size_sqft)
//         );
//         break;
//       case "Newest":
//       default:
//         data.sort(
//           (a, b) =>
//             new Date(b.posting_date || 0).getTime() -
//             new Date(a.posting_date || 0).getTime()
//         );
//         break;
//     }

//     return data;
//   }, [projects, filters]);

//   const developerName =
//     projects[0]?.developer_name || developerSlug.replaceAll("-", " ");

//   return (
//     <section className="section-property-layout style-1">
//       <div className="tf-container">
//         <div style={{ marginBottom: 24 }}>
//           <h2 className="title">Projects by {developerName}</h2>
//           <p className="text-1">
//             Showing all projects by {developerName} across all cities and locations
//           </p>
//         </div>

//         <div style={{ marginBottom: 30 }}>
//           <SearchForm
//             projects={projects}
//             onFilterChange={setFilters}
//             lockedDeveloper={developerName}
//           />
//         </div>

//         <div style={{ marginBottom: 20 }}>
//           <p className="text-1">
//             Showing {filteredProjects.length} project
//             {filteredProjects.length === 1 ? "" : "s"}
//           </p>
//         </div>

//         <div className="row">
//           {filteredProjects.map((project) => {
//             const sellerPhone = getPhone(project);

//             return (
//               <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
//                 <div
//                   className="box-house hover-img"
//                   style={{
//                     borderRadius: "22px",
//                     overflow: "hidden",
//                     background: "#fff",
//                     boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
//                   }}
//                 >
//                   <div className="image-wrap" style={{ position: "relative" }}>
//                     <Link
//                       href={`/property-detail-v1/${project.id}`}
//                       onClick={() => handleViewed(project.id)}
//                     >
//                       <Image
//                         alt={project.title || "Property"}
//                         src={project.imageSrc || "/images/home/house-db-1.jpg"}
//                         width={615}
//                         height={405}
//                         style={{ width: "100%", height: "280px", objectFit: "cover" }}
//                       />
//                     </Link>

//                     <ul
//                       className="box-tag flex gap-8"
//                       style={{
//                         position: "absolute",
//                         top: 14,
//                         left: 14,
//                         zIndex: 2,
//                       }}
//                     >
//                       {project.property_label ? (
//                         <li className="flat-tag text-4 bg-main fw-6 text_white">
//                           {project.property_label}
//                         </li>
//                       ) : null}

//                       <li className="flat-tag text-4 bg-3 fw-6 text_white">
//                         {project.property_status === "for-rent" ? "For Rent" : "For Sale"}
//                       </li>
//                     </ul>

//                     <div
//                       style={{
//                         position: "absolute",
//                         right: 16,
//                         top: 16,
//                         display: "flex",
//                         gap: 12,
//                         zIndex: 5,
//                       }}
//                     >
//                       <button
//                         type="button"
//                         style={actionBtnStyle}
//                         onClick={() => handleFavorite(project.id)}
//                         title="Favorite"
//                       >
//                         <BookmarkIcon active={project.is_favorite} />
//                       </button>

//                       <button
//                         type="button"
//                         style={actionBtnStyle}
//                         onClick={() => handleLiked(project.id)}
//                         title="Like"
//                       >
//                         <HeartIcon active={project.is_liked} />
//                       </button>

//                       {sellerPhone ? (
//                         <a
//                           href={`tel:${sellerPhone}`}
//                           style={actionBtnStyle}
//                           title="Call"
//                         >
//                           <PhoneIcon />
//                         </a>
//                       ) : null}
//                     </div>
//                   </div>

//                   <div className="content">
//                     <h5 className="title">
//                       <Link
//                         href={`/property-detail-v1/${project.id}`}
//                         onClick={() => handleViewed(project.id)}
//                       >
//                         {project.title}
//                       </Link>
//                     </h5>

//                     <p className="location text-1 flex items-center gap-6">
//                       <i className="icon-location" />
//                       {getLocation(project)}
//                     </p>

//                     <p className="text-1" style={{ marginTop: 6 }}>
//                       <Link href={`/cities/${project.city_slug}`}>{project.city}</Link>
//                     </p>

//                     <div
//                       style={{
//                         background: "#f4efec",
//                         borderRadius: "12px",
//                         padding: "10px 14px",
//                         marginTop: 10,
//                         marginBottom: "12px",
//                         fontSize: "14px",
//                       }}
//                     >
//                       <strong>Configuration:</strong> {project.configuration_text}
//                     </div>

//                     <div className="price text-3 fw-6" style={{ marginTop: 8 }}>
//                       {formatPrice(project.price)}
//                     </div>

//                     <ul className="meta-list flex" style={{ marginTop: 8 }}>
//                       <li className="text-1 flex">
//                         <span>{project.bedrooms || 0}</span>BHK
//                       </li>
//                       <li className="text-1 flex">
//                         <span>{project.bathrooms || 0}</span>Bath
//                       </li>
//                       <li className="text-1 flex">
//                         <span>{project.carpet_area || project.size_sqft || "-"}</span>
//                         Sqft
//                       </li>
//                     </ul>

//                     <div
//                       className="bot"
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         gap: 14,
//                         borderTop: "1px solid #eee",
//                         paddingTop: 16,
//                         marginTop: 14,
//                       }}
//                     >
//                       <Link
//                         href={`/property-detail-v1/${project.id}`}
//                         className="tf-btn style-border pd-4"
//                         onClick={() => handleViewed(project.id)}
//                       >
//                         Details
//                       </Link>

//                       <button
//                         type="button"
//                         className="tf-btn pd-4"
//                         onClick={() => openBookingModal(project)}
//                         style={{
//                           background: "#f28c52",
//                           color: "#fff",
//                           border: "1px solid #f28c52",
//                         }}
//                       >
//                         Book Visit
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}

//           {filteredProjects.length === 0 && (
//             <div className="col-12">
//               <p>No properties found for the selected filters.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {bookingOpen && selectedProperty && (
//         <div
//           className="modal fade show"
//           style={{
//             display: "block",
//             background: "rgba(0,0,0,0.5)",
//             zIndex: 9999,
//           }}
//         >
//           <div className="modal-dialog modal-dialog-centered">
//             <div
//               className="modal-content"
//               style={{
//                 borderRadius: "20px",
//                 overflow: "hidden",
//               }}
//             >
//               <div className="modal-header">
//                 <h5 className="modal-title">
//                   Book a Visit - {selectedProperty.title}
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={closeBookingModal}
//                 />
//               </div>

//               <form onSubmit={submitBooking}>
//                 <div className="modal-body">
//                   <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-control"
//                       value={bookingForm.name}
//                       onChange={handleBookingChange}
//                       required
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Phone</label>
//                     <input
//                       type="text"
//                       name="phone"
//                       className="form-control"
//                       value={bookingForm.phone}
//                       onChange={handleBookingChange}
//                       required
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Visit Date</label>
//                     <input
//                       type="date"
//                       name="visit_date"
//                       className="form-control"
//                       value={bookingForm.visit_date}
//                       onChange={handleBookingChange}
//                       required
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Visit Time</label>
//                     <input
//                       type="time"
//                       name="visit_time"
//                       className="form-control"
//                       value={bookingForm.visit_time}
//                       onChange={handleBookingChange}
//                       required
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Message</label>
//                     <textarea
//                       name="message"
//                       className="form-control"
//                       rows={3}
//                       value={bookingForm.message}
//                       onChange={handleBookingChange}
//                     />
//                   </div>

//                   {message ? (
//                     <div
//                       style={{
//                         color: "#ff6b35",
//                         fontSize: "14px",
//                         marginTop: "8px",
//                       }}
//                     >
//                       {message}
//                     </div>
//                   ) : null}
//                 </div>

//                 <div
//                   className="modal-footer"
//                   style={{
//                     display: "flex",
//                     justifyContent: "flex-end",
//                     gap: "12px",
//                     padding: "16px 20px 20px",
//                   }}
//                 >
//                   <button
//                     type="button"
//                     className="tf-btn style-border pd-4"
//                     onClick={closeBookingModal}
//                     style={{
//                       minWidth: "130px",
//                       border: "1px solid #d9d9d9",
//                       background: "#fff",
//                       color: "#222",
//                     }}
//                   >
//                     Cancel
//                   </button>

//                   <button
//                     type="submit"
//                     className="tf-btn pd-4"
//                     disabled={bookingLoading}
//                     style={{
//                       minWidth: "170px",
//                       background: "#f28c52",
//                       color: "#fff",
//                       border: "1px solid #f28c52",
//                       opacity: bookingLoading ? 0.7 : 1,
//                     }}
//                   >
//                     {bookingLoading ? "Booking..." : "Confirm Visit"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }







"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchForm from "../common/SearchForm";
import { apiGet, apiPost } from "../lib/api";

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
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
  return `₹${num.toLocaleString("en-IN")}`;
}

function matchesCountFilter(actual, selected) {
  if (!selected) return true;
  const value = toNumber(actual);
  if (selected === "5+") return value >= 5;
  if (selected === "4+") return value >= 4;
  return value === Number(selected);
}

function getStoredUser() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

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
        stroke={active ? "#ff8c5a" : "#ffffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ active = false }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#ff8c5a" : "none"}>
      <path
        d="M12 20.5C12 20.5 4.5 16 4.5 9.75C4.5 7.4 6.4 5.5 8.75 5.5C10.2 5.5 11.48 6.22 12 7.32C12.52 6.22 13.8 5.5 15.25 5.5C17.6 5.5 19.5 7.4 19.5 9.75C19.5 16 12 20.5 12 20.5Z"
        stroke={active ? "#ff8c5a" : "#ffffff"}
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

export default function DeveloperProjectsPage({ developerSlug }) {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({
    keyword: "",
    city: "",
    location: "",
    propertyType: "",
    propertyStatus: "",
    bedrooms: "",
    bathrooms: "",
    amenities: [],
    sortBy: "Newest",
    priceRange: [0, 50000000],
    areaRange: [0, 5000],
  });

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

  const handleFavorite = async (id) => {
    if (!user?.id) {
      alert("Please login as customer first.");
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
      alert("Please login as customer first.");
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
                  typeof res?.liked === "boolean"
                    ? res.liked
                    : !item.is_liked,
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
    if (!user?.id) {
      alert("Please login as customer first.");
      return;
    }

    setSelectedProperty(project);
    setBookingForm({
      name: user?.full_name || user?.username || user?.name || "",
      phone: user?.phone || "",
      visit_date: "",
      visit_time: "",
      message: `Interested in site visit for ${project?.title || "this property"}`,
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
    let data = [...projects];

    data = data.filter((project) => {
      const locationValue =
        project.short_location || project.location || project.full_address || "";

      const searchableText = normalizeText(
        [
          project.title,
          project.city,
          project.short_location,
          project.location,
          project.full_address,
          project.developer_name,
          project.property_type,
          project.property_status,
        ].join(" ")
      );

      const keywordMatch =
        !filters.keyword ||
        searchableText.includes(normalizeText(filters.keyword));

      const cityMatch = !filters.city || project.city === filters.city;

      const locationMatch =
        !filters.location || locationValue === filters.location;

      const typeMatch =
        !filters.propertyType || project.property_type === filters.propertyType;

      const statusMatch =
        !filters.propertyStatus ||
        project.property_status === filters.propertyStatus;

      const bedroomsMatch = matchesCountFilter(project.bedrooms, filters.bedrooms);
      const bathroomsMatch = matchesCountFilter(project.bathrooms, filters.bathrooms);

      const price = toNumber(project.price);
      const area = toNumber(project.carpet_area || project.size_sqft);

      const priceMatch =
        price >= filters.priceRange[0] && price <= filters.priceRange[1];

      const areaMatch =
        area >= filters.areaRange[0] && area <= filters.areaRange[1];

      const projectAmenities = Array.isArray(project.amenities)
        ? project.amenities
        : [];

      const amenitiesMatch =
        filters.amenities.length === 0 ||
        filters.amenities.every((item) => projectAmenities.includes(item));

      return (
        keywordMatch &&
        cityMatch &&
        locationMatch &&
        typeMatch &&
        statusMatch &&
        bedroomsMatch &&
        bathroomsMatch &&
        priceMatch &&
        areaMatch &&
        amenitiesMatch
      );
    });

    switch (filters.sortBy) {
      case "Oldest":
        data.sort(
          (a, b) =>
            new Date(a.posting_date || 0).getTime() -
            new Date(b.posting_date || 0).getTime()
        );
        break;
      case "Price Low to High":
        data.sort((a, b) => toNumber(a.price) - toNumber(b.price));
        break;
      case "Price High to Low":
        data.sort((a, b) => toNumber(b.price) - toNumber(a.price));
        break;
      case "Area Low to High":
        data.sort(
          (a, b) =>
            toNumber(a.carpet_area || a.size_sqft) -
            toNumber(b.carpet_area || b.size_sqft)
        );
        break;
      case "Area High to Low":
        data.sort(
          (a, b) =>
            toNumber(b.carpet_area || b.size_sqft) -
            toNumber(a.carpet_area || a.size_sqft)
        );
        break;
      case "Newest":
      default:
        data.sort(
          (a, b) =>
            new Date(b.posting_date || 0).getTime() -
            new Date(a.posting_date || 0).getTime()
        );
        break;
    }

    return data;
  }, [projects, filters]);

  const developerName =
    projects[0]?.developer_name || developerSlug.replaceAll("-", " ");

  return (
    <section className="section-property-layout style-1">
      <div className="tf-container">
        <div style={{ marginBottom: 24 }}>
          <h2 className="title">Projects by {developerName}</h2>
          <p className="text-1">
            Showing all projects by {developerName} across all cities and locations
          </p>
        </div>

        <div style={{ marginBottom: 30 }}>
          <SearchForm
            projects={projects}
            onFilterChange={setFilters}
            lockedDeveloper={developerName}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <p className="text-1">
            Showing {filteredProjects.length} project
            {filteredProjects.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="row">
          {filteredProjects.map((project) => {
            const sellerPhone = getPhone(project);

            return (
              <div className="col-md-6 col-xl-4 mb-24" key={project.id}>
                <div
                  className="box-house"
                  style={{
                    borderRadius: "22px",
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="image-wrap" style={{ position: "relative" }}>
                    <Link
                      href={`/property-detail-v1/${project.id}`}
                      onClick={() => handleViewed(project.id)}
                    >
                      <Image
                        alt={project.title || "Property"}
                        src={project.imageSrc || "/images/home/house-db-1.jpg"}
                        width={615}
                        height={405}
                        style={{ width: "100%", height: "280px", objectFit: "cover" }}
                      />
                    </Link>

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
                        {project.property_status === "for-rent" ? "For Rent" : "For Sale"}
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
                    className="content"
                    style={{
                      background: "#fff",
                      padding: "20px",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <h5 className="title" style={{ marginBottom: 8 }}>
                      <Link
                        href={`/property-detail-v1/${project.id}`}
                        onClick={() => handleViewed(project.id)}
                        style={{ color: "#1f1f1f", opacity: 1 }}
                      >
                        {project.title}
                      </Link>
                    </h5>

                    <p
                      className="location text-1 flex items-center gap-6"
                      style={{ color: "#5f6368", opacity: 1, marginBottom: 8 }}
                    >
                      <i className="icon-location" />
                      {getLocation(project)}
                    </p>

                    <p
                      className="text-1"
                      style={{ marginTop: 6, color: "#666", opacity: 1 }}
                    >
                      <Link
                        href={`/cities/${project.city_slug}`}
                        style={{ color: "#666", opacity: 1 }}
                      >
                        {project.city}
                      </Link>
                    </p>

                    <div
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
                      <strong>Configuration:</strong> {project.configuration_text}
                    </div>

                    <div
                      className="price text-3 fw-6"
                      style={{ marginTop: 8, color: "#f28c52", opacity: 1 }}
                    >
                      {formatPrice(project.price)}
                    </div>

                    <ul
                      className="meta-list flex"
                      style={{ marginTop: 8, color: "#222", opacity: 1 }}
                    >
                      <li className="text-1 flex">
                        <span>{project.bedrooms || 0}</span>BHK
                      </li>
                      <li className="text-1 flex">
                        <span>{project.bathrooms || 0}</span>Bath
                      </li>
                      <li className="text-1 flex">
                        <span>{project.carpet_area || project.size_sqft || "-"}</span>
                        Sqft
                      </li>
                    </ul>

                    <div
                      className="bot"
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
                      <Link
                        href={`/property-detail-v1/${project.id}`}
                        className="tf-btn style-border pd-4"
                        onClick={() => handleViewed(project.id)}
                      >
                        Details
                      </Link>

                      <button
                        type="button"
                        className="tf-btn pd-4"
                        onClick={() => openBookingModal(project)}
                        style={{
                          background: "#f28c52",
                          color: "#fff",
                          border: "1px solid #f28c52",
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
              <p>No properties found for the selected filters.</p>
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
              style={{
                borderRadius: "20px",
                overflow: "hidden",
              }}
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
                        color: "#ff6b35",
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
                      background: "#f28c52",
                      color: "#fff",
                      border: "1px solid #f28c52",
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
  );
}


