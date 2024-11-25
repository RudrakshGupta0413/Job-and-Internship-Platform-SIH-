import React, { useState } from 'react';
import './PagesNavbar.css';
import Logo from '../../images/Logo.png';
import { HiBars3 } from 'react-icons/hi2';
import { IoBookmarkOutline, IoNotificationsOutline, IoSearch } from 'react-icons/io5';
import NotificationPopup from '../NotificationPopUp/NotificationPopUp';
// import Sidebar from "../Sidebar/Sidebar"

const PagesNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={Logo} alt='logo' />
                </div>
                <div className="navbar-right">
                    <a><IoSearch className="search-icon" /></a>
                    <a onClick={toggleNotification}><IoNotificationsOutline className="notification-icon" /></a>
                    <a><IoBookmarkOutline className="saved-icon" /></a>
                    <a><HiBars3 className="hamburger-icon" onClick={toggleSidebar} /></a>
                </div>
                {isNotificationOpen && <NotificationPopup />}
            </nav>
            {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
        </>
    );
};

export default PagesNavbar;
