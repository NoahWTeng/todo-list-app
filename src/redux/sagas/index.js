import { all } from 'redux-saga/effects'

import { photosRoot } from './photo.sagas';
import { apiRoot } from './api.sagas';

export function* sagaRoot() {
  yield all([
    photosRoot(),
    apiRoot(),
  ])
}
