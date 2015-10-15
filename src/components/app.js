'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

let App = React.createClass({
  render() {
    let { greeting } = this.props;

    return (
      <div>
        <h1>App</h1>

        <p>{greeting}</p>

        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default connect(mapStateToProps)(App);

function mapStateToProps(state) {
  return {
    greeting: state.greeting
  };
}
