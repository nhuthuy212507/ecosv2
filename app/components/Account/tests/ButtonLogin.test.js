import React from 'react';
import { shallow } from 'enzyme';

import ButtonLogin from '../ButtonLogin';

describe('<ButtonLogin />', () => {
  it('should render an <button> tag', () => {
    const wrapper = shallow(<ButtonLogin />);
    expect(wrapper.name()).toEqual('StyledComponent');
  });
});
