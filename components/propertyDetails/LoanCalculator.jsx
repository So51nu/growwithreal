"use client";

import React, { useMemo, useState } from "react";
import DropdownSelect from "../common/DropdownSelect";

export default function LoanCalculator({ property }) {
  const totalAmountDefault = Number(property?.price || 0);

  const [amount, setAmount] = useState(totalAmountDefault || 1000000);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(8);
  const [months, setMonths] = useState("12 months");
  const [propertyTax, setPropertyTax] = useState(0);
  const [insurance, setInsurance] = useState(0);

  const monthsValue = useMemo(() => {
    const match = String(months).match(/\d+/);
    return match ? Number(match[0]) : 12;
  }, [months]);

  const emi = useMemo(() => {
    const principal = Math.max(Number(amount || 0) - Number(downPayment || 0), 0);
    const monthlyRate = Number(interestRate || 0) / 12 / 100;
    const n = Number(monthsValue || 1);

    let payment = 0;

    if (principal > 0 && monthlyRate > 0 && n > 0) {
      payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);
    } else if (principal > 0 && n > 0) {
      payment = principal / n;
    }

    const extraMonthly = (Number(propertyTax || 0) + Number(insurance || 0)) / 12;
    return payment + extraMonthly;
  }, [amount, downPayment, interestRate, monthsValue, propertyTax, insurance]);

  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Loan Calculator
      </div>

      <form className="form-pre-approved" onSubmit={(e) => e.preventDefault()}>
        <div className="cols">
          <fieldset>
            <label className="text-1 fw-6 mb-12" htmlFor="amount">
              Total Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </fieldset>

          <div className="wrap-input">
            <fieldset className="payment">
              <label className="text-1 fw-6 mb-12" htmlFor="payment">
                Down Payment
              </label>
              <input
                type="number"
                id="payment"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
              />
            </fieldset>

            <fieldset className="percent">
              <input
                className="input-percent"
                type="text"
                readOnly
                value={
                  amount > 0
                    ? `${((Number(downPayment || 0) / Number(amount || 1)) * 100).toFixed(0)}%`
                    : "0%"
                }
              />
            </fieldset>
          </div>
        </div>

        <div className="cols">
          <fieldset className="interest-rate">
            <label className="text-1 fw-6 mb-12" htmlFor="interest-rate">
              Interest Rate
            </label>
            <input
              type="number"
              id="interest-rate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </fieldset>

          <div className="select">
            <label className="text-1 fw-6 mb-12">
              Amortization Period (months)
            </label>
            <DropdownSelect
              options={[
                "12 months",
                "24 months",
                "36 months",
                "60 months",
                "120 months",
                "240 months",
              ]}
              selectedValue={months}
              onChange={(value) => setMonths(value)}
            />
          </div>
        </div>

        <div className="cols">
          <fieldset>
            <label className="text-1 fw-6 mb-12" htmlFor="tax">
              Property Tax
            </label>
            <input
              type="number"
              id="tax"
              value={propertyTax}
              onChange={(e) => setPropertyTax(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <label className="text-1 fw-6 mb-12" htmlFor="insurance">
              Home Insurance
            </label>
            <input
              type="number"
              id="insurance"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
            />
          </fieldset>
        </div>

        <div className="wrap-btn flex items-center justify-between">
          <a href="#" className="tf-btn bg-color-primary pd-22 fw-7">
            Calculate now <i className="icon-arrow-right-2 fw-4" />
          </a>
          <p className="text-1 mb-0 fw-5 text-color-heading">
            Your estimated monthly payment:
            <span> ₹{Number(emi || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
          </p>
        </div>
      </form>
    </>
  );
}