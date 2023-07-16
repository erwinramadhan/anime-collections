import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
    `}
  />
);

export default GlobalStyles;