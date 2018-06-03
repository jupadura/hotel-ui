import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import SearchContainer from './search/containers/SearchContainer';

const App = () => (
  <Router>
    <Switch>
      <Route 
        exact 
        path="/"
        component={SearchContainer}>
      </Route>
    </Switch>
  </Router>
);

export default App;