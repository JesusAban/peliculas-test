import React from 'react';
//Components
import back from 'src/images/back.png';
//Styles
import './Icon.css';

function BackIcon (){

    return (
        <div className="Icon-Container">
            <img src={ back } alt="Back" className="Icon" />
        </div>
    );
}

export default BackIcon;