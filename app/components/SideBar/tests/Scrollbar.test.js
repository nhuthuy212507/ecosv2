import React from 'react';
import { render } from 'react-testing-library';
import Scrollbar from 'react-smooth-scrollbar';

describe('<Scrollbar />', () => {
  it('should render an <Scrollbar> tag', () => {
    const { container } = render(<Scrollbar />);
    expect(container.firstChild.tagName).toEqual('SECTION');
  });
});
