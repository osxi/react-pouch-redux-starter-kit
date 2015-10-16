'use strict';

import css from '../styles/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from '../redux/store';
import MUI from 'material-ui';
import NavBar from './nav-bar';
import React from 'react';
import ShowPeople from './show-people';
import { connect } from 'react-redux';
import { fetchPeople } from '../redux/actions';

const {
  Card,
  Styles
} = MUI;

const { ThemeManager } = Styles;

const { createFragment } = React.addons;

injectTapEventPlugin();

let App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },

  contextTypes: {
    router: React.PropTypes.func
  },

  componentDidMount() {
    store.dispatch(fetchPeople());
  },

  render() {
    let { greeting, people, history } = this.props;

    return (
      <div>
        <NavBar history={history} />

        <Card style={css.appCard}>
          <h1>{greeting}</h1>

          <ShowPeople people={people} />

          <div>
            {this.props.children}
          </div>
        </Card>
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
