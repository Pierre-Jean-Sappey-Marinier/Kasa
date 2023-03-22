import React from "react";
import star from "../../assets/star.png";

const StarRating = ({ rating }) => {
  // console.log("🚀 ~ file: StarRating.js:4 ~ StarRating ~ rating:", rating);

  for (let i = 0; i <= rating; i++) {
    <div className="star-wrapper">
      <img key={rating} alt="" className="gold-star" src={star} />
    </div>;
  }

  const etoile = (
    <div className="star-wrapper">
      <img key={rating} alt="" className="gold-star" src={star} />
    </div>
  );

  const etoiles = [];

  for (let i = 0; i <= rating; i++) {
    etoiles[i] = etoile;
    //etoiles.push(etoile);
    console.log(i);
  }

  return etoiles;

  console.log(etoile);
  // {
  //   const totalStars = 5;
  //   const activeStars = { rating };

  //   return (
  //     <span>
  //       {[1, 2, 3, 4, 5].map((value) => (
  //         <img key={rating} alt="" className="star" src={star} />
  //       ))}
  //     </span>
  //   );
  // }
};
export default StarRating;
