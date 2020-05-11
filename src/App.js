import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles/';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core';

import { dark, light } from './base/MuiTheme';

import Layout from './components/Layout';
import Home from './components/Home';
import OpenList from './components/OpenList';
import CreateList from './components/CreateList';

function App() {
  const [prefersDarkMode, setDarkMode] = useState(true);
  const theme = React.useMemo(
    () => createMuiTheme(prefersDarkMode ? dark : light),
    [prefersDarkMode]
  );
  const changeTheme = () => {
    setDarkMode(!prefersDarkMode);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Layout changeTheme={changeTheme}>
            <Switch>
              <Route path="/open">
                <OpenList />
              </Route>
              <Route path="/new">
                <CreateList />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Layout>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
