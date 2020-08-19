import React, { createContext, useReducer } from 'react';

const initialState = {
    letters: {
        letter: null,
        isFetching: true,
        error: false,
        words: null,
    },
    search: {
        text: null,
        isFetching: true,
        error: false,
        words: null,
    }
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'STORE_LETTER':
                return {
                    ...state,
                    letters: action.payload
                };
            case 'STORE_SEARCH':
                return {
                    ...state,
                    search: action.payload
                };
            default:
                throw new Error();
        };
    }, initialState);

    const lettersState = state.letters;
    const searchState = state.search;
    return <Provider value={{ lettersState, searchState, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
