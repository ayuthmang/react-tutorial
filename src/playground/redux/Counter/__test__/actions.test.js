import { increment, decrement, reset } from '../actions'

test('when call increment, should returns increment action object', () => {
  expect(increment()).toEqual({
    type: 'INCREMENT',
  })
})

test('when call decrement, should returns decrement action object', () => {
  expect(decrement()).toEqual({
    type: 'DECREMENT',
  })
})

test('when call reset, should returns reset action object', () => {
  expect(reset()).toEqual({
    type: 'RESET',
  })
})
