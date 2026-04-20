"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Slider1({ property }) {
  const images =
    Array.isArray(property?.images) && property.images.length > 0
      ? property.images.map((img) => img.image_url).filter(Boolean)
      : property?.imageSrc
      ? [property.imageSrc]
      : [
          "/images/section/property-detail-3.jpg",
          "/images/section/property-detail-4.jpg",
          "/images/section/property-detail-5.jpg",
          "/images/section/property-detail-6.jpg",
        ];

  const mainImage = images[0];
  const secondImage = images[1] || images[0];
  const thirdImage = images[2] || images[0];
  const fourthImage = images[3] || images[0];

  return (
    <section id="gallery-swiper-started" className="section-property-image">
      <div className="tf-container">
        <Gallery>
          <div className="row">
            <div className="col-12">
              <div className="wrap-image">
                <div className="image img-1">
                  <Item
                    original={mainImage}
                    thumbnail={mainImage}
                    width={1095}
                    height={771}
                  >
                    {({ ref, open }) => (
                      <a
                        onClick={open}
                        data-fancybox="gallery"
                        className="image-wrap relative d-block"
                      >
                        <Image
                          ref={ref}
                          className="lazyload"
                          alt={property?.title || ""}
                          src={mainImage}
                          width={1095}
                          height={771}
                        />
                      </a>
                    )}
                  </Item>

                  <div className="tag-property">
                    <div className="icon">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.875 13.125L6.17417 8.82583C6.34828 8.65172 6.55498 8.51361 6.78246 8.41938C7.00995 8.32515 7.25377 8.27665 7.5 8.27665C7.74623 8.27665 7.99005 8.32515 8.21754 8.41938C8.44502 8.51361 8.65172 8.82583L13.125 13.125M11.875 11.875L13.0492 10.7008C13.2233 10.5267 13.43 10.3886 13.6575 10.2944C13.885 10.2001 14.1288 10.1516 14.375 10.1516C14.6212 10.1516 14.865 10.2001 15.0925 10.2944C15.32 10.3886 15.5267 10.5267 15.7008 10.7008L18.125 13.125M3.125 16.25H16.875C17.2065 16.25 17.5245 16.1183 17.7589 15.8839C17.9933 15.6495 18.125 15.3315 18.125 15V5C18.125 4.66848 17.9933 4.35054 17.7589 4.11612C17.5245 3.8817 17.2065 3.75 16.875 3.75H3.125C2.79348 3.75 2.47554 3.8817 2.24112 4.11612C2.0067 4.35054 1.875 4.66848 1.875 5V15C1.875 15.3315 2.0067 15.6495 2.24112 15.8839C2.47554 16.1183 2.79348 16.25 3.125 16.25Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-16 text_white fw-6 lh-20">
                      {images.length} Photos
                    </div>
                  </div>
                </div>

                <div className="wrap-image-right">
                  <div className="image img-2">
                    <Item
                      original={secondImage}
                      thumbnail={secondImage}
                      width={804}
                      height={375}
                    >
                      {({ ref, open }) => (
                        <a
                          onClick={open}
                          data-fancybox="gallery"
                          className="image-wrap relative d-block"
                        >
                          <Image
                            ref={ref}
                            className="lazyload"
                            alt={property?.title || ""}
                            src={secondImage}
                            width={804}
                            height={375}
                          />
                        </a>
                      )}
                    </Item>
                  </div>

                  <div className="bot">
                    <div className="image img-3">
                      <Item
                        original={thirdImage}
                        thumbnail={thirdImage}
                        width={392}
                        height={375}
                      >
                        {({ ref, open }) => (
                          <a
                            onClick={open}
                            data-fancybox="gallery"
                            className="image-wrap relative d-block"
                          >
                            <Image
                              ref={ref}
                              className="lazyload"
                              alt={property?.title || ""}
                              src={thirdImage}
                              width={392}
                              height={375}
                            />
                          </a>
                        )}
                      </Item>
                    </div>

                    <div className="image img-4">
                      <Item
                        original={fourthImage}
                        thumbnail={fourthImage}
                        width={392}
                        height={375}
                      >
                        {({ ref, open }) => (
                          <a
                            onClick={open}
                            data-fancybox="gallery"
                            className="image-wrap relative d-block"
                          >
                            <Image
                              ref={ref}
                              className="lazyload"
                              alt={property?.title || ""}
                              src={fourthImage}
                              width={392}
                              height={375}
                            />
                          </a>
                        )}
                      </Item>
                    </div>
                  </div>
                </div>
              </div>

              {images.length > 4 && (
                <div style={{ display: "none" }}>
                  {images.slice(4).map((img, index) => (
                    <Item
                      key={index}
                      original={img}
                      thumbnail={img}
                      width={1200}
                      height={800}
                    >
                      {({ ref, open }) => (
                        <a ref={ref} onClick={open}>
                          hidden
                        </a>
                      )}
                    </Item>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Gallery>
      </div>
    </section>
  );
}