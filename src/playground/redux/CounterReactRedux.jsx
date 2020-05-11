import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

function reducer(state = 0, action) {
  if (action.type === 'INCREMENT') return state + 1
  else if (action.type === 'DECREMENT') return state - 1
  else if (action.type === 'RESET') return 0
  else return state
}

const store = createStore(reducer)

function Counter(props) {
  return (
    <div>
      Counter: {props.count}
      <div>
        <button onClick={() => props.dispatch({ type: 'INCREMENT' })}>
          +1
        </button>
        <button onClick={() => props.dispatch({ type: 'DECREMENT' })}>
          -1
        </button>
        <button onClick={() => props.dispatch({ type: 'RESET' })}>reset</button>
      </div>
    </div>
  )
}
Counter = connect((state) => ({ count: state }))(Counter)

const App = () => {
  return (
    <>
      <h1>My Counter</h1>
      <Counter />
    </>
  )
}

function Root(store) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default () => Root(store)
