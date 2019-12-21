/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { changeDesktopSidebarVisibility } from 'containers/SideBarProvider/actions';
import { CustomizerProvider, mapDispatchToProps } from '../index';
import { toggleTheme } from '../actions';
import configureStore from '../../../configureStore';

describe('<CustomizerProvider />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const toggleSpy = jest.fn();
    const changeDesktopSidebarVisibilitySpy = jest.fn();
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <CustomizerProvider
            isDarkTheme={false}
            collapse={false}
            onToggleTheme={toggleSpy}
            onChangeDesktopSidebarVisibility={changeDesktopSidebarVisibilitySpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('onToggleTheme', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onToggleTheme).toBeDefined();
      });

      it('should dispatch onToggleTheme when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onToggleTheme();
        expect(dispatch).toHaveBeenCalledWith(toggleTheme());
      });
    });

    describe('onChangeDesktopSidebarVisibility', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeDesktopSidebarVisibility).toBeDefined();
      });

      it('should dispatch onChangeDesktopSidebarVisibility when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onChangeDesktopSidebarVisibility();
        expect(dispatch).toHaveBeenCalledWith(changeDesktopSidebarVisibility());
      });
    });
  });
});
