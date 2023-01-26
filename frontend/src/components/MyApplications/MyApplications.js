import React, { useState } from 'react'
import "./MyApplications.css"

function MyApplications() {

    const [shortlisted, setShortlisted] = useState(0)
    const [interviewing, setInterviewing] = useState(0)
    const [rejected, setRejected] = useState(0)
    const [offerRecieved, setOfferRecieved] = useState(0)

    return (
        <div className='myapp-main'>
            <h3>My Applications</h3>
            <div className='myapp'>
                <div className='myapp-shortlisted'>
                    <p>Shortlisted</p>
                    <p>{shortlisted}</p>
                </div>

                <div className='myapp-interviewing'>
                    <p>Interviewing</p>
                    <p>{interviewing}</p>
                </div>

                <div className='myapp-rejected'>
                    <p>Rejected</p>
                    <p>{rejected}</p>
                </div>

                <div className='myapp-offerRecieved'>
                    <p>Offer Received</p>
                    <p>{offerRecieved}</p>
                </div>

            </div>
        </div>
    )
}

export default MyApplications
