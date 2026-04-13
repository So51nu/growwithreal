"use client";
import React from "react";
import Image from "next/image";
import g1 from "./g1.jpg";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import DropdownSelect from "@/components/common/DropdownSelect";
export default function LoanCalculator() {
  return (
    <section className="section-pre-approved tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section ">
                <h2 className="title split-text effect-right">
                  <SplitTextAnimation text="Need a Home Loan with Growl Real Estate?" />
                  <br />
                  <SplitTextAnimation text="Get Pre-Approved Instantly" />
                </h2>
                <p className="text-1 split-text split-lines-transform">
                  Find the best home loan options with competitive interest rates.
                  Growl Real Estate helps you get quick approvals and expert financial guidance.
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form-pre-approved"
              >
                <div className="cols ">
                  <fieldset>
                    <label className=" text-1 fw-6 mb-12" htmlFor="amount">
                      Total Property Price
                    </label>
                    <input type="number" id="amount" placeholder={1000} />
                  </fieldset>
                  <div className="wrap-input">
                    <fieldset className="payment">
                      <label className="text-1 fw-6 mb-12" htmlFor="payment">
                        Your Down Payment
                      </label>
                      <input type="number" id="payment" placeholder={2000} />
                    </fieldset>
                    <fieldset className="percent">
                      <input
                        className="input-percent"
                        type="text"
                        defaultValue="20%"
                      />
                    </fieldset>
                  </div>
                </div>
                <div className="cols">
                  <fieldset className="interest-rate">
                    <label className="text-1 fw-6 mb-12" htmlFor="interestRate">
                      Interest Rate (% per year)
                    </label>
                    <input type="number" id="interestRate" placeholder={0} />
                  </fieldset>
                  <div className="select">
                    <label className="text-1 fw-6 mb-12">
                      Loan Duration (Months)
                    </label>

                    <DropdownSelect
                      options={[
                        "Select amortization period",
                        "1 month",
                        "2 months",
                        "3 months",
                        "4 months",
                        "5 months",
                      ]}
                      addtionalParentClass=""
                    />
                  </div>
                </div>
                <div className="cols">
                  <fieldset>
                    <label className=" text-1 fw-6 mb-12" htmlFor="tax">
                      Annual Property Tax
                    </label>
                    <input type="number" id="tax" placeholder="$3000" />
                  </fieldset>
                  <fieldset>
                    <label className=" text-1 fw-6 mb-12" htmlFor="insurance">
                      Home Insurance (Yearly)
                    </label>
                    <DropdownSelect
                    options={[
                      "Select loan duration",
                      "1 Year",
                      "2 Year",
                      "5 Year",
                      "8 Year",
                      "10 Year",
                    ]}
                  />
                  </fieldset>
                </div>
                <p className="text-1">
                  Your estimated monthly EMI: <span>₹ 40,000</span>
                </p>
                <div className="wrap-btn">
                  <a href="#" className="tf-btn bg-color-primary pd-6 fw-7">
                    Calculate now
                  </a>
                  <a href="#" className="tf-btn style-border pd-7 fw-7 ">
                    Reset
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-wrap img-animation wow animate__animated">
              <Image
                className="lazyload parallax-img"
                data-src="/images/section/section-pre-approved1.jpg"
                alt=""
                src="/images/section/section-pre-approved1.jpg"
                width={620}
                height={844}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
