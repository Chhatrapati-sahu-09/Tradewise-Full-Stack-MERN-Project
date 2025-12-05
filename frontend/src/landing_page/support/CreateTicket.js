import React from "react";

const ticketTopics = [
  {
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Funding & Withdrawals",
    links: [
      "Add Funds",
      "Withdraw Funds",
      "UPI Payment Issues",
      "Bank Transfers",
      "Refunds",
      "Payment Gateway Issues",
    ],
  },
  {
    title: "Trading & Platform",
    links: [
      "Placing Orders",
      "Margin & Leverage",
      "Order Types",
      "App Issues",
      "Web Console Issues",
      "Charts & Indicators",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container my-5">
      <h1 className="fs-2 text-center mb-5">
        To create a ticket, select a relevant topic
      </h1>
      <div className="row justify-content-center">
        {ticketTopics.map((topic, index) => (
          <div key={index} className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="card-title text-primary mb-3 text-center">
                  <i className="fa fa-plus-circle me-2"></i>
                  {topic.title}
                </h4>
                <ul className="list-unstyled">
                  {topic.links.map((link, i) => (
                    <li key={i} className="mb-2">
                      <a
                        href="#"
                        className="text-decoration-none text-muted"
                        style={{ lineHeight: "2" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
