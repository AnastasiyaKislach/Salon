import { createStore } from 'redux';
import { clickReducer } from '../reducers/clickReducer';


export function configureStore() {
    let store = createStore(clickReducer)
    return store;
};