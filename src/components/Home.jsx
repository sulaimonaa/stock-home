import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'; // Import combineReducers
import thunk from 'redux-thunk';
import financialStatementReducer from '../redux/financialStatementSlice'; // Import your reducer
import Home from '../components/Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home component', () => {
  it('should render correctly', () => {
    // Combine reducers if you have more than one reducer
    const rootReducer = combineReducers({
      financialstatements: financialStatementReducer,
      // Other reducers...
    });

    // Create a mock store with middleware using applyMiddleware
    const store = createStore(rootReducer, applyMiddleware(thunk));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    // Take a snapshot of the rendered component
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});