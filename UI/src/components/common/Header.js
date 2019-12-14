import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/A3ClefLogo.png";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
      <a className="navbar-brand" href="/">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Anuraj Ajithkumar"
        />
        Anuraj Ajithkumar
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/blog" activeClassName="active" className="nav-link">
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/work" activeClassName="active" className="nav-link">
              Work
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
