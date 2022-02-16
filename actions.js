import * as types from './types'
import axios from "axios";

// INITIALIZES CLOCK ON CLIENT
export const loadUsers = () => (dispatch) => {
    dispatch({ type: types.LOAD_USERS_STARTED });

    axios
        .get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
        .then(res => {
            console.log({res});
            dispatch({ type: types.LOAD_USERS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log({err});
            dispatch({ type: types.LOAD_USERS_FAILURE, payload: err.message })
        })
}

export const createUser = (newUser) => (dispatch) => {
    dispatch({ type: types.CREATE_USER_STARTED });

    // simulate api call
    setTimeout(() => {
        dispatch({ type: types.CREATE_USER_SUCCESS, payload: newUser })
    }, 1000);
}

export const updateUser = (user) => (dispatch) => {
    dispatch({ type: types.UPDATE_USER_STARTED });

    // simulate api call
    setTimeout(() => {
        dispatch({ type: types.UPDATE_USER_SUCCESS, payload: user })
    }, 1000);
}

export const deleteUser = (id) => (dispatch) => {
    dispatch({ type: types.DELETE_USER_STARTED })
    // simulate api call
    setTimeout(() => {
        dispatch({ type: types.DELETE_USER_SUCCESS, payload: id })
    }, 1000);
}
