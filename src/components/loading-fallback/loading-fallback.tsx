import { CircularProgress } from '@mui/material';
import { CenteredSection } from '@/components/layout/centered.styles';

export function LoadingFallback() {
  return (
    <CenteredSection>
      <CircularProgress />
    </CenteredSection>
  );
}
