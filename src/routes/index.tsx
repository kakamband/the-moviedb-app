import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';
import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/detail/movie/:movie+" component={Detail} />
    <Route path="/detail/serie/:serie+" component={Detail} />
    <Route path="/detail/documentary/:documentary+" component={Detail} />
    <Route path="/search" component={Search} />
  </Switch>
);

export default Routes;
