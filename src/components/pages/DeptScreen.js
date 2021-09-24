import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import MainSection from '../MainSection/MainSection';

function DeptScreen() {
    return (
        <div className="content flex container">
            <Sidebar />
            <MainSection />
        </div>
    )
}

export default DeptScreen;
