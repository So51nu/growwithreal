"use client";

import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import React, { useEffect, useMemo, useState } from "react";
import { apiGet, apiPost } from "../../lib/api";
import { getPropertyDetailHref } from "../../../utlis/propertyUrl";

function formatPrice(price) {
  const num = Number(price || 0);
  if (!num) return "Price on request";

  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  }

  if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2).replace(/\.00$/, "")} L`;
  }

  return `₹${num.toLocaleString("en-IN")}`;
}

function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function matchesCountFilter(actual, selected) {
  if (!selected) return true;

  const value = toNumber(actual);

  if (selected === "5+") return value >= 5;
  if (selected === "4+") return value >= 4;

  return value === Number(selected);
}

function getStoredUser() {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

function getResultsArray(response) {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.results)) return response.results;
  if (Array.isArray(response?.data)) return response.data;
  return [];
}

function extractImage(property) {
  const primaryImage = Array.isArray(property.images)
    ? property.images.find((img) => img.is_primary)
    : null;

  return (
    property.image ||
    property.imageSrc ||
    property.featured_image ||
    property.cover_image ||
    property.thumbnail ||
    primaryImage?.image_url ||
    primaryImage?.image ||
    property.images?.[0]?.image_url ||
    property.images?.[0]?.image ||
    "/images/home/house-1.jpg"
  );
}

function extractSellerPhone(property) {
  return (
    property.seller_phone ||
    property.phone ||
    property.contact_phone ||
    property.contact_number ||
    property.contact_seller_phone ||
    property.contact_seller?.phone ||
    property.contact_seller?.office_number ||
    property.fallback_sellers?.[0]?.phone ||
    ""
  );
}

function extractConfigurations(property) {
  if (property.configuration) return property.configuration;
  if (property.configuration_text) return property.configuration_text;

  if (property.bedrooms) {
    return `${property.bedrooms} BHK`;
  }

  if (property.property_type) return property.property_type;

  return "Configuration on request";
}

function getPropertyTitle(property) {
  return (
    property?.title ||
    property?.project_name ||
    property?.property_name ||
    property?.project_title ||
    property?.property_title ||
    property?.name ||
    ""
  );
}

function getLocationValue(property) {
  return (
    property?.short_location ||
    property?.location ||
    property?.neighborhood ||
    property?.full_address ||
    property?.address ||
    ""
  );
}

function getPropertySearchText(property) {
  return normalizeText(
    [
      property.title,
      property.project_name,
      property.property_name,
      property.project_title,
      property.property_title,
      property.name,
      property.city,
      property.city_slug,
      property.state,
      property.country,
      property.neighborhood,
      property.short_location,
      property.location,
      property.full_address,
      property.address,
      property.zip_code,
      property.developer_name,
      property.developer_slug,
      property.property_type,
      property.property_status,
      property.property_label,
      property.property_code,
    ].join(" ")
  );
}

function hasActiveFilters(filters = {}) {
  return Boolean(
    filters.keyword ||
      filters.city ||
      filters.location ||
      filters.propertyType ||
      filters.propertyStatus ||
      filters.bedrooms ||
      filters.bathrooms ||
      (Array.isArray(filters.amenities) && filters.amenities.length > 0)
  );
}

function getPropertyLocationScore(property, userGeoText) {
  if (!userGeoText) return 0;

  const propertyCity = normalizeText(property.city);
  const propertyState = normalizeText(property.state);
  const propertyNeighborhood = normalizeText(property.neighborhood);
  const propertyShortLocation = normalizeText(property.short_location);
  const propertyLocation = normalizeText(property.location);
  const propertyFullAddress = normalizeText(property.full_address);
  const propertyZipCode = normalizeText(property.zip_code);

  const userCity = normalizeText(userGeoText.city);
  const userLocality = normalizeText(userGeoText.locality);
  const userPrincipalSubdivision = normalizeText(
    userGeoText.principalSubdivision
  );
  const userPostcode = normalizeText(userGeoText.postcode);

  let score = 0;

  if (userCity && propertyCity && propertyCity === userCity) score += 100;
  if (userCity && propertyLocation.includes(userCity)) score += 80;
  if (userCity && propertyFullAddress.includes(userCity)) score += 80;
  if (userCity && propertyShortLocation.includes(userCity)) score += 70;

  if (userLocality && propertyNeighborhood.includes(userLocality)) score += 95;
  if (userLocality && propertyShortLocation.includes(userLocality)) score += 95;
  if (userLocality && propertyLocation.includes(userLocality)) score += 90;
  if (userLocality && propertyFullAddress.includes(userLocality)) score += 90;

  if (
    userPrincipalSubdivision &&
    propertyState &&
    propertyState === userPrincipalSubdivision
  ) {
    score += 40;
  }

  if (userPostcode && propertyZipCode && propertyZipCode === userPostcode) {
    score += 120;
  }

  return score;
}

function openLoginModal() {
  if (typeof window === "undefined") return;

  const trigger = document.querySelector(
    '[href="#modalLogin"], [data-bs-target="#modalLogin"]'
  );

  if (trigger) {
    trigger.click();
    return;
  }

  const modalEl = document.getElementById("modalLogin");

  if (modalEl && window.bootstrap?.Modal) {
    const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function SaveIcon({ active = false }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill={active ? "#ff8c5a" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 4.75C7 3.784 7.784 3 8.75 3H15.25C16.216 3 17 3.784 17 4.75V20.25L12 17.25L7 20.25V4.75Z"
        stroke={active ? "#ff8c5a" : "#ffffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ active = false }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={active ? "#ff8c5a" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.6417 1.54871 7.04097 1.54871 8.5C1.54871 9.95904 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.9379 22.4518 9.22249 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12076 20.84 4.61Z"
        stroke={active ? "#ff8c5a" : "#ffffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.271 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30512 3.09849 2.44756 2.85669 2.63477 2.65162C2.82198 2.44655 3.04986 2.28271 3.30379 2.17052C3.55772 2.05833 3.83215 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36812 9.36 8.64L8.09 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const actionBtnStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "rgba(31,41,55,0.72)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
  padding: 0,
};

const cardTextColor = "#111827";
const cardMutedColor = "#6b7280";

export default function Properties({ filters = {} }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [userGeoText, setUserGeoText] = useState(null);
  const [locationStatus, setLocationStatus] = useState("idle");

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    visit_date: "",
    visit_time: "",
    message: "",
  });

  const user = getStoredUser();

  const requireLoginForProperty = (property) => {
    const currentUser = getStoredUser();
    const detailHref = getPropertyDetailHref(property);

    if (!currentUser?.id) {
      localStorage.setItem("pendingPropertyRedirect", detailHref);
      openLoginModal();
      return false;
    }

    return true;
  };

  const handleProtectedDetailClick = (event, property) => {
    if (!requireLoginForProperty(property)) {
      event.preventDefault();
      return;
    }

    addView(property.id);
  };

  const loadProperties = async () => {
    try {
      setLoading(true);

      const res = await apiGet("/admindashboard/properties/");
      const list = getResultsArray(res);

      const visibleProperties = list.filter((property) => {
        const postStatus = normalizeText(property?.post_status);
        const isApproved = property?.is_approved === true;

        return postStatus === "publish" && isApproved;
      });

      let favoriteIds = [];
      let likedIds = [];

      if (user?.id) {
        try {
          const [favRes, likedRes] = await Promise.all([
            apiGet(`/admindashboard/customer/${user.id}/favorite-properties/`),
            apiGet(`/admindashboard/customer/${user.id}/liked-videos/`),
          ]);

          const favList = getResultsArray(favRes);
          const likedList = getResultsArray(likedRes);

          favoriteIds = favList.map((item) => item.id);
          likedIds = likedList.map((item) => item.id);
        } catch (error) {
          console.error("Favorite/liked fetch error:", error);
        }
      }

      const merged = visibleProperties.map((property) => ({
        ...property,
        title: getPropertyTitle(property),
        imageSrc: extractImage(property),
        seller_phone: extractSellerPhone(property),
        configuration_text: extractConfigurations(property),
        is_favorite: property.is_favorite || favoriteIds.includes(property.id),
        is_liked: likedIds.includes(property.id),
      }));

      setProperties(merged);
    } catch (error) {
      console.error("Properties fetch error:", error);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  const detectUserLocation = () => {
    if (typeof window === "undefined") return;

    if (!navigator.geolocation) {
      setLocationStatus("not-supported");
      return;
    }

    setLocationStatus("requesting");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );

          const data = await response.json();

          const geoText = {
            city:
              data.city ||
              data.locality ||
              data.localityInfo?.administrative?.[2]?.name ||
              "",
            locality:
              data.locality ||
              data.localityInfo?.informative?.[0]?.name ||
              "",
            principalSubdivision: data.principalSubdivision || "",
            postcode: data.postcode || "",
            countryName: data.countryName || "",
          };

          setUserGeoText(geoText);
          setLocationStatus("detected");
        } catch (error) {
          console.error("Reverse geocode error:", error);
          setLocationStatus("failed");
        }
      },
      (error) => {
        console.error("Location permission error:", error);
        setLocationStatus("denied");
      },
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 1000 * 60 * 30,
      }
    );
  };

  useEffect(() => {
    loadProperties();
  }, []);

  useEffect(() => {
    detectUserLocation();
  }, []);

  const toggleFavorite = async (id) => {
    if (!user?.id) {
      localStorage.setItem("pendingPropertyRedirect", window.location.pathname);
      openLoginModal();
      return;
    }

    try {
      const res = await apiPost("/admindashboard/customer/toggle-favorite/", {
        user_id: user.id,
        property_id: id,
      });

      setProperties((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                is_favorite:
                  typeof res?.is_favorite === "boolean"
                    ? res.is_favorite
                    : !item.is_favorite,
              }
            : item
        )
      );
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to update favorite.");
    }
  };

  const toggleLiked = async (id) => {
    if (!user?.id) {
      localStorage.setItem("pendingPropertyRedirect", window.location.pathname);
      openLoginModal();
      return;
    }

    try {
      const res = await apiPost("/admindashboard/customer/like-video/", {
        user_id: user.id,
        property_id: id,
      });

      setProperties((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                is_liked:
                  typeof res?.liked === "boolean" ? res.liked : !item.is_liked,
              }
            : item
        )
      );
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to update liked item.");
    }
  };

  const addView = async (propertyId) => {
    const currentUser = getStoredUser();
    if (!currentUser?.id) return;

    try {
      await apiPost("/admindashboard/customer/add-view/", {
        user_id: currentUser.id,
        property_id: propertyId,
      });
    } catch (error) {
      console.error("View tracking error:", error);
    }
  };

  const openBookingModal = (property) => {
    const currentUser = getStoredUser();

    if (!currentUser?.id) {
      localStorage.setItem(
        "pendingPropertyRedirect",
        getPropertyDetailHref(property)
      );
      openLoginModal();
      return;
    }

    setSelectedProperty(property);
    setBookingForm({
      name:
        currentUser?.full_name ||
        currentUser?.username ||
        currentUser?.name ||
        "",
      phone: currentUser?.phone || "",
      visit_date: "",
      visit_time: "",
      message: `Interested in site visit for ${
        property?.title || "this property"
      }`,
    });
    setMessage("");
    setBookingOpen(true);
  };

  const closeBookingModal = () => {
    setBookingOpen(false);
    setSelectedProperty(null);
    setMessage("");
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;

    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitBooking = async (e) => {
    e.preventDefault();

    const currentUser = getStoredUser();
    if (!currentUser?.id || !selectedProperty?.id) return;

    try {
      setBookingLoading(true);
      setMessage("");

      await apiPost("/admindashboard/customer/book-visit/", {
        user: currentUser.id,
        property: selectedProperty.id,
        name: bookingForm.name,
        phone: bookingForm.phone,
        visit_date: bookingForm.visit_date,
        visit_time: bookingForm.visit_time,
        message: bookingForm.message,
        status: "upcoming",
      });

      setMessage("Visit booked successfully.");

      setTimeout(() => {
        closeBookingModal();
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to book visit.");
    } finally {
      setBookingLoading(false);
    }
  };

  const filteredProperties = useMemo(() => {
    let data = [...properties];

    data = data.filter((property) => {
      const locationValue = getLocationValue(property);
      const searchableText = getPropertySearchText(property);

      const keywordMatch =
        !filters.keyword ||
        searchableText.includes(normalizeText(filters.keyword));

      const cityMatch =
        !filters.city ||
        normalizeText(property.city) === normalizeText(filters.city) ||
        normalizeText(property.city_slug) === normalizeText(filters.city);

      const locationMatch =
        !filters.location ||
        normalizeText(locationValue).includes(normalizeText(filters.location));

      const typeMatch =
        !filters.propertyType ||
        normalizeText(property.property_type) ===
          normalizeText(filters.propertyType);

      const statusMatch =
        !filters.propertyStatus ||
        normalizeText(property.property_status) ===
          normalizeText(filters.propertyStatus);

      const bedroomsMatch = matchesCountFilter(
        property.bedrooms,
        filters.bedrooms
      );

      const bathroomsMatch = matchesCountFilter(
        property.bathrooms,
        filters.bathrooms
      );

      const price = toNumber(property.price);
      const area = toNumber(property.carpet_area || property.size_sqft);

      const priceRange = filters.priceRange || [0, 500000000];
      const areaRange = filters.areaRange || [0, 500000];

      const priceMatch = price >= priceRange[0] && price <= priceRange[1];
      const areaMatch = area >= areaRange[0] && area <= areaRange[1];

      const projectAmenities = Array.isArray(property.amenities)
        ? property.amenities
        : [];

      const amenitiesMatch =
        !filters.amenities ||
        filters.amenities.length === 0 ||
        filters.amenities.every((item) => projectAmenities.includes(item));

      return (
        keywordMatch &&
        cityMatch &&
        locationMatch &&
        typeMatch &&
        statusMatch &&
        bedroomsMatch &&
        bathroomsMatch &&
        priceMatch &&
        areaMatch &&
        amenitiesMatch
      );
    });

    const activeFilters = hasActiveFilters(filters);

    if (!activeFilters && userGeoText) {
      data.sort((a, b) => {
        const scoreA = getPropertyLocationScore(a, userGeoText);
        const scoreB = getPropertyLocationScore(b, userGeoText);

        if (scoreB !== scoreA) return scoreB - scoreA;

        return (
          new Date(b.posting_date || 0).getTime() -
          new Date(a.posting_date || 0).getTime()
        );
      });
    } else {
      switch (filters.sortBy) {
        case "Oldest":
          data.sort(
            (a, b) =>
              new Date(a.posting_date || 0).getTime() -
              new Date(b.posting_date || 0).getTime()
          );
          break;

        case "Price Low to High":
          data.sort((a, b) => toNumber(a.price) - toNumber(b.price));
          break;

        case "Price High to Low":
          data.sort((a, b) => toNumber(b.price) - toNumber(a.price));
          break;

        case "Area Low to High":
          data.sort(
            (a, b) =>
              toNumber(a.carpet_area || a.size_sqft) -
              toNumber(b.carpet_area || b.size_sqft)
          );
          break;

        case "Area High to Low":
          data.sort(
            (a, b) =>
              toNumber(b.carpet_area || b.size_sqft) -
              toNumber(a.carpet_area || a.size_sqft)
          );
          break;

        case "Newest":
        default:
          data.sort(
            (a, b) =>
              new Date(b.posting_date || 0).getTime() -
              new Date(a.posting_date || 0).getTime()
          );
          break;
      }
    }

    return data;
  }, [properties, filters, userGeoText]);

  const locationMatchedCount = useMemo(() => {
    if (!userGeoText || hasActiveFilters(filters)) return 0;

    return properties.filter(
      (property) => getPropertyLocationScore(property, userGeoText) > 0
    ).length;
  }, [properties, userGeoText, filters]);

  const relatedProjects = useMemo(() => {
    if (filteredProperties.length > 0) {
      const selected = filteredProperties[0];

      const related = properties.filter((item) => {
        if (item.id === selected.id) return false;

        const sameLocation =
          selected.location &&
          item.location &&
          normalizeText(item.location) === normalizeText(selected.location);

        const sameShortLocation =
          selected.short_location &&
          item.short_location &&
          normalizeText(item.short_location) ===
            normalizeText(selected.short_location);

        const sameCity =
          selected.city &&
          item.city &&
          normalizeText(item.city) === normalizeText(selected.city);

        const sameDeveloper =
          selected.developer_slug &&
          item.developer_slug &&
          selected.developer_slug === item.developer_slug;

        const sameType =
          selected.property_type &&
          item.property_type &&
          selected.property_type === item.property_type;

        return (
          sameLocation ||
          sameShortLocation ||
          sameCity ||
          sameDeveloper ||
          sameType
        );
      });

      return related.slice(0, 6);
    }

    const fallback = [...properties].sort(
      (a, b) =>
        new Date(b.posting_date || 0).getTime() -
        new Date(a.posting_date || 0).getTime()
    );

    return fallback.slice(0, 6);
  }, [filteredProperties, properties]);

  const renderCard = (property) => {
    const sellerPhone = extractSellerPhone(property);
    const detailHref = getPropertyDetailHref(property);

    return (
      <div className="box-house hover-img growl-property-card">
        <div className="image-wrap growl-property-image-wrap">
          <Link
            href={detailHref}
            onClick={(event) => handleProtectedDetailClick(event, property)}
          >
            <Image
              className="lazyload growl-property-image"
              alt={property.title || "property"}
              src={property.imageSrc || "/images/home/house-1.jpg"}
              width={600}
              height={401}
            />
          </Link>

          <ul className="box-tag flex gap-8 growl-property-tags">
            {property.property_label ? (
              <li className="flat-tag text-4 bg-main fw-6 text_white">
                {property.property_label}
              </li>
            ) : null}

            <li className="flat-tag text-4 bg-3 fw-6 text_white">
              {property.property_status === "for-rent"
                ? "For Rent"
                : "For Sale"}
            </li>
          </ul>

          <div className="growl-property-actions">
            <button
              type="button"
              onClick={() => toggleFavorite(property.id)}
              style={actionBtnStyle}
              title="Favorite"
              aria-label="Favorite property"
              className="growl-action-btn"
            >
              <SaveIcon active={property.is_favorite} />
            </button>

            <button
              type="button"
              onClick={() => toggleLiked(property.id)}
              style={actionBtnStyle}
              title="Like"
              aria-label="Like property"
              className="growl-action-btn"
            >
              <HeartIcon active={property.is_liked} />
            </button>

            {sellerPhone ? (
              <a
                href={`tel:${sellerPhone}`}
                style={actionBtnStyle}
                title="Call"
                aria-label="Call seller"
                className="growl-action-btn"
              >
                <PhoneIcon />
              </a>
            ) : null}
          </div>
        </div>

        <div className="content growl-property-content">
          <h5 className="title growl-property-title">
            <Link
              href={detailHref}
              onClick={(event) => handleProtectedDetailClick(event, property)}
              style={{
                color: cardTextColor,
                textDecoration: "none",
              }}
            >
              {property.title || "Untitled Property"}
            </Link>
          </h5>

          <p className="location text-1 line-clamp-1 growl-property-location">
            <i
              className="icon-location"
              style={{
                color: cardMutedColor,
              }}
            />
            {property.short_location ||
              property.location ||
              property.neighborhood ||
              property.full_address ||
              "Location on request"}
          </p>

          <div className="growl-property-config">
            <strong style={{ color: "#4b5563" }}>Configuration:</strong>{" "}
            <span style={{ color: cardTextColor }}>
              {property.configuration_text || "Configuration on request"}
            </span>
          </div>

          <ul className="meta-list flex growl-property-meta">
            <li className="text-1 flex" style={{ color: cardMutedColor }}>
              <span style={{ color: cardTextColor, marginRight: "4px" }}>
                {property.bedrooms || 0}
              </span>
              Beds
            </li>

            <li className="text-1 flex" style={{ color: cardMutedColor }}>
              <span style={{ color: cardTextColor, marginRight: "4px" }}>
                {property.bathrooms || 0}
              </span>
              Baths
            </li>

            <li className="text-1 flex" style={{ color: cardMutedColor }}>
              <span style={{ color: cardTextColor, marginRight: "4px" }}>
                {property.carpet_area || property.size_sqft || 0}
              </span>
              Sqft
            </li>
          </ul>

          <div className="bot growl-property-bottom">
            <h5 className="price growl-property-price">
              {formatPrice(property.price)}
            </h5>

            <div className="wrap-btn growl-property-buttons">
              <Link
                href={detailHref}
                className="tf-btn style-border pd-4 growl-property-details-btn"
                onClick={(event) => handleProtectedDetailClick(event, property)}
              >
                Details
              </Link>

              <button
                type="button"
                className="tf-btn pd-4 growl-property-book-btn"
                onClick={() => openBookingModal(property)}
              >
                Book Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const locationMessage = useMemo(() => {
    if (hasActiveFilters(filters)) return null;

    if (locationStatus === "requesting") {
      return "Detecting your location to show nearby projects...";
    }

    if (locationStatus === "detected" && userGeoText) {
      const place =
        userGeoText.locality ||
        userGeoText.city ||
        userGeoText.principalSubdivision ||
        "";

      if (locationMatchedCount > 0 && place) {
        return `Showing projects around ${place} first.`;
      }

      if (place) {
        return `No exact project found around ${place}, showing latest projects.`;
      }
    }

    if (locationStatus === "denied") {
      return "Location permission not allowed. Showing latest projects.";
    }

    return null;
  }, [locationStatus, userGeoText, locationMatchedCount, filters]);

  return (
    <>
      <style jsx global>{`
        .growl-property-card {
          border-radius: 22px;
          overflow: hidden;
          background: #ffffff;
          color: #111827;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .growl-property-image-wrap {
          position: relative;
          overflow: hidden;
        }

        .growl-property-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        .growl-property-tags {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          max-width: calc(100% - 170px);
          flex-wrap: wrap;
        }

        .growl-property-tags .flat-tag {
          border-radius: 20px;
          padding: 7px 14px;
          line-height: 1;
        }

        .growl-property-actions {
          position: absolute;
          right: 16px;
          top: 16px;
          display: flex;
          gap: 12px;
          z-index: 5;
        }

        .growl-action-btn {
          flex: 0 0 auto;
          transition: all 0.25s ease;
        }

        .growl-action-btn:hover {
          transform: translateY(-2px);
          background: rgba(17, 24, 39, 0.86) !important;
        }

        .growl-action-btn svg {
          display: block;
          flex-shrink: 0;
        }

        .growl-property-content {
          background: #ffffff;
          color: #111827;
          padding: 28px 28px 26px;
        }

        .growl-property-title {
          margin-bottom: 12px;
          color: #111827;
          font-weight: 700;
        }

        .growl-property-location {
          color: #6b7280;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .growl-property-config {
          background: #f4efec;
          border-radius: 12px;
          padding: 10px 14px;
          margin-bottom: 12px;
          font-size: 14px;
          color: #111827;
        }

        .growl-property-meta {
          color: #6b7280;
          margin-bottom: 18px;
          gap: 12px;
          flex-wrap: wrap;
        }

        .growl-property-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          border-top: 1px solid #eeeeee;
          padding-top: 16px;
        }

        .growl-property-price {
          margin: 0;
          color: #f28c52;
          font-weight: 700;
          white-space: nowrap;
        }

        .growl-property-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .growl-property-details-btn {
          color: #ff6a00 !important;
          border: 1px solid #ff6a00 !important;
          background: #ffffff !important;
          text-decoration: none !important;
          min-height: 40px;
          padding: 10px 14px !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          white-space: nowrap;
        }

        .growl-property-book-btn {
          background: #f28c52 !important;
          color: #ffffff !important;
          border: 1px solid #f28c52 !important;
          min-height: 40px;
          padding: 10px 18px !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          white-space: nowrap;
        }

        #modalLogin {
          z-index: 99999 !important;
        }

        #modalLogin .modal-dialog {
          width: 100% !important;
          max-width: 380px !important;
          margin: 16px auto !important;
          padding: 0 14px !important;
        }

        #modalLogin .modal-content {
          width: 100% !important;
          max-width: 100% !important;
          border-radius: 24px !important;
          overflow: hidden !important;
          background: #ffffff !important;
          box-sizing: border-box !important;
        }

        #modalLogin .flat-account {
          width: 100% !important;
          display: block !important;
          min-height: auto !important;
          overflow: hidden !important;
          background: #ffffff !important;
        }

        #modalLogin .banner-account {
          display: none !important;
        }

        #modalLogin .form-account {
          width: 100% !important;
          max-width: 100% !important;
          padding: 30px 18px 28px !important;
          background: #ffffff !important;
          box-sizing: border-box !important;
        }

        #modalLogin .title-box {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 12px !important;
          margin-bottom: 24px !important;
        }

        #modalLogin .title-box h4 {
          font-size: 21px !important;
          line-height: 1.25 !important;
          margin: 0 !important;
          color: #2f3137 !important;
          font-weight: 800 !important;
        }

        #modalLogin .close-modal,
        #modalLogin .icon-close,
        #modalLogin .btn-close {
          width: 36px !important;
          height: 36px !important;
          min-width: 36px !important;
          border-radius: 50% !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          color: #6b7280 !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        #modalLogin .box,
        #modalLogin .box-fieldset,
        #modalLogin .ip-field {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }

        #modalLogin .box-fieldset {
          margin-bottom: 16px !important;
        }

        #modalLogin label {
          display: block !important;
          margin-bottom: 8px !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          color: #374151 !important;
        }

        #modalLogin input,
        #modalLogin select,
        #modalLogin .form-control {
          width: 100% !important;
          max-width: 100% !important;
          height: 46px !important;
          min-height: 46px !important;
          border: 1px solid #d1d5db !important;
          border-radius: 10px !important;
          background-color: #ffffff !important;
          color: #111827 !important;
          padding: 10px 12px !important;
          font-size: 13px !important;
          line-height: 1.2 !important;
          box-sizing: border-box !important;
          outline: none !important;
          box-shadow: none !important;
        }

        #modalLogin select {
          appearance: auto !important;
          -webkit-appearance: auto !important;
          cursor: pointer !important;
        }

        #modalLogin input:focus,
        #modalLogin select:focus,
        #modalLogin .form-control:focus {
          border-color: #f28c52 !important;
          box-shadow: 0 0 0 3px rgba(242, 140, 82, 0.16) !important;
        }

        #modalLogin .box-btn {
          margin-top: 22px !important;
        }

        #modalLogin .tf-btn,
        #modalLogin button[type="submit"] {
          width: 100% !important;
          max-width: 100% !important;
          height: 46px !important;
          min-height: 46px !important;
          border-radius: 13px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: #2f3137 !important;
          color: #ffffff !important;
          font-size: 14px !important;
          font-weight: 800 !important;
          border: 0 !important;
          padding: 0 16px !important;
          box-sizing: border-box !important;
        }

        #modalLogin .tf-btn.style-border {
          background: #ffffff !important;
          color: #2f3137 !important;
          border: 1px solid #d1d5db !important;
        }

        #modalLogin .caption-2 {
          margin-top: 22px !important;
          margin-bottom: 0 !important;
          color: #6b7280 !important;
          font-size: 13px !important;
          text-align: center !important;
          line-height: 1.5 !important;
        }

        #modalLogin .login-message {
          margin-top: 10px !important;
          color: #ff6b35 !important;
          font-size: 14px !important;
          line-height: 1.4 !important;
        }

        @media (min-width: 768px) {
          #modalLogin .modal-dialog {
            max-width: 760px !important;
          }

          #modalLogin .flat-account {
            display: grid !important;
            grid-template-columns: 1fr 1.05fr !important;
            min-height: 500px !important;
          }

          #modalLogin .banner-account {
            display: block !important;
            min-height: 500px !important;
            overflow: hidden !important;
            background: #111827 !important;
          }

          #modalLogin .banner-account img {
            width: 100% !important;
            height: 100% !important;
            min-height: 500px !important;
            object-fit: cover !important;
            display: block !important;
          }

          #modalLogin .form-account {
            padding: 34px 34px 30px !important;
          }
        }

        @media (max-width: 575px) {
          .growl-property-image {
            height: 230px;
          }

          .growl-property-tags {
            top: 12px;
            left: 12px;
            max-width: calc(100% - 150px);
            gap: 6px;
          }

          .growl-property-tags .flat-tag {
            font-size: 11px !important;
            padding: 6px 10px;
          }

          .growl-property-actions {
            right: 10px;
            top: 12px;
            gap: 7px;
          }

          .growl-property-actions button,
          .growl-property-actions a {
            width: 40px !important;
            height: 40px !important;
          }

          .growl-property-actions svg {
            width: 18px;
            height: 18px;
          }

          .growl-property-content {
            padding: 22px 22px 22px;
          }

          .growl-property-title {
            font-size: 18px;
            line-height: 1.35;
          }

          .growl-property-config {
            font-size: 13px;
            padding: 9px 12px;
          }

          .growl-property-meta {
            gap: 10px;
            margin-bottom: 14px;
          }

          .growl-property-bottom {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            padding-top: 14px;
          }

          .growl-property-price {
            width: 100%;
            font-size: 18px;
            line-height: 1.2;
          }

          .growl-property-buttons {
            width: 100%;
            display: grid;
            grid-template-columns: 0.9fr 1.3fr;
            gap: 8px;
          }

          .growl-property-details-btn,
          .growl-property-book-btn {
            width: 100%;
            min-height: 44px;
            padding: 10px 8px !important;
            font-size: 13px !important;
            border-radius: 12px;
          }

          #modalLogin .modal-dialog {
            max-width: 380px !important;
            margin: 14px auto !important;
            padding: 0 14px !important;
          }

          #modalLogin .modal-content {
            border-radius: 24px !important;
          }

          #modalLogin .form-account {
            padding: 28px 18px 26px !important;
          }

          #modalLogin .title-box h4 {
            font-size: 21px !important;
          }
        }

        @media (max-width: 380px) {
          .growl-property-content {
            padding: 20px 18px;
          }

          .growl-property-tags {
            max-width: calc(100% - 136px);
          }

          .growl-property-actions {
            gap: 6px;
          }

          .growl-property-actions button,
          .growl-property-actions a {
            width: 36px !important;
            height: 36px !important;
          }

          .growl-property-actions svg {
            width: 17px;
            height: 17px;
          }

          .growl-property-buttons {
            grid-template-columns: 1fr 1.25fr;
          }

          .growl-property-details-btn,
          .growl-property-book-btn {
            font-size: 12px !important;
          }

          #modalLogin .modal-dialog {
            padding: 0 10px !important;
          }

          #modalLogin .form-account {
            padding: 26px 16px 24px !important;
          }

          #modalLogin .title-box h4 {
            font-size: 20px !important;
          }
        }
      `}</style>

      <section className="section-listing tf-spacing-1">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center">
                <h2 className="title split-text effect-right">
                  <SplitTextAnimation text="Today’s Luxury Listings" />
                </h2>

                <p className="text-1 split-text split-lines-transform">
                  {loading
                    ? "Loading projects..."
                    : `Showing ${filteredProperties.length} filtered project${
                        filteredProperties.length === 1 ? "" : "s"
                      }.`}
                </p>

                {locationMessage ? (
                  <p
                    className="text-1"
                    style={{
                      marginTop: "8px",
                      color: "#f28c52",
                      fontWeight: 600,
                    }}
                  >
                    {locationMessage}
                  </p>
                ) : null}
              </div>

              <div className="tf-layout-mobile-md md-col-2 lg-col-3">
                {filteredProperties.slice(0, 9).map((property) => (
                  <div key={property.id}>{renderCard(property)}</div>
                ))}
              </div>

              {!loading && filteredProperties.length === 0 && (
                <div className="text-center mt-20">
                  <p className="text-1">
                    No exact properties found for selected filters. Showing
                    recommended projects below.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-listing tf-spacing-1 pt-0">
        <div className="tf-container">
          <div className="heading-section text-center">
            <h2 className="title">
              {filteredProperties.length > 0
                ? "Related Projects"
                : "Recommended Projects"}
            </h2>

            <p className="text-1">
              {filteredProperties.length > 0
                ? "Based on location, city, developer, and project type."
                : "We couldn’t find an exact match, so here are some relevant properties for you."}
            </p>
          </div>

          <div className="tf-layout-mobile-md md-col-2 lg-col-3">
            {relatedProjects.map((property) => (
              <div key={property.id}>{renderCard(property)}</div>
            ))}
          </div>

          {relatedProjects.length === 0 && !loading && (
            <div className="text-center mt-20">
              <p className="text-1">No related or recommended projects found.</p>
            </div>
          )}
        </div>
      </section>

      {bookingOpen && selectedProperty && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">
                  Book a Visit - {selectedProperty.title}
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={closeBookingModal}
                />
              </div>

              <form onSubmit={submitBooking}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Name</label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={bookingForm.name}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone</label>

                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={bookingForm.phone}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Visit Date</label>

                    <input
                      type="date"
                      name="visit_date"
                      className="form-control"
                      value={bookingForm.visit_date}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Visit Time</label>

                    <input
                      type="time"
                      name="visit_time"
                      className="form-control"
                      value={bookingForm.visit_time}
                      onChange={handleBookingChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>

                    <textarea
                      name="message"
                      className="form-control"
                      rows={3}
                      value={bookingForm.message}
                      onChange={handleBookingChange}
                    />
                  </div>

                  {message ? (
                    <div
                      style={{
                        color: "#ff6b35",
                        fontSize: "14px",
                        marginTop: "8px",
                      }}
                    >
                      {message}
                    </div>
                  ) : null}
                </div>

                <div
                  className="modal-footer"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "12px",
                    padding: "16px 20px 20px",
                  }}
                >
                  <button
                    type="button"
                    className="tf-btn style-border pd-4"
                    onClick={closeBookingModal}
                    style={{
                      minWidth: "130px",
                      border: "1px solid #d9d9d9",
                      background: "#fff",
                      color: "#222",
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="tf-btn pd-4"
                    disabled={bookingLoading}
                    style={{
                      minWidth: "170px",
                      background: "#f28c52",
                      color: "#fff",
                      border: "1px solid #f28c52",
                      opacity: bookingLoading ? 0.7 : 1,
                    }}
                  >
                    {bookingLoading ? "Booking..." : "Confirm Visit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}