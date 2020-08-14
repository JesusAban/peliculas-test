import MovieService from 'src/services/MovieService';

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const REMOVE_MOVIES = 'REMOVE_MOVIES';

export const getNowPlaying = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        MovieService.getNowPlaying()
            .then((response) => {
                if(response.data && response.data.result) {
                    let movies = response.data.result;
                    dispatch(removeMovies());
                    dispatch({ type: LOAD_MOVIES, payload: movies });
                }
                resolve();
            })
            .catch((error) => {
                reject();
            });
    });
};

export const removeMovies = () => (dispatch) => {
    dispatch({ type: REMOVE_MOVIES });
};