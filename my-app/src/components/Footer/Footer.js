import React from "react";
import k from "../../assets/k.png";
import house from "../../assets/house.png";
import s from "../../assets/s.png";
import a from "../../assets/a.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo_footer">
        <img src={k} alt="Logo" />
        <img src={house} alt="Logo" />
        <img src={s} alt="Logo" />
        <img src={a} alt="Logo" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
export default Footer;
