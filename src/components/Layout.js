import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';

const propTypes = {
  children: PropTypes.element.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

const Layout = ({ changeTheme, children }) => {
  return (
    <>
      <Navbar changeTheme={changeTheme} />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  );
};

Layout.propTypes = propTypes;

export default Layout;
