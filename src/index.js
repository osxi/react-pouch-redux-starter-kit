'use strict';

import { Provider } from 'react-redux';
import Router from './components/router';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>
    , document.getElementById('app')
);
