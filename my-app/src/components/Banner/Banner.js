import React from "react";
import "./banner.scss";
const Banner = (props) => {
  const image = props.image;
  const isText = props.isText;
  return (
    <div className="banner">
      <img className="background" src={image} alt="" />

      <h1>{isText ? "Chez vous, partout et ailleurs" : ""}</h1>
    </div>
  );
};

export default Banner;
