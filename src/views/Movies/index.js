import React, { useEffect, useState } from 'react';
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
    const [loading, setLoading] = useState(false);

    const moviesSelector = useSelector((state) => state.movies);

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        setLoading(true);
        dispatch(getConfigurations())
            .then((success) => {
                loadMovies(success);
            }).catch((error) => {
                setLoading(false);
            });
    };

    const loadMovies = (configuration) => {
        let imageURL = null;
        if(configuration && configuration.imageURL) {
            imageURL = `${configuration.imageURL}${configuration.posterSize}`;
        }

        dispatch(getNowPlaying(imageURL))
            .then((success) => {
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            });
    };

    const Cards = () => {
        if(!loading){
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
        } else {
            return (
                <H3 text="Cargando..." />
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