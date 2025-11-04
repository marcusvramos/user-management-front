import { styled, alpha } from '@mui/material/styles';
import { Alert, Box, Card, CardContent, TextField, Button, Typography } from '@mui/material';

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

const BaseCard = styled(Card)(({ theme }) => ({
  border: `${theme.custom.borderWidth.thin}px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(3),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  boxShadow:
    theme.palette.mode === 'light' ? theme.custom.shadows.cardLight : theme.custom.shadows.cardDark,
}));

export const FormCard = BaseCard;

export const FormCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
}));

export const FormSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3.5),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
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
  borderTop: `${theme.custom.borderWidth.thin}px solid ${theme.palette.divider}`,
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
  backgroundColor: active
    ? alpha(
        theme.palette.success.main,
        theme.palette.mode === 'light'
          ? theme.custom.opacity.surface.light
          : theme.custom.opacity.surface.dark,
      )
    : theme.palette.action.selected,
  border: `${theme.custom.borderWidth.thin}px solid ${active ? theme.palette.success.light : theme.palette.grey[300]}`,
}));

export const TableCard = BaseCard;

export const TableFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 3, 2.5),
  backgroundColor: theme.palette.background.default,
  borderTop: `${theme.custom.borderWidth.thin}px solid ${theme.palette.divider}`,
}));

export const TableLoading = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
}));

export const ErrorAlert = styled(Alert)(({ theme }) => ({
  margin: theme.spacing(3),
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
    backgroundColor: alpha(
      main,
      palette.mode === 'light'
        ? theme.custom.opacity.surface.light
        : theme.custom.opacity.surface.dark,
    ),
    color: main,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightBold,
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
    backgroundColor: alpha(
      main,
      theme.palette.mode === 'light'
        ? theme.custom.opacity.surface.light
        : theme.custom.opacity.surface.dark,
    ),
    color: main,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightBold,
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
      borderWidth: `${theme.custom.borderWidth.semi}px`,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor:
        theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[600],
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
      borderWidth: `${theme.custom.borderWidth.thick}px`,
    },
    '& .MuiInputAdornment-root': {
      color:
        theme.palette.mode === 'dark'
          ? alpha(theme.palette.common.white, 0.8)
          : theme.palette.text.secondary,
    },
    '& input': {
      color:
        theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
      '::placeholder': {
        color:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.common.white, 0.8)
            : theme.palette.text.secondary,
        opacity: 1,
      },
    },
  },
  [theme.breakpoints.up('md')]: {
    flex: '1 1 auto',
    maxWidth: theme.spacing(62.5),
  },
}));

export const RefreshButton = styled(Button)(({ theme }) => ({
  border: `${theme.custom.borderWidth.semi}px solid ${theme.palette.divider}`,
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
})) as typeof Button;

export const PageHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(3),
}));

export const InfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  backgroundColor: alpha(
    theme.palette.info.main,
    theme.palette.mode === 'light'
      ? theme.custom.opacity.subtle.light
      : theme.custom.opacity.subtle.dark,
  ),
  border: `${theme.custom.borderWidth.thin}px solid ${alpha(theme.palette.info.main, theme.custom.opacity.border)}`,
  color: theme.palette.text.primary,
}));
