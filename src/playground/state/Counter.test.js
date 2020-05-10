import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Counter from './Counter'

test('given count is 3, when pass count as props, then it should renders 3', () => {
  const { getByText } = render(<Counter count={3} />)
  expect(getByText('Count: 3')).toBeInTheDocument()
})

test('when props is not passed, then it should renders default count should be 0', () => {
  const { getByText } = render(<Counter />)
  expect(getByText('Count: 0')).toBeInTheDocument()
})

test('when clicks increase button, then it should increased', () => {
  const { getByText } = render(<Counter />)

  const increase = getByText('+1')
  fireEvent.click(increase)
  fireEvent.click(increase)

  expect(getByText('Count: 2')).toBeInTheDocument()
})

test('when clicks decrease button, then it should decreased', () => {
  const { getByText } = render(<Counter />)

  const decrease = getByText('-1')
  fireEvent.click(decrease)
  fireEvent.click(decrease)

  expect(getByText('Count: -2')).toBeInTheDocument()
})

test('when clicks reset, then it should reset', () => {
  const { getByText } = render(<Counter count={3} />)

  const reset = getByText('reset')
  fireEvent.click(reset)

  expect(getByText('Count: 0')).toBeInTheDocument()
})
