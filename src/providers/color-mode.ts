import { createContext, useContext } from 'react';
import type { PaletteMode } from '@mui/material';

export type ColorModeContextType = { mode: PaletteMode; toggle: () => void };

export const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'light',
  toggle: () => {},
});

export function useColorMode() {
  return useContext(ColorModeContext);
}
