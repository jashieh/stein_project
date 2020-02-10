import React, {useState, useEffect} from 'react';

import NavItem from './nav_item.jsx';

const Nav = () => {
    return(
        <ul className="nav-bar">
            <NavItem name={"Dashboard"}/>
            <NavItem name={"Our Agency"}/>
            <NavItem name={"Our Staff"}/>
            <NavItem name={"Locations"}/>
            <NavItem name={"Latest"}/>
            <NavItem name={"Upcoming"}/>
            <NavItem name={"Resources"}/>
            <NavItem name={"Your Stein IAS"}/>
        </ul>
    );
};

export default Nav;