import { InputAdornment } from '@mui/material';
import { Add as AddIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import {
  SearchContainer,
  SearchField,
  RefreshButton,
  PrimaryButton,
} from '@/pages/users/users.styles';

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  onRefresh: () => void;
  loading?: boolean;
}

export function SearchBar({ query, onQueryChange, onRefresh, loading }: SearchBarProps) {
  return (
    <SearchContainer>
      <SearchField
        placeholder="Search by name or email"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">🔎</InputAdornment>,
          },
        }}
      />
      <RefreshButton onClick={onRefresh} disabled={loading} aria-label="refresh">
        <RefreshIcon />
      </RefreshButton>
      <RouterLink to="/users/new" style={{ textDecoration: 'none' }}>
        <PrimaryButton variant="contained" startIcon={<AddIcon />} size="large">
          New User
        </PrimaryButton>
      </RouterLink>
    </SearchContainer>
  );
}
