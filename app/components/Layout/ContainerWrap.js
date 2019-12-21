import styled, { css } from 'styled-components';

export default styled.div`
  padding-left: 0;
  padding-top: 40px;
  min-height: 100vh;
  transition: padding-left 0.3s;
  background: ${props => props.theme.colorBackgroundBody};

  @media screen and (min-width: 576px) {
    padding-left: 240px;
  }

  ${props =>
    props.collapse &&
    css`
      padding-left: 0px;
      @media screen and (min-width: 576px) {
        padding-left: 40px;
      }
    `};
`;
