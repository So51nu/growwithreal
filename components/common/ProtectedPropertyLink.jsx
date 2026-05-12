"use client";

import Link from "next/link";
import React, { useEffect } from "react";

function getStoredUser() {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(localStorage.getItem("userData") || "null");
  } catch {
    return null;
  }
}

function injectProtectedLoginStyles() {
  if (typeof document === "undefined") return;

  const styleId = "protected-property-login-style";

  if (document.getElementById(styleId)) return;

  const style = document.createElement("style");
  style.id = styleId;

  style.innerHTML = `
    body.login-over-city-modal #modalLogin {
      z-index: 2147483646 !important;
    }

    body.login-over-city-modal .modal-backdrop {
      z-index: 2147483645 !important;
    }

    body.login-over-city-modal .city-project-modal {
      z-index: 2147483000 !important;
    }

    body.login-over-city-modal #modalLogin .modal-dialog {
      position: relative;
      z-index: 2147483647 !important;
    }

    body.login-over-city-modal #modalLogin,
    body.login-over-city-modal #modalLogin * {
      pointer-events: auto !important;
      visibility: visible !important;
      opacity: 1 !important;
    }

    body.login-over-city-modal.modal-open {
      overflow: hidden !important;
    }
  `;

  document.head.appendChild(style);
}

function openLoginModal() {
  if (typeof window === "undefined") return;

  injectProtectedLoginStyles();

  document.body.classList.add("login-over-city-modal");

  const modalEl = document.getElementById("modalLogin");

  if (modalEl && window.bootstrap?.Modal) {
    const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();

    modalEl.addEventListener(
      "hidden.bs.modal",
      () => {
        document.body.classList.remove("login-over-city-modal");
      },
      { once: true }
    );

    return;
  }

  const trigger = document.querySelector(
    '[href="#modalLogin"], [data-bs-toggle="modal"][data-bs-target="#modalLogin"], [data-bs-target="#modalLogin"]'
  );

  if (trigger) {
    trigger.click();

    const modalElAfterClick = document.getElementById("modalLogin");

    if (modalElAfterClick) {
      modalElAfterClick.addEventListener(
        "hidden.bs.modal",
        () => {
          document.body.classList.remove("login-over-city-modal");
        },
        { once: true }
      );
    }
  }
}

export function isUserLoggedIn() {
  const user = getStoredUser();
  return Boolean(user?.id);
}

export function requirePropertyLogin(redirectUrl) {
  if (typeof window === "undefined") return false;

  const user = getStoredUser();

  if (user?.id) {
    return true;
  }

  localStorage.setItem("pendingPropertyRedirect", redirectUrl);
  openLoginModal();

  return false;
}

export default function ProtectedPropertyLink({
  href,
  children,
  className = "",
  style = {},
  onAllowedClick = null,
  onBlockedClick = null,
  ...props
}) {
  useEffect(() => {
    injectProtectedLoginStyles();
  }, []);

  const handleClick = (event) => {
    const allowed = requirePropertyLogin(href);

    if (!allowed) {
      event.preventDefault();

      if (onBlockedClick) {
        onBlockedClick(event);
      }

      return;
    }

    if (onAllowedClick) {
      onAllowedClick(event);
    }
  };

  return (
    <Link
      href={href}
      className={className}
      style={style}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}