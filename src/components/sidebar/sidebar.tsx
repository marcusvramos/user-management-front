import { Box, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { People as PeopleIcon } from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { StyledDrawer } from '@/components/sidebar/sidebar.styles';
import zucchettiLogo from '@/assets/zucchetti-logo.png';

const NAV_ITEMS = [{ label: 'Users', icon: <PeopleIcon />, to: '/users' }];

export interface SidebarProps {
  variant?: 'permanent' | 'temporary';
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ variant = 'permanent', open, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <StyledDrawer
      variant={variant}
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      PaperProps={
        variant === 'temporary'
          ? { sx: { width: { xs: '85vw', sm: '320px' }, maxWidth: 320 } }
          : undefined
      }
    >
      <Toolbar
        sx={{
          px: 2,
          py: 1.5,
          justifyContent:
            variant === 'temporary' ? 'flex-start' : { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          component={RouterLink}
          to="/users"
          sx={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <Box
            component="img"
            src={zucchettiLogo}
            alt="Zucchetti Brasil logo"
            sx={{ height: 28, width: 'auto' }}
          />
        </Box>
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {NAV_ITEMS.map((item) => {
            const selected = location.pathname.startsWith(item.to);
            return (
              <ListItemButton
                key={item.label}
                component={RouterLink}
                to={item.to}
                selected={selected}
                sx={(theme) => ({
                  color: theme.palette.mode === 'light' ? 'primary.contrastText' : 'text.primary',
                  '&.Mui-selected': {
                    backgroundColor:
                      theme.palette.mode === 'light' ? 'primary.main' : 'action.selected',
                  },
                  '&:hover': {
                    backgroundColor:
                      theme.palette.mode === 'light' ? 'primary.light' : 'action.hover',
                  },
                })}
              >
                <ListItemIcon
                  sx={{
                    color: 'inherit',
                    minWidth: 0,
                    mr: variant === 'temporary' ? 2 : { xs: 0, md: 2 },
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    display: variant === 'temporary' ? 'block' : { xs: 'none', md: 'block' },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </StyledDrawer>
  );
}

export default Sidebar;
