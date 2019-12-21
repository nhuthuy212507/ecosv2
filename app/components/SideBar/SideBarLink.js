import styled, { css } from 'styled-components';

export default styled.li`
  height: 36px;
  width: 240px;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  display: flex;
  padding: 11px 12px;
  overflow: hidden;
  background: transparent;
  border: none;
  color: ${props => props.theme.colorText};
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: var(--color-accent);
    opacity: 0;
    transition: all 0.3s;
  }

  p {
    position: absolute;
    left: 35px;
    width: 180px;
    transition: left 0.3s;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    text-decoration: none;
    background-color: ${props => props.theme.colorHover};

    &:before {
      opacity: 1;
    }
  }

  ${({ collapse }) =>
    collapse &&
    css`
      @media screen and (min-width: 576px) {
        overflow: hidden;
        width: 40px;
        background-color: transparent;

        p {
          position: absolute;
          left: 55px;
          width: 160px;
        }

        &:hover {
          width: 240px;
          background: ${props => props.theme.colorHover};
        }
      }
    `}
`;
