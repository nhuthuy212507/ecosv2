/**
 *
 * TopBar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  Wrapper,
  Content,
  TopBarLeft,
  TopBarRight,
  TopBarLogo,
  SideBarButtonDesktop,
  SideBarButtonMobile,
  SideBarButtonIcon,
} from 'components/TopBar';
import {
  changeDesktopSidebarVisibility,
  changeMobileSidebarVisibility,
} from 'containers/SideBarProvider/actions';
import TopBarLanguage from './TopbarLanguage';

export function TopBarProvider({
  onChangeDesktopSidebarVisibility,
  onChangeMobileSidebarVisibility,
}) {
  return (
    <Wrapper>
      <Content>
        <TopBarLeft>
          <div>
            <SideBarButtonDesktop onClick={onChangeDesktopSidebarVisibility}>
              <SideBarButtonIcon type="menu" />
            </SideBarButtonDesktop>
            <SideBarButtonMobile onClick={onChangeMobileSidebarVisibility}>
              <SideBarButtonIcon type="menu" />
            </SideBarButtonMobile>
          </div>
          <TopBarLogo to="/" />
        </TopBarLeft>
        <TopBarRight>
          <TopBarLanguage />
        </TopBarRight>
      </Content>
    </Wrapper>
  );
}

TopBarProvider.propTypes = {
  onChangeDesktopSidebarVisibility: PropTypes.func.isRequired,
  onChangeMobileSidebarVisibility: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeDesktopSidebarVisibility: () =>
      dispatch(changeDesktopSidebarVisibility()),
    onChangeMobileSidebarVisibility: () =>
      dispatch(changeMobileSidebarVisibility()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TopBarProvider);
