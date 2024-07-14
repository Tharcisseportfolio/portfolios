import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">Tharcisse</Link>
            <div className="nav-links">
                <a href='#home' className="nav-item">Home</a>
                <a href="#about" className="nav-item">About</a>
                <a href="#projects" 
                    className="nav-item">Projects</a>
                <a href="#education" className="nav-item">Education</a>
                <a href="#experience" className="nav-item">Experience</a>
                {/* <Link to="/contact" className="nav-item">Contact</Link> */}
            </div>
        </nav>
    );
}

export default Navbar;