import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  > i {
    color: var(--color-additional);
    font-size: 14px;
    transition: 0.3s;
  }

  &:hover {
    svg {
      fill: var(--color-accent);
    }
  }
`;
