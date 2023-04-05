//create a slider  with smooth transitions on react
import React, { useState, useRef, useEffect } from "react";
import "./Caroussel.scss";
import data from "../../data/data.json";
import arrow from "../../assets/arrow.png";
// import "./Caroussel.scss";

function Caroussel({ slides }) {
  ////////////////
  const [index, setIndex] = useState(0);
  const timeout = useRef(null);

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
      <ul className="slider">
        <img src={arrow} className="left-arrow" onClick={prevSlide} />
        {slides.pictures.map((urlImage, indexImage) => {
          return (
            <li
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
            </li>
          );
        })}
        <img src={arrow} className="right-arrow" onClick={nextSlide} />
      </ul>
      <div className="count">
        {index + 1}/{length}
      </div>
    </>
  );
}

export default Caroussel;