import { useState } from 'react';
import {
  Box,
  Stack,
  TableBody,
  TableHead,
  TableSortLabel,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import type { User } from '@/types/user';
import { RoleBadge, StatusBadge } from '@/pages/users/users.styles';
import { useDeleteUserMutation } from '@/store/api/users-api';
import {
  MobileUserCard,
  MobileCardContent,
  FieldLabel,
  FieldValue,
  FieldRow,
  ActionsStack,
  TableContainer,
  StyledTable,
  TableHeaderRow,
  TableHeaderCell,
  StyledTableRow,
  TableDataCell,
  TableEmailCell,
  TableActionsCell,
  ActionIconButton,
} from './styles';

type SortField = 'name' | 'email' | 'role' | 'status';
type SortOrder = 'asc' | 'desc';

interface UserTableProps {
  users: User[];
  sortField: SortField;
  sortOrder: SortOrder;
  onSort: (field: SortField) => void;
}

export function UserTable({ users, sortField, sortOrder, onSort }: UserTableProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm('Delete this user?');
    if (!confirmed) return;
    try {
      setDeletingId(id);
      await deleteUser(id).unwrap();
    } finally {
      setDeletingId(null);
    }
  };

  if (isMobile) {
    return (
      <Stack spacing={2}>
        {users.map((user) => (
          <MobileUserCard key={user.id} elevation={0}>
            <MobileCardContent>
              <Stack spacing={2}>
                <Box>
                  <FieldLabel variant="caption" color="text.secondary">
                    Name
                  </FieldLabel>
                  <FieldValue variant="body1">{user.name}</FieldValue>
                </Box>

                <Box>
                  <FieldLabel variant="caption" color="text.secondary">
                    Email
                  </FieldLabel>
                  <Typography variant="body2">{user.email}</Typography>
                </Box>

                <FieldRow>
                  <Box>
                    <FieldLabel variant="caption" color="text.secondary">
                      Role
                    </FieldLabel>
                    <RoleBadge role={user.role}>{user.role}</RoleBadge>
                  </Box>

                  <Box>
                    <FieldLabel variant="caption" color="text.secondary">
                      Status
                    </FieldLabel>
                    <StatusBadge active={!!user.active}>
                      {user.active ? 'Active' : 'Inactive'}
                    </StatusBadge>
                  </Box>
                </FieldRow>

                <ActionsStack>
                  <ActionIconButton
                    aria-label="edit user"
                    component={RouterLink}
                    to={`/users/${user.id}`}
                    color="primary"
                    size="small"
                  >
                    <EditOutlined fontSize="small" />
                  </ActionIconButton>
                  <ActionIconButton
                    aria-label="delete user"
                    color="error"
                    onClick={() => handleDelete(user.id)}
                    disabled={isDeleting && deletingId === user.id}
                    size="small"
                  >
                    <DeleteOutline fontSize="small" />
                  </ActionIconButton>
                </ActionsStack>
              </Stack>
            </MobileCardContent>
          </MobileUserCard>
        ))}
      </Stack>
    );
  }

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <TableHeaderRow>
            <TableHeaderCell>
              <TableSortLabel
                active={sortField === 'name'}
                direction={sortField === 'name' ? sortOrder : 'asc'}
                onClick={() => onSort('name')}
              >
                Name
              </TableSortLabel>
            </TableHeaderCell>
            <TableHeaderCell>
              <TableSortLabel
                active={sortField === 'email'}
                direction={sortField === 'email' ? sortOrder : 'asc'}
                onClick={() => onSort('email')}
              >
                Email
              </TableSortLabel>
            </TableHeaderCell>
            <TableHeaderCell>
              <TableSortLabel
                active={sortField === 'role'}
                direction={sortField === 'role' ? sortOrder : 'asc'}
                onClick={() => onSort('role')}
              >
                Role
              </TableSortLabel>
            </TableHeaderCell>
            <TableHeaderCell>
              <TableSortLabel
                active={sortField === 'status'}
                direction={sortField === 'status' ? sortOrder : 'asc'}
                onClick={() => onSort('status')}
              >
                Status
              </TableSortLabel>
            </TableHeaderCell>
            <TableHeaderCell align="right">Actions</TableHeaderCell>
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id} hover>
              <TableDataCell>
                <Typography variant="body1" fontWeight={500}>
                  {user.name}
                </Typography>
              </TableDataCell>
              <TableEmailCell>{user.email}</TableEmailCell>
              <TableDataCell>
                <RoleBadge role={user.role}>{user.role}</RoleBadge>
              </TableDataCell>
              <TableDataCell>
                <StatusBadge active={!!user.active}>
                  {user.active ? 'Active' : 'Inactive'}
                </StatusBadge>
              </TableDataCell>
              <TableActionsCell align="right">
                <ActionIconButton
                  aria-label="edit user"
                  component={RouterLink}
                  to={`/users/${user.id}`}
                  color="primary"
                >
                  <EditOutlined />
                </ActionIconButton>
                <ActionIconButton
                  aria-label="delete user"
                  color="error"
                  onClick={() => handleDelete(user.id)}
                  disabled={isDeleting && deletingId === user.id}
                >
                  <DeleteOutline />
                </ActionIconButton>
              </TableActionsCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
