import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authProvider state domain
 */

const selectAuthProviderDomain = state => state.auth || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AuthProvider
 */

const makeSelectAuthProvider = () =>
  createSelector(
    selectAuthProviderDomain,
    substate => substate,
  );

const makeSelectCurrentUser = () =>
  createSelector(
    selectAuthProviderDomain,
    substate => substate.currentUser,
  );

export {
  selectAuthProviderDomain,
  makeSelectAuthProvider,
  makeSelectCurrentUser,
};
