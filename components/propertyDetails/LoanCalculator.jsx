// "use client";

// import React, { useMemo, useState } from "react";
// import DropdownSelect from "../common/DropdownSelect";

// export default function LoanCalculator({ property }) {
//   const totalAmountDefault = Number(property?.price || 0);

//   const [amount, setAmount] = useState(totalAmountDefault || 1000000);
//   const [downPayment, setDownPayment] = useState(0);
//   const [interestRate, setInterestRate] = useState(8);
//   const [months, setMonths] = useState("12 months");
//   const [propertyTax, setPropertyTax] = useState(0);
//   const [insurance, setInsurance] = useState(0);

//   const monthsValue = useMemo(() => {
//     const match = String(months).match(/\d+/);
//     return match ? Number(match[0]) : 12;
//   }, [months]);

//   const emi = useMemo(() => {
//     const principal = Math.max(Number(amount || 0) - Number(downPayment || 0), 0);
//     const monthlyRate = Number(interestRate || 0) / 12 / 100;
//     const n = Number(monthsValue || 1);

//     let payment = 0;

//     if (principal > 0 && monthlyRate > 0 && n > 0) {
//       payment =
//         (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
//         (Math.pow(1 + monthlyRate, n) - 1);
//     } else if (principal > 0 && n > 0) {
//       payment = principal / n;
//     }

//     const extraMonthly = (Number(propertyTax || 0) + Number(insurance || 0)) / 12;
//     return payment + extraMonthly;
//   }, [amount, downPayment, interestRate, monthsValue, propertyTax, insurance]);

//   return (
//     <>
//       <div className="wg-title text-11 fw-6 text-color-heading">
//         Loan Calculator
//       </div>

//       <form className="form-pre-approved" onSubmit={(e) => e.preventDefault()}>
//         <div className="cols">
//           <fieldset>
//             <label className="text-1 fw-6 mb-12" htmlFor="amount">
//               Total Amount
//             </label>
//             <input
//               type="number"
//               id="amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </fieldset>

//           <div className="wrap-input">
//             <fieldset className="payment">
//               <label className="text-1 fw-6 mb-12" htmlFor="payment">
//                 Down Payment
//               </label>
//               <input
//                 type="number"
//                 id="payment"
//                 value={downPayment}
//                 onChange={(e) => setDownPayment(e.target.value)}
//               />
//             </fieldset>

//             <fieldset className="percent">
//               <input
//                 className="input-percent"
//                 type="text"
//                 readOnly
//                 value={
//                   amount > 0
//                     ? `${((Number(downPayment || 0) / Number(amount || 1)) * 100).toFixed(0)}%`
//                     : "0%"
//                 }
//               />
//             </fieldset>
//           </div>
//         </div>

//         <div className="cols">
//           <fieldset className="interest-rate">
//             <label className="text-1 fw-6 mb-12" htmlFor="interest-rate">
//               Interest Rate
//             </label>
//             <input
//               type="number"
//               id="interest-rate"
//               value={interestRate}
//               onChange={(e) => setInterestRate(e.target.value)}
//             />
//           </fieldset>

//           <div className="select">
//             <label className="text-1 fw-6 mb-12">
//               Amortization Period (months)
//             </label>
//             <DropdownSelect
//               options={[
//                 "12 months",
//                 "24 months",
//                 "36 months",
//                 "60 months",
//                 "120 months",
//                 "240 months",
//               ]}
//               selectedValue={months}
//               onChange={(value) => setMonths(value)}
//             />
//           </div>
//         </div>

//         <div className="cols">
//           <fieldset>
//             <label className="text-1 fw-6 mb-12" htmlFor="tax">
//               Property Tax
//             </label>
//             <input
//               type="number"
//               id="tax"
//               value={propertyTax}
//               onChange={(e) => setPropertyTax(e.target.value)}
//             />
//           </fieldset>

//           <fieldset>
//             <label className="text-1 fw-6 mb-12" htmlFor="insurance">
//               Home Insurance
//             </label>
//             <input
//               type="number"
//               id="insurance"
//               value={insurance}
//               onChange={(e) => setInsurance(e.target.value)}
//             />
//           </fieldset>
//         </div>

//         <div className="wrap-btn flex items-center justify-between">
//           <a href="#" className="tf-btn bg-color-primary pd-22 fw-7">
//             Calculate now <i className="icon-arrow-right-2 fw-4" />
//           </a>
//           <p className="text-1 mb-0 fw-5 text-color-heading">
//             Your estimated monthly payment:
//             <span> ₹{Number(emi || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
//           </p>
//         </div>
//       </form>
//     </>
//   );
// }


"use client";

import React, { useMemo, useState } from "react";

function sanitizeNumber(value) {
  const cleaned = String(value ?? "").replace(/[^\d.]/g, "");
  const parts = cleaned.split(".");
  if (parts.length <= 1) return cleaned;
  return `${parts[0]}.${parts.slice(1).join("")}`;
}

function toNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function formatINR(value) {
  const number = Math.round(Number(value) || 0);
  return new Intl.NumberFormat("en-IN").format(number);
}

function calculateEMI(principal, annualRate, years) {
  const amount = Math.max(0, Number(principal) || 0);
  const rate = Math.max(0, Number(annualRate) || 0);
  const tenureYears = Math.max(0, Number(years) || 0);
  const months = tenureYears * 12;

  if (amount <= 0 || months <= 0) return 0;

  const monthlyRate = rate / 12 / 100;

  if (monthlyRate === 0) {
    return amount / months;
  }

  return (
    (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
}

function getRangeProgress(value, min, max) {
  const numericValue = Number(value) || 0;
  return Math.min(100, Math.max(0, ((numericValue - min) / (max - min)) * 100));
}

function clampForSlider(value, min, max) {
  const n = Number(value);
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

function EditableRange({
  label,
  value,
  min,
  max,
  step,
  minLabel,
  maxLabel,
  prefix = "",
  suffix = "",
  inputMode = "decimal",
  onChange,
}) {
  const progress = getRangeProgress(clampForSlider(value, min, max), min, max);

  const handleInputChange = (e) => {
    const next = sanitizeNumber(e.target.value);
    onChange(next);
  };

  const handleRangeChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="range-group">
      <div className="range-head">
        <label>{label}</label>
        <div className="editable-value">
          {prefix ? <span>{prefix}</span> : null}
          <input
            type="text"
            value={value}
            inputMode={inputMode}
            onChange={handleInputChange}
            aria-label={label}
          />
          {suffix ? <span>{suffix}</span> : null}
        </div>
      </div>

      <div className="range-slider-wrap">
        <div className="range-track">
          <div className="range-fill" style={{ width: `${progress}%` }} />
          <div className="range-thumb" style={{ left: `${progress}%` }} />
        </div>

        <input
          className="range-input"
          type="range"
          min={min}
          max={max}
          step={step}
          value={clampForSlider(value, min, max)}
          onChange={handleRangeChange}
          aria-label={`${label} slider`}
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
  const [loanAmount, setLoanAmount] = useState("2500000");
  const [tenure, setTenure] = useState("30");
  const [interestRate, setInterestRate] = useState("7.75");
  const [showDetails, setShowDetails] = useState(false);

  const numericLoanAmount = toNumber(loanAmount);
  const numericTenure = toNumber(tenure);
  const numericInterestRate = toNumber(interestRate);

  const emiData = useMemo(() => {
    const monthlyEmi = calculateEMI(
      numericLoanAmount,
      numericInterestRate,
      numericTenure
    );
    const totalAmountPayable = monthlyEmi * numericTenure * 12;
    const interestAmount = Math.max(0, totalAmountPayable - numericLoanAmount);

    const principalPercent =
      totalAmountPayable > 0 ? (numericLoanAmount / totalAmountPayable) * 100 : 0;

    return {
      monthlyEmi,
      totalAmountPayable,
      interestAmount,
      principalPercent,
      interestPercent: 100 - principalPercent,
    };
  }, [numericLoanAmount, numericTenure, numericInterestRate]);

  const resetCalculator = () => {
    setLoanAmount("2500000");
    setTenure("30");
    setInterestRate("7.75");
    setShowDetails(false);
  };

  return (
    <section id="loan-calculator" className="home-loan-calculator-section">
      <div className="tf-container calculator-container">
        <div className="calculator-card">
          <div className="calculator-heading">
            <span className="calculator-badge">Growl Finance Assistance</span>
            <h2>Home Loan EMI Calculator</h2>
           <br></br>
          </div>

          <div className="calculator-grid">
            <div className="calculator-left">
              <EditableRange
                label="Loan Amount"
                value={loanAmount}
                min={1}
                max={100000000}
                step={10000}
                minLabel="₹1"
                maxLabel="₹10 Cr"
                prefix="₹"
                inputMode="numeric"
                onChange={setLoanAmount}
              />

              <EditableRange
                label="Tenure"
                value={tenure}
                min={1}
                max={30}
                step={1}
                minLabel="1 Year"
                maxLabel="30 Years"
                suffix="Years"
                inputMode="numeric"
                onChange={setTenure}
              />

              <EditableRange
                label="Interest Rate P.A."
                value={interestRate}
                min={0}
                max={15}
                step={0.05}
                minLabel="0%"
                maxLabel="15%"
                suffix="%"
                inputMode="decimal"
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

                <div className="result-main">
                  <div className="chart-summary">
                    <div
                      className="pie-chart"
                      style={{
                        background: `conic-gradient(#F2C21A 0 ${emiData.interestPercent}%, #0B4F7A ${emiData.interestPercent}% 100%)`,
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
                      <strong>₹{formatINR(numericLoanAmount)}</strong>
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
                </div>

                {showDetails && (
                  <div className="details-box">
                    <div>
                      <span>Loan Tenure</span>
                      <strong>{numericTenure || 0} Years</strong>
                    </div>
                    <div>
                      <span>Interest Rate</span>
                      <strong>{numericInterestRate || 0}% P.A.</strong>
                    </div>
                    <div>
                      <span>Total Months</span>
                      <strong>{Math.round((numericTenure || 0) * 12)}</strong>
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

         
        </div>
      </div>

      <style jsx global>{`
        .home-loan-calculator-section {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0;
          background: transparent;
          position: relative;
          overflow: visible;
        }

        .calculator-container {
          width: 100%;
        }

        .calculator-card {
          width: 100%;
          border-radius: 0;
          padding: 10px 0;
          background: transparent;
          border: 0;
          box-shadow: none;
        }

        .calculator-heading {
          text-align: center;
          margin-bottom: 12px;
        }

        .calculator-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 22px;
          padding: 0 13px;
          border-radius: 999px;
          background: rgba(242, 194, 26, 0.16);
          border: 1px solid rgba(242, 194, 26, 0.42);
          color: #073a5c;
          font-size: 10.5px;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .calculator-heading h2 {
          font-size: clamp(24px, 2vw, 30px);
          line-height: 1.05;
          font-weight: 950;
          color: #073a5c;
          margin: 0 0 5px;
          letter-spacing: -0.5px;
        }

        .calculator-heading p {
          max-width: 650px;
          margin: 0 auto;
          font-size: 12px;
          line-height: 1.35;
          color: #4d6176;
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.86fr);
          gap: 14px;
          align-items: stretch;
          width: 100%;
          min-width: 0;
        }

        .calculator-left {
          padding: 4px 8px 4px 0;
          border-radius: 0;
          background: transparent;
          border: 0;
          min-width: 0;
          max-width: 100%;
          overflow: visible;
          box-sizing: border-box;
        }

        .range-group {
          margin-bottom: 12px;
        }

        .range-group:last-of-type {
          margin-bottom: 0;
        }

        .range-head {
          display: grid;
          grid-template-columns: minmax(100px, 0.46fr) minmax(0, 0.54fr);
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
          width: 100%;
          min-width: 0;
        }

        .range-head label {
          font-size: 13px;
          font-weight: 900;
          color: #073a5c;
          margin: 0;
          min-width: 0;
          line-height: 1.25;
          word-break: normal;
        }

        .editable-value {
          width: 100%;
          min-width: 0;
          max-width: 100%;
          min-height: 31px;
          padding: 0 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          color: #073a5c;
          background: #ffffff;
          border: 1px solid rgba(11, 79, 122, 0.2);
          box-shadow: 0 6px 14px rgba(6, 44, 71, 0.05);
          overflow: hidden;
          box-sizing: border-box;
        }

        .editable-value span {
          flex: 0 0 auto;
          font-size: 12px;
          font-weight: 950;
          color: #0b4f7a;
          white-space: nowrap;
        }

        .editable-value input {
          flex: 1 1 auto;
          width: 100%;
          min-width: 0;
          height: 29px;
          border: 0;
          outline: 0;
          padding: 0;
          margin: 0;
          background: transparent;
          color: #073a5c;
          font-size: 13px;
          font-weight: 950;
          line-height: 1;
        }

        .range-slider-wrap {
          position: relative;
          width: 100%;
          min-width: 0;
          max-width: 100%;
          height: 20px;
          display: flex;
          align-items: center;
          padding: 0 8px;
          box-sizing: border-box;
        }

        .range-track {
          position: relative;
          width: 100%;
          height: 5px;
          border-radius: 999px;
          background: rgba(11, 79, 122, 0.13);
        }

        .range-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          border-radius: 999px;
          background: #f2c21a;
          z-index: 1;
        }

        .range-thumb {
          position: absolute;
          top: 50%;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: #ffffff;
          border: 4px solid #0b4f7a;
          box-shadow: 0 0 0 4px rgba(11, 79, 122, 0.1);
          z-index: 4;
          pointer-events: none;
        }

        .range-input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 20px;
          opacity: 0;
          cursor: pointer;
          z-index: 10;
          appearance: none;
          -webkit-appearance: none;
          background: transparent;
          margin: 0;
        }

        .range-input::-webkit-slider-runnable-track {
          height: 20px;
          background: transparent;
          border: none;
        }

        .range-input::-webkit-slider-thumb {
          width: 22px;
          height: 22px;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          background: transparent;
          border: none;
        }

        .range-input::-moz-range-track {
          height: 20px;
          background: transparent;
          border: none;
        }

        .range-input::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border: 0;
          cursor: pointer;
          background: transparent;
        }

        .range-min-max {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0;
          font-size: 10px;
          font-weight: 800;
          color: #64748b;
        }

        .calculator-actions {
          margin-top: 12px;
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .primary-btn,
        .outline-btn {
          min-height: 35px;
          padding: 0 20px;
          border-radius: 10px;
          font-size: 11.5px;
          font-weight: 950;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .primary-btn {
          border: none;
          background: #0b4f7a;
          color: #ffffff;
          box-shadow: 0 9px 18px rgba(11, 79, 122, 0.18);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          background: #073a5c;
        }

        .outline-btn {
          border: 1px solid rgba(11, 79, 122, 0.18);
          background: #ffffff;
          color: #073a5c;
        }

        .result-card {
          height: 100%;
          padding: 14px 18px;
          border-radius: 16px;
          background: #073a5c;
          border: 0;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-width: 0;
          max-width: 100%;
          box-sizing: border-box;
        }

        .result-card::before {
          content: none;
          display: none;
        }

        .result-top {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 8px;
          z-index: 1;
        }

        .small-label {
          display: block;
          font-size: 10.5px;
          font-weight: 850;
          color: rgba(255, 255, 255, 0.78);
          margin-bottom: 3px;
        }

        .result-top h3 {
          font-size: clamp(25px, 2.05vw, 33px);
          line-height: 1;
          font-weight: 950;
          color: #f2c21a;
          margin: 0;
        }

        .view-details-btn {
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 950;
          cursor: pointer;
          white-space: nowrap;
        }

        .result-main {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 128px minmax(0, 1fr);
          gap: 12px;
          align-items: center;
          flex: 1;
        }

        .chart-summary {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .pie-chart {
          width: 94px;
          height: 94px;
          border-radius: 50%;
          position: relative;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.18),
            0 10px 24px rgba(0, 0, 0, 0.18);
        }

        .pie-center {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          background: #073a5c;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .pie-center span {
          font-size: 10px;
          font-weight: 950;
          color: #ffffff;
          letter-spacing: 0.08em;
        }

        .chart-legends {
          display: flex;
          flex-direction: column;
          gap: 5px;
          color: rgba(255, 255, 255, 0.84);
          font-size: 10.5px;
          font-weight: 850;
        }

        .chart-legends div {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .legend {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: inline-block;
        }

        .legend.interest {
          background: #f2c21a;
        }

        .legend.principal {
          background: #0b4f7a;
          border: 1px solid rgba(255, 255, 255, 0.45);
        }

        .amount-list {
          display: grid;
          gap: 7px;
        }

        .amount-item {
          padding: 8px 11px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .amount-item span {
          display: block;
          font-size: 10.5px;
          font-weight: 850;
          color: rgba(255, 255, 255, 0.72);
          margin-bottom: 3px;
        }

        .amount-item strong {
          display: block;
          font-size: 14.5px;
          line-height: 1.15;
          font-weight: 950;
          color: #ffffff;
          word-break: break-word;
        }

        .amount-item.total {
          background: rgba(242, 194, 26, 0.13);
          border-color: rgba(242, 194, 26, 0.28);
        }

        .details-box {
          position: relative;
          z-index: 1;
          margin-top: 8px;
          padding: 7px 9px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 7px;
        }

        .details-box div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .details-box span {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.68);
        }

        .details-box strong {
          font-size: 11.5px;
          color: #ffffff;
        }

        .expert-box {
          position: relative;
          z-index: 1;
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 9px;
        }

        .expert-box span {
          font-size: 10.5px;
          font-weight: 850;
          color: rgba(255, 255, 255, 0.72);
        }

        .expert-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 32px;
          padding: 0 13px;
          border-radius: 10px;
          background: #f2c21a;
          color: #073a5c;
          font-size: 10.5px;
          font-weight: 950;
          text-decoration: none;
          white-space: nowrap;
        }

        .expert-btn:hover {
          color: #073a5c;
          transform: translateY(-1px);
        }

        .calculator-note {
          margin: 7px 0 0;
          padding-top: 6px;
          border-top: 1px solid rgba(11, 79, 122, 0.1);
          font-size: 9.5px;
          line-height: 1.28;
          color: #64748b;
          text-align: center;
        }

        @media (min-width: 1200px) and (max-height: 760px) {
          .home-loan-calculator-section {
            padding: 6px 0;
          }

          .calculator-card {
            padding: 8px 0;
          }

          .calculator-heading {
            margin-bottom: 9px;
          }

          .calculator-badge {
            min-height: 20px;
            font-size: 10px;
            margin-bottom: 4px;
          }

          .calculator-heading h2 {
            font-size: 26px;
            margin-bottom: 3px;
          }

          .calculator-heading p {
            font-size: 11px;
            line-height: 1.25;
          }

          .calculator-grid {
            gap: 12px;
          }

          .calculator-left,
          .result-card {
            padding: 12px 16px;
            border-radius: 16px;
          }

          .range-group {
            margin-bottom: 9px;
          }

          .range-head {
            margin-bottom: 4px;
          }

          .editable-value {
            min-height: 28px;
            border-radius: 9px;
          }

          .editable-value input {
            height: 27px;
            font-size: 12px;
          }

          .range-slider-wrap,
          .range-input {
            height: 18px;
          }

          .range-min-max {
            font-size: 9.5px;
          }

          .calculator-actions {
            margin-top: 9px;
          }

          .primary-btn,
          .outline-btn {
            min-height: 32px;
            font-size: 11px;
          }

          .result-top {
            margin-bottom: 6px;
          }

          .result-top h3 {
            font-size: 29px;
          }

          .result-main {
            grid-template-columns: 116px minmax(0, 1fr);
            gap: 10px;
          }

          .pie-chart {
            width: 84px;
            height: 84px;
          }

          .pie-center {
            inset: 18px;
          }

          .amount-list {
            gap: 5px;
          }

          .amount-item {
            padding: 6px 9px;
          }

          .amount-item span {
            font-size: 9.8px;
          }

          .amount-item strong {
            font-size: 13px;
          }

          .expert-box {
            margin-top: 6px;
            padding-top: 6px;
          }

          .expert-btn {
            min-height: 29px;
            font-size: 10px;
          }

          .calculator-note {
            margin-top: 5px;
            padding-top: 4px;
            font-size: 9px;
          }
        }

        @media (min-width: 1200px) and (max-height: 680px) {
          .calculator-note,
          .calculator-heading p {
            display: none;
          }

          .calculator-card {
            padding: 6px 0;
          }

          .calculator-heading {
            margin-bottom: 7px;
          }

          .calculator-heading h2 {
            font-size: 24px;
          }

          .calculator-left,
          .result-card {
            padding: 10px 14px;
          }

          .range-group {
            margin-bottom: 7px;
          }

          .pie-chart {
            width: 76px;
            height: 76px;
          }

          .pie-center {
            inset: 16px;
          }

          .amount-item {
            padding: 5px 8px;
          }
        }

        @media (max-width: 1199px) {
          .home-loan-calculator-section {
            padding: 0;
            overflow: visible;
          }

          .range-head {
            grid-template-columns: minmax(92px, 0.42fr) minmax(0, 0.58fr);
            gap: 9px;
          }

          .editable-value {
            width: 100%;
            min-width: 0;
            max-width: 100%;
          }

          .calculator-card {
            padding: 10px 0;
          }

          .calculator-grid {
            grid-template-columns: 1fr;
          }

          .calculator-heading h2 {
            font-size: 28px;
          }

          .calculator-heading p {
            font-size: 12.5px;
          }

          .result-main {
            grid-template-columns: 142px minmax(0, 1fr);
          }

          .pie-chart {
            width: 112px;
            height: 112px;
          }

          .pie-center {
            inset: 24px;
          }
        }

        @media (max-width: 767px) {
          .home-loan-calculator-section {
            padding: 0;
          }

          .calculator-grid,
          .calculator-left,
          .calculator-right,
          .result-card,
          .range-group,
          .range-head,
          .editable-value {
            width: 100%;
            min-width: 0;
            max-width: 100%;
            box-sizing: border-box;
          }

          .calculator-card {
            padding: 8px 0;
            border-radius: 0;
          }

          .calculator-heading {
            margin-bottom: 14px;
          }

          .calculator-heading h2 {
            font-size: 24px;
          }

          .calculator-heading p {
            font-size: 12px;
            line-height: 1.4;
          }

          .calculator-left {
            padding: 0;
            border-radius: 0;
          }

          .result-card {
            padding: 13px;
            border-radius: 16px;
          }

          .range-group {
            margin-bottom: 16px;
          }

          .range-head {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .editable-value {
            min-height: 34px;
          }

          .editable-value input {
            height: 32px;
          }

          .calculator-actions {
            flex-direction: column;
            margin-top: 16px;
          }

          .primary-btn,
          .outline-btn {
            width: 100%;
            min-height: 39px;
          }

          .result-top {
            flex-direction: column;
            gap: 9px;
          }

          .result-top h3 {
            font-size: 28px;
          }

          .view-details-btn {
            width: 100%;
            min-height: 36px;
          }

          .result-main {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .chart-summary {
            flex-direction: row;
            justify-content: center;
          }

          .pie-chart {
            width: 105px;
            height: 105px;
          }

          .pie-center {
            inset: 23px;
          }

          .amount-item {
            padding: 9px 11px;
          }

          .amount-item strong {
            font-size: 15px;
          }

          .details-box {
            grid-template-columns: 1fr;
          }

          .expert-box {
            flex-direction: column;
            align-items: stretch;
          }

          .expert-btn {
            width: 100%;
            min-height: 38px;
          }

          .calculator-note {
            font-size: 10px;
          }
        }

        @media (max-width: 380px) {
          .calculator-heading h2 {
            font-size: 22px;
          }

          .calculator-left {
            padding: 0;
          }

          .result-card {
            padding: 12px;
          }

          .chart-summary {
            flex-direction: column;
          }
        }


        /* Property details page / narrow column safety fix */
        #loan-calculator,
        #loan-calculator * {
          box-sizing: border-box;
        }

        #loan-calculator .calculator-container,
        #loan-calculator .calculator-card,
        #loan-calculator .calculator-grid,
        #loan-calculator .calculator-left,
        #loan-calculator .calculator-right,
        #loan-calculator .result-card {
          max-width: 100%;
          min-width: 0;
        }

        @media (max-width: 1024px) {
          .range-head {
            grid-template-columns: 1fr;
            gap: 6px;
          }

          .editable-value {
            width: 100%;
          }
        }


        /* Single-section clean layout: removes repeated frame/card feeling */
        #loan-calculator.home-loan-calculator-section {
          background: transparent !important;
          padding: 0 !important;
          overflow: visible !important;
        }

        #loan-calculator .calculator-card {
          background: transparent !important;
          border: 0 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }

        #loan-calculator .calculator-left {
          background: transparent !important;
          border: 0 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }

        #loan-calculator .amount-item {
          box-shadow: none !important;
        }
      `}</style>
    </section>
  );
}
