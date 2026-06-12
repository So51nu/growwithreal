"use client";

import React from "react";
import Link from "next/link";

export default function JoinOurTeam() {
  return (
    <main className="growl-page">
      <section className="growl-hero">
        <div className="growl-container">
          <span className="growl-kicker">Join Our Team</span>
          <h1>Become Part of the Happy Growl Family</h1>
          <p>
            Growl City Realty is building a people-first real estate team focused
            on trust, transparency, verified properties, and customer-first
            service across Navi Mumbai, Thane, Panvel, and nearby markets.
          </p>
          <div className="growl-badge-row">
            <span className="growl-badge">Happy Growl Family</span>
            <span className="growl-badge">Growth Culture</span>
            <span className="growl-badge">Real Estate Careers</span>
          </div>
        </div>
      </section>

      <section className="growl-main">
        <div className="growl-container">
          <div className="meta-grid">
            <div className="meta-card">
              <span className="meta-label">Team Culture</span>
              <span className="meta-value">Learning, Growth & Ownership</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Work Focus</span>
              <span className="meta-value">Verified Real Estate Services</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Career Page</span>
              <span className="meta-value">Apply through Current Openings</span>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Grow With Us</h3>
              <p>
                Work with a fast-growing property advisory team where learning,
                performance, and ownership are valued every day.
              </p>
            </div>

            <div className="feature-card">
              <h3>People-First Culture</h3>
              <p>
                We believe in a supportive team environment where every member
                contributes to better customer experience.
              </p>
            </div>

            <div className="feature-card">
              <h3>Real Estate Impact</h3>
              <p>
                Help customers discover verified properties and make confident
                property decisions with transparent guidance.
              </p>
            </div>
          </div>

          <div className="layout">
            <article className="content-card">
              <div className="content-inner">
                <section className="policy-section">
                  <h2>
                    <span className="policy-index">01</span>
                    <span>Why Join Growl City Realty?</span>
                  </h2>
                  <p className="join-text">
                    At Growl City Realty, every team member is part of the Happy
                    Growl Family. We focus on professional growth, ethical real
                    estate service, teamwork, customer trust, and transparent
                    property advisory.
                  </p>
                </section>

                <section className="policy-section">
                  <h2>
                    <span className="policy-index">02</span>
                    <span>Who Can Apply?</span>
                  </h2>
                  <ul>
                    <li>Sales professionals looking to grow in real estate.</li>
                    <li>CRM, telecalling, sourcing, and field support teams.</li>
                    <li>Marketing, operations, and customer support candidates.</li>
                    <li>Freshers with strong communication and learning attitude.</li>
                  </ul>
                </section>

                <section className="policy-section">
                  <h2>
                    <span className="policy-index">03</span>
                    <span>How to Apply?</span>
                  </h2>
                  <p className="join-text">
                    Visit the Careers page, check active openings, view job
                    details, and submit your application with resume through the
                    online application form.
                  </p>
                </section>
              </div>

              <div className="bottom-nav">
                <span>Ready to become part of the Happy Growl Family?</span>
                <Link href="/careers">View Current Openings</Link>
              </div>
            </article>

            <aside className="side">
              <div className="side-card side-note">
                <h3>Happy Growl Family</h3>
                <p>
                  A normal team page for candidates to understand culture before
                  applying for active openings.
                </p>
              </div>

              <div className="side-card">
                <h3>HR Contact</h3>
                <ul className="contact-list">
                  <li>
                    <strong>Email</strong>
                    <a href="mailto:realestate@growlcommunications.com">
                      realestate@growlcommunications.com
                    </a>
                  </li>
                  <li>
                    <strong>Phone</strong>
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

          <div className="join-panel">
            <h2>Join our Team</h2>
            <p>
              We welcome motivated people who want to learn, perform, and grow
              with a trusted real estate brand. Check current openings and apply
              for the role that matches your skills.
            </p>
            <Link className="primary-link" href="/careers">
              Explore Careers
            </Link>
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

        .growl-page {
          background: linear-gradient(180deg, #f7fbfe 0%, #ffffff 100%);
          color: var(--growl-text);
          overflow-x: hidden;
        }

        .growl-hero {
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

        .growl-hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 6px;
          background: linear-gradient(90deg, var(--growl-yellow), var(--growl-blue), var(--growl-blue-dark));
        }

        .growl-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .growl-kicker {
          display: inline-flex;
          align-items: center;
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

        .growl-hero h1 {
          color: #ffffff;
          font-size: 56px;
          line-height: 1.08;
          font-weight: 900;
          margin: 0 0 14px;
          letter-spacing: -0.035em;
          text-shadow: 0 14px 34px rgba(0, 0, 0, 0.24);
        }

        .growl-hero p {
          max-width: 780px;
          color: rgba(255, 255, 255, 0.88);
          font-size: 17px;
          line-height: 1.75;
          margin: 0;
        }

        .growl-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .growl-badge {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.9);
          color: var(--growl-blue-dark);
          font-size: 12px;
          font-weight: 900;
        }

        .growl-main {
          padding: 70px 0 86px;
        }

        .meta-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin: -110px auto 34px;
          position: relative;
          z-index: 5;
        }

        .meta-card,
        .content-card,
        .side-card,
        .feature-card,
        .openings-section {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--growl-border);
          box-shadow: 0 18px 50px rgba(23, 60, 91, 0.1);
        }

        .meta-card {
          border-radius: 18px;
          padding: 22px;
        }

        .meta-label {
          display: block;
          color: var(--growl-blue);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .meta-value {
          display: block;
          color: var(--growl-blue-dark);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 800;
        }

        .meta-value small {
          color: var(--growl-muted);
          font-size: 12px;
          font-weight: 700;
        }

        .layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 330px;
          gap: 30px;
          align-items: start;
        }

        .content-card {
          border-radius: 22px;
          overflow: hidden;
        }

        .content-inner {
          padding: 38px;
        }

        .policy-section {
          padding: 0 0 28px;
          margin: 0 0 28px;
          border-bottom: 1px solid rgba(30, 77, 116, 0.1);
        }

        .policy-section:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: 0;
        }

        .policy-section h2 {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          color: var(--growl-blue-dark);
          font-size: 24px;
          line-height: 1.28;
          font-weight: 900;
          margin: 0 0 12px;
        }

        .policy-index {
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
        }

        .policy-section p,
        .policy-section li,
        .join-text,
        .side-card p {
          color: var(--growl-muted);
          font-size: 15.5px;
          line-height: 1.8;
        }

        .policy-section p {
          margin: 0;
        }

        .policy-section ul {
          margin: 12px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .policy-section li {
          position: relative;
          padding-left: 28px;
        }

        .policy-section li::before {
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

        .side {
          position: sticky;
          top: 110px;
          display: grid;
          gap: 18px;
        }

        .side-card {
          border-radius: 20px;
          padding: 24px;
        }

        .side-note {
          border-left: 4px solid var(--growl-yellow);
          background: linear-gradient(135deg, #fffdf0, #ffffff);
        }

        .side-card h3 {
          color: var(--growl-blue-dark);
          font-size: 20px;
          font-weight: 900;
          margin: 0 0 12px;
        }

        .side-card p {
          margin: 0;
        }

        .contact-list {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .contact-list li,
        .contact-list a {
          color: var(--growl-text);
          font-size: 14px;
          line-height: 1.55;
          text-decoration: none;
          word-break: break-word;
        }

        .contact-list strong {
          display: block;
          color: var(--growl-blue);
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .bottom-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 22px 38px;
          background: linear-gradient(135deg, var(--growl-blue-dark), var(--growl-blue));
        }

        .bottom-nav span {
          color: rgba(255, 255, 255, 0.78);
          font-size: 14px;
          font-weight: 700;
        }

        .bottom-nav a,
        .primary-link {
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
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin: 34px 0;
        }

        .feature-card {
          border-radius: 20px;
          padding: 26px;
        }

        .feature-card h3 {
          color: var(--growl-blue-dark);
          font-size: 21px;
          font-weight: 900;
          margin: 0 0 10px;
        }

        .feature-card p {
          color: var(--growl-muted);
          font-size: 14.5px;
          line-height: 1.7;
          margin: 0;
        }

        .join-panel {
          border-radius: 24px;
          background: linear-gradient(135deg, var(--growl-blue-dark), var(--growl-blue));
          padding: 38px;
          color: #ffffff;
          margin-top: 34px;
          box-shadow: 0 18px 50px rgba(23, 60, 91, 0.18);
        }

        .join-panel h2 {
          color: #ffffff;
          font-size: 34px;
          line-height: 1.2;
          font-weight: 900;
          margin: 0 0 12px;
        }

        .join-panel p {
          color: rgba(255, 255, 255, 0.82);
          font-size: 15.5px;
          line-height: 1.75;
          margin: 0 0 22px;
        }

        .openings-section {
          border-radius: 24px;
          padding: 38px;
          margin-bottom: 34px;
        }

        .openings-head {
          max-width: 780px;
          margin-bottom: 18px;
        }

        .openings-head span,
        .opening-label {
          display: inline-flex;
          align-items: center;
          color: var(--growl-blue);
          font-size: 13px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .openings-head h2 {
          color: var(--growl-blue-dark);
          font-size: 38px;
          line-height: 1.14;
          font-weight: 900;
          margin: 0 0 10px;
        }

        .openings-head p {
          color: var(--growl-muted);
          font-size: 15.5px;
          line-height: 1.7;
          margin: 0;
        }

        .openings-list {
          display: grid;
        }

        .opening-item {
          border-top: 1px solid rgba(30, 77, 116, 0.18);
          padding: 34px 0;
        }

        .opening-item:last-child {
          border-bottom: 1px solid rgba(30, 77, 116, 0.18);
        }

        .opening-main-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 26px;
          align-items: center;
        }

        .opening-info h3 {
          color: var(--growl-blue-dark);
          font-size: 30px;
          line-height: 1.2;
          font-weight: 900;
          letter-spacing: -0.03em;
          margin: 0 0 14px;
        }

        .opening-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
          color: var(--growl-muted);
          font-size: 14px;
        }

        .opening-meta span {
          position: relative;
        }

        .opening-meta span:not(:last-child)::after {
          content: "";
          position: absolute;
          right: -11px;
          top: 50%;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #cbd5e1;
          transform: translateY(-50%);
        }

        .opening-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .details-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(30, 77, 116, 0.2);
          background: #ffffff;
          color: var(--growl-blue-dark);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 22px rgba(23, 60, 91, 0.08);
        }

        .details-circle span {
          display: block;
          font-size: 25px;
          line-height: 1;
          transition: transform 0.2s ease;
        }

        .details-circle.active span {
          transform: rotate(180deg);
        }

        .submit-application-btn,
        .career-submit {
          min-height: 52px;
          border: 0;
          border-radius: 999px;
          padding: 0 26px;
          background: linear-gradient(135deg, var(--growl-blue-dark), var(--growl-blue));
          color: #ffffff;
          font-size: 14px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 14px 30px rgba(23, 60, 91, 0.22);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          white-space: nowrap;
        }

        .opening-details {
          margin-top: 28px;
          padding: 28px;
          border-radius: 20px;
          background: linear-gradient(180deg, #f8fbfe 0%, #ffffff 100%);
          border: 1px solid rgba(30, 77, 116, 0.12);
        }

        .opening-detail-intro {
          margin-bottom: 22px;
        }

        .opening-detail-intro h4,
        .job-detail-block h4 {
          color: var(--growl-blue-dark);
          font-size: 18px;
          font-weight: 900;
          margin: 0 0 10px;
        }

        .opening-detail-intro p {
          color: var(--growl-muted);
          font-size: 15px;
          line-height: 1.75;
          margin: 0;
        }

        .job-detail-block {
          margin-top: 22px;
        }

        .job-detail-block ul {
          display: grid;
          gap: 9px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .job-detail-block li {
          position: relative;
          color: var(--growl-muted);
          font-size: 14.5px;
          line-height: 1.65;
          padding-left: 26px;
        }

        .job-detail-block li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--growl-yellow);
          box-shadow: 0 0 0 4px rgba(238, 198, 41, 0.14);
        }

        .keyword-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .keyword-list span,
        .opening-deadline {
          display: inline-flex;
          align-items: center;
          min-height: 32px;
          padding: 0 12px;
          border-radius: 999px;
          background: var(--growl-soft);
          color: var(--growl-blue-dark);
          font-size: 12px;
          font-weight: 900;
        }

        .opening-deadline {
          margin-top: 22px;
          background: #fffdf0;
        }

        .opening-empty {
          border-top: 1px solid rgba(30, 77, 116, 0.18);
          border-bottom: 1px solid rgba(30, 77, 116, 0.18);
          color: var(--growl-blue-dark);
          padding: 34px 0;
          font-weight: 900;
          text-align: center;
        }

        .career-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 2147483000;
          background: rgba(8, 20, 32, 0.68);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
        }

        .career-modal {
          width: min(820px, 100%);
          max-height: calc(100vh - 36px);
          overflow-y: auto;
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
        }

        .career-modal-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          padding: 24px 26px;
          border-bottom: 1px solid var(--growl-border);
          background: linear-gradient(135deg, var(--growl-blue-dark), var(--growl-blue));
        }

        .career-modal-head span {
          color: rgba(255, 255, 255, 0.76);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .career-modal-head h3 {
          color: #ffffff;
          font-size: 24px;
          font-weight: 900;
          margin: 5px 0 0;
        }

        .career-modal-head button {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 26px;
          cursor: pointer;
        }

        .career-form {
          padding: 26px;
        }

        .career-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .career-form fieldset {
          border: 0;
          margin: 0 0 16px;
          padding: 0;
          min-width: 0;
        }

        .career-form label {
          display: block;
          color: var(--growl-blue-dark);
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .career-form input,
        .career-form textarea {
          width: 100%;
          border: 1px solid #d1dce8;
          background: #ffffff;
          border-radius: 12px;
          color: var(--growl-text);
          font-size: 14px;
          outline: none;
          padding: 0 14px;
          min-height: 48px;
          box-sizing: border-box;
        }

        .career-form textarea {
          min-height: 110px;
          padding-top: 12px;
          resize: vertical;
        }

        .career-phone-wrap {
          display: flex;
          border: 1px solid #d1dce8;
          border-radius: 12px;
          overflow: hidden;
        }

        .career-phone-wrap span {
          min-width: 58px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--growl-soft);
          color: var(--growl-blue-dark);
          font-weight: 900;
          border-right: 1px solid #d1dce8;
        }

        .career-phone-wrap input {
          border: 0 !important;
          border-radius: 0 !important;
        }

        .phone-help-text {
          display: block;
          color: var(--growl-muted);
          font-size: 12px;
          font-weight: 700;
          margin-top: 6px;
        }

        .career-alert {
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .career-alert.error {
          background: #fff1f2;
          color: #be123c;
        }

        .career-alert.success {
          background: var(--growl-soft);
          color: var(--growl-blue-dark);
        }

        .career-submit {
          width: 100%;
        }

        @media (max-width: 991px) {
          .growl-hero {
            min-height: 290px;
            padding: 92px 0 58px;
          }

          .growl-hero h1 {
            font-size: 42px;
          }

          .meta-grid,
          .layout,
          .feature-grid {
            grid-template-columns: 1fr;
          }

          .meta-grid {
            margin-top: -86px;
          }

          .opening-main-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .opening-actions {
            justify-content: flex-start;
          }

          .side {
            position: static;
          }
        }

        @media (max-width: 767px) {
          .growl-container {
            width: min(100% - 24px, 1180px);
          }

          .growl-hero {
            min-height: 250px;
            padding: 82px 0 50px;
          }

          .growl-hero h1 {
            font-size: 34px;
          }

          .growl-hero p,
          .policy-section p,
          .policy-section li {
            font-size: 14.5px;
          }

          .growl-main {
            padding: 58px 0 64px;
          }

          .content-inner,
          .openings-section,
          .join-panel {
            padding: 24px;
          }

          .policy-section h2 {
            font-size: 20px;
          }

          .openings-head h2,
          .join-panel h2 {
            font-size: 30px;
          }

          .opening-info h3 {
            font-size: 25px;
          }

          .opening-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .details-circle {
            width: 48px;
            height: 48px;
          }

          .submit-application-btn {
            width: 100%;
          }

          .opening-details {
            padding: 20px;
          }

          .bottom-nav {
            padding: 20px 24px;
            flex-direction: column;
            align-items: flex-start;
          }

          .bottom-nav a {
            width: 100%;
          }

          .career-form-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .career-modal-head,
          .career-form {
            padding: 20px;
          }
        }

        @media (max-width: 420px) {
          .growl-hero h1 {
            font-size: 30px;
          }

          .meta-card,
          .side-card,
          .content-inner,
          .openings-section {
            border-radius: 16px;
          }

          .opening-meta span:not(:last-child)::after {
            display: none;
          }

          .opening-meta {
            gap: 8px 12px;
          }
        }
      `}</style>

    </main>
  );
}
