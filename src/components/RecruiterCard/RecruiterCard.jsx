import React from 'react';
import './RecruiterCard.css';
import ProfilePic from "../../images/face1.jpeg"

const RecruiterCard = () => {
    return (
        <div className="recruiter-card">
            <div className='recruiter-main'>
                <img src={ProfilePic} alt='profile' className="recruiter-image" />
                <h3>Susan Jeans</h3>
            </div>

            <div className='recruiter-middle'>
                <button disabled="true">Hiring</button>
                <p className='rating'>⭐ 3.8</p>
            </div>

            <div className='recruiter-below'>
                <p className='role'>Talent Acquistion Manager, Google</p>
                <p className='position'>Recruiter For Position At Google</p>
            </div>
            <hr />
            <div className="recruiter-actions">
                <button className='message'>Message</button>
                <button className='contact'>Contact</button>
            </div>
        </div>
    );
};

export default RecruiterCard;
