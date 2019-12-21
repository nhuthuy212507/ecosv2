import styled from 'styled-components';
import { Button } from 'antd';

export default styled(Button)`
  background-color: #23903a;
  border-color: #23903a;
  margin-right: 8px;

  &:hover,
  &:focus {
    background-color: #2db94b;
    border-color: #2db94b;
  }
`;
