import styled from 'styled-components';

export default styled.div`
  justify-content: flex-start;
  display: inline-flex;
  width: 100%;
  margin: 10px 0;

  > button {
    background-color: ${props => props.theme.colorBorder};

    &.ant-switch-checked {
      background-color: #1890ff;
    }
  }

  > span {
    color: ${props => props.theme.colorText};
    font-size: 14px;
    margin-left: 10px;
  }
`;
