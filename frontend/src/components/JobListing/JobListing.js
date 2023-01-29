import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import axios from 'axios';

function JobListing() {
    const [jobs, setJobs] = useState([]);
    const [applied, setApplied] = useState([]);

    useEffect(() => {
        const fetchJobData = async () => {
            const response = await axios.get('/eligiblejobs');
            const responseForApplied = await axios.get('/appliedjobs');

            setJobs(response.data);
            setApplied(responseForApplied.data);
        };

        fetchJobData();
    }, []);

    const fetchDataForJob = (job) => {
        return applied.map((applied) => applied.jobCode).includes(job.jobCode);
    };

    return (
        <>
            {jobs.map((job) => {
                return (
                    <Job
                        id={job.id}
                        jobCode={job.jobCode}
                        jobTitle={job.jobTitle}
                        applied={fetchDataForJob(job) ? true : false}
                        location={job.location}
                        jobType={job.jobType}
                        salary={job.salary}
                        companyName={job.companyName}
                        jobDescription={job.jobDescription}
                    />
                );
            })}
        </>
    );
}

export default JobListing;
