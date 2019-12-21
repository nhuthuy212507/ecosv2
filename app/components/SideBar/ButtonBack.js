import styled from 'styled-components';

export default styled.button`
  height: 100%;
  width: 100vw;
  position: absolute;
  display: ${({ show }) => (show ? 'block' : 'none')};
  background: transparent;
  border: none;
`;
