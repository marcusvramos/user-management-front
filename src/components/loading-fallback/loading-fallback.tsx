import { Box, CircularProgress } from '@mui/material';

export function LoadingFallback() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
      <CircularProgress />
    </Box>
  );
}
