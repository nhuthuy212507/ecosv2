import styled, { css } from 'styled-components';

export default styled.div`
  height: 100%;
  overflow: auto;

  & > div:last-child {
    width: 4px !important;

    div {
      transition: height 0.3s;
      opacity: 0.52;
    }
  }

  ${({ collapse }) =>
    collapse &&
    css`
      @media screen and (min-width: 576px) {
        width: 40px;
        overflow: visible !important;
        transition: width 0.3s;
      }
    `}
`;
