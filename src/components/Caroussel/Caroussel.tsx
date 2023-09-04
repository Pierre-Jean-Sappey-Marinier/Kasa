//create a slider  with smooth transitions on react
import React, { useState, useRef, useEffect } from "react";
import "./Caroussel.scss";
import arrow from "../../assets/arrow.png";

type CarousselProps = {
  slides: string[];
};

function Caroussel({ slides }: CarousselProps) {
  ////////////////
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const length = slides.length;

  ///////////////
  useEffect(() => {
    const nextSlide = () => {
      setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
    };
    timeoutRef.current = window.setTimeout(nextSlide, 30000);

    return function () {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
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
  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  ///////////////
  return (
    <div className="caroussel">
      <img src={arrow} alt="" className="left-arrow" onClick={prevSlide} />
      <ul className="slider">
        {slides.map((urlImage, indexImage) => {
          return (
            <li
              key={urlImage}
              className={
                "slide" + (indexImage === index ? "-active" : " hidden")
              }
              // className={indexImage === index ? "slide-active" : "slide"}
            >
              {indexImage === index && (
                <img
                  src={urlImage}
                  alt=""
                  className="image-logement"
                  // index={index}
                />
              )}
            </li>
          );
        })}
      </ul>
      <img src={arrow} alt="" className="right-arrow" onClick={nextSlide} />
      <div className="count">
        {index + 1}/{length}
      </div>
    </div>
  );
}

export default Caroussel;
