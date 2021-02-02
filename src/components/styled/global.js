import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Khand', Helvetica, Sans-Serif;

    * {
      letter-spacing: .02rem;
    }
  }
`;

export default GlobalStyle;
