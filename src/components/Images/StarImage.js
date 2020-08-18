import React from 'react';
//Components
import star from 'src/images/star.png';
import BaseImage from './BaseImage';

function StarImage (props){

    return (
        <BaseImage 
            image={ star }
            { ...props }
        />
    );
}

export default StarImage;