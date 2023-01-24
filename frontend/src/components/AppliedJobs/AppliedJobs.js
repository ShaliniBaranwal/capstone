import React from 'react'
import JobsForm from '../JobForm/JobForm'
import JobsListing from '../JobListing/JobListing'

const AppliedJobs = () => {
    return (
        <div className="dashboard">
            <JobsForm />
            <JobsListing />
        </div>
    )
}

export default AppliedJobs
