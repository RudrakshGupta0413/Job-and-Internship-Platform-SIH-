import React from 'react';
import './JobCardsSection.css';
import SmallJobCards from '../SmallJobCards/SmallJobCards';

const JobCardsSection = () => {

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

    return (
        <div className="job-cards">
            {jobData.map((job, index) => (
                <SmallJobCards
                    key={index}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    salary={job.salary}
                    tags={job.tags}
                    type={job.type}
                    posted={job.posted}
                    colorClass={job.colorClass}
                />
            ))}
        </div>
    );
}

export default JobCardsSection;
