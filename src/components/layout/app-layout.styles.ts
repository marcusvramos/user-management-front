import { styled } from '@mui/material/styles';
import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material';

export const Shell = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  minHeight: theme.custom.layout.viewportDynamic,
  backgroundColor: theme.palette.background.default,
}));

export const PermanentSidebarContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

export const TemporarySidebarContainer = styled(Box)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const MainContent = styled(Box)(() => ({
  flexGrow: 1,
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  left: 0,
  width: '100%',
  zIndex: theme.zIndex.drawer - 1,
  [theme.breakpoints.up('md')]: {
    left: theme.custom.layout.drawerWidth,
    width: `calc(100% - ${theme.custom.layout.drawerWidth}px)`,
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  gap: theme.spacing(2),
  justifyContent: 'space-between',
}));

export const ToolbarSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'inline-flex',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const UserAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: theme.spacing(theme.custom.sizes.avatar / 8),
  height: theme.spacing(theme.custom.sizes.avatar / 8),
}));

export const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  minHeight: theme.custom.layout.viewport,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(5),
  },
}));

export const AppBarOffset = styled('div')(({ theme }) => theme.mixins.toolbar);
