import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>

          {/* Links with no underline + open in new tab */}
          <div>
            <a
              href={tryDemo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#007bff",
                fontWeight: "500",
              }}
            >
              Try Demo
            </a>
            <a
              href={learnMore}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                marginLeft: "50px",
                color: "#007bff",
                fontWeight: "500",
              }}
            >
              Learn More
            </a>
          </div>

          {/* App Badges */}
          <div className="mt-3">
            <a
              href={googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a
              href={appStore}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", marginLeft: "50px" }}
            >
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
