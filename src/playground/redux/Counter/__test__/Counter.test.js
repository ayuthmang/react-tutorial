import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from './test-utils'
import { App as Counter } from '../Counter'

test('when clicks increase button, then it should increased', () => {
  const { getByText } = render(<Counter />, {
    initialState: { counter: { count: 0 } },
  })
  const increase = getByText('+1')
  fireEvent.click(increase)
  fireEvent.click(increase)

  expect(getByText('Count: 2')).toBeInTheDocument()
})

test('when clicks decrease button, then it should decreased', () => {
  const { getByText } = render(<Counter />, {
    initialState: { counter: { count: 0 } },
  })

  const decrease = getByText('-1')
  fireEvent.click(decrease)
  fireEvent.click(decrease)

  expect(getByText('Count: -2')).toBeInTheDocument()
})

test('when clicks reset, then it should reset', () => {
  const { getByText } = render(<Counter />, {
    initialState: { counter: { count: 999 } },
  })

  const reset = getByText('reset')
  fireEvent.click(reset)

  expect(getByText('Count: 0')).toBeInTheDocument()
})
