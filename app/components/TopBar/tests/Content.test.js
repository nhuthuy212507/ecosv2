import React from 'react';
import { render } from 'react-testing-library';

import Content from '../Content';

describe('<Content />', () => {
  it('should render an <div> tag', () => {
    const {
      container: { firstChild },
    } = render(<Content />);
    expect(firstChild.tagName).toEqual('DIV');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<Content />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const {
      container: { firstChild },
    } = render(<Content id={id} />);
    expect(firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const {
      container: { firstChild },
    } = render(<Content attribute="test" />);
    expect(firstChild.hasAttribute('attribute')).toBe(false);
  });
});
