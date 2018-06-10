import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';


const RouterComponent = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default RouterComponent;
