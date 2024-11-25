import React, { useState } from 'react';
import './FilterSection.css';
import { MdArrowForwardIos } from "react-icons/md";

const FilterSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const increaseValue = () => {
    if (value < 80000) {
      setValue(value + 5000);
    }
  };

  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 5000);
    }
  }
    ;
  return (
    <div className="filter-section">
      <div className='top-group'>
        <h2>Filter</h2>
        <MdArrowForwardIos className='arrow' />
      </div>
      <div className="filter-group">
        <label className="filter-title">Salary Range</label>
        <input type="range" min="0" max="80000" value={value} onChange={handleChange} />
        <div className="slider-buttons">
          <button onClick={decreaseValue}>Min</button>
          <button onClick={increaseValue}>Max</button>
        </div>
        {/* <div>Current Value: {value}</div> */}
      </div>
      <hr />
      <div className="filter-group">
        <label className="filter-title">Job Type</label>
        <label className="checkbox-label"><input type="checkbox" defaultChecked /> All</label>
        <label className="checkbox-label"><input type="checkbox" /> Full-Time</label>
        <label className="checkbox-label"><input type="checkbox" /> Part-Time</label>
        <label className="checkbox-label"><input type="checkbox" /> Internship</label>
        <label className="checkbox-label"><input type="checkbox" /> Contract</label>
      </div>
      <hr />
      <div className="filter-group">
        <label className="filter-title">Work Mode</label>
        <label className="checkbox-label"><input type="checkbox" /> On-Site</label>
        <label className="checkbox-label"><input type="checkbox" /> Remote</label>
        <label className="checkbox-label"><input type="checkbox" /> Hybrid</label>
      </div>
      <hr />
      <div className="filter-group">
        <label className="filter-title">Job Functions</label>
        <label className="checkbox-label"><input type="checkbox" /> UI Design</label>
        <label className="checkbox-label"><input type="checkbox" /> Graphic Design</label>
        <label className="checkbox-label"><input type="checkbox" /> Product Design</label>
        <label className="checkbox-label"><input type="checkbox" /> UX Design</label>
        <label className="checkbox-label"><input type="checkbox" /> Video Editor</label>
        <label className="checkbox-label"><input type="checkbox" /> Other</label>
      </div>
      <hr />
      <div className="filter-group">
        <label className="filter-title">Experience Level</label>
        <label className="checkbox-label"><input type="checkbox" defaultChecked /> Fresher/Entry-Level</label>
        <label className="checkbox-label"><input type="checkbox" /> Junior</label>
        <label className="checkbox-label"><input type="checkbox" /> Mid-Level</label>
        <label className="checkbox-label"><input type="checkbox" /> Senior</label>
        <label className="checkbox-label"><input type="checkbox" /> Lead/Managerial</label>
        <label className="checkbox-label"><input type="checkbox" /> Director/Executive</label>
      </div>
    </div>
  );
};

export default FilterSection;
