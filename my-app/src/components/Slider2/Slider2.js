//create a slider  with smooth transitions on react
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Slider2.scss";
import data from "../../data/data.json";
// import "./Caroussel.scss";

function Slider() {
  ////////////////
  const [index, setIndex] = useState(0);
  console.log("🚀 ~ file: Slider2.js:11 ~ Slider ~ index:", index);
  const timeout = useRef(null);
  ////////////////////
  let { id: paramId } = useParams();

  const dataLocale = data.find(({ id }) => id === paramId);
  const length = dataLocale.pictures.length;

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
  if (!Array.isArray(dataLocale.pictures) || length <= 0) {
    return null;
  }

  ///////////////
  return (
    <div className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        avant
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        Prochain
      </button>
      {dataLocale.pictures.map((urlImage, indexImage) => {
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
    </div>
  );
}

export default Slider;
