import React from 'react';
import './JobSearchBar.css';

const JobSearchBar = () => {
  return (
    <div className="job-search-bar">
      <input type="text" className='input-one' placeholder="Enter Job title" />
      <hr />
      <input type="text" className='input-one' placeholder="Enter location" />
      <hr />
      <input type="text" className='input-one' placeholder="Years of experience" />
      <button>Search</button>
    </div>
  );
};

export default JobSearchBar;
