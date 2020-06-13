import React from 'react'
import { Provider, connect } from 'react-redux'
import store from './store'

import { increment, decrement, reset } from './actions'

let App = ({ count, increment, decrement, reset }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={() => reset()}>reset</button>
      </div>
    </div>
  )
}

const mapStateToCounterProps = (state) => ({ count: state.counter.count })
const mapDispatchToCounterProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
})
App = connect(mapStateToCounterProps, mapDispatchToCounterProps)(App)

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export { App }
export default Root
