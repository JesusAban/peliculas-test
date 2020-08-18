import React from 'react';
//Styles
import './SideBar.css';

function SideBar(props){

    const { className } = props;
    const { onClick } = props;

    return (
        <div 
            onClick={ onClick } 
            className={`SideBar${className ? ' ' + className : ''}`}
        >
            { props.children }
        </div>
    );
}

export default SideBar;