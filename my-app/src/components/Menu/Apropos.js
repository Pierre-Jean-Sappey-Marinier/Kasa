import React from "react";
import "./Apropos.scss";

import { Link } from "react-router-dom";
function Apropos() {
  return (
    <nav>
      <a href="#" className="accueil">
        Accueil
      </a>
      <Link to="/apropos" className="apropos">
        A propos
      </Link>
    </nav>
  );
}

export default Apropos;
