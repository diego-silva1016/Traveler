import React from 'react';

import { Switch, Route } from 'react-router-dom';
import SingIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Main from '../pages/Main';
import AddCity from '../pages/AddCity';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Main>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/add-city" component={AddCity} />
    </Main>
  </Switch>
);

export default Routes;
