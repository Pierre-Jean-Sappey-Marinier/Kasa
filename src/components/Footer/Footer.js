import React from 'react';
import { useLocation } from 'react-router-dom';
import logokasa from './../../assets/logokasa.svg';
import('./Footer.scss');

const Footer = () => {
  return (
    <footer>
      <div className='logo_footer'>
        <img src={logokasa} alt='Logo' />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
export default Footer;
