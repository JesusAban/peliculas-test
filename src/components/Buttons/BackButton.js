import React from 'react';
//Components
import DefaultButton from './DefaultButton';
import { Back } from 'src/components/Icons';
//Styles
import './Button.css';

function BackButton(props) {

    return (
        <DefaultButton 
            className="Menu-Button"
            icon={ <Back /> }
            { ...props }
        />
    );
}

export default BackButton;