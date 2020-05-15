// api.test.js
import axiosMock from 'axios'
import { fetchUsers } from './api'

jest.mock('axios')

test('mock data returns from api', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ],
  })

  expect(await fetchUsers()).toEqual([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ])
})

// describe('super hero', () => {
//   test('can fly', () => { ... })
//   test('bulletproof', () => { ... })
// })

// afterAll(fn, timeout)
// afterEach(fn, timeout)
// beforeAll(fn, timeout)
// beforeEach(fn, timeout)
