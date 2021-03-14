import { HYDRATE } from 'next-redux-wrapper';

import {
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_PROCESS,
  FETCH_PHOTOS_ERROR,
} from '../constants';

const initialState = {
  photos: [],
  status: 'idle',
  error: null,
};

export const photos = (state = initialState, action = {}) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.photos,
      }
    case FETCH_PHOTOS_PROCESS:
      return {
        ...state,
        status: 'pending',
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        status: 'success',
      };
    case FETCH_PHOTOS_ERROR:
      return {
        ...state,
        status: 'reject',
        error: action.error,
      };
    default:
      return state;
  }
};
