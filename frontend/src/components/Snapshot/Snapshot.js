import React, { useState } from 'react'
import "./Snapshot.css"

function Snapshot({ response }) {

    console.log(response.length);

    const [allJobs, setAllJobs] = useState(0)
    const [eligibleJobs, setEligibleJobs] = useState(0)
    const [appliedJobs, setAppliedJobs] = useState(0)

    let appliedCount = response.filter(element => {
        return element.applied === true
    });

    let count = 0;
    response.forEach(element => {
        if (element) {
            count++;
        }

    });

    return (
        <div className='snapshot-main'>
            <h3>Snapshot</h3>
            <div className='snapshot'>
                <div className='snapshot-alljobs'>
                    <p>All JObs</p>
                    <p>{count}</p>
                </div>

                <div className='snapshot-eligiblejobs'>
                    <p>Eligible Jobs</p>
                    <p>{eligibleJobs}</p>
                </div>

                <div className='snapshot-appliedjobs'>
                    <p>Applied jobs</p>
                    <p>{appliedCount.length}</p>
                </div>

            </div>
        </div>
    )
}

export default Snapshot
