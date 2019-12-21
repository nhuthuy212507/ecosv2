/**
 * Tests for LoginPage sagas
 */

import { takeLatest } from 'redux-saga/effects';

import { LOGIN } from '../constants';
import loginPageSaga, { login } from '../saga';

const user = {
  username: 'test',
  password: 'test',
};

/* eslint-disable redux-saga/yield-effects */
describe('login Saga', () => {
  let loginGenerator;

  beforeEach(() => {
    loginGenerator = login({ user });

    const selectDescriptor = loginGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = loginGenerator.next(user).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  describe('loginPage Saga', () => {
    const loginSaga = loginPageSaga();

    it('should start task to watch for LOAD_REPOS action', () => {
      const takeLatestDescriptor = loginSaga.next().value;
      expect(takeLatestDescriptor).toEqual(takeLatest(LOGIN, login));
    });
  });
});
