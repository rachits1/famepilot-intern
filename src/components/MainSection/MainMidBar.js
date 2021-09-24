import React from 'react';
import {Link} from 'react-router-dom';

function MainMidBar() {
    const deptName = window.location.href.split('app/')[1].replace("%20"," ");
    return (
        <div className="main__midbar flex">
            <Link to='/' className="link backLink"><i className="fas fa-arrow-left"></i></Link>
            <h5>{deptName}</h5>
            <button className="btn btn__edit"><i className="fas fa-pen"></i></button>
        </div>
    )
}

export default MainMidBar;
