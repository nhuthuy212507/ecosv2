import styled from 'styled-components';
import { Layout } from 'antd';

export default styled(Layout)`
  padding: 10px;
  background-color: ${props => props.theme.colorBackgroundBody};
`;
