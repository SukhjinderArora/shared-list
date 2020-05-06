import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = propTypes;

export default Layout;
