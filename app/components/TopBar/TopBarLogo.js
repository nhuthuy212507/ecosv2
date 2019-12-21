import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopBarLogo = styled(Link)`
  width: 150px;
  height: 32px;
  margin: auto 0;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: left;
  background-size: contain;
  display: block;
  background-image: url(${props => props.theme.logoImg});
`;

export default TopBarLogo;
