import axios from "axios";
import './Logout.css';
import { useEffect, useState } from "react";

const Logout = () => {
    const [status, setStatus] = useState('');

    useEffect(() => {
        const logout = async () => {
            const res = await axios.get('/logout');
            setStatus(res.data.message);
        };

        logout();
    }, []);

    return <p className="status-logout">
        {status}
    </p>
};

export default Logout;