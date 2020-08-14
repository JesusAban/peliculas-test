import React from 'react';
//Components
import logo from 'src/images/logo.svg';
//Styles
import './Image.css';

function LogoImage (props){

    const { className } = props;

    return (
        <div className={ `Logo-Container${className ? ' ' + className : ''}` }>
            <img src={ logo } alt="logo" className="Logo" />
        </div>
    );
}

export default LogoImage;