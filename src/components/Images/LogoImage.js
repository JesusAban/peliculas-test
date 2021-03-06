import React from 'react';
//Components
import logo from 'src/images/logo.svg';
import BaseImage from './BaseImage';

function LogoImage (props){

    return (
        <BaseImage 
            image={ logo } 
            { ...props }
        />
    );
}

export default LogoImage;