/*
 *
 * AuthProvider actions
 *
 */

import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
} from './constants';

export function getProfile() {
  return {
    type: GET_PROFILE,
  };
}

export function getProfileSuccess(response) {
  return {
    type: GET_PROFILE_SUCCESS,
    response,
  };
}

export function getProfileError(error) {
  return {
    type: GET_PROFILE_ERROR,
    error,
  };
}
