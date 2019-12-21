/*
 *
 * AuthProvider reducer
 *
 */
import produce from 'immer';
import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
} from './constants';

export const initialState = {
  currentUser: {},
  getting: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const authProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PROFILE:
        draft.getting = true;
        break;
      case GET_PROFILE_SUCCESS:
        draft.getting = false;
        draft.currentUser = action.response;
        break;
      case GET_PROFILE_ERROR:
        draft.getting = false;
        draft.error = action.error;
        break;
    }
  });

export default authProviderReducer;
