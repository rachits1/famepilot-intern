import React from 'react';

function TableHead({firstHead,secondHead,thirdHead,fourthHead}) {
    return (
        <div className="main__table-head flex">
            <div className="acc"></div>
            <div className="dept"><h5>{firstHead}</h5></div>
            <div className="access"><h5>{secondHead}</h5></div>
            <div className="summary"><h5>{thirdHead}</h5></div>
            <div className="last-updated"><h5>{fourthHead}</h5></div>
            <div className="toggle"></div>
        </div>
    )
}

export default TableHead
