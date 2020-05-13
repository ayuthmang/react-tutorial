import { combineReducers } from 'redux'

import { INCREMENT, DECREMENT, RESET } from './actions'

export const initialState = {
  count: 0,
}

export function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        count: state.count - 1,
      }
    case RESET:
      return {
        count: 0,
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({ counter })
