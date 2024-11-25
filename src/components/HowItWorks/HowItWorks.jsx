import React from 'react';
import { FaUserPlus, FaFileUpload, FaSearch, FaPaperPlane } from 'react-icons/fa';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How Jobcraft works</h2>
      <div className="steps-container">
        <div className="step highlighted">
          <FaUserPlus className="icon" />
          <h3>Create account</h3>
          <p>Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
        </div>
        <div className="step">
          <FaFileUpload className="icon" />
          <h3>Upload CV/Resume</h3>
          <p>Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales.</p>
        </div>
        <div className="step">
          <FaSearch className="icon" />
          <h3>Find suitable job</h3>
          <p>Phasellus quis eleifend ex. Morbi nec fringilla nibh.</p>
        </div>
        <div className="step">
          <FaPaperPlane className="icon" />
          <h3>Apply job</h3>
          <p>Curabitur sit amet maximus ligula. Nam a nulla ante, nam sodales purus.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
