"use client";
import React, { useState } from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Testimonials() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="section-testimonials style-1 tf-spacing-1">
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
            <div
              className={`tf-grid-layout md-col-3 loadmore-item-8 ${
                showMore ? "active" : ""
              } `}
            >
              <div className="box-testimonials">
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Aenean orci lorem, pharetra ac imperdiet eget, tristique ac
                    magna. In aliquet efficitur turpis, et posuere tellus
                    commodo at. Morbi accumsan nulla id neque rutrum, et tempus
                    dui venenatis. Quisque dapibus metus ligula, id tempor nisl
                    interdum vitae.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/testimonials-4.jpg"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Annette Black</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    In hac habitasse platea dictumst. Sed eleifend aliquam dui
                    quis convallis. Sed aliquet eros sit amet metus rhoncus
                    bibendum nec vel nunc. Nullam ac dapibus enim. Nulla rhoncus
                    ante ante, nec lacinia turpis consectetur non. Vivamus sit
                    amet nunc leo.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png7.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Eleanor Pena</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    aliquam tempus urna id interdum. Proin iaculis erat id
                    sapien venenatis convallis. Nam et ullamcorper nibh. Nulla
                    malesuada consectetur sem ut varius. Fusce ornare tortor non
                    maximus volutpat. Integer at consequat turpis, vel aliquam
                    neque. Suspendisse quis odio felis. Quisque volutpat
                    bibendum maximus. In porttitor semper ultrices.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png12.png"
                        width={51}
                        height={51}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Floyd Miles</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-testimonials">
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    aliquam tempus urna id interdum. Proin iaculis erat id
                    sapien venenatis convallis. Nam et ullamcorper nibh. Nulla
                    malesuada consectetur sem ut varius. Fusce ornare tortor non
                    maximus volutpat. Integer at consequat turpis, vel aliquam
                    neque. Suspendisse quis odio felis. Quisque volutpat
                    bibendum maximus. In porttitor semper ultrices.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png12.png"
                        width={51}
                        height={51}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Floyd Miles</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Vivamus at nisl ornare, vulputate turpis finibus, posuere
                    metus. Donec in placerat felis. Praesent ante tellus,
                    dignissim nec imperdiet ac.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png6.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Cody Fisher</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Quisque tincidunt, nunc vitae maximus lobortis, tellus risus
                    fringilla mi, pulvinar feugiat lacus ipsum nec tortor.
                    Aliquam a venenatis orci, id bibendum eros. Pellentesque in
                    ante rutrum, congue eros vestibulum, commodo ex.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png5.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Ralph Edwards</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-testimonials">
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    "My experience with property management services has
                    exceeded expectations. They efficiently manage properties
                    with a professional and attentive approach in every
                    situation. I feel reassured that any issue will be resolved
                    promptly and effectively."
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png8.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Jacob Jones</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Quisque tincidunt, nunc vitae maximus lobortis, tellus risus
                    fringilla mi, pulvinar feugiat lacus ipsum nec tortor.
                    Aliquam a venenatis orci, id bibendum eros. Pellentesque in
                    ante rutrum, congue eros vestibulum, commodo ex.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png5.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Ralph Edwards</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    aliquam tempus urna id interdum. Proin iaculis erat id
                    sapien venenatis convallis. Nam et ullamcorper nibh. Nulla
                    malesuada consectetur sem ut varius. Fusce ornare tortor non
                    maximus volutpat. Integer at consequat turpis, vel aliquam
                    neque. Suspendisse quis odio felis. Quisque volutpat
                    bibendum maximus. In porttitor semper ultrices.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png12.png"
                        width={51}
                        height={51}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Floyd Miles</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </div>
              {showMore ? (
                ""
              ) : (
                <button
                  onClick={() => setShowMore((pre) => !pre)}
                  className="tf-btn bg-color-primary fw-7 mx-auto btn-loadmore view-more-button"
                >
                  Show more...
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}











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

//         const response = await fetch(`${API_BASE}/testimonials/`, {
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch testimonials");
//         }

//         const data = await response.json();

//         const normalizedData = Array.isArray(data)
//           ? data.map((item) => ({
//               ...item,
//               avatar: item.avatar
//               ? item.avatar.startsWith("http")
//                 ? item.avatar.replace("/api/media", "/media")
//                 : `${API_BASE.replace("/api", "")}${item.avatar.replace("/api/media", "/media")}`
//               : "",
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

//   const renderStars = (count = 5) => {
//     return Array.from({ length: count }).map((_, index) => (
//       <i className="icon-star" key={index} />
//     ));
//   };

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

//         const response = await fetch(`${API_BASE}/testimonials/`, {
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

//   const renderStars = (count = 5) => {
//     return Array.from({ length: count }).map((_, index) => (
//       <i className="icon-star" key={index} />
//     ));
//   };

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
//                 <div className="wg-testimonial style-2 mx-auto" style={{ maxWidth: "520px" }}>
//                   <div className="ratings">
//                     {renderStars(5)}
//                   </div>
//                   <p className="text-1 description">Loading testimonials...</p>
//                 </div>
//               </div>
//             ) : error ? (
//               <div className="text-center">
//                 <div className="wg-testimonial style-2 mx-auto" style={{ maxWidth: "520px" }}>
//                   <p className="text-1 description">{error}</p>
//                 </div>
//               </div>
//             ) : testimonials.length === 0 ? (
//               <div className="text-center">
//                 <div className="wg-testimonial style-2 mx-auto" style={{ maxWidth: "520px" }}>
//                   <p className="text-1 description">No testimonials found.</p>
//                 </div>
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
//                               className="img-style"
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