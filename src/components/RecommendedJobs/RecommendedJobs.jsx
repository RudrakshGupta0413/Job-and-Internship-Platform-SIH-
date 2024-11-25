import React from 'react';
import './RecommendedJobs.css';
import RecomJobCard from '../RecomJobCard/RecomJobCard';

function RecommendedJobs() {
  const jobs = [
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
      title: "Technical Support Specialist",
      company: "Google Inc.",
      location: "New Delhi, India",
      salary: "10,000",
      tags: ["Part-time", "Senior level", "Distant"],
      type: "Part-time",
      posted: "2 days ago",
      companyLogo: "/path/to/company-logo2.jpg",
    },
    {
        title: "Technical Support Specialist",
        company: "Google Inc.",
        location: "New Delhi, India",
        salary: "10,000",
        tags: ["Part-time", "Senior level", "Distant"],
        type: "Part-time",
        posted: "2 days ago",
        companyLogo: "/path/to/company-logo2.jpg",
      },
      {
        title: "Technical Support Specialist",
        company: "Google Inc.",
        location: "New Delhi, India",
        salary: "10,000",
        tags: ["Part-time", "Senior level", "Distant"],
        type: "Part-time",
        posted: "2 days ago",
        companyLogo: "/path/to/company-logo2.jpg",
      },
      {
        title: "Technical Support Specialist",
        company: "Google Inc.",
        location: "New Delhi, India",
        salary: "10,000",
        tags: ["Part-time", "Senior level", "Distant"],
        type: "Part-time",
        posted: "2 days ago",
        companyLogo: "/path/to/company-logo2.jpg",
      },
      {
        title: "Technical Support Specialist",
        company: "Google Inc.",
        location: "New Delhi, India",
        salary: "10,000",
        tags: ["Part-time", "Senior level", "Distant"],
        type: "Part-time",
        posted: "2 days ago",
        companyLogo: "/path/to/company-logo2.jpg",
      },
      
    // Add more job objects as needed
  ];

  const colors = ['color-pink', 'color-purple', 'color-green'];

  return (
    <div className="featured-jobs">
    <h2>Featured Jobs</h2>
    <p>Choose jobs from the top employers and apply for the same.</p>
    <div className="job-cards-container">
      {jobs.map((job, index) => (
        <RecomJobCard
          key={index}
          {...job}
          colorClass={colors[index % colors.length]}
        />
      ))}
    </div>
    <a href="#" className="view-all">View all</a>
  </div>
  );
}

export default RecommendedJobs;
