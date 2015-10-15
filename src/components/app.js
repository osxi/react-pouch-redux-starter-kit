'use strict';

import store from '../redux/store';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../redux/actions';
import { Link } from 'react-router';

let App = React.createClass({
  componentDidMount() {
    store.dispatch(fetchPeople());
  },

  render() {
    let { greeting } = this.props;

    return (
      <div>
        <h1>App</h1>

        <p>{greeting}</p>

        <p>
          People: {JSON.stringify(this.props.people || {})}
        </p>

        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/new-person">New Person</Link></li>
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
    greeting: state.greeting,
    people: state.people
  };
}
