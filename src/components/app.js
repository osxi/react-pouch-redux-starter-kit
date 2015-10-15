'use strict';

import css from '../styles/app';
import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../redux/actions';
import { Link } from 'react-router';

const {
  Card,
  RaisedButton,
  Styles
} = MUI;

const { ThemeManager } = Styles;

let App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Styles.LightRawTheme),
    };
  },

  componentDidMount() {
    store.dispatch(fetchPeople());
  },

  render() {
    let { greeting } = this.props;

    return (
      <Card style={css.appCard}>
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
      </Card>
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
