// // Pure functions
// function square(x) {
//   return x * x
// }

// function squareAll(items) {
//   return items.map(square)
// }

// // Impure functions
// function square(x) {
//   updateXInDatabase(x)
//   return x * x
// }

// function squareAll(items) {
//   for (let i = 0; i < items.length; i++) {
//     items[i] = square(items[i])
//   }
// }

// function sumAll(items) {
//   return items.reduce((acc, cur) => acc + cur, 0)
// }

// function squareAll(items) {
//   return items.map((n) => n * n)
// }

import deepFreeze from 'deep-freeze'

function counter(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else if (action.type === 'RESET') {
    return 0
  } else {
    return state
  }
}

test('counter reducer', () => {
  expect(counter(0, { type: 'INCREMENT' })).toBe(1)
  expect(counter(1, { type: 'INCREMENT' })).toBe(2)
  expect(counter(1, { type: 'DECREMENT' })).toBe(0)
  expect(counter(0, { type: 'SOMETHING_ELSE' })).toBe(0)
  expect(counter(99, { type: 'RESET' })).toBe(0)
})

let todoId = 1
function todos(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: todoId++,
          text: action.text,
          completed: action.completed,
        },
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    default:
      return state
  }
}

test('todos reducer', () => {
  const todoBefore = []
  const todoAfter = [{ id: 1, text: 'Learn Redux', completed: false }]

  expect(
    todos(todoBefore, {
      type: 'ADD_TODO',
      text: 'Learn Redux',
      completed: false,
    })
  ).toEqual(todoAfter)

  expect(
    todos(todoAfter, {
      type: 'ADD_TODO',
      text: 'Learn React-Redux',
      completed: false,
    })
  ).toEqual([
    ...todoAfter,
    { id: 2, text: 'Learn React-Redux', completed: false },
  ])

  todos(todoAfter, {
    type: 'TOGGLE_TODO',
    text: 'Learn React-Redux',
    completed: false,
  })
})

test('toggle todo', () => {
  const todoBefore = [
    {
      id: 1,
      text: 'Learn React',
      completed: false,
    },
  ]
  const todoAfter = [
    {
      id: 1,
      text: 'Learn React',
      completed: true,
    },
  ]

  expect(todos(todoBefore, { type: 'TOGGLE_TODO', id: 1 })).toEqual(todoAfter)
})
