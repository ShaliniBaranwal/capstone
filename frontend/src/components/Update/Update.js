import React, { useState, useEffect } from 'react';
import axios from 'axios';
import isLoggedIn from '../util';
import AccountError from '../AccountError/AccountError';
import './Update.css';

const Update = () => {
    const [userData, setUserData] = useState({});
    const [status, setStatus] = useState('');
    const [accountStatus, setAccountStatus] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        const check = async () => {
            setAccountStatus(await isLoggedIn());
        };

        check();
    }, []);

    const handleSubmit = async () => {
        const skills = userData.skills.toLowerCase();

        const res = await axios.post('/update', {
            ...userData,
            skills: skills
                .split(/( ?)+,( ?)+/g)
                .filter((skillName) => skillName !== ' ' && skillName !== '')
        });

        if (res.data.success) {
            window.location = '/profile';
        } else {
            setStatus(res.data.message);
        }
    };

    const handleSubmitDropdown = (e) => {
        setSelectedOption(e.target.value);
    };

    if (accountStatus) {
        return (
            <>
                <div className="form-update">
                    <div className="user-details">
                        <form className="update-account-form">
                            <span className="header-update">
                                ACCOUNT DETAILS
                            </span>
                            <div className="input-form-detail-update">
                                <label for="password">Password</label>
                                <input
                                    className="input-form"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="password"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="phone_number">Phone Number</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="phone_number"
                                    id="phone_number"
                                    placeholder="phone number"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="userType">User Type</label>

                                <select
                                    value={selectedOption}
                                    onChange={handleSubmitDropdown}
                                >
                                    <option value="" disabled>
                                        Select an option
                                    </option>
                                    <option value="Student">Student</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                        </form>
                        <form className="update-profile-form">
                            <span className="header-update">
                                PROFILE DETAILS
                            </span>
                            <div className="input-form-detail-update">
                                <label for="firstName">First Name</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="first name"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="lastName">Last Name</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="last name"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="contact">Contact</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    placeholder="alternate contact"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="currentCompany">
                                    Current Company:{' '}
                                </label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="currentCompany"
                                    id="currentCompany"
                                    placeholder="current company"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="ctc">CTC</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="ctc"
                                    id="ctc"
                                    placeholder="ctc"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="currentRole">Current Role</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="currentRole"
                                    id="currentRole"
                                    placeholder="current role"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="experience">Experience</label>
                                <input
                                    className="input-form"
                                    type="number"
                                    name="experience"
                                    id="experience"
                                    placeholder="experience (in years)"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="skills">Skills</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="skills"
                                    id="skills"
                                    placeholder="skills (comma separated)"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="address">Address</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="address"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="aboutabout">About</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="about"
                                    id="about"
                                    placeholder="about"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="profilePic">Profile Pic</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="profilePic"
                                    id="profilePic"
                                    placeholder="profile pic (url)"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="resumeLink">Resume Link</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="resumeLink"
                                    id="resumeLink"
                                    placeholder="resume link (url)"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="expectedSalary">
                                    Expected Salary:{' '}
                                </label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="expectedSalary"
                                    id="expectedSalary"
                                    placeholder="expected salary (in ₹)"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                            <div className="input-form-detail-update">
                                <label for="preferredLocation">
                                    Preferred Location:{' '}
                                </label>
                                <input
                                    className="input-form"
                                    type="text"
                                    name="preferredLocation"
                                    id="preferredLocation"
                                    placeholder="preferred location (eg. Mumbai, Maharashtra)"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                        </form>
                    </div>

                    <input
                        type="submit"
                        onClick={handleSubmit}
                        value="SUBMIT"
                    ></input>
                </div>

                <p className="status-update">{status}</p>
            </>
        );
    } else {
        return <AccountError />;
    }
};

export default Update;
