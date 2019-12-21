import React from 'react';
import { render } from 'react-testing-library';

import SideBarLinkTitle from '../SideBarLinkTitle';

describe('<SideBarLinkTitle />', () => {
  it('should render an <p> tag', () => {
    const { container } = render(<SideBarLinkTitle />);
    expect(container.firstChild.tagName).toEqual('P');
  });
});
