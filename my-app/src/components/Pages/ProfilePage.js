import React from "react";
import { useParams } from "react-router-dom";
import ProfilePageInformation from "../ProfilePage/ProfilePageInformations";
import Caroussel from "../Caroussel/Caroussel";
import data from "../../data/data.json";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProfilePage = () => {
  const appartementData = useLoaderData();

  return (
    <>
      <Helmet>
        <title>{appartementData.title}</title>
        <meta name="description" content={appartementData.description} />
        <meta name="keywords" content={appartementData.title} />
      </Helmet>
      <Caroussel slides={appartementData.pictures} />
      <ProfilePageInformation dataOfOneLocation={appartementData} />
    </>
  );
};

export default ProfilePage;
