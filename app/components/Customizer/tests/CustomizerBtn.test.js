import React from 'react';
import { render } from 'react-testing-library';

import CustomizerBtn from '../CustomizerBtn';

describe('<CustomizerBtn />', () => {
  it('should render an <button> tag', () => {
    const { container } = render(<CustomizerBtn />);
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<CustomizerBtn />);
    expect(container.querySelector('button').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<CustomizerBtn id={id} />);
    expect(container.querySelector('button').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<CustomizerBtn attribute="test" />);
    expect(container.querySelector('button[attribute="test"]')).toBeNull();
  });
});
