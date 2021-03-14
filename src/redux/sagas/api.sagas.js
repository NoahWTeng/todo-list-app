import {
  all, put, takeEvery,
} from 'redux-saga/effects'

import { API_REQUEST } from '../constants';

function* apiFetch({ meta, payload, token }) {
  const { method, url, onSuccess, onError } = meta;

  try {
    const res = yield fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token || '',
      },
      body: payload && JSON.stringify(payload),
    })

    const data = yield res.json()

    yield put(onSuccess(data))
  } catch (err) {
    yield put(onError(err))
  }
}

export function* apiRoot() {
  yield all([
    yield takeEvery(API_REQUEST, apiFetch),
  ])
}
