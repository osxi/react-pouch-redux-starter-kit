'use strict';

import { createStore, applyMiddleware } from 'redux';
import { logger } from './middleware';
import promiseMiddleware from 'redux-promise';
import reducer from './reducer';

let createStoreWithMiddleware = applyMiddleware(logger, promiseMiddleware)(createStore);

export default createStoreWithMiddleware(reducer);
