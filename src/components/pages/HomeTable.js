import React from 'react';
import {Link} from 'react-router-dom';

function HomeTable({deptName,members,lastUpdated,btn,btnStyle}) {
    return (
        <div className="main__table-body flex">
            <div className="acc"><i className="far fa-circle"></i></div>
            <div className="dept"><Link className="link deptLink" to={`/${deptName}`}><h5>{deptName}</h5></Link></div>
            <div className="access"><button className={`btn ${btnStyle}`}>{btn}</button></div>
            <div className="summary"><h5>{members}</h5></div>
            <div className="last-updated"><h5>{lastUpdated}</h5></div>
            <div className="toggle"><i className="far fa-eye"></i></div>
        </div>
    )
}

export default HomeTable;
