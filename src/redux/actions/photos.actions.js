import { FETCH_PHOTOS_PROCESS, FETCH_PHOTOS_ERROR, FETCH_PHOTOS_SUCCESS } from '../constants';

const processGetPhotos = () => ({
  type: FETCH_PHOTOS_PROCESS,
})

const successGetPhotos = (data) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: data,
})

const rejectGetPhotos = (error) => ({
  type: FETCH_PHOTOS_ERROR,
  payload: error,
})

export { processGetPhotos, rejectGetPhotos, successGetPhotos };
