import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux/es/components/Provider';
import { configureStore } from './store/configureStore';
import MainLayout from './modules/MainLayout';
import './index.scss';

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <MainLayout />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
