import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import './RecomJobCard.css';
import companyLogo from '../../images/Google.png';
import { useNavigate } from 'react-router-dom';

function RecomJobCard({ title, company, location, salary, tags, type, posted, colorClass }) {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate('/jobdetails');
    }

    const handleCompanyProfile = () => {
        navigate('/companyProfile')
    }
    
    return (
        <div className='RecomCard'>
            <div className={`upperContainer ${colorClass}`}>
                <div className='mainHeader'>
                    <div className="jobCardHeader">
                        <h3>{title}</h3>
                        <button className="bookmarkButton"><CiBookmark /></button>
                    </div>
                    <div className='jobType'>
                        <p>{type}</p>
                    </div>
                </div>
                <div className='centerContainer'>
                    <div className='middleConatiner'>
                        <div className="companyInfo">
                            <img src={companyLogo} alt={`${company} logo`} onClick={handleCompanyProfile} className="companyLogo" />
                            <div className='companyData'>
                                {/* <h4>{company}</h4> */}
                                <div className='data'>
                                    <p className="location">
                                        <FaMapMarkerAlt /> {location}
                                    </p>
                                    <p className="postedDate">
                                        <FaClock /> Posted {posted}
                                    </p>
                                </div>
                                <div className='desc'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam aliquam maxime ut, nesciunt ab iste sapiente atque, eveniet nihil laudantium repudiandae reiciendis alias in numquam iusto dolore, impedit voluptas.
                                </div>
                            </div>
                        </div>
                        <div className="tags">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className='lowerContainer'>
                        <div className='innerContainer'>
                            <p className="salary">Rs {salary}</p>
                            <p className='salaryPer'>per month</p>
                        </div>
                        <button className="viewDetails" onClick={handleViewDetails}>View Details</button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default RecomJobCard;
