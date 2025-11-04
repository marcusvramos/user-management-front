import { styled } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';

export const LargeCircularProgress = styled(CircularProgress)(({ theme }) => ({
  width: `${theme.spacing(6)} !important`,
  height: `${theme.spacing(6)} !important`,
}));
