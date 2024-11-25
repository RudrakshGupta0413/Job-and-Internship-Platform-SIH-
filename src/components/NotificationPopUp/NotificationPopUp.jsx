import React from 'react';
import './NotificationPopUp.css';
import Face1 from "../../images/face1.jpeg";
import Face2 from "../../images/face2.jpeg";
import Face3 from "../../images/face3.jpeg";

const NotificationPopup = () => {
    return (
        <div className="notification-popup">
            <div className="notification-header">
                <span>Notifications</span>
                <a className="mark-all-read">Mark all as read</a>
            </div>
            <div className="notification-item">
                <img src={Face1} alt="Jan Mayer" />
                <div className='details-info'>
                    <p><span className='name'>Jan Mayer </span>invited you to interview with Nomad</p>
                    <button className='new' disabled="true">New</button>
                    <span className="time">12 mins ago</span>
                </div>
            </div>
            <hr />
            <div className="notification-item">
                <img src={Face2} alt="Jana Alicia" />
                <div className='details-info'>
                    <p><span className='name'>Jana Alicia</span> from Udacity updated your job applications status</p>
                    <button className='shortlisted' disabled="true">Shortlisted</button>
                    <span className="time">3 days ago</span>
                </div>
            </div>
            <hr />
            <div className="notification-item">
                <img src={Face3} alt="Jana Alicia" />
                <div className='details-info'>
                    <p><span className='name'>Jennet Sweeny</span> from Udacity updated your job applications status</p>
                     <button className='shortlisted' disabled="true">Shortlisted</button>
                    <span className="time">3 days ago</span>
                </div>
            </div>
            {/* <div className="notification-item">
                <img src="path_to_image" alt="Ally Wales" />
                <div>
                    <p>Ally Wales from Digital Ocean sent you an interview invitation</p>
                    <div className="interview-details">
                        <p>Interview - Jake Gyll</p>
                        <p>Social Media Manager Role</p>
                        <p>Date: Mon, 20 July 2021</p>
                        <p>Time: 12 PM - 12:30 PM</p>
                        <p>Jake Gyll (jakegyll@gmail.com)</p>
                    </div>
                    <span className="time">14 July 2021 - 3:26 PM</span>
                </div>
            </div> */}
        </div>
    );
};

export default NotificationPopup;
