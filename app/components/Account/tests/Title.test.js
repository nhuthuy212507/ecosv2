import React from 'react';
import { render } from 'react-testing-library';

import Title from '../Title';

describe('<Title />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<Title id={id} />);
    expect(container.querySelector('h3').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<Title>{children}</Title>);
    const { childNodes } = container.querySelector('h3');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
