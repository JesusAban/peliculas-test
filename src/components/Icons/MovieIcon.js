import React from 'react';
import PropTypes from 'prop-types';
//Components
import movie from 'src/images/movies.png';
import movieBlack from 'src/images/moviesBlack.png';
//Styles
import './Icon.css';

function MovieIcon (props){

    const { mobile } = props;

    return (
        <div className="Icon-Container">
            <img src={ mobile ? movieBlack : movie } alt="Movie" className="Icon" />
        </div>
    );
}

MovieIcon.propTypes = {
    mobile: PropTypes.bool
};

MovieIcon.defaultProps = {
    mobile: false
};

export default MovieIcon;