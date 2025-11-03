import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@/test/utils/test-utils';
import UsersFlow from '@/pages/users';

describe('UsersFlow - Filtering', () => {
  it('should filter users by name', async () => {
    const user = userEvent.setup();
    render(<UsersFlow />);

    // Wait for users to load
    await waitFor(() => {
      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    // Type in search box
    const searchInput = screen.getByPlaceholderText(/search/i);
    await user.type(searchInput, 'Alice');

    // Alice should be visible
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();

    // Bob and Charlie should not be visible
    expect(screen.queryByText('Bob Smith')).not.toBeInTheDocument();
    expect(screen.queryByText('Charlie Brown')).not.toBeInTheDocument();

    // Count should be updated
    expect(screen.getByText(/Showing 1 of 3 users/i)).toBeInTheDocument();
  });

  it('should filter users by email', async () => {
    const user = userEvent.setup();
    render(<UsersFlow />);

    await waitFor(() => {
      expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(/search/i);
    await user.type(searchInput, 'bob@example.com');

    // Only Bob should be visible
    expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
    expect(screen.queryByText('Charlie Brown')).not.toBeInTheDocument();
  });

  it('should show all users when search is cleared', async () => {
    const user = userEvent.setup();
    render(<UsersFlow />);

    await waitFor(() => {
      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(/search/i);

    // Filter
    await user.type(searchInput, 'Alice');
    expect(screen.queryByText('Bob Smith')).not.toBeInTheDocument();

    // Clear
    await user.clear(searchInput);

    // All users should be visible again
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
    expect(screen.getByText(/Showing 3 of 3 users/i)).toBeInTheDocument();
  });

  it('should be case-insensitive', async () => {
    const user = userEvent.setup();
    render(<UsersFlow />);

    await waitFor(() => {
      expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(/search/i);
    await user.type(searchInput, 'CHARLIE');

    expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
    expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
  });
});
