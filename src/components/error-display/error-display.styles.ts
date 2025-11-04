import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, Stack } from '@mui/material';
import { CenteredSection } from '@/components/layout/centered.styles';
import { ErrorOutline } from '@mui/icons-material';

export const Wrapper = styled(CenteredSection)(({ theme }) => ({
  paddingInline: theme.spacing(2),
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: theme.custom.layout.maxContentWidth,
  width: '100%',
  border: `${theme.custom.borderWidth.thin}px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'none',
}));

export const Content = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

export const IconCircle = styled(Box)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  borderRadius: '50%',
  backgroundColor: theme.palette.error.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ErrorIcon = styled(ErrorOutline)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: theme.typography.h4.fontSize,
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.h3.fontSize,
  },
}));

export const Actions = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));
