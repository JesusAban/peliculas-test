import React from 'react';
//Routes
import { useHistory } from 'react-router';
//Components
import Card from 'src/components/Card';
import CardBody from 'src/components/Card/CardBody';
import H2 from 'src/components/Typography/H2';
import PosterMovieImage from 'src/components/Images/PosterMovieImage';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from 'src/actions';
//Styles
import './CardMovie.css';

function CardMovie(props) {

    const { movie } = props;

    const movieConfigurationSelector = useSelector((state) => state.movieConfiguration);
    
    const dispatch = useDispatch();
    const history = useHistory();

    const onClick = () => {
        let baseURL = movieConfigurationSelector.imageURL + movieConfigurationSelector.size;
        dispatch(getMovieDetails(movie.id, baseURL))
            .then((success) => {
                history.push("/movies/" + movie.id);
            })
            .catch((error) => {
                console.log("Ocurrió un error al intentar realizar la búsqueda");
            });
    };

    const BackgroundImage = () => {
        let image = null;
        if(movie.poster) {
            image = movie.poster;
        }
        return <PosterMovieImage src={ image }/>;
    };

    return (
        <Card id={ movie.id } className="Card-Movie" onClick={ onClick }>
            <CardBody className="Card-Movie-Body">
               <BackgroundImage />
               <div className="Card-Movie-Footer">
                    <div className="Card-Movie-Footer-Title">
                        <H2 text={ movie.name }></H2>
                    </div>
                    <div className="Card-Movie-Footer-Info">
                        <div className="Card-Movie-Footer-Info-Release">
                            <H2 text={ movie.releaseDate } />
                        </div>
                        <div className="Card-Movie-Footer-Info-Rate">
                            <H2 text={ movie.average } />
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default CardMovie;