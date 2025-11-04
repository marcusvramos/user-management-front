import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

const brandPrimary = '#5A7BB2';
const brandAccent = '#3A88C1';
const brandLight = '#8EB5F5';
const brandLightAlt = '#75A0E7';
const brandMuted = '#7592C0';
const brandBgDefault = '#F8F9FA';

export const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    cssVariables: true,
    custom: {
      layout: {
        drawerWidth: 248,
        drawerMiniWidth: 72,
        drawerTempWidth: 320,
        maxContentWidth: 500,
        sectionMinVh: 60,
        viewport: '100vh',
        viewportDynamic: '100dvh',
        drawerTempWidthMobileVw: 85,
      },
      borderWidth: {
        thin: 1,
        semi: 1.5,
        thick: 2,
      },
      radii: {
        card: 12,
      },
      sizes: {
        avatar: 32,
        logoHeight: 28,
      },
      shadows: {
        cardLight: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        cardDark: '0 1px 3px rgba(0,0,0,0.3)',
      },
      opacity: {
        surface: {
          light: 0.16,
          dark: 0.28,
        },
        subtle: {
          light: 0.08,
          dark: 0.28,
        },
        border: 0.3,
      },
    },
    palette: {
      mode,
      primary: {
        main: brandPrimary,
        dark: brandAccent,
        light: brandLight,
        contrastText: '#ffffff',
      },
      secondary: {
        main: brandAccent,
        light: brandLightAlt,
        dark: brandMuted,
        contrastText: '#ffffff',
      },
      info: {
        main: mode === 'light' ? '#0288d1' : '#29b6f6',
        light: mode === 'light' ? '#03a9f4' : '#4fc3f7',
        dark: mode === 'light' ? '#01579b' : '#0277bd',
        ...(mode === 'light' && {
          lighter: '#e3f2fd',
        }),
      },
      error: {
        main: mode === 'light' ? '#d32f2f' : '#f44336',
        light: mode === 'light' ? '#ffebee' : '#e57373',
        dark: mode === 'light' ? '#c62828' : '#d32f2f',
      },
      warning: {
        main: mode === 'light' ? '#ed6c02' : '#ff9800',
        light: mode === 'light' ? '#fff3e0' : '#ffb74d',
        dark: mode === 'light' ? '#e65100' : '#f57c00',
      },
      success: {
        main: mode === 'light' ? '#2e7d32' : '#66bb6a',
        light: mode === 'light' ? '#4caf50' : '#81c784',
        dark: mode === 'light' ? '#1b5e20' : '#388e3c',
        ...(mode === 'light' && {
          lighter: '#e8f5e9',
        }),
      },
      background: {
        default: mode === 'light' ? brandBgDefault : '#101114',
        paper: mode === 'light' ? '#ffffff' : '#1b1d24',
      },
      divider: mode === 'light' ? '#E0E5EB' : 'rgba(255,255,255,0.12)',
      text: {
        primary: mode === 'light' ? '#1a202c' : '#ffffff',
        secondary: mode === 'light' ? '#4a5568' : 'rgba(255, 255, 255, 0.7)',
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily:
        "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            boxShadow: 'none',
            borderBottom: `${theme.custom.borderWidth.thin}px solid ${theme.palette.divider}`,
          }),
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.custom.radii.card,
            boxShadow:
              theme.palette.mode === 'light'
                ? theme.custom.shadows.cardLight
                : theme.custom.shadows.cardDark,
          }),
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderBottom: `${theme.custom.borderWidth.thin}px solid ${theme.palette.divider}`,
          }),
        },
      },
    },
  });

export const theme = createAppTheme('light');

export default theme;
