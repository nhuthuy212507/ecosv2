/**
 *
 * Router
 *
 */

import React, { memo, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { useInjectSaga } from 'utils/injectSaga';
import CustomizerProvider from 'containers/CustomizerProvider';
import TopbarProvider from 'containers/TopBarProvider';
import SideBarProvider from 'containers/SideBarProvider';
import HomePage from 'containers/HomePage';
import CustomerPage from 'containers/CustomerPage';
import { makeSelectCollapse } from 'containers/SideBarProvider/selectors';
import { ContainerWrap, LayoutWrap } from 'components/Layout';
import { getProfile } from 'containers/AuthProvider/actions';
import saga from 'containers/AuthProvider/saga';

function Router({ collapse, onGetProfile }) {
  useInjectSaga({ key: 'authProvider', saga });
  const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : '';

  useEffect(() => {
    onGetProfile();
  }, [token]);

  return (
    <div>
      <CustomizerProvider />
      <TopbarProvider />
      <SideBarProvider />
      <ContainerWrap collapse={collapse}>
        <LayoutWrap>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/customer" component={CustomerPage} />
            <Redirect to="/404" />
          </Switch>
        </LayoutWrap>
      </ContainerWrap>
    </div>
  );
}

Router.propTypes = {
  collapse: PropTypes.bool.isRequired,
  onGetProfile: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  collapse: makeSelectCollapse(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetProfile: () => dispatch(getProfile()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Router);
