import * as actionTypes from 'src/actions';

const defaultState = {
    movies: [],
};

const moviesReducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_MOVIES: {
            let payload = action.payload;
            
            return {
                ...state,
                movies: payload
            };
        }

        case actionTypes.REMOVE_MOVIES: {
            let payload = defaultState;
            return {
                ...state,
                movies: payload.movies
            };
        }

        default: {
            return state;
        }
    }
};

export default moviesReducer;