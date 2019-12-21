/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage';
import WrappedRoutes from 'containers/Router';
import { makeSelectTheme } from 'containers/CustomizerProvider/selectors';
import PrivateRoute from 'containers/Router/PrivateRoute';

import lightTheme from 'theme/light';
import darkTheme from 'theme/dark';
import CSSVariable from 'theme/variable';
import GlobalStyle from 'theme/global-styles';
import OverwriteAntd from 'theme/overwrite-antd';

function App({ isDarkTheme }) {
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CSSVariable>
        <main>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/404" component={NotFoundPage} />
            <PrivateRoute path="/" component={WrappedRoutes} />
            <Redirect to="/404" />
          </Switch>
        </main>
        <ToastContainer autoClose={3000} hideProgressBar />
        <GlobalStyle />
        <OverwriteAntd />
      </CSSVariable>
    </ThemeProvider>
  );
}

App.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isDarkTheme: makeSelectTheme(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);
