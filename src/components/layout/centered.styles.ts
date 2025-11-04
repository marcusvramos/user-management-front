import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const CenteredSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: `${theme.custom.layout.sectionMinVh}vh`,
}));
