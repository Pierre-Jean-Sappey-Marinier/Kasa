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
          <React.Fragment key={data.id}>
            <Link
              key={data.id}
              to={`/appartements/${data.id}`}
              className="linkToCard"
            >
              <Card
                key={data.id}
                id={data.id}
                cover={data.cover}
                title={data.title}
              />
            </Link>
          </React.Fragment>
        );
      })}
      {console.log("🚀 ~ file: Gallery.js:28 ~ {data.map ~ data:", data)}{" "}
    </div>
  );
};

export default Gallery;
