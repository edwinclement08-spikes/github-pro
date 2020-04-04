import { wrapStore } from 'webext-redux';
import { createStore } from 'redux'
import { TEST_ADD, TEST_CLR } from '../actions';
import { hydrateState, persistState } from './persist';

const startState = {
  list: []
};

function mainReducer(state = startState, action) {
  const stateCopy = {...state};
  switch (action.type) {
    case TEST_ADD:
      stateCopy.list = [...state.list, action.text];
      return stateCopy;
    case TEST_CLR:
      stateCopy.list = [];
      return stateCopy;
    default:
      return state
  }
}

function stateSaver(state, action)  {
  const newState = mainReducer(state, action);
  if(newState !== state) {
    persistState(newState)
  }
  return newState;
}

hydrateState(startState).then((state) => {
  const store = createStore(stateSaver, state)
  console.log('hydrated state', state);
  wrapStore(store);
});
