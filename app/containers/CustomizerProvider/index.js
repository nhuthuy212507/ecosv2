/**
 *
 * CustomizerProvider
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Icon, Switch } from 'antd';

import { useInjectReducer } from 'utils/injectReducer';
import {
  Wrapper,
  CustomizerBtn,
  CustomizerBtnIcon,
  CustomizerWrap,
  CustomizerTitle,
  CloseButton,
  CustomizerToggle,
} from 'components/Customizer';
import { changeDesktopSidebarVisibility } from 'containers/SideBarProvider/actions';
import { makeSelectCollapse } from 'containers/SideBarProvider/selectors';
import { toggleTheme } from './actions';
import { makeSelectTheme } from './selectors';
import reducer from './reducer';
import messages from './messages';

export function CustomizerProvider({
  isDarkTheme,
  collapse,
  onToggleTheme,
  onChangeDesktopSidebarVisibility,
}) {
  useInjectReducer({ key: 'customizer', reducer });

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <CustomizerBtn onClick={toggle}>
        <CustomizerBtnIcon type="setting" />
      </CustomizerBtn>
      <CustomizerWrap open={isOpen}>
        <CustomizerTitle>
          <h5>
            <FormattedMessage {...messages.title} />
          </h5>
          <CloseButton onClick={toggle}>
            <Icon type="close-circle" />
          </CloseButton>
        </CustomizerTitle>
        <CustomizerToggle>
          <Switch defaultChecked={isDarkTheme} onChange={onToggleTheme} />
          <FormattedMessage {...messages.darkTheme} />
        </CustomizerToggle>
        <CustomizerToggle>
          <Switch
            defaultChecked={collapse}
            onChange={onChangeDesktopSidebarVisibility}
          />
          <FormattedMessage {...messages.collapsedMenu} />
        </CustomizerToggle>
      </CustomizerWrap>
    </Wrapper>
  );
}

CustomizerProvider.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  onChangeDesktopSidebarVisibility: PropTypes.func.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
  collapse: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isDarkTheme: makeSelectTheme(),
  collapse: makeSelectCollapse(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onToggleTheme: () => dispatch(toggleTheme()),
    onChangeDesktopSidebarVisibility: () =>
      dispatch(changeDesktopSidebarVisibility()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CustomizerProvider);
