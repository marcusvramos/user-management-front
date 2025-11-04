/* eslint-disable react-refresh/only-export-components */
import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { usersApi } from '@/store/api/users-api';
import AppThemeProvider from '@/providers/app-theme-provider';
import ConfirmProvider from '@/providers/confirm-provider';

export function createTestStore() {
  return configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
  });
}

export function renderWithProviders(
  ui: ReactElement,
  {
    store = createTestStore(),
    initialEntries = ['/'],
    ...renderOptions
  }: {
    store?: ReturnType<typeof createTestStore>;
    initialEntries?: string[];
  } & Omit<RenderOptions, 'wrapper'> = {},
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <AppThemeProvider>
          <ConfirmProvider>
            <MemoryRouter
              initialEntries={initialEntries}
              future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
            >
              {children}
            </MemoryRouter>
          </ConfirmProvider>
        </AppThemeProvider>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// Re-export everything from RTL
export * from '@testing-library/react';
export { renderWithProviders as render };
