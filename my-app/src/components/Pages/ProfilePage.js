import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfilePageInformation from "../ProfilePage/ProfilePageInformations";
import Caroussel from "../Caroussel/Caroussel";
const ProfilePage = () => {
  // console.log(useParams());
  let { id } = useParams();

  // console.log({ id });
  return (
    <>
      <Header />
      <Caroussel />
      <ProfilePageInformation />
      <Footer />
    </>
  );
};

export default ProfilePage;
