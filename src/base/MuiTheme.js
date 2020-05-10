const typography = {
  fontFamily: `'Archia', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
};

export const dark = {
  palette: {
    type: 'dark',
    primary: {
      main: '#BB86F8',
      contrastText: '#000000',
    },
    secondary: {
      main: '#03DAC6',
      contrastText: '#000000',
    },
    error: {
      main: '#CF6679',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#121212',
      contrastText: '#ffffff',
    },
  },
  typography,
};

export const light = {
  palette: {
    type: 'light',
    primary: {
      main: '#1a73e8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#03DAC6',
      contrastText: '#000000',
    },
    error: {
      main: '#B00020',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      contrastText: '#000000',
    },
  },
  typography,
};
