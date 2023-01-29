import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../util.css';
import JobForm from '../JobForm/JobForm';

const Shortlisted = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobData = async () => {
            const response = await axios.get('/shortlisted');

            setJobs(response.data);
        };

        fetchJobData();
    }, []);

    return (
        <>
            <JobForm heading="Shortlisted" />

            <table className="job-table">
                <thead>
                    <tr>
                        <th>Job Code</th>
                        <th>Job Title</th>
                        <th>Location</th>
                        <th>Posted Date</th>
                        <th>Applied Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr>
                            <td className="job-code">{job.jobCode}</td>
                            <td>{job.jobTitle}</td>
                            <td>{job.location}</td>
                            <td>{job.postedDate}</td>
                            <td>{job.appliedDate}</td>
                            <td className="status-job-shortlisted">
                                Shortlisted
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Shortlisted;
