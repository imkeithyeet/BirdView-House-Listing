import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">

        </div>
        <hr />
        <div className="row">
            <div className="flex-wrapper">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} BirdView | All rights reserved |
            Terms Of Service | Privacy
          </p>
          </div>
        </div>
      </div>
  );
}

export default Footer;