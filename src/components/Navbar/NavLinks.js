import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <>
            <HashLink className={`px-8 text-xl font-extrabold ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-500 hover:text-blue-900'}`} smooth to="/#about">
                About
            </HashLink>
            <HashLink className={`px-8 text-xl font-extrabold ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-500 hover:text-blue-900'}`} smooth to="/#Verticals">
                Services
            </HashLink>
            <HashLink className={`px-8 text-xl font-extrabold ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-500 hover:text-blue-900'}`} smooth to="/#portfolio">
                Portfolio
            </HashLink>
            <HashLink className={`px-8 text-xl font-extrabold ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-500 hover:text-blue-900'}`} to="/gallery">
                Gallery
            </HashLink>
            <HashLink className={`px-8 text-xl font-extrabold ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-500 hover:text-blue-900'}`} to="/contact#contact">
                Contact Us
            </HashLink>
            <a 
                href="https://www.linkedin.com/company/naatscorp-private-limited/jobs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`px-8 text-xl font-extrabold ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-500 hover:text-blue-900'}`}
            >
                Apply
            </a>
            <Link 
                to="/get-demo" 
                className="shiny-button-blue text-xl"
            >
                <span>Get Demo</span>
            </Link>
        </>
    )
}

export default NavLinks;
