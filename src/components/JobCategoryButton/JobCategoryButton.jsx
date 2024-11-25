import React from 'react';
import './JobCategoryButton.css'

const categories = [
  'Easy Apply', 'Part-Time', 'Customer Service', 'Data Analyst', 
  'Delivery Driver', 'Engineering', 'Medical', 'Project Manager', 
  'Sales', 'Warehouse', 'Welder', 'IT'
];

function JobCategoryButtons() {
  return (
    <div className="job-category-buttons">
      {categories.map((category, index) => (
        <button key={index} className="category-button">{category}</button>
      ))}
    </div>
  );
}

export default JobCategoryButtons;
