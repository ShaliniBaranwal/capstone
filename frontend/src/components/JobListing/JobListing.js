import React, { useEffect, useState } from 'react';
import './JobListing.css';
import Job from '../Job/Job';
import axios from 'axios';

function JobListing() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobData = async () => {
            const response = await axios.get('/jobs');
            setJobs(response.data);
        };

        fetchJobData();
    }, []);

    return (
        // <div key={job._id}>
        <>
            {/* <Job id="1" jobCode="JPC" title="Developer" applied={true} location="Mumbai" jobType="Full time" salary={650000} companyName="TATA" jobDescription="description here bla bla bla" />
            <div className="joblist-main">
                <div className="joblist">
                    <span className="jobId">Job Id</span>
                    <span className="apply-button-text">Applied</span>
                </div>
                <div className="joblisting-details">
                    <p>location</p>
                    <p>jobType</p>
                    <p>salary</p>
                    <p>Company</p>
                </div>
                <div className="joblisting-details-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur{' '}
                    </p>
                </div>
            </div> */}

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
        </>
    );
}

export default JobListing;
