import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { Routes } from 'types/Routes';

import Home from './Home';
export const ROUTES: Routes = {
  ROOT: {
    path: '/',
    component: Home,
  },
  HOME: {
    path: '/home',
    component: Home,
  },
};

const RoutesComponent = (): JSX.Element => {
  return (
    <Switch>
      {Object.values(ROUTES).map((r) => (
        <Route key={r.path} {...r} exact={r.path === '/'} />
      ))}
    </Switch>
  );
};

export default RoutesComponent;
