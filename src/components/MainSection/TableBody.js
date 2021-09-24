import React, {useState} from 'react';
import './TableBody.css';
import Accordion from '../utils/Accordion';
import Toggle from '../utils/Toggle';

function TableBody({dept,btnStyle,btn,summary,lastUpdated}) {
    const [showAcc, setShowAcc] = useState(false);
    return (
        <>
        <div className={showAcc ? "main__table-body flex acc__true" : "main__table-body flex"}>
            <div className="acc"><button onClick={()=> setShowAcc(!showAcc)} className="btn accordion__btn"><i className={showAcc ? "fas fa-minus-circle" : "fas fa-plus-circle"}></i></button></div>
            <div className="dept"><h5>{dept}</h5></div>
            <div className="access"><button className={`btn ${btnStyle}`}>{btn}</button></div>
            <div className="summary"><h5>{summary}</h5></div>
            <div className="last-updated"><h5>{lastUpdated}</h5></div>
            <div className="toggle"><Toggle /></div>
        </div>
        {showAcc && 
            <Accordion 
                dept={dept}
            />
        }
        </>
    )
}

export default TableBody
