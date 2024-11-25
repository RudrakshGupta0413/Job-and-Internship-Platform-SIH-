import React from 'react';
import { FaPaintBrush, FaMusic, FaDesktop, FaRegImage, FaRegEdit, FaVideo, FaTools, FaTshirt } from 'react-icons/fa';
import './PopularCategory.css';

const categories = [
  { icon: <FaPaintBrush />, title: "Graphics & Design", positions: 357 },
  { icon: <FaDesktop />, title: "UI Designing", positions: 312 },
  { icon: <FaRegEdit />, title: "UX Designing", positions: 297 },
  { icon: <FaVideo />, title: "Video & Animation", positions: 247 },
  { icon: <FaMusic />, title: "Music & Audio", positions: 204 },
  { icon: <FaRegImage />, title: "Interior Designing", positions: 167 },
  { icon: <FaTools />, title: "Product Designing", positions: 125 },
  { icon: <FaTshirt />, title: "Fashion Designing", positions: 57 },
];

const PopularCategory = () => {
  return (
    <section className="popular-category">
      <div className="section-header">
        <h2>Popular Category</h2>
        <a href="#view-all" className="view-all-link">View All &rarr;</a>
      </div>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="icon">{category.icon}</div>
            <div className='popular-content'>
              <h3>{category.title}</h3>
              <p>{category.positions} Open positions</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategory;
