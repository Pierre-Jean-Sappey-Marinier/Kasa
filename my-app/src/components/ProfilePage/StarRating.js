import React from "react";
import star from "../../assets/star.png";
import stargrey from "../../assets/stargrey.png";

const StarRating = ({ rating }) => {
  const goldEtoile = (
    <div className="star-wrapper">
      <img key={rating} alt="" className="gold-star" src={star} />
    </div>
  );

  const greyEtoile = (
    <div className="star-wrapper">
      <img key={rating} alt="" className="gold-star" src={stargrey} />
    </div>
  );

  const etoiles = [];
  console.log("🚀 ~ file: StarRating.js:25 ~ StarRating ~ etoiles:", etoiles);

  // for (let i = 0; i <= rating; i++) {
  //   etoiles[i] = goldEtoile;
  // }

  // for (let i = etoiles.length; i < 5; i++) {
  //   etoiles[i] = greyEtoile;
  // }

  for (let i = 1; i <= 5; i++) {
    etoiles.push(i <= rating ? goldEtoile : greyEtoile);
  }

  return etoiles;
};
export default StarRating;
