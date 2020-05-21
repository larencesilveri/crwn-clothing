import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
