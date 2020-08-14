import React, { useState } from 'react';
//Components
import { Logo } from 'src/components/Images';
import NavBar from './NavBar';
import MenuButton from 'src/components/Buttons/MenuButton';
import MenuSideBar from '../MenuSideBar';

function Header() {

    const [showSideBar, setShowSideBar] = useState(false);

    const onOpenSideBar = () => {
        setShowSideBar(true);
    };

    const onCloseSideBar = () => {
        setShowSideBar(false);
    };

    return (
        <header className="Header-Container">
            <MenuButton onClick={ onOpenSideBar } />
            <MenuSideBar show={ showSideBar } onClick={ onCloseSideBar }/>
            <Logo />
            <NavBar />
        </header>
    );
}

export default Header;