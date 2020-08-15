import React from 'react';
import PropTypes from 'prop-types';
//Styles
import './CardFooter.css';

function CardFooter(props) {

    const { className } = props;

    let clases = `Card-Footer ${ className ? className : '' }`;
    
    return (
        <div className={ clases } >
            { props.children }
        </div>
    );
}

CardFooter.propTypes = {
    className: PropTypes.string
};

export default CardFooter;
