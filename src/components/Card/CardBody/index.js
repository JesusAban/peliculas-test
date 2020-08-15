import React from 'react';
import PropTypes from 'prop-types';
//Styles
import './CardBody.css';

function CardBody(props) {

    const { className } = props;
    
    let clases = `Card-Body ${ className ? className : '' }`;
    
    return (
        <div className={ clases } >
            { props.children }
        </div>
    );
}

CardBody.propTypes = {
    className: PropTypes.string
};

export default CardBody;