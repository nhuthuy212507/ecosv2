import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state
 */

const selectLoginPage = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLogged = () =>
  createSelector(
    selectLoginPage,
    loginPageSate => loginPageSate.logged,
  );

const makeSelectToken = () =>
  createSelector(
    selectLoginPage,
    loginPageSate => loginPageSate.token,
  );

const makeSelectError = () =>
  createSelector(
    selectLoginPage,
    loginPageSate => loginPageSate.error,
  );

export { selectLoginPage, makeSelectLogged, makeSelectToken, makeSelectError };
