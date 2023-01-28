import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="header">
            <div className="leftSect">
                <div className="flex logo">
                    <a href="#">
                        <img
                            src="/hvlogo.png"
                            width="100%"
                            height="100%"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex menu">
                    <div className="flex nav-links">
                        <Link to="/">Dashboard</Link>
                        <Link to="/profile">Application Profile</Link>
                        <Link to="/appliedjobs">Applied Jobs</Link>
                        <div>Activity</div>
                        <div>Job Agent</div>
                    </div>
                </div>
            </div>

            <div className="flex right"></div>
        </div>
    );
}
export default Navbar;