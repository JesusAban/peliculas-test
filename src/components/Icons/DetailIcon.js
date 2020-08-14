import React from 'react';
//Components
import details from 'src/images/details.png';
//Styles
import './Icon.css';

function DetailIcon (){

    return (
        <div className="Icon-Container">
            <img src={ details } alt="Detail" className="Icon" />
        </div>
    );
}

export default DetailIcon;