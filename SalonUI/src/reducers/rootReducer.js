import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { click } from './clickReducer';

const rootReducer = (history) =>
  combineReducers({
    click,
    router: connectRouter(history)
  });

export default rootReducer;
