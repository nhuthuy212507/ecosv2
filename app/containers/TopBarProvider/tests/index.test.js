/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter as Router } from 'react-router-dom';

import {
  changeDesktopSidebarVisibility,
  changeMobileSidebarVisibility,
} from 'containers/SideBarProvider/actions';
import { TopBarProvider, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';

describe('<TopBarProvider />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const changeDesktopSidebarVisibilitySpy = jest.fn();
    const changeMobileSidebarVisibilitySpy = jest.fn();
    const wrapper = shallow(
      <Provider store={store}>
        <Router>
          <TopBarProvider
            onChangeDesktopSidebarVisibility={changeDesktopSidebarVisibilitySpy}
            onChangeMobileSidebarVisibility={changeMobileSidebarVisibilitySpy}
          />
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
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

    describe('onChangeMobileSidebarVisibility', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeMobileSidebarVisibility).toBeDefined();
      });

      it('should dispatch onChangeMobileSidebarVisibility when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onChangeMobileSidebarVisibility();
        expect(dispatch).toHaveBeenCalledWith(changeMobileSidebarVisibility());
      });
    });
  });
});
