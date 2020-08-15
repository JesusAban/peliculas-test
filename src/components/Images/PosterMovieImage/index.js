import React from 'react';
//Components
import defaultImage from 'src/images/defaultImage.png';
//Styles
import './PosterMovieImage.css';

function PosterMovieImage (props){

    const { src } = props;

    return (
        <div className={ `Poster-Movie-Image-Container` }>
            <img src={ src ? src : defaultImage } alt="posterImage" className="Poster-Movie-Image" />
        </div>
    );
}

export default PosterMovieImage;