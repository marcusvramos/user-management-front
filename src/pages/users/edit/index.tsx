import { useEffect, useMemo, useState } from 'react';
import { Alert, Box, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import type { User } from '@/types/user';
import { useGetUserQuery, useUpdateUserMutation } from '@/store/api/users-api';
import {
  Page,
  FormCard,
  FormActions,
  ActionButton,
  PageHeader,
  PageTitle,
  FormCardContent,
} from '../users.styles';
import { BasicInfoSection, RoleSection, AccountStatusSection } from '../components/form-sections';
import { LoadingState, ErrorState } from '../components/loading-error-states';
import { extractErrorMessage } from '@/utils/error-handler';

function UserEditFlow() {
  const navigate = useNavigate();
  const { id } = useParams();
  const numericId = useMemo(() => (id ? Number(id) : NaN), [id]);
  const {
    data,
    isFetching: loading,
    error,
  } = useGetUserQuery(numericId, {
    skip: Number.isNaN(numericId),
  });
  const [updateUser, { isLoading: saving }] = useUpdateUserMutation();
  const [form, setForm] = useState<Partial<User>>({});
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const onRoleChange = (value: string) => {
    setForm((f) => {
      const newForm = { ...f, role: value as User['role'] };
      return newForm;
    });
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    if (!id || Number.isNaN(numericId)) return;
    try {
      await updateUser({
        id: numericId,
        data: {
          name: form.name || '',
          email: form.email || '',
          role: (form.role as User['role']) || 'viewer',
          active: form.active ?? true,
        },
      }).unwrap();
      navigate('/users');
    } catch (err: unknown) {
      const message = extractErrorMessage(err, 'Failed to update user');
      setFormError(message);
    }
  }

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <Page>
      <PageHeader>
        <PageTitle variant="h4" gutterBottom>
          Edit User
        </PageTitle>
        <Typography variant="body1" color="text.secondary">
          Update user information and permissions
        </Typography>
      </PageHeader>

      <Box component="form" onSubmit={onSubmit} noValidate>
        <FormCard elevation={0}>
          <FormCardContent>
            <Stack spacing={3.5}>
              {formError && <Alert severity="error">{formError}</Alert>}

              <BasicInfoSection
                name={form.name || ''}
                email={form.email || ''}
                onChange={onChange}
              />

              <RoleSection role={form.role || 'viewer'} onChange={onRoleChange} />

              <AccountStatusSection
                active={!!form.active}
                onToggle={(checked) => setForm((f) => ({ ...f, active: checked }))}
              />
            </Stack>
          </FormCardContent>

          <FormActions>
            <ActionButton type="submit" variant="contained" size="large" disabled={saving}>
              Save Changes
            </ActionButton>
            <ActionButton color="inherit" onClick={() => navigate(-1)} size="large">
              Cancel
            </ActionButton>
          </FormActions>
        </FormCard>
      </Box>
    </Page>
  );
}

export default UserEditFlow;
