import React from 'react';
import './H.css';

function H3(props){

    const { className } = props;
    const { text } = props;
    
    return (
        <div className={`H-Container${ className ? ' ' + className : ''}`}>
            <h3 className="H3-Text">{ text }</h3>
        </div>
    );
}

export default H3;