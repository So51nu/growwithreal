"use client";

import React from "react";
import Link from "next/link";

const sections = [
  {
    title: "Purpose",
    body:
      "Growl City Realty is committed to the highest standards of integrity, transparency, and accountability. This Whistleblower Policy provides a framework for employees, partners, customers, and stakeholders to report unethical practices, misconduct, or violations of law without fear of retaliation.",
  },
  {
    title: "Scope",
    body: "This policy applies to:",
    bullets: [
      "All employees, contractors, and consultants.",
      "Channel partners, developers, and vendors.",
      "Customers and stakeholders engaging with Growl City Realty.",
    ],
  },
  {
    title: "Reportable Concerns",
    body: "Whistleblowers may report concerns including, but not limited to:",
    bullets: [
      "Fraud, corruption, or financial irregularities.",
      "Misrepresentation of property details or approvals.",
      "Breach of RERA or other regulatory compliance.",
      "Harassment, discrimination, or workplace misconduct.",
      "Data privacy violations or misuse of customer information.",
    ],
  },
  {
    title: "Reporting Channels",
    body:
      "You may report concerns through email at realestate@growlcommunications.com or phone at +91-8108888402. Postal Address: Grievance & Compliance Department, Growl City Realty, Navi Mumbai, Thane, Maharashtra, India. Reports may be submitted anonymously and all disclosures will be treated with strict confidentiality.",
  },
  {
    title: "Protection Against Retaliation",
    body:
      "Growl City Realty prohibits retaliation against whistleblowers who report concerns in good faith. Any employee or partner found engaging in retaliatory behavior will face disciplinary action, including termination of contract or employment.",
  },
  {
    title: "Investigation Process",
    bullets: [
      "All reports will be acknowledged within 7 business days.",
      "Investigations will be conducted by the Compliance & Ethics Committee.",
      "Findings will be documented, and corrective actions will be implemented where necessary.",
      "Whistleblowers will be informed of the outcome, subject to confidentiality requirements.",
    ],
  },
  {
    title: "False Reporting",
    body:
      "Knowingly filing false or malicious reports is a violation of this policy and may result in disciplinary action.",
  },
  {
    title: "Review & Updates",
    body:
      "This policy will be reviewed annually to ensure alignment with legal requirements and industry best practices. Updates will be published on growlcityrealty.in.",
  },
];

export default function WhistleBlowerPolicy() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-container">
          <span className="legal-kicker">Whistleblower Policy</span>
          <h1>Whistleblower Policy</h1>
          <p>A safe and confidential framework for reporting unethical practices, misconduct, legal violations, or compliance concerns.</p>
          <div className="legal-badge-row"><span className="legal-badge">Confidential Reporting</span><span className="legal-badge">Anonymous Reports Accepted</span><span className="legal-badge">7 Business Day Acknowledgment</span></div>
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

                    {section.steps?.length ? (
                      <ol>
                        {section.steps.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="legal-bottom-nav">
                <span>Need to file a formal grievance instead?</span>
                <Link href="/grievance-officer">View Grievance Details</Link>
              </div>
            </article>

            <aside className="legal-sidebar">
              <div className="legal-side-card legal-note">
                <h3>No Retaliation</h3>
                <p>Growl City Realty prohibits retaliation against whistleblowers who report concerns in good faith.</p>
              </div>

              <div className="legal-side-card">
                <h3>Contact Details</h3>
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
            linear-gradient(135deg, rgba(23, 60, 91, 0.94), rgba(30, 77, 116, 0.84)),
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
          max-width: 780px;
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

        .legal-section ul,
        .legal-section ol {
          margin: 12px 0 0;
          padding: 0;
          display: grid;
          gap: 10px;
        }

        .legal-section ul {
          list-style: none;
        }

        .legal-section ol {
          padding-left: 22px;
          color: var(--growl-muted);
        }

        .legal-section ul li {
          position: relative;
          padding-left: 28px;
        }

        .legal-section ul li::before {
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

        .legal-section ol li {
          padding-left: 6px;
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

        .legal-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .legal-badge {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          background: var(--growl-soft);
          color: var(--growl-blue-dark);
          border: 1px solid rgba(30, 77, 116, 0.12);
          font-size: 12px;
          font-weight: 800;
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
