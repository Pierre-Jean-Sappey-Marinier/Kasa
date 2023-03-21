import React from "react";
import "./Apropos.scss";
import { Link } from "react-router-dom";
function Apropos() {
  return (
    <nav>
      <Link to="/home" className="accueil">
        Accueil
      </Link>
      <Link to="/apropos" className="apropos">
        A propos
      </Link>
    </nav>
  );
}

export default Apropos;
