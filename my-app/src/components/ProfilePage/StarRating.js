import React from "react";
import star from "../../assets/star.png";
import stargrey from "../../assets/stargrey.png";

const StarRating = ({ rating }) => {
  return (
    <>
      {[...Array(parseInt(rating)).keys()].map((item, index) => {
        <div className="star-wrapper" key={item}>
          <img
            alt=""
            className="gold-star"
            src={item <= parseInt(rating) ? star : stargrey}
          />
        </div>;
        {
          console.log(
            "🚀 ~ file: StarRating.js:23 ~ ...Array ~ item:",
            item <= parseInt(rating)
          );
        }
      })}
    </>
  );
};
export default StarRating;
