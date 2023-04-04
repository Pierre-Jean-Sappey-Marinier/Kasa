import React from "react";
import star from "../../assets/star.svg";
import stargrey from "../../assets/stargrey.svg";

// console.log([...Array(parseInt(5)).keys()]);

const StarRating = ({ rating }) => {
  const laforet = [...Array(parseInt(5)).keys()];

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
