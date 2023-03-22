import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carousel from "./Caroussel";
import ProfilePageInformation from "./ProfilePageInformations";
const ProfilePage = () => {
  // console.log(useParams());
  let { id } = useParams();

  // console.log({ id });
  return (
    <>
      <Header />
      <Carousel />
      <ProfilePageInformation />
      <Footer />
    </>
  );
};

export default ProfilePage;
