import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import './SmallJobCards.css';
import companyLogo from '../../images/Google.png';

function SmallJobCards({ title, company, location, salary, tags, type, posted, colorClass }) {
    return (
        <div className='jobCardContainer'>
            <div className={`cardUpperSection ${colorClass}`}>
                <div className='cardHeaderSection'>
                    <div className="titleBookmarkSection">
                        <h3>{title}</h3>
                        <button className="bookmarkIcon"><CiBookmark /></button>
                    </div>
                    <div className='jobTypeLabel'>
                        <p>{type}</p>
                    </div>
                </div>
                <div className='cardContentSection'>
                    <div className='companySection'>
                        <div className="companyDetails">
                            <img src={companyLogo} alt={`${company} logo`} className="companyImage" />
                            <div className='companyText'>
                                <div className='locationPosted'>
                                    <p className="locationText">
                                        <FaMapMarkerAlt /> {location}
                                    </p>
                                    <p className="postedDateText">
                                        <FaClock /> Posted {posted}
                                    </p>
                                </div>
                                <div className="skillTags">
                                    {tags.map((tag, index) => (
                                        <span key={index} className="skillTag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='salaryActionSection'>
                        <div className='salaryInfo'>
                            <p className="salaryAmount">Rs {salary}</p>
                            <p className='salaryFrequency'>per month</p>
                        </div>
                        <button className="detailsButton">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmallJobCards;
