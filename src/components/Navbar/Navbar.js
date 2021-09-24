import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar container">
            <div className="navbar__logo">
                <img src="/images/logo.png" alt="" />
            </div>

            <div className="navbar__right flex">
                <div className="navbar__right-profile flex">
                    <div className="navbar__right-profile-img"><img src="https://source.unsplash.com/random" alt="user__img"/></div>
                    <h5>Rachit</h5>
                </div>

                <div className="navbar__right-icons flex">
                    <i className="far fa-bell"></i>
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
