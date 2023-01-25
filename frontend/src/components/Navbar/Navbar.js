import React from 'react'
import "./Navbar.css"

// const navItems = ['DashBoard', 'Applicaiton Profile', 'AppliedJobs', 'Activity', 'Job Agent'];

function Navbar() {
    return (
        <div className="header">
            <div className="leftSect">
                <div className="flex logo">
                    <a href="#"><img src="/hvlogo.png" width="100%" height="100%" alt="" /></a>
                </div>
                <div className="flex menu">
                    <div className="flex nav-links">
                        <div>Dashboard</div>
                        <div>Applicaiton Profile</div>
                        <div>AppliedJobs</div>
                        <div>Activity</div>
                        <div>Job Agent</div>
                    </div>
                </div>
            </div>
            <div className="flex right">

            </div>
        </div>

    );
}
export default Navbar
