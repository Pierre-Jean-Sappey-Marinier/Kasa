import React from "react";
import Card from "../Card/Card";
import data from "../../data/data.json";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((data) => {
        return (
          <>
            <a href="#" className="box">
              <Card id={data.id} cover={data.cover} title={data.title} />
            </a>
          </>
        );
      })}
    </div>
  );
};

export default Gallery;
