import React, { useState, useEffect } from 'react';
import axios from 'axios';
import isLoggedIn from '../util';
import AccountError from '../AccountError/AccountError';

import './Update.css';

const Update = () => {
    const [userData, setUserData] = useState({});
    const [status, setStatus] = useState('');
    const [accountStatus, setAccountStatus] = useState(false);

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
        const skills = userData.skills;

        if (skills) {
            setUserData({
                ...userData,
                skills: skills
            });
        }

        const res = await axios.post('/update', userData);
        setStatus(res.data.message);
    };

    if (accountStatus) {
        return (
            <>
                <div className="form">
                    <div className="account-details-input">
                        <div class="input-form-detail">
                            <label for="password">Password: </label>

                            <input
                                className="input-form"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                onChange={handleInputChange}
                            ></input>
                        </div>

                        <div class="input-form-detail">
                            <label for="phone_number">Phone Number: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="phone_number"
                                id="phone_number"
                                placeholder="phone_number"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="userType">User Type: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="userType"
                                id="userType"
                                placeholder="userType"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                    </div>
                    <div className="profile-details-input">
                        <div class="input-form-detail">
                            <label for="firstName">First Name: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="firstName"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="lastName">Last Name: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="lastName"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="contact">Contact: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="contact"
                                id="contact"
                                placeholder="alternate contact"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="currentCompany">
                                Current Company:{' '}
                            </label>

                            <input
                                className="input-form"
                                type="text"
                                name="currentCompany"
                                id="currentCompany"
                                placeholder="currentCompany"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="ctc">CTC: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="ctc"
                                id="ctc"
                                placeholder="ctc"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="currentRole">Current Role: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="currentRole"
                                id="currentRole"
                                placeholder="currentRole"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="experience">Experience: </label>

                            <input
                                className="input-form"
                                type="number"
                                name="experience"
                                id="experience"
                                placeholder="experience"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="skills">Skills: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="skills"
                                id="skills"
                                placeholder="skills (comma separated)"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="address">Address: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="address"
                                id="address"
                                placeholder="address"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="aboutabout">About: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="about"
                                id="about"
                                placeholder="about"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="profilePic">Profile Pic: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="profilePic"
                                id="profilePic"
                                placeholder="profilePic"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="resumeLink">Resume Link: </label>

                            <input
                                className="input-form"
                                type="text"
                                name="resumeLink"
                                id="resumeLink"
                                placeholder="resumeLink"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="expectedSalary">
                                Expected Salary:{' '}
                            </label>

                            <input
                                className="input-form"
                                type="text"
                                name="expectedSalary"
                                id="expectedSalary"
                                placeholder="expectedSalary"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                        <div class="input-form-detail">
                            <label for="preferredLocation">
                                Preferred Location:{' '}
                            </label>

                            <input
                                className="input-form"
                                type="text"
                                name="preferredLocation"
                                id="preferredLocation"
                                placeholder="preferredLocation"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                    </div>

                    <input type="submit" onClick={handleSubmit}></input>
                </div>

                <p className="status">{status}</p>
            </>
        );
    } else {
        return <AccountError />;
    }
};

export default Update;
