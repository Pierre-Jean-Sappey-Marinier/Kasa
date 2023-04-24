import React from 'react';
import ProfilePageInformation from '../components/ProfilePage/ProfilePageInformations';
import Caroussel from '../components/Caroussel/Caroussel';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ProfilePage = () => {
  const appartementData = useLoaderData();

  return (
    <>
      <Helmet>
        <title>{appartementData.title}</title>
        <meta name='description' content={appartementData.description} />
      </Helmet>
      <Caroussel slides={appartementData.pictures} />
      <ProfilePageInformation dataOfOneLocation={appartementData} />
    </>
  );
};

export default ProfilePage;
