import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';
import { BrowserRouter } from 'react-router-dom';

test('renders About component correctly', () => {
  const { asFragment } = render(<BrowserRouter><About /></BrowserRouter>);
  expect(asFragment()).toMatchSnapshot();
});
