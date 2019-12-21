/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const A = styled.a`
  color: var(--color-blue);
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: var(--color-blue-hover);
  }
`;

export default A;
