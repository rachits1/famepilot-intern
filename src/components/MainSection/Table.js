import React from 'react';
import TableBody from './TableBody';
import {tableData} from '../../tableData';
import TableHead from './TableHead';

function Table() {
    return (
        <div className="main__table flex column">
            <div className="main__table__nav flex">
                <div className="main__table__nav-content">
                    <h5>Access Control</h5>
                </div>
                <div className="main__table__nav-content">
                    <h5>Assigned Members</h5>
                </div>
            </div>

            <TableHead 
                firstHead="Department/Role Name"
                secondHead="Access Level"
                thirdHead="Summary"
                fourthHead="Last Updated"
            />
            
            {tableData.map((tData) => {
                return (
                    <TableBody 
                        key={tData.id}
                        dept={tData.dept}
                        btnStyle={tData.btnStyle}
                        btn={tData.btn}
                        summary={tData.summary}
                        lastUpdated={tData.lastUpdated}
                    />
                )
            })}
    </div>
    )
}

export default Table
