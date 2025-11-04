import { Alert } from '@mui/material';
import { LargeCircularProgress } from './styles';
import { CenteredSection } from '@/components/layout/centered.styles';

export function LoadingState() {
  return (
    <CenteredSection>
      <LargeCircularProgress />
    </CenteredSection>
  );
}

interface ErrorStateProps {
  error: unknown;
  message?: string;
}

export function ErrorState({ error, message = 'Failed to load user' }: ErrorStateProps) {
  const errorMessage =
    typeof error === 'object' && error !== null && 'status' in (error as Record<string, unknown>)
      ? `Error: ${(error as { status?: unknown }).status}`
      : message;

  return <Alert severity="error">{errorMessage}</Alert>;
}
