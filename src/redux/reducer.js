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
  case 'FETCH_PEOPLE':
    return {
      ...state,
      people: action.people
    };
  case 'RECEIVE_PERSON':
    return state;
  default:
    return state;
  }
}
