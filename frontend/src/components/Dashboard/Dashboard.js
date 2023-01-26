import React, { useEffect, useState } from 'react';
import Snapshot from '../Snapshot/Snapshot';
import MyApplications from '../MyApplications/MyApplications';
import JobsForm from '../JobForm/JobForm';
import JobsListing from '../JobListing/JobListing';
import axios from 'axios';
import isLoggedIn from '../util';
import './Dashboard.css';
import AccountError from '../AccountError/AccountError';

function Dashboard() {
    const [response, setResponse] = useState([]);
    const [search, setsearch] = useState('');
    const [accountStatus, setAccountStatus] = useState(false);

    const fetchJobsDetails = async () => {
        const response = await axios.get('/jobs');
        setResponse(response.data);
    };

    useEffect(() => {
        const check = async () => {
            setAccountStatus(await isLoggedIn());
        };

        check();
    }, []);

    const handleinputChange = (e) => {
        setsearch(e.target.value);
    };

    useEffect(() => {
        fetchJobsDetails();
    }, []);

    if (accountStatus) {
        return (
            <div className="dashboard">
                <Snapshot />
                <MyApplications />
                <JobsForm handleinputChange={handleinputChange}/>
                <JobsListing search={search} response={response} />
            </div>
        );
    } else {
        return <AccountError />;
    }
}
export default Dashboard;
