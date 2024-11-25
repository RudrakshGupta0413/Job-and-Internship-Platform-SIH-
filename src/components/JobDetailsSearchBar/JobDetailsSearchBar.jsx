import React from 'react';
import './JobDetailsSearchBar.css';

const JobDetailsSearchBar = () => {
  return (
    <div className="job-details-bar">
      <input type="text" className='input-one' placeholder="Enter Job title" />
      <hr />
      <input type="text" className='input-one' placeholder="Enter location" />
      <hr />
      <input type="text" placeholder="Years of experience" />
      <button>Search</button>
    </div>
  );
};

export default JobDetailsSearchBar;
