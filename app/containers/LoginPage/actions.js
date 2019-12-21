/*
 *
 * LoginPage actions
 *
 */

import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

export function login(user) {
  return {
    type: LOGIN,
    user,
  };
}

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
