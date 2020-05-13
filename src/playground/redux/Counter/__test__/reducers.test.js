import { counter } from '../reducers'

test('give count is 0, when dispatch INCREMENT, then it should be 1', () => {
  const initialState = { count: 0 }
  expect(counter(initialState, { type: 'INCREMENT' })).toEqual({
    count: 1,
  })
})

test('give count is 0, when dispatch DECREMENT, then it should be -1', () => {
  const initialState = { count: 0 }
  expect(counter(initialState, { type: 'DECREMENT' })).toEqual({
    count: -1,
  })
})

test('give count is 999, when dispatch RESET, then it should be 0', () => {
  const initialState = { count: 999 }
  expect(counter(initialState, { type: 'RESET' })).toEqual({
    count: 0,
  })
})
