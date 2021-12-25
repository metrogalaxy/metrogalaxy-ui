export const Button = {
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
      _active: {
        bgColor: 'transparent',
        color: 'green.100',
      },
      _focus: {
        boxShadow: 'none',
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
      _active: {
        bgColor: 'transparent',
      },
    },
  },
};
