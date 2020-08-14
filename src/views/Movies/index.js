import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getNowPlaying } from 'src/actions';

function Movies(){

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.moviesSelector);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = () => {
        dispatch(getNowPlaying());
    };

    return (
        <div>
            <h1>Movies</h1>
            
        </div>
    );
}

export default Movies;