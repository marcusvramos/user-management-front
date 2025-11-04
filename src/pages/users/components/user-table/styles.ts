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
  border: `${theme.custom.borderWidth.thin}px solid`,
  borderColor: theme.palette.divider,
  transition: theme.transitions.create(['border-color', 'background-color'], {
    duration: theme.transitions.duration.shorter,
  }),
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
  marginBottom: theme.spacing(0.5),
}));

export const FieldValue = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
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

export const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: theme.spacing(90),
}));

export const TableHeaderRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const TableHeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
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
