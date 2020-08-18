import React from 'react';
//Components
import DefaultButton from './DefaultButton';
import { Back } from 'src/components/Icons';
//Styles
import './Button.css';

function BackButton(props) {

    return (
        <DefaultButton 
            className="Btn-Back"
            icon={ <Back /> }
            { ...props }
        />
    );
}

export default BackButton;