import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../Slider2/Slider2";
import data from "../../data/data.json";
import "./Caroussel.scss";
const Carousel = () => {
  return (
    <>
      <Slider />
    </>
  );
};

export default Carousel;
