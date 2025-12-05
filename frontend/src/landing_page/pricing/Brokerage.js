import React from "react";

function Brokerage() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {/* Brokerage Calculator */}
        <div className="col-12 col-md-6 mb-4 p-4 border rounded shadow-sm">
          <h3
            className="text-center fs-5 mb-3 text-primary"
            style={{ padding: "10px 0" }}
          >
            Brokerage Calculator
          </h3>
          <ul
            style={{ lineHeight: "2", fontSize: "14px", paddingLeft: "20px" }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional ₹50 + GST per
              order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes: ₹20 per contract note. Courier
              charges apply.
            </li>
            <li>
              NRI account (non-PIS): 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              NRI account (PIS): 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If account is in debit balance, any order placed will be charged
              ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* List of Charges */}
        <div className="col-12 col-md-4 mb-4 p-4 border rounded shadow-sm">
          <h3
            className="text-center fs-5 mb-3 text-primary"
            style={{ padding: "10px 0" }}
          >
            List of Charges
          </h3>
          <ul
            style={{ lineHeight: "2", fontSize: "14px", paddingLeft: "20px" }}
          >
            <li>Account opening: ₹0</li>
            <li>Annual maintenance fee: ₹300</li>
            <li>Intraday trade: ₹20 per order</li>
            <li>F&O trade: ₹20 per order</li>
            <li>Delivery trade: 0.25% of trade value</li>
            <li>SMS alert charges: ₹5 per month</li>
            <li>Portfolio management fee: ₹500 per year</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
