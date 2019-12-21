import produce from 'immer';
import loginPageReducer from '../reducer';
import { login, loginSuccess, loginError } from '../actions';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('loginPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      logged: false,
      error: false,
      token: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(loginPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the login action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.logged = false;
      draft.error = false;
    });

    expect(loginPageReducer(state, login())).toEqual(expectedResult);
  });

  it('should handle the loginSuccess action correctly', () => {
    const token = 'token';
    const expectedResult = produce(state, draft => {
      draft.logged = true;
      draft.token = token;
    });

    expect(loginPageReducer(state, loginSuccess(token))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loginError action correctly', () => {
    const error = 'error';
    const expectedResult = produce(state, draft => {
      draft.logged = false;
      draft.error = error;
    });

    expect(loginPageReducer(state, loginError(error))).toEqual(expectedResult);
  });
});
