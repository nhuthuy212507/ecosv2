/**
 *
 * TopbarLanguage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Select } from 'antd';

import {
  TopBarLanguageWrap,
  TopBarLanguageSelect,
  ENG,
  VIE,
} from 'components/TopBar';

import { changeLocale } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

export function TopbarLanguage({ onChangeLocale, locale }) {
  function hanldeChange(value) {
    onChangeLocale(value);
  }

  return (
    <TopBarLanguageWrap>
      <TopBarLanguageSelect defaultValue={locale} onChange={hanldeChange}>
        <Select.Option value="en">
          <img src={ENG} alt="English" />
        </Select.Option>
        <Select.Option value="vi">
          <img src={VIE} alt="Vietnamese" />
        </Select.Option>
      </TopBarLanguageSelect>
    </TopBarLanguageWrap>
  );
}

TopbarLanguage.propTypes = {
  onChangeLocale: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeLocale: locale => dispatch(changeLocale(locale)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TopbarLanguage);
