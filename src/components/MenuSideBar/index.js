import React from 'react';
//Routes
import menus from 'src/menus';
//Components
import SideBar from 'src/components/SideBar';
import SideBarTitle from 'src/components/SideBar/SideBarTitle';
import SideBarBody from 'src/components/SideBar/SideBarBody';
import MenuItem from 'src/components/Menu/MenuItem';
//Estilos
import './MenuSideBar.css';
import { Logo } from 'src/components/Images';

function MenuSideBar(props){

    const { show } = props;

    const { onClick } = props;

    return (
        show ? <SideBar onClick={ onClick } className="Hide-lg">
            <SideBarTitle>
                <Logo className="SideBar-Icon" />
            </SideBarTitle>
            <SideBarBody className="Menu-SideBar">
                <ul>
                    {
                        menus.map((menu, index) => (
                            <MenuItem menu={ menu } key={ index } mobile={ true }/>
                        ))
                    }
                </ul>
            </SideBarBody>
        </SideBar> : null
    );
}

export default MenuSideBar;