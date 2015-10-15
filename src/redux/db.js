'use strict';

import store from './store';
import PouchDB from 'pouchdb';
import { receivePerson } from './actions';

let db = new PouchDB('app');

db.changes({
  live: true,
  include_doc: true,
  since: 'now'
}).on('change', changeCallback.bind(this))
  .on('error', console.log.bind(console));

function changeCallback(change) {
  // TODO: dispatch with new data

  // let { id } = change;

  // db.get(id).then(newPerson => {
  //   store.dispatch(receivePerson(newPerson));
  // });

  store.dispatch(receivePerson());
}

export default db;
