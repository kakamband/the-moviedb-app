import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';
import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/detail" component={Detail} />
    <Route path="/search" component={Search} />
  </Switch>
);

export default Routes;
