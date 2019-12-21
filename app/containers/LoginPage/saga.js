import React from 'react';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';
import { takeLatest, call, put } from 'redux-saga/effects';
import history from 'utils/history';
import request from 'utils/request';
import { API_LOGIN } from 'utils/listAPI';
import { LOGIN } from './constants';
import messages from './messages';
import { loginSuccess, loginError } from './actions';

export function* login({ user }) {
  try {
    const options = {
      url: API_LOGIN,
      method: 'post',
      data: user,
    };
    const response = yield call(request, options);
    if (response) {
      localStorage.setItem('token', response.token);
      yield put(loginSuccess(response.token));
      yield call(toast.dismiss);
      yield call(history.push, '/');
    }
  } catch (error) {
    yield put(loginError(error));
    switch (error.response.status) {
      case 400:
        toast.error(<FormattedMessage {...messages.badRequest} />);
        break;
      case 403:
        toast.error(<FormattedMessage {...messages.incorrectInfo} />);
        break;
      default:
        break;
    }
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(LOGIN, login);
}
