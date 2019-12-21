import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0 !important;
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
    font-size: 14px;
    line-height: 1.6;
  }

  ul, ol {
    padding-left: 15px;
    margin-bottom: 0;
  }

  img {
    width: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-weight: 400;
    margin-bottom: 0;
    color: ${props => props.theme.colorText};
  }

  p {
    margin: 10px 0 0 0;

    &:first-child {
      margin: 0;
    }
  }

  h1 {
    font-size: 36px;
    line-height: 48px;

    &.subhead {
      font-size: 30px;
      color: var(--color-additional);
      line-height: 36px;
    }
  }

  h2 {
    font-size: 30px;
    line-height: 36px;

    &.subhead {
      font-size: 24px;
      color: var(--color-additional);
      line-height: 32px;
    }
  }

  h3 {
    font-size: 24px;
    line-height: 32px;

    &.subhead {
      font-size: 18px;
      color: var(--color-additional);
      line-height: 24px;
    }
  }

  h4 {
    font-size: 18px;
    line-height: 24px;

    &.subhead {
      font-size: 12px;
      color: var(--color-additional);
      line-height: 16px;
    }
  }

  h5 {
    font-size: 14px;
    line-height: 18px;

    &.subhead {
      font-size: 10px;
      color: var(--color-additional);
      line-height: 12px;
    }
  }

  h6 {
    font-size: 12px;
    line-height: 16px;

    &.subhead {
      font-size: 8px;
      color: var(--color-additional);
      line-height: 10px;
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  
`;

export default GlobalStyle;
