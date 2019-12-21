import { toggleTheme } from '../actions';
import { TOGGLE_THEME } from '../constants';

describe('CustomizerProvider actions', () => {
  describe('Toggle Action', () => {
    it('has a type of TOGGLE_THEME', () => {
      const expected = {
        type: TOGGLE_THEME,
      };
      expect(toggleTheme()).toEqual(expected);
    });
  });
});
