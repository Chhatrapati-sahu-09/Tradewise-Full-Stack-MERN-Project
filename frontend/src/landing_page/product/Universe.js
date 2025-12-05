import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Zerodha Fund House */}
        <div className="col-12 col-md-4 p-3 mt-5">
          <a
            href="https://www.zerodhafundhouse.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <p className="text-small text-muted mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
        </div>

        {/* Sensibull */}
        <div className="col-12 col-md-4 p-3 mt-5">
          <a
            href="https://sensibull.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/sensibullLogo.svg"
              alt="Sensibull"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <p className="text-small text-muted mt-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
        </div>

        {/* Tijori */}
        <div className="col-12 col-md-4 p-3 mt-5">
          <a
            href="https://tijorifinance.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/tijori.svg"
              alt="Tijori"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <p className="text-small text-muted mt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </a>
        </div>

        {/* Streak */}
        <div className="col-12 col-md-4 p-3 mt-5">
          <a
            href="https://streak.tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/streakLogo.png"
              alt="Streak"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <p className="text-small text-muted mt-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </a>
        </div>

        {/* Smallcase */}
        <div className="col-12 col-md-4 p-3 mt-5">
          <a
            href="https://www.smallcase.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/smallcaseLogo.png"
              alt="Smallcase"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <p className="text-small text-muted mt-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>

        {/* Ditto */}
        <div className="col-12 col-md-4 p-3 mt-5">
          <a
            href="https://joinditto.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src="media/images/dittoLogo.png"
              alt="Ditto"
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
            <p className="text-small text-muted mt-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </a>
        </div>

        {/* Signup Button */}
        <div className="mt-4">
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button
              className="p-2 btn btn-primary fs-5 mb-5"
              style={{ width: "20%", margin: "0 auto" }}
            >
              Signup Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
