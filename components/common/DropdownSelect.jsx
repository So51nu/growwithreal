"use client";

import React from "react";

export default function DropdownSelect({
  onChange = () => {},
  options = [],
  selectedValue = "",
  placeholder = "Select",
  addtionalParentClass = "",
}) {
  return (
    <div className={`box-select ${addtionalParentClass}`}>
      <select
        className="form-control"
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          minHeight: "54px",
          borderRadius: "12px",
          padding: "12px 16px",
          border: "1px solid #d9d9d9",
          background: "#fff",
          color: "#111",
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={`${option}-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}