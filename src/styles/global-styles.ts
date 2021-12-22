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

  .width-100-percent {
    canvas, div {
      width: 100% !important;
      height: 100% !important;
    }
    width: 100%;
    height: 100%;
  }
`;
