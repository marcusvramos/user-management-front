import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  Stack,
  Table,
  TableCell,
  TableRow,
  Typography,
  IconButton,
} from '@mui/material';

export const MobileUserCard = styled(Card)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.divider,
  transition: 'all 0.2s',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,
  },
}));

export const MobileCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2.5),
  },
}));

export const FieldLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  marginBottom: theme.spacing(0.5),
}));

export const FieldValue = styled(Typography)(() => ({
  fontWeight: 600,
}));

export const FieldRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
}));

export const ActionsStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1),
  justifyContent: 'flex-end',
  paddingTop: theme.spacing(1),
}));

export const TableContainer = styled(Box)(() => ({
  width: '100%',
  overflowX: 'auto',
}));

export const StyledTable = styled(Table)(() => ({
  minWidth: 720,
}));

export const TableHeaderRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const TableHeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '0.875rem',
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td': {
    border: 0,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const TableDataCell = styled(TableCell)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  fontSize: '0.95rem',
}));

export const TableEmailCell = styled(TableDataCell)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const TableActionsCell = styled(TableDataCell)(() => ({
  whiteSpace: 'nowrap',
}));

export const ActionIconButton = styled(IconButton)(({ theme }) => ({
  '&:not(:last-child)': {
    marginRight: theme.spacing(0.5),
  },
})) as typeof IconButton;
