import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow-y: auto;
  background: ${props => props.theme.colorBackgroundBody};
`;
