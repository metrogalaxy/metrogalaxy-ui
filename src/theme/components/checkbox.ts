export const Checkbox = {
  parts: ['control', 'icon'],
  baseStyle: {
    control: {
      border: '1px solid #6C7680 !important',
      bg: '#0B1926',

      _checked: {
        bgColor: 'green.200',
        color: 'gray.500',
        _hover: {
          bgColor: 'green.200',
          color: 'gray.500',
        },
      },
    },
  },
};
