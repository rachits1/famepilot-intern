import React from 'react';
import './MainTopBar.css';

function MainTopBar() {
    return (
        <div className="main__topbar flex">
            <div className="main__topbar-left flex">
                <div className="main__topbar-left-content flex">
                    <span className="main__topbar-span"><i class="fas fa-signal"></i></span>
                    <h5>Permissions</h5>
                </div>

                <div className="main__topbar-left-content flex">
                    <span className="main__topbar-span"><i className="fas fa-th"></i></span>
                    <h5>Approval Matrix</h5>
                </div>
            </div>
            <div className="main__topbar-right flex">
                <span className="main__topbar-span"><i class="fas fa-sync"></i></span>
                <h5>Last synced 15 mins ago</h5>
            </div>
        </div>
    )
}

export default MainTopBar
