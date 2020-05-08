import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import SwitchButton from './SwitchButtonClass'

test('given switch button is turned-off, when clicks, then it should turned-on', () => {
  const { getByText } = render(<SwitchButton />)

  const btn = getByText('TURN ON')
  fireEvent.click(btn)

  expect(btn).toHaveTextContent('TURN OFF')
})

test('given switch button is turned-on, when clicks, then it should turned-off', () => {
  const { getByText } = render(<SwitchButton isOn={true} />)

  const btn = getByText('TURN OFF')
  fireEvent.click(btn)

  expect(btn).toHaveTextContent('TURN ON')
})

// test('when pass isOn equals true, then it should turned-off', () => {
//   const { getByText } = render(<SwitchButton isOn />)

//   const btn = getByText('TURN ON')
//   fireEvent.click(btn)

//   expect(btn).toHaveTextContent('TURN OFF')
// })
