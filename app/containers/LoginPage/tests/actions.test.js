import { login, loginSuccess, loginError } from '../actions';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../constants';

describe('LoginPage actions', () => {
  describe('login', () => {
    it('should return the correct type', () => {
      const user = {
        username: 'test',
        password: 'test',
      };
      const expectedResult = {
        type: LOGIN,
        user,
      };
      expect(login(user)).toEqual(expectedResult);
    });
  });

  describe('loginSuccess', () => {
    it('should return the correct type', () => {
      const token = 'token';
      const expectedResult = {
        type: LOGIN_SUCCESS,
        token,
      };
      expect(loginSuccess(token)).toEqual(expectedResult);
    });
  });

  describe('loginError', () => {
    it('should return the correct type', () => {
      const error = 'error';
      const expectedResult = {
        type: LOGIN_ERROR,
        error,
      };
      expect(loginError(error)).toEqual(expectedResult);
    });
  });
});
