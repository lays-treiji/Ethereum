import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LastNumber from './LastNumber';
import { act } from 'react-dom/test-utils';
import { getLastBlockNumber } from './EthereumData';

jest.mock('./EthereumData');

describe('LastNumber', () => {
  it('renders the last block number correctly', async () => {
    (getLastBlockNumber as jest.Mock).mockResolvedValue(10);

    render(<LastNumber />);

    await waitFor(() => {
      expect(screen.getByText(/last block number of ethereum mainnet is:/i)).toBeInTheDocument();
      expect(screen.getByText(/the last block number 10/i)).toBeInTheDocument();
    });
  });

  it('calls fetchData on mount', async () => {
    const fetchDataSpy = jest.spyOn(LastNumber.prototype, 'fetchData' as any);

    render(<LastNumber />);

    expect(fetchDataSpy).toHaveBeenCalled();
  });

  it('updates the block number state correctly', async () => {
    const { rerender } = render(<LastNumber />);

    await act(async () => {
      await waitFor(() => {
        expect(screen.getByText(/last block number of ethereum mainnet is:/i)).toBeInTheDocument();
        expect(screen.getByText(/the last block number 0/i)).toBeInTheDocument();
      });
    });

    (getLastBlockNumber as jest.Mock).mockResolvedValue(10);

    rerender(<LastNumber />);

    await act(async () => {
      await waitFor(() => {
        expect(screen.getByText(/last block number of ethereum mainnet is:/i)).toBeInTheDocument();
        expect(screen.getByText(/the last block number 10/i)).toBeInTheDocument();
      });
    });
  });
});

export {};