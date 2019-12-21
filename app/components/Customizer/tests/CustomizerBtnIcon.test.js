import React from 'react';
import { render } from 'react-testing-library';

import CustomizerBtnIcon from '../CustomizerBtnIcon';

describe('<CustomizerBtnIcon />', () => {
  it('should render a I', () => {
    const { container } = render(<CustomizerBtnIcon type="setting" />);
    expect(container.querySelector('i')).not.toBeNull();
  });
});
