import React from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';

const NavBar = () => {
    const [isOpen, setisOpen] = React.useState(false);
    const navigate = useNavigate();

    function handleClick() {
        setisOpen(!isOpen);
    }

    const handleLogoClick = (e) => {
        e.preventDefault();
        // Navigate to home and force a page refresh to restart the video
        window.location.href = '/';
    }

    return (
        <>
            <nav className="fixed top-0 w-full z-30 shadow-lg h-20 md:h-24 bg-white" style={{fontFamily: 'Lufga'}}>
                <div className="flex flex-row justify-between items-center h-full px-4">
                    <div className="flex flex-row items-center">
                        <a href="/" onClick={handleLogoClick} className="block">
                            <img src={logo} alt="Naatscorp Logo" className="h-12 md:h-16" />
                        </a>
                    </div>
                    <div className="hidden lg:flex items-center space-x-4">
                        <NavLinks />
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button className="p-2 rounded-lg text-blue-900" onClick={handleClick}>
                            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                {isOpen && (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                )}
                                {!isOpen && (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile menu */}
                    <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${isOpen ? "block" : "hidden"}`}>
                        <div className='flex flex-col space-y-6'>
                            <NavLinks />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;