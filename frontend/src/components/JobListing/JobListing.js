import React from 'react';
import './JobListing.css';
import Button from '@mui/material/Button';

function JobListing({ response }) {
    return (
        // <div key={job._id}>
        <>
            <div className="joblist-main">
                <div className="joblist">
                    <span className="jobId">Job Id</span>
                    <Button className="apply-button" variant="outlined">
                        Apply
                    </Button>
                </div>
                <div class="joblisting-details">
                    <p>location</p>
                    <p>jobType</p>
                    <p>salary</p>
                    <p>Company</p>
                </div>
                <div class="joblisting-details-info">
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
            </div>
            <div className="joblist-main">
                <div className="joblist">
                    <span className="jobId">Job Id</span>
                    <span className="apply-button-text">Applied</span>
                </div>
                <div class="joblisting-details">
                    <p>location</p>
                    <p>jobType</p>
                    <p>salary</p>
                    <p>Company</p>
                </div>
                <div class="joblisting-details-info">
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
            </div>
        </>
    );
}

export default JobListing;
