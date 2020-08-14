import React from 'react';
//Components
import menu from 'src/images/menu.png';
//Styles
import './Icon.css';

function MenuIcon (){
    return (
        <div className="Icon-Container">
            <img src={ menu } alt="Menu" className="Icon" />
        </div>
    );
}

export default MenuIcon;