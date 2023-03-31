import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <ul className="navigation">
      <NavLink to="/home" className="accueil">
        <li> Accueil</li>
      </NavLink>
      <NavLink to="/apropos" className="apropos">
        <li> A propos</li>
      </NavLink>
    </ul>
  );
}

export default Nav;
