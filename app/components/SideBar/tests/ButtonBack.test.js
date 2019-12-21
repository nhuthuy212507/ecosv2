import React from 'react';
import { render } from 'react-testing-library';

import ButtonBack from '../ButtonBack';

describe('<ButtonBack />', () => {
  it('should render an <button> tag', () => {
    const { container } = render(<ButtonBack />);
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<ButtonBack />);
    expect(container.querySelector('button').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<ButtonBack id={id} />);
    expect(container.querySelector('button').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<ButtonBack attribute="test" />);
    expect(container.querySelector('button[attribute="test"]')).toBeNull();
  });
});
