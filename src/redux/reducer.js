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
  case 'TOGGLE_PEOPLE_MODAL':
    return {
      ...state,
      peopleModalOpen: !!!state.peopleModalOpen
    };
  case 'FETCH_PEOPLE':
    return {
      ...state,
      people: action.people
    };
  case 'DELETE_PERSON':
    return state;
  case 'DELETE_PEOPLE':
    return state;
  case 'UPSERT_PERSON':
    return state;
  default:
    return state;
  }
}
