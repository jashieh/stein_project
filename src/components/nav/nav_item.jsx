import React from 'react';

const NavItem = (props) => {
    return(
        <li className="nav-item">
            <a href="">{props.name}</a>
        </li>
    );
}

export default NavItem;