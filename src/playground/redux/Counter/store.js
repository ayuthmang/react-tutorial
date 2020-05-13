import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // ...options
})

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
