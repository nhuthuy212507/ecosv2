import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { API_PROFILE } from 'utils/listAPI';
import { GET_PROFILE } from './constants';
import { getProfileSuccess, getProfileError } from './actions';

export function* getProfileSaga() {
  try {
    const options = {
      url: API_PROFILE,
      method: 'get',
    };
    const response = yield call(request, options);
    if (response) {
      yield put(getProfileSuccess(response));
    }
  } catch (error) {
    yield put(getProfileError(error));
  }
}

// Individual exports for testing
export default function* authProviderSaga() {
  yield takeLatest(GET_PROFILE, getProfileSaga);
}
