import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Stack } from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me',
  },
  decorators: [
    (Story) => (
      <Stack spacing={2} direction="row">
        <Story />
      </Stack>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Add User',
    startIcon: <Add />,
  },
};

export const IconButtons: Story = {
  render: () => (
    <Stack spacing={2} direction="row">
      <Button variant="primary" startIcon={<Add />}>
        Create
      </Button>
      <Button variant="secondary" startIcon={<Edit />}>
        Edit
      </Button>
      <Button variant="secondary" startIcon={<Delete />} color="error">
        Delete
      </Button>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center">
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="primary" size="medium">
        Medium
      </Button>
      <Button variant="primary" size="large">
        Large
      </Button>
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};
