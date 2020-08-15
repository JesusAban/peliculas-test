import React from 'react';
import './H.css';

function H1(props){

    const { className } = props;
    const { text } = props;

    return (
        <div className={`H-Container${ className ? ' ' + className : ''}`}>
            <h1 className="H1-Text">{ text }</h1>
        </div>
    );
}

export default H1;