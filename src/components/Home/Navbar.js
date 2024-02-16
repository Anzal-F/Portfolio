import React from 'react';
import '../style/Navbar.css'; // Import CSS file for styling

const Navbar = () => {
    return (
        <div className="head_div">
            <header className="profile_banner">
                <h2 className="logo"><span className='logo_span'>My</span>Portfolio</h2>
                <div className="links_page">
                <nav className="navigation_bar">
                    <a href="#home" className="nav_link">Home</a>
                    <a href="#about" className="nav_link">About</a>
                    <a href="#projects" className="nav_link">Projects</a>
                    <a href="#contact" className="nav_link">Contact</a>
                </nav>

                </div>
                <button className="download_button">Download CV</button>
            </header>
        </div>
    );
}

export default Navbar;
