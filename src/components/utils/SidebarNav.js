import React from 'react';
import './SidebarNav.css';

function SidebarNav({icon,title}) {
    return (
        <div className="sidebar__nav flex">
            <i className={icon}></i>
            <h5>{title}</h5>
        </div>
    )
}

export default SidebarNav;
