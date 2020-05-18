import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { clickReducer } from '../reducers/clickReducer';
import clickSaga from '../sagas/clickSaga';

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  let store = createStore(clickReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(clickSaga);
  return store;
}
