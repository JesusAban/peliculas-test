import { combineReducers } from 'redux';
import moviesReducer from './movieReducer/moviesReducer';

const rootReducer = () => combineReducers({
    movies: moviesReducer
});

export default rootReducer;