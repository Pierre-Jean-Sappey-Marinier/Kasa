import React from "react";
import "../Gallery/Gallery.scss";
type CardProps = {
  title: string;
  id: string;
  cover: string;
};

const Card: React.FC<CardProps> = ({ title, id, cover }) => {
  return (
    <div id={id} className="img_gallery">
      <img className="image" src={cover} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
