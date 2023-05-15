import React from "react";
import "../Gallery/Gallery.scss";
const Card = ({ title, id, cover }) => {
  return (
    <div id={id} className="img_gallery">
      <img className="image" src={cover} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
