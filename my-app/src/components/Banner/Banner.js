import React from "react";
import background from "../../assets/background.png";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <img className="background" src={background} alt="background" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
