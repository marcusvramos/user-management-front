import { Button, Typography } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import {
  Actions,
  Content,
  ErrorIcon,
  IconCircle,
  StyledCard,
  Wrapper,
} from './error-display.styles';

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
    <Wrapper>
      <StyledCard elevation={0}>
        <Content>
          <Actions spacing={{ xs: 2, md: 3 }} alignItems="center">
            <IconCircle>
              <ErrorIcon />
            </IconCircle>

            <Actions spacing={1}>
              <Typography variant="h4">{title}</Typography>
              {status && (
                <Typography variant="h6" color="text.secondary">
                  Error {status}
                </Typography>
              )}
              <Typography variant="body1" color="text.secondary">
                {message}
              </Typography>
            </Actions>

            <Actions direction="row" spacing={{ xs: 1, sm: 2 }}>
              <Button variant="contained" startIcon={<HomeIcon />} onClick={onGoHome} size="large">
                Go to Users
              </Button>
              {showReload && onReload && (
                <Button variant="outlined" onClick={onReload} size="large">
                  Reload Page
                </Button>
              )}
            </Actions>
          </Actions>
        </Content>
      </StyledCard>
    </Wrapper>
  );
}
