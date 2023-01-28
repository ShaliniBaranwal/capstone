import React, { useContext } from 'react';
import './MyApplications.css';
import {
    shortlistedContext,
    interviewingContext,
    rejectedContext,
    offeredContext
} from '../Dashboard/Dashboard';

function MyApplications() {
    const shortlisted = useContext(shortlistedContext);
    const interviewing = useContext(interviewingContext);
    const rejected = useContext(rejectedContext);
    const offered = useContext(offeredContext);

    return (
        <div className="myapp-main">
            <h3>My Applications</h3>
            <div className="myapp">
                <div className="myapp-shortlisted">
                    <p>Shortlisted</p>
                    <p>{shortlisted}</p>
                </div>

                <div className="myapp-interviewing">
                    <p>Interviewing</p>
                    <p>{interviewing}</p>
                </div>

                <div className="myapp-rejected">
                    <p>Rejected</p>
                    <p>{rejected}</p>
                </div>

                <div className="myapp-offerRecieved">
                    <p>Offer Received</p>
                    <p>{offered}</p>
                </div>
            </div>
        </div>
    );
}

export default MyApplications;
