import React from 'react';
import JobsForm from '../JobForm/JobForm';
import JobListing from '../JobListing/JobListing';
//import Axios from 'axios';

const JobsInDomain = () => {
    return (
        <div className="jobdomain">
            <JobsForm heading="Jobs in Domain" />
            <JobListing />
        </div>
    );
};

export default JobsInDomain;
