import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Snapshot.css';

const Snapshot = () => {
    const [allJobs, setAllJobs] = useState(0);
    const [eligibleJobs, setEligibleJobs] = useState(0);
    const [appliedJobs, setAppliedJobs] = useState(0);

    useEffect(() => {
        const fetch = async () => {
            const appliedJobsDetails = await axios.get('/appliedjobs');
            setAppliedJobs(appliedJobsDetails.data.length);

            const eligibleJobsDetails = await axios.get('/eligiblejobs');
            setEligibleJobs(eligibleJobsDetails.data.length);

            const allJobsDetails = await axios.get('/appliedjobs');
            setAllJobs(allJobsDetails.data.length);
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
