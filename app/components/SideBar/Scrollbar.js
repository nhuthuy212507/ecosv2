import styled from 'styled-components';
import Scrollbar from 'react-smooth-scrollbar';

export default styled(Scrollbar)`
  width: 240px;
  & > div {
    height: calc(100vh - 40px);
  }
  .scrollbar-track {
    &.scrollbar-track-y {
      display: none !important;
    }

    &.scrollbar-track-x {
      display: none !important;
    }
  }
`;
