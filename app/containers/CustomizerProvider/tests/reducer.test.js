import produce from 'immer';

import customizerProviderReducer from '../reducer';
import { toggleTheme } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('CustomizerProvider', () => {
  let state;
  beforeEach(() => {
    state = {
      isDarkTheme: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(customizerProviderReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the toggleTheme action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isDarkTheme = !state.isDarkTheme;
    });

    expect(customizerProviderReducer(state, toggleTheme())).toEqual(
      expectedResult,
    );
  });
});
