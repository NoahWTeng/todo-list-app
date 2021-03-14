import {
  all, put, takeEvery,
} from 'redux-saga/effects'
import { successGetPhotos, rejectGetPhotos, apiRequest } from '../actions'
import { FETCH_PHOTOS_PROCESS } from '../constants';

const URL = 'https://jsonplaceholder.typicode.com/users'

function* fetchingPhotos() {
  yield put(apiRequest({
    method: 'GET',
    url: URL,
    onSuccess: successGetPhotos,
    onError: rejectGetPhotos,
  }))
}

export function* photosRoot() {
  yield all([
    takeEvery(FETCH_PHOTOS_PROCESS, fetchingPhotos),
  ])
}
