import {
  selectLoginPage,
  makeSelectToken,
  makeSelectError,
  makeSelectLogged,
} from '../selectors';

describe('selectLoginPage', () => {
  it('should select the login page state', () => {
    const loginPageState = {
      logged: false,
      error: false,
      token: '',
    };
    const mockedState = {
      loginPage: loginPageState,
    };
    expect(selectLoginPage(mockedState)).toEqual(loginPageState);
  });
});

describe('makeSelectLogged', () => {
  it('should select the logged', () => {
    const loggedSelector = makeSelectLogged();
    const logged = false;
    const mockedState = {
      loginPage: { logged },
    };
    expect(loggedSelector(mockedState)).toEqual(logged);
  });
});

describe('makeSelectToken', () => {
  it('should select the token', () => {
    const tokenSelector = makeSelectToken();
    const token = 'token';
    const mockedState = {
      loginPage: { token },
    };
    expect(tokenSelector(mockedState)).toEqual(token);
  });
});

describe('makeSelectError', () => {
  it('should select the error', () => {
    const errorSelector = makeSelectError();
    const error = 'error';
    const mockedState = {
      loginPage: { error },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
