'use strict';

let initialState = {
  greeting: 'Greetings!'
};

export default (state=initialState, action) => {
  switch (action.type) {
  case 'SET_GREETING':
    return {
      ...state,
      greeting: action.greeting
    };
  default:
    return state;
  }
}
