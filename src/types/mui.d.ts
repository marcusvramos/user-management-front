import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      layout: {
        drawerWidth: number;
        drawerMiniWidth: number;
        drawerTempWidth: number;
        maxContentWidth: number;
        sectionMinVh: number;
        viewport: string;
        viewportDynamic: string;
        drawerTempWidthMobileVw: number;
      };
      borderWidth: {
        thin: number;
        semi: number;
        thick: number;
      };
      radii: {
        card: number;
      };
      sizes: {
        avatar: number;
        logoHeight: number;
      };
      shadows: {
        cardLight: string;
        cardDark: string;
      };
      opacity: {
        surface: { light: number; dark: number };
        subtle: { light: number; dark: number };
        border: number;
      };
    };
  }

  interface ThemeOptions {
    custom?: Partial<Theme['custom']>;
  }
}
