import React from "react";
import logokasa from "./../../assets/logokasa.svg";
import { NavLink } from "react-router-dom";

import "./logo.scss";

const logo = () => {
  return (
    <NavLink to="/home" className="accueil">
      <div className="logo">
        <img src={logokasa} alt="Logo" />
      </div>
    </NavLink>
  );
};

export default logo;
