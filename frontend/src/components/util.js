import axios from "axios";

async function isLoggedIn() {
    const res = await axios.get('/profile');

    return res.data.success !== false;
}

export default isLoggedIn;