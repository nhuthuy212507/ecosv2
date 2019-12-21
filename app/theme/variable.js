import styled from 'styled-components';
import { darken } from 'polished';

export default styled.div`
  --color-accent: #4ce1b6;
  --color-accent-hover: ${darken(0.1, '#4ce1b6')};
  --color-additional: #999999;
  --color-additional-hover: ${darken(0.1, '#999999')};

  --color-yellow: #f6da6e;
  --color-yellow-hover: ${darken(0.1, '#f6da6e')};

  --color-red: #ff4861;
  --color-red-hover: ${darken(0.1, '#ff4861')};

  --color-blue: #70bbfd;
  --color-blue-hover: ${darken(0.1, '#70bbfd')};

  --color-green: #b8e986;
  --color-green-hover: ${darken(0.1, '#b8e986')};

  --color-violet: #c88ffa;
  --color-gray: #787985;
  --color-light-gray: #d8dfe9;
`;
