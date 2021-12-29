import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

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
  Button: {
    baseStyle: {
      borderRadius: '6rem',
      _focus: {
        boxShadow: 'none',
      },
    },
    sizes: {
      sm: {
        padding: '1rem 2rem',
        height: '2.5rem',
      },
      md: {
        padding: '1.25rem 2.25rem',
        height: '3.5rem',
      },
    },
    variants: {
      outline: {
        border: '2px solid',
        borderColor: 'green.200',
        color: 'green.200',
        _hover: {
          bgColor: 'green.200',
          color: 'gray.500',
        },
      },
      solid: {
        border: '2px solid',
        borderColor: 'green.200',
        bgColor: 'green.200',
        color: 'gray.500',
        _hover: {
          bgColor: 'transparent',
          color: 'green.200',
        },
      },
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
        color: 'transparent',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
  },
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
    },
    grayBlur: {
      100: 'rgba(20, 36, 51, 0.9)',
    },
    white: {
      100: '#F6FFF8BF',
      200: '#F6FFF8',
    },
    green: {
      100: '#1BB486',
      200: '#62E47F',
    },
    blue: {
      100: '#2589C7',
      200: '#0D5180',
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
  },
});

export * from './Fonts';
