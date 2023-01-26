import { useState, useEffect } from 'react';
import isLoggedIn from '../util';
import AccountError from '../AccountError/AccountError';
import axios from 'axios';

const Info = () => {
    const [status, setStatus] = useState('');
    const [accountStatus, setAccountStatus] = useState(false);

    const [profile, setProfile] = useState({});
    const [account, setAccount] = useState({});

    useEffect(() => {
        const check = async () => {
            setAccountStatus(await isLoggedIn());
        };

        check();
    }, []);

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get('/profile');

            if (res.data.success) {
                setAccount(res.data.account);
                setProfile(res.data.profile);
            } else {
                setStatus(res.data.message);
            }
        };

        fetch();
    }, []);

    if (accountStatus) {
        return (
            <>
                <div className="info-main">
                    <div className="account-details">
                        {Object.keys(account).map((key) => {
                            if (
                                key !== 'id' &&
                                key !== 'password_digest' &&
                                key !== 'created_at' &&
                                key !== 'creationDate' &&
                                key !== 'updated_at' &&
                                key !== 'email'
                            ) {
                                return (
                                    <div className="account-detail">
                                        {key}: <b>{account[key]}</b>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className="profile-details">
                        {Object.keys(profile).map((key) => {
                            if (
                                key !== 'id' &&
                                key !== 'created_at' &&
                                key !== 'updated_at' &&
                                key !== 'email'
                            ) {
                                if (key !== 'skills') {
                                    return (
                                        <div className="profile-detail">
                                            {key}: <b>{profile[key]}</b>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="profile-detail">
                                            {key}:{' '}
                                            <b>{profile[key].join(', ')}</b>
                                        </div>
                                    );
                                }
                            }
                        })}
                    </div>
                </div>

                <p className="status">{status}</p>
            </>
        );
    } else {
        return <AccountError />;
    }
};

export default Info;
