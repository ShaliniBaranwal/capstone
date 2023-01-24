import React, {useState} from 'react'
import "./Snapshot.css"

const Snapshot = () => {

    const [allJobs, setAllJobs] = useState(100)
    const [eligibleJobs, setEligibleJobs] = useState(20)
    const [appliedJobs, setAppliedJobs] = useState(20)

    return (
        <div className='snapshot-main'>
            <h3>Snapshot</h3>
            <div className='snapshot'>
                <div className='snapshot-alljobs'>
                    <p>All JObs</p>
                    <p>{allJobs}</p>
                </div>

                <div className='snapshot-eligiblejobs'>
                    <p>Eligible Jobs</p>
                    <p>{eligibleJobs}</p>
                </div>

                <div className='snapshot-appliedjobs'>
                    <p>Applied jobs</p>
                    <p>{appliedJobs}</p>
                </div>

            </div>
        </div>
    )
}

export default Snapshot
