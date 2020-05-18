import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux/es/components/Provider';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from './store/configureStore';
import AppRoutes from './routes';
import './index.scss';

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedRouter history={history}>
        <AppRoutes />
      </ConnectedRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
