import axios from 'axios';
import { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [userData, setUserData] = useState({});
    const [status, setStatus] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async () => {
        // create date
        const date = new Date();

        const res = await axios.post('/create', {
            ...userData,
            creationDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        });

        setStatus(res.data.message);
    };

    const handleSubmitDropdown = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <div className="form-signup">
                <div className="email-input">
                    <div className="input-form-detail-signup">
                        <label htmlFor="email">EMail</label>

                        <input
                            className="input-form"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>

                <div className="account-details-input">
                    <span className="header-signup">ACCOUNT DETAILS</span>
                    <div className="input-form-detail-signup">
                        <label htmlFor="password">Password</label>
                        <input
                            className="input-form"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-form-detail-signup">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                            className="input-form"
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            placeholder="phone_number"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-form-detail-signup">
                        <label htmlFor="userType">User Type</label>

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
                </div>

                <div className="profile-details-input">
                    <span className="header-signup">PROFILE DETAILS</span>
                    <div className="input-form-detail-signup">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            className="input-form"
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="firstName"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-form-detail-signup">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            className="input-form"
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="lastName"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-form-detail-signup">
                        <label htmlFor="address">Address</label>
                        <input
                            className="input-form"
                            type="text"
                            name="address"
                            id="address"
                            placeholder="address"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-form-detail-signup">
                        <label htmlFor="aboutabout">About</label>
                        <input
                            className="input-form"
                            type="text"
                            name="about"
                            id="about"
                            placeholder="about"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-form-detail-signup">
                        <label htmlFor="profilePic">Profile Pic</label>
                        <input
                            className="input-form"
                            type="text"
                            name="profilePic"
                            id="profilePic"
                            placeholder="profilePic"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-form-detail-signup">
                        <label htmlFor="resumeLink">Resume Link</label>
                        <input
                            className="input-form"
                            type="text"
                            name="resumeLink"
                            id="resumeLink"
                            placeholder="resumeLink"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-form-detail-signup">
                        <label htmlFor="expectedSalary">Expected Salary</label>
                        <input
                            className="input-form"
                            type="text"
                            name="expectedSalary"
                            id="expectedSalary"
                            placeholder="expectedSalary"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="input-form-detail-signup">
                        <label htmlFor="preferredLocation">
                            Preferred Location
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

                <input type="submit" onClick={handleSubmit} value="SUBMIT" />
            </div>

            <p className="status-signup">{status}</p>
        </>
    );
};

export default SignUp;
