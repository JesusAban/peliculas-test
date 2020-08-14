import React from 'react';
//Components
import DefaultButton from './DefaultButton';
import { Menu } from 'src/components/Icons';
//Styles
import './Button.css';

function MenuButton(props) {

    return (
        <DefaultButton 
            className="Menu-Button Hide-lg"
            icon={ <Menu/> }
            { ...props }
        />
    );
}

export default MenuButton;