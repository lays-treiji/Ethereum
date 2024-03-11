import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReadBalance from './ReadBalance';
import { act } from 'react-dom/test-utils';

jest.mock('web3');

describe('ReadBalance', () => {
  it('renders the balance correctly', async () => {
    render(<ReadBalance />);

    await waitFor(() => {
      expect(screen.getByText(/balance is/i)).toBeInTheDocument();
      expect(screen.getByText(/0 usdt/i)).toBeInTheDocument();
    });
  });

  it('calls fetchBalance on mount', async () => {
    const fetchBalanceSpy = jest.spyOn(ReadBalance.prototype, 'fetchBalance' as any);

    render(<ReadBalance />);

    expect(fetchBalanceSpy).toHaveBeenCalled();
  });

  it('updates the balance state correctly', async () => {
    const { rerender } = render(<ReadBalance />);

    await act(async () => {
      await waitFor(() => {
        expect(screen.getByText(/balance is/i)).toBeInTheDocument();
        expect(screen.getByText(/0 usdt/i)).toBeInTheDocument();
      });
    });

    rerender(<ReadBalance />);

    await act(async () => {
      await waitFor(() => {
        expect(screen.getByText(/balance is/i)).toBeInTheDocument();
        expect(screen.getByText(/1 usdt/i)).toBeInTheDocument();
      });
    });
  });
});

export {};