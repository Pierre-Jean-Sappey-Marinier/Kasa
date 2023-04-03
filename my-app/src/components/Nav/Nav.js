import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

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
