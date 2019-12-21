import React from 'react';
import { render } from 'react-testing-library';

import SideBarButtonIcon from '../SideBarButtonIcon';

describe('<SideBarButtonIcon />', () => {
  it('should render a i', () => {
    const { container } = render(<SideBarButtonIcon type="menu" />);
    expect(container.querySelector('i')).not.toBeNull();
  });
});
