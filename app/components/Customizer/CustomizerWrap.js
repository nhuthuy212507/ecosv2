import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  width: 240px;
  padding: 20px;
  transition: transform 0.3s;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 102;
  background-color: ${props => props.theme.colorBackground};
  display: ${({ open }) => (open ? 'block' : 'none')};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  box-shadow: ${({ open }) =>
    open ? '0 1px 30px 1px rgba(0, 0, 0, 0.11)' : 'none'};
`;
