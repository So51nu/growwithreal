"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export default function Faqs() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openItems, setOpenItems] = useState({});
  const [formData, setFormData] = useState({
    full_name: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    fetchFaqData();
  }, []);

  const fetchFaqData = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/faq/page-data/`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setPageData(data);

        const initialOpenState = {};
        data.categories.forEach((category, categoryIndex) => {
          if (category.faqs?.length > 0) {
            initialOpenState[category.id] =
              categoryIndex === 0 ? category.faqs[0].id : null;
          }
        });
        setOpenItems(initialOpenState);
      }
    } catch (error) {
      console.error("Error fetching FAQ data:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFaq = (categoryId, faqId) => {
    setOpenItems((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === faqId ? null : faqId,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResponseMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/faq/inquiries/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setResponseMessage(data.message || "Message sent successfully.");
        setFormData({
          full_name: "",
          message: "",
        });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setResponseMessage("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <section className="section-faq">
        <div className="tf-container">
          <p>Loading FAQs...</p>
        </div>
      </section>
    );
  }

  const pageSetting = pageData?.page_setting;
  const categories = pageData?.categories || [];

  return (
    <section className="section-faq">
      <div className="tf-container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="heading-section mb-48">
              <h2 className="title">
                {pageSetting?.section_title || "Frequently Asked Questions"}
              </h2>
            </div>

            {categories.map((category) => (
              <div className="tf-faq mb-49" key={category.id}>
                <h3 className="fw-8 title mb-24">{category.title}</h3>

                <ul className="box-faq">
                  {category.faqs?.length > 0 ? (
                    category.faqs.map((faq) => {
                      const isOpen = openItems[category.id] === faq.id;

                      return (
                        <li
                          className={`faq-item ${isOpen ? "active" : ""}`}
                          key={faq.id}
                        >
                          <button
                            type="button"
                            className={`faq-header h6 ${isOpen ? "" : "collapsed"}`}
                            onClick={() => toggleFaq(category.id, faq.id)}
                            style={{
                              width: "100%",
                              textAlign: "left",
                              background: "transparent",
                              border: "none",
                              padding: 0,
                            }}
                          >
                            {faq.question}
                            <i className="icon-CaretDown" />
                          </button>

                          {isOpen && (
                            <div className="faq-content-show">
                              <p className="faq-body">{faq.answer}</p>
                            </div>
                          )}
                        </li>
                      );
                    })
                  ) : (
                    <li className="faq-item">
                      <p className="faq-body">No FAQs available in this category.</p>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-xl-4 col-lg-5">
            <div className="tf-sidebar sticky-sidebar">
              <form className="form-contact-seller mb-30" onSubmit={handleSubmit}>
                <h4 className="heading-title mb-30">
                  {pageSetting?.seller_form_title || "Contact Sellers"}
                </h4>

                <div className="seller-info">
                  <div className="avartar">
                    <Image
                      alt={pageSetting?.seller_name || "Seller"}
                      width={200}
                      height={200}
                      src={
                        pageSetting?.seller_image
                          ? pageSetting.seller_image
                          : "/images/avatar/seller.jpg"
                      }
                    />
                  </div>

                  <div className="content">
                    <h6 className="name">
                      {pageSetting?.seller_name || "Growl Real Estate Seller"}
                    </h6>

                    <ul className="contact">
                      {pageSetting?.seller_phone && (
                        <li>
                          <i className="icon-phone-1" />
                          <span>{pageSetting.seller_phone}</span>
                        </li>
                      )}

                      {pageSetting?.seller_email && (
                        <li>
                          <i className="icon-mail" />
                          <a href={`mailto:${pageSetting.seller_email}`}>
                            {pageSetting.seller_email}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <fieldset className="mb-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </fieldset>

                <fieldset className="mb-30">
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="How can an agent help"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </fieldset>

                <button
                  type="submit"
                  className="tf-btn bg-color-primary w-full"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send message"}
                </button>

                {responseMessage && (
                  <p style={{ marginTop: "12px" }}>{responseMessage}</p>
                )}
              </form>

              <div className="sidebar-ads">
                <div className="image-wrap">
                  <Image
                    className="lazyload"
                    alt={pageSetting?.ad_title || "Ad image"}
                    width={400}
                    height={470}
                    src={
                      pageSetting?.ad_image
                        ? pageSetting.ad_image
                        : "/images/blog/ads.jpg"
                    }
                  />
                </div>

                {pageSetting?.ad_logo && (
                  <div className="logo relative z-5">
                    <Image
                      alt="Ad Logo"
                      width={272}
                      height={85}
                      src={pageSetting.ad_logo}
                    />
                  </div>
                )}

                <div className="box-ads relative z-5">
                  <div className="content">
                    <h4 className="title">
                      <Link href={pageSetting?.ad_button_link || "#"}>
                        {pageSetting?.ad_title ||
                          "We can help you find a local real estate agent"}
                      </Link>
                    </h4>

                    <div className="text-addres">
                      <p>
                        {pageSetting?.ad_description ||
                          "Connect with a trusted agent who knows the market inside out - whether you’re buying or selling."}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={pageSetting?.ad_button_link || "#"}
                    className="tf-btn fw-6 bg-color-primary w-full"
                  >
                    {pageSetting?.ad_button_text || "Connect with an agent"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}