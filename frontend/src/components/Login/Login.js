import axios from 'axios';
import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const [status, setStatus] = useState('');

    const handleInputChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async () => {
        const res = await axios.post('/login', loginData);

        setStatus(res.data.message);
    };

    return (
        <>
            <div className="form-login">
                <div class="input-form-detail-login">
                    <label for="email">EMail</label>

                    <input
                        className="input-form-login"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                        onChange={handleInputChange}
                    ></input>
                </div>

                <div class="input-form-detail-login">
                    <label for="password">Password</label>

                    <input
                        className="input-form-login"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        onChange={handleInputChange}
                    ></input>
                </div>

                <div className="divider"></div>

                <input type="submit" onClick={handleSubmit} />
            </div>

            <p className="status-login">{status}</p>
        </>
    );
};

export default Login;
