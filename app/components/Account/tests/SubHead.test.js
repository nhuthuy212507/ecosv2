import React from 'react';
import { render } from 'react-testing-library';

import SubHead from '../SubHead';

describe('<SubHead />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<SubHead id={id} />);
    expect(container.querySelector('h4').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<SubHead>{children}</SubHead>);
    const { childNodes } = container.querySelector('h4');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
