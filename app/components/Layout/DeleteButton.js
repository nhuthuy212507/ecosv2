import styled, { css } from 'styled-components';
import { Icon } from 'antd';

export default styled(Icon)`
  font-size: 16px;

  ${props =>
    props.disabled
      ? css`
          cursor: not-allowed !important;
          color: var(--color-additional);
        `
      : css`
          color: #ff4d4f;
          &:hover,
          &:focus {
            color: #ff7875;
          }
        `}
`;
