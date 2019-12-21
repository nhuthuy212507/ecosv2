/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  helmet: {
    id: `${scope}.helmet`,
    defaultMessage: 'Login Page',
  },
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: 'Welcome to',
  },
  subHead: {
    id: `${scope}.subHead`,
    defaultMessage: 'Please use your credentials to login',
  },
  rememberMe: {
    id: `${scope}.rememberMe`,
    defaultMessage: 'Remember Me',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Log in',
  },
  usernameRequired: {
    id: `${scope}.usernameRequired`,
    defaultMessage: 'Username is required',
  },
  passwordRequired: {
    id: `${scope}.passwordRequired`,
    defaultMessage: 'Password is required',
  },
  incorrectInfo: {
    id: `${scope}.incorrectInfo`,
    defaultMessage: 'Username or password incorrect',
  },
  badRequest: {
    id: `${scope}.badRequest`,
    defaultMessage: 'Opps! This is bad request',
  },
  error401: {
    id: `${scope}.error401`,
    defaultMessage: 'Please login to continue',
  },
});
