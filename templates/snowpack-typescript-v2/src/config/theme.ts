import type { Theme } from '@emotion/react';

const theme: Theme = {
  colors: {
    neutral: {
      N0: 'rgba(255, 255, 255, 1)',
      N20A: 'rgba(9, 30, 66, 0.04)',
      N30: 'rgba(235, 236, 240, 1)',
      N40: 'rgba(223, 225, 230, 1)',
      N70: 'rgba(165, 173, 186, 1)',
      N500: 'rgba(66, 82, 110, 1)',
      N700: 'rgba(37, 56, 88, 1)',
      N800: 'rgba(23, 43, 77, 1)',
    },
    blue: {
      B400: 'rgba(0, 82, 204, 1)',
    },
    red: {
      R50: 'rgba(255, 235, 230, 1)',
      R400: 'rgba(222, 53, 11, 1)',
      R500: 'rgba(191, 38, 0, 1)',
    },
    green: {
      G50: 'rgba(227, 252, 239, 1)',
      G500: 'rgba(0, 102, 68, 1)',
    },
    yellow: {
      Y300: 'rgba(255, 171, 0, 1)',
    },
    others: {
      clickable: 'rgba(255, 255, 255, 0.0001)',
    },
  },
};

export default theme;
