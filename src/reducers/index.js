import { combineReducers } from 'redux';
import moviesReducer from './movieReducer/moviesReducer';
import movieReducer from './movieReducer/movieReducer';
import movieConfigurationReducer from './movieConfigurationReducer/movieConfigurationReducer';

const rootReducer = () => combineReducers({
    movies: moviesReducer,
    movie: movieReducer,
    movieConfiguration: movieConfigurationReducer 
});

export default rootReducer;