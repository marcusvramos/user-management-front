import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { router } from '@/routes/router';
import AppThemeProvider from '@/providers/app-theme-provider';
import ConfirmProvider from '@/providers/confirm-provider';
import { store } from '@/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <AppThemeProvider>
        <ConfirmProvider>
          <RouterProvider router={router} future={{ v7_startTransition: true }} />
        </ConfirmProvider>
      </AppThemeProvider>
    </ReduxProvider>
  </StrictMode>,
);
