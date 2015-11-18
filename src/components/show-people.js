'use strict';

import store from '../redux/store';
import MUI from 'material-ui';
import React from 'react';
import { connect } from 'react-redux';
import { togglePeopleModal } from '../redux/actions';

const {
  Dialog,
  RaisedButton
} = MUI;

let ShowPeople = React.createClass({
  _togglePeopleModal() {
    store.dispatch(togglePeopleModal());
  },

  render() {
    let { people, peopleModalOpen } = this.props;

    return (
      <span>
        <RaisedButton label="Show People" primary={true}
                      onClick={this._togglePeopleModal} />

        <Dialog title="People in the Redux Store" ref="peopleDialog"
                autoDetectWindowHeight={true} autoScrollBodyContent={true}
                open={peopleModalOpen} onRequestClose={this._togglePeopleModal}>
          <div><pre>{JSON.stringify(people, null, 2)}</pre></div>
        </Dialog>
      </span>
    );
  }
});

export default connect(mapStateToProps)(ShowPeople);

function mapStateToProps(state) {
  return {
    peopleModalOpen: state.peopleModalOpen
  };
};
