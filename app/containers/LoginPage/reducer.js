/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

export const initialState = {
  logged: false,
  error: false,
  token: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.error = false;
        draft.logged = false;
        break;
      case LOGIN_SUCCESS:
        draft.logged = true;
        draft.token = action.token;
        break;
      case LOGIN_ERROR:
        draft.logged = false;
        draft.error = action.error;
        break;
    }
  });

export default loginPageReducer;
