import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <NavLink to="/home" className="accueil">
        Accueil
      </NavLink>
      <NavLink to="/apropos" className="apropos">
        A propos
      </NavLink>
    </nav>
  );
}

export default Nav;
