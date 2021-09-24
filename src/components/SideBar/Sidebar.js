import React from 'react';
import './Sidebar.css';
import SidebarNav from '../utils/SidebarNav';

function Sidebar() {
    return (
        <div className="sidebar flex column">
            <SidebarNav 
                icon="fas fa-project-diagram"
                title="Projects"
            />

            <SidebarNav 
                icon="fas fa-briefcase"
                title="Organisational Profile"
            />

            <SidebarNav 
                icon="fas fa-shield-alt"
                title="Access Control"
            />
        </div>
    )
}

export default Sidebar;
