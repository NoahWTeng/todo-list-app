import { API_REQUEST } from '../constants/api.constants';

const apiRequest = ({
  method, url, body = undefined, onSuccess, onError, token = undefined,
}) => ({
  type: API_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError },
  token,
})

export { apiRequest }
