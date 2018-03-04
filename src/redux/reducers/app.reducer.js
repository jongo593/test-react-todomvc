import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    UNCOMPELTE_TODO
} from '../types/app.types';

export const LOCAL_STORAGE_KEY = 'todo_store';

export function parseLocalStorageItem(item) {
    if(!item) {
        return undefined;
    }
    try {
        return JSON.parse(item);
    } catch (e) {
        // Whatever was stored at our local storage key is not a JSON string
        // Ignore it
        return undefined;
    }
}

export function validateStore(store = {}) {
    if(Array.isArray(store.todos)) {
        return {
            todos: store.todos
        }
    }
}

export function initializeStateFromLocalStorage() {
    const lsStore = validateStore(parseLocalStorageItem(localStorage.getItem(LOCAL_STORAGE_KEY)));
    if(lsStore) {
        return lsStore;
    }
    return defaultState;
}

const defaultState = {
    todos: []
};

const initialState = initializeStateFromLocalStorage();

export default function (state = initialState, action) {

    let updatedState = {...state};

    switch(action.type) {

        case ADD_TODO:
            updatedState = {...state, todos: [...state.todos, action.payload]};
            break;

        case DELETE_TODO:
            let deleteArray = [...state.todos];
            deleteArray.splice(action.payload, 1);

            updatedState = {...state, todos: [...deleteArray]};
            break;

        case COMPLETE_TODO:
            let compelteArray = [...state.todos];
            compelteArray[action.payload].complete = true;
            updatedState = {...state, todos: [...compelteArray]};
            break;

        case UNCOMPELTE_TODO:
            let uncompelteArray = [...state.todos];
            uncompelteArray[action.payload].complete = false;
            updatedState = {...state, todos: [...uncompelteArray]};
            break;

        default:
            updatedState = {...state};
    }

    // Update our local storage to persist through page loads
    // Since we don't have an actual API
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedState));

    return updatedState;

}
