import produce from 'immer';
import sideBarProviderReducer from '../reducer';
import {
  changeDesktopSidebarVisibility,
  changeMobileSidebarVisibility,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('sideBarProviderReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      collapse: false,
      show: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(sideBarProviderReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeDesktopSidebarVisibility action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.collapse = !state.collapse;
    });

    expect(
      sideBarProviderReducer(state, changeDesktopSidebarVisibility()),
    ).toEqual(expectedResult);
  });

  it('should handle the changeMobileSidebarVisibility action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.show = !state.show;
    });

    expect(
      sideBarProviderReducer(state, changeMobileSidebarVisibility()),
    ).toEqual(expectedResult);
  });
});
