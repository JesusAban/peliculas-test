import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//Routes
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import CardHeader from 'src/components/Card/CardHeader';
import CardFooter from 'src/components/Card/CardFooter';
import { getMovieDetails } from 'src/actions/movieActions/movieActions';
import { Back } from 'src/components/Buttons';
import Card from 'src/components/Card';
import CardBody from 'src/components/Card/CardBody';
import H1 from 'src/components/Typography/H1';
import H3 from 'src/components/Typography/H3';
import Label from 'src/components/Typography/Label';

import './MovieDetails.css';

function MovieDetails({ match }){

    const { id } = match.params;

    const history = useHistory();
    const dispatch = useDispatch();

    const movie = useSelector((state) => state.movie);
    const movieConfigurationSelector = useSelector((state) => state.movieConfiguration);

    useEffect(() => {
        if(id !== null){
            let movieId = parseInt(id);
            let baseURL = `${movieConfigurationSelector.imageURL}/w1280`;//${movieConfigurationSelector.size}
            if(movie !== null && movie.id !== null){
                if(movieId !== movie.id){
                    dispatch(getMovieDetails(movieId, baseURL));    
                }
            } else {
                dispatch(getMovieDetails(movieId, baseURL));
            }
        }
    }, []);

    const onBack = () => {
        history.goBack();
    };

    const getGenres = (genres) => {
        let genresText = genres.map((genre) => (genre.name));

        return genresText.toString();
    };

    return (
        <div className="Movie-Detail-Container">
            <Card>
                <CardHeader>
                    <img src={ movie.poster } alt={ `Movie-${ movie.id }` } className="Movie-Detail-Poster"/>
                </CardHeader>
                <CardBody>
                    <div className="Movie-Detail-Title">
                        <H1 text={ movie.title } />
                    </div>
                    <H3 text="Duración"/>
                    <Label text={ movie.runtime }/>
                    <H3 text="Fecha de estreno"/>
                    <Label text={ movie.releaseDate }/>
                    <H3 text="Calificación"/>
                    <Label text={ movie.average }/>
                    <H3 text="Generos"/>
                    <Label text={ getGenres(movie.genres) }/>
                    <H3 text="Descripción"/>
                    <Label text={ movie.description }/>
                </CardBody>
                <CardFooter>
                    <Back onClick={ onBack } text="Regresar" />
                </CardFooter>
            </Card>
        </div>
    );
}

MovieDetails.propTypes={
    match: PropTypes.object.isRequired
};

export default MovieDetails;