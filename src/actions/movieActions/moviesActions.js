import MovieService from 'src/services/MovieService';

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const REMOVE_MOVIES = 'REMOVE_MOVIES';

export const getNowPlaying = (imageURL) => (dispatch) => {
    return new Promise((resolve, reject) => {
        MovieService.getNowPlaying()
            .then((response) => {
                if(response.data && response.data.results) {
                    let data = response.data;
                    let movies = data.results.map((movieResponse) => {
                        let posterPath = null;

                        if(imageURL && movieResponse.poster_path){
                            posterPath = imageURL + movieResponse.poster_path;
                        }
                        
                        return {
                            id: movieResponse.id,
                            name: movieResponse.title,
                            average: movieResponse.vote_average,
                            poster: posterPath,
                            releaseDate: movieResponse.release_date
                        };
                    });

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