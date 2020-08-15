import React from 'react';
import './Label.css';

function Label(props){

    const { className } = props;
    const { text } = props;
    
    return (
        <div className={`Label-Container${ className ? ' ' + className : ''}`}>
            <label className="Label-Text">{ text }</label>
        </div>
    );
}

export default Label;