import React from 'react';
import './Image.css';

function BaseImage(props){

    const { className } = props;
    const { image } = props;

    return (
        <div className={ `Image-Container${className ? ' ' + className : ''}` }>
            <img src={ image } alt="image" className="Image" />
        </div>
    );
}

export default BaseImage;