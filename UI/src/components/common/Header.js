import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/A3ClefLogo.png";

export function Header() {
  return (
    <header>
      <a href="/">
        {/* <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Anuraj Ajithkumar"
        /> */}
        <h1>Anuraj Ajithkumar</h1>
      </a>
      <nav className="clearFix">
        <ul>
          <li>
            <NavLink to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" activeClassName="active">
              Work
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
