import React from 'react';

function SideBarBody(props){
    
    const { className } = props;

    return (
        <div className={ `SideBar-Body${className ? ' ' + className : ''}` }>
            { props.children }
        </div>
    );
}

export default SideBarBody;