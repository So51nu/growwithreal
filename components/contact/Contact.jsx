// // // // // "use client";
// // // // // import React from "react";
// // // // // import DropdownSelect from "../common/DropdownSelect";
// // // // // import MapComponent from "../common/MapComponent";

// // // // // export default function Contact() {
// // // // //   return (
// // // // //     <section className="section-top-map style-2">
// // // // //       <div className="wrap-map">
// // // // //         <div
// // // // //           id="map"
// // // // //           className="row-height"
// // // // //           data-map-zoom={16}
// // // // //           data-map-scroll="true"
// // // // //         >
// // // // //           <MapComponent />
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className="box">
// // // // //         <div className="tf-container">
// // // // //           <div className="row">
// // // // //             <div className="col-12">
// // // // //               <form
// // // // //                 id="contactform"
// // // // //                 onSubmit={(e) => e.preventDefault()}
// // // // //                 className="form-contact"
// // // // //               >
// // // // //                 <div className="heading-section">
// // // // //                   <h2 className="title">We Would Love to Hear From You</h2>
// // // // //                   <p className="text-1">
// // // // //                     We'll get to know you to understand your selling goals,
// // // // //                     explain the selling process so you know what to expect.
// // // // //                   </p>
// // // // //                 </div>
// // // // //                 <div className="cols">
// // // // //                   <fieldset>
// // // // //                     <label htmlFor="name">Name:</label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       className="form-control"
// // // // //                       placeholder="Your name"
// // // // //                       name="name"
// // // // //                       id="name"
// // // // //                       required
// // // // //                     />
// // // // //                   </fieldset>
// // // // //                   <fieldset>
// // // // //                     <label htmlFor="email">Email:</label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       className="form-control"
// // // // //                       placeholder="Email"
// // // // //                       name="email"
// // // // //                       id="email-contact"
// // // // //                       required
// // // // //                     />
// // // // //                   </fieldset>
// // // // //                 </div>
// // // // //                 <div className="cols">
// // // // //                   <fieldset className="phone">
// // // // //                     <label htmlFor="phone">Phone number:</label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       className="form-control"
// // // // //                       placeholder="Your phone number"
// // // // //                       name="phone"
// // // // //                       id="phone"
// // // // //                       required
// // // // //                     />
// // // // //                   </fieldset>
// // // // //                   <div className="select">
// // // // //                     <label className="text-1 fw-6 mb-12">
// // // // //                       What are you interested in?
// // // // //                     </label>

// // // // //                     <DropdownSelect
// // // // //                       options={["Select", "Location", "Rent", "Sale"]}
// // // // //                       addtionalParentClass=""
// // // // //                     />
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <fieldset>
// // // // //                   <label htmlFor="message">Your Message:</label>
// // // // //                   <textarea
// // // // //                     name="message"
// // // // //                     cols={30}
// // // // //                     rows={10}
// // // // //                     placeholder="Message"
// // // // //                     id="message"
// // // // //                     required
// // // // //                     defaultValue={""}
// // // // //                   />
// // // // //                 </fieldset>
// // // // //                 <div className="send-wrap">
// // // // //                   <button
// // // // //                     className="tf-btn bg-color-primary fw-7 pd-8"
// // // // //                     type="submit"
// // // // //                   >
// // // // //                     Contact our experts
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </form>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // "use client";
// // // // import React, { useState } from "react";
// // // // import DropdownSelect from "../common/DropdownSelect";
// // // // import MapComponent from "../common/MapComponent";

// // // // export default function Contact() {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     interest: "Rent",
// // // //     message: "",
// // // //   });

// // // //   const [loading, setLoading] = useState(false);
// // // //   const [popup, setPopup] = useState({
// // // //     show: false,
// // // //     type: "success",
// // // //     message: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const handleInterestChange = (value) => {
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       interest: value,
// // // //     }));
// // // //   };

// // // //   const closePopup = () => {
// // // //     setPopup({
// // // //       show: false,
// // // //       type: "success",
// // // //       message: "",
// // // //     });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     setLoading(true);

// // // //     try {
// // // //       const response = await fetch("https://backendgrowl.growlcityrealty.in/api/contact/submit/", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify({
// // // //           name: formData.name,
// // // //           email: formData.email,
// // // //           phone: formData.phone,
// // // //           interest: formData.interest === "Select" ? "" : formData.interest,
// // // //           message: formData.message,
// // // //         }),
// // // //       });

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         setPopup({
// // // //           show: true,
// // // //           type: "success",
// // // //           message: "Your message has been submitted successfully.",
// // // //         });

// // // //         setFormData({
// // // //           name: "",
// // // //           email: "",
// // // //           phone: "",
// // // //           interest: "Rent",
// // // //           message: "",
// // // //         });
// // // //       } else {
// // // //         let errorText = "Something went wrong. Please try again.";

// // // //         if (data?.errors) {
// // // //           const firstErrorKey = Object.keys(data.errors)[0];
// // // //           if (firstErrorKey && data.errors[firstErrorKey]?.[0]) {
// // // //             errorText = data.errors[firstErrorKey][0];
// // // //           }
// // // //         } else if (data?.message) {
// // // //           errorText = data.message;
// // // //         }

// // // //         setPopup({
// // // //           show: true,
// // // //           type: "error",
// // // //           message: errorText,
// // // //         });
// // // //       }
// // // //     } catch (error) {
// // // //       setPopup({
// // // //         show: true,
// // // //         type: "error",
// // // //         message: "Server error. Please try again later.",
// // // //       });
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <section className="section-top-map style-2">
// // // //         <div className="wrap-map">
// // // //           <div
// // // //             id="map"
// // // //             className="row-height"
// // // //             data-map-zoom={16}
// // // //             data-map-scroll="true"
// // // //           >
// // // //             <MapComponent />
// // // //           </div>
// // // //         </div>

// // // //         <div className="box">
// // // //           <div className="tf-container">
// // // //             <div className="row">
// // // //               <div className="col-12">
// // // //                 <form
// // // //                   id="contactform"
// // // //                   onSubmit={handleSubmit}
// // // //                   className="form-contact"
// // // //                 >
// // // //                   <div className="heading-section">
// // // //                     <h2 className="title">We Would Love to Hear From You</h2>
// // // //                     <p className="text-1">
// // // //                       We'll get to know you to understand your selling goals,
// // // //                       explain the selling process so you know what to expect.
// // // //                     </p>
// // // //                   </div>

// // // //                   <div className="cols">
// // // //                     <fieldset>
// // // //                       <label htmlFor="name">Name:</label>
// // // //                       <input
// // // //                         type="text"
// // // //                         className="form-control"
// // // //                         placeholder="Your name"
// // // //                         name="name"
// // // //                         id="name"
// // // //                         required
// // // //                         value={formData.name}
// // // //                         onChange={handleChange}
// // // //                       />
// // // //                     </fieldset>

// // // //                     <fieldset>
// // // //                       <label htmlFor="email-contact">Email:</label>
// // // //                       <input
// // // //                         type="email"
// // // //                         className="form-control"
// // // //                         placeholder="Email"
// // // //                         name="email"
// // // //                         id="email-contact"
// // // //                         required
// // // //                         value={formData.email}
// // // //                         onChange={handleChange}
// // // //                       />
// // // //                     </fieldset>
// // // //                   </div>

// // // //                   <div className="cols">
// // // //                     <fieldset className="phone">
// // // //                       <label htmlFor="phone">Phone number:</label>
// // // //                       <input
// // // //                         type="text"
// // // //                         className="form-control"
// // // //                         placeholder="Your phone number"
// // // //                         name="phone"
// // // //                         id="phone"
// // // //                         required
// // // //                         value={formData.phone}
// // // //                         onChange={handleChange}
// // // //                       />
// // // //                     </fieldset>

// // // //                     <div className="select">
// // // //                       <label className="text-1 fw-6 mb-12">
// // // //                         What are you interested in?
// // // //                       </label>

// // // //                       <DropdownSelect
// // // //                         options={["Select", "location", "rent", "sale"]}
// // // //                         addtionalParentClass=""
// // // //                         value={formData.interest}
// // // //                         onChange={handleInterestChange}
// // // //                       />

// // // //                       <input
// // // //                         type="hidden"
// // // //                         name="interest"
// // // //                         value={formData.interest}
// // // //                         readOnly
// // // //                       />
// // // //                     </div>
// // // //                   </div>

// // // //                   <fieldset>
// // // //                     <label htmlFor="message">Your Message:</label>
// // // //                     <textarea
// // // //                       name="message"
// // // //                       cols={30}
// // // //                       rows={10}
// // // //                       placeholder="Message"
// // // //                       id="message"
// // // //                       required
// // // //                       value={formData.message}
// // // //                       onChange={handleChange}
// // // //                     />
// // // //                   </fieldset>

// // // //                   <div className="send-wrap">
// // // //                     <button
// // // //                       className="tf-btn bg-color-primary fw-7 pd-8"
// // // //                       type="submit"
// // // //                       disabled={loading}
// // // //                     >
// // // //                       {loading ? "Sending..." : "Contact our experts"}
// // // //                     </button>
// // // //                   </div>
// // // //                 </form>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {popup.show && (
// // // //         <div
// // // //           style={{
// // // //             position: "fixed",
// // // //             top: 0,
// // // //             left: 0,
// // // //             width: "100%",
// // // //             height: "100%",
// // // //             background: "rgba(0,0,0,0.45)",
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             zIndex: 99999,
// // // //             padding: "20px",
// // // //           }}
// // // //         >
// // // //           <div
// // // //             style={{
// // // //               width: "100%",
// // // //               maxWidth: "420px",
// // // //               background: "#fff",
// // // //               borderRadius: "14px",
// // // //               padding: "28px 24px",
// // // //               textAlign: "center",
// // // //               boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
// // // //             }}
// // // //           >
// // // //             <h3
// // // //               style={{
// // // //                 margin: "0 0 12px",
// // // //                 fontSize: "22px",
// // // //                 fontWeight: "700",
// // // //                 color: popup.type === "success" ? "#16a34a" : "#dc2626",
// // // //               }}
// // // //             >
// // // //               {popup.type === "success" ? "Success" : "Error"}
// // // //             </h3>

// // // //             <p
// // // //               style={{
// // // //                 margin: "0 0 20px",
// // // //                 fontSize: "15px",
// // // //                 lineHeight: "1.6",
// // // //                 color: "#333",
// // // //               }}
// // // //             >
// // // //               {popup.message}
// // // //             </p>

// // // //             <button
// // // //               type="button"
// // // //               onClick={closePopup}
// // // //               style={{
// // // //                 border: "none",
// // // //                 outline: "none",
// // // //                 cursor: "pointer",
// // // //                 padding: "12px 22px",
// // // //                 borderRadius: "8px",
// // // //                 fontSize: "14px",
// // // //                 fontWeight: "600",
// // // //                 background: popup.type === "success" ? "#16a34a" : "#dc2626",
// // // //                 color: "#fff",
// // // //               }}
// // // //             >
// // // //               OK
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // }




// // // // "use client";

// // // // import React, { useState } from "react";
// // // // import DropdownSelect from "../common/DropdownSelect";
// // // // import MapComponent from "../common/MapComponent";

// // // // export default function Contact() {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     interest: "Rent",
// // // //     message: "",
// // // //   });

// // // //   const [loading, setLoading] = useState(false);

// // // //   const [popup, setPopup] = useState({
// // // //     show: false,
// // // //     type: "success",
// // // //     message: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;

// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const handleInterestChange = (value) => {
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       interest: value,
// // // //     }));
// // // //   };

// // // //   const closePopup = () => {
// // // //     setPopup({
// // // //       show: false,
// // // //       type: "success",
// // // //       message: "",
// // // //     });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     setLoading(true);

// // // //     try {
// // // //       const response = await fetch(
// // // //         "https://backendgrowl.growlcityrealty.in/api/contact/submit/",
// // // //         {
// // // //           method: "POST",
// // // //           headers: {
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //           body: JSON.stringify({
// // // //             name: formData.name,
// // // //             email: formData.email,
// // // //             phone: formData.phone,
// // // //             interest: formData.interest === "Select" ? "" : formData.interest,
// // // //             message: formData.message,
// // // //           }),
// // // //         }
// // // //       );

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         setPopup({
// // // //           show: true,
// // // //           type: "success",
// // // //           message: "Your message has been submitted successfully.",
// // // //         });

// // // //         setFormData({
// // // //           name: "",
// // // //           email: "",
// // // //           phone: "",
// // // //           interest: "Rent",
// // // //           message: "",
// // // //         });
// // // //       } else {
// // // //         let errorText = "Something went wrong. Please try again.";

// // // //         if (data?.errors) {
// // // //           const firstErrorKey = Object.keys(data.errors)[0];

// // // //           if (firstErrorKey && data.errors[firstErrorKey]?.[0]) {
// // // //             errorText = data.errors[firstErrorKey][0];
// // // //           }
// // // //         } else if (data?.message) {
// // // //           errorText = data.message;
// // // //         }

// // // //         setPopup({
// // // //           show: true,
// // // //           type: "error",
// // // //           message: errorText,
// // // //         });
// // // //       }
// // // //     } catch (error) {
// // // //       setPopup({
// // // //         show: true,
// // // //         type: "error",
// // // //         message: "Server error. Please try again later.",
// // // //       });
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* Hero Banner Image Section */}
// // // //      <section className="contact-banner-section">
// // // //   <img
// // // //     src="/images/contact_us.jpg"
// // // //     alt="Contact Us"
// // // //     className="contact-banner-img"
// // // //   />

// // // //   <div className="contact-banner-content">
// // // //     <h1>Contact Us</h1>
// // // //   </div>
// // // // </section>
// // // //       {/* Contact Form Section - Same Original Form */}
// // // //       <section className="section-contact-form">
// // // //         <div className="box">
// // // //           <div className="tf-container">
// // // //             <div className="row">
// // // //               <div className="col-12">
// // // //                 <form
// // // //                   id="contactform"
// // // //                   onSubmit={handleSubmit}
// // // //                   className="form-contact"
// // // //                 >
// // // //                   <div className="heading-section">
// // // //                     <h2 className="title">We Would Love to Hear From You</h2>
// // // //                     <p className="text-1">
// // // //                       We'll get to know you to understand your selling goals,
// // // //                       explain the selling process so you know what to expect.
// // // //                     </p>
// // // //                   </div>

// // // //                   <div className="cols">
// // // //                     <fieldset>
// // // //                       <label htmlFor="name">Name:</label>
// // // //                       <input
// // // //                         type="text"
// // // //                         className="form-control"
// // // //                         placeholder="Your name"
// // // //                         name="name"
// // // //                         id="name"
// // // //                         required
// // // //                         value={formData.name}
// // // //                         onChange={handleChange}
// // // //                       />
// // // //                     </fieldset>

// // // //                     <fieldset>
// // // //                       <label htmlFor="email-contact">Email:</label>
// // // //                       <input
// // // //                         type="email"
// // // //                         className="form-control"
// // // //                         placeholder="Email"
// // // //                         name="email"
// // // //                         id="email-contact"
// // // //                         required
// // // //                         value={formData.email}
// // // //                         onChange={handleChange}
// // // //                       />
// // // //                     </fieldset>
// // // //                   </div>

// // // //                   <div className="cols">
// // // //                     <fieldset className="phone">
// // // //                       <label htmlFor="phone">Phone number:</label>
// // // //                       <input
// // // //                         type="text"
// // // //                         className="form-control"
// // // //                         placeholder="Your phone number"
// // // //                         name="phone"
// // // //                         id="phone"
// // // //                         required
// // // //                         value={formData.phone}
// // // //                         onChange={handleChange}
// // // //                       />
// // // //                     </fieldset>

// // // //                     <div className="select">
// // // //                       <label className="text-1 fw-6 mb-12">
// // // //                         What are you interested in?
// // // //                       </label>

// // // //                       <DropdownSelect
// // // //                         options={["Select", "location", "rent", "sale"]}
// // // //                         addtionalParentClass=""
// // // //                         value={formData.interest}
// // // //                         onChange={handleInterestChange}
// // // //                       />

// // // //                       <input
// // // //                         type="hidden"
// // // //                         name="interest"
// // // //                         value={formData.interest}
// // // //                         readOnly
// // // //                       />
// // // //                     </div>
// // // //                   </div>

// // // //                   <fieldset>
// // // //                     <label htmlFor="message">Your Message:</label>
// // // //                     <textarea
// // // //                       name="message"
// // // //                       cols={30}
// // // //                       rows={10}
// // // //                       placeholder="Message"
// // // //                       id="message"
// // // //                       required
// // // //                       value={formData.message}
// // // //                       onChange={handleChange}
// // // //                     />
// // // //                   </fieldset>

// // // //                   <div className="send-wrap">
// // // //                     <button
// // // //                       className="tf-btn bg-color-primary fw-7 pd-8"
// // // //                       type="submit"
// // // //                       disabled={loading}
// // // //                     >
// // // //                       {loading ? "Sending..." : "Contact our experts"}
// // // //                     </button>
// // // //                   </div>
// // // //                 </form>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Map Section - Original Map Structure Ke Saath */}
// // // //       <section className="section-top-map style-2 contact-map-after-form">
// // // //         <div className="wrap-map">
// // // //           <div
// // // //             id="map"
// // // //             className="row-height"
// // // //             data-map-zoom={16}
// // // //             data-map-scroll="true"
// // // //           >
// // // //             <MapComponent />
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {popup.show && (
// // // //         <div
// // // //           style={{
// // // //             position: "fixed",
// // // //             top: 0,
// // // //             left: 0,
// // // //             width: "100%",
// // // //             height: "100%",
// // // //             background: "rgba(0,0,0,0.45)",
// // // //             display: "flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             zIndex: 99999,
// // // //             padding: "20px",
// // // //           }}
// // // //         >
// // // //           <div
// // // //             style={{
// // // //               width: "100%",
// // // //               maxWidth: "420px",
// // // //               background: "#fff",
// // // //               borderRadius: "14px",
// // // //               padding: "28px 24px",
// // // //               textAlign: "center",
// // // //               boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
// // // //             }}
// // // //           >
// // // //             <h3
// // // //               style={{
// // // //                 margin: "0 0 12px",
// // // //                 fontSize: "22px",
// // // //                 fontWeight: "700",
// // // //                 color: popup.type === "success" ? "#16a34a" : "#dc2626",
// // // //               }}
// // // //             >
// // // //               {popup.type === "success" ? "Success" : "Error"}
// // // //             </h3>

// // // //             <p
// // // //               style={{
// // // //                 margin: "0 0 20px",
// // // //                 fontSize: "15px",
// // // //                 lineHeight: "1.6",
// // // //                 color: "#333",
// // // //               }}
// // // //             >
// // // //               {popup.message}
// // // //             </p>

// // // //             <button
// // // //               type="button"
// // // //               onClick={closePopup}
// // // //               style={{
// // // //                 border: "none",
// // // //                 outline: "none",
// // // //                 cursor: "pointer",
// // // //                 padding: "12px 22px",
// // // //                 borderRadius: "8px",
// // // //                 fontSize: "14px",
// // // //                 fontWeight: "600",
// // // //                 background: popup.type === "success" ? "#16a34a" : "#dc2626",
// // // //                 color: "#fff",
// // // //               }}
// // // //             >
// // // //               OK
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       <style jsx>{`
// // // //         .contact-banner-section {
// // // //           width: 100%;
// // // //           overflow: hidden;
// // // //           background: #f5f5f5;
// // // //         }

// // // //         .contact-banner-img {
// // // //           width: 100%;
// // // //           height: 420px;
// // // //           object-fit: cover;
// // // //           object-position: center;
// // // //           display: block;
// // // //         }

// // // //         .contact-banner-section {
// // // //   width: 100%;
// // // //   overflow: hidden;
// // // //   background: #f5f5f5;
// // // //   position: relative;
// // // // }

// // // // .contact-banner-content {
// // // //   position: absolute;
// // // //   top: 50%;
// // // //   left: 50%;
// // // //   transform: translate(-50%, -50%);
// // // //   z-index: 2;
// // // //   text-align: center;
// // // // }

// // // // .contact-banner-content h1 {
// // // //   color: #fff;
// // // //   font-size: 60px;
// // // //   font-weight: 700;
// // // //   margin: 0;
// // // //   line-height: 1.2;
// // // // }
// // // //         .section-contact-form {
// // // //           padding: 80px 0;
// // // //           background: #fff;
// // // //           position: relative;
// // // //           z-index: 2;
// // // //         }

// // // //         .contact-map-after-form {
// // // //           margin-top: 0;
// // // //           position: relative;
// // // //           z-index: 1;
// // // //         }

// // // //         .contact-map-after-form .wrap-map {
// // // //           width: 100%;
// // // //         }

// // // //         .contact-map-after-form .row-height {
// // // //           min-height: 450px;
// // // //           height: 450px;
// // // //         }

// // // //         @media (max-width: 991px) {
// // // //           .contact-banner-img {
// // // //             height: 340px;
// // // //           }

// // // //           .section-contact-form {
// // // //             padding: 60px 0;
// // // //           }

// // // //           .contact-map-after-form .row-height {
// // // //             min-height: 380px;
// // // //             height: 380px;
// // // //           }
// // // //         }

// // // //         @media (max-width: 575px) {
// // // //         .contact-banner-content h1 {
// // // //           font-size: 36px;
// // // //         }
// // // //       }

// // // //         @media (max-width: 575px) {
// // // //           .contact-banner-img {
// // // //             height: 260px;
// // // //           }

// // // //           .section-contact-form {
// // // //             padding: 45px 0;
// // // //           }

// // // //           .contact-map-after-form .row-height {
// // // //             min-height: 320px;
// // // //             height: 320px;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </>
// // // //   );
// // // // }


// // // "use client";

// // // import React, { useState } from "react";
// // // import DropdownSelect from "../common/DropdownSelect";
// // // import MapComponent from "../common/MapComponent";

// // // export default function Contact() {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     interest: "Rent",
// // //     message: "",
// // //   });

// // //   const [loading, setLoading] = useState(false);

// // //   const [popup, setPopup] = useState({
// // //     show: false,
// // //     type: "success",
// // //     message: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;

// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleInterestChange = (value) => {
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       interest: value,
// // //     }));
// // //   };

// // //   const closePopup = () => {
// // //     setPopup({
// // //       show: false,
// // //       type: "success",
// // //       message: "",
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);

// // //     try {
// // //       const response = await fetch(
// // //         "https://backendgrowl.growlcityrealty.in/api/contact/submit/",
// // //         {
// // //           method: "POST",
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //           },
// // //           body: JSON.stringify({
// // //             name: formData.name,
// // //             email: formData.email,
// // //             phone: formData.phone,
// // //             interest: formData.interest === "Select" ? "" : formData.interest,
// // //             message: formData.message,
// // //           }),
// // //         }
// // //       );

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         setPopup({
// // //           show: true,
// // //           type: "success",
// // //           message: "Your message has been submitted successfully.",
// // //         });

// // //         setFormData({
// // //           name: "",
// // //           email: "",
// // //           phone: "",
// // //           interest: "Rent",
// // //           message: "",
// // //         });
// // //       } else {
// // //         let errorText = "Something went wrong. Please try again.";

// // //         if (data?.errors) {
// // //           const firstErrorKey = Object.keys(data.errors)[0];

// // //           if (firstErrorKey && data.errors[firstErrorKey]?.[0]) {
// // //             errorText = data.errors[firstErrorKey][0];
// // //           }
// // //         } else if (data?.message) {
// // //           errorText = data.message;
// // //         }

// // //         setPopup({
// // //           show: true,
// // //           type: "error",
// // //           message: errorText,
// // //         });
// // //       }
// // //     } catch (error) {
// // //       setPopup({
// // //         show: true,
// // //         type: "error",
// // //         message: "Server error. Please try again later.",
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <section className="contact-banner-section">
// // //         <img
// // //           src="/images/contact_us.jpg"
// // //           alt="Contact Us"
// // //           className="contact-banner-img"
// // //         />

// // //         <div className="contact-banner-overlay" />

// // //         <div className="contact-banner-content">
// // //           <h1>Contact Us</h1>
// // //         </div>
// // //       </section>

// // //       <section className="contact-form-map-section">
// // //         <div className="tf-container">
// // //           <div className="contact-form-map-grid">
// // //             <div className="contact-form-card">
// // //               <form
// // //                 id="contactform"
// // //                 onSubmit={handleSubmit}
// // //                 className="form-contact"
// // //               >
// // //                 <div className="heading-section">
// // //                   <span className="contact-small-title">Get In Touch</span>
// // //                   <h2 className="title">We Would Love to Hear From You</h2>
// // //                   <p className="text-1">
// // //                     Share your property requirement with us. Our experts will
// // //                     connect with you shortly.
// // //                   </p>
// // //                 </div>

// // //                 <div className="cols">
// // //                   <fieldset>
// // //                     <label htmlFor="name">Name:</label>
// // //                     <input
// // //                       type="text"
// // //                       className="form-control"
// // //                       placeholder="Your name"
// // //                       name="name"
// // //                       id="name"
// // //                       required
// // //                       value={formData.name}
// // //                       onChange={handleChange}
// // //                     />
// // //                   </fieldset>

// // //                   <fieldset>
// // //                     <label htmlFor="email-contact">Email:</label>
// // //                     <input
// // //                       type="email"
// // //                       className="form-control"
// // //                       placeholder="Email"
// // //                       name="email"
// // //                       id="email-contact"
// // //                       required
// // //                       value={formData.email}
// // //                       onChange={handleChange}
// // //                     />
// // //                   </fieldset>
// // //                 </div>

// // //                 <div className="cols">
// // //                   <fieldset className="phone">
// // //                     <label htmlFor="phone">Phone number:</label>
// // //                     <input
// // //                       type="text"
// // //                       className="form-control"
// // //                       placeholder="Your phone number"
// // //                       name="phone"
// // //                       id="phone"
// // //                       required
// // //                       value={formData.phone}
// // //                       onChange={handleChange}
// // //                     />
// // //                   </fieldset>

// // //                   <div className="select">
// // //                     <label className="text-1 fw-6 mb-12">
// // //                       What are you interested in?
// // //                     </label>

// // //                     <DropdownSelect
// // //                       options={["Select", "Location", "Rent", "Sale"]}
// // //                       addtionalParentClass=""
// // //                       value={formData.interest}
// // //                       onChange={handleInterestChange}
// // //                     />

// // //                     <input
// // //                       type="hidden"
// // //                       name="interest"
// // //                       value={formData.interest}
// // //                       readOnly
// // //                     />
// // //                   </div>
// // //                 </div>

// // //                 <fieldset>
// // //                   <label htmlFor="message">Your Message:</label>
// // //                   <textarea
// // //                     name="message"
// // //                     cols={30}
// // //                     rows={6}
// // //                     placeholder="Message"
// // //                     id="message"
// // //                     required
// // //                     value={formData.message}
// // //                     onChange={handleChange}
// // //                   />
// // //                 </fieldset>

// // //                 <div className="send-wrap">
// // //                   <button
// // //                     className="tf-btn bg-color-primary fw-7 pd-8 contact-submit-btn"
// // //                     type="submit"
// // //                     disabled={loading}
// // //                   >
// // //                     {loading ? "Sending..." : "Contact Our Experts"}
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </div>

// // //             <div className="contact-map-card">
// // //               <div className="map-heading">
// // //                 <span className="contact-small-title">Find Us</span>
// // //                 <h3>Visit Our Office</h3>
// // //                 <p>
// // //                   141, 1st. Flr. Citi Mall, Link Road, Andheri (W),
// // //                   Mumbai - 400 053.
// // //                 </p>
// // //               </div>

// // //               <div className="contact-map-box">
// // //                 <MapComponent />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {popup.show && (
// // //         <div className="contact-popup-overlay">
// // //           <div className="contact-popup-box">
// // //             <h3 className={popup.type === "success" ? "success" : "error"}>
// // //               {popup.type === "success" ? "Success" : "Error"}
// // //             </h3>

// // //             <p>{popup.message}</p>

// // //             <button
// // //               type="button"
// // //               onClick={closePopup}
// // //               className={popup.type === "success" ? "success-btn" : "error-btn"}
// // //             >
// // //               OK
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <style jsx>{`
// // //         .contact-banner-section {
// // //           width: 100%;
// // //           overflow: hidden;
// // //           background: #f5f5f5;
// // //           position: relative;
// // //         }

// // //         .contact-banner-img {
// // //           width: 100%;
// // //           height: 420px;
// // //           object-fit: cover;
// // //           object-position: center;
// // //           display: block;
// // //         }

// // //         .contact-banner-overlay {
// // //           position: absolute;
// // //           inset: 0;
// // //           background: rgba(0, 0, 0, 0.28);
// // //           z-index: 1;
// // //         }

// // //         .contact-banner-content {
// // //           position: absolute;
// // //           top: 50%;
// // //           left: 50%;
// // //           transform: translate(-50%, -50%);
// // //           z-index: 2;
// // //           text-align: center;
// // //           width: 100%;
// // //           padding: 0 20px;
// // //         }

// // //         .contact-banner-content h1 {
// // //           color: #ffffff;
// // //           font-size: 60px;
// // //           font-weight: 700;
// // //           margin: 0;
// // //           line-height: 1.2;
// // //         }

// // //         .contact-form-map-section {
// // //           padding: 80px 0;
// // //           background: #ffffff;
// // //           position: relative;
// // //           z-index: 2;
// // //         }

// // //         .contact-form-map-grid {
// // //           display: grid;
// // //           grid-template-columns: minmax(0, 1fr) minmax(420px, 0.9fr);
// // //           gap: 35px;
// // //           align-items: stretch;
// // //         }

// // //         .contact-form-card,
// // //         .contact-map-card {
// // //           background: #ffffff;
// // //           border: 1px solid #e5e7eb;
// // //           border-radius: 22px;
// // //           box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
// // //           overflow: hidden;
// // //         }

// // //         .contact-form-card {
// // //           padding: 42px;
// // //         }

// // //         .contact-map-card {
// // //           display: flex;
// // //           flex-direction: column;
// // //         }

// // //         .heading-section {
// // //           margin-bottom: 28px;
// // //         }

// // //         .contact-small-title {
// // //           display: inline-block;
// // //           color: #9b7653;
// // //           font-size: 14px;
// // //           line-height: 1;
// // //           font-weight: 700;
// // //           margin-bottom: 12px;
// // //           text-transform: uppercase;
// // //           letter-spacing: 0.04em;
// // //         }

// // //         .heading-section .title {
// // //           font-size: 34px;
// // //           line-height: 1.2;
// // //           font-weight: 700;
// // //           color: #111827;
// // //           margin: 0 0 12px;
// // //         }

// // //         .heading-section .text-1 {
// // //           font-size: 16px;
// // //           line-height: 1.7;
// // //           color: #4b5563;
// // //           margin: 0;
// // //         }

// // //         .form-contact .cols {
// // //           display: grid;
// // //           grid-template-columns: repeat(2, minmax(0, 1fr));
// // //           gap: 18px;
// // //         }

// // //         .form-contact fieldset,
// // //         .form-contact .select {
// // //           margin-bottom: 20px;
// // //         }

// // //         .form-contact label {
// // //           display: block;
// // //           font-size: 14px;
// // //           font-weight: 600;
// // //           color: #111827;
// // //           margin-bottom: 8px;
// // //         }

// // //         .form-contact input,
// // //         .form-contact textarea {
// // //           width: 100%;
// // //           border: 1px solid #d1d5db;
// // //           border-radius: 12px;
// // //           background: #ffffff;
// // //           color: #111827;
// // //           font-size: 15px;
// // //           outline: none;
// // //           transition: all 0.25s ease;
// // //         }

// // //         .form-contact input {
// // //           height: 52px;
// // //           padding: 0 16px;
// // //         }

// // //         .form-contact textarea {
// // //           min-height: 140px;
// // //           padding: 15px 16px;
// // //           resize: vertical;
// // //         }

// // //         .form-contact input:focus,
// // //         .form-contact textarea:focus {
// // //           border-color: #9b7653;
// // //           box-shadow: 0 0 0 4px rgba(155, 118, 83, 0.12);
// // //         }

// // //         .contact-submit-btn {
// // //           min-height: 52px;
// // //           padding: 0 28px;
// // //           border-radius: 12px;
// // //           border: none;
// // //           background: #9b7653;
// // //           color: #ffffff;
// // //           font-size: 15px;
// // //           font-weight: 700;
// // //           cursor: pointer;
// // //           transition: all 0.25s ease;
// // //         }

// // //         .contact-submit-btn:hover {
// // //           background: #7c5f43;
// // //           color: #ffffff;
// // //           transform: translateY(-1px);
// // //         }

// // //         .contact-submit-btn:disabled {
// // //           opacity: 0.7;
// // //           cursor: not-allowed;
// // //         }

// // //         .map-heading {
// // //           padding: 34px 34px 24px;
// // //           background: #fbfaf8;
// // //           border-bottom: 1px solid #e5e7eb;
// // //         }

// // //         .map-heading h3 {
// // //           font-size: 30px;
// // //           line-height: 1.2;
// // //           font-weight: 700;
// // //           color: #111827;
// // //           margin: 0 0 12px;
// // //         }

// // //         .map-heading p {
// // //           font-size: 15px;
// // //           line-height: 1.7;
// // //           color: #4b5563;
// // //           margin: 0;
// // //         }

// // //         .contact-map-box {
// // //           width: 100%;
// // //           min-height: 430px;
// // //           height: 100%;
// // //           flex: 1;
// // //           position: relative;
// // //           overflow: hidden;
// // //         }

// // //         .contact-map-box :global(iframe),
// // //         .contact-map-box :global(.map),
// // //         .contact-map-box :global(#map) {
// // //           width: 100% !important;
// // //           height: 100% !important;
// // //           min-height: 430px;
// // //         }

// // //         .contact-popup-overlay {
// // //           position: fixed;
// // //           top: 0;
// // //           left: 0;
// // //           width: 100%;
// // //           height: 100%;
// // //           background: rgba(0, 0, 0, 0.45);
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           z-index: 99999;
// // //           padding: 20px;
// // //         }

// // //         .contact-popup-box {
// // //           width: 100%;
// // //           max-width: 420px;
// // //           background: #ffffff;
// // //           border-radius: 14px;
// // //           padding: 28px 24px;
// // //           text-align: center;
// // //           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
// // //         }

// // //         .contact-popup-box h3 {
// // //           margin: 0 0 12px;
// // //           font-size: 22px;
// // //           font-weight: 700;
// // //         }

// // //         .contact-popup-box h3.success {
// // //           color: #16a34a;
// // //         }

// // //         .contact-popup-box h3.error {
// // //           color: #dc2626;
// // //         }

// // //         .contact-popup-box p {
// // //           margin: 0 0 20px;
// // //           font-size: 15px;
// // //           line-height: 1.6;
// // //           color: #333333;
// // //         }

// // //         .contact-popup-box button {
// // //           border: none;
// // //           outline: none;
// // //           cursor: pointer;
// // //           padding: 12px 22px;
// // //           border-radius: 8px;
// // //           font-size: 14px;
// // //           font-weight: 600;
// // //           color: #ffffff;
// // //         }

// // //         .success-btn {
// // //           background: #16a34a;
// // //         }

// // //         .error-btn {
// // //           background: #dc2626;
// // //         }

// // //         @media (max-width: 1199px) {
// // //           .contact-form-map-section {
// // //             padding: 70px 0;
// // //           }

// // //           .contact-form-map-grid {
// // //             grid-template-columns: 1fr;
// // //             gap: 28px;
// // //           }

// // //           .contact-map-box {
// // //             min-height: 420px;
// // //           }

// // //           .contact-map-box :global(iframe),
// // //           .contact-map-box :global(.map),
// // //           .contact-map-box :global(#map) {
// // //             min-height: 420px;
// // //           }
// // //         }

// // //         @media (max-width: 991px) {
// // //           .contact-banner-img {
// // //             height: 340px;
// // //           }

// // //           .contact-banner-content h1 {
// // //             font-size: 48px;
// // //           }

// // //           .contact-form-card {
// // //             padding: 34px;
// // //           }

// // //           .heading-section .title {
// // //             font-size: 30px;
// // //           }
// // //         }

// // //         @media (max-width: 767px) {
// // //           .contact-form-map-section {
// // //             padding: 50px 0;
// // //           }

// // //           .contact-banner-img {
// // //             height: 280px;
// // //           }

// // //           .contact-banner-content h1 {
// // //             font-size: 38px;
// // //           }

// // //           .contact-form-card {
// // //             padding: 24px;
// // //             border-radius: 18px;
// // //           }

// // //           .contact-map-card {
// // //             border-radius: 18px;
// // //           }

// // //           .form-contact .cols {
// // //             grid-template-columns: 1fr;
// // //             gap: 0;
// // //           }

// // //           .heading-section {
// // //             margin-bottom: 22px;
// // //           }

// // //           .heading-section .title {
// // //             font-size: 26px;
// // //           }

// // //           .heading-section .text-1 {
// // //             font-size: 14px;
// // //           }

// // //           .form-contact fieldset,
// // //           .form-contact .select {
// // //             margin-bottom: 16px;
// // //           }

// // //           .form-contact input {
// // //             height: 48px;
// // //           }

// // //           .form-contact textarea {
// // //             min-height: 120px;
// // //           }

// // //           .contact-submit-btn {
// // //             width: 100%;
// // //             min-height: 50px;
// // //           }

// // //           .map-heading {
// // //             padding: 24px;
// // //           }

// // //           .map-heading h3 {
// // //             font-size: 25px;
// // //           }

// // //           .map-heading p {
// // //             font-size: 14px;
// // //           }

// // //           .contact-map-box {
// // //             min-height: 360px;
// // //           }

// // //           .contact-map-box :global(iframe),
// // //           .contact-map-box :global(.map),
// // //           .contact-map-box :global(#map) {
// // //             min-height: 360px;
// // //           }
// // //         }

// // //         @media (max-width: 480px) {
// // //           .contact-banner-img {
// // //             height: 240px;
// // //           }

// // //           .contact-banner-content h1 {
// // //             font-size: 34px;
// // //           }

// // //           .contact-form-map-section {
// // //             padding: 40px 0;
// // //           }

// // //           .contact-form-card {
// // //             padding: 20px;
// // //           }

// // //           .heading-section .title {
// // //             font-size: 24px;
// // //           }

// // //           .map-heading {
// // //             padding: 20px;
// // //           }

// // //           .contact-map-box {
// // //             min-height: 320px;
// // //           }

// // //           .contact-map-box :global(iframe),
// // //           .contact-map-box :global(.map),
// // //           .contact-map-box :global(#map) {
// // //             min-height: 320px;
// // //           }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }




// // "use client";

// // import React, { useState } from "react";
// // import DropdownSelect from "../common/DropdownSelect";
// // import MapComponent from "../common/MapComponent";

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     interest: "Rent",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);

// //   const [popup, setPopup] = useState({
// //     show: false,
// //     type: "success",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleInterestChange = (value) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       interest: value,
// //     }));
// //   };

// //   const closePopup = () => {
// //     setPopup({
// //       show: false,
// //       type: "success",
// //       message: "",
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       const response = await fetch(
// //         "https://backendgrowl.growlcityrealty.in/api/contact/submit/",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             name: formData.name,
// //             email: formData.email,
// //             phone: formData.phone,
// //             interest: formData.interest === "Select" ? "" : formData.interest,
// //             message: formData.message,
// //           }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (response.ok) {
// //         setPopup({
// //           show: true,
// //           type: "success",
// //           message: "Your message has been submitted successfully.",
// //         });

// //         setFormData({
// //           name: "",
// //           email: "",
// //           phone: "",
// //           interest: "Rent",
// //           message: "",
// //         });
// //       } else {
// //         let errorText = "Something went wrong. Please try again.";

// //         if (data?.errors) {
// //           const firstErrorKey = Object.keys(data.errors)[0];

// //           if (firstErrorKey && data.errors[firstErrorKey]?.[0]) {
// //             errorText = data.errors[firstErrorKey][0];
// //           }
// //         } else if (data?.message) {
// //           errorText = data.message;
// //         }

// //         setPopup({
// //           show: true,
// //           type: "error",
// //           message: errorText,
// //         });
// //       }
// //     } catch (error) {
// //       setPopup({
// //         show: true,
// //         type: "error",
// //         message: "Server error. Please try again later.",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <section className="contact-banner-section">
// //         <img
// //           src="/images/contact_us.jpg"
// //           alt="Contact Us"
// //           className="contact-banner-img"
// //         />

// //         <div className="contact-banner-overlay" />

// //         <div className="contact-banner-content">
// //           <h1>Contact Us</h1>
// //         </div>
// //       </section>

// //       <section className="contact-main-section">
// //         <div className="tf-container">
// //           <div className="contact-heading">
// //             <span>Get In Touch</span>
// //             <h2>We Would Love to Hear From You</h2>
// //             <p>
// //               Share your property requirement with us. Our team will connect
// //               with you shortly.
// //             </p>
// //           </div>

// //           <div className="contact-grid">
// //             <div className="contact-form-card">
// //               <form
// //                 id="contactform"
// //                 onSubmit={handleSubmit}
// //                 className="contact-form"
// //               >
// //                 <div className="input-row">
// //                   <fieldset>
// //                     <label htmlFor="name">Name</label>
// //                     <input
// //                       type="text"
// //                       placeholder="Your name"
// //                       name="name"
// //                       id="name"
// //                       required
// //                       value={formData.name}
// //                       onChange={handleChange}
// //                     />
// //                   </fieldset>

// //                   <fieldset>
// //                     <label htmlFor="email-contact">Email</label>
// //                     <input
// //                       type="email"
// //                       placeholder="Email address"
// //                       name="email"
// //                       id="email-contact"
// //                       required
// //                       value={formData.email}
// //                       onChange={handleChange}
// //                     />
// //                   </fieldset>
// //                 </div>

// //                 <div className="input-row">
// //                   <fieldset>
// //                     <label htmlFor="phone">Phone Number</label>
// //                     <input
// //                       type="text"
// //                       placeholder="Phone number"
// //                       name="phone"
// //                       id="phone"
// //                       required
// //                       value={formData.phone}
// //                       onChange={handleChange}
// //                     />
// //                   </fieldset>

// //                   <div className="select-field">
// //                     <label>Interested In</label>

// //                     <DropdownSelect
// //                       options={["Select", "Location", "Rent", "Sale"]}
// //                       addtionalParentClass=""
// //                       value={formData.interest}
// //                       onChange={handleInterestChange}
// //                     />

// //                     <input
// //                       type="hidden"
// //                       name="interest"
// //                       value={formData.interest}
// //                       readOnly
// //                     />
// //                   </div>
// //                 </div>

// //                 <fieldset>
// //                   <label htmlFor="message">Your Message</label>
// //                   <textarea
// //                     name="message"
// //                     placeholder="Write your message"
// //                     id="message"
// //                     required
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                   />
// //                 </fieldset>

// //                 <button
// //                   className="contact-submit-btn"
// //                   type="submit"
// //                   disabled={loading}
// //                 >
// //                   {loading ? "Sending..." : "Contact Our Experts"}
// //                 </button>
// //               </form>
// //             </div>

// //             <div className="contact-map-card">
// //               <div className="map-content">
// //                 <span>Our Location</span>
// //                 <h3>Visit Our Office</h3>
// //                 <p>
// //                   141, 1st. Flr. Citi Mall, Link Road, Andheri (W),
// //                   Mumbai - 400 053.
// //                 </p>
// //               </div>

// //               <div className="map-box">
// //                 <MapComponent />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {popup.show && (
// //         <div className="popup-overlay">
// //           <div className="popup-box">
// //             <h3 className={popup.type === "success" ? "success" : "error"}>
// //               {popup.type === "success" ? "Success" : "Error"}
// //             </h3>

// //             <p>{popup.message}</p>

// //             <button
// //               type="button"
// //               onClick={closePopup}
// //               className={popup.type === "success" ? "success-btn" : "error-btn"}
// //             >
// //               OK
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       <style jsx>{`
// //         .contact-banner-section {
// //           width: 100%;
// //           height: 390px;
// //           position: relative;
// //           overflow: hidden;
// //           background: #111827;
// //         }

// //         .contact-banner-img {
// //           width: 100%;
// //           height: 100%;
// //           object-fit: cover;
// //           object-position: center;
// //           display: block;
// //         }

// //         .contact-banner-overlay {
// //           position: absolute;
// //           inset: 0;
// //           background: rgba(0, 0, 0, 0.35);
// //           z-index: 1;
// //         }

// //         .contact-banner-content {
// //           position: absolute;
// //           inset: 0;
// //           z-index: 2;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           text-align: center;
// //           padding: 20px;
// //         }

// //         .contact-banner-content h1 {
// //           color: #ffffff;
// //           font-size: 56px;
// //           line-height: 1.1;
// //           font-weight: 700;
// //           margin: 0;
// //         }

// //         .contact-main-section {
// //           padding: 80px 0;
// //           background: #f8f7f4;
// //         }

// //         .contact-heading {
// //           text-align: center;
// //           max-width: 720px;
// //           margin: 0 auto 40px;
// //         }

// //         .contact-heading span {
// //           display: inline-block;
// //           font-size: 13px;
// //           font-weight: 700;
// //           color: #9b7653;
// //           text-transform: uppercase;
// //           letter-spacing: 0.08em;
// //           margin-bottom: 12px;
// //         }

// //         .contact-heading h2 {
// //           font-size: 38px;
// //           line-height: 1.2;
// //           font-weight: 700;
// //           color: #111827;
// //           margin: 0 0 12px;
// //         }

// //         .contact-heading p {
// //           font-size: 16px;
// //           line-height: 1.7;
// //           color: #6b7280;
// //           margin: 0;
// //         }

// //         .contact-grid {
// //           display: grid;
// //           grid-template-columns: minmax(0, 1fr) minmax(390px, 0.85fr);
// //           gap: 30px;
// //           align-items: stretch;
// //         }

// //         .contact-form-card,
// //         .contact-map-card {
// //           background: #ffffff;
// //           border: 1px solid #e5e7eb;
// //           border-radius: 18px;
// //           box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
// //           overflow: hidden;
// //         }

// //         .contact-form-card {
// //           padding: 36px;
// //         }

// //         .contact-form {
// //           width: 100%;
// //         }

// //         .input-row {
// //           display: grid;
// //           grid-template-columns: repeat(2, minmax(0, 1fr));
// //           gap: 18px;
// //         }

// //         .contact-form fieldset,
// //         .select-field {
// //           border: 0;
// //           padding: 0;
// //           margin: 0 0 18px;
// //           min-width: 0;
// //         }

// //         .contact-form label,
// //         .select-field label {
// //           display: block;
// //           font-size: 14px;
// //           font-weight: 600;
// //           color: #111827;
// //           margin-bottom: 8px;
// //         }

// //         .contact-form input,
// //         .contact-form textarea {
// //           width: 100%;
// //           border: 1px solid #d1d5db;
// //           background: #ffffff;
// //           border-radius: 10px;
// //           color: #111827;
// //           font-size: 15px;
// //           outline: none;
// //           transition: all 0.2s ease;
// //         }

// //         .contact-form input {
// //           height: 50px;
// //           padding: 0 15px;
// //         }

// //         .contact-form textarea {
// //           min-height: 135px;
// //           padding: 14px 15px;
// //           resize: vertical;
// //         }

// //         .contact-form input:focus,
// //         .contact-form textarea:focus {
// //           border-color: #9b7653;
// //           box-shadow: 0 0 0 3px rgba(155, 118, 83, 0.12);
// //         }

// //         .contact-submit-btn {
// //           width: 100%;
// //           height: 52px;
// //           border: none;
// //           border-radius: 10px;
// //           background: #9b7653;
// //           color: #ffffff;
// //           font-size: 15px;
// //           font-weight: 700;
// //           cursor: pointer;
// //           transition: all 0.2s ease;
// //         }

// //         .contact-submit-btn:hover {
// //           background: #7d5f42;
// //         }

// //         .contact-submit-btn:disabled {
// //           opacity: 0.7;
// //           cursor: not-allowed;
// //         }

// //         .contact-map-card {
// //           display: flex;
// //           flex-direction: column;
// //         }

// //         .map-content {
// //           padding: 30px;
// //           background: #ffffff;
// //           border-bottom: 1px solid #e5e7eb;
// //         }

// //         .map-content span {
// //           display: inline-block;
// //           font-size: 13px;
// //           font-weight: 700;
// //           color: #9b7653;
// //           text-transform: uppercase;
// //           letter-spacing: 0.08em;
// //           margin-bottom: 10px;
// //         }

// //         .map-content h3 {
// //           font-size: 28px;
// //           line-height: 1.2;
// //           font-weight: 700;
// //           color: #111827;
// //           margin: 0 0 10px;
// //         }

// //         .map-content p {
// //           font-size: 15px;
// //           line-height: 1.7;
// //           color: #6b7280;
// //           margin: 0;
// //         }

// //         .map-box {
// //           width: 100%;
// //           min-height: 395px;
// //           flex: 1;
// //           position: relative;
// //           overflow: hidden;
// //           background: #eef0f2;
// //         }

// //         .map-box :global(iframe),
// //         .map-box :global(.map),
// //         .map-box :global(#map) {
// //           width: 100% !important;
// //           height: 100% !important;
// //           min-height: 395px;
// //           display: block;
// //         }

// //         .popup-overlay {
// //           position: fixed;
// //           inset: 0;
// //           background: rgba(0, 0, 0, 0.45);
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           z-index: 99999;
// //           padding: 20px;
// //         }

// //         .popup-box {
// //           width: 100%;
// //           max-width: 420px;
// //           background: #ffffff;
// //           border-radius: 14px;
// //           padding: 28px 24px;
// //           text-align: center;
// //           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
// //         }

// //         .popup-box h3 {
// //           margin: 0 0 12px;
// //           font-size: 22px;
// //           font-weight: 700;
// //         }

// //         .popup-box h3.success {
// //           color: #16a34a;
// //         }

// //         .popup-box h3.error {
// //           color: #dc2626;
// //         }

// //         .popup-box p {
// //           margin: 0 0 20px;
// //           font-size: 15px;
// //           line-height: 1.6;
// //           color: #333333;
// //         }

// //         .popup-box button {
// //           border: none;
// //           outline: none;
// //           cursor: pointer;
// //           padding: 12px 24px;
// //           border-radius: 8px;
// //           font-size: 14px;
// //           font-weight: 600;
// //           color: #ffffff;
// //         }

// //         .success-btn {
// //           background: #16a34a;
// //         }

// //         .error-btn {
// //           background: #dc2626;
// //         }

// //         @media (max-width: 1199px) {
// //           .contact-grid {
// //             grid-template-columns: 1fr;
// //           }

// //           .map-box,
// //           .map-box :global(iframe),
// //           .map-box :global(.map),
// //           .map-box :global(#map) {
// //             min-height: 420px;
// //           }
// //         }

// //         @media (max-width: 991px) {
// //           .contact-banner-section {
// //             height: 320px;
// //           }

// //           .contact-banner-content h1 {
// //             font-size: 44px;
// //           }

// //           .contact-main-section {
// //             padding: 60px 0;
// //           }

// //           .contact-heading h2 {
// //             font-size: 32px;
// //           }

// //           .contact-form-card {
// //             padding: 30px;
// //           }
// //         }

// //         @media (max-width: 767px) {
// //           .contact-banner-section {
// //             height: 260px;
// //           }

// //           .contact-banner-content h1 {
// //             font-size: 36px;
// //           }

// //           .contact-main-section {
// //             padding: 45px 0;
// //           }

// //           .contact-heading {
// //             margin-bottom: 28px;
// //           }

// //           .contact-heading h2 {
// //             font-size: 27px;
// //           }

// //           .contact-heading p {
// //             font-size: 14px;
// //           }

// //           .contact-form-card {
// //             padding: 22px;
// //             border-radius: 16px;
// //           }

// //           .contact-map-card {
// //             border-radius: 16px;
// //           }

// //           .input-row {
// //             grid-template-columns: 1fr;
// //             gap: 0;
// //           }

// //           .contact-form fieldset,
// //           .select-field {
// //             margin-bottom: 16px;
// //           }

// //           .contact-form input {
// //             height: 48px;
// //           }

// //           .contact-form textarea {
// //             min-height: 120px;
// //           }

// //           .map-content {
// //             padding: 22px;
// //           }

// //           .map-content h3 {
// //             font-size: 24px;
// //           }

// //           .map-box,
// //           .map-box :global(iframe),
// //           .map-box :global(.map),
// //           .map-box :global(#map) {
// //             min-height: 330px;
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .contact-banner-section {
// //             height: 220px;
// //           }

// //           .contact-banner-content h1 {
// //             font-size: 32px;
// //           }

// //           .contact-form-card {
// //             padding: 18px;
// //           }

// //           .contact-heading h2 {
// //             font-size: 24px;
// //           }

// //           .map-box,
// //           .map-box :global(iframe),
// //           .map-box :global(.map),
// //           .map-box :global(#map) {
// //             min-height: 300px;
// //           }
// //         }
// //       `}</style>
// //     </>
// //   );
// // }


// "use client";

// import React, { useState } from "react";
// import MapComponent from "../common/MapComponent";

// export default function Contact() {
//   const interestOptions = ["Select", "location", "rent", "sale"];

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interest: "Rent",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [isInterestOpen, setIsInterestOpen] = useState(false);

//   const [popup, setPopup] = useState({
//     show: false,
//     type: "success",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleInterestSelect = (value) => {
//     setFormData((prev) => ({
//       ...prev,
//       interest: value,
//     }));

//     setIsInterestOpen(false);
//   };

//   const closePopup = () => {
//     setPopup({
//       show: false,
//       type: "success",
//       message: "",
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://backendgrowl.growlcityrealty.in/api/contact/submit/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             interest: formData.interest === "Select" ? "" : formData.interest,
//             message: formData.message,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setPopup({
//           show: true,
//           type: "success",
//           message: "Your message has been submitted successfully.",
//         });

//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           interest: "Rent",
//           message: "",
//         });
//       } else {
//         let errorText = "Something went wrong. Please try again.";

//         if (data?.errors) {
//           const firstErrorKey = Object.keys(data.errors)[0];

//           if (firstErrorKey && data.errors[firstErrorKey]?.[0]) {
//             errorText = data.errors[firstErrorKey][0];
//           }
//         } else if (data?.message) {
//           errorText = data.message;
//         }

//         setPopup({
//           show: true,
//           type: "error",
//           message: errorText,
//         });
//       }
//     } catch (error) {
//       setPopup({
//         show: true,
//         type: "error",
//         message: "Server error. Please try again later.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <section className="contact-banner-section">
//         <img
//           src="/images/contact_us.jpg"
//           alt="Contact Us"
//           className="contact-banner-img"
//         />

//         <div className="contact-banner-overlay" />

//         <div className="contact-banner-content">
//           <h1>Contact Us</h1>
//         </div>
//       </section>

//       <section className="contact-main-section">
//         <div className="tf-container">
//           <div className="contact-heading">
//             <span>Get In Touch</span>
//             <h2>We Would Love to Hear From You</h2>
//             <p>
//               Share your property requirement with us. Our team will connect
//               with you shortly.
//             </p>
//           </div>

//           <div className="contact-grid">
//             <div className="contact-form-card">
//               <form
//                 id="contactform"
//                 onSubmit={handleSubmit}
//                 className="contact-form"
//               >
//                 <div className="input-row">
//                   <fieldset>
//                     <label htmlFor="name">Name</label>
//                     <input
//                       type="text"
//                       placeholder="Your name"
//                       name="name"
//                       id="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                   </fieldset>

//                   <fieldset>
//                     <label htmlFor="email-contact">Email</label>
//                     <input
//                       type="email"
//                       placeholder="Email address"
//                       name="email"
//                       id="email-contact"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </fieldset>
//                 </div>

//                 <div className="input-row">
//                   <fieldset>
//                     <label htmlFor="phone">Phone Number</label>
//                     <input
//                       type="text"
//                       placeholder="Phone number"
//                       name="phone"
//                       id="phone"
//                       required
//                       value={formData.phone}
//                       onChange={handleChange}
//                     />
//                   </fieldset>

//                   <fieldset className="select-field">
//                     <label htmlFor="interest">Interested In</label>

//                     <div className="custom-select-wrapper">
//                       <button
//                         type="button"
//                         id="interest"
//                         className={`custom-select-btn ${
//                           isInterestOpen ? "active" : ""
//                         }`}
//                         onClick={() =>
//                           setIsInterestOpen((prevStatus) => !prevStatus)
//                         }
//                         aria-haspopup="listbox"
//                         aria-expanded={isInterestOpen}
//                       >
//                         <span>{formData.interest}</span>
//                         <span className="custom-select-arrow">▾</span>
//                       </button>

//                       {isInterestOpen && (
//                         <div className="custom-select-menu" role="listbox">
//                           {interestOptions.map((option) => (
//                             <button
//                               type="button"
//                               key={option}
//                               className={`custom-select-option ${
//                                 formData.interest === option ? "selected" : ""
//                               }`}
//                               onClick={() => handleInterestSelect(option)}
//                               role="option"
//                               aria-selected={formData.interest === option}
//                             >
//                               {option}
//                             </button>
//                           ))}
//                         </div>
//                       )}

//                       <input
//                         type="hidden"
//                         name="interest"
//                         value={formData.interest}
//                         readOnly
//                       />
//                     </div>
//                   </fieldset>
//                 </div>

//                 <fieldset>
//                   <label htmlFor="message">Your Message</label>
//                   <textarea
//                     name="message"
//                     placeholder="Write your message"
//                     id="message"
//                     required
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                 </fieldset>

//                 <button
//                   className="contact-submit-btn"
//                   type="submit"
//                   disabled={loading}
//                 >
//                   {loading ? "Sending..." : "Contact Our Experts"}
//                 </button>
//               </form>
//             </div>

//             <div className="contact-map-card">
//               <div className="map-content">
//                 <span>Our Location</span>
//                 <h3>Visit Our Office</h3>
//                 <p>
//                   141, 1st. Flr. Citi Mall, Link Road, Andheri (W), Mumbai -
//                   400 053.
//                 </p>
//               </div>

//               <div className="map-box">
//                 <MapComponent />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {popup.show && (
//         <div className="popup-overlay">
//           <div className="popup-box">
//             <h3 className={popup.type === "success" ? "success" : "error"}>
//               {popup.type === "success" ? "Success" : "Error"}
//             </h3>

//             <p>{popup.message}</p>

//             <button
//               type="button"
//               onClick={closePopup}
//               className={popup.type === "success" ? "success-btn" : "error-btn"}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .contact-banner-section {
//           width: 100%;
//           height: 390px;
//           position: relative;
//           overflow: hidden;
//           background: #111827;
//         }

//         .contact-banner-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center;
//           display: block;
//         }

//         .contact-banner-overlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.35);
//           z-index: 1;
//         }

//         .contact-banner-content {
//           position: absolute;
//           inset: 0;
//           z-index: 2;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           padding: 20px;
//         }

//         .contact-banner-content h1 {
//           color: #ffffff;
//           font-size: 56px;
//           line-height: 1.1;
//           font-weight: 700;
//           margin: 0;
//         }

//         .contact-main-section {
//           padding: 80px 0;
//           background: #f8f7f4;
//           overflow-x: hidden;
//         }

//         .contact-heading {
//           text-align: center;
//           max-width: 720px;
//           margin: 0 auto 40px;
//         }

//         .contact-heading span {
//           display: inline-block;
//           font-size: 13px;
//           font-weight: 700;
//           color: #9b7653;
//           text-transform: uppercase;
//           letter-spacing: 0.08em;
//           margin-bottom: 12px;
//         }

//         .contact-heading h2 {
//           font-size: 38px;
//           line-height: 1.2;
//           font-weight: 700;
//           color: #111827;
//           margin: 0 0 12px;
//         }

//         .contact-heading p {
//           font-size: 16px;
//           line-height: 1.7;
//           color: #6b7280;
//           margin: 0;
//         }

//         .contact-grid {
//           display: grid;
//           grid-template-columns: minmax(0, 1fr) minmax(390px, 0.85fr);
//           gap: 30px;
//           align-items: stretch;
//         }

//         .contact-form-card,
//         .contact-map-card {
//           background: #ffffff;
//           border: 1px solid #e5e7eb;
//           border-radius: 18px;
//           box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
//           overflow: visible;
//         }

//         .contact-form-card {
//           padding: 36px;
//           position: relative;
//           z-index: 5;
//         }

//         .contact-form {
//           width: 100%;
//         }

//         .input-row {
//           display: grid;
//           grid-template-columns: repeat(2, minmax(0, 1fr));
//           gap: 18px;
//         }

//         .contact-form fieldset,
//         .select-field {
//           border: 0;
//           padding: 0;
//           margin: 0 0 18px;
//           min-width: 0;
//         }

//         .contact-form label,
//         .select-field label {
//           display: block;
//           font-size: 14px;
//           font-weight: 600;
//           color: #111827;
//           margin-bottom: 8px;
//         }

//         .contact-form input,
//         .contact-form textarea {
//           width: 100%;
//           border: 1px solid #d1d5db;
//           background: #ffffff;
//           border-radius: 10px;
//           color: #111827;
//           font-size: 15px;
//           outline: none;
//           transition: all 0.2s ease;
//         }

//         .contact-form input {
//           height: 50px;
//           padding: 0 15px;
//         }

//         .contact-form textarea {
//           min-height: 135px;
//           padding: 14px 15px;
//           resize: vertical;
//         }

//         .contact-form input:focus,
//         .contact-form textarea:focus {
//           border-color: #9b7653;
//           box-shadow: 0 0 0 3px rgba(155, 118, 83, 0.12);
//         }

//         .custom-select-wrapper {
//           width: 100%;
//           position: relative;
//         }

//         .custom-select-btn {
//           width: 100%;
//           height: 50px;
//           border: 1px solid #d1d5db;
//           background: #ffffff;
//           border-radius: 10px;
//           color: #111827;
//           font-size: 15px;
//           outline: none;
//           padding: 0 15px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           cursor: pointer;
//           text-align: left;
//           transition: all 0.2s ease;
//         }

//         .custom-select-btn.active,
//         .custom-select-btn:focus {
//           border-color: #9b7653;
//           box-shadow: 0 0 0 3px rgba(155, 118, 83, 0.12);
//         }

//         .custom-select-arrow {
//           font-size: 13px;
//           color: #6b7280;
//           margin-left: 10px;
//         }

//         .custom-select-menu {
//           position: absolute;
//           left: 0;
//           right: 0;
//           top: calc(100% + 6px);
//           width: 100%;
//           max-width: 100%;
//           background: #ffffff;
//           border: 1px solid #d1d5db;
//           border-radius: 10px;
//           box-shadow: 0 12px 30px rgba(15, 23, 42, 0.16);
//           overflow: hidden;
//           z-index: 9999;
//         }

//         .custom-select-option {
//           width: 100%;
//           border: none;
//           background: #ffffff;
//           color: #111827;
//           font-size: 15px;
//           padding: 12px 15px;
//           text-align: left;
//           cursor: pointer;
//           display: block;
//           transition: all 0.2s ease;
//         }

//         .custom-select-option:hover,
//         .custom-select-option.selected {
//           background: #e7d8c8;
//           color: #111827;
//         }

//         .contact-submit-btn {
//           width: 100%;
//           height: 52px;
//           border: none;
//           border-radius: 10px;
//           background: #9b7653;
//           color: #ffffff;
//           font-size: 15px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.2s ease;
//         }

//         .contact-submit-btn:hover {
//           background: #7d5f42;
//         }

//         .contact-submit-btn:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//         }

//         .contact-map-card {
//           display: flex;
//           flex-direction: column;
//           overflow: hidden;
//         }

//         .map-content {
//           padding: 30px;
//           background: #ffffff;
//           border-bottom: 1px solid #e5e7eb;
//         }

//         .map-content span {
//           display: inline-block;
//           font-size: 13px;
//           font-weight: 700;
//           color: #9b7653;
//           text-transform: uppercase;
//           letter-spacing: 0.08em;
//           margin-bottom: 10px;
//         }

//         .map-content h3 {
//           font-size: 28px;
//           line-height: 1.2;
//           font-weight: 700;
//           color: #111827;
//           margin: 0 0 10px;
//         }

//         .map-content p {
//           font-size: 15px;
//           line-height: 1.7;
//           color: #6b7280;
//           margin: 0;
//         }

//         .map-box {
//           width: 100%;
//           min-height: 395px;
//           flex: 1;
//           position: relative;
//           overflow: hidden;
//           background: #eef0f2;
//         }

//         .map-box :global(iframe),
//         .map-box :global(.map),
//         .map-box :global(#map) {
//           width: 100% !important;
//           height: 100% !important;
//           min-height: 395px;
//           display: block;
//         }

//         .popup-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.45);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 99999;
//           padding: 20px;
//         }

//         .popup-box {
//           width: 100%;
//           max-width: 420px;
//           background: #ffffff;
//           border-radius: 14px;
//           padding: 28px 24px;
//           text-align: center;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
//         }

//         .popup-box h3 {
//           margin: 0 0 12px;
//           font-size: 22px;
//           font-weight: 700;
//         }

//         .popup-box h3.success {
//           color: #16a34a;
//         }

//         .popup-box h3.error {
//           color: #dc2626;
//         }

//         .popup-box p {
//           margin: 0 0 20px;
//           font-size: 15px;
//           line-height: 1.6;
//           color: #333333;
//         }

//         .popup-box button {
//           border: none;
//           outline: none;
//           cursor: pointer;
//           padding: 12px 24px;
//           border-radius: 8px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #ffffff;
//         }

//         .success-btn {
//           background: #16a34a;
//         }

//         .error-btn {
//           background: #dc2626;
//         }

//         @media (max-width: 1199px) {
//           .contact-grid {
//             grid-template-columns: 1fr;
//           }

//           .map-box,
//           .map-box :global(iframe),
//           .map-box :global(.map),
//           .map-box :global(#map) {
//             min-height: 420px;
//           }
//         }

//         @media (max-width: 991px) {
//           .contact-banner-section {
//             height: 320px;
//           }

//           .contact-banner-content h1 {
//             font-size: 44px;
//           }

//           .contact-main-section {
//             padding: 60px 0;
//           }

//           .contact-heading h2 {
//             font-size: 32px;
//           }

//           .contact-form-card {
//             padding: 30px;
//           }
//         }

//         @media (max-width: 767px) {
//           .contact-banner-section {
//             height: 260px;
//           }

//           .contact-banner-content h1 {
//             font-size: 36px;
//           }

//           .contact-main-section {
//             padding: 45px 0;
//           }

//           .contact-heading {
//             margin-bottom: 28px;
//           }

//           .contact-heading h2 {
//             font-size: 27px;
//           }

//           .contact-heading p {
//             font-size: 14px;
//           }

//           .contact-form-card {
//             padding: 22px;
//             border-radius: 16px;
//           }

//           .contact-map-card {
//             border-radius: 16px;
//           }

//           .input-row {
//             grid-template-columns: 1fr;
//             gap: 0;
//           }

//           .contact-form fieldset,
//           .select-field {
//             margin-bottom: 16px;
//           }

//           .contact-form input,
//           .custom-select-btn {
//             height: 48px;
//           }

//           .custom-select-menu {
//             position: absolute;
//             left: 0;
//             right: 0;
//             width: 100%;
//             max-width: 100%;
//           }

//           .custom-select-option {
//             font-size: 15px;
//             padding: 12px 14px;
//           }

//           .contact-form textarea {
//             min-height: 120px;
//           }

//           .map-content {
//             padding: 22px;
//           }

//           .map-content h3 {
//             font-size: 24px;
//           }

//           .map-box,
//           .map-box :global(iframe),
//           .map-box :global(.map),
//           .map-box :global(#map) {
//             min-height: 330px;
//           }
//         }

//         @media (max-width: 480px) {
//           .contact-banner-section {
//             height: 220px;
//           }

//           .contact-banner-content h1 {
//             font-size: 32px;
//           }

//           .contact-form-card {
//             padding: 18px;
//           }

//           .contact-heading h2 {
//             font-size: 24px;
//           }

//           .custom-select-menu {
//             border-radius: 9px;
//           }

//           .map-box,
//           .map-box :global(iframe),
//           .map-box :global(.map),
//           .map-box :global(#map) {
//             min-height: 300px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }





"use client";

import React, { useState } from "react";

const OFFICE_ADDRESS =
  "Growl City Realty, 603, G Square Business Park, Sector 30A, Sanpada, Navi Mumbai 400705";

const GOOGLE_MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const interestOptions = [
  { label: "Select", value: "" },
  { label: "Location", value: "location" },
  { label: "Rent", value: "rent" },
  { label: "Sale", value: "sale" },
];

function getInterestLabel(value) {
  return interestOptions.find((item) => item.value === value)?.label || "Select";
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "rent",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isInterestOpen, setIsInterestOpen] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    type: "success",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      interest: value,
    }));

    setIsInterestOpen(false);
  };

  const closePopup = () => {
    setPopup({
      show: false,
      type: "success",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://backendgrowl.growlcityrealty.in/api/contact/submit/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            interest: formData.interest,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setPopup({
          show: true,
          type: "success",
          message: "Your message has been submitted successfully.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "rent",
          message: "",
        });
      } else {
        let errorText = "Something went wrong. Please try again.";

        if (data?.errors) {
          const firstErrorKey = Object.keys(data.errors)[0];

          if (firstErrorKey && data.errors[firstErrorKey]?.[0]) {
            errorText = data.errors[firstErrorKey][0];
          }
        } else if (data?.message) {
          errorText = data.message;
        }

        setPopup({
          show: true,
          type: "error",
          message: errorText,
        });
      }
    } catch (error) {
      setPopup({
        show: true,
        type: "error",
        message: "Server error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-banner-section">
        <img
          src="/images/contact_us.jpg"
          alt="Contact Us"
          className="contact-banner-img"
        />

        <div className="contact-banner-overlay" />

        <div className="contact-banner-content">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="tf-container">
          <div className="contact-heading">
            <span>Get In Touch</span>
            <h2>We Would Love to Hear From You</h2>
            <p>
              Share your property requirement with us. Our team will connect
              with you shortly.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-form-card">
              <form
                id="contactform"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <div className="input-row">
                  <fieldset>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </fieldset>

                  <fieldset>
                    <label htmlFor="email-contact">Email</label>
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                      id="email-contact"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </fieldset>
                </div>

                <div className="input-row">
                  <fieldset>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Phone number"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </fieldset>

                  <fieldset className="select-field">
                    <label htmlFor="interest">Interested In</label>

                    <div className="custom-select-wrapper">
                      <button
                        type="button"
                        id="interest"
                        className={`custom-select-btn ${
                          isInterestOpen ? "active" : ""
                        }`}
                        onClick={() =>
                          setIsInterestOpen((prevStatus) => !prevStatus)
                        }
                        aria-haspopup="listbox"
                        aria-expanded={isInterestOpen}
                      >
                        <span>{getInterestLabel(formData.interest)}</span>
                        <span className="custom-select-arrow">▾</span>
                      </button>

                      {isInterestOpen && (
                        <div className="custom-select-menu" role="listbox">
                          {interestOptions.map((option) => (
                            <button
                              type="button"
                              key={option.value || "select"}
                              className={`custom-select-option ${
                                formData.interest === option.value
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() => handleInterestSelect(option.value)}
                              role="option"
                              aria-selected={formData.interest === option.value}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}

                      <input
                        type="hidden"
                        name="interest"
                        value={formData.interest}
                        readOnly
                      />
                    </div>
                  </fieldset>
                </div>

                <fieldset>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message"
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </fieldset>

                <button
                  className="contact-submit-btn"
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    minHeight: "56px",
                    height: "56px",
                    border: "none",
                    borderRadius: "12px",
                    background: "#173C5B",
                    color: "#ffffff",
                    WebkitTextFillColor: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 800,
                    cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: "0 14px 28px rgba(23, 60, 91, 0.26)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: 1,
                    marginTop: "8px",
                    position: "relative",
                    zIndex: 4,
                    opacity: loading ? 0.75 : 1,
                    appearance: "none",
                    WebkitAppearance: "none",
                    userSelect: "none",
                  }}
                >
                  <span style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}>
                    {loading ? "Sending..." : "Submit"}
                  </span>
                </button>
              </form>
            </div>

            <div className="contact-map-card">
              <div className="map-content">
                <span>Our Location</span>
                <h3>Visit Our Office</h3>
                <p>
                  Growl City Realty, 603, G Square Business Park, Sector 30A,
                  Sanpada, Navi Mumbai - 400705.
                </p>
              </div>

              <div className="map-box">
                <iframe
                  title="Growl City Realty Office Location"
                  src={GOOGLE_MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {popup.show && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3 className={popup.type === "success" ? "success" : "error"}>
              {popup.type === "success" ? "Success" : "Error"}
            </h3>

            <p>{popup.message}</p>

            <button
              type="button"
              onClick={closePopup}
              className={popup.type === "success" ? "success-btn" : "error-btn"}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        :root {
          --growl-blue: #1e4d74;
          --growl-dark-blue: #173c5b;
          --growl-yellow: #eec629;
          --growl-soft-blue: #eef6fb;
          --growl-text: #111827;
          --growl-muted: #5f6b7a;
          --growl-border: #d9e3ec;
        }

        .contact-banner-section {
          width: 100%;
          height: 390px;
          position: relative;
          overflow: hidden;
          background: var(--growl-dark-blue);
        }

        .contact-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .contact-banner-overlay {
          display: none;
        }

        .contact-banner-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .contact-banner-content h1 {
          color: #ffffff;
          font-size: 56px;
          line-height: 1.1;
          font-weight: 800;
          margin: 0;
          text-shadow: 0 14px 34px rgba(0, 0, 0, 0.26);
        }

        .contact-main-section {
          padding: 80px 0;
          background: linear-gradient(180deg, #f5f9fc 0%, #ffffff 100%);
          overflow-x: hidden;
        }

        .contact-heading {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 40px;
        }

        .contact-heading span {
          display: inline-block;
          font-size: 13px;
          font-weight: 800;
          color: var(--growl-blue);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
        }

        .contact-heading h2 {
          font-size: 38px;
          line-height: 1.2;
          font-weight: 800;
          color: var(--growl-dark-blue);
          margin: 0 0 12px;
        }

        .contact-heading p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--growl-muted);
          margin: 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(390px, 0.85fr);
          gap: 30px;
          align-items: stretch;
        }

        .contact-form-card,
        .contact-map-card {
          background: #ffffff;
          border: 1px solid var(--growl-border);
          border-radius: 18px;
          box-shadow: 0 18px 45px rgba(23, 60, 91, 0.12);
          overflow: visible;
        }

        .contact-form-card {
          padding: 36px;
          position: relative;
          z-index: 5;
        }

        .contact-form {
          width: 100%;
          position: relative;
          z-index: 2;
          overflow: visible;
        }

        .input-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .contact-form fieldset,
        .select-field {
          border: 0;
          padding: 0;
          margin: 0 0 18px;
          min-width: 0;
        }

        .contact-form label,
        .select-field label {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: var(--growl-dark-blue);
          margin-bottom: 8px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          border: 1px solid var(--growl-border);
          background: #ffffff;
          border-radius: 10px;
          color: var(--growl-text);
          font-size: 15px;
          outline: none;
          transition: all 0.2s ease;
        }

        .contact-form input {
          height: 50px;
          padding: 0 15px;
        }

        .contact-form textarea {
          min-height: 135px;
          padding: 14px 15px;
          resize: vertical;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: var(--growl-blue);
          box-shadow: 0 0 0 3px rgba(30, 77, 116, 0.14);
        }

        .custom-select-wrapper {
          width: 100%;
          position: relative;
        }

        .custom-select-btn {
          width: 100%;
          height: 50px;
          border: 1px solid var(--growl-border);
          background: #ffffff;
          border-radius: 10px;
          color: var(--growl-text);
          font-size: 15px;
          outline: none;
          padding: 0 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
        }

        .custom-select-btn.active,
        .custom-select-btn:focus {
          border-color: var(--growl-blue);
          box-shadow: 0 0 0 3px rgba(30, 77, 116, 0.14);
        }

        .custom-select-arrow {
          font-size: 13px;
          color: var(--growl-blue);
          margin-left: 10px;
        }

        .custom-select-menu {
          position: absolute;
          left: 0;
          right: 0;
          top: calc(100% + 6px);
          width: 100%;
          max-width: 100%;
          background: #ffffff;
          border: 1px solid var(--growl-border);
          border-radius: 10px;
          box-shadow: 0 14px 32px rgba(23, 60, 91, 0.18);
          overflow: hidden;
          z-index: 9999;
        }

        .custom-select-option {
          width: 100%;
          border: none;
          background: #ffffff;
          color: var(--growl-text);
          font-size: 15px;
          padding: 12px 15px;
          text-align: left;
          cursor: pointer;
          display: block;
          transition: all 0.2s ease;
        }

        .custom-select-option:hover,
        .custom-select-option.selected {
          background: var(--growl-soft-blue);
          color: var(--growl-dark-blue);
        }

        .contact-form button.contact-submit-btn,
        button.contact-submit-btn,
        .contact-submit-btn {
          width: 100% !important;
          min-height: 56px !important;
          height: 56px !important;
          border: none !important;
          border-radius: 12px !important;
          background: #173c5b !important;
          background-color: #173c5b !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          font-size: 15px !important;
          font-weight: 800 !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
          box-shadow: 0 14px 28px rgba(23, 60, 91, 0.26) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          line-height: 1 !important;
          margin-top: 8px !important;
          position: relative !important;
          z-index: 4 !important;
          overflow: visible !important;
          appearance: none !important;
          -webkit-appearance: none !important;
          user-select: none !important;
        }

        .contact-form button.contact-submit-btn span,
        button.contact-submit-btn span,
        .contact-submit-btn span {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          background: transparent !important;
          text-decoration: none !important;
        }

        .contact-form button.contact-submit-btn:hover,
        button.contact-submit-btn:hover,
        .contact-submit-btn:hover {
          background: #1e4d74 !important;
          background-color: #1e4d74 !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          transform: translateY(-1px);
        }

        .contact-form button.contact-submit-btn:disabled,
        button.contact-submit-btn:disabled,
        .contact-submit-btn:disabled {
          opacity: 0.75 !important;
          cursor: not-allowed !important;
          transform: none !important;
        }

        .contact-map-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .map-content {
          padding: 30px;
          background: #ffffff;
          border-bottom: 1px solid var(--growl-border);
        }

        .map-content span {
          display: inline-block;
          font-size: 13px;
          font-weight: 800;
          color: var(--growl-blue);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        .map-content h3 {
          font-size: 28px;
          line-height: 1.2;
          font-weight: 800;
          color: var(--growl-dark-blue);
          margin: 0 0 10px;
        }

        .map-content p {
          font-size: 15px;
          line-height: 1.7;
          color: var(--growl-muted);
          margin: 0;
        }

        .map-box {
          width: 100%;
          min-height: 395px;
          flex: 1;
          position: relative;
          overflow: hidden;
          background: #eef6fb;
        }

        .map-box iframe {
          width: 100%;
          height: 100%;
          min-height: 395px;
          border: 0;
          display: block;
          filter: saturate(0.95);
        }

        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(23, 60, 91, 0.52);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 20px;
        }

        .popup-box {
          width: 100%;
          max-width: 420px;
          background: #ffffff;
          border-radius: 14px;
          padding: 28px 24px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(23, 60, 91, 0.22);
          border: 1px solid var(--growl-border);
        }

        .popup-box h3 {
          margin: 0 0 12px;
          font-size: 22px;
          font-weight: 800;
        }

        .popup-box h3.success {
          color: var(--growl-blue);
        }

        .popup-box h3.error {
          color: #dc2626;
        }

        .popup-box p {
          margin: 0 0 20px;
          font-size: 15px;
          line-height: 1.6;
          color: #333333;
        }

        .popup-box button {
          border: none;
          outline: none;
          cursor: pointer;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
        }

        .success-btn {
          background: var(--growl-blue);
        }

        .error-btn {
          background: #dc2626;
        }

        @media (max-width: 1199px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .map-box,
          .map-box iframe {
            min-height: 420px;
          }
        }

        @media (max-width: 991px) {
          .contact-banner-section {
            height: 320px;
          }

          .contact-banner-content h1 {
            font-size: 44px;
          }

          .contact-main-section {
            padding: 60px 0;
          }

          .contact-heading h2 {
            font-size: 32px;
          }

          .contact-form-card {
            padding: 30px;
          }
        }

        @media (max-width: 767px) {
          .contact-banner-section {
            height: 260px;
          }

          .contact-banner-content h1 {
            font-size: 36px;
          }

          .contact-main-section {
            padding: 45px 0;
          }

          .contact-heading {
            margin-bottom: 28px;
          }

          .contact-heading h2 {
            font-size: 27px;
          }

          .contact-heading p {
            font-size: 14px;
          }

          .contact-form-card {
            padding: 22px;
            border-radius: 16px;
          }

          .contact-map-card {
            border-radius: 16px;
          }

          .input-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .contact-form fieldset,
          .select-field {
            margin-bottom: 16px;
          }

          .contact-form input,
          .custom-select-btn {
            height: 48px;
          }

          .custom-select-menu {
            position: absolute;
            left: 0;
            right: 0;
            width: 100%;
            max-width: 100%;
          }

          .custom-select-option {
            font-size: 15px;
            padding: 12px 14px;
          }

          .contact-form textarea {
            min-height: 120px;
          }

          .map-content {
            padding: 22px;
          }

          .map-content h3 {
            font-size: 24px;
          }

          .map-box,
          .map-box iframe {
            min-height: 330px;
          }
        }

        @media (max-width: 480px) {
          .contact-banner-section {
            height: 220px;
          }

          .contact-banner-content h1 {
            font-size: 32px;
          }

          .contact-form-card {
            padding: 18px;
          }

          .contact-heading h2 {
            font-size: 24px;
          }

          .custom-select-menu {
            border-radius: 9px;
          }

          .map-box,
          .map-box iframe {
            min-height: 300px;
          }
        }
      `}</style>
    </>
  );
}
