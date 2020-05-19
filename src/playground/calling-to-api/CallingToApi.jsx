import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// import axios from 'axios'

const responses = {
  todos: {
    status: {
      code: 0,
      message: 'success',
    },
    data: [
      {
        id: 1,
        text: 'Learn JavaScript',
        completed: false,
      },
      {
        id: 2,
        text: 'Learn Express',
        completed: false,
      },
    ],
  },
  users: {
    status: {
      code: 0,
      message: 'success',
    },
    data: [
      {
        id: 1,
        name: 'John',
      },
      {
        id: 2,
        name: 'Jane',
      },
    ],
  },
}

// simulate a api calls
function delay(ms, res) {
  return new Promise((resolve) => setTimeout(() => resolve(res), ms))
}

async function fetchTodos() {
  // const res = await axios.get('https://6dhuh.sse.codesandbox.io/todos')
  // const todos = res.data
  // return todos.data

  // a fake api calls
  return await delay(1000, responses.todos.data)
}

async function fetchUsers() {
  // const res = await axios.get('https://6dhuh.sse.codesandbox.io/users')
  // const users = res.data
  // return users.data

  // a fake api calls
  return await delay(1000, responses.users.data)
}

export class TodoApp extends Component {
  state = {
    todos: [],
    users: [],
  }

  async componentDidMount() {
    // const todos = await fetchTodos()
    // const users = await fetchUsers()
    const [todos, users] = await Promise.all([fetchTodos(), fetchUsers()])

    this.setState({
      todos,
      users,
    })
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {this.state.todos &&
            this.state.todos.map((todo) => {
              return <li key={todo.id}>{todo.text}</li>
            })}
        </ul>

        <h1>Users</h1>
        <ul>
          {this.state.users &&
            this.state.users.map((user) => {
              return <li key={user.id}>{user.name}</li>
            })}
        </ul>
      </div>
    )
  }
}

export default TodoApp
