"use client";

import React from "react";
import Link from "next/link";

const sections = [
  {
    title: "Acceptance of Terms",
    body:
      "By accessing or using growlcityrealty.in, you agree to comply with and be bound by these Terms of Service. If you do not agree, please discontinue use of our website and services.",
  },
  {
    title: "Services Provided",
    body:
      "Growl City Realty operates as a Zero Brokerage Channel Partner Firm specializing in verified, RERA-certified properties across Navi Mumbai, Thane, Panvel, and Kalyan-Dombivli.",
    bullets: [
      "Property listings and marketing.",
      "End-to-end assistance from inquiry to deal closure.",
      "Compliance verification with RERA and other regulatory authorities.",
    ],
  },
  {
    title: "Eligibility",
    body:
      "You must be at least 18 years old to use our services. By using our website, you confirm that you have the legal capacity to enter into binding agreements.",
  },
  {
    title: "User Responsibilities",
    body: "When using our website, you agree to:",
    bullets: [
      "Provide accurate and complete information during inquiries or registrations.",
      "Use the website only for lawful purposes.",
      "Not engage in fraudulent, misleading, or harmful activities.",
      "Verify property details directly with developers before making purchase decisions.",
    ],
  },
  {
    title: "Property Information Disclaimer",
    bullets: [
      "All property listings are provided for informational purposes only.",
      "While we strive for accuracy, Growl City Realty does not guarantee completeness or correctness of third-party data.",
      "Buyers are responsible for independently verifying project approvals, pricing, and documentation.",
    ],
  },
  {
    title: "Intellectual Property",
    body:
      "All content on growlcityrealty.in, including logos, text, images, and designs, is the property of Growl City Realty unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited.",
  },
  {
    title: "Limitation of Liability",
    body: "Growl City Realty shall not be held liable for:",
    bullets: [
      "Any loss or damage arising from reliance on property information.",
      "Delays, errors, or omissions in listings.",
      "Third-party actions, including developers, builders, or service providers.",
    ],
  },
  {
    title: "Privacy & Data Protection",
    body:
      "Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and safeguard your personal information.",
  },
  {
    title: "Termination of Access",
    body:
      "We reserve the right to suspend or terminate your access to our website if you violate these Terms of Service or engage in unlawful activities.",
  },
  {
    title: "Governing Law",
    body:
      "These Terms of Service are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Thane, Maharashtra.",
  },
  {
    title: "Updates to Terms",
    body:
      "We may update these Terms of Service from time to time. Changes will be posted on this page with a revised effective date.",
  },
];

export default function TermsOfService() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-container">
          <span className="legal-kicker">Terms of Service</span>
          <h1>Terms of Service</h1>
          <p>
            Please read these terms carefully before using Growl City Realty
            website, property listings, marketing support, and advisory services.
          </p>
        </div>
      </section>

      <section className="legal-main">
        <div className="legal-container">
          <div className="legal-meta-grid">
            <div className="legal-meta-card">
              <span className="legal-meta-label">Effective Date</span>
              <span className="legal-meta-value">June 12, 2026</span>
            </div>

            <div className="legal-meta-card">
              <span className="legal-meta-label">Domain</span>
              <span className="legal-meta-value">growlcityrealty.in</span>
            </div>

            <div className="legal-meta-card">
              <span className="legal-meta-label">Company</span>
              <span className="legal-meta-value">
                Growl City Realty
                <br />
                <small>Formally Known as Growl City Realty</small>
              </span>
            </div>
          </div>

          <div className="legal-layout">
            <article className="legal-card">
              <div className="legal-content">
                {sections.map((section, index) => (
                  <section className="legal-section" key={section.title}>
                    <h2>
                      <span className="legal-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.title}</span>
                    </h2>

                    {section.body ? <p>{section.body}</p> : null}

                    {section.bullets?.length ? (
                      <ul>
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="legal-bottom-nav">
                <span>Want to understand how we protect your data?</span>
                <Link href="/privacy-policy">View Privacy Policy</Link>
              </div>
            </article>

            <aside className="legal-sidebar">
              <div className="legal-side-card legal-note">
                <h3>Zero Brokerage Channel Partner</h3>
                <p>
                  Growl City Realty focuses on verified, RERA-certified
                  properties across Navi Mumbai, Thane, Panvel, and
                  Kalyan-Dombivli.
                </p>
              </div>

              <div className="legal-side-card">
                <h3>Contact Us</h3>
                <ul className="legal-contact-list">
                  <li>
                    <strong>Email</strong>
                    <a href="mailto:realestate@growlcommunications.com">
                      realestate@growlcommunications.com
                    </a>
                  </li>
                  <li>
                    <strong>Phone</strong>
                    <a href="tel:+919326183013">+91-9326183013</a>
                    <br />
                    <a href="tel:+918108888402">+91-8108888402</a>
                  </li>
                  <li>
                    <strong>Address</strong>
                    Growl City Realty, Navi Mumbai, Thane, Maharashtra, India
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        :global(:root) {
          --growl-blue: #1e4d74;
          --growl-blue-dark: #173c5b;
          --growl-yellow: #eec629;
          --growl-soft: #eef6fb;
          --growl-text: #142033;
          --growl-muted: #64748b;
          --growl-border: rgba(30, 77, 116, 0.14);
        }

        .legal-page {
          background: linear-gradient(180deg, #f7fbfe 0%, #ffffff 100%);
          color: var(--growl-text);
          overflow-x: hidden;
        }

        .legal-hero {
          position: relative;
          min-height: 330px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(135deg, rgba(23, 60, 91, 0.92), rgba(30, 77, 116, 0.82)),
            url("/images/contact_us.jpg");
          background-size: cover;
          background-position: center;
          padding: 110px 0 70px;
        }

        .legal-hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 6px;
          background: linear-gradient(90deg, var(--growl-yellow), var(--growl-blue), var(--growl-blue-dark));
        }

        .legal-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .legal-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(238, 198, 41, 0.16);
          border: 1px solid rgba(238, 198, 41, 0.42);
          color: #ffffff;
          font-size: 13px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .legal-hero h1 {
          color: #ffffff;
          font-size: 56px;
          line-height: 1.08;
          font-weight: 900;
          margin: 0 0 14px;
          letter-spacing: -0.035em;
          text-shadow: 0 14px 34px rgba(0, 0, 0, 0.24);
        }

        .legal-hero p {
          max-width: 760px;
          color: rgba(255, 255, 255, 0.88);
          font-size: 17px;
          line-height: 1.75;
          margin: 0;
        }

        .legal-main {
          padding: 70px 0 86px;
        }

        .legal-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin: -110px auto 34px;
          position: relative;
          z-index: 5;
        }

        .legal-meta-card {
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid var(--growl-border);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 18px 42px rgba(23, 60, 91, 0.14);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .legal-meta-label {
          display: block;
          color: var(--growl-blue);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .legal-meta-value {
          display: block;
          color: var(--growl-blue-dark);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 800;
        }

        .legal-meta-value small {
          color: var(--growl-muted);
          font-size: 12px;
          font-weight: 700;
        }

        .legal-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 330px;
          gap: 30px;
          align-items: start;
        }

        .legal-card {
          background: #ffffff;
          border: 1px solid var(--growl-border);
          border-radius: 22px;
          box-shadow: 0 18px 50px rgba(23, 60, 91, 0.1);
          overflow: hidden;
        }

        .legal-content {
          padding: 38px;
        }

        .legal-section {
          padding: 0 0 28px;
          margin: 0 0 28px;
          border-bottom: 1px solid rgba(30, 77, 116, 0.1);
        }

        .legal-section:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: 0;
        }

        .legal-section h2 {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          color: var(--growl-blue-dark);
          font-size: 24px;
          line-height: 1.28;
          font-weight: 900;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }

        .legal-index {
          min-width: 34px;
          height: 34px;
          border-radius: 10px;
          background: var(--growl-soft);
          color: var(--growl-blue);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 900;
          border: 1px solid rgba(30, 77, 116, 0.1);
        }

        .legal-section p,
        .legal-section li {
          color: var(--growl-muted);
          font-size: 15.5px;
          line-height: 1.8;
        }

        .legal-section p {
          margin: 0;
        }

        .legal-section ul {
          margin: 12px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .legal-section li {
          position: relative;
          padding-left: 28px;
        }

        .legal-section li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 11px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--growl-yellow);
          box-shadow: 0 0 0 4px rgba(238, 198, 41, 0.16);
        }

        .legal-sidebar {
          position: sticky;
          top: 110px;
          display: grid;
          gap: 18px;
        }

        .legal-side-card {
          background: #ffffff;
          border: 1px solid var(--growl-border);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 16px 42px rgba(23, 60, 91, 0.1);
        }

        .legal-side-card h3 {
          color: var(--growl-blue-dark);
          font-size: 20px;
          line-height: 1.28;
          font-weight: 900;
          margin: 0 0 12px;
        }

        .legal-side-card p {
          color: var(--growl-muted);
          font-size: 14.5px;
          line-height: 1.7;
          margin: 0 0 16px;
        }

        .legal-contact-list {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .legal-contact-list li,
        .legal-contact-list a {
          color: var(--growl-text);
          font-size: 14px;
          line-height: 1.55;
          text-decoration: none;
          word-break: break-word;
        }

        .legal-contact-list strong {
          display: block;
          color: var(--growl-blue);
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .legal-note {
          border-left: 4px solid var(--growl-yellow);
          background: linear-gradient(135deg, #fffdf0, #ffffff);
        }

        .legal-bottom-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 22px 38px;
          background: linear-gradient(135deg, var(--growl-blue-dark), var(--growl-blue));
        }

        .legal-bottom-nav span {
          color: rgba(255, 255, 255, 0.78);
          font-size: 14px;
          font-weight: 700;
        }

        .legal-bottom-nav a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 18px;
          border-radius: 12px;
          background: var(--growl-yellow);
          color: var(--growl-blue-dark);
          text-decoration: none;
          font-size: 14px;
          font-weight: 900;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .legal-bottom-nav a:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 24px rgba(238, 198, 41, 0.25);
        }

        @media (max-width: 991px) {
          .legal-hero {
            min-height: 290px;
            padding: 92px 0 58px;
          }

          .legal-hero h1 {
            font-size: 42px;
          }

          .legal-meta-grid {
            grid-template-columns: 1fr;
            margin-top: -86px;
          }

          .legal-layout {
            grid-template-columns: 1fr;
          }

          .legal-sidebar {
            position: static;
          }
        }

        @media (max-width: 767px) {
          .legal-container {
            width: min(100% - 24px, 1180px);
          }

          .legal-hero {
            min-height: 250px;
            padding: 82px 0 50px;
          }

          .legal-hero h1 {
            font-size: 34px;
          }

          .legal-hero p {
            font-size: 14.5px;
          }

          .legal-main {
            padding: 58px 0 64px;
          }

          .legal-content {
            padding: 24px;
          }

          .legal-section h2 {
            font-size: 20px;
          }

          .legal-section p,
          .legal-section li {
            font-size: 14.5px;
          }

          .legal-bottom-nav {
            padding: 20px 24px;
            flex-direction: column;
            align-items: flex-start;
          }

          .legal-bottom-nav a {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .legal-hero h1 {
            font-size: 30px;
          }

          .legal-meta-card,
          .legal-side-card,
          .legal-content {
            border-radius: 16px;
          }
        }
      `}</style>

    </main>
  );
}
