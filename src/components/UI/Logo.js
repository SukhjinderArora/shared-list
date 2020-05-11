import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <Link to="/" className={classes.logo}>
      <Typography variant="h6">
        <Box component="span">Shared</Box>
        <Box component="span" color="primary.main">
          List
        </Box>
      </Typography>
    </Link>
  );
};

export default Logo;
