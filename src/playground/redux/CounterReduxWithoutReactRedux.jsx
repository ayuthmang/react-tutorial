import React, { Component } from 'react'
import { createStore } from 'redux'

// https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/

function reducer(state = 0, action) {
  if (action.type === 'INCREMENT') return state + 1
  else if (action.type === 'DECREMENT') return state - 1
  else if (action.type === 'RESET') return 0
  else return state
}

const store = createStore(reducer)

export class CounterRedux extends Component {
  state = this.getCurrentStateFromStore()

  getCurrentStateFromStore() {
    return { count: store.getState() }
  }

  updateStateFromStore() {
    const currentState = this.getCurrentStateFromStore()

    if (this.state !== currentState)
      this.setState(this.getCurrentStateFromStore())
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.updateStateFromStore.bind(this))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.count}</p>
        <div>
          <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
            +1
          </button>
          <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>
            -1
          </button>
          <button onClick={() => store.dispatch({ type: 'RESET' })}>
            reset
          </button>
        </div>
      </div>
    )
  }
}

export default CounterRedux
