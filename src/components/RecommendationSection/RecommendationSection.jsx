import React, { useState } from 'react';
import './RecommendationSection.css';
import RecomJobCard from '../RecomJobCard/RecomJobCard';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const RecommendationSection = () => {
  const [activeTab, setActiveTab] = useState('internship');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const jobData = [
    {
      title: "UX/UI Design",
      company: "Capital1",
      location: "New York, NY",
      salary: "10,000",
      tags: ["Part-time", "Senior level", "Distant"],
      type: "Job",
      posted: "2 days ago",
      companyLogo: "/path/to/company-logo2.jpg",
    },
    {
      title: "UX/UI Design",
      company: "Capital1",
      location: "New York, NY",
      salary: "10,000",
      tags: ["Part-time", "Senior level", "Distant"],
      type: "Job",
      posted: "2 days ago",
      companyLogo: "/path/to/company-logo2.jpg",
    },
    {
      title: "UX/UI Design",
      company: "Capital1",
      location: "New York, NY",
      salary: "10,000",
      tags: ["Part-time", "Senior level", "Distant"],
      type: "Job",
      posted: "2 days ago",
      companyLogo: "/path/to/company-logo2.jpg",
    },
    {
      title: "UX/UI Design",
      company: "Capital1",
      location: "New York, NY",
      salary: "10,000",
      tags: ["Part-time", "Senior level", "Distant"],
      type: "Job",
      posted: "2 days ago",
      companyLogo: "/path/to/company-logo2.jpg",
    },
  ];

  const internshipData = [
    {
      title: "UX/UI Design",
      company: "Capital1",
      location: "New York, NY",
      salary: "10,000",
      tags: ["Part-time", "Senior level", "Distant"],
      type: "Internship",
      posted: "2 days ago",
      companyLogo: "/path/to/company-logo2.jpg",
    },
    {
      title: "UX/UI Design",
      company: "Capital1",
      location: "New York, NY",
      salary: "10,000",
      tags: ["Part-time", "Senior level", "Distant"],
      type: "Internship",
      posted: "2 days ago",
      companyLogo: "/path/to/company-logo2.jpg",
    },
    {
      title: "UX/UI Design",
      company: "Capital1",
      location: "New York, NY",
      salary: "10,000",
      tags: ["Part-time", "Senior level", "Distant"],
      type: "Internship",
      posted: "2 days ago",
      companyLogo: "/path/to/company-logo2.jpg",
    },
    {
      title: "UX/UI Design",
      company: "Capital1",
      location: "New York, NY",
      salary: "10,000",
      tags: ["Part-time", "Senior level", "Distant"],
      type: "Internship",
      posted: "2 days ago",
      companyLogo: "/path/to/company-logo2.jpg",
    },
    {
      title: "UX/UI Design",
      company: "Capital1",
      location: "New York, NY",
      salary: "10,000",
      tags: ["Part-time", "Senior level", "Distant"],
      type: "Internship",
      posted: "2 days ago",
      companyLogo: "/path/to/company-logo2.jpg",
    },
  ];

  return (
    <div className="recommendation-section">
      <div className="tabs">
        <button
          onClick={() => handleTabClick('internship')}
          className={activeTab === 'internship' ? 'active' : ''}
        >
          Internship
        </button>
        <button
          onClick={() => handleTabClick('jobs')}
          className={activeTab === 'jobs' ? 'active' : ''}
        >
          Jobs
        </button>
      </div>
      <div className='heading2'>
        <h2>Recommended</h2>
        <FaBarsStaggered onClick={togglePopup} className="popup-icon" />
      </div>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <IoClose className="close-icon" onClick={togglePopup} />
            <div className="popup-option">Newest First</div>
            <div className="popup-option">Oldest First</div>
          </div>
        </div>
      )}
      <div className="recommendations-container">
        <div className="recommendations">
          {activeTab === 'internship' &&
            internshipData.map((data, index) => (
              <RecomJobCard key={index} {...data} />
            ))
          }
          {activeTab === 'jobs' &&
            jobData.map((data, index) => (
              <RecomJobCard key={index} {...data} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RecommendationSection;
