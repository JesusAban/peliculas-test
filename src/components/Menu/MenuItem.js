import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//Routes
import { NavLink as RouterLink } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

function MenuItem(props){

    const { menu } = props;

    const location = useLocation();
    const [selected, setSelected] = useState(false);
    const { mobile } = props;

    function getDefaultMatch(){
        const match = matchPath(location.pathname, {
            path: menu.href === '/' ? '/overview' : menu.href,
            exact: true
        });
        return Boolean(match);
    }

    useEffect(() => {
        setSelected(getDefaultMatch());
    }, [location.pathname]);

    const getMenuIcon = (icon) => {
        const el = React.createElement(icon.type, { mobile });
        return el;
    };

    return(
        <li className={ selected ? "Menu-Selected" : null }>
            <RouterLink to={ menu.href } exact>
                { getMenuIcon(menu.icon) }
                { menu.header }
            </RouterLink>
        </li>
    );
}

MenuItem.propTypes = {
    menu: PropTypes.object,
    mobile: PropTypes.bool
};

MenuItem.defaultProps = {
    mobile: false
};

export default MenuItem;