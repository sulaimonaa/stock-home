import React from 'react'; // eslint-disable-line no-undef, no-unused-vars
import { render } from '@testing-library/react';
import About from '../components/About';
import { BrowserRouter } from 'react-router-dom';

/* eslint-disable no-undef, no-unused-vars */
test('renders About component correctly', () => {
  const { asFragment } = render(<BrowserRouter><About /></BrowserRouter>);
  expect(asFragment()).toMatchSnapshot();
});
