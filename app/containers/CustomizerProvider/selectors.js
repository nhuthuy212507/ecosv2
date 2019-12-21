/**
 * Customizer Provider selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCustomizer = state => state.customizer || initialState;

const makeSelectTheme = () =>
  createSelector(
    selectCustomizer,
    customizerState => customizerState.isDarkTheme,
  );

export { selectCustomizer, makeSelectTheme };
