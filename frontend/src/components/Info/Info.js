import { useState, useEffect } from 'react';
import isLoggedIn from '../util';
import AccountError from '../AccountError/AccountError';
import axios from 'axios';
import './Info.css';
import { Link } from 'react-router-dom';

const Info = () => {
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
            }
        };

        fetch();
    }, []);

    const enhance = (key) => {
        let toDisplay = key;

        toDisplay = toDisplay.replace('A', ' a');
        toDisplay = toDisplay.replace('B', ' b');
        toDisplay = toDisplay.replace('C', ' c');
        toDisplay = toDisplay.replace('D', ' d');
        toDisplay = toDisplay.replace('E', ' e');
        toDisplay = toDisplay.replace('F', ' f');
        toDisplay = toDisplay.replace('G', ' g');
        toDisplay = toDisplay.replace('H', ' h');
        toDisplay = toDisplay.replace('I', ' i');
        toDisplay = toDisplay.replace('J', ' j');
        toDisplay = toDisplay.replace('K', ' k');
        toDisplay = toDisplay.replace('L', ' l');
        toDisplay = toDisplay.replace('M', ' m');
        toDisplay = toDisplay.replace('N', ' n');
        toDisplay = toDisplay.replace('O', ' o');
        toDisplay = toDisplay.replace('P', ' p');
        toDisplay = toDisplay.replace('Q', ' q');
        toDisplay = toDisplay.replace('R', ' r');
        toDisplay = toDisplay.replace('S', ' s');
        toDisplay = toDisplay.replace('T', ' t');
        toDisplay = toDisplay.replace('U', ' u');
        toDisplay = toDisplay.replace('V', ' v');
        toDisplay = toDisplay.replace('W', ' w');
        toDisplay = toDisplay.replace('X', ' x');
        toDisplay = toDisplay.replace('Y', ' y');
        toDisplay = toDisplay.replace('Z', ' z');

        toDisplay = toDisplay.replace(/_/g, ' ');

        toDisplay = toDisplay.split(/ /g);

        for (let i = 0; i < toDisplay.length; i++) {
            toDisplay[i] = `${toDisplay[i][0].toUpperCase()}${toDisplay[
                i
            ].slice(1)}`;
        }

        return toDisplay.join(' ');
    };

    if (accountStatus) {
        return (
            <>
                <div className="info-main">
                    <div className="account-details">
                        <h1 className="info-heading">ACCOUNT DETAILS</h1>
                        {Object.keys(account).map((key) => {
                            if (
                                key !== 'id' &&
                                key !== 'password_digest' &&
                                key !== 'created_at' &&
                                key !== 'creationDate' &&
                                key !== 'updated_at' &&
                                key !== 'email'
                            ) {
                                const toDisplay = enhance(key);

                                return (
                                    <p className="account-detail">
                                        {toDisplay}:{' '}
                                        <span className="profile-info">
                                            {account[key]}
                                        </span>
                                    </p>
                                );
                            }
                        })}
                    </div>
                    <div className="profile-details">
                        <h1 className="info-heading">PROFILE DETAILS</h1>
                        {Object.keys(profile).map((key) => {
                            if (
                                key !== 'id' &&
                                key !== 'password_digest' &&
                                key !== 'created_at' &&
                                key !== 'creationDate' &&
                                key !== 'updated_at' &&
                                key !== 'email'
                            ) {
                                if (key !== 'skills' && key !== 'ctc') {
                                    const toDisplay = enhance(key);

                                    return (
                                        <p className="profile-detail">
                                            {toDisplay}:{' '}
                                            <span className="profile-info">
                                                {profile[key]}
                                            </span>
                                        </p>
                                    );
                                } else {
                                    let toDisplay;
                                    let toReturn;

                                    if (key === 'ctc') {
                                        toDisplay = 'CTC';
                                        return (
                                            <p className="profile-detail">
                                                {toDisplay}:{' '}
                                                <span className="profile-info">
                                                    {profile[key]}
                                                </span>
                                            </p>
                                        );
                                    } else {
                                        toDisplay = 'Skills';
                                        return (
                                            <p className="profile-detail">
                                                {key.toUpperCase()}:{' '}
                                                <span className="profile-info">
                                                    {profile[key].join(', ')}
                                                </span>
                                            </p>
                                        );
                                    }
                                }
                            }
                        })}
                    </div>
                </div>

                <div className="link">
                    <Link to="/update">
                        <button className='button-link-update'>UPDATE THESE DETAILS</button>
                    </Link>
                </div>
            </>
        );
    } else {
        return <AccountError />;
    }
};

export default Info;
