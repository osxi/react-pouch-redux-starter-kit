'use strict';

import { Provider } from 'react-redux';
import Router from './components/router';
import React from 'react';
import store from './redux/store';

React.render(
    <Provider store={store}>
      {() => <Router />}
    </Provider>
    , document.getElementById('app')
);
