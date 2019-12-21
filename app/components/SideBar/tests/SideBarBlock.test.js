import React from 'react';
import { render } from 'react-testing-library';

import SideBarBlock from '../SideBarBlock';

describe('<SideBarBlock />', () => {
  it('should render an <ul> tag', () => {
    const { container } = render(<SideBarBlock />);
    expect(container.firstChild.tagName).toEqual('UL');
  });

  it('should have a className attribute', () => {
    const { container } = render(<SideBarBlock />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<SideBarBlock id={id} />);
    expect(container.firstChild.hasAttribute('id')).toBe(true);
    expect(container.firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<SideBarBlock attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
