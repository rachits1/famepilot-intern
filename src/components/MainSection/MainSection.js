import React from 'react';
import './MainSection.css';
import MainTopBar from './MainTopBar';
import MainMidBar from './MainMidBar';
import Table from './Table';

function MainSection() {
    return (
        <div className="main">
            <MainTopBar />
            <MainMidBar />
            <Table />
        </div>
    )
}

export default MainSection;
