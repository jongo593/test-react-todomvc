import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    UNCOMPELTE_TODO
} from '../types/app.types';

export function addTodo(message) {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: {
                message,
                id: Math.random(),
                complete: false
            }
        })
    }
}

export function deleteTodo(index) {
    return (dispatch) => {
        dispatch({
            type: DELETE_TODO,
            payload: index
        });
    }
}

export function completeTodo(index) {
    return (dispatch) => {
        dispatch({
            type: COMPLETE_TODO,
            payload: index
        });
    }
}

export function unCompleteTodo(index) {
    return (dispatch) => {
        dispatch({
            type: UNCOMPELTE_TODO,
            payload: index
        });
    }
}



