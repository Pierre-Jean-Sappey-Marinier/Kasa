import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

function Nav() {
  return (
    <ul className="navigation">
      <li>
        <NavLink to="/home" className="accueil">
          <p> Accueil</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/apropos" className="apropos">
          <p> A propos</p>
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
