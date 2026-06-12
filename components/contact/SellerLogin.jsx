
"use client";

import React, { useState } from "react";
import Image from "next/image";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://backendgrowl.growlcityrealty.in";

const roleOptions = [
  { value: "source_manager", label: "Source Manager" },
];

const countryCodeOptions = [
  "+91",
  "+971",
  "+1",
  "+44",
  "+61",
  "+65",
  "+974",
  "+966",
  "+965",
  "+968",
  "+973",
  "+92",
  "+880",
  "+977",
  "+94",
];

export default function SellerLogin() {
  const [step, setStep] = useState("login");
  const [roleOpen, setRoleOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    countryCode: "+91",
    role: "source_manager",
    otp: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const isAdmin = formData.role === "admin";
  const selectedRole = roleOptions.find((item) => item.value === formData.role);

  const getFullPhoneNumber = () => {
    const cleanPhone = String(formData.phone || "").replace(/\D/g, "");
    return `${formData.countryCode}${cleanPhone}`;
  };

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

  const handlePhoneChange = (e) => {
    const cleanValue = e.target.value.replace(/[^\d]/g, "");

    setFormData((prev) => ({
      ...prev,
      phone: cleanValue,
    }));

    setMessage("");
  };

  const handleCountrySelect = (countryCode) => {
    setFormData((prev) => ({
      ...prev,
      countryCode,
    }));

    setCountryOpen(false);
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
          phone: getFullPhoneNumber(),
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
          phone: getFullPhoneNumber(),
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
        #sellerLoginPage {
          width: 100%;
          min-height: calc(100vh - 90px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 70px 0;
          background: linear-gradient(180deg, #f7fbfe 0%, #ffffff 100%);
          z-index: 1;
        }

        #sellerLoginPage.seller-login-page {
          box-sizing: border-box;
        }

        #sellerLoginPage .modal-dialog {
          width: 100%;
          max-width: 620px;
          margin: 0 auto 20px !important;
          padding: 0 14px;
        }

        #sellerLoginPage .modal-dialog-centered {
          min-height: auto !important;
          display: flex !important;
          align-items: flex-start !important;
        }

        #sellerLoginPage .modal-content {
          border: 0;
          border-radius: 22px;
          overflow: visible;
          background: #ffffff;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
          max-height: calc(100vh - 150px);
          overflow-y: auto;
          scrollbar-width: thin;
        }

        #sellerLoginPage .modal-content::-webkit-scrollbar {
          width: 5px;
        }

        #sellerLoginPage .modal-content::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 20px;
        }

        #sellerLoginPage .flat-account {
          display: grid;
          grid-template-columns: 0.9fr 1.05fr;
          min-height: 390px;
          background: #ffffff;
          border-radius: 22px;
          overflow: visible;
        }

        #sellerLoginPage .banner-account {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          background: #111827;
          border-radius: 22px 0 0 22px;
        }

        #sellerLoginPage .banner-account img {
          width: 100%;
          height: 100%;
          min-height: 390px;
          object-fit: cover;
          display: block;
        }

        #sellerLoginPage .form-account {
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

        #sellerLoginPage .title-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 16px;
        }

        #sellerLoginPage .title-box h4 {
          margin: 0;
          color: #2f3137;
          font-size: 21px;
          font-weight: 800;
          line-height: 1.2;
        }

        #sellerLoginPage .close-modal {
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

        #sellerLoginPage .close-modal:hover {
          background: #f3f4f6;
          color: #111827;
        }

        #sellerLoginPage .box,
        #sellerLoginPage .box-fieldset,
        #sellerLoginPage .ip-field {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        #sellerLoginPage .box-fieldset {
          margin: 0 0 12px;
          padding: 0;
          border: 0;
        }

        #sellerLoginPage label {
          display: block;
          margin-bottom: 7px;
          font-size: 13px;
          font-weight: 700;
          color: #374151;
        }

        #sellerLoginPage input,
        #sellerLoginPage .form-control {
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

        #sellerLoginPage input:focus,
        #sellerLoginPage .form-control:focus {
          border-color: #f28c52 !important;
          box-shadow: 0 0 0 3px rgba(242, 140, 82, 0.16) !important;
        }

        #sellerLoginPage .custom-role-select,
        #sellerLoginPage .custom-country-select {
          position: relative;
          width: 100%;
          z-index: 50;
        }

        #sellerLoginPage .custom-role-button,
        #sellerLoginPage .custom-country-button {
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

        #sellerLoginPage .custom-role-button.active,
        #sellerLoginPage .custom-country-button.active {
          border-color: #f28c52;
          box-shadow: 0 0 0 3px rgba(242, 140, 82, 0.16);
        }

        #sellerLoginPage .custom-role-arrow,
        #sellerLoginPage .custom-country-arrow {
          font-size: 13px;
          line-height: 1;
          color: #111827;
          transition: transform 0.2s ease;
          margin-left: 6px;
          flex-shrink: 0;
        }

        #sellerLoginPage .custom-role-button.active .custom-role-arrow,
        #sellerLoginPage .custom-country-button.active .custom-country-arrow {
          transform: rotate(180deg);
        }

        #sellerLoginPage .custom-role-menu,
        #sellerLoginPage .custom-country-menu {
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

        #sellerLoginPage .custom-country-menu {
          max-height: 190px;
          overflow-y: auto;
          scrollbar-width: thin;
        }

        #sellerLoginPage .custom-country-menu::-webkit-scrollbar {
          width: 5px;
        }

        #sellerLoginPage .custom-country-menu::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 20px;
        }

        #sellerLoginPage .custom-role-option,
        #sellerLoginPage .custom-country-option {
          width: 100%;
          min-height: 36px;
          border: 0;
          background: #ffffff;
          color: #111827;
          padding: 7px 13px;
          text-align: left;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        #sellerLoginPage .custom-role-option {
          justify-content: flex-start;
        }

        #sellerLoginPage .custom-role-option:hover,
        #sellerLoginPage .custom-role-option.selected,
        #sellerLoginPage .custom-country-option:hover,
        #sellerLoginPage .custom-country-option.selected {
          background: #f28c52;
          color: #ffffff;
        }

        #sellerLoginPage .phone-row {
          display: grid;
          grid-template-columns: 96px minmax(0, 1fr);
          gap: 8px;
          width: 100%;
          max-width: 100%;
          align-items: start;
        }

        #sellerLoginPage .phone-row .custom-country-button {
          padding: 0 10px;
          white-space: nowrap;
          justify-content: center;
          gap: 6px;
        }

        #sellerLoginPage .phone-input-wrap {
          width: 100%;
          min-width: 0;
        }

        #sellerLoginPage .box-btn {
          margin-top: 14px;
        }

        #sellerLoginPage .tf-btn {
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

        #sellerLoginPage .tf-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        #sellerLoginPage .tf-btn.style-border {
          background: #ffffff !important;
          color: #2f3137 !important;
          border: 1px solid #d1d5db !important;
        }

        #sellerLoginPage .caption-2 {
          margin-top: 16px;
          margin-bottom: 0;
          color: #6b7280;
          font-size: 12px;
          line-height: 1.45;
          text-align: center;
        }

        #sellerLoginPage .login-message {
          margin-top: 8px;
          color: #ff6b35;
          font-size: 13px;
          line-height: 1.4;
        }

        @media (max-width: 767px) {
          #sellerLoginPage.seller-login-page {
          box-sizing: border-box;
        }

        #sellerLoginPage .modal-dialog {
            max-width: 330px;
            margin: 0 auto 16px !important;
            padding: 0 10px;
          }

          #sellerLoginPage .modal-content {
            border-radius: 20px;
            max-height: calc(100vh - 116px);
          }

          #sellerLoginPage .flat-account {
            display: block;
            min-height: auto;
            border-radius: 20px;
          }

          #sellerLoginPage .banner-account {
            display: none;
          }

          #sellerLoginPage .form-account {
            padding: 22px 14px 20px;
            border-radius: 20px;
          }

          #sellerLoginPage .title-box {
            margin-bottom: 16px;
          }

          #sellerLoginPage .title-box h4 {
            font-size: 19px;
          }

          #sellerLoginPage .box-fieldset {
            margin-bottom: 12px;
          }

          #sellerLoginPage input,
          #sellerLoginPage .form-control,
          #sellerLoginPage .custom-role-button,
          #sellerLoginPage .custom-country-button {
            height: 42px !important;
            font-size: 13px !important;
            border-radius: 10px !important;
          }

          #sellerLoginPage .custom-role-menu,
          #sellerLoginPage .custom-country-menu {
            position: relative;
            top: 5px;
            left: 0;
            right: 0;
            width: 100%;
            margin-bottom: 8px;
            border-radius: 12px;
          }

          #sellerLoginPage .custom-country-menu {
            max-height: 178px;
          }

          #sellerLoginPage .custom-role-option,
          #sellerLoginPage .custom-country-option {
            min-height: 36px;
            font-size: 13px;
            padding: 7px 12px;
          }

          #sellerLoginPage .phone-row {
            grid-template-columns: 92px minmax(0, 1fr);
            gap: 7px;
          }

          #sellerLoginPage .phone-row .custom-country-button {
            padding: 0 8px;
          }

          #sellerLoginPage .tf-btn {
            height: 42px !important;
            min-height: 42px !important;
            border-radius: 12px !important;
          }

          #sellerLoginPage .caption-2 {
            margin-top: 14px;
          }
        }

        @media (max-width: 380px) {
          #sellerLoginPage.seller-login-page {
          box-sizing: border-box;
        }

        #sellerLoginPage .modal-dialog {
            max-width: 100%;
            padding: 0 8px;
            margin-top: 0 !important;
          }

          #sellerLoginPage .form-account {
            padding: 20px 14px 18px;
          }

          #sellerLoginPage .title-box h4 {
            font-size: 18px;
          }

          #sellerLoginPage .phone-row {
            grid-template-columns: 88px minmax(0, 1fr);
            gap: 6px;
          }

          #sellerLoginPage .phone-row .custom-country-button {
            padding: 0 7px;
          }
        }
      `}</style>

      <section className="seller-login-page" id="sellerLoginPage">
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
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.location.href = "/";
                      }
                    }}
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
                        onClick={() => {
                          if (!loading) {
                            setRoleOpen((prev) => !prev);
                            setCountryOpen(false);
                          }
                        }}
                        disabled={loading}
                      >
                        <span>{selectedRole?.label || "Source Manager"}</span>
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

                        <div className="phone-row">
                          <div className="custom-country-select">
                            <button
                              type="button"
                              className={`custom-country-button ${
                                countryOpen ? "active" : ""
                              }`}
                              onClick={() => {
                                if (step !== "verify" && !loading) {
                                  setCountryOpen((prev) => !prev);
                                  setRoleOpen(false);
                                }
                              }}
                              disabled={step === "verify" || loading}
                            >
                              <span>{formData.countryCode}</span>
                              <span className="custom-country-arrow">⌄</span>
                            </button>

                            {countryOpen && (
                              <div className="custom-country-menu">
                                {countryCodeOptions.map((code) => (
                                  <button
                                    key={code}
                                    type="button"
                                    className={`custom-country-option ${
                                      formData.countryCode === code
                                        ? "selected"
                                        : ""
                                    }`}
                                    onClick={() => handleCountrySelect(code)}
                                  >
                                    {code}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="phone-input-wrap">
                            <input
                              type="tel"
                              inputMode="numeric"
                              className="form-control"
                              id="phone"
                              name="phone"
                              placeholder="9876543210"
                              value={formData.phone}
                              onChange={handlePhoneChange}
                              disabled={step === "verify" || loading}
                              required
                            />
                          </div>
                        </div>
                      </fieldset>

                      {step === "verify" && (
                        <fieldset className="box-fieldset">
                          <label htmlFor="otp">Enter OTP</label>
                          <div className="ip-field">
                            <input
                              type="text"
                              inputMode="numeric"
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
                        setCountryOpen(false);
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
      </section>
    </>
  );
}