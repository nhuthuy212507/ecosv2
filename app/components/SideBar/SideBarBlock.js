import styled from 'styled-components';

export default styled.ul`
  padding: 10px 0;
  margin: 0;
  border-bottom: 1px solid ${props => props.theme.colorBorder};
  &:last-child {
    border: none;
  }
`;
