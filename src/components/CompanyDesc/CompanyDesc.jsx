import React, { useState } from 'react';
import './CompanyDesc.css';
import visionImage1 from "../../images/vision1.png"
import visionImage2 from "../../images/vision2.png"
import visionImage3 from "../../images/vision3.png"
import visionImage4 from "../../images/vision4.png"

const CompanyDesc = () => {
    const [activeTab, setActiveTab] = useState('description');

    const renderContent = () => {
        if (activeTab === 'description') {
            return (
                <>
                    <div>
                        <h2>Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec sagittis
                            auctor nisl, et congue elit volutpat sit amet. Curabitur euismod nunc in nunc facilisis, nec
                            mollis enim vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec sagittis
                            auctor nisl, et congue elit volutpat sit amet. Curabitur euismod nunc in nunc facilisis, nec
                            mollis enim vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec sagittis
                            auctor nisl, et congue elit volutpat sit amet. Curabitur euismod nunc in nunc facilisis, nec
                            mollis enim vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec sagittis
                            auctor nisl, et congue elit volutpat sit amet. Curabitur euismod nunc in nunc facilisis, nec
                            mollis enim vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec sagittis
                            auctor nisl, et congue elit volutpat sit amet. Curabitur euismod nunc in nunc facilisis, nec
                            mollis enim vehicula.
                        </p>
                    </div>
                    <div>
                        <h2>Company Benefits</h2>
                        <ul>
                            <li>Flexible working hours</li>
                            <li>Competitive salary</li>
                            <li>Health and wellness benefits</li>
                            <li>Flexible working hours</li>
                            <li>Competitive salary</li>
                            <li>Health and wellness benefits</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Company Vision</h2>
                        <p>Our vision is to build a sustainable future through technology and innovation.
                        Our vision is to build a sustainable future through technology and innovation.
                        Our vision is to build a sustainable future through technology and innovation.
                        Our vision is to build a sustainable future through technology and innovation.
                        Our vision is to build a sustainable future through technology and innovation.
                        </p>
                        <div className="vision-images">
                            <img src={visionImage1} alt="Vision 1" />
                            <img src={visionImage2} alt="Vision 2" />
                            <img src={visionImage3} alt="Vision 3" />
                            <img src={visionImage4} alt="Vision 4" />
                        </div>
                    </div>
                    <div>
                        <h2>Socials</h2>
                        <p>Follow us on LinkedIn, Twitter, and Instagram for the latest updates.</p>
                    </div>
                </>
            );
        } else if (activeTab === 'benefits') {
            return (
                <div>
                    <h2>Company Benefits</h2>
                    <ul>
                        <li>Flexible working hours</li>
                        <li>Competitive salary</li>
                        <li>Health and wellness benefits</li>
                        <li>Flexible working hours</li>
                        <li>Competitive salary</li>
                        <li>Health and wellness benefits</li>
                    </ul>
                </div>
            );
        } else if (activeTab === 'vision') {
            return (
                <div>
                    <h2>Company Vision</h2>
                    <p>Our vision is to build a sustainable future through technology and innovation.
                    Our vision is to build a sustainable future through technology and innovation.
                    Our vision is to build a sustainable future through technology and innovation.
                    Our vision is to build a sustainable future through technology and innovation.
                    Our vision is to build a sustainable future through technology and innovation.
                    </p>
                    <div className="vision-images">
                            <img src={visionImage1} alt="Vision 1" />
                            <img src={visionImage2} alt="Vision 2" />
                            <img src={visionImage3} alt="Vision 3" />
                            <img src={visionImage4} alt="Vision 4" />
                        </div>
                </div>
            );
        } else if (activeTab === 'socials') {
            return (
                <div>
                    <h2>Socials</h2>
                    <p>Follow us on LinkedIn, Twitter, and Instagram for the latest updates.</p>
                </div>
            );
        }
    };

    return (
        <div className="job-description-container">
            <div className="Jobtabs">
                <button
                    className={activeTab === 'description' ? 'active' : ''}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </button>
                <button
                    className={activeTab === 'benefits' ? 'active' : ''}
                    onClick={() => setActiveTab('benefits')}
                >
                    Company Benefits
                </button>
                <button
                    className={activeTab === 'vision' ? 'active' : ''}
                    onClick={() => setActiveTab('vision')}
                >
                    Company Vision
                </button>
                <button
                    className={activeTab === 'socials' ? 'active' : ''}
                    onClick={() => setActiveTab('socials')}
                >
                    Socials
                </button>
            </div>
            <div className="tab-content">{renderContent()}</div>
        </div>
    );
};

export default CompanyDesc;
