import { handleActions } from 'redux-actions';
import { setCounter } from '../actions/clickActions';

const defaultState = {
  counter: 0
};

export const click = handleActions(
  {
    [setCounter]: (state, action) => {
      return { ...state, counter: state.counter + 1 };
    }
  },
  defaultState
);
