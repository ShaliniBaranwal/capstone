import React, { useEffect, useState } from 'react';
import Snapshot from '../Snapshot/Snapshot';
import MyApplications from '../MyApplications/MyApplications';
import JobsForm from '../JobForm/JobForm';
import JobsListing from '../JobListing/JobListing';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
    const [response, setResponse] = useState([]);
    const [search, setsearch] = useState('');

    const fetchJobsDetails = async () => {
        const response = await axios.get('/jobs');
        setResponse(response.data);
    };

    const handleinputChange = (e) => {
        setsearch(e.target.value);
    };

    useEffect(() => {
        fetchJobsDetails();
    }, []);

    return (
        <div className="dashboard">
            <Snapshot />
            <MyApplications />
            <JobsForm handleinputChange={handleinputChange}/>
            <JobsListing search={search} response={response} />
        </div>
    );
}
export default Dashboard;
