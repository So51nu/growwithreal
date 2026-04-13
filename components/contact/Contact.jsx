// "use client";
// import React from "react";
// import DropdownSelect from "../common/DropdownSelect";
// import MapComponent from "../common/MapComponent";

// export default function Contact() {
//   return (
//     <section className="section-top-map style-2">
//       <div className="wrap-map">
//         <div
//           id="map"
//           className="row-height"
//           data-map-zoom={16}
//           data-map-scroll="true"
//         >
//           <MapComponent />
//         </div>
//       </div>
//       <div className="box">
//         <div className="tf-container">
//           <div className="row">
//             <div className="col-12">
//               <form
//                 id="contactform"
//                 onSubmit={(e) => e.preventDefault()}
//                 className="form-contact"
//               >
//                 <div className="heading-section">
//                   <h2 className="title">We Would Love to Hear From You</h2>
//                   <p className="text-1">
//                     We'll get to know you to understand your selling goals,
//                     explain the selling process so you know what to expect.
//                   </p>
//                 </div>
//                 <div className="cols">
//                   <fieldset>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Your name"
//                       name="name"
//                       id="name"
//                       required
//                     />
//                   </fieldset>
//                   <fieldset>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Email"
//                       name="email"
//                       id="email-contact"
//                       required
//                     />
//                   </fieldset>
//                 </div>
//                 <div className="cols">
//                   <fieldset className="phone">
//                     <label htmlFor="phone">Phone number:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Your phone number"
//                       name="phone"
//                       id="phone"
//                       required
//                     />
//                   </fieldset>
//                   <div className="select">
//                     <label className="text-1 fw-6 mb-12">
//                       What are you interested in?
//                     </label>

//                     <DropdownSelect
//                       options={["Select", "Location", "Rent", "Sale"]}
//                       addtionalParentClass=""
//                     />
//                   </div>
//                 </div>
//                 <fieldset>
//                   <label htmlFor="message">Your Message:</label>
//                   <textarea
//                     name="message"
//                     cols={30}
//                     rows={10}
//                     placeholder="Message"
//                     id="message"
//                     required
//                     defaultValue={""}
//                   />
//                 </fieldset>
//                 <div className="send-wrap">
//                   <button
//                     className="tf-btn bg-color-primary fw-7 pd-8"
//                     type="submit"
//                   >
//                     Contact our experts
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import DropdownSelect from "../common/DropdownSelect";
import MapComponent from "../common/MapComponent";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Rent",
    message: "",
  });

  const [loading, setLoading] = useState(false);
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

  const handleInterestChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      interest: value,
    }));
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
      const response = await fetch("http://127.0.0.1:8000/api/contact/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest === "Select" ? "" : formData.interest,
          message: formData.message,
        }),
      });

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
          interest: "Rent",
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
      <section className="section-top-map style-2">
        <div className="wrap-map">
          <div
            id="map"
            className="row-height"
            data-map-zoom={16}
            data-map-scroll="true"
          >
            <MapComponent />
          </div>
        </div>

        <div className="box">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <form
                  id="contactform"
                  onSubmit={handleSubmit}
                  className="form-contact"
                >
                  <div className="heading-section">
                    <h2 className="title">We Would Love to Hear From You</h2>
                    <p className="text-1">
                      We'll get to know you to understand your selling goals,
                      explain the selling process so you know what to expect.
                    </p>
                  </div>

                  <div className="cols">
                    <fieldset>
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </fieldset>

                    <fieldset>
                      <label htmlFor="email-contact">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        id="email-contact"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </fieldset>
                  </div>

                  <div className="cols">
                    <fieldset className="phone">
                      <label htmlFor="phone">Phone number:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your phone number"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </fieldset>

                    <div className="select">
                      <label className="text-1 fw-6 mb-12">
                        What are you interested in?
                      </label>

                      <DropdownSelect
                        options={["Select", "location", "rent", "sale"]}
                        addtionalParentClass=""
                        value={formData.interest}
                        onChange={handleInterestChange}
                      />

                      <input
                        type="hidden"
                        name="interest"
                        value={formData.interest}
                        readOnly
                      />
                    </div>
                  </div>

                  <fieldset>
                    <label htmlFor="message">Your Message:</label>
                    <textarea
                      name="message"
                      cols={30}
                      rows={10}
                      placeholder="Message"
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </fieldset>

                  <div className="send-wrap">
                    <button
                      className="tf-btn bg-color-primary fw-7 pd-8"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Contact our experts"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {popup.show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              background: "#fff",
              borderRadius: "14px",
              padding: "28px 24px",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "22px",
                fontWeight: "700",
                color: popup.type === "success" ? "#16a34a" : "#dc2626",
              }}
            >
              {popup.type === "success" ? "Success" : "Error"}
            </h3>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "15px",
                lineHeight: "1.6",
                color: "#333",
              }}
            >
              {popup.message}
            </p>

            <button
              type="button"
              onClick={closePopup}
              style={{
                border: "none",
                outline: "none",
                cursor: "pointer",
                padding: "12px 22px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                background: popup.type === "success" ? "#16a34a" : "#dc2626",
                color: "#fff",
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}