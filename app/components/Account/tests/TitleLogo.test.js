import React from 'react';
import { render } from 'react-testing-library';

import TitleLogo from '../TitleLogo';

describe('<TitleLogo />', () => {
  it('should render an <span> tag', () => {
    const { container } = render(<TitleLogo />);
    expect(container.firstChild.tagName).toEqual('SPAN');
  });
});
