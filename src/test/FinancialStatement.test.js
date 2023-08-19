import React from 'react'; // eslint-disable-line no-undef, no-unused-vars
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import FinancialStatement from '../components/FinancialStatement';
import { FetchFinancialStatements } from '../redux/financialStatementSlice';
import { BrowserRouter } from 'react-router-dom';

const mockFinancialList = [
  "AAP", "AAPL", "CAC", "EEC", "ACA", "ACP"
];
/* eslint-disable no-undef, no-unused-vars */
describe('FinancialStatement', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  
  it('fetches financial statements and displays them', async () => {
    const store = mockStore({
      financialstatements: { value: mockFinancialList },
    });

    // Dispatch the async action using store.dispatch
    await store.dispatch(FetchFinancialStatements());

    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FinancialStatement />
        </BrowserRouter>
      </Provider>
    );

    // Wait for API call and component updates
    await screen.findAllByTestId('financial-statement-list');

    // Assert and update snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  it('filters financial statements based on search term', async () => {
    const store = mockStore({
      financialstatements: { value: mockFinancialList },
    });

    // Dispatch the async action using store.dispatch
    await store.dispatch(FetchFinancialStatements());

    render(
      <Provider store={store}>
        <BrowserRouter>
          <FinancialStatement />
        </BrowserRouter>
      </Provider>
    );

    // Wait for API call and component updates
    await screen.findAllByTestId('financial-statement-list');

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText('Search Company by symbol'), {
      target: { value: 'AAPL' },
    });

    await screen.findByTestId('financial-statement-list');

    const displayedFinancialStatements = screen.getAllByTestId('financial-statement-list');
    expect(displayedFinancialStatements).toHaveLength(1);

    expect(displayedFinancialStatements[0]).toMatchSnapshot();
  });

});
