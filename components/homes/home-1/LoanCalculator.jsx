// "use client";
// import React from "react";
// import Image from "next/image";
// import g1 from "./g1.jpg";
// import SplitTextAnimation from "@/components/common/SplitTextAnimation";
// import DropdownSelect from "@/components/common/DropdownSelect";
// export default function LoanCalculator() {
//   return (
//     <section className="section-pre-approved tf-spacing-1">
//       <div className="tf-container">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="content">
//               <div className="heading-section ">
//                 <h2 className="title split-text effect-right">
//                   <SplitTextAnimation text="Need a Home Loan with Growl Real Estate?" />
//                   <br />
//                   <SplitTextAnimation text="Get Pre-Approved Instantly" />
//                 </h2>
//                 <p className="text-1 split-text split-lines-transform">
//                   Find the best home loan options with competitive interest rates.
//                   Growl Real Estate helps you get quick approvals and expert financial guidance.
//                 </p>
//               </div>
//               <form
//                 onSubmit={(e) => e.preventDefault()}
//                 className="form-pre-approved"
//               >
//                 <div className="cols ">
//                   <fieldset>
//                     <label className=" text-1 fw-6 mb-12" htmlFor="amount">
//                       Total Property Price
//                     </label>
//                     <input type="number" id="amount" placeholder={1000} />
//                   </fieldset>
//                   <div className="wrap-input">
//                     <fieldset className="payment">
//                       <label className="text-1 fw-6 mb-12" htmlFor="payment">
//                         Your Down Payment
//                       </label>
//                       <input type="number" id="payment" placeholder={2000} />
//                     </fieldset>
//                     <fieldset className="percent">
//                       <input
//                         className="input-percent"
//                         type="text"
//                         defaultValue="20%"
//                       />
//                     </fieldset>
//                   </div>
//                 </div>
//                 <div className="cols">
//                   <fieldset className="interest-rate">
//                     <label className="text-1 fw-6 mb-12" htmlFor="interestRate">
//                       Interest Rate (% per year)
//                     </label>
//                     <input type="number" id="interestRate" placeholder={0} />
//                   </fieldset>
//                   <div className="select">
//                     <label className="text-1 fw-6 mb-12">
//                       Loan Duration (Months)
//                     </label>

//                     <DropdownSelect
//                       options={[
//                         "Select amortization period",
//                         "1 month",
//                         "2 months",
//                         "3 months",
//                         "4 months",
//                         "5 months",
//                       ]}
//                       addtionalParentClass=""
//                     />
//                   </div>
//                 </div>
//                 <div className="cols">
//                   <fieldset>
//                     <label className=" text-1 fw-6 mb-12" htmlFor="tax">
//                       Annual Property Tax
//                     </label>
//                     <input type="number" id="tax" placeholder="$3000" />
//                   </fieldset>
//                   <fieldset>
//                     <label className=" text-1 fw-6 mb-12" htmlFor="insurance">
//                       Home Insurance (Yearly)
//                     </label>
//                     <DropdownSelect
//                     options={[
//                       "Select loan duration",
//                       "1 Year",
//                       "2 Year",
//                       "5 Year",
//                       "8 Year",
//                       "10 Year",
//                     ]}
//                   />
//                   </fieldset>
//                 </div>
//                 <p className="text-1">
//                   Your estimated monthly EMI: <span>₹ 40,000</span>
//                 </p>
//                 <div className="wrap-btn">
//                   <a href="#" className="tf-btn bg-color-primary pd-6 fw-7">
//                     Calculate now
//                   </a>
//                   <a href="#" className="tf-btn style-border pd-7 fw-7 ">
//                     Reset
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="image-wrap img-animation wow animate__animated">
//               <Image
//                 className="lazyload parallax-img"
//                 data-src="/images/section/section-pre-approved1.jpg"
//                 alt=""
//                 src="/images/section/section-pre-approved1.jpg"
//                 width={620}
//                 height={844}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useMemo, useState } from "react";

function formatINR(value) {
  const number = Math.round(Number(value) || 0);
  return new Intl.NumberFormat("en-IN").format(number);
}

function calculateEMI(principal, annualRate, years) {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  if (!principal || !annualRate || !years) return 0;

  if (monthlyRate === 0) {
    return principal / months;
  }

  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
}

function getRangeProgress(value, min, max) {
  return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
}

function RangeSlider({
  label,
  value,
  min,
  max,
  step,
  minLabel,
  maxLabel,
  displayValue,
  onChange,
}) {
  const progress = getRangeProgress(value, min, max);

  return (
    <div className="range-group">
      <div className="range-head">
        <label>{label}</label>
        <div className="value-box">{displayValue}</div>
      </div>

      <div className="range-slider-wrap">
        <div className="range-track">
          <div
            className="range-fill"
            style={{
              width: `${progress}%`,
            }}
          />
          <div
            className="range-thumb"
            style={{
              left: `${progress}%`,
            }}
          />
        </div>

        <input
          className="range-input"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>

      <div className="range-min-max">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [tenure, setTenure] = useState(30);
  const [interestRate, setInterestRate] = useState(7.75);
  const [showDetails, setShowDetails] = useState(false);

  const emiData = useMemo(() => {
    const monthlyEmi = calculateEMI(loanAmount, interestRate, tenure);
    const totalAmountPayable = monthlyEmi * tenure * 12;
    const interestAmount = totalAmountPayable - loanAmount;

    const principalPercent =
      totalAmountPayable > 0 ? (loanAmount / totalAmountPayable) * 100 : 0;

    return {
      monthlyEmi,
      totalAmountPayable,
      interestAmount,
      principalPercent,
      interestPercent: 100 - principalPercent,
    };
  }, [loanAmount, tenure, interestRate]);

  const resetCalculator = () => {
    setLoanAmount(2500000);
    setTenure(30);
    setInterestRate(7.75);
    setShowDetails(false);
  };

  return (
    <section id="loan-calculator" className="home-loan-calculator-section">
      <div className="tf-container">
        <div className="calculator-card">
          <div className="calculator-heading">
            <span className="calculator-badge">Growl Finance Assistance</span>
            <h2>Home Loan EMI Calculator</h2>
            <p>
              Plan your property purchase with a smart EMI calculator designed
              for home buyers and real estate investors.
            </p>
          </div>

          <div className="calculator-grid">
            <div className="calculator-left">
              <RangeSlider
                label="Loan Amount"
                value={loanAmount}
                min={100000}
                max={100000000}
                step={100000}
                minLabel="₹1 Lac"
                maxLabel="₹10 Cr"
                displayValue={`₹ ${formatINR(loanAmount)}`}
                onChange={setLoanAmount}
              />

              <RangeSlider
                label="Tenure Years"
                value={tenure}
                min={1}
                max={30}
                step={1}
                minLabel="1 Year"
                maxLabel="30 Years"
                displayValue={`${tenure} Years`}
                onChange={setTenure}
              />

              <RangeSlider
                label="Interest Rate P.A."
                value={interestRate}
                min={0.5}
                max={15}
                step={0.05}
                minLabel="0.5%"
                maxLabel="15%"
                displayValue={`${interestRate}%`}
                onChange={setInterestRate}
              />

              <div className="calculator-actions">
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => setShowDetails(true)}
                >
                  Calculate EMI
                </button>

                <button
                  type="button"
                  className="outline-btn"
                  onClick={resetCalculator}
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="calculator-right">
              <div className="result-card">
                <div className="result-top">
                  <div>
                    <span className="small-label">Monthly Home Loan EMI</span>
                    <h3>₹{formatINR(emiData.monthlyEmi)}</h3>
                  </div>

                  <button
                    type="button"
                    className="view-details-btn"
                    onClick={() => setShowDetails((prev) => !prev)}
                  >
                    {showDetails ? "Hide Details" : "View Details"}
                  </button>
                </div>

                <div className="chart-summary">
                  <div
                    className="pie-chart"
                    style={{
                      background: `conic-gradient(#FF7A1A 0 ${emiData.interestPercent}%, #2F76AD ${emiData.interestPercent}% 100%)`,
                    }}
                  >
                    <div className="pie-center">
                      <span>EMI</span>
                    </div>
                  </div>

                  <div className="chart-legends">
                    <div>
                      <span className="legend interest" />
                      Interest
                    </div>
                    <div>
                      <span className="legend principal" />
                      Principal
                    </div>
                  </div>
                </div>

                <div className="amount-list">
                  <div className="amount-item">
                    <span>Principal Amount</span>
                    <strong>₹{formatINR(loanAmount)}</strong>
                  </div>

                  <div className="amount-item">
                    <span>Interest Amount</span>
                    <strong>₹{formatINR(emiData.interestAmount)}</strong>
                  </div>

                  <div className="amount-item total">
                    <span>Total Amount Payable</span>
                    <strong>₹{formatINR(emiData.totalAmountPayable)}</strong>
                  </div>
                </div>

                {showDetails && (
                  <div className="details-box">
                    <div>
                      <span>Loan Tenure</span>
                      <strong>{tenure} Years</strong>
                    </div>
                    <div>
                      <span>Interest Rate</span>
                      <strong>{interestRate}% P.A.</strong>
                    </div>
                    <div>
                      <span>Total Months</span>
                      <strong>{tenure * 12}</strong>
                    </div>
                  </div>
                )}

                <div className="expert-box">
                  <span>Need more information?</span>
                  <a href="/contact" className="expert-btn">
                    Talk To Our Loan Expert
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="calculator-note">
            These calculators are provided only as general self-help planning
            tools. Results depend on many factors, including the assumptions you
            provide. We do not guarantee their accuracy or applicability to your
            circumstances.
          </p>
        </div>
      </div>

      <style jsx global>{`
        .home-loan-calculator-section {
          padding: 80px 0;
          background:
            radial-gradient(
              circle at top left,
              rgba(255, 122, 26, 0.2),
              transparent 30%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(47, 118, 173, 0.18),
              transparent 32%
            ),
            linear-gradient(135deg, #0b1320 0%, #0f1b2d 52%, #111827 100%);
          position: relative;
          overflow: hidden;
        }

        .calculator-card {
          position: relative;
          width: 100%;
          border-radius: 30px;
          padding: 42px;
          background: rgba(15, 27, 45, 0.76);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .calculator-heading {
          text-align: center;
          margin-bottom: 44px;
        }

        .calculator-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          padding: 0 18px;
          border-radius: 999px;
          background: rgba(255, 122, 26, 0.14);
          border: 1px solid rgba(255, 122, 26, 0.35);
          color: #ffa94d;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .calculator-heading h2 {
          font-size: 42px;
          line-height: 1.18;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .calculator-heading p {
          max-width: 720px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 1.7;
          color: #cbd5e1;
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 42px;
          align-items: stretch;
        }

        .calculator-left {
          padding: 34px;
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.09);
          overflow: visible;
        }

        .range-group {
          margin-bottom: 42px;
          overflow: visible;
        }

        .range-group:last-of-type {
          margin-bottom: 0;
        }

        .range-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 16px;
        }

        .range-head label {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
        }

        .value-box {
          min-width: 128px;
          height: 42px;
          padding: 0 14px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          background: linear-gradient(135deg, #ff7a1a, #ff8c2b);
          box-shadow: 0 12px 30px rgba(255, 122, 26, 0.28);
          white-space: nowrap;
        }

        .range-slider-wrap {
          position: relative;
          width: 100%;
          height: 36px;
          display: flex;
          align-items: center;
          overflow: visible;
          padding: 0 12px;
        }

        .range-track {
          position: relative;
          width: 100%;
          height: 7px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          overflow: visible;
        }

        .range-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #ff7a1a, #ff8c2b);
          z-index: 1;
        }

        .range-thumb {
          position: absolute;
          top: 50%;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: #ffffff;
          border: 5px solid #ff7a1a;
          box-shadow:
            0 0 0 6px rgba(255, 122, 26, 0.15),
            0 12px 28px rgba(0, 0, 0, 0.25);
          z-index: 4;
          pointer-events: none;
        }

        .range-input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 36px;
          opacity: 0;
          cursor: pointer;
          z-index: 10;
          appearance: none;
          -webkit-appearance: none;
          background: transparent;
          margin: 0;
        }

        .range-input::-webkit-slider-runnable-track {
          height: 36px;
          background: transparent;
          border: none;
        }

        .range-input::-webkit-slider-thumb {
          width: 36px;
          height: 36px;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          background: transparent;
          border: none;
        }

        .range-input::-moz-range-track {
          height: 36px;
          background: transparent;
          border: none;
        }

        .range-input::-moz-range-thumb {
          width: 36px;
          height: 36px;
          border: 0;
          cursor: pointer;
          background: transparent;
        }

        .range-min-max {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
          font-size: 13px;
          color: #9ca3af;
        }

        .calculator-actions {
          margin-top: 38px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .primary-btn,
        .outline-btn {
          min-height: 50px;
          padding: 0 26px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .primary-btn {
          border: none;
          background: linear-gradient(135deg, #ff7a1a, #ff8c2b);
          color: #ffffff;
          box-shadow: 0 16px 36px rgba(255, 122, 26, 0.28);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 42px rgba(255, 122, 26, 0.36);
        }

        .outline-btn {
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
        }

        .outline-btn:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .result-card {
          height: 100%;
          padding: 34px;
          border-radius: 26px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.11),
            rgba(255, 255, 255, 0.05)
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .result-card::before {
          content: "";
          position: absolute;
          width: 190px;
          height: 190px;
          right: -70px;
          top: -70px;
          border-radius: 50%;
          background: rgba(255, 122, 26, 0.18);
          filter: blur(4px);
        }

        .result-top {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 28px;
          z-index: 1;
        }

        .small-label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #9ca3af;
          margin-bottom: 8px;
        }

        .result-top h3 {
          font-size: 40px;
          line-height: 1.1;
          font-weight: 900;
          color: #ffa94d;
          margin: 0;
        }

        .view-details-btn {
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
        }

        .chart-summary {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-bottom: 28px;
          z-index: 1;
        }

        .pie-chart {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          position: relative;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.18),
            0 18px 50px rgba(0, 0, 0, 0.28);
        }

        .pie-center {
          position: absolute;
          inset: 34px;
          border-radius: 50%;
          background: #0f1b2d;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .pie-center span {
          font-size: 13px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.08em;
        }

        .chart-legends {
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 700;
        }

        .chart-legends div {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }

        .legend.interest {
          background: #ff7a1a;
        }

        .legend.principal {
          background: #2f76ad;
        }

        .amount-list {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 14px;
        }

        .amount-item {
          padding: 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .amount-item span {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #9ca3af;
          margin-bottom: 6px;
        }

        .amount-item strong {
          display: block;
          font-size: 20px;
          line-height: 1.25;
          font-weight: 900;
          color: #ffffff;
        }

        .amount-item.total {
          background: rgba(255, 122, 26, 0.12);
          border-color: rgba(255, 122, 26, 0.24);
        }

        .details-box {
          position: relative;
          z-index: 1;
          margin-top: 18px;
          padding: 16px;
          border-radius: 18px;
          background: rgba(11, 19, 32, 0.7);
          display: grid;
          gap: 12px;
        }

        .details-box div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .details-box span {
          font-size: 13px;
          color: #9ca3af;
        }

        .details-box strong {
          font-size: 14px;
          color: #ffffff;
        }

        .expert-box {
          position: relative;
          z-index: 1;
          margin-top: 22px;
        }

        .expert-box span {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #9ca3af;
          margin-bottom: 9px;
        }

        .expert-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 20px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ff7a1a, #ff8c2b);
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 14px 30px rgba(255, 122, 26, 0.25);
        }

        .expert-btn:hover {
          color: #ffffff;
          transform: translateY(-1px);
        }

        .calculator-note {
          margin: 34px 0 0;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 13px;
          line-height: 1.7;
          color: #9ca3af;
        }

        @media (max-width: 1199px) {
          .calculator-card {
            padding: 34px;
          }

          .calculator-grid {
            gap: 30px;
          }

          .pie-chart {
            width: 160px;
            height: 160px;
          }

          .pie-center {
            inset: 30px;
          }
        }

        @media (max-width: 991px) {
          .home-loan-calculator-section {
            padding: 60px 0;
          }

          .calculator-heading h2 {
            font-size: 34px;
          }

          .calculator-card {
            padding: 26px;
            border-radius: 24px;
          }

          .calculator-grid {
            grid-template-columns: 1fr;
          }

          .chart-summary {
            justify-content: center;
            flex-direction: column;
          }

          .chart-legends {
            flex-direction: row;
          }
        }

        @media (max-width: 575px) {
          .home-loan-calculator-section {
            padding: 44px 0;
          }

          .calculator-card {
            padding: 18px;
            border-radius: 22px;
          }

          .calculator-heading {
            margin-bottom: 30px;
          }

          .calculator-heading h2 {
            font-size: 27px;
          }

          .calculator-heading p {
            font-size: 14px;
          }

          .calculator-left,
          .result-card {
            padding: 20px;
            border-radius: 20px;
          }

          .range-group {
            margin-bottom: 34px;
          }

          .range-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .value-box {
            width: 100%;
            min-width: 100%;
            justify-content: flex-start;
          }

          .calculator-actions {
            flex-direction: column;
          }

          .primary-btn,
          .outline-btn {
            width: 100%;
          }

          .result-top {
            flex-direction: column;
          }

          .result-top h3 {
            font-size: 34px;
          }

          .pie-chart {
            width: 150px;
            height: 150px;
          }

          .pie-center {
            inset: 28px;
          }

          .amount-item strong {
            font-size: 18px;
          }

          .calculator-note {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
