'use strict';

import MUI from 'material-ui';
import React from 'react';

const {
  Dialog,
  RaisedButton
} = MUI;

export default React.createClass({
  _showPeople() {
    this.refs.peopleDialog.show();
  },

  render() {
    let { people } = this.props;

    return (
      <p>
        <RaisedButton label="Show People" primary={true}
                      onClick={this._showPeople} />

        <Dialog title="People in the Redux Store" ref="peopleDialog"
                autoDetectWindowHeight={true} autoScrollBodyContent={true}>
          <div><pre>{JSON.stringify(people, null, 2)}</pre></div>
        </Dialog>
      </p>
    );
  }
});
