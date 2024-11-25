import React, { useState } from 'react';
import './JobDescription.css';
import companyLG from "../../images/Google.png";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoCalendarClearOutline, IoPeopleOutline } from "react-icons/io5";

const JobDescription = () => {
    const [activeTab, setActiveTab] = useState('description');

    const renderContent = () => {
        return (
            <>
                {(activeTab === 'description' || activeTab === 'overview') && (
                    <>
                        <h3>Job Description</h3>
                        <h4><strong>What will make your journey with us unique?</strong></h4>
                        <ul>
                            <li>A supportive manager who cares about your well-being and is invested in your professional growth.</li>
                            <li>A culture of continuous learning with clear targets and feedback.</li>
                            <li>A global company with over 2600 employees located in more than 26 countries, including offices in 3 countries.</li>
                        </ul>

                    </>
                )}
                {(activeTab === 'description' || activeTab === 'requirement') && (
                    <>
                        <h3>Requirement</h3>
                        <h4><strong>What will you do</strong></h4>
                        <p>As a UX Designer on our team, you’ll craft user experiences by designing essential features and projects. You’ll collaborate closely with cross-functional teams, applying user-centered principles to enhance usability. Your role will drive innovative, impactful design, ensuring seamless, intuitive interactions across our products.</p>
                        <h4><strong>What You'll Bring</strong></h4>
                        <ul>
                            <li>Showcase proficiency in collaborative design environments.</li>
                            <li>Demonstrated ability to work independently, think critically, and maintain meticulous attention to detail.</li>
                            <li>Solid grasp of interactive elements, micro-interactions, and animations, contributing to a seamless user experience.</li>
                            <li>Clear understanding of the series UX lifecycle, coupled with a track record of designing successful apps and products.</li>
                            <li>Deep passion for digital product development and  an unwavering commitment to achieving excellence.</li>
                        </ul>
                    </>
                )}
                {(activeTab === 'description' || activeTab === 'benefit') && (
                    <>
                        <h3>Benefit</h3>
                        <p>Details about the benefits offered by the company...</p>
                    </>
                )}
                {activeTab === 'description' && (
                    <>
                        <h3>Overview</h3>
                        <p>General overview of the job and company...</p>
                    </>
                )}
            </>
        );
    };

    return (
        <div className="job-description">
            <div className="header">
                <div className='jobTitleHeader1'>
                    <div className='innerTitle1'>
                        <img src={companyLG} alt="Company Logo" className="company-logo" />
                        <h2>Google</h2>
                    </div>
                    <FaRegBookmark />
                </div>

                <div className='jobTitleHeader2'>
                    <div className="job-title-section">
                        <h2>UI/UX Designer</h2>
                        <p>New York, NY (Hybrid)</p>
                    </div>
                    <button className="apply-btn">Apply</button>
                </div>
            </div>

            <div className='applicants-section'>

            </div>

            <div className="job-summary">
                <div className="job-info">
                    <div className="info-item">
                        <IoPeopleOutline className="icon" />
                        <p>No. of Applicants</p>
                    </div>
                    <div className="info-item">
                        <MdOutlineMail className="icon" />
                        <p>Internship (Part-Time)</p>
                    </div>
                    <div className="info-item">
                        <IoCalendarClearOutline className="icon" />
                        <p>4 months</p>
                    </div>
                </div>
                <div className='additional-info'>
                    <p>Where you'll do it: Figma</p>
                    <p>The Interview Process: It will have 2 stages that include a 45 min HR chat 1h Cultural/Technical chat.</p>
                    <p>Tools: Figma</p>
                    <p>Reporting to: Design Manager, Bruno Mota</p>
                    <p>Your team: You will mainly be part of a UX Designer's team...</p>
                </div>

            </div>
            <div className="descriptionTabs">
                <button onClick={() => setActiveTab('description')} className={activeTab === 'description' ? 'active' : ''}>Job Description</button>
                <button onClick={() => setActiveTab('requirement')} className={activeTab === 'requirement' ? 'active' : ''}>Requirement</button>
                <button onClick={() => setActiveTab('benefit')} className={activeTab === 'benefit' ? 'active' : ''}>Benefit</button>
                <button onClick={() => setActiveTab('overview')} className={activeTab === 'overview' ? 'active' : ''}>Overview</button>
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
}

export default JobDescription;
