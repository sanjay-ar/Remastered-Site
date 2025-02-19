import React from 'react';
import { useTheme } from '../context/ThemeContext';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import '../styles/AnimatedBackground.css';

const Contact = () => {
    const { isDarkMode } = useTheme();

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className={`flex justify-center items-center mt-8 w-full py-12 lg:py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} style={{fontFamily: 'Gotham'}}>
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail}>
                        <div className={`w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl ${
                            isDarkMode ? 'bg-gray-800' : 'bg-white'
                        }`}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        First Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1d489a] focus:ring-[#1d489a] ${
                                            isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                                        }`}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Last Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1d489a] focus:ring-[#1d489a] ${
                                            isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                                        }`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1d489a] focus:ring-[#1d489a] ${
                                        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                                    }`}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Phone*
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1d489a] focus:ring-[#1d489a] ${
                                        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                                    }`}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Message*
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    required
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1d489a] focus:ring-[#1d489a] ${
                                        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                                    }`}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1d489a] hover:bg-[#153672] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d489a] transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    <div className={`w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto rounded-2xl bg-[#1d489a]`}>
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl text-white">Office Address</h2>
                                    <p className="text-white/90">MGC, Door No 9, 277 Arumugapalayam, Palayam Rd, Sarcarsamakulam, Tamil Nadu 641107</p>
                                </div>
                            </div>
                    
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-2xl text-white">Call Us</h2>
                                    <p className="text-white/90">phone: +91 8590001808</p>
                                
                                    <div className='mt-5'>
                                        <h2 className="text-2xl text-white">Send an E-mail</h2>
                                        <p className="text-white/90">Projects@naatscorp.com</p>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a 
                                    href="https://www.linkedin.com/company/naatscorp-private-limited/posts/?feedView=all" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="rounded-full flex justify-center bg-white h-8 text-[#1d489a] w-8 mx-1 text-center pt-1 hover:bg-opacity-90 transition-all"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact; 