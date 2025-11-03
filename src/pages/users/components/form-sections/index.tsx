import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import type { ComponentProps } from 'react';
import type { SelectChangeEvent } from '@mui/material';
import {
  FormSection,
  SectionTitle,
  FormGrid,
  StyledTextField,
  StatusBox,
} from '../../users.styles';

type RoleMenuItemProps = {
  value: string;
  title: string;
  description: string;
} & ComponentProps<typeof MenuItem>;

function RoleMenuItem({ value, title, description, ...menuItemProps }: RoleMenuItemProps) {
  return (
    <MenuItem value={value} {...menuItemProps}>
      <Box>
        <Typography variant="body1" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </MenuItem>
  );
}

interface BasicInfoSectionProps {
  name: string;
  email: string;
  onChange: (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function BasicInfoSection({ name, email, onChange }: BasicInfoSectionProps) {
  return (
    <FormSection>
      <SectionTitle variant="subtitle1">Basic Information</SectionTitle>
      <FormGrid>
        <StyledTextField
          label="Full Name"
          value={name}
          onChange={onChange('name')}
          required
          fullWidth
          placeholder="Enter user's full name"
        />
        <StyledTextField
          label="Email Address"
          value={email}
          onChange={onChange('email')}
          required
          type="email"
          fullWidth
          placeholder="user@example.com"
        />
      </FormGrid>
    </FormSection>
  );
}

interface RoleSectionProps {
  role: string;
  onChange: (value: string) => void;
}

const ROLE_OPTIONS = [
  { value: 'admin', title: 'Admin', description: 'Full system access' },
  { value: 'manager', title: 'Manager', description: 'Manage team members' },
  { value: 'viewer', title: 'Viewer', description: 'Read-only access' },
];

export function RoleSection({ role, onChange }: RoleSectionProps) {
  const handleChange = (e: SelectChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <FormSection>
      <SectionTitle variant="subtitle1">Role & Permissions</SectionTitle>
      <FormControl fullWidth>
        <InputLabel id="role-select-label">User Role</InputLabel>
        <Select
          labelId="role-select-label"
          id="role-select"
          value={role}
          label="User Role"
          onChange={handleChange}
          renderValue={(selected) => {
            const option = ROLE_OPTIONS.find((o) => o.value === selected);
            return option ? option.title : '';
          }}
        >
          {ROLE_OPTIONS.map((option) => (
            <RoleMenuItem
              key={option.value}
              value={option.value}
              title={option.title}
              description={option.description}
            />
          ))}
        </Select>
        <FormHelperText>Select the appropriate role for this user</FormHelperText>
      </FormControl>
    </FormSection>
  );
}

interface AccountStatusSectionProps {
  active: boolean;
  onToggle: (checked: boolean) => void;
}

export function AccountStatusSection({ active, onToggle }: AccountStatusSectionProps) {
  return (
    <FormSection>
      <SectionTitle variant="subtitle1">Account Status</SectionTitle>
      <StatusBox active={active}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Switch checked={active} onChange={(_, checked) => onToggle(checked)} size="medium" />
          <Box flex={1}>
            <Typography variant="body1" fontWeight={600} gutterBottom>
              {active ? 'Active' : 'Inactive'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {active ? 'User can access the system' : 'User cannot access the system'}
            </Typography>
          </Box>
        </Stack>
      </StatusBox>
    </FormSection>
  );
}
