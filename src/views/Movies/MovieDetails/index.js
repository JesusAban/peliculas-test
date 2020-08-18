import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//Routes
import { useHistory } from 'react-router';
//Components
import CardHeader from 'src/components/Card/CardHeader';
import CardFooter from 'src/components/Card/CardFooter';
import { Back } from 'src/components/Buttons';
import Card from 'src/components/Card';
import CardBody from 'src/components/Card/CardBody';
import H1 from 'src/components/Typography/H1';
import H3 from 'src/components/Typography/H3';
import Label from 'src/components/Typography/Label';
import { BackdropMovie } from 'src/components/Images';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetails } from 'src/actions/movieActions/movieActions';
//Utils
import { longDate } from 'src/utils/dateUtils';
//Styles
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
            let baseURL = `${movieConfigurationSelector.imageURL}${movieConfigurationSelector.backdropSize}`;
            if(movie !== null && movie.id !== null){
                if(movieId !== movie.id){
                    dispatch(getMovieDetails(movieId, baseURL))
                        .then((sucess) => {})
                        .catch((error) => {
                            history.push("/errors/error-404");
                        });    
                }
            } else {
                dispatch(getMovieDetails(movieId, baseURL))
                    .then((sucess) => {})
                    .catch((error) => {
                        history.push("/errors/error-404");
                    });
            }
        }
    }, []);

    const onBack = () => {
        history.goBack();
    };

    const getGenres = (genres) => {
        let genresText = genres.map((genre) => (genre.name));

        return genresText.join(', ').toString();
    };

    const BackgroundImage = () => {
        let image = null;
        if(movie.poster) {
            image = movie.poster;
        }
        return <BackdropMovie src={ image }/>;
    };

    return (
        <div className="Movie-Detail-Container">
            <Card>
                <CardHeader>
                    <BackgroundImage />
                </CardHeader>
                <CardBody>
                    <div className="Movie-Detail-Title">
                        <H1 text={ movie.title } />
                    </div>
                    <H3 text="Duración"/>
                    <Label text={`${movie.runtime} min`}/>
                    <H3 text="Fecha de estreno"/>
                    <Label text={ longDate(movie.releaseDate) }/>
                    <H3 text="Calificación"/>
                    <Label text={ movie.average }/>
                    <H3 text="Generos"/>
                    <Label text={ getGenres(movie.genres) }/>
                    <H3 text="Descripción"/>
                    <Label text={ movie.description }/>
                </CardBody>
                <CardFooter>
                    <Back onClick={ onBack } title="Regresar" className="Btn-Back"/>
                </CardFooter>
            </Card>
        </div>
    );
}

MovieDetails.propTypes={
    match: PropTypes.object.isRequired
};

export default MovieDetails;