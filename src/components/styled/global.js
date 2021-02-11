import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      html {
        font-size: 18px;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: 'Khand', Helvetica, Sans-Serif;

        * {
          letter-spacing: 0.02rem;
        }
      }
    `}
  />
);

export default GlobalStyle;
