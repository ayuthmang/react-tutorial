import React from 'react'
import { fireEvent, render, waitForDomChange } from '@testing-library/react'

import RaoMaiTingGun from './RaoMaiTingGun'

test('renders form', () => {
  const { getByTestId } = render(<RaoMaiTingGun />)

  const nameElm = getByTestId('name')
  const jobElm = getByTestId('job')
  const submit = getByTestId('submit')

  fireEvent.change(nameElm, { target: { value: 'John' } })
  fireEvent.change(jobElm, { target: { value: 'programmer' } })
  fireEvent.click(submit)

  expect(getByTestId('nameResult').textContent).toBe('Name: John')
  expect(getByTestId('jobResult').textContent).toBe('Job: programmer')
  expect(getByTestId('eligibleResult').textContent).toBe(
    'Eligible for 5,000 baht?: NO'
  )
})
