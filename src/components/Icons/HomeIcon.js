import React from 'react';
import PropTypes from 'prop-types';
//Components
import home from 'src/images/home.png';
import homeBlack from 'src/images/homeBlack.png';
//Styles
import './Icon.css';

function HomeIcon (props){
    
    const { mobile } = props;

    return (
        <div className="Icon-Container">
            <img src={ mobile ? homeBlack : home } alt="Home" className="Icon" />
        </div>
    );
}

HomeIcon.propTypes = {
    mobile: PropTypes.bool
};

HomeIcon.defaultProps = {
    mobile: false
};

export default HomeIcon;