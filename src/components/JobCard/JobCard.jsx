import React from 'react';
import { CiBookmark } from 'react-icons/ci';       // Bookmark icon
import { FaMapMarkerAlt } from 'react-icons/fa';   // Location icon
import { FaClock } from 'react-icons/fa';          // Clock icon
import './JobCard.css';
import companyLogo from '../../images/Google.png';

function JobCard({ title, company, location, salary, tags, type, posted, colorClass }) {
    return (
        <div className='job-card'>
            <div className={`upper-cnt ${colorClass}`}>
                <div className="job-card-header">
                    <h3>{title}</h3>
                    <button className="bookmark-button"><CiBookmark /></button>
                </div>
                <div className='job-type'>
                    <p>{type}</p>
                </div>

                <div className="company-content">
                    <img src={companyLogo} alt={`${company} logo`} className="company-logo" />
                    <div className='company-data'>
                        <h4>{company}</h4>
                        <p className="location">
                            <FaMapMarkerAlt /> {location}
                        </p>
                        <p className="posted-date">
                            <FaClock /> Posted {posted}
                        </p>
                    </div>
                </div>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className='lower-cnt'>
                <div className='inner-cnt'>
                    <p className="salary">Rs {salary}</p>
                    <p className='salper'>per month</p>
                </div>
                <button className="view-details">View Details</button>
            </div>

        </div>
    );
}

export default JobCard;
