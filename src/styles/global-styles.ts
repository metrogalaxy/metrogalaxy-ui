import { createGlobalStyle } from 'styled-components';
// import AcromRegular from 'src/styles/fonts/Acrom-Regular.woff';
// import AcromBold from 'src/styles/fonts/Acrom-Bold.woff';
// import AcromLight from 'src/styles/fonts/Acrom-Light.woff';

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    margin: 0;
    padding: 0;
    display: block;
    /* overscroll-behavior-x: none; */
  }

  body {
    font-family: Acrom;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;

  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
