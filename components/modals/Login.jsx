// // // // "use client";

// // // // import React, { useState } from "react";
// // // // import Image from "next/image";

// // // // const API_BASE_URL =
// // // //   process.env.NEXT_PUBLIC_API_BASE_URL || "https://backendgrowl.growlcityrealty.in";

// // // // export default function Login() {
// // // //   const [step, setStep] = useState("login");
// // // //   const [formData, setFormData] = useState({
// // // //     phone: "",
// // // //     role: "customer",
// // // //     otp: "",
// // // //     username: "",
// // // //     password: "",
// // // //   });
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [message, setMessage] = useState("");

// // // //   const isAdmin = formData.role === "admin";

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;

// // // //     setFormData((prev) => {
// // // //       const updated = {
// // // //         ...prev,
// // // //         [name]: value,
// // // //       };

// // // //       if (name === "role") {
// // // //         return {
// // // //           ...updated,
// // // //           otp: "",
// // // //           username: "",
// // // //           password: "",
// // // //         };
// // // //       }

// // // //       return updated;
// // // //     });

// // // //     setMessage("");

// // // //     if (name === "role") {
// // // //       setStep("login");
// // // //     }
// // // //   };

// // // //   const redirectByRole = (user) => {
// // // //     if (user?.role === "customer") {
// // // //       window.location.href = "/user-dashboard";
// // // //     } else if (user?.role === "source_manager") {
// // // //       window.location.href = "/source-dashboard";
// // // //     } else if (user?.role === "admin" || user?.is_staff || user?.is_superuser) {
// // // //       window.location.href = "/dashboard";
// // // //     } else {
// // // //       window.location.href = "/";
// // // //     }
// // // //   };

// // // //   const handleSendOTP = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     setMessage("");

// // // //     try {
// // // //       const res = await fetch(`${API_BASE_URL}/api/users/send-otp/`, {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify({
// // // //           phone: formData.phone,
// // // //           role: formData.role,
// // // //         }),
// // // //       });

// // // //       const data = await res.json();

// // // //       if (res.ok && data.success) {
// // // //         setMessage(data.message || "OTP sent successfully.");
// // // //         setStep("verify");
// // // //       } else {
// // // //         setMessage(data.message || "Failed to send OTP.");
// // // //       }
// // // //     } catch (error) {
// // // //       setMessage("Something went wrong while sending OTP.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleVerifyOTP = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     setMessage("");

// // // //     try {
// // // //       const res = await fetch(`${API_BASE_URL}/api/users/verify-otp/`, {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify({
// // // //           phone: formData.phone,
// // // //           role: formData.role,
// // // //           otp: formData.otp,
// // // //         }),
// // // //       });

// // // //       const data = await res.json();

// // // //       if (res.ok && data.success) {
// // // //         if (data.token) {
// // // //           localStorage.setItem("authToken", data.token);
// // // //         }
// // // //         if (data.user) {
// // // //           localStorage.setItem("userData", JSON.stringify(data.user));
// // // //         }

// // // //         setMessage(data.message || "Login successful.");
// // // //         redirectByRole(data.user);
// // // //       } else {
// // // //         setMessage(data.message || "Invalid OTP.");
// // // //       }
// // // //     } catch (error) {
// // // //       setMessage("Something went wrong while verifying OTP.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleAdminLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     setMessage("");

// // // //     try {
// // // //       const res = await fetch(`${API_BASE_URL}/api/users/admin-login/`, {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify({
// // // //           username: formData.username,
// // // //           password: formData.password,
// // // //           role: "admin",
// // // //         }),
// // // //       });

// // // //       const data = await res.json();

// // // //       if (res.ok && data.success) {
// // // //         if (data.token) {
// // // //           localStorage.setItem("authToken", data.token);
// // // //         }
// // // //         if (data.user) {
// // // //           localStorage.setItem("userData", JSON.stringify(data.user));
// // // //         }

// // // //         setMessage(data.message || "Admin login successful.");
// // // //         window.location.href = "/dashboard";
// // // //       } else {
// // // //         setMessage(data.message || "Invalid admin credentials.");
// // // //       }
// // // //     } catch (error) {
// // // //       setMessage("Something went wrong while logging in as admin.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     if (isAdmin) {
// // // //       handleAdminLogin(e);
// // // //     } else if (step === "login") {
// // // //       handleSendOTP(e);
// // // //     } else {
// // // //       handleVerifyOTP(e);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="modal modal-account fade" id="modalLogin">
// // // //       <div className="modal-dialog modal-dialog-centered">
// // // //         <div className="modal-content">
// // // //           <div className="flat-account">
// // // //             <div className="banner-account">
// // // //               <Image
// // // //                 alt="banner"
// // // //                 width={380}
// // // //                 height={659}
// // // //                 src="/images/section/g5.jpg"
// // // //               />
// // // //             </div>

// // // //             <form className="form-account" onSubmit={handleSubmit}>
// // // //               <div className="title-box">
// // // //                 <h4>
// // // //                   {isAdmin
// // // //                     ? "Admin Login"
// // // //                     : step === "login"
// // // //                     ? "Login with OTP"
// // // //                     : "Verify OTP"}
// // // //                 </h4>
// // // //                 <span
// // // //                   className="close-modal icon-close"
// // // //                   data-bs-dismiss="modal"
// // // //                 />
// // // //               </div>

// // // //               <div className="box">
// // // //                 <fieldset className="box-fieldset">
// // // //                   <label htmlFor="role">Login As</label>
// // // //                   <div className="ip-field">
// // // //                     <select
// // // //                       className="form-control"
// // // //                       id="role"
// // // //                       name="role"
// // // //                       value={formData.role}
// // // //                       onChange={handleChange}
// // // //                       disabled={loading}
// // // //                       required
// // // //                     >
// // // //                       <option value="customer">Customer</option>
// // // //                       <option value="source_manager">Source Manager</option>
// // // //                       <option value="admin">Admin</option>
// // // //                     </select>
// // // //                   </div>
// // // //                 </fieldset>

// // // //                 {isAdmin ? (
// // // //                   <>
// // // //                     <fieldset className="box-fieldset">
// // // //                       <label htmlFor="username">User ID / Username</label>
// // // //                       <div className="ip-field">
// // // //                         <input
// // // //                           type="text"
// // // //                           className="form-control"
// // // //                           id="username"
// // // //                           name="username"
// // // //                           placeholder="Enter admin username"
// // // //                           value={formData.username}
// // // //                           onChange={handleChange}
// // // //                           required
// // // //                         />
// // // //                       </div>
// // // //                     </fieldset>

// // // //                     <fieldset className="box-fieldset">
// // // //                       <label htmlFor="password">Password</label>
// // // //                       <div className="ip-field">
// // // //                         <input
// // // //                           type="password"
// // // //                           className="form-control"
// // // //                           id="password"
// // // //                           name="password"
// // // //                           placeholder="Enter password"
// // // //                           value={formData.password}
// // // //                           onChange={handleChange}
// // // //                           required
// // // //                         />
// // // //                       </div>
// // // //                     </fieldset>
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <fieldset className="box-fieldset">
// // // //                       <label htmlFor="phone">Mobile Number</label>
// // // //                       <div className="ip-field">
// // // //                         <input
// // // //                           type="text"
// // // //                           className="form-control"
// // // //                           id="phone"
// // // //                           name="phone"
// // // //                           placeholder="+919876543210"
// // // //                           value={formData.phone}
// // // //                           onChange={handleChange}
// // // //                           disabled={step === "verify"}
// // // //                           required
// // // //                         />
// // // //                       </div>
// // // //                     </fieldset>

// // // //                     {step === "verify" && (
// // // //                       <fieldset className="box-fieldset">
// // // //                         <label htmlFor="otp">Enter OTP</label>
// // // //                         <div className="ip-field">
// // // //                           <input
// // // //                             type="text"
// // // //                             className="form-control"
// // // //                             id="otp"
// // // //                             name="otp"
// // // //                             placeholder="Enter 6 digit OTP"
// // // //                             value={formData.otp}
// // // //                             onChange={handleChange}
// // // //                             required
// // // //                           />
// // // //                         </div>
// // // //                       </fieldset>
// // // //                     )}
// // // //                   </>
// // // //                 )}

// // // //                 {message && (
// // // //                   <div
// // // //                     style={{
// // // //                       marginTop: "10px",
// // // //                       color: "#ff6b35",
// // // //                       fontSize: "14px",
// // // //                     }}
// // // //                   >
// // // //                     {message}
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //               <div className="box box-btn">
// // // //                 <button
// // // //                   type="submit"
// // // //                   className="tf-btn bg-color-primary w-100"
// // // //                   disabled={loading}
// // // //                 >
// // // //                   {loading
// // // //                     ? "Please wait..."
// // // //                     : isAdmin
// // // //                     ? "Login"
// // // //                     : step === "login"
// // // //                     ? "Send OTP"
// // // //                     : "Verify OTP"}
// // // //                 </button>

// // // //                 {!isAdmin && step === "verify" && (
// // // //                   <button
// // // //                     type="button"
// // // //                     className="tf-btn style-border w-100 mt-2"
// // // //                     onClick={() => {
// // // //                       setStep("login");
// // // //                       setFormData((prev) => ({
// // // //                         ...prev,
// // // //                         otp: "",
// // // //                       }));
// // // //                       setMessage("");
// // // //                     }}
// // // //                   >
// // // //                     Change Number
// // // //                   </button>
// // // //                 )}
// // // //               </div>

// // // //               <p className="box text-center caption-2">
// // // //                 {isAdmin
// // // //                   ? "Admin can login using username and password"
// // // //                   : "One mobile number can only be used for one role"}
// // // //               </p>
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import React, { useState } from "react";
// // // import Image from "next/image";

// // // const API_BASE_URL =
// // //   process.env.NEXT_PUBLIC_API_BASE_URL ||
// // //   "https://backendgrowl.growlcityrealty.in";

// // // export default function Login() {
// // //   const [step, setStep] = useState("login");
// // //   const [formData, setFormData] = useState({
// // //     phone: "",
// // //     role: "customer",
// // //     otp: "",
// // //     username: "",
// // //     password: "",
// // //   });
// // //   const [loading, setLoading] = useState(false);
// // //   const [message, setMessage] = useState("");

// // //   const isAdmin = formData.role === "admin";

// // //   const getPendingPropertyRedirect = () => {
// // //     if (typeof window === "undefined") return "";

// // //     const pending = localStorage.getItem("pendingPropertyRedirect") || "";

// // //     if (!pending) return "";

// // //     if (!pending.startsWith("/")) {
// // //       localStorage.removeItem("pendingPropertyRedirect");
// // //       return "";
// // //     }

// // //     localStorage.removeItem("pendingPropertyRedirect");
// // //     return pending;
// // //   };

// // //   const redirectByRole = (user) => {
// // //     const pendingRedirect = getPendingPropertyRedirect();

// // //     if (pendingRedirect) {
// // //       window.location.href = pendingRedirect;
// // //       return;
// // //     }

// // //     if (user?.role === "customer") {
// // //       window.location.href = "/user-dashboard";
// // //     } else if (user?.role === "source_manager") {
// // //       window.location.href = "/source-dashboard";
// // //     } else if (user?.role === "admin" || user?.is_staff || user?.is_superuser) {
// // //       window.location.href = "/dashboard";
// // //     } else {
// // //       window.location.href = "/";
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;

// // //     setFormData((prev) => {
// // //       const updated = {
// // //         ...prev,
// // //         [name]: value,
// // //       };

// // //       if (name === "role") {
// // //         return {
// // //           ...updated,
// // //           otp: "",
// // //           username: "",
// // //           password: "",
// // //         };
// // //       }

// // //       return updated;
// // //     });

// // //     setMessage("");

// // //     if (name === "role") {
// // //       setStep("login");
// // //     }
// // //   };

// // //   const handleSendOTP = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setMessage("");

// // //     try {
// // //       const res = await fetch(`${API_BASE_URL}/api/users/send-otp/`, {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({
// // //           phone: formData.phone,
// // //           role: formData.role,
// // //         }),
// // //       });

// // //       const data = await res.json();

// // //       if (res.ok && data.success) {
// // //         setMessage(data.message || "OTP sent successfully.");
// // //         setStep("verify");
// // //       } else {
// // //         setMessage(data.message || "Failed to send OTP.");
// // //       }
// // //     } catch (error) {
// // //       setMessage("Something went wrong while sending OTP.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleVerifyOTP = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setMessage("");

// // //     try {
// // //       const res = await fetch(`${API_BASE_URL}/api/users/verify-otp/`, {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({
// // //           phone: formData.phone,
// // //           role: formData.role,
// // //           otp: formData.otp,
// // //         }),
// // //       });

// // //       const data = await res.json();

// // //       if (res.ok && data.success) {
// // //         if (data.token) {
// // //           localStorage.setItem("authToken", data.token);
// // //         }

// // //         if (data.user) {
// // //           localStorage.setItem("userData", JSON.stringify(data.user));
// // //         }

// // //         setMessage(data.message || "Login successful.");
// // //         redirectByRole(data.user);
// // //       } else {
// // //         setMessage(data.message || "Invalid OTP.");
// // //       }
// // //     } catch (error) {
// // //       setMessage("Something went wrong while verifying OTP.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleAdminLogin = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setMessage("");

// // //     try {
// // //       const res = await fetch(`${API_BASE_URL}/api/users/admin-login/`, {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({
// // //           username: formData.username,
// // //           password: formData.password,
// // //           role: "admin",
// // //         }),
// // //       });

// // //       const data = await res.json();

// // //       if (res.ok && data.success) {
// // //         if (data.token) {
// // //           localStorage.setItem("authToken", data.token);
// // //         }

// // //         if (data.user) {
// // //           localStorage.setItem("userData", JSON.stringify(data.user));
// // //         }

// // //         setMessage(data.message || "Admin login successful.");
// // //         redirectByRole(data.user);
// // //       } else {
// // //         setMessage(data.message || "Invalid admin credentials.");
// // //       }
// // //     } catch (error) {
// // //       setMessage("Something went wrong while logging in as admin.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleSubmit = (e) => {
// // //     if (isAdmin) {
// // //       handleAdminLogin(e);
// // //     } else if (step === "login") {
// // //       handleSendOTP(e);
// // //     } else {
// // //       handleVerifyOTP(e);
// // //     }
// // //   };

// // //   return (
// // //     <div className="modal modal-account fade" id="modalLogin">
// // //       <div className="modal-dialog modal-dialog-centered">
// // //         <div className="modal-content">
// // //           <div className="flat-account">
// // //             <div className="banner-account">
// // //               <Image
// // //                 alt="banner"
// // //                 width={380}
// // //                 height={659}
// // //                 src="/images/section/g5.jpg"
// // //               />
// // //             </div>

// // //             <form className="form-account" onSubmit={handleSubmit}>
// // //               <div className="title-box">
// // //                 <h4>
// // //                   {isAdmin
// // //                     ? "Admin Login"
// // //                     : step === "login"
// // //                     ? "Login with OTP"
// // //                     : "Verify OTP"}
// // //                 </h4>
// // //                 <span
// // //                   className="close-modal icon-close"
// // //                   data-bs-dismiss="modal"
// // //                 />
// // //               </div>

// // //               <div className="box">
// // //                 <fieldset className="box-fieldset">
// // //                   <label htmlFor="role">Login As</label>
// // //                   <div className="ip-field">
// // //                     <select
// // //                       className="form-control"
// // //                       id="role"
// // //                       name="role"
// // //                       value={formData.role}
// // //                       onChange={handleChange}
// // //                       disabled={loading}
// // //                       required
// // //                     >
// // //                       <option value="customer">Customer</option>
// // //                       <option value="source_manager">Source Manager</option>
// // //                       <option value="admin">Admin</option>
// // //                     </select>
// // //                   </div>
// // //                 </fieldset>

// // //                 {isAdmin ? (
// // //                   <>
// // //                     <fieldset className="box-fieldset">
// // //                       <label htmlFor="username">User ID / Username</label>
// // //                       <div className="ip-field">
// // //                         <input
// // //                           type="text"
// // //                           className="form-control"
// // //                           id="username"
// // //                           name="username"
// // //                           placeholder="Enter admin username"
// // //                           value={formData.username}
// // //                           onChange={handleChange}
// // //                           required
// // //                         />
// // //                       </div>
// // //                     </fieldset>

// // //                     <fieldset className="box-fieldset">
// // //                       <label htmlFor="password">Password</label>
// // //                       <div className="ip-field">
// // //                         <input
// // //                           type="password"
// // //                           className="form-control"
// // //                           id="password"
// // //                           name="password"
// // //                           placeholder="Enter password"
// // //                           value={formData.password}
// // //                           onChange={handleChange}
// // //                           required
// // //                         />
// // //                       </div>
// // //                     </fieldset>
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <fieldset className="box-fieldset">
// // //                       <label htmlFor="phone">Mobile Number</label>
// // //                       <div className="ip-field">
// // //                         <input
// // //                           type="text"
// // //                           className="form-control"
// // //                           id="phone"
// // //                           name="phone"
// // //                           placeholder="+919876543210"
// // //                           value={formData.phone}
// // //                           onChange={handleChange}
// // //                           disabled={step === "verify"}
// // //                           required
// // //                         />
// // //                       </div>
// // //                     </fieldset>

// // //                     {step === "verify" && (
// // //                       <fieldset className="box-fieldset">
// // //                         <label htmlFor="otp">Enter OTP</label>
// // //                         <div className="ip-field">
// // //                           <input
// // //                             type="text"
// // //                             className="form-control"
// // //                             id="otp"
// // //                             name="otp"
// // //                             placeholder="Enter 6 digit OTP"
// // //                             value={formData.otp}
// // //                             onChange={handleChange}
// // //                             required
// // //                           />
// // //                         </div>
// // //                       </fieldset>
// // //                     )}
// // //                   </>
// // //                 )}

// // //                 {message && (
// // //                   <div
// // //                     style={{
// // //                       marginTop: "10px",
// // //                       color: "#ff6b35",
// // //                       fontSize: "14px",
// // //                     }}
// // //                   >
// // //                     {message}
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               <div className="box box-btn">
// // //                 <button
// // //                   type="submit"
// // //                   className="tf-btn bg-color-primary w-100"
// // //                   disabled={loading}
// // //                 >
// // //                   {loading
// // //                     ? "Please wait..."
// // //                     : isAdmin
// // //                     ? "Login"
// // //                     : step === "login"
// // //                     ? "Send OTP"
// // //                     : "Verify OTP"}
// // //                 </button>

// // //                 {!isAdmin && step === "verify" && (
// // //                   <button
// // //                     type="button"
// // //                     className="tf-btn style-border w-100 mt-2"
// // //                     onClick={() => {
// // //                       setStep("login");
// // //                       setFormData((prev) => ({
// // //                         ...prev,
// // //                         otp: "",
// // //                       }));
// // //                       setMessage("");
// // //                     }}
// // //                   >
// // //                     Change Number
// // //                   </button>
// // //                 )}
// // //               </div>

// // //               <p className="box text-center caption-2">
// // //                 {isAdmin
// // //                   ? "Admin can login using username and password"
// // //                   : "One mobile number can only be used for one role"}
// // //               </p>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import React, { useState } from "react";
// // import Image from "next/image";

// // const API_BASE_URL =
// //   process.env.NEXT_PUBLIC_API_BASE_URL ||
// //   "https://backendgrowl.growlcityrealty.in";

// // const roleOptions = [
// //   { value: "customer", label: "Customer" },
// //   { value: "source_manager", label: "Source Manager" },
// //   { value: "admin", label: "Admin" },
// // ];

// // export default function Login() {
// //   const [step, setStep] = useState("login");
// //   const [roleOpen, setRoleOpen] = useState(false);
// //   const [formData, setFormData] = useState({
// //     phone: "",
// //     role: "customer",
// //     otp: "",
// //     username: "",
// //     password: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState("");

// //   const isAdmin = formData.role === "admin";
// //   const selectedRole = roleOptions.find((item) => item.value === formData.role);

// //   const getPendingPropertyRedirect = () => {
// //     if (typeof window === "undefined") return "";

// //     const pending = localStorage.getItem("pendingPropertyRedirect") || "";

// //     if (!pending) return "";

// //     if (!pending.startsWith("/")) {
// //       localStorage.removeItem("pendingPropertyRedirect");
// //       return "";
// //     }

// //     localStorage.removeItem("pendingPropertyRedirect");
// //     return pending;
// //   };

// //   const redirectByRole = (user) => {
// //     const pendingRedirect = getPendingPropertyRedirect();

// //     if (pendingRedirect) {
// //       window.location.href = pendingRedirect;
// //       return;
// //     }

// //     if (user?.role === "customer") {
// //       window.location.href = "/user-dashboard";
// //     } else if (user?.role === "source_manager") {
// //       window.location.href = "/source-dashboard";
// //     } else if (user?.role === "admin" || user?.is_staff || user?.is_superuser) {
// //       window.location.href = "/dashboard";
// //     } else {
// //       window.location.href = "/";
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));

// //     setMessage("");
// //   };

// //   const handleRoleSelect = (role) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       role,
// //       otp: "",
// //       username: "",
// //       password: "",
// //     }));

// //     setStep("login");
// //     setMessage("");
// //     setRoleOpen(false);
// //   };

// //   const handleSendOTP = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage("");

// //     try {
// //       const res = await fetch(`${API_BASE_URL}/api/users/send-otp/`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           phone: formData.phone,
// //           role: formData.role,
// //         }),
// //       });

// //       const data = await res.json();

// //       if (res.ok && data.success) {
// //         setMessage(data.message || "OTP sent successfully.");
// //         setStep("verify");
// //       } else {
// //         setMessage(data.message || "Failed to send OTP.");
// //       }
// //     } catch {
// //       setMessage("Something went wrong while sending OTP.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleVerifyOTP = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage("");

// //     try {
// //       const res = await fetch(`${API_BASE_URL}/api/users/verify-otp/`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           phone: formData.phone,
// //           role: formData.role,
// //           otp: formData.otp,
// //         }),
// //       });

// //       const data = await res.json();

// //       if (res.ok && data.success) {
// //         if (data.token) localStorage.setItem("authToken", data.token);
// //         if (data.user) localStorage.setItem("userData", JSON.stringify(data.user));

// //         setMessage(data.message || "Login successful.");
// //         redirectByRole(data.user);
// //       } else {
// //         setMessage(data.message || "Invalid OTP.");
// //       }
// //     } catch {
// //       setMessage("Something went wrong while verifying OTP.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleAdminLogin = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage("");

// //     try {
// //       const res = await fetch(`${API_BASE_URL}/api/users/admin-login/`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           username: formData.username,
// //           password: formData.password,
// //           role: "admin",
// //         }),
// //       });

// //       const data = await res.json();

// //       if (res.ok && data.success) {
// //         if (data.token) localStorage.setItem("authToken", data.token);
// //         if (data.user) localStorage.setItem("userData", JSON.stringify(data.user));

// //         setMessage(data.message || "Admin login successful.");
// //         redirectByRole(data.user);
// //       } else {
// //         setMessage(data.message || "Invalid admin credentials.");
// //       }
// //     } catch {
// //       setMessage("Something went wrong while logging in as admin.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     if (isAdmin) {
// //       handleAdminLogin(e);
// //     } else if (step === "login") {
// //       handleSendOTP(e);
// //     } else {
// //       handleVerifyOTP(e);
// //     }
// //   };

// //   return (
// //     <>
// //       <style jsx global>{`
// //         #modalLogin {
// //           z-index: 99999;
// //         }

// //         #modalLogin .modal-dialog {
// //           width: 100%;
// //           max-width: 760px;
// //           margin: 20px auto;
// //           padding: 0 14px;
// //         }

// //         #modalLogin .modal-content {
// //           border: 0;
// //           border-radius: 26px;
// //           overflow: visible;
// //           background: #ffffff;
// //           box-shadow: 0 30px 80px rgba(0, 0, 0, 0.28);
// //         }

// //         #modalLogin .flat-account {
// //           display: grid;
// //           grid-template-columns: 1fr 1.05fr;
// //           min-height: 500px;
// //           background: #ffffff;
// //           border-radius: 26px;
// //           overflow: visible;
// //         }

// //         #modalLogin .banner-account {
// //           position: relative;
// //           min-height: 500px;
// //           overflow: hidden;
// //           background: #111827;
// //           border-radius: 26px 0 0 26px;
// //         }

// //         #modalLogin .banner-account img {
// //           width: 100%;
// //           height: 100%;
// //           min-height: 500px;
// //           object-fit: cover;
// //           display: block;
// //         }

// //         #modalLogin .form-account {
// //           padding: 34px 34px 30px;
// //           background: #ffffff;
// //           color: #111827;
// //           width: 100%;
// //           max-width: 100%;
// //           box-sizing: border-box;
// //           border-radius: 0 26px 26px 0;
// //           position: relative;
// //           z-index: 10;
// //         }

// //         #modalLogin .title-box {
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           gap: 14px;
// //           margin-bottom: 26px;
// //         }

// //         #modalLogin .title-box h4 {
// //           margin: 0;
// //           color: #2f3137;
// //           font-size: 24px;
// //           font-weight: 800;
// //           line-height: 1.2;
// //         }

// //         #modalLogin .close-modal {
// //           width: 36px;
// //           height: 36px;
// //           border-radius: 50%;
// //           display: inline-flex;
// //           align-items: center;
// //           justify-content: center;
// //           cursor: pointer;
// //           color: #6b7280;
// //           font-size: 20px;
// //           flex-shrink: 0;
// //         }

// //         #modalLogin .close-modal:hover {
// //           background: #f3f4f6;
// //           color: #111827;
// //         }

// //         #modalLogin .box,
// //         #modalLogin .box-fieldset,
// //         #modalLogin .ip-field {
// //           width: 100%;
// //           max-width: 100%;
// //           box-sizing: border-box;
// //         }

// //         #modalLogin .box-fieldset {
// //           margin: 0 0 18px;
// //           padding: 0;
// //           border: 0;
// //         }

// //         #modalLogin label {
// //           display: block;
// //           margin-bottom: 8px;
// //           font-size: 14px;
// //           font-weight: 700;
// //           color: #374151;
// //         }

// //         #modalLogin input,
// //         #modalLogin .form-control {
// //           width: 100% !important;
// //           max-width: 100% !important;
// //           height: 48px !important;
// //           border: 1px solid #d1d5db !important;
// //           border-radius: 12px !important;
// //           background: #ffffff !important;
// //           color: #111827 !important;
// //           padding: 10px 14px !important;
// //           font-size: 14px !important;
// //           line-height: 1.2 !important;
// //           outline: none !important;
// //           box-shadow: none !important;
// //           box-sizing: border-box !important;
// //         }

// //         #modalLogin input:focus,
// //         #modalLogin .form-control:focus {
// //           border-color: #f28c52 !important;
// //           box-shadow: 0 0 0 3px rgba(242, 140, 82, 0.16) !important;
// //         }

// //         #modalLogin .custom-role-select {
// //           position: relative;
// //           width: 100%;
// //           z-index: 50;
// //         }

// //         #modalLogin .custom-role-button {
// //           width: 100%;
// //           height: 48px;
// //           border: 1px solid #d1d5db;
// //           border-radius: 12px;
// //           background: #ffffff;
// //           color: #111827;
// //           padding: 0 14px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           font-size: 14px;
// //           font-weight: 600;
// //           cursor: pointer;
// //           box-sizing: border-box;
// //         }

// //         #modalLogin .custom-role-button.active {
// //           border-color: #f28c52;
// //           box-shadow: 0 0 0 3px rgba(242, 140, 82, 0.16);
// //         }

// //         #modalLogin .custom-role-arrow {
// //           font-size: 14px;
// //           line-height: 1;
// //           color: #111827;
// //           transition: transform 0.2s ease;
// //         }

// //         #modalLogin .custom-role-button.active .custom-role-arrow {
// //           transform: rotate(180deg);
// //         }

// //         #modalLogin .custom-role-menu {
// //           position: absolute;
// //           left: 0;
// //           right: 0;
// //           top: calc(100% + 6px);
// //           width: 100%;
// //           background: #ffffff;
// //           border: 1px solid #d1d5db;
// //           border-radius: 14px;
// //           overflow: hidden;
// //           box-shadow: 0 16px 35px rgba(17, 24, 39, 0.18);
// //           z-index: 999999;
// //         }

// //         #modalLogin .custom-role-option {
// //           width: 100%;
// //           min-height: 42px;
// //           border: 0;
// //           background: #ffffff;
// //           color: #111827;
// //           padding: 10px 14px;
// //           text-align: left;
// //           font-size: 14px;
// //           font-weight: 600;
// //           display: block;
// //           cursor: pointer;
// //         }

// //         #modalLogin .custom-role-option:hover,
// //         #modalLogin .custom-role-option.selected {
// //           background: #f28c52;
// //           color: #ffffff;
// //         }

// //         #modalLogin .box-btn {
// //           margin-top: 24px;
// //         }

// //         #modalLogin .tf-btn {
// //           width: 100% !important;
// //           height: 48px !important;
// //           min-height: 48px !important;
// //           border-radius: 14px !important;
// //           display: flex !important;
// //           align-items: center !important;
// //           justify-content: center !important;
// //           font-size: 15px !important;
// //           font-weight: 800 !important;
// //           border: 0 !important;
// //           background: #2f3137 !important;
// //           color: #ffffff !important;
// //           cursor: pointer;
// //           padding: 0 16px !important;
// //         }

// //         #modalLogin .tf-btn:disabled {
// //           opacity: 0.7;
// //           cursor: not-allowed;
// //         }

// //         #modalLogin .tf-btn.style-border {
// //           background: #ffffff !important;
// //           color: #2f3137 !important;
// //           border: 1px solid #d1d5db !important;
// //         }

// //         #modalLogin .caption-2 {
// //           margin-top: 22px;
// //           margin-bottom: 0;
// //           color: #6b7280;
// //           font-size: 13px;
// //           line-height: 1.5;
// //           text-align: center;
// //         }

// //         #modalLogin .login-message {
// //           margin-top: 10px;
// //           color: #ff6b35;
// //           font-size: 14px;
// //           line-height: 1.4;
// //         }

// //         @media (max-width: 767px) {
// //           #modalLogin .modal-dialog {
// //             max-width: 340px;
// //             margin: 16px auto;
// //             padding: 0 10px;
// //           }

// //           #modalLogin .modal-content {
// //             border-radius: 22px;
// //           }

// //           #modalLogin .flat-account {
// //             display: block;
// //             min-height: auto;
// //             border-radius: 22px;
// //           }

// //           #modalLogin .banner-account {
// //             display: none;
// //           }

// //           #modalLogin .form-account {
// //             padding: 28px 14px 26px;
// //             border-radius: 22px;
// //           }

// //           #modalLogin .title-box {
// //             margin-bottom: 22px;
// //           }

// //           #modalLogin .title-box h4 {
// //             font-size: 20px;
// //           }

// //           #modalLogin .box-fieldset {
// //             margin-bottom: 16px;
// //           }

// //           #modalLogin input,
// //           #modalLogin .form-control,
// //           #modalLogin .custom-role-button {
// //             height: 46px !important;
// //             font-size: 13px !important;
// //             border-radius: 10px !important;
// //           }

// //           #modalLogin .custom-role-menu {
// //             position: relative;
// //             top: 6px;
// //             left: 0;
// //             right: 0;
// //             width: 100%;
// //             margin-bottom: 6px;
// //             border-radius: 12px;
// //           }

// //           #modalLogin .custom-role-option {
// //             min-height: 40px;
// //             font-size: 13px;
// //             padding: 9px 12px;
// //           }

// //           #modalLogin .tf-btn {
// //             height: 46px !important;
// //             min-height: 46px !important;
// //             border-radius: 13px !important;
// //           }
// //         }

// //         @media (max-width: 380px) {
// //           #modalLogin .modal-dialog {
// //             max-width: 100%;
// //             padding: 0 8px;
// //           }

// //           #modalLogin .form-account {
// //             padding: 26px 14px 24px;
// //           }

// //           #modalLogin .title-box h4 {
// //             font-size: 19px;
// //           }
// //         }
// //       `}</style>

// //       <div className="modal modal-account fade" id="modalLogin">
// //         <div className="modal-dialog modal-dialog-centered">
// //           <div className="modal-content">
// //             <div className="flat-account">
// //               <div className="banner-account">
// //                 <Image
// //                   alt="banner"
// //                   width={380}
// //                   height={659}
// //                   src="/images/section/g5.jpg"
// //                 />
// //               </div>

// //               <form className="form-account" onSubmit={handleSubmit}>
// //                 <div className="title-box">
// //                   <h4>
// //                     {isAdmin
// //                       ? "Admin Login"
// //                       : step === "login"
// //                       ? "Login with OTP"
// //                       : "Verify OTP"}
// //                   </h4>

// //                   <span
// //                     className="close-modal icon-close"
// //                     data-bs-dismiss="modal"
// //                   />
// //                 </div>

// //                 <div className="box">
// //                   <fieldset className="box-fieldset">
// //                     <label>Login As</label>

// //                     <div className="custom-role-select">
// //                       <button
// //                         type="button"
// //                         className={`custom-role-button ${
// //                           roleOpen ? "active" : ""
// //                         }`}
// //                         onClick={() => !loading && setRoleOpen((prev) => !prev)}
// //                         disabled={loading}
// //                       >
// //                         <span>{selectedRole?.label || "Customer"}</span>
// //                         <span className="custom-role-arrow">⌄</span>
// //                       </button>

// //                       {roleOpen && (
// //                         <div className="custom-role-menu">
// //                           {roleOptions.map((option) => (
// //                             <button
// //                               key={option.value}
// //                               type="button"
// //                               className={`custom-role-option ${
// //                                 formData.role === option.value ? "selected" : ""
// //                               }`}
// //                               onClick={() => handleRoleSelect(option.value)}
// //                             >
// //                               {option.label}
// //                             </button>
// //                           ))}
// //                         </div>
// //                       )}
// //                     </div>
// //                   </fieldset>

// //                   {isAdmin ? (
// //                     <>
// //                       <fieldset className="box-fieldset">
// //                         <label htmlFor="username">User ID / Username</label>
// //                         <div className="ip-field">
// //                           <input
// //                             type="text"
// //                             className="form-control"
// //                             id="username"
// //                             name="username"
// //                             placeholder="Enter admin username"
// //                             value={formData.username}
// //                             onChange={handleChange}
// //                             required
// //                           />
// //                         </div>
// //                       </fieldset>

// //                       <fieldset className="box-fieldset">
// //                         <label htmlFor="password">Password</label>
// //                         <div className="ip-field">
// //                           <input
// //                             type="password"
// //                             className="form-control"
// //                             id="password"
// //                             name="password"
// //                             placeholder="Enter password"
// //                             value={formData.password}
// //                             onChange={handleChange}
// //                             required
// //                           />
// //                         </div>
// //                       </fieldset>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <fieldset className="box-fieldset">
// //                         <label htmlFor="phone">Mobile Number</label>
// //                         <div className="ip-field">
// //                           <input
// //                             type="text"
// //                             className="form-control"
// //                             id="phone"
// //                             name="phone"
// //                             placeholder="+919876543210"
// //                             value={formData.phone}
// //                             onChange={handleChange}
// //                             disabled={step === "verify" || loading}
// //                             required
// //                           />
// //                         </div>
// //                       </fieldset>

// //                       {step === "verify" && (
// //                         <fieldset className="box-fieldset">
// //                           <label htmlFor="otp">Enter OTP</label>
// //                           <div className="ip-field">
// //                             <input
// //                               type="text"
// //                               className="form-control"
// //                               id="otp"
// //                               name="otp"
// //                               placeholder="Enter 6 digit OTP"
// //                               value={formData.otp}
// //                               onChange={handleChange}
// //                               disabled={loading}
// //                               required
// //                             />
// //                           </div>
// //                         </fieldset>
// //                       )}
// //                     </>
// //                   )}

// //                   {message ? <div className="login-message">{message}</div> : null}
// //                 </div>

// //                 <div className="box box-btn">
// //                   <button
// //                     type="submit"
// //                     className="tf-btn bg-color-primary w-100"
// //                     disabled={loading}
// //                   >
// //                     {loading
// //                       ? "Please wait..."
// //                       : isAdmin
// //                       ? "Login"
// //                       : step === "login"
// //                       ? "Send OTP"
// //                       : "Verify OTP"}
// //                   </button>

// //                   {!isAdmin && step === "verify" && (
// //                     <button
// //                       type="button"
// //                       className="tf-btn style-border w-100 mt-2"
// //                       disabled={loading}
// //                       onClick={() => {
// //                         setStep("login");
// //                         setFormData((prev) => ({
// //                           ...prev,
// //                           otp: "",
// //                         }));
// //                         setMessage("");
// //                       }}
// //                     >
// //                       Change Number
// //                     </button>
// //                   )}
// //                 </div>

// //                 <p className="box text-center caption-2">
// //                   {isAdmin
// //                     ? "Admin can login using username and password"
// //                     : "One mobile number can only be used for one role"}
// //                 </p>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_BASE_URL ||
//   "https://backendgrowl.growlcityrealty.in";

// const roleOptions = [
//   { value: "customer", label: "Customer" },
//   // { value: "source_manager", label: "Source Manager" },
//   // { value: "admin", label: "Admin" },
// ];

// export default function Login() {
//   const [step, setStep] = useState("login");
//   const [roleOpen, setRoleOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     phone: "",
//     role: "customer",
//     otp: "",
//     username: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const isAdmin = formData.role === "admin";
//   const selectedRole = roleOptions.find((item) => item.value === formData.role);

//   const getPendingPropertyRedirect = () => {
//     if (typeof window === "undefined") return "";

//     const pending = localStorage.getItem("pendingPropertyRedirect") || "";

//     if (!pending) return "";

//     if (!pending.startsWith("/")) {
//       localStorage.removeItem("pendingPropertyRedirect");
//       return "";
//     }

//     localStorage.removeItem("pendingPropertyRedirect");
//     return pending;
//   };

//   const redirectByRole = (user) => {
//     const pendingRedirect = getPendingPropertyRedirect();

//     if (pendingRedirect) {
//       window.location.href = pendingRedirect;
//       return;
//     }

//     if (user?.role === "customer") {
//       window.location.href = "/user-dashboard";
//     } else if (user?.role === "source_manager") {
//       window.location.href = "/source-dashboard";
//     } else if (user?.role === "admin" || user?.is_staff || user?.is_superuser) {
//       window.location.href = "/dashboard";
//     } else {
//       window.location.href = "/";
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setMessage("");
//   };

//   const handleRoleSelect = (role) => {
//     setFormData((prev) => ({
//       ...prev,
//       role,
//       otp: "",
//       username: "",
//       password: "",
//     }));

//     setStep("login");
//     setMessage("");
//     setRoleOpen(false);
//   };

//   const handleSendOTP = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await fetch(`${API_BASE_URL}/api/users/send-otp/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           phone: formData.phone,
//           role: formData.role,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok && data.success) {
//         setMessage(data.message || "OTP sent successfully.");
//         setStep("verify");
//       } else {
//         setMessage(data.message || "Failed to send OTP.");
//       }
//     } catch {
//       setMessage("Something went wrong while sending OTP.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await fetch(`${API_BASE_URL}/api/users/verify-otp/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           phone: formData.phone,
//           role: formData.role,
//           otp: formData.otp,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok && data.success) {
//         if (data.token) localStorage.setItem("authToken", data.token);
//         if (data.user) localStorage.setItem("userData", JSON.stringify(data.user));

//         setMessage(data.message || "Login successful.");
//         redirectByRole(data.user);
//       } else {
//         setMessage(data.message || "Invalid OTP.");
//       }
//     } catch {
//       setMessage("Something went wrong while verifying OTP.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAdminLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await fetch(`${API_BASE_URL}/api/users/admin-login/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: formData.username,
//           password: formData.password,
//           role: "admin",
//         }),
//       });

//       const data = await res.json();

//       if (res.ok && data.success) {
//         if (data.token) localStorage.setItem("authToken", data.token);
//         if (data.user) localStorage.setItem("userData", JSON.stringify(data.user));

//         setMessage(data.message || "Admin login successful.");
//         redirectByRole(data.user);
//       } else {
//         setMessage(data.message || "Invalid admin credentials.");
//       }
//     } catch {
//       setMessage("Something went wrong while logging in as admin.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     if (isAdmin) {
//       handleAdminLogin(e);
//     } else if (step === "login") {
//       handleSendOTP(e);
//     } else {
//       handleVerifyOTP(e);
//     }
//   };

//   return (
//     <>
//       <style jsx global>{`
//         #modalLogin {
//           z-index: 99999;
//         }

//         #modalLogin .modal-dialog {
//           width: 100%;
//           max-width: 620px;
//           margin: 128px auto 20px !important;
//           padding: 0 14px;
//         }

//         #modalLogin .modal-dialog-centered {
//           min-height: auto !important;
//           display: flex !important;
//           align-items: flex-start !important;
//         }

//         #modalLogin .modal-content {
//           border: 0;
//           border-radius: 22px;
//           overflow: visible;
//           background: #ffffff;
//           box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
//           max-height: calc(100vh - 150px);
//           overflow-y: auto;
//           scrollbar-width: thin;
//         }

//         #modalLogin .modal-content::-webkit-scrollbar {
//           width: 5px;
//         }

//         #modalLogin .modal-content::-webkit-scrollbar-thumb {
//           background: #d1d5db;
//           border-radius: 20px;
//         }

//         #modalLogin .flat-account {
//           display: grid;
//           grid-template-columns: 0.9fr 1.05fr;
//           min-height: 390px;
//           background: #ffffff;
//           border-radius: 22px;
//           overflow: visible;
//         }

//         #modalLogin .banner-account {
//           position: relative;
//           min-height: 390px;
//           overflow: hidden;
//           background: #111827;
//           border-radius: 22px 0 0 22px;
//         }

//         #modalLogin .banner-account img {
//           width: 100%;
//           height: 100%;
//           min-height: 390px;
//           object-fit: cover;
//           display: block;
//         }

//         #modalLogin .form-account {
//           padding: 22px 26px 22px;
//           background: #ffffff;
//           color: #111827;
//           width: 100%;
//           max-width: 100%;
//           box-sizing: border-box;
//           border-radius: 0 22px 22px 0;
//           position: relative;
//           z-index: 10;
//         }

//         #modalLogin .title-box {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 14px;
//           margin-bottom: 16px;
//         }

//         #modalLogin .title-box h4 {
//           margin: 0;
//           color: #2f3137;
//           font-size: 21px;
//           font-weight: 800;
//           line-height: 1.2;
//         }

//         #modalLogin .close-modal {
//           width: 32px;
//           height: 32px;
//           border-radius: 50%;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           color: #6b7280;
//           font-size: 18px;
//           flex-shrink: 0;
//         }

//         #modalLogin .close-modal:hover {
//           background: #f3f4f6;
//           color: #111827;
//         }

//         #modalLogin .box,
//         #modalLogin .box-fieldset,
//         #modalLogin .ip-field {
//           width: 100%;
//           max-width: 100%;
//           box-sizing: border-box;
//         }

//         #modalLogin .box-fieldset {
//           margin: 0 0 12px;
//           padding: 0;
//           border: 0;
//         }

//         #modalLogin label {
//           display: block;
//           margin-bottom: 7px;
//           font-size: 13px;
//           font-weight: 700;
//           color: #374151;
//         }

//         #modalLogin input,
//         #modalLogin .form-control {
//           width: 100% !important;
//           max-width: 100% !important;
//           height: 42px !important;
//           border: 1px solid #d1d5db !important;
//           border-radius: 11px !important;
//           background: #ffffff !important;
//           color: #111827 !important;
//           padding: 9px 13px !important;
//           font-size: 13px !important;
//           line-height: 1.2 !important;
//           outline: none !important;
//           box-shadow: none !important;
//           box-sizing: border-box !important;
//         }

//         #modalLogin input:focus,
//         #modalLogin .form-control:focus {
//           border-color: #f28c52 !important;
//           box-shadow: 0 0 0 3px rgba(242, 140, 82, 0.16) !important;
//         }

//         #modalLogin .custom-role-select {
//           position: relative;
//           width: 100%;
//           z-index: 50;
//         }

//         #modalLogin .custom-role-button {
//           width: 100%;
//           height: 42px;
//           border: 1px solid #d1d5db;
//           border-radius: 11px;
//           background: #ffffff;
//           color: #111827;
//           padding: 0 13px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           font-size: 13px;
//           font-weight: 700;
//           cursor: pointer;
//           box-sizing: border-box;
//         }

//         #modalLogin .custom-role-button.active {
//           border-color: #f28c52;
//           box-shadow: 0 0 0 3px rgba(242, 140, 82, 0.16);
//         }

//         #modalLogin .custom-role-arrow {
//           font-size: 13px;
//           line-height: 1;
//           color: #111827;
//           transition: transform 0.2s ease;
//         }

//         #modalLogin .custom-role-button.active .custom-role-arrow {
//           transform: rotate(180deg);
//         }

//         #modalLogin .custom-role-menu {
//           position: relative;
//           top: 5px;
//           left: 0;
//           right: 0;
//           width: 100%;
//           margin-bottom: 8px;
//           background: #ffffff;
//           border: 1px solid #d1d5db;
//           border-radius: 13px;
//           overflow: hidden;
//           box-shadow: 0 14px 30px rgba(17, 24, 39, 0.16);
//           z-index: 20;
//         }

//         #modalLogin .custom-role-option {
//           width: 100%;
//           min-height: 36px;
//           border: 0;
//           background: #ffffff;
//           color: #111827;
//           padding: 7px 13px;
//           text-align: left;
//           font-size: 13px;
//           font-weight: 700;
//           display: block;
//           cursor: pointer;
//         }

//         #modalLogin .custom-role-option:hover,
//         #modalLogin .custom-role-option.selected {
//           background: #f28c52;
//           color: #ffffff;
//         }

//         #modalLogin .box-btn {
//           margin-top: 14px;
//         }

//         #modalLogin .tf-btn {
//           width: 100% !important;
//           height: 42px !important;
//           min-height: 42px !important;
//           border-radius: 13px !important;
//           display: flex !important;
//           align-items: center !important;
//           justify-content: center !important;
//           font-size: 14px !important;
//           font-weight: 800 !important;
//           border: 0 !important;
//           background: #2f3137 !important;
//           color: #ffffff !important;
//           cursor: pointer;
//           padding: 0 16px !important;
//         }

//         #modalLogin .tf-btn:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//         }

//         #modalLogin .tf-btn.style-border {
//           background: #ffffff !important;
//           color: #2f3137 !important;
//           border: 1px solid #d1d5db !important;
//         }

//         #modalLogin .caption-2 {
//           margin-top: 16px;
//           margin-bottom: 0;
//           color: #6b7280;
//           font-size: 12px;
//           line-height: 1.45;
//           text-align: center;
//         }

//         #modalLogin .login-message {
//           margin-top: 8px;
//           color: #ff6b35;
//           font-size: 13px;
//           line-height: 1.4;
//         }

//         @media (max-width: 767px) {
//           #modalLogin .modal-dialog {
//             max-width: 330px;
//             margin: 96px auto 16px !important;
//             padding: 0 10px;
//           }

//           #modalLogin .modal-content {
//             border-radius: 20px;
//             max-height: calc(100vh - 116px);
//           }

//           #modalLogin .flat-account {
//             display: block;
//             min-height: auto;
//             border-radius: 20px;
//           }

//           #modalLogin .banner-account {
//             display: none;
//           }

//           #modalLogin .form-account {
//             padding: 22px 14px 20px;
//             border-radius: 20px;
//           }

//           #modalLogin .title-box {
//             margin-bottom: 16px;
//           }

//           #modalLogin .title-box h4 {
//             font-size: 19px;
//           }

//           #modalLogin .box-fieldset {
//             margin-bottom: 12px;
//           }

//           #modalLogin input,
//           #modalLogin .form-control,
//           #modalLogin .custom-role-button {
//             height: 42px !important;
//             font-size: 13px !important;
//             border-radius: 10px !important;
//           }

//           #modalLogin .custom-role-menu {
//             position: relative;
//             top: 5px;
//             left: 0;
//             right: 0;
//             width: 100%;
//             margin-bottom: 8px;
//             border-radius: 12px;
//           }

//           #modalLogin .custom-role-option {
//             min-height: 36px;
//             font-size: 13px;
//             padding: 7px 12px;
//           }

//           #modalLogin .tf-btn {
//             height: 42px !important;
//             min-height: 42px !important;
//             border-radius: 12px !important;
//           }

//           #modalLogin .caption-2 {
//             margin-top: 14px;
//           }
//         }

//         @media (max-width: 380px) {
//           #modalLogin .modal-dialog {
//             max-width: 100%;
//             padding: 0 8px;
//             margin-top: 90px !important;
//           }

//           #modalLogin .form-account {
//             padding: 20px 14px 18px;
//           }

//           #modalLogin .title-box h4 {
//             font-size: 18px;
//           }
//         }
//       `}</style>

//       <div className="modal modal-account fade" id="modalLogin">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="flat-account">
//               <div className="banner-account">
//                 <Image
//                   alt="banner"
//                   width={330}
//                   height={480}
//                   src="/images/section/g5.jpg"
//                 />
//               </div>

//               <form className="form-account" onSubmit={handleSubmit}>
//                 <div className="title-box">
//                   <h4>
//                     {isAdmin
//                       ? "Admin Login"
//                       : step === "login"
//                       ? "Login with OTP"
//                       : "Verify OTP"}
//                   </h4>

//                   <span
//                     className="close-modal icon-close"
//                     data-bs-dismiss="modal"
//                   />
//                 </div>

//                 <div className="box">
//                   <fieldset className="box-fieldset">
//                     <label>Login As</label>

//                     <div className="custom-role-select">
//                       <button
//                         type="button"
//                         className={`custom-role-button ${
//                           roleOpen ? "active" : ""
//                         }`}
//                         onClick={() => !loading && setRoleOpen((prev) => !prev)}
//                         disabled={loading}
//                       >
//                         <span>{selectedRole?.label || "Customer"}</span>
//                         <span className="custom-role-arrow">⌄</span>
//                       </button>

//                       {roleOpen && (
//                         <div className="custom-role-menu">
//                           {roleOptions.map((option) => (
//                             <button
//                               key={option.value}
//                               type="button"
//                               className={`custom-role-option ${
//                                 formData.role === option.value ? "selected" : ""
//                               }`}
//                               onClick={() => handleRoleSelect(option.value)}
//                             >
//                               {option.label}
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </fieldset>

//                   {isAdmin ? (
//                     <>
//                       <fieldset className="box-fieldset">
//                         <label htmlFor="username">User ID / Username</label>
//                         <div className="ip-field">
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="username"
//                             name="username"
//                             placeholder="Enter admin username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </fieldset>

//                       <fieldset className="box-fieldset">
//                         <label htmlFor="password">Password</label>
//                         <div className="ip-field">
//                           <input
//                             type="password"
//                             className="form-control"
//                             id="password"
//                             name="password"
//                             placeholder="Enter password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </fieldset>
//                     </>
//                   ) : (
//                     <>
//                       <fieldset className="box-fieldset">
//                         <label htmlFor="phone">Mobile Number</label>
//                         <div className="ip-field">
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="phone"
//                             name="phone"
//                             placeholder="+919876543210"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             disabled={step === "verify" || loading}
//                             required
//                           />
//                         </div>
//                       </fieldset>

//                       {step === "verify" && (
//                         <fieldset className="box-fieldset">
//                           <label htmlFor="otp">Enter OTP</label>
//                           <div className="ip-field">
//                             <input
//                               type="text"
//                               className="form-control"
//                               id="otp"
//                               name="otp"
//                               placeholder="Enter 6 digit OTP"
//                               value={formData.otp}
//                               onChange={handleChange}
//                               disabled={loading}
//                               required
//                             />
//                           </div>
//                         </fieldset>
//                       )}
//                     </>
//                   )}

//                   {message ? <div className="login-message">{message}</div> : null}
//                 </div>

//                 <div className="box box-btn">
//                   <button
//                     type="submit"
//                     className="tf-btn bg-color-primary w-100"
//                     disabled={loading}
//                   >
//                     {loading
//                       ? "Please wait..."
//                       : isAdmin
//                       ? "Login"
//                       : step === "login"
//                       ? "Send OTP"
//                       : "Verify OTP"}
//                   </button>

//                   {!isAdmin && step === "verify" && (
//                     <button
//                       type="button"
//                       className="tf-btn style-border w-100 mt-2"
//                       disabled={loading}
//                       onClick={() => {
//                         setStep("login");
//                         setFormData((prev) => ({
//                           ...prev,
//                           otp: "",
//                         }));
//                         setMessage("");
//                       }}
//                     >
//                       Change Number
//                     </button>
//                   )}
//                 </div>

//                 <p className="box text-center caption-2">
//                   {isAdmin
//                     ? "Admin can login using username and password"
//                     : "One mobile number can only be used for one role"}
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }






"use client";

import React, { useState } from "react";
import Image from "next/image";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://backendgrowl.growlcityrealty.in";

const roleOptions = [
  { value: "customer", label: "Customer" },
  // { value: "source_manager", label: "Source Manager" },
  // { value: "admin", label: "Admin" },
];

export default function Login() {
  const [step, setStep] = useState("login");
  const [roleOpen, setRoleOpen] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    role: "customer",
    otp: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const isAdmin = formData.role === "admin";
  const selectedRole = roleOptions.find((item) => item.value === formData.role);

  const saveLoginSession = (data) => {
    if (typeof window === "undefined") return;

    if (data?.token) localStorage.setItem("authToken", data.token);
    if (data?.user) localStorage.setItem("userData", JSON.stringify(data.user));

    window.dispatchEvent(new Event("authStatusChanged"));
  };

  const getPendingPropertyRedirect = () => {
    if (typeof window === "undefined") return "";

    const pending = localStorage.getItem("pendingPropertyRedirect") || "";

    if (!pending) return "";

    if (!pending.startsWith("/")) {
      localStorage.removeItem("pendingPropertyRedirect");
      return "";
    }

    localStorage.removeItem("pendingPropertyRedirect");
    return pending;
  };

  const redirectByRole = (user) => {
    const pendingRedirect = getPendingPropertyRedirect();

    if (pendingRedirect) {
      window.location.href = pendingRedirect;
      return;
    }

    if (user?.role === "customer") {
      window.location.href = "/user-dashboard";
    } else if (user?.role === "source_manager") {
      window.location.href = "/source-dashboard";
    } else if (user?.role === "admin" || user?.is_staff || user?.is_superuser) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleRoleSelect = (role) => {
    setFormData((prev) => ({
      ...prev,
      role,
      otp: "",
      username: "",
      password: "",
    }));

    setStep("login");
    setMessage("");
    setRoleOpen(false);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/users/send-otp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formData.phone,
          role: formData.role,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage(data.message || "OTP sent successfully.");
        setStep("verify");
      } else {
        setMessage(data.message || "Failed to send OTP.");
      }
    } catch {
      setMessage("Something went wrong while sending OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/users/verify-otp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formData.phone,
          role: formData.role,
          otp: formData.otp,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        saveLoginSession(data);

        setMessage(data.message || "Login successful.");
        redirectByRole(data.user);
      } else {
        setMessage(data.message || "Invalid OTP.");
      }
    } catch {
      setMessage("Something went wrong while verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/users/admin-login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          role: "admin",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        saveLoginSession(data);

        setMessage(data.message || "Admin login successful.");
        redirectByRole(data.user);
      } else {
        setMessage(data.message || "Invalid admin credentials.");
      }
    } catch {
      setMessage("Something went wrong while logging in as admin.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    if (isAdmin) {
      handleAdminLogin(e);
    } else if (step === "login") {
      handleSendOTP(e);
    } else {
      handleVerifyOTP(e);
    }
  };

  return (
    <>
      <style jsx global>{`
        #modalLogin {
          z-index: 99999;
        }

        #modalLogin .modal-dialog {
          width: 100%;
          max-width: 620px;
          margin: 128px auto 20px !important;
          padding: 0 14px;
        }

        #modalLogin .modal-dialog-centered {
          min-height: auto !important;
          display: flex !important;
          align-items: flex-start !important;
        }

        #modalLogin .modal-content {
          border: 0;
          border-radius: 22px;
          overflow: visible;
          background: #ffffff;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
          max-height: calc(100vh - 150px);
          overflow-y: auto;
          scrollbar-width: thin;
        }

        #modalLogin .modal-content::-webkit-scrollbar {
          width: 5px;
        }

        #modalLogin .modal-content::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 20px;
        }

        #modalLogin .flat-account {
          display: grid;
          grid-template-columns: 0.9fr 1.05fr;
          min-height: 390px;
          background: #ffffff;
          border-radius: 22px;
          overflow: visible;
        }

        #modalLogin .banner-account {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          background: #111827;
          border-radius: 22px 0 0 22px;
        }

        #modalLogin .banner-account img {
          width: 100%;
          height: 100%;
          min-height: 390px;
          object-fit: cover;
          display: block;
        }

        #modalLogin .form-account {
          padding: 22px 26px 22px;
          background: #ffffff;
          color: #111827;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          border-radius: 0 22px 22px 0;
          position: relative;
          z-index: 10;
        }

        #modalLogin .title-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 16px;
        }

        #modalLogin .title-box h4 {
          margin: 0;
          color: #2f3137;
          font-size: 21px;
          font-weight: 800;
          line-height: 1.2;
        }

        #modalLogin .close-modal {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #6b7280;
          font-size: 18px;
          flex-shrink: 0;
        }

        #modalLogin .close-modal:hover {
          background: #f3f4f6;
          color: #111827;
        }

        #modalLogin .box,
        #modalLogin .box-fieldset,
        #modalLogin .ip-field {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        #modalLogin .box-fieldset {
          margin: 0 0 12px;
          padding: 0;
          border: 0;
        }

        #modalLogin label {
          display: block;
          margin-bottom: 7px;
          font-size: 13px;
          font-weight: 700;
          color: #374151;
        }

        #modalLogin input,
        #modalLogin .form-control {
          width: 100% !important;
          max-width: 100% !important;
          height: 42px !important;
          border: 1px solid #d1d5db !important;
          border-radius: 11px !important;
          background: #ffffff !important;
          color: #111827 !important;
          padding: 9px 13px !important;
          font-size: 13px !important;
          line-height: 1.2 !important;
          outline: none !important;
          box-shadow: none !important;
          box-sizing: border-box !important;
        }

        #modalLogin input:focus,
        #modalLogin .form-control:focus {
          border-color: #f28c52 !important;
          box-shadow: 0 0 0 3px rgba(242, 140, 82, 0.16) !important;
        }

        #modalLogin .custom-role-select {
          position: relative;
          width: 100%;
          z-index: 50;
        }

        #modalLogin .custom-role-button {
          width: 100%;
          height: 42px;
          border: 1px solid #d1d5db;
          border-radius: 11px;
          background: #ffffff;
          color: #111827;
          padding: 0 13px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          box-sizing: border-box;
        }

        #modalLogin .custom-role-button.active {
          border-color: #f28c52;
          box-shadow: 0 0 0 3px rgba(242, 140, 82, 0.16);
        }

        #modalLogin .custom-role-arrow {
          font-size: 13px;
          line-height: 1;
          color: #111827;
          transition: transform 0.2s ease;
        }

        #modalLogin .custom-role-button.active .custom-role-arrow {
          transform: rotate(180deg);
        }

        #modalLogin .custom-role-menu {
          position: relative;
          top: 5px;
          left: 0;
          right: 0;
          width: 100%;
          margin-bottom: 8px;
          background: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 13px;
          overflow: hidden;
          box-shadow: 0 14px 30px rgba(17, 24, 39, 0.16);
          z-index: 20;
        }

        #modalLogin .custom-role-option {
          width: 100%;
          min-height: 36px;
          border: 0;
          background: #ffffff;
          color: #111827;
          padding: 7px 13px;
          text-align: left;
          font-size: 13px;
          font-weight: 700;
          display: block;
          cursor: pointer;
        }

        #modalLogin .custom-role-option:hover,
        #modalLogin .custom-role-option.selected {
          background: #f28c52;
          color: #ffffff;
        }

        #modalLogin .box-btn {
          margin-top: 14px;
        }

        #modalLogin .tf-btn {
          width: 100% !important;
          height: 42px !important;
          min-height: 42px !important;
          border-radius: 13px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 14px !important;
          font-weight: 800 !important;
          border: 0 !important;
          background: #2f3137 !important;
          color: #ffffff !important;
          cursor: pointer;
          padding: 0 16px !important;
        }

        #modalLogin .tf-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        #modalLogin .tf-btn.style-border {
          background: #ffffff !important;
          color: #2f3137 !important;
          border: 1px solid #d1d5db !important;
        }

        #modalLogin .caption-2 {
          margin-top: 16px;
          margin-bottom: 0;
          color: #6b7280;
          font-size: 12px;
          line-height: 1.45;
          text-align: center;
        }

        #modalLogin .login-message {
          margin-top: 8px;
          color: #ff6b35;
          font-size: 13px;
          line-height: 1.4;
        }

        @media (max-width: 767px) {
          #modalLogin .modal-dialog {
            max-width: 330px;
            margin: 96px auto 16px !important;
            padding: 0 10px;
          }

          #modalLogin .modal-content {
            border-radius: 20px;
            max-height: calc(100vh - 116px);
          }

          #modalLogin .flat-account {
            display: block;
            min-height: auto;
            border-radius: 20px;
          }

          #modalLogin .banner-account {
            display: none;
          }

          #modalLogin .form-account {
            padding: 22px 14px 20px;
            border-radius: 20px;
          }

          #modalLogin .title-box {
            margin-bottom: 16px;
          }

          #modalLogin .title-box h4 {
            font-size: 19px;
          }

          #modalLogin .box-fieldset {
            margin-bottom: 12px;
          }

          #modalLogin input,
          #modalLogin .form-control,
          #modalLogin .custom-role-button {
            height: 42px !important;
            font-size: 13px !important;
            border-radius: 10px !important;
          }

          #modalLogin .custom-role-menu {
            position: relative;
            top: 5px;
            left: 0;
            right: 0;
            width: 100%;
            margin-bottom: 8px;
            border-radius: 12px;
          }

          #modalLogin .custom-role-option {
            min-height: 36px;
            font-size: 13px;
            padding: 7px 12px;
          }

          #modalLogin .tf-btn {
            height: 42px !important;
            min-height: 42px !important;
            border-radius: 12px !important;
          }

          #modalLogin .caption-2 {
            margin-top: 14px;
          }
        }

        @media (max-width: 380px) {
          #modalLogin .modal-dialog {
            max-width: 100%;
            padding: 0 8px;
            margin-top: 90px !important;
          }

          #modalLogin .form-account {
            padding: 20px 14px 18px;
          }

          #modalLogin .title-box h4 {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="modal modal-account fade" id="modalLogin">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="flat-account">
              <div className="banner-account">
                <Image
                  alt="banner"
                  width={330}
                  height={480}
                  src="/images/section/g5.jpg"
                />
              </div>

              <form className="form-account" onSubmit={handleSubmit}>
                <div className="title-box">
                  <h4>
                    {isAdmin
                      ? "Admin Login"
                      : step === "login"
                      ? "Login with OTP"
                      : "Verify OTP"}
                  </h4>

                  <span
                    className="close-modal icon-close"
                    data-bs-dismiss="modal"
                  />
                </div>

                <div className="box">
                  <fieldset className="box-fieldset">
                    <label>Login As</label>

                    <div className="custom-role-select">
                      <button
                        type="button"
                        className={`custom-role-button ${
                          roleOpen ? "active" : ""
                        }`}
                        onClick={() => !loading && setRoleOpen((prev) => !prev)}
                        disabled={loading}
                      >
                        <span>{selectedRole?.label || "Customer"}</span>
                        <span className="custom-role-arrow">⌄</span>
                      </button>

                      {roleOpen && (
                        <div className="custom-role-menu">
                          {roleOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              className={`custom-role-option ${
                                formData.role === option.value ? "selected" : ""
                              }`}
                              onClick={() => handleRoleSelect(option.value)}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </fieldset>

                  {isAdmin ? (
                    <>
                      <fieldset className="box-fieldset">
                        <label htmlFor="username">User ID / Username</label>
                        <div className="ip-field">
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Enter admin username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </fieldset>

                      <fieldset className="box-fieldset">
                        <label htmlFor="password">Password</label>
                        <div className="ip-field">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </fieldset>
                    </>
                  ) : (
                    <>
                      <fieldset className="box-fieldset">
                        <label htmlFor="phone">Mobile Number</label>
                        <div className="ip-field">
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="+919876543210"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={step === "verify" || loading}
                            required
                          />
                        </div>
                      </fieldset>

                      {step === "verify" && (
                        <fieldset className="box-fieldset">
                          <label htmlFor="otp">Enter OTP</label>
                          <div className="ip-field">
                            <input
                              type="text"
                              className="form-control"
                              id="otp"
                              name="otp"
                              placeholder="Enter 6 digit OTP"
                              value={formData.otp}
                              onChange={handleChange}
                              disabled={loading}
                              required
                            />
                          </div>
                        </fieldset>
                      )}
                    </>
                  )}

                  {message ? <div className="login-message">{message}</div> : null}
                </div>

                <div className="box box-btn">
                  <button
                    type="submit"
                    className="tf-btn bg-color-primary w-100"
                    disabled={loading}
                  >
                    {loading
                      ? "Please wait..."
                      : isAdmin
                      ? "Login"
                      : step === "login"
                      ? "Send OTP"
                      : "Verify OTP"}
                  </button>

                  {!isAdmin && step === "verify" && (
                    <button
                      type="button"
                      className="tf-btn style-border w-100 mt-2"
                      disabled={loading}
                      onClick={() => {
                        setStep("login");
                        setFormData((prev) => ({
                          ...prev,
                          otp: "",
                        }));
                        setMessage("");
                      }}
                    >
                      Change Number
                    </button>
                  )}
                </div>

                <p className="box text-center caption-2">
                  {isAdmin
                    ? "Admin can login using username and password"
                    : "One mobile number can only be used for one role"}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}