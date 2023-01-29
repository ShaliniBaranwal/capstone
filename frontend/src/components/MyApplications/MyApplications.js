import React, { useContext } from 'react';
import './MyApplications.css';
import { Link } from 'react-router-dom';
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
                <div className="myapp-jobs-information">
                    <div className="image">
                        <div></div>
                    </div>

                    <div className="jobs-info">
                        <p className="job-type-name">Shortlisted</p>
                        <p className="job-type-count">{shortlisted}</p>
                    </div>

                    <Link to="/shortlisted">
                        <div className="arrow"></div>
                    </Link>
                </div>
                
                <div className="myapp-jobs-information">
                    <div className="image">
                        <div></div>
                    </div>

                    <div className="jobs-info">
                        <p className="job-type-name">Interviewing</p>
                        <p className="job-type-count">{interviewing}</p>
                    </div>

                    <Link to="/interviewing">
                        <div className="arrow"></div>
                    </Link>
                </div>
                
                <div className="myapp-jobs-information">
                    <div className="image">
                        <div></div>
                    </div>

                    <div className="jobs-info">
                        <p className="job-type-name">Rejected</p>
                        <p className="job-type-count">{rejected}</p>
                    </div>

                    <Link to="/rejected">
                        <div className="arrow"></div>
                    </Link>
                </div>
                
                <div className="myapp-jobs-information">
                    <div className="image">
                        <div></div>
                    </div>

                    <div className="jobs-info">
                        <p className="job-type-name">Offer Received</p>
                        <p className="job-type-count">{offered}</p>
                    </div>

                    <Link to="/offer">
                        <div className="arrow"></div>
                    </Link>
                </div>
                {/* <Link to="/Shortlisted"><div className="myapp-shortlisted">
                    <div className="arrow"><p>Shortlisted</p>
                        <p>{shortlisted}</p>
                    </div></div> </Link>

                <Link to="/Interviewing"><div className="myapp-interviewing">
                    <div className="arrow">   <p>Interviewing</p>
                        <p>{interviewing}</p>
                    </div></div> </Link>

                <Link to="/Rejected"><div className="myapp-rejected">
                    <div className="arrow"><p>Rejected</p>
                        <p>{rejected}</p>
                    </div></div></Link>

                <Link to="/Offer"> <div className="myapp-offerRecieved">
                    <div className="arrow"><p>Offer Received</p>
                        <p>{offered}</p>
                    </div></div></Link> */}
            </div>
        </div>
    );
}

export default MyApplications;
