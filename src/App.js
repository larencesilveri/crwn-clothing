import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
