import styled, { keyframes } from 'styled-components';
import { Icon } from 'antd';

const iconOpacity = keyframes`
  from {
    opacity: 1
  }
  50% {
    opacity: 0.3
  }
  to {
    opacity: 1
  }
`;

export default styled(Icon)`
  font-size: 20px;
  vertical-align: middle;
  color: var(--color-accent);
  animation: ${iconOpacity} linear infinite 4s;
`;
