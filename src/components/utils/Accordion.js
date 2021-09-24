
import React from 'react';
import './Accordion.css';

function Accordion({dept}) {
    return (
        <div className="accordion">
            <h5>All aspects in the {dept.toLowerCase()} module</h5>
            <div className="accordion__content flex">
                <div className="accordion__content-left flex column">
                    <h5>Access Control</h5>
                    <div className="accordion__form">
                        <label htmlFor="a">
                            <input type="radio" name="a"/><span className="accordion__span">All Access</span>
                        </label>
                    </div>
                    <div className="accordion__form">
                        <label htmlFor="a">
                            <input type="radio" name="a"/><span className="accordion__span">Restricted Access</span>
                        </label>
                    </div>
                </div>
                <div className="accordion__content-right">
                    <h5>Permissions</h5>
                    <div className="accordion__right-checklist flex column">
                        <div className="checklist__container">
                            <input type="checkbox" /><span className="accordion__span">View items in access</span>
                        </div>
                        <div className="checklist__container">
                            <input type="checkbox" /><span className="accordion__span">Edit items in access</span>
                        </div>
                        <div className="checklist__container">
                            <input type="checkbox" /><span className="accordion__span">Create items in access</span>
                        </div>
                        <div className="checklist__container">
                            <input type="checkbox" /><span className="accordion__span">Delete items in access</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion;
