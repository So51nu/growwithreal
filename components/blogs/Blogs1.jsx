// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { apiGet } from "../lib/api";
// import { useSearchParams } from "next/navigation";

// function formatDate(date) {
//   if (!date) return "";
//   try {
//     return new Date(date).toLocaleDateString();
//   } catch {
//     return date;
//   }
// }

// export default function Blogs1() {
//   const searchParams = useSearchParams();

//   const [blogs, setBlogs] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [featuredBlogs, setFeaturedBlogs] = useState([]);
//   const [search, setSearch] = useState(searchParams.get("search") || "");

//   const category = searchParams.get("category") || "";
//   const searchQuery = searchParams.get("search") || "";

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const query = new URLSearchParams();

//         if (searchQuery) query.append("search", searchQuery);
//         if (category) query.append("category", category);

//         const [blogsRes, categoriesRes, featuredRes] = await Promise.all([
//           apiGet(`/blog/${query.toString() ? `?${query.toString()}` : ""}`),
//           apiGet("/blog/categories/"),
//           apiGet("/blog/?featured=1"),
//         ]);

//         setBlogs(Array.isArray(blogsRes) ? blogsRes : []);
//         setCategories(Array.isArray(categoriesRes) ? categoriesRes : []);
//         setFeaturedBlogs(Array.isArray(featuredRes) ? featuredRes.slice(0, 5) : []);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     loadData();
//   }, [category, searchQuery]);

//   return (
//     <section className="section-blog-list">
//       <div className="tf-container">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="left">
//               <div className="box-title">
//                 <h2>Blog List</h2>
//               </div>

//               <div className="wrap-blog-list">
//                 {blogs.length > 0 ? (
//                   blogs.map((post) => (
//                     <div key={post.id} className="blog-article-item style-row hover-img">
//                       <div className="article-thumb image-wrap">
//                         <Image
//                           className="lazyload"
//                           alt={post.title}
//                           width={1260}
//                           height={710}
//                           src={post.image || "/images/blog/blog-1.jpg"}
//                         />
//                       </div>

//                       <div className="article-content">
//                         <div className="time">
//                           <div className="icons">
//                             <i className="icon-clock" />
//                           </div>
//                           <p className="fw-5">{formatDate(post.published_at || post.created_at)}</p>
//                         </div>

//                         <h4 className="title">
//                           <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
//                         </h4>

//                         <p className="description text-1">{post.short_description}</p>

//                         <Link href={`/blog-details/${post.slug}`} className="tf-btn-link">
//                           <span>Read More</span>
//                           <i className="icon-circle-arrow" />
//                         </Link>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No blogs found.</p>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4">
//             <div className="tf-sidebar">
//               <div className="sidebar-search sidebar-item">
//                 <h4 className="sidebar-title">Search Blog</h4>
//                 <form
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     const url = search.trim()
//                       ? `/blog-list?search=${encodeURIComponent(search.trim())}`
//                       : "/blog-list";
//                     window.location.href = url;
//                   }}
//                   className="form-search"
//                 >
//                   <fieldset>
//                     <input
//                       type="text"
//                       placeholder="Search"
//                       value={search}
//                       onChange={(e) => setSearch(e.target.value)}
//                     />
//                   </fieldset>
//                   <div className="button-submit">
//                     <button type="submit">
//                       <i className="icon-MagnifyingGlass" />
//                     </button>
//                   </div>
//                 </form>
//               </div>

//               <div className="sidebar-item sidebar-categories">
//                 <h4 className="sidebar-title">Categories</h4>
//                 <ul className="list-categories">
//                   {categories.map((item) => (
//                     <li className="flex items-center justify-between" key={item.id}>
//                       <Link href={`/blog-list?category=${item.slug}`} className="text-1 lh-20 fw-5">
//                         {item.name}
//                       </Link>
//                       <div className="number">({item.posts_count})</div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="sidebar-item sidebar-featured pb-36">
//                 <h4 className="sidebar-title">Featured Posts</h4>
//                 <ul>
//                   {featuredBlogs.map((item) => (
//                     <li key={item.id} className="box-listings hover-img">
//                       <div className="image-wrap">
//                         <Image
//                           className="lazyload"
//                           alt={item.title}
//                           width={224}
//                           height={148}
//                           src={item.image || "/images/blog/blog-1.jpg"}
//                         />
//                       </div>
//                       <div className="content">
//                         <div className="text-1 title fw-5">
//                           <Link href={`/blog-details/${item.slug}`}>{item.title}</Link>
//                         </div>
//                         <p>{formatDate(item.published_at || item.created_at)}</p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="sidebar-item sidebar-tags">
//                 <h4 className="sidebar-title mb-18">Popular Tags</h4>
//                 <ul className="tags-list">
//                   <li><span className="tags-item">Property</span></li>
//                   <li><span className="tags-item">Office</span></li>
//                   <li><span className="tags-item">Finance</span></li>
//                   <li><span className="tags-item">Legal</span></li>
//                   <li><span className="tags-item">Market</span></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { apiGet } from "../lib/api";
import { useSearchParams } from "next/navigation";

function formatDate(date) {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return date;
  }
}

export default function Blogs1() {
  const searchParams = useSearchParams();

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [userLocation, setUserLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState("idle");

  const category = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const loadData = async () => {
      try {
        const query = new URLSearchParams();

        if (searchQuery) query.append("search", searchQuery);
        if (category) query.append("category", category);

        const [blogsRes, categoriesRes, featuredRes] = await Promise.all([
          apiGet(`/blog/${query.toString() ? `?${query.toString()}` : ""}`),
          apiGet("/blog/categories/"),
          apiGet("/blog/?featured=1"),
        ]);

        setBlogs(Array.isArray(blogsRes) ? blogsRes : []);
        setCategories(Array.isArray(categoriesRes) ? categoriesRes : []);
        setFeaturedBlogs(Array.isArray(featuredRes) ? featuredRes.slice(0, 5) : []);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, [category, searchQuery]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!navigator.geolocation) {
      setLocationStatus("not-supported");
      return;
    }

    setLocationStatus("requesting");

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
        setLocationStatus("allowed");
      },
      (error) => {
        console.error("Location permission error:", error);
        setLocationStatus("denied");
        setUserLocation(null);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  const mapData = useMemo(() => {
    if (!userLocation) return null;

    const lat = userLocation.lat;
    const lng = userLocation.lng;

    return {
      mapSrc: `https://maps.google.com/maps?q=${lat},${lng}&z=18&t=m&output=embed`,
      openUrl: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
    };
  }, [userLocation]);

  return (
    <>
      <section className="section-blog-list">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left">
                <div className="box-title">
                  <h2>Blog List</h2>
                </div>

                <div className="wrap-blog-list">
                  {blogs.length > 0 ? (
                    blogs.map((post) => (
                      <div key={post.id} className="blog-article-item style-row hover-img">
                        <div className="article-thumb image-wrap">
                          <Image
                            className="lazyload"
                            alt={post.title}
                            width={1260}
                            height={710}
                            src={post.image || "/images/blog/blog-1.jpg"}
                          />
                        </div>

                        <div className="article-content">
                          <div className="time">
                            <div className="icons">
                              <i className="icon-clock" />
                            </div>
                            <p className="fw-5">
                              {formatDate(post.published_at || post.created_at)}
                            </p>
                          </div>

                          <h4 className="title">
                            <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
                          </h4>

                          <p className="description text-1">{post.short_description}</p>

                          <Link href={`/blog-details/${post.slug}`} className="tf-btn-link">
                            <span>Read More</span>
                            <i className="icon-circle-arrow" />
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No blogs found.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="tf-sidebar">
                <div className="sidebar-search sidebar-item">
                  <h4 className="sidebar-title">Search Blog</h4>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const url = search.trim()
                        ? `/blog-list?search=${encodeURIComponent(search.trim())}`
                        : "/blog-list";
                      window.location.href = url;
                    }}
                    className="form-search"
                  >
                    <fieldset>
                      <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </fieldset>

                    <div className="button-submit">
                      <button type="submit">
                        <i className="icon-MagnifyingGlass" />
                      </button>
                    </div>
                  </form>
                </div>

                <div className="sidebar-item blog-map-card">
                  <div className="blog-map-content">
                    <span>Live Location</span>
                    <h4 className="sidebar-title">Your Current Location</h4>
                    <p>
                      {locationStatus === "requesting" &&
                        "Please allow location permission to show your current location."}
                      {locationStatus === "allowed" &&
                        "This map is showing your current website visit location."}
                      {locationStatus === "denied" &&
                        "Location permission denied. Please allow location permission from browser settings."}
                      {locationStatus === "not-supported" &&
                        "Your browser does not support live location."}
                    </p>
                  </div>

                  <div className="blog-map-box">
                    {mapData ? (
                      <iframe
                        title="Visitor Current Location"
                        src={mapData.mapSrc}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    ) : (
                      <div className="location-placeholder">
                        <i className="icon-location" />
                        <strong>Waiting for your current location</strong>
                        <span>Allow browser location permission to show map here.</span>
                      </div>
                    )}
                  </div>

                  <div className="blog-map-footer">
                    {mapData ? (
                      <a href={mapData.openUrl} target="_blank" rel="noreferrer">
                        Open My Current Location
                      </a>
                    ) : (
                      <span>Map will appear after location permission is allowed.</span>
                    )}
                  </div>
                </div>

                <div className="sidebar-item sidebar-categories">
                  <h4 className="sidebar-title">Categories</h4>
                  <ul className="list-categories">
                    {categories.map((item) => (
                      <li className="flex items-center justify-between" key={item.id}>
                        <Link href={`/blog-list?category=${item.slug}`} className="text-1 lh-20 fw-5">
                          {item.name}
                        </Link>
                        <div className="number">({item.posts_count})</div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-item sidebar-featured pb-36">
                  <h4 className="sidebar-title">Featured Posts</h4>
                  <ul>
                    {featuredBlogs.map((item) => (
                      <li key={item.id} className="box-listings hover-img">
                        <div className="image-wrap">
                          <Image
                            className="lazyload"
                            alt={item.title}
                            width={224}
                            height={148}
                            src={item.image || "/images/blog/blog-1.jpg"}
                          />
                        </div>

                        <div className="content">
                          <div className="text-1 title fw-5">
                            <Link href={`/blog-details/${item.slug}`}>{item.title}</Link>
                          </div>
                          <p>{formatDate(item.published_at || item.created_at)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-item sidebar-tags">
                  <h4 className="sidebar-title mb-18">Popular Tags</h4>
                  <ul className="tags-list">
                    <li><span className="tags-item">Property</span></li>
                    <li><span className="tags-item">Office</span></li>
                    <li><span className="tags-item">Finance</span></li>
                    <li><span className="tags-item">Legal</span></li>
                    <li><span className="tags-item">Market</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .blog-map-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
          overflow: hidden;
          padding: 0;
        }

        .blog-map-content {
          padding: 24px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
        }

        .blog-map-content span {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: #9b7653;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .blog-map-content .sidebar-title {
          margin-bottom: 8px;
        }

        .blog-map-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #6b7280;
          margin: 0;
        }

        .blog-map-box {
          width: 100%;
          height: 380px;
          min-height: 380px;
          position: relative;
          overflow: hidden;
          background: #eef0f2;
        }

        .blog-map-box iframe {
          width: 100% !important;
          height: 100% !important;
          min-height: 380px;
          display: block;
          border: 0;
        }

        .location-placeholder {
          width: 100%;
          height: 100%;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 10px;
          padding: 24px;
          color: #6b7280;
          background: #f8fafc;
        }

        .location-placeholder i {
          font-size: 34px;
          color: #f28c52;
        }

        .location-placeholder strong {
          color: #111827;
          font-size: 15px;
          line-height: 1.4;
        }

        .location-placeholder span {
          font-size: 13px;
          line-height: 1.5;
        }

        .blog-map-footer {
          padding: 14px 18px 18px;
          background: #ffffff;
        }

        .blog-map-footer a,
        .blog-map-footer span {
          display: block;
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
          text-align: center;
        }

        .blog-map-footer a {
          background: #f28c52;
          color: #ffffff;
          text-decoration: none;
        }

        .blog-map-footer span {
          background: #fff7ed;
          color: #9a3412;
          border: 1px dashed #fdba74;
        }

        @media (max-width: 991px) {
          .blog-map-card {
            margin-top: 28px;
            border-radius: 16px;
          }

          .blog-map-content {
            padding: 22px;
          }

          .blog-map-box,
          .blog-map-box iframe,
          .location-placeholder {
            height: 340px;
            min-height: 340px;
          }
        }

        @media (max-width: 575px) {
          .blog-map-content {
            padding: 18px;
          }

          .blog-map-box,
          .blog-map-box iframe,
          .location-placeholder {
            height: 300px;
            min-height: 300px;
          }
        }
      `}</style>
    </>
  );
}