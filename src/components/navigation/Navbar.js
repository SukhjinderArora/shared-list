import React from 'react';
import PropTypes from 'prop-types';
import { Container, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../UI/Logo';
import NavigationItems from './NavigationItems';

const propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.background.contrastText,
  },
  toolBar: {
    justifyContent: 'space-between',
  },
}));

const Navbar = ({ changeTheme }) => {
  const classes = useStyles();
  return (
    <Container>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Logo />
          <NavigationItems changeTheme={changeTheme} />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

Navbar.propTypes = propTypes;
export default Navbar;
