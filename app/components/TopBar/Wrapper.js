import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  height: 40px;
  z-index: 101;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  background: ${props => props.theme.colorBackground};
`;

export default Wrapper;
