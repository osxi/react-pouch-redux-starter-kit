'use strict';

import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducer from './reducer';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = reduxLogger();

let createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);

export default createStoreWithMiddleware(reducer);
