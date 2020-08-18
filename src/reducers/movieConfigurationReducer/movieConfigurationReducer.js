import * as actionTypes from 'src/actions';

const defaultState = {
    imageURL: null,
    posterSize: null,
    backdropSize: null
};

const getDefaultState = () => {
    let state = defaultState;
    let storage = localStorage.getItem("movieConfiguration");

    if(storage){
        state = JSON.parse(storage);
    }

    return state;
};

const movieConfigurationReducer = (state = getDefaultState(), action) => {
    switch(action.type) {
        case actionTypes.LOAD_CONFIGURATIONS: {
            let payload = action.payload;
            
            localStorage.setItem("movieConfiguration", JSON.stringify(payload));

            return {
                ...state,
                imageURL: payload.imageURL,
                posterSize: payload.posterSize,
                backdropSize: payload.backdropSize
            };
        }

        case actionTypes.CLEAN_CONFIGURATIONS: {
            let payload = defaultState;
            
            localStorage.removeItem("movieConfiguration");

            return {
                ...state,
                imageURL: payload.imageURL,
                posterSize: payload.posterSize,
                backdropSize: payload.backdropSize
            };
        }

        default: {
            return state;
        }
    }
};

export default movieConfigurationReducer;