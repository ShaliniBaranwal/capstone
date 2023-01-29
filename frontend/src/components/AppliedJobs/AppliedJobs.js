import React, { useState, useEffect } from 'react';
import Job from '../Job/Job';
import JobForm from '../JobForm/JobForm';
import axios from 'axios';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobData = async () => {
            const response = await axios.get('/appliedjobs');
            setJobs(response.data);
        };

        fetchJobData();
    }, []);

    return (
        <>
            <JobForm heading="Applied Jobs" />
            
            <div className="applied-jobs-display-ui">
                {jobs.map((job) => (
                    <Job
                        id={job.id}
                        jobCode={job.jobCode}
                        jobTitle={job.jobTitle}
                        applied={true}
                        location={job.location}
                        jobType={job.jobType}
                        salary={job.salary}
                        companyName={job.companyName}
                        jobDescription={job.jobDescription}
                    />
                ))}
            </div>
        </>
    );
};

export default AppliedJobs;
