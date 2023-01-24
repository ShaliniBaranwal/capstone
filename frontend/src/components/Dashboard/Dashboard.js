import React, { useEffect, useState }  from 'react'
import Navbar from '../Navbar/Navbar'
import Snapshot from '../Snapshot/Snapshot'
import MyApplications from '../MyApplications/MyApplications'
import JobsForm from '../JobForm/JobForm'
import JobsListing from '../JobListing/JobListing'
//import Axios from 'axios';
import './Dashboard.css'

function Dashboard() {

    const [response, setResponse] = useState([]);
    const fetchJobsDetails = async () => {
   // const response = await axios.get("/jobs");
        setResponse(response.data);
    };
  
    useEffect(() => {
      fetchJobsDetails();
    }, []);
  
    return (
        <div className="dashboard">
            <Snapshot />
            <MyApplications />
            <JobsForm />
            <JobsListing />
        </div>
    )
}
export default Dashboard
