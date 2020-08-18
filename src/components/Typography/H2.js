import React from 'react';
//Styles
import './H.css';

function H2(props){

    const { className } = props;
    const { text } = props;
    
    return (
        <div className={`H-Container${ className ? ' ' + className : ''}`}>
            <h2 className="H2-Text">{ text }</h2>
        </div>
    );
}

export default H2;