import React from 'react';

import { Switch, Route } from 'react-router-dom';
import SingIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
