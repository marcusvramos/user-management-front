import { InputAdornment } from '@mui/material';
import { Add as AddIcon, Refresh as RefreshIcon, SearchRounded } from '@mui/icons-material';
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
        aria-label="Search by name or email"
        slotProps={{
          input: {
            'aria-label': 'Search by name or email',
            startAdornment: (
              <InputAdornment position="start">
                <SearchRounded fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
      />
      <RefreshButton onClick={onRefresh} disabled={loading} aria-label="refresh">
        <RefreshIcon />
      </RefreshButton>
      <PrimaryButton
        component={RouterLink}
        to="/users/new"
        variant="contained"
        startIcon={<AddIcon />}
        size="large"
      >
        New User
      </PrimaryButton>
    </SearchContainer>
  );
}
