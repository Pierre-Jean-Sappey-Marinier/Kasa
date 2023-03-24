//create a slider  with smooth transitions on react
import React, { useState } from "react";
import data from "../../data/data.json";
import "./Caroussel.scss";

function Slider() {
  const [index, setIndex] = useState(0);
  const length = images.length;
  const timeout = useRef(null);
  useEffect(() => {
    const nextSlide = () => {
      setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [index, length]);
  const nextSlide = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };
  const prevSlide = () => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        avant
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        Prochain
      </button>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Slider;
