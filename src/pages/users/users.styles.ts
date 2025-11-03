import { styled, alpha } from '@mui/material/styles';
import { Box, Card, TextField, Button, Typography } from '@mui/material';

export const Page = styled(Box)(({ theme }) => ({
  width: '100%',
  marginInline: 0,
  padding: theme.spacing(4),
  maxWidth: '100%',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

// Base Card Component (reused by FormCard and TableCard)
const BaseCard = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(3),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  boxShadow:
    theme.palette.mode === 'light'
      ? '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)'
      : '0 1px 3px rgba(0,0,0,0.3)',
}));

export const FormCard = BaseCard;

export const FormSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3.5),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

export const FormGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(1.5),
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(1.5),
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(2),
  },
}));

export const FormActions = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 4, 2.5),
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: theme.spacing(2, 2, 1.5),
  },
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export const StatusBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  padding: theme.spacing(2.5),
  borderRadius: theme.spacing(2),
  backgroundColor: active ? '#e8f5e9' : theme.palette.grey[100],
  border: `1px solid ${active ? theme.palette.success.light : theme.palette.grey[300]}`,
}));

export const TableCard = BaseCard;

export const TableFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 3, 2.5),
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const RoleBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'role',
})<{ role: string }>(({ theme, role }) => {
  const { palette } = theme;
  const map: Record<string, string> = {
    admin: palette.error.main,
    manager: palette.warning.main,
    viewer: palette.info.main,
  };
  const main = map[role] || map.viewer;
  return {
    display: 'inline-block',
    padding: theme.spacing(0.75, 2.5),
    borderRadius: theme.spacing(2),
    backgroundColor: alpha(main, palette.mode === 'light' ? 0.16 : 0.28),
    color: main,
    fontSize: '0.875rem',
    fontWeight: 700,
    textTransform: 'capitalize',
  };
});

export const StatusBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => {
  const main = active ? theme.palette.success.main : theme.palette.error.main;
  return {
    display: 'inline-block',
    padding: theme.spacing(0.75, 2),
    borderRadius: theme.spacing(2),
    backgroundColor: alpha(main, theme.palette.mode === 'light' ? 0.16 : 0.28),
    color: main,
    fontSize: '0.875rem',
    fontWeight: 700,
  };
});

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  flexWrap: 'wrap',
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  flex: '1 1 100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.divider,
      borderWidth: '1.5px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor:
        theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[600],
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px',
    },
    '& input': {
      color: theme.palette.text.primary,
    },
    '& input::placeholder': {
      color: theme.palette.text.secondary,
      opacity: 0.7,
    },
  },
  [theme.breakpoints.up('md')]: {
    flex: '1 1 auto',
    maxWidth: '500px',
  },
}));

export const RefreshButton = styled(Button)(({ theme }) => ({
  border: `1.5px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  minWidth: 'auto',
  padding: theme.spacing(1, 2),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.grey[400],
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

export const PageHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  fontSize: '2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const InfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  backgroundColor: alpha(theme.palette.info.main, 0.08),
  border: `1px solid ${alpha(theme.palette.info.main, 0.3)}`,
  color: theme.palette.text.primary,
}));
