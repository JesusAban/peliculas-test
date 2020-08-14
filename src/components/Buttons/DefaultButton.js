import React from 'react';

function DefaultButton(props) {

    const { className, icon, title } = props;
    const { onClick } = props;

    return (
        <div className={ className } onClick={ onClick }>
            {
                icon && <span className="Icon">
                        { icon }
                    </span>
            }
            { title }
        </div>
    );
}

export default DefaultButton;