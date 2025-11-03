import { Alert, Box, CircularProgress } from '@mui/material';

export function LoadingState() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <CircularProgress size={48} />
    </Box>
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
