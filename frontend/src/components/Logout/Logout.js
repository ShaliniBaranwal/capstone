import axios from 'axios';
import './Logout.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
    const [status, setStatus] = useState('');

    useEffect(() => {
        const logout = async () => {
            const res = await axios.get('/logout');
            setStatus(res.data.message);
        };

        logout();
    }, []);

    return (
        <div className="logout-page">
            <h1 className="status-logout">{status}</h1>

            <Link to="/login">
                <button>
                    LOGIN
                </button>
            </Link>
        </div>
    );
};

export default Logout;
