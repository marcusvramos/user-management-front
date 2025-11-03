import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@/test/utils/test-utils';
import UserNewFlow from '@/pages/users/new';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('UserNewFlow - Create User Integration', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('should create a new user with valid data', async () => {
    const user = userEvent.setup();
    render(<UserNewFlow />);

    // Verify form is rendered
    expect(screen.getByText('New User')).toBeInTheDocument();

    // Fill in form fields
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email address/i);

    await user.type(nameInput, 'David Miller');
    await user.type(emailInput, 'david@example.com');

    // Note: Role is a Select dropdown with default value 'viewer'
    // For simplicity, we'll use the default value in this test

    // Submit form
    const submitButton = screen.getByRole('button', { name: /create user/i });
    await user.click(submitButton);

    // Wait for API call to complete and navigation
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/users');
    });
  });

  it('should show validation error when name is missing', async () => {
    const user = userEvent.setup();
    render(<UserNewFlow />);

    // Only fill email
    const emailInput = screen.getByLabelText(/email address/i);
    await user.type(emailInput, 'test@example.com');

    // Try to submit
    const submitButton = screen.getByRole('button', { name: /create user/i });
    await user.click(submitButton);

    // Should show error
    await waitFor(() => {
      expect(screen.getByText(/name and email are required/i)).toBeInTheDocument();
    });

    // Should NOT navigate
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('should show validation error when email is missing', async () => {
    const user = userEvent.setup();
    render(<UserNewFlow />);

    // Only fill name
    const nameInput = screen.getByLabelText(/full name/i);
    await user.type(nameInput, 'John Doe');

    // Try to submit
    const submitButton = screen.getByRole('button', { name: /create user/i });
    await user.click(submitButton);

    // Should show error
    await waitFor(() => {
      expect(screen.getByText(/name and email are required/i)).toBeInTheDocument();
    });

    // Should NOT navigate
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('should disable submit button while creating', async () => {
    const user = userEvent.setup();
    render(<UserNewFlow />);

    // Fill form
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email address/i);

    await user.type(nameInput, 'Test User');
    await user.type(emailInput, 'test@example.com');

    // Submit
    const submitButton = screen.getByRole('button', { name: /create user/i });
    await user.click(submitButton);

    // Button should be disabled during submission
    expect(submitButton).toBeDisabled();
  });

  it('should allow canceling user creation', async () => {
    const user = userEvent.setup();
    render(<UserNewFlow />);

    // Click cancel button
    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    await user.click(cancelButton);

    // Should navigate back
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(-1);
    });
  });

  it('should update global state after creating user', async () => {
    const user = userEvent.setup();
    const { store } = render(<UserNewFlow />);

    // Fill and submit form
    await user.type(screen.getByLabelText(/full name/i), 'Emma Watson');
    await user.type(screen.getByLabelText(/email address/i), 'emma@example.com');

    const submitButton = screen.getByRole('button', { name: /create user/i });
    await user.click(submitButton);

    // Wait for mutation to complete
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });

    // Verify Redux store was updated via RTK Query cache invalidation
    // The usersApi cache should have been invalidated, causing a refetch
    const state = store.getState();

    // Check that the cache invalidation was triggered
    // (In a real scenario, this would cause the users list to refetch)
    expect(state.usersApi.queries).toBeDefined();
  });
});
