/**
 *
 * SideBarProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import {
  Wrapper,
  ButtonBack,
  Scrollbar,
  SideBarDesktop,
  SideBarMobile,
} from 'components/SideBar';
import SideBarContent from './sidebarContent';
import { makeSelectCollapse, makeSelectShow } from './selectors';
import { changeMobileSidebarVisibility } from './actions';
import reducer from './reducer';

export function SideBarProvider({
  collapse,
  show,
  onChangeMobileSidebarVisibility,
}) {
  useInjectReducer({ key: 'sidebar', reducer });

  return (
    <Wrapper collapse={collapse} show={show}>
      <ButtonBack show={show} onClick={onChangeMobileSidebarVisibility} />
      <Scrollbar>
        <SideBarDesktop>
          <SideBarContent collapse={collapse} />
        </SideBarDesktop>
        <SideBarMobile>
          <SideBarContent collapse={collapse} />
        </SideBarMobile>
      </Scrollbar>
    </Wrapper>
  );
}

SideBarProvider.propTypes = {
  collapse: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
  onChangeMobileSidebarVisibility: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  collapse: makeSelectCollapse(),
  show: makeSelectShow(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeMobileSidebarVisibility: () =>
      dispatch(changeMobileSidebarVisibility()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SideBarProvider);
