"use client";
import SearchForm from "@/components/common/SearchForm";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("For sale");
  const [searchText, setSearchText] = useState("");

  const items = ["For sale", "For rent"];

  const handleSearch = (e) => {
    e.preventDefault();

    const query = new URLSearchParams();

    if (searchText.trim()) {
      query.set("search", searchText.trim());
    }

    if (activeItem === "For sale") {
      query.set("property_status", "for-sale");
    } else {
      query.set("property_status", "for-rent");
    }

    router.push(`/my-property?${query.toString()}`);
  };

  return (
    <div
  className="page-title home01"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1689574666903-ec23039b3558?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <div className="tf-container ">
        <div className="row justify-center relative">
          <div className="col-lg-8 ">
            <div className="content-inner">
              <div className="heading-title">
                <h1 className="title">GROWL REAL ESTATE </h1>
                <p className="h6 fw-4">
                  Discover exclusive luxury projects, trusted by thousands of
                  homebuyers every month.
                </p>
              </div>
              <div className="wg-filter">
                <div className="form-title">
                  <div className="tf-dropdown-sort " data-bs-toggle="dropdown">
                    <div className="btn-select">
                      <span className="text-sort-value">{activeItem}</span>
                      <i className="icon-CaretDown" />
                    </div>
                    <div className="dropdown-menu">
                      {items.map((item) => (
                        <div
                          key={item}
                          className={`select-item ${
                            activeItem === item ? "active" : ""
                          }`}
                          onClick={() => setActiveItem(item)}
                        >
                          <span className="text-value-item">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSearch}>
                    <fieldset>
                      <input
                        type="text"
                        placeholder="Place, neighborhood, school or agent..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                    </fieldset>
                  </form>

                  <div className="box-item wrap-btn">
                    <div className="btn-filter show-form searchFormToggler">
                      <div className="icons">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 4H14"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 4H3"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 12H12"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 12H3"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 20H16"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 20H3"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 2V6"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 10V14"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 18V22"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleSearch}
                      className="tf-btn bg-color-primary pd-3"
                    >
                      Search <i className="icon-MagnifyingGlass fw-6" />
                    </button>
                  </div>
                </div>
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}