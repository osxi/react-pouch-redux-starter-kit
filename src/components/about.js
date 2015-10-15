'use strict';

import store from '../redux/store';
import React from 'react';
import { findDOMNode } from 'react-dom';
import { setGreeting } from '../redux/actions';

export default React.createClass({
  render() {
    return (
      <h3>About</h3>
    );
  }
});
