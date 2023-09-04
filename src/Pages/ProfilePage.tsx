import React from "react";
import ProfilePageInformation from "../components/ProfilePage/ProfilePageInformations";
import Caroussel from "../components/Caroussel/Caroussel";
import { useLoaderData } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

type ApartmentData = {
  title: string;
  description: string;
  pictures: string[];
};

const ProfilePage = () => {
  const appartementData = useLoaderData() as ApartmentData;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{appartementData.title}</title>
          <meta name="description" content={appartementData.description} />
        </Helmet>
        <Caroussel slides={appartementData.pictures} />
        <ProfilePageInformation dataOfOneLocation={appartementData} />
      </HelmetProvider>
    </>
  );
};

export default ProfilePage;
