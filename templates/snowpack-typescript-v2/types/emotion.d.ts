import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      neutral: {
        N0: string;
        N20A: string;
        N30: string;
        N40: string;
        N70: string;
        N500: string;
        N700: string;
        N800: string;
      };
      blue: {
        B400: string;
      };
      red: {
        R50: string;
        R400: string;
        R500: string;
      };
      green: {
        G50: string;
        G500: string;
      };
      yellow: {
        Y300: string;
      };
      others: {
        clickable: string;
      };
    };
  }
}
