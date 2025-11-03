import { styled } from '@mui/material/styles';
import { Drawer } from '@mui/material';

export const DRAWER_WIDTH = 248;
export const DRAWER_MINI_WIDTH = 72;

export const StyledDrawer = styled(Drawer)(({ theme, variant }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRight: `1px solid ${theme.palette.divider}`,
    ...(variant === 'permanent' && {
      [theme.breakpoints.down('md')]: {
        width: DRAWER_MINI_WIDTH,
      },
    }),
  },
  ...(variant === 'permanent' && {
    [theme.breakpoints.down('md')]: {
      width: DRAWER_MINI_WIDTH,
    },
  }),
}));
