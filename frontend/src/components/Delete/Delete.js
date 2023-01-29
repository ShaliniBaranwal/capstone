import axios from 'axios';
import isLoggedIn from '../util';
import { useState, useEffect } from 'react';

const Delete = () => {
    const [status, setStatus] = useState('');
    const [accountStatus, setAccountStatus] = useState(false);

    useEffect(() => {
        const check = async () => {
            setAccountStatus(await isLoggedIn());
        };

        check();
    }, []);

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.post('/delete');
            setStatus(res.data.message);
        };

        fetch();
    }, []);

    return (
        <div className="delete-page-main">
            <p className="status">{status}</p>
        </div>
    );
};

export default Delete;
