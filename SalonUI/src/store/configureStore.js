import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

export const history = createBrowserHistory();

const router = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
  let store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(sagaMiddleware, router))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
