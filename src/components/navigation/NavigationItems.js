import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SunIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/Brightness3';
import NewIcon from '@material-ui/icons/Add';
import OpenIcon from '@material-ui/icons/Launch';

const propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  navList: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    marginLeft: theme.spacing(2),
  },
  navLink: {
    textDecoration: 'none',
  },
}));

const NavigationItems = ({ changeTheme }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDarkModeEnabled = theme.palette.type === 'dark';
  return (
    <nav>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <IconButton onClick={changeTheme}>
            {isDarkModeEnabled ? (
              <SunIcon style={{ color: '#ffc107' }} />
            ) : (
              <MoonIcon />
            )}
          </IconButton>
        </li>
        <li className={classes.navItem}>
          <Link to="/open" className={classes.navLink}>
            <Button startIcon={<OpenIcon />}>Open</Button>
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/new" className={classes.navLink}>
            <Button variant="contained" color="primary" startIcon={<NewIcon />}>
              New
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavigationItems.propTypes = propTypes;
export default NavigationItems;
