import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from 'root/constants/routeConstants';
import MainLayout from './modules/MainLayout';
import InnerLayout from './modules/common/InnerLayout';
import Home from './modules/Home';
import About from './modules/About';
import Shop from './modules/Shop';

const AppRoutes = () => {
  return (
    <MainLayout>
      <Router>
        <InnerLayout>
          <Switch>
            <Route path={Routes.HOME} component={Home} exact />
            <Route path={Routes.COLLECTIONS} component={About} />
            <Route path={Routes.ACCESSORIES} component={Shop} />
            <Route path={Routes.NEWS} component={About} />
            <Route path={Routes.ABOUT} component={Shop} />
            <Route path={Routes.BRIDES} component={About} />
            <Route path={Routes.APPLY} component={Shop} />
            <Route render={() => <p>Not found</p>} />
          </Switch>
        </InnerLayout>
      </Router>
    </MainLayout>
  );
};

export default AppRoutes;
