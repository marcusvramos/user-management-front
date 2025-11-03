import { useNavigate, useRouteError } from 'react-router-dom';
import AppLayout from '@/components/layout/app-layout';
import { ErrorDisplay } from '@/components/error-display/error-display';

export default function ErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();
  const isRecord = (v: unknown): v is Record<string, unknown> =>
    typeof v === 'object' && v !== null;

  const status = isRecord(error) && typeof error.status === 'number' ? error.status : null;
  const isNotFound = status === 404;

  const title = isNotFound ? 'Page Not Found' : 'Oops! Something went wrong';
  const message = isNotFound
    ? "The page you're looking for doesn't exist."
    : (isRecord(error) && typeof error.message === 'string' && error.message) ||
      (isRecord(error) && typeof error.statusText === 'string' && error.statusText) ||
      'An unexpected error occurred';

  return (
    <AppLayout>
      <ErrorDisplay
        title={title}
        status={status}
        message={message}
        showReload={!isNotFound}
        onReload={() => navigate(0)}
        onGoHome={() => navigate('/users')}
      />
    </AppLayout>
  );
}
