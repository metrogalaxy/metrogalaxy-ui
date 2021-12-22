import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
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
  colors: {
    gray: {
      100: '#99ADBF',
      300: '#203040',
      200: '#142433',
      400: '#0B1926',
      500: '#050F1A',
    },
    white: {
      100: '#F6FFF8BF',
      200: '#F6FFF8',
    },
    green: {
      100: '#1BB486',
      200: '#62E47F',
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
});
