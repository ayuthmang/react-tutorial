import React from 'react'
import { render } from '@testing-library/react'

import { Hello } from './FragmentExample'

test('should redners components', () => {
  const { getByText } = render(<Hello name={'John'} />)
  expect(getByText(/John/)).toBeInTheDocument()
})
