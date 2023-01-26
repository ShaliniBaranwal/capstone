import Button from '@mui/material/Button';
import './Job.css';

const Job = (props) => {
    return (
        <div className="joblist-main">
            <div className="joblist">
                <span className="jobTitle">
                    {props.jobCode} - {props.jobTitle}{' '}
                </span>

                {props.applied ? (
                    <div className='applied-status'>Applied</div>
                ) : (
                    <Button className="apply-button" variant="outlined">
                        Apply
                    </Button>
                )}
            </div>

            <div className="joblisting-details">
                <p className="location">
                    <i className="fa-solid fa-map-marker"></i> {props.location}
                </p>
                <p className="job-type">
                    <i className="fa-solid fa-clock"></i> {props.jobType}
                </p>
                <p className="salary">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    {props.salary}
                </p>
                <p className="company-name">
                    <i className="fa-regular fa-building"></i>
                    {props.companyName}
                </p>
            </div>

            <div className="joblisting-details-info">
                <p>{props.jobDescription}</p>
            </div>
        </div>
    );
};

export default Job;
