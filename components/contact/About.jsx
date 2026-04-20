"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

function GalleryRow({ images, reverse = false, speed = "40s" }) {
  const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const loopImages = [...validImages, ...validImages];

  if (!validImages.length) return null;

  return (
    <div className="growl-marquee">
      <div
        className={`growl-marquee-track ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: speed }}
      >
        {loopImages.map((img, index) => (
          <div className="growl-gallery-card" key={index}>
            <Image
              src={img}
              alt={`Gallery ${index + 1}`}
              width={420}
              height={280}
              className="growl-gallery-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/aboutus/page-data/`, {
          cache: "no-store",
        });
        const data = await res.json();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about page data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <section className="tf-spacing-1">
        <div className="tf-container">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  const hero = aboutData?.hero_section;
  const locationInfos = aboutData?.location_infos || [];
  const contactInfos = aboutData?.contact_infos || [];

  const whyChooseSection = aboutData?.why_choose_section;
  const whyChooseCards = aboutData?.why_choose_cards || [];

  const resourceSection = aboutData?.resource_section;
  const resourceItems = aboutData?.resource_items || [];

  const teamIntroSection = aboutData?.team_intro_section;
  const teamSection = aboutData?.team_section;
  const teamMembers = aboutData?.team_members || [];

  const gallerySection = aboutData?.gallery_section;
  const galleryRow1 = (aboutData?.gallery_row_1 || []).map((item) => item.image);
  const galleryRow2 = (aboutData?.gallery_row_2 || []).map((item) => item.image);
  const galleryRow3 = (aboutData?.gallery_row_3 || []).map((item) => item.image);

  return (
    <>
      <section className="section-contact style-4 tf-spacing-1 pb-0">
        <div className="tf-container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="box-contact pe-lg-4">
                <div className="heading-section mb-48">
                  <div className="sub-title text-color-primary mb-12">
                    {hero?.subtitle}
                  </div>
                  <h2 className="title split-text split-lines-transform">
                    {hero?.title}
                  </h2>
                  {hero?.short_description && (
                    <p className="text-1 mb-16">{hero.short_description}</p>
                  )}
                  {hero?.long_description && (
                    <p className="text-1">{hero.long_description}</p>
                  )}
                </div>

                <ul className="list-info">
                  {locationInfos.map((item) => (
                    <li key={item.id}>
                      <div className="content">
                        <div className="sub">{item.label}</div>
                        <p>{item.value}</p>
                      </div>
                    </li>
                  ))}

                  {contactInfos.map((item) => (
                    <li key={item.id}>
                      <div className="content">
                        <div className="sub">{item.label}</div>

                        {item.type === "email" ? (
                          <a href={`mailto:${item.value}`}>{item.value}</a>
                        ) : (
                          <div className="phone">{item.value}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="image-wrap growl-about-main-image">
                {hero?.main_image && (
                  <Image
                    alt={hero?.title || "About Growl Real Estate"}
                    width={650}
                    height={620}
                    src={hero.main_image}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-spacing-1 pt-0">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center mb-48">
                <div className="sub-title text-color-primary mb-12">
                  {whyChooseSection?.subtitle}
                </div>
                <h2 className="title">{whyChooseSection?.title}</h2>
                {whyChooseSection?.description && (
                  <p className="text-1 mx-auto" style={{ maxWidth: "850px" }}>
                    {whyChooseSection.description}
                  </p>
                )}
              </div>
            </div>

            {whyChooseCards.map((card) => (
              <div className="col-lg-4 col-md-6 mb-30" key={card.id}>
                <div className="wg-testimonial style-2 h-100 growl-lift-card">
                  <h5 className="mb-16">{card.heading}</h5>
                  <p className="text-1 description mb-0">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-spacing-1 pt-0">
        <div className="tf-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="image-wrap mb-md-0 mb-4 growl-about-side-image">
                {resourceSection?.side_image && (
                  <Image
                    src={resourceSection.side_image}
                    alt={resourceSection?.title || "Growl Real Estate Resources"}
                    width={650}
                    height={520}
                  />
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box-contact ps-lg-4">
                <div className="heading-section mb-32">
                  <div className="sub-title text-color-primary mb-12">
                    {resourceSection?.subtitle}
                  </div>
                  <h2 className="title">{resourceSection?.title}</h2>
                  {resourceSection?.description && (
                    <p className="text-1">{resourceSection.description}</p>
                  )}
                </div>

                <ul className="list-info">
                  {resourceItems.map((item) => (
                    <li key={item.id}>
                      <div className="content">
                        <div className="sub">{item.heading}</div>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-spacing-1 pt-0">
        <div className="tf-container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="box-contact pe-lg-4">
                <div className="heading-section mb-32">
                  <div className="sub-title text-color-primary mb-12">
                    {teamIntroSection?.subtitle}
                  </div>
                  <h2 className="title">{teamIntroSection?.title}</h2>

                  {teamIntroSection?.paragraph_1 && (
                    <p className="text-1 mb-16">{teamIntroSection.paragraph_1}</p>
                  )}
                  {teamIntroSection?.paragraph_2 && (
                    <p className="text-1 mb-16">{teamIntroSection.paragraph_2}</p>
                  )}
                  {teamIntroSection?.paragraph_3 && (
                    <p className="text-1 mb-16">{teamIntroSection.paragraph_3}</p>
                  )}
                  {teamIntroSection?.paragraph_4 && (
                    <p className="text-1 mb-0">{teamIntroSection.paragraph_4}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1 mb-lg-0 mb-4">
              <div className="image-wrap growl-about-side-image">
                {teamIntroSection?.side_image && (
                  <Image
                    src={teamIntroSection.side_image}
                    alt={teamIntroSection?.title || "Growl Real Estate Team"}
                    width={650}
                    height={560}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-spacing-1 pt-0">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center mb-48">
                <div className="sub-title text-color-primary mb-12">
                  {teamSection?.subtitle}
                </div>
                <h2 className="title">{teamSection?.title}</h2>
                {teamSection?.description && (
                  <p className="text-1 mx-auto" style={{ maxWidth: "850px" }}>
                    {teamSection.description}
                  </p>
                )}
              </div>
            </div>

            {teamMembers.map((member) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-30" key={member.id}>
                <div className="growl-team-card">
                  <div className="growl-team-image-wrap">
                    {member.image && (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={320}
                        height={320}
                        className="growl-team-image"
                      />
                    )}
                  </div>

                  <div className="growl-team-content">
                    <h5 className="mb-8">{member.name}</h5>
                    <div className="growl-team-title">{member.title}</div>
                    <p className="text-1 description mb-0">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-spacing-1 pt-0">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center mb-48">
                <div className="sub-title text-color-primary mb-12">
                  {gallerySection?.subtitle}
                </div>
                <h2 className="title">{gallerySection?.title}</h2>
                {gallerySection?.description && (
                  <p className="text-1 mx-auto" style={{ maxWidth: "850px" }}>
                    {gallerySection.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="growl-gallery-section">
          <GalleryRow images={galleryRow1} speed="38s" />
          <GalleryRow images={galleryRow2} reverse speed="42s" />
          <GalleryRow images={galleryRow3} speed="40s" />
        </div>
      </section>

      <style jsx global>{`
        .growl-about-main-image img,
        .growl-about-side-image img {
          width: 100%;
          height: auto;
          border-radius: 24px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .growl-about-main-image,
        .growl-about-side-image {
          overflow: hidden;
          border-radius: 24px;
        }

        .growl-about-main-image:hover img,
        .growl-about-side-image:hover img {
          transform: scale(1.04);
        }

        .growl-lift-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .growl-lift-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
        }

        .growl-team-card {
          background: #ffffff;
          border: 1px solid #e9e9e9;
          border-radius: 28px;
          overflow: hidden;
          height: 100%;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .growl-team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);
        }

        .growl-team-image-wrap {
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: #f7f7f7;
        }

        .growl-team-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block;
          border-radius: 0 !important;
        }

        .growl-team-content {
          padding: 24px 22px 26px;
          text-align: center;
        }

        .growl-team-title {
          font-size: 17px;
          font-weight: 600;
          color: #ff9100;
          margin-bottom: 12px;
        }

        .growl-gallery-section {
          overflow: hidden;
        }

        .growl-marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
          margin-bottom: 22px;
        }

        .growl-marquee-track {
          display: flex;
          width: max-content;
          gap: 22px;
          animation: growlMarquee 40s linear infinite;
        }

        .growl-marquee-track.reverse {
          animation-name: growlMarqueeReverse;
        }

        .growl-gallery-card {
          width: 420px;
          min-width: 420px;
          border-radius: 24px;
          overflow: hidden;
          background: #f5f5f5;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
        }

        .growl-gallery-img {
          width: 100% !important;
          height: 280px !important;
          object-fit: cover !important;
          display: block;
          transition: transform 0.5s ease;
        }

        .growl-gallery-card:hover .growl-gallery-img {
          transform: scale(1.05);
        }

        @keyframes growlMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes growlMarqueeReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 991px) {
          .growl-team-image-wrap {
            height: 240px;
          }

          .growl-gallery-card {
            width: 320px;
            min-width: 320px;
          }

          .growl-gallery-img {
            height: 220px !important;
          }
        }

        @media (max-width: 767px) {
          .growl-team-image-wrap {
            height: 260px;
          }

          .growl-gallery-card {
            width: 280px;
            min-width: 280px;
          }

          .growl-gallery-img {
            height: 200px !important;
          }

          .growl-team-content {
            padding: 20px 16px 22px;
          }
        }
      `}</style>
    </>
  );
}