import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({isDarkMode, handleDarkMode}) => {
  return (
    <nav className="navbar">
        <div className="logoContainer">
            <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Shivanee-Portfolio</span>
            </Link>
        </div>
        <div className="homeContainer">
            <Link to="/" style={{textDecoration:"none"}}>
                <span className="home">Home</span>
            </Link>
        </div>
        <div className="aboutContainer">
            <Link to="/about" style={{textDecoration:"none"}}>
                <span className="about">About</span>
            </Link>
        </div>
        <div className="contactContainer">
            <Link to="/contact" style={{textDecoration:"none"}}>
                <span className="contact">Contact</span>
            </Link>
        </div>
        <div className="skillsContainer">
            <Link to="/skills" style={{textDecoration:"none"}}>
                <span className="skills">My Skills</span>
            </Link>
        </div>
        <button className="navButton" onClick={handleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    </nav>
  )
}

export default Navbar
