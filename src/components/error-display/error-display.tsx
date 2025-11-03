import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { ErrorOutline, Home as HomeIcon } from '@mui/icons-material';

interface ErrorDisplayProps {
  title: string;
  status?: number | null;
  message: string;
  showReload?: boolean;
  onReload?: () => void;
  onGoHome: () => void;
}

export function ErrorDisplay({
  title,
  status,
  message,
  showReload = false,
  onReload,
  onGoHome,
}: ErrorDisplayProps) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh" px={2}>
      <Card
        elevation={0}
        sx={(theme) => ({
          maxWidth: 500,
          width: '100%',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 3,
        })}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3, md: 5 }, textAlign: 'center' }}>
          <Stack spacing={{ xs: 2, md: 3 }} alignItems="center">
            <Box
              sx={(theme) => ({
                width: { xs: 64, md: 80 },
                height: { xs: 64, md: 80 },
                borderRadius: '50%',
                backgroundColor: theme.palette.error.light,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              })}
            >
              <ErrorOutline
                sx={(theme) => ({ fontSize: { xs: 36, md: 48 }, color: theme.palette.error.main })}
              />
            </Box>

            <Stack spacing={1}>
              <Typography variant="h4" fontWeight={600} fontSize={{ xs: '1.5rem', md: '2.125rem' }}>
                {title}
              </Typography>
              {status && (
                <Typography variant="h6" color="text.secondary">
                  Error {status}
                </Typography>
              )}
              <Typography variant="body1" color="text.secondary">
                {message}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={{ xs: 1, sm: 2 }} sx={{ pt: 2 }}>
              <Button variant="contained" startIcon={<HomeIcon />} onClick={onGoHome} size="large">
                Go to Users
              </Button>
              {showReload && onReload && (
                <Button variant="outlined" onClick={onReload} size="large">
                  Reload Page
                </Button>
              )}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
