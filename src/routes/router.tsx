import { lazy, Suspense } from 'react';
import type { ComponentType } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '@/components/layout/app-layout';
import ErrorBoundary from '@/routes/error-boundary';
import { LoadingFallback } from '@/components/loading-fallback/loading-fallback';

const UsersFlow = lazy(() => import('@/pages/users'));
const UserNewFlow = lazy(() => import('@/pages/users/new'));
const UserEditFlow = lazy(() => import('@/pages/users/edit'));
const NotFound = lazy(() => import('@/routes/not-found'));

const withSuspense = (Component: ComponentType) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        { index: true, element: <Navigate to="/users" replace /> },
        { path: 'users', element: withSuspense(UsersFlow) },
        { path: 'users/new', element: withSuspense(UserNewFlow) },
        { path: 'users/:id', element: withSuspense(UserEditFlow) },
        { path: '*', element: withSuspense(NotFound) },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

export default router;
