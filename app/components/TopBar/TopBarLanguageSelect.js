import styled from 'styled-components';
import { Select } from 'antd';

export default styled(Select)`
  top: 10%;

  .ant-select-selection {
    background: none;
    border: none;
    border-radius: 0;

    &:active,
    &:focus {
      border: none;
      box-shadow: none;
    }
  }

  span {
    right: 8px;

    i {
      margin-left: 5px;
      color: ${props => props.theme.colorText};
    }
  }
`;
