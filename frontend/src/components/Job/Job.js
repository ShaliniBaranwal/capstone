import Button from '@mui/material/Button';
import axios from 'axios';
import { useState, useContext } from 'react';
import './Job.css';
import {
    appliedJobsContext,
    setAppliedJobsContext,

    setInterviewingContext,
    setRejectedContext,
    setOfferedContext,
    setShortlistedContext,

    shortlistedContext,
    interviewingContext,
    rejectedContext,
    offeredContext
} from '../Dashboard/Dashboard';

const Job = (props) => {
    const setAppliedJobs = useContext(setAppliedJobsContext);
    const appliedJobs = useContext(appliedJobsContext);

    const setShortlisted = useContext(setShortlistedContext);
    const setInterviewing = useContext(setInterviewingContext);
    const setOffered = useContext(setOfferedContext);
    const setRejected = useContext(setRejectedContext);

    const shortlisted = useContext(shortlistedContext);
    const interviewing = useContext(interviewingContext);
    const offered = useContext(offeredContext);
    const rejected = useContext(rejectedContext);

    const [applied, setApplied] = useState(props.applied);

    const handleJobApply = async () => {
        const date = new Date();

        const applicationStatuses = ['interviewing', 'rejected', 'shortlisted', 'offered'];
        const applicationStatus = applicationStatuses[Math.floor(Math.random() * applicationStatuses.length)];

        switch (applicationStatus) {
            case 'interviewing':
                setInterviewing(interviewing + 1);
                break;
            
                case 'shortlisted':
                setShortlisted(shortlisted + 1);
                break;
            
                case 'rejected':
                setRejected(rejected + 1);
                break;
            
                case 'offered':
                setOffered(offered + 1);
                break;
        
            default:
                break;
        }

        await axios.post('/appliedjobs', {
            job: {
                jobID: props.id,
                jobCode: props.jobCode,
                location: props.location
            },

            appliedDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            applicationStatus: applicationStatuses[Math.floor(Math.random() * applicationStatuses.length)]
        });

        setAppliedJobs(appliedJobs + 1);

        setApplied(true);
    };

    return (
        <div className="joblist-main">
            <div className="joblist">
                <span className="jobTitle">
                    {props.jobCode} - {props.jobTitle}
                </span>

                {applied ? (
                    <div className="applied-status">Applied</div>
                ) : (
                    <Button
                        className="apply-button"
                        variant="outlined"
                        onClick={handleJobApply}
                    >
                        Apply
                    </Button>
                )}
            </div>

            <div className="joblisting-details">
                <p className="location">
                    <i className="fa-solid fa-map-marker"></i> {props.location}
                </p>
                <p className="job-type">
                    <i className="fa-solid fa-clock"></i> {props.jobType}
                </p>
                <p className="salary">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    {props.salary}
                </p>
                <p className="company-name">
                    <i className="fa-regular fa-building"></i>
                    {props.companyName}
                </p>
            </div>

            <div className="joblisting-details-info">
                <p>{props.jobDescription}</p>
            </div>
        </div>
    );
};

export default Job;
