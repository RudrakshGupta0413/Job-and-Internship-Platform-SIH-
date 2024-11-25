import React from 'react';
import './CompanyInfo.css';
import { FiCalendar, FiClock } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube  } from "react-icons/fa";

const CompanyInfo = () => {
    return (
        <>
            <div className="company-info">
                <div className='company-info1'>
                    <div className="info-box">
                        <FiCalendar className='info-logos' />
                        <h4>Founded In:</h4>
                        <p>14 June,2020</p>
                    </div>
                    <div className="info-box">
                        <FiClock className='info-logos' />
                        <h4>Organization Type</h4>
                        <p>Private Company</p>
                    </div>
                </div>
                <div className='company-info2'>
                    <div className="info-box">
                        <GoPeople className='info-logos' />
                        <h4>Team Size:</h4>
                        <p>120-300 Candidates</p>
                    </div>
                    <div className="info-box">
                        <BsEnvelope className='info-logos' />
                        <h4>Industry Type:</h4>
                        <p>Technology</p>
                    </div>
                </div>
            </div>
            <div className='social-info'>
                <p>Follow us on:</p>
                <div className='social-icons'>
                    <FaFacebookF className='facebook' />
                    <FaTwitter className='twitter'/>
                    <FaInstagram  className='instagram'/> 
                    <FaYoutube className='youtube' />
                </div>
            </div>
        </>



    );
};

export default CompanyInfo;
