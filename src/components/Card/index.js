import React from 'react';
import PropTypes from 'prop-types';
//Styles
import './Card.css';

function Card (props){

    const { className } = props;
    const { onClick } = props;
    
    let clases = `Card-Container ${ className ? className : '' }`;
    
    return (
        <div className={ clases } onClick={ onClick }>
            { props.children }
        </div>    
    );
}

Card.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

Card.defaultProps = {
    onClick: () => {}
};

export default Card;