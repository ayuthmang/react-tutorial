import React from 'react'
import PropTypes from 'prop-types'

const todos = [
  { id: 1, text: 'Learn Vue', completed: false },
  { id: 2, text: "Don't learn React", completed: true },
]

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <li key={todos.id}>{todo.text}</li>
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
}

export default TodoList
