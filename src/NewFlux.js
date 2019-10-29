import React from 'react';
import { registerDispatcher, registerState } from './util';
import { useReducer } from 'react';
import Body from './Body';

const initialState = {count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return window.newVal;
  }
}

function NewFlux(props) {
  // const [state, dispatch] = useReducer(props.reducer, props.initialState);
  // registerState(state);
  // registerDispatcher(dispatch);

  return (
    <div>
      {props.children}
    </div>
  );
}

export default NewFlux;
