// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { IoHomeOutline, IoMailOutline, IoDocumentTextOutline, IoPersonOutline, IoSettingsOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}> &larr; </button>
            <ul className="sidebar-menu">
                <li><IoHomeOutline /> Home</li>
                <li><IoMailOutline /> Messages <span className="notification-count">1</span></li>
                <li><IoDocumentTextOutline /> Applied</li>
                <li><IoPersonOutline /> Profile</li>
                <li className="active"><IoSettingsOutline /> Settings</li>
                <li><IoHelpCircleOutline /> Help Center</li>
            </ul>
            <div className="logout">
                <FiLogOut /> Log out
            </div>
        </div>
    );
};

export default Sidebar;
