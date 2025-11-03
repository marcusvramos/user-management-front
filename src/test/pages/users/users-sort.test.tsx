import { describe, it, expect } from 'vitest';
import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@/test/utils/test-utils';
import UsersFlow from '@/pages/users';

describe('UsersFlow - Sorting', () => {
  it('should sort users by name in ascending order by default', async () => {
    render(<UsersFlow />);

    await waitFor(() => {
      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    // Get all table rows (excluding header)
    const rows = screen.getAllByRole('row').slice(1); // Skip header row

    // Check order: Alice, Bob, Charlie (alphabetical)
    expect(within(rows[0]).getByText('Alice Johnson')).toBeInTheDocument();
    expect(within(rows[1]).getByText('Bob Smith')).toBeInTheDocument();
    expect(within(rows[2]).getByText('Charlie Brown')).toBeInTheDocument();
  });

  it('should sort users by name in descending order when clicked twice', async () => {
    const user = userEvent.setup();
    render(<UsersFlow />);

    await waitFor(() => {
      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    // Click Name header once (already asc by default, so this will toggle to desc)
    const nameHeader = screen.getByRole('button', { name: /name/i });
    await user.click(nameHeader);

    await waitFor(() => {
      const rows = screen.getAllByRole('row').slice(1);
      // Should be reversed: Charlie, Bob, Alice
      expect(within(rows[0]).getByText('Charlie Brown')).toBeInTheDocument();
      expect(within(rows[1]).getByText('Bob Smith')).toBeInTheDocument();
      expect(within(rows[2]).getByText('Alice Johnson')).toBeInTheDocument();
    });
  });

  it('should sort users by email when email header is clicked', async () => {
    const user = userEvent.setup();
    render(<UsersFlow />);

    await waitFor(() => {
      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    // Click Email header
    const emailHeader = screen.getByRole('button', { name: /email/i });
    await user.click(emailHeader);

    await waitFor(() => {
      const rows = screen.getAllByRole('row').slice(1);
      // Emails in order: alice@, bob@, charlie@
      expect(within(rows[0]).getByText('alice@example.com')).toBeInTheDocument();
      expect(within(rows[1]).getByText('bob@example.com')).toBeInTheDocument();
      expect(within(rows[2]).getByText('charlie@example.com')).toBeInTheDocument();
    });
  });

  it('should sort users by role', async () => {
    const user = userEvent.setup();
    render(<UsersFlow />);

    await waitFor(() => {
      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    // Click Role header
    const roleHeader = screen.getByRole('button', { name: /^role$/i });
    await user.click(roleHeader);

    await waitFor(() => {
      const rows = screen.getAllByRole('row').slice(1);
      // Roles in order: admin, manager, viewer
      expect(within(rows[0]).getByText('admin')).toBeInTheDocument();
      expect(within(rows[1]).getByText('manager')).toBeInTheDocument();
      expect(within(rows[2]).getByText('viewer')).toBeInTheDocument();
    });
  });

  it('should sort users by status (active/inactive)', async () => {
    const user = userEvent.setup();
    render(<UsersFlow />);

    await waitFor(() => {
      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    // Click Status header
    const statusHeader = screen.getByRole('button', { name: /status/i });
    await user.click(statusHeader);

    await waitFor(() => {
      const rows = screen.getAllByRole('row').slice(1);
      // Inactive first (false < true), then active
      expect(within(rows[0]).getByText('Inactive')).toBeInTheDocument();
      expect(within(rows[1]).getByText('Active')).toBeInTheDocument();
      expect(within(rows[2]).getByText('Active')).toBeInTheDocument();
    });
  });

  it('should maintain sort when filtering', async () => {
    const user = userEvent.setup();
    render(<UsersFlow />);

    await waitFor(() => {
      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    // Sort by name descending
    const nameHeader = screen.getByRole('button', { name: /name/i });
    await user.click(nameHeader);

    // Filter to show only Bob and Charlie
    const searchInput = screen.getByPlaceholderText(/search/i);
    await user.type(searchInput, 'b');

    await waitFor(() => {
      const rows = screen.getAllByRole('row').slice(1);
      // Should maintain descending sort: Charlie first, then Bob
      expect(within(rows[0]).getByText('Charlie Brown')).toBeInTheDocument();
      expect(within(rows[1]).getByText('Bob Smith')).toBeInTheDocument();
    });
  });
});
