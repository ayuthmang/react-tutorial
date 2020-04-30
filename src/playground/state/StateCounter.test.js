import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Counter from './StateCounter';

test('when clicks increase button, then it should increased', () => {
  const { getByText } = render(<Counter />);

  const increase = getByText('+1');
  fireEvent.click(increase);
  fireEvent.click(increase);

  expect(getByText('Count: 2')).toBeInTheDocument();
});

test('when clicks decrease button, then it should decreased', () => {
  const { getByText } = render(<Counter />);

  const decrease = getByText('+1');
  fireEvent.click(decrease);
  fireEvent.click(decrease);

  expect(getByText('Count: 2')).toBeInTheDocument();
});
