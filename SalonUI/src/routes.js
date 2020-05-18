import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './modules/MainLayout';
import Home from './modules/Home';
import About from './modules/About';
import Shop from './modules/Shop';

const AppRoutes = () => {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
    </MainLayout>
  );
};

export default AppRoutes;
