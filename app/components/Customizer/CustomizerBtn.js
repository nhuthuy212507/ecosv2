import styled from 'styled-components';

export default styled.button`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 80px;
  border: none;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
  cursor: pointer;
  z-index: 102;
  right: 0px;
  background-color: ${props => props.theme.colorBackground};
`;
