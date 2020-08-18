import React from 'react';
//Components
import defaultImage from 'src/images/defaultImage.png';
//Styles
import './BackdropMovieImage.css';

function BackdropMovieImage (props){

    const { src } = props;

    return (
        <div className={ `Backdrop-Movie-Image-Container` }>
            <img src={ src ? src : defaultImage } alt="backdropMovie" className="Backdrop-Movie-Image" />
        </div>
    );
}

export default BackdropMovieImage;