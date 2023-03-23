import React, { useState } from "react";
import { useParams } from "react-router-dom";

import data from "../../data/data.json";
import "./Caroussel.scss";
const Carousel = () => {
  const [index, setIndex] = useState(0);
  //let { id } = useParams();
  let { id: paramId } = useParams();

  const dataLocale = data.find(({ id }) => id === paramId);
  //const dataLocale = data.find(({ id: itemId }) => itemId === id);
  //const dataLocale = data.find((item) => item.id === id);
  const length = dataLocale.pictures.length;

  const previousImage = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const nextImage = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      {dataLocale.pictures.map((urlImage, indexImage) => {
        return (
          <div className={indexImage === index ? "slide active" : "slide"}>
            {indexImage === index && (
              <img className="bang" src={urlImage} alt="" index={index} />
            )}
          </div>
        );
      })}

      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
      {index}
    </div>
  );
};

export default Carousel;