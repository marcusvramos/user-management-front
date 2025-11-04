import { useEffect, useMemo, useState } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { useGetUsersQuery } from '@/store/api/users-api';
import { useSearchParams } from 'react-router-dom';
import {
  Page,
  PageHeader,
  PageTitle,
  TableCard,
  TableFooter,
  TableLoading,
  ErrorAlert,
} from '@/pages/users/users.styles';
import { SearchBar } from '@/pages/users/components/search-bar';
import { UserTable } from '@/pages/users/components/user-table';

type SortField = 'name' | 'email' | 'role' | 'status';
type SortOrder = 'asc' | 'desc';

function UsersFlow() {
  const { data: users = [], isLoading, error, refetch } = useGetUsersQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const paramSort = searchParams.get('sort');
  const paramOrder = searchParams.get('order');
  const paramQuery = searchParams.get('q') ?? '';

  const isValidSortField = (v: string | null): v is SortField =>
    v === 'name' || v === 'email' || v === 'role' || v === 'status';
  const isValidSortOrder = (v: string | null): v is SortOrder => v === 'asc' || v === 'desc';

  const [inputQuery, setInputQuery] = useState<string>(paramQuery);
  const [query, setQuery] = useState<string>(paramQuery);
  const [sortField, setSortField] = useState<SortField>(
    isValidSortField(paramSort) ? paramSort : 'name',
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>(
    isValidSortOrder(paramOrder) ? paramOrder : 'asc',
  );

  const DEBOUNCE_MS = import.meta.env.MODE === 'test' ? 0 : 250;

  useEffect(() => {
    const id = setTimeout(() => setQuery(inputQuery), DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [inputQuery, DEBOUNCE_MS]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (sortField !== 'name') params.set('sort', sortField);
    if (sortOrder !== 'asc') params.set('order', sortOrder);
    setSearchParams(params, { replace: true });
  }, [query, sortField, sortOrder, setSearchParams]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let result = users;

    if (q) {
      result = users.filter(
        (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q),
      );
    }

    result = [...result].sort((a, b) => {
      let aValue: string | boolean;
      let bValue: string | boolean;

      if (sortField === 'status') {
        aValue = a.active;
        bValue = b.active;
      } else {
        aValue = a[sortField].toLowerCase();
        bValue = b[sortField].toLowerCase();
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [users, query, sortField, sortOrder]);

  return (
    <Page>
      <PageHeader>
        <PageTitle variant="h4">Users</PageTitle>
        <SearchBar
          query={inputQuery}
          onQueryChange={setInputQuery}
          onRefresh={refetch}
          loading={isLoading}
        />
      </PageHeader>

      <TableCard elevation={0}>
        {isLoading ? (
          <TableLoading>
            <CircularProgress />
          </TableLoading>
        ) : error ? (
          <ErrorAlert severity="error">
            {'status' in error ? `Error: ${error.status}` : 'Failed to load users'}
          </ErrorAlert>
        ) : (
          <>
            <UserTable
              users={filtered}
              sortField={sortField}
              sortOrder={sortOrder}
              onSort={handleSort}
            />
            <TableFooter>
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
                Showing {filtered.length} of {users.length} users
              </Typography>
            </TableFooter>
          </>
        )}
      </TableCard>
    </Page>
  );
}

export default UsersFlow;
