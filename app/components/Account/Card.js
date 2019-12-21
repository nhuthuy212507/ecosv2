import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.colorBackground};
  padding: 50px 60px;
  max-width: 520px;
  width: 100%;
  @media screen and (max-width: 520px) {
    padding: 35px 30px;
  }
`;
