import { wrapStore } from 'webext-redux';
import { createStore } from 'redux'

import { TEST } from '../actions';

const startState = {
  list: []
};

function mainReducer(state = startState, action) {
  switch (action.type) {
    case TEST:
      const stateCopy = {...state};
      stateCopy.list = [...state.list, action.text];
      return stateCopy;
    default:
      return state
  }
}

const store = createStore(mainReducer, startState)

wrapStore(store);
