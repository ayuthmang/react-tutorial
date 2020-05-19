import React from 'react'
import { render } from '@testing-library/react'

const todos = [
  { id: 1, text: 'Learn Vue', completed: false },
  { id: 2, text: "Don't learn React", completed: true },
]

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment key={'some uniqe key'}>
        <div></div>
        { ... }
      </React.Fragment>
    )
  }
}
