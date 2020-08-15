import React from 'react';
import PropTypes from 'prop-types';
//Styles
import './CardHeader.css';

function CardHeader(props) {
    
    const { className } = props;

    let clases = `Card-Header ${ className ? className : '' }`;
    
    return (
        <div className={ clases } >
            { props.children }
        </div>
    );
}

CardHeader.propTypes = {
    className: PropTypes.string
};

export default CardHeader;