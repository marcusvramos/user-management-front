import { useMemo, useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createAppTheme } from '../theme';
import type { PaletteMode } from '@mui/material';
import { ColorModeContext } from './color-mode';

export function AppThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<PaletteMode>('light');

  useEffect(() => {
    const stored = (localStorage.getItem('theme-mode') as PaletteMode | null) || 'light';
    setMode(stored);
  }, []);

  const toggle = () => {
    setMode((m) => {
      const next = m === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode', next);
      return next;
    });
  };

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppThemeProvider;
