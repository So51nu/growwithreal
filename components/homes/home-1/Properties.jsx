// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import SplitTextAnimation from "@/components/common/SplitTextAnimation";
// import React, { useEffect, useMemo, useState } from "react";
// import { apiGet, apiPost } from "../../lib/api";

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

// function toNumber(value) {
//   const num = Number(value);
//   return Number.isFinite(num) ? num : 0;
// }

// function normalizeText(value) {
//   return String(value || "").trim().toLowerCase();
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

// function extractImage(property) {
//   return (
//     property.image ||
//     property.imageSrc ||
//     property.featured_image ||
//     property.cover_image ||
//     property.thumbnail ||
//     "/images/home/house-1.jpg"
//   );
// }

// function extractSellerPhone(property) {
//   return (
//     property.seller_phone ||
//     property.phone ||
//     property.contact_phone ||
//     property.contact_number ||
//     property.contact_seller_phone ||
//     property.contact_seller?.phone ||
//     property.contact_seller?.office_number ||
//     ""
//   );
// }

// function extractConfigurations(property) {
//   if (property.configuration) return property.configuration;
//   if (property.configuration_text) return property.configuration_text;
//   if (property.bedrooms) return `${property.bedrooms} BHK`;
//   if (property.property_type) return property.property_type;
//   return "Configuration on request";
// }

// const actionBtnStyle = {
//   width: "50px",
//   height: "50px",
//   borderRadius: "50%",
//   border: "none",
//   background: "rgba(35,35,35,0.55)",
//   backdropFilter: "blur(4px)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#fff",
//   cursor: "pointer",
//   boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
// };

// export default function Properties({ filters = {} }) {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

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

//   const loadProperties = async () => {
//     try {
//       setLoading(true);

//       const res = await apiGet("/admindashboard/properties/");
//       const list = Array.isArray(res) ? res : [];

//       const visibleProperties = list.filter((property) => {
//         const postStatus = String(property?.post_status || "").toLowerCase();
//         const isApproved = property?.is_approved === true;
//         return postStatus === "publish" && isApproved;
//       });

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

//       const merged = visibleProperties.map((property) => ({
//         ...property,
//         imageSrc: extractImage(property),
//         seller_phone: extractSellerPhone(property),
//         configuration_text: extractConfigurations(property),
//         is_favorite:
//           property.is_favorite || favoriteIds.includes(property.id),
//         is_liked: likedIds.includes(property.id),
//       }));

//       setProperties(merged);
//     } catch (error) {
//       console.error("Properties fetch error:", error);
//       setProperties([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadProperties();
//   }, []);

//   const toggleFavorite = async (id) => {
//     if (!user?.id) {
//       alert("Please login as customer first.");
//       return;
//     }

//     try {
//       const res = await apiPost("/admindashboard/customer/toggle-favorite/", {
//         user_id: user.id,
//         property_id: id,
//       });

//       setProperties((prev) =>
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
//       alert(error.message || "Failed to update favorite.");
//     }
//   };

//   const toggleLiked = async (id) => {
//     if (!user?.id) {
//       alert("Please login as customer first.");
//       return;
//     }

//     try {
//       const res = await apiPost("/admindashboard/customer/like-video/", {
//         user_id: user.id,
//         property_id: id,
//       });

//       setProperties((prev) =>
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
//       alert(error.message || "Failed to update liked item.");
//     }
//   };

//   const addView = async (propertyId) => {
//     if (!user?.id) return;

//     try {
//       await apiPost("/admindashboard/customer/add-view/", {
//         user_id: user.id,
//         property_id: propertyId,
//       });
//     } catch (error) {
//       console.error("View tracking error:", error);
//     }
//   };

//   const openBookingModal = (property) => {
//     if (!user?.id) {
//       alert("Please login as customer first.");
//       return;
//     }

//     setSelectedProperty(property);
//     setBookingForm({
//       name: user?.full_name || user?.username || user?.name || "",
//       phone: user?.phone || "",
//       visit_date: "",
//       visit_time: "",
//       message: `Interested in site visit for ${property?.title || "this property"}`,
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

//       await apiPost("/admindashboard/customer/book-visit/", {
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

//   const filteredProperties = useMemo(() => {
//     let data = [...properties];

//     data = data.filter((property) => {
//       const locationValue =
//         property.short_location || property.location || property.full_address || "";

//       const searchableText = normalizeText(
//         [
//           property.title,
//           property.city,
//           property.short_location,
//           property.location,
//           property.full_address,
//           property.developer_name,
//           property.developer_slug,
//           property.property_type,
//           property.property_status,
//         ].join(" ")
//       );

//       const keywordMatch =
//         !filters.keyword ||
//         searchableText.includes(normalizeText(filters.keyword));

//       const cityMatch =
//         !filters.city ||
//         normalizeText(property.city) === normalizeText(filters.city);

//       const locationMatch =
//         !filters.location ||
//         normalizeText(locationValue) === normalizeText(filters.location);

//       const typeMatch =
//         !filters.propertyType ||
//         normalizeText(property.property_type) ===
//           normalizeText(filters.propertyType);

//       const statusMatch =
//         !filters.propertyStatus ||
//         normalizeText(property.property_status) ===
//           normalizeText(filters.propertyStatus);

//       const bedroomsMatch = matchesCountFilter(property.bedrooms, filters.bedrooms);
//       const bathroomsMatch = matchesCountFilter(property.bathrooms, filters.bathrooms);

//       const price = toNumber(property.price);
//       const area = toNumber(property.carpet_area || property.size_sqft);

//       const priceRange = filters.priceRange || [0, 500000000];
//       const areaRange = filters.areaRange || [0, 5000];

//       const priceMatch = price >= priceRange[0] && price <= priceRange[1];
//       const areaMatch = area >= areaRange[0] && area <= areaRange[1];

//       const projectAmenities = Array.isArray(property.amenities)
//         ? property.amenities
//         : [];

//       const amenitiesMatch =
//         !filters.amenities ||
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
//   }, [properties, filters]);

//   const relatedProjects = useMemo(() => {
//     if (filteredProperties.length > 0) {
//       const selected = filteredProperties[0];

//       const related = properties.filter((item) => {
//         if (item.id === selected.id) return false;

//         const sameLocation =
//           selected.location &&
//           item.location &&
//           normalizeText(item.location) === normalizeText(selected.location);

//         const sameShortLocation =
//           selected.short_location &&
//           item.short_location &&
//           normalizeText(item.short_location) === normalizeText(selected.short_location);

//         const sameCity =
//           selected.city &&
//           item.city &&
//           normalizeText(item.city) === normalizeText(selected.city);

//         const sameDeveloper =
//           selected.developer_slug &&
//           item.developer_slug &&
//           selected.developer_slug === item.developer_slug;

//         const sameType =
//           selected.property_type &&
//           item.property_type &&
//           selected.property_type === item.property_type;

//         return (
//           sameLocation ||
//           sameShortLocation ||
//           sameCity ||
//           sameDeveloper ||
//           sameType
//         );
//       });

//       return related.slice(0, 6);
//     }

//     const keyword = normalizeText(filters.keyword || "");
//     const city = normalizeText(filters.city || "");
//     const location = normalizeText(filters.location || "");
//     const propertyType = normalizeText(filters.propertyType || "");

//     let fallback = properties.filter((item) => {
//       const searchableText = normalizeText(
//         [
//           item.title,
//           item.city,
//           item.short_location,
//           item.location,
//           item.full_address,
//           item.developer_name,
//           item.developer_slug,
//           item.property_type,
//         ].join(" ")
//       );

//       const locationValue =
//         item.short_location || item.location || item.full_address || "";

//       const keywordMatch = keyword ? searchableText.includes(keyword) : false;
//       const cityMatch = city ? normalizeText(item.city) === city : false;
//       const locationMatch = location
//         ? normalizeText(locationValue).includes(location)
//         : false;
//       const typeMatch = propertyType
//         ? normalizeText(item.property_type) === propertyType
//         : false;

//       return keywordMatch || cityMatch || locationMatch || typeMatch;
//     });

//     if (fallback.length === 0) {
//       fallback = [...properties].sort(
//         (a, b) =>
//           new Date(b.posting_date || 0).getTime() -
//           new Date(a.posting_date || 0).getTime()
//       );
//     }

//     return fallback.slice(0, 6);
//   }, [filteredProperties, properties, filters]);

//   const renderCard = (property) => {
//     const sellerPhone = extractSellerPhone(property);

//     return (
//       <div
//         className="box-house hover-img"
//         style={{
//           borderRadius: "22px",
//           overflow: "hidden",
//           background: "#fff",
//           boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
//         }}
//       >
//         <div className="image-wrap" style={{ position: "relative" }}>
//           <Link
//             href={`/property-detail-v1/${property.id}`}
//             onClick={() => addView(property.id)}
//           >
//             <Image
//               className="lazyload"
//               alt={property.title || "property"}
//               src={property.imageSrc || "/images/home/house-1.jpg"}
//               width={600}
//               height={401}
//               style={{ width: "100%", height: "280px", objectFit: "cover" }}
//             />
//           </Link>

//           <ul
//             className="box-tag flex gap-8"
//             style={{
//               position: "absolute",
//               top: 14,
//               left: 14,
//               zIndex: 2,
//             }}
//           >
//             {property.property_label ? (
//               <li className="flat-tag text-4 bg-main fw-6 text_white">
//                 {property.property_label}
//               </li>
//             ) : null}
//             <li className="flat-tag text-4 bg-3 fw-6 text_white">
//               {property.property_status === "for-rent" ? "For Rent" : "For Sale"}
//             </li>
//           </ul>

//           <div
//             style={{
//               position: "absolute",
//               right: 16,
//               top: 16,
//               display: "flex",
//               gap: 12,
//               zIndex: 3,
//             }}
//           >
//             <button
//               type="button"
//               onClick={() => toggleFavorite(property.id)}
//               style={actionBtnStyle}
//               title="Favorite"
//             >
//               <i
//                 className="icon-save"
//                 style={{
//                   fontSize: "20px",
//                   color: property.is_favorite ? "#ff8c5a" : "#ffffff",
//                 }}
//               />
//             </button>

//             <button
//               type="button"
//               onClick={() => toggleLiked(property.id)}
//               style={actionBtnStyle}
//               title="Like"
//             >
//               <i
//                 className="icon-heart"
//                 style={{
//                   fontSize: "20px",
//                   color: property.is_liked ? "#ff8c5a" : "#ffffff",
//                 }}
//               />
//             </button>

//             {sellerPhone ? (
//               <a
//                 href={`tel:${sellerPhone}`}
//                 style={actionBtnStyle}
//                 title="Call"
//               >
//                 <i
//                   className="icon-phone"
//                   style={{ fontSize: "20px", color: "#fff" }}
//                 />
//               </a>
//             ) : null}
//           </div>
//         </div>

//         <div className="content">
//           <h5 className="title">
//             <Link
//               href={`/property-detail-v1/${property.id}`}
//               onClick={() => addView(property.id)}
//             >
//               {property.title}
//             </Link>
//           </h5>

//           <p className="location text-1 line-clamp-1">
//             <i className="icon-location" />{" "}
//             {property.short_location || property.location || property.full_address}
//           </p>

//           <div
//             style={{
//               background: "#f4efec",
//               borderRadius: "12px",
//               padding: "10px 14px",
//               marginBottom: "12px",
//               fontSize: "14px",
//             }}
//           >
//             <strong>Configuration:</strong> {property.configuration_text}
//           </div>

//           <ul className="meta-list flex">
//             <li className="text-1 flex">
//               <span>{property.bedrooms || 0}</span>Beds
//             </li>
//             <li className="text-1 flex">
//               <span>{property.bathrooms || 0}</span>Baths
//             </li>
//             <li className="text-1 flex">
//               <span>{property.carpet_area || property.size_sqft || 0}</span>Sqft
//             </li>
//           </ul>

//           <div
//             className="bot"
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               gap: 14,
//               borderTop: "1px solid #eee",
//               paddingTop: 16,
//             }}
//           >
//             <h5 className="price" style={{ margin: 0 }}>
//               {formatPrice(property.price)}
//             </h5>

//             <div className="wrap-btn flex gap-8">
//               <Link
//                 href={`/property-detail-v1/${property.id}`}
//                 className="tf-btn style-border pd-4"
//                 onClick={() => addView(property.id)}
//               >
//                 Details
//               </Link>

//               <button
//                 type="button"
//                 className="tf-btn pd-4"
//                 onClick={() => openBookingModal(property)}
//                 style={{
//                   background: "#f28c52",
//                   color: "#fff",
//                   border: "1px solid #f28c52",
//                 }}
//               >
//                 Book Visit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <section className="section-listing tf-spacing-1">
//         <div className="tf-container">
//           <div className="row">
//             <div className="col-12">
//               <div className="heading-section text-center">
//                 <h2 className="title split-text effect-right">
//                   <SplitTextAnimation text="Today’s Luxury Listings" />
//                 </h2>
//                 <p className="text-1 split-text split-lines-transform">
//                   {loading
//                     ? "Loading projects..."
//                     : `Showing ${filteredProperties.length} filtered project${
//                         filteredProperties.length === 1 ? "" : "s"
//                       }.`}
//                 </p>
//               </div>

//               <div className="tf-layout-mobile-md md-col-2 lg-col-3">
//                 {filteredProperties.slice(0, 9).map((property) => (
//                   <div key={property.id}>{renderCard(property)}</div>
//                 ))}
//               </div>

//               {!loading && filteredProperties.length === 0 && (
//                 <div className="text-center mt-20">
//                   <p className="text-1">
//                     No exact properties found for selected filters. Showing recommended projects below.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section-listing tf-spacing-1 pt-0">
//         <div className="tf-container">
//           <div className="heading-section text-center">
//             <h2 className="title">
//               {filteredProperties.length > 0 ? "Related Projects" : "Recommended Projects"}
//             </h2>
//             <p className="text-1">
//               {filteredProperties.length > 0
//                 ? "Based on location, city, developer, and project type."
//                 : "We couldn’t find an exact match, so here are some relevant properties for you."}
//             </p>
//           </div>

//           <div className="tf-layout-mobile-md md-col-2 lg-col-3">
//             {relatedProjects.map((property) => (
//               <div key={property.id}>{renderCard(property)}</div>
//             ))}
//           </div>

//           {relatedProjects.length === 0 && !loading && (
//             <div className="text-center mt-20">
//               <p className="text-1">No related or recommended projects found.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {bookingOpen && selectedProperty && (
//         <div
//           className="modal fade show"
//           style={{
//             display: "block",
//             background: "rgba(0,0,0,0.5)",
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
//     </>
//   );
// }




"use client";

import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import React, { useEffect, useMemo, useState } from "react";
import { apiGet, apiPost } from "../../lib/api";

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

function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
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

function getResultsArray(response) {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.results)) return response.results;
  if (Array.isArray(response?.data)) return response.data;
  return [];
}

function extractImage(property) {
  const primaryImage = Array.isArray(property.images)
    ? property.images.find((img) => img.is_primary)
    : null;

  return (
    property.image ||
    property.imageSrc ||
    property.featured_image ||
    property.cover_image ||
    property.thumbnail ||
    primaryImage?.image_url ||
    primaryImage?.image ||
    property.images?.[0]?.image_url ||
    property.images?.[0]?.image ||
    "/images/home/house-1.jpg"
  );
}

function extractSellerPhone(property) {
  return (
    property.seller_phone ||
    property.phone ||
    property.contact_phone ||
    property.contact_number ||
    property.contact_seller_phone ||
    property.contact_seller?.phone ||
    property.contact_seller?.office_number ||
    property.fallback_sellers?.[0]?.phone ||
    ""
  );
}

function extractConfigurations(property) {
  if (property.configuration) return property.configuration;
  if (property.configuration_text) return property.configuration_text;

  if (property.bedrooms) {
    return `${property.bedrooms} BHK`;
  }

  if (property.property_type) return property.property_type;

  return "Configuration on request";
}

function getPropertyTitle(property) {
  return (
    property?.title ||
    property?.project_name ||
    property?.property_name ||
    property?.project_title ||
    property?.property_title ||
    property?.name ||
    ""
  );
}

function getLocationValue(property) {
  return (
    property?.short_location ||
    property?.location ||
    property?.neighborhood ||
    property?.full_address ||
    property?.address ||
    ""
  );
}

function getPropertySearchText(property) {
  return normalizeText(
    [
      property.title,
      property.project_name,
      property.property_name,
      property.project_title,
      property.property_title,
      property.name,
      property.city,
      property.city_slug,
      property.state,
      property.country,
      property.neighborhood,
      property.short_location,
      property.location,
      property.full_address,
      property.address,
      property.zip_code,
      property.developer_name,
      property.developer_slug,
      property.property_type,
      property.property_status,
      property.property_label,
      property.property_code,
    ].join(" ")
  );
}

function hasActiveFilters(filters = {}) {
  return Boolean(
    filters.keyword ||
      filters.city ||
      filters.location ||
      filters.propertyType ||
      filters.propertyStatus ||
      filters.bedrooms ||
      filters.bathrooms ||
      (Array.isArray(filters.amenities) && filters.amenities.length > 0)
  );
}

function getPropertyLocationScore(property, userGeoText) {
  if (!userGeoText) return 0;

  const propertyCity = normalizeText(property.city);
  const propertyState = normalizeText(property.state);
  const propertyNeighborhood = normalizeText(property.neighborhood);
  const propertyShortLocation = normalizeText(property.short_location);
  const propertyLocation = normalizeText(property.location);
  const propertyFullAddress = normalizeText(property.full_address);
  const propertyZipCode = normalizeText(property.zip_code);

  const userCity = normalizeText(userGeoText.city);
  const userLocality = normalizeText(userGeoText.locality);
  const userPrincipalSubdivision = normalizeText(
    userGeoText.principalSubdivision
  );
  const userPostcode = normalizeText(userGeoText.postcode);

  let score = 0;

  if (userCity && propertyCity && propertyCity === userCity) score += 100;
  if (userCity && propertyLocation.includes(userCity)) score += 80;
  if (userCity && propertyFullAddress.includes(userCity)) score += 80;
  if (userCity && propertyShortLocation.includes(userCity)) score += 70;

  if (userLocality && propertyNeighborhood.includes(userLocality)) score += 95;
  if (userLocality && propertyShortLocation.includes(userLocality)) score += 95;
  if (userLocality && propertyLocation.includes(userLocality)) score += 90;
  if (userLocality && propertyFullAddress.includes(userLocality)) score += 90;

  if (
    userPrincipalSubdivision &&
    propertyState &&
    propertyState === userPrincipalSubdivision
  ) {
    score += 40;
  }

  if (userPostcode && propertyZipCode && propertyZipCode === userPostcode) {
    score += 120;
  }

  return score;
}

const actionBtnStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(35,35,35,0.55)",
  backdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
};


const cardTextColor = "#111827";
const cardMutedColor = "#6b7280";
const cardOrange = "#f28c52";
export default function Properties({ filters = {} }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [userGeoText, setUserGeoText] = useState(null);
  const [locationStatus, setLocationStatus] = useState("idle");

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

  const loadProperties = async () => {
    try {
      setLoading(true);

      const res = await apiGet("/admindashboard/properties/");
      const list = getResultsArray(res);

      const visibleProperties = list.filter((property) => {
        const postStatus = normalizeText(property?.post_status);
        const isApproved = property?.is_approved === true;

        return postStatus === "publish" && isApproved;
      });

      let favoriteIds = [];
      let likedIds = [];

      if (user?.id) {
        try {
          const [favRes, likedRes] = await Promise.all([
            apiGet(`/admindashboard/customer/${user.id}/favorite-properties/`),
            apiGet(`/admindashboard/customer/${user.id}/liked-videos/`),
          ]);

          const favList = getResultsArray(favRes);
          const likedList = getResultsArray(likedRes);

          favoriteIds = favList.map((item) => item.id);
          likedIds = likedList.map((item) => item.id);
        } catch (error) {
          console.error("Favorite/liked fetch error:", error);
        }
      }

      const merged = visibleProperties.map((property) => ({
        ...property,
        title: getPropertyTitle(property),
        imageSrc: extractImage(property),
        seller_phone: extractSellerPhone(property),
        configuration_text: extractConfigurations(property),
        is_favorite: property.is_favorite || favoriteIds.includes(property.id),
        is_liked: likedIds.includes(property.id),
      }));

      setProperties(merged);
    } catch (error) {
      console.error("Properties fetch error:", error);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  const detectUserLocation = () => {
    if (typeof window === "undefined") return;

    if (!navigator.geolocation) {
      setLocationStatus("not-supported");
      return;
    }

    setLocationStatus("requesting");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );

          const data = await response.json();

          const geoText = {
            city:
              data.city ||
              data.locality ||
              data.localityInfo?.administrative?.[2]?.name ||
              "",
            locality:
              data.locality ||
              data.localityInfo?.informative?.[0]?.name ||
              "",
            principalSubdivision: data.principalSubdivision || "",
            postcode: data.postcode || "",
            countryName: data.countryName || "",
          };

          setUserGeoText(geoText);
          setLocationStatus("detected");
        } catch (error) {
          console.error("Reverse geocode error:", error);
          setLocationStatus("failed");
        }
      },
      (error) => {
        console.error("Location permission error:", error);
        setLocationStatus("denied");
      },
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 1000 * 60 * 30,
      }
    );
  };

  useEffect(() => {
    loadProperties();
  }, []);

  useEffect(() => {
    detectUserLocation();
  }, []);

  const toggleFavorite = async (id) => {
    if (!user?.id) {
      alert("Please login as customer first.");
      return;
    }

    try {
      const res = await apiPost("/admindashboard/customer/toggle-favorite/", {
        user_id: user.id,
        property_id: id,
      });

      setProperties((prev) =>
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
      alert(error.message || "Failed to update favorite.");
    }
  };

  const toggleLiked = async (id) => {
    if (!user?.id) {
      alert("Please login as customer first.");
      return;
    }

    try {
      const res = await apiPost("/admindashboard/customer/like-video/", {
        user_id: user.id,
        property_id: id,
      });

      setProperties((prev) =>
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
      alert(error.message || "Failed to update liked item.");
    }
  };

  const addView = async (propertyId) => {
    if (!user?.id) return;

    try {
      await apiPost("/admindashboard/customer/add-view/", {
        user_id: user.id,
        property_id: propertyId,
      });
    } catch (error) {
      console.error("View tracking error:", error);
    }
  };

  const openBookingModal = (property) => {
    if (!user?.id) {
      alert("Please login as customer first.");
      return;
    }

    setSelectedProperty(property);
    setBookingForm({
      name: user?.full_name || user?.username || user?.name || "",
      phone: user?.phone || "",
      visit_date: "",
      visit_time: "",
      message: `Interested in site visit for ${
        property?.title || "this property"
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

      await apiPost("/admindashboard/customer/book-visit/", {
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

  const filteredProperties = useMemo(() => {
    let data = [...properties];

    data = data.filter((property) => {
      const locationValue = getLocationValue(property);
      const searchableText = getPropertySearchText(property);

      const keywordMatch =
        !filters.keyword || searchableText.includes(normalizeText(filters.keyword));

      const cityMatch =
        !filters.city ||
        normalizeText(property.city) === normalizeText(filters.city) ||
        normalizeText(property.city_slug) === normalizeText(filters.city);

      const locationMatch =
        !filters.location ||
        normalizeText(locationValue).includes(normalizeText(filters.location));

      const typeMatch =
        !filters.propertyType ||
        normalizeText(property.property_type) ===
          normalizeText(filters.propertyType);

      const statusMatch =
        !filters.propertyStatus ||
        normalizeText(property.property_status) ===
          normalizeText(filters.propertyStatus);

      const bedroomsMatch = matchesCountFilter(
        property.bedrooms,
        filters.bedrooms
      );

      const bathroomsMatch = matchesCountFilter(
        property.bathrooms,
        filters.bathrooms
      );

      const price = toNumber(property.price);
      const area = toNumber(property.carpet_area || property.size_sqft);

      const priceRange = filters.priceRange || [0, 500000000];
      const areaRange = filters.areaRange || [0, 500000];

      const priceMatch = price >= priceRange[0] && price <= priceRange[1];
      const areaMatch = area >= areaRange[0] && area <= areaRange[1];

      const projectAmenities = Array.isArray(property.amenities)
        ? property.amenities
        : [];

      const amenitiesMatch =
        !filters.amenities ||
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

    const activeFilters = hasActiveFilters(filters);

    if (!activeFilters && userGeoText) {
      data.sort((a, b) => {
        const scoreA = getPropertyLocationScore(a, userGeoText);
        const scoreB = getPropertyLocationScore(b, userGeoText);

        if (scoreB !== scoreA) return scoreB - scoreA;

        return (
          new Date(b.posting_date || 0).getTime() -
          new Date(a.posting_date || 0).getTime()
        );
      });
    } else {
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
    }

    return data;
  }, [properties, filters, userGeoText]);

  const locationMatchedCount = useMemo(() => {
    if (!userGeoText || hasActiveFilters(filters)) return 0;

    return properties.filter(
      (property) => getPropertyLocationScore(property, userGeoText) > 0
    ).length;
  }, [properties, userGeoText, filters]);

  const relatedProjects = useMemo(() => {
    if (filteredProperties.length > 0) {
      const selected = filteredProperties[0];

      const related = properties.filter((item) => {
        if (item.id === selected.id) return false;

        const sameLocation =
          selected.location &&
          item.location &&
          normalizeText(item.location) === normalizeText(selected.location);

        const sameShortLocation =
          selected.short_location &&
          item.short_location &&
          normalizeText(item.short_location) ===
            normalizeText(selected.short_location);

        const sameCity =
          selected.city &&
          item.city &&
          normalizeText(item.city) === normalizeText(selected.city);

        const sameDeveloper =
          selected.developer_slug &&
          item.developer_slug &&
          selected.developer_slug === item.developer_slug;

        const sameType =
          selected.property_type &&
          item.property_type &&
          selected.property_type === item.property_type;

        return (
          sameLocation ||
          sameShortLocation ||
          sameCity ||
          sameDeveloper ||
          sameType
        );
      });

      return related.slice(0, 6);
    }

    let fallback = [...properties].sort(
      (a, b) =>
        new Date(b.posting_date || 0).getTime() -
        new Date(a.posting_date || 0).getTime()
    );

    return fallback.slice(0, 6);
  }, [filteredProperties, properties]);

  const renderCard = (property) => {
    const sellerPhone = extractSellerPhone(property);

    return (
      <div
          className="box-house hover-img"
          style={{
            borderRadius: "22px",
            overflow: "hidden",
            background: "#ffffff",
            color: "#111827",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
        >
        <div className="image-wrap" style={{ position: "relative" }}>
          <Link
            href={`/property-detail-v1/${property.id}`}
            onClick={() => addView(property.id)}
          >
            <Image
              className="lazyload"
              alt={property.title || "property"}
              src={property.imageSrc || "/images/home/house-1.jpg"}
              width={600}
              height={401}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
              }}
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
            {property.property_label ? (
              <li className="flat-tag text-4 bg-main fw-6 text_white">
                {property.property_label}
              </li>
            ) : null}

            <li className="flat-tag text-4 bg-3 fw-6 text_white">
              {property.property_status === "for-rent" ? "For Rent" : "For Sale"}
            </li>
          </ul>

          <div
            style={{
              position: "absolute",
              right: 16,
              top: 16,
              display: "flex",
              gap: 12,
              zIndex: 3,
            }}
          >
            <button
              type="button"
              onClick={() => toggleFavorite(property.id)}
              style={actionBtnStyle}
              title="Favorite"
            >
              <i
                className="icon-save"
                style={{
                  fontSize: "20px",
                  color: property.is_favorite ? "#ff8c5a" : "#ffffff",
                }}
              />
            </button>

            <button
              type="button"
              onClick={() => toggleLiked(property.id)}
              style={actionBtnStyle}
              title="Like"
            >
              <i
                className="icon-heart"
                style={{
                  fontSize: "20px",
                  color: property.is_liked ? "#ff8c5a" : "#ffffff",
                }}
              />
            </button>

            {sellerPhone ? (
              <a href={`tel:${sellerPhone}`} style={actionBtnStyle} title="Call">
                <i
                  className="icon-phone"
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                  }}
                />
              </a>
            ) : null}
          </div>
        </div>

        <div
  className="content"
  style={{
    background: "#ffffff",
    color: cardTextColor,
    padding: "28px 28px 26px",
  }}
>
  <h5
    className="title"
    style={{
      marginBottom: "12px",
      color: cardTextColor,
      fontWeight: 700,
    }}
  >
    <Link
      href={`/property-detail-v1/${property.id}`}
      onClick={() => addView(property.id)}
      style={{
        color: cardTextColor,
        textDecoration: "none",
      }}
    >
      {property.title || "Untitled Property"}
    </Link>
  </h5>

  <p
    className="location text-1 line-clamp-1"
    style={{
      color: cardMutedColor,
      marginBottom: "18px",
      display: "flex",
      alignItems: "center",
      gap: "7px",
    }}
  >
    <i
      className="icon-location"
      style={{
        color: cardMutedColor,
      }}
    />{" "}
    {property.short_location ||
      property.location ||
      property.neighborhood ||
      property.full_address ||
      "Location on request"}
  </p>

  <div
    style={{
      background: "#f4efec",
      borderRadius: "12px",
      padding: "10px 14px",
      marginBottom: "12px",
      fontSize: "14px",
      color: cardTextColor,
    }}
  >
    <strong style={{ color: "#4b5563" }}>Configuration:</strong>{" "}
    <span style={{ color: cardTextColor }}>
      {property.configuration_text || "Configuration on request"}
    </span>
  </div>

  <ul
    className="meta-list flex"
    style={{
      color: cardMutedColor,
      marginBottom: "18px",
    }}
  >
    <li
      className="text-1 flex"
      style={{
        color: cardMutedColor,
      }}
    >
      <span style={{ color: cardTextColor, marginRight: "4px" }}>
        {property.bedrooms || 0}
      </span>
      Beds
    </li>

    <li
      className="text-1 flex"
      style={{
        color: cardMutedColor,
      }}
    >
      <span style={{ color: cardTextColor, marginRight: "4px" }}>
        {property.bathrooms || 0}
      </span>
      Baths
    </li>

    <li
      className="text-1 flex"
      style={{
        color: cardMutedColor,
      }}
    >
      <span style={{ color: cardTextColor, marginRight: "4px" }}>
        {property.carpet_area || property.size_sqft || 0}
      </span>
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
      borderTop: "1px solid #eeeeee",
      paddingTop: 16,
    }}
  >
    <h5
      className="price"
      style={{
        margin: 0,
        color: cardOrange,
        fontWeight: 700,
      }}
    >
      {formatPrice(property.price)}
    </h5>

    <div className="wrap-btn flex gap-8">
      <Link
        href={`/property-detail-v1/${property.id}`}
        className="tf-btn style-border pd-4"
        onClick={() => addView(property.id)}
        style={{
          color: "#ff6a00",
          border: "1px solid #ff6a00",
          background: "#ffffff",
          textDecoration: "none",
        }}
      >
        Details
      </Link>

      <button
        type="button"
        className="tf-btn pd-4"
        onClick={() => openBookingModal(property)}
        style={{
          background: cardOrange,
          color: "#ffffff",
          border: `1px solid ${cardOrange}`,
        }}
      >
        Book Visit
      </button>
    </div>
  </div>
</div>
      </div>
    );
  };

  const locationMessage = useMemo(() => {
    if (hasActiveFilters(filters)) return null;

    if (locationStatus === "requesting") {
      return "Detecting your location to show nearby projects...";
    }

    if (locationStatus === "detected" && userGeoText) {
      const place =
        userGeoText.locality ||
        userGeoText.city ||
        userGeoText.principalSubdivision ||
        "";

      if (locationMatchedCount > 0 && place) {
        return `Showing projects around ${place} first.`;
      }

      if (place) {
        return `No exact project found around ${place}, showing latest projects.`;
      }
    }

    if (locationStatus === "denied") {
      return "Location permission not allowed. Showing latest projects.";
    }

    return null;
  }, [locationStatus, userGeoText, locationMatchedCount, filters]);

  return (
    <>
      <section className="section-listing tf-spacing-1">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center">
                <h2 className="title split-text effect-right">
                  <SplitTextAnimation text="Today’s Luxury Listings" />
                </h2>

                <p className="text-1 split-text split-lines-transform">
                  {loading
                    ? "Loading projects..."
                    : `Showing ${filteredProperties.length} filtered project${
                        filteredProperties.length === 1 ? "" : "s"
                      }.`}
                </p>

                {locationMessage ? (
                  <p
                    className="text-1"
                    style={{
                      marginTop: "8px",
                      color: "#f28c52",
                      fontWeight: 600,
                    }}
                  >
                    {locationMessage}
                  </p>
                ) : null}
              </div>

              <div className="tf-layout-mobile-md md-col-2 lg-col-3">
                {filteredProperties.slice(0, 9).map((property) => (
                  <div key={property.id}>{renderCard(property)}</div>
                ))}
              </div>

              {!loading && filteredProperties.length === 0 && (
                <div className="text-center mt-20">
                  <p className="text-1">
                    No exact properties found for selected filters. Showing
                    recommended projects below.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-listing tf-spacing-1 pt-0">
        <div className="tf-container">
          <div className="heading-section text-center">
            <h2 className="title">
              {filteredProperties.length > 0
                ? "Related Projects"
                : "Recommended Projects"}
            </h2>

            <p className="text-1">
              {filteredProperties.length > 0
                ? "Based on location, city, developer, and project type."
                : "We couldn’t find an exact match, so here are some relevant properties for you."}
            </p>
          </div>

          <div className="tf-layout-mobile-md md-col-2 lg-col-3">
            {relatedProjects.map((property) => (
              <div key={property.id}>{renderCard(property)}</div>
            ))}
          </div>

          {relatedProjects.length === 0 && !loading && (
            <div className="text-center mt-20">
              <p className="text-1">No related or recommended projects found.</p>
            </div>
          )}
        </div>
      </section>

      {bookingOpen && selectedProperty && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
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
    </>
  );
}