import React from "react";
import { useParams } from "react-router-dom";
import ProfilePageInformation from "../ProfilePage/ProfilePageInformations";
import Caroussel from "../Caroussel/Caroussel";
import data from "../../data/data.json";
import { useLoaderData } from "react-router-dom";

const ProfilePage = () => {
  const loaderData = useLoaderData();
  console.log(
    "🚀 ~ file: ProfilePage.js:12 ~ ProfilePage ~ loaderData:",
    loaderData
  );

  return (
    <>
      <Caroussel slides={loaderData} />
      <ProfilePageInformation dataOfOneLocation={loaderData} />
    </>
  );
};

export default ProfilePage;
