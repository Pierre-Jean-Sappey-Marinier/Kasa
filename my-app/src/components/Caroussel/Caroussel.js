//create a slider  with smooth transitions on react
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Caroussel.scss";
import data from "../../data/data.json";
import arrow from "../../assets/arrow.png";
// import "./Caroussel.scss";

function Caroussel() {
  ////////////////
  const [index, setIndex] = useState(0);
  const timeout = useRef(null);
  ////////////////////
  let { id: paramId } = useParams();

  const slides = data.find(({ id }) => id === paramId);
  const length = slides.pictures.length;

  ///////////////
  useEffect(() => {
    const nextSlide = () => {
      setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
    };
    timeout.current = setTimeout(nextSlide, 30000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [index, length]);

  ///////////////
  const nextSlide = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };
  const prevSlide = () => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };
  if (!Array.isArray(slides.pictures) || length <= 0) {
    return null;
  }

  ///////////////
  return (
    <>
      <div className="slider">
        <img src={arrow} className="left-arrow" onClick={prevSlide} />
        {slides.pictures.map((urlImage, indexImage) => {
          return (
            <div
              key={urlImage}
              className={indexImage === index ? "slide-active" : "slide"}
            >
              {indexImage === index && (
                <img
                  src={urlImage}
                  alt=""
                  className="image-logement"
                  index={index}
                />
              )}
            </div>
          );
        })}
        <img src={arrow} className="right-arrow" onClick={nextSlide} />
      </div>
      <div className="count">
        {index + 1}/{length}
      </div>
    </>
  );
}

export default Caroussel;
