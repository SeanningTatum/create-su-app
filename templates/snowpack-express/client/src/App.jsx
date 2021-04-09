import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Items from './views/Items';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/items" component={Items} />
    </Switch>
  );
}

export default App;
