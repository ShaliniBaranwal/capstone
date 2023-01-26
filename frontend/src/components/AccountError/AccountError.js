import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './AccountError.css';

const AccountError = () => {
    return (
        <>
            <p className="title-err">CAPSTONE PROJECT</p>
            <p className="description-err">Job Portal</p>

            <div className="buttons-err">
                <Link to="/login">
                    <Button variant="outlined">LOG IN</Button>
                </Link>

                <Link to="/signup">
                    <Button variant="outlined">SIGN UP</Button>
                </Link>
            </div>
        </>
    );
};

export default AccountError;
