/*
 *
 * SideBarProvider reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_DESKTOP_SIDEBAR_VISIBILITY,
  CHANGE_MOBILE_SIDEBAR_VISIBILITY,
} from './constants';

export const initialState = {
  collapse: false,
  show: false,
};

/* eslint-disable default-case, no-param-reassign */
const sideBarProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_DESKTOP_SIDEBAR_VISIBILITY:
        draft.collapse = !state.collapse;
        break;
      case CHANGE_MOBILE_SIDEBAR_VISIBILITY:
        draft.show = !state.show;
        break;
    }
  });

export default sideBarProviderReducer;
