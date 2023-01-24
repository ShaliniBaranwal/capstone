import React from 'react'
import './JobListing.css'
import Button from '@mui/material/Button'

function JobListing ({response})  {
    return (
        // <div key={job._id}>
            <div>
            <h3>Job Listing</h3>
            <div className='jobslisting'>
                <div>
                    <span>Job Id</span>
                    <Button className="apply-button" variant="outlined">Apply</Button>
                </div>
                <div class="joblisting-details">
                    <p className='joblisting-details-list'>location</p>
                    <p className='joblisting-details-list'>job.jobType</p>
                    <p className='joblisting-details-list'>job.salary</p>
                </div>
            </div>
        </div>
    )
}

export default JobListing