import { useState, useEffect } from 'react';
import './Navbar.css';
import isLoggedIn from '../util';
import { Link } from 'react-router-dom';
import logo from '../../hvlogo.png';
import axios from 'axios';
import Button from '@mui/material/Button';

function Navbar() {
    const [accountStatus, setAccountStatus] = useState(false);
    const [profile, setProfile] = useState({});
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const check = async () => {
            setAccountStatus(await isLoggedIn());
        };

        check();
    }, []);

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get('/profile');
            setProfile(res.data.profile);
        };

        fetch();
    }, []);

    if (accountStatus) {
        const handleProfilePicClicked = () => {
            setDropdown(!dropdown);
        };

        return (
            <div className="header">
                <div className="leftSect">
                    <Link to="/">
                        <div className="flex logo">
                            <img src={logo} width="90%" height="90%" alt="" />
                        </div>
                    </Link>

                    <div className="flex menu">
                        <div className="flex nav-links">
                            <Link to="/" className="navSelected">
                                Dashboard
                            </Link>
                            <Link to="/profile">Application Profile</Link>
                            <Link to="/appliedjobs">Applied Jobs</Link>
                            <Link to="/eligiblejobs">Eligible Jobs</Link>
                            <div>Activity</div>
                            <div>Job Agent</div>
                        </div>
                    </div>
                </div>

                <div className="flex right">
                    <img
                        src={profile.profilePic}
                        className="profile-pic"
                        onClick={handleProfilePicClicked}
                    ></img>
                    {dropdown && (
                        <ul className="dropdown-pfp">
                            <li>
                                <Link to="/logout">Log out</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div className="header">
                <div className="leftSect">
                    <Link to="/">
                        <div className="flex logo">
                            <img src={logo} width="90%" height="90%" alt="" />
                        </div>
                    </Link>

                    <div className="flex menu">
                        <div className="flex nav-links">
                            <Link to="/" className="navSelected">
                                Dashboard
                            </Link>
                            <Link to="/profile">Application Profile</Link>
                            <Link to="/appliedjobs">Applied Jobs</Link>
                            <Link to="/eligiblejobs">Eligible Jobs</Link>
                            <div>Activity</div>
                            <div>Job Agent</div>
                        </div>
                    </div>
                </div>

                <div className="flex right"></div>
            </div>
        );
    }
}
export default Navbar;
