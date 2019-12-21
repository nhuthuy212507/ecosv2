/**
 *
 * AuthProvider
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { getProfile } from './actions';

export function AuthProvider({ onGetProfile }) {
  useInjectReducer({ key: 'authProvider', reducer });
  useInjectSaga({ key: 'authProvider', saga });
  const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : '';

  useEffect(() => {
    onGetProfile();
  }, [token]);

  return <div />;
}

AuthProvider.propTypes = {
  onGetProfile: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onGetProfile: () => dispatch(getProfile()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(AuthProvider);
