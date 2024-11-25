import React from 'react';
import Logo from "../../images/Logo.png";
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ onSignUpClick }) {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt='logo'></img>
            </div>
            <div className="nav-links">
                <button className="search-icon">
                    <FaSearch />
                </button>
                <a href="#">Internship</a>
                <a href="#">Jobs</a>
                <a href="#">Employers</a>
                <button className="sign-up" onClick={onSignUpClick}>Sign Up</button> {/* Call onSignUpClick on button click */}
            </div>
        </nav>
    );
}

export default Navbar;
