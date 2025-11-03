import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { render } from '@/test/utils/test-utils';
import UsersFlow from '@/pages/users';

describe('UsersFlow - User List Rendering', () => {
  it('should render the users table with mock data', async () => {
    render(<UsersFlow />);

    // Wait for loading to finish
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });

    // Check if users are rendered
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();

    expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    expect(screen.getByText('bob@example.com')).toBeInTheDocument();

    expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
    expect(screen.getByText('charlie@example.com')).toBeInTheDocument();
  });

  it('should display correct user count', async () => {
    render(<UsersFlow />);

    await waitFor(() => {
      expect(screen.getByText(/Showing 3 of 3 users/i)).toBeInTheDocument();
    });
  });

  it('should display user status badges correctly', async () => {
    render(<UsersFlow />);

    await waitFor(() => {
      const activeBadges = screen.getAllByText('Active');
      const inactiveBadges = screen.getAllByText('Inactive');

      expect(activeBadges).toHaveLength(2); // Alice and Bob
      expect(inactiveBadges).toHaveLength(1); // Charlie
    });
  });
});
