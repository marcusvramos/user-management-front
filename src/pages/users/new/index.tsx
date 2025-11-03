import { useState } from 'react';
import { Alert, Box, CardContent, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { User } from '@/types/user';
import { useCreateUserMutation } from '@/store/api/users-api';
import {
  Page,
  FormCard,
  FormActions,
  ActionButton,
  InfoBox,
  PageHeader,
  PageTitle,
} from '../users.styles';
import { BasicInfoSection, RoleSection } from '../components/form-sections';
import { extractErrorMessage } from '@/utils/error-handler';

function UserNewFlow() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', role: 'viewer' as User['role'] });
  const [createUser, { isLoading: saving }] = useCreateUserMutation();
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const onRoleChange = (value: string) => {
    console.log('🔴 onRoleChange (NEW) chamado com:', value);
    setForm((f) => {
      console.log('  - Form anterior:', f);
      const newForm = { ...f, role: value as User['role'] };
      console.log('  - Form novo:', newForm);
      return newForm;
    });
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    if (!form.name || !form.email) {
      setFormError('Name and email are required');
      return;
    }
    try {
      setSubmitting(true);
      await createUser({ ...form, active: true }).unwrap();
      navigate('/users');
    } catch (err: unknown) {
      const message = extractErrorMessage(err, 'Failed to create user');
      setFormError(message);
      setSubmitting(false);
    }
  }

  return (
    <Page>
      <PageHeader>
        <PageTitle variant="h4" gutterBottom>
          New User
        </PageTitle>
        <Typography variant="body1" color="text.secondary">
          Add a new user to your organization
        </Typography>
      </PageHeader>

      <Box component="form" onSubmit={onSubmit} noValidate>
        <FormCard elevation={0}>
          <CardContent sx={{ p: 4 }}>
            <Stack spacing={3.5}>
              {formError && <Alert severity="error">{formError}</Alert>}

              <BasicInfoSection name={form.name} email={form.email} onChange={onChange} />

              <RoleSection role={form.role} onChange={onRoleChange} />

              <InfoBox>
                <Typography variant="body2" color="text.secondary">
                  The user will be created as active by default and will receive an email invitation
                  to set up their account.
                </Typography>
              </InfoBox>
            </Stack>
          </CardContent>

          <FormActions>
            <ActionButton
              type="submit"
              variant="contained"
              disabled={saving || submitting}
              size="large"
            >
              {saving ? 'Creating...' : 'Create User'}
            </ActionButton>
            <ActionButton
              color="inherit"
              onClick={() => navigate(-1)}
              disabled={saving}
              size="large"
            >
              Cancel
            </ActionButton>
          </FormActions>
        </FormCard>
      </Box>
    </Page>
  );
}

export default UserNewFlow;
