import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import SearchContainer from './search/containers/SearchContainer';
import styles from "./styles.scss";

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