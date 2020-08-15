import MovieService from 'src/services/MovieService';

export const LOAD_MOVIE = 'LOAD_MOVIE';
export const CLEAN_MOVIE = 'CLEAN_MOVIE';

export const getMovieDetails = (id, imageURL) => (dispatch) => {
    return new Promise((resolve, reject) => {
        MovieService.getMovieDetails(id)
            .then((response) => {
                if(response.data) {
                    let data = response.data;

                    let posterPath = null;
                    
                    if(imageURL && data.poster_path){
                        posterPath = imageURL + data.poster_path;
                    }

                    let movie = {
                        id: data.id,
                        poster: posterPath,
                        title: data.title,
                        genres: data.genres,
                        description: data.overview,
                        runtime: data.runtime,
                        releaseDate: data.release_date,
                        average: data.vote_average
                    };
                    dispatch(cleanMovie());
                    dispatch({ type: LOAD_MOVIE, payload: movie });
                    resolve(true);
                } else {
                    reject();
                }
            })
            .catch((error) => {
                reject();
            });
    });
};

export const cleanMovie = () => (dispatch) => {
    dispatch({ type: CLEAN_MOVIE });
};