import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from 'root/constants/routeConstants';
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
          <Route path={Routes.ABOUT} component={About} />
          <Route path={Routes.SHOP} component={Shop} />
        </Switch>
      </Router>
    </MainLayout>
  );
};

export default AppRoutes;
