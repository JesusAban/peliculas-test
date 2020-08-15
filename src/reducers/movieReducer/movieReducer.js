import * as actionTypes from 'src/actions';

const defaultState = {
    id: null,
    poster: null,
    title: null,
    genres: [],
    description: null,
    runtime: null,
    releaseDate: null,
    average: null
};

const movieReducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_MOVIE: {
            let payload = action.payload;
            
            return {
                ...state,
                id: payload.id,
                poster: payload.poster,
                title: payload.title,
                genres: payload.genres,
                description: payload.description,
                runtime: payload.runtime,
                releaseDate: payload.releaseDate,
                average: payload.average
            };
        }

        case actionTypes.CLEAN_MOVIE: {
            let payload = defaultState;
            return {
                ...state,
                id: payload.id,
                poster: payload.poster,
                title: payload.title,
                genres: payload.genres,
                description: payload.description,
                runtime: payload.runtime,
                releaseDate: payload.releaseDate,
                average: payload.average
            };
        }

        default: {
            return state;
        }
    }
};

export default movieReducer;