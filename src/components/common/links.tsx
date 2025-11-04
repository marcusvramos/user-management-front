import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

export const CleanInlineLink = styled(RouterLink)({
  textDecoration: 'none',
  color: 'inherit',
  display: 'inline-flex',
  alignItems: 'center',
});
