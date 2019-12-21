/*
 *
 * CustomizerProvider reducer
 *
 */
import produce from 'immer';
import { TOGGLE_THEME } from './constants';

export const initialState = {
  isDarkTheme: !!(
    localStorage.getItem('isDarkTheme') &&
    localStorage.getItem('isDarkTheme') === 'true'
  ),
};

/* eslint-disable default-case, no-param-reassign */
const customizerProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_THEME:
        draft.isDarkTheme = !state.isDarkTheme;
        localStorage.setItem('isDarkTheme', !state.isDarkTheme);
        break;
    }
  });

export default customizerProviderReducer;
