import React, { useState } from "react";
import data from "../../data/data.json";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const dataLocale = data[0];
  const length = dataLocale.pictures.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      {dataLocale.pictures.map((element) => {
        return (
          <div>
            <img className="bang" src={element} alt="" />
          </div>
        );
      })}

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      {index}
    </div>
  );

  // return (
  //   <div className="carousel">
  //     {data.map((s) => {
  //       return s.pictures.map((element) => {
  //         return (
  //           <div>
  //             <img className="bang" src={element} alt="" />
  //           </div>
  //         );
  //       });
  //     })}

  //     <button onClick={handlePrevious}>Previous</button>
  //     <button onClick={handleNext}>Next</button>
  //     {index}
  //   </div>
  // );
};

export default Carousel;
