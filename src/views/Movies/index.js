import React, { useEffect } from 'react';
//Components
import Card from 'src/components/Card';
import CardHeader from 'src/components/Card/CardHeader';
import CardBody from 'src/components/Card/CardBody';
import CardMovie from 'src/components/CardMovie';
import H1 from 'src/components/Typography/H1';
import H3 from 'src/components/Typography/H3';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getNowPlaying, getConfigurations } from 'src/actions';

function Movies(){

    const dispatch = useDispatch();

    const moviesSelector = useSelector((state) => state.movies);

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        dispatch(getConfigurations())
            .then((success) => {
                loadMovies(success);
            });
    };

    const loadMovies = (configuration) => {
        let imageURL = null;
        if(configuration && configuration.imageURL) {
            imageURL = configuration.imageURL + configuration.size;
        }

        dispatch(getNowPlaying(imageURL));
    };

    const Cards = () => {
        if(moviesSelector && moviesSelector.movies && moviesSelector.movies.length > 0){
            let movies = moviesSelector.movies;
            return movies.map((movie, index) => (
                <div className="Col" key={ index }>
                    <CardMovie movie={ movie } key={ index }/>
                </div>
            ));
        } else {
            return (
                <H3 text="Sin películas" />
            );
        }
    };

    return (
        <div className="Movies-Container">
            <Card>
                <CardHeader>
                    <H1 text="Películas"></H1>
                </CardHeader>
                <CardBody>
                    <Cards />
                </CardBody>
            </Card>
        </div>
    );
}

export default Movies;