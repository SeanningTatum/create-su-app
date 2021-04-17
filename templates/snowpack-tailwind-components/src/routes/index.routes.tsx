import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import HRRoutes from './HR/HR.routes';

function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={HRRoutes} />
    </Switch>
  );
}

export default App;
