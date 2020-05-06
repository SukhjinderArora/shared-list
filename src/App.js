import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import OpenList from './components/OpenList';
import CreateList from './components/CreateList';

function App() {
  return (
    <div>
      <Layout>
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
    </div>
  );
}

export default App;
