export const Progress = {
  parts: ['filledTrack', 'track'],
  baseStyle: {
    track: {
      borderRadius: '20px',
      bgColor: '#2E3D4D',
    },
    filledTrack: {
      borderRadius: '20px',
    },
  },
  variants: {
    customBlue: {
      filledTrack: {
        bgColor: '#2D9DE3',
      },
    },
    customGreen: {
      filledTrack: {
        bgColor: '#92DA81',
      },
    },
    customOrange: {
      filledTrack: {
        bgColor: '#FFB965',
      },
    },
    customPurple: {
      filledTrack: {
        bgColor: '#9F6EBF',
      },
    },
    customPink: {
      filledTrack: {
        bgColor: '#FB7091',
      },
    },
  },
};
