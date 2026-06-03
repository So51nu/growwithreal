// // // "use client";

// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import React, { useEffect, useState } from "react";
// // // import { apiPost } from "../lib/api";

// // // function formatPrice(price) {
// // //   const num = Number(price || 0);
// // //   if (!num) return "Price on request";
// // //   if (num >= 10000000) {
// // //     return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
// // //   }
// // //   if (num >= 100000) {
// // //     return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
// // //   }
// // //   return `₹${num.toLocaleString("en-IN")}`;
// // // }

// // // function getStoredUser() {
// // //   if (typeof window === "undefined") return null;
// // //   try {
// // //     return JSON.parse(localStorage.getItem("userData") || "null");
// // //   } catch {
// // //     return null;
// // //   }
// // // }

// // // function getImage(property) {
// // //   return (
// // //     property?.image ||
// // //     property?.imageSrc ||
// // //     property?.featured_image ||
// // //     property?.cover_image ||
// // //     property?.thumbnail ||
// // //     "/images/home/house-1.jpg"
// // //   );
// // // }

// // // function getLocation(property) {
// // //   return (
// // //     property?.short_location ||
// // //     property?.location ||
// // //     property?.full_address ||
// // //     "Location on request"
// // //   );
// // // }

// // // function getConfiguration(property) {
// // //   if (property?.configuration) return property.configuration;
// // //   if (property?.configuration_text) return property.configuration_text;
// // //   if (property?.bedrooms) return `${property.bedrooms} BHK`;
// // //   if (property?.property_type) return property.property_type;
// // //   return "Configuration on request";
// // // }

// // // function getPhone(property) {
// // //   return (
// // //     property?.seller_phone ||
// // //     property?.phone ||
// // //     property?.contact_phone ||
// // //     property?.contact_number ||
// // //     property?.contact_seller_phone ||
// // //     property?.contact_seller?.phone ||
// // //     property?.contact_seller?.office_number ||
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

// // // export default function PropertyGridItems({
// // //   properties = [],
// // //   onFavoriteUpdated = null,
// // // }) {
// // //   const user = getStoredUser();

// // //   const [items, setItems] = useState(
// // //     properties.map((property) => ({
// // //       ...property,
// // //       is_favorite: !!property?.is_favorite,
// // //       is_liked: !!property?.is_liked,
// // //     }))
// // //   );

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

// // //   useEffect(() => {
// // //     setItems(
// // //       properties.map((property) => ({
// // //         ...property,
// // //         is_favorite: !!property?.is_favorite,
// // //         is_liked: !!property?.is_liked,
// // //       }))
// // //     );
// // //   }, [properties]);

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

// // //       setItems((prev) =>
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

// // //       if (onFavoriteUpdated) onFavoriteUpdated();
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

// // //       setItems((prev) =>
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

// // //   const openBookingModal = (property) => {
// // //     if (!user?.id) {
// // //       alert("Please login as customer first.");
// // //       return;
// // //     }

// // //     setSelectedProperty(property);
// // //     setBookingForm({
// // //       name: user?.full_name || user?.username || user?.name || "",
// // //       phone: user?.phone || "",
// // //       visit_date: "",
// // //       visit_time: "",
// // //       message: `Interested in site visit for ${property?.title || "this property"}`,
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

// // //   return (
// // //     <>
// // //       {items.map((property) => {
// // //         const sellerPhone = getPhone(property);

// // //         return (
// // //           <div
// // //             className="box-house hover-img"
// // //             key={property.id}
// // //             style={{
// // //               borderRadius: "22px",
// // //               overflow: "hidden",
// // //               background: "#fff",
// // //               boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
// // //             }}
// // //           >
// // //             <div className="image-wrap" style={{ position: "relative" }}>
// // //               <Link
// // //                 href={`/property-detail-v1/${property.id}`}
// // //                 onClick={() => handleViewed(property.id)}
// // //               >
// // //                 <Image
// // //                   className="lazyload"
// // //                   alt={property.title || "Property"}
// // //                   src={getImage(property)}
// // //                   width={600}
// // //                   height={401}
// // //                   style={{ width: "100%", height: "280px", objectFit: "cover" }}
// // //                 />
// // //               </Link>

// // //               <ul
// // //                 className="box-tag flex gap-8"
// // //                 style={{
// // //                   position: "absolute",
// // //                   top: 14,
// // //                   left: 14,
// // //                   zIndex: 2,
// // //                 }}
// // //               >
// // //                 {property.property_label ? (
// // //                   <li className="flat-tag text-4 bg-main fw-6 text_white">
// // //                     {property.property_label}
// // //                   </li>
// // //                 ) : null}

// // //                 <li className="flat-tag text-4 bg-3 fw-6 text_white">
// // //                   {property.property_status === "for-rent" ? "For Rent" : "For Sale"}
// // //                 </li>
// // //               </ul>

// // //               <div
// // //                 style={{
// // //                   position: "absolute",
// // //                   right: 16,
// // //                   top: 16,
// // //                   display: "flex",
// // //                   gap: 12,
// // //                   zIndex: 5,
// // //                 }}
// // //               >
// // //                 <button
// // //                   type="button"
// // //                   style={actionBtnStyle}
// // //                   onClick={() => handleFavorite(property.id)}
// // //                   title="Favorite"
// // //                 >
// // //                   <BookmarkIcon active={property.is_favorite} />
// // //                 </button>

// // //                 <button
// // //                   type="button"
// // //                   style={actionBtnStyle}
// // //                   onClick={() => handleLiked(property.id)}
// // //                   title="Like"
// // //                 >
// // //                   <HeartIcon active={property.is_liked} />
// // //                 </button>

// // //                 {sellerPhone ? (
// // //                   <a
// // //                     href={`tel:${sellerPhone}`}
// // //                     style={actionBtnStyle}
// // //                     title="Call"
// // //                   >
// // //                     <PhoneIcon />
// // //                   </a>
// // //                 ) : null}
// // //               </div>
// // //             </div>

// // //             <div className="content">
// // //               <h5 className="title">
// // //                 <Link
// // //                   href={`/property-detail-v1/${property.id}`}
// // //                   onClick={() => handleViewed(property.id)}
// // //                 >
// // //                   {property.title}
// // //                 </Link>
// // //               </h5>

// // //               <p className="location text-1 flex items-center gap-6">
// // //                 <i className="icon-location" /> {getLocation(property)}
// // //               </p>

// // //               <div
// // //                 style={{
// // //                   background: "#f4efec",
// // //                   borderRadius: "12px",
// // //                   padding: "10px 14px",
// // //                   marginBottom: "12px",
// // //                   fontSize: "14px",
// // //                 }}
// // //               >
// // //                 <strong>Configuration:</strong> {getConfiguration(property)}
// // //               </div>

// // //               <ul className="meta-list flex">
// // //                 <li className="text-1 flex">
// // //                   <span>{property.bedrooms || 0}</span>Beds
// // //                 </li>
// // //                 <li className="text-1 flex">
// // //                   <span>{property.bathrooms || 0}</span>Baths
// // //                 </li>
// // //                 <li className="text-1 flex">
// // //                   <span>{property.size_sqft || property.carpet_area || 0}</span>Sqft
// // //                 </li>
// // //               </ul>

// // //               <div
// // //                 className="bot"
// // //                 style={{
// // //                   display: "flex",
// // //                   justifyContent: "space-between",
// // //                   alignItems: "center",
// // //                   gap: 14,
// // //                   borderTop: "1px solid #eee",
// // //                   paddingTop: 16,
// // //                 }}
// // //               >
// // //                 <h5 className="price" style={{ margin: 0 }}>
// // //                   {formatPrice(property.price)}
// // //                 </h5>

// // //                 <div className="wrap-btn flex gap-8">
// // //                   <Link
// // //                     href={`/property-detail-v1/${property.id}`}
// // //                     className="tf-btn style-border pd-4"
// // //                     onClick={() => handleViewed(property.id)}
// // //                   >
// // //                     Details
// // //                   </Link>

// // //                   <button
// // //                     type="button"
// // //                     className="tf-btn pd-4"
// // //                     onClick={() => openBookingModal(property)}
// // //                     style={{
// // //                       background: "#f28c52",
// // //                       color: "#fff",
// // //                       border: "1px solid #f28c52",
// // //                     }}
// // //                   >
// // //                     Book Visit
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );
// // //       })}

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
// // //     </>
// // //   );
// // // }




// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useEffect, useMemo, useRef, useState } from "react";
// // import { apiPost } from "../lib/api";
// // import { getPropertyDetailHref } from "../../utlis/propertyUrl";
// // function getArray(value) {
// //   if (Array.isArray(value)) return value;
// //   if (Array.isArray(value?.results)) return value.results;
// //   if (Array.isArray(value?.data)) return value.data;
// //   return [];
// // }

// // function formatPrice(price) {
// //   const num = Number(price || 0);
// //   if (!num) return "Price on request";
// //   if (num >= 10000000) return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
// //   if (num >= 100000) return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
// //   return `₹${num.toLocaleString("en-IN")}`;
// // }

// // function getStoredUser() {
// //   if (typeof window === "undefined") return null;
// //   try {
// //     return JSON.parse(localStorage.getItem("userData") || "null");
// //   } catch {
// //     return null;
// //   }
// // }

// // function getImage(property) {
// //   const primaryImage = Array.isArray(property?.images)
// //     ? property.images.find((img) => img.is_primary)
// //     : null;

// //   return (
// //     property?.image ||
// //     property?.imageSrc ||
// //     property?.featured_image ||
// //     property?.cover_image ||
// //     property?.thumbnail ||
// //     primaryImage?.image_url ||
// //     primaryImage?.image ||
// //     property?.images?.[0]?.image_url ||
// //     property?.images?.[0]?.image ||
// //     "/images/home/house-1.jpg"
// //   );
// // }

// // function getTitle(property) {
// //   return (
// //     property?.title ||
// //     property?.project_name ||
// //     property?.property_name ||
// //     property?.project_title ||
// //     property?.property_title ||
// //     property?.name ||
// //     "Untitled Property"
// //   );
// // }

// // function getLocation(property) {
// //   return (
// //     property?.short_location ||
// //     property?.location ||
// //     property?.neighborhood ||
// //     property?.full_address ||
// //     property?.address ||
// //     property?.city ||
// //     "Location on request"
// //   );
// // }

// // function normalizeKey(value) {
// //   return String(value || "")
// //     .trim()
// //     .toLowerCase()
// //     .replace(/[^a-z0-9\s-]/g, "")
// //     .replace(/\s+/g, " ");
// // }

// // function getMapGroupTitle(property) {
// //   return (
// //     property?.short_location ||
// //     property?.neighborhood ||
// //     property?.location ||
// //     property?.city ||
// //     property?.full_address ||
// //     "Other Location"
// //   );
// // }

// // function getMapGroupKey(property, coords) {
// //   const placeKey = normalizeKey(
// //     property?.city && (property?.short_location || property?.neighborhood || property?.location)
// //       ? `${property.city}-${property.short_location || property.neighborhood || property.location}`
// //       : property?.short_location || property?.neighborhood || property?.location || property?.city || property?.zip_code
// //   );

// //   if (placeKey) return placeKey;
// //   if (coords?.lat && coords?.lng) return `${Number(coords.lat).toFixed(3)}_${Number(coords.lng).toFixed(3)}`;
// //   return `property-${property?.id || Math.random()}`;
// // }

// // function getConfiguration(property) {
// //   if (property?.configuration) return property.configuration;
// //   if (property?.configuration_text) return property.configuration_text;
// //   if (property?.bedrooms) return `${property.bedrooms} BHK`;
// //   if (property?.property_type) return property.property_type;
// //   return "Configuration on request";
// // }

// // function getPhone(property) {
// //   return (
// //     property?.seller_phone ||
// //     property?.phone ||
// //     property?.contact_phone ||
// //     property?.contact_number ||
// //     property?.contact_seller_phone ||
// //     property?.contact_seller?.phone ||
// //     property?.contact_seller?.office_number ||
// //     property?.fallback_sellers?.[0]?.phone ||
// //     ""
// //   );
// // }

// // function getArea(property) {
// //   return property?.carpet_area || property?.size_sqft || property?.floor_size || 0;
// // }

// // function getPossession(property) {
// //   return property?.possession_date || property?.possessionDate || property?.expiryDate || "On request";
// // }

// // function escapeHtml(value) {
// //   return String(value || "")
// //     .replace(/&/g, "&amp;")
// //     .replace(/</g, "&lt;")
// //     .replace(/>/g, "&gt;")
// //     .replace(/"/g, "&quot;")
// //     .replace(/'/g, "&#039;");
// // }

// // function toNumber(value) {
// //   const num = Number(value);
// //   return Number.isFinite(num) ? num : null;
// // }

// // function extractCoordinatesFromMapUrl(url = "") {
// //   if (!url || typeof url !== "string") return null;

// //   try {
// //     const decoded = decodeURIComponent(url);

// //     const googleEmbed = decoded.match(/!2d(-?\d+(?:\.\d+)?)!3d(-?\d+(?:\.\d+)?)/i);
// //     if (googleEmbed) return { lat: Number(googleEmbed[2]), lng: Number(googleEmbed[1]), source: "map_url" };

// //     const googleAt = decoded.match(/@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/i);
// //     if (googleAt) return { lat: Number(googleAt[1]), lng: Number(googleAt[2]), source: "map_url" };

// //     const bingCp = decoded.match(/cp=(-?\d+(?:\.\d+)?)(?:~|%7E)(-?\d+(?:\.\d+)?)/i);
// //     if (bingCp) return { lat: Number(bingCp[1]), lng: Number(bingCp[2]), source: "map_url" };

// //     const bingPos = decoded.match(/pos\.(-?\d+(?:\.\d+)?)_(-?\d+(?:\.\d+)?)/i);
// //     if (bingPos) return { lat: Number(bingPos[1]), lng: Number(bingPos[2]), source: "map_url" };

// //     const general = decoded.match(/[?&](?:ll|q|query|center)=(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/i);
// //     if (general) return { lat: Number(general[1]), lng: Number(general[2]), source: "map_url" };
// //   } catch {
// //     return null;
// //   }

// //   return null;
// // }

// // const FALLBACK_COORDS = [
// //   { keys: ["sakinaka", "saki naka", "400072"], lat: 19.1033, lng: 72.8875 },
// //   { keys: ["andheri"], lat: 19.1136, lng: 72.8697 },
// //   { keys: ["goregaon west", "400104"], lat: 19.1647, lng: 72.8493 },
// //   { keys: ["goregaon"], lat: 19.1663, lng: 72.8526 },
// //   { keys: ["malad west"], lat: 19.1874, lng: 72.8428 },
// //   { keys: ["malad"], lat: 19.1864, lng: 72.8493 },
// //   { keys: ["borivali west"], lat: 19.234, lng: 72.8456 },
// //   { keys: ["borivali"], lat: 19.229, lng: 72.857 },
// //   { keys: ["kandivali west"], lat: 19.2058, lng: 72.8425 },
// //   { keys: ["kandivali"], lat: 19.2094, lng: 72.8526 },
// //   { keys: ["thane"], lat: 19.2183, lng: 72.9781 },
// //   { keys: ["mulund"], lat: 19.1726, lng: 72.9562 },
// //   { keys: ["mira road", "mira bhayandar"], lat: 19.2952, lng: 72.8544 },
// //   { keys: ["pune"], lat: 18.5204, lng: 73.8567 },
// //   { keys: ["mumbai"], lat: 19.076, lng: 72.8777 },
// //   { keys: ["maharashtra"], lat: 19.7515, lng: 75.7139 },
// // ];

// // function getFallbackCoordinates(property) {
// //   const text = [
// //     property?.title,
// //     property?.short_location,
// //     property?.location,
// //     property?.neighborhood,
// //     property?.full_address,
// //     property?.address,
// //     property?.city,
// //     property?.city_slug,
// //     property?.state,
// //     property?.zip_code,
// //   ]
// //     .filter(Boolean)
// //     .join(" ")
// //     .toLowerCase();

// //   const found = FALLBACK_COORDS.find((item) =>
// //     item.keys.some((key) => text.includes(key.toLowerCase()))
// //   );

// //   if (!found) return null;
// //   return { lat: found.lat, lng: found.lng, source: "fallback" };
// // }

// // function getStaticPropertyCoordinates(property) {
// //   const directLat =
// //     toNumber(property?.latitude) ??
// //     toNumber(property?.lat) ??
// //     toNumber(property?.map_latitude) ??
// //     toNumber(property?.project_latitude);

// //   const directLng =
// //     toNumber(property?.longitude) ??
// //     toNumber(property?.lng) ??
// //     toNumber(property?.map_longitude) ??
// //     toNumber(property?.project_longitude);

// //   if (directLat !== null && directLng !== null) {
// //     return { lat: directLat, lng: directLng, source: "exact" };
// //   }

// //   if (Array.isArray(property?.coordinates) && property.coordinates.length >= 2) {
// //     const lat = toNumber(property.coordinates[0]);
// //     const lng = toNumber(property.coordinates[1]);
// //     if (lat !== null && lng !== null) return { lat, lng, source: "exact" };
// //   }

// //   const fromUrl = extractCoordinatesFromMapUrl(property?.map_embed_url);
// //   if (fromUrl?.lat && fromUrl?.lng) return fromUrl;

// //   return null;
// // }

// // function getGeocodeQuery(property) {
// //   return [
// //     property?.full_address,
// //     property?.address,
// //     property?.location,
// //     property?.short_location,
// //     property?.neighborhood,
// //     property?.city,
// //     property?.state,
// //     property?.zip_code,
// //     property?.country || "India",
// //   ]
// //     .filter(Boolean)
// //     .join(", ")
// //     .replace(/\s+/g, " ")
// //     .trim();
// // }

// // function getGeocodeCacheKey(property) {
// //   return `growl-property-map-${property?.id || "no-id"}-${normalizeKey(getGeocodeQuery(property))}`;
// // }

// // async function resolvePropertyCoordinates(property) {
// //   const staticCoords = getStaticPropertyCoordinates(property);
// //   if (staticCoords) return staticCoords;

// //   const query = getGeocodeQuery(property);
// //   const cacheKey = getGeocodeCacheKey(property);

// //   if (typeof window !== "undefined") {
// //     try {
// //       const cached = localStorage.getItem(cacheKey);
// //       if (cached) {
// //         const parsed = JSON.parse(cached);
// //         if (parsed?.lat && parsed?.lng) return { ...parsed, source: parsed.source || "geocode_cache" };
// //       }
// //     } catch {}
// //   }

// //   if (query && typeof window !== "undefined") {
// //     try {
// //       const response = await fetch(
// //         `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=in&q=${encodeURIComponent(query)}`,
// //         {
// //           headers: { Accept: "application/json" },
// //         }
// //       );

// //       const result = await response.json();

// //       if (Array.isArray(result) && result[0]?.lat && result[0]?.lon) {
// //         const geocoded = {
// //           lat: Number(result[0].lat),
// //           lng: Number(result[0].lon),
// //           source: "dynamic_geocode",
// //         };

// //         try {
// //           localStorage.setItem(cacheKey, JSON.stringify(geocoded));
// //         } catch {}

// //         return geocoded;
// //       }
// //     } catch (error) {
// //       console.warn("Dynamic map geocode failed:", property?.id, error);
// //     }
// //   }

// //   const fallback = getFallbackCoordinates(property);
// //   if (fallback?.lat && fallback?.lng) return fallback;

// //   return null;
// // }

// // function getGoogleMapsUrl(property, lat, lng) {
// //   if (property?.map_embed_url && !property.map_embed_url.includes("/embed")) {
// //     return property.map_embed_url;
// //   }

// //   if (lat && lng) return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

// //   const query = encodeURIComponent(`${getTitle(property)} ${getLocation(property)} ${property?.city || ""}`);
// //   return `https://www.google.com/maps/search/?api=1&query=${query}`;
// // }

// // function loadLeafletAssets() {
// //   return new Promise((resolve, reject) => {
// //     if (typeof window === "undefined") return reject(new Error("Window missing"));

// //     if (window.L) {
// //       resolve(window.L);
// //       return;
// //     }

// //     if (!document.querySelector('link[data-leaflet="true"]')) {
// //       const link = document.createElement("link");
// //       link.rel = "stylesheet";
// //       link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
// //       link.dataset.leaflet = "true";
// //       document.head.appendChild(link);
// //     }

// //     const oldScript = document.querySelector('script[data-leaflet="true"]');
// //     if (oldScript) {
// //       oldScript.addEventListener("load", () => resolve(window.L));
// //       oldScript.addEventListener("error", reject);
// //       return;
// //     }

// //     const script = document.createElement("script");
// //     script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
// //     script.dataset.leaflet = "true";
// //     script.onload = () => resolve(window.L);
// //     script.onerror = reject;
// //     document.body.appendChild(script);
// //   });
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

// // export default function PropertyGridItems({ properties = [], onFavoriteUpdated = null }) {
// //   const user = getStoredUser();
// //   const mapElementRef = useRef(null);
// //   const mapInstanceRef = useRef(null);
// //   const markerLayerRef = useRef(null);
// //   const leafletRef = useRef(null);
// //   const markerRefs = useRef({});

// //   const [items, setItems] = useState(() =>
// //     getArray(properties).map((property) => ({
// //       ...property,
// //       is_favorite: !!property?.is_favorite,
// //       is_liked: !!property?.is_liked,
// //     }))
// //   );

// //   const [activeTab, setActiveTab] = useState("properties");
// //   const [mapReady, setMapReady] = useState(false);
// //   const [userLocation, setUserLocation] = useState(null);
// //   const [dynamicMapPoints, setDynamicMapPoints] = useState([]);
// //   const [mapResolving, setMapResolving] = useState(false);
// //   const [selectedProperty, setSelectedProperty] = useState(null);
// //   const [bookingOpen, setBookingOpen] = useState(false);
// //   const [bookingLoading, setBookingLoading] = useState(false);
// //   const [message, setMessage] = useState("");
// //   const [bookingForm, setBookingForm] = useState({ name: "", phone: "", visit_date: "", visit_time: "", message: "" });

// //   useEffect(() => {
// //     setItems(
// //       getArray(properties).map((property) => ({
// //         ...property,
// //         is_favorite: !!property?.is_favorite,
// //         is_liked: !!property?.is_liked,
// //       }))
// //     );
// //   }, [properties]);

// //   useEffect(() => {
// //     let cancelled = false;

// //     async function buildDynamicMapPoints() {
// //       setMapResolving(true);

// //       const visibleItems = items.filter(
// //         (property) =>
// //           String(property?.post_status || "publish").toLowerCase() === "publish" &&
// //           property?.is_approved !== false
// //       );

// //       const resolvedPoints = [];

// //       for (const property of visibleItems) {
// //         const coords = await resolvePropertyCoordinates(property);

// //         if (cancelled) return;

// //         if (coords?.lat && coords?.lng) {
// //           resolvedPoints.push({
// //             property,
// //             lat: coords.lat,
// //             lng: coords.lng,
// //             key: getMapGroupKey(property, coords),
// //             groupTitle: getMapGroupTitle(property),
// //             source: coords.source,
// //           });
// //         }
// //       }

// //       if (!cancelled) {
// //         setDynamicMapPoints(resolvedPoints);
// //         setMapResolving(false);
// //       }
// //     }

// //     buildDynamicMapPoints();

// //     return () => {
// //       cancelled = true;
// //     };
// //   }, [items]);

// //   const groupedMapPoints = useMemo(() => {
// //     const groups = new Map();

// //     dynamicMapPoints.forEach((point) => {
// //       if (!groups.has(point.key)) {
// //         groups.set(point.key, {
// //           key: point.key,
// //           title: point.groupTitle,
// //           lat: point.lat,
// //           lng: point.lng,
// //           properties: [],
// //         });
// //       }

// //       groups.get(point.key).properties.push(point.property);
// //     });

// //     return Array.from(groups.values()).map((group) => {
// //       const coordsList = dynamicMapPoints
// //         .filter((point) => point.key === group.key)
// //         .map((point) => ({ lat: point.lat, lng: point.lng }));

// //       if (coordsList.length > 1) {
// //         const avgLat = coordsList.reduce((sum, item) => sum + item.lat, 0) / coordsList.length;
// //         const avgLng = coordsList.reduce((sum, item) => sum + item.lng, 0) / coordsList.length;
// //         return { ...group, lat: avgLat, lng: avgLng };
// //       }

// //       return group;
// //     });
// //   }, [dynamicMapPoints]);

// //   const cityInsights = useMemo(() => {
// //     const countMap = new Map();
// //     items.forEach((item) => {
// //       const name = item?.city || item?.short_location || item?.location || "Other";
// //       countMap.set(name, (countMap.get(name) || 0) + 1);
// //     });
// //     return Array.from(countMap.entries()).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
// //   }, [items]);

// //   useEffect(() => {
// //     let cancelled = false;

// //     loadLeafletAssets()
// //       .then((L) => {
// //         if (cancelled || !mapElementRef.current || mapInstanceRef.current) return;

// //         leafletRef.current = L;

// //         const map = L.map(mapElementRef.current, {
// //           zoomControl: true,
// //           scrollWheelZoom: true,
// //         }).setView([19.076, 72.8777], 10);

// //         L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
// //           maxZoom: 19,
// //           attribution: "&copy; OpenStreetMap contributors",
// //         }).addTo(map);

// //         markerLayerRef.current = L.layerGroup().addTo(map);
// //         mapInstanceRef.current = map;
// //         setMapReady(true);

// //         setTimeout(() => map.invalidateSize(), 250);
// //         setTimeout(() => map.invalidateSize(), 900);

// //         if (typeof ResizeObserver !== "undefined") {
// //           const observer = new ResizeObserver(() => map.invalidateSize());
// //           observer.observe(mapElementRef.current);
// //           map._propertyResizeObserver = observer;
// //         }
// //       })
// //       .catch((error) => console.error("Leaflet map load failed:", error));

// //     return () => {
// //       cancelled = true;
// //       const map = mapInstanceRef.current;
// //       if (map?._propertyResizeObserver) map._propertyResizeObserver.disconnect();
// //     };
// //   }, []);

// //   useEffect(() => {
// //     if (typeof window === "undefined" || !navigator.geolocation) return;
// //     navigator.geolocation.getCurrentPosition(
// //       (position) => setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude }),
// //       () => setUserLocation(null),
// //       { enableHighAccuracy: false, timeout: 8000, maximumAge: 1000 * 60 * 30 }
// //     );
// //   }, []);

// //   function createSinglePopupHtml(property, lat, lng) {
// //     const mapsUrl = getGoogleMapsUrl(property, lat, lng);
// //     return `
// //       <div class="property-map-popup-card">
// //         <img src="${escapeHtml(getImage(property))}" alt="${escapeHtml(getTitle(property))}" class="property-map-popup-img" />
// //         <div class="property-map-popup-body">
// //           <h4>${escapeHtml(getTitle(property))}</h4>
// //           <p>${escapeHtml(getLocation(property))}</p>
// //           <h5>${escapeHtml(formatPrice(property.price))}</h5>
// //           <div class="property-map-popup-config">${escapeHtml(getConfiguration(property))}</div>
// //           <div class="property-map-popup-info">
// //             <span><b>Possession</b><br/>${escapeHtml(getPossession(property))}</span>
// //             <span><b>Carpet Area</b><br/>${escapeHtml(getArea(property))} sq.ft.</span>
// //           </div>
// //           <div class="property-map-popup-actions">
// //             <a href="${getPropertyDetailHref(property)}" class="property-map-popup-btn">View Details</a>
// //             <a href="${escapeHtml(mapsUrl)}" target="_blank" rel="noopener noreferrer" class="property-map-popup-link">Open in Google Maps</a>
// //           </div>
// //         </div>
// //       </div>`;
// //   }

// //   function createGroupPopupHtml(group) {
// //     if (group.properties.length === 1) return createSinglePopupHtml(group.properties[0], group.lat, group.lng);

// //     const mapsUrl = getGoogleMapsUrl(group.properties[0], group.lat, group.lng);
// //     const cards = group.properties.slice(0, 12).map((property) => `
// //       <a href="${getPropertyDetailHref(property)}" class="property-map-group-item">
// //         <img src="${escapeHtml(getImage(property))}" alt="${escapeHtml(getTitle(property))}" />
// //         <div>
// //           <h5>${escapeHtml(getTitle(property))}</h5>
// //           <p>${escapeHtml(getLocation(property))}</p>
// //           <strong>${escapeHtml(formatPrice(property.price))}</strong>
// //           <small>View Details</small>
// //         </div>
// //       </a>`).join("");

// //     return `
// //       <div class="property-map-group-popup">
// //         <div class="property-map-group-head">
// //           <h4>${group.properties.length} Projects in ${escapeHtml(group.title || getLocation(group.properties[0]))}</h4>
// //           <p>${escapeHtml(getLocation(group.properties[0]))}</p>
// //           <a href="${escapeHtml(mapsUrl)}" target="_blank" rel="noopener noreferrer">Open this location in Google Maps</a>
// //         </div>
// //         ${cards}
// //       </div>`;
// //   }

// //   useEffect(() => {
// //     if (!mapReady || !leafletRef.current || !mapInstanceRef.current || !markerLayerRef.current) return;

// //     const L = leafletRef.current;
// //     const map = mapInstanceRef.current;
// //     const layer = markerLayerRef.current;

// //     layer.clearLayers();
// //     markerRefs.current = {};
// //     const bounds = [];

// //     groupedMapPoints.forEach((group) => {
// //       const icon = L.divIcon({
// //         className: "property-map-custom-marker-wrap",
// //         html: `<div class="property-map-count-marker">${group.properties.length}</div>`,
// //         iconSize: [46, 46],
// //         iconAnchor: [23, 23],
// //         popupAnchor: [0, -26],
// //       });

// //       const marker = L.marker([group.lat, group.lng], { icon })
// //         .bindPopup(createGroupPopupHtml(group), { maxWidth: 380, minWidth: group.properties.length > 1 ? 320 : 330, className: "property-map-popup" })
// //         .addTo(layer);

// //       marker.on("dblclick", () => {
// //         const mapsUrl = getGoogleMapsUrl(group.properties[0], group.lat, group.lng);
// //         window.open(mapsUrl, "_blank", "noopener,noreferrer");
// //       });

// //       group.properties.forEach((property) => {
// //         markerRefs.current[property.id] = marker;
// //       });
// //       bounds.push([group.lat, group.lng]);
// //     });

// //     if (userLocation?.lat && userLocation?.lng) {
// //       const userIcon = L.divIcon({
// //         className: "property-user-marker-wrap",
// //         html: `<div class="property-user-marker"><span></span></div>`,
// //         iconSize: [28, 28],
// //         iconAnchor: [14, 14],
// //       });
// //       L.marker([userLocation.lat, userLocation.lng], { icon: userIcon }).bindPopup("Your current location").addTo(layer);
// //       bounds.push([userLocation.lat, userLocation.lng]);
// //     }

// //     setTimeout(() => map.invalidateSize(), 100);
// //     if (bounds.length > 0) map.fitBounds(bounds, { padding: [45, 45], maxZoom: 14 });
// //   }, [groupedMapPoints, mapReady, userLocation]);

// //   async function focusPropertyOnMap(property) {
// //     let point = dynamicMapPoints.find((item) => item.property.id === property.id);

// //     if (!point) {
// //       const coords = await resolvePropertyCoordinates(property);
// //       if (!coords || !mapInstanceRef.current) return;

// //       point = {
// //         property,
// //         lat: coords.lat,
// //         lng: coords.lng,
// //         key: getMapGroupKey(property, coords),
// //         groupTitle: getMapGroupTitle(property),
// //       };
// //     }

// //     const marker = markerRefs.current[property.id];

// //     if (!mapInstanceRef.current) return;

// //     mapInstanceRef.current.setView([point.lat, point.lng], 15, { animate: true });

// //     if (marker) {
// //       setTimeout(() => marker.openPopup(), 250);
// //     }
// //   }

// //   async function handleFavorite(id) {
// //     if (!user?.id) {
// //       alert("Please login as customer first.");
// //       return;
// //     }

// //     try {
// //       const res = await apiPost(`/admindashboard/customer/toggle-favorite/`, { user_id: user.id, property_id: id });
// //       setItems((prev) => prev.map((item) => item.id === id ? { ...item, is_favorite: typeof res?.is_favorite === "boolean" ? res.is_favorite : !item.is_favorite } : item));
// //       if (onFavoriteUpdated) onFavoriteUpdated();
// //     } catch (error) {
// //       console.error(error);
// //       alert(error.message || "Favorite update failed");
// //     }
// //   }

// //   async function handleLiked(id) {
// //     if (!user?.id) {
// //       alert("Please login as customer first.");
// //       return;
// //     }

// //     try {
// //       const res = await apiPost(`/admindashboard/customer/like-video/`, { user_id: user.id, property_id: id });
// //       setItems((prev) => prev.map((item) => item.id === id ? { ...item, is_liked: typeof res?.liked === "boolean" ? res.liked : !item.is_liked } : item));
// //     } catch (error) {
// //       console.error(error);
// //       alert(error.message || "Liked update failed");
// //     }
// //   }

// //   async function handleViewed(propertyId) {
// //     if (!user?.id) return;
// //     try {
// //       await apiPost(`/admindashboard/customer/add-view/`, { user_id: user.id, property_id: propertyId });
// //     } catch (error) {
// //       console.error("View tracking failed:", error);
// //     }
// //   }

// //   function openBookingModal(property) {
// //     if (!user?.id) {
// //       alert("Please login as customer first.");
// //       return;
// //     }

// //     setSelectedProperty(property);
// //     setBookingForm({
// //       name: user?.full_name || user?.username || user?.name || "",
// //       phone: user?.phone || "",
// //       visit_date: "",
// //       visit_time: "",
// //       message: `Interested in site visit for ${getTitle(property)}`,
// //     });
// //     setMessage("");
// //     setBookingOpen(true);
// //   }

// //   function closeBookingModal() {
// //     setBookingOpen(false);
// //     setSelectedProperty(null);
// //     setMessage("");
// //   }

// //   function handleBookingChange(e) {
// //     const { name, value } = e.target;
// //     setBookingForm((prev) => ({ ...prev, [name]: value }));
// //   }

// //   async function submitBooking(e) {
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
// //       setTimeout(() => closeBookingModal(), 1000);
// //     } catch (error) {
// //       console.error(error);
// //       setMessage(error.message || "Failed to book visit.");
// //     } finally {
// //       setBookingLoading(false);
// //     }
// //   }

// //   return (
// //     <>
// //       <style jsx global>{`
// //         .property-grid-map-wrapper {
// //           grid-column: 1 / -1 !important;
// //           width: 100% !important;
// //           max-width: 100% !important;
// //           display: block !important;
// //           clear: both !important;
// //         }

// //         .property-map-listing-layout {
// //           display: grid !important;
// //           grid-template-columns: minmax(0, 56%) minmax(420px, 44%) !important;
// //           gap: 18px !important;
// //           align-items: stretch !important;
// //           width: 100% !important;
// //           max-width: 100% !important;
// //           height: calc(100vh - 110px) !important;
// //           min-height: 620px !important;
// //           overflow: hidden !important;
// //         }

// //         .property-map-list-panel {
// //           min-width: 0 !important;
// //           width: 100% !important;
// //           height: 100% !important;
// //           max-height: calc(100vh - 110px) !important;
// //           overflow-y: auto !important;
// //           overflow-x: hidden !important;
// //           padding-right: 8px !important;
// //           scrollbar-width: thin;
// //           scrollbar-color: #f28c52 transparent;
// //         }

// //         .property-map-list-panel::-webkit-scrollbar {
// //           width: 7px;
// //         }

// //         .property-map-list-panel::-webkit-scrollbar-track {
// //           background: transparent;
// //         }

// //         .property-map-list-panel::-webkit-scrollbar-thumb {
// //           background: #f28c52;
// //           border-radius: 99px;
// //         }
// //         .property-map-head { margin-bottom: 22px; }
// //         .property-map-head h2 { font-size: 30px; line-height: 1.2; margin: 0 0 10px; color: #111827; font-weight: 700; }
// //         .property-map-head p { margin: 0 0 14px; color: #4b5563; font-size: 15px; }
// //         .property-map-head-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: #374151; }
// //         .property-map-head-row strong { color: #111827; }

// //         .property-map-list-grid {
// //           display: grid !important;
// //           grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
// //           gap: 24px !important;
// //           width: 100% !important;
// //         }

// //         .property-map-panel {
// //           position: sticky !important;
// //           top: 90px !important;
// //           height: 100% !important;
// //           min-height: 620px !important;
// //           max-height: calc(100vh - 110px) !important;
// //           border-radius: 18px !important;
// //           overflow: hidden !important;
// //           border: 1px solid rgba(0, 0, 0, 0.08) !important;
// //           background: #e5e7eb !important;
// //           box-shadow: 0 18px 50px rgba(0, 0, 0, 0.12) !important;
// //         }

// //         .property-map-canvas { height: 100% !important; width: 100% !important; min-height: 620px !important; z-index: 1; }
// //         .property-map-canvas .leaflet-container { height: 100% !important; width: 100% !important; }

// //         .property-map-tabs {
// //           position: absolute; top: 20px; left: 50%; transform: translateX(-50%); z-index: 700;
// //           display: flex; background: rgba(255,255,255,0.96); border: 1px solid rgba(0,0,0,0.20);
// //           border-radius: 999px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.16);
// //         }
// //         .property-map-tab-btn { border: 0; background: transparent; padding: 12px 24px; color: #111827; font-size: 16px; font-weight: 700; cursor: pointer; white-space: nowrap; }
// //         .property-map-tab-btn.active { background: #f26f51; color: #ffffff; }

// //         .property-map-insights { position: absolute; top: 88px; right: 16px; z-index: 720; width: 280px; background: #ffffff; color: #111827; border-radius: 16px; box-shadow: 0 14px 35px rgba(0,0,0,0.18); border: 1px solid rgba(0,0,0,0.08); padding: 18px; }
// //         .property-map-insights h4 { margin: 0 0 12px; font-size: 18px; color: #111827; }
// //         .property-map-insight-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 9px 0; border-bottom: 1px solid #eeeeee; color: #4b5563; font-size: 14px; }
// //         .property-map-insight-row:last-child { border-bottom: 0; }
// //         .property-map-insight-row strong { color: #f28c52; font-size: 16px; }

// //         .property-map-custom-marker-wrap, .property-user-marker-wrap { background: transparent !important; border: 0 !important; }
// //         .property-map-pin { width: 30px; height: 30px; background: #d60000; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); box-shadow: 0 5px 12px rgba(0,0,0,0.35); border: 2px solid #ffffff; position: relative; }
// //         .property-map-pin span { position: absolute; width: 10px; height: 10px; border-radius: 50%; background: #ffffff; left: 8px; top: 8px; }
// //         .property-map-count-marker { width: 46px; height: 46px; display: flex; align-items: center; justify-content: center; background: #0a0a0a; color: #ffffff; font-weight: 900; font-size: 16px; border: 2px solid #ffffff; box-shadow: 0 7px 18px rgba(0,0,0,0.38); position: relative; border-radius: 3px; }
// //         .property-map-count-marker::after { content: ""; position: absolute; right: -4px; top: -4px; width: 10px; height: 10px; background: #f26f51; }
// //         .property-user-marker { width: 26px; height: 26px; border-radius: 50%; background: rgba(37,99,235,0.25); border: 2px solid #2563eb; display: flex; align-items: center; justify-content: center; }
// //         .property-user-marker span { width: 10px; height: 10px; border-radius: 50%; background: #2563eb; }

// //         .property-map-popup .leaflet-popup-content-wrapper { border-radius: 18px; padding: 0; overflow: hidden; box-shadow: 0 20px 45px rgba(0,0,0,0.25); }
// //         .property-map-popup .leaflet-popup-content { margin: 0; }
// //         .property-map-popup-card { width: 330px; background: #ffffff; color: #111827; }
// //         .property-map-popup-img { width: 100%; height: 150px; object-fit: cover; display: block; }
// //         .property-map-popup-body { padding: 16px 18px 14px; }
// //         .property-map-popup-body h4 { margin: 0 0 6px; font-size: 20px; line-height: 1.2; color: #111827; }
// //         .property-map-popup-body p { margin: 0 0 8px; color: #6b7280; font-size: 14px; }
// //         .property-map-popup-body h5 { margin: 0 0 8px; color: #111827; font-size: 20px; font-weight: 700; }
// //         .property-map-popup-config { color: #0f172a; font-weight: 600; margin-bottom: 10px; }
// //         .property-map-popup-info { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 10px 0; border-top: 1px solid #eeeeee; border-bottom: 1px solid #eeeeee; color: #374151; font-size: 14px; }
// //         .property-map-popup-info b { color: #6b7280; font-weight: 500; }
// //         .property-map-popup-actions { display: flex; flex-direction: column; gap: 7px; margin-top: 10px; }
// //         .property-map-popup-btn { display: flex; justify-content: center; align-items: center; height: 38px; border-radius: 8px; background: #f28c52; color: #ffffff !important; text-decoration: none !important; font-weight: 700; }
// //         .property-map-popup-link { color: #f26f51 !important; font-size: 14px; text-decoration: none !important; }
// //         .property-map-group-popup { width: 320px; max-height: 430px; overflow: auto; background: #ffffff; color: #111827; padding: 14px; }
// //         .property-map-group-head h4 { margin: 0 0 3px; font-size: 18px; color: #111827; }
// //         .property-map-group-head p { margin: 0 0 10px; color: #6b7280; font-size: 13px; }
// //         .property-map-group-item { display: grid; grid-template-columns: 72px 1fr; gap: 10px; padding: 9px 0; border-top: 1px solid #eeeeee; text-decoration: none !important; color: #111827 !important; }
// //         .property-map-group-item img { width: 72px; height: 58px; object-fit: cover; border-radius: 8px; }
// //         .property-map-group-item h5 { margin: 0 0 3px; color: #111827; font-size: 14px; line-height: 1.2; }
// //         .property-map-group-item p { margin: 0 0 4px; color: #6b7280; font-size: 12px; }
// //         .property-map-group-item strong { color: #f28c52; font-size: 13px; }
// //         .property-map-group-item small { display: block; color: #111827; margin-top: 3px; font-weight: 700; font-size: 12px; }

// //         .property-grid-card-custom { border-radius: 22px; overflow: hidden; background: #ffffff !important; color: #111827 !important; box-shadow: 0 10px 30px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.06); transition: all .3s ease; }
// //         .property-grid-card-content { background: #ffffff !important; color: #111827 !important; padding: 24px 22px 22px; }
// //         .property-grid-card-title { margin-bottom: 12px; color: #111827 !important; font-weight: 700; }
// //         .property-grid-card-title-link { color: #111827 !important; text-decoration: none !important; }
// //         .property-grid-card-title-link:hover { color: #f28c52 !important; }
// //         .property-grid-card-location { color: #6b7280 !important; margin-bottom: 18px; display: flex; align-items: center; gap: 7px; }
// //         .property-grid-card-location i { color: #6b7280 !important; }
// //         .property-grid-card-config { background: #f4efec !important; border-radius: 12px; padding: 10px 14px; margin-bottom: 12px; font-size: 14px; color: #111827 !important; }
// //         .property-grid-card-config strong { color: #4b5563 !important; }
// //         .property-grid-card-config span { color: #111827 !important; }
// //         .property-grid-card-meta { color: #6b7280 !important; margin-bottom: 18px; }
// //         .property-grid-card-meta li { color: #6b7280 !important; gap: 4px; }
// //         .property-grid-card-meta span { color: #111827 !important; margin-right: 4px; font-weight: 600; }
// //         .property-grid-card-bottom { display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; gap: 14px; border-top: 1px solid #eeeeee !important; padding-top: 16px; }
// //         .property-grid-card-price { margin: 0 !important; color: #f28c52 !important; font-weight: 700; line-height: 1.2; word-break: break-word; }
// //         .property-grid-card-bottom .wrap-btn { display: grid !important; grid-template-columns: 1fr 1fr; gap: 10px !important; width: 100% !important; }
// //         .property-grid-card-bottom .tf-btn { width: 100% !important; min-width: 0 !important; padding-left: 12px !important; padding-right: 12px !important; justify-content: center !important; white-space: nowrap !important; }
// //         .property-grid-details-btn { color: #ff6a00 !important; border: 1px solid #ff6a00 !important; background: transparent !important; text-decoration: none !important; }
// //         .property-grid-details-btn:hover { background: #ff6a00 !important; color: #ffffff !important; }
// //         .property-grid-book-btn { background: #f28c52 !important; color: #ffffff !important; border: 1px solid #f28c52 !important; }
// //         .property-grid-book-btn:hover { background: #ff6a00 !important; border-color: #ff6a00 !important; color: #ffffff !important; }
// //         .property-map-mini-btn { margin-top: 10px; border: 1px solid #f28c52; background: transparent; color: #f28c52; border-radius: 8px; padding: 8px 12px; font-weight: 700; cursor: pointer; width: 100%; }
// //         .property-map-mini-btn:hover { background: #f28c52; color: #ffffff; }

// //         body.dark .property-map-head h2, body.dark-mode .property-map-head h2, html.dark .property-map-head h2, html.dark-mode .property-map-head h2, [data-theme="dark"] .property-map-head h2, .dark .property-map-head h2,
// //         body.dark .property-map-head-row strong, body.dark-mode .property-map-head-row strong, html.dark .property-map-head-row strong, html.dark-mode .property-map-head-row strong, [data-theme="dark"] .property-map-head-row strong, .dark .property-map-head-row strong { color: #ffffff !important; }
// //         body.dark .property-map-head p, body.dark-mode .property-map-head p, html.dark .property-map-head p, html.dark-mode .property-map-head p, [data-theme="dark"] .property-map-head p, .dark .property-map-head p,
// //         body.dark .property-map-head-row, body.dark-mode .property-map-head-row, html.dark .property-map-head-row, html.dark-mode .property-map-head-row, [data-theme="dark"] .property-map-head-row, .dark .property-map-head-row { color: #b6beca !important; }
// //         body.dark .property-grid-card-custom, body.dark-mode .property-grid-card-custom, html.dark .property-grid-card-custom, html.dark-mode .property-grid-card-custom, [data-theme="dark"] .property-grid-card-custom, .dark .property-grid-card-custom { background: #1f2328 !important; color: #ffffff !important; border: 1px solid rgba(255,255,255,0.08) !important; box-shadow: 0 18px 45px rgba(0,0,0,0.35) !important; }
// //         body.dark .property-grid-card-content, body.dark-mode .property-grid-card-content, html.dark .property-grid-card-content, html.dark-mode .property-grid-card-content, [data-theme="dark"] .property-grid-card-content, .dark .property-grid-card-content { background: #1f2328 !important; color: #ffffff !important; }
// //         body.dark .property-grid-card-title, body.dark-mode .property-grid-card-title, html.dark .property-grid-card-title, html.dark-mode .property-grid-card-title, [data-theme="dark"] .property-grid-card-title, .dark .property-grid-card-title,
// //         body.dark .property-grid-card-title-link, body.dark-mode .property-grid-card-title-link, html.dark .property-grid-card-title-link, html.dark-mode .property-grid-card-title-link, [data-theme="dark"] .property-grid-card-title-link, .dark .property-grid-card-title-link { color: #ffffff !important; }
// //         body.dark .property-grid-card-location, body.dark-mode .property-grid-card-location, html.dark .property-grid-card-location, html.dark-mode .property-grid-card-location, [data-theme="dark"] .property-grid-card-location, .dark .property-grid-card-location,
// //         body.dark .property-grid-card-location i, body.dark-mode .property-grid-card-location i, html.dark .property-grid-card-location i, html.dark-mode .property-grid-card-location i, [data-theme="dark"] .property-grid-card-location i, .dark .property-grid-card-location i { color: #b6beca !important; }
// //         body.dark .property-grid-card-config, body.dark-mode .property-grid-card-config, html.dark .property-grid-card-config, html.dark-mode .property-grid-card-config, [data-theme="dark"] .property-grid-card-config, .dark .property-grid-card-config { background: rgba(255,255,255,0.07) !important; color: #ffffff !important; }
// //         body.dark .property-grid-card-config strong, body.dark-mode .property-grid-card-config strong, html.dark .property-grid-card-config strong, html.dark-mode .property-grid-card-config strong, [data-theme="dark"] .property-grid-card-config strong, .dark .property-grid-card-config strong { color: #f28c52 !important; }
// //         body.dark .property-grid-card-config span, body.dark-mode .property-grid-card-config span, html.dark .property-grid-card-config span, html.dark-mode .property-grid-card-config span, [data-theme="dark"] .property-grid-card-config span, .dark .property-grid-card-config span { color: #ffffff !important; }
// //         body.dark .property-grid-card-meta, body.dark-mode .property-grid-card-meta, html.dark .property-grid-card-meta, html.dark-mode .property-grid-card-meta, [data-theme="dark"] .property-grid-card-meta, .dark .property-grid-card-meta,
// //         body.dark .property-grid-card-meta li, body.dark-mode .property-grid-card-meta li, html.dark .property-grid-card-meta li, html.dark-mode .property-grid-card-meta li, [data-theme="dark"] .property-grid-card-meta li, .dark .property-grid-card-meta li { color: #b6beca !important; }
// //         body.dark .property-grid-card-meta span, body.dark-mode .property-grid-card-meta span, html.dark .property-grid-card-meta span, html.dark-mode .property-grid-card-meta span, [data-theme="dark"] .property-grid-card-meta span, .dark .property-grid-card-meta span { color: #ffffff !important; }
// //         body.dark .property-grid-card-bottom, body.dark-mode .property-grid-card-bottom, html.dark .property-grid-card-bottom, html.dark-mode .property-grid-card-bottom, [data-theme="dark"] .property-grid-card-bottom, .dark .property-grid-card-bottom { border-top: 1px solid rgba(255,255,255,0.1) !important; }
// //         body.dark .property-grid-details-btn, body.dark-mode .property-grid-details-btn, html.dark .property-grid-details-btn, html.dark-mode .property-grid-details-btn, [data-theme="dark"] .property-grid-details-btn, .dark .property-grid-details-btn { background: transparent !important; color: #f28c52 !important; border: 1px solid #f28c52 !important; }
// //         body.dark .property-grid-details-btn:hover, body.dark-mode .property-grid-details-btn:hover, html.dark .property-grid-details-btn:hover, html.dark-mode .property-grid-details-btn:hover, [data-theme="dark"] .property-grid-details-btn:hover, .dark .property-grid-details-btn:hover { background: #f28c52 !important; color: #ffffff !important; }

// //         @media (max-width: 1199px) {
// //           .property-map-listing-layout {
// //             grid-template-columns: 1fr !important;
// //             height: auto !important;
// //             min-height: 0 !important;
// //             overflow: visible !important;
// //           }

// //           .property-map-list-panel {
// //             height: auto !important;
// //             max-height: none !important;
// //             overflow: visible !important;
// //             padding-right: 0 !important;
// //           }

// //           .property-map-panel {
// //             position: relative !important;
// //             top: auto !important;
// //             height: 560px !important;
// //             min-height: 560px !important;
// //             max-height: none !important;
// //             order: -1;
// //           }

// //           .property-map-canvas { min-height: 560px !important; }
// //         }

// //         @media (max-width: 767px) {
// //           .property-map-list-grid { grid-template-columns: 1fr !important; }
// //           .property-map-panel { height: 480px !important; min-height: 480px !important; }
// //           .property-map-canvas { min-height: 480px !important; }
// //           .property-map-tab-btn { padding: 10px 16px; font-size: 14px; }
// //           .property-map-insights { left: 12px; right: 12px; width: auto; }
// //         }
// //       `}</style>

// //       <div className="property-grid-map-wrapper">
// //         <div className="property-map-listing-layout">
// //           <div className="property-map-list-panel">
// //             <div className="property-map-head">
// //               <h2>Projects Listing</h2>
// //               <p>Verified inventory, location-wise project pins and quick property overview.</p>
// //               <div className="property-map-head-row">
// //                 <span>
// //                   Showing <strong>{items.length}</strong> Projects
// //                 </span>
// //                 <span>
// //                   Map Areas: <strong>{groupedMapPoints.length}</strong>
// //                   {mapResolving ? "..." : ""}
// //                 </span>
// //               </div>
// //             </div>

// //             <div className="property-map-list-grid">
// //               {items.map((property) => {
// //                   const sellerPhone = getPhone(property);
// //                   const detailHref = getPropertyDetailHref(property);

// //                   return (
// //                   <div className="box-house hover-img property-grid-card-custom" key={property.id}>
// //                     <div className="image-wrap" style={{ position: "relative" }}>
// //                      <Link href={detailHref} onClick={() => handleViewed(property.id)}>
// //                         <Image
// //                           className="lazyload"
// //                           alt={getTitle(property)}
// //                           src={getImage(property)}
// //                           width={600}
// //                           height={401}
// //                           style={{ width: "100%", height: "280px", objectFit: "cover" }}
// //                         />
// //                       </Link>

// //                       <ul className="box-tag flex gap-8" style={{ position: "absolute", top: 14, left: 14, zIndex: 2 }}>
// //                         {property.property_label ? <li className="flat-tag text-4 bg-main fw-6 text_white">{property.property_label}</li> : null}
// //                         <li className="flat-tag text-4 bg-3 fw-6 text_white">{property.property_status === "for-rent" ? "For Rent" : "For Sale"}</li>
// //                       </ul>

// //                       <div style={{ position: "absolute", right: 16, top: 16, display: "flex", gap: 12, zIndex: 5 }}>
// //                         <button type="button" style={actionBtnStyle} onClick={() => handleFavorite(property.id)} title="Favorite">
// //                           <BookmarkIcon active={property.is_favorite} />
// //                         </button>
// //                         <button type="button" style={actionBtnStyle} onClick={() => handleLiked(property.id)} title="Like">
// //                           <HeartIcon active={property.is_liked} />
// //                         </button>
// //                         {sellerPhone ? (
// //                           <a href={`tel:${sellerPhone}`} style={actionBtnStyle} title="Call">
// //                             <PhoneIcon />
// //                           </a>
// //                         ) : null}
// //                       </div>
// //                     </div>

// //                     <div className="content property-grid-card-content">
// //                       <h5 className="title property-grid-card-title">
// //                         <Link href={detailHref} onClick={() => handleViewed(property.id)} className="property-grid-card-title-link">
// //                           {getTitle(property)}
// //                         </Link>
// //                       </h5>

// //                       <p className="location text-1 flex items-center gap-6 property-grid-card-location">
// //                         <i className="icon-location" /> {getLocation(property)}
// //                       </p>

// //                       <div className="property-grid-card-config">
// //                         <strong>Configuration:</strong> <span>{getConfiguration(property)}</span>
// //                       </div>

// //                       <ul className="meta-list flex property-grid-card-meta">
// //                         <li className="text-1 flex"><span>{property.bedrooms || 0}</span>Beds</li>
// //                         <li className="text-1 flex"><span>{property.bathrooms || 0}</span>Baths</li>
// //                         <li className="text-1 flex"><span>{getArea(property)}</span>Sqft</li>
// //                       </ul>

// //                       <div className="bot property-grid-card-bottom">
// //                         <h5 className="price property-grid-card-price">{formatPrice(property.price)}</h5>
// //                         <div className="wrap-btn flex gap-8">
// //                           <Link href={detailHref} className="tf-btn style-border pd-4 property-grid-details-btn" onClick={() => handleViewed(property.id)}>
// //                             Details
// //                           </Link>
// //                           <button type="button" className="tf-btn pd-4 property-grid-book-btn" onClick={() => openBookingModal(property)}>
// //                             Book Visit
// //                           </button>
// //                         </div>
// //                       </div>

// //                       <button type="button" className="property-map-mini-btn" onClick={() => focusPropertyOnMap(property)}>
// //                         Show on Map
// //                       </button>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           <div className="property-map-panel">
// //             <div className="property-map-tabs">
// //               <button type="button" className={`property-map-tab-btn ${activeTab === "properties" ? "active" : ""}`} onClick={() => setActiveTab("properties")}>
// //                 Properties
// //               </button>
// //               <button type="button" className={`property-map-tab-btn ${activeTab === "insights" ? "active" : ""}`} onClick={() => setActiveTab("insights")}>
// //                 Map Insights
// //               </button>
// //             </div>

// //             <div ref={mapElementRef} className="property-map-canvas" />

// //             {activeTab === "insights" ? (
// //               <div className="property-map-insights">
// //                 <h4>Map Insights</h4>
// //                 <div className="property-map-insight-row"><span>Total Projects</span><strong>{items.length}</strong></div>
// //                 <div className="property-map-insight-row"><span>Map Areas</span><strong>{groupedMapPoints.length}</strong></div>
// //                 <div className="property-map-insight-row"><span>User Location</span><strong>{userLocation ? "On" : "Off"}</strong></div>
// //                 {cityInsights.slice(0, 6).map((item) => (
// //                   <div className="property-map-insight-row" key={item.name}>
// //                     <span>{item.name}</span><strong>{item.count}</strong>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : null}
// //           </div>
// //         </div>
// //       </div>

// //       {bookingOpen && selectedProperty && (
// //         <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.5)", zIndex: 9999 }}>
// //           <div className="modal-dialog modal-dialog-centered">
// //             <div className="modal-content" style={{ borderRadius: "20px", overflow: "hidden" }}>
// //               <div className="modal-header">
// //                 <h5 className="modal-title">Book a Visit - {getTitle(selectedProperty)}</h5>
// //                 <button type="button" className="btn-close" onClick={closeBookingModal} />
// //               </div>

// //               <form onSubmit={submitBooking}>
// //                 <div className="modal-body">
// //                   <div className="mb-3"><label className="form-label">Name</label><input type="text" name="name" className="form-control" value={bookingForm.name} onChange={handleBookingChange} required /></div>
// //                   <div className="mb-3"><label className="form-label">Phone</label><input type="text" name="phone" className="form-control" value={bookingForm.phone} onChange={handleBookingChange} required /></div>
// //                   <div className="mb-3"><label className="form-label">Visit Date</label><input type="date" name="visit_date" className="form-control" value={bookingForm.visit_date} onChange={handleBookingChange} required /></div>
// //                   <div className="mb-3"><label className="form-label">Visit Time</label><input type="time" name="visit_time" className="form-control" value={bookingForm.visit_time} onChange={handleBookingChange} required /></div>
// //                   <div className="mb-3"><label className="form-label">Message</label><textarea name="message" className="form-control" rows={3} value={bookingForm.message} onChange={handleBookingChange} /></div>
// //                   {message ? <div style={{ color: "#ff6b35", fontSize: "14px", marginTop: "8px" }}>{message}</div> : null}
// //                 </div>

// //                 <div className="modal-footer" style={{ display: "flex", justifyContent: "flex-end", gap: "12px", padding: "16px 20px 20px" }}>
// //                   <button type="button" className="tf-btn style-border pd-4" onClick={closeBookingModal} style={{ minWidth: "130px", border: "1px solid #d9d9d9", background: "#fff", color: "#222" }}>Cancel</button>
// //                   <button type="submit" className="tf-btn pd-4" disabled={bookingLoading} style={{ minWidth: "170px", background: "#f28c52", color: "#fff", border: "1px solid #f28c52", opacity: bookingLoading ? 0.7 : 1 }}>{bookingLoading ? "Booking..." : "Confirm Visit"}</button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { apiPost } from "../lib/api";
// import { getPropertyDetailHref } from "../../utlis/propertyUrl";
// import ProtectedPropertyLink, {
//   requirePropertyLogin,
// } from "@/components/common/ProtectedPropertyLink";

// function getArray(value) {
//   if (Array.isArray(value)) return value;
//   if (Array.isArray(value?.results)) return value.results;
//   if (Array.isArray(value?.data)) return value.data;
//   return [];
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

// function getImage(property) {
//   const primaryImage = Array.isArray(property?.images)
//     ? property.images.find((img) => img.is_primary)
//     : null;

//   return (
//     property?.image ||
//     property?.imageSrc ||
//     property?.featured_image ||
//     property?.cover_image ||
//     property?.thumbnail ||
//     primaryImage?.image_url ||
//     primaryImage?.image ||
//     property?.images?.[0]?.image_url ||
//     property?.images?.[0]?.image ||
//     "/images/home/house-1.jpg"
//   );
// }

// function getTitle(property) {
//   return (
//     property?.title ||
//     property?.project_name ||
//     property?.property_name ||
//     property?.project_title ||
//     property?.property_title ||
//     property?.name ||
//     "Untitled Property"
//   );
// }

// function getLocation(property) {
//   return (
//     property?.short_location ||
//     property?.location ||
//     property?.neighborhood ||
//     property?.full_address ||
//     property?.address ||
//     property?.city ||
//     "Location on request"
//   );
// }

// function normalizeKey(value) {
//   return String(value || "")
//     .trim()
//     .toLowerCase()
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, " ");
// }

// function getMapGroupTitle(property) {
//   return (
//     property?.short_location ||
//     property?.neighborhood ||
//     property?.location ||
//     property?.city ||
//     property?.full_address ||
//     "Other Location"
//   );
// }

// function getMapGroupKey(property, coords) {
//   const placeKey = normalizeKey(
//     property?.city &&
//       (property?.short_location || property?.neighborhood || property?.location)
//       ? `${property.city}-${
//           property.short_location || property.neighborhood || property.location
//         }`
//       : property?.short_location ||
//           property?.neighborhood ||
//           property?.location ||
//           property?.city ||
//           property?.zip_code
//   );

//   if (placeKey) return placeKey;
//   if (coords?.lat && coords?.lng) {
//     return `${Number(coords.lat).toFixed(3)}_${Number(coords.lng).toFixed(3)}`;
//   }

//   return `property-${property?.id || Math.random()}`;
// }

// function getConfiguration(property) {
//   if (property?.configuration) return property.configuration;
//   if (property?.configuration_text) return property.configuration_text;
//   if (property?.bedrooms) return `${property.bedrooms} BHK`;
//   if (property?.property_type) return property.property_type;
//   return "Configuration on request";
// }

// function getPhone(property) {
//   return (
//     property?.seller_phone ||
//     property?.phone ||
//     property?.contact_phone ||
//     property?.contact_number ||
//     property?.contact_seller_phone ||
//     property?.contact_seller?.phone ||
//     property?.contact_seller?.office_number ||
//     property?.fallback_sellers?.[0]?.phone ||
//     ""
//   );
// }

// function getArea(property) {
//   return property?.carpet_area || property?.size_sqft || property?.floor_size || 0;
// }

// function getPossession(property) {
//   return (
//     property?.possession_date ||
//     property?.possessionDate ||
//     property?.expiryDate ||
//     "On request"
//   );
// }

// function escapeHtml(value) {
//   return String(value || "")
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");
// }

// function toNumber(value) {
//   const num = Number(value);
//   return Number.isFinite(num) ? num : null;
// }

// function extractCoordinatesFromMapUrl(url = "") {
//   if (!url || typeof url !== "string") return null;

//   try {
//     const decoded = decodeURIComponent(url);

//     const googleEmbed = decoded.match(
//       /!2d(-?\d+(?:\.\d+)?)!3d(-?\d+(?:\.\d+)?)/i
//     );
//     if (googleEmbed) {
//       return {
//         lat: Number(googleEmbed[2]),
//         lng: Number(googleEmbed[1]),
//         source: "map_url",
//       };
//     }

//     const googleAt = decoded.match(/@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/i);
//     if (googleAt) {
//       return {
//         lat: Number(googleAt[1]),
//         lng: Number(googleAt[2]),
//         source: "map_url",
//       };
//     }

//     const bingCp = decoded.match(/cp=(-?\d+(?:\.\d+)?)(?:~|%7E)(-?\d+(?:\.\d+)?)/i);
//     if (bingCp) {
//       return {
//         lat: Number(bingCp[1]),
//         lng: Number(bingCp[2]),
//         source: "map_url",
//       };
//     }

//     const bingPos = decoded.match(/pos\.(-?\d+(?:\.\d+)?)_(-?\d+(?:\.\d+)?)/i);
//     if (bingPos) {
//       return {
//         lat: Number(bingPos[1]),
//         lng: Number(bingPos[2]),
//         source: "map_url",
//       };
//     }

//     const general = decoded.match(
//       /[?&](?:ll|q|query|center)=(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/i
//     );
//     if (general) {
//       return {
//         lat: Number(general[1]),
//         lng: Number(general[2]),
//         source: "map_url",
//       };
//     }
//   } catch {
//     return null;
//   }

//   return null;
// }

// const FALLBACK_COORDS = [
//   { keys: ["sakinaka", "saki naka", "400072"], lat: 19.1033, lng: 72.8875 },
//   { keys: ["andheri"], lat: 19.1136, lng: 72.8697 },
//   { keys: ["goregaon west", "400104"], lat: 19.1647, lng: 72.8493 },
//   { keys: ["goregaon"], lat: 19.1663, lng: 72.8526 },
//   { keys: ["malad west"], lat: 19.1874, lng: 72.8428 },
//   { keys: ["malad"], lat: 19.1864, lng: 72.8493 },
//   { keys: ["borivali west"], lat: 19.234, lng: 72.8456 },
//   { keys: ["borivali"], lat: 19.229, lng: 72.857 },
//   { keys: ["kandivali west"], lat: 19.2058, lng: 72.8425 },
//   { keys: ["kandivali"], lat: 19.2094, lng: 72.8526 },
//   { keys: ["thane"], lat: 19.2183, lng: 72.9781 },
//   { keys: ["mulund"], lat: 19.1726, lng: 72.9562 },
//   { keys: ["mira road", "mira bhayandar"], lat: 19.2952, lng: 72.8544 },
//   { keys: ["pune"], lat: 18.5204, lng: 73.8567 },
//   { keys: ["mumbai"], lat: 19.076, lng: 72.8777 },
//   { keys: ["maharashtra"], lat: 19.7515, lng: 75.7139 },
// ];

// function getFallbackCoordinates(property) {
//   const text = [
//     property?.title,
//     property?.short_location,
//     property?.location,
//     property?.neighborhood,
//     property?.full_address,
//     property?.address,
//     property?.city,
//     property?.city_slug,
//     property?.state,
//     property?.zip_code,
//   ]
//     .filter(Boolean)
//     .join(" ")
//     .toLowerCase();

//   const found = FALLBACK_COORDS.find((item) =>
//     item.keys.some((key) => text.includes(key.toLowerCase()))
//   );

//   if (!found) return null;

//   return {
//     lat: found.lat,
//     lng: found.lng,
//     source: "fallback",
//   };
// }

// function getStaticPropertyCoordinates(property) {
//   const directLat =
//     toNumber(property?.latitude) ??
//     toNumber(property?.lat) ??
//     toNumber(property?.map_latitude) ??
//     toNumber(property?.project_latitude);

//   const directLng =
//     toNumber(property?.longitude) ??
//     toNumber(property?.lng) ??
//     toNumber(property?.map_longitude) ??
//     toNumber(property?.project_longitude);

//   if (directLat !== null && directLng !== null) {
//     return {
//       lat: directLat,
//       lng: directLng,
//       source: "exact",
//     };
//   }

//   if (Array.isArray(property?.coordinates) && property.coordinates.length >= 2) {
//     const lat = toNumber(property.coordinates[0]);
//     const lng = toNumber(property.coordinates[1]);

//     if (lat !== null && lng !== null) {
//       return {
//         lat,
//         lng,
//         source: "exact",
//       };
//     }
//   }

//   const fromUrl = extractCoordinatesFromMapUrl(property?.map_embed_url);

//   if (fromUrl?.lat && fromUrl?.lng) return fromUrl;

//   return null;
// }

// function getGeocodeQuery(property) {
//   return [
//     property?.full_address,
//     property?.address,
//     property?.location,
//     property?.short_location,
//     property?.neighborhood,
//     property?.city,
//     property?.state,
//     property?.zip_code,
//     property?.country || "India",
//   ]
//     .filter(Boolean)
//     .join(", ")
//     .replace(/\s+/g, " ")
//     .trim();
// }

// function getGeocodeCacheKey(property) {
//   return `growl-property-map-${property?.id || "no-id"}-${normalizeKey(
//     getGeocodeQuery(property)
//   )}`;
// }

// async function resolvePropertyCoordinates(property) {
//   const staticCoords = getStaticPropertyCoordinates(property);

//   if (staticCoords) return staticCoords;

//   const query = getGeocodeQuery(property);
//   const cacheKey = getGeocodeCacheKey(property);

//   if (typeof window !== "undefined") {
//     try {
//       const cached = localStorage.getItem(cacheKey);

//       if (cached) {
//         const parsed = JSON.parse(cached);

//         if (parsed?.lat && parsed?.lng) {
//           return {
//             ...parsed,
//             source: parsed.source || "geocode_cache",
//           };
//         }
//       }
//     } catch {}
//   }

//   if (query && typeof window !== "undefined") {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=in&q=${encodeURIComponent(
//           query
//         )}`,
//         {
//           headers: {
//             Accept: "application/json",
//           },
//         }
//       );

//       const result = await response.json();

//       if (Array.isArray(result) && result[0]?.lat && result[0]?.lon) {
//         const geocoded = {
//           lat: Number(result[0].lat),
//           lng: Number(result[0].lon),
//           source: "dynamic_geocode",
//         };

//         try {
//           localStorage.setItem(cacheKey, JSON.stringify(geocoded));
//         } catch {}

//         return geocoded;
//       }
//     } catch (error) {
//       console.warn("Dynamic map geocode failed:", property?.id, error);
//     }
//   }

//   const fallback = getFallbackCoordinates(property);

//   if (fallback?.lat && fallback?.lng) return fallback;

//   return null;
// }

// function getGoogleMapsUrl(property, lat, lng) {
//   if (property?.map_embed_url && !property.map_embed_url.includes("/embed")) {
//     return property.map_embed_url;
//   }

//   if (lat && lng) {
//     return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
//   }

//   const query = encodeURIComponent(
//     `${getTitle(property)} ${getLocation(property)} ${property?.city || ""}`
//   );

//   return `https://www.google.com/maps/search/?api=1&query=${query}`;
// }

// function loadLeafletAssets() {
//   return new Promise((resolve, reject) => {
//     if (typeof window === "undefined") {
//       return reject(new Error("Window missing"));
//     }

//     if (window.L) {
//       resolve(window.L);
//       return;
//     }

//     if (!document.querySelector('link[data-leaflet="true"]')) {
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
//       link.dataset.leaflet = "true";
//       document.head.appendChild(link);
//     }

//     const oldScript = document.querySelector('script[data-leaflet="true"]');

//     if (oldScript) {
//       oldScript.addEventListener("load", () => resolve(window.L));
//       oldScript.addEventListener("error", reject);
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
//     script.dataset.leaflet = "true";
//     script.onload = () => resolve(window.L);
//     script.onerror = reject;
//     document.body.appendChild(script);
//   });
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

// export default function PropertyGridItems({
//   properties = [],
//   onFavoriteUpdated = null,
// }) {
//   const user = getStoredUser();
//   const mapElementRef = useRef(null);
//   const mapInstanceRef = useRef(null);
//   const markerLayerRef = useRef(null);
//   const leafletRef = useRef(null);
//   const markerRefs = useRef({});

//   const [items, setItems] = useState(() =>
//     getArray(properties).map((property) => ({
//       ...property,
//       is_favorite: !!property?.is_favorite,
//       is_liked: !!property?.is_liked,
//     }))
//   );

//   const [activeTab, setActiveTab] = useState("properties");
//   const [mapReady, setMapReady] = useState(false);
//   const [userLocation, setUserLocation] = useState(null);
//   const [dynamicMapPoints, setDynamicMapPoints] = useState([]);
//   const [mapResolving, setMapResolving] = useState(false);
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

//   useEffect(() => {
//     const handleProtectedPopupClick = (event) => {
//       const protectedLink = event.target.closest(
//         '[data-protected-property-link="true"]'
//       );

//       if (!protectedLink) return;

//       const href = protectedLink.getAttribute("href");

//       if (!href) return;

//       const allowed = requirePropertyLogin(href);

//       if (!allowed) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//     };

//     document.addEventListener("click", handleProtectedPopupClick, true);

//     return () => {
//       document.removeEventListener("click", handleProtectedPopupClick, true);
//     };
//   }, []);

//   useEffect(() => {
//     setItems(
//       getArray(properties).map((property) => ({
//         ...property,
//         is_favorite: !!property?.is_favorite,
//         is_liked: !!property?.is_liked,
//       }))
//     );
//   }, [properties]);

//   useEffect(() => {
//     let cancelled = false;

//     async function buildDynamicMapPoints() {
//       setMapResolving(true);

//       const visibleItems = items.filter(
//         (property) =>
//           String(property?.post_status || "publish").toLowerCase() === "publish" &&
//           property?.is_approved !== false
//       );

//       const resolvedPoints = [];

//       for (const property of visibleItems) {
//         const coords = await resolvePropertyCoordinates(property);

//         if (cancelled) return;

//         if (coords?.lat && coords?.lng) {
//           resolvedPoints.push({
//             property,
//             lat: coords.lat,
//             lng: coords.lng,
//             key: getMapGroupKey(property, coords),
//             groupTitle: getMapGroupTitle(property),
//             source: coords.source,
//           });
//         }
//       }

//       if (!cancelled) {
//         setDynamicMapPoints(resolvedPoints);
//         setMapResolving(false);
//       }
//     }

//     buildDynamicMapPoints();

//     return () => {
//       cancelled = true;
//     };
//   }, [items]);

//   const groupedMapPoints = useMemo(() => {
//     const groups = new Map();

//     dynamicMapPoints.forEach((point) => {
//       if (!groups.has(point.key)) {
//         groups.set(point.key, {
//           key: point.key,
//           title: point.groupTitle,
//           lat: point.lat,
//           lng: point.lng,
//           properties: [],
//         });
//       }

//       groups.get(point.key).properties.push(point.property);
//     });

//     return Array.from(groups.values()).map((group) => {
//       const coordsList = dynamicMapPoints
//         .filter((point) => point.key === group.key)
//         .map((point) => ({
//           lat: point.lat,
//           lng: point.lng,
//         }));

//       if (coordsList.length > 1) {
//         const avgLat =
//           coordsList.reduce((sum, item) => sum + item.lat, 0) /
//           coordsList.length;
//         const avgLng =
//           coordsList.reduce((sum, item) => sum + item.lng, 0) /
//           coordsList.length;

//         return {
//           ...group,
//           lat: avgLat,
//           lng: avgLng,
//         };
//       }

//       return group;
//     });
//   }, [dynamicMapPoints]);

//   const cityInsights = useMemo(() => {
//     const countMap = new Map();

//     items.forEach((item) => {
//       const name = item?.city || item?.short_location || item?.location || "Other";
//       countMap.set(name, (countMap.get(name) || 0) + 1);
//     });

//     return Array.from(countMap.entries())
//       .map(([name, count]) => ({
//         name,
//         count,
//       }))
//       .sort((a, b) => b.count - a.count);
//   }, [items]);

//   useEffect(() => {
//     let cancelled = false;

//     loadLeafletAssets()
//       .then((L) => {
//         if (cancelled || !mapElementRef.current || mapInstanceRef.current) return;

//         leafletRef.current = L;

//         const map = L.map(mapElementRef.current, {
//           zoomControl: true,
//           scrollWheelZoom: true,
//         }).setView([19.076, 72.8777], 10);

//         L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//           maxZoom: 19,
//           attribution: "&copy; OpenStreetMap contributors",
//         }).addTo(map);

//         markerLayerRef.current = L.layerGroup().addTo(map);
//         mapInstanceRef.current = map;
//         setMapReady(true);

//         setTimeout(() => map.invalidateSize(), 250);
//         setTimeout(() => map.invalidateSize(), 900);

//         if (typeof ResizeObserver !== "undefined") {
//           const observer = new ResizeObserver(() => map.invalidateSize());
//           observer.observe(mapElementRef.current);
//           map._propertyResizeObserver = observer;
//         }
//       })
//       .catch((error) => console.error("Leaflet map load failed:", error));

//     return () => {
//       cancelled = true;

//       const map = mapInstanceRef.current;

//       if (map?._propertyResizeObserver) {
//         map._propertyResizeObserver.disconnect();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (typeof window === "undefined" || !navigator.geolocation) return;

//     navigator.geolocation.getCurrentPosition(
//       (position) =>
//         setUserLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         }),
//       () => setUserLocation(null),
//       {
//         enableHighAccuracy: false,
//         timeout: 8000,
//         maximumAge: 1000 * 60 * 30,
//       }
//     );
//   }, []);

//   function createSinglePopupHtml(property, lat, lng) {
//     const mapsUrl = getGoogleMapsUrl(property, lat, lng);
//     const detailHref = getPropertyDetailHref(property);

//     return `
//       <div class="property-map-popup-card">
//         <img src="${escapeHtml(getImage(property))}" alt="${escapeHtml(
//       getTitle(property)
//     )}" class="property-map-popup-img" />
//         <div class="property-map-popup-body">
//           <h4>${escapeHtml(getTitle(property))}</h4>
//           <p>${escapeHtml(getLocation(property))}</p>
//           <h5>${escapeHtml(formatPrice(property.price))}</h5>
//           <div class="property-map-popup-config">${escapeHtml(
//             getConfiguration(property)
//           )}</div>
//           <div class="property-map-popup-info">
//             <span><b>Possession</b><br/>${escapeHtml(
//               getPossession(property)
//             )}</span>
//             <span><b>Carpet Area</b><br/>${escapeHtml(
//               getArea(property)
//             )} sq.ft.</span>
//           </div>
//           <div class="property-map-popup-actions">
//             <a href="${detailHref}" data-protected-property-link="true" class="property-map-popup-btn">View Details</a>
//             <a href="${escapeHtml(
//               mapsUrl
//             )}" target="_blank" rel="noopener noreferrer" class="property-map-popup-link">Open in Google Maps</a>
//           </div>
//         </div>
//       </div>`;
//   }

//   function createGroupPopupHtml(group) {
//     if (group.properties.length === 1) {
//       return createSinglePopupHtml(group.properties[0], group.lat, group.lng);
//     }

//     const mapsUrl = getGoogleMapsUrl(group.properties[0], group.lat, group.lng);

//     const cards = group.properties
//       .slice(0, 12)
//       .map((property) => {
//         const detailHref = getPropertyDetailHref(property);

//         return `
//           <a href="${detailHref}" data-protected-property-link="true" class="property-map-group-item">
//             <img src="${escapeHtml(getImage(property))}" alt="${escapeHtml(
//           getTitle(property)
//         )}" />
//             <div>
//               <h5>${escapeHtml(getTitle(property))}</h5>
//               <p>${escapeHtml(getLocation(property))}</p>
//               <strong>${escapeHtml(formatPrice(property.price))}</strong>
//               <small>View Details</small>
//             </div>
//           </a>`;
//       })
//       .join("");

//     return `
//       <div class="property-map-group-popup">
//         <div class="property-map-group-head">
//           <h4>${group.properties.length} Projects in ${escapeHtml(
//       group.title || getLocation(group.properties[0])
//     )}</h4>
//           <p>${escapeHtml(getLocation(group.properties[0]))}</p>
//           <a href="${escapeHtml(
//             mapsUrl
//           )}" target="_blank" rel="noopener noreferrer">Open this location in Google Maps</a>
//         </div>
//         ${cards}
//       </div>`;
//   }

//   useEffect(() => {
//     if (
//       !mapReady ||
//       !leafletRef.current ||
//       !mapInstanceRef.current ||
//       !markerLayerRef.current
//     ) {
//       return;
//     }

//     const L = leafletRef.current;
//     const map = mapInstanceRef.current;
//     const layer = markerLayerRef.current;

//     layer.clearLayers();
//     markerRefs.current = {};

//     const bounds = [];

//     groupedMapPoints.forEach((group) => {
//       const icon = L.divIcon({
//         className: "property-map-custom-marker-wrap",
//         html: `<div class="property-map-count-marker">${group.properties.length}</div>`,
//         iconSize: [46, 46],
//         iconAnchor: [23, 23],
//         popupAnchor: [0, -26],
//       });

//       const marker = L.marker([group.lat, group.lng], {
//         icon,
//       })
//         .bindPopup(createGroupPopupHtml(group), {
//           maxWidth: 380,
//           minWidth: group.properties.length > 1 ? 320 : 330,
//           className: "property-map-popup",
//         })
//         .addTo(layer);

//       marker.on("dblclick", () => {
//         const mapsUrl = getGoogleMapsUrl(group.properties[0], group.lat, group.lng);
//         window.open(mapsUrl, "_blank", "noopener,noreferrer");
//       });

//       group.properties.forEach((property) => {
//         markerRefs.current[property.id] = marker;
//       });

//       bounds.push([group.lat, group.lng]);
//     });

//     if (userLocation?.lat && userLocation?.lng) {
//       const userIcon = L.divIcon({
//         className: "property-user-marker-wrap",
//         html: `<div class="property-user-marker"><span></span></div>`,
//         iconSize: [28, 28],
//         iconAnchor: [14, 14],
//       });

//       L.marker([userLocation.lat, userLocation.lng], {
//         icon: userIcon,
//       })
//         .bindPopup("Your current location")
//         .addTo(layer);

//       bounds.push([userLocation.lat, userLocation.lng]);
//     }

//     setTimeout(() => map.invalidateSize(), 100);

//     if (bounds.length > 0) {
//       map.fitBounds(bounds, {
//         padding: [45, 45],
//         maxZoom: 14,
//       });
//     }
//   }, [groupedMapPoints, mapReady, userLocation]);

//   async function focusPropertyOnMap(property) {
//     let point = dynamicMapPoints.find((item) => item.property.id === property.id);

//     if (!point) {
//       const coords = await resolvePropertyCoordinates(property);

//       if (!coords || !mapInstanceRef.current) return;

//       point = {
//         property,
//         lat: coords.lat,
//         lng: coords.lng,
//         key: getMapGroupKey(property, coords),
//         groupTitle: getMapGroupTitle(property),
//       };
//     }

//     const marker = markerRefs.current[property.id];

//     if (!mapInstanceRef.current) return;

//     mapInstanceRef.current.setView([point.lat, point.lng], 15, {
//       animate: true,
//     });

//     if (marker) {
//       setTimeout(() => marker.openPopup(), 250);
//     }
//   }

//   async function handleFavorite(id) {
//     if (!user?.id) {
//       requirePropertyLogin(window.location.pathname || "/");
//       return;
//     }

//     try {
//       const res = await apiPost(`/admindashboard/customer/toggle-favorite/`, {
//         user_id: user.id,
//         property_id: id,
//       });

//       setItems((prev) =>
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

//       if (onFavoriteUpdated) onFavoriteUpdated();
//     } catch (error) {
//       console.error(error);
//       alert(error.message || "Favorite update failed");
//     }
//   }

//   async function handleLiked(id) {
//     if (!user?.id) {
//       requirePropertyLogin(window.location.pathname || "/");
//       return;
//     }

//     try {
//       const res = await apiPost(`/admindashboard/customer/like-video/`, {
//         user_id: user.id,
//         property_id: id,
//       });

//       setItems((prev) =>
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
//   }

//   async function handleViewed(propertyId) {
//     if (!user?.id) return;

//     try {
//       await apiPost(`/admindashboard/customer/add-view/`, {
//         user_id: user.id,
//         property_id: propertyId,
//       });
//     } catch (error) {
//       console.error("View tracking failed:", error);
//     }
//   }

//   function openBookingModal(property) {
//     const detailHref = getPropertyDetailHref(property);

//     if (!user?.id) {
//       requirePropertyLogin(detailHref);
//       return;
//     }

//     setSelectedProperty(property);
//     setBookingForm({
//       name: user?.full_name || user?.username || user?.name || "",
//       phone: user?.phone || "",
//       visit_date: "",
//       visit_time: "",
//       message: `Interested in site visit for ${getTitle(property)}`,
//     });
//     setMessage("");
//     setBookingOpen(true);
//   }

//   function closeBookingModal() {
//     setBookingOpen(false);
//     setSelectedProperty(null);
//     setMessage("");
//   }

//   function handleBookingChange(e) {
//     const { name, value } = e.target;

//     setBookingForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   async function submitBooking(e) {
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

//       setTimeout(() => closeBookingModal(), 1000);
//     } catch (error) {
//       console.error(error);
//       setMessage(error.message || "Failed to book visit.");
//     } finally {
//       setBookingLoading(false);
//     }
//   }

//   return (
//     <>
//       <style jsx global>{`
//         .property-grid-map-wrapper {
//           grid-column: 1 / -1 !important;
//           width: 100% !important;
//           max-width: 100% !important;
//           display: block !important;
//           clear: both !important;
//         }

//         .property-map-listing-layout {
//           display: grid !important;
//           grid-template-columns: minmax(0, 56%) minmax(420px, 44%) !important;
//           gap: 18px !important;
//           align-items: stretch !important;
//           width: 100% !important;
//           max-width: 100% !important;
//           height: calc(100vh - 110px) !important;
//           min-height: 620px !important;
//           overflow: hidden !important;
//         }

//         .property-map-list-panel {
//           min-width: 0 !important;
//           width: 100% !important;
//           height: 100% !important;
//           max-height: calc(100vh - 110px) !important;
//           overflow-y: auto !important;
//           overflow-x: hidden !important;
//           padding-right: 8px !important;
//           scrollbar-width: thin;
//           scrollbar-color: #f28c52 transparent;
//         }

//         .property-map-list-panel::-webkit-scrollbar {
//           width: 7px;
//         }

//         .property-map-list-panel::-webkit-scrollbar-track {
//           background: transparent;
//         }

//         .property-map-list-panel::-webkit-scrollbar-thumb {
//           background: #f28c52;
//           border-radius: 99px;
//         }

//         .property-map-head {
//           margin-bottom: 22px;
//         }

//         .property-map-head h2 {
//           font-size: 30px;
//           line-height: 1.2;
//           margin: 0 0 10px;
//           color: #111827;
//           font-weight: 700;
//         }

//         .property-map-head p {
//           margin: 0 0 14px;
//           color: #4b5563;
//           font-size: 15px;
//         }

//         .property-map-head-row {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 12px;
//           color: #374151;
//         }

//         .property-map-head-row strong {
//           color: #111827;
//         }

//         .property-map-list-grid {
//           display: grid !important;
//           grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
//           gap: 24px !important;
//           width: 100% !important;
//         }

//         .property-map-panel {
//           position: sticky !important;
//           top: 90px !important;
//           height: 100% !important;
//           min-height: 620px !important;
//           max-height: calc(100vh - 110px) !important;
//           border-radius: 18px !important;
//           overflow: hidden !important;
//           border: 1px solid rgba(0, 0, 0, 0.08) !important;
//           background: #e5e7eb !important;
//           box-shadow: 0 18px 50px rgba(0, 0, 0, 0.12) !important;
//         }

//         .property-map-canvas {
//           height: 100% !important;
//           width: 100% !important;
//           min-height: 620px !important;
//           z-index: 1;
//         }

//         .property-map-canvas .leaflet-container {
//           height: 100% !important;
//           width: 100% !important;
//         }

//         .property-map-tabs {
//           position: absolute;
//           top: 20px;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 700;
//           display: flex;
//           background: rgba(255, 255, 255, 0.96);
//           border: 1px solid rgba(0, 0, 0, 0.2);
//           border-radius: 999px;
//           overflow: hidden;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.16);
//         }

//         .property-map-tab-btn {
//           border: 0;
//           background: transparent;
//           padding: 12px 24px;
//           color: #111827;
//           font-size: 16px;
//           font-weight: 700;
//           cursor: pointer;
//           white-space: nowrap;
//         }

//         .property-map-tab-btn.active {
//           background: #f26f51;
//           color: #ffffff;
//         }

//         .property-map-insights {
//           position: absolute;
//           top: 88px;
//           right: 16px;
//           z-index: 720;
//           width: 280px;
//           background: #ffffff;
//           color: #111827;
//           border-radius: 16px;
//           box-shadow: 0 14px 35px rgba(0, 0, 0, 0.18);
//           border: 1px solid rgba(0, 0, 0, 0.08);
//           padding: 18px;
//         }

//         .property-map-insights h4 {
//           margin: 0 0 12px;
//           font-size: 18px;
//           color: #111827;
//         }

//         .property-map-insight-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           gap: 12px;
//           padding: 9px 0;
//           border-bottom: 1px solid #eeeeee;
//           color: #4b5563;
//           font-size: 14px;
//         }

//         .property-map-insight-row:last-child {
//           border-bottom: 0;
//         }

//         .property-map-insight-row strong {
//           color: #f28c52;
//           font-size: 16px;
//         }

//         .property-map-custom-marker-wrap,
//         .property-user-marker-wrap {
//           background: transparent !important;
//           border: 0 !important;
//         }

//         .property-map-count-marker {
//           width: 46px;
//           height: 46px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #0a0a0a;
//           color: #ffffff;
//           font-weight: 900;
//           font-size: 16px;
//           border: 2px solid #ffffff;
//           box-shadow: 0 7px 18px rgba(0, 0, 0, 0.38);
//           position: relative;
//           border-radius: 3px;
//         }

//         .property-map-count-marker::after {
//           content: "";
//           position: absolute;
//           right: -4px;
//           top: -4px;
//           width: 10px;
//           height: 10px;
//           background: #f26f51;
//         }

//         .property-user-marker {
//           width: 26px;
//           height: 26px;
//           border-radius: 50%;
//           background: rgba(37, 99, 235, 0.25);
//           border: 2px solid #2563eb;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .property-user-marker span {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background: #2563eb;
//         }

//         .property-map-popup .leaflet-popup-content-wrapper {
//           border-radius: 18px;
//           padding: 0;
//           overflow: hidden;
//           box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
//         }

//         .property-map-popup .leaflet-popup-content {
//           margin: 0;
//         }

//         .property-map-popup-card {
//           width: 330px;
//           background: #ffffff;
//           color: #111827;
//         }

//         .property-map-popup-img {
//           width: 100%;
//           height: 150px;
//           object-fit: cover;
//           display: block;
//         }

//         .property-map-popup-body {
//           padding: 16px 18px 14px;
//         }

//         .property-map-popup-body h4 {
//           margin: 0 0 6px;
//           font-size: 20px;
//           line-height: 1.2;
//           color: #111827;
//         }

//         .property-map-popup-body p {
//           margin: 0 0 8px;
//           color: #6b7280;
//           font-size: 14px;
//         }

//         .property-map-popup-body h5 {
//           margin: 0 0 8px;
//           color: #111827;
//           font-size: 20px;
//           font-weight: 700;
//         }

//         .property-map-popup-config {
//           color: #0f172a;
//           font-weight: 600;
//           margin-bottom: 10px;
//         }

//         .property-map-popup-info {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 10px;
//           padding: 10px 0;
//           border-top: 1px solid #eeeeee;
//           border-bottom: 1px solid #eeeeee;
//           color: #374151;
//           font-size: 14px;
//         }

//         .property-map-popup-info b {
//           color: #6b7280;
//           font-weight: 500;
//         }

//         .property-map-popup-actions {
//           display: flex;
//           flex-direction: column;
//           gap: 7px;
//           margin-top: 10px;
//         }

//         .property-map-popup-btn {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 38px;
//           border-radius: 8px;
//           background: #f28c52;
//           color: #ffffff !important;
//           text-decoration: none !important;
//           font-weight: 700;
//         }

//         .property-map-popup-link {
//           color: #f26f51 !important;
//           font-size: 14px;
//           text-decoration: none !important;
//         }

//         .property-map-group-popup {
//           width: 320px;
//           max-height: 430px;
//           overflow: auto;
//           background: #ffffff;
//           color: #111827;
//           padding: 14px;
//         }

//         .property-map-group-head h4 {
//           margin: 0 0 3px;
//           font-size: 18px;
//           color: #111827;
//         }

//         .property-map-group-head p {
//           margin: 0 0 10px;
//           color: #6b7280;
//           font-size: 13px;
//         }

//         .property-map-group-item {
//           display: grid;
//           grid-template-columns: 72px 1fr;
//           gap: 10px;
//           padding: 9px 0;
//           border-top: 1px solid #eeeeee;
//           text-decoration: none !important;
//           color: #111827 !important;
//         }

//         .property-map-group-item img {
//           width: 72px;
//           height: 58px;
//           object-fit: cover;
//           border-radius: 8px;
//         }

//         .property-map-group-item h5 {
//           margin: 0 0 3px;
//           color: #111827;
//           font-size: 14px;
//           line-height: 1.2;
//         }

//         .property-map-group-item p {
//           margin: 0 0 4px;
//           color: #6b7280;
//           font-size: 12px;
//         }

//         .property-map-group-item strong {
//           color: #f28c52;
//           font-size: 13px;
//         }

//         .property-map-group-item small {
//           display: block;
//           color: #111827;
//           margin-top: 3px;
//           font-weight: 700;
//           font-size: 12px;
//         }

//         .property-grid-card-custom {
//           border-radius: 22px;
//           overflow: hidden;
//           background: #ffffff !important;
//           color: #111827 !important;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
//           border: 1px solid rgba(0, 0, 0, 0.06);
//           transition: all 0.3s ease;
//         }

//         .property-grid-card-content {
//           background: #ffffff !important;
//           color: #111827 !important;
//           padding: 24px 22px 22px;
//         }

//         .property-grid-card-title {
//           margin-bottom: 12px;
//           color: #111827 !important;
//           font-weight: 700;
//         }

//         .property-grid-card-title-link {
//           color: #111827 !important;
//           text-decoration: none !important;
//         }

//         .property-grid-card-title-link:hover {
//           color: #f28c52 !important;
//         }

//         .property-grid-card-location {
//           color: #6b7280 !important;
//           margin-bottom: 18px;
//           display: flex;
//           align-items: center;
//           gap: 7px;
//         }

//         .property-grid-card-location i {
//           color: #6b7280 !important;
//         }

//         .property-grid-card-config {
//           background: #f4efec !important;
//           border-radius: 12px;
//           padding: 10px 14px;
//           margin-bottom: 12px;
//           font-size: 14px;
//           color: #111827 !important;
//         }

//         .property-grid-card-config strong {
//           color: #4b5563 !important;
//         }

//         .property-grid-card-config span {
//           color: #111827 !important;
//         }

//         .property-grid-card-meta {
//           color: #6b7280 !important;
//           margin-bottom: 18px;
//         }

//         .property-grid-card-meta li {
//           color: #6b7280 !important;
//           gap: 4px;
//         }

//         .property-grid-card-meta span {
//           color: #111827 !important;
//           margin-right: 4px;
//           font-weight: 600;
//         }

//         .property-grid-card-bottom {
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-start;
//           align-items: stretch;
//           gap: 14px;
//           border-top: 1px solid #eeeeee !important;
//           padding-top: 16px;
//         }

//         .property-grid-card-price {
//           margin: 0 !important;
//           color: #f28c52 !important;
//           font-weight: 700;
//           line-height: 1.2;
//           word-break: break-word;
//         }

//         .property-grid-card-bottom .wrap-btn {
//           display: grid !important;
//           grid-template-columns: 1fr 1fr;
//           gap: 10px !important;
//           width: 100% !important;
//         }

//         .property-grid-card-bottom .tf-btn {
//           width: 100% !important;
//           min-width: 0 !important;
//           padding-left: 12px !important;
//           padding-right: 12px !important;
//           justify-content: center !important;
//           white-space: nowrap !important;
//         }

//         .property-grid-details-btn {
//           color: #ff6a00 !important;
//           border: 1px solid #ff6a00 !important;
//           background: transparent !important;
//           text-decoration: none !important;
//         }

//         .property-grid-details-btn:hover {
//           background: #ff6a00 !important;
//           color: #ffffff !important;
//         }

//         .property-grid-book-btn {
//           background: #f28c52 !important;
//           color: #ffffff !important;
//           border: 1px solid #f28c52 !important;
//         }

//         .property-grid-book-btn:hover {
//           background: #ff6a00 !important;
//           border-color: #ff6a00 !important;
//           color: #ffffff !important;
//         }

//         .property-map-mini-btn {
//           margin-top: 10px;
//           border: 1px solid #f28c52;
//           background: transparent;
//           color: #f28c52;
//           border-radius: 8px;
//           padding: 8px 12px;
//           font-weight: 700;
//           cursor: pointer;
//           width: 100%;
//         }

//         .property-map-mini-btn:hover {
//           background: #f28c52;
//           color: #ffffff;
//         }

//         @media (max-width: 1199px) {
//           .property-map-listing-layout {
//             grid-template-columns: 1fr !important;
//             height: auto !important;
//             min-height: 0 !important;
//             overflow: visible !important;
//           }

//           .property-map-list-panel {
//             height: auto !important;
//             max-height: none !important;
//             overflow: visible !important;
//             padding-right: 0 !important;
//           }

//           .property-map-panel {
//             position: relative !important;
//             top: auto !important;
//             height: 560px !important;
//             min-height: 560px !important;
//             max-height: none !important;
//             order: -1;
//           }

//           .property-map-canvas {
//             min-height: 560px !important;
//           }
//         }

//         @media (max-width: 767px) {
//           .property-map-list-grid {
//             grid-template-columns: 1fr !important;
//           }

//           .property-map-panel {
//             height: 480px !important;
//             min-height: 480px !important;
//           }

//           .property-map-canvas {
//             min-height: 480px !important;
//           }

//           .property-map-tab-btn {
//             padding: 10px 16px;
//             font-size: 14px;
//           }

//           .property-map-insights {
//             left: 12px;
//             right: 12px;
//             width: auto;
//           }
//         }
//       `}</style>

//       <div className="property-grid-map-wrapper">
//         <div className="property-map-listing-layout">
//           <div className="property-map-list-panel">
//             <div className="property-map-head">
//               <h2>Projects Listing</h2>
//               <p>
//                 Verified inventory, location-wise project pins and quick property
//                 overview.
//               </p>

//               <div className="property-map-head-row">
//                 <span>
//                   Showing <strong>{items.length}</strong> Projects
//                 </span>

//                 <span>
//                   Map Areas: <strong>{groupedMapPoints.length}</strong>
//                   {mapResolving ? "..." : ""}
//                 </span>
//               </div>
//             </div>

//             <div className="property-map-list-grid">
//               {items.map((property) => {
//                 const sellerPhone = getPhone(property);
//                 const detailHref = getPropertyDetailHref(property);

//                 return (
//                   <div
//                     className="box-house hover-img property-grid-card-custom"
//                     key={property.id}
//                   >
//                     <div className="image-wrap" style={{ position: "relative" }}>
//                       <ProtectedPropertyLink
//                         href={detailHref}
//                         onAllowedClick={() => handleViewed(property.id)}
//                       >
//                         <Image
//                           className="lazyload"
//                           alt={getTitle(property)}
//                           src={getImage(property)}
//                           width={600}
//                           height={401}
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
//                         {property.property_label ? (
//                           <li className="flat-tag text-4 bg-main fw-6 text_white">
//                             {property.property_label}
//                           </li>
//                         ) : null}

//                         <li className="flat-tag text-4 bg-3 fw-6 text_white">
//                           {property.property_status === "for-rent"
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
//                           onClick={() => handleFavorite(property.id)}
//                           title="Favorite"
//                         >
//                           <BookmarkIcon active={property.is_favorite} />
//                         </button>

//                         <button
//                           type="button"
//                           style={actionBtnStyle}
//                           onClick={() => handleLiked(property.id)}
//                           title="Like"
//                         >
//                           <HeartIcon active={property.is_liked} />
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

//                     <div className="content property-grid-card-content">
//                       <h5 className="title property-grid-card-title">
//                         <ProtectedPropertyLink
//                           href={detailHref}
//                           onAllowedClick={() => handleViewed(property.id)}
//                           className="property-grid-card-title-link"
//                         >
//                           {getTitle(property)}
//                         </ProtectedPropertyLink>
//                       </h5>

//                       <p className="location text-1 flex items-center gap-6 property-grid-card-location">
//                         <i className="icon-location" /> {getLocation(property)}
//                       </p>

//                       <div className="property-grid-card-config">
//                         <strong>Configuration:</strong>{" "}
//                         <span>{getConfiguration(property)}</span>
//                       </div>

//                       <ul className="meta-list flex property-grid-card-meta">
//                         <li className="text-1 flex">
//                           <span>{property.bedrooms || 0}</span>Beds
//                         </li>

//                         <li className="text-1 flex">
//                           <span>{property.bathrooms || 0}</span>Baths
//                         </li>

//                         <li className="text-1 flex">
//                           <span>{getArea(property)}</span>Sqft
//                         </li>
//                       </ul>

//                       <div className="bot property-grid-card-bottom">
//                         <h5 className="price property-grid-card-price">
//                           {formatPrice(property.price)}
//                         </h5>

//                         <div className="wrap-btn flex gap-8">
//                           <ProtectedPropertyLink
//                             href={detailHref}
//                             className="tf-btn style-border pd-4 property-grid-details-btn"
//                             onAllowedClick={() => handleViewed(property.id)}
//                           >
//                             Details
//                           </ProtectedPropertyLink>

//                           <button
//                             type="button"
//                             className="tf-btn pd-4 property-grid-book-btn"
//                             onClick={() => openBookingModal(property)}
//                           >
//                             Book Visit
//                           </button>
//                         </div>
//                       </div>

//                       <button
//                         type="button"
//                         className="property-map-mini-btn"
//                         onClick={() => focusPropertyOnMap(property)}
//                       >
//                         Show on Map
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="property-map-panel">
//             <div className="property-map-tabs">
//               <button
//                 type="button"
//                 className={`property-map-tab-btn ${
//                   activeTab === "properties" ? "active" : ""
//                 }`}
//                 onClick={() => setActiveTab("properties")}
//               >
//                 Properties
//               </button>

//               <button
//                 type="button"
//                 className={`property-map-tab-btn ${
//                   activeTab === "insights" ? "active" : ""
//                 }`}
//                 onClick={() => setActiveTab("insights")}
//               >
//                 Map Insights
//               </button>
//             </div>

//             <div ref={mapElementRef} className="property-map-canvas" />

//             {activeTab === "insights" ? (
//               <div className="property-map-insights">
//                 <h4>Map Insights</h4>

//                 <div className="property-map-insight-row">
//                   <span>Total Projects</span>
//                   <strong>{items.length}</strong>
//                 </div>

//                 <div className="property-map-insight-row">
//                   <span>Map Areas</span>
//                   <strong>{groupedMapPoints.length}</strong>
//                 </div>

//                 <div className="property-map-insight-row">
//                   <span>User Location</span>
//                   <strong>{userLocation ? "On" : "Off"}</strong>
//                 </div>

//                 {cityInsights.slice(0, 6).map((item) => (
//                   <div className="property-map-insight-row" key={item.name}>
//                     <span>{item.name}</span>
//                     <strong>{item.count}</strong>
//                   </div>
//                 ))}
//               </div>
//             ) : null}
//           </div>
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
//                   Book a Visit - {getTitle(selectedProperty)}
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

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { apiPost } from "../lib/api";
import { getPropertyDetailHref } from "../../utlis/propertyUrl";
import ProtectedPropertyLink, {
  requirePropertyLogin,
} from "@/components/common/ProtectedPropertyLink";

function getArray(value) {
  if (Array.isArray(value)) return value;
  if (Array.isArray(value?.results)) return value.results;
  if (Array.isArray(value?.data)) return value.data;
  return [];
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

function getImage(property) {
  const primaryImage = Array.isArray(property?.images)
    ? property.images.find((img) => img.is_primary)
    : null;

  return (
    property?.image ||
    property?.imageSrc ||
    property?.featured_image ||
    property?.cover_image ||
    property?.thumbnail ||
    primaryImage?.image_url ||
    primaryImage?.image ||
    primaryImage?.url ||
    property?.images?.[0]?.image_url ||
    property?.images?.[0]?.image ||
    property?.images?.[0]?.url ||
    "/images/home/house-1.jpg"
  );
}

function getImageUrlFromValue(value) {
  if (!value) return "";

  if (typeof value === "string") return value;

  return (
    value?.image_url ||
    value?.image ||
    value?.url ||
    value?.src ||
    value?.file ||
    value?.photo ||
    value?.thumbnail ||
    value?.featured_image ||
    ""
  );
}

function getPropertyImages(property) {
  const fallbackImage = getImage(property);
  const images = [];
  const seen = new Set();

  const addImage = (value) => {
    const imageUrl = getImageUrlFromValue(value);

    if (!imageUrl) return;

    const normalizedUrl = String(imageUrl).trim();

    if (!normalizedUrl || seen.has(normalizedUrl)) return;

    seen.add(normalizedUrl);
    images.push(normalizedUrl);
  };

  addImage(property?.image);
  addImage(property?.imageSrc);
  addImage(property?.featured_image);
  addImage(property?.cover_image);
  addImage(property?.thumbnail);
  addImage(property?.primary_image);

  const arrayFields = [
    property?.images,
    property?.gallery,
    property?.property_images,
    property?.project_images,
    property?.photos,
    property?.media,
  ];

  arrayFields.forEach((field) => {
    if (!Array.isArray(field)) return;

    const sortedImages = [...field].sort((a, b) => {
      const firstPrimary = a?.is_primary || a?.primary ? 1 : 0;
      const secondPrimary = b?.is_primary || b?.primary ? 1 : 0;

      return secondPrimary - firstPrimary;
    });

    sortedImages.forEach(addImage);
  });

  if (images.length === 0) addImage(fallbackImage);

  return images.length > 0 ? images : ["/images/home/house-1.jpg"];
}

function getTitle(property) {
  return (
    property?.title ||
    property?.project_name ||
    property?.property_name ||
    property?.project_title ||
    property?.property_title ||
    property?.name ||
    "Untitled Property"
  );
}

function getLocation(property) {
  return (
    property?.short_location ||
    property?.location ||
    property?.neighborhood ||
    property?.full_address ||
    property?.address ||
    property?.city ||
    "Location on request"
  );
}

function normalizeKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ");
}

function getMapGroupTitle(property) {
  return (
    property?.short_location ||
    property?.neighborhood ||
    property?.location ||
    property?.city ||
    property?.full_address ||
    "Other Location"
  );
}

function getMapGroupKey(property, coords) {
  const placeKey = normalizeKey(
    property?.city &&
      (property?.short_location || property?.neighborhood || property?.location)
      ? `${property.city}-${
          property.short_location || property.neighborhood || property.location
        }`
      : property?.short_location ||
          property?.neighborhood ||
          property?.location ||
          property?.city ||
          property?.zip_code
  );

  if (placeKey) return placeKey;
  if (coords?.lat && coords?.lng) {
    return `${Number(coords.lat).toFixed(3)}_${Number(coords.lng).toFixed(3)}`;
  }

  return `property-${property?.id || Math.random()}`;
}

function getConfiguration(property) {
  if (property?.configuration) return property.configuration;
  if (property?.configuration_text) return property.configuration_text;
  if (property?.bedrooms) return `${property.bedrooms} BHK`;
  if (property?.property_type) return property.property_type;
  return "Configuration on request";
}

function getPhone(property) {
  return (
    property?.seller_phone ||
    property?.phone ||
    property?.contact_phone ||
    property?.contact_number ||
    property?.contact_seller_phone ||
    property?.contact_seller?.phone ||
    property?.contact_seller?.office_number ||
    property?.fallback_sellers?.[0]?.phone ||
    ""
  );
}

function getArea(property) {
  return property?.carpet_area || property?.size_sqft || property?.floor_size || 0;
}

function getPossession(property) {
  return (
    property?.possession_date ||
    property?.possessionDate ||
    property?.expiryDate ||
    "On request"
  );
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function extractCoordinatesFromMapUrl(url = "") {
  if (!url || typeof url !== "string") return null;

  try {
    const decoded = decodeURIComponent(url);

    const googleEmbed = decoded.match(
      /!2d(-?\d+(?:\.\d+)?)!3d(-?\d+(?:\.\d+)?)/i
    );
    if (googleEmbed) {
      return {
        lat: Number(googleEmbed[2]),
        lng: Number(googleEmbed[1]),
        source: "map_url",
      };
    }

    const googleAt = decoded.match(/@(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/i);
    if (googleAt) {
      return {
        lat: Number(googleAt[1]),
        lng: Number(googleAt[2]),
        source: "map_url",
      };
    }

    const bingCp = decoded.match(/cp=(-?\d+(?:\.\d+)?)(?:~|%7E)(-?\d+(?:\.\d+)?)/i);
    if (bingCp) {
      return {
        lat: Number(bingCp[1]),
        lng: Number(bingCp[2]),
        source: "map_url",
      };
    }

    const bingPos = decoded.match(/pos\.(-?\d+(?:\.\d+)?)_(-?\d+(?:\.\d+)?)/i);
    if (bingPos) {
      return {
        lat: Number(bingPos[1]),
        lng: Number(bingPos[2]),
        source: "map_url",
      };
    }

    const general = decoded.match(
      /[?&](?:ll|q|query|center)=(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/i
    );
    if (general) {
      return {
        lat: Number(general[1]),
        lng: Number(general[2]),
        source: "map_url",
      };
    }
  } catch {
    return null;
  }

  return null;
}

const FALLBACK_COORDS = [
  { keys: ["sakinaka", "saki naka", "400072"], lat: 19.1033, lng: 72.8875 },
  { keys: ["andheri"], lat: 19.1136, lng: 72.8697 },
  { keys: ["goregaon west", "400104"], lat: 19.1647, lng: 72.8493 },
  { keys: ["goregaon"], lat: 19.1663, lng: 72.8526 },
  { keys: ["malad west"], lat: 19.1874, lng: 72.8428 },
  { keys: ["malad"], lat: 19.1864, lng: 72.8493 },
  { keys: ["borivali west"], lat: 19.234, lng: 72.8456 },
  { keys: ["borivali"], lat: 19.229, lng: 72.857 },
  { keys: ["kandivali west"], lat: 19.2058, lng: 72.8425 },
  { keys: ["kandivali"], lat: 19.2094, lng: 72.8526 },
  { keys: ["thane"], lat: 19.2183, lng: 72.9781 },
  { keys: ["mulund"], lat: 19.1726, lng: 72.9562 },
  { keys: ["mira road", "mira bhayandar"], lat: 19.2952, lng: 72.8544 },
  { keys: ["pune"], lat: 18.5204, lng: 73.8567 },
  { keys: ["mumbai"], lat: 19.076, lng: 72.8777 },
  { keys: ["maharashtra"], lat: 19.7515, lng: 75.7139 },
];

function getFallbackCoordinates(property) {
  const text = [
    property?.title,
    property?.short_location,
    property?.location,
    property?.neighborhood,
    property?.full_address,
    property?.address,
    property?.city,
    property?.city_slug,
    property?.state,
    property?.zip_code,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const found = FALLBACK_COORDS.find((item) =>
    item.keys.some((key) => text.includes(key.toLowerCase()))
  );

  if (!found) return null;

  return {
    lat: found.lat,
    lng: found.lng,
    source: "fallback",
  };
}

function getStaticPropertyCoordinates(property) {
  const directLat =
    toNumber(property?.latitude) ??
    toNumber(property?.lat) ??
    toNumber(property?.map_latitude) ??
    toNumber(property?.project_latitude);

  const directLng =
    toNumber(property?.longitude) ??
    toNumber(property?.lng) ??
    toNumber(property?.map_longitude) ??
    toNumber(property?.project_longitude);

  if (directLat !== null && directLng !== null) {
    return {
      lat: directLat,
      lng: directLng,
      source: "exact",
    };
  }

  if (Array.isArray(property?.coordinates) && property.coordinates.length >= 2) {
    const lat = toNumber(property.coordinates[0]);
    const lng = toNumber(property.coordinates[1]);

    if (lat !== null && lng !== null) {
      return {
        lat,
        lng,
        source: "exact",
      };
    }
  }

  const fromUrl = extractCoordinatesFromMapUrl(property?.map_embed_url);

  if (fromUrl?.lat && fromUrl?.lng) return fromUrl;

  return null;
}

function getGeocodeQuery(property) {
  return [
    property?.full_address,
    property?.address,
    property?.location,
    property?.short_location,
    property?.neighborhood,
    property?.city,
    property?.state,
    property?.zip_code,
    property?.country || "India",
  ]
    .filter(Boolean)
    .join(", ")
    .replace(/\s+/g, " ")
    .trim();
}

function getGeocodeCacheKey(property) {
  return `growl-property-map-${property?.id || "no-id"}-${normalizeKey(
    getGeocodeQuery(property)
  )}`;
}

async function resolvePropertyCoordinates(property) {
  const staticCoords = getStaticPropertyCoordinates(property);

  if (staticCoords) return staticCoords;

  const query = getGeocodeQuery(property);
  const cacheKey = getGeocodeCacheKey(property);

  if (typeof window !== "undefined") {
    try {
      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        const parsed = JSON.parse(cached);

        if (parsed?.lat && parsed?.lng) {
          return {
            ...parsed,
            source: parsed.source || "geocode_cache",
          };
        }
      }
    } catch {}
  }

  if (query && typeof window !== "undefined") {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=in&q=${encodeURIComponent(
          query
        )}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();

      if (Array.isArray(result) && result[0]?.lat && result[0]?.lon) {
        const geocoded = {
          lat: Number(result[0].lat),
          lng: Number(result[0].lon),
          source: "dynamic_geocode",
        };

        try {
          localStorage.setItem(cacheKey, JSON.stringify(geocoded));
        } catch {}

        return geocoded;
      }
    } catch (error) {
      console.warn("Dynamic map geocode failed:", property?.id, error);
    }
  }

  const fallback = getFallbackCoordinates(property);

  if (fallback?.lat && fallback?.lng) return fallback;

  return null;
}

function getGoogleMapsUrl(property, lat, lng) {
  if (property?.map_embed_url && !property.map_embed_url.includes("/embed")) {
    return property.map_embed_url;
  }

  if (lat && lng) {
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  }

  const query = encodeURIComponent(
    `${getTitle(property)} ${getLocation(property)} ${property?.city || ""}`
  );

  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function loadLeafletAssets() {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      return reject(new Error("Window missing"));
    }

    if (window.L) {
      resolve(window.L);
      return;
    }

    if (!document.querySelector('link[data-leaflet="true"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.dataset.leaflet = "true";
      document.head.appendChild(link);
    }

    const oldScript = document.querySelector('script[data-leaflet="true"]');

    if (oldScript) {
      oldScript.addEventListener("load", () => resolve(window.L));
      oldScript.addEventListener("error", reject);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.dataset.leaflet = "true";
    script.onload = () => resolve(window.L);
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

const actionBtnStyle = {
  width: "40px",
  height: "40px",
  minWidth: "40px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(23, 60, 91, 0.88)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 8px 24px rgba(23,60,91,0.22)",
  padding: 0,
};

function BookmarkIcon({ active = false }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4.75H17C17.69 4.75 18.25 5.31 18.25 6V20L12 16.2L5.75 20V6C5.75 5.31 6.31 4.75 7 4.75Z"
        stroke={active ? "#EEC629" : "#ffffff"}
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
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={active ? "#EEC629" : "none"}
    >
      <path
        d="M12 20.5C12 20.5 4.5 16 4.5 9.75C4.5 7.4 6.4 5.5 8.75 5.5C10.2 5.5 11.48 6.22 12 7.32C12.52 6.22 13.8 5.5 15.25 5.5C17.6 5.5 19.5 7.4 19.5 9.75C19.5 16 12 20.5 12 20.5Z"
        stroke={active ? "#EEC629" : "#ffffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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


function PropertyImageSlider({ property, detailHref, onAllowedClick }) {
  const images = useMemo(() => getPropertyImages(property), [property]);
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartRef = useRef(null);
  const pointerMovedRef = useRef(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [property?.id, images.length]);

  const totalImages = images.length;

  const goToSlide = (index) => {
    if (totalImages <= 1) return;

    setActiveIndex((index + totalImages) % totalImages);
  };

  const handlePrev = (event) => {
    event.preventDefault();
    event.stopPropagation();
    goToSlide(activeIndex - 1);
  };

  const handleNext = (event) => {
    event.preventDefault();
    event.stopPropagation();
    goToSlide(activeIndex + 1);
  };

  const handleDotClick = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    goToSlide(index);
  };

  const handlePointerStart = (event) => {
    pointerStartRef.current = event.clientX;
    pointerMovedRef.current = false;
  };

  const handlePointerMove = (event) => {
    if (pointerStartRef.current === null) return;

    const diff = event.clientX - pointerStartRef.current;

    if (Math.abs(diff) > 8) {
      pointerMovedRef.current = true;
    }
  };

  const handlePointerEnd = (event) => {
    if (pointerStartRef.current === null) return;

    const diff = event.clientX - pointerStartRef.current;

    if (Math.abs(diff) > 42) {
      event.preventDefault();
      event.stopPropagation();

      if (diff < 0) {
        goToSlide(activeIndex + 1);
      } else {
        goToSlide(activeIndex - 1);
      }
    }

    pointerStartRef.current = null;

    window.setTimeout(() => {
      pointerMovedRef.current = false;
    }, 80);
  };

  const preventClickAfterSwipe = (event) => {
    if (!pointerMovedRef.current) return;

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className="property-grid-slider-wrap"
      onPointerDown={handlePointerStart}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={() => {
        pointerStartRef.current = null;
        pointerMovedRef.current = false;
      }}
    >
      <div
        className="property-grid-slider-track"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {images.map((imageSrc, index) => (
          <ProtectedPropertyLink
            href={detailHref}
            onAllowedClick={onAllowedClick}
            className="property-grid-slider-slide"
            onClickCapture={preventClickAfterSwipe}
            draggable={false}
            key={`${imageSrc}-${index}`}
          >
            <Image
              className="lazyload property-grid-slider-image"
              alt={`${getTitle(property)} ${index + 1}`}
              src={imageSrc}
              width={600}
              height={401}
              draggable={false}
            />
          </ProtectedPropertyLink>
        ))}
      </div>

      {totalImages > 1 ? (
        <>
          <button
            type="button"
            className="property-grid-slider-arrow property-grid-slider-prev"
            onClick={handlePrev}
            aria-label="Previous property image"
          >
            ‹
          </button>

          <button
            type="button"
            className="property-grid-slider-arrow property-grid-slider-next"
            onClick={handleNext}
            aria-label="Next property image"
          >
            ›
          </button>

          <div className="property-grid-slider-dots">
            {images.map((imageSrc, index) => (
              <button
                type="button"
                className={`property-grid-slider-dot ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={(event) => handleDotClick(event, index)}
                aria-label={`Go to property image ${index + 1}`}
                key={`dot-${imageSrc}-${index}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function PropertyGridItems({
  properties = [],
  onFavoriteUpdated = null,
}) {
  const user = getStoredUser();
  const mapElementRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerLayerRef = useRef(null);
  const leafletRef = useRef(null);
  const markerRefs = useRef({});

  const [items, setItems] = useState(() =>
    getArray(properties).map((property) => ({
      ...property,
      is_favorite: !!property?.is_favorite,
      is_liked: !!property?.is_liked,
    }))
  );

  const [activeTab, setActiveTab] = useState("properties");
  const [mapReady, setMapReady] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [dynamicMapPoints, setDynamicMapPoints] = useState([]);
  const [mapResolving, setMapResolving] = useState(false);
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

  useEffect(() => {
    const handleProtectedPopupClick = (event) => {
      const protectedLink = event.target.closest(
        '[data-protected-property-link="true"]'
      );

      if (!protectedLink) return;

      const href = protectedLink.getAttribute("href");

      if (!href) return;

      const allowed = requirePropertyLogin(href);

      if (!allowed) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener("click", handleProtectedPopupClick, true);

    return () => {
      document.removeEventListener("click", handleProtectedPopupClick, true);
    };
  }, []);

  useEffect(() => {
    setItems(
      getArray(properties).map((property) => ({
        ...property,
        is_favorite: !!property?.is_favorite,
        is_liked: !!property?.is_liked,
      }))
    );
  }, [properties]);

  useEffect(() => {
    let cancelled = false;

    async function buildDynamicMapPoints() {
      setMapResolving(true);

      const visibleItems = items.filter(
        (property) =>
          String(property?.post_status || "publish").toLowerCase() === "publish" &&
          property?.is_approved !== false
      );

      const resolvedPoints = [];

      for (const property of visibleItems) {
        const coords = await resolvePropertyCoordinates(property);

        if (cancelled) return;

        if (coords?.lat && coords?.lng) {
          resolvedPoints.push({
            property,
            lat: coords.lat,
            lng: coords.lng,
            key: getMapGroupKey(property, coords),
            groupTitle: getMapGroupTitle(property),
            source: coords.source,
          });
        }
      }

      if (!cancelled) {
        setDynamicMapPoints(resolvedPoints);
        setMapResolving(false);
      }
    }

    buildDynamicMapPoints();

    return () => {
      cancelled = true;
    };
  }, [items]);

  const groupedMapPoints = useMemo(() => {
    const groups = new Map();

    dynamicMapPoints.forEach((point) => {
      if (!groups.has(point.key)) {
        groups.set(point.key, {
          key: point.key,
          title: point.groupTitle,
          lat: point.lat,
          lng: point.lng,
          properties: [],
        });
      }

      groups.get(point.key).properties.push(point.property);
    });

    return Array.from(groups.values()).map((group) => {
      const coordsList = dynamicMapPoints
        .filter((point) => point.key === group.key)
        .map((point) => ({
          lat: point.lat,
          lng: point.lng,
        }));

      if (coordsList.length > 1) {
        const avgLat =
          coordsList.reduce((sum, item) => sum + item.lat, 0) /
          coordsList.length;
        const avgLng =
          coordsList.reduce((sum, item) => sum + item.lng, 0) /
          coordsList.length;

        return {
          ...group,
          lat: avgLat,
          lng: avgLng,
        };
      }

      return group;
    });
  }, [dynamicMapPoints]);

  const cityInsights = useMemo(() => {
    const countMap = new Map();

    items.forEach((item) => {
      const name = item?.city || item?.short_location || item?.location || "Other";
      countMap.set(name, (countMap.get(name) || 0) + 1);
    });

    return Array.from(countMap.entries())
      .map(([name, count]) => ({
        name,
        count,
      }))
      .sort((a, b) => b.count - a.count);
  }, [items]);

  useEffect(() => {
    let cancelled = false;

    loadLeafletAssets()
      .then((L) => {
        if (cancelled || !mapElementRef.current || mapInstanceRef.current) return;

        leafletRef.current = L;

        const map = L.map(mapElementRef.current, {
          zoomControl: true,
          scrollWheelZoom: true,
        }).setView([19.076, 72.8777], 10);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        markerLayerRef.current = L.layerGroup().addTo(map);
        mapInstanceRef.current = map;
        setMapReady(true);

        setTimeout(() => map.invalidateSize(), 250);
        setTimeout(() => map.invalidateSize(), 900);

        if (typeof ResizeObserver !== "undefined") {
          const observer = new ResizeObserver(() => map.invalidateSize());
          observer.observe(mapElementRef.current);
          map._propertyResizeObserver = observer;
        }
      })
      .catch((error) => console.error("Leaflet map load failed:", error));

    return () => {
      cancelled = true;

      const map = mapInstanceRef.current;

      if (map?._propertyResizeObserver) {
        map._propertyResizeObserver.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) =>
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
      () => setUserLocation(null),
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 1000 * 60 * 30,
      }
    );
  }, []);

  function createSinglePopupHtml(property, lat, lng) {
    const mapsUrl = getGoogleMapsUrl(property, lat, lng);
    const detailHref = getPropertyDetailHref(property);

    return `
      <div class="property-map-popup-card">
        <img src="${escapeHtml(getImage(property))}" alt="${escapeHtml(
      getTitle(property)
    )}" class="property-map-popup-img" />
        <div class="property-map-popup-body">
          <h4>${escapeHtml(getTitle(property))}</h4>
          <p>${escapeHtml(getLocation(property))}</p>
          <h5>${escapeHtml(formatPrice(property.price))}</h5>
          <div class="property-map-popup-config">${escapeHtml(
            getConfiguration(property)
          )}</div>
          <div class="property-map-popup-info">
            <span><b>Possession</b><br/>${escapeHtml(
              getPossession(property)
            )}</span>
            <span><b>Carpet Area</b><br/>${escapeHtml(
              getArea(property)
            )} sq.ft.</span>
          </div>
          <div class="property-map-popup-actions">
            <a href="${detailHref}" data-protected-property-link="true" class="property-map-popup-btn">View Details</a>
            <a href="${escapeHtml(
              mapsUrl
            )}" target="_blank" rel="noopener noreferrer" class="property-map-popup-link">Open in Google Maps</a>
          </div>
        </div>
      </div>`;
  }

  function createGroupPopupHtml(group) {
    if (group.properties.length === 1) {
      return createSinglePopupHtml(group.properties[0], group.lat, group.lng);
    }

    const mapsUrl = getGoogleMapsUrl(group.properties[0], group.lat, group.lng);

    const cards = group.properties
      .slice(0, 12)
      .map((property) => {
        const detailHref = getPropertyDetailHref(property);

        return `
          <a href="${detailHref}" data-protected-property-link="true" class="property-map-group-item">
            <img src="${escapeHtml(getImage(property))}" alt="${escapeHtml(
          getTitle(property)
        )}" />
            <div>
              <h5>${escapeHtml(getTitle(property))}</h5>
              <p>${escapeHtml(getLocation(property))}</p>
              <strong>${escapeHtml(formatPrice(property.price))}</strong>
              <small>View Details</small>
            </div>
          </a>`;
      })
      .join("");

    return `
      <div class="property-map-group-popup">
        <div class="property-map-group-head">
          <h4>${group.properties.length} Projects in ${escapeHtml(
      group.title || getLocation(group.properties[0])
    )}</h4>
          <p>${escapeHtml(getLocation(group.properties[0]))}</p>
          <a href="${escapeHtml(
            mapsUrl
          )}" target="_blank" rel="noopener noreferrer">Open this location in Google Maps</a>
        </div>
        ${cards}
      </div>`;
  }

  useEffect(() => {
    if (
      !mapReady ||
      !leafletRef.current ||
      !mapInstanceRef.current ||
      !markerLayerRef.current
    ) {
      return;
    }

    const L = leafletRef.current;
    const map = mapInstanceRef.current;
    const layer = markerLayerRef.current;

    layer.clearLayers();
    markerRefs.current = {};

    const bounds = [];

    groupedMapPoints.forEach((group) => {
      const icon = L.divIcon({
        className: "property-map-custom-marker-wrap",
        html: `<div class="property-map-count-marker">${group.properties.length}</div>`,
        iconSize: [46, 46],
        iconAnchor: [23, 23],
        popupAnchor: [0, -26],
      });

      const marker = L.marker([group.lat, group.lng], {
        icon,
      })
        .bindPopup(createGroupPopupHtml(group), {
          maxWidth: 380,
          minWidth: group.properties.length > 1 ? 320 : 330,
          className: "property-map-popup",
        })
        .addTo(layer);

      marker.on("dblclick", () => {
        const mapsUrl = getGoogleMapsUrl(group.properties[0], group.lat, group.lng);
        window.open(mapsUrl, "_blank", "noopener,noreferrer");
      });

      group.properties.forEach((property) => {
        markerRefs.current[property.id] = marker;
      });

      bounds.push([group.lat, group.lng]);
    });

    if (userLocation?.lat && userLocation?.lng) {
      const userIcon = L.divIcon({
        className: "property-user-marker-wrap",
        html: `<div class="property-user-marker"><span></span></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      L.marker([userLocation.lat, userLocation.lng], {
        icon: userIcon,
      })
        .bindPopup("Your current location")
        .addTo(layer);

      bounds.push([userLocation.lat, userLocation.lng]);
    }

    setTimeout(() => map.invalidateSize(), 100);

    if (bounds.length > 0) {
      map.fitBounds(bounds, {
        padding: [45, 45],
        maxZoom: 14,
      });
    }
  }, [groupedMapPoints, mapReady, userLocation]);

  async function focusPropertyOnMap(property) {
    let point = dynamicMapPoints.find((item) => item.property.id === property.id);

    if (!point) {
      const coords = await resolvePropertyCoordinates(property);

      if (!coords || !mapInstanceRef.current) return;

      point = {
        property,
        lat: coords.lat,
        lng: coords.lng,
        key: getMapGroupKey(property, coords),
        groupTitle: getMapGroupTitle(property),
      };
    }

    const marker = markerRefs.current[property.id];

    if (!mapInstanceRef.current) return;

    mapInstanceRef.current.setView([point.lat, point.lng], 15, {
      animate: true,
    });

    if (marker) {
      setTimeout(() => marker.openPopup(), 250);
    }
  }

  async function handleFavorite(id) {
    if (!user?.id) {
      requirePropertyLogin(window.location.pathname || "/");
      return;
    }

    try {
      const res = await apiPost(`/admindashboard/customer/toggle-favorite/`, {
        user_id: user.id,
        property_id: id,
      });

      setItems((prev) =>
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

      if (onFavoriteUpdated) onFavoriteUpdated();
    } catch (error) {
      console.error(error);
      alert(error.message || "Favorite update failed");
    }
  }

  async function handleLiked(id) {
    if (!user?.id) {
      requirePropertyLogin(window.location.pathname || "/");
      return;
    }

    try {
      const res = await apiPost(`/admindashboard/customer/like-video/`, {
        user_id: user.id,
        property_id: id,
      });

      setItems((prev) =>
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
  }

  async function handleViewed(propertyId) {
    if (!user?.id) return;

    try {
      await apiPost(`/admindashboard/customer/add-view/`, {
        user_id: user.id,
        property_id: propertyId,
      });
    } catch (error) {
      console.error("View tracking failed:", error);
    }
  }

  function openBookingModal(property) {
    const detailHref = getPropertyDetailHref(property);

    if (!user?.id) {
      requirePropertyLogin(detailHref);
      return;
    }

    setSelectedProperty(property);
    setBookingForm({
      name: user?.full_name || user?.username || user?.name || "",
      phone: user?.phone || "",
      visit_date: "",
      visit_time: "",
      message: `Interested in site visit for ${getTitle(property)}`,
    });
    setMessage("");
    setBookingOpen(true);
  }

  function closeBookingModal() {
    setBookingOpen(false);
    setSelectedProperty(null);
    setMessage("");
  }

  function handleBookingChange(e) {
    const { name, value } = e.target;

    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function submitBooking(e) {
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

      setTimeout(() => closeBookingModal(), 1000);
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to book visit.");
    } finally {
      setBookingLoading(false);
    }
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --growl-logo-blue: #1E4D74;
          --growl-logo-blue-dark: #173C5B;
          --growl-logo-yellow: #EEC629;
          --growl-logo-yellow-soft: rgba(238, 198, 41, 0.16);
        }

        .property-grid-map-wrapper {
          grid-column: 1 / -1 !important;
          width: 100% !important;
          max-width: 100% !important;
          display: block !important;
          clear: both !important;
        }

        .property-map-listing-layout {
          display: grid !important;
          grid-template-columns: minmax(0, 56%) minmax(420px, 44%) !important;
          gap: 18px !important;
          align-items: stretch !important;
          width: 100% !important;
          max-width: 100% !important;
          height: calc(100vh - 110px) !important;
          min-height: 620px !important;
          overflow: hidden !important;
        }

        .property-map-list-panel {
          min-width: 0 !important;
          width: 100% !important;
          height: 100% !important;
          max-height: calc(100vh - 110px) !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          padding-right: 8px !important;
          scrollbar-width: thin;
          scrollbar-color: #1E4D74 transparent;
        }

        .property-map-list-panel::-webkit-scrollbar {
          width: 7px;
        }

        .property-map-list-panel::-webkit-scrollbar-track {
          background: transparent;
        }

        .property-map-list-panel::-webkit-scrollbar-thumb {
          background: #1E4D74;
          border-radius: 99px;
        }

        .property-map-head {
          margin-bottom: 22px;
        }

        .property-map-head h2 {
          font-size: 30px;
          line-height: 1.2;
          margin: 0 0 10px;
          color: #111827;
          font-weight: 700;
        }

        .property-map-head p {
          margin: 0 0 14px;
          color: #4b5563;
          font-size: 15px;
        }

        .property-map-head-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: #374151;
        }

        .property-map-head-row strong {
          color: #111827;
        }

        .property-map-list-grid {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 24px !important;
          width: 100% !important;
        }

        .property-map-panel {
          position: sticky !important;
          top: 90px !important;
          height: 100% !important;
          min-height: 620px !important;
          max-height: calc(100vh - 110px) !important;
          border-radius: 18px !important;
          overflow: hidden !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          background: #e5e7eb !important;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.12) !important;
        }

        .property-map-canvas {
          height: 100% !important;
          width: 100% !important;
          min-height: 620px !important;
          z-index: 1;
        }

        .property-map-canvas .leaflet-container {
          height: 100% !important;
          width: 100% !important;
        }

        .property-map-tabs {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 700;
          display: flex;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 999px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.16);
        }

        .property-map-tab-btn {
          border: 0;
          background: transparent;
          padding: 12px 24px;
          color: #111827;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
        }

        .property-map-tab-btn.active {
          background: #EEC629;
          color: #ffffff;
        }

        .property-map-insights {
          position: absolute;
          top: 88px;
          right: 16px;
          z-index: 720;
          width: 280px;
          background: #ffffff;
          color: #111827;
          border-radius: 16px;
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.18);
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 18px;
        }

        .property-map-insights h4 {
          margin: 0 0 12px;
          font-size: 18px;
          color: #111827;
        }

        .property-map-insight-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 9px 0;
          border-bottom: 1px solid #eeeeee;
          color: #4b5563;
          font-size: 14px;
        }

        .property-map-insight-row:last-child {
          border-bottom: 0;
        }

        .property-map-insight-row strong {
          color: #1E4D74;
          font-size: 16px;
        }

        .property-map-custom-marker-wrap,
        .property-user-marker-wrap {
          background: transparent !important;
          border: 0 !important;
        }

        .property-map-count-marker {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0a;
          color: #ffffff;
          font-weight: 900;
          font-size: 16px;
          border: 2px solid #ffffff;
          box-shadow: 0 7px 18px rgba(0, 0, 0, 0.38);
          position: relative;
          border-radius: 3px;
        }

        .property-map-count-marker::after {
          content: "";
          position: absolute;
          right: -4px;
          top: -4px;
          width: 10px;
          height: 10px;
          background: #EEC629;
        }

        .property-user-marker {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.25);
          border: 2px solid #1E4D74;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .property-user-marker span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #1E4D74;
        }

        .property-map-popup .leaflet-popup-content-wrapper {
          border-radius: 18px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
        }

        .property-map-popup .leaflet-popup-content {
          margin: 0;
        }

        .property-map-popup-card {
          width: 330px;
          background: #ffffff;
          color: #111827;
        }

        .property-map-popup-img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          display: block;
        }

        .property-map-popup-body {
          padding: 16px 18px 14px;
        }

        .property-map-popup-body h4 {
          margin: 0 0 6px;
          font-size: 20px;
          line-height: 1.2;
          color: #111827;
        }

        .property-map-popup-body p {
          margin: 0 0 8px;
          color: #6b7280;
          font-size: 14px;
        }

        .property-map-popup-body h5 {
          margin: 0 0 8px;
          color: #111827;
          font-size: 20px;
          font-weight: 700;
        }

        .property-map-popup-config {
          color: #0f172a;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .property-map-popup-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 10px 0;
          border-top: 1px solid #eeeeee;
          border-bottom: 1px solid #eeeeee;
          color: #374151;
          font-size: 14px;
        }

        .property-map-popup-info b {
          color: #6b7280;
          font-weight: 500;
        }

        .property-map-popup-actions {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-top: 10px;
        }

        .property-map-popup-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 38px;
          border-radius: 8px;
          background: #1E4D74;
          color: #ffffff !important;
          text-decoration: none !important;
          font-weight: 700;
        }

        .property-map-popup-link {
          color: #EEC629 !important;
          font-size: 14px;
          text-decoration: none !important;
        }

        .property-map-group-popup {
          width: 320px;
          max-height: 430px;
          overflow: auto;
          background: #ffffff;
          color: #111827;
          padding: 14px;
        }

        .property-map-group-head h4 {
          margin: 0 0 3px;
          font-size: 18px;
          color: #111827;
        }

        .property-map-group-head p {
          margin: 0 0 10px;
          color: #6b7280;
          font-size: 13px;
        }

        .property-map-group-item {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 10px;
          padding: 9px 0;
          border-top: 1px solid #eeeeee;
          text-decoration: none !important;
          color: #111827 !important;
        }

        .property-map-group-item img {
          width: 72px;
          height: 58px;
          object-fit: cover;
          border-radius: 8px;
        }

        .property-map-group-item h5 {
          margin: 0 0 3px;
          color: #111827;
          font-size: 14px;
          line-height: 1.2;
        }

        .property-map-group-item p {
          margin: 0 0 4px;
          color: #6b7280;
          font-size: 12px;
        }

        .property-map-group-item strong {
          color: #1E4D74;
          font-size: 13px;
        }

        .property-map-group-item small {
          display: block;
          color: #111827;
          margin-top: 3px;
          font-weight: 700;
          font-size: 12px;
        }


        .property-grid-card-badges {
          position: absolute !important;
          top: 14px !important;
          left: 14px !important;
          z-index: 20 !important;
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
          gap: 7px !important;
          width: auto !important;
          max-width: calc(100% - 170px) !important;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none !important;
          pointer-events: none !important;
        }

        .property-grid-card-badge {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: auto !important;
          min-width: 0 !important;
          height: 30px !important;
          min-height: 30px !important;
          padding: 0 12px !important;
          border-radius: 999px !important;
          font-size: 12px !important;
          line-height: 1 !important;
          font-weight: 800 !important;
          text-transform: capitalize !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
          position: static !important;
          transform: none !important;
          margin: 0 !important;
          float: none !important;
        }

        .property-grid-card-badge.is-featured-badge {
          max-width: 82px !important;
          background: rgba(23, 60, 91, 0.96) !important;
          color: #ffffff !important;
        }

        .property-grid-card-badge.is-status-badge {
          max-width: 72px !important;
          background: rgba(238, 198, 41, 0.98) !important;
          color: #173C5B !important;
        }

        .property-grid-action-buttons {
          position: absolute !important;
          right: 14px !important;
          top: 14px !important;
          z-index: 19 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: flex-end !important;
          gap: 7px !important;
          width: auto !important;
          max-width: 140px !important;
        }

        .property-grid-action-buttons button,
        .property-grid-action-buttons a {
          flex: 0 0 40px !important;
          width: 40px !important;
          height: 40px !important;
          min-width: 40px !important;
        }

        .property-grid-card-custom {
          border-radius: 22px;
          overflow: hidden;
          background: #ffffff !important;
          color: #111827 !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .property-grid-image-wrap {
          position: relative !important;
          overflow: hidden !important;
          height: 280px !important;
          width: 100% !important;
          background: #eef3f7 !important;
        }

        .property-grid-slider-wrap {
          position: relative !important;
          width: 100% !important;
          height: 280px !important;
          overflow: hidden !important;
          background: #eef3f7 !important;
          touch-action: pan-y !important;
          user-select: none !important;
        }

        .property-grid-slider-track {
          height: 100% !important;
          display: flex !important;
          transition: transform 0.36s ease !important;
          will-change: transform !important;
        }

        .property-grid-slider-slide {
          flex: 0 0 100% !important;
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: relative !important;
          overflow: hidden !important;
          text-decoration: none !important;
        }

        .property-grid-slider-image {
          width: 100% !important;
          height: 280px !important;
          min-height: 280px !important;
          max-height: 280px !important;
          object-fit: cover !important;
          object-position: center center !important;
          display: block !important;
          transition: transform 0.45s ease !important;
          pointer-events: none !important;
        }

        .property-grid-card-custom:hover .property-grid-slider-image {
          transform: scale(1.05) !important;
        }

        .property-grid-slider-arrow {
          position: absolute !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 8 !important;
          width: 38px !important;
          height: 38px !important;
          border-radius: 50% !important;
          border: 1px solid rgba(255, 255, 255, 0.72) !important;
          background: rgba(23, 60, 91, 0.92) !important;
          color: #ffffff !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 31px !important;
          line-height: 1 !important;
          font-weight: 400 !important;
          cursor: pointer !important;
          opacity: 1 !important;
          visibility: visible !important;
          box-shadow: 0 8px 20px rgba(23, 60, 91, 0.28) !important;
          transition: all 0.2s ease !important;
          padding: 0 0 3px !important;
        }

        .property-grid-slider-arrow:hover {
          background: var(--growl-logo-yellow) !important;
          color: var(--growl-logo-blue-dark) !important;
          border-color: var(--growl-logo-yellow) !important;
        }

        .property-grid-slider-prev {
          left: 12px !important;
        }

        .property-grid-slider-next {
          right: 12px !important;
        }

        .property-grid-slider-dots {
          position: absolute !important;
          left: 50% !important;
          bottom: 13px !important;
          transform: translateX(-50%) !important;
          z-index: 8 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 6px !important;
          padding: 6px 9px !important;
          border-radius: 999px !important;
          background: rgba(23, 60, 91, 0.58) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
        }

        .property-grid-slider-dot {
          width: 7px !important;
          height: 7px !important;
          min-width: 7px !important;
          border-radius: 50% !important;
          border: 0 !important;
          padding: 0 !important;
          background: rgba(255, 255, 255, 0.72) !important;
          cursor: pointer !important;
          transition: all 0.22s ease !important;
        }

        .property-grid-slider-dot.active {
          width: 22px !important;
          border-radius: 999px !important;
          background: var(--growl-logo-yellow) !important;
        }

        .property-grid-card-content {
          background: #ffffff !important;
          color: #111827 !important;
          padding: 24px 22px 22px;
        }

        .property-grid-card-title {
          margin-bottom: 12px;
          color: #111827 !important;
          font-weight: 700;
        }

        .property-grid-card-title-link {
          color: #111827 !important;
          text-decoration: none !important;
        }

        .property-grid-card-title-link:hover {
          color: #1E4D74 !important;
        }

        .property-grid-card-location {
          color: #6b7280 !important;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .property-grid-card-location i {
          color: #6b7280 !important;
        }

        .property-grid-card-config {
          background: #f4efec !important;
          border-radius: 12px;
          padding: 10px 14px;
          margin-bottom: 12px;
          font-size: 14px;
          color: #111827 !important;
        }

        .property-grid-card-config strong {
          color: #4b5563 !important;
        }

        .property-grid-card-config span {
          color: #111827 !important;
        }

        .property-grid-card-meta {
          color: #6b7280 !important;
          margin-bottom: 18px;
        }

        .property-grid-card-meta li {
          color: #6b7280 !important;
          gap: 4px;
        }

        .property-grid-card-meta span {
          color: #111827 !important;
          margin-right: 4px;
          font-weight: 600;
        }

        .property-grid-card-bottom {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          gap: 14px;
          border-top: 1px solid #eeeeee !important;
          padding-top: 16px;
        }

        .property-grid-card-price {
          margin: 0 !important;
          color: #1E4D74 !important;
          font-weight: 700;
          line-height: 1.2;
          word-break: break-word;
        }

        .property-grid-card-bottom .wrap-btn {
          display: grid !important;
          grid-template-columns: 1fr 1fr;
          gap: 10px !important;
          width: 100% !important;
        }

        .property-grid-card-bottom .tf-btn {
          width: 100% !important;
          min-width: 0 !important;
          padding-left: 12px !important;
          padding-right: 12px !important;
          justify-content: center !important;
          white-space: nowrap !important;
        }

        .property-grid-details-btn {
          color: #1E4D74 !important;
          border: 1px solid #1E4D74 !important;
          background: transparent !important;
          text-decoration: none !important;
        }

        .property-grid-details-btn:hover {
          background: #1E4D74 !important;
          color: #ffffff !important;
        }

        .property-grid-book-btn {
          background: #1E4D74 !important;
          color: #ffffff !important;
          border: 1px solid #1E4D74 !important;
        }

        .property-grid-book-btn:hover {
          background: #1E4D74 !important;
          border-color: #1E4D74 !important;
          color: #ffffff !important;
        }

        .property-map-mini-btn {
          margin-top: 10px;
          border: 1px solid #1E4D74;
          background: transparent;
          color: #1E4D74;
          border-radius: 8px;
          padding: 8px 12px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
        }

        .property-map-mini-btn:hover {
          background: #1E4D74;
          color: #ffffff;
        }

        @media (max-width: 1199px) {
          .property-map-listing-layout {
            grid-template-columns: 1fr !important;
            height: auto !important;
            min-height: 0 !important;
            overflow: visible !important;
          }

          .property-map-list-panel {
            height: auto !important;
            max-height: none !important;
            overflow: visible !important;
            padding-right: 0 !important;
          }

          .property-map-panel {
            position: relative !important;
            top: auto !important;
            height: 560px !important;
            min-height: 560px !important;
            max-height: none !important;
            order: -1;
          }

          .property-map-canvas {
            min-height: 560px !important;
          }
        }

        @media (max-width: 767px) {
          .property-map-list-grid {
            grid-template-columns: 1fr !important;
          }

          .property-map-panel {
            height: 480px !important;
            min-height: 480px !important;
          }

          .property-map-canvas {
            min-height: 480px !important;
          }

          .property-grid-image-wrap,
          .property-grid-slider-wrap,
          .property-grid-slider-image {
            height: 240px !important;
            min-height: 240px !important;
            max-height: 240px !important;
          }


          .property-grid-card-badges {
            top: 10px !important;
            left: 10px !important;
            gap: 6px !important;
            max-width: calc(100% - 132px) !important;
          }

          .property-grid-card-badge {
            max-width: 76px !important;
            min-height: 26px !important;
            padding: 6px 10px !important;
            font-size: 11px !important;
          }

          .property-grid-action-buttons {
            top: 10px !important;
            right: 10px !important;
            gap: 6px !important;
            max-width: 120px !important;
          }

          .property-grid-action-buttons button,
          .property-grid-action-buttons a {
            flex-basis: 34px !important;
            width: 34px !important;
            height: 34px !important;
            min-width: 34px !important;
          }

          .property-grid-slider-arrow {
            width: 32px !important;
            height: 32px !important;
            font-size: 26px !important;
          }

          .property-grid-slider-prev {
            left: 9px !important;
          }

          .property-grid-slider-next {
            right: 9px !important;
          }

          .property-grid-slider-dots {
            bottom: 10px !important;
            gap: 5px !important;
            padding: 5px 8px !important;
          }

          .property-grid-slider-dot {
            width: 6px !important;
            height: 6px !important;
            min-width: 6px !important;
          }

          .property-grid-slider-dot.active {
            width: 19px !important;
          }

          .property-grid-card-badges {
            top: 12px !important;
            left: 12px !important;
            max-width: calc(100% - 156px) !important;
          }

          .property-grid-card-badge {
            min-height: 28px !important;
            padding: 6px 11px !important;
            font-size: 12px !important;
          }

          .property-grid-action-buttons {
            top: 12px !important;
            right: 12px !important;
            gap: 7px !important;
            max-width: 138px !important;
          }

          .property-grid-action-buttons button,
          .property-grid-action-buttons a {
            width: 38px !important;
            height: 38px !important;
            min-width: 38px !important;
            flex-basis: 38px !important;
          }

          .property-map-tab-btn {
            padding: 10px 16px;
            font-size: 14px;
          }

          .property-map-insights {
            left: 12px;
            right: 12px;
            width: auto;
          }
        }
      `}</style>

      <div className="property-grid-map-wrapper">
        <div className="property-map-listing-layout">
          <div className="property-map-list-panel">
            <div className="property-map-head">
              <h2>Projects Listing</h2>
              <p>
                Verified inventory, location-wise project pins and quick property
                overview.
              </p>

              <div className="property-map-head-row">
                <span>
                  Showing <strong>{items.length}</strong> Projects
                </span>

                <span>
                  Map Areas: <strong>{groupedMapPoints.length}</strong>
                  {mapResolving ? "..." : ""}
                </span>
              </div>
            </div>

            <div className="property-map-list-grid">
              {items.map((property) => {
                const sellerPhone = getPhone(property);
                const detailHref = getPropertyDetailHref(property);

                return (
                  <div
                    className="box-house hover-img property-grid-card-custom"
                    key={property.id}
                  >
                    <div className="image-wrap property-grid-image-wrap">
                      <PropertyImageSlider
                        property={property}
                        detailHref={detailHref}
                        onAllowedClick={() => handleViewed(property.id)}
                      />

                      <div className="property-grid-card-badges">
                        {property.property_label ? (
                          <span className="property-grid-card-badge is-featured-badge">
                            {property.property_label}
                          </span>
                        ) : null}

                        <span className="property-grid-card-badge is-status-badge">
                          {property.property_status === "for-rent"
                            ? "For Rent"
                            : "For Sale"}
                        </span>
                      </div>

                      <div className="property-grid-action-buttons">
                        <button
                          type="button"
                          style={actionBtnStyle}
                          onClick={() => handleFavorite(property.id)}
                          title="Favorite"
                        >
                          <BookmarkIcon active={property.is_favorite} />
                        </button>

                        <button
                          type="button"
                          style={actionBtnStyle}
                          onClick={() => handleLiked(property.id)}
                          title="Like"
                        >
                          <HeartIcon active={property.is_liked} />
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

                    <div className="content property-grid-card-content">
                      <h5 className="title property-grid-card-title">
                        <ProtectedPropertyLink
                          href={detailHref}
                          onAllowedClick={() => handleViewed(property.id)}
                          className="property-grid-card-title-link"
                        >
                          {getTitle(property)}
                        </ProtectedPropertyLink>
                      </h5>

                      <p className="location text-1 flex items-center gap-6 property-grid-card-location">
                        <i className="icon-location" /> {getLocation(property)}
                      </p>

                      <div className="property-grid-card-config">
                        <strong>Configuration:</strong>{" "}
                        <span>{getConfiguration(property)}</span>
                      </div>

                      <ul className="meta-list flex property-grid-card-meta">
                        <li className="text-1 flex">
                          <span>{property.bedrooms || 0}</span>Beds
                        </li>

                        <li className="text-1 flex">
                          <span>{property.bathrooms || 0}</span>Baths
                        </li>

                        <li className="text-1 flex">
                          <span>{getArea(property)}</span>Sqft
                        </li>
                      </ul>

                      <div className="bot property-grid-card-bottom">
                        <h5 className="price property-grid-card-price">
                          {formatPrice(property.price)}
                        </h5>

                        <div className="wrap-btn flex gap-8">
                          <ProtectedPropertyLink
                            href={detailHref}
                            className="tf-btn style-border pd-4 property-grid-details-btn"
                            onAllowedClick={() => handleViewed(property.id)}
                          >
                            Details
                          </ProtectedPropertyLink>

                          <button
                            type="button"
                            className="tf-btn pd-4 property-grid-book-btn"
                            onClick={() => openBookingModal(property)}
                          >
                            Book Visit
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="property-map-mini-btn"
                        onClick={() => focusPropertyOnMap(property)}
                      >
                        Show on Map
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="property-map-panel">
            <div className="property-map-tabs">
              <button
                type="button"
                className={`property-map-tab-btn ${
                  activeTab === "properties" ? "active" : ""
                }`}
                onClick={() => setActiveTab("properties")}
              >
                Properties
              </button>

              <button
                type="button"
                className={`property-map-tab-btn ${
                  activeTab === "insights" ? "active" : ""
                }`}
                onClick={() => setActiveTab("insights")}
              >
                Map Insights
              </button>
            </div>

            <div ref={mapElementRef} className="property-map-canvas" />

            {activeTab === "insights" ? (
              <div className="property-map-insights">
                <h4>Map Insights</h4>

                <div className="property-map-insight-row">
                  <span>Total Projects</span>
                  <strong>{items.length}</strong>
                </div>

                <div className="property-map-insight-row">
                  <span>Map Areas</span>
                  <strong>{groupedMapPoints.length}</strong>
                </div>

                <div className="property-map-insight-row">
                  <span>User Location</span>
                  <strong>{userLocation ? "On" : "Off"}</strong>
                </div>

                {cityInsights.slice(0, 6).map((item) => (
                  <div className="property-map-insight-row" key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.count}</strong>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
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
                  Book a Visit - {getTitle(selectedProperty)}
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
    </>
  );
}