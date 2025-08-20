import React from "react";
import './header.css'; 
import ActiveNav from '../features/activeNav';

function Header (){

    const activeSection = ActiveNav();

    return (
        <nav className="navbar">
            <div class="nav-container">
                <ul class="nav-menu">
                <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
                    <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
                    <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a></li>
                    <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
                    <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Header;