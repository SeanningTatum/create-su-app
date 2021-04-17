import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { SidebarLayout, TopbarLayout } from '@app/components/layout';

import Dashboard from './Dashboard/Dashboard.container';
import Directory from './Directory/Directory.container';

function HRRoutes(): JSX.Element {
  return (
    <TopbarLayout>
      <Switch>
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/dashboard/directory" component={Directory} />
      </Switch>
    </TopbarLayout>
  );
}

export default HRRoutes;
