import { createGlobalStyle } from 'styled-components';
import AcromRegular from 'src/styles/fonts/Acrom-Regular.woff';
import AcromBold from 'src/styles/fonts/Acrom-Bold.woff';
import AcromLight from 'src/styles/fonts/Acrom-Light.woff';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Acrom';
    src: url(${AcromRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Acrom-Bold';
    src: url(${AcromBold}) format('woff');
    font-weight: bold;
  }
  @font-face {
    font-family: 'Acrom-Light';
    src: url(${AcromLight}) format('woff');
    font-weight: bold;
  }

  html,
  body {
    margin: 0;
    padding: 0;

    // This defines what 1rem is
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

    @media screen and (max-width: 450px) {
      font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }

    @media screen and (min-width: 450px) and (max-width: 768px) {
      font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    }
  }

  body {
    font-family: Acrom;
    min-height: 100%;
    min-width: 100%;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
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
