import React from "react";
import "../styles/Gallery.css";
const Card = ({ title, id, cover }) => {
  return (
    <div id={id} className="img_gallery">
      <img className="image" src={cover} alt="background" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
