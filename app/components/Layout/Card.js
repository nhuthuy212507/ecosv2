import styled from 'styled-components';
import { Card } from 'antd';

export default styled(Card)`
  border-radius: 0px;
  background: ${props => props.theme.colorBackground};

  .ant-card-body {
    padding: 15px;
  }
`;
