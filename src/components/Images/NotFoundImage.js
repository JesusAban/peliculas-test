import React from 'react';
//Components
import notFound from 'src/images/404Error.png';
import BaseImage from './BaseImage';

function NotFoundImage (props){

    return (
        <BaseImage 
            image={ notFound }
            { ...props }
        />
    );
}

export default NotFoundImage;