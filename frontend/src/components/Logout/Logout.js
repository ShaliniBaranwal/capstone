import axios from "axios";
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

    return <p className="status">
        {status}
    </p>
};

export default Logout;