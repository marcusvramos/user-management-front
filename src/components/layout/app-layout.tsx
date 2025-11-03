import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import { DarkModeRounded, LightModeRounded, MenuRounded } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/sidebar/sidebar';
import {
  AppBarOffset,
  Main,
  Shell,
  PermanentSidebarContainer,
  TemporarySidebarContainer,
  MainContent,
  StyledAppBar,
  StyledToolbar,
  ToolbarSection,
  MobileMenuButton,
  UserAvatar,
} from '@/components/layout/app-layout.styles';
import { useColorMode } from '@/providers/color-mode';

export function AppLayout({ children }: PropsWithChildren) {
  const { mode, toggle } = useColorMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const openMobile = () => setMobileOpen(true);
  const closeMobile = () => setMobileOpen(false);
  return (
    <Shell>
      <PermanentSidebarContainer>
        <Sidebar variant="permanent" />
      </PermanentSidebarContainer>

      <TemporarySidebarContainer>
        <Sidebar variant="temporary" open={mobileOpen} onClose={closeMobile} />
      </TemporarySidebarContainer>

      <MainContent>
        <StyledAppBar position="fixed" color="default">
          <StyledToolbar>
            <ToolbarSection>
              <MobileMenuButton onClick={openMobile} aria-label="open menu">
                <MenuRounded />
              </MobileMenuButton>
              <Typography variant="h6">Users</Typography>
            </ToolbarSection>

            <ToolbarSection>
              <IconButton color="inherit" onClick={toggle} aria-label="toggle theme">
                {mode === 'light' ? <DarkModeRounded /> : <LightModeRounded />}
              </IconButton>
              <UserAvatar alt="User" />
            </ToolbarSection>
          </StyledToolbar>
        </StyledAppBar>

        <AppBarOffset />
        <Main>{children ?? <Outlet />}</Main>
      </MainContent>
    </Shell>
  );
}

export default AppLayout;
