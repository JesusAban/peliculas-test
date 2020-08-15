import * as actionTypes from 'src/actions';

const defaultState = {
    imageURL: null,
    size: null
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
                size: payload.size
            };
        }

        case actionTypes.CLEAN_CONFIGURATIONS: {
            let payload = defaultState;
            
            localStorage.removeItem("movieConfiguration");

            return {
                ...state,
                imageURL: payload.imageURL,
                size: payload.size
            };
        }

        default: {
            return state;
        }
    }
};

export default movieConfigurationReducer;