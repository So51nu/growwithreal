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
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
  localStorage.setItem("authToken", data.token);
  localStorage.setItem("userData", JSON.stringify(data.user));

  setMessage(data.message || "Login successful.");

  // 🔥 ROLE BASED REDIRECT
  if (data.user?.role === "customer") {
    window.location.href = "/dashboard";
  } else if (data.user?.role === "source_manager") {
    window.location.href = "/source-dashboard";
  } else {
    window.location.href = "/";
  }
} else {
        setMessage(data.message || "Invalid OTP.");
      }
    } catch (error) {
      setMessage("Something went wrong while verifying OTP.");
    } finally {
      setLoading(false);
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

            <form
              className="form-account"
              onSubmit={step === "login" ? handleSendOTP : handleVerifyOTP}
            >
              <div className="title-box">
                <h4>{step === "login" ? "Login with OTP" : "Verify OTP"}</h4>
                <span
                  className="close-modal icon-close"
                  data-bs-dismiss="modal"
                />
              </div>

              <div className="box">
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

                <fieldset className="box-fieldset">
                  <label htmlFor="role">Login As</label>
                  <div className="ip-field">
                    <select
                      className="form-control"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      disabled={step === "verify"}
                      required
                    >
                      <option value="customer">Customer</option>
                      <option value="source_manager">Source Manager</option>
                    </select>
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
                    : step === "login"
                    ? "Send OTP"
                    : "Verify OTP"}
                </button>

                {step === "verify" && (
                  <button
                    type="button"
                    className="tf-btn style-border w-100 mt-2"
                    onClick={() => {
                      setStep("login");
                      setFormData((prev) => ({ ...prev, otp: "" }));
                      setMessage("");
                    }}
                  >
                    Change Number
                  </button>
                )}
              </div>

              <p className="box text-center caption-2">
                One mobile number can only be used for one role
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}