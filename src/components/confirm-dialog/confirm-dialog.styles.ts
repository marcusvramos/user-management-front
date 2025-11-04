import { styled } from '@mui/material/styles';
import { Dialog, DialogContent, DialogTitle, DialogActions, Box, Typography } from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.custom.radii.card,
    border: `${theme.custom.borderWidth.thin}px solid ${theme.palette.divider}`,
  },
}));

export const Title = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  paddingBottom: theme.spacing(1),
}));

export const Content = styled(DialogContent)(({ theme }) => ({
  paddingTop: theme.spacing(1),
}));

export const Actions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  borderTop: `${theme.custom.borderWidth.thin}px solid ${theme.palette.divider}`,
}));

export const IconBox = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(5),
  height: theme.spacing(5),
  borderRadius: theme.spacing(1.25),
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.action.selected : theme.palette.action.hover,
  color: theme.palette.text.primary,
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
