import React from 'react';
import { render } from 'react-testing-library';

import Container from '../Container';

describe('<Container />', () => {
  it('should render an <div> tag', () => {
    const { container } = render(<Container />);
    expect(container.firstChild.tagName).toEqual('DIV');
  });

  it('should have a className attribute', () => {
    const { container } = render(<Container />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<Container id={id} />);
    expect(container.firstChild.hasAttribute('id')).toBe(true);
    expect(container.firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Container attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
