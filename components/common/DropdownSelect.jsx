"use client";

import { useEffect, useRef, useState } from "react";

export default function DropdownSelect({
  onChange = () => {},
  options = [],
  defaultOption = "",
  selectedValue = "",
  placeholder = "Select",
  addtionalParentClass = "",
}) {
  const selectRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(selectedValue || defaultOption || "");

  useEffect(() => {
    setSelected(selectedValue || defaultOption || "");
  }, [selectedValue, defaultOption]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    setSelected(value);
    onChange(value);
    setOpen(false);
  };

  const currentValue = selected || placeholder;

  return (
    <div
      className={`nice-select ${open ? "open" : ""} ${addtionalParentClass}`}
      ref={selectRef}
    >
      <span
        className="current"
        onClick={() => setOpen((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        {currentValue}
      </span>

      <ul className="list">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option ${
              currentValue === option ? "selected" : ""
            } text text-1`}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(option);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}