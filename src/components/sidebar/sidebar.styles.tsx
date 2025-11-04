import { styled } from '@mui/material/styles';
import { Box, Drawer, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import type { ListItemButtonProps } from '@mui/material/ListItemButton';
import { CleanInlineLink } from '@/components/common/links';
import type { ElementType } from 'react';

export const StyledDrawer = styled(Drawer)(({ theme, variant }) => ({
  width: theme.custom.layout.drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: theme.custom.layout.drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRight: `${theme.custom.borderWidth.thin}px solid ${theme.palette.divider}`,
    ...(variant === 'permanent' && {
      [theme.breakpoints.down('md')]: {
        width: theme.custom.layout.drawerMiniWidth,
      },
    }),
    ...(variant === 'temporary' && {
      width: `${theme.custom.layout.drawerTempWidthMobileVw}vw`,
      maxWidth: theme.custom.layout.drawerTempWidth,
      [theme.breakpoints.up('sm')]: {
        width: theme.custom.layout.drawerTempWidth,
      },
    }),
  },
  ...(variant === 'permanent' && {
    [theme.breakpoints.down('md')]: {
      width: theme.custom.layout.drawerMiniWidth,
    },
  }),
}));

export const SidebarToolbar = styled(Toolbar)(({ theme }) => ({
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(1.5),
  justifyContent: 'flex-start',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}));

export const LogoLink = CleanInlineLink;

export const LogoImage = styled('img')(({ theme }) => ({
  height: theme.custom.sizes.logoHeight,
  width: 'auto',
}));

export const NavScrollBox = styled(Box)({
  overflow: 'auto',
});

export const NavItemButton = styled(
  (
    props: ListItemButtonProps & { sidebarVariant: 'permanent' | 'temporary' } & {
      to?: string;
      component?: ElementType;
    },
  ) => {
    const { sidebarVariant, ...rest } = props;
    void sidebarVariant;
    return <ListItemButton {...rest} />;
  },
)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary,
  '&.Mui-selected': {
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.action.selected,
  },
  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.action.hover,
  },
}));

export const NavItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'sidebarVariant',
})<{ sidebarVariant: 'permanent' | 'temporary' }>(({ theme, sidebarVariant }) => ({
  color: 'inherit',
  minWidth: 0,
  justifyContent: 'center',
  marginRight: sidebarVariant === 'temporary' ? theme.spacing(2) : 0,
  [theme.breakpoints.up('md')]: {
    marginRight: sidebarVariant === 'temporary' ? theme.spacing(2) : theme.spacing(2),
  },
}));

export const NavItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'sidebarVariant',
})<{ sidebarVariant: 'permanent' | 'temporary' }>(({ theme, sidebarVariant }) => ({
  display: sidebarVariant === 'temporary' ? 'block' : 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));
