import React from 'react'; // eslint-disable-line no-undef, no-unused-vars
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Stocks from '../components/Stocks';
import { FetchStockLists } from '../redux/stockSlice';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

/* eslint-disable no-undef, no-unused-vars */
jest.mock('../redux/stockSlice', () => ({
  FetchStockLists: jest.fn(),
}));
/* eslint-disable no-undef, no-unused-vars */
describe('Stocks', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('fetches stock lists and displays them', async () => {
    const stockList = [
      { symbol: 'AAPL', name: 'Apple Inc.', price: 150.00, exchange: 'NASDAQ' },
      // Add more mock stock data as needed
    ];

    // Mock the FetchStockLists action creator
    FetchStockLists.mockReturnValue(() => ({ type: 'stockSlice/FetchStockLists' }));

    const store = mockStore({
      stocks: { value: stockList },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Stocks />
        </BrowserRouter>
      </Provider>
    );

    // Wait for component effects to run (e.g., fetch)
    await waitFor(() => {
      expect(FetchStockLists).toHaveBeenCalled();
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
