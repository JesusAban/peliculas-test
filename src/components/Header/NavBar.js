import React from 'react';
//Routes
import menus from 'src/menus';
//Components
import MenuItem from 'src/components/Menu/MenuItem';
//Styles
import './Header.css';

function NavBar (){

    return (
        <div className="NavBar Hide-md">
            <ul>
                {
                    menus.map((menu, index) => (
                        <MenuItem menu={ menu } key={ index }/>
                    ))
                }
            </ul>
        </div>
    );
}

export default NavBar;