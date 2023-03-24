import React from "react";
import star from "../../assets/star.png";
import stargrey from "../../assets/stargrey.png";

const StarRating = ({ rating }) => {
  // const goldEtoile = (
  //   <div className="star-wrapper">
  //     <img alt="" className="gold-star" src={star} />
  //   </div>
  // );

  // const greyEtoile = (
  //   <div className="star-wrapper">
  //     <img alt="" className="gold-star" src={stargrey} />
  //   </div>
  // );

  // for (let i = 0; i <= rating; i++) {
  //   etoiles[i] = goldEtoile;
  // }

  // for (let i = etoiles.length; i < 5; i++) {
  //   etoiles[i] = greyEtoile;
  // }
  const etoiles = [];

  for (let i = 1; i <= 5; i++) {
    etoiles.push(
      <div className="star-wrapper" key={i}>
        <img alt="" className="gold-star" src={i <= rating ? star : stargrey} />
      </div>
    );
  }

  return etoiles;
};
export default StarRating;
