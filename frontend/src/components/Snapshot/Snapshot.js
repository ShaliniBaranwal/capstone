import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Snapshot.css';
import { Link } from 'react-router-dom';

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
                <div className="snapshot-jobs-information">
                    <div className="image">
                        <div></div>
                    </div>

                    <div className="jobs-info">
                        <p className="job-type-name">All Jobs</p>
                        <p className="job-type-count">{allJobs}</p>
                    </div>

                    <Link to="/jobsindomain">
                        <div className="arrow"></div>
                    </Link>
                </div>

                <div className="snapshot-jobs-information">
                    <div className="image">
                        <div></div>
                    </div>

                    <div className="jobs-info">
                        <p className="job-type-name">Eligible Jobs</p>
                        <p className="job-type-count">{eligibleJobs}</p>
                    </div>

                    <Link to="/eligiblejobs">
                        <div className="arrow"></div>
                    </Link>
                </div>

                <div className="snapshot-jobs-information">
                    <div className="image">
                        <div></div>
                    </div>

                    <div className="jobs-info">
                        <p className="job-type-name">Applied Jobs</p>
                        <p className="job-type-count">{appliedJobs}</p>
                    </div>

                    <Link to="/appliedjobs">
                        <div className="arrow"></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Snapshot;
