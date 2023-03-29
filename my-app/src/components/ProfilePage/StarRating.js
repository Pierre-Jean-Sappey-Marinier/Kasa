import React from "react";
import star from "../../assets/star.png";
import stargrey from "../../assets/stargrey.png";

// console.log([...Array(parseInt(5)).keys()]);

const StarRating = ({ rating }) => {
  const laforet = [...Array(parseInt(5)).keys()];
  console.log("🚀 ~ file: StarRating.js:20 ~ StarRating ~ laforet:", [
    ...Array(parseInt(5)).keys(),
  ]);
  // const foret = Object.assign({}, laforet);
  // console.log("🚀 ~ file: StarRating.js:20 ~ StarRating ~ foret:", foret);
  return (
    <>
      {laforet.map((item, index) => {
        return (
          <div className="star-wrapper" key={item}>
            <img
              alt=""
              className="gold-star"
              src={rating <= item ? stargrey : star}
            />
          </div>
        );
      })}
    </>
  );
};
export default StarRating;
