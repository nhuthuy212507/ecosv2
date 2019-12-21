/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { changeLocale } from 'containers/LanguageProvider/actions';
import TopBarLanguage, { mapDispatchToProps } from '../TopbarLanguage';
import configureStore from '../../../configureStore';

describe('<TopBarLanguage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const changeLocaleSpy = jest.fn();
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <TopBarLanguage onChangeLocale={changeLocaleSpy} locale="en" />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeLocale', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeLocale).toBeDefined();
      });

      it('should dispatch onChangeLocale when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const locale = 'en';
        result.onChangeLocale(locale);
        expect(dispatch).toHaveBeenCalledWith(changeLocale(locale));
      });
    });
  });
});
