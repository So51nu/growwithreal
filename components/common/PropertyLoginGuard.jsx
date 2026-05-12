"use client";

import React, { useEffect, useState } from "react";
import { isUserLoggedIn, requirePropertyLogin } from "@/components/common/ProtectedPropertyLink";

export default function PropertyLoginGuard({ children }) {
  const [allowed, setAllowed] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isUserLoggedIn()) {
      setAllowed(true);
      setChecked(true);
      return;
    }

    const currentPath = window.location.pathname + window.location.search;

    requirePropertyLogin(currentPath);

    setAllowed(false);
    setChecked(true);
  }, []);

  if (!checked) {
    return null;
  }

  if (!allowed) {
    return (
      <div className="tf-container" style={{ padding: "80px 0" }}>
        <h3>Please login to view property details.</h3>
        <p>Login popup is open. After login, this property page will be shown.</p>
      </div>
    );
  }

  return children;
}