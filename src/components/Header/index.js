import React, { useState } from 'react';
//Components
import { Logo } from 'src/components/Images';
import NavBar from './NavBar';
import MenuButton from 'src/components/Buttons/MenuButton';
import MenuSideBar from 'src/components/MenuSideBar';

function Header() {

    const [showSideBar, setShowSideBar] = useState(false);

    const onOpenSideBar = () => {
        setShowSideBar(true);
    };

    const onCloseSideBar = () => {
        setShowSideBar(false);
    };

    return (
        <header className="Header">
            <div className="Header-Container">
                <MenuButton onClick={ onOpenSideBar } />
                <MenuSideBar show={ showSideBar } onClick={ onCloseSideBar }/>
                <Logo />
                <NavBar />
            </div>
        </header>
    );
}

export default Header;