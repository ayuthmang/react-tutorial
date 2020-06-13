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
        if (todo.id !== action.id) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    // return state.map((todo) => {
    //   if (todo.id !== action.id) {
    //     return todo
    //   }

    //   return {
    //     ...todo,
    //     completed: !todo.completed,
    //   }
    // })
    default:
      return state
  }
}

test('todos reducer', () => {
  const todoBefore = []
  const todoAfter = [{ id: 1, text: 'Learn Redux', completed: false }]
  deepFreeze(todoBefore)

  expect(
    todos(todoBefore, {
      type: 'ADD_TODO',
      text: 'Learn Redux',
      completed: false,
    })
  ).toEqual(todoAfter)
})

const toggleTodo = (todo) => {
  // todo.completed = !todo.completed
  // return todo

  // return {
  //   id: todo.id,
  //   text: todo.text,
  //   completed: !todo.completed,
  // }
  return {
    ...todo,
    completed: !todo.completed,
  }
}

test('toggle todo', () => {
  const todoBefore = {
    id: 1,
    text: 'Learn React',
    completed: false,
  }
  const todoAfter = {
    id: 1,
    text: 'Learn React',
    completed: true,
  }

  deepFreeze(todoBefore)

  expect(toggleTodo(todoBefore, { type: 'TOGGLE_TODO', id: 1 })).toEqual(
    todoAfter
  )
})

test('toggle todo reducer', () => {
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

  deepFreeze(todoBefore)

  expect(todos(todoBefore, { type: 'TOGGLE_TODO', id: 1 })).toEqual(todoAfter)
})
