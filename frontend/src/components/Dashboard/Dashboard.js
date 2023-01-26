import React, { useEffect, useState } from 'react'
import Snapshot from '../Snapshot/Snapshot'
import MyApplications from '../MyApplications/MyApplications'
import JobsForm from '../JobForm/JobForm'
import JobsListing from '../JobListing/JobListing'
import Axios from 'axios';
import './Dashboard.css'

function Dashboard() {

    const [response, setResponse] = useState([]);
    const [search, setsearch] = useState("")

    const fetchJobsDetails = async () => {
        const response = await Axios.get("http://127.0.0.1:4000/jobs");
        console.log(response.data);
        setResponse(response.data);
    };

    const handleinputChange = (e) => {
        setsearch(e.target.value)
        console.log(e.target.value);
    }

    useEffect(() => {
        fetchJobsDetails();
    }, []);

    return (
        <div className="dashboard">
            <Snapshot response={response}/>
            <MyApplications />
            <JobsForm handleinputChange={handleinputChange} />
            <JobsListing search={search} response={response} fetchJobsDetails={fetchJobsDetails} />
        </div>
    )
}
export default Dashboard
