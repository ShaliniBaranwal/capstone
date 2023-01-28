import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Snapshot.css';

import {
    setAllJobsContext,
    setEligibleJobsContext,
    setAppliedJobsContext,
    allJobsContext,
    eligibleJobsContext,
    appliedJobsContext
} from '../Dashboard/Dashboard';

const Snapshot = () => {
    const allJobs = useContext(allJobsContext);
    const eligibleJobs = useContext(eligibleJobsContext);
    const appliedJobs = useContext(appliedJobsContext);

    const setAllJobs = useContext(setAllJobsContext);
    const setAppliedJobs = useContext(setAppliedJobsContext);
    const setEligibleJobs = useContext(setEligibleJobsContext);

    useEffect(() => {
        const fetch = async () => {
            const allJobsDetails = await axios.get('/jobs');
            setAllJobs(allJobsDetails.data.length);

            const appliedJobsDetails = await axios.get('/appliedjobs');
            setAppliedJobs(appliedJobsDetails.data.length);

            const eligibleJobsDetails = await axios.get('/eligiblejobs');
            setEligibleJobs(eligibleJobsDetails.data.length);
        };

        fetch();
    }, []);

    return (
        <div className="snapshot-main">
            <h3>Snapshot</h3>
            <div className="snapshot">
                <div className="snapshot-alljobs">
                    <p>All Jobs</p>
                    <p>{allJobs}</p>
                </div>

                <div className="snapshot-eligiblejobs">
                    <p>Eligible Jobs</p>
                    <p>{eligibleJobs}</p>
                </div>

                <div className="snapshot-appliedjobs">
                    <p>Applied jobs</p>
                    <p>{appliedJobs}</p>
                </div>
            </div>
        </div>
    );
};

export default Snapshot;
