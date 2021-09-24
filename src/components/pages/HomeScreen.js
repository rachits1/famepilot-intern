import React from 'react';
import './HomeScreen.css';
import MainTopBar from '../MainSection/MainTopBar';
import Sidebar from '../SideBar/Sidebar';
import TableHead from '../MainSection/TableHead';
import HomeTable from './HomeTable';
import {homeTableData} from '../../tableData';

function HomeScreen() {
    return (
        <div className="content flex container">
            <Sidebar />
            <div className="main">
                <MainTopBar />
                <div className="main__table flex column">
                    <div className="home__table__top flex">
                        <button className="btn addRole__btn flex"><h5>+</h5><h5>Add Role</h5></button>
                        <i className="fas fa-pen"></i>
                        <i className="fas fa-trash"></i>
                    </div>
                    <TableHead 
                        firstHead="Department/Role Name"
                        secondHead="Access Level"
                        thirdHead="No of members"
                        fourthHead="Last Updated"
                    />
                    {homeTableData.map((tData)=> {
                        return (
                            <HomeTable 
                                key={tData.id}
                                deptName={tData.deptName}
                                btnStyle={tData.btnStyle}
                                btn={tData.btn}
                                members={tData.members}
                                lastUpdated={tData.lastUpdated}
                            />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default HomeScreen;
