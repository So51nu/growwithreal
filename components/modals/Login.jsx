"use client";

import React, { useState } from "react";
import Image from "next/image";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export default function Login() {
  const [step, setStep] = useState("login");
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (name === "role") {
        return {
          ...updated,
          otp: "",
          username: "",
          password: "",
        };
      }

      return updated;
    });

    setMessage("");

    if (name === "role") {
      setStep("login");
    }
  };

  const redirectByRole = (user) => {
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
    } catch (error) {
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
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }
        if (data.user) {
          localStorage.setItem("userData", JSON.stringify(data.user));
        }

        setMessage(data.message || "Login successful.");
        redirectByRole(data.user);
      } else {
        setMessage(data.message || "Invalid OTP.");
      }
    } catch (error) {
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
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }
        if (data.user) {
          localStorage.setItem("userData", JSON.stringify(data.user));
        }

        setMessage(data.message || "Admin login successful.");
        window.location.href = "/dashboard";
      } else {
        setMessage(data.message || "Invalid admin credentials.");
      }
    } catch (error) {
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
    <div className="modal modal-account fade" id="modalLogin">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="flat-account">
            <div className="banner-account">
              <Image
                alt="banner"
                width={380}
                height={659}
                src="/images/section/banner-login.jpg"
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
                  <label htmlFor="role">Login As</label>
                  <div className="ip-field">
                    <select
                      className="form-control"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      disabled={loading}
                      required
                    >
                      <option value="customer">Customer</option>
                      <option value="source_manager">Source Manager</option>
                      <option value="admin">Admin</option>
                    </select>
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
                          disabled={step === "verify"}
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
                            required
                          />
                        </div>
                      </fieldset>
                    )}
                  </>
                )}

                {message && (
                  <div
                    style={{
                      marginTop: "10px",
                      color: "#ff6b35",
                      fontSize: "14px",
                    }}
                  >
                    {message}
                  </div>
                )}
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
  );
}