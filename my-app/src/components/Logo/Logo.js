import React from "react";
import k from "./../../assets/k.png";
import house from "./../../assets/house.png";
import s from "./../../assets/s.png";
import a from "./../../assets/a.png";
import "./logo.css";

const logo = () => {
  return (
    <div className="logo">
      <img src={k} alt="Logo" />
      <img src={house} alt="Logo" />
      <img src={s} alt="Logo" />
      <img src={a} alt="Logo" />
    </div>
  );
};

export default logo;
