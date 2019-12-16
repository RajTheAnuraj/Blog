import React from "react";
import Logo from "../../img/A3ClefLogo.png";

export function Footer() {
  return (
    <footer>
      <div>
        <div>Connect @</div>
        <a href="#fb">
          <img src={Logo} />
        </a>
        <a href="#tw">
          <img src="http://via.placeholder.com/30" />
        </a>
        <a href="#yt">
          <img src="http://via.placeholder.com/30" />
        </a>
        <a href="#gl">
          <img src="http://via.placeholder.com/30" />
        </a>
        <a href="#sc">
          <img src="http://via.placeholder.com/30" />
        </a>
      </div>
    </footer>
  );
}
