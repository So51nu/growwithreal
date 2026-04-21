// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import SplitTextAnimation from "@/components/common/SplitTextAnimation";

// const API_BASE =
//   process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

// export default function Testimonials() {
//   const [showMore, setShowMore] = useState(false);
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     let isMounted = true;

//     const fetchTestimonials = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await fetch(`${API_BASE}/api/testimonials/`, {
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch testimonials");
//         }

//         const data = await response.json();

//         const normalizedData = Array.isArray(data)
//           ? data.map((item, index) => ({
//               ...item,
//               id: item.id ?? index + 1,
//               name: item.name || "Client Name",
//               role: item.role || "Client",
//               description: item.description || "",
//               rating: item.rating || 5,
//               width: item.width || 120,
//               height: item.height || 120,
//               avatar: item.avatar
//                 ? item.avatar.startsWith("http")
//                   ? item.avatar.replace("/api/media", "/media")
//                   : `${API_BASE.replace("/api", "")}${item.avatar.replace(
//                       "/api/media",
//                       "/media"
//                     )}`
//                 : "/images/avatar/avt-png12.png",
//             }))
//           : [];

//         if (isMounted) {
//           setTestimonials(normalizedData);
//         }
//       } catch (err) {
//         if (isMounted) {
//           setError("Unable to load testimonials right now.");
//           setTestimonials([]);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchTestimonials();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   const groupedTestimonials = useMemo(() => {
//     const visibleItems = showMore ? testimonials : testimonials.slice(0, 9);
//     const chunkSize = 3;
//     const groups = [];

//     for (let i = 0; i < visibleItems.length; i += chunkSize) {
//       groups.push(visibleItems.slice(i, i + chunkSize));
//     }

//     return groups;
//   }, [testimonials, showMore]);

//   const renderStars = (count = 5) =>
//     Array.from({ length: count }).map((_, index) => (
//       <i className="icon-star" key={index} />
//     ));

//   return (
//     <div className="section-testimonials style-1 tf-spacing-1">
//       <div className="tf-container">
//         <div className="row">
//           <div className="col-12">
//             <div className="heading-section text-center mb-48">
//               <h2 className="title split-text effect-right">
//                 <SplitTextAnimation text="Clients Testimonials" />
//               </h2>
//               <p className="text-1 split-text split-lines-transform">
//                 Thousands of luxury home enthusiasts just like you visit our
//                 website.
//               </p>
//             </div>

//             {loading ? (
//               <div className="text-center">
//                 <p className="text-1">Loading testimonials...</p>
//               </div>
//             ) : error ? (
//               <div className="text-center">
//                 <p className="text-1">{error}</p>
//               </div>
//             ) : testimonials.length === 0 ? (
//               <div className="text-center">
//                 <p className="text-1">No testimonials found.</p>
//               </div>
//             ) : (
//               <div
//                 className={`tf-grid-layout md-col-3 loadmore-item-8 ${
//                   showMore ? "active" : ""
//                 }`}
//               >
//                 {groupedTestimonials.map((group, groupIndex) => (
//                   <div className="box-testimonials" key={groupIndex}>
//                     {group.map((item) => (
//                       <div className="wg-testimonial style-2" key={item.id}>
//                         <div className="ratings ">
//                           {renderStars(item.rating || 5)}
//                         </div>

//                         <p className="text-1 description">
//                           {item.description}
//                         </p>

//                         <div className="author">
//                           <div className="avatar">
//                             <Image
//                               alt={item.name || "testimonial"}
//                               src={item.avatar || "/images/avatar/avt-png12.png"}
//                               width={item.width || 120}
//                               height={item.height || 120}
//                             />
//                           </div>

//                           <div className="content">
//                             <h6 className="name">
//                               <a href="#">{item.name}</a>
//                             </h6>
//                             <p className="text-2">{item.role}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ))}

//                 {!showMore && testimonials.length > 9 && (
//                   <button
//                     onClick={() => setShowMore(true)}
//                     className="tf-btn bg-color-primary fw-7 mx-auto btn-loadmore view-more-button"
//                   >
//                     Show more...
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

function normalizeAvatarUrl(avatar) {
  if (!avatar) return "";

  const value = String(avatar).trim();

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value.replace("/api/media", "/media");
  }

  if (value.startsWith("/api/media/")) {
    return `${API_BASE.replace("/api", "")}${value.replace("/api/media", "/media")}`;
  }

  if (value.startsWith("/media/")) {
    return `${API_BASE}${value}`;
  }

  if (value.startsWith("media/")) {
    return `${API_BASE}/media/${value.replace(/^media\//, "")}`;
  }

  return value;
}

export default function Testimonials() {
  const [showMore, setShowMore] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_BASE}/api/testimonials/`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();

        const normalizedData = Array.isArray(data)
          ? data.map((item, index) => ({
              ...item,
              id: item?.id ?? index + 1,
              avatar: normalizeAvatarUrl(item?.avatar),
            }))
          : [];

        if (isMounted) {
          setTestimonials(normalizedData);
        }
      } catch (err) {
        if (isMounted) {
          setError("Unable to load testimonials right now.");
          setTestimonials([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  const visibleTestimonials = useMemo(() => {
    return showMore ? testimonials : testimonials.slice(0, 9);
  }, [testimonials, showMore]);

  const renderStars = (count = 5) =>
    Array.from({ length: Number(count) || 5 }).map((_, index) => (
      <i className="icon-star" key={index} />
    ));

  return (
    <div className="section-testimonials style-1 tf-spacing-1 growl-testimonials-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Clients Testimonials" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>

            {loading ? (
              <div className="text-center">
                <p className="text-1">Loading testimonials...</p>
              </div>
            ) : error ? (
              <div className="text-center">
                <p className="text-1">{error}</p>
              </div>
            ) : testimonials.length === 0 ? (
              <div className="text-center">
                <p className="text-1">No testimonials found.</p>
              </div>
            ) : (
              <>
                <div className="growl-testimonials-grid">
                  {visibleTestimonials.map((item) => (
                    <div
                      className="wg-testimonial style-2 growl-testimonial-card"
                      key={item.id}
                    >
                      <div className="ratings growl-ratings">
                        {renderStars(item?.rating)}
                      </div>

                      <p className="text-1 description growl-testimonial-description">
                        {item?.description || ""}
                      </p>

                      <div className="author growl-testimonial-author">
                        <div className="avatar growl-testimonial-avatar">
                          {item?.avatar ? (
                            <Image
                              alt={item?.name || "testimonial"}
                              src={item.avatar}
                              width={80}
                              height={80}
                            />
                          ) : (
                            <div className="growl-avatar-placeholder">
                              {item?.name?.charAt(0)?.toUpperCase() || "T"}
                            </div>
                          )}
                        </div>

                        <div className="content">
                          <h6 className="name mb-4">
                            <span>{item?.name || ""}</span>
                          </h6>
                          <p className="text-2 mb-0">{item?.role || ""}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {!showMore && testimonials.length > 9 && (
                  <div className="text-center mt-30">
                    <button
                      onClick={() => setShowMore(true)}
                      className="tf-btn bg-color-primary fw-7"
                      type="button"
                    >
                      Show more...
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .growl-testimonials-section {
          padding-top: 90px;
          padding-bottom: 90px;
        }

        .growl-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }

        .growl-testimonial-card {
          height: 100%;
          padding: 28px;
          border-radius: 24px;
          border: 1px solid #e8e8e8;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .growl-testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }

        .growl-ratings {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 18px;
          color: #f59e0b;
        }

        .growl-testimonial-description {
          min-height: 110px;
          margin-bottom: 24px;
          color: #5b6470;
          line-height: 1.8;
          word-break: break-word;
          white-space: pre-line;
        }

        .growl-testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: auto;
        }

        .growl-testimonial-avatar {
          width: 72px;
          height: 72px;
          min-width: 72px;
          border-radius: 50%;
          overflow: hidden;
          background: #f3f3f3;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .growl-testimonial-avatar img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block;
          border-radius: 50% !important;
        }

        .growl-avatar-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
          color: #666;
          background: #ececec;
        }

        @media (max-width: 1199px) {
          .growl-testimonials-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .growl-testimonials-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .growl-testimonials-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .growl-testimonial-card {
            padding: 20px;
            border-radius: 18px;
          }

          .growl-testimonial-description {
            min-height: auto;
            margin-bottom: 18px;
          }

          .growl-testimonial-avatar {
            width: 60px;
            height: 60px;
            min-width: 60px;
          }
        }
      `}</style>
    </div>
  );
}