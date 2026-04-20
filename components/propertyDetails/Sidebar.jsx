"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { apiPost } from "../lib/api";

export default function Sidebar({ property }) {
  const [sellerForm, setSellerForm] = useState({
    name: "",
    message: "",
  });

  const [infoForm, setInfoForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loadingSeller, setLoadingSeller] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(false);
const seller = useMemo(() => {
  if (property?.contact_seller) return property.contact_seller;

  if (Array.isArray(property?.fallback_sellers) && property.fallback_sellers.length) {
    const index = property.id % property.fallback_sellers.length;
    return property.fallback_sellers[index];
  }

  return {
    full_name: property?.agent_name || "Seller",
    phone: property?.agent_phone || "N/A",
    email: property?.agent_email || "",
    avatar_url: property?.agent_avatar_url || "/images/avatar/seller.jpg",
  };
}, [property]);

  const agentName = seller?.full_name || "Seller";
  const agentPhone = seller?.phone || seller?.office_number || "N/A";
  const agentEmail = seller?.email || "";
  const agentAvatar = seller?.avatar_url || "/images/avatar/seller.jpg";

  const submitSellerForm = async (e) => {
    e.preventDefault();
    try {
      setLoadingSeller(true);

      await apiPost(`/admindashboard/properties/${property.id}/contact-seller/`, {
        inquiry_type: "contact_seller",
        name: sellerForm.name,
        email: "",
        phone: "",
        message: sellerForm.message,
      });

      alert("Message sent successfully");
      setSellerForm({ name: "", message: "" });
    } catch (error) {
      alert(error.message || "Failed to send message");
    } finally {
      setLoadingSeller(false);
    }
  };

  const submitInfoForm = async (e) => {
    e.preventDefault();
    try {
      setLoadingInfo(true);

      await apiPost(`/admindashboard/properties/${property.id}/contact-seller/`, {
        inquiry_type: "more_about_property",
        name: infoForm.name,
        email: infoForm.email,
        phone: infoForm.phone,
        message: infoForm.message,
      });

      alert("Inquiry sent successfully");
      setInfoForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert(error.message || "Failed to send inquiry");
    } finally {
      setLoadingInfo(false);
    }
  };

  return (
    <div className="tf-sidebar sticky-sidebar">
      <form className="form-contact-seller mb-30" onSubmit={submitSellerForm}>
        <h4 className="heading-title mb-30">Contact Sellers</h4>

        <div className="seller-info">
          <div className="avartar">
            <Image
              alt={agentName}
              src={agentAvatar}
              width={200}
              height={200}
            />
          </div>

          <div className="content">
            <h6 className="name">{agentName}</h6>
            <ul className="contact">
              <li>
                <i className="icon-phone-1" />
                <span>{agentPhone}</span>
              </li>
              <li>
                <i className="icon-mail" />
                {agentEmail ? <a href={`mailto:${agentEmail}`}>{agentEmail}</a> : <span>N/A</span>}
              </li>
            </ul>
          </div>
        </div>

        <fieldset className="mb-12">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="name"
            id="name1"
            required
            value={sellerForm.name}
            onChange={(e) =>
              setSellerForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </fieldset>

        <fieldset className="mb-30">
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="How can an agent help"
            id="message1"
            required
            value={sellerForm.message}
            onChange={(e) =>
              setSellerForm((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </fieldset>

        <button type="submit" className="tf-btn bg-color-primary w-full" disabled={loadingSeller}>
          {loadingSeller ? "Sending..." : "Send message"}
        </button>
      </form>

      <div className="sidebar-ads mb-30">
        <div className="image-wrap">
          <Image
            className="lazyload"
            alt=""
            src="/images/blog/ads.jpg"
            width={400}
            height={470}
          />
        </div>

        <div className="logo relative z-5">
          <Image
            alt=""
            src="/images/logo/growl_logo2.png"
            width={272}
            height={85}
          />
        </div>

        <div className="box-ads relative z-5">
          <div className="content">
            <h4 className="title">
              <a href="#">We can help you find a local real estate agent</a>
            </h4>
            <div className="text-addres">
              <p>
                Connect with a trusted agent who knows the market inside out -
                whether you’re buying or selling.
              </p>
            </div>
          </div>
          <a href="#" className="tf-btn fw-6 bg-color-primary fw-6 w-full">
            Connect with an agent
          </a>
        </div>
      </div>

      <form className="form-contact-agent" onSubmit={submitInfoForm}>
        <h4 className="heading-title mb-30">More About This Property</h4>

        <fieldset>
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            name="name"
            id="name2"
            required
            value={infoForm.name}
            onChange={(e) =>
              setInfoForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </fieldset>

        <fieldset>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            id="email2"
            required
            value={infoForm.email}
            onChange={(e) =>
              setInfoForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </fieldset>

        <fieldset className="phone">
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            name="phone"
            id="phone"
            required
            value={infoForm.phone}
            onChange={(e) =>
              setInfoForm((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </fieldset>

        <fieldset>
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Message"
            id="message3"
            required
            value={infoForm.message}
            onChange={(e) =>
              setInfoForm((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </fieldset>

        <div className="wrap-btn">
          <button type="submit" className="tf-btn bg-color-primary fw-6 w-full" disabled={loadingInfo}>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.125 5.625V14.375C18.125 14.8723 17.9275 15.3492 17.5758 15.7008C17.2242 16.0525 16.7473 16.25 16.25 16.25H3.75C3.25272 16.25 2.77581 16.0525 2.42417 15.7008C2.07254 15.3492 1.875 14.8723 1.875 14.375V5.625M18.125 5.625C18.125 5.12772 17.9275 4.65081 17.5758 4.29917C17.2242 3.94754 16.7473 3.75 16.25 3.75H3.75C3.25272 3.75 2.77581 3.94754 2.42417 4.29917C2.07254 4.65081 1.875 5.12772 1.875 5.625M18.125 5.625V5.8275C18.125 6.14762 18.0431 6.46242 17.887 6.74191C17.7309 7.0214 17.5059 7.25628 17.2333 7.42417L10.9833 11.27C10.6877 11.4521 10.3472 11.5485 10 11.5485C9.65275 11.5485 9.31233 11.4521 9.01667 11.27L2.76667 7.425C2.4941 7.25711 2.26906 7.02224 2.11297 6.74275C1.95689 6.46325 1.87496 6.14845 1.875 5.82833V5.625"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {loadingInfo ? "Sending..." : "Email agent"}
          </button>
        </div>
      </form>
    </div>
  );
}