import styled, { css } from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(0);
  z-index: 99;
  height: 100vh;
  width: 240px;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
  padding-top: 40px;
  transition: transform 0.3s, width 0.3s;
  background: ${props => props.theme.colorBackground};

  a {
    display: block;
  }

  ${({ collapse }) =>
    collapse &&
    css`
      @media screen and (min-width: 576px) {
        overflow: visible;
        width: 40px;
      }
    `}

  @media (max-width: 600px) {
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
`;
