'use strict';

import store from './store';
import PouchDB from 'pouchdb';
import { fetchPeople } from './actions';

let db = new PouchDB('app');

db.changes({
  live: true,
  include_doc: true, // eslint-disable-line camelcase
  since: 'now'
}).on('change', changeCallback)
  .on('error', console.log.bind(console));

function changeCallback() {
  store.dispatch(fetchPeople());

  // TODO: add/remove specific docs instead of fetching allDocs

  // if (change.deleted) {
  //   store.dispatch(deletePerson(change.id))
  // } else {
  //   store.dispatch(upsertPerson(change.doc));
  // }
}

export default db;
