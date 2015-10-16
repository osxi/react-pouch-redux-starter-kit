'use strict';

import MUI from 'material-ui';
import React from 'react';
import { Link } from 'react-router';

const { Tabs, Tab } = MUI;

export default React.createClass({
  _handleTabActive(tab) {
    let { route } = tab.props;
    let { history } = this.props;

    history.pushState(null, route);
  },

  render() {
    return (
      <Tabs>
        <Tab label="Index" route="/" value="root"
             onActive={this._handleTabActive} />
        <Tab label="About" route="/about" value="about"
             onActive={this._handleTabActive} />
        <Tab label="New Person" route="/new-person" value="new-person"
             onActive={this._handleTabActive} />
      </Tabs>
    );
  }
});
