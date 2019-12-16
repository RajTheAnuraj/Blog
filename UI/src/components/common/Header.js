import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/A3ClefLogo.png";

export function Header() {
  return (
    <header>
      <a href="/">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Anuraj Ajithkumar"
        />
        <span>Anuraj Ajithkumar</span>
      </a>
      <nav className="clearFix">
        <div>
          <ul>
            <li>
              <NavLink to="/blog" activeClassName="active" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" activeClassName="active" className="nav-link">
                Work
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
