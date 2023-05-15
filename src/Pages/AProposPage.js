import React from 'react';
import Banner from '../components/Banner/Banner';
import background_apropos from '../assets/background_apropos.png';
import Collapses from '../components/Collapse/Collapses';
import aproposData from '../data/aproposData.json';
import './AProposPage.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AProposPage = () => {
  return (
    <HelmetProvider>
      <div className='AProposPage'>
        <Helmet>
          <title>A propos</title>
          <meta name='description' content='A propos de nous, nos valeurs.' />
        </Helmet>
        <Banner image={background_apropos} isText={false} />
        <Collapses props={aproposData} />
      </div>
    </HelmetProvider>
  );
};

export default AProposPage;
