import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-light py-5" id="supportHero">
      <div className="container" id="supportWrapper">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="text-primary">Support Portal</h4>
          <a href="#" className="btn btn-outline-primary btn-sm">
            Track Tickets
          </a>
        </div>

        {/* Main Content */}
        <div className="row g-4">
          {/* Search and Quick Links */}
          <div className="col-12 col-md-6">
            <div className="card shadow-sm p-4 h-100">
              <h1 className="fs-4 mb-3">
                Search for an answer or browse help topics to create a ticket
              </h1>
              <input
                type="text"
                placeholder="Eg. how do I activate F&O"
                className="form-control mb-3"
              />
              <div className="d-flex flex-wrap gap-2">
                <a href="#" className="btn btn-outline-secondary btn-sm">
                  Track account opening
                </a>
                <a href="#" className="btn btn-outline-secondary btn-sm">
                  Track segment activation
                </a>
                <a href="#" className="btn btn-outline-secondary btn-sm">
                  Intraday margins
                </a>
                <a href="#" className="btn btn-outline-secondary btn-sm">
                  Kite user manual
                </a>
              </div>
            </div>
          </div>

          {/* Featured Section */}
          <div className="col-12 col-md-6">
            <div className="card shadow-sm p-4 h-100">
              <h1 className="fs-4 mb-3">Featured</h1>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">
                  <a href="#" className="text-decoration-none">
                    Current Takeovers and Delisting - January 2024
                  </a>
                </li>
                <li className="list-group-item border-0 ps-0">
                  <a href="#" className="text-decoration-none">
                    Latest Intraday leverages - MIS & CO
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
