import React from "react";
import star from "../../assets/star.svg";
import stargrey from "../../assets/stargrey.svg";

const StarRating = ({ rating }) => {
  const laforet = [...Array(parseInt(5, 10)).keys()];

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
