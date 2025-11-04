import { List } from '@mui/material';
import { People as PeopleIcon } from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  StyledDrawer,
  SidebarToolbar,
  LogoLink,
  LogoImage,
  NavScrollBox,
  NavItemButton,
  NavItemIcon,
  NavItemText,
} from '@/components/sidebar/sidebar.styles';
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
    >
      <SidebarToolbar>
        <LogoLink to="/users">
          <LogoImage src={zucchettiLogo} alt="Zucchetti Brasil logo" />
        </LogoLink>
      </SidebarToolbar>
      <NavScrollBox>
        <List>
          {NAV_ITEMS.map((item) => {
            const selected = location.pathname.startsWith(item.to);
            return (
              <NavItemButton
                key={item.label}
                component={RouterLink}
                to={item.to}
                selected={selected}
                sidebarVariant={variant}
              >
                <NavItemIcon sidebarVariant={variant}>{item.icon}</NavItemIcon>
                <NavItemText primary={item.label} sidebarVariant={variant} />
              </NavItemButton>
            );
          })}
        </List>
      </NavScrollBox>
    </StyledDrawer>
  );
}

export default Sidebar;
