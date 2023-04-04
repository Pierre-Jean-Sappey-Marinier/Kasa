import React from "react";
import { useParams } from "react-router-dom";
import ProfilePageInformation from "../ProfilePage/ProfilePageInformations";
import Caroussel from "../Caroussel/Caroussel";
const ProfilePage = () => {
  console.log(useParams());
  let { id } = useParams();

  return (
    <>
      <Caroussel idLocale={id} />
      <ProfilePageInformation idLocale={id} />
    </>
  );
};

export default ProfilePage;
