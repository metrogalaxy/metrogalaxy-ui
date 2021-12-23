import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Acrom';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Acrom-Regular.woff') format('woff'), url('./fonts/Acrom-Regular.woff') format('woff');
      }
      @font-face {
        font-family: 'Acrom-Light';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('./fonts/Acrom-Light.woff') format('woff'), url('./fonts/Acrom-Light.woff') format('woff');
      }
      @font-face {
        font-family: 'Acrom-Bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Acrom-Bold.woff') format('woff'), url('./fonts/Acrom-Bold.woff') format('woff');
      }
      `}
  />
);
