import React from "react";
import logokasa from "./../../assets/logokasa.svg";

import "./logo.scss";

const logo = () => {
  return (
    <div className="logo">
      <img src={logokasa} alt="Logo" />
    </div>
  );
};

export default logo;
