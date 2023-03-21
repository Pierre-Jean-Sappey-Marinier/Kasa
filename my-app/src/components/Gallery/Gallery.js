import React from "react";
import Card from "../Card/Card";
import data from "../../data/data.json";
import "./Gallery.scss";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((data) => {
        return (
          <>
            <Link to={`/users/${data.id}`} className="linkToCard">
              <Card id={data.id} cover={data.cover} title={data.title} />
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Gallery;
