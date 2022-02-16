import { combineReducers } from 'redux'
import * as types from './types'

const initialUserState = {
  loading: false,
  error: '',
  list: []
}

// TIMER REDUCER
const userReducer = (state = initialUserState, { type, payload }) => {
  switch (type) {
    case types.LOAD_USERS_STARTED:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case types.LOAD_USERS_SUCCESS:
      return {
        list: payload,
        loading: false,
        error: ''
      }
    case types.LOAD_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case types.CREATE_USER_STARTED:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case types.CREATE_USER_SUCCESS:
      return {
        list: [...state.list, payload],
        loading: false,
        error: ''
      }
    case types.CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case types.DELETE_USER_STARTED:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case types.DELETE_USER_SUCCESS:
      return {
        list: state.list.filter(u => u.id !== payload),
        loading: false,
        error: ''
      }
    case types.UPDATE_USER_STARTED:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case types.UPDATE_USER_SUCCESS:
      return {
        list: state.list.map(u => {
          if (u.id !== payload.id) {
            return u;
          }

          return {
            ...u,
            ...payload
          }
        }),
        loading: false,
        error: ''
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  users: userReducer
}

export default combineReducers(reducers)
