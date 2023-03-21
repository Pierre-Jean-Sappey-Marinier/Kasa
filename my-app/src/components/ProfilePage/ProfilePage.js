import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carousel from "./Caroussel";
import "./Caroussel.scss";
const ProfilePage = () => {
  // console.log(useParams());
  let { id } = useParams();

  // console.log({ id });
  return (
    <>
      <Header />
      <Carousel />
      <Footer />
    </>
  );
};

export default ProfilePage;
