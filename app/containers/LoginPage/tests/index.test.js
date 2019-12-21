/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import { LoginPage, mapDispatchToProps } from '../index';
import { login } from '../actions';

describe('<LoginPage />', () => {
  it('should render and match the snapshot', () => {
    const loginSpy = jest.fn();
    const wrapper = shallow(
      <IntlProvider locale="en">
        <LoginPage onLogin={loginSpy} />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('onLogin', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLogin).toBeDefined();
      });

      it('should dispatch onLogin when called', () => {
        const user = {
          username: 'test',
          password: 'test',
        };
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onLogin(user);
        expect(dispatch).toHaveBeenCalledWith(login(user));
      });
    });
  });
});
