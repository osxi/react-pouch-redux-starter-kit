'use strict';

export function setGreeting(greeting) {
  return {
    type: 'SET_GREETING',
    greeting
  };
};
