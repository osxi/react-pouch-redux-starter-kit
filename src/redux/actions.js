'use strict';

import db from './db';

export function setGreeting(greeting) {
  return {
    type: 'SET_GREETING',
    greeting
  };
};

export function fetchPeople() {
  return db.allDocs({
    include_docs: true
  }).then(people => {
    return {
      type: 'FETCH_PEOPLE',
      people
    };
  }).catch(err => {
    throw err;
  });
};

export function receivePerson() {
  return {
    type: 'FETCH_PEOPLE'
  };
}
