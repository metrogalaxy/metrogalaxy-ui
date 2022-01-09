import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Button } from './components/button';
import { Link } from './components/link';
import { Modal } from './components/modal';
import { Text } from './components/text';
import { Checkbox } from './components/checkbox';
import { layerStyles } from './layerStyles';

const breakpoints = createBreakpoints({
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1600px',
  '3xl': '2400px',
});

const components = {
  Button,
  Link,
  Modal,
  Text,
  Checkbox,
};

export const theme = extendTheme({
  fonts: {
    heading: 'Acrom',
    body: 'Acrom',
  },
  colors: {
    gray: {
      100: '#99ADBF',
      200: '#142433',
      300: '#203040',
      400: '#0B1926',
      500: '#050F1A',
      600: '#3E4C59',
    },
    grayBlur: {
      100: 'rgba(5, 15, 26, 0.4)',
      200: 'rgba(5, 15, 26, 0.8)',
    },
    white: {
      100: '#F6FFF8BF',
      200: '#F6FFF8',
      300: '#6C7680',
    },
    whiteBlur: {
      100: 'rgba(247, 255, 248, 0.5)',
      200: 'rgba(247, 255, 248, 0.75)',
      300: 'rgba(247, 255, 248, 0.2)',
    },
    green: {
      100: '#1BB486',
      200: '#62E47F',
      300: '#1E7054',
    },
    greenBlur: {
      100: 'rgba(98, 228, 127, 0.5)',
      200: 'rgba(98, 228, 127, 0.1)',
    },
    red: {
      100: '#F44336',
    },
    blue: {
      100: '#2589C7',
      200: '#0D5180',
      300: '#1BC4FF',
      400: '#2D9DE3',
    },
  },
  breakpoints,
  components,
  styles: {
    global: {
      body: {
        bg: 'gray.400',
      },
      '*': {
        fontFamily: 'Acrom',
      },
    },
  },
  textStyles: {
    h1: {
      color: 'white.200',
      fontFamily: 'Acrom',
      fontWeight: 'bold',
      fontSize: {
        base: '3xl',
        lg: '4xl',
      },
      textTransform: 'cappitalize',
      lineHeight: {
        base: '42px',
        lg: '50px',
      },
    },
    h2: {
      color: 'white.200',
      fontFamily: 'Acrom',
      fontWeight: 'bold',
      fontSize: {
        base: 'xl',
        lg: '2xl',
      },
      textTransform: 'cappitalize',
      lineHeight: {
        base: '36px',
        lg: '42px',
      },
    },
    paragraph: {
      color: 'white.100',
      fontFamily: 'Acrom',
      fontSize: {
        base: 'md',
        lg: 'lg',
      },
    },
    appTitle: {
      fontSize: {
        base: 'md',
        md: 'lg',
      },
      color: 'white',
      fontFamily: 'Acrom-Bold',
    },
    appNormal: {
      fontSize: {
        base: 'sm',
        md: 'md',
      },
      color: 'white',
      fontFamily: 'Acrom',
    },
  },
  layerStyles,
  shadows: {
    outline: 'none',
  },
});

export * from './Fonts';
