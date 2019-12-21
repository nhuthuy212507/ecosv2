import React from 'react';
import { render } from 'react-testing-library';

import { SideBarButtonDesktop, SideBarButtonMobile } from '../SideBarButton';

describe('<SideBarButtonDesktop />', () => {
  it('should render an <button> tag', () => {
    const { container } = render(<SideBarButtonDesktop />);
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<SideBarButtonDesktop />);
    expect(container.querySelector('button').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<SideBarButtonDesktop id={id} />);
    expect(container.querySelector('button').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<SideBarButtonDesktop attribute="test" />);
    expect(container.querySelector('button[attribute="test"]')).toBeNull();
  });
});

describe('<SideBarButtonMobile />', () => {
  it('should render an <button> tag', () => {
    const { container } = render(<SideBarButtonMobile />);
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<SideBarButtonMobile />);
    expect(container.querySelector('button').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<SideBarButtonMobile id={id} />);
    expect(container.querySelector('button').id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<SideBarButtonMobile attribute="test" />);
    expect(container.querySelector('button[attribute="test"]')).toBeNull();
  });
});
