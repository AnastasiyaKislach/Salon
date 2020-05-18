import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';

import clickSaga from './clickSaga';

function* rootSaga() {
  yield all([clickSaga()]);
}

export default rootSaga;
