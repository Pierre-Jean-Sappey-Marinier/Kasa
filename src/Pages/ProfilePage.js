import React from 'react';
import ProfilePageInformation from '../components/ProfilePage/ProfilePageInformations';
import Caroussel from '../components/Caroussel/Caroussel';
import { useLoaderData } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ProfilePage = () => {
  const appartementData = useLoaderData();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{appartementData.title}</title>
          <meta name='description' content={appartementData.description} />
        </Helmet>
        <Caroussel slides={appartementData.pictures} />
        <ProfilePageInformation dataOfOneLocation={appartementData} />
      </HelmetProvider>
    </>
  );
};

export default ProfilePage;
