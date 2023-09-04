import React from "react";
import "./banner.scss";

type BannerProps = {
  image: string;
  isText: boolean;
};

const Banner: React.FC<BannerProps> = ({ image, isText }) => (
  <div className="banner">
    <img className="background" src={image} alt="" />
    <h1>{isText ? "Chez vous, partout et ailleurs" : "A propos"}</h1>
  </div>
);

export default Banner;
