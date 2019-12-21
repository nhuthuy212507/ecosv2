import React from 'react';
import { render } from 'react-testing-library';

import SideBarLinkIcon from '../SideBarLinkIcon';

describe('<SideBarLinkIcon />', () => {
  it('should render an <span> tag', () => {
    const { container } = render(<SideBarLinkIcon />);
    expect(container.firstChild.tagName).toEqual('SPAN');
  });
});
